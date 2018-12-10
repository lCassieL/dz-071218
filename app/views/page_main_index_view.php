<h2>Students</h2>
<div id="articles"></div>
<div id="modalWindow">
    <form id="add_article_form" method="post" enctype="multipart/form-data">
        <label> Название статьи
            <input type="text" name="name" placeholder="name"/>
        </label>
        <label> Текст статьи
            <textarea name="text" cols="100" rows="20"></textarea>
        </label>
        <label> Картинка
            <input type="file" name="avatar" id="avatar"/>
        </label>
	<input type="submit" id="submit" value="add"/>
        <button class="closeWin">close</button>
    </form>
</div>

<div id="modalWindowEdit">
    <form id="edit_article_form" method="post">
	<input type="text" name="name" placeholder="name"/>
	<input type="text" name="text" placeholder="text"/>
	<input type="text" name="date_of_changes" placeholder="date_of_changes"/>
	<input type="file" multiple="multiple" accept=".txt,image/*"/>
	<input type="submit" value="edit"/>
    </form>
</div>
<button id="btn">add article</button>

<script src="/js/main.js" type="text/javascript"></script>
<script src="/js/articles.js" type="text/javascript"></script>