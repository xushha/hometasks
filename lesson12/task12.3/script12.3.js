const taskInput = document.getElementById('taskInput');
const addButton  = document.getElementById('addButton');
const toDoList = document.getElementById('toDoList');

function addDeleteButton(li) {
    const deleteButton  = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    // deleteButton.classList.add('deleteBtn');
    li.appendChild(deleteButton);
}
const tasks = document.querySelectorAll('li');
for (const li of tasks) {
    addDeleteButton(li);
}

function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    addDeleteButton(li);

    toDoList.appendChild(li);
}
addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

toDoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteBtn')) {
        const task = event.target.parentElement;
        task.remove();
    }
});
