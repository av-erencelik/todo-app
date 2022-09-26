import { parseISO } from "date-fns";
import { format } from "date-fns";
import { todoConstructor } from "./Constructor";
import { addTodoArray } from "./Constructor";
import { displayModalAdd } from "./modals";
export function inputTodoForm(e) {
    e.preventDefault()
    let title = document.getElementById('inputTitle').value
    let date = document.getElementById('inputDate').value
    date = format(parseISO(date),"yyyy-MM-dd HH:mm")
    let description = document.getElementById('inputDescription').value
    let priority = document.getElementById('inputPriority').value
    let newTodo = new todoConstructor(title,date,description,priority)
    console.log(newTodo)
    addTodoArray(newTodo)
    displayModalAdd(document.getElementById('modalAdd'))
}