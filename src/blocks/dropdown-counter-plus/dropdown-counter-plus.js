import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";



let dropCountList = $(".dropdown--counter-plus")

let counts = dropCountList.find(".counter__count")
let titleDrop = dropCountList.find(".field-dropdown__title")
let dec=dropCountList.find(".dec")
let inc=dropCountList.find(".inc")
let titleCoutner=dropCountList.find(".counter__title")
getTitleDrop()


counts.each(function(i){   
   $(dec[i]).on('click',function(){
       setTimeout(getTitleDrop,10)
        })
        
    $(inc[i]).on("click",function(){
        setTimeout(getTitleDrop,10)
    })

})
function getTitleDrop(){
    let titleDropStr="Гостей"
    let sum = 0
    
    counts.each(function(i){
        let sum =+ this.value
    })
    titleDrop.html(sum+titleDropStr)
}
counts.each(function(){
    
    counter($(this))
})