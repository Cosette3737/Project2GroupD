//Creates the chart and makes the data
const myChart = new BarChartRace("bar-chart-race");
grabData().then(dataSets => {
  myChart
  .setTitle("Formula 1 Wins By Nationality Over Time")
  .addDatasets(dataSets)
  .render();
})

//Creates the button!
d3.select("button").on("click", function() {
  if (this.innerHTML === "Stop") {
    this.innerHTML = "Resume";
    myChart.stop();
  } else if (this.innerHTML === "Resume") {
    this.innerHTML = "Stop";
    myChart.start();
  } else {
    this.innerHTML = "Stop";
    myChart.render();
  }
});