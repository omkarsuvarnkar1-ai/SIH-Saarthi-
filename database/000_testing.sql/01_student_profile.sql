SELECT * FROM student_profiles;
SELECT * FROM industries;
SELECT industry_id, industry_name
FROM industries
ORDER BY industry_id;
SELECT
    role_id,
    industry_id,
    role_name
FROM career_roles
ORDER BY industry_id, role_id;