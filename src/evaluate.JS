import { isToday } from "date-fns";
import { parseISO } from "date-fns";

export function evaluatePriority(priority,i) {
    let priortyBtn = document.querySelector(`[data-index-priority="${i}"]`)
    switch (priority) {
        case 'low':
            priortyBtn.classList.add('low')
            break;
        case 'medium':
            priortyBtn.classList.add('medium')
            break;
        case 'high':
            priortyBtn.classList.add('high')        
    }
}
export function isDateToday(input) {
    const result = input.filter((i) => {
        return isToday(parseISO(i.date))
    })
    return result
}
