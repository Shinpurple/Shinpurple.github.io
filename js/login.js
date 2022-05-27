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