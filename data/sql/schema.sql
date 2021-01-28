-- import csv files after creating the tables in the same order 
-- that the tables were created. 

CREATE TABLE circuits (
    circuitId INTEGER PRIMARY KEY,
    circuitRef VARCHAR,
    name VARCHAR,
    location VARCHAR,
    country VARCHAR,
    lat FLOAT,
    lng FLOAT,
    alt VARCHAR,
    url VARCHAR
);

CREATE TABLE constructors (
    constructorId INTEGER PRIMARY KEY,
    constructorRef VARCHAR,
    name VARCHAR,
    nationality VARCHAR,
    url VARCHAR
);

CREATE TABLE drivers (
    driverId INTEGER PRIMARY KEY,
    driveRef VARCHAR,
    driverNumber VARCHAR,
    code VARCHAR,
    forename VARCHAR,
    surname VARCHAR,
    dob DATE,
    nationality VARCHAR,
    url VARCHAR
);

CREATE TABLE status (
    statusId INTEGER PRIMARY KEY,
    status VARCHAR
);

CREATE TABLE races (
    raceId INTEGER PRIMARY KEY,
    year INTEGER,
    round INTEGER,
    circuitId INTEGER,
    FOREIGN KEY (circuitId) REFERENCES circuits(circuitId),
    name VARCHAR,
    date DATE,
    time VARCHAR,
    url VARCHAR
);

CREATE TABLE results (
    resultId INTEGER PRIMARY KEY,
    raceId INTEGER,
    FOREIGN KEY (raceId) REFERENCES races(raceId),
    driverId INTEGER,
    FOREIGN KEY (driverId) REFERENCES drivers(driverId),
    constructorId INTEGER,
    FOREIGN KEY (constructorId) REFERENCES constructors(constructorId),
    carNumber VARCHAR,
    grid VARCHAR,
    place VARCHAR,
    positionText VARCHAR,
    positionOrder VARCHAR,
    points VARCHAR,
    laps VARCHAR,
    raceTime VARCHAR,
    milliseconds VARCHAR,
    fastestLap VARCHAR,
    fastestRank VARCHAR,
    fastestLapTime VARCHAR,
    fastestLapSpeed VARCHAR,
    statusId INTEGER,
    FOREIGN KEY (statusId) REFERENCES status(statusId)
);

CREATE TABLE nationalities (
    nationality VARCHAR PRIMARY KEY,
    country VARCHAR
);

-- create views to help with queries
CREATE VIEW wins AS
SELECT driverId, COUNT(place) AS "wins"
FROM (
	SELECT driverId, place
	FROM results 
	WHERE place = '1'
) AS w
GROUP BY driverId
ORDER BY "wins" DESC;

CREATE VIEW driverWins AS
SELECT w.driverId, w.wins, d.forename, d.surname, d.nationality
FROM wins AS w
JOIN drivers AS d
ON w.driverId=d.driverId
ORDER BY w.wins DESC;

CREATE VIEW countryWins AS
SELECT nationality, SUM(wins) AS "wins"
FROM driverWins
GROUP BY nationality
ORDER BY wins DESC;