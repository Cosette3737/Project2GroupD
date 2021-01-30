//   const nationalities = [
//   "British",
//   "German",
//   "Brazilian",
//   "French",
//   "Finnish",
//   "Italian",
//   "Australian",
//   "Austrian",
//   "Argentine",
//   "American",
//   "Spanish",
//   "Canadian",
//   "New Zealander",
//   "Swedish",
//   "Belgian",
//   "South African",
//   "Dutch",
//   "Swiss",
//   "Colombian",
//   "Mexican",
//   "Monegasque",
//   "Polish",
//   "Venezuelan"
// ];
//Create a variable to hold the values
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
//Function to grab the data from the API 
function grabData () {
  return fetch("/race_chart_data").then(data => {
    return data.json()}).then
    (data => generateDataSets(data))};

//Function to calculate the values of the data.
function generateDataSets(raceData) {
  //Variable to hold them
  const dataSets = [];
  //For loop to run through the JSON
  for (let i = 0; i < raceData.length; i++) {
    //Holds nationality of row for later use
    const nationality = raceData[i][0];
    //Calculates what nationality won, then alters the value accordingly.
    nationalValue = nationalValues.find(n => n.name === nationality);
    nationalValue.value += 1
    // Push the dataset
    dataSets.push({
      date: raceData[i][1],
      //In order to keep for loop from overwriting nationalValues, stringify it, then re-JSON it to create a snapshot and push that specific set of nationalValues
      dataSet: JSON.parse(JSON.stringify(nationalValues))
    });
  }
  //Return the datasets for use.
  return dataSets;
}