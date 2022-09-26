import {addTodoDOM} from './addTodoDOM'
import { isDateToday } from './evaluate.JS'


let input = []
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
    addTodoDOM(todayTodoArray)
}
