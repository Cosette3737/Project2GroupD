from flask import Flask, render_template, jsonify
import data

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
import datetime as dt
import pandas as pd


app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

@app.route('/')
def home():
    return render_template('base.html')

@app.route('/viz1')
def viz1():
    return render_template('viz1.html')

@app.route('/viz2')
def viz2():
    return render_template('viz2.html')

@app.route('/viz3')
def viz3():
    return render_template('viz3.html')

@app.route('/map_data', methods=['GET'])
def map_data():
    #create engine to connect to SQL database
    engine = create_engine("postgresql://postgres:postgres@localhost/formula1")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    wins_per_country = pd.read_sql('SELECT n.country, w.wins \
        FROM countryWins AS w \
        JOIN nationalities AS n \
        ON w.nationality = n.nationality \
        ORDER BY wins DESC;' , connection)

    # convert dataframe to list of lists with header
    wins_per_country_list = [wins_per_country.columns.values.tolist()] \
        + wins_per_country.values.tolist()

    return jsonify(wins_per_country_list)

@app.route('/race_chart_data', methods=['GET'])
def race_chart_data():
    #create engine to connect to SQL database
    engine = create_engine("postgresql://postgres:postgres@localhost/formula1")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    race_data = pd.read_sql('SELECT nationality, date \
        FROM barchartracetable;', connection)

    # convert dataframe to list of lists with header
    race_chart_list = [race_data.columns.values.tolist()] \
        + race_data.values.tolist()

    return jsonify(race_chart_list)

@app.route('/top5_data', methods=['GET'])
def top5_data():
    #create engine to connect to SQL database
    engine = create_engine("postgresql://postgres:postgres@localhost/formula1")
    #connect to SQL database
    connection = engine.connect()

    # creat dataframe of wins per country from database
    top5_data = pd.read_sql('SELECT dw.wins, dw.forename, \
        dw.surname, dw.nationality, d.dob, d.driverNumber, d.url \
        FROM driverWins AS dw \
        JOIN drivers AS d \
        ON dw.driverId=d.driverId \
        ORDER BY dw.wins DESC\
        LIMIT 5;', connection)

    # convert dataframe to list of lists with header
    top5_list = top5_data.values.tolist()

    return jsonify(top5_list)



if __name__ == '__main__':
    app.run(debug=True)