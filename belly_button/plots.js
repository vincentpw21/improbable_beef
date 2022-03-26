//const url = "https://api.spacexdata.com/v2/launchpads";

// Fetch the JSON data and console log it
// d3.json("samples.json").then(function(data) {
//   console.log(data);
// });

// Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

// display metadata of any individual
d3.json("samples.json").then(function(data){
  firstPerson = data.metadata[0];
  Object.entries(firstPerson).forEach(([key, value]) =>
    {console.log(key + ': ' + value);});
});