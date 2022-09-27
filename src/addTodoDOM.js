import { evaluateStyling } from "./cardStyling";
import { listenComplete } from "./Constructor";
import { isCompleted } from "./evaluate.JS";
import { evaluatePriority } from "./evaluate.JS";
import { listenDeleteButton } from "./Constructor";


export function addTodoDOM(input) {
    let parentElement = document.getElementById('content')
    parentElement.textContent = ""
    let styling;
    if(evaluateStyling()) {
        styling = 'list-style'
    }else {
        styling = 'card-style'
    }
    for(let i = 0;i < input.length;i++) {
        let div = `<div class="card ${styling}" id="card" data-index="${i}"> 
                        <h3 id="title">${input[i].title}</h3>
                        <p id="date">${input[i].date}</p>
                        <div class="edits">
                            <i class="fa-solid fa-pencil"></i>
                            <i class="fa-solid fa-circle-exclamation" data-index-priority="${i}"></i>
                            <i class="fa-solid fa-truck-fast"></i>
                            <div data-index-completed="${i}"><i class="fa-solid fa-check-double"></i></div>
                            <div data-index-delete="${i}"><i class="fa-solid fa-trash"></i></div>
                        </div>
                        <div class="modal" id="modal-card" data-modal="${i}">
                            <div class="card-modal-content">
                                <span class="close" id="closeModalCard">&times;</span>
                                <div class="modal-container">
                                    <div class="modal-titles">
                                        <p class="title">Title:</p>
                                        <p class="description">${input[i].title}</p>
                                    </div>
                                    <div class="modal-titles">
                                        <p class="title">Description:</p>
                                        <p class="description">${input[i].description}</p>
                                    </div>
                                    <div class="modal-titles">
                                        <p class="title">Date:</p>
                                        <p class="description">${input[i].date}</p>
                                    </div>
                                    <div class="modal-titles">
                                        <p class="title">Priority:</p>
                                        <p class="description">${input[i].priority}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            parentElement.insertAdjacentHTML("beforeend", div)
            evaluatePriority(input[i].priority,i)
            isCompleted(input[i].isCompleted,i)
            let completeBtn = document.querySelector(`[data-index-completed="${i}"]`)    
            listenComplete(completeBtn)
            let deleteBtn = document.querySelector(`[data-index-delete="${i}"]`)    
            listenDeleteButton(deleteBtn,input)
    }
}
