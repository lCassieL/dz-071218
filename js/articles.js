getArticles();
$("#btn").click(function () {
    $('div#modalWindow').css('display', 'block');
});
$("#add_article_form").submit(function () {
    var
	    name = $(this).find('input[name="name"]').val(),
	    text = $(this).find('input[name="text"]').val(),
        date_of_changes = $(this).find('input[name="date_of_changes"]').val(),
        picture = $(this).find('input[name="picture"]').val();
    var xhr = new XMLHttpRequest();
    var body = 'name=' + encodeURIComponent(name) + 
    '&text=' + encodeURIComponent(text) + 
    '&date_of_changes=' + encodeURIComponent(date_of_changes) + 
    '&picture=' + encodeURIComponent(picture);
    xhr.open("POST", location.origin + '/api/add', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
	if (xhr.readyState === 4 && xhr.status === 200) {
	    $("#articles").empty();
	    getArticles();
	}
    };
    $('div#modalWindow').css('display', 'none');
    xhr.send(body);
    return false;
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