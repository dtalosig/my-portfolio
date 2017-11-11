$(document).ready(function(){
	  $(".navbar-header").css({"padding" : "10", "transition" : ".5s", "opacity" : "1"});  	
	  $(".navbar-modifier").css({"opacity" : "1", "padding" : "10"});  	
	  $(".navbar-collapse").css({"padding" : "10", "padding-bottom" : "0", "transition" : ".5s"});  

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navbar-header").css({"padding" : "0", "transition" : ".5s", "opacity" : "0.5"});
	    $(".navbar-modifier").css({"opacity" : "0.9"});
	    $(".navbar-collapse").css({"padding-left" : "10", "padding-right" : "10", "padding-top" : "0", "padding-bottom" : "0", "transition" : ".5s"});
	  }

	  else{
		  $(".navbar-header").css({"padding" : "10", "transition" : ".5s", "opacity" : "1"});  	
		  $(".navbar-modifier").css({"opacity" : "1", "padding-top" : "10"});  	
		  $(".navbar-collapse").css({"padding" : "10", "padding-bottom" : "0", "transition" : ".5s"});	
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