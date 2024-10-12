//At the beginning of your script, use document.addEventListener to listen for the 'DOMContentLoaded' event.

document.addEventListener("DOMContentLoaded", function () {

  //Use document.getElementById to select the “Add Task” button,task-list and task-input

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

//Create the addTask Function

function addTask(){


    const taskText=taskInput.value.trim();

    //retrieved and used trim to remove white spaces in  the value from the task input field.

    if(taskText==''){
        alert('Please enter a new task.');
        return;
    }

    //Task Creation and Removal

   const listItem= document.createElement('li');
   listItem.textContent=taskText;

   const removeBtn=document.createElement('button');
   removeBtn.textContent='Remove';
   removeBtn.className='remove-btn';

   //Assigning an onclick event to the remove button

   removeBtn.onclick = function() {
    taskList.removeChild(listItem);
};

   listItem.appendChild(removeBtn);
   taskList.appendChild(listItem);

   taskInput.value='';

   


   
}
// Add an event listener to the "Add Task" button
addButton.addEventListener('click',addTask);

// Event listener for adding tasks on pressing 'Enter' key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

});


