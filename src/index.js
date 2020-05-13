class TodoGenerator {
    constructor(root) {
        this.todos = [];
        this.root = root;
    }
    renderTodo() {
        alert('hola');
        this.root.innerHTML = "";
        this.todos.map(todo => {
            const container = document.createElement('div');
            const title = document.createElement('h1');
            title.innerHTML = todo.name;
            if (todo.completed === true) {
                title.style.textDecoration = "line-through";
            }
            const todoTextBox = document.createElement('input');
            container.appendChild(title);
            container.appendChild(todoTextBox);
            this.root.appendChild(container);
        });
    }
}
//# sourceMappingURL=index.js.map