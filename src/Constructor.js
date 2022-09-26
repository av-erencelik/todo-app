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
    console.log(input)
    addTodoDOM(input)
}
