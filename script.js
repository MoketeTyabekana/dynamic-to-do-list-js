// At the beginning of your script, use document.addEventListener to listen for the 'DOMContentLoaded' event.
document.addEventListener("DOMContentLoaded", function () {

    // Use document.getElementById to select the “Add Task” button, task-list and task-input
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Create the addTask function
    function addTask(taskText = taskInput.value.trim(), save = true) {
        // retrieved and used trim to remove white spaces in the value from the task input field.
        if (taskText === '') {
            alert('Please enter a new task.');
            return;
        }

        // Task Creation and Removal
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.classList.add('task-item');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Assigning an onclick event to the remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
            removeTaskFromLocalStorage(taskText);
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';

        // Save the task to Local Storage if the task was manually added
        if (save) {
            saveTaskToLocalStorage(taskText);
        }
    }

    // Function to save task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));  // 'false' prevents re-saving the tasks to Local Storage
    }

    // Function to remove task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for adding tasks on pressing 'Enter' key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
