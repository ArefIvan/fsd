import $ from 'jquery';
function catalogItemDropdown(field){
    
    let dropdown = function(el){

        let btn = el.find(".field-dropdown__icon")
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

