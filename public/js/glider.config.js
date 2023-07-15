new Glider(document.querySelector('.glider'), {
  slidesToScroll: 1,  // MOBILE
  slidesToShow: 1,
  draggable: true,
  dots: '.dots',
  
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px  // TABLET
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 3
      }
    },{
      // screens greater than >= 1024px  // DESKTOP
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        duration: 3
      }
    }
  ]
});