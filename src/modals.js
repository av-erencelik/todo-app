
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