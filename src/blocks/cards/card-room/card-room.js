import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
$(document).ready(function(){
    function catalogItemSlider(elem){   
        $(elem).each(function(){
            $(this).owlCarousel(
                {
                    items:1,
                    loop:true,
                    dots:true,
                    nav:true,
                    
                }
            )
        });
    }
    catalogItemSlider(".card-room__slider")
})
    