import pool from "../../../lib/database";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    // Check required fields
    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        { status: 400 }
      );
    }

    // Find student
    const result = await pool.query(
      `SELECT
        student_id,
        full_name,
        email,
        password_hash,
        college,
        course,
        year_of_study
       FROM students
       WHERE email = $1`,
      [email]
    );

    // Student not found
    if (result.rows.length === 0) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    const student = result.rows[0];

    // Check password
    const passwordMatch = await bcrypt.compare(
      password,
      student.password_hash
    );

    if (!passwordMatch) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    // Create JWT
    const token = await new SignJWT({
      studentId: student.student_id,
      email: student.email,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    // Create response
    const response = Response.json({
      success: true,
      message: "Login successful.",
      student: {
        student_id: student.student_id,
        full_name: student.full_name,
        email: student.email,
        college: student.college,
        course: student.course,
        year_of_study: student.year_of_study,
      },
    });

    // Store JWT in secure HTTP-only cookie
    response.headers.append(
      "Set-Cookie",
      `auth_token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax${
        process.env.NODE_ENV === "production" ? "; Secure" : ""
      }`
    );

    return response;
  } catch (error) {
    console.error("Login error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while logging in.",
      },
      { status: 500 }
    );
  }
}