import "./js/jquery.touchSwipe.min.js"
let filter = $(".filterroom")
let drop = $(".filterroom__drop")

drop.swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData){        
        let filterWidht=filter.width()
        let dropWidht=drop.width()
        if(direction=="right"){
            filter.animate({
                left:0
            })
        }
        if(direction=="left"){
            filter.animate({
                left:"-"+(filterWidht-dropWidht)+"px"
            })
        }
    }
    
}

)
