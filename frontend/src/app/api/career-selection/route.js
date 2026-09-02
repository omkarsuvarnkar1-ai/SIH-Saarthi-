import pool from "@/lib/database";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request) {
  try {
    // =====================================================
    // GET AUTHENTICATED STUDENT
    // =====================================================

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

    let payload;

    try {
      const verified = await jwtVerify(token, secret);
      payload = verified.payload;
    } catch (error) {
      console.error("JWT verification error:", error);

      return Response.json(
        {
          success: false,
          message: "Your session is invalid or expired.",
        },
        { status: 401 }
      );
    }

    const studentId = payload.studentId;

    if (!studentId) {
      return Response.json(
        {
          success: false,
          message: "Student information not found.",
        },
        { status: 401 }
      );
    }

    // =====================================================
    // GET REQUEST DATA
    // =====================================================

    const body = await request.json();

    const {
      industry_id,
      role_id,
      career_uncertain,
    } = body;

    // =====================================================
    // VALIDATION
    // =====================================================

    if (
      career_uncertain !== true &&
      (!industry_id || !role_id)
    ) {
      return Response.json(
        {
          success: false,
          message:
            "Please select an industry and career role, or choose 'I'm not sure yet'.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // UPDATE STUDENT PROFILE
    // =====================================================

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

    // =====================================================
    // PROFILE NOT FOUND
    // =====================================================

    if (result.rows.length === 0) {
      return Response.json(
        {
          success: false,
          message: "Student profile not found.",
        },
        { status: 404 }
      );
    }

    // =====================================================
    // SUCCESS
    // =====================================================

    return Response.json({
      success: true,
      message: "Career preference saved successfully.",
      profile: result.rows[0],
    });

  } catch (error) {
    console.error("Career selection error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to save career preference.",
      },
      { status: 500 }
    );
  }
}