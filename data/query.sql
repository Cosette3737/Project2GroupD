CREATE VIEW wins AS
SELECT driverId, COUNT(place) AS "wins"
FROM (
	SELECT driverId, place
	FROM results 
	WHERE place = '1'
) AS w
GROUP BY driverId
ORDER BY "wins" DESC;

SELECT w.driverId, w.wins, d.forename, d.surname, d.nationality
FROM wins AS w
JOIN drivers AS d
ON w.driverId=d.driverId
ORDER BY w.wins DESC
LIMIT 5;