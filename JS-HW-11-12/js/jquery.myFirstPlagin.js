(function($) {
  $.fn.myCarousel = function(){
        var leftEl = $('.carousel_left');
        var rightEl = $('.carousel_right');
        var elementsList = $('.carousel-list');

        var pixelsOffset = 120;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;

        leftEl.click(function() {
          if (currentLeftValue != maximumOffset){
          currentLeftValue += 120;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
          }
        });

        rightEl.click(function() {
          if (currentLeftValue != minimumOffset){
          currentLeftValue -= 120;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
          }
        });
}
    return this;
})(jQuery);
