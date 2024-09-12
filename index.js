let currentIndex = 3;

    function addTodo() {
      const inputEl = document.getElementById("inp");
      const todoText = inputEl.value.trim();

      if (todoText === '') {
        alert('Please enter a todo item.');
        return;
      }

      const parentEl = document.getElementById("todos");

      // Create new todo div
      const newTodo = document.createElement('div');
      newTodo.setAttribute("id", 'todo-' + currentIndex);

      // Create new heading element
      const newHeading = document.createElement('h4');
      newHeading.textContent = currentIndex + '. ' + todoText;

      // Create new button element
      const newButton = document.createElement('button');
      newButton.textContent = 'Delete';
      newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");


      // Update Exiting Todo
      const updateButton=document.createElement("button");
      updateButton.textContent="Update";
      updateButton.setAttribute("onclick","updateTodo("+currentIndex+")");

      // Append elements to the new todo div
      newTodo.appendChild(newHeading);
      newTodo.appendChild(newButton);
      newTodo.appendChild(updateButton);

      // Append new todo to the parent element
      parentEl.appendChild(newTodo);

      // Increment the index for the next todo item
      currentIndex++;

      // Clear the input field
      inputEl.value = '';
    }

    function deleteTodo(index) {
      const element = document.getElementById("todo-" + index);
      if (element) {
        element.parentNode.removeChild(element);
      }
    }

    function updateTodo(updIndex){
        const element=document.getElementById("todo-"+updIndex);
        if (element) {
            const newTodoText = prompt('Update the to-do item:', element.querySelector('h4').textContent.substring(updIndex.toString().length + 2));
            if (newTodoText !== null && newTodoText.trim() !== '') {
                element.querySelector('h4').textContent = updIndex + '. ' + newTodoText.trim();
            }
        }

    }