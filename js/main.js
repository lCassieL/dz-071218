function showArticles(articles) {
    $('#articles').append('<ul id="list"></ul>');
    $(articles).each(function (i, article) {
	var a = new Date(article.date_of_change*1000);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	
        $('#articles ul').append(
            '<li>' + 
            '<div>' + article.name + '</div>' + 
            '<div>' + article.text + '</div>' + 
            '<div><img src="images/'+article.picture + '" width="400" height="200"></div>' +
	    '<div>' + time + '</div>' +
            '<form class="del" method="post"><input type="submit" value="del"/><input type="hidden" value="' + 
            article.id + '"></form>' +
            '<form class="edit" method="post"><input type="submit" value="edit"/><input type="hidden" value="' + 
            article.id + '"></form>' + 
            '</li>'
        );
    });

    $("#list .del").submit(function () {
        var xhr = new XMLHttpRequest();

        var id = $(this).find('input[type="hidden"]').val();
        var body = 'id=' + encodeURIComponent(id);
        xhr.open("POST", location.origin + '/api/delete', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                $("#articles").empty();
                getArticles();
            }
        };
        xhr.send(body);
        return false;
    });

    $("#list .edit").submit(function () {
        $('#edit_article_form input[type="hidden"]').remove();
        var id = $(this).find('input[type="hidden"]').val();
        $("#edit_article_form").append('<input type="hidden" value="' + 
        id + '">');
        var xhr = new XMLHttpRequest();
	var body = 'id=' + encodeURIComponent(id);
        xhr.open("POST", location.origin + '/api/id', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                getArticles();
            }
        };
        xhr.send(body);
        $('div#modalWindowEdit').css('display', 'block');
        return false;
    });
}
function getArticles() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', location.origin + '/api/index');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = xhr.responseText;
            var articles = JSON.parse(json);
            if (articles) {
                showArticles(articles);
            }
        }
    };
    xhr.send();
}