console.log('client works');

///////////onReady function//////////////////////////
$(document).ready(onReady);

function onReady() {
console.log('in onready');


//  $('#submitTask').on('click', submitTaskFunction);
}







///////////////////submit task function server stuff///////////////////

// function submitTaskFunction(){
//     console.log('submitTaskFunction');
//     // var taskName = $('#userTask').val();
//     console.log('userTask:'+ userTask);
//     $.ajax({
//         type: 'POST',
//         url: '/tasks',
//         data: 'userTask',
// });
// }