$(document).ready(function() {
  var html = $('#template').html();

  var info = [
    {
      title : 'Попович Дмитро Миколайович',
     student : 'Студент навчальної програми GoFrontEnd',
     reasons : 'Хочу навчатись фронтенд, тому що:',
     reason_1 : 'бажаю отримати сучасну та актуальну професію',
     reason_2 : 'з/п не відповідає очікуванням',
     reason_3 : 'та й, чорт забирай, це ж цікаво',
     my_phone : 'Мій контактний телефон',
     my_phone_number: '+380936529969',
     my_facebook : 'Мій профіль в Facebook',
     link : '<a href="https://www.facebook.com/dima.popovich.3" target="_blank">Facebook.com</a>',
     feedback : 'Мій фідбек:',
     not_mine : 'Забори - не моє'
      },
  ];

  var content = tmpl(html, {
    data : info
  });

  $("body").append(content);

  $(".carousel").myCarousel();
});
