import calendar from "./components/calendar/calendar.js"
import "./blocks/cards/card-room/card-room"

    let getContentCal= calendar.getContentCal; 
    let cal = calendar.calendar;
    
function calendarOne(el){
    let calendar= el.querySelector('.calendar'); //календарь
   
    cal(calendar);
}
function catalogCalendarOne(elem){
    let calendarOneEl = document.querySelectorAll(elem);
    
        calendarOneEl.forEach(item => {
            calendarOne(item)
            
        });
    }
catalogCalendarOne(".card-calendar")