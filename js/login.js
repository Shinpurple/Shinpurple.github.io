let tabMenu = $('.login_menu li'),
    tabContent = $('#login_content > div');

    tabMenu.click(function(e){
        e.preventDefault();
        let targetIdx = $(this).index();
            
        activeTab(targetIdx);
    });
    function activeTab(num){
        tabContent.hide();
        tabContent.eq(num).show();

        tabMenu.removeClass('active');
        tabMenu.eq(num).addClass('active');
    }
    tabMenu.eq(0).trigger("click");

    $('.hamburger_btn').on('click',function(e){
        e.preventDefault();
        $('.allMenu').toggleClass('open');
        $(this).toggleClass('active'); 
           
     });

     let depth1 = $('.allMenu .main_gnb>li');
     let depth2 = $('.allMenu .main_gnb>li>ul');

    depth1.click(function(e){
        // e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    depth1.eq(0).trigger("click");