import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";


let dropCountList = $(".dropdown--counter-list")

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
    let titleDropStr=""
    let titleDropArr=[]
    counts.each(function(i){
    let str  = this.value + " " + titleCoutner[i].innerHTML+" "
    titleDropArr.push(str)
    titleDropStr=titleDropArr.join(",")
    titleDrop.html(titleDropStr)
    })
}
counts.each(function(){
    
    counter($(this))
})