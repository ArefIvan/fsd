import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";


let dropCountList = $(".dropdown--counter-list")

function countsList(el){
        let counts = el.find(".counter__count")
    let titleDrop = el.find(".field-dropdown__title")
    let dec=el.find(".dec")
    let inc=el.find(".inc")
    let titleCoutner=el.find(".counter__title")
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
}

dropCountList.each(function(){
    countsList($(this))
})