$(document).ready(function(){
  var tabs = $('.tabs');
  var hint = $('.hints')
  var active = $('#tab-1')

  $('.tab').hide();

  tabs.find('a').on('click', function(e){
    e.preventDefault();
    tabs.find('.current').removeClass('current');
    $(this).addClass('current');
    $(this.hash).show('slow');
    active.animate({height: '450px', width: '900px'});
    $(this.hash).siblings().hide();
  });


  hint.find('input').hover(function() {
    $(this).next('p').animate({opacity: 'show'}, 'slow');
  }, function() {
    $(this).next('p').animate({opacity: 'hide'}, 'fast');
  })
});
