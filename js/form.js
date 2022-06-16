$('#fullpage').fullpage({
  autoScrolling:true,
  scrollHorizontally: true
});


/* ================== form ================== */

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
      $(selectedHotel).addClass('clicked');
      deselect();
    });
    function deselect(){
      $("input:radio[name='hotel']").prop('checked',false);
    }
$('.hotel_btn').on('click',function(e){
  // $(this).addClass('clicked');
  $(selectedHotel).removeClass('clicked');
  activeTab(targetIdx);
});




let selectDining = $('.select_dining .select-list li'),
    selectedDining=$('.selected-value'),
    diningContent = $('#dining_content>div');

selectDining.click(function(e){
    e.preventDefault();
    let targetIdx = $(this).index();
    
    activeTab(targetIdx);

    let selectedContent = $(this).text();
    selectedDining.text(selectedContent);
    
  });

function activeTab(num){
  diningContent.removeClass('show');
  diningContent.eq(num).addClass('show');
}


