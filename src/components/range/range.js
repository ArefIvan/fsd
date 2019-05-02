import $ from 'jquery';
// import jQuery from "jquery";
// import "../../../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css" 

import "ion-rangeslider";

$(document).ready(function(){
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
    
})