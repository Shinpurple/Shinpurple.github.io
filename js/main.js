    /* ===================== MAIN SLIDE ===================== */
    $('.main_slide').bxSlider();
    
    
    
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
    




   