-- =====================================================
-- SKILLNET - ASSESSMENT DATABASE SCHEMA
-- File: 01_assessment_schema.sql
-- =====================================================

-- =====================================================
-- 1. ASSESSMENT ATTEMPTS
-- =====================================================

CREATE TABLE IF NOT EXISTS assessment_attempts (
    attempt_id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'in_progress',

    CONSTRAINT fk_assessment_attempt_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_assessment_attempt_role
        FOREIGN KEY (role_id)
        REFERENCES career_roles(role_id)
        ON DELETE CASCADE,

    CONSTRAINT assessment_attempt_status_check
        CHECK (
            status IN (
                'in_progress',
                'completed',
                'abandoned'
            )
        )
);


-- =====================================================
-- 2. ASSESSMENT QUESTIONS
-- =====================================================

CREATE TABLE IF NOT EXISTS assessment_questions (
    question_id SERIAL PRIMARY KEY,

    role_id INTEGER NOT NULL,

    skill_name VARCHAR(150) NOT NULL,

    difficulty VARCHAR(20) NOT NULL,

    question_type VARCHAR(30) NOT NULL DEFAULT 'conceptual',

    question_text TEXT NOT NULL,

    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,

    correct_answer VARCHAR(1) NOT NULL,

    explanation TEXT,

    concepts_tested TEXT[],

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assessment_question_role
        FOREIGN KEY (role_id)
        REFERENCES career_roles(role_id)
        ON DELETE CASCADE,

    CONSTRAINT assessment_question_difficulty_check
        CHECK (
            difficulty IN (
                'Easy',
                'Moderate',
                'Difficult'
            )
        ),

    CONSTRAINT assessment_question_type_check
        CHECK (
            question_type IN (
                'conceptual',
                'scenario',
                'problem_solving'
            )
        ),

    CONSTRAINT assessment_question_answer_check
        CHECK (
            correct_answer IN (
                'A',
                'B',
                'C',
                'D'
            )
        )
);


-- =====================================================
-- 3. ASSESSMENT ANSWERS
-- =====================================================

CREATE TABLE IF NOT EXISTS assessment_answers (
    answer_id SERIAL PRIMARY KEY,

    attempt_id INTEGER NOT NULL,

    question_id INTEGER NOT NULL,

    selected_answer VARCHAR(1),

    is_correct BOOLEAN,

    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assessment_answer_attempt
        FOREIGN KEY (attempt_id)
        REFERENCES assessment_attempts(attempt_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_assessment_answer_question
        FOREIGN KEY (question_id)
        REFERENCES assessment_questions(question_id)
        ON DELETE CASCADE,

    CONSTRAINT assessment_answer_check
        CHECK (
            selected_answer IS NULL
            OR selected_answer IN (
                'A',
                'B',
                'C',
                'D'
            )
        ),

    CONSTRAINT unique_attempt_question
        UNIQUE (
            attempt_id,
            question_id
        )
);


-- =====================================================
-- 4. ASSESSMENT RESULTS
-- =====================================================

CREATE TABLE IF NOT EXISTS assessment_results (
    result_id SERIAL PRIMARY KEY,

    attempt_id INTEGER NOT NULL,

    student_id INTEGER NOT NULL,

    role_id INTEGER NOT NULL,

    skill_name VARCHAR(150) NOT NULL,

    questions_attempted INTEGER DEFAULT 0,

    correct_answers INTEGER DEFAULT 0,

    score_percentage NUMERIC(5,2) DEFAULT 0,

    self_level VARCHAR(20),

    assessed_level VARCHAR(20),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assessment_result_attempt
        FOREIGN KEY (attempt_id)
        REFERENCES assessment_attempts(attempt_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_assessment_result_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_assessment_result_role
        FOREIGN KEY (role_id)
        REFERENCES career_roles(role_id)
        ON DELETE CASCADE,

    CONSTRAINT assessment_result_self_level_check
        CHECK (
            self_level IS NULL
            OR self_level IN (
                'Not familiar',
                'Beginner',
                'Intermediate',
                'Advanced'
            )
        ),

    CONSTRAINT assessment_result_assessed_level_check
        CHECK (
            assessed_level IS NULL
            OR assessed_level IN (
                'Not familiar',
                'Beginner',
                'Intermediate',
                'Advanced'
            )
        )
);