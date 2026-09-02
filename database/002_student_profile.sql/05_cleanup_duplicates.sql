SELECT
    industry_id,
    role_name,
    ARRAY_AGG(role_id ORDER BY role_id) AS role_ids
FROM career_roles
GROUP BY industry_id, role_name
HAVING COUNT(*) > 1
ORDER BY industry_id;

BEGIN;

DELETE FROM career_roles
WHERE role_id NOT IN (
    SELECT MIN(role_id)
    FROM career_roles
    GROUP BY industry_id, role_name
);

COMMIT;


SELECT
    industry_id,
    role_name,
    COUNT(*)
FROM career_roles
GROUP BY industry_id, role_name
ORDER BY industry_id, role_name;
