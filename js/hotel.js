$('.hotel_slide').bxSlider({
    // mode:'fade',
    slideWidth:1320,
    mode:'fade'
});

// let animateTarget = $('[data-effect]');

// $(window).scroll(function(){
//     let sct = $(this).scrollTop();
//     animateTarget.each(function(){
//         let targetOst = animateTarget.eq().offsetTop - 400;
//         if(sct > targetOst){
//             let targetClass = animateTarget.eq().attr('data-effect');
//             animateTarget.addClass(targetClass);
//         }
//     });
// });


let animateTarget = document.querySelectorAll('[data-effect]');

window.addEventListener('scroll',function(){
    let sct = window.scrollY;

    animateTarget.forEach(function(item,index){
        let targetOst = item.offsetTop - 500;
        if(sct > targetOst){
            let targetClass = item.getAttribute('data-effect');
            item.classList.add(targetClass);
        }
    });
});

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

    console.log($(window).scrollTop);

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

