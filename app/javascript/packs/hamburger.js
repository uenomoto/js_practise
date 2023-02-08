(()=>{

  $(function() {
    $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('.hm-menu').fadeToggle();
    event.preventDefault();
    });
  });

})();
