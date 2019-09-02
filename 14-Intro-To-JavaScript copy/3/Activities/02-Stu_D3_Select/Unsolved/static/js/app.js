// The new student and grade to add to the table

// Use D3 to select the table

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
var table = d3.select("tale").attr("class", "table table-striped")
// Use D3 to select the table body
var tbody = d3.select("body").append("table");

// Append one table row `tr` to the table body
var row = tbody.append("tr");
// Append one cell for the student name
row.append("td").text("Max");
// Append one cell for the student grade
