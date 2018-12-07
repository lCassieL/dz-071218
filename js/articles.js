//getArticles();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});
//$("#add_article_form").submit(function () {
//    
//    var
//	    name = $(this).find('input[name="name"]').val(),
//	    text = $(this).find('input[name="text"]').val(),
//        date_of_changes = $(this).find('input[name="date_of_changes"]').val(),
//        picture = $(this).find('input[name="picture"]').val();
//    var xhr = new XMLHttpRequest();
//    var body = 'name=' + encodeURIComponent(name) + 
//    '&text=' + encodeURIComponent(text) + 
//    '&date_of_changes=' + encodeURIComponent(date_of_changes) + 
//    '&picture=' + encodeURIComponent(picture);
//    xhr.open("POST", location.origin + '/api/add', true);
//    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//    xhr.onreadystatechange = function () {
//	if (xhr.readyState === 4 && xhr.status === 200) {
//	    $("#articles").empty();
//	    getArticles();
//	}
//    };
//    $('div#modalWindow').css('display', 'none');
//    xhr.send(body);
//    return false;
//
//});
$(function(){
    console.log('okjs0');
$('#add_article_form').on('submit', function(e){
    e.preventDefault();
    console.log('okjs1');
    var $that = $(this),
    formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
    console.log(location.origin + '/api/add');
    console.log(formData);
    $.ajax({
      url: location.origin + '/api/add',
      type: 'post',
      contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
      data: formData,
      dataType: 'json',
      success: function(json){
	  console.log('okjs2');
        if(json){
	    console.log('okjs3');
//          $that.replaceWith(json);
	  console.log('okjs4');
        }
      },
      error: function(jqXHR, exception)
{
if (jqXHR.status === 0) {
alert('Not connect.\n Verify Network.'); //  не включен инет
} else if (jqXHR.status === 404) {
alert('Requested page not found. [404]'); // нет такой страницы
} else if (jqXHR.status === 500) {
alert('Internal Server Error [500].'); // нет сервера такого
} else if (exception === 'parsererror') {
// ошибка в коде при парсинге
alert(jqXHR.responseText);
} else if (exception === 'timeout') {
alert('Time out error.'); // недождался ответа
} else if (exception === 'abort') {
alert('Ajax request aborted.'); // прервался на стороне сервера
} else {
alert('Uncaught Error.\n' + jqXHR.responseText); // не знает что это
}
} // error
    });
  });
  });
$("#edit_article_form").submit(function () {
    var
        id = $(this).find('input[type="hidden"]').val(),
	    name = $(this).find('input[name="name"]').val(),
	    text = $(this).find('input[name="text"]').val(),
        date_of_changes = $(this).find('input[name="date_of_changes"]').val(),
        picture = $(this).find('input[name="picture"]').val();
    var xhr = new XMLHttpRequest();
    var body = 'id=' + encodeURIComponent(id) +
    '&name=' + encodeURIComponent(name) + 
    '&text=' + encodeURIComponent(text) + 
    '&date_of_changes=' + encodeURIComponent(date_of_changes) + 
    '&picture=' + encodeURIComponent(picture);
    xhr.open("POST", location.origin + '/api/edit', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
        $('#edit_article_form input[type="hidden"]').remove();
	    $("#articles").empty();
	    getArticles();
	}
    };
    $('div#modalWindowEdit').css('display', 'none');
    xhr.send(body);
    return false;
});