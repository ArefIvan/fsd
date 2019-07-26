import "./js/jquery.touchSwipe.min.js"
let filter = $(".filterroom")
let drop = $(".filterroom__drop")
let rooms = $(".roomsearch__rooms")
console.log(1)

rooms.swipe({

    swipeOpen:function(event, direction, distance, duration, fingerCount, fingerData){        
        let filterWidht=filter.width()
        let dropWidht=drop.width()
        console.log(12)
        if(direction=="right"){
            filter.animate({
                left:0
            })
        }
    }
    
}

)
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
