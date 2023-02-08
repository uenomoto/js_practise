(()=>{

  $(function() {
      $('.box1').mouseover(function(){
        $('.box1').addClass('box1-ext');
      });
      $('.box1').mouseout(function(){
          $('.box1').removeClass('box1-ext');
      });
  });

  $(function() {
      $('.box2').on('click',function(){
        $('.box2').addClass('box2-ext');
      });
      $('.box2').mouseout(function(){
          $('.box2').removeClass('box2-ext');
      });
  });

  $(function (){
    $('.jquery').on('click', function(){
    $(this).css('color','red');
  });
    $('.jquery').mouseout(function(){
    $(this).css('color','black');
  });
});

})();


