import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all routes and origins

model = pickle.load(open("salePrediction.pkl", "rb"))

def maximize_sales(item_weight, item_fat_content, item_visibility, item_type, item_mrp,
                   outlet_establishment_year, outlet_size, outlet_location_type, outlet_type):
    best_sales = -1
    best_mrp, best_visibility = item_mrp, item_visibility

    if outlet_size == "High":  
        visibility_increase_cost = item_mrp * 0.05  
    elif outlet_size == "Medium":
        visibility_increase_cost = item_mrp * 0.1  
    else:
        visibility_increase_cost = item_mrp * 0.15  

    for mrp_adjustment in range(-25, 1):
        adjusted_mrp = item_mrp * (1 + mrp_adjustment / 100)
        if adjusted_mrp <= 0:
            adjusted_mrp = 0.01

        for visibility_adjustment in range(0, 101):
            adjusted_visibility = item_visibility + visibility_adjustment / 100
            visibility_cost = visibility_increase_cost * adjusted_visibility
            total_cost = adjusted_mrp + visibility_cost

            features = np.array([[item_weight, item_fat_content, adjusted_visibility, item_type, adjusted_mrp,
                                   outlet_establishment_year, outlet_size, outlet_location_type, outlet_type]])

            prediction = model.predict(features)
            sales = prediction - total_cost

            if sales > best_sales:
                best_sales = sales
                best_mrp, best_visibility = adjusted_mrp, adjusted_visibility

    return best_mrp, best_visibility, best_sales

@app.route("/")
def home():
    return render_template("index2.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
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

        # Maximize sales
        adjusted_mrp, adjusted_visibility, best_sales = maximize_sales(item_weight, item_fat_content, item_visibility,
                                                                       item_type, item_mrp, outlet_establishment_year,
                                                                       outlet_size, outlet_location_type, outlet_type)

        # Create feature array
        features = np.array([[item_weight, item_fat_content, adjusted_visibility, item_type, adjusted_mrp,
                              outlet_establishment_year, outlet_size, outlet_location_type, outlet_type]])

        # Make prediction
        prediction = model.predict(features)

        # Recommendation message
        recommendation = f"To maximize sales, adjust price to {round(adjusted_mrp, 2)} and visibility to {round(adjusted_visibility * 100, 2)}%."

        # Return prediction and recommendation
        return jsonify({
            "prediction": prediction.tolist(),
            "recommendation": recommendation
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
