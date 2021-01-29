const myChart = new BarChartRace("bar-chart-race");

myChart
  .setTitle("Bar Chart Race Title")
  .addDatasets(generateDataSets())
  .render();

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