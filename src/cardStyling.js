function listStyle(content,cards) {
    content.classList.remove('grid')
    content.classList.add('flex')
    for(let i = 0;i < cards.length;i++) {
        cards[i].classList.remove('card-style')
        cards[i].classList.add('list-style')
    }
    
}
function cardStyle(content,cards) {
    content.classList.remove('flex')
    content.classList.add('grid')
    for(let i = 0;i < cards.length;i++) {
        cards[i].classList.remove('list-style')
        cards[i].classList.add('card-style')
    }
}
export function styleCards(buttonActive,buttonNotActive) {
    const content = document.getElementById('content')
    const card = document.querySelectorAll('.card')
    buttonActive.classList.add('active')
    buttonNotActive.classList.remove('active')
    
    if(content.classList.contains('flex')) {
        cardStyle(content,card)
    }else {
        listStyle(content,card)
    }
}
export function evaluateStyling() {
    const content = document.getElementById('content')
    if(content.classList.contains('flex')) {
        return true
    }else {
        return false
    }
}