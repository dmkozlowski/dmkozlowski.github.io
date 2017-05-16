$(document).ready(function() {

  $(window).scroll(function() {

      var y = $(this).scrollTop();

      $('.title-wrapper').css({
        'transform' : 'translate(0px, '+ y /3 + '%)'
      });

  });

    $('a[href^="#"]').on('click',function (e) {
    	    e.preventDefault();

    	    var target = this.hash;
    	    var $target = $(target);

    	    $('html, body').stop().animate({
    	        'scrollTop': $target.offset().top
    	    }, 900, 'swing', function () {
    	        window.location.hash = target;
    	    });
    	});


});
