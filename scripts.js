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
	changeTodo: function(position, newTodoText) {
		todoList.changeTodo(position, newTodoText);
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
		todoList.todos.forEach(function(todo, position) {
			let todoLi = document.createElement('li');
			let todoTextWithCompletion = '';

			todo.completed === true ? todoTextWithCompletion = '(x) ' + todo.todoText : todoTextWithCompletion = '( ) ' + todo.todoText;

			todoLi.id = `${position}`;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todoLi.appendChild(this.createChangeTodoTextBox());
			todoLi.appendChild(this.createChangeButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	setEventListeners: function() {
		let todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			let elementClicked = event.target;

			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			} else if (elementClicked.className === 'changeButton') {
				handlers.changeTodo(parseInt(elementClicked.parentNode.id), elementClicked.parentNode.childNodes[2].value);
			}

		});
		
	},
	createDeleteButton: function() {
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';

		return deleteButton;
	},
	createChangeButton: function() {
		let changeButton = document.createElement('button');
		changeButton.textContent = 'Change';
		changeButton.className = 'changeButton';
		
		return changeButton;
	},
	createChangeTodoTextBox: function() {
		let changeTodoTextBox = document.createElement('input');
		let typeAttribute = document.createAttribute('type');
		let prePopulatedAttribute = document.createAttribute('placeholder');
		prePopulatedAttribute.value = "Change your todo";
		typeAttribute.value = 'text';
		changeTodoTextBox.className = 'changeTodoTextBox';
		changeTodoTextBox.setAttributeNode(prePopulatedAttribute);
		changeTodoTextBox.setAttributeNode(typeAttribute);
		
		return changeTodoTextBox;
	}
};
view.setEventListeners();










