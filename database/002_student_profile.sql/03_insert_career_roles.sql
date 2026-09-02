-- ============================================
-- STEP 2.4
-- Initial career roles
-- ============================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Software Developer',
       'Designs, develops and maintains software applications'
FROM industries
WHERE industry_name = 'Information Technology';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Data Scientist',
       'Analyzes data and develops statistical and machine learning solutions'
FROM industries
WHERE industry_name = 'Information Technology';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Machine Learning Engineer',
       'Develops and deploys machine learning systems'
FROM industries
WHERE industry_name = 'Information Technology';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Cybersecurity Analyst',
       'Protects systems, networks and information from security threats'
FROM industries
WHERE industry_name = 'Information Technology';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Financial Analyst',
       'Analyzes financial information to support business decisions'
FROM industries
WHERE industry_name = 'Finance and Banking';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Architect',
       'Designs buildings and architectural spaces'
FROM industries
WHERE industry_name = 'Architecture';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Interior Designer',
       'Designs functional and aesthetic interior environments'
FROM industries
WHERE industry_name = 'Interior Design';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Biotechnologist',
       'Applies biological processes and technologies to research and industry'
FROM industries
WHERE industry_name = 'Biotechnology';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Pharmacologist',
       'Studies drug actions, effects and development'
FROM industries
WHERE industry_name = 'Pharmaceuticals';

INSERT INTO career_roles (industry_id, role_name, description)
SELECT industry_id, 'Research Scientist',
       'Conducts scientific research and develops new knowledge'
FROM industries
WHERE industry_name = 'Research';