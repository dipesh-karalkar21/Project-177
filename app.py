from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

words = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"
    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
    },
]

@app.route("/")
def index():
    return render_template("index.html")

    
@app.route("/get_word")
def getWord():
    return jsonify({
        "status":"success",
        "word":random.choice(words)
    },200)


app.run(debug="true")
