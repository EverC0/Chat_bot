import pandas as pd
import numpy as np
from scipy.stats import zscore

import json

# Load the scaling parameters from the JSON file
with open('scaling_params.json', 'r') as f:
    scaling_params = json.load(f)

means = scaling_params['means']
stds = scaling_params['stds']

# Define the mapping dictionaries
BMI_mapping = {"Normal": 1, "Normal Weight": 1, "Obese": 2, "Overweight": 3}
Sleep_mapping = {"None": 1, "Insomnia": 2, "Sleep Apnea": 3}
Gender_mapping = {"Male": 1, "Female": 0}

def preprocess_new_data(new_data):
    
    # gender no
    # age yes
    # sleep d yes
    # pal yes
    # BMI no
    # heart r yes
    # daily steps yes
    # sleep dis no
    # map blood pressure yes

    new_data['Gender'] = Gender_mapping[new_data['Gender']]
    new_data['BMI Category'] = BMI_mapping[new_data['BMI Category']]
    new_data['Sleep Disorder'] = Sleep_mapping[new_data['Sleep Disorder']]

    new_data['Age'] = (new_data['Age'] - means['Age']) / stds['Age']
    new_data['Sleep Duration'] = (new_data['Sleep Duration'] - means['Sleep Duration']) / stds['Sleep Duration']
    new_data['Physical Activity Level'] = (new_data['Physical Activity Level'] - means['Physical Activity Level']) / stds['Physical Activity Level']
    new_data['Stress Level'] = (new_data['Stress Level'] - means['Stress Level']) / stds['Stress Level']
    new_data['Heart Rate'] = (new_data['Heart Rate'] - means['Heart Rate']) / stds['Heart Rate']
    new_data['Daily Steps'] = (new_data['Daily Steps'] - means['Daily Steps']) / stds['Daily Steps']
    # Split the 'Blood Pressure' and calculate MAP
    systolic, diastolic = map(float, new_data['Blood Pressure'].split('/'))
    new_data['MAP_bloodpressure'] = (systolic + 2 * diastolic) / 3

    # Standardize MAP
    new_data['MAP_bloodpressure'] = (new_data['MAP_bloodpressure'] - means['MAP_bloodpressure']) / stds['MAP_bloodpressure']

    # Remove 'Blood Pressure' as it's no longer needed
    del new_data['Blood Pressure']


    # Ensure the final order of fields
    # input_data = [
    #     new_data['Gender'],
    #     new_data['Age'],
    #     new_data['Sleep Duration'],
    #     new_data['Physical Activity Level'],
    #     new_data['Stress Level'],
    #     new_data['BMI Category'],
    #     new_data['MAP_bloodpressure'],
    #     new_data['Heart Rate'],
    #     new_data['Daily Steps'],
    #     new_data['Sleep Disorder']
    # ]

    # print("input data:", new_data)

    # Return the processed data as a list of values
    return new_data