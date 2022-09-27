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
        deleteValuesOfProjectForm()
    }
}
export function displayModalAdd(modalAdd) {
    if(modalAdd.style.display != 'block') {
        modalAdd.style.display = 'block'
        addLocalDate()
        document.getElementById('submitBtn')
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
    let currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm")
    let inputDate = document.getElementById('inputDate')
    inputDate.setAttribute('min', currentDate)
}
function deleteValuesOfForm() {
    document.getElementById('inputDate').value = ''
    document.getElementById('inputTitle').value = ''
    document.getElementById('inputDescription').value = ''
    document.getElementById('projectName').value = ''
}
function deleteValuesOfProjectForm() {
    document.getElementById('projectName').value = ''
}
export function cardDetailsModal(i) {
    let cardModal = document.querySelector(`[data-modal="${i}"]`)
    let closeModalCardDetails = document.querySelector(`[data-index-close="${i}"]`)
    closeModalCardDetails.onclick = () => cardDetailsModal(i)
    if(cardModal.style.display != 'block') {
        cardModal.style.display = 'block'
        setTimeout(function() {
            cardModal.style.opacity = '1'
        }, 100)
    }else {
        cardModal.style.opacity = '0.01'
        setTimeout(function() {
            cardModal.style.display = "none";
        }, 600)
    }
}