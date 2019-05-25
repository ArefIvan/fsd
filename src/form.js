import "./blocks/dropdown-counter-list/dropdown-counter-list";
import dropdate from "./blocks/dropdown-date/dropdown-date";
import "./blocks/dropdown-counter-plus/dropdown-counter-plus"
import rating from "./components/rate/rate";
import range from './components/range/range';



function catalogItemRange(elem){   
    let rangeForm = range.range
    $(elem).each(function(){
        rangeForm($(this));
    });
}
catalogItemRange(".range-slide")

function catalogItemRate(elem){
    let rateEl= document.querySelectorAll(elem)
    let rateForm = rating.rate
    
    rateEl.forEach(function(item){
        console.log(item)
        rateForm(item);
    });
}
catalogItemRate(".rate")

function catalogItemGetRate(elem){
    let rateEl= document.querySelectorAll(elem)
    
    let getRateForm = rating.getRate
    rateEl.forEach(function(item){
        console.log(item)
        getRateForm(item);
    });
}
catalogItemGetRate(".rate--input")
function catalogItemDropdownDate(field){
    console.log(1)
    let dropdownDatefilter=dropdate.dropdownDatefilter;
    let dateFormatShort = dropdate.dateFormatShort;

    let fieldsEl = document.querySelectorAll(field)
  
  
    fieldsEl.forEach(item =>{
        dropdownDatefilter(item)
    })

}
catalogItemDropdownDate(".field-dropdown--date-filter")