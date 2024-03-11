//document.getElementById("count-el").innerText = 5;

// create variables to store the data in

//camelCase
let countEl = document.getElementById("count-el");

let count = -1;

function increment() {
  count += 1;
  console.log(count);
  countEl.innerText = count;
}

increment();

//Create a function save which logs out the count when its called
let saveEl = document.getElementById("save-el");
console.log(saveEl);

function save() {
  let countStrg = count + "-";
  saveEl.textContent += countStrg;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}

//Create a function that increments the laps completed variable with one
// Run it three times

function incrementedLaps() {
  let lapsCompleted = 0;
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
}

incrementedLaps();
incrementedLaps();
incrementedLaps();

// initialize the count as 0
// liste the click on incremental button
// increment the count variable when the button is clicked
// change the count-el in HTML to reflect the new count

function number() {
  console.log(42);
}

number();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// Create a function that logs out the sum of all lap times

function lapTimes() {
  let totalTime = lap1 + lap2 + lap3;
  console.log(totalTime);
}

lapTimes();

let username = "Andreia";
let messageToUser = "Thnak you for your message";

console.log(messageToUser + " " + username);
