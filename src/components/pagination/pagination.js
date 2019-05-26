/* * * * * * * * * * * * * * * * *
 * Pagination
 * javascript page navigation
 * * * * * * * * * * * * * * * * */

var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 1;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<li class=\"pagination__item\"><a href=\"#\">' + i + '</a></li>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i class=\"pagination__separator\">...</i><li class=\"pagination__item\"><a href=\"#\">' + Pagination.size + '</a></li>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<li class=\"pagination__item\"><a href=\"#\">1</a></li><i class=\"pagination__separator\">...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {

        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        
        let a = Pagination.e.querySelectorAll('.pagination__item a');
        let itemPag = Pagination.e.querySelectorAll('.pagination__item');
        if(Pagination.page==1){
            Pagination.btns[0].style.opacity="0"
        }else{
            Pagination.btns[0].style.opacity="1"
        }
        if(Pagination.page==Pagination.size){
            Pagination.btns[1].style.opacity="0"
        }else{
            Pagination.btns[1].style.opacity="1"
        }

        a.forEach((item,i) => {

            if(+item.innerHTML== Pagination.page){

                itemPag[i].classList.add('pagination__item--current');
            }
            item.addEventListener('click', Pagination.Click, false);
            
        });

    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        
        if (Pagination.size < Pagination.step * 2 + 6) {
            
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 2);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 , Pagination.size + 1);
        }
        else {
            // Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(nav) {
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<div class=\"pagination__btn pagination__btn--prev material-icons\"></div>', // previous button
            '<ul class=\"pagination__items\"></ul>',  // pagination container
            '<div class=\"pagination__btn pagination__btn--next material-icons\"></div>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.querySelector('.pagination__items');
        Pagination.btns= e.querySelectorAll('.pagination__btn');
        Pagination.Buttons(Pagination.btns);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.querySelector('.pagination__list'), {
        size: 15, // pages size
        page: 1,  // selected page
        step: 1  // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);