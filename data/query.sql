SELECT driverId, COUNT(place) AS "Number of Wins"
FROM (
	SELECT driverId, place
	FROM results 
	WHERE place = '1'
) AS w
GROUP BY driverId
ORDER BY "Number of Wins" DESC;