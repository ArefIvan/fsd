// function catalogItemCalendar(calendars){
//   let calendarsEl = document.querySelectorAll(calendars);
  


    let calendar = function(el) {
    
    let prevBtn = el.querySelector(".calendar__arrow--prev");
    let nextBtn = el.querySelector(".calendar__arrow--next");
    let title = el.querySelector(".calendar__title");
    let calContent = el.querySelector(".calendar__content");
    let selectedDay1 = el.dataset.selectedDay1;
    let selectedDay2 = el.dataset.selectedDay2;
    
  function selectDay(){
    let sd1;
    let sd2;
    let days=calContent.querySelectorAll('.future-day');
    
    days.forEach(day => { 
      let date = new Date(title.dataset.year,title.dataset.month,day.innerHTML)
      if(date==selectedDay1){
        day.classList.add("selected");
        sd1=day;
      }
      if(date==selectedDay2){
        day.classList.add('selected-2')
        sd1.classList.add('selected-1')
        }
        day.onclick = (e)=>{
          if(selectedDay1 == undefined){ 
            sd1=e.target
            sd1.classList.add("selected")
            selectedDay1 = date;
          }else{
              if(selectedDay1==date){
                  if(selectedDay2==undefined){ 
                    console.log(2)
                    sd1.classList.remove("selected",'selected-1');
                    sd1='';
                    selectedDay1=undefined;
                    
                  }else{
                    console.log(sd1)
                      sd1.classList.remove("selected",'selected-1');
                      console.log(sd1.classList)
                      sd1=sd2;
                      sd1.classList.remove("selected-2")
                      console.log(sd1)
                      sd2="";
                      selectedDay1=selectedDay2;
                      selectedDay2=undefined;
                  }
                }else{

               
              if(selectedDay2=='none'){
                return
              }else{
                if(selectedDay2==undefined){
                   if(date<selectedDay1){
                      selectedDay2=selectedDay1;
                      selectedDay1=date;
                      sd2 = sd1;
                      sd1 = e.target;
                      sd1.classList.add("selected","selected-1")
                      sd2.classList.add("selected-2")
                      
                    }
                    if(date>selectedDay1){
                      selectedDay2=date;
                      sd2 = e.target
                      sd2.classList.add("selected","selected-2")
                      sd1.classList.add("selected-1")
                      rangeDate(selectedDay1,selectedDay2)
                    }
                }else{
                  if(selectedDay2==date){
                    sd2.classList.remove("selected","selected-2")
                    sd1.classList.remove("selected-1")
                    sd2="";
                    selectedDay2=undefined

                  }
                }
              }
            }
            }
            rangeDate(selectedDay1,selectedDay2)
              console.log(selectedDay1)
              console.log(selectedDay2)
    }


        el.dataset.selectedDay1=selectedDay1;
        el.dataset.selectedDay2=selectedDay2;
           
         
      
    });
  }
  function rangeDate(day1,day2){
    let days=calContent.querySelectorAll('.future-day');
    let from = (day1>day2)?day2:day1;
    let to = (from==day1)?day2:day1;
    days.forEach(day => {
      let date=new Date(title.dataset.year,title.dataset.month,day.innerHTML);
      if(from&&to){
        if(date>from&&date<to){
          day.classList.add("range-day")
        }
      }else{
        day.classList.remove("range-day")
      }

     })

  }
  function getContentCal(year, month){
      
      let Dlast = new Date(year,month+1,0).getDate(),//узнать какой последний день месяца,
          DlastPrev = new Date(year,month,0).getDate(),
          D = new Date(year,month,Dlast),// переменая с датой последнего дня месяца
          DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),// день недели последнего дня месяца от 0(воскресенье) до 6(суббота)
          DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),// день недели 1 числа этого же месяца от 0(воскресенье) до 6(суббота)
          content = '<tr>',// строка
          months=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
          ld=0;
          
      if (DNfirst != 0) { //если первый день месяца не воскресение
          ld = DlastPrev - DNfirst + 2 
        for(let  i = 1; i < DNfirst; i++){ 
            content += '<td class = "calendar__day prevMonth">' + ld
            ld++
          }; // добавить столбцов сколько дней от пн до 1 числа
      }else{
          ld = DlastPrev - 5;
        for(let  i = 0; i < 6; i++){

            content += '<td class="calendar__day prevMonth">' + ld
            ld ++
          };// иначе добавить 6 столбцов
      }
      for(let  i = 1; i <= Dlast; i++) {
        if(selectedDay1 !==undefined
        &&selectedDay1.getFullYear() == D.getFullYear() //если есть выбранный день
        &&selectedDay1.getMonth()==D.getMonth()
        &&selectedDay1.getDate() == i
        ||selectedDay2 !==undefined
        &&selectedDay2.getFullYear() == D.getFullYear() //если есть второй выбранный день
        &&selectedDay2.getMonth()==D.getMonth()
        &&selectedDay2.getDate() == i){
          content += '<td class="calendar__day future-day selected">' + i;

        }else{
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) { // если i = 
              content += '<td class="calendar__day today">' + i;
            }else{
          
              if(i > new Date().getDate() 
                && D.getFullYear() == new Date().getFullYear() 
                && D.getMonth() == new Date().getMonth()
                ||D.getFullYear() > new Date().getFullYear()
                ||D.getMonth() > new Date().getMonth()){
              content += '<td class="calendar__day future-day">' + i;
              }
              else{content += '<td class="calendar__day">' + i;
              }
         
          }
        }
        if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
          content += '<tr>';
        }
      }
      let count = 1;
      for(let i = DNlast; i < 7; i++){ 
        if(DNlast){
          content += '<td class = "calendar__day nextMonth">' +count
          count++
        }
        else{content+='<td class = "calendar__day">&nbsp';}
      };
      calContent.innerHTML = content;
      title.innerHTML = months[D.getMonth()] +' '+ D.getFullYear();
      title.dataset.month = D.getMonth();
      
      title.dataset.year = D.getFullYear();
      if (calContent.querySelectorAll('tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
          calContent.innerHTML += '<tr><td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td>&nbsp;';
        }
        prevBtn.onclick = function() {
          getContentCal(title.dataset.year, parseFloat(title.dataset.month)-1);
          selectDay();
        }
        // переключатель плюс месяц
        nextBtn.onclick = function() {
          getContentCal(title.dataset.year, parseFloat(title.dataset.month)+1)
          selectDay();
        }

    }   
   getContentCal(new Date().getFullYear(), new Date().getMonth());
   selectDay();
  };
  export default calendar;
  // calendarsEl.forEach(item => {calendar(item)
    
//   });
// }
// catalogItemCalendar(".calendar")