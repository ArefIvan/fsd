function rate(el){
let rating = el.dataset.rating-1
let items = el.querySelectorAll(".rate__item")
items.forEach((item,i) => {
    if(i<=rating){
        item.classList.remove("rate__item--star-border")
        item.classList.add("rate__item--star")
    }else{
        item.classList.remove("rate__item--star")
        item.classList.add("rate__item--star-border")
    }
});
   
}
function getRate(el){
    let rat= el.dataset.rating
    let items = el.querySelectorAll(".rate__item")

    items.forEach((item,i) => {
        item.onmouseover = (e)=> {
            el.dataset.rating = i+1;
            rate(el)
        }
        
    })
   
}

rate(document.querySelector(".rate"))
getRate(document.querySelector(".rate"))