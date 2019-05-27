/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

 let  Pagination = function(){
     
 

    this.code = '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    this.Extend= function(e) {
        
        this.size = +(e.dataset.size) || 100;
        this.page = +(e.dataset.page) || 1;
        this.step = +(e.dataset.step) || 1;
    },

    // add pages by number (from [s] to [f])
    this.Add = function(s, f) {
        for (var i = s; i < f; i++) {
            this.code += '<li class=\"pagination__item\"><a href=\"#\">' + i + '</a></li>';
        }
    },

    // add last page with separator
    this.Last = function() {
        this.code += '<i class=\"pagination__separator\">...</i><li class=\"pagination__item\"><a href=\"#\">' + this.size + '</a></li>';
    },

    // add first page with separator
    this.First = function() {
        this.code += '<li class=\"pagination__item\"><a href=\"#\">1</a></li><i class=\"pagination__separator\">...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    this.Click = (event)=> {
        this.page = +event.target.innerHTML;
        this.Start();
    },

    // previous page
    this.Prev = ()=> {

        this.page--;
        if (this.page < 1) {
            this.page = 1;
        }
        this.Start();
    },

    // next page
    this.Next = ()=> {
        this.page++;
        if (this.page > this.size) {
            this.page = this.size;
        }
        this.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    this.Bind = function() {
        
        let a = this.e.querySelectorAll('.pagination__item a');
        let itemPag = this.e.querySelectorAll('.pagination__item');
        console.log(a);
        console.log(itemPag);
        if(this.page==1){
            this.btns[0].style.opacity="0"
        }else{
            this.btns[0].style.opacity="1"
        }
        if(this.page==this.size){
            this.btns[1].style.opacity="0"
        }else{
            this.btns[1].style.opacity="1"
        }

        a.forEach((item,i) => {

            if(+item.innerHTML== this.page){

                itemPag[i].classList.add('pagination__item--current');
            }
            item.addEventListener('click', this.Click, false);
            
        });

    },

    // write pagination
    this.Finish = function() {
        this.e.innerHTML = this.code;
        this.code = '';
        this.Bind();
    },

    // find pagination type
    this.Start = function() {
        if (this.size < this.step * 2 + 6) {

            
            this.Add(1, this.size + 1);
        }
        else if (this.page < this.step * 2 + 1) {
            this.Add(1, this.step * 2 + 2);
            this.Last();
        }
        else if (this.page > this.size - this.step * 2) {
            this.First();
            this.Add(this.size - this.step * 2 , this.size + 1);
        }
        else {
            // Pagination.First();
            this.Add(this.page - this.step, this.page + this.step + 1);
            this.Last();
        }
        this.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    this.Buttons = function(nav) {
        nav[0].addEventListener('click', this.Prev, false);
        nav[1].addEventListener('click', this.Next, false);
    },

    // create skeleton
    this.Create = function(e) {

        var html = [
            '<div class=\"pagination__btn pagination__btn--prev material-icons\"></div>', // previous button
            '<ul class=\"pagination__items\"></ul>',  // pagination container
            '<div class=\"pagination__btn pagination__btn--next material-icons\"></div>'  // next button
        ];

        e.innerHTML = html.join('');
        this.e = e.querySelector('.pagination__items');
        this.btns= e.querySelectorAll('.pagination__btn');
        this.Buttons(this.btns);
    },

    // init
    this.Init = function(e) {
       
        this.Extend(e);
        this.Create(e);
        this.Start();
     }
    
};


export default Pagination

/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

// var init = function() {
//     Pagination.Init(document.querySelector('.pagination__list'), {
//         size: 15, // pages size
//         page: 1,  // selected page
//         step: 1  // pages before and after current
//     });
// };

// document.addEventListener('DOMContentLoaded', init, false);