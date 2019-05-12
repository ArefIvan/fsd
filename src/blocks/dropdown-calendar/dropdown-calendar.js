
// dropdown_date
function catalogItemDropdownDate(field){
  
    let dropdownDate = function(el){

        let date = el.children().children(".field-dropdown__date")
        let calendar= el.children().children('.calendar')
        calendar.on('click',function(){
            let value=this.dataset.selectedDay1
            if(value!=='undefined'){
                value = dateFormat(value);
                date.val(value);
            }
            else{
                date.val("")
            }
           
            console.log(this.dataset.selectedDay1)
        })
        date.on("change",function(){
            let value = this.value;

            if(isValidDate(value)){
                console.log("+")

            }else{
                console.log("-")
            }

        })
        
        
    };   
    $(field).each(function(){
        dropdownDate($(this));
    })
}
catalogItemDropdownDate(".field-dropdown--date")

function dateFormat(str){
    let date =new Date(str)
    let day= date.getDate();
    let month = date.getMonth();
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