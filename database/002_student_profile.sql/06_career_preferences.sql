-- =====================================================
-- 06 - Career Preferences
-- =====================================================

-- Career preference columns were added to student_profiles:
-- industry_id
-- role_id
-- career_uncertain

-- Foreign keys:
-- industry_id → industries.industry_id
-- role_id → career_roles.role_id

-- Verification query:
SELECT
    tc.constraint_name,
    kcu.column_name,
    ccu.table_name AS referenced_table,
    ccu.column_name AS referenced_column
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON tc.constraint_name = ccu.constraint_name
WHERE tc.table_name = 'student_profiles'
  AND tc.constraint_type = 'FOREIGN KEY';