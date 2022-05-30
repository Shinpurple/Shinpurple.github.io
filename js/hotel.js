$('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    afterLoad: function(origin, destination, direction, trigger){
		var origin = this;

        console.log(destination.index);

	
        if(destination.index != 2){
            $('header').addClass('dark');
        } else{
            $('header').removeClass('dark'); 
        }
		
	}  
});

$('.hotel_slide').bxSlider({
    // mode:'fade',
    slideWidth:1320
});