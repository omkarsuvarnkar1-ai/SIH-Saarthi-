import pool from "../../../lib/database";

export async function GET() {
  try {
    const result = await pool.query("SELECT current_database()");

    return Response.json({
      success: true,
      database: result.rows[0].current_database,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    return Response.json(
      {
        success: false,
        error: "Database connection failed",
      },
      { status: 500 }
    );
  }
}