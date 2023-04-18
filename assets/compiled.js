(function($) {

    $(document).ready(function() {
      $('#player').play();
    });


    $('.enter-button > span').on('click', function() {
        $('.enter').hide();
    });

    // function cartSlideOut() {

    //   $('.cart-drawer').addClass('active');

    //   gsap.to('.cart-drawer', {
    //     x: -400,
    //   });

    // }

    $('.cart-nav-opener').on('click', function() {
      $('body').addClass('js-my-cart-open');
    });
    $('.cart-drawer--close').on('click', function() {
      $('body').removeClass('js-my-cart-open');
    });



})(jQuery);