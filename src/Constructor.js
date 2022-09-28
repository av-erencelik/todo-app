
import {addTodoDOM} from './addTodoDOM'
import { isDateToday } from './evaluate'
import { addLocalStorageProjectsDom, projectIndex, projects } from './formValidation'
import { format } from "date-fns";



export let input = []
export let completedTodos = []
export function todoConstructor(title,date,description,priority) {
    this.title = title 
    this.date = date
    this.description = description
    this.priority = priority
    this.isCompleted = false
    this.completeDate = 0
}
export function addTodoArray(todo) {
    input.push(todo)
    localStorage.setItem('inbox', JSON.stringify(input))
    if(document.getElementById('today').classList.contains('active')) {
        todayTodos()
        return
    }
    let allProjectsElements = document.getElementsByClassName('dropdownItem')
    let isProjectActive
    for(let i = 0; i < allProjectsElements.length; i++) {
        if(allProjectsElements[i].classList.contains('active')){
            isProjectActive = true
        }     
    }
    if(isProjectActive) {
        return
    }
    addTodoDOM(input)
}
export function todayTodos() {
    let todayTodoArray = isDateToday(input)
    document.getElementById('inbox').classList.remove('active')
    document.getElementById('today').classList.add('active')
    document.getElementById('completed').classList.remove('active')
    let allProjects = document.getElementsByClassName('dropdownItem')
    for(let i = 0;i < allProjects.length; i++) {
        allProjects[i].classList.remove('active')
    }
    addTodoDOM(todayTodoArray)
}
export function inboxAllTodos() {
    addTodoDOM(input)
    document.getElementById('inbox').classList.add('active')
    document.getElementById('today').classList.remove('active')
    document.getElementById('completed').classList.remove('active')
    let allProjects = document.getElementsByClassName('dropdownItem')
    for(let i = 0;i < allProjects.length; i++) {
        allProjects[i].classList.remove('active')
    }
}

function completeTodo(i) { 
    if(input[i] == undefined) {
        return
    }
    input[i].isCompleted = true
    input[i].completeDate = format(new Date(), "yyyy-MM-dd HH:mm")
    completedTodos.push(input[i])
    localStorage.setItem('completed', JSON.stringify(input))
    input.splice(i,1)
    localStorage.setItem('inbox', JSON.stringify(input))
    addTodoDOM(input)
}
export function listenComplete(btn) {
    btn.addEventListener('click',() => completeTodo(btn.getAttribute("data-index-completed")))
}
export function completedTodosDOM() {
    addTodoDOM(completedTodos)
    document.getElementById('completed').classList.add('active')
    document.getElementById('today').classList.remove('active')
    document.getElementById('inbox').classList.remove('active')
    let allProjects = document.getElementsByClassName('dropdownItem')
    for(let i = 0;i < allProjects.length; i++) {
        allProjects[i].classList.remove('active')
    }
}
export function listenDeleteButton(btn,array) {
    btn.addEventListener('click', () => deleteTodos(btn.getAttribute("data-index-delete"),array))
}
function deleteTodos(i,array) {
    if(input != array) {
        for(let i = 0; i < array.length; i++) {
            for(let k = 0; i < input.length; k++) {
                if(array[i] == input[k]) {
                    input.splice(k,1)
                    localStorage.setItem('inbox', JSON.stringify(input))
                    break;
                }
            }
        }
    }else if (input == array && projects != []) {
        for(let i = 0; i < array.length; i++) {
            console.log(1)
            for(let k = 0; k < projects.length; k++) {
                console.log(projects[k])
                for(let z = 0; z < projects[k].length; z++) {
                    console.log(3)
                    if(projects[k][z] == array[i]) {
                        projects[k].splice(z,1)
                        break;
                    }
                }
            }
        }
    }    
    array.splice(i,1)
    localStorage.setItem('inbox', JSON.stringify(input))
    localStorage.setItem('projects', JSON.stringify(projects))
    localStorage.setItem('completed', JSON.stringify(input))
    addTodoDOM(array)
}
export function isLocalStorageEmpty() {
    if(localStorage.getItem("inbox") != null) {
            input = JSON.parse(localStorage.getItem("inbox"))
            addTodoDOM(input)
    }
    if(localStorage.getItem("completed") != null) {
            completedTodos = JSON.parse(localStorage.getItem("completed"))
    }
}    