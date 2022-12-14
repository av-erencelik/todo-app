import './styles.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import {displaySidebar,displayDropdown} from './display'
import {displayModal,displayModalAdd} from './modals'
import {styleCards} from './cardStyling'
import {inputTodoForm, isLocalEmpty, newProject} from './formValidation'
import { completedTodosDOM, inboxAllTodos, todayTodos, isLocalStorageEmpty } from './Constructor'
// main array
let form = document.getElementById('addTodo')
form.onsubmit = (e) => inputTodoForm(e)
// new project
let projectAdd = document.getElementById('projectInput')
projectAdd.onsubmit = (e) => newProject(e)
// modal variables
let closeProject = document.getElementById('closeModalProject')
let modal = document.getElementById("modal-project");
let btn = document.getElementById("projectForm");
// display dropdown and sidebar variables
const myProjects = document.getElementById('myProjects')
const bars = document.getElementById('bars')
// modalAdd variables
let modalAdd = document.getElementById('modalAdd')
let closeModalAdd = document.getElementById('closeModalAdd')
let openModalAddBtn = document.getElementById('add')
// displaying sidebar
bars.addEventListener('click',displaySidebar)
// displaying dropdown
myProjects.addEventListener('click',displayDropdown)
// displaying modal
btn.onclick = () => displayModal(modal);
closeProject.onclick =  () => displayModal(modal)
window.onclick = function(event) {
    if (event.target == modal) {
       displayModal(modal)
    }else if (event.target == modalAdd) {
        displayModalAdd(modalAdd)
    }
}
// Styling cards 
const listButton = document.getElementById('list')
const tableButton = document.getElementById('table') 
console.log(listButton + tableButton)
listButton.addEventListener('click',() => styleCards(listButton,tableButton))
tableButton.addEventListener('click',() => styleCards(tableButton,listButton))
// modaladd event listener
openModalAddBtn.onclick = () => displayModalAdd(modalAdd)
closeModalAdd.onclick = () => displayModalAdd(modalAdd)
// today button event listener
const todayBtn = document.getElementById('today')
todayBtn.addEventListener('click',todayTodos)
// inbox button event listener 
const inboxBtn = document.getElementById('inbox')
inboxBtn.addEventListener('click', inboxAllTodos)
const homeBtn = document.getElementById('home')
homeBtn.addEventListener('click',inboxAllTodos)
// completedBtn event listener 
const completedBtn = document.getElementById('completed')
completedBtn.addEventListener('click',completedTodosDOM)
isLocalStorageEmpty()
isLocalEmpty()