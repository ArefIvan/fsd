import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";


let dropCountList = $(".dropdown--counter-list")

function countsList(el){
    let counts = el.find(".counter__count")
    let titleDrop = el.find(".field-dropdown__title")
    let cancel = el.find(".cancel")
    let assept = el.find(".assept")
    let dec=el.find(".dec")
    let inc=el.find(".inc")
    let titleCoutner=el.find(".counter__title")
    // console.log(assept)
    // assept.hide()
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
        let titleDropStr="";
        let titleDropArr=[];
        let asseptFlag=false;
        let cancelFlag=false;
        counts.each(function(i){
            let str  = this.value + " " + titleCoutner[i].innerHTML+" ";

            titleDropArr.push(str);
            titleDropStr=titleDropArr.join(",");
            titleDrop.html(titleDropStr);
            if(this.value!=0){asseptFlag=true}
            if(this.value!=$(this).data("min")){cancelFlag=true}            
        })
        if(asseptFlag)assept.show()
            else assept.hide()
        if(cancelFlag)cancel.show()
            else cancel.hide()
    }
    counts.each(function(){
        
        counter($(this))
    })
}

dropCountList.each(function(){
    countsList($(this))
})