function Calendar2(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),//узнать какой последний день месяца,
        DlastPrev = new Date(year,month,0).getDate()
        D = new Date(year,month,Dlast),// переменая с датой последнего дня месяца
        DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),// день недели последнего дня месяца от 0(воскресенье) до 6(суббота)
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),// день недели 1 числа этого же месяца от 0(воскресенье) до 6(суббота)
        calendar = '<tr>',// строка
        month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
        ld=0;
        console.log(DlastPrev)
        console.log(DNfirst)
        
    if (DNfirst != 0) { //если первый день месяца не воскресение
        ld = DlastPrev - DNfirst + 2 
      for(var  i = 1; i < DNfirst; i++){ 
          calendar += '<td class = "calendar__day prevMonth">' + ld
          ld++
        }; // добавить столбцов сколько дней от пн до 1 числа
    }else{
        ld = DlastPrev - 5;
      for(var  i = 0; i < 6; i++){

           calendar += '<td class="calendar__day">' + ld
           ld ++
        };// иначе добавить 6 столбцов
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) { // если i = 
        calendar += '<td class="calendar__day today">' + i;
      }else{
        calendar += '<td class="calendar__day">' + i;
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    let count = 1;
    for(var i = DNlast; i < 7; i++){ 

        calendar += '<td class = "calendar__day nextMouth">' +count
        count++
    };
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    }
    Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
    // переключатель минус месяц
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
      Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
    }
    // переключатель плюс месяц
    document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
      Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
    }