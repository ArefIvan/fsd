export function rate(el,rate){
let rating =(rate!=undefined)?rate:el.dataset.rating-1
let items = el.querySelectorAll(".rate__item")
// let inp = el.querySelector(".rate__input")
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
    let rating= el.dataset.rating-1
    let items = el.querySelectorAll(".rate__item")

    el.onmouseover=()=>{
        let rat;
        items.forEach((item,i) => {
                item.onmouseover = (e)=> {
                rate(el,i)
            }
            item.onclick=(e,rat)=>{
                rating=i
            }
            // item.onclick= ()=>{
            //     console.log(rat)
            //     el.dataset.rating=rat+1
            //     rate(el)
            // }     
        })
   
    el.onmouseout=()=>{
        rate(el,rating)
    }
        
    }
   
}

export default {rate,getRate}