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

/* ======================= ACCORDION ======================= */ 

let Menu = $('.way > ul > li');


Menu.click(function(e){
 e.preventDefault();
 $(this).find('ul').slideToggle();
 $(this).siblings().find('ul').slideUp();
});


/* ======================= MAP API ======================= */ 

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5562855, 127.0052953), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc = '../images/map_logo.svg', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(163, 58), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.5562855, 127.0052953); // 마커가 표시될 위치입니다
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition, 
        image: markerImage // 마커이미지 설정 
    });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);  


