export function rate(el){
let rating = el.dataset.rating-1
let items = el.querySelectorAll(".rate__item")
let inp = el.querySelector(".rate__input")
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
export function getRate(el){
    let rat= el.dataset.rating
    let items = el.querySelectorAll(".rate__item")

    items.forEach((item,i) => {
        item.onmouseover = (e)=> {
            el.dataset.rating = i+1;
            rate(el)
        }
        
    })
   
}

export default {rate,getRate}