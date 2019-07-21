import calendar from "./components/calendar/calendar.js"

    let getContentCal= calendar.getContentCal; 
    let cal = calendar.calendar;
    
function calendarOne(el){
    let calendar= el.querySelector('.calendar'); //календарь
    console.log(calendar)
    cal(calendar);
}
function catalogCalendarOne(elem){
    let calendarOneEl = document.querySelectorAll(elem);
    console.log(calendarOneEl)
        calendarOneEl.forEach(item => {
            calendarOne(item)
            console.log(item)    
        });
    }
catalogCalendarOne(".card-calendar")