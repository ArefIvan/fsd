import $ from 'jquery';
function catalogItemDropdown(field){
    
    let dropdown = function(el){

        let btn = el.children().children(".field-dropdown__icon")
        let content = el.children('.field-dropdown__content')
        content.hide();
        btn.on("click",function(){
            el.toggleClass("field-dropdown--expand")
            content.stop(true).slideToggle()
        })
    };   
    $(field).each(function(){
        dropdown($(this));
    })
}
catalogItemDropdown(".field-dropdown")
function catalogItemDropdownDate(field){
    
    let dropdownDate = function(el){

        let date = el.children().children(".field-dropdown__date")
        date.on("input",function(){
            let value = this.value;
             value =  value.split(/[^0-9.]/).join("").split(/\.{2,}/).join("");
             this.value = value; 
            value.split('.');

  
            // this.value = value;            
            console.log(value)
           
           
        })
        
        
    };   
    $(field).each(function(){
        dropdownDate($(this));
    })
}
catalogItemDropdownDate(".field-dropdown--date")