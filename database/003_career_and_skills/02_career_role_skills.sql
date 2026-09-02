-- =====================================================
-- 02 - Career Role Skills
-- =====================================================
-- Complete role -> skill mapping for all 120 career roles
--
-- Safe to run multiple times because:
-- UNIQUE (role_id, skill_name)
-- ON CONFLICT DO NOTHING
-- =====================================================


-- =====================================================
-- INFORMATION TECHNOLOGY
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (1, ARRAY[
        'Programming', 'Data Structures', 'Algorithms',
        'Object-Oriented Programming', 'Git', 'Database Management',
        'APIs', 'Software Testing', 'Problem Solving', 'Debugging'
    ]),
    (2, ARRAY[
        'Python', 'Statistics', 'Probability',
        'Machine Learning', 'SQL', 'Data Visualization',
        'Data Cleaning', 'Pandas', 'NumPy', 'Business Intelligence'
    ]),
    (3, ARRAY[
        'Python', 'Machine Learning', 'Deep Learning',
        'Mathematics', 'Statistics', 'TensorFlow',
        'PyTorch', 'Model Evaluation', 'Data Processing', 'MLOps'
    ]),
    (4, ARRAY[
        'Computer Networks', 'Linux', 'Cybersecurity Fundamentals',
        'Operating Systems', 'Cryptography', 'Network Security',
        'Threat Detection', 'Security Monitoring', 'Incident Response',
        'Vulnerability Assessment', 'Security Information and Event Management (SIEM)'
    ]),
    (73, ARRAY[
        'Cloud Computing', 'AWS', 'Microsoft Azure',
        'Google Cloud', 'Networking', 'Linux',
        'Virtualization', 'Cloud Security', 'Infrastructure as Code', 'Docker'
    ]),
    (74, ARRAY[
        'Linux', 'Git', 'Docker', 'Kubernetes',
        'CI/CD', 'Cloud Computing', 'Infrastructure as Code',
        'Automation', 'Monitoring', 'Scripting'
    ]),
    (75, ARRAY[
        'SQL', 'Database Management', 'PostgreSQL',
        'MySQL', 'Database Security', 'Backup and Recovery',
        'Database Optimization', 'Data Modeling', 'Linux', 'Performance Monitoring'
    ]),
    (76, ARRAY[
        'Python', 'Artificial Intelligence', 'Machine Learning',
        'Deep Learning', 'Neural Networks', 'Natural Language Processing',
        'Computer Vision', 'TensorFlow', 'PyTorch', 'Model Deployment'
    ]),
    (77, ARRAY[
        'HTML', 'CSS', 'JavaScript', 'React',
        'Responsive Design', 'Web Accessibility', 'Git',
        'REST APIs', 'Web Security', 'Browser Development'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- FINANCE AND BANKING
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (5, ARRAY[
        'Financial Analysis', 'Financial Modeling', 'Excel',
        'Accounting', 'Financial Statements', 'Data Analysis',
        'Statistics', 'Business Analysis', 'Risk Analysis', 'Forecasting'
    ]),
    (78, ARRAY[
        'Investment Analysis', 'Financial Modeling', 'Valuation',
        'Portfolio Management', 'Financial Markets', 'Excel',
        'Accounting', 'Risk Analysis', 'Economics', 'Research'
    ]),
    (79, ARRAY[
        'Risk Management', 'Financial Analysis', 'Statistics',
        'Probability', 'Financial Modeling', 'Risk Assessment',
        'Data Analysis', 'Credit Risk', 'Market Risk', 'Excel'
    ]),
    (80, ARRAY[
        'Credit Analysis', 'Financial Analysis', 'Accounting',
        'Financial Statements', 'Credit Risk', 'Risk Assessment',
        'Data Analysis', 'Excel', 'Financial Modeling', 'Banking'
    ]),
    (81, ARRAY[
        'Financial Planning', 'Investment Planning', 'Personal Finance',
        'Financial Analysis', 'Tax Planning', 'Risk Management',
        'Retirement Planning', 'Insurance', 'Excel', 'Client Management'
    ]),
    (82, ARRAY[
        'Banking Operations', 'Financial Services', 'Customer Service',
        'Transaction Processing', 'Compliance', 'Risk Management',
        'Banking Technology', 'Accounting', 'Documentation', 'Communication'
    ]),
    (83, ARRAY[
        'Financial Technology', 'Financial Analysis', 'Python',
        'SQL', 'Data Analysis', 'Blockchain',
        'Digital Payments', 'APIs', 'Financial Markets', 'Cybersecurity'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- HEALTHCARE
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (43, ARRAY[
        'Healthcare Administration', 'Healthcare Operations',
        'Leadership', 'Financial Management', 'Healthcare Policy',
        'Communication', 'Team Management', 'Healthcare Regulations',
        'Data Analysis', 'Quality Management'
    ]),
    (44, ARRAY[
        'Clinical Research', 'Research Methodology', 'Biostatistics',
        'Clinical Trials', 'Data Analysis', 'Medical Terminology',
        'Ethics', 'Scientific Writing', 'Evidence-Based Practice', 'Documentation'
    ]),
    (45, ARRAY[
        'Public Health', 'Epidemiology', 'Biostatistics',
        'Health Promotion', 'Disease Prevention', 'Health Policy',
        'Community Health', 'Data Analysis', 'Research', 'Communication'
    ]),
    (84, ARRAY[
        'Healthcare Data Analysis', 'Python', 'SQL',
        'Statistics', 'Data Visualization', 'Healthcare Analytics',
        'Machine Learning', 'Excel', 'Data Cleaning', 'Healthcare Databases'
    ]),
    (85, ARRAY[
        'Health Information Management', 'Medical Records',
        'Healthcare Data', 'Medical Terminology', 'Data Privacy',
        'Healthcare Regulations', 'Electronic Health Records',
        'Documentation', 'Data Quality', 'Communication'
    ]),
    (86, ARRAY[
        'Healthcare Quality', 'Quality Assurance', 'Patient Safety',
        'Healthcare Regulations', 'Risk Management', 'Data Analysis',
        'Quality Improvement', 'Healthcare Operations', 'Auditing', 'Documentation'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- PHARMACEUTICALS
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (9, ARRAY[
        'Pharmacology', 'Drug Development', 'Biochemistry',
        'Molecular Biology', 'Research Methodology', 'Clinical Research',
        'Drug Interactions', 'Scientific Writing', 'Laboratory Techniques', 'Statistics'
    ]),
    (87, ARRAY[
        'Pharmaceutical Research', 'Drug Development', 'Pharmacology',
        'Biochemistry', 'Molecular Biology', 'Laboratory Techniques',
        'Research Methodology', 'Data Analysis', 'Scientific Writing', 'Statistics'
    ]),
    (88, ARRAY[
        'Clinical Research', 'Clinical Trials', 'Good Clinical Practice',
        'Medical Terminology', 'Data Management', 'Research Methodology',
        'Pharmacology', 'Documentation', 'Regulatory Compliance', 'Statistics'
    ]),
    (89, ARRAY[
        'Regulatory Affairs', 'Pharmaceutical Regulations', 'Drug Approval',
        'Regulatory Documentation', 'Good Manufacturing Practice',
        'Good Clinical Practice', 'Compliance', 'Technical Writing',
        'Quality Management', 'Pharmaceutical Law'
    ]),
    (90, ARRAY[
        'Pharmaceutical Quality', 'Quality Assurance', 'Quality Control',
        'Good Manufacturing Practice', 'Laboratory Techniques',
        'Pharmaceutical Regulations', 'Validation', 'Documentation',
        'Auditing', 'Risk Management'
    ]),
    (91, ARRAY[
        'Drug Safety', 'Pharmacovigilance', 'Adverse Event Reporting',
        'Clinical Research', 'Drug Regulations', 'Risk Assessment',
        'Medical Terminology', 'Data Analysis', 'Documentation', 'Safety Monitoring'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- BIOTECHNOLOGY
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (8, ARRAY[
        'Molecular Biology', 'Biochemistry', 'Genetics',
        'Cell Biology', 'Laboratory Techniques', 'Research Methodology',
        'Biotechnology', 'Data Analysis', 'Scientific Writing', 'Bioinformatics'
    ]),
    (92, ARRAY[
        'Molecular Biology', 'Cell Biology', 'Genetics',
        'Biochemistry', 'Laboratory Techniques', 'DNA Analysis',
        'Protein Analysis', 'Research Methodology', 'Microscopy', 'Scientific Writing'
    ]),
    (93, ARRAY[
        'Genomics', 'Genetics', 'Bioinformatics',
        'DNA Sequencing', 'Molecular Biology', 'Data Analysis',
        'Statistics', 'Programming', 'Biological Databases', 'Research'
    ]),
    (94, ARRAY[
        'Bioinformatics', 'Python', 'R Programming',
        'Genomics', 'Data Analysis', 'Statistics',
        'Biological Databases', 'Machine Learning', 'DNA Sequencing', 'Linux'
    ]),
    (95, ARRAY[
        'Bioprocess Engineering', 'Biotechnology', 'Biochemistry',
        'Process Design', 'Fermentation', 'Laboratory Techniques',
        'Process Control', 'Quality Control', 'Data Analysis', 'Chemical Engineering'
    ]),
    (96, ARRAY[
        'Biotechnology Quality', 'Quality Assurance', 'Quality Control',
        'Laboratory Techniques', 'Regulatory Compliance', 'Good Manufacturing Practice',
        'Documentation', 'Auditing', 'Risk Management', 'Biotechnology'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- ARCHITECTURE
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (6, ARRAY[
        'Architectural Design', 'Building Design', 'AutoCAD',
        'Revit', '3D Modeling', 'Building Codes',
        'Construction Documentation', 'Structural Concepts', 'Project Management', 'Design Communication'
    ]),
    (97, ARRAY[
        'Urban Planning', 'Land Use Planning', 'GIS',
        'Urban Design', 'Transportation Planning', 'Environmental Planning',
        'Public Policy', 'Spatial Analysis', 'Community Development', 'Planning Regulations'
    ]),
    (98, ARRAY[
        'Landscape Architecture', 'Landscape Design', 'Site Planning',
        'Plant Science', 'AutoCAD', '3D Modeling',
        'Environmental Design', 'Sustainable Design', 'GIS', 'Project Management'
    ]),
    (99, ARRAY[
        'Architectural Design', 'Concept Development', 'AutoCAD',
        'Revit', '3D Modeling', 'Rendering',
        'Construction Documentation', 'Design Visualization', 'Building Codes', 'Design Communication'
    ]),
    (100, ARRAY[
        'BIM', 'Revit', '3D Modeling', 'AutoCAD',
        'Building Information Modeling', 'Construction Documentation',
        'Building Codes', 'Clash Detection', 'Project Coordination', 'Technical Drawing'
    ]),
    (101, ARRAY[
        'Sustainable Architecture', 'Green Building', 'Energy Efficiency',
        'Architectural Design', 'Building Science', 'Environmental Design',
        'Revit', 'Building Codes', 'Passive Design', 'Sustainability'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- INTERIOR DESIGN
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (7, ARRAY[
        'Interior Design', 'Space Planning', 'AutoCAD',
        '3D Modeling', 'Material Selection', 'Color Theory',
        'Lighting Design', 'Furniture Design', 'Client Communication', 'Design Visualization'
    ]),
    (102, ARRAY[
        'Residential Design', 'Space Planning', 'Interior Design',
        'Furniture Selection', 'Color Theory', 'Lighting Design',
        'AutoCAD', '3D Modeling', 'Material Selection', 'Client Communication'
    ]),
    (103, ARRAY[
        'Commercial Interior Design', 'Space Planning', 'Interior Design',
        'Building Codes', 'AutoCAD', '3D Modeling',
        'Lighting Design', 'Material Selection', 'Project Management', 'Client Communication'
    ]),
    (104, ARRAY[
        'Interior Styling', 'Color Theory', 'Furniture Styling',
        'Material Selection', 'Space Planning', 'Visual Merchandising',
        'Design Trends', 'Lighting', 'Creative Direction', 'Client Communication'
    ]),
    (105, ARRAY[
        '3D Visualization', '3D Modeling', 'Rendering',
        'Interior Design', 'SketchUp', 'Blender',
        'Lighting', 'Texturing', 'Visualization', 'AutoCAD'
    ]),
    (106, ARRAY[
        'Interior Project Coordination', 'Project Management', 'Interior Design',
        'Vendor Management', 'Budget Management', 'Client Communication',
        'Scheduling', 'Construction Coordination', 'Documentation', 'Quality Control'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- ENGINEERING
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (31, ARRAY[
        'Mechanical Design', 'CAD', 'Thermodynamics',
        'Mechanics', 'Materials Science', 'Manufacturing Processes',
        'Engineering Mathematics', 'Machine Design', 'Engineering Drawing', 'Problem Solving'
    ]),
    (32, ARRAY[
        'Civil Engineering', 'Structural Analysis', 'AutoCAD',
        'Construction Management', 'Surveying', 'Building Materials',
        'Geotechnical Engineering', 'Project Management', 'Engineering Drawing', 'Building Codes'
    ]),
    (33, ARRAY[
        'Electrical Engineering', 'Circuit Analysis', 'Power Systems',
        'Electrical Machines', 'Control Systems', 'MATLAB',
        'Engineering Mathematics', 'Electrical Safety', 'PCB Design', 'Problem Solving'
    ]),
    (34, ARRAY[
        'Electronics Engineering', 'Circuit Design', 'Digital Electronics',
        'Analog Electronics', 'Embedded Systems', 'Microcontrollers',
        'PCB Design', 'Communication Systems', 'Signal Processing', 'C Programming'
    ]),
    (35, ARRAY[
        'Chemical Engineering', 'Chemical Processes', 'Thermodynamics',
        'Fluid Mechanics', 'Heat Transfer', 'Mass Transfer',
        'Process Control', 'Chemical Safety', 'Process Design', 'Engineering Mathematics'
    ]),
    (36, ARRAY[
        'Aerospace Engineering', 'Aerodynamics', 'Aircraft Design',
        'Propulsion', 'Flight Mechanics', 'Materials Science',
        'CAD', 'Control Systems', 'Engineering Mathematics', 'Fluid Mechanics'
    ]),
    (107, ARRAY[
        'Biomedical Engineering', 'Biology', 'Medical Devices',
        'Biomechanics', 'Biomedical Instrumentation', 'Signal Processing',
        'Electronics', 'Data Analysis', 'Medical Imaging', 'Engineering Mathematics'
    ]),
    (108, ARRAY[
        'Environmental Engineering', 'Environmental Science', 'Water Treatment',
        'Waste Management', 'Air Pollution Control', 'Environmental Regulations',
        'Sustainability', 'Environmental Monitoring', 'Engineering Mathematics', 'Risk Assessment'
    ]),
    (109, ARRAY[
        'Industrial Engineering', 'Operations Research', 'Process Optimization',
        'Lean Manufacturing', 'Six Sigma', 'Quality Management',
        'Supply Chain Management', 'Data Analysis', 'Project Management', 'Production Planning'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- EDUCATION
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (46, ARRAY[
        'Teaching', 'Communication', 'Classroom Management',
        'Lesson Planning', 'Subject Knowledge', 'Assessment',
        'Educational Psychology', 'Digital Learning', 'Time Management', 'Student Engagement'
    ]),
    (47, ARRAY[
        'Instructional Design', 'Learning Theory', 'Curriculum Design',
        'Educational Technology', 'Content Development', 'Assessment Design',
        'Learning Management Systems', 'Communication', 'Multimedia Design', 'Research'
    ]),
    (48, ARRAY[
        'Education Consulting', 'Educational Planning', 'Communication',
        'Research', 'Program Evaluation', 'Curriculum Development',
        'Policy Analysis', 'Project Management', 'Data Analysis', 'Presentation Skills'
    ]),
    (110, ARRAY[
        'Curriculum Development', 'Instructional Design', 'Learning Theory',
        'Educational Research', 'Assessment Design', 'Content Development',
        'Education Technology', 'Communication', 'Project Management', 'Evaluation'
    ]),
    (111, ARRAY[
        'Academic Administration', 'Education Management', 'Student Services',
        'Scheduling', 'Communication', 'Data Management',
        'Academic Planning', 'Leadership', 'Documentation', 'Problem Solving'
    ]),
    (112, ARRAY[
        'Educational Technology', 'Learning Management Systems',
        'Instructional Design', 'Digital Learning', 'EdTech Tools',
        'Data Analysis', 'Technology Integration', 'Content Development',
        'User Experience', 'Training'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- RESEARCH
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (10, ARRAY[
        'Research Methodology', 'Scientific Writing', 'Data Analysis',
        'Statistics', 'Experimental Design', 'Literature Review',
        'Critical Thinking', 'Research Ethics', 'Academic Writing', 'Presentation'
    ]),
    (113, ARRAY[
        'Research Methodology', 'Literature Review', 'Data Collection',
        'Data Analysis', 'Scientific Writing', 'Research Ethics',
        'Statistics', 'Documentation', 'Critical Thinking', 'Academic Research'
    ]),
    (114, ARRAY[
        'Research Analysis', 'Data Analysis', 'Statistics',
        'Research Methodology', 'Literature Review', 'Excel',
        'Data Visualization', 'Critical Thinking', 'Report Writing', 'Research'
    ]),
    (115, ARRAY[
        'Clinical Research', 'Clinical Trials', 'Research Methodology',
        'Biostatistics', 'Medical Terminology', 'Data Analysis',
        'Research Ethics', 'Scientific Writing', 'Documentation', 'Evidence-Based Practice'
    ]),
    (116, ARRAY[
        'Social Science Research', 'Research Methodology', 'Survey Design',
        'Qualitative Research', 'Quantitative Research', 'Statistics',
        'Data Analysis', 'Academic Writing', 'Critical Thinking', 'Research Ethics'
    ]),
    (117, ARRAY[
        'Data Research', 'Data Science', 'Statistics',
        'Python', 'SQL', 'Data Analysis',
        'Machine Learning', 'Data Visualization', 'Research Methodology', 'Scientific Writing'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- LAW
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (49, ARRAY[
        'Corporate Law', 'Contract Law', 'Legal Research',
        'Contract Drafting', 'Business Law', 'Negotiation',
        'Legal Writing', 'Compliance', 'Critical Thinking', 'Communication'
    ]),
    (50, ARRAY[
        'Legal Research', 'Case Analysis', 'Legal Writing',
        'Legal Databases', 'Law Interpretation', 'Critical Thinking',
        'Research Methodology', 'Documentation', 'Communication', 'Legal Analysis'
    ]),
    (51, ARRAY[
        'Compliance', 'Regulatory Law', 'Risk Management',
        'Legal Research', 'Policy Analysis', 'Auditing',
        'Documentation', 'Corporate Governance', 'Legal Writing', 'Communication'
    ]),
    (118, ARRAY[
        'Intellectual Property Law', 'Patent Law', 'Copyright Law',
        'Trademark Law', 'Legal Research', 'Contract Law',
        'IP Strategy', 'Legal Writing', 'Case Analysis', 'Negotiation'
    ]),
    (119, ARRAY[
        'Criminal Law', 'Criminal Procedure', 'Legal Research',
        'Case Analysis', 'Evidence Law', 'Court Procedures',
        'Legal Writing', 'Negotiation', 'Critical Thinking', 'Communication'
    ]),
    (120, ARRAY[
        'Legal Operations', 'Legal Research', 'Contract Management',
        'Compliance', 'Legal Technology', 'Documentation',
        'Project Management', 'Data Management', 'Process Improvement', 'Communication'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- MEDIA AND COMMUNICATION
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (52, ARRAY[
        'Content Creation', 'Social Media', 'Storytelling',
        'Video Production', 'Content Writing', 'Graphic Design',
        'Audience Analysis', 'Digital Marketing', 'Communication', 'Creativity'
    ]),
    (53, ARRAY[
        'Journalism', 'News Writing', 'Investigative Research',
        'Interviewing', 'Fact Checking', 'Communication',
        'Media Ethics', 'Storytelling', 'Digital Media', 'Critical Thinking'
    ]),
    (54, ARRAY[
        'Public Relations', 'Media Relations', 'Communication',
        'Press Releases', 'Crisis Communication', 'Brand Management',
        'Event Management', 'Content Writing', 'Social Media', 'Presentation'
    ]),
    (121, ARRAY[
        'Copywriting', 'Content Writing', 'Storytelling',
        'SEO', 'Marketing', 'Editing',
        'Research', 'Communication', 'Creative Writing', 'Audience Analysis'
    ]),
    (122, ARRAY[
        'Media Production', 'Video Production', 'Audio Production',
        'Storytelling', 'Video Editing', 'Photography',
        'Production Management', 'Script Writing', 'Creative Direction', 'Communication'
    ]),
    (123, ARRAY[
        'Communication', 'Corporate Communication', 'Content Writing',
        'Public Relations', 'Presentation', 'Media Relations',
        'Digital Communication', 'Research', 'Writing', 'Interpersonal Skills'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- MARKETING
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (55, ARRAY[
        'Digital Marketing', 'SEO', 'Social Media Marketing',
        'Content Marketing', 'Google Analytics', 'Email Marketing',
        'Marketing Analytics', 'Advertising', 'Campaign Management', 'Communication'
    ]),
    (56, ARRAY[
        'Marketing Analytics', 'Data Analysis', 'Statistics',
        'Consumer Behavior', 'Market Research', 'Excel',
        'Data Visualization', 'Marketing Strategy', 'SQL', 'Communication'
    ]),
    (57, ARRAY[
        'Brand Management', 'Brand Strategy', 'Marketing',
        'Consumer Behavior', 'Market Research', 'Advertising',
        'Content Strategy', 'Communication', 'Campaign Management', 'Analytics'
    ]),
    (124, ARRAY[
        'SEO', 'Keyword Research', 'Content Optimization',
        'Google Analytics', 'Search Console', 'Technical SEO',
        'Link Building', 'Content Marketing', 'Web Analytics', 'HTML'
    ]),
    (125, ARRAY[
        'Social Media Management', 'Content Creation', 'Social Media Marketing',
        'Community Management', 'Content Strategy', 'Analytics',
        'Brand Management', 'Digital Marketing', 'Communication', 'Campaign Management'
    ]),
    (126, ARRAY[
        'Market Research', 'Consumer Research', 'Survey Design',
        'Data Analysis', 'Statistics', 'Consumer Behavior',
        'Competitive Analysis', 'Research Methodology', 'Data Visualization', 'Reporting'
    ]),
    (127, ARRAY[
        'Growth Marketing', 'Digital Marketing', 'Analytics',
        'A/B Testing', 'SEO', 'Content Marketing',
        'Conversion Optimization', 'Customer Acquisition', 'Marketing Strategy', 'Data Analysis'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- BUSINESS AND MANAGEMENT
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (58, ARRAY[
        'Business Analysis', 'Requirements Analysis', 'Data Analysis',
        'Process Modeling', 'SQL', 'Excel',
        'Problem Solving', 'Communication', 'Project Management', 'Business Strategy'
    ]),
    (59, ARRAY[
        'Project Management', 'Planning', 'Leadership',
        'Risk Management', 'Budget Management', 'Scheduling',
        'Team Management', 'Communication', 'Agile', 'Problem Solving'
    ]),
    (60, ARRAY[
        'Management Consulting', 'Business Strategy', 'Data Analysis',
        'Problem Solving', 'Market Research', 'Financial Analysis',
        'Presentation', 'Communication', 'Project Management', 'Critical Thinking'
    ]),
    (128, ARRAY[
        'Operations Management', 'Process Optimization', 'Project Management',
        'Supply Chain Management', 'Leadership', 'Data Analysis',
        'Quality Management', 'Resource Planning', 'Problem Solving', 'Communication'
    ]),
    (129, ARRAY[
        'Human Resources', 'Recruitment', 'Employee Relations',
        'Performance Management', 'HR Policies', 'Communication',
        'Conflict Resolution', 'Training and Development', 'HR Analytics', 'Employment Law'
    ]),
    (130, ARRAY[
        'Product Management', 'Product Strategy', 'Market Research',
        'User Research', 'Product Roadmapping', 'Data Analysis',
        'Agile', 'Project Management', 'Communication', 'Business Strategy'
    ]),
    (131, ARRAY[
        'Entrepreneurship', 'Business Planning', 'Business Strategy',
        'Financial Management', 'Marketing', 'Leadership',
        'Product Development', 'Market Research', 'Negotiation', 'Communication'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- DESIGN
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (61, ARRAY[
        'Graphic Design', 'Typography', 'Color Theory',
        'Adobe Photoshop', 'Adobe Illustrator', 'Layout Design',
        'Branding', 'Visual Communication', 'Design Principles', 'Creativity'
    ]),
    (62, ARRAY[
        'UX Design', 'User Research', 'Wireframing',
        'Prototyping', 'Usability Testing', 'Figma',
        'Information Architecture', 'Interaction Design', 'User Psychology', 'Design Thinking'
    ]),
    (63, ARRAY[
        'Product Design', 'UX Design', 'User Research',
        'Prototyping', 'Figma', 'Design Thinking',
        'Interaction Design', 'Visual Design', 'Usability Testing', 'Product Strategy'
    ]),
    (132, ARRAY[
        'UI Design', 'Visual Design', 'Figma',
        'Typography', 'Color Theory', 'Design Systems',
        'Responsive Design', 'Prototyping', 'Interaction Design', 'Accessibility'
    ]),
    (133, ARRAY[
        'Motion Design', 'Animation', 'Adobe After Effects',
        'Video Editing', 'Visual Storytelling', 'Typography',
        'Graphic Design', '3D Design', 'Compositing', 'Creativity'
    ]),
    (134, ARRAY[
        'Service Design', 'Design Thinking', 'User Research',
        'Journey Mapping', 'Service Blueprinting', 'Prototyping',
        'Customer Experience', 'Stakeholder Research', 'Problem Solving', 'Facilitation'
    ]),
    (135, ARRAY[
        'Design Research', 'User Research', 'Qualitative Research',
        'Quantitative Research', 'Usability Testing', 'Data Analysis',
        'Design Thinking', 'Interviewing', 'Survey Design', 'Research Methodology'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- MANUFACTURING
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (64, ARRAY[
        'Manufacturing Engineering', 'CAD', 'Production Processes',
        'Lean Manufacturing', 'Six Sigma', 'Process Optimization',
        'Quality Control', 'Engineering Drawing', 'CNC', 'Problem Solving'
    ]),
    (65, ARRAY[
        'Production Management', 'Operations Management', 'Production Planning',
        'Leadership', 'Quality Management', 'Lean Manufacturing',
        'Supply Chain Management', 'Budget Management', 'Safety Management', 'Team Management'
    ]),
    (66, ARRAY[
        'Quality Engineering', 'Quality Assurance', 'Quality Control',
        'Six Sigma', 'Statistical Process Control', 'Root Cause Analysis',
        'Lean Manufacturing', 'Auditing', 'Data Analysis', 'Problem Solving'
    ]),
    (136, ARRAY[
        'Process Engineering', 'Process Optimization', 'Lean Manufacturing',
        'Six Sigma', 'Process Control', 'Manufacturing Processes',
        'Data Analysis', 'Quality Management', 'Engineering Mathematics', 'Problem Solving'
    ]),
    (137, ARRAY[
        'Supply Chain Management', 'Logistics', 'Procurement',
        'Inventory Management', 'Demand Planning', 'Data Analysis',
        'Supplier Management', 'Operations Management', 'Excel', 'Negotiation'
    ]),
    (138, ARRAY[
        'Production Planning', 'Production Scheduling', 'Operations Management',
        'Inventory Management', 'Demand Planning', 'ERP',
        'Supply Chain Management', 'Data Analysis', 'Resource Planning', 'Excel'
    ]),
    (139, ARRAY[
        'Industrial Automation', 'PLC Programming', 'Robotics',
        'Control Systems', 'Industrial Sensors', 'SCADA',
        'Electrical Systems', 'Programming', 'Manufacturing Processes', 'Troubleshooting'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- GOVERNMENT AND PUBLIC SERVICES
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (67, ARRAY[
        'Public Policy', 'Policy Analysis', 'Research',
        'Data Analysis', 'Economics', 'Government Systems',
        'Report Writing', 'Critical Thinking', 'Communication', 'Public Administration'
    ]),
    (68, ARRAY[
        'Government Program Management', 'Public Administration',
        'Project Management', 'Policy Implementation', 'Budget Management',
        'Stakeholder Management', 'Communication', 'Monitoring and Evaluation',
        'Government Regulations', 'Leadership'
    ]),
    (69, ARRAY[
        'Public Administration', 'Government Operations', 'Policy',
        'Public Finance', 'Communication', 'Project Management',
        'Government Regulations', 'Data Management', 'Leadership', 'Public Service'
    ]),
    (140, ARRAY[
        'Public Sector Analysis', 'Data Analysis', 'Policy Analysis',
        'Government Systems', 'Research', 'Statistics',
        'Public Finance', 'Report Writing', 'Critical Thinking', 'Communication'
    ]),
    (141, ARRAY[
        'Government Relations', 'Public Policy', 'Stakeholder Management',
        'Communication', 'Negotiation', 'Political Analysis',
        'Public Affairs', 'Research', 'Relationship Management', 'Presentation'
    ]),
    (142, ARRAY[
        'Urban Development', 'Urban Planning', 'Public Policy',
        'Infrastructure Planning', 'GIS', 'Project Management',
        'Community Development', 'Environmental Planning', 'Data Analysis', 'Government Regulations'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- ENVIRONMENTAL SCIENCES
-- =====================================================

INSERT INTO career_role_skills (role_id, skill_name)
SELECT v.role_id, s.skill_name
FROM (VALUES
    (70, ARRAY[
        'Environmental Science', 'Ecology', 'Environmental Monitoring',
        'Data Analysis', 'GIS', 'Environmental Impact Assessment',
        'Research Methodology', 'Environmental Regulations', 'Field Research', 'Sustainability'
    ]),
    (71, ARRAY[
        'Environmental Consulting', 'Environmental Impact Assessment',
        'Environmental Regulations', 'Sustainability', 'GIS',
        'Environmental Monitoring', 'Data Analysis', 'Report Writing',
        'Risk Assessment', 'Project Management'
    ]),
    (72, ARRAY[
        'Sustainability', 'Environmental Management', 'Energy Efficiency',
        'Waste Management', 'Sustainable Development', 'Environmental Policy',
        'Carbon Management', 'Data Analysis', 'ESG', 'Project Management'
    ]),
    (143, ARRAY[
        'Environmental Policy', 'Policy Analysis', 'Environmental Regulations',
        'Sustainability', 'Research', 'Data Analysis',
        'Climate Policy', 'Report Writing', 'Public Policy', 'Communication'
    ]),
    (144, ARRAY[
        'Ecology', 'Biodiversity', 'Environmental Science',
        'Field Research', 'Data Collection', 'GIS',
        'Ecological Modeling', 'Conservation', 'Statistics', 'Research Methodology'
    ]),
    (145, ARRAY[
        'Climate Science', 'Climate Data Analysis', 'Statistics',
        'Environmental Modeling', 'GIS', 'Climate Policy',
        'Research Methodology', 'Data Visualization', 'Sustainability', 'Programming'
    ]),
    (146, ARRAY[
        'Environmental Health', 'Public Health', 'Environmental Risk Assessment',
        'Epidemiology', 'Environmental Monitoring', 'Toxicology',
        'Health Regulations', 'Data Analysis', 'Research', 'Risk Management'
    ])
) AS v(role_id, skills)
CROSS JOIN LATERAL unnest(v.skills) AS s(skill_name)
ON CONFLICT (role_id, skill_name) DO NOTHING;


-- =====================================================
-- VERIFICATION
-- =====================================================

SELECT
    cr.role_id,
    cr.role_name,
    COUNT(crs.career_role_skill_id) AS skill_count
FROM career_roles cr
LEFT JOIN career_role_skills crs
    ON cr.role_id = crs.role_id
GROUP BY
    cr.role_id,
    cr.role_name
ORDER BY
    cr.role_id;