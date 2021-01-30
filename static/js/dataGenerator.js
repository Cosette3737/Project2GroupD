function getData() {
  fetch("/race_chart_data").then(data => {
  return data.json()
  }).then(data => {
    generateDataSets(data)
  })}
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

var nationalValues = [
  {name: "British", value: 0},
  {name: "German", value: 0},
  {name: "Brazilian", value: 0},
  {name: "French", value: 0},
  {name: "Finnish", value: 0},
  {name: "Italian", value: 0},
  {name: "Australian", value: 0},
  {name: "Austrian", value: 0},
  {name: "Argentine", value: 0},
  {name: "American", value: 0},
  {name: "Spanish", value: 0},
  {name: "Canadian", value: 0},
  {name: "New Zealander", value: 0},
  {name: "Swedish", value: 0},
  {name: "Belgian", value: 0},
  {name: "South African", value: 0},
  {name: "Dutch", value: 0},
  {name: "Swiss", value: 0},
  {name: "Colombian", value: 0},
  {name: "Mexican", value: 0},
  {name: "Monegasque", value: 0},
  {name: "Polish", value: 0},
  {name: "Venezuelan", value: 0}
];

function generateDataSets(raceData) {
  

  const dataSets = [];
  
  for (let i = 0; i < raceData.length; i++) {
    const nationality = raceData[i][0];
    nationalValue = nationalValues.find(n => n.name === nationality);
    nationalValue.value += 1
    // console.log(nationalValue);
    dataSets.push({

      date: raceData[i][1],
      dataSet: nationalValues
    });
    // console.log(JSON.parse(JSON.stringify(dataSets)));
  }
  console.log(JSON.parse(JSON.stringify(dataSets)));
  return dataSets;
  
}