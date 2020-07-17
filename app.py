from flask import Flask, send_from_directory
from flask import jsonify 
from flask_cors import CORS
from flask import request
import requests

# creates a Flask application, named app
app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)


@app.route("/api/location/search")
def get_WOEID():
    query_value = request.args.get('query')
    response = requests.get(f"https://www.metaweather.com/api/location/search/?query={query_value}")
    return response.text


@app.route("/api/location/<woeid>")
def get_weather(woeid):
    response = requests.get(f"https://www.metaweather.com/api/location/{woeid}")
    return response.text


# run the application
if __name__ == "__main__":
    app.run(debug=False)