-- ============================================
-- STEP 2.5
-- Verification
-- ============================================

-- Check students
SELECT * FROM students;

-- Check student profiles
SELECT * FROM student_profiles;

-- Check industries
SELECT * FROM industries;

-- Check career roles
SELECT * FROM career_roles;

-- Check student skills
SELECT * FROM student_skills;

-- Count career roles
SELECT COUNT(*) AS total_career_roles
FROM career_roles;