// function catalogItemCalendar(calendars){
//   let calendarsEl = document.querySelectorAll(calendars);
  
  // document.querySelector(".calendar")
  let calendar = function(el) {
    
    let prevBtn = el.querySelector(".calendar__arrow--prev");//кнопка назад
    let nextBtn = el.querySelector(".calendar__arrow--next");//кнопка вперед
    let title = el.querySelector(".calendar__title");//месяц-год
    let input = el.querySelectorAll("input")
    prevBtn.onclick = function() {
      getContentCal(el,title.dataset.year, parseFloat(title.dataset.month)-1);
      selectDay(el)
      
    }
    nextBtn.onclick = function() {
      getContentCal(el,title.dataset.year, parseFloat(title.dataset.month)+1);
      selectDay(el)
    }
   getContentCal(el,new Date().getFullYear(), new Date().getMonth());
   selectDay(el)
  };
  export function selectDay(el){ 
    let from;
    let to;
    let calContent = el.querySelector(".calendar__content")
    let title = el.querySelector(".calendar__title");
    let selectedDay1 = (el.dataset.selectedDay1)?new Date(el.dataset.selectedDay1):'';
    let selectedDay2 = el.dataset.selectedDay2;
    if(selectedDay2!="none"){
     selectedDay2 = (el.dataset.selectedDay2)?new Date(el.dataset.selectedDay2):'';
    }else{
      selectedDay2=="none";
    }
    let days = calContent.querySelectorAll('.active-day');
    let today = calContent.querySelector('.today');
    
    days.forEach(day => { 
      
      let date = new Date(title.dataset.year,title.dataset.month,day.innerHTML);
        if(selectedDay1!=''){ 
            if(day.innerHTML == selectedDay1.getDate()
              &&title.dataset.month==selectedDay1.getMonth()
              &&title.dataset.year==selectedDay1.getFullYear())
              {
                
                from = day;
                from.classList.add("selected")
                  if(selectedDay2!=''&&selectedDay2!='none'){
                    
                    from.classList.add("selected-1")
                  }
              }
        }
        if(selectedDay2!=''&&selectedDay2!='none'){  
          
          if(day.innerHTML==selectedDay2.getDate()
          &&title.dataset.month==selectedDay2.getMonth()
          &&title.dataset.year==selectedDay2.getFullYear()){
            
              to = day;
              to.classList.add("selected","selected-2")
          }
        }
        rangeDate(el,selectedDay1,selectedDay2)
        
        day.onclick = (e)=>{
          if(selectedDay2=="none"){
            selectedDay1 = new Date(title.dataset.year,title.dataset.month,day.innerHTML);
             if(from){ from.classList.remove("selected")}
              from = day;
              from.classList.add("selected");
              el.dataset.selectedDay1=selectedDay1;
            
          }else{

          
          if(selectedDay1 == ''){ 
           
            from=e.target
            from.classList.add("selected")
            selectedDay1 = new Date(title.dataset.year,title.dataset.month,day.innerHTML);
            
          }else{
            
              if(day.innerHTML == selectedDay1.getDate()
              &&title.dataset.month==selectedDay1.getMonth()
              &&title.dataset.year==selectedDay1.getFullYear()){
                
                  if(selectedDay2==''){ 
                    
                    from.classList.remove("selected",'selected-1');

                    from='';
                    
                    selectedDay1='';
                    
                  }else{
                      
                      from.classList.remove("selected",'selected-1');
                      from=to;
                      if(from){
                      from.classList.remove("selected-2")
                      }
                      to="";
                      selectedDay1=selectedDay2;
                      selectedDay2='';
                  }
                }else{
                    if(selectedDay2==''){
                      if(date<selectedDay1){
                          selectedDay2=selectedDay1;
                          selectedDay1=date;
                          to = from;
                          from = e.target;
                          from.classList.add("selected","selected-1")
                          if(to){
                            to.classList.add("selected-2")
                          }
                          
                        }
                        if(date>selectedDay1){
                          selectedDay2=date;
                          to = e.target
                          to.classList.add("selected","selected-2")
                          if(from){
                          from.classList.add("selected-1")
                          }
                          // rangeDate(selectedDay1,selectedDay2)
                        }
                    }else{
                      if(day.innerHTML==selectedDay2.getDate()
                      &&title.dataset.month==selectedDay2.getMonth()
                      &&title.dataset.year==selectedDay2.getFullYear()){
                        to.classList.remove("selected","selected-2")
                        if(from){
                          from.classList.remove("selected-1")
                        }
                        to="";
                        selectedDay2=''

                      }
                    }
               
              
                }
            }
            rangeDate(el,selectedDay1,selectedDay2)
            
            el.dataset.selectedDay1=selectedDay1;
            el.dataset.selectedDay2=selectedDay2;
         }
    }


        
        
           
         
      
    });
  }
  export function rangeDate(el,day1,day2){
    let title = el.querySelector(".calendar__title");
    let calContent = el.querySelector(".calendar__content")
    let days=calContent.querySelectorAll('.active-day');
    let daysNextMouth = calContent.querySelectorAll(".nextMonth");
    let daysPrevMouth = calContent.querySelectorAll(".prevMonth");
    let from = (day1>day2)?day2:day1;
    let to = (from==day1)?day2:day1;
    if(to=='none'){
      return
    }
    daysPrevMouth.forEach(day => {
      let date=new Date(title.dataset.year,parseFloat(title.dataset.month)-1,day.innerHTML);
      if(from&&to){
        if(date>from&&date<to||
          day.innerHTML==from.getDate()
          &&(parseFloat(title.dataset.month)-1)==from.getMonth()
          &&title.dataset.year==from.getFullYear()){
          day.classList.add("range-day")
        }
      }else{
        day.classList.remove("range-day")
      }

     })
    daysNextMouth.forEach(day => {
      let date=new Date(title.dataset.year,parseFloat(title.dataset.month)+1,day.innerHTML);
      if(from&&to){
        if(date>from&&date<to||
          day.innerHTML== to.getDate()
          &&(parseFloat(title.dataset.month)+1)==to.getMonth()
          &&title.dataset.year==to.getFullYear()){
          day.classList.add("range-day")
        }
      }else{
        day.classList.remove("range-day")
      }

     })
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
  export function getContentCal(el,year, month){
      let title = el.querySelector(".calendar__title");
      let calContent = el.querySelector(".calendar__content")
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
            if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) { // если i = 
              content += '<td class="calendar__day today active-day">' + i;
            }else{
          
              if(i > new Date().getDate() 
                && D.getFullYear() == new Date().getFullYear() 
                && D.getMonth() == new Date().getMonth()
                ||D.getFullYear() > new Date().getFullYear()
                ||D.getMonth() > new Date().getMonth()){
              content += '<td class="calendar__day active-day">' + i;
              }
              else{content += '<td class="calendar__day">' + i;
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
        // else{content+='<td class = "calendar__day">&nbsp';} //раскоментировать для фиксированного кол-ва недель
      };
       // if (calContent.querySelectorAll('tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      //     calContent.innerHTML += '<tr><td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td class = "calendar__day">&nbsp;<td>&nbsp;';
          
      //   }
      calContent.innerHTML = content;
      title.innerHTML = months[D.getMonth()] +' '+ D.getFullYear();
      title.dataset.month = D.getMonth();
      
      title.dataset.year = D.getFullYear();
     
        
        

    }   
  export default {calendar,selectDay,rangeDate,getContentCal};

  // calendar(document.querySelector(".calendar"))
  // calendarsEl.forEach(item => {calendar(item)
    
//   });
// }
// catalogItemCalendar(".calendar")