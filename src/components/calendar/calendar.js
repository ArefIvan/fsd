
let calendar = document.querySelector(".calendar");
let prevBtn = calendar.querySelector(".calendar__arrow--prev");
let nextBtn = calendar.querySelector(".calendar__arrow--next");
let title = calendar.querySelector(".calendar__title");
let calContent = calendar.querySelector(".calendar__content")
console.log(nextBtn)
function Calendar2(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),//узнать какой последний день месяца,
        DlastPrev = new Date(year,month,0).getDate()
        D = new Date(year,month,Dlast),// переменая с датой последнего дня месяца
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),// день недели последнего дня месяца от 0(воскресенье) до 6(суббота)
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),// день недели 1 числа этого же месяца от 0(воскресенье) до 6(суббота)
        content = '<tr>',// строка
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
        ld=0;
        console.log(DlastPrev)
        console.log(DNfirst)
        
    if (DNfirst != 0) { //если первый день месяца не воскресение
        ld = DlastPrev - DNfirst + 2 
      for(var  i = 1; i < DNfirst; i++){ 
          content += '<td class = "calendar__day prevMonth">' + ld
          ld++
        }; // добавить столбцов сколько дней от пн до 1 числа
    }else{
        ld = DlastPrev - 5;
      for(var  i = 0; i < 6; i++){

           content += '<td class="calendar__day">' + ld
           ld ++
        };// иначе добавить 6 столбцов
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) { // если i = 
        content += '<td class="calendar__day today">' + i;
      }else{
        content += '<td class="calendar__day">' + i;
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        content += '<tr>';
      }
    }
    let count = 1;
    for(var i = DNlast; i < 7; i++){ 
      if(DNlast){
        content += '<td class = "calendar__day nextMouth">' +count
        count++
      }
      else{content+='<td class = "calendar__day">&nbsp';}
    };
    calContent.innerHTML = content;
    title.innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    title.dataset.month = D.getMonth();
    title.dataset.year = D.getFullYear();
    if (calContent.querySelectorAll('tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        calContent.innerHTML += '<tr><td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td>&nbsp;';
    }
    }
    Calendar2("calendar", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    prevBtn.onclick = function() {
      Calendar2("calendar", title.dataset.year, parseFloat(title.dataset.month)-1);
    }
    // переключатель плюс месяц
    nextBtn.onclick = function() {
      Calendar2("calendar", title.dataset.year, parseFloat(title.dataset.month)+1);
    }