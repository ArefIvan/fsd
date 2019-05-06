import $ from 'jquery';
function catalogItemDropdown(field){
    
    let dropdown = function(el){

        let content = el.children('.field-dropdown__content')
        content.hide();
        el.on("click",function(){
            content.stop(true).slideToggle()
        })
    };   
    $(field).each(function(){
        dropdown($(this));
    })
}
catalogItemDropdown(".field-dropdown")