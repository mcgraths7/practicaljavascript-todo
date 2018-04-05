let todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty');
		}
		let allTodos = document.getElementById('allTodos');
		allTodos.innerHTML = "";
		for (let i = 0; i < this.todos.length; i++) {
			let todo = this.todos[i];
			let newElement = document.createElement('input');
			let todoLabel = document.createElement('label');
			let p = document.createElement('p');
			let idAttr = document.createAttribute('id');
			let typeAttr = document.createAttribute('type');
			let forAttr = document.createAttribute('for');
			todoLabel.innerText = todo.todoText;
			idAttr.value = todo.todoText;
			forAttr.value = idAttr.value;
			typeAttr.value = "checkbox";
			newElement.setAttributeNode(idAttr);
			newElement.setAttributeNode(typeAttr);
			allTodos.appendChild(p);
			p.appendChild(newElement);
			p.appendChild(todoLabel);
			if (todo.completed === true) {
				console.log('(x) ', todo.todoText);
				console.log('----------------------');
			} else {
				console.log('( ) ', todo.todoText);
				console.log('----------------------')
			}
		}
	},
	addTodo: function(todoText) {
		let todo = {
			todoText: todoText,
			completed: false
		};
		this.todos.push(todo);
		this.displayTodos();
	},
	deleteTodo: function(position) {
		this.todos.splice(position, 1);
	},
	changeTodo: function(position, newTodoText) {
		this.todos[position].todoText = newTodoText;
		this.displayTodos();
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
		this.displayTodos();
	}
};

let handlers = {
	displayTodos: function() {
		todoList.displayTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
	}
};