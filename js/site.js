// $(function() {
//     "use strict";

//     $('.view-project').magnificPopup({
//         type: 'inline',
//         fixedContentPos: false,
//         fixedBgPos: true,
//         overflowY: 'auto',
//         closeBtnInside: true,
//         preloader: false,
//         midClick: true,
//         removalDelay: 300,
//         mainClass: 'my-mfp-zoom-in'
//     });

//     $('.view-project').magnificPopup({
//         // delegate: 'a', 
//         removalDelay: 500, //delay removal by X to allow out-animation
//         callbacks: {
//           beforeOpen: function() {
//              this.st.mainClass = this.st.el.attr('data-effect');
//           }
//         },
//         midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
//       });
// })
jQuery(document).ready(function($) {


    $('.view-project').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    var portfolioItems = $('.portfolio-items > li');
    $('.portfolio-filters > li > a').on('click', function(e) {
        e.preventDefault();
        var groupName = $(this).attr('data-group');
        $('.portfolio-filters > li > a').removeClass('active');
        $(this).addClass('active');
        // loop through each portfolio item
        if(groupName == 'all') {
            portfolioItems.each(function() {
                $(this).show();
            });
        }else{
            portfolioItems.each(function() {
                var categ = $(this).attr('data-groups');
                if(categ.indexOf(groupName) > -1) {
                    $(this).show();
                }else{
                    $(this).hide();
                }
            })
        }
    });

})