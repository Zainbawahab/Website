'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    var sticky = new Waypoint.Sticky({
    	element: $('#nav-site2')[0]
    });


  	/*function makeSticky(){
  		var myWindow = $(window),
  			myHeader = $('#nav-site2');

  		myWindow.scroll(function(){
  			if(myWindow.scrollTop() === 0) {
  			  myHeader.removeClass('sticky-nav');
  			} else {
  				myHeader.addClass('sticky-nav');
  			}
  		});
  	}

  	$(function(){
  		makeSticky();
  		$('#nav-site2').Waypoint('sticky');
  	});*/

  /*$('.is-zoomable').fluidbox({

  });*/

  /*This code was for fluidbox*/
  /*$('.Image').on('click',function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });*/

  $('#nav-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).add('#slidebar').toggleClass('is-open'); 
  });

  $('.img-holder').imageScroll({
    coverRatio: 0.75
  });

 




  });
})(jQuery);
