    /* ===================== MAIN SLIDE ===================== */
    $('.main_slide').bxSlider();
    $('.multi_slide').bxSlider({
        minSlides:1,
        maxSlides:3,
        moveSlides:3,
        slideWidth:420,
        slideMargin:30
    });
    
    
    
    /* ===================== MEET OUR HOTEL ===================== */
    let hotelLogo = $('.hover_menu li a'),
        highlight = $('.highlight'),
        hotelContent = $('#hotel_content div');
      
        hotelLogo.click(function(e){
            e.preventDefault();
            let newLeft = $(this).position().left;
            let newWidth = $(this).outerWidth();
            let targetIdx = $(this).index();
            activeTab(targetIdx);

            highlight.animate({left:newLeft,width:newWidth},300);
        });

        function activeTab(num){
            hotelContent.hide();
            hotelContent.eq(num).show();
        }
        activeTab(0);
    




   