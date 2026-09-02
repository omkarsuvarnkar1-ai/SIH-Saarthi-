from pathlib import Path

skills = {
"Python": {
"Easy":[
("Which keyword is used to define a function in Python?","def","function","define","func","A",["functions","syntax"]),
("Which data type stores an ordered collection that can be changed?","tuple","list","string","set","B",["lists","mutable data"]),
("What does len([10, 20, 30]) return?","2","3","10","30","B",["built-in functions","lists"]),
("Which symbol starts a single-line comment in Python?","//","#","--","/*","B",["comments","syntax"])
],
"Moderate":[
("What is the output of: x = [1, 2]; x.append(3); print(x)","[1, 2]","[1, 2, 3]","[3, 1, 2]","Error","B",["lists","methods"]),
("Which statement correctly creates a dictionary entry for age 20?","age = [20]","age: 20","{'age': 20}","{'age', 20}","C",["dictionaries"]),
("What does a Python list comprehension primarily provide?","A way to define classes","A compact way to create lists","A way to install packages","A method to connect to SQL","B",["list comprehension"]),
("What is the result of 7 // 2 in Python?","3.5","4","3","2","C",["operators","integer division"])
],
"Difficult":[
("What does the yield keyword allow a Python function to do?","Terminate the program","Create a generator and produce values lazily","Import a module","Define a constant","B",["generators","yield"]),
("Which method is commonly used to customize object creation in a Python class?","__init__","__start__","__create__","__newlist__","A",["classes","constructors"]),
("What is the main purpose of a decorator in Python?","To change Python syntax","To modify or extend a function or class without changing its core code","To delete unused variables","To convert lists to tuples","B",["decorators","functions"]),
("What does the with statement commonly help manage?","Only mathematical expressions","Resources such as files using context managers","CPU threads only","Package installation","B",["context managers","resource management"])
]},
"SQL":{
"Easy":[
("Which SQL command is used to retrieve data from a table?","GET","SELECT","FETCHROW","READ","B",["SELECT","queries"]),
("Which clause filters rows based on a condition?","ORDER BY","GROUP BY","WHERE","HAVING","C",["WHERE","filtering"]),
("Which keyword sorts query results?","SORT","ORDER BY","ARRANGE","SEQUENCE","B",["ORDER BY","sorting"]),
("Which SQL command adds a new row to a table?","ADD","INSERT","CREATE","APPEND","B",["INSERT","DML"])
],
"Moderate":[
("Which clause is used to group rows that have the same values?","GROUP BY","GROUP","ORDER","MERGE","A",["GROUP BY","aggregation"]),
("Which function returns the number of rows?","TOTAL()","COUNT()","ROWS()","NUMBER()","B",["COUNT","aggregate functions"]),
("Which JOIN returns rows with matching values in both tables?","LEFT JOIN","FULL JOIN","INNER JOIN","CROSS JOIN","C",["joins","INNER JOIN"]),
("Which clause filters grouped results after aggregation?","WHERE","HAVING","GROUP FILTER","AFTER","B",["HAVING","aggregation"])
],
"Difficult":[
("What is the main purpose of a database index?","To store backups","To speed up data retrieval for selected queries","To replace tables","To encrypt every column","B",["indexes","query performance"]),
("What does a window function allow you to do?","Delete a database","Perform calculations across related rows without collapsing them into one row","Create a new server","Rename every column","B",["window functions"]),
("What does a LEFT JOIN return?","Only matching rows","All rows from the left table and matching rows from the right table","All rows from the right table only","Only unmatched rows","B",["joins","LEFT JOIN"]),
("What is a correlated subquery?","A query that cannot contain WHERE","A subquery that refers to columns from the outer query","A query that only uses indexes","A query with no SELECT","B",["subqueries","correlated queries"])
]},
"Statistics":{
"Easy":[
("What does the mean represent?","The middle value after sorting","The arithmetic average","The most frequent value","The largest value","B",["mean","descriptive statistics"]),
("What is the median?","The average of all values","The middle value in ordered data","The most frequent value","The range","B",["median"]),
("What does the mode represent?","The smallest value","The largest value","The most frequently occurring value","The average","C",["mode"]),
("What does standard deviation measure?","The number of observations","The spread of values around the mean","The maximum value","The sample size","B",["standard deviation","dispersion"])
],
"Moderate":[
("What does a correlation coefficient close to +1 indicate?","Strong negative linear relationship","Little relationship","Strong positive linear relationship","Equal variances","C",["correlation"]),
("Why is a sample used in statistics?","It always contains every population member","It can provide information about a population with less data collection","It eliminates all uncertainty","It guarantees a causal conclusion","B",["sampling","population"]),
("What does variance measure?","Central tendency","Squared spread around the mean","Number of categories","Probability only","B",["variance"]),
("What is a confidence interval used for?","To guarantee a parameter's exact value","To give a range of plausible values for a population parameter","To remove outliers automatically","To sort data","B",["confidence intervals","inference"])
],
"Difficult":[
("What does a p-value represent in hypothesis testing?","The probability that the null hypothesis is definitely true","The probability, under the null hypothesis, of observing a result at least as extreme as the one obtained","The population mean","The sample size","B",["p-value","hypothesis testing"]),
("What is a Type I error?","Failing to reject a false null hypothesis","Rejecting a true null hypothesis","Using a small sample","Calculating the median incorrectly","B",["Type I error","hypothesis testing"]),
("Why can correlation not by itself establish causation?","Correlation cannot be calculated numerically","A relationship can arise from confounding variables or other explanations","Causation is never possible","Correlation only applies to categorical data","B",["correlation","causation"]),
("What is the central limit theorem mainly useful for?","Showing every dataset is normal","Describing the approximate normality of the sampling distribution of the mean under suitable conditions","Removing all sampling bias","Making the population finite","B",["central limit theorem","sampling distributions"])
]},
"Probability":{
"Easy":[
("What is the probability of an event that is certain to occur?","0","0.5","1","-1","C",["probability"]),
("If a fair coin is tossed once, what is the probability of heads?","0","0.25","0.5","1","C",["basic probability"]),
("What is the probability of an impossible event?","0","0.5","1","-1","A",["probability"]),
("If a fair six-sided die is rolled, what is the probability of getting a 3?","1/2","1/3","1/6","1/12","C",["probability","dice"])
],
"Moderate":[
("If two events are independent, how is P(A and B) calculated?","P(A)+P(B)","P(A)P(B)","P(A)-P(B)","P(A)/P(B)","B",["independence","multiplication rule"]),
("What does conditional probability P(A|B) describe?","Probability of B without A","Probability of A given that B has occurred","Probability of neither event","Probability that A and B are impossible","B",["conditional probability"]),
("For mutually exclusive events A and B, what is P(A and B)?","1","P(A)+P(B)","0","P(A)P(B)","C",["mutually exclusive events"]),
("What is the complement of an event A?","A only","All outcomes not in A","Only outcomes in A","The mean of A","B",["complement","probability"])
],
"Difficult":[
("Bayes' theorem is primarily used to calculate what?","A derivative","A posterior probability from prior information and evidence","A sample mean only","A correlation coefficient","B",["Bayes theorem"]),
("If P(A)=0.4, P(B)=0.5, and A and B are independent, what is P(A∩B)?","0.1","0.2","0.4","0.9","B",["independence","joint probability"]),
("What is the expected value of a discrete random variable?","Always its most likely value","The probability-weighted average of its possible values","Always zero","Its largest possible value","B",["expected value","random variables"]),
("What property must the probabilities of all outcomes in a probability distribution satisfy?","They must all be greater than 1","They must sum to 1","They must all be equal","They must sum to 0","B",["probability distributions"])
]},
"Machine Learning":{
"Easy":[
("What is supervised learning trained with?","Only unlabeled data","Labeled data","No data","Random numbers only","B",["supervised learning"]),
("What is a feature in a machine-learning dataset?","The final prediction only","An input variable used by a model","A database password","A model file","B",["features"]),
("What is classification used for?","Predicting categories or classes","Only predicting continuous values","Sorting database rows","Compressing files","A",["classification"]),
("What is a training set used for?","To fit a machine-learning model","Only to display results","To delete features","To store passwords","A",["training data"])
],
"Moderate":[
("Why is a validation set used?","To tune or compare models during development","To replace the training set completely","To guarantee perfect accuracy","To encrypt data","A",["validation set","model selection"]),
("What does overfitting mean?","A model performs well on training data but poorly on unseen data","A model cannot learn","A model has no parameters","A dataset is too small to open","A",["overfitting"]),
("What is the purpose of feature scaling for algorithms sensitive to magnitude?","To put features on comparable scales","To remove every feature","To create labels","To increase the number of rows","A",["feature scaling"]),
("What does accuracy measure in classification?","The proportion of correct predictions","The number of features","The training time","The number of classes only","A",["accuracy","classification metrics"])
],
"Difficult":[
("What is regularization primarily used for?","To reduce overfitting by penalizing model complexity","To increase duplicate rows","To remove labels","To guarantee zero error","A",["regularization","overfitting"]),
("Why is cross-validation useful?","It estimates model performance across multiple train-validation splits","It always increases training data","It removes the target variable","It converts classification into SQL","A",["cross-validation"]),
("What is data leakage in machine learning?","When information unavailable at prediction time improperly influences model training","When data is stored in a CSV","When a model has too few layers","When training takes too long","A",["data leakage"]),
("For highly imbalanced classification, why can accuracy be misleading?","A majority-class prediction can achieve high accuracy while missing the minority class","Accuracy cannot be calculated","Accuracy always equals recall","There are no labels","A",["imbalanced data","accuracy"])
]},
"Pandas":{
"Easy":[
("Which Pandas object is a two-dimensional labeled table?","Series","DataFrame","IndexOnly","PanelRow","B",["DataFrame"]),
("Which function reads a CSV file into Pandas?","pd.open_csv()","pd.read_csv()","pd.csv()","pd.load_csv()","B",["read_csv"]),
("Which attribute gives the number of rows and columns of a DataFrame?","shape","sizeonly","dimensions()","form","A",["DataFrame","shape"]),
("Which method displays the first few rows of a DataFrame?","head()","first()","top()","start()","A",["head"])
],
"Moderate":[
("Which Pandas method removes rows containing missing values by default?","dropna()","remove_nulls()","delete_na()","clearna()","A",["missing values"]),
("What does groupby() help you do?","Group data for aggregation or analysis","Delete groups","Rename every column","Import a database","A",["groupby","aggregation"]),
("Which method combines DataFrames by matching key columns?","merge()","join_rows()","combine_key()","match()","A",["merge"]),
("What does df['age'] typically return?","A Pandas Series containing the age column","A database connection","A scalar only","A new Python interpreter","A",["column selection","Series"])
],
"Difficult":[
("Why might vectorized Pandas operations be preferred over explicit Python loops?","They can use optimized underlying operations and are often faster and clearer","They always use no memory","They eliminate all missing values","They change SQL syntax","A",["vectorization","performance"]),
("What is a MultiIndex in Pandas?","A hierarchical index with multiple levels","A list of multiple files","A database key only","A model parameter","A",["MultiIndex"]),
("What does transform() commonly allow in groupby workflows?","Apply a function while returning results aligned with the original index","Delete groups","Create a new database","Sort only strings","A",["groupby","transform"]),
("Why can chained indexing in Pandas be problematic?","It can lead to ambiguous assignment behavior and warnings","It always deletes the DataFrame","It disables indexing","It only works on integers","A",["indexing","SettingWithCopy"])
]},
"NumPy":{
"Easy":[
("What is the main object used by NumPy for efficient numerical arrays?","ndarray","DataFrame","Dictionary","TupleTable","A",["ndarray"]),
("Which function creates an array from a Python list?","np.array()","np.list()","np.makearray()","np.ndarray_list()","A",["arrays"]),
("What does np.zeros((2, 3)) create?","A 2 by 3 array of zeros","A 3 by 3 array of ones","A list of three zeros","A scalar zero","A",["zeros","array shape"]),
("Which attribute gives an array's dimensions?","shape","size()","dimension","form()","A",["shape"])
],
"Moderate":[
("What is broadcasting in NumPy?","A mechanism that allows operations on arrays with compatible different shapes","Sending arrays over a network","Converting arrays to strings","Sorting an array only","A",["broadcasting"]),
("What does np.mean() calculate?","The arithmetic mean","The median only","The maximum only","The number of dimensions","A",["mean","statistics"]),
("What does array slicing generally return?","A selected portion of an array","A database table","A Python class","A random scalar only","A",["slicing"]),
("Why are NumPy arrays often more memory-efficient than Python lists for numeric data?","They store homogeneous numeric data in a compact representation","They always store strings","They duplicate every value","They use SQL internally","A",["arrays","memory"])
],
"Difficult":[
("What does vectorization in NumPy primarily mean?","Performing operations on whole arrays using optimized routines instead of explicit Python loops","Converting arrays to vectors only","Using a database server","Encrypting numerical data","A",["vectorization"]),
("If two NumPy arrays have shapes (3,1) and (1,4), what shape can their elementwise sum have under broadcasting?","(3,4)","(1,1)","(3,1)","(1,4)","A",["broadcasting","array shapes"]),
("Why can np.linalg.solve(A, b) be preferable to explicitly computing inv(A) @ b?","It generally solves the linear system more directly and can be more numerically appropriate","It always changes A into an integer","It removes all rounding error","It requires no matrix A","A",["linear algebra","numerical methods"]),
("What does a NumPy view generally mean?","An array object that can share underlying data with another array","A printed copy only","A database view","A read-only file","A",["views","memory"])
]},
"Data Visualization":{
"Easy":[
("Which chart is commonly used to show trends over time?","Line chart","Pie chart only","Box plot only","Heatmap only","A",["line chart","time series"]),
("Which chart is useful for comparing values across categories?","Bar chart","Line chart only","Scatter plot only","Histogram only","A",["bar chart"]),
("What does a histogram show?","The distribution of numerical values across bins","Only category names","Database relationships","A time-series forecast","A",["histogram","distribution"]),
("Which chart is commonly used to examine the relationship between two numerical variables?","Scatter plot","Pie chart","Bar chart only","Table only","A",["scatter plot","relationships"])
],
"Moderate":[
("What is the main purpose of using a legend?","To explain the meaning of visual encodings such as colors or line types","To calculate averages","To remove missing data","To change database schemas","A",["legend","visual encoding"]),
("Why should chart axes be clearly labeled?","To make units and variables understandable","To increase file size","To hide outliers","To randomize observations","A",["axis labels","communication"]),
("What does a box plot help summarize?","Distribution, median, quartiles, and potential outliers","Only category names","SQL joins","Neural-network layers","A",["box plot","distribution"]),
("What is a heatmap useful for?","Showing values or relationships using color intensity in a matrix-like layout","Only displaying paragraphs","Creating database indexes","Sorting text files","A",["heatmap","visual encoding"])
],
"Difficult":[
("What is overplotting in a scatter plot?","So many marks overlap that individual observations become difficult to distinguish","Axes are missing","The chart has no title","Values are sorted incorrectly","A",["overplotting","scatter plots"]),
("Why can a truncated y-axis mislead in a bar chart?","It can exaggerate apparent differences between bar heights","It always removes the data","It converts values to percentages","It prevents labeling","A",["misleading charts","axes"]),
("What is a diverging color scale generally suited for?","Data centered around a meaningful midpoint such as zero","Only unordered labels","File names","Unique IDs","A",["color scales","diverging data"]),
("What is the purpose of small multiples?","Showing related subsets using repeated, consistent charts for comparison","Combining unrelated charts randomly","Removing dimensions","Replacing all tables with one chart","A",["small multiples","comparative visualization"])
]},
"Data Cleaning":{
"Easy":[
("What is a missing value?","A data field for which no valid value is recorded","A duplicate column name only","A sorted value","A database table","A",["missing data"]),
("What is a duplicate record?","A row repeated when it should represent a separate observation only once","A missing value","A new column","A valid unique ID","A",["duplicates"]),
("Why should text categories often be standardized?","To avoid treating equivalent labels with different formatting as different categories","To increase duplicates","To remove all numbers","To encrypt data","A",["standardization","categorical data"]),
("What is an outlier?","An observation unusually far from the rest of the data","A missing column","A duplicate database","A data type","A",["outliers"])
],
"Moderate":[
("Why is it important to inspect data types during cleaning?","Incorrect types can cause invalid calculations or analysis","Types never affect analysis","It only changes colors","It removes every duplicate","A",["data types"]),
("What is one common way to handle missing numeric values?","Impute using an appropriate statistic or model when justified","Always replace with zero","Always delete the entire dataset","Convert them to text","A",["imputation","missing data"]),
("Why should duplicate removal consider a meaningful key?","Some repeated-looking rows may be legitimate observations","All duplicates are always errors","Keys are only for passwords","It guarantees normality","A",["duplicates","data quality"]),
("What is data validation?","Checking whether data meets expected rules, ranges, formats, or constraints","Deleting every unusual value","Sorting only","Making all values strings","A",["validation","data quality"])
],
"Difficult":[
("Why should outliers not be automatically removed?","They may be valid observations or contain important information about the process","Outliers never affect statistics","They are always missing values","Removing them guarantees unbiased results","A",["outliers","data quality"]),
("What is data leakage during preprocessing?","Using information from outside the training context, such as future or test information, when transforming training data","Saving data as CSV","Removing duplicate rows","Changing column names","A",["data leakage","preprocessing"]),
("Why should preprocessing steps sometimes be fitted only on training data?","To prevent information from validation or test data influencing the model","To reduce the number of columns to zero","To guarantee perfect accuracy","To make all features categorical","A",["preprocessing","data leakage"]),
("What is schema validation useful for?","Ensuring incoming data follows expected columns, types, and constraints","Making charts prettier","Increasing random noise","Replacing databases","A",["schema validation","data quality"])
]},
"Business Intelligence":{
"Easy":[
("What is a dashboard?","A visual interface that presents important metrics and information","A database password","A programming language","A file compression method","A",["dashboards","BI"]),
("What does KPI stand for?","Key Performance Indicator","Known Process Index","Key Program Input","Knowledge Performance Interface","A",["KPI","business metrics"]),
("What is a data warehouse primarily used for?","Storing integrated data for reporting and analysis","Running video games","Replacing every application database","Encrypting files only","A",["data warehouse","BI"]),
("What is a report in business intelligence?","A structured presentation of data and analysis for decision-making","A programming compiler","A network protocol","A database backup only","A",["reporting","BI"])
],
"Moderate":[
("What is ETL?","Extract, Transform, Load","Evaluate, Test, Launch","Encode, Transfer, Link","Extract, Train, Learn","A",["ETL","data integration"]),
("Why is dimensional modeling used in analytics?","To organize data into structures that support efficient reporting and analysis","To encrypt databases","To remove all metrics","To replace SQL","A",["dimensional modeling"]),
("What is a fact table generally designed to store?","Quantitative business events or measures linked to dimensions","Only user passwords","Only chart colors","Only database metadata","A",["fact tables","data warehouse"]),
("What is a dimension table used for?","Descriptive attributes used to analyze facts by context such as product, customer, or date","Only numerical model weights","Temporary passwords","SQL execution plans","A",["dimension tables","data warehouse"])
],
"Difficult":[
("What is OLAP designed to support?","Multidimensional analysis of data for reporting and decision-making","Only transactional data entry","Operating-system scheduling","Password storage","A",["OLAP","analytics"]),
("What is a star schema?","A dimensional model with a central fact table connected directly to dimension tables","A database with no tables","A network topology only","A chart type","A",["star schema","dimensional modeling"]),
("Why can slowly changing dimensions be important in a data warehouse?","They help preserve or manage changes in descriptive attributes over time","They speed up internet connections","They remove all historical data","They replace fact tables","A",["slowly changing dimensions","data warehouse"]),
("What is a semantic layer in BI commonly intended to provide?","A business-friendly representation of metrics, dimensions, and relationships used consistently across reports","A database firewall","A file compression layer","A machine-learning optimizer","A",["semantic layer","BI"])
]}
}

def sql_quote(s):
    return "'" + s.replace("'", "''") + "'"

lines = []
lines.append("-- SkillNet assessment question-bank expansion")
lines.append("-- Adds 12 NEW questions per skill: 4 Easy + 4 Moderate + 4 Difficult.")
lines.append("-- Existing questions are NOT deleted or modified.")
lines.append("-- Expected result: 5 questions per difficulty for each of the 10 skills.")
lines.append("-- role_id is set to 2, matching the role_id shown in the supplied database output.")
lines.append("")
lines.append("BEGIN;")
lines.append("")
lines.append("CREATE TEMP TABLE tmp_skillnet_questions (")
lines.append("    role_id INTEGER,")
lines.append("    skill_name TEXT,")
lines.append("    difficulty TEXT,")
lines.append("    question_text TEXT,")
lines.append("    option_a TEXT,")
lines.append("    option_b TEXT,")
lines.append("    option_c TEXT,")
lines.append("    option_d TEXT,")
lines.append("    correct_option TEXT,")
lines.append("    question_type TEXT,")
lines.append("    concepts_tested TEXT[]")
lines.append(") ON COMMIT DROP;")
lines.append("")
lines.append("INSERT INTO tmp_skillnet_questions")
lines.append("    (role_id, skill_name, difficulty, question_text, option_a, option_b, option_c, option_d, correct_option, question_type, concepts_tested)")
lines.append("VALUES")

vals = []
for skill, diffs in skills.items():
    for diff in ["Easy","Moderate","Difficult"]:
        for q in diffs[diff]:
            text,a,b,c,d,ans,concepts = q
            vals.append(
                "(" + ", ".join([
                    "2", sql_quote(skill), sql_quote(diff), sql_quote(text),
                    sql_quote(a), sql_quote(b), sql_quote(c), sql_quote(d),
                    sql_quote(ans), "'MCQ'",
                    "ARRAY[" + ", ".join(sql_quote(x) for x in concepts) + "]"
                ]) + ")"
            )
lines.append(",\n".join(vals) + ";")
lines.append("")
lines.append("-- Detect the correct-answer column used by your existing table.")
lines.append("-- This supports the common names correct_option or correct_answer.")
lines.append("DO $$")
lines.append("DECLARE")
lines.append("    answer_column TEXT;")
lines.append("BEGIN")
lines.append("    SELECT column_name")
lines.append("    INTO answer_column")
lines.append("    FROM information_schema.columns")
lines.append("    WHERE table_schema = 'public'")
lines.append("      AND table_name = 'assessment_questions'")
lines.append("      AND column_name IN ('correct_option', 'correct_answer')")
lines.append("    ORDER BY CASE column_name")
lines.append("        WHEN 'correct_option' THEN 1")
lines.append("        WHEN 'correct_answer' THEN 2")
lines.append("    END")
lines.append("    LIMIT 1;")
lines.append("")
lines.append("    IF answer_column IS NULL THEN")
lines.append("        RAISE EXCEPTION 'Could not find correct_option or correct_answer in assessment_questions.';")
lines.append("    END IF;")
lines.append("")
lines.append("    EXECUTE format($sql$")
lines.append("        INSERT INTO assessment_questions")
lines.append("        (role_id, skill_name, difficulty, question_text, option_a, option_b, option_c, option_d, %I, question_type, concepts_tested)")
lines.append("        SELECT")
lines.append("            t.role_id, t.skill_name, t.difficulty, t.question_text,")
lines.append("            t.option_a, t.option_b, t.option_c, t.option_d,")
lines.append("            t.correct_option, t.question_type, t.concepts_tested")
lines.append("        FROM tmp_skillnet_questions t")
lines.append("        WHERE NOT EXISTS (")
lines.append("            SELECT 1")
lines.append("            FROM assessment_questions q")
lines.append("            WHERE q.role_id = t.role_id")
lines.append("              AND q.skill_name = t.skill_name")
lines.append("              AND q.difficulty = t.difficulty")
lines.append("              AND q.question_text = t.question_text")
lines.append("        )")
lines.append("    $sql$, answer_column);")
lines.append("END $$;")
lines.append("")
lines.append("COMMIT;")
lines.append("")
lines.append("-- ============================================================")
lines.append("-- VERIFY THE QUESTION BANK")
lines.append("-- ============================================================")
lines.append("SELECT")
lines.append("    role_id,")
lines.append("    skill_name,")
lines.append("    difficulty,")
lines.append("    COUNT(*) AS question_count")
lines.append("FROM assessment_questions")
lines.append("WHERE role_id = 2")
lines.append("  AND skill_name IN (")
lines.append("      'Python', 'SQL', 'Statistics', 'Probability', 'Machine Learning',")
lines.append("      'Pandas', 'NumPy', 'Data Visualization', 'Data Cleaning',")
lines.append("      'Business Intelligence'")
lines.append("  )")
lines.append("GROUP BY role_id, skill_name, difficulty")
lines.append("ORDER BY skill_name,")
lines.append("         CASE difficulty")
lines.append("             WHEN 'Easy' THEN 1")
lines.append("             WHEN 'Moderate' THEN 2")
lines.append("             WHEN 'Difficult' THEN 3")
lines.append("         END;")
lines.append("")
lines.append("-- Expected count for EVERY row above: 5")

content = "\n".join(lines)
path = Path("/mnt/data/skillnet_assessment_questions_additional.sql")
path.write_text(content, encoding="utf-8")

print(f"Created: {path}")
print("Questions added by this file: 120")
print("Skills: 10")
print("Additional questions per skill: 12")
print("Additional questions per difficulty per skill: 4")
