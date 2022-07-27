     /* ======================== MENU ======================== */
  

     $('.hamburger_btn').on('click',function(e){
        e.preventDefault();
        $('.allMenu').toggleClass('open');
        $(this).toggleClass('active'); 
           
        if(fullpageNumber != 0 && fullpageNumber != 3){
            $('header').addClass('dark');
        }else{
            $('header').toggleClass('dark');
        }
     });

     let depth1 = $('.allMenu .main_gnb>li');
     let depth2 = $('.allMenu .main_gnb>li>ul');

    depth1.click(function(e){
        // e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    depth1.eq(0).trigger("click");

   
    
  /* ======================== FILTER ======================== */

let filterBtn = $('.event .buttons button');
let eventList = $('.event > ul > li');
let loadMore = $('.load_more');

filterBtn.click(function(e){
    e.preventDefault();
    filterBtn.removeClass('active');
    $(this).addClass('active');

    eventList.addClass('hidden');

    let targetClass = $(this).attr('data-filter');
    let targetList = $(targetClass);

    targetList.removeClass('hidden');

    if(targetClass == 'all'){
        let unit = 6;
        eventList.slice(0, unit).removeClass('hidden');
        loadMore.addClass('active');

        loadMore.click(function(e){ 
            e.preventDefault();
            unit+=unit;
            eventList.slice(0, unit).removeClass('hidden');
            // if(eventList.length % unit == 0){ 
            // loadMore.removeClass('active'); 
            //     }
            });
   }else{
    loadMore.removeClass('active');
   }
});
filterBtn.eq(0).trigger("click");

 /* ======================== GO TO TOP ======================== */

let topBtn = $('a.top');

$(window).scroll(function(){
    if($(this).scrollTop() > 300){
        topBtn.fadeIn();
    }else{
        topBtn.fadeOut();
    }
});
topBtn.click(function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop:0},500);
});


