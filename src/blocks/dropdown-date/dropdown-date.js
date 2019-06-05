import "../../components/dropdown/dropdown"
import calendar from "../../components/calendar/calendar.js"
let selectDay =calendar.selectDay;
    let getContentCal= calendar.getContentCal; 
    let cal = calendar.calendar;
// dropdown_date

export function dropdownDatefilter(el){
    let now = new Date();
    let dateOne = el.querySelector(".field-dropdown__date--one"); //поле даты 
    let dateTwo = el.querySelector(".field-dropdown__date--two"); //поле даты 
    let inpDate1 = el.querySelector(".field-dropdown__date--one + .field-dropdown--date-filter__input")
    let inpDate2 = el.querySelector(".field-dropdown__date--two + .field-dropdown--date-filter__input")
    let calendar= el.querySelector('.calendar'); //календарь
    // calendar.dataset.selectedDay2='none'; // для выбора диапазона дат стереть
    cal(calendar);
    dateOne.innerHTML=dateTwo.innerHTML= dateFormatShort(now)
    calendar.onclick = function(){
        let valueOne = this.dataset.selectedDay1
        let valueTwo = this.dataset.selectedDay2
        if(valueOne!==''&&valueOne!==undefined){
            
            valueOne = dateFormatShort(valueOne)
            
            dateOne.innerHTML=valueOne;
            inpDate1.value=valueOne;
        }
        else{
            valueOne = ""
            dateOne.innerHTML = valueOne
            inpDate1.value=valueOne;
        }
        if(valueTwo!==''&&valueTwo!==undefined&&valueTwo!=="none"){
            
            valueTwo = dateFormatShort(valueTwo);
            dateTwo.innerHTML=valueTwo;
            inpDate2.value=valueTwo;
            
        }
        else{
            valueTwo = "";
            dateTwo.innerHTML = valueTwo;
            inpDate2.value=valueTwo;
        }       
    }
   
}; 
export function dropdownDateTwo(el){
    let dateOne = el.querySelector(".field-dropdown__date--one"); //поле даты 
    let dateTwo = el.querySelector(".field-dropdown__date--two"); //поле даты 
    let calendar= el.querySelector('.calendar'); //календарь
    // calendar.dataset.selectedDay2='none'; // для выбора диапазона дат стереть
    cal(calendar);
    calendar.onclick = function(){
        let valueOne = this.dataset.selectedDay1
        let valueTwo = this.dataset.selectedDay2
        if(valueOne!==''&&valueOne!==undefined){
            
            valueOne = dateFormatFull(valueOne)
            dateOne.value=valueOne;
        }
        else{
            valueOne.value = ""
            dateOne.innerHTML = valueOne
            inpDate1.value=valueOne;
        }
        if(valueTwo!==''&&valueTwo!==undefined&&valueTwo!=="none"){           
            valueTwo = dateFormatFull(valueTwo);
            // dateTwo.innerHTML=valueTwo;
            dateTwo.value=valueTwo;
                    }
        else{
            valueTwo = "";
            dateTwo.value = valueTwo;
            // inpDate2.value=valueTwo;
        }        
    }

    dateOne.addEventListener("change",(e)=>{changeDate(e,calendar)})
    dateTwo.addEventListener("change",(e)=>{
        changeDate(e,calendar)
    })     
}; 
let changeDate =(e,calendar)=>{
    console.log(calendar)
    let value = e.target.value;          
    let valueStr;
    let now = new Date()
    if(isValidDate(value)){     
       value=value.split('.')         
        value = new Date(value[2],(value[1]-1),value[0])            
        if(value<now){
            value = now
        }
        if(e.target.classList.contains("field-dropdown__date--one")){   
            calendar.dataset.selectedDay1=value; 
        }
        if(e.target.classList.contains("field-dropdown__date--two")){
            calendar.dataset.selectedDay2=value;
        }          
        valueStr = dateFormatFull(value);
        e.target.value=valueStr
        e.target.parentNode.classList.remove('field-dropdown__error')
        getContentCal(calendar,value.getFullYear(),value.getMonth())
        selectDay(calendar)
    }else{
        e.target.parentNode.classList.add('field-dropdown__error')
    }
}
export function dateFormatFull(str){
    let date =new Date(str)
    let day= date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if(day<10)day='0'+ day;
    if(month<10)month= "0" + month;

    return day + "." + month + "."+ year
}
export function dateFormatShort(str){
    let date =new Date(str)
    let day= date.getDate(); 
    let months=["Янв","Фев","Мар","Апh","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
    let month =months[date.getMonth()];
    if(day<10)day='0'+ day;

    return day + " " + month 
}

// Проверка даты
export function isValidDate(dateString){
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


export default {dropdownDatefilter, dropdownDateTwo ,dateFormatFull,dateFormatShort,isValidDate,changeDate}
