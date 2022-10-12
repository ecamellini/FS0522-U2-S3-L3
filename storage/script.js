let todoList = [] // All'inizio sarà vuota la lista dei todo

window.onload = function () {
  // Però, onload, cioè, apppena carico, se trovo dei todo salvati
  // li vado subito a inserire nella lista
  let savedTodosString = window.localStorage.getItem('todo-list')
  if (savedTodosString !== null) {
    todoList = JSON.parse(savedTodosString)
    visualizeAllTodos()
  }
}

function addToList() {
  let todoInputValue = document.getElementById('todo-input').value
  todoList.push(todoInputValue)

  let todoListString = JSON.stringify(todoList)
  window.localStorage.setItem('todo-list', todoListString)

  visualizeAllTodos()
}

function visualizeAllTodos() {
  let todoListDiv = document.getElementById('todo-list')

  // 1) Pulisce la div con tutti i todo
  todoListDiv.innerHTML = ''

  // 2) Li va a visualizzare tutti
  for (let todo of todoList) {
    todoListDiv.innerHTML += `<div>${todo}</div>`
  }
}
