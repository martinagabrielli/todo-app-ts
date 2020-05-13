interface TodoItemInterface {
    name: string
    completed: boolean
}

class TodoGenerator {
    todos: Array<TodoItemInterface>
    root: HTMLElement

    constructor(root: HTMLElement) {
        this.todos= []
        this.root = root
    }

    renderTodo() {
        this.root.innerHTML = ''

        // Title
        const title: HTMLElement = document.createElement('h1')
        title.innerText = '📝 To-Do List'
        this.root.appendChild(title)

        // Text input
        const textInput: HTMLInputElement = document.createElement('input')
        this.root.appendChild(textInput)

        textInput.type = 'text'
        textInput.className = 'text'
        textInput.placeholder = 'Add a to-do...'
        textInput.onchange = () => {
            this.addTodo({
                name: textInput.value,
                completed: false
            })
        }

        // Add to-do button
        const addBtn = document.createElement('button')
        this.root.appendChild(addBtn)

        addBtn.className = 'add'
        addBtn.innerText = 'Add'

        // To-do list container (ul)
        const todoList: HTMLElement = document.createElement('ul')

        // To-do item
        this.todos.map( (todo, index) => {
            const todoContainer: HTMLElement = document.createElement('li')
            const todoText: HTMLElement= document.createElement('span')
            todoText.innerHTML = todo.name

            const completedButton: HTMLInputElement = document.createElement('input')
            completedButton.className = 'checkbox'
            completedButton.type = 'checkbox'
            completedButton.onclick = () => {
                this.toggleCompleted(index)
            }

            const deleteButton: HTMLElement = document.createElement('button')
            deleteButton.className = 'delete'
            deleteButton.innerText = 'X'
            deleteButton.onclick = () => {
                this.removeTodo(index)
            }

            if(todo.completed === true ) {
                todoText.style.textDecoration = 'line-through'
                completedButton.checked = true
            } 

            todoContainer.appendChild(completedButton)
            todoContainer.appendChild(todoText)
            todoContainer.appendChild(deleteButton)
            todoList.appendChild(todoContainer)
        })
        this.root.appendChild(todoList)


    }

    addTodo(todo: TodoItemInterface) {
        this.todos.push(todo)
        this.renderTodo()
    }

    removeTodo(position: number) {
        this.todos.splice(position, 1);
        this.renderTodo()
    }

    toggleCompleted(position: number) {
        this.todos[position].completed = !this.todos[position].completed;
        this.renderTodo()
    }
}
