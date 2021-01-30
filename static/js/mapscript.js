// get the data from the flask api
fetch('/map_data')
      .then(function (response) {
          return response.json();
      }).then(function (data) {
          console.log('GET response:');
          let mapData = data;
          // send data to the createMap function
          createMap(mapData);
      });

// function to create the map      
function createMap (mapData) {
    // load the Google GeoChart package
    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': API_KEY
    });

    // call function to draw the map
    google.charts.setOnLoadCallback(drawRegionsMap);

    // function to create map
    function drawRegionsMap() {

        // set data
        var data = google.visualization.arrayToDataTable(mapData);

        // set options
        var options = {
            colorAxis: {colors: ['#e7711c', '#4374e0']},
            backgroundColor: '#d6d6d6'
        };

        // set where in html to put chart
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        // draw chart using data & options specified
        chart.draw(data, options);
    }

}
