var body = getComputedStyle(document.body);
var array = body.height;
//console.log(array.split('px'));
array = array.split('px');
//console.log(+array[0]);

window.onscroll = function() {
  var body = getComputedStyle(document.body);
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('indicator-inner').style.width = (scrolled+450)/((+array[0])/100) + "%";
  //console.log(scrolled);
}

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
