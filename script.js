//the following code displays the current day
let today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//finds and logs the current hour on a 24 hour clock
let currentHour = today.hour();
console.log("The Current hour is: " + currentHour)

//compares the current hour with the ID in the HTML
for (let hour = 9; hour <= 17; hour++) {
  let timeBlockId = `hour-${hour}`;
  let hourFromId = parseInt(timeBlockId.split("-")[1]);
  console.log("the hour obtained by the ID is " + hourFromId)

  let timeBlockElement = document.getElementById(timeBlockId);

  //based on the HTML ID is color codes the DIV's to
  //corrispond to past present or future
  if (hourFromId < currentHour) {
    timeBlockElement.classList.remove("time-block", "present", "future");
    timeBlockElement.classList.add("past");
  } else if (hourFromId === currentHour) {
    timeBlockElement.classList.remove("time-block", "past", "future");
    timeBlockElement.classList.add("present");
  } else {
    timeBlockElement.classList.remove("time-block", "past", "present");
    timeBlockElement.classList.add("future");
  }
}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
