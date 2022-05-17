    let hotelLogo = $('.hover_menu li a'),
        highlight = $('.highlight'),
        hotelContent = $('#hotel_content > div');
       


      
        hotelLogo.click(function(e){
            e.preventDefault();
            let newLeft = $(this).position().left;
            let newWidth = $(this).outerWidth();
            let targetIdx = $(this).index();
            hotelContent.hide();
            hotelContent.eq(targetIdx).show();
            
    
            highlight.animate({left:newLeft,width:newWidth},300);
        });





   