import $ from 'jquery';
// import jQuery from "jquery";
// import "../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css" 



$(document).ready(function(){
    var ran = $(".range-slide1") 
    var ran1=$(".range-slide2")
    range(ran)
    range(ran1)
    
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

    bar.css({
        left:( ( from.value - min ) / ( (max - min) / 100 ) ) + "%",
        width:( ( to.value - min ) / ( ( max - min ) / 100 ) ) - ( ( from.value - min ) / ( ( max - min ) / 100 ) )+"%",
    })
    valueFrom.html(from.value);
    valueTo.html(to.value);

    inputs.on('input',function(){
        let valFrom = parseInt(from.value);       
        let valTo = parseInt(to.value);
        let percFrom= (valFrom-min)/((max-min)/100);
        let percTo = (valTo-min)/((max-min)/100);
        bar.css({
            left:(percFrom)?percFrom  + "%":"1%",
            width:((percTo - percFrom)<100)?(percTo - percFrom) + "%":"99%",
        })
        valueFrom.html(from.value);
        valueTo.html(to.value)
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
})