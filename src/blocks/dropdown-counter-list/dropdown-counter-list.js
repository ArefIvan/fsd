import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";


let dist=[
    {word:"спальни",
    root:"спал",
    ext:["ьня","ьни","ен"]
    },
    {word:"кровати",
    root:"кроват",
    ext:["ь","и","ей"]
    },
    {word:"ванные",
    root:"ванн",
    ext:["ая","ых","ых"]
    },
    {word:"комнаты",
    root:"комнат",
    ext:["а","ы",""]
    }
];
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

            let str  = this.value + " " + checkExt(titleCoutner[i].innerHTML,this.value,dist)+" ";

            titleDropArr.push(str);
            titleDropStr=titleDropArr.join(",");
            titleDrop.html(titleDropStr);
            if(this.value!=0){asseptFlag=true}
            if(this.value!=$(this).data("min")){cancelFlag=true}            
        })
        if(asseptFlag)assept.css("opacity",1)
            else assept.css("opacity",0)
        if(cancelFlag)cancel.css("opacity",1)
            else cancel.css("opacity",0)
    }
    function checkExt(str,val,dist){
        function ext(root,ext){
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
        str=str.split(" ")
 
        
        for (let i = 0; i < str.length; i++) {
            let word = str[i]  
            console.log(word)
            for (let i = 0; i < dist.length; i++) {
                // console.log(dist[i].word)
                if( word== dist[i].word){
                    // console.log(1)
                    word = ext(dist[i].root,dist[i].ext)
                    // console.log(elem)
                }
                
            }
            str[i]=word
        console.log(str.join(" "))
        }
        return str.join(" ")

        // if(str=="спальни"){
        //    return ext("спал",["ьня","ьни","ен"])          
        // }
        // if(str=="кровати"){
        //     return ext("кроват",["ь","и","ей"])
        // }
        // if(str=="ванные комнаты"){
            
        //   return ext("ванн",["ая","ых","ых"]) + " " + ext("комнат",["а","ы",""])
          
        // }
                
    }
    counts.each(function(){
        
        counter($(this))
    })
}

dropCountList.each(function(){
    countsList($(this))
})