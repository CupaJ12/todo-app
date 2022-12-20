console.log('client works');

///////////onReady function//////////////////////////
$(document).ready(onReady);

function onReady() {
console.log('in onready');
 $('#submitTask').on('click', collectTaskFunction);
//  $('#complete').on('click', completeTask);
// $('#delete').on('click', deleteTask)
}

///////////////////clientSide functions///////////////////
let task = ''
function collectTaskFunction() {
console.log('in submitTaskFunction');
task = $('#userTask').val();
console.log('taskName: ', task);
}
let buttons = '<button id="complete">complete</button> <button id="delete">delete</button>';

/////////////////// server/client interactions ///////////////////

function postTaskFunction (){
    console.log('in postTaskFunction');
    $ajax({
        type: 'POST',
        url: '/tasks',
        data: $('#userTask').val(),
    }).then (function(response){
        console.log('post response from server', response);
        getTasks();
    }).catch (function(error) {
        console.log('error:', error);
        alert(error.responseText);
    });
}

function getTasks() {
    console.log('in getTasks');
    $ajax({
        type: 'GET',
        url: '/tasks',
}).then (function(response){
    console.log('get tasks response from server', response);
    tasksToDOM(response);
})}

function tasksToDOM(taskList) {
    console.log('in tasksToDOM');
    $('#userTask').empty();
    for (const task of taskList) {
        $('#toDoList').append(task)
        $('#userTask').append(buttons); // my attempt to append the buttons to each list item
    }
}