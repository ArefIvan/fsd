import $ from 'jquery';
// import jQuery from "jquery";
// import "../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css" 

import "ion-rangeslider";

$(document).ready(function(){
    var rangeFrom = $('.range__from');
    var rangeTo = $(".range__to");
    $(".range").ionRangeSlider({
        skin:"big",
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        hide_from_to:true,
        hide_min_max:true
        
    })
    $(".range").on("change", function () {
        var $inp = $(this);
        var v = $inp.prop("value");     // input value in format FROM;TO
        var from = $inp.data("from");   // input data-from attribute
        var to = $inp.data("to");       // input data-to attribute
        console.log($inp);
        rangeFrom.html(from);
        rangeTo.html(to) ;     // all values


    });
    
})