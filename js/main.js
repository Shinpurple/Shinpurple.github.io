$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true
});
    
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
    let hotelLogo = $('.tab_menu li'),
        highlight = $('.highlight'),
        hotelContent = $('#hotel_content>div'),
        contentLeft = $('#hotel_content>div:nth-child(-n+3)'),
        hotelBg = $('.tab_wrapper')
      
        hotelLogo.click(function(e){
            e.preventDefault();
            let newLeft = $(this).position().left;
            let newWidth = $(this).outerWidth();
            let targetIdx = $(this).index();
            
            activeTab(targetIdx);

            highlight.animate({left:newLeft,width:newWidth},300);
            contentLeft.css({left:newLeft});
            let newBg = $(this).find('a').attr('data-bg');
            hotelBg.css({backgroundImage:'url('+ newBg +')'});
        });

        function activeTab(num){
            hotelContent.hide();
            hotelContent.eq(num).fadeIn();
        }
        
        hotelLogo.eq(0).trigger("click");
    




   
