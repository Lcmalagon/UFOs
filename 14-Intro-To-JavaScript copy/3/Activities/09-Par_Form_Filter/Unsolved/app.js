// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

// Complete the click handler for the form
button.on("click", function() {

  // Select the input element and get the raw HTML node
var inputElement = d3.select('#patient-form-input')
  // Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
  // Use the form input to filter the data by blood type
function BloodResults(blood){
  return blood.bloodType === inputValue
};
  
var bloodresults = data.filter(BloodResults)

  console.log(bloodresults);
  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
var AgeValues = data.filter(age)
  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
});
