import './styles.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const bars = document.getElementById('bars')
bars.addEventListener('click',displaySidebar)
function displaySidebar() {
    const sidebar = document.getElementById('sidebar')
    if(sidebar.style.width == 0 || sidebar.style.width == '0px') {
        sidebar.style.width = '250px';
    }else {
        sidebar.style.width = '0'
        console.log(0)
    }
}