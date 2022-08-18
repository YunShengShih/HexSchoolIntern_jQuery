$(document).ready(function() {
    $('.dropdown').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      $('.dropdown-open').slideToggle();
    });

    //swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        speed: 2000,
        loop: true,

        autoplay: {
          delay: 1500,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
      
      });

    //lightbox
    lightbox.option({
      'resizeDuration': 100,
      'wrapAround': true
    })
  });