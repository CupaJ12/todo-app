// const { on } = require("events");
// why is the above line here????
console.log("client works");

///////////onReady function//////////////////////////
$(document).ready(onReady);

function onReady() {
  console.log("in onready3");
  $("#submitTask").on("click", collectTaskFunction);
  $("#complete").on("click", completeTask);
  $("#delete").on("click", deleteTask);
  getTasks();
}

///////////////////clientSide functions///////////////////
let task = "";
function collectTaskFunction() {
  console.log("in submitTaskFunction");
  task = $("#userTask").val();
  console.log("taskName: ", task);
}
let buttons =
  '<button id="complete">complete</button> <button id="delete">delete</button>';

function completeTask() {
  console.log("in completeTask");
  $('#complete').css("background-color", "green");
}

function deleteTask() {
  console.log("in deleteTask");
  this.empty(); //not sure about this one
}

/////////////////// server/client interactions ///////////////////

function postTaskFunction() {
  console.log("in postTaskFunction");
  $ajax({
    type: "POST",
    url: "/taskList",
    data: $("#userTask").val(),
  })
    .then(function (response) {
      console.log("post response from server", response);
      getTasks();
    })
    .catch(function (error) {
      console.log("error:", error);
      alert(error.responseText);
    });
}

function getTasks() {
  // jquery is gunna talk to the table here via html

  console.log("in getTasks");

  $.ajax({
    type: "GET",
    url: "/taskList",
  }).then(function (response) {
    console.log("get tasks response from server", response);
    tasksToDOM(response);
  });
}

function tasksToDOM(taskList) {
  console.log("in tasksToDOM");
  $("#userTask").empty();
  for (const task of taskList) {
    console.log('tasks to DOM', task);
    // $("#incompleteTableBody").append(task.task);
    $("#incompleteTableBody").append(`<tr>${task.task}</tr>`);
    $("#incompleteTableBody").append(buttons); // my attempt to append the buttons to each list item
  }
}
