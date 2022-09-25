function listStyle(content,card) {
    content.classList.remove('grid')
    content.classList.add('flex')
    card.classList.remove('card-style')
    card.classList.add('list-style')
}
function cardStyle(content,card) {
    content.classList.remove('flex')
    content.classList.add('grid')
    card.classList.remove('list-style')
    card.classList.add('card-style')
}
export function styleCards(buttonActive,buttonNotActive) {
    const content = document.getElementById('content')
    const card = document.getElementById('card')
    if (card == null) {
        return
    }
    buttonActive.classList.add('active')
    buttonNotActive.classList.remove('active')
    
    if(content.classList.contains('flex')) {
        cardStyle(content,card)
    }else {
        listStyle(content,card)
    }
}