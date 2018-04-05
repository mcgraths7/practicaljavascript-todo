let todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty');
		}
		for (let i = 0; i < this.todos.length; i++) {
			let todo = this.todos[i];
			if (todo.completed === true) {
				console.log('( x ) ', todo.todoText);
			} else {
				console.log('(   )', todo.todoText);
			}
			console.log('----------------------');
		}
	},
	addTodo: function(todoText) {
		let todo = {
			todoText: todoText,
			completed: false
		}
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newTodoText) {
		this.todos[position].todoText = newTodoText;
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
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
				this.toggleCompleted(i);
			}
		} else {
			for (let i = 0; i < allTodos; i++) {
				if (this.todos[i].completed === false) {
					this.toggleCompleted(i);
				}
			}
		}
		this.displayTodos();
	}
}

todoList.addTodo('First');
todoList.addTodo('Second');
todoList.addTodo('Third');
