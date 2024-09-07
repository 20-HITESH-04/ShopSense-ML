# -*- coding: utf-8 -*-
"""BigMartSalesPrediction.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1eV0Jsy7lo2JIKyzURcFUOGtXQ40pvX

Importing the Dependencies
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor
from sklearn import metrics

"""Data Collection and Processing"""

# loading the data from csv file to Pandas DataFrame
big_mart_data = pd.read_csv('/content/Train.csv')

# first 5 rows of the dataframe
big_mart_data.head()

# number of data points & number of features
big_mart_data.shape

# getting some information about the dataset
big_mart_data.info()

"""Categorical Features:
- Item_Identifier
- Item_Fat_Content
- Item_Type
- Outlet_Identifier
- Outlet_Size
- Outlet_Location_Type
- Outlet_Type
"""

# checking for missing values
big_mart_data.isnull().sum()

"""Handling Missing Values

Mean --> average

Mode --> more repeated value
"""

# mean value of "Item_Weight" column
big_mart_data['Item_Weight'].mean()

# filling the missing values in "Item_weight column" with "Mean" value
big_mart_data['Item_Weight'].fillna(big_mart_data['Item_Weight'].mean(), inplace=True)

# mode of "Outlet_Size" column
big_mart_data['Outlet_Size'].mode()

# filling the missing values in "Outlet_Size" column with Mode
mode_of_Outlet_size = big_mart_data.pivot_table(values='Outlet_Size', columns='Outlet_Type', aggfunc=(lambda x: x.mode()[0]))

print(mode_of_Outlet_size)

miss_values = big_mart_data['Outlet_Size'].isnull()

print(miss_values)

big_mart_data.loc[miss_values, 'Outlet_Size'] = big_mart_data.loc[miss_values,'Outlet_Type'].apply(lambda x: mode_of_Outlet_size[x])

# checking for missing values
big_mart_data.isnull().sum()

"""Data Analysis"""

big_mart_data.describe()

"""Numerical Features"""

sns.set()

# Item_Weight distribution
plt.figure(figsize=(6,6))
sns.distplot(big_mart_data['Item_Weight'])
plt.show()

# Item Visibility distribution
plt.figure(figsize=(6,6))
sns.distplot(big_mart_data['Item_Visibility'])
plt.show()

# Item MRP distribution
plt.figure(figsize=(6,6))
sns.distplot(big_mart_data['Item_MRP'])
plt.show()

# Item_Outlet_Sales distribution
plt.figure(figsize=(6,6))
sns.distplot(big_mart_data['Item_Outlet_Sales'])
plt.show()

# Outlet_Establishment_Year column
plt.figure(figsize=(6,6))
sns.countplot(x='Outlet_Establishment_Year', data=big_mart_data)
plt.show()

"""Categorical Features"""

# Item_Fat_Content column
plt.figure(figsize=(6,6))
sns.countplot(x='Item_Fat_Content', data=big_mart_data)
plt.show()

# Item_Type column
plt.figure(figsize=(30,6))
sns.countplot(x='Item_Type', data=big_mart_data)
plt.show()

# Outlet_Size column
plt.figure(figsize=(6,6))
sns.countplot(x='Outlet_Size', data=big_mart_data)
plt.show()

"""Data Pre-Processing"""

big_mart_data.head()

big_mart_data['Item_Fat_Content'].value_counts()

big_mart_data.replace({'Item_Fat_Content': {'low fat':'Low Fat','LF':'Low Fat', 'reg':'Regular'}}, inplace=True)

big_mart_data['Item_Fat_Content'].value_counts()

"""Label Encoding"""

# encoder = LabelEncoder()

# big_mart_data['Item_Identifier'] = encoder.fit_transform(big_mart_data['Item_Identifier'])

# big_mart_data['Item_Fat_Content'] = encoder.fit_transform(big_mart_data['Item_Fat_Content'])

# big_mart_data['Item_Type'] = encoder.fit_transform(big_mart_data['Item_Type'])

# big_mart_data['Outlet_Identifier'] = encoder.fit_transform(big_mart_data['Outlet_Identifier'])

# big_mart_data['Outlet_Size'] = encoder.fit_transform(big_mart_data['Outlet_Size'])

# big_mart_data['Outlet_Location_Type'] = encoder.fit_transform(big_mart_data['Outlet_Location_Type'])

# big_mart_data['Outlet_Type'] = encoder.fit_transform(big_mart_data['Outlet_Type'])


fat_content_mapping = {'Low Fat': 1, 'Regular': 2, 'High Fat': 0}
item_type_mapping = {'Baking Goods': 0, 'Breads': 1, 'Breakfast': 2, 'Canned': 3,
                     'Dairy': 4, 'Frozen Foods': 5, 'Fruits and Vegetables': 6,
                     'Hard Drinks': 7, 'Health and Hygiene': 8, 'Household': 9,
                     'Meat': 10, 'Others': 11, 'Seafood': 12, 'Snack Foods': 13,
                     'Soft Drinks': 14, 'Starchy Foods': 15}
outlet_size_mapping = {'High': 0, 'Medium': 1, 'Small': 2}
outlet_location_type_mapping = {'Tier 1': 0, 'Tier 2': 1, 'Tier 3': 2}
outlet_type_mapping = {'Grocery Store': 0, 'Supermarket Type1': 1,
                       'Supermarket Type2': 2, 'Supermarket Type3': 3}

# Replace values in the DataFrame
big_mart_data['Item_Fat_Content'] = big_mart_data['Item_Fat_Content'].map(fat_content_mapping)
big_mart_data['Item_Type'] = big_mart_data['Item_Type'].map(item_type_mapping)
big_mart_data['Outlet_Size'] = big_mart_data['Outlet_Size'].map(outlet_size_mapping)
big_mart_data['Outlet_Location_Type'] = big_mart_data['Outlet_Location_Type'].map(outlet_location_type_mapping)
big_mart_data['Outlet_Type'] = big_mart_data['Outlet_Type'].map(outlet_type_mapping)

big_mart_data.head()

"""Splitting features and Target"""

# Drop multiple columns at once
X = big_mart_data.drop(columns=['Item_Outlet_Sales', 'Item_Identifier', 'Outlet_Identifier'])

Y = big_mart_data['Item_Outlet_Sales']

print(X)

print(Y)

"""Splitting the data into Training data & Testing Data"""

X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

print(X.shape, X_train.shape, X_test.shape)

"""Machine Learning Model Training

XGBoost Regressor
"""

regressor = XGBRegressor()

regressor.fit(X_train, Y_train)

"""Evaluation"""

# prediction on training data
training_data_prediction = regressor.predict(X_train)

# R squared Value
r2_train = metrics.r2_score(Y_train, training_data_prediction)

print('R Squared value = ', r2_train)

# prediction on test data
test_data_prediction = regressor.predict(X_test)

# R squared Value
r2_test = metrics.r2_score(Y_test, test_data_prediction)

print('R Squared value = ', r2_test)

# Save the model and encoder
import pickle

with open('salePrediction.pkl', 'wb') as f:
    pickle.dump(regressor, f)

with open('encoder.pkl', 'wb') as f:
    pickle.dump(encoder, f)