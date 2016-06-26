$(document).ready(function(){
  var item = $('li');
  var subitem = $('.submenu_item');
  var submenuItem = $('.submenu_subitem');
  var inputList = $('.myClass');

  item.hover(function() {
    $(this).find('.submenu_item').stop().fadeToggle('fast');
});

  subitem.mouseover(function(){
    $(this).find('.subitem').stop().animate({
      top: '-11px',
      opacity: 'show',
    }, 500,
      'jswing');
    $(this).children('.submenu_item > a').stop().animate({
      color:'#588ba9',
    });
  });

  subitem.mouseout(function(){
    $(this).find('.subitem').stop().animate({
      opacity: 'hide',
      top: '115px',
    },
    500);
    $(this).children('.submenu_item > a').stop().animate({
      color:'#fff',
    });
  });

  submenuItem.mouseover(function(){
    $(this).find('a').stop().animate({
      backgroundColor: '#ccc',
      color:'#555',
    }, 500);
  });

  submenuItem.mouseout(function(){
    $(this).find('a').stop().animate({
      color:'#fff',
      backgroundColor: '#555',
    }, 300);
  });

});
