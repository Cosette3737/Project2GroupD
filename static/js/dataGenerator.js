// const data = d3.csv("src/barchartrace.csv");
// console.log(data);
const data = d3.csv("src/barchartrace.csv", function(data) {
  console.log(data);
});
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
    dataSets.push({
      date: data.date,
      dataSet: nationalities
        .sort(function() {
          return Math.random() - 0.5;
        })
        .slice(0, maximumModelCount)
        .map(nationalities => ({
          name: nationalities,
          value:
            Math.random() * (maxLimitForValue - minLimitForValue) +
            minLimitForValue
        }))
    });
  
  }

  return dataSets;
}
