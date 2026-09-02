SELECT
    i.industry_id,
    i.industry_name,

    cr.role_id,
    cr.role_name,

    STRING_AGG(crs.skill_name, ', ' ORDER BY crs.skill_name) AS required_skills

FROM industries i

LEFT JOIN career_roles cr
    ON i.industry_id = cr.industry_id

LEFT JOIN career_role_skills crs
    ON cr.role_id = crs.role_id

GROUP BY
    i.industry_id,
    i.industry_name,
    cr.role_id,
    cr.role_name

ORDER BY
    i.industry_name,
    cr.role_name;