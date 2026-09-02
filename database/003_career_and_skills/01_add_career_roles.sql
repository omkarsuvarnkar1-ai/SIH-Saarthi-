-- =====================================================
-- 07 - Complete Career Roles Dataset
-- =====================================================

-- This script is duplicate-safe.
-- Existing roles will NOT be inserted again.


-- =====================================================
-- 1. INFORMATION TECHNOLOGY (industry_id = 1)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Software Developer',
       'Designs, develops and maintains software applications'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Software Developer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Data Scientist',
       'Analyzes data and develops statistical and machine learning solutions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Data Scientist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Machine Learning Engineer',
       'Develops and deploys machine learning systems'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Machine Learning Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Cybersecurity Analyst',
       'Protects systems, networks and information from security threats'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Cybersecurity Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Cloud Engineer',
       'Designs, deploys and manages cloud infrastructure and services'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Cloud Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'DevOps Engineer',
       'Automates software development, deployment and infrastructure processes'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'DevOps Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Database Administrator',
       'Manages databases, data security, performance and availability'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Database Administrator'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'AI Engineer',
       'Develops and integrates artificial intelligence systems and applications'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'AI Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 1, 'Web Developer',
       'Builds and maintains websites and web applications'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 1 AND role_name = 'Web Developer'
);


-- =====================================================
-- 2. FINANCE AND BANKING (industry_id = 2)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'Financial Analyst',
       'Analyzes financial information to support business decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'Financial Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'Investment Analyst',
       'Researches investments and evaluates financial opportunities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'Investment Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'Risk Analyst',
       'Identifies and analyzes financial and business risks'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'Risk Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'Credit Analyst',
       'Evaluates creditworthiness and lending risks of individuals and organizations'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'Credit Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'Financial Planner',
       'Provides financial planning and investment guidance'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'Financial Planner'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'Banking Operations Specialist',
       'Manages banking processes, transactions and operational activities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'Banking Operations Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 2, 'FinTech Analyst',
       'Analyzes financial technology products, services and digital finance solutions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 2 AND role_name = 'FinTech Analyst'
);


-- =====================================================
-- 3. HEALTHCARE (industry_id = 3)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 3, 'Healthcare Administrator',
       'Manages healthcare operations, services and organizational activities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 3 AND role_name = 'Healthcare Administrator'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 3, 'Clinical Researcher',
       'Conducts research to evaluate healthcare treatments and medical interventions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 3 AND role_name = 'Clinical Researcher'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 3, 'Public Health Specialist',
       'Works on programs and initiatives that improve population health'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 3 AND role_name = 'Public Health Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 3, 'Healthcare Data Analyst',
       'Analyzes healthcare data to support clinical and organizational decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 3 AND role_name = 'Healthcare Data Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 3, 'Health Information Specialist',
       'Manages and analyzes health information and medical records'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 3 AND role_name = 'Health Information Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 3, 'Healthcare Quality Specialist',
       'Monitors and improves quality and safety in healthcare services'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 3 AND role_name = 'Healthcare Quality Specialist'
);


-- =====================================================
-- 4. PHARMACEUTICALS (industry_id = 4)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 4, 'Pharmacologist',
       'Studies drug actions, effects and development'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 4 AND role_name = 'Pharmacologist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 4, 'Pharmaceutical Research Scientist',
       'Conducts research related to drug discovery and development'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 4 AND role_name = 'Pharmaceutical Research Scientist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 4, 'Clinical Research Associate',
       'Coordinates and monitors clinical research studies'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 4 AND role_name = 'Clinical Research Associate'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 4, 'Regulatory Affairs Specialist',
       'Manages regulatory requirements for pharmaceutical products'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 4 AND role_name = 'Regulatory Affairs Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 4, 'Pharmaceutical Quality Specialist',
       'Ensures pharmaceutical products meet quality and compliance requirements'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 4 AND role_name = 'Pharmaceutical Quality Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 4, 'Drug Safety Specialist',
       'Monitors and evaluates medicine safety and adverse events'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 4 AND role_name = 'Drug Safety Specialist'
);


-- =====================================================
-- 5. BIOTECHNOLOGY (industry_id = 5)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 5, 'Biotechnologist',
       'Applies biological processes and technologies to research and industry'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 5 AND role_name = 'Biotechnologist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 5, 'Molecular Biologist',
       'Studies biological processes at the molecular level'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 5 AND role_name = 'Molecular Biologist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 5, 'Genomics Scientist',
       'Studies genomes and genetic information using biological and computational methods'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 5 AND role_name = 'Genomics Scientist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 5, 'Bioinformatics Scientist',
       'Uses computational methods to analyze biological and genomic data'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 5 AND role_name = 'Bioinformatics Scientist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 5, 'Bioprocess Engineer',
       'Develops and optimizes processes for producing biological products'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 5 AND role_name = 'Bioprocess Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 5, 'Biotechnology Quality Specialist',
       'Ensures biotechnology products and processes meet quality standards'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 5 AND role_name = 'Biotechnology Quality Specialist'
);


-- =====================================================
-- 6. ARCHITECTURE (industry_id = 6)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 6, 'Architect',
       'Designs buildings and architectural spaces'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 6 AND role_name = 'Architect'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 6, 'Urban Planner',
       'Plans and develops cities, communities and urban spaces'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 6 AND role_name = 'Urban Planner'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 6, 'Landscape Architect',
       'Designs outdoor environments, landscapes and public spaces'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 6 AND role_name = 'Landscape Architect'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 6, 'Architectural Designer',
       'Develops architectural concepts, drawings and design solutions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 6 AND role_name = 'Architectural Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 6, 'BIM Specialist',
       'Creates and manages digital building information models'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 6 AND role_name = 'BIM Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 6, 'Sustainable Design Architect',
       'Designs buildings using sustainable and environmentally responsible principles'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 6 AND role_name = 'Sustainable Design Architect'
);


-- =====================================================
-- 7. INTERIOR DESIGN (industry_id = 7)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 7, 'Interior Designer',
       'Designs functional and aesthetic interior environments'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 7 AND role_name = 'Interior Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 7, 'Residential Interior Designer',
       'Designs interior spaces for homes and residential properties'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 7 AND role_name = 'Residential Interior Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 7, 'Commercial Interior Designer',
       'Designs interiors for offices, retail spaces and commercial properties'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 7 AND role_name = 'Commercial Interior Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 7, 'Interior Stylist',
       'Develops visual styles, furnishings and decorative concepts for interiors'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 7 AND role_name = 'Interior Stylist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 7, '3D Interior Visualizer',
       'Creates three-dimensional visualizations and presentations of interior designs'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 7 AND role_name = '3D Interior Visualizer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 7, 'Interior Project Coordinator',
       'Coordinates interior design projects, vendors and implementation activities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 7 AND role_name = 'Interior Project Coordinator'
);


-- =====================================================
-- 8. ENGINEERING (industry_id = 8)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Mechanical Engineer',
       'Designs, develops and analyzes mechanical systems and machines'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Mechanical Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Civil Engineer',
       'Plans, designs and manages infrastructure and construction projects'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Civil Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Electrical Engineer',
       'Designs and develops electrical systems, equipment and power solutions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Electrical Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Electronics Engineer',
       'Designs and develops electronic circuits, devices and embedded systems'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Electronics Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Chemical Engineer',
       'Applies chemistry, mathematics and engineering principles to industrial processes'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Chemical Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Aerospace Engineer',
       'Designs and develops aircraft, spacecraft and related aerospace systems'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Aerospace Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Biomedical Engineer',
       'Applies engineering principles to medical devices, healthcare technologies and biological systems'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Biomedical Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Environmental Engineer',
       'Develops engineering solutions for environmental protection and sustainability'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Environmental Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 8, 'Industrial Engineer',
       'Improves production systems, processes and operational efficiency'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 8 AND role_name = 'Industrial Engineer'
);


-- =====================================================
-- 9. EDUCATION (industry_id = 9)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 9, 'Teacher',
       'Plans and delivers educational instruction to students'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 9 AND role_name = 'Teacher'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 9, 'Instructional Designer',
       'Designs learning experiences, educational content and training programs'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 9 AND role_name = 'Instructional Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 9, 'Education Consultant',
       'Provides guidance on educational programs, learning strategies and institutions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 9 AND role_name = 'Education Consultant'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 9, 'Curriculum Developer',
       'Designs and develops educational curricula and learning materials'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 9 AND role_name = 'Curriculum Developer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 9, 'Academic Coordinator',
       'Coordinates academic programs, schedules and educational activities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 9 AND role_name = 'Academic Coordinator'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 9, 'Educational Technology Specialist',
       'Uses technology to improve teaching, learning and educational delivery'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 9 AND role_name = 'Educational Technology Specialist'
);


-- =====================================================
-- 10. RESEARCH (industry_id = 10)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 10, 'Research Scientist',
       'Conducts scientific research and develops new knowledge'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 10 AND role_name = 'Research Scientist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 10, 'Research Associate',
       'Supports research projects through experimentation, analysis and documentation'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 10 AND role_name = 'Research Associate'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 10, 'Research Analyst',
       'Analyzes information and data to support research projects and decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 10 AND role_name = 'Research Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 10, 'Clinical Researcher',
       'Conducts research involving healthcare treatments and clinical evidence'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 10 AND role_name = 'Clinical Researcher'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 10, 'Social Science Researcher',
       'Studies human behavior, societies and social phenomena through research'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 10 AND role_name = 'Social Science Researcher'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 10, 'Data Research Scientist',
       'Uses data analysis and computational methods to support scientific research'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 10 AND role_name = 'Data Research Scientist'
);


-- =====================================================
-- 11. LAW (industry_id = 11)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 11, 'Corporate Lawyer',
       'Provides legal advice and support for businesses and organizations'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 11 AND role_name = 'Corporate Lawyer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 11, 'Legal Researcher',
       'Researches laws, regulations, cases and legal information'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 11 AND role_name = 'Legal Researcher'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 11, 'Compliance Specialist',
       'Helps organizations follow applicable laws, regulations and policies'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 11 AND role_name = 'Compliance Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 11, 'Intellectual Property Lawyer',
       'Handles legal matters involving patents, trademarks, copyrights and intellectual property'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 11 AND role_name = 'Intellectual Property Lawyer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 11, 'Criminal Lawyer',
       'Represents clients and handles legal matters involving criminal law'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 11 AND role_name = 'Criminal Lawyer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 11, 'Legal Operations Specialist',
       'Improves legal workflows, technology use and operational processes'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 11 AND role_name = 'Legal Operations Specialist'
);


-- =====================================================
-- 12. MEDIA AND COMMUNICATION (industry_id = 12)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 12, 'Content Creator',
       'Creates digital content for audiences across media platforms'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 12 AND role_name = 'Content Creator'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 12, 'Journalist',
       'Researches, investigates and communicates news and information'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 12 AND role_name = 'Journalist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 12, 'Public Relations Specialist',
       'Manages communication and public image for organizations and individuals'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 12 AND role_name = 'Public Relations Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 12, 'Copywriter',
       'Creates written content for advertising, marketing and communication'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 12 AND role_name = 'Copywriter'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 12, 'Media Producer',
       'Plans and manages the production of media content'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 12 AND role_name = 'Media Producer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 12, 'Communication Specialist',
       'Develops communication strategies and content for organizations'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 12 AND role_name = 'Communication Specialist'
);


-- =====================================================
-- 13. MARKETING (industry_id = 13)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'Digital Marketing Specialist',
       'Plans and executes digital marketing campaigns across online channels'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'Digital Marketing Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'Marketing Analyst',
       'Analyzes market data, customer behavior and campaign performance'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'Marketing Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'Brand Manager',
       'Develops and manages brand strategy, positioning and communication'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'Brand Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'SEO Specialist',
       'Improves website visibility and search engine performance'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'SEO Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'Social Media Manager',
       'Plans and manages social media content, campaigns and engagement'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'Social Media Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'Market Research Analyst',
       'Studies markets, customers and competitors to support business decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'Market Research Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 13, 'Growth Marketing Specialist',
       'Uses experiments, analytics and campaigns to drive customer and business growth'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 13 AND role_name = 'Growth Marketing Specialist'
);


-- =====================================================
-- 14. BUSINESS AND MANAGEMENT (industry_id = 14)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Business Analyst',
       'Analyzes business processes and requirements to support organizational decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Business Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Project Manager',
       'Plans, coordinates and manages projects to achieve defined objectives'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Project Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Management Consultant',
       'Provides organizations with strategic and operational recommendations'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Management Consultant'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Operations Manager',
       'Manages organizational operations, processes and resources'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Operations Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Human Resources Specialist',
       'Manages recruitment, employee processes and workplace programs'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Human Resources Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Product Manager',
       'Defines product strategy, requirements and development priorities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Product Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 14, 'Entrepreneur',
       'Develops and manages new business ventures and products'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 14 AND role_name = 'Entrepreneur'
);


-- =====================================================
-- 15. DESIGN (industry_id = 15)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'Graphic Designer',
       'Creates visual concepts and graphics for communication and branding'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'Graphic Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'UX Designer',
       'Designs user experiences for digital products and services'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'UX Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'Product Designer',
       'Designs products by combining user needs, functionality and visual design'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'Product Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'UI Designer',
       'Designs visual interfaces for digital products and applications'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'UI Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'Motion Designer',
       'Creates animated visual content, graphics and motion-based experiences'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'Motion Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'Service Designer',
       'Designs services and experiences around user and organizational needs'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'Service Designer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 15, 'Design Researcher',
       'Studies user needs and behavior to inform design decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 15 AND role_name = 'Design Researcher'
);


-- =====================================================
-- 16. MANUFACTURING (industry_id = 16)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Manufacturing Engineer',
       'Improves manufacturing processes, systems and production efficiency'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Manufacturing Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Production Manager',
       'Plans and manages manufacturing operations and production activities'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Production Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Quality Engineer',
       'Develops and maintains processes to ensure product and manufacturing quality'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Quality Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Process Engineer',
       'Analyzes and improves industrial production processes'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Process Engineer'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Supply Chain Specialist',
       'Coordinates supply, logistics and material flow within manufacturing operations'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Supply Chain Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Production Planner',
       'Plans production schedules, resources and manufacturing capacity'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Production Planner'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 16, 'Industrial Automation Engineer',
       'Develops and manages automated systems used in industrial production'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 16 AND role_name = 'Industrial Automation Engineer'
);


-- =====================================================
-- 17. GOVERNMENT AND PUBLIC SERVICES (industry_id = 17)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 17, 'Public Policy Analyst',
       'Researches and analyzes policies to support public-sector decisions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 17 AND role_name = 'Public Policy Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 17, 'Government Program Manager',
       'Plans and manages public-sector programs and initiatives'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 17 AND role_name = 'Government Program Manager'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 17, 'Public Administration Specialist',
       'Supports administration and delivery of government services'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 17 AND role_name = 'Public Administration Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 17, 'Public Sector Analyst',
       'Analyzes public-sector data, programs and organizational performance'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 17 AND role_name = 'Public Sector Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 17, 'Government Relations Specialist',
       'Manages communication and relationships between organizations and government bodies'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 17 AND role_name = 'Government Relations Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 17, 'Urban Development Specialist',
       'Supports planning and development initiatives for cities and public infrastructure'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 17 AND role_name = 'Urban Development Specialist'
);


-- =====================================================
-- 18. ENVIRONMENTAL SCIENCES (industry_id = 18)
-- =====================================================

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Environmental Scientist',
       'Studies environmental systems, pollution and ecological conditions'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Environmental Scientist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Environmental Consultant',
       'Provides environmental assessment and sustainability guidance'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Environmental Consultant'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Sustainability Specialist',
       'Develops strategies to improve environmental sustainability and resource efficiency'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Sustainability Specialist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Environmental Policy Analyst',
       'Analyzes environmental policies, regulations and sustainability programs'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Environmental Policy Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Ecologist',
       'Studies ecosystems, organisms and interactions within natural environments'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Ecologist'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Climate Analyst',
       'Analyzes climate data, trends and environmental impacts'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Climate Analyst'
);

INSERT INTO career_roles (industry_id, role_name, description)
SELECT 18, 'Environmental Health Specialist',
       'Studies environmental factors that affect human health and safety'
WHERE NOT EXISTS (
    SELECT 1 FROM career_roles
    WHERE industry_id = 18 AND role_name = 'Environmental Health Specialist'
);


-- =====================================================
-- FINAL VERIFICATION
-- =====================================================

SELECT
    i.industry_name,
    COUNT(r.role_id) AS role_count
FROM industries i
LEFT JOIN career_roles r
    ON i.industry_id = r.industry_id
GROUP BY i.industry_id, i.industry_name
ORDER BY i.industry_id;