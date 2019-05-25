export default function like(el){
    let valueInp= el.querySelector(".like__value")
    let count = el.querySelector(".like__count")
    let checkbox = el.querySelector(".like__input[type=checkbox]")

    valueInp.value = +(count.innerHTML)
  
    checkbox.onchange = function(){
        if(checkbox.checked){
            valueInp.value++
            count.innerHTML=valueInp.value
        }
        else{
            valueInp.value--
            count.innerHTML=valueInp.value
        }
        
    }
}

