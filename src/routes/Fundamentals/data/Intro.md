---
title: Intro to Data Science
slug: Intro
category: Fundamentals
parent: Data-Science
order: 2
---

- [Intro Video](https://www.canva.com/design/DAFs2wibvG4/06VSmKyZnxLzWOiSBulvbQ/view?utm_content=DAFs2wibvG4&utm_campaign=designshare&utm_medium=link&utm_source=viewer)

# Welcome to Data Science

## What is this thing we call Data Science?

**Data Science, as understood through the skills used**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/28b39b88-3cb1-4509-938a-d4456bca6a2c/Untitled.png)

**Data Science, as understood through its process**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/472c3b42-5622-43ed-b377-a2737b0f3e42/Untitled.png)

Video:

[Data Science in 5 Minutes](https://www.youtube.com/watch?v=X3paOmcrTjQ)

**Data Science, as understood through linguistics**

- **Data:** Digital representation of information.
- **Science:** An applied and interdisciplinary science, applying scientific knowledge from formal sciences (math, logic) with social or natural sciences (sociology, computer science, biology, e.g.).

**Data science** is a formal, applied, and interdisciplinary science that works with and analyzes large amounts of data to provide meaningful information that can be used to make decisions and solve problems. Data science includes work in computation, statistics, analytics, data mining, and programming.

The purpose of data science is to provide actionable intelligence in the form of testable explanation, predictions, interactive intelligence, and intelligent machines.

**Data Science, as understood through what it is not**

Data Science is often equated with the topics below, but is not equal to any one of them.

*DS != Statistics*

- Statistics forces us to make assumptions about the nature of the relationship between variables, distribution of data, hypotheses, etc.
- Statistics is used in data science, but it is only a small part of it.
- Machine learning turns this process around. Given a large trove of data, the computer taunts us by saying "If only you knew what question to ask me, I would give you some very interesting answers based on the data!"
    
    **[1](https://ds.codeup.com/fundamentals/intro-to-data-science/#fn:1)**
    

*DS != Business Analysis*

- Business analysis rarely involves unstructured data, data science often involves unstructured data.
- Business analysts usually work within relational databases and/or spreadsheets. Data scientists will often use relational databases as data sources, but will move data out of there quickly to more easily work with the data.
- Business analysts generally work with a size of data that can be worked with on a laptop, or within a RDMBS. Data scientists will often have to work with larger data sets.
- Business analytics projects are likely to be developing dashboards with KPIs, ad-hoc analysis and reporting, or schedule reports. Data science projects will include the above projects often, as well, but will also expand to more complicated analysis, NLP, predicted modeling, etc.
- Business analysis is light on the ‘decision science’ and heavy on the KPI reporting. Data science is all about decision science.
- Often a data or business analyst role will upskill into a data science role.

*DS != DS*

- Do not assume a common understanding among every hiring manager, recruiter, and applicant.
- There is not a single standard or understanding on how to effectively teach data science.

*DS != Python*

- Learning R, Python, or other tools is not what makes someone a data scientist.
- Just as knowing how to use autoCAD does not make me an architect… those are tools that enable someone to do much of the work required in data science.

**Data Science, as understood through its products**

- Product Recommendations
    - Products you may purchase based on the purchases watched of others with similar purchasing habits -or- Music you may like based on the music liked by others with similar music tastes.
    - Products you may purchase based on your previous purchases -or- music you may like based on your previous listening habits or music "liked".
    - Products you may purchase based on products that are often purchased together by customers.
    - People you may be likely to connect with based on a highly connected social network.
- Target Marketing: banner ads or social media ads, e.g.
- Virtual Assistances: Alexa, Hey Google, Siri.
- Logistics: [UPS data scientists discovered that if drivers took only right turns, it would decrease fuel consumption, increase safety, and reduce wasted time.](https://money.cnn.com/video/news/2010/12/13/n_cs_ups_no_left_turn.fortune/) This shaved 20.4 million miles off routes in one year!
- Business Operations: Predicting churn.
- Product Management: Predicting lifecycle of a product to know when it may need maintenance or replacement, e.g.
- Insurance: Likelihood of disease, auto accident, flooding for insurance premiums.
- Meteorology: Path a hurricane may take.
- Security and Defense: Terrorism, cyber attacks.
- Sales: Likelihood of engagement.

Video: [Data Science for Social Good](https://www.youtube.com/watch?v=8RX1BCjJlqo)

**Finally, Data Science, as understood through its methodologies**

You will find in the image below how your learning of data science will be structured at Codeup, which starts with basic skills, walks through the primary machine learning methodologies, and ending with application of it all in a capstone.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/b3db0b6f-9cd8-45c4-b963-ef418de61a08/Untitled.png)

## Five Questions Machine Learning Methods Can Answer:

- How many or how much of something? (Regression)
- Is this observation A, B, or C? (Classification)
- What groupings exist in the data? (Clustering)
- Is this thing weird? (Anomaly Detection)
- What do we expect to happen next? (Time Series)

## Key Concepts in Data Science

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/478fa372-955d-416e-99d8-6d5ff8c9e829/Untitled.png)

## Types of Machine Learning Methods

- Regression is a supervised machine learning approach to predicting a continuous target variable.
- Classification is a supervised machine learning approach to predict a categorical target variable.
- Clustering is used to identify groupings of similar observations.
- Time Series Analysis is about finding patterns in temporal data and making predictions; forecasting. Each observation/row for time series represents a day or another measure of time.
- Anomaly Detection is not a single model, but a broad approach to identifying anomalous data points that involves domain knowledge, statistics, and other ML algorithms.
- Natural Language Processing (NLP) is not a single model, but a broad approach to working with plain text that involves other ML algorithms.

## Examples of Machine Learning Methods

- Regression: Predicting sales using features like price, number of repeat customers, number of returns, and amount website visitors.
- Classification: Predicting if a customer will leave (called churn) based on features like their monthly bill, how long they've been a customer, and what services they use.
- Clustering: Grouping customers based on their similarities in purchases, spending habits, and preferences.
- Time Series Analysis: Predicting temperature using temporal data like the temperatures on the same date across the last 10 years or temperatures from the last 30 days.
- Anomaly Detection: Identifying fraudulent transactions and detecting cyber crime.
- Natural Language Processing: Identifying topics and sentiment in survey results.

**Artifical Intelligence vs. Machine Learning vs. Deep Learning**

- Algorithms
    - The foundation of AI, ML, and DL.
    - Simply, recipes for computers.
    - A series of repeatable steps, usually expressed mathematically, to accomplish specific data science tasks or solve a problem.
    - Data scientists need to understand certain algorithms in so far as to be able to identify how appropriate an algorithm is for a particular problem as well as to be able to effectively tune the model.
    - Examples: Linear and logistic regression, Naive Bayes, and KNN (K-Nearest Neighbors).
- Machine Learning (ML)
    - Helps computers predict outcomes without explicit human input.
    - Process of 'learning' the underlying patterns in a set of observations that is represented through data.
    - Patterns are extracted using algorithms and can then be represented in a mathematical model.
    - The model is then used to predict outcomes of new observations.
    - "Capable of generalizing information from large data sets as well as detecting and extrapolating patterns to apply information to new solutions and actions."
        
        **[2](https://ds.codeup.com/fundamentals/intro-to-data-science/#fn:4)**
        
- Artificial Intelligence (AI)
    - Began in the 1950s as the programming of computers to perform simple human tasks.
    - Early AI was based on rules systems provided by people. For example, in a Blackjack game, the computer follows a specific set of rules to play as a dealer or another player. There's no learning or getting better at the game over time, only following the rules.
    - AI programs do not always enable the machine to learn or make adjustments based on new information.
    - AI does imply that the program can do difficult tasks or generate repetitive solutions based off its code.
    - Classic AI (aka Simple AI, Narrow AI or General AI): Tuned for a specific question, unable to learn, limited to highly-specific solutions to individual problems. Example: facial recognition on iphone.
    - Artificial Neural Networks uses a network of interconnected "neurons" which communicate with each other and can be adjusted based on their inputs and outputs.
- The intersection of ML and AI
    - Once a machine learning program collects information and supplies outputs, AI can be used to create a new algorithm so that a machine learning program can update its algorithm, e.g. its parameters, accordingly.
    - Deep Learning (DL) is a subset of ML and AI that uses neural network algorithms, or Artificial Neural Networks (ANN), with 3 or more hidden layers to solve problems such as speech recognition, translation, and image recognition. In ANNs, recognizing the patterns falls in the simple-for-humans-hard-for-machines task category of artificial intelligence, and the generalizability of the model, i.e. the ability to apply to new observations, falls in the machine learning category.

**Supervised vs. Unsupervised Machine Learning**

- **Supervised machine learning** algorithms use labeled observations, i.e. observations with a known outcome or human input, to develop a model that will then be used to predict or estimate the outcome of new observations which are not known or labeled.
- **Unsupervised machine learning** algorithms are considered self-learning as they not rely on labeled observations, i.e. observations with a known outcome or human input. Whereas the supervised algorithm would accept and use the labels assigned to it to model the relationship between the inputs (features) and output (target), an unsupervised algorithm would learn the differences of observations using only the features (no output) and assign its own labels to differentiate.
- **Reinforcement learning** is a subset of unsupervised machine learning where the machine seeks to maximize reward. The machine, or "agent," learns through trial and error as well as reward and punishment. For example, if you are training a machine to win at chess, you would want it to be positively reinforced when it makes moves that win material, such as capturing a pawn, and negatively reinforced when it makes moves that lose material, such as having a pawn captured. Combinations of these rewards and punishments result in a self-learning machine that improves at chess over time.

**Structured vs. Unstructured Data vs. Big Data**

- **Big data** is an evolving phrase. Recently, it is most commonly used to mean a massive volume of both structured and unstructured data that is so large it is difficult to process using traditional database and software techniques. The volume of data is too big, it moves too fast, or it exceeds current processing capacity. Often it is defined by the "4 V's": Volume, Velocity, Variety, and Veracity. One working definition of "big data" is data that is too large to store or process on a single computer and needs to be processed using a distributed system.
- **Unstructured data** is that which does not fit a predefined data model. Often this data does not fit into the typical row-column structure of a database. Images, emails, videos, audio, and pretty much anything else that might be difficult to "tabify" might constitute examples of unstructured data.
- **Structured data** is that which can fit into a predefined data model. When working with unstructured data, an early step is to turn it into structured data, to give it structure.

**Building Models**

- **Data modeling** is building mathematical or statistical models that turn data into predictive and actionable information, that can predict and explain outcomes.
- **Hyperparameter:** A configuration that is external to the specific model. The value is not estimated from data. Hyperparameters are used to customize the algorithm for a given problem so that it can more effectively estimate model parameters. They are usually manually specified when creating the model object. Examples of model hyperparameters include the number of decision trees in a random forest and the k in k-nearest neighbors.
- **Parameter:** A configuration variable that is internal to the model. The values are estimated or learned from data when the model is being 'fit'. They are the part of the model that is learned from historical training data. The parameters customize the model to your particular problem so that you can then predict outcomes on new observations. They are saved as part of the learned model. Examples include: the split points of a decision tree, the support vectors in a support vector machine, the coefficients in a linear regression or logistic regression.
- **Features:** The attributes, x, predictor, or independent variables that are used in the model, the "knowns"
- **Feature Engineering** is the process of using domain knowledge of the data to create new features. For example `number_of_bathrooms` and `number_of_bedrooms` are strongly correlated, so they are not candidates for two independent features. An example of feature engineering would be to build a feature called `number_of_bed_or_bath_rooms`, instead. Features we create using feature engineering derive from the existing features, available information, and domain knowledge. Feature Engineering is most commonly undertaken as part of the exploration process. Feature engineering is fundamental to the application and success of machine learning.
- **Target Variable:** The y, outcome, or dependent variable, the "unknown".
- **Data visualization** has 2 primary purposes: 1) to explore data and understand the meaning behind it or 2) to communicate to others (such as an idea, a finding, a recommendation, or a story).

## Skills of a Data Scientist

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/799bcf43-b431-49eb-84d5-c4e35fb9f0b0/Untitled.png)

Source:

[MarketingDistillery.com](https://marketingdistillery.com/)

What [D.J. Patil](https://www.linkedin.com/in/dpatil/), former U.S. Chief Data Scientist, looks for when hiring data scientists:

- Would we be willing to do a start up with you? We can be locked in a room with you for long periods of time; we can trust you; we can communicate with each other quickly and efficiently
- Can you "knock the socks off" of the company in 90 days?
- In 4-6 years, will you be doing something amazing?
- Do you have the skills and curiosity to ask big questions?
- Do you have a diverse background with a history of playing with data to create something novel?
- Advocacy – "data scientists have an influence out of proportion to their numbers."
- Strategic - ability to recognize which data needs to be collected.
- Technical expertise - deep expertise in some scientific discipline.
- Curiosity – "desire to go beneath the surface and discover and distill a problem down into a very clear set of hypotheses that can be tested."
- Storytelling - "ability to use data to tell a story and to be able to communicate it effectively."
- Cleverness - "ability to look at a problem in different, creative ways."
- Diverse - "My best data scientists have come from very different backgrounds."
- Connectedness - ability to bring disparate areas together in a novel way…"I’ve seen data scientists apply novel DNA sequencing techniques to find patterns of fraud."
- Detailed & Focused - "Good data scientists understand, in a deep way, that the heavy lifting of cleanup and preparation isn’t something that gets in the way of solving the problem: it is the problem."

## Tools in Data Science

### Big Data Landscape by [Matt Turck](https://mattturck.com/)

### **2009**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/8e8eabba-cdb1-4df5-8b63-7ef7f7d9043e/Untitled.png)

### **2019**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/940e3cb8-1ff1-416e-a37f-f7f9961b444b/Untitled.png)

### Programming Languages

- Python
    - Object-oriented programming language.
    - Top data science libraries: Numpy, SciPy, Matplotlib, Pandas, Statsmodels.
    - Pros: easy to learn and debug, large number of libraries for data science and growing, plenty of resources for learning and using.
    - Cons: slower in performance speed.
- R
    - Open-source version of the proprietary statistical software ‘S’.
    - Pros: optimal for statistics, intuitive, easy to learn, great IDE (RStudio), great plotting libraries.
    - Cons: slow in performance speed, not good when dealing with large amounts of data.
- Julia
    - High performance, dynamic, multi-paradigm programming language, developed at MIT.
    - Pros: runs very fast, good for mathematical computation, increasing use in academia and industry.
    - Cons: Julia is still fairly early in its development.
- Scala
    - Functional programming language, stemming from Java.
    - Pros: seamless integration with Apache Spark, used when dealing with distributed, big data.
    - Cons: not easy to learn.

### Database Platforms

- SQL: Structured Query Language
    - RDBMS: Relational Database Management System.
    - Structured data only.
    - Primary data source for business intelligence.
    - Original use case/primary use case is for managing data for software applications.
    - Examples: Microsoft SQL Server, MySQL, Oracle PostgresQL.
- NoSQL: Not Only SQL
    - Accomdates both structured and unstructured data.
    - Used when working with big data.
    - Allows for elastic scaling and flexibility.
    - Low cost.
    - Most can be integrated with the hadoop ecosystem.
    - Examples: Cassandra, HBase, Hive, MongoDB.
- Graph-based:
    - Focus on creating, storing, querying and processing graphs.
    - Used for social network analysis and security threat detection.
    - Examples: Neo4j, Graphbase.

### Data Visualization

- [Tableau](https://tableau.com/)
    - Great for BI.
    - Creating dashboards.
    - Telling stories with data.
- [Plot.ly](https://plot.ly/)
    - Works with plots in different platforms, easy to use, great quality.
- [D3.js](https://d3js.org/)
    - Javascript library
    - Fast
    - Supports a variety of datasets
    - Animations and interactive plots
- [Matplotlib](https://matplotlib.org/)
    - Python 2D plotting library which produces publication quality figures in a variety of hardcopy formats and interactive environments across platforms.
    - Matplotlib can be used in Python scripts, the Python and IPython shells, the Jupyter notebook, web application servers, and four graphical user interface toolkits.
- [Seaborn](https://seaborn.pydata.org/)
    - A Python data visualization library based on matplotlib.
    - It provides a high-level interface for drawing attractive and informative statistical graphics.
- [Bokeh](https://bokeh.pydata.org/en/latest/)
    - An interactive visualization library (python) that targets modern web browsers for presentation.
    - Its goal is to provide elegant, concise construction of versatile graphics, and to extend this capability with high-performance interactivity over very large or streaming datasets.
    - Bokeh can help anyone who would like to quickly and easily create interactive plots, dashboards, and data applications.

### Data Governance

Storing, managing & processing data in a distributed environment.

- [Spark](https://spark.apache.org/)
    - Integration with R and Python.
    - Can be run on different environments.
    - Performance speed is a plus.
    - Ease of use, as compared to Scala, its foundation.
    - Has a growing community of users.
    - Query using a SQL-like language, Spark SQL.
    - Perform machine learning with MLlib.
    - Do graph analytics using GraphX.
    - Run stream analysis using Spark Streaming.
- [Hadoop](https://hadoop.apache.org/)
    - Original big data platform.
    - Ecosystem incluses: HDFS (hadoop distributed file system), MapReduce, HBase (NoSQL DB), Hive (query platform).
- [Storm](https://storm.apache.org/)
    - Distributed realtime computation system.
    - Makes it easy to reliably process unbounded streams of data.
    - Does for realtime processing what Hadoop did for batch processing.
    - Simple and can be used with any programming language.

### VERSION CONTROL SYSTEMS (VCS)

Important when working in a team that handles the same scripts and project files in general. Good for tracking changes in a program and reverting to previous versions.

- Git: open source, cross platform, command line interface.
- Github: git with an available GUI, most commonly used.
- GitLab, Bitbucket: alternative to Github.

## Evolution and Trends in Data Science

- DJ Patil built the first data science team at LinkedIn before becoming the first chief data scientist of the United States in 2015.
- He coined the modern version of the term "data scientist" with Jeff Hammerbacher (Facebook’s early data science lead) in 2008.

---

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/bf2bbada-3966-41c8-b3ae-6732d2fe04d5/Untitled.png)

Alex Fly, Founder and CEO @ Quickpath, on [Trends Shaping the Data Science Hiring Market](https://www.linkedin.com/pulse/what-trends-shaping-data-science-hiring-market-alex-fly)

---

- Moving away from the unicorn data scientist.
    - Data science roles have grown over 650% since 2012, and with that growth comes the rise of specialties within the field.
- As time passes, data science tools become more accessible.
    - What use to take hundreds of lines to code to create can now be achieved by orders of magnitude less due to abstraction, thus lowering the technical learning curve.
- Data analyst to data scientist.
    - Individuals are beginning to upskill themselves to fill these roles. One role that is primed to make this switch is the data analyst. This position helps to improve company decision-making by collecting, processing, and applying algorithms to structured data. Data scientists, on the other hand, typically have a more robust skill set.
- The search for security.
    - Aankur Bhatia, Security Data Scientist for IBM notes, "While there are several products to identify, detect and contain known threats and any indicator of compromise (IOC), there is very little protection against unknown threats, zero-day exploits and newly identified vulnerabilities."
- Hiring a full-scale data science team.
    - Hiring a data science team that incorporates members of the business side, the IT side, and data specialists.
- AI, ML and DL.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/aa7e17b1-badb-4b66-ba04-25716ef6f4d2/Untitled.png)

## Further Reading

- [AI & Machine Learning: The Evolution, Differences and Connections](https://www.linkedin.com/pulse/ai-machine-learning-evolution-differences-connections-kapil-tandon/)
- [Codeup Blog: What is Data Science](https://codeup.com/what-is-data-science/)

---

## Exercises

### Data Science Community

This assignment will get you digging into publicly available data science resources, finding and following thought leaders in the field, and potentially creating and/or sharing your findings by submitting them to us via a Google Form released to you through your Google Classroom. Your findings and information will be added to those of all of the Codeup data science cohorts who came before you and shared through the appendix of the curriculum at a later date.

Find:

- a resource for python (a tutorial, blog post, or reference material that looks useful)
- a resource for SQL (a tutorial, blog post, or reference material that looks useful)
- a podcast for data science topics
- 3 thought leaders within the field of data. Link to the platform where they are most active (e.g. Twitter, LinkedIn, a blog, etc)

Create:

- GitHub (if you have not already)
- kaggle profile (make one the same as your GitHub)
- data.world
- public.tableau.com profile
- twitter

*Keep in mind that the more consistent your account names and handles, the easier you are to find by potential employers and followers in the near future.*

- DS Vocabulary
    
    ## Foundational Vocabulary of Data Science
    
    **Algorithms** are a series of repeatable steps, usually expressed mathematically, to accomplish specific data science tasks or to solve a problem. Data scientists need to understand certain algorithms in so far as to be able to identify how appropriate an algorithm is for a particular problem as well as to be able to effectively select the values for the algorithm's hyperparameters. Commonly used algorithms in data science include linear and logistic regression, Naive Bayes, and KNN (K-Nearest Neighbors).
    
    **APIs**, application programming interfaces, provide users with a set of functions used to interact with and deploy the features of a specific application or service. As an example, Twitter provides access to Twitter features through its API. By hooking into the Twitter API, software developers can allow users of their own applications to log in using Twitter, or data scientists can access personal information stored in Twitter databases, such as handles of followers.
    
    **Artificial Intelligence (AI)** is about the creation of intelligent machines that work and react like humans. Examples of types of AI programs include speech recognition and self-driving cars.
    
    **Big data** is an evolving phrase. It is most commonly used to mean a massive volume of both structured and unstructured data that is so large it is difficult to process using traditional database and software techniques. The volume of data is too big, it moves too fast, or it exceeds current processing capacity. Often it is defined by the "4 V's": Volume, Velocity, Variety, and Veracity.
    
    **Data modeling** is building mathematical or statistical models that turn data into predictive and actionable information, that can predict and explain outcomes.
    
    **Data science** is a field that works with and analyzes large amounts of data to provide meaningful information that can be used to make decisions and solve problems. Data science includes work in computation, statistics, analytics, data mining, and programming.
    
    **Data visualization** has two primary purposes: 1) to explore data and understand the meaning behind it or 2) to communicate to others (such as an idea, a finding, a recommendation, or a story).
    
    **Deep learning** is a subset of machine learning that uses neural network algorithms for problems such as speech recognition, translation, and image recognition.
    
    **Feature engineering** is the process of using domain knowledge of the data to create features that make machine learning algorithms work. Feature engineering is fundamental to the application and success of machine learning.
    
    **Machine learning** enables computers predict outcomes without explicit human input.
    
    A **model hyperparameter** is a configuration that is external to the specific model. The value is not estimated from data. Hyperparameters are used to customize the algorithm for a given problem so that it can more effectively estimate model parameters. They are usually manually specified when creating the model object. Examples of model hyperparameters include the number of decision trees in a random forest and the k in k-nearest neighbors.
    
    A **model parameter** is a configuration variable that is internal to the model. The values are estimated or learned from data when the model is being 'fit'. They are the part of the model that is learned from historical training data. The parameters customize the model to your particular problem so that you can then predict outcomes on new observations. They are saved as part of the learned model. Examples include: the split points of a decision tree, the support vectors in a support vector machine, the coefficients in a linear regression or logistic regression.
    
    **Reinforcement learning** is a subset of unsupervised machine learning where the machine seeks to maximize reward. The machine, or “agent,” learns through trial and error as well as reward and punishment. For example, if you are training a machine to win at chess, you would want it to be positively reinforced when it makes moves that win material, such as capturing a pawn, and negatively reinforced when it makes moves that lose material, such as having a pawn captured. Combinations of these rewards and punishments result in a self-learning machine that improves at chess over time.
    
    **Supervised machine learning** algorithms use labeled observations, i.e. observations with a known outcome or human input, to develop a model that will then be used to predict or estimate the outcome of new observations which are not known or labeled.
    
    **Unstructured data** is that which does not fit a predefined data model. Often this data does not fit into the typical row-column structure of a database. Images, emails, videos, audio, and pretty much anything else that might be difficult to “tabify” might constitute examples of unstructured data.
    
    **Unsupervised machine learning** algorithms are considered self-learning as they not rely on labeled observations, i.e. observations with a known outcome or human input. Whereas the supervised algorithm would accept and use the labels assigned to it to model the relationship between the inputs (features) and output (target), an unsupervised algorithm would learn the differences of observations using only the features (no output) and assign its own labels to differentiate.
    
- [Pipeline](https://www.canva.com/design/DAFwNrjl1Z0/zfJg450njdjmp0zmtsWZOQ/view?utm_content=DAFwNrjl1Z0&utm_campaign=designshare&utm_medium=link&utm_source=viewer)
    
    # Data Science Pipeline
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/9d69d8f1-56fb-4f17-8879-7bb6189627ec/Untitled.png)
    
    ## **Planning**
    
    Business stakeholders and end users often ask more general questions that are very hard to answer directly or extremely specific questions that are not going to achieve their underlying goal. This leads to miscommunication, time spent on work that is ultimately thrown away, or inadequate understanding of the underlying problem being investigated. As you gain experience with the data and domain, you gain a better understanding of problems and can ask more informative & specialized questions. Even then, however, it is important to work through this planning stage, as it is all too easy to get lost down a rabbit hole when working on a data science project.
    
    **The goal** of this stage is to clearly define your goal(s), measures of success, and plans on how to achieve that.
    
    **The deliverable** is documentation of your goal, your measure of success, and how you plan on getting there. If you haven't clearly defined success, you will not know when you have achieved it.
    
    **How to get there:** You can get there by answering questions about the final product & formulating or identifying any initial hypotheses (from you or others).
    
    Common questions include:
    
    - What will the end product look like?
    - What format will it be in?
    - Who will it be delivered to?
    - How will it be used?
    - How will I know I'm done?
    - What is my MVP?
    - How will I know it's good enough?
    
    Formulating hypotheses
    
    - Is attribute V1 related to attribute V2?
    - Is the mean of target variable Y for subset A significantly different from that of subset B?
    - ...
    
    ## **Acquisition**
    
    **AKA** Data Gathering, Data Import, Data Wrangling (Acquisition + Prep)
    
    **The goal** is to create a path from original data sources to the environment in which you will work with the data. You will gather data from sources in order to prepare and clean it in the next step. Many data scientists agree that this stage, along with the preparation stage, is where you will spend a majority of your time.
    
    **The deliverable** is a file, acquire.py, that contains the function(s) needed to reproduce the acquisition of data.
    
    **How to get there:**
    
    - If the data source is SQL, you may need to do some clean-up, integration, aggregation or other manipulation of data in the SQL environment before reading the data into your python environment.
    - Using the Python library pandas, acquire the data into a dataframe using a function that reads from your source type, such as pandas.read_csv for acquiring data from a csv.
    - You may use Spark and/or Hive when acquiring data from a distributed environment, such as HDFS.
    - Examples of source types include RDBMS, NoSQL, HDFS, Cloud Files (S3, google drive), static local flat files (csv, txt, xlsx).
    
    ## **Preparation**
    
    **AKA** Data Tidying, Data Cleansing, Data Wrangling (Acquisition + Prep)
    
    **The goal** is to transform the data into a shape where it can be easily explored, analyzed and visualized. To achieve this, the data is split into 3 samples (train, validate, and test). The data is split this way so we end up with one large sample to explore and train our models, a smaller sample to evaluate and develop our models, and a final sample to test our final model once it has been chosen. This final test helps us understand how accurately our final model predicts data that was not used in its development.
    
    **The deliverable** is a file, prep.py, that contains the function(s) needed to reproduce the preparation of the data. The resulting dataframes should be split into 3 samples (Train, Validate, Test) as described above. Splits should contain roughly a 70%:20%:10% split. This can vary depending on the amount of available data.
    
    - The train dataset is explored during exploration, and used to build and evaluate predictive models during modeling.
    - The validate dataset is used to evaluate and fine tune models during modeling. After all models are evaluated, a best model is chosen.
    - The test dataset is used as a final evaluation of the best model, to help us understand how accurate the model is when predicting on data not used to train or tune the model.
    
    **How to get there:**
    
    - Python libraries: pandas, matplotlib, seaborn, scikit-learn.
    - Use pandas to perform tasks such as handling null values, outliers, normalizing text, binning of data, changing data types, etc.
    - Use matplotlib or seaborn to plot distributions of numeric attributes and the target.
    - Use scikit-learn to split the data into train, validate, and test samples.
    
    ## **Exploration and Pre-processing**
    
    **AKA** Exploratory Analysis/visualization, Feature Engineering, Feature Selection
    
    **The goal** is to discover features that have the largest impact on the target variable, i.e. provide the most information gain, drive the outcome.
    
    **The deliverable** is a file, preprocess.py, that contains the function(s) needed to reproduce the pre-processing of the data. The dataframe resulting from these functions should be one that is pre-processed, i.e. ready to be used in modeling. This means that attributes are reduced to features, features are in a numeric form, there are no missing values, and continuous and/or ordered values are scaled to be unitless.
    
    **How to get there:**
    
    - Use python libraries: pandas, statsmodels, scipy, numpy, matplotlib, seaborn, scikit-learn.
    - Perform statistical testing to understand correlations, significant differences in variables, variable interdependencies, etc.
    - Create visualizations that demonstrate relationships across and within attributes and target.
    - Use domain knowledge and/or information gained through exploration to construct new features.
    - Remove features that are noisy, provide no valuable or new information, or are redundant.
    - Use scikit-learn's preprocessing algorithms (feature selection, feature engineering, dummy variables, binning, clustering, e.g.) to turn attributes into features.
    
    ## **Modeling**
    
    **The goal** is to create a robust and generalizable model that is a mapping between features and a target outcome.
    
    **The deliverable** is a file, model.py, that contains functions for training the model (fit), predicting the target on new data, and evaluating results.
    
    **How to get there:**
    
    - Python libraries: scikit-learn
    - Identify regression, classification, cross validataion, and/or other algorithms that are most appropriate.
    - Modeling Process:
        - Use data from train to train your model.
        - Evaluate the model by predicting the target variable in the train and validate data sets.
        - Evaluate as many models as necessary and choose the best model as the final model.
        - Evaluate the final model, using test data, to see how the final model performs on data that was not used in its development.
    
    ## **Delivery**
    
    **The goal** is to enable others to use what you have learned or developed through all the previous stages.
    
    **The deliverable** could be of various types:
    
    - A pipeline.py file that takes new observations from acquisition to prediction using the previously built functions.
    - A fully deployed model.
    - A reproducible report and/or presentation with recommendations of actions to take based on original project goals.
    - Predictions made on a specific set of observations.
    - A dashboard for observing/monitoring the key drivers, or features, of the target variable.
    
    **How to get there:**
    
    - Python sklearn's pipeline method.
    - Tableau for creating a report, presentation, story, or dashboard.
    - Jupyter notebook for creating a report or a framework to reproduce your research, e.g.
    - Flask to build a web server that provides a gateway to our model's predictions.
- Pipeline Demo
    
    # Example Walk through of the DS Pipeline
    
    ## Planning
    
    Goal:
    
    - Business objective: reduce churn by 5%
    - Project objective: predict with at least 70% accuracy whether a customer will churn
    
    Deliverable: deliver a model with the estimated accuracy score.
    
    Questions to explore:
    
    - Does contract type affect churn?
    - Are those with higher monthly charges more likely to churn?
    - Does gender play a role in churn?
    
    ## Data Acquisition
    
    Here we will acquire data from a cloud SQL database. The connection details are hidden in the `env` python module, and you can see the SQL query used in the cell below.
    
    ```python
    import numpy as np
    import pandas as pd
    
    import seaborn as sns
    import matplotlib.pyplot as plt
    
    import re
    import scipy.stats as stats
    
    from sklearn.model_selection import train_test_split
    from sklearn.tree import DecisionTreeClassifier, plot_tree
    
    import warnings
    warnings.filterwarnings("ignore")
    
    import env
    ```
    
    ```python
    url = f'mysql+pymysql://{env.user}:{env.password}@{env.host}/telco_churn'
    
    query = '''
            SELECT *
            FROM customers c
            JOIN contract_types ct USING(contract_type_id)
            '''
    
    df = pd.read_sql(query, url)
    df.head(5)
    ```
    
    |  | contract_type_id | customer_id | gender | senior_citizen | partner | dependents | tenure | phone_service | multiple_lines | internet_service_type_id | ... | device_protection | tech_support | streaming_tv | streaming_movies | paperless_billing | payment_type_id | monthly_charges | total_charges | churn | contract_type |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 0 | 2 | 0002-ORFBO | Female | 0 | Yes | Yes | 9 | Yes | No | 1 | ... | No | Yes | Yes | No | Yes | 2 | 65.6 | 593.3 | No | One year |
    | 1 | 1 | 0003-MKNFE | Male | 0 | No | No | 9 | Yes | Yes | 1 | ... | No | No | No | Yes | No | 2 | 59.9 | 542.4 | No | Month-to-month |
    | 2 | 1 | 0004-TLHLJ | Male | 0 | No | No | 4 | Yes | No | 2 | ... | Yes | No | No | No | Yes | 1 | 73.9 | 280.85 | Yes | Month-to-month |
    | 3 | 1 | 0011-IGKFF | Male | 1 | Yes | No | 13 | Yes | No | 2 | ... | Yes | No | Yes | Yes | Yes | 1 | 98.0 | 1237.85 | Yes | Month-to-month |
    | 4 | 1 | 0013-EXCHZ | Female | 1 | Yes | No | 3 | Yes | No | 2 | ... | No | Yes | Yes | No | Yes | 2 | 83.9 | 267.4 | Yes | Month-to-month |
    
    5 rows × 22 columns
    
    What does our data look like?
    
    `df.head().T`
    
    |  | 0 | 1 | 2 | 3 | 4 |
    | --- | --- | --- | --- | --- | --- |
    | contract_type_id | 2 | 1 | 1 | 1 | 1 |
    | customer_id | 0002-ORFBO | 0003-MKNFE | 0004-TLHLJ | 0011-IGKFF | 0013-EXCHZ |
    | gender | Female | Male | Male | Male | Female |
    | senior_citizen | 0 | 0 | 0 | 1 | 1 |
    | partner | Yes | No | No | Yes | Yes |
    | dependents | Yes | No | No | No | No |
    | tenure | 9 | 9 | 4 | 13 | 3 |
    | phone_service | Yes | Yes | Yes | Yes | Yes |
    | multiple_lines | No | Yes | No | No | No |
    | internet_service_type_id | 1 | 1 | 2 | 2 | 2 |
    | online_security | No | No | No | No | No |
    | online_backup | Yes | No | No | Yes | No |
    | device_protection | No | No | Yes | Yes | No |
    | tech_support | Yes | No | No | No | Yes |
    | streaming_tv | Yes | No | No | Yes | Yes |
    | streaming_movies | No | Yes | No | Yes | No |
    | paperless_billing | Yes | No | Yes | Yes | Yes |
    | payment_type_id | 2 | 2 | 1 | 1 | 2 |
    | monthly_charges | 65.6 | 59.9 | 73.9 | 98.0 | 83.9 |
    | total_charges | 593.3 | 542.4 | 280.85 | 1237.85 | 267.4 |
    | churn | No | No | Yes | Yes | Yes |
    | contract_type | One year | Month-to-month | Month-to-month | Month-to-month | Month-to-month |
    
    `df.info()`
    
    ```
    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 7043 entries, 0 to 7042
    Data columns (total 22 columns):
     #   Column                    Non-Null Count  Dtype
    ---  ------                    --------------  -----
     0   contract_type_id          7043 non-null   int64
     1   customer_id               7043 non-null   object
     2   gender                    7043 non-null   object
     3   senior_citizen            7043 non-null   int64
     4   partner                   7043 non-null   object
     5   dependents                7043 non-null   object
     6   tenure                    7043 non-null   int64
     7   phone_service             7043 non-null   object
     8   multiple_lines            7043 non-null   object
     9   internet_service_type_id  7043 non-null   int64
     10  online_security           7043 non-null   object
     11  online_backup             7043 non-null   object
     12  device_protection         7043 non-null   object
     13  tech_support              7043 non-null   object
     14  streaming_tv              7043 non-null   object
     15  streaming_movies          7043 non-null   object
     16  paperless_billing         7043 non-null   object
     17  payment_type_id           7043 non-null   int64
     18  monthly_charges           7043 non-null   float64
     19  total_charges             7043 non-null   object
     20  churn                     7043 non-null   object
     21  contract_type             7043 non-null   object
    dtypes: float64(1), int64(5), object(16)
    memory usage: 1.2+ MB
    
    ```
    
    Let's take a look at the distribution of our target, churn.
    
    `df.churn.value_counts()`
    
    ```
    No     5174
    Yes    1869
    Name: churn, dtype: int64
    
    ```
    
    ```python
    df.churn.value_counts().plot.bar()
    plt.title('How many of our customers are churning?')
    plt.xlabel('Churn')
    plt.ylabel('# Of Customers')
    plt.show()
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/3cd2a08f-9fe2-41e7-b006-a016c2c739e8/Untitled.png)
    
    What percent of our customers are currently churning?
    
    `round((df.churn == 'Yes').sum() / len(df),2)*100`
    
    ```
    27.0
    
    ```
    
    ## Data Prep
    
    First we'll check for missing values.
    
    `df.isnull().sum()`
    
    ```
    contract_type_id            0
    customer_id                 0
    gender                      0
    senior_citizen              0
    partner                     0
    dependents                  0
    tenure                      0
    phone_service               0
    multiple_lines              0
    internet_service_type_id    0
    online_security             0
    online_backup               0
    device_protection           0
    tech_support                0
    streaming_tv                0
    streaming_movies            0
    paperless_billing           0
    payment_type_id             0
    monthly_charges             0
    total_charges               0
    churn                       0
    contract_type               0
    dtype: int64
    
    ```
    
    Seems like there aren't any.
    
    Let's find out what data types we are working with.
    
    `df.dtypes`
    
    ```
    contract_type_id              int64
    customer_id                  object
    gender                       object
    senior_citizen                int64
    partner                      object
    dependents                   object
    tenure                        int64
    phone_service                object
    multiple_lines               object
    internet_service_type_id      int64
    online_security              object
    online_backup                object
    device_protection            object
    tech_support                 object
    streaming_tv                 object
    streaming_movies             object
    paperless_billing            object
    payment_type_id               int64
    monthly_charges             float64
    total_charges                object
    churn                        object
    contract_type                object
    dtype: object
    
    ```
    
    Weird that total_charges is not numeric... Let's explore further.
    
    `# df.total_charges.astype(float)`
    
    Seems like the `total_charges` column contains values that are not numbers. Let's clean those up.
    
    ```python
    def parse_total_charges(s):
        if re.search(r'^\d+(\.\d+)?$', s):
            return float(s)
        else:
            print(f'"{s}" is not a numeric value! Replacing with null...')
            return np.nan
    ```
    
    `df.total_charges`
    
    ```
    0         593.3
    1         542.4
    2        280.85
    3       1237.85
    4         267.4
             ...
    7038      742.9
    7039     1873.7
    7040      92.75
    7041    4627.65
    7042     3707.6
    Name: total_charges, Length: 7043, dtype: object
    
    ```
    
    `df.total_charges = df.total_charges.apply(parse_total_charges)`
    
    ```
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    " " is not a numeric value! Replacing with null...
    
    ```
    
    Now let's check the nulls and datatypes now:
    
    `pd.concat([df.dtypes.rename('dtype'), df.isna().sum().rename('# of nulls')], axis=1)`
    
    |  | dtype | # of nulls |
    | --- | --- | --- |
    | contract_type_id | int64 | 0 |
    | customer_id | object | 0 |
    | gender | object | 0 |
    | senior_citizen | int64 | 0 |
    | partner | object | 0 |
    | dependents | object | 0 |
    | tenure | int64 | 0 |
    | phone_service | object | 0 |
    | multiple_lines | object | 0 |
    | internet_service_type_id | int64 | 0 |
    | online_security | object | 0 |
    | online_backup | object | 0 |
    | device_protection | object | 0 |
    | tech_support | object | 0 |
    | streaming_tv | object | 0 |
    | streaming_movies | object | 0 |
    | paperless_billing | object | 0 |
    | payment_type_id | int64 | 0 |
    | monthly_charges | float64 | 0 |
    | total_charges | float64 | 11 |
    | churn | object | 0 |
    | contract_type | object | 0 |
    
    Now we do indeed have 11 missing values in total_charges.
    
    We need to get rid of those nulls. Since there are relatively few of them, we are just going to drop all of them.
    
    `df = df.dropna()`
    
    Let's ensure our nulls are gone.
    
    `pd.concat([df.dtypes.rename('dtype'), df.isna().sum().rename('# of nulls')], axis=1)`
    
    |  | dtype | # of nulls |
    | --- | --- | --- |
    | contract_type_id | int64 | 0 |
    | customer_id | object | 0 |
    | gender | object | 0 |
    | senior_citizen | int64 | 0 |
    | partner | object | 0 |
    | dependents | object | 0 |
    | tenure | int64 | 0 |
    | phone_service | object | 0 |
    | multiple_lines | object | 0 |
    | internet_service_type_id | int64 | 0 |
    | online_security | object | 0 |
    | online_backup | object | 0 |
    | device_protection | object | 0 |
    | tech_support | object | 0 |
    | streaming_tv | object | 0 |
    | streaming_movies | object | 0 |
    | paperless_billing | object | 0 |
    | payment_type_id | int64 | 0 |
    | monthly_charges | float64 | 0 |
    | total_charges | float64 | 0 |
    | churn | object | 0 |
    | contract_type | object | 0 |
    
    ### Data Splitting
    
    ```python
    train, test = train_test_split(df, train_size=.6, random_state=123)
    validate, test = train_test_split(test, train_size=.5, random_state=123)
    ```
    
    `df.shape`
    
    ```
    (7032, 22)
    
    ```
    
    `train.shape`
    
    ```
    (4219, 22)
    
    ```
    
    `validate.shape`
    
    ```
    (1406, 22)
    
    ```
    
    `test.shape`
    
    ```
    (1407, 22)
    
    ```
    
    We will use ONLY the train data in the exploration section.
    
    `train.head()`
    
    |  | contract_type_id | customer_id | gender | senior_citizen | partner | dependents | tenure | phone_service | multiple_lines | internet_service_type_id | ... | device_protection | tech_support | streaming_tv | streaming_movies | paperless_billing | payment_type_id | monthly_charges | total_charges | churn | contract_type |
    | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
    | 6277 | 3 | 8882-TLVRW | Male | 0 | Yes | Yes | 69 | No | No phone service | 1 | ... | Yes | Yes | No | No | No | 2 | 39.10 | 2779.50 | No | Two year |
    | 5564 | 1 | 7839-NUIAA | Female | 0 | Yes | Yes | 61 | Yes | Yes | 1 | ... | No | No | No | No | No | 1 | 59.80 | 3641.50 | No | Month-to-month |
    | 669 | 3 | 0979-MOZQI | Male | 0 | Yes | No | 62 | No | No phone service | 1 | ... | No | Yes | Yes | No | Yes | 3 | 39.00 | 2337.45 | No | Two year |
    | 698 | 1 | 1029-QFBEN | Male | 0 | No | No | 1 | Yes | No | 3 | ... | No internet service | No internet service | No internet service | No internet service | No | 2 | 19.55 | 19.55 | Yes | Month-to-month |
    | 4308 | 1 | 6075-SLNIL | Male | 0 | No | No | 38 | Yes | Yes | 2 | ... | Yes | No | No | Yes | Yes | 4 | 95.10 | 3691.20 | No | Month-to-month |
    
    5 rows × 22 columns
    
    ## Data Exploration
    
    ### Is there a relationship between contract type and churn?
    
    `pd.crosstab(train.contract_type, train.churn,).style.background_gradient(cmap='Greens')`
    
    | churn | No | Yes |
    | --- | --- | --- |
    | contract_type |  |  |
    | Month-to-month | 1309 | 1014 |
    | One year | 796 | 90 |
    | Two year | 980 | 30 |
    
    ```python
    pd.crosstab(train.contract_type, train.churn,
                normalize='index').style.background_gradient(cmap='Greens')
    ```
    
    | churn | No | Yes |
    | --- | --- | --- |
    | contract_type |  |  |
    | Month-to-month | 0.563495 | 0.436505 |
    | One year | 0.898420 | 0.101580 |
    | Two year | 0.970297 | 0.029703 |
    
    It definitely seems like customers on a month-to-month contract churn more frequently than the other contract types.
    
    Let's verify it with a chi^2 stats test.
    
    H(0): contract type does not affect churn
    
    H(a): contract type does affect churn
    
    ```python
    observed = pd.crosstab(train.contract_type, train.churn,)
    chi2, p, degf, expected = stats.chi2_contingency(observed)
    
    if p < .05:
        print("We reject the null hypothesis")
    else:
        print("We fail to reject the null hypothesis")
    ```
    
    ```
    We reject the null hypothesis
    
    ```
    
    Therefore, we can conclude there is a relationship between contract type and churn
    
    ### Is there a relationship between monthly charges and churn?
    
    ```python
    sns.boxplot(data=train, y='monthly_charges', x='churn')
    plt.title('Do customers that churn pay more per month?')
    plt.show()
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/8e96bff8-8902-4450-ab1d-9499bdc2d26f/Untitled.png)
    
    It definitely seems like the median monthly charge is higher for customers that have churned compared to those that haven't.
    
    Now let's run our statistic test to ensure this is significant.
    
    $H_0$: charges of customers who churn equals that of those who don't churn
    
    $H_a$: charges of customers who churn is not equal to that of those who don't churn
    
    ```python
    churn_sample = train[train.churn == 'Yes'].monthly_charges
    no_churn_sample = train[train.churn == 'No'].monthly_charges
    
    t, p = stats.ttest_ind(churn_sample, no_churn_sample)
    
    if p < .05:
        print("We reject the null hypothesis")
    else:
        print("We fail to reject the null hypothesis")
    ```
    
    ```
    We reject the null hypothesis
    
    ```
    
    Therefore, we can conclude that monthly charges effect churn
    
    ### Is there a difference in gender between churners and non-churners?
    
    ```python
    pd.crosstab(train.gender, train.churn, normalize='index').plot.bar(stacked=False)
    plt.gca().yaxis.set_major_formatter('{:.0%}'.format)
    plt.ylabel('percent of churn')
    plt.xticks(rotation=0)
    plt.title('Is there a difference in gender between churners and non-churners?')
    plt.show()
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/4ae267a3-d5b6-4ddd-a45f-05fc5b215508/Untitled.png)
    
    While there might be some small difference, it seems like gender does not play a significant role in whether or not a customer will churn.
    
    Now let's run our statistic test to ensure this is significant.
    
    $H_0$: gender is independent of churn
    
    $H_a$: gender is not independent of churn
    
    ```python
    observed = pd.crosstab(train.gender, train.churn)
    chi2, p, degf, expected = stats.chi2_contingency(observed)
    
    if p < .05:
        print("We reject the null hypothesis")
    else:
        print("We fail to reject the null hypothesis")
    ```
    
    ```
    We fail to reject the null hypothesis
    
    ```
    
    Therefore, we can conclude that there gender is indepedent of churn
    
    ### Feature Engineering
    
    Based on the results of our exploration, we'll use monthly charges and whether or not a customer is on a month-to-month contract as our features.
    
    To do so, we'll convert the contract-type feature to a 1 or 0 for whether or not the customer is on a month to month contract.
    
    `train.contract_type.value_counts()`
    
    ```
    Month-to-month    2323
    Two year          1010
    One year           886
    Name: contract_type, dtype: int64
    
    ```
    
    `train['month_to_month_contract'] = (train.contract_type == 'Month-to-month').astype(int)`
    
    `train.month_to_month_contract.value_counts()`
    
    ```
    1    2323
    0    1896
    Name: month_to_month_contract, dtype: int64
    
    ```
    
    Since we made this new variable in train, we also need to apply it to our validate and test sets.
    
    ```python
    validate['month_to_month_contract'] = (validate.contract_type == 'Month-to-month').astype(int)
    test['month_to_month_contract'] = (test.contract_type == 'Month-to-month').astype(int)
    ```
    
    ## Modeling
    
    To be able to model, we need to separate our target variable in our train, validate and test sets.
    
    ```python
    X_train = train.drop(columns='churn')
    X_validate = validate.drop(columns='churn')
    X_test = test.drop(columns='churn')
    
    y_train = train.churn
    y_validate = validate.churn
    y_test = test.churn
    ```
    
    We decided we are going to use our newly created feature and monthly charges for modeling.
    
    `features = ['monthly_charges', 'month_to_month_contract']`
    
    `X_train[features].head()`
    
    |  | monthly_charges | month_to_month_contract |
    | --- | --- | --- |
    | 6277 | 39.10 | 0 |
    | 5564 | 59.80 | 1 |
    | 669 | 39.00 | 0 |
    | 698 | 19.55 | 1 |
    | 4308 | 95.10 | 1 |
    
    ### DecisionTreeClassifier
    
    We'll create several different models and compare their performance.
    
    ```python
    model1 = DecisionTreeClassifier(max_depth=2)
    model1.fit(X_train[features], y_train)
    
    accuracy_train = model1.score(X_train[features], y_train)
    accuracy_validate = model1.score(X_validate[features], y_validate)
    
    print(f'''Model 1 Accuracy
     train: {accuracy_train:.2%} 
     validate: {accuracy_validate:.2%}''')
    ```
    
    ```
    Model 1 Accuracy
     train: 75.23%
     validate: 75.60%
    
    ```
    
    ```python
    plt.figure(figsize=(13, 7))
    plot_tree(model1, feature_names=features, class_names=['No Churn', 'Churn'])
    plt.show()
    ```
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/4d61c5a2-ca99-4f9d-a13d-01f5d44c729d/Untitled.png)
    
    - Traditional: given rule + data, produce answer
    - ML: given data + answers, produce rules
    
    ```python
    model2 = DecisionTreeClassifier(max_depth=5)
    model2.fit(X_train[features], y_train)
    
    accuracy_train = model2.score(X_train[features], y_train)
    accuracy_validate = model2.score(X_validate[features], y_validate)
    
    print(f'''Model 2 Accuracy
     train: {accuracy_train:.2%} 
     validate: {accuracy_validate:.2%}''')
    ```
    
    ```
    Model 2 Accuracy
     train: 76.13%
     validate: 75.04%
    
    ```
    
    ```python
    model3 = DecisionTreeClassifier(max_depth=10)
    model3.fit(X_train[features], y_train)
    
    accuracy_train = model3.score(X_train[features], y_train)
    accuracy_validate = model3.score(X_validate[features], y_validate)
    
    print(f'''Model 3 Accuracy
     train: {accuracy_train:.2%} 
     validate: {accuracy_validate:.2%}''')
    
    # print(f'''Model 1 Accuracy
    #  train: {accuracy_train:.2%} 
    #  ''')
    ```
    
    ```
    Model 3 Accuracy
     train: 79.14%
     validate: 73.76%
    
    ```
    
    Looks like model 1 performs the best.
    
    ### Testing
    
    ```python
    accuracy = model1.score(X_test[features], y_test)
    
    print(f'Out of sample accuracy: {accuracy:.2%}')
    ```
    
    ```
    Out of sample accuracy: 74.06%
    
    ```
    
    ## Conclusion
    
    - Contract type and monthly charges seem to be fairly predictive of churn.
    - Gender does not seem to be very influential in terms of predicting churn.
    - Our model is able to predict whether or not a customer churns based on their monthly charges and contract type with 74% accuracy.
    
    If our model had been used to identify 75% of the 1,869 customers that did churn, we could have predicted churn in 1,400 customers before it happened. Customers predicted to churn could be offered a discount. If only 10% of those customers remained because of the discount, we would have reduced churn by 7.5%, exceeding our target of 5%.
    
- Project
    
    # Data Science: Skills In Demand
    
    ## Project Objectives
    
    Find current skills that are in demand for current data jobs.
    
    - Using LinkedIn, Indeed, or other aggregators, find *3 job postings* that have a job title like "Data Scientist", "Data Analyst", "Data Engineer", or "Machine Learning Engineer".
    - Do sound research by following the scientific method in your work and keeping as many of your variables consistent while varying only one or two. Basically, pick the same area of focus to compare and contrast across your three job postings.
    - Examples:
        - Data Scientist 1 jobs in three different locations in the same industry
        - Data Scientist postings across 3 different levels at the same company
        - Data Scientist vs. Data Analyst vs. Data Engineer all in San Antonio at tech companies
    
    ## Audience
    
    Your audience is aspiring Data Scientists, and your goal is to educate them on the skills employers are looking for as well as other information you gain in your research, such as challenges one might encounter when applying, how to find the role that fits the applicant's needs, what a career path might look like, what one can and cannot learn from the job descriptions, etc.
    
    ## Deliverable
    
    Slide show presentation
    
    - summarize findings
    - canva.com is recommended for slide creation
    - 6 slides or less in total
    - 2-4 minutes (absolutely no longer than 5 minutes)
    
    ## Project Specifications
    
    ### **Title slide**
    
    *This is where you introduce yourself*
    
    - name
    - date
    - descriptive title of presentation
    
    ### **Executive summary slide (summary slide)**
    
    *This is where you introduce your project and what you found*
    
    - your project goal(s)
    - your key findings
    - your takeaways and recommendations
    
    When you think about what should be included as a key finding, think about it like this: if I can only remember 1-3 things about your research, what should I remember?
    
    ### **Content slides (1-3 slides)**
    
    *This is where you give us the details*
    
    - the job role / title
    - the company name
    - location
    - industry
    - line of business the role falls in (e.g. Marketing, Sales, R&D, HR, Customer Support)
    - the most appealing aspect of the job to you
    - the least appealing aspect of the job to you
    - the most important technical skills for this role
    - the most important soft skills for this role
    - the link to the posting to cite your source
    - and any additional comments or observations you find important or useful
    
    ### **Conclusion slide**
    
    *This is where you tell us what you want us to remember*
    
    This should tie everything up with a bow. What is the **one** thing you want the audience to walk away from your presentation remembering, the last thing you want them to hear? It should have very minimal text on it, be simple, and to the point. And saying thank you is always a good thing!
    

## [Command Line](https://www.canva.com/design/DAFwU88TcbY/_B5iK0TweQQteUsRo1uY_g/view?utm_content=DAFwU88TcbY&utm_campaign=designshare&utm_medium=link&utm_source=viewer)

- Introduction
    
    # Introduction to the CLI
    
    We will explore the command-line interface (CLI), and the Z shell (Zsh). A command-line interface is a text-based interface. This means interaction with the interface is done by typing in commands and reading the text output. This is in contrast to a graphical user interface (GUI) which relies on users interacting with images, such as clicking on an icon.
    
    ## Interface
    
    We will start by introducing some basic command-line concepts and get ourselves familiar with the interface. The command-line interface only interprets text commands. There are no buttons, icons, or any point-and-click interactions whatsoever. Because of this, understanding what commands are available to you and how to use them is very important.
    
    - **terminal**: The graphical interface to the shell; the way you interact with the shell.
    - **shell**: The program that reads your input and produces output. The program that controls your interaction with the operating system.
    
    To access the command-line interface you will need a terminal application. Your Mac came with a terminal application preinstalled, called Terminal.app. It is installed in your Applications folder, inside of Utilities. Another option for a terminal is [iTerm2](http://iterm2.com/), which is a slightly more featureful terminal. Either one will work fine for this course.
    
    ### The Prompt
    
    When you open your terminal, you will see a prompt. A prompt is just that: it prompts you, the user, for input. The input you provide is a text-based command or series of commands to accomplish a desired goal. All of the commands you type into the command-line will be prefixed by this prompt automatically.
    
    Your prompt should look something like:
    
    `User@Macbook ~ %`
    
    The first part of this prompt is the username, or the account through which you are using your laptop. In this example, the username is `User`. The username is followed by an `@` symbol and the name of the machine. In this case, the computer is named `Macbook`. The final piece of information is the current working directory. In this example, the current working directory is represented by the `~` symbol, which means we are in the home directory. The `%` symbol is explained below.
    
    ### Issuing Commands
    
    Most text-based commands follow a set pattern. First, type out the command you would like to run. Next, type out any arguments the command needs. Separate the command and each of the arguments with spaces. Finally, we can issue that command to the computer by pressing the `Return` or `Enter` key.
    
    Spaces are used as separators in the command-line inputs. For that reason most commands are single word and it is recommended to avoid using spaces in your file names.
    
    ### Z shell
    
    The software which powers this prompt (aka, our shell) is called [Z shell](https://en.wikipedia.org/wiki/Z_shell). Z shell is started for you automatically as soon as you open your terminal, and will continue running in the background until you close the window. You can think of it like the Finder and the Dock for the command line (or Windows Explorer and the Start menu).
    
    Let's start our exploration of the command line by finding out what version of Z shell we are using. The command to do that is:
    
    `zsh --version`
    
    Go ahead and type that in at your prompt, it should look something like this:
    
    `User@Macbook ~ % zsh --version`
    
    Once that is done, hit enter. You should see output printed to the window:
    
    `zsh 5.8 (x86_64-apple-darwin21.0)`
    
    After the output you should see another prompt just like before. We provided the Z shell some input. It interpreted our command, and gave us back some output. Now it’s waiting for us to give it more input.
    
    ### The `%` Symbol
    
    There was a last part of the prompt we didn't discuss: the `%` at the end. By convention this is there to let you know you are logged in as a regular user, as opposed to a superuser or "root". Remember though that the rest of the prompt will change depending on what your computer is named, what your username is, and the directory in which you're currently working. Since the `%` is relatively constant, it is typically used to indicate commands to be typed into a prompt. So in future examples, rather than seeing:
    
    `User@Macbook ~ % zsh --version`
    
    You will see:
    
    `% zsh --version`
    
    ## Listing Files
    
    The primary use for Z shell is to manage files. But how do we know what files are around for us to manage? The key to this is the command `ls`. `ls` is short for "list." It lists the contents of a directory. To see what files are in the directory we are currently in, simply use:
    
    `% ls`
    
    If your home directory looks something like this:
    
    !https://ds.codeup.com/img/prework/home-folder.png
    
    The output we see in the terminal would be:
    
    ```bash
    % ls
    Desktop        Downloads    Movies      Pictures
    Documents      Library      Music       Public
    %
    ```
    
    ## Specifying a Directory
    
    By default, `ls` lists the contents of the directory we are currently in. What if we wanted to see the contents of a different directory? We can tell `ls` to show the contents of a different place by adding that as an argument. For example, We can see the contents of the `Documents` folder using the following command:
    
    `% ls Documents`
    
    My Documents folder only has four files in it, so the output I see is:
    
    ```bash
    % ls Documents
    File 1  File 2  File A  File B
    %
    ```
    
    Yours will surely be different.
    
    **Note: The Mac file system is *not* case sensitive. That means that it sees `Documents` and `documents` as the same folder. Most other systems do not behave this way and would treat those as two different folders. Be careful when writing out the names of files and folders. In general, programmers tend to avoid capital letters in filenames whenever possible.**
    
    ## Flags
    
    Most CLI commands can take in what are called "flags". Flags are options that can change the way a command behaves. Typically a flag takes the format of a `-` followed by a single letter or number, or two `--` and a word. `ls` can take in several different flags that change its output, some common ones are:
    
    - `a : all files
    -l : long format`
    
    If we wanted to see the contents of our current directory in "long" format, we would do the following:
    
    `% ls -l`
    
    That output would look something like:
    
    ```bash
    % ls -l
    total 0
    drwx------+  4 user  staff   136 Jan  5 01:40 Desktop
    drwx------+  7 user  staff   238 Jan  5 16:20 Documents
    drwx------+  3 user  staff   102 Nov  5 01:12 Downloads
    drwx------+ 42 user  staff  1428 Jan  5 01:37 Library
    drwx------+  3 user  staff   102 Nov  5 01:03 Movies
    drwx------+  3 user  staff   102 Nov  5 01:03 Music
    drwx------+  3 user  staff   102 Nov  5 01:03 Pictures
    drwxr-xr-x+  5 user  staff   170 Nov  5 01:03 Public
    %
    ```
    
    The long format outputs the directory listing in a series of columns resembling a table. Much of the information `ls` displays is beyond the scope of this lesson. However, the last three columns represent: the file size (in bytes), the last date the file was modified on, and the name of the file. For example, the first file listed is `136` bytes, was last modified on `Jan 5 01:40`, and its name is `Desktop`.
    
    You can also use two or more flags together. For example, if you wanted to see *all* the files in a directory in long format, you could run:
    
    `% ls -l -a`
    
    However, short flags (flags represented by a single dash followed by a single letter) can be combined together. Rather than listing each flag individually you could simply type:
    
    `% ls -la`
    
    This syntax will produce exactly the same output as the previous example.
    
    ## Exercises
    
    1. Check what version of zsh you have.
    2. Try each of the flags for `ls` individually and then combine flags together.
    3. List the contents of some other directories.
    4. Can you combine both flags and a different directory?
    5. What happens if you try to list the contents of two or more directories?
    6. [Look over the reference manual for the `ls` command.](https://www.unix.com/man-page/FreeBSD/1/ls/)
- Navigating the Filesystem
    
    # Navigating the Filesystem
    
    Let's examine some concepts that we need to be aware of when navigating our computers via the command line.
    
    ## Paths and Directory Separators
    
    A file path is a line of text that specifies a unique location in a file system. It points to that location by specifying the hierarchy of directories that lead up to that location. For example, `Documents/Secret_Diary/My_Crush.txt` indicates that the file `My_Crush.txt` is in the directory `Secret_Diary`, which in turn is in the folder `Documents`. We separate each directory (or "folder") with the `/` character. Those of you with a background in Windows may be more familiar with the `\` for this purpose, however that character has a different meaning in UNIX systems and most programming languages.
    
    ## The Root Directory
    
    The `/` character separates one directory from another in a path, so `Parent_Directory/Child_Directory` represents one folder nested inside of another. But what about just the `/` on its own? When used by itself, the `/` represents what is called the "root" directory. Remember that directories form a hierarchy. If we were to think of that hierarchy as a tree that branches up and out into child directories (and grandchild, and great-grandchild, etc), the `/` would be the root of that tree. Thus, using just the `/` on its own will take you to the absolute base, or "root", of your filesystem.
    
    ## Absolute and Relative File Paths
    
    There are two ways to represent any given location within our filesystem: the **absolute** path, and the **relative** path.
    
    You can think of these in the following way. Let's say you had a house, and you wanted to give your friend directions to the guest bedroom. You could do that in the following way:
    
    > Starting at the front door, go up the main stairs, down the hallway to your left, and enter the last room on the right. That is the guest bedroom.
    > 
    
    What if instead you were trying to tell them how to find the guest bathroom? It is inside the guest bedroom. You could give them all the same directions over again:
    
    > Starting at the front door, go up the main stairs, down the hallway to your left, enter the last room on the right, and go in the first door to the right. That is the guest bathroom.
    > 
    
    These are both examples of "absolute" paths. You are giving your friend directions to a room from a fixed point of entry in your house (the front door). Thus, you are giving them *absolute* directions. But what if your friend is already in the guest bedroom? Giving an absolute path then would be rather excessive. In that case, you would probably say:
    
    > Go in the first door to the right. That is the guest bathroom.
    > 
    
    This is a "relative" path. You are giving your friend direction to a room *relative* to where they currently are.
    
    Applying these concepts to the filesystem, let's say that we are currently in our home directory, whose path is:
    
    `/Users/john/`
    
    If we wanted to point to the `Documents` directory in there, we could give the **absolute** path to it:
    
    `/Users/john/Documents`
    
    Or we could use the **relative** path:
    
    `Documents`
    
    Because we are in `/Users/john`, both these paths point to the same `Documents` directory.
    
    Remember that:
    
    - The **absolute** path will tell you where you are according to the root of the filesystem. It will *not* change, because the root of the filesystem will always be in the same place.
    - The **relative** path *will* change depending on your current location. It changes because your current location within the filesystem will change as you move around it.
    
    ## The Home Directory
    
    In the previous example, we mentioned a "home" directory. Every user on a UNIX based computer has a home directory. This is a place where that user can store their personal files and settings. In Linux, users' home directories are typically stored inside of `/home`. The home directory for a user named `steve` would be:
    
    `/home/steve`
    
    Mac OS X does things a little bit differently. The home directory on your laptop is inside of `/Users`. If your username is `billy`, then your home directory would be:
    
    `/Users/billy`
    
    In either case though, you will use your home directory a lot. In fact, you refer to it so often, that people developed a shortcut for it: `~`. The `~` points to your home directory, on whatever system you are on, no matter what your username is. So, a path like the following:
    
    `~/Movies`
    
    refers to a directory called `Movies` inside of your home directory.
    
    ## Print Working Directory
    
    We have a command which can tell us where we are in our current filesystem, similar to the *"You Are Here"* marker on a map. We can see where we are in our current filesystem with `pwd`, the "print working directory" command.
    
    `% pwd
    /Users/username`
    
    Know that `pwd` will always give us an **absolute** path on our filesystem, never a relative one.
    
    ## Change Directory
    
    We can move around our filesystem with the `cd`, or "change directory" command.
    
    `% cd`
    
    When we use `cd` we have to specify where we want to go. We can do this by using either the absolute or relative path to that directory.
    
    This would take you to your home directory using an absolute path:
    
    `% cd /Users/john`
    
    This would take you to your home directory using the shorthand `~`:
    
    `% cd ~/`
    
    So, how does our previous command `ls` factor into this scenario? Let's find out.
    
    Go to your home directory, and type in:
    
    `% ls`
    
    You're going to see something like this:
    
    ```bash
    % ls
    Applications    Documents    Library    Music       Public
    Desktop         Downloads    Movies     Pictures
    ```
    
    This shows us the directories listed under our current one. Now we can choose to `cd`, or jump into one of those directories. Let's go into our Desktop and list the files there.
    
    ```bash
    % cd Desktop/
    % ls
    ```
    
    What do you see? Do you see files and folder names listed here that correspond with what's actually on your desktop? What happens when you create a new folder on the desktop, and then run `ls` again? Can you see that the new folder you created shows up in your command line as well?
    
    There is one more thing we'd like to show you. Type `ls -lah` and take a look at what is listed. It should look something like this:
    
    ```bash
    % ls -lah
    total 17032
    drwx------+  36 user  staff   1.2K Jan 23 10:01 .
    drwxr-xr-x+  51 user  staff   1.7K Jan 21 17:32 ..
    -rw-r--r--@   1 user  staff    21K Jan 23 10:01 .DS_Store
    -rw-r--r--    1 user  staff     0B May  6  2014 .localized
    -rw-r--r--@   1 user  staff   136K Jan 11 09:14 random_file.txt
    -rw-r--r--@   1 user  staff    16K Jan 15 14:12
    ```
    
    Do you see the following characters listed above your files/folders?
    
    ```bash
    .
    ..
    ```
    
    These are two additional ways of representing directories with shorthand characters, similar to how our home directory can be accessed anywhere with `~`. These characters are important when we are attempting to navigate using relative paths.
    
    - The `.` single dot, represents our current directory.
    - The `..` double dot, represents the parent directory, or the directory immediately above our current directory.
    
    You can use commands like these the traverse upwards:
    
    ```bash
    # Go up one directory
    % cd ../
    
    # Go up two directories
    % cd ../../
    
    # Go up three directories
    % cd ../../../
    ```
    
    You can traverse downwards by naming the directory you want to move into that is contained in the dictionary to the left of it:
    
    `% cd ./Desktop/some_directory/another_directory/`
    
    You can even chain the double dot with other directories to go up one or more levels and then back down some other part of the directory tree:
    
    ```bash
    # Go up one directory, and then down another directory
    % cd ../another_directory/
    ```
    
    It’s important to note the leading `./` and trailing slash are not always necessary. The following commands both have the same result, when issued from the home directory:
    
    ```bash
    % cd ./Desktop/some_directory/another_directory/
    % cd Desktop/some_directory/another_directory
    ```
    
    The prompt is smart enough to know what you are trying to do in both instances. Did you notice that both of those are relative paths? As you use these commands more, you will get more comfortable with the syntax. It will become second nature to you!
    
    ## Exercise
    
    1. Start at your home directory. Change directory into your Desktop.
    2. Find another folder to `cd` into, and keep going until you have run out of directories to traverse downwards.
    3. Start moving your way back up with `cd ../`. What happens when you try to `cd ../../`?
    4. Start over again at your home directory, and pick a place on your filesystem to jump to using the absolute path.
    5. Pick another one, far away from that place, and jump to it using `cd`.
    6. Make sure to use `pwd` to check your current location if you get lost.
- Creating and Moving
    
    # Creating and Moving
    
    There are a number of ways to create files and directories on the linux filesystem. We are going to show you some of the most common commands.
    
    ## touch
    
    How do we create new files from the command line? Just like this:
    
    `% touch newfile.txt`
    
    The `touch` command allows us to create a new empty file of whatever name we specify. In this case, our file will show up like this:
    
    ```bash
    % ls -l
    
    -rw-r--r--   1 user  wheel         0 Nov 18 11:00 newfile.txt
    ```
    
    You can even create multiple files at once, like this:
    
    `% touch one two three four five`
    
    ## mkdir
    
    What if we want to create a directory? There is the `mkdir` command:
    
    `% mkdir secret_plans`
    
    What happens to your desktop if you `cd` to it, and make this directory?
    
    Just like `touch`, you can create multiple directories inside your current one simultaneously:
    
    `% mkdir one two three four`
    
    ## mv
    
    Occasionally we want to move files from one location to another. We can use the following command, and our path, to accomplish this.
    
    `mv` needs two pieces of information, or arguments, to work. The first is the original file you want to move, the second is the location where you want to move it.
    
    `% mv ~/newfile.txt ~/Desktop/newfile.txt`
    
    This command moves our `newfile.txt` from the home directory, and puts it on our Desktop. What if you only want to use relative paths? Let's say you were already in your home directory:
    
    ```bash
    % pwd
    /Users/john
    ```
    
    You run `ls` to see what files are in there:
    
    ```bash
    % ls -a
    .
    ..
    newfile.txt
    ```
    
    Now, we know where we are, and we know where we want to go, so let's specify our current file and the location to move it to using relative paths.
    
    `% mv newfile.txt ../newfile.txt`
    
    This would move the file up one directory from our current location.
    
    `mv` can also rename files with a slight variation in our syntax:
    
    `% mv current_filename.txt new_filename.txt`
    
    This would not actually move our file from its current directory, but it would rename it inside of our current directory.
    
    ## Exercise
    
    1. Create a new directory on your desktop called "test".
    2. Create some new files in there, named "test1", "test2", and "test3".
    3. Create another directory inside of test, called "secret_files".
    4. Create some new files inside of that.
    5. Navigate back to your desktop and run `ls -l test`. What do you see?
    6. Now try `ls -l test/secret_files`. Do you see your secret files?
    7. Try running `ls -R test`. What does the `R` flag do?
    8. Create a file inside of the `test` named `.hidden_file`. Does this file show up when you run `ls`? What could you do to make it show up?
    9. You've seen that we can create hidden files by prepending the file name with a `.`. Does this also work for directories? Try to create a hidden directory and add files to it. Do all the files in a hidden directory need to be hidden files?
    10. Create a new file on your desktop called "move_it.txt".
    11. Move this file into your home directory.
    12. Now move it into your documents folder, where it belongs.
    13. Change the name of the file, within your documents folder, to `important.txt`.
- More Topics
    
    # Other Command Line Topics and Commands
    
    ## Command History
    
    You can press the up and down arrow keys to go backwards and forwards through your command history in the shell. This can be very useful if you previously typed a very long or complicated command that you need to modify or run again.
    
    ## Interrupting Programs
    
    Pressing `ctrl-c` will "interrupt" most programs. This can usually be used to stop a long running or misbehaving process.
    
    For example, an infinite loop created in Python can be interrupted using the `ctrl-c` command.
    
    ## Getting Help
    
    ### Built-in Help
    
    Most commands have a built-in help message that can be displayed by passing one of the following arguments:
    
    - `h
    --help
    help`
    
    For example, try running:
    
    `% git --help`
    
    ### Man Pages
    
    Man (manual) pages are documentation that come with most unix distributions. They tend to be highly technical, and most serve as a reference for most commands (as opposed to a tutorial on how to use them).
    
    `% man COMMAND_NAME`
    
    - `d` to go down a half page
    - `u` to go up a half page
    - `q` to quit
    - `/` to search for something
    
    ## Comments
    
    The `#` character tells your shell to ignore anything past it.
    
    `% # pressing enter after this line does nothing`
    
    Often times you will see this character to explain what a command is doing, either before, or inline with the command:
    
    ```bash
    % # list all the files
    % ls
    ```
    
    `% ls -lah # all files, long format, human-readable sizes`
    
    ## Other Commands
    
    - `code` is a command that will launch VS Code for you, either opening up a directory, or a specific file
        
        ```bash
        % code . # launch VS Code in the current directory
        % code somefile.txt # open somefile.txt in VS Code (creates it if it doesn't exists)
        ```
        
    - `grep` can be used to search for text in a file
        
        `% grep PATTERN myfile.txt`
        
    - `rm` is used to remove a file(s)
    - `find` is used to search for files and can perform more advanced actions
    - `cat` can be used to display the contents of a file(s)
    - `less` is the pager program that works just like in the man pages, and is another way to display file contents on the command line
    - `open` is specific to MacOS and will try to guess which program to use to open a given file
    - `head` and `tail` can be used to view the first or last few lines of a file
    - `pbpaste` and `pbcopy` (exclusive to MacOS) can be used to show and set the contents of your clipboard
    
    ## Keyboard Shortcuts
    
    Not only will these keyboard shortcuts work in your terminal, they will work in most places in MacOS where you need to input text:
    
    - `ctrl-a`: go to the beginning of the line
    - `ctrl-e`: go to the end of the line
    - `ctrl-k`: delete from the cursor to the end of the line
    - `ctrl-l`: clear the screen
    - `ctrl-w`: delete one word backwards
    
    ## Further Resources
    
    - https://explainshell.com/
    - [Full Text download of *The Linux Command Line*, By William Shotts](http://linuxcommand.org/tlcl.php)
    - [How to Use the Command Line in Linux, Windows, and Mac](https://www.youtube.com/watch?v=BFMyUgF6I8Y)

## [Git](https://www.canva.com/design/DAFwVRzd3lM/GCEMW2xzzSL18JJZCRYAww/view?utm_content=DAFwVRzd3lM&utm_campaign=designshare&utm_medium=link&utm_source=viewer)

# Version Control with Git

## What is Version Control?

Version Control means to track, monitor, and manage changes. Version control systems allow us to track changes in files. One version control system is the "Version History" on a Google Doc or the "Track Changes" feature on Microsoft Office documents. Another type of version control is manually naming files with numbers or context like `resume.pdf`, `resume2.pdf`, and `resume_final.pdf`. While these are both adequate types of version control, code and its documentation benefit from a more robust tool.

## What is Git?

Git is a formalized way to keep track of changes, and allows its users to view changes over time. [Git](https://git-scm.com/) is the most popular version control system for source code and software projects.

Git can be thought of as a permanent record with a time machine and parallel universes.

Git is a permanent record for source code

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/86666827-5852-4b13-b700-67b9ba324137/Untitled.png)

with a time machine

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/7ceaab98-7a97-4f38-80a2-a744fa619beb/Untitled.png)

and parallel universes

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/7856d547-83cc-4244-99d4-c0318304e02f/Untitled.png)

> "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency." - Git documentation
> 

## Why do we care about Git?

Software developers, data scientists, and infrastructure teams use version control to keep track of changes and different features in software, analysis, environments, or documentation. Just having a backup is not enough. Version control allows people to have carefully maintained histories among one or multiple versions.

Think of all the different versions of operating systems like `version 10.18.1` of the Mac OS, `Version 2 of Windows 11 Pro`, or any number of Linux distributions. Recognize that each version of a piece of software is made up of its own set of facts, its source code.

Each different version of source code or documentation is a different body of facts. Git tracks facts and allows us to name and explain those sets of facts.

[GitHub](https://github.com/) (and sites like GitLab or BitBucket) is a web application that makes it visually easy to review code, compare different versions, and collaborate.

## Key Vocabulary and Concepts

- **local**: means your computer, your laptop or desktop.
- **remote**: means another computer, a server, or service (like GitHub) where you backup your code and push changes.
- **repository**: a directory managed by git.
- **add**: to tell git which files we wish to look at for the next commit. Adding files is like putting documents in an envelope.
- **commit**: to create a "save point", to formally take a snapshot of a repository. Commiting means sealing the envelope with your own wax seal and a timestamp. Think of commits like hard save points.
- **push**: to copy the state of a local repository elsewhere, most commonly, to send your work with github. Pushing means uploading.
- **clone**: to copy an entire repository's content along with the fact that the folder is a repository.

## Initial Repository Setup

### GitHub-first approach

1. Create a new repository on your GitHub account
2. Copy the SSH link to your clipboard
3. Navigate to a folder to hold your new repository
4. Clone the repository that was created on github.com
5. Verify that the repo was cloned down

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/61e6ab03-ce53-46ad-b3c1-bfce26138435/Untitled.png)

### Local-device-first approach

Initialize the repo on your local device first and then connect to the remote repo. That process is documented in the [curriculum appendix](https://ds.codeup.com/appendix/git-local-setup).

## Regular Workflow with Git

Once a repository created on both your computer and GitHub, it's time to start doing work.

Here's the short version for your regular, daily Git workflow:

1. Do work (add files, edit files, delete files, rename files, etc) in a repository.
2. Add your work with `git add filename.py` (one file at a time)
    1. `git add .` (will add all files in the folder)
3. Commit your work with message `git commit -m "adding this file"`
4. Push your work with `git push` (this uploads all new commits to GitHub)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/d1444b2c-2258-4b7e-89d9-826b023bd637/Untitled.png)

> If your code ain't in GitHub then it doesn't exist. Always add, commit, and push your work, every day.
> 

Later in the course, when we work in teams, the workflow will change a bit and that is documented in the appendix as [Git for teamwork](https://ds.codeup.com/appendix/git-teamwork/)

## Configuring GitHub

There are many different options to change [git's behavior](https://git-scm.com/docs/git-config#_variables).

We will be setting up a couple of things: our name and email, and a global gitignore file.

All of our configuration can be changed through the `config` git subcommand, as well as by editing the `~/.gitconfig` file.

### Email and Name

We need to tell git who we are. This configuration will default to whatever git can find out about you based on your Mac's configuration, but this will explicitly tell it.

```bash
git config --global user.name "Your Name"
git config --global user.email you@example.com
```

### Global `gitignore` File

We can also setup a *global `.gitignore` file*. This file will tell git to ignore certain files system wide, in addition to any files found in a project specific `.gitignore`.

For example, since we are using MacOS, we will tell git to never track `.DS_Store` files. These files are autogenerated by Finder whenever a directory is opened, and won't pertain to any of our projects.

The command below will create a file named `.gitignore_global` with a line in it that specifies `.DS_Store` files to be ignored

`echo '.DS_Store' >> ~/.gitignore_global`

Now we can tell git that we should use this file to globally ignore files.

`git config --global core.excludesfile ~/.gitignore_global`

## Further Resources

- [Official Git Website](https://git-scm.com/)
- [Github's Resource List for Learning git](https://try.github.io/)
- [Tim Pope on Commit Messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- [Create a Local Git Repository and Push to GitHub](https://www.youtube.com/watch?v=L7vzPm3_Im8)
- [Intro to Using Gitignore to Have Git Ignore Sensitive Files](https://www.youtube.com/watch?v=orp03xihHso)

## Exercises

### Initial Repository Setup

1. Go to https://github.com/new and create a new repository on your GitHub account.
    - Select yourself as owner
    - Name it "example_git_repo"
    - Keep your repro public
    - Ignore all the checkboxes
2. Once the repository is set up, copy the SSH link to your clipboard.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/e273ac80-9681-4906-95e7-33303faac3b9/Untitled.png)

1. Create a folder to hold all your codeup work and switch to it
    - Open up your terminal
    - Run `mkdir ~/codeup-data-science` to make a new directory to hold all your codeup work
    - Run `cd ~/codeup-data-science` to navigate to the new directory
2. Clone the repository that was created on github.com into your `~/codeup-data-science/` folder
    - Type `git clone` followed by a space character
    - Paste the SSH git address of your repository (`command V`)
    - Hit enter
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/7afd2b5a-23b7-4998-9ef9-fe0a3d441eb2/Untitled.png)
    
3. Verify that the repo was cloned down
    - Run `ls`
        - You should see the new a subfolder
    - Move into your new repo with `cd example_git_repo`
    - Run `ls -la` in your new repo
        - You should see a `.git` folder (which is for git's internals) and nothing else
    - Run `git status`
        - you'll see that you are on a default branch and have no commits yet
4. Confirm that this new repository points to GitHub appropriately
    - Type `git remote -v`
    - The output of this command will show that the remote, called `origin` points to GitHub.

Congratulations! You now have a repository in GitHub that is cloned down to your laptop.

### Configuration setup

**COMPLETE ABSOLUTELY EVERY ONE OF THESE EXERCISES OR IT WILL HARM YOU LATER**

1. Setup your global Git configuration.
    - Run `git config --global pull.rebase false` to set a helpful default.
    - Run `git config --global user.name "Your Name"` with your full name in the quotation marks.
    - Run `git config --global user.email you@example.com` with your email address associated with GitHub.
    
    > **Set your git config to use the email address associated with your GitHub account**
    > 
    > 
    > Make sure that the email address and name you provide on the command line matches exactly what you provided to GitHub, otherwise you won't get credit for your commits. This is the email address of your GitHub account.
    > 
2. Run the following commands to ensure that your user information is correct.
    - Run `git config --global user.name` to verify your first and last name.
    - Run `git config --global user.email` to verify your email address.
3. Set up your default branch name
    - Run `git config --global init.defaultBranch main`.
    - Like many command line commands, successfully running this command produces no output.
4. Double check that your `~/codeup-data-science` directory exists in the appropriate place.
    - Open up Finder
    - `Command + Shift + H` keyboard shortcut will navigate you to your home directory.
    - Your home directory should list `Desktop`, `Downloads`, other folders, as well as `codeup-data-science`.
    - Click and drag your `codeup-data-science` folder to the left-hand menu of Finder to add this folder as a Finder favorite.

### Create `Hello_World` repository

1. Using the directions above, create a repository on GitHub called Hello_World.
    - `cd ~/codeup-data-science` and then clone your repo here.
    - `cd ~/codeup-data-science/Hello_World`
2. Orient yourself with your new repository and its parent folder
    - Type `git status`. What do you see? Does this make sense?
    - Type `ls -l`. What do you see? Does this make sense? Why/why not?
    - Type `ls -la`. What do you see? Does this make sense? Why/why not?
    - Type `cd ..` to navigate to the parent folder
        - From the parent folder, type `pwd`. What is your current working directory?
        - Run `ls -la`. What do you see?
        - Run `git status`. What output do you see? Does this make sense or not?
    - Return to `~/codeup-data-science/Hello_World` (remember the `cd` command). Type `pwd` to confirm.
3. Do work on your local repository
    - Create a file named `hello.txt` inside of your `~/codeup-data-science/Hello_World` repo.
        - Use a code editor or the Mac application `TextEdit`.
    - The `hello.txt` file should have text that says "Hello, World!" on the first line. Save the file.
    - Now type `git status` from your terminal. What do you see?
    - Type `ls -la`. What do you see here?
4. Add files
    - Run `git add hello.txt` to stage your file.
    - Run `git status`.
    - Read the output carefully and think about what changed.
5. Commit files
    - Run `git commit -m "added hello.txt"` to take a snapshot of you have staged
    - Run `git status` to see what changed.
6. Push files
    - Run `git push`
        - Pay attention to the output messages
    - Go back to your `Hello_World` repository on GitHub.com and refresh the page for your repository

Congratulations! You've made a repository, done work, added, committed, and pushed to GitHub!

### Add to files in your `Hello_World` Repository

1. From your `Hello_World` repository on your laptop, open `hello.txt` with VS Code or the Mac application `TextEdit`.
2. On the second line, add a new line of text that says "Now I'm adding a second line of content" and save.
3. From the terminal type `git status`. What do you see? What changed?
4. Now that you've added new content, run `git diff`.
    - We can run `git diff hello.txt` or for other specific filenames
    - We can also run `git diff` to see all differences in any changed files.
5. Back in your editor, add a 3rd line of text to `hello.txt` that says "Adding a 3rd line of text"
6. Return to your terminal and type `git diff`, reviewing the feedback.
7. Add, commit, and push your work
    - Add your new work with `git add hello.txt`
    - Commit with `git commit -m "added 2 example lines of text"`
    - Now push to GitHub with `git push`
8. Review the changes on your `Hello_World` repo page on GitHub.

### Remove content from files in `Hello_World`

1. Using VS Code or the `TextEdit` Mac application, open up your `hello.txt` file in your local `Hello_World` repo.
2. Delete the 3rd line of text from `hello.txt` and save.
3. From your terminal, type `git diff`.
    - What do you notice?
    - How does this compare to the `git diff` you ran earlier when adding content?
4. Run `git add hello.txt` to add these changes.
5. Now type `git commit -m "Removed 3rd line of text"` to commit.
6. Push your work with `git push`
7. From your terminal type `git log` and review the results. This is log is your history of git commits.
    - Notice how each commit lists the author, timestamp, and date.
    - Notice how each commit has a unique alphanumeric identifier. This is the unique identifier for each separate commit.
8. In your browser, refresh your `Hello_World` repository page.
    - Click the icon that shows the number of commits in this repository
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/6a131433-a110-44da-b900-9fb82760f851/Untitled.png)
    
9. Compare the results of your terminal's `git log` with what GitHub shows.

### Setup or restore a repository from GitHub

Let's setup an existing repository from GitHub on a local device

1. Verify your `Hello_World` repository exists on GitHub with the `hello.txt` file and 3 commits.
2. Open up Finder on your Mac and navigate to `~/codeup-data-science` folder.
3. Delete your local `Hello_World` repo.
4. In your terminal, run `cd ~/codeup-data-science` and run `ls -la`. Your local repo should no longer be there.
5. Let's simulate restoring your work from GitHub.
    - Inside of GitHub, click Code and then copy the SSH git clone address to your clipboard.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/c0ef103c-137a-4cff-b4bb-e0081a6042f3/fbf7ad27-117a-417e-ae77-01fd1a1cb5dd/Untitled.png)
    
    - From `~/codeup-data-science`, type `git clone`, space, and then paste the ssh clone address.
    - Now type `ls -la`. Do you see a new local copy of the repo?
    - `cd Hello_World`
    - `ls -la` should show that all of your work is now restored from GitHub

This exercise highlights the importance of committing and pushing your code regularly. If you have a steady habit of both committing and pushing your work to GitHub, restoring your work is direct. Imagine if this was more important work and if you had neglected to commit or push!

### Gitignore Exercise

1. Stay in the `Hello_World` repo on your local device
2. Use VS Code to make new file called .gitignore
    - Run `code .gitignore`
    - Leave it empty for now
    - Save this file
3. Use VS Code to make new file called secrets.txt
    - Run `code secrets.txt`
    - Add a pretend username and pretend password
    - Save this file
4. Run `git status`
    - What untracked files do you see?
5. Add secrets.txt to .gitignore
    - Run `code .gitignore`
    - Type `secrets.txt`
    - The only line of text inside of .gitignore is `secrets.txt`
    - Save this file
6. Run `git status`
    - What untracked files do you see?
7. Add, commit, and push your work in the terminal
    - Run `git add .gitignore`
    - Run `git status`
        - What do you see?
    - Run `git commit -m "add secrets.txt to gitignore"`
    - Run `git status`
        - What do you see?
    - Run `git push`
    - Run `git status`
        - What do you see
    - Run `git add secrets.txt`
        - What do you see?
8. Check your new repository on GitHub.com
    - Does secrets.txt show up?
    - The only file should be the `.gitignore` file.

### Global Gitignore

1. Create a global gitignore file
    - Run `code ~/.gitignore_global`
    - Add the following lines:
        
        ```bash
        env.py
        .DS_Store
        .ipynb_checkpoints/
        __pycache__
        .vscode/
        ```
        
2. Set .gitignore_global to ignore all files
    - Run `git config --global core.excludesfile ~/.gitignore_global`
3. Confirm global gitignore setup
    - Go to Hello_World repository
        - Run `cd ~/codeup-data-science/Hello_World`
    - Create and open an env.py file
        - Run `code env.py`
    - Add the following lines
        
        ```bash
        host = "123.456.123.456"
        user = "example_username"
        password = "example_password"
        ```
        
    - Save and exit VS Code
    - Run `git status`
    - Do you see that git is tracking your `env.py` file?
    - If it's showing in `git status`, why is that the case? Double check any spelling in the filename and your global gitignore.

### Make a Profile README repo

1. Follow the directions on [Managing your profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) to make a profile readme on GitHub.
2. Use [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) as reference for learning + using markdown that will add structure, organization, and content to your profile readme.
3. Take a few minutes to spice up your profile explaining why you're interested in data science and what you will be studying at Codeup.
4. Whenever you have spare moments, add more to your GitHub profile readme
5. If you need inspiration, check out https://zzetao.github.io/awesome-github-profile/
6. You can make and share amazing content with markdown, links, and images!