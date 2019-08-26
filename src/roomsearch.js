
let filter = $(".filterroom")
let drop = $(".filterroom__drop")

drop.on("click",moveLeft).on("touchstart",moveLeft)
function moveLeft(){
    let filterLeft = parseInt(filter.css("left"))
    let filterWidht=filter.width();
    let dropWidht=drop.width()


    // console.log(filterLeft)
    if(filterLeft==0){
        filter.animate({
            left:"-"+(filterWidht-dropWidht)+"px"
        })
    }else{
       filter.animate({
           left:0
       })
    }
}
// drop.on("mousedown",function(e){        
//         let filterWidht=filter.width()
//         let dropWidht=drop.width()
//         let filterLeft = parseInt(filter.css("left"))
//         let posOld=e.pageX
//        drop.on("mousemove",function(e){
//             let pos=e.pageX;
//         if(parseInt(filter.css("left"))<=0){
//             filter.css({
//                 left:filterLeft+(pos-posOld)+"px"
//             })
//         }else{
//             filter.css({
//                 left:0
//             })
//         }
//         if((parseInt(filter.css("left")))<(filterWidht-dropWidht)*-1){
//             filter.css({
//                 left:"-"+(filterWidht-dropWidht)+"px"
//             })
//         }
//         if(pos>posOld+100){
//             filter.css({
//                 left:0
//             })
//         }
//         if(posOld>pos+100){
//             filter.css({
//                 left:"-"+(filterWidht-dropWidht)+"px"
//             })
//         }
//         })
// }).on("mouseup",()=>{
//     drop.off("mousemove")
// }).on("mouseleave",()=>{
//     drop.off("mousemove")
// })              

//  drop.on("touchstart",function(e){        
//     let filterWidht=filter.width()
//     let dropWidht=drop.width()
//     let filterLeft = parseInt(filter.css("left"))
//     let posOld=e.targetTouches[0].pageX
    
    
//     drop.on("touchmove",function(e){
//        let pos=e.targetTouches[0].pageX

//        if(parseInt(filter.css("left"))<=0){
//         filter.css({
//             left:filterLeft+(pos-posOld)+"px"
//         })
//     }else{
//         filter.css({
//             left:0
//         })
//     }
//     if((parseInt(filter.css("left")))<(filterWidht-dropWidht)*-1){
//         filter.css({
//             left:"-"+(filterWidht-dropWidht)+"px"
//         })
//     }
//     if(pos>posOld+100){
//         filter.css({
//             left:0
//         })
//     }
//     if(posOld>pos+100){
//         filter.css({
//             left:"-"+(filterWidht-dropWidht)+"px"
//         })
//     }
//     }).on("touchleave",function(e){
//         $(e.target).off("touchmove")
//     }).on("touchup",function(e){
//         $(e.target).off("touchmove")
//     })

// }
// )
