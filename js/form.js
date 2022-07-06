// $('#fullpage').fullpage({
//   autoScrolling:true,
//   scrollHorizontally: true
// });


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

      diningContent.removeClass('show');
      diningContent.eq(targetIdx).addClass('show');
      diningContent.eq(targetIdx).addClass('bold');

      let selectedContent = $(this).text();
      selectedDining.text(selectedContent);
     
  });







/* ================== datepicker ================== */


$('input[name="daterange"]').daterangepicker({
  locale: {

    opens: 'center',
    // "alwaysShowCalendars":true,
     "daysOfWeek": ["S", "M", "T", "W", "T", "F", "S"],
      "monthNames": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  },
  alwaysShowCalendars:true,
  autoApply: true,
 function(start, end, label) {
  console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));}
});

  

$(".add").click(function() {
  var num = $(this).siblings('input');
  num.val(parseInt(num.val()) + 1);
});

$(".substract").click(function() {
  var num = $(this).siblings('input');
  num.val(parseInt(num.val()) - 1);
});


