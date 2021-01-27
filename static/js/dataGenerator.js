// const data = d3.csv("src/barchartrace.csv");
// console.log(data);
// const data = d3.csv("src/barchartrace.csv", function(data) {
//   console.log(data);
// });
//Fetch data
// fetch('/race_chart_data')
// .then(function (response) {
//     return response.json();
// }).then(function (data) {
//     console.log('GET response:');
//     let raceData = data;
//     // log data
//     console.log(raceData);
// });
  const nationalities = [
  "British",
  "German",
  "Brazilian",
  "French",
  "Finnish",
  "Italian",
  "Australian",
  "Austrian",
  "Argentine",
  "American",
  "Spanish",
  "Canadian",
  "New Zealander",
  "Swedish",
  "Belgian",
  "South African",
  "Dutch",
  "Swiss",
  "Colombian",
  "Mexican",
  "Monegasque",
  "Polish",
  "Venezuelan"
];


function generateDataSets({ size = 1 }) {
  fetch('/race_chart_data')
  .then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log('GET response:');
    let raceData = data;
    // log data
    console.log(raceData);
  });
  const dataSets = [];
  const maxLimitForValue = 2000;
  const minLimitForValue = 200;
  const maximumModelCount = 10;
  var britishCounter = 0;
  var germanCounter = 0;
  var brazilianCounter = 0;
  var frenchCounter = 0;
  var finnishCounter = 0;
  var italianCounter = 0;
  var australianCounter = 0;
  var austrianCounter = 0;
  var argentineCounter = 0;
  var americanCounter = 0;
  var spanishCounter = 0;
  var canadianCounter = 0;
  var newzealanderCounter = 0;
  var swedishCounter = 0;
  var belgianCounter = 0;
  var southafricanCounter = 0;
  var dutchCounter = 0;
  var swissCounter = 0;
  var colombianCounter = 0;
  var mexicanCounter = 0;
  var monegasqueCounter = 0;
  var polishCounter = 0;
  var venezuelanCounter = 0;
  
    
  for (let i = 0; i < size; i++) {
    if (raceData[0] = "British") {
      britishCounter += 1;
    } else if (raceData[0] ="German"){
      germanCounter += 1;
    } else if (raceData[0] ="Brazilian"){
      brazilianCounter += 1;
    } else if (raceData[0] ="French"){
      frenchCounter += 1;
    } else if (raceData[0] ="Finnish") {
      finnishCounter += 1;
    } else if (raceData[0] ="Italian") {
      italianCounter += 1;
    } else if (raceData[0] ="Australian") {
      australianCounter += 1;
    } else if (raceData[0] ="Austrian") {
      austrianCounter += 1;
    } else if (raceData[0] ="Argentine"){
      argentineCounter += 1;
    } else if (raceData[0] ="American") {
      americanCounter += 1;
    } else if (raceData[0] ="Spanish") {
      spanishCounter += 1;
    } else if (raceData[0] ="Canadian") {
      canadianCounter += 1;
    } else if (raceData[0] ="New Zealander"){
      newzealanderCounter += 1;
    } else if (raceData[0] ="Swedish") {
      swedishCounter += 1;
    } else if (raceData[0] ="Belgian") {
      belgianCounter += 1;
    } else if (raceData[0] ="South African"){
      southafricanCounter += 1;
    } else if (raceData[0] ="Dutch"){
      dutchCounter += 1;
    } else if (raceData[0] ="Swiss"){
      swissCounter += 1;
    } else if (raceData[0] ="Colombian") {
      colombianCounter += 1;
    } else if (raceData[0] ="Mexican") {
      mexicanCounter += 1;
    } else if (raceData[0] ="Monegasque") {
      monegasqueCounter += 1;
    } else if (raceData[0] ="Polish") {
      polishCounter += 1;
    } else (raceData[0] ="Venezuelan")
      venezuelanCounter += 1;

    dataSets.push({
      date: raceData,
      dataSet: nationalities
        .sort(function() {
          return Math.random() - 0.5;
        })
        .slice(0, maximumModelCount)
        .map(nationality => ({
          name: nationality,
          value:
            Math.random() * (maxLimitForValue - minLimitForValue) +
            minLimitForValue
        }))
    });
  
  }

  return dataSets;
}
