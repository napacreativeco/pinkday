(function($) {

    $('.sandwich-box').on('click', function() {

        if ( !$('.sandwich').hasClass('opened') ) {

            $('.sandwich').addClass('opened');

            // Open Menu
            gsap.to('.navbar-mobile--menu', {
                height: 'auto',
                duration: 0.45,
                ease: Power4.easeOut,
                onStart: function() {
                    gsap.to('.stuff-middle', {
                        x: -100,
                        duration: 0.26,
                        ease: Power4.easeOut,
                        onComplete: function() {
                            gsap.to('.stuff-top', {
                                rotate: 45,
                                y: 6,
                            });
                            gsap.to('.stuff-bottom', {
                                rotate: -45,
                                y: -6,
                            });
                        }
                    });
                },
                onComplete: function() {
                    console.log('open');
                }
            });



        } else {

            $('.sandwich').removeClass('opened');

            // Close Menu
            gsap.to('.navbar-mobile--menu', {
                height: '0px',
                duration: 0.7,
                onStart: function() {
                    gsap.to('.stuff-middle', {
                        x: 0,
                        onComplete: function() {
                            gsap.to('.stuff-top', {
                                rotate: 0,
                                y: 0,
                                duration: 0.26,
                                ease: Power4.easeOut
                            });
                            gsap.to('.stuff-bottom', {
                                rotate: 0,
                                y: 0,
                            });
                        }
                    });
                },
                onComplete: function() {
                    console.log('closed');
                }
            });

        }


    });


})(jQuery);