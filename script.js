// Display the current day
let today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// Find and log the current hour on a 24-hour clock
let currentHour = today.hour();
console.log("The current hour is: " + currentHour);

// Compare the current hour with the ID in the HTML
for (let hour = 9; hour <= 17; hour++) {
  let timeBlockId = `hour-${hour}`;
  let hourFromId = parseInt(timeBlockId.split("-")[1]);
  console.log("The hour obtained by the ID is " + hourFromId);

  let timeBlockElement = document.getElementById(timeBlockId);

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

$(function () {
  $(".saveBtn").on("click", function () {
    let timeBlockId = $(this).parent().attr("id");
    let eventText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, eventText);
  });

  for (let hour = 9; hour <= 17; hour++) {
    let timeBlockId = `hour-${hour}`;
    let savedEvent = localStorage.getItem(timeBlockId);

    if (savedEvent) {
      $(`#${timeBlockId} .description`).val(savedEvent);
    }
  }
});

