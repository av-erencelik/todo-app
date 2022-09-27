
import { inboxAllTodos } from './Constructor';
import {displayModalAdd} from './modals'
export let isItEdit = false
let editedObject;
export function editTodos(object) {
    isItEdit = true
    editedObject = object
    displayModalAdd(document.getElementById('modalAdd'))
    document.getElementById('inputDate').value = `${object.date}`
    document.getElementById('inputTitle').value = `${object.title}`
    document.getElementById('inputDescription').value = `${object.description}`
    document.getElementById('inputPriority').value = `${object.priority}`
}
export function listenEdit(btn,object) {
    btn.addEventListener('click', () => editTodos(object))
}
export function editTodoValues(title,date,description,priority) {
    editedObject.title = title
    editedObject.date = date
    editedObject.description = description
    editedObject.priority = priority
    inboxAllTodos()
    displayModalAdd(document.getElementById('modalAdd'))
    isItEdit = false
}