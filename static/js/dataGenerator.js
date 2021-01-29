fetch("/race_chart_data").then(data => {
  return data.json()
  }).then(data => {
    generateDataSets(data)
  })
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


function generateDataSets(raceData) {
  

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
  
  for (let i = 0; i < raceData.length; i++) {
    const nationality = raceData[i][0];

    if (nationality == "British") {
      britishCounter += 1;
    } else if (nationality =="German"){
      germanCounter += 1;
    } else if (nationality =="Brazilian"){
      brazilianCounter += 1;
    } else if (nationality =="French"){
      frenchCounter += 1;
    } else if (nationality =="Finnish") {
      finnishCounter += 1;
    } else if (nationality =="Italian") {
      italianCounter += 1;
    } else if (nationality =="Australian") {
      australianCounter += 1;
    } else if (nationality =="Austrian") {
      austrianCounter += 1;
    } else if (nationality =="Argentine"){
      argentineCounter += 1;
    } else if (nationality =="American") {
      americanCounter += 1;
    } else if (nationality =="Spanish") {
      spanishCounter += 1;
    } else if (nationality =="Canadian") {
      canadianCounter += 1;
    } else if (nationality =="New Zealander"){
      newzealanderCounter += 1;
    } else if (nationality =="Swedish") {
      swedishCounter += 1;
    } else if (nationality =="Belgian") {
      belgianCounter += 1;
    } else if (nationality =="South African"){
      southafricanCounter += 1;
    } else if (nationality =="Dutch"){
      dutchCounter += 1;
    } else if (nationality =="Swiss"){
      swissCounter += 1;
    } else if (nationality =="Colombian") {
      colombianCounter += 1;
    } else if (nationality =="Mexican") {
      mexicanCounter += 1;
    } else if (nationality =="Monegasque") {
      monegasqueCounter += 1;
    } else if (nationality =="Polish") {
      polishCounter += 1; 
    } else if (nationality =="Venezuelan") {
      venezuelanCounter += 1;
    }
    dataSets.push({

      date: raceData[i][1],
      dataSet: nationalities
        // .sort(function() {
        //   return Math.random() - 0.5;
        // })
        // .slice(0, maximumModelCount)
        .map(nationality => {
          return {
          name: nationality,
          value: Math.random() * (maxLimitForValue - minLimitForValue) + minLimitForValue
        }
      })
      
    });
    console.log(JSON.parse(JSON.stringify(dataSets)));
    console.log(britishCounter);
    console.log(americanCounter);
  }
  // console.log(dataSets);
  return dataSets;
  
}