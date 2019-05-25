   let counter = function(el) {
        
        let 
            // Мин. значение
            min = el.data("min"),            
            // Макс. значение
            max = el.data('max'), 
            // Кнопка уменьшения кол-ва
            dec = el.prev('.dec'), 
            // Кнопка увеличения кол-ва
            inc = el.next('.inc');
            
       
           
            
            dec.on('click', decrement);
            inc.on('click', increment);
            el.on("input",checkInp);
            el.on("change",checkChange);

            if(el[0].value<=min){
                el[0].value=min;
                dec.prop("disabled",true);

            }
            if(el[0].value>=max){
                el[0].value=max;
                inc.prop("disabled",true)
            }

            function checkInp(){
                let value = el[0].value
                value =  value.split(/\D/).join("");//вырезаем все кроме цифр               
                if(value>=max){
                    value = max;
                }
                el[0].value = value                
            }
            function checkChange(){
                let value = el[0].value
              
                if(value<=min||value==""){
                    if(min==""){
                        el[0].value=0
                        dec.prop("disabled",true)
                        inc.prop("disabled",false)
                    }
                    else{
                    el[0].value=min
                    dec.prop("disabled",true)
                    inc.prop("disabled",false)
                    }
                }else{
                    if(value>=max){
                        inc.prop("disabled",true)
                        dec.prop("disabled",false)
                        el[0].value = max
                    }
                    else{
                        inc.prop("disabled",false)
                        dec.prop("disabled",false)
                        el[0].value=value
                    }    
                 }  
            }
            // Уменьшим значение
            function decrement() {
                let value = parseInt(el[0].value);
                        
                    value--;
                    if(value < max){
                        inc.prop("disabled",false)
                    }
                    if(value <= min) {
                        el[0].value = value;
                        dec.prop("disabled",true)                  
                    }
                    else{
                        el[0].value = value;
                    }              
            };

            // Увеличим значение
            function increment() {
                let value = parseInt(el[0].value);
                    
                value++;
                if(value>min){
                    dec.prop("disabled",false)
                }
                if( value >= max) {
                    el[0].value = value;
                    inc.prop("disabled",true)
                }
                else{
                    el[0].value = value;
                }
            };
            
        


    };
export default counter
 
