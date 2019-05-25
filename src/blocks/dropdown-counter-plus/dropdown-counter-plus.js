import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";



let dropCountPlus = $(".dropdown--counter-plus")

 function countsPlus(el)   {
    let counts = el.find(".counter__count")
    let titleDrop = el.find(".field-dropdown__title")
    let dec=el.find(".dec")
    let inc=el.find(".inc")

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
        
        let sum = 0     
        counts.each(function(){
           
            sum += +(this.value)
           
        })
        titleDrop.html(sum+" "+checkExt("Гость",sum))
    }
    function checkExt(str,val){
        if(str=="Гость"){
            let root = "Гост"
            let ext = ["ь","я","ей"]
            if((val<10||val>20)&&val%10==1){
                return root+ext[0]
            }else{
                if((val<10||val>20)&&(val%10>=2&&val%10<=4)){
                    return root+ext[1]
                }else{
                    return root+ext[2]
             }
            }
        }
    }

    counts.each(function(){
        
        counter($(this))
    })
}
dropCountPlus.each(function(){
    countsPlus($(this))
})