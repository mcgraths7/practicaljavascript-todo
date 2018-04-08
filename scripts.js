let todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText) {
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	toggleCompleted: function(position) {
		let todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		let totalTodos = this.todos.length;
		let completedTodos = 0;
		
		// Get number of completed todos.

		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++;
			}
		});

		this.todos.forEach(function(todo) {
			completedTodos === totalTodos ? todo.completed = false : todo.completed = true;
		});
	}
};

let handlers = {
	addTodo: function() {
		let addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		let changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	toggleCompleted: function() {
		let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.displayTodos();
	}
};

let view = {
	displayTodos: function() {
		let todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		todoList.todos.forEach(function(todo) {
			let todoLi = document.createElement('li');
			let todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + todo.todoText;
			}

			todoLi.id = `${todoList.todos.indexOf(todo)}`;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(view.createDeleteButton());
			todosUl.appendChild(todoLi);
		});
	},
	setEventListeners: function() {
		let todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			let elementClicked = event.target;

			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}

		});
	},
	createDeleteButton: function() {
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';

		return deleteButton;
	}
};
view.setEventListeners();










