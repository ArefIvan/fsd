import $ from 'jquery';
// import jQuery from "jquery";
// import "../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css" 



$(document).ready(function(){
    var ran = $(".range-slide1") 
    var ran1=$(".range-slide2")
    range(ran1)
    range(ran)
    function range(elem){
        let $range = elem;
        let inputs = $range.children('.range__input');
        let bar = $range.children(".range__bar")
        let to = inputs[0];
        let from = inputs[1];
        let max = inputs[0].max;
        let min = inputs[0].min;
        console.log($range)
        bar.css({
            left:(to.value-min)/((max-min)/100)+"%",
            width:((from.value-min)/((max-min)/100))-((to.value-min)/((max-min)/100))+"%",
    })
    inputs.on('input',function(){
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
    })
;}   
})