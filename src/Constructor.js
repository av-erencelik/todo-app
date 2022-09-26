
import {addTodoDOM} from './addTodoDOM'
import { isDateToday } from './evaluate.JS'


let input = []
let completedTodos = []
export function todoConstructor(title,date,description,priority) {
    this.title = title 
    this.date = date
    this.description = description
    this.priority = priority
    this.isCompleted = false
}
export function addTodoArray(todo) {
    input.push(todo)
    if(document.getElementById('today').classList.contains('active')) {
        todayTodos()
        return
    }
    addTodoDOM(input)
}
export function todayTodos() {
    let todayTodoArray = isDateToday(input)
    document.getElementById('inbox').classList.remove('active')
    document.getElementById('today').classList.add('active')
    document.getElementById('completed').classList.remove('active')
    addTodoDOM(todayTodoArray)
}
export function inboxAllTodos() {
    addTodoDOM(input)
    document.getElementById('inbox').classList.add('active')
    document.getElementById('today').classList.remove('active')
    document.getElementById('completed').classList.remove('active')
}

function completeTodo(i) { 
    console.log(0)
    input[i].isCompleted = true
    completedTodos.push(input[i])
    console.log(completedTodos)
    input.splice(i,1)
    addTodoDOM(input)
}
export function listenComplete(btn) {
    btn.addEventListener('click',() => completeTodo(btn.getAttribute("data-index-completed")))
    console.log(btn.getAttribute("data-index-completed"))
}
export function completedTodosDOM() {
    addTodoDOM(completedTodos)
    document.getElementById('completed').classList.add('active')
    document.getElementById('today').classList.remove('active')
    document.getElementById('inbox').classList.remove('active')
}
