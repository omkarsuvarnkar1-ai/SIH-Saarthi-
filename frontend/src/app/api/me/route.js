import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import pool from "../../../lib/database";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    // No login session
    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Not logged in.",
        },
        { status: 401 }
      );
    }

    // Verify JWT
    const { payload } = await jwtVerify(token, secret);

    // Get student from database
    const result = await pool.query(
      `SELECT
        student_id,
        full_name,
        email,
        college,
        course,
        year_of_study,
        created_at
       FROM students
       WHERE student_id = $1`,
      [payload.studentId]
    );

    if (result.rows.length === 0) {
      return Response.json(
        {
          success: false,
          message: "Student not found.",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      student: result.rows[0],
    });
  } catch (error) {
    console.error("Authentication error:", error);

    return Response.json(
      {
        success: false,
        message: "Invalid or expired session.",
      },
      { status: 401 }
    );
  }
}