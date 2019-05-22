import counter from  "../../components/counter/counter";
import "../../components/dropdown/dropdown";


let dropCountList = $(".dropdown--counter-list")

let counts = dropCountList.find(".counter__count")
counts.each(function(){
    console.log
    counter($(this))
})