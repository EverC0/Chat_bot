from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from preprocessing import preprocess_new_data


# Flask: This is the main class used to create your Flask application.
# request: This is used to handle incoming data in your API endpoints.
# jsonify: Converts your Python objects into JSON, which can be returned as a response from your API.
# CORS: This is used to enable Cross-Origin Resource Sharing, allowing your API to be accessed from different domains.
# joblib: This is used to load pre-trained machine learning models.

app = Flask(__name__)
CORS(app)  # This will allow all domains to access your Flask app

# Alternatively, you can be more restrictive:
# CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

# Load your model

def clean_data(new_input):
    processed_input = preprocess_new_data(new_input)
    return processed_input


model = joblib.load('sleep_quality_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():

    data = request.json['data']

    # Debug: Print the incoming data
    # print("Received data:", data)

    # Clean the input data
    cleaned_data = clean_data(data)

    # Debug: Print the cleaned data
    # print("Cleaned data:", cleaned_data)

    # Ensure that cleaned_data is a 2D array
    input_data  = [list(cleaned_data.values())] # cleaned_data should already be a list of values

    # Make a prediction using the cleaned data
    prediction = model.predict(input_data)

    # Return the prediction as a JSON response
    return jsonify({'prediction': prediction[0]})



if __name__ == '__main__':
    #host='0.0.0.0', port=5000 useful 0.0.0.0 so that anyone can access it
    app.run(debug=True)


