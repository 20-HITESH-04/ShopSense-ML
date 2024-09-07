
# ShopSense-ML
ShopSense-ML is a comprehensive web application developed to empower retail businesses with advanced tools for sales prediction, customer segmentation, and profit maximization.

Features
Developed a web application for retail businesses with a beautiful, easy-to-use frontend and secure Auth0 login/signup for user data protection.

Implemented xGBoosted Trees for accurate sales prediction, helping businesses forecast demand and manage inventory efficiently.

Utilized K-Means Clustering for effective customer segmentation, enabling targeted marketing strategies and personalized customer interactions.

Maximized profits through advanced sales prediction models and dynamic pricing strategies, ensuring competitive pricing and optimal revenue generation.

**See How My Project Works**

https://github.com/user-attachments/assets/0bb4c40b-240f-4851-84d8-8cbfdb58ac01

## Project Structure


ClientSide/: Contains the React frontend code.

env/: Environment configuration files.

templates/: HTML templates for Flask.

.gitignore: Specifies files and directories to be ignored by Git.

README.md: This file.

Train.csv: Training dataset used for building the machine learning models.

Test.csv: Test dataset used for evaluating the models.

app.py, app2.py, app3.py: Flask application files responsible for the backend.

bigmartsalesprediction.py: Python script implementing the sales prediction model.

customersegmentation.py: Python script implementing the customer segmentation model.

mall_customer.pkl, salePrediction.pkl: Serialized machine learning model files for deployment.

## How To Run
Clone the repository:


git clone https://github.com/maheshpanda1806/Pando-Heaven-For-Weebs.git
Navigate to the project directory:

cd ShopSense-ML

Install the necessary dependencies:


pip install -r requirements.txt

Run the Flask application:


python app.py

python app2.py

python app3.py

Access the application: Open your web browser and go to http://localhost:5000 to start using the application.






