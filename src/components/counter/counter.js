import $ from 'jquery';
function catalogItemCounter(field){
			
    var fieldCount = function(el) {
        
        var 
            // Мин. значение
            min = el.data('min'),
            
            // Макс. значение
            max = el.data('max'), 

            // Кнопка уменьшения кол-ва
            dec = el.prev('.dec'), 

            // Кнопка увеличения кол-ва
            inc = el.next('.inc');
            console.log(min)


        function init(el) {
            console.log(el)
            if(!el.attr('disabled')){
                dec.on('click', decrement);
                inc.on('click', increment);
                el.on("input",inpData)
            }

            function inpData(){

            }
            // Уменьшим значение
            function decrement() {
                var value = parseInt(el[0].value);
                        
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
                var value = parseInt(el[0].value);
                    
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
            
        }

        el.each(function() {
            init($(this));
        });
    };

    $(field).each(function(){
        fieldCount($(this));
    });
}

catalogItemCounter('.counter__count');