import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all routes and origins

model = pickle.load(open("salePrediction.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # Extract values from form fields
    item_weight = float(request.json['item_weight'])
    item_fat_content = float(request.json['item_fat_content'])
    item_visibility = float(request.json['item_visibility'])/100
    item_type = float(request.json['item_type'])
    item_mrp = float(request.json['item_mrp'])
    outlet_establishment_year = float(request.json['outlet_establishment_year'])
    outlet_size = float(request.json['outlet_size'])
    outlet_location_type = float(request.json['outlet_location_type'])
    outlet_type = float(request.json['outlet_type'])

    # Create feature array
    features = np.array([[item_weight, item_fat_content, item_visibility, item_type, item_mrp,
                          outlet_establishment_year, outlet_size, outlet_location_type, outlet_type]])

    # Make prediction
    prediction = model.predict(features)

    # Convert prediction to JSON serializable format
    prediction_json = prediction.tolist()

    # Return prediction with CORS headers
    response = jsonify({"prediction": prediction_json})
   # response.headers.add("Access-Control-Allow-Origin", "*")  # Allow all origins
    return response

if __name__ == "__main__":
    app.run(debug=True, port=5000) # Make sure Flask runs on port 5000
