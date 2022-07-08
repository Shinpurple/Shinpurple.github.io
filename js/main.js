$('.multiple_slide').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:940,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
$('.m_controls .next').click(function(e){
  e.preventDefault();
  $('.multiple_slide').slick('slickNext');
});
$('.m_controls .prev').click(function(e){
  e.preventDefault();
  $('.multiple_slide').slick('slickPrev');
});

$('.multiple_slide').slick('slickGoTo', 0);

/* ================== RSV_FORM ================== */
    
let rsvMenu = $('.form_menu li'),
rsvContent = $('.rsv_content>div');

rsvMenu.on('click',function(e){
    e.preventDefault();
    let targetIdx = $(this).index();
    
    rsvContent.eq(targetIdx).toggleClass('up');
    rsvContent.eq(targetIdx).siblings().removeClass('up');
    rsvMenu.eq(targetIdx).toggleClass('bold');
    rsvMenu.eq(targetIdx).siblings().removeClass('bold');
});


$('.select').on('click',function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});



let option=$('.select-list a'),
  selectedHotel = $('.selected-hotel'),
  hotelBtn = $('.hotel_btn input');

  option.click(function(e){
  e.preventDefault();
  let selectedContent = $(this).text();
  selectedHotel.text(selectedContent);
  selectedHotel.addClass('clicked');
  $("input:radio[name='hotel']").prop('checked',false);
  });

$('.hotel_btn').on('click',function(e){
// $(this).addClass('clicked');
selectedHotel.removeClass('clicked');
activeTab(targetIdx);
});



let selectDining = $('.select_dining .select-list li'),
selectedDining=$('.selected-value'),
diningContent = $('#dining_content>div');

selectDining.click(function(e){
e.preventDefault();
let targetIdx = $(this).index();

diningContent.removeClass('show');
diningContent.eq(targetIdx).addClass('show');

let selectedContent = $(this).text();
selectedDining.text(selectedContent);

});
//   selectDining.eq(0).trigger("click");

/* ================== datepicker ================== */


$('input[name="daterange"]').daterangepicker({
locale: {

opens: 'center',
drops: 'auto',
// "alwaysShowCalendars":true,
 "daysOfWeek": ["S", "M", "T", "W", "T", "F", "S"],
    "monthNames": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
},
alwaysShowCalendars:true,
autoApply: true,
function(start, end, label) {
console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));}
});



$(".roomNguest .add").click(function() {
var target = $(this).parent().find('.num');
var currentNum = parseInt(target.val());
target.val(++currentNum);  
});

$(".roomNguest .substract").click(function() {
var target = $(this).parent().find('.num');
var currentNum = parseInt(target.val());
if(currentNum > 0){
  target.val(--currentNum);  
}    
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

/* ===================== ACCORDION ===================== */

let hotelMenu = $('.accordion_menu > li');
let accordionBg = $('.accordion');


hotelMenu.click(function(e){
 e.preventDefault();
 $(this).find('ul').slideToggle();
 $(this).siblings().find('ul').slideUp();
 $(this).toggleClass('active');
 $(this).siblings().removeClass('active');
 let newBg = $(this).attr('data-acd-bg');
 accordionBg.css({backgroundImage:'url('+ newBg +')'});
});

 




let fullpageNumber = 0;

$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin, destination, direction, trigger){
		var origin = this;
        fullpageNumber = destination.index;

        console.log(destination.index);

	
        if(destination.index != 0 && destination.index != 3){
            $('header').addClass('dark');         
        } else{
            $('header').removeClass('dark'); 
        }
		
	}  
});
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
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    depth1.eq(0).trigger("click");

   
  
    /* ===================== BX SLIDER ===================== */
    let mainSlide =  $('.main_slide');
    mainSlide.bxSlider({
        auto:true,
        pause:5000,
        autoControls:true,
        // autoControlsCombine:true
        // stopAutoOnClick:true
    });
    $(".bx-stop").click(function(){
        mainSlide.stopAuto(); 
        $(".bx-stop").hide(); 
        $(".bx-start").show(); 
    
        // return false; 
    });   
    
    $(".bx-start").click(function(){
        mainSlide.startAuto();   
        $(".bx-start").hide();  
        $(".bx-stop").show(); 
    
        // return false; 
      }); 

    $(".bx-start").hide();
    $(document).on('click','.bx-next', '.bx-prev','bx-start','bx-stop',function() {
        mainSlide.stopAuto();
        mainSlide.startAuto();
    });

  
    
    // $('.multi_slide').bxSlider({
    //     minSlides:1,
    //     maxSlides:3,
    //     moveSlides:3,
    //     slideWidth:420,
    //     slideMargin:30
        
    // });
    

    $('.hotel_slide').bxSlider({
        // mode:'fade',
        slideWidth:900
    });
    
  

   

