$(document).ready(function() {

  $(window).scroll(function() {

      var y = $(this).scrollTop();

      $('.call-wrapper').css({
        'transform' : 'translate(0px, '+ y /6 + '%)'
      });

      $('.title-wrapper').css({
        'transform' : 'translate(0px, '+ y /3 + '%)'
      });

    if (y >= 100) {
      $('.intro').addClass('fade-in');
      $('.intro').removeClass('hidden');
    }

    if (y >= 525) {
      $('.contents-left').addClass('slide-left');
      $('.contents-left').removeClass('hidden');
      $('.contents-right').addClass('slide-right');
      $('.contents-right').removeClass('hidden');
    }

    if (y >= 1000) {
      $('.top-left').addClass('slide-left');
      $('.top-left').removeClass('hidden');
      $('.top-right').addClass('slide-right');
      $('.top-right').removeClass('hidden');
    };

    if (y >= 2000) {
      $('.bottom').addClass('slide-up');
      $('.bottom').removeClass('hidden');
    }

    });

    function mainReveal() {
      $('.call-wrapper').addClass('fade-in');
      $('.call-wrapper').removeClass('hidden');
    }


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

  setTimeout(mainReveal,1000);


});
