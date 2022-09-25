import { format } from 'date-fns';

export function displayModal(modal) {
    if(modal.style.display != 'block') {
        modal.style.display = 'block'
        setTimeout(function() {
            modal.style.opacity = '1'
        }, 100)
    }else {
        modal.style.opacity = '0.01'
        setTimeout(function() {
            modal.style.display = "none";
        }, 600)
    }
}
export function displayModalAdd(modalAdd) {
    if(modalAdd.style.display != 'block') {
        modalAdd.style.display = 'block'
        addLocalDate()
        setTimeout(function() {
            modalAdd.style.opacity = '1'
        }, 100)
    }else {
        modalAdd.style.opacity = '0.01'
        setTimeout(function() {
            modalAdd.style.display = "none";
        }, 600)
        deleteValuesOfForm()
    }
}
function addLocalDate() {
    let currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
    let inputDate = document.getElementById('inputDate')
    inputDate.setAttribute('min', currentDate)
}
function deleteValuesOfForm() {
    document.getElementById('inputDate').value = ''
    document.getElementById('inputTitle').value = ''
    document.getElementById('inputDescription').value = ''
    document.getElementById('projectName').value = ''
}