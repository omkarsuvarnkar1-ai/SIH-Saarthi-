-- SkillNet Assessment Question Bank
-- Role: Data Scientist (role_id = 2)
-- Adds 12 questions per skill: 4 Easy, 4 Moderate, 4 Difficult.
-- Uses only valid question_type values:
-- conceptual, scenario, problem_solving

BEGIN;

CREATE TEMP TABLE tmp_skillnet_questions (
    role_id INTEGER,
    skill_name VARCHAR(150),
    difficulty VARCHAR(50),
    question_text TEXT,
    option_a TEXT,
    option_b TEXT,
    option_c TEXT,
    option_d TEXT,
    correct_option VARCHAR(1),
    question_type VARCHAR(50),
    concepts_tested TEXT[]
) ON COMMIT DROP;

INSERT INTO tmp_skillnet_questions
(role_id, skill_name, difficulty, question_text, option_a, option_b, option_c, option_d, correct_option, question_type, concepts_tested)
VALUES
-- Python
(2,'Python','Easy','Which data type is used to store whole numbers in Python?','int','float','str','list','A','conceptual',ARRAY['data types']),
(2,'Python','Easy','Which symbol is used to start a single-line comment in Python?','#','//','/*','--','A','conceptual',ARRAY['comments','syntax']),
(2,'Python','Easy','Which function is used to display output in Python?','input()','print()','display()','output()','B','conceptual',ARRAY['functions','output']),
(2,'Python','Easy','Which keyword is used to define a function in Python?','def','function','define','func','A','conceptual',ARRAY['functions','syntax']),
(2,'Python','Moderate','What is the output of len([10,20,30,40])?','3','4','5','40','B','problem_solving',ARRAY['lists','len']),
(2,'Python','Moderate','Which Python structure stores key-value pairs?','list','tuple','dictionary','set','C','conceptual',ARRAY['dictionary','data structures']),
(2,'Python','Moderate','What does range(5) produce when used in a loop?','1 through 5','0 through 4','0 through 5','5 through 10','B','conceptual',ARRAY['range','loops']),
(2,'Python','Moderate','Which method adds one item to the end of a list?','append()','add()','insertEnd()','push()','A','conceptual',ARRAY['lists','methods']),
(2,'Python','Difficult','What is the main purpose of a Python generator?','Store only strings','Produce values lazily','Sort data automatically','Create database tables','B','conceptual',ARRAY['generators','iterators']),
(2,'Python','Difficult','Which statement about a Python tuple is correct?','It is always mutable','It cannot contain numbers','It is immutable','It can only contain strings','C','conceptual',ARRAY['tuples','immutability']),
(2,'Python','Difficult','What does *args allow a function to accept?','Only keyword arguments','A variable number of positional arguments','Only one argument','No arguments','B','conceptual',ARRAY['functions','args']),
(2,'Python','Difficult','Which technique creates a new list by applying an expression to each item of an iterable?','List comprehension','Exception handling','Context manager','Decorator','A','conceptual',ARRAY['list comprehension','iterables']),

-- Statistics
(2,'Statistics','Easy','Which measure represents the middle value of an ordered dataset?','Mean','Median','Variance','Range','B','conceptual',ARRAY['median','central tendency']),
(2,'Statistics','Easy','Which measure is calculated by adding all values and dividing by the number of values?','Mode','Median','Mean','Range','C','conceptual',ARRAY['mean','central tendency']),
(2,'Statistics','Easy','What does the range of a dataset measure?','Average value','Difference between maximum and minimum','Middle value','Most frequent value','B','conceptual',ARRAY['range','dispersion']),
(2,'Statistics','Easy','Which measure identifies the most frequently occurring value?','Mean','Median','Mode','Variance','C','conceptual',ARRAY['mode','central tendency']),
(2,'Statistics','Moderate','What does standard deviation measure?','Central value','Spread of observations around the mean','Number of observations','Correlation only','B','conceptual',ARRAY['standard deviation','dispersion']),
(2,'Statistics','Moderate','If every value in a dataset is increased by 5, what happens to the mean?','It decreases by 5','It stays the same','It increases by 5','It becomes zero','C','problem_solving',ARRAY['mean','data transformation']),
(2,'Statistics','Moderate','A correlation coefficient close to 1 indicates what?','Strong positive linear relationship','Strong negative relationship','No relationship','Equal variances','A','conceptual',ARRAY['correlation']),
(2,'Statistics','Moderate','Which graph is commonly used to show the distribution of a numerical variable?','Histogram','Pie chart only','Flowchart','Network diagram','A','conceptual',ARRAY['histogram','distribution']),
(2,'Statistics','Difficult','What does a p-value help assess in hypothesis testing?','The sample size only','Evidence against the null hypothesis','The maximum value','The median directly','B','conceptual',ARRAY['p-value','hypothesis testing']),
(2,'Statistics','Difficult','What does a confidence interval provide?','A range of plausible values for a population parameter','The exact population value','Only the sample mean','A guarantee about every observation','A','conceptual',ARRAY['confidence interval','inference']),
(2,'Statistics','Difficult','What is a Type I error?','Failing to reject a false null hypothesis','Rejecting a true null hypothesis','Using a small sample','Calculating the mean incorrectly','B','conceptual',ARRAY['hypothesis testing','errors']),
(2,'Statistics','Difficult','Why is variance expressed in squared units?','Because deviations from the mean are squared','Because data must be integers','Because the mean is squared','Because probability is squared','A','conceptual',ARRAY['variance','dispersion']),

-- Probability
(2,'Probability','Easy','What is the probability of an impossible event?','0','0.5','1','-1','A','conceptual',ARRAY['probability','events']),
(2,'Probability','Easy','What is the probability of a certain event?','0','0.25','0.5','1','D','conceptual',ARRAY['probability','events']),
(2,'Probability','Easy','A fair coin is tossed once. What is the probability of heads?','0','1/4','1/2','1','C','problem_solving',ARRAY['coin toss','probability']),
(2,'Probability','Easy','A standard die has how many possible outcomes?','4','5','6','8','C','conceptual',ARRAY['dice','sample space']),
(2,'Probability','Moderate','What is the probability of rolling an even number on a fair six-sided die?','1/6','1/3','1/2','2/3','C','problem_solving',ARRAY['dice','probability']),
(2,'Probability','Moderate','If two events cannot occur together, they are called what?','Independent','Mutually exclusive','Continuous','Identical','B','conceptual',ARRAY['mutually exclusive events']),
(2,'Probability','Moderate','What does conditional probability measure?','Probability of an event given another event has occurred','Only independent events','The mean of two events','The total number of outcomes','A','conceptual',ARRAY['conditional probability']),
(2,'Probability','Moderate','If P(A)=0.4 and P(B)=0.3 for independent events, what is P(A and B)?','0.12','0.30','0.70','1.20','A','problem_solving',ARRAY['independence','multiplication rule']),
(2,'Probability','Difficult','Bayes theorem is primarily used to calculate what?','A posterior probability from prior information and evidence','Only a mean','Only a variance','A sample size','A','conceptual',ARRAY['Bayes theorem','conditional probability']),
(2,'Probability','Difficult','For independent events A and B, which statement is true?','P(A|B)=P(A)','P(A|B)=0','P(A|B)=P(B)','P(A|B)=1','A','conceptual',ARRAY['independence','conditional probability']),
(2,'Probability','Difficult','What is the expected value of a fair six-sided die roll?','2.5','3','3.5','4','C','problem_solving',ARRAY['expected value','discrete probability']),
(2,'Probability','Difficult','Which distribution is commonly used to model the number of successes in a fixed number of independent trials?','Binomial','Uniform','Normal only','Exponential only','A','conceptual',ARRAY['binomial distribution','random variables']),

-- Machine Learning
(2,'Machine Learning','Easy','Which type of learning uses labeled training data?','Unsupervised learning','Supervised learning','Reinforcement learning','Random learning','B','conceptual',ARRAY['supervised learning']),
(2,'Machine Learning','Easy','What is the purpose of a training dataset?','Train the model to learn patterns','Only store predictions','Delete features','Create visualizations only','A','conceptual',ARRAY['training data']),
(2,'Machine Learning','Easy','Which task predicts a continuous numerical value?','Classification','Regression','Clustering','Association','B','conceptual',ARRAY['regression']),
(2,'Machine Learning','Easy','Which task assigns data points to categories?','Regression','Classification','Dimensionality reduction','Sampling','B','conceptual',ARRAY['classification']),
(2,'Machine Learning','Moderate','Why is data split into training and testing sets?','To evaluate generalization on unseen data','To increase the number of features','To remove all errors','To guarantee perfect accuracy','A','conceptual',ARRAY['train test split','generalization']),
(2,'Machine Learning','Moderate','What is overfitting?','Model performs well on training data but poorly on unseen data','Model is too simple for all data','Data contains no features','Model cannot train','A','conceptual',ARRAY['overfitting']),
(2,'Machine Learning','Moderate','Which algorithm is commonly used for classification?','Logistic Regression','Linear Search','K-means only','PCA only','A','conceptual',ARRAY['classification','logistic regression']),
(2,'Machine Learning','Moderate','What is a feature in machine learning?','An input variable used by a model','The final prediction only','A database password','A model file name','A','conceptual',ARRAY['features']),
(2,'Machine Learning','Difficult','What is regularization used for?','Reduce overfitting by penalizing model complexity','Increase duplicate rows','Remove the target variable','Guarantee zero training error','A','conceptual',ARRAY['regularization','overfitting']),
(2,'Machine Learning','Difficult','What does cross-validation help estimate?','Model performance across different data splits','Only the number of features','Database size','Missing values only','A','conceptual',ARRAY['cross-validation','model evaluation']),
(2,'Machine Learning','Difficult','Why can feature scaling be important for distance-based algorithms?','Features with larger scales can dominate distance calculations','It removes all missing values','It creates labels automatically','It always increases sample size','A','conceptual',ARRAY['feature scaling','distance']),
(2,'Machine Learning','Difficult','What is the main purpose of a validation set?','Tune model choices before final evaluation','Replace all training data','Store raw data permanently','Guarantee a causal relationship','A','conceptual',ARRAY['validation set','model tuning']),

-- SQL
(2,'SQL','Easy','Which SQL command is used to retrieve data from a table?','SELECT','GET','FETCHTABLE','READ','A','conceptual',ARRAY['SELECT','queries']),
(2,'SQL','Easy','Which clause filters rows based on a condition?','ORDER BY','WHERE','GROUP BY','SELECT','B','conceptual',ARRAY['WHERE','filtering']),
(2,'SQL','Easy','Which command adds a new row to a table?','ADD','INSERT','UPDATE','CREATE','B','conceptual',ARRAY['INSERT','DML']),
(2,'SQL','Easy','Which keyword sorts query results?','SORT','ORDER BY','ARRANGE','GROUP','B','conceptual',ARRAY['ORDER BY','sorting']),
(2,'SQL','Moderate','Which clause groups rows with the same values for aggregation?','GROUP BY','ORDER BY','WHERE','LIMIT','A','conceptual',ARRAY['GROUP BY','aggregation']),
(2,'SQL','Moderate','Which function counts rows?','SUM()','COUNT()','ROWS()','TOTAL()','B','conceptual',ARRAY['COUNT','aggregation']),
(2,'SQL','Moderate','What is the purpose of a primary key?','Uniquely identify each row','Store only text','Sort every query','Allow duplicate identifiers','A','conceptual',ARRAY['primary key','constraints']),
(2,'SQL','Moderate','Which JOIN returns rows with matching values in both tables?','INNER JOIN','LEFT JOIN','CROSS JOIN','FULL JOIN','A','conceptual',ARRAY['joins','inner join']),
(2,'SQL','Difficult','What is the main purpose of an index?','Improve lookup/query performance','Guarantee no NULL values','Replace a primary key always','Store passwords','A','conceptual',ARRAY['indexes','performance']),
(2,'SQL','Difficult','Which clause filters grouped results after aggregation?','WHERE','HAVING','ORDER BY','LIMIT','B','conceptual',ARRAY['HAVING','aggregation']),
(2,'SQL','Difficult','What does a LEFT JOIN preserve?','All rows from the left table','Only matching rows from the right table','Only unmatched rows','No rows','A','conceptual',ARRAY['LEFT JOIN','joins']),
(2,'SQL','Difficult','What is a transaction used for?','Group database operations into a controlled unit of work','Create only indexes','Display charts','Rename every column','A','conceptual',ARRAY['transactions','database consistency']),

-- Data Visualization
(2,'Data Visualization','Easy','Which chart is commonly used to compare values across categories?','Bar chart','Histogram only','Scatter plot only','Heatmap only','A','conceptual',ARRAY['bar chart','comparison']),
(2,'Data Visualization','Easy','Which chart is useful for showing trends over time?','Line chart','Pie chart','Tree map','Box plot','A','conceptual',ARRAY['line chart','time series']),
(2,'Data Visualization','Easy','Which chart shows the relationship between two numerical variables?','Scatter plot','Pie chart','Bar chart','Table only','A','conceptual',ARRAY['scatter plot','relationships']),
(2,'Data Visualization','Easy','What does a chart legend usually explain?','Meaning of visual encodings or series','Database credentials','Source code','File size','A','conceptual',ARRAY['legend','charts']),
(2,'Data Visualization','Moderate','Why should axes be labeled clearly?','To make the displayed values understandable','To increase file size','To hide outliers','To remove categories','A','conceptual',ARRAY['axes','communication']),
(2,'Data Visualization','Moderate','Which chart is particularly useful for displaying a distribution and outliers?','Box plot','Pie chart','Bar chart only','Flowchart','A','conceptual',ARRAY['box plot','outliers']),
(2,'Data Visualization','Moderate','What does a heatmap typically use to represent magnitude?','Color intensity','Audio','File names','Text length only','A','conceptual',ARRAY['heatmap','color encoding']),
(2,'Data Visualization','Moderate','Which visualization is most suitable for examining correlation between two numerical variables?','Scatter plot','Pie chart','Stacked bar only','Gauge only','A','conceptual',ARRAY['scatter plot','correlation']),
(2,'Data Visualization','Difficult','What is a misleading truncated axis likely to do?','Exaggerate apparent differences','Remove all trends','Increase sample size','Guarantee accurate interpretation','A','conceptual',ARRAY['axes','misleading visualization']),
(2,'Data Visualization','Difficult','What is overplotting in a scatter plot?','Too many marks overlap and obscure patterns','Axes have no labels','The chart has no title','Only one point is displayed','A','conceptual',ARRAY['scatter plot','overplotting']),
(2,'Data Visualization','Difficult','Which principle improves accessibility of visualizations?','Use sufficient contrast and avoid relying only on color','Use as many colors as possible','Remove labels','Hide legends','A','conceptual',ARRAY['accessibility','color']),
(2,'Data Visualization','Difficult','Why is consistent scaling important when comparing multiple charts?','It makes visual differences more comparable','It removes missing values','It changes the dataset','It guarantees causation','A','conceptual',ARRAY['scales','comparison']),

-- Data Cleaning
(2,'Data Cleaning','Easy','What is a missing value?','A value that is not recorded or available','A duplicated column name only','A sorted row','A valid maximum','A','conceptual',ARRAY['missing values']),
(2,'Data Cleaning','Easy','What is a duplicate record?','A repeated record representing the same observation','A missing value','A new category','A calculated average','A','conceptual',ARRAY['duplicates']),
(2,'Data Cleaning','Easy','Why are data types important?','They determine how values are interpreted and processed','They only change colors','They delete rows','They create dashboards automatically','A','conceptual',ARRAY['data types']),
(2,'Data Cleaning','Easy','What does standardizing text values help with?','Consistent representations of categories','Increasing missing values','Creating random data','Changing numeric ranges only','A','conceptual',ARRAY['text standardization','categorical data']),
(2,'Data Cleaning','Moderate','What is one common approach to missing numerical values?','Imputation using a statistic such as the median','Always replace with text','Duplicate every row','Delete the entire database','A','conceptual',ARRAY['missing values','imputation']),
(2,'Data Cleaning','Moderate','Why should duplicate rows be checked before analysis?','They can distort counts and statistics','They always improve accuracy','They create new variables','They prevent sorting','A','conceptual',ARRAY['duplicates','data quality']),
(2,'Data Cleaning','Moderate','What is an outlier?','An observation unusually far from the general pattern','A missing column','A duplicate header','A normal data type','A','conceptual',ARRAY['outliers']),
(2,'Data Cleaning','Moderate','Why is date formatting standardized during cleaning?','To ensure dates can be parsed and compared consistently','To remove all dates','To increase row count','To create categorical labels automatically','A','conceptual',ARRAY['dates','standardization']),
(2,'Data Cleaning','Difficult','Why can careless imputation cause data leakage?','Information unavailable at prediction time may influence filled values','It always reduces storage','It removes all features','It guarantees better generalization','A','scenario',ARRAY['imputation','data leakage']),
(2,'Data Cleaning','Difficult','What is the safest first step when finding suspicious outliers?','Investigate their source and context','Delete every outlier immediately','Replace all with zero','Ignore the entire dataset','A','scenario',ARRAY['outliers','data validation']),
(2,'Data Cleaning','Difficult','Why should categorical values such as Pune and pune be standardized?','They may represent the same category but be treated as different values','They always represent different cities','They are numeric errors','They cannot be compared','A','problem_solving',ARRAY['categorical data','standardization']),
(2,'Data Cleaning','Difficult','What is data leakage in a machine learning dataset?','Using information that would not be available when making the prediction','Removing duplicate rows','Converting strings to numbers','Sorting rows','A','conceptual',ARRAY['data leakage','machine learning']),

-- Pandas
(2,'Pandas','Easy','Which Pandas object is primarily used for tabular data?','DataFrame','Tensor','Graph','Tuple','A','conceptual',ARRAY['DataFrame','Pandas']),
(2,'Pandas','Easy','Which function reads a CSV file into Pandas?','pd.read_csv()','pd.open_csv()','pd.load()','pd.csv()','A','conceptual',ARRAY['read_csv','file input']),
(2,'Pandas','Easy','Which attribute returns the number of rows and columns?','shape','sizeonly','dimensions()','countall','A','conceptual',ARRAY['shape','DataFrame']),
(2,'Pandas','Easy','Which method displays the first few rows?','head()','first()','top()','start()','A','conceptual',ARRAY['head','inspection']),
(2,'Pandas','Moderate','Which method removes rows containing missing values?','dropna()','removeNA()','deleteNull()','clearna()','A','conceptual',ARRAY['dropna','missing values']),
(2,'Pandas','Moderate','Which method replaces missing values?','fillna()','replaceNA()','setnull()','fixna()','A','conceptual',ARRAY['fillna','missing values']),
(2,'Pandas','Moderate','How do you select a column named age from DataFrame df?','df["age"]','df(age)','df->age','df.column(age)','A','conceptual',ARRAY['column selection','DataFrame']),
(2,'Pandas','Moderate','Which method sorts a DataFrame by a column?','sort_values()','order_rows()','arrange()','sort_column_only()','A','conceptual',ARRAY['sort_values','sorting']),
(2,'Pandas','Difficult','What is the purpose of groupby() in Pandas?','Split data into groups for aggregation or transformation','Delete all groups','Sort columns alphabetically only','Convert every value to text','A','conceptual',ARRAY['groupby','aggregation']),
(2,'Pandas','Difficult','What does merge() commonly perform?','Combine DataFrames using matching keys','Remove missing values','Create a plot only','Convert all values to integers','A','conceptual',ARRAY['merge','joins']),
(2,'Pandas','Difficult','Why might vectorized Pandas operations be preferred over Python loops?','They are often more efficient and concise for column operations','They always use less memory','They eliminate all missing data','They require no data','A','conceptual',ARRAY['vectorization','performance']),
(2,'Pandas','Difficult','What is the purpose of reset_index()?','Convert the current index into columns and create a new default index','Delete all columns','Sort values','Fill missing values','A','conceptual',ARRAY['index','reset_index']),

-- NumPy
(2,'NumPy','Easy','What is the main array structure provided by NumPy?','ndarray','DataFrame','Series','Dictionary','A','conceptual',ARRAY['ndarray','arrays']),
(2,'NumPy','Easy','Which function creates an array of zeros?','np.zeros()','np.emptyzeros()','np.zero_array()','np.blank()','A','conceptual',ARRAY['zeros','array creation']),
(2,'NumPy','Easy','Which attribute gives the dimensions of a NumPy array?','shape','dimension()','size()','axes_only()','A','conceptual',ARRAY['shape','arrays']),
(2,'NumPy','Easy','Which function creates evenly spaced values between two endpoints?','np.linspace()','np.equalspace()','np.range_values()','np.space()','A','conceptual',ARRAY['linspace','array creation']),
(2,'NumPy','Moderate','What does NumPy broadcasting allow?','Operations between compatible arrays of different shapes','Only string processing','Database connections','Automatic plotting','A','conceptual',ARRAY['broadcasting','arrays']),
(2,'NumPy','Moderate','Which function calculates the mean of an array?','np.mean()','np.average_only()','np.mid()','np.center()','A','conceptual',ARRAY['mean','aggregation']),
(2,'NumPy','Moderate','What does reshape() do when the total number of elements is preserved?','Changes the array shape','Changes every value','Deletes the array','Sorts all values','A','conceptual',ARRAY['reshape','array shape']),
(2,'NumPy','Moderate','Which operation returns the largest value in an array?','np.max()','np.highest()','np.large()','np.top()','A','conceptual',ARRAY['max','aggregation']),
(2,'NumPy','Difficult','What is vectorization in NumPy?','Performing operations on arrays without explicit Python-level loops where possible','Converting arrays to strings','Creating database tables','Drawing charts manually','A','conceptual',ARRAY['vectorization','performance']),
(2,'NumPy','Difficult','What does axis=0 generally represent in a 2D NumPy reduction?','Operation down rows, producing one result per column','Operation across columns, producing one result per row','The third dimension','No dimension','A','conceptual',ARRAY['axis','array operations']),
(2,'NumPy','Difficult','What happens if two arrays cannot be broadcast together?','NumPy raises a shape-related error','They are always padded automatically','All values become zero','The smaller array is deleted','A','problem_solving',ARRAY['broadcasting','shape']),
(2,'NumPy','Difficult','Why can NumPy arrays be faster than Python lists for numerical computation?','They use efficient homogeneous array operations implemented in optimized code','They store random values','They always contain strings','They never use memory','A','conceptual',ARRAY['performance','ndarray']),

-- Business Intelligence
(2,'Business Intelligence','Easy','What is the primary purpose of Business Intelligence?','Turn data into useful insights for decision-making','Replace all databases','Write operating systems','Create passwords','A','conceptual',ARRAY['BI','decision making']),
(2,'Business Intelligence','Easy','What is a dashboard?','A visual display of key metrics and information','A database backup only','A programming language','A file compression tool','A','conceptual',ARRAY['dashboards','KPIs']),
(2,'Business Intelligence','Easy','What does KPI stand for?','Key Performance Indicator','Known Process Input','Key Program Interface','Knowledge Prediction Index','A','conceptual',ARRAY['KPI','metrics']),
(2,'Business Intelligence','Easy','What is a data warehouse mainly used for?','Centralized storage for analytical data','Only storing application passwords','Running video games','Sending emails','A','conceptual',ARRAY['data warehouse','analytics']),
(2,'Business Intelligence','Moderate','Why is ETL used in BI systems?','To extract, transform, and load data for analysis','To encrypt every dashboard','To create passwords','To delete historical data','A','conceptual',ARRAY['ETL','data integration']),
(2,'Business Intelligence','Moderate','What is a dimension in dimensional modeling?','A descriptive context such as customer, product, or date','Only a numeric measurement','A database password','A chart color','A','conceptual',ARRAY['dimensions','dimensional modeling']),
(2,'Business Intelligence','Moderate','What is a fact table generally designed to store?','Measurable business events and related keys','Only descriptive labels','User interface code','Images only','A','conceptual',ARRAY['fact table','dimensional modeling']),
(2,'Business Intelligence','Moderate','What is drill-down in a BI dashboard?','Moving from summarized information to more detailed levels','Deleting detailed data','Changing database passwords','Exporting only images','A','conceptual',ARRAY['drill-down','dashboards']),
(2,'Business Intelligence','Difficult','Why is data governance important in BI?','It helps maintain data quality, consistency, security, and accountability','It removes the need for data models','It guarantees every prediction is correct','It only changes dashboard colors','A','conceptual',ARRAY['data governance','data quality']),
(2,'Business Intelligence','Difficult','What is a star schema?','A fact table connected directly to dimension tables','A graph with no tables','A database with only one column','A dashboard theme','A','conceptual',ARRAY['star schema','dimensional modeling']),
(2,'Business Intelligence','Difficult','Why can KPI definitions be standardized across departments?','To ensure teams interpret and compare metrics consistently','To prevent all analysis','To remove historical records','To increase duplicate data','A','scenario',ARRAY['KPI','data governance']),
(2,'Business Intelligence','Difficult','What is the purpose of an OLAP system?','Support multidimensional analytical queries','Only process web forms','Store application logs only','Compile Python programs','A','conceptual',ARRAY['OLAP','analytics']);

INSERT INTO assessment_questions
(
    role_id, skill_name, difficulty, question_text,
    option_a, option_b, option_c, option_d,
    correct_answer, question_type, concepts_tested
)
SELECT
    t.role_id, t.skill_name, t.difficulty, t.question_text,
    t.option_a, t.option_b, t.option_c, t.option_d,
    t.correct_option, t.question_type, t.concepts_tested
FROM tmp_skillnet_questions t
WHERE NOT EXISTS (
    SELECT 1
    FROM assessment_questions q
    WHERE q.role_id = t.role_id
      AND q.skill_name = t.skill_name
      AND q.difficulty = t.difficulty
      AND q.question_text = t.question_text
);

COMMIT;

-- Verification
SELECT
    skill_name,
    difficulty,
    COUNT(*) AS question_count
FROM assessment_questions
WHERE role_id = 2
GROUP BY skill_name, difficulty
ORDER BY skill_name,
         CASE difficulty
             WHEN 'Easy' THEN 1
             WHEN 'Moderate' THEN 2
             WHEN 'Difficult' THEN 3
         END;

SELECT COUNT(*) AS total_questions_for_role_2
FROM assessment_questions
WHERE role_id = 2;
