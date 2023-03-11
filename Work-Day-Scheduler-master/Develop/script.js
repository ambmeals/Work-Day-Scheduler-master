// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
  // Define variables for elements we will be interacting with
  const saveButtons = $(".saveBtn");
  const timeBlocks = $(".time-block");
  const textAreas = $("textarea");

  // Add event listener to each save button to save text area value to local storage
  saveButtons.each(function() {
    $(this).on("click", function() {
      const textArea = $(this).prev();
      const textAreaValue = textArea.val().trim();
      const timeBlockId = textArea.parent().attr("id");

      localStorage.setItem(timeBlockId, textAreaValue);
    });
  });

  // Set initial values of text areas from local storage
  textAreas.each(function() {
    const textAreaParentId = $(this).parent().attr("id");
    const textAreaValue = localStorage.getItem(textAreaParentId) || "";

    $(this).val(textAreaValue);
  });

  // Add past/present/future class to each time block based on current time
  timeBlocks.each(function() {
    const timeBlockId = $(this).attr("id");
    const currentHour = moment().format("H");
    const timeBlockHour = moment(timeBlockId, "hha").format("H");

    if (parseInt(timeBlockHour) < parseInt(currentHour)) {
      $(this).addClass("past");

    } else if (timeBlockHour == currentHour) {
      $(this).addClass("present");
      
    } else {
      $(this).addClass("future");
    }
  });
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. Finished?
  
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? Finished?j
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? Finished?
  //
  // TODO: Add code to display the current date in the header of the page. Finished
// Finished