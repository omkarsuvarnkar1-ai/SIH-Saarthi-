-- ============================================
-- PHASE 2: STUDENT PROFILE SYSTEM
-- ============================================

-- 1. Student Profile
CREATE TABLE student_profiles (
    profile_id SERIAL PRIMARY KEY,
    student_id INT UNIQUE NOT NULL,

    date_of_birth DATE,
    gender VARCHAR(50),

    college VARCHAR(150),
    course VARCHAR(150),
    specialization VARCHAR(150),
    year_of_study INT,

    bio TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_student_profile
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
);


-- 2. Industries
CREATE TABLE industries (
    industry_id SERIAL PRIMARY KEY,
    industry_name VARCHAR(150) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 3. Career / Job Roles
CREATE TABLE career_roles (
    role_id SERIAL PRIMARY KEY,
    industry_id INT NOT NULL,

    role_name VARCHAR(150) NOT NULL,
    description TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_role_industry
        FOREIGN KEY (industry_id)
        REFERENCES industries(industry_id)
        ON DELETE CASCADE
);


-- 4. Student Skills
CREATE TABLE student_skills (
    student_skill_id SERIAL PRIMARY KEY,

    student_id INT NOT NULL,

    skill_name VARCHAR(150) NOT NULL,

    self_level VARCHAR(50) NOT NULL
        CHECK (self_level IN ('Beginner', 'Intermediate', 'Advanced')),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_student_skill
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
);








