import $ from 'jquery';

// range($(".range-slide"))
    
    
function range(elem){
        if(!(elem.children().is('.range__input'))){
            
            return;
        }
        let valueFrom = elem.prev('.range__values').children('.range__value-from');
        let valueTo = elem.prev('.range__values').children('.range__value-to');
        let inputs = elem.children('.range__input'); 
        let bar = elem.children(".range__bar")
        let from = inputs[0]; 
        let to = inputs[1];
        let max = inputs[0].max;
        let min = inputs[0].min; 
        let prefix= "&#x20bd;"

    bar.css({
        left:( ( from.value - min ) / ( (max - min) / 100 ) ) + "%",
        width:( ( to.value - min ) / ( ( max - min ) / 100 ) ) - ( ( from.value - min ) / ( ( max - min ) / 100 ) )+"%",
    })
    valueFrom.html(from.value+prefix);
    valueTo.html(to.value+prefix);

    inputs.on('input',function(){
        let valFrom = parseInt(from.value);       
        let valTo = parseInt(to.value);
        let percFrom= (valFrom-min)/((max-min)/100);
        let percTo = (valTo-min)/((max-min)/100);
        bar.css({
            left:(percFrom)?percFrom  + "%":"1%",
            width:((percTo - percFrom)<100)?(percTo - percFrom) + "%":"99%",
        })
        valueFrom.html(from.value+prefix);
        valueTo.html(to.value+prefix)
        if(this.value==valFrom){                    
            if(valFrom>valTo){
                from.value = valTo - ((max/100)*2);
                return;
        }
        }
        if(this.value==valTo){
                   
            if(valTo<valFrom){
                to.value = valFrom + ((max/100)*2);
                return;
        }
        }
    })
;} 
export default {range}