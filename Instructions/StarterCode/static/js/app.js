// from data.js
var tableData = data;

// YOUR CODE HERE!
// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data 
// for each UFO sighting.
// Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, 
// and `comment` at the very least.
// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` column to find rows
// that match user input.
// select the table with d3
let tbody = d3.select("tbody");

// printout ufo data 
console.log(tableData);
// build table function
function buildTable(data) {
// clear tbody and build new table
    tbody.html("");

    data.forEach((dataRow) => {

    
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });

    });
};

//Event trigger when button is clicked 

function handleClick(){
    // prevents page reloading
    d3.event.preventDefault();

    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    let filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    if(city) {
        filterData = filterData.filter((row) => row.city === city);
    }
    if(state) {
        filterData = filterData.filter((row) => row.state === state);
    }
    if(country) {
        filterData = filterData.filter((row) => row.country === country);
    }
    if(shape) {
        filterData = filterData.filter((row) => row.shape === shape);
    }
    

    buildTable(filterData);
}
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);