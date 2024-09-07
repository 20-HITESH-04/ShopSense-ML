import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

Y = pickle.load(open("mall_customer.pkl", "rb"))
print(Y)  # Optional: Print Y to console for debugging
   
@app.route("/")
def home():
    return render_template("index3.html", test_string=my_string())

def my_string():
    my_string =  " ".join(Y.tolist());
    print(mmy_string)
    return my_string

if __name__ == "__main__":
    app.run(debug=True, port=5002)
