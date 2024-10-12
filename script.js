//At the beginning of your script, use document.addEventListener to listen for the 'DOMContentLoaded' event.

document.addEventListener("DOMContentLoaded", function () {

  //Use document.getElementById to select the “Add Task” button,task-list and task-input

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

//Create the addTask Function

function addTask(){


    const taskText=taskInput.ariaValueMax.trim();

    //retrieved and used trim to remove white spaces in  the value from the task input field.
    
    if(taskText==''){
        alert('Please enter a new task.');
        return;
    }
}

});
