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
    
    activeTab(targetIdx);

    let selectedContent = $(this).text();
    selectedDining.text(selectedContent);
    
  });

function activeTab(num){
  diningContent.removeClass('show');
  diningContent.eq(num).addClass('show');
}




/* ================== datepicker ================== */
var dateFormat = "mm/dd/yy",
      from = $( "#from" ).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 2,
          selectOtherMonths:false,
          dayNames:['M','T','W','T','F','S','S'],
          monthNamesShort:['1','2','3','4','5','6','7','8','9','10','11','12']
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }




    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();

    //

