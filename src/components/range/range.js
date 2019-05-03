import $ from 'jquery';
// import jQuery from "jquery";
// import "../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css" 



$(document).ready(function(){
    
    var inputs = $('.range__input');
    var to = parseInt(inputs[0].value);
    var from = parseInt(inputs[1].value);
    var width = inputs.width();
    var max = inputs[0].max;
    var min = inputs[0].min;
    inputs.change(function(){
        console.log(to);
        console.log(from);
    })
;    
})