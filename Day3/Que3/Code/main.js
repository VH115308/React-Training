let tasks = JSON.parse(localStorage.getItem('kanbanTasks')) || {
      todo: [],
      inprogress: [],
      done: []
    };

    function saveTasks() {
      localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
    }

    function renderTasks() {
      document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        const tasksContainer = col.querySelector('.tasks');
        tasksContainer.innerHTML = '';
        tasks[status].forEach((task, index) => {
          const taskEl = document.createElement('div');
          taskEl.className = 'task';
          taskEl.draggable = true;
          taskEl.dataset.index = index;
          taskEl.innerHTML = `
            <span>${task}</span>
            <div>
              <button class="edit">Edit</button>
              <button class="delete">X</button>
            </div>
          `;
          tasksContainer.appendChild(taskEl);

          taskEl.querySelector('.edit').addEventListener('click', () => {
            const newTitle = prompt('Edit task:', task);
            if (newTitle) {
              tasks[status][index] = newTitle;
              saveTasks();
              renderTasks();
            }
          });

          taskEl.querySelector('.delete').addEventListener('click', () => {
            tasks[status].splice(index, 1);
            saveTasks();
            renderTasks();
          });

          taskEl.addEventListener('dragstart', e => {
            taskEl.classList.add('dragging');
            // Note for me: dataTransfer can only store strings, so we stringify the task info
            e.dataTransfer.setData('text/plain', JSON.stringify({ status, index }));
          });
          taskEl.addEventListener('dragend', () => {
            taskEl.classList.remove('dragging');
            document.querySelectorAll('.column').forEach(c => c.classList.remove('drag-over'));
          });
        });
      });
    }

    // Add new task
    document.querySelectorAll('.add-task').forEach(addBox => {
      const input = addBox.querySelector('input');
      const button = addBox.querySelector('button');
      const col = addBox.closest('.column');
      const status = col.dataset.status;

      button.addEventListener('click', () => {
        if (input.value.trim()) {
          tasks[status].push(input.value.trim());
          input.value = '';
          saveTasks();
          renderTasks();
        }
      });
    });

    // Drag over and drop on columns
    document.querySelectorAll('.column').forEach(column => {
      const container = column.querySelector('.tasks');

      column.addEventListener('dragover', e => {
        e.preventDefault();
        column.classList.add('drag-over');
        const dragging = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement == null) {
          container.appendChild(dragging);
        } else {
          container.insertBefore(dragging, afterElement);
        }
      });

      column.addEventListener('dragleave', () => {
        column.classList.remove('drag-over');
      });

      column.addEventListener('drop', e => {
        column.classList.remove('drag-over');
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));

        const fromStatus = data.status;
        const fromIndex = data.index;
        const taskText = tasks[fromStatus][fromIndex];
        tasks[fromStatus].splice(fromIndex, 1);

        const toStatus = column.dataset.status;
        const afterElement = getDragAfterElement(container, e.clientY);

        if (afterElement == null) {
          tasks[toStatus].push(taskText);
        } else {
          const newIndex = [...container.children].indexOf(afterElement);
          tasks[toStatus].splice(newIndex, 0, taskText);
        }

        saveTasks();
        renderTasks();
      });
    });

    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.task:not(.dragging)')];
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    renderTasks();