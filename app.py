from flask import Flask, send_from_directory
from flask import jsonify 
from flask_cors import CORS
from flask import request

# creates a Flask application, named app
app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)


@app.route("/api/location/search")
def get_WOEID():
    query = request.args.get('query')
    return f"getWOEID {query}"


@app.route("/api/location/<woeid>")
def get_weather(woeid):
    return f"get_weather {woeid}"


# run the application
if __name__ == "__main__":
    app.run(debug=False)