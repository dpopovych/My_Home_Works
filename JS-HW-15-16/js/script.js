$(function(){
  $('#search').submit(function(e){
    e.preventDefault();

    var request = $('#user_req').val();

      $.ajax({
          url:'https://pixabay.com/api/?key=1600249-74d886ee86f77dada711e25e1&q='+request+'&image_type=photo',
        dataType: "jsonp",
        success:  function(data){
            var ul = document.createElement("ul");
            $.each(data.hits, function(i, val){
              var li = document.createElement("li");
              var inner = '<a href="'+val.Url+'" title="'+val.Url+'" target="_blank">'+val.Title+"</a>";
              if (val.Summary != "" && val.Summary != "undefined") {
                inner += " - "+val.Summary;
              }

              var inner = '<img src="' + val.webformatURL + '">';

              li.innerHTML = inner;
              ul.appendChild(li);
        });
        $('.results').html(ul);
      },
      });
  });
});
