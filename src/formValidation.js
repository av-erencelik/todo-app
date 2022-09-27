import { parseISO } from "date-fns";
import { format } from "date-fns";
import { addTodoDOM } from "./addTodoDOM";
import { todoConstructor } from "./Constructor";
import { addTodoArray } from "./Constructor";
import { cardDetailsModal, displayModal, displayModalAdd } from "./modals";
import { editTodoValues, isItEdit } from "./edit";

let projectIndex = 0
export let projects = []
export function inputTodoForm(e) {
    e.preventDefault()
    let title = document.getElementById('inputTitle').value
    let date = document.getElementById('inputDate').value
    date = format(parseISO(date),"yyyy-MM-dd HH:mm")
    let description = document.getElementById('inputDescription').value
    let priority = document.getElementById('inputPriority').value
    let newTodo = new todoConstructor(title,date,description,priority)
    if(isItEdit) {
        editTodoValues(title,date,description,priority)
        return
    }
    let whichProject = evaluateWhichProject()
    if(whichProject != undefined) {
        addNewTodoProjectArray(newTodo,whichProject)
        addTodoArray(newTodo)
        displayModalAdd(document.getElementById('modalAdd'))
        return
    }
    addTodoArray(newTodo)
    displayModalAdd(document.getElementById('modalAdd'))
}
export function newProject(e) {
    e.preventDefault()
    let projectName = document.getElementById('projectName').value
    let dropdownItems = document.getElementById('dropdown-items')
    let div = `<li class="dropdownItem" id="project${projectIndex}" data-index-project="${projectIndex}">${projectName}</li>`
    let newProjectArray = []
    projects.push(newProjectArray)
    dropdownItems.insertAdjacentHTML("beforeend", div)
    let button = document.querySelector(`[data-index-project="${projectIndex}"]`)
    listenProjectButton(button)
    projectIndex ++
    displayModal(document.getElementById('modal-project'))
}
function evaluateWhichProject() {
    let allProjects = document.getElementsByClassName('dropdownItem')
    let isItProject = false
    let whichProject
    for(let i = 0;i < allProjects.length; i++) {
        if(allProjects[i].classList.contains('active')) {
            isItProject = true
            whichProject = i - 1
            break
        }
    }
    return whichProject
}
function addNewTodoProjectArray(newTodo,i) {
    projects[i].push(newTodo)
    addTodoDOM(projects[i])
}
function listenProjectButton(btn) {
    btn.addEventListener('click', () => projectTodos(btn.getAttribute("data-index-project")))
}
function projectTodos(indexNumber) {
    let projectButton = document.querySelector(`[data-index-project="${indexNumber}"]`)
    let allProjects = document.getElementsByClassName('dropdownItem')
    for(let i = 0;i < allProjects.length; i++) {
        allProjects[i].classList.remove('active')
    }
    document.getElementById('inbox').classList.remove('active')
    document.getElementById('completed').classList.remove('active')
    document.getElementById('today').classList.remove('active')
    projectButton.classList.add('active')
    addTodoDOM(projects[indexNumber])
}
export function listenTodoCards(btn) {
    btn.addEventListener('click', () => cardDetailsModal(btn.getAttribute("data-index")))
}