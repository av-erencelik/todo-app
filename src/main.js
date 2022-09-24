import './styles.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import {displaySidebar,displayDropdown} from './display'
import {displayModal} from './modals'
import {styleCards} from './cardStyling'

// modal variables
let closeProject = document.getElementById('closeModalProject')
let modal = document.getElementById("modal-project");
let btn = document.getElementById("projectForm");
// display dropdown and sidebar variables
const myProjects = document.getElementById('myProjects')
const bars = document.getElementById('bars')
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
    }
}
// Styling cards 
const listButton = document.getElementById('list')
const tableButton = document.getElementById('table') 
console.log(listButton + tableButton)
listButton.addEventListener('click',() => styleCards(listButton,tableButton))
tableButton.addEventListener('click',() => styleCards(tableButton,listButton))

