import "../../components/form/field-dropdown"
import calendar from "../../components/calendar/calendar.js"
// import selectDay from "../../components/calendar/calendar"

// dropdown_date
function catalogItemDropdownDate(field){
    let selectDay =calendar.selectDay;
    let getContentCal= calendar.getContentCal;
    console.log(selectDay)
    let cal = calendar.calendar;
    console.log(cal)
    let fieldsEl = document.querySelectorAll(field)
  
    let dropdownDate = function(el){
        
        let date = el.querySelector(".field-dropdown__date")
        let calendar= el.querySelector('.calendar');
        calendar.dataset.selectedDay2='none';
        cal(calendar);
        console.log(date.parentNode)
       
        calendar.onclick = function(){
            
            
            let value=this.dataset.selectedDay1
            if(value!==''&&value!==undefined){
                console.log(value)
                value = dateFormat(value);
                date.value=value;
            }
            else{
                date.value = ""
            }
           
            
        }
        date.onchange = function(){
            let value = this.value;          
            let valueStr;
            let now = new Date()
            if(isValidDate(value)){     
               value=value.split('.')         
                value = new Date(value[2],(value[1]-1),value[0])            
                if(value<now){
                    value = now
                }   
                calendar.dataset.selectedDay1=value;
                valueStr = dateFormat(value);
                this.value=valueStr
                date.parentNode.classList.remove('error')
                getContentCal(calendar,value.getFullYear(),value.getMonth())
                selectDay(calendar)
            }else{
                date.parentNode.classList.add('error')
            }
        }
        
        
    };   
    fieldsEl.forEach(item =>{
        dropdownDate(item)
    })
    // $(field).each(function(){
    //     dropdownDate($(this));
    // })
}
catalogItemDropdownDate(".field-dropdown--date")

function dateFormat(str){
    let date =new Date(str)
    let day= date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if(day<10)day='0'+ day;
    if(month<10)month= "0" + month;

    return day + "." + month + "."+ year
}

// Проверка даты
function isValidDate(dateString)
{
    // первая проверка на правильность
    if(!/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateString))
        return false;

    // переводим в массив и парсим в числа
    var parts = dateString.split(".");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // проверяем год и месяц
    if(year < 1970 || year > 2100 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // проверка на високосный год
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // проверка дня 
    return day > 0 && day <= monthLength[month - 1];
};


