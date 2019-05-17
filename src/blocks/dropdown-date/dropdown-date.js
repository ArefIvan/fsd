import "../../components/form/field-dropdown"
import calendar from "../../components/calendar/calendar.js"
// import selectDay from "../../components/calendar/calendar"

// dropdown_date
function catalogItemDropdownDate(field){
    let selectDay =calendar.selectDay;
    let getContentCal= calendar.getContentCal; 
    let cal = calendar.calendar;
    let fieldsEl = document.querySelectorAll(field)
  
    let dropdownDate = function(el){
        
        let dateOne = el.querySelector(".field-dropdown__date--one"); //поле даты 
        let dateTwo = el.querySelector(".field-dropdown__date--two"); //поле даты 
        console.log(dateOne)
        let calendar= el.querySelector('.calendar'); //калердарь
        // calendar.dataset.selectedDay2='none'; // для выбора диапазона дат стереть
        cal(calendar);

        calendar.onclick = function(){
            let valueOne = this.dataset.selectedDay1
            let valueTwo = this.dataset.selectedDay2
            if(valueOne!==''&&valueOne!==undefined){
                if(valueTwo=="none"){
                     valueOne = dateFormatFull(valueOne);
                }else{
                    valueOne = dateFormatShort(valueOne)
                }
                dateOne.value=valueOne;
            }
            else{
                dateOne.valueOne = ""
            }
            if(valueTwo!==''&&valueTwo!==undefined&&valueTwo!=="none"){
                
                valueTwo = dateFormatShort(valueTwo);
                dateTwo.value=valueTwo;
            }
            else{
                dateTwo.valueTwo = ""
            }
            
           
            
        }

        dateOne.onchange = function(){
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
                dateOne.parentNode.classList.remove('field-dropdown__error')
                getContentCal(calendar,value.getFullYear(),value.getMonth())
                selectDay(calendar)
            }else{
                date.parentNode.classList.add('field-dropdown__error')
            }
        }
        
        
    };   
    fieldsEl.forEach(item =>{
        dropdownDate(item)
    })

}
catalogItemDropdownDate(".field-dropdown--date")

function dateFormatFull(str){
    let date =new Date(str)
    let day= date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if(day<10)day='0'+ day;
    if(month<10)month= "0" + month;

    return day + "." + month + "."+ year
}
function dateFormatShort(str){
    let date =new Date(str)
    let day= date.getDate(); 
    let months=["Янв","Фев","Мар","Апh","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
    let month =months[date.getMonth()];
    if(day<10)day='0'+ day;

    return day + " " + month 
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


