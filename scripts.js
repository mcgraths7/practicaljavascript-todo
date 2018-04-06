let todoList = {
	todos: [],
	addTodo: function(todoText) {
		let todo = {
			todoText: todoText,
			completed: false
		};
		this.todos.push(todo);
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	changeTodo: function(position, newTodoText) {
		this.todos[position].todoText = newTodoText;
	},
	toggleCompleted: function(position) {
		let todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		let allTodos = this.todos.length;
		let completedTodos = 0;
		for (let i = 0; i < allTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		if (completedTodos === allTodos) {
			for (let i = 0; i < allTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (let i = 0; i < allTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	}
};

let handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	addTodo: function() {
		//Add a todo to the todos array
		let addTodoText = document.getElementById('addTodoText');
		todoList.addTodo(addTodoText.value);

		//Clear the value after adding todo
		addTodoText.value = '';

		//Call view.displayTodos to render todos
		view.displayTodos();

	},
	changeTodo: function() {
		let changePositionInput = document.getElementById('todoPositionInput');
		let changeTextInput = document.getElementById('todoTextInput');
		todoList.changeTodo(changePositionInput.valueAsNumber, changeTextInput.value);
		changeTextInput.value = '';
		changePositionInput = '';
	},
	deleteTodo: function() {
		let deleteTodoButton = document.getElementById("deleteTodoButton");
		todoList.deleteTodo(deleteTodoButton.valueAsNumber);
		deleteTodoButton.value = '';
	},
	toggleCompleted: function() {
		let toggleCompletedButton = document.getElementById('toggleCompletedButton');
		todoList.toggleCompleted(toggleCompletedButton.valueAsNumber);
		toggleCompletedButton.value = '';
	},
	toggleAll: function() {
		todoList.toggleAll();
	}
};

let view = {
	displayTodos: function() {
		let todoListUL = document.getElementById('todoListUL');
		todoListUL.innerHTML = '';
		for (let i = 0; i < todoList.todos.length; i++) {
			let todoLi = document.createElement('li');
			let todoText = '';
			if (todoList.todos[i].completed === true) {
				todoText = `( x ) ${todoList.todos[i].todoText}`
			} else {
				todoText = `(  ) ${todoList.todos[i].todoText}`
			}
			todoLi.textContent = todoText;
			todoListUL.appendChild(todoLi);
		}
	}
};