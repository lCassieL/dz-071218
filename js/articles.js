getArticles();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});

$('.closeWin').click(function(){
   $('div#modalWindow').css('display', 'none'); 
   $('div#modalWindowEdit').css('display', 'none'); 
   return false;
});


$('#add_article_form').on('submit', function(e){
    e.preventDefault();
    var $that = $(this),
    formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
    $.ajax({
      url: location.origin + '/api/add',
      type: 'post',
      contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
      data: formData,
      dataType: 'json',
      success: function(json){
        if(json){
         $that.replaceWith(json);
        }
      },
      complete: function(){
        $("#articles").empty();
        $('div#modalWindow').css('display', 'none');
        $("input[type=text],input[type=file], textarea").val("");
        getArticles();
      }
    });
  });

$('#edit_article_form').on('submit', function(e){
    e.preventDefault();
    var $that = $(this),
    formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
    $.ajax({
      url: location.origin + '/api/edit',
      type: 'post',
      contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
      data: formData,
      dataType: 'json',
      success: function(json){
        if(json){
         $that.replaceWith(json);
        }
      },
      complete: function(){
       $('#edit_article_form input[type="hidden"]').remove();
       $("#articles").empty();
       $('div#modalWindowEdit').css('display', 'none');
       getArticles();   
      }
    });
  });