import pool from "@/lib/database";

export async function GET() {
  try {
    const industriesResult = await pool.query(`
      SELECT
        industry_id,
        industry_name
      FROM industries
      ORDER BY industry_name ASC
    `);

    const rolesResult = await pool.query(`
      SELECT
        role_id,
        industry_id,
        role_name,
        description
      FROM career_roles
      ORDER BY role_name ASC
    `);

    return Response.json({
      success: true,
      industries: industriesResult.rows,
      roles: rolesResult.rows,
    });

  } catch (error) {
    console.error("Career options API error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to load career options.",
      },
      {
        status: 500,
      }
    );
  }
}