$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navbar-modifier").css({"opacity" : "0.8"});
	  }

	  else{
		  $(".navbar-modifier").css({"opacity" : "1"});  	
	  }
  })

   $('a[href^="#"]').on('click', function (e) {
	     e.preventDefault();

	     var target = this.hash,
	         $target = $(target);

	     $('html, body').stop().animate({
	         'scrollTop': $target.offset().top - 80
	     }, 900, 'swing', function () {
	         window.location.hash = target;
	     });
 	});
})