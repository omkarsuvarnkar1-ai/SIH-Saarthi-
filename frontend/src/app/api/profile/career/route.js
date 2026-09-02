import pool from "../../../../lib/database";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request) {
  try {
    // Get logged-in student's cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "You are not logged in.",
        },
        { status: 401 }
      );
    }

    // Verify JWT
    const { payload } = await jwtVerify(token, secret);

    const studentId = payload.studentId;

    // Get submitted data
    const body = await request.json();

    const {
      industry_id,
      role_id,
      career_uncertain,
    } = body;

    // Validate selection
    if (
      !career_uncertain &&
      (!industry_id || !role_id)
    ) {
      return Response.json(
        {
          success: false,
          message: "Please select an industry and career role.",
        },
        { status: 400 }
      );
    }

    // Update student profile
    const result = await pool.query(
      `
      UPDATE student_profiles
      SET
        industry_id = $1,
        role_id = $2,
        career_uncertain = $3,
        updated_at = CURRENT_TIMESTAMP
      WHERE student_id = $4
      RETURNING
        profile_id,
        student_id,
        industry_id,
        role_id,
        career_uncertain
      `,
      [
        career_uncertain ? null : industry_id,
        career_uncertain ? null : role_id,
        career_uncertain,
        studentId,
      ]
    );

    // Profile not found
    if (result.rows.length === 0) {
      return Response.json(
        {
          success: false,
          message: "Student profile not found.",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Career preferences saved successfully.",
      profile: result.rows[0],
    });
  } catch (error) {
    console.error("Career save error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while saving career preferences.",
      },
      { status: 500 }
    );
  }
}