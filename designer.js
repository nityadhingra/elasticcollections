// load the airtable library, call it "Airtable"
var Airtable = require("airtable");

// use the airtable library to get a variable that represents one of our bases
// We needed to put in the right apiKey and
// base ID here!
var base = new Airtable({ apiKey: "keymqxht9myfLNWDQ" }).base(
  "appgT9MLUtMtdi7cM"
);

// Get your table from the base, select ALL the records, and specify the callback functions that will receive each page of data
base("dots").select({}).eachPage(gotPageOfDots, gotAllDots);

// an empty array to hold our people data
const dots = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of people
function gotPageOfDots(records, fetchNextPage) {
  console.log("gotPageOfDots()");
  console.log("There are "+records.length+" items in records");
  // This takes the list of records and add them to the people array
  dots.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
// You don't need to edit this function.
function gotAllDots(err) {
  console.log("gotAllDots()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading dots");
    console.error(err);
    return;
  }

  showDots();
}

// Show people based off the data that is retrieved
function showDots() {
  console.log("showDots()");


  // find the container
  const dotsContainer = document.querySelector("#container");

  // loop through all the people listed in the Airtable data. Inside is the code we are applying for EACH person in the list of people.
  dots.forEach((dot) => {
    // Print out what a single person's data looks like by printing out its fields
    console.log("SHOWING THE DOT")
    console.log(dot.fields);


    /**TO DO: Write JavaScript code to add each character's information onto the webpage**/
    let container = document.createElement("a")
    container.classList.add("grid-module")
    container.href = dot.fields.link;
    

const dotDesigner = document.createElement("p");
dotDesigner.classList.add("p1")
dotDesigner.innerText = dot.fields.designer;
container.appendChild(dotDesigner);






dotsContainer.append(container)

  });
    };

