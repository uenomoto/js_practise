(()=>{

$(function(){
  $('button').on('click', function(){
    $('.children').children().css('color','red');
  });
});

})();