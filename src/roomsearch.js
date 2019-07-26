
let filter = $(".filterroom")
let drop = $(".filterroom__drop")
let rooms = $(".roomsearch__rooms")
console.log(drop)

drop.dblclick(function(){        
        let filterWidht=filter.width()
        let dropWidht=drop.width()
        console.log(parseInt(filter.css("left")))

        if(parseInt(filter.css("left"))<0){
            filter.animate({
                left:0
            })
        }
        if(parseInt(filter.css("left"))==0){
            filter.animate({
                left:"-"+(filterWidht-dropWidht)+"px"
            })
        }

    }
)
drop.on("thoch")
// drop.swipe({
//     swipeClose:
//     function(event, direction, distance, duration, fingerCount, fingerData){        
//         let filterWidht=filter.width()
//         let dropWidht=drop.width()

//         if(direction=="left"){
//             filter.animate({
//                 left:"-"+(filterWidht-dropWidht)+"px"
//             })
//         }
//     }
// })
