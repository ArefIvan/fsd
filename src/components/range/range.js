import $ from 'jquery';
// import jQuery from "jquery";
// import "../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css" 



$(document).ready(function(){
    
    var inputs = $('.range__input');
    var bar = $(".range__bar")
    var to = inputs[0];
    var from = inputs[1];
    var width = inputs.width();
    var max = inputs[0].max;
    var min = inputs[0].min;
    inputs.input(function(){
        let valTo = parseInt(to.value);
        let valFrom = parseInt(from.value);
        let percTo = (valTo-min)/((max-min)/100);
        let percFrom = (valFrom-min)/((max-min)/100);


        bar.css({
            left:percTo + "%",
            width:(percFrom - percTo) + "%",
        })
        if(this.value==valTo){            
            if(valTo>=valFrom){
                to.value = valFrom - ((max/100)*3);
                return;
        }
        }
        if(this.value==valFrom){
            
            if(valFrom<=valTo){
                this.value= valTo + ((max/100)*3);
               
                return;
        }
        }
        
       
        console.log(valTo)
        console.log(valFrom)
    })
;    
})