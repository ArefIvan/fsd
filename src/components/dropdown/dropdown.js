import $ from 'jquery';
function catalogItemDropdown(field){
    
    let dropdown = function(el){

        let btn = el.find(".field-dropdown__icon")
        let content = el.children('.field-dropdown__content')
        let assept = el.find(".assept")
        content.hide();
        btn.on("click",function(){
            el.toggleClass("field-dropdown--expand")
            content.stop(true).slideToggle()
        })
        assept.on('click',function(e){
            e.preventDefault();
            console.log(btn)
            btn[0].click();
        })
    };   
    $(field).each(function(){
        dropdown($(this));
    })
}
catalogItemDropdown(".field-dropdown")

