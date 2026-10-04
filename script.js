const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('tasklist');

addTaskButton.addEventListener('click', () => {
    addTask();
});

function addTask() {
    
   if (newTaskInput.value.trim() !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = newTaskInput.value.trim();

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);


        taskList.appendChild(listItem);
        newTaskInput.value = '';
        listItem.setAttribute('onclick', 'markAsCompleted(this)');
    }
}

markAsCompleted = (task) => {
    task.classList.toggle('completed');
}

addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

