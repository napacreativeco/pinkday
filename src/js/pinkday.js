(function($) {

    // play video
    $("#player").ready(function() {
      $('#player').play();



    });

    $(document).on('ready', function() {

    });

    function fadeInLogo() {
      gsap.to('.logo', {
        opacity: 1,
        duration: 0.4,
        delay: 1
      });
    }
    fadeInLogo();

    function fadeInEnter() {
      gsap.to('.enter-button', {
        opacity: 1,
        duration: 0.3,
        bottom: '80px',
        delay: 1.8
      });
    }
    fadeInEnter();

    // hide
    $('.enter-button > span').on('click', function() {
        $('.enter').hide();
    });

    // cart
    $('.cart-nav-opener').on('click', function() {
      $('body').addClass('js-my-cart-open');
    });
    $('.cart-drawer--close').on('click', function() {
      $('body').removeClass('js-my-cart-open');
    });

})(jQuery);