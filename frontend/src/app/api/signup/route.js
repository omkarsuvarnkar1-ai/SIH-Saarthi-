import pool from "../../../lib/database";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      full_name,
      email,
      password,
      college,
      course,
      year_of_study,
    } = body;

    // Check required fields
    if (
      !full_name ||
      !email ||
      !password ||
      !college ||
      !course ||
      !year_of_study
    ) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingStudent = await pool.query(
      "SELECT student_id FROM students WHERE email = $1",
      [email]
    );

    if (existingStudent.rows.length > 0) {
      return Response.json(
        {
          success: false,
          message: "An account with this email already exists.",
        },
        { status: 409 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Insert student
    const result = await pool.query(
      `INSERT INTO students
        (full_name, email, password_hash, college, course, year_of_study)
       VALUES
        ($1, $2, $3, $4, $5, $6)
       RETURNING student_id, full_name, email, college, course, year_of_study`,
      [
        full_name,
        email,
        passwordHash,
        college,
        course,
        year_of_study,
      ]
    );

    return Response.json(
      {
        success: true,
        message: "Account created successfully.",
        student: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong while creating the account.",
      },
      { status: 500 }
    );
  }
}