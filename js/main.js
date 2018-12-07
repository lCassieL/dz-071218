function showArticles(articles) {
    $('#articles').append('<ul id="list"></ul>');
    $(articles).each(function (i, article) {
        $('#articles ul').append(
            '<li>' + 
            article.name + ' ' + 
            article.text + ' ' + 
            article.date_of_changes + ' ' + 
            article.picture + 
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