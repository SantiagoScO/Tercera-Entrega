document.getElementById('add-task').addEventListener('click', function() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.addEventListener('click', function() {
      taskContent.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `
      <span class="button__text">Eliminar</span>
      <span class="button__icon">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M3 6h18v2H3V6zm2-4h10v2H5V2zM8 10h2v8H8v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8zm-8 0h2v8H8v-8z"/>
        </svg>
      </span>
    `;
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(taskContent);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
  }
});

  