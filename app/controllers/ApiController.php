<?php

class ApiController extends Controller
{

    public function action_index()
    {
        $this->model = new ApiModel();
        $articles = $this->model->getArticles();
        $json = json_encode($articles);
        header('Content-type: application/json; charset=utf-8');
        echo $json;
    }


    public function action_add()
    {
        $name = filter_input(INPUT_POST, 'name');
        $text = filter_input(INPUT_POST, 'text');
        $date_of_changes = filter_input(INPUT_POST, 'date_of_changes');
        $picture = filter_input(INPUT_POST, 'picture');
        if ($name !== null || $text !== null || $date_of_changes !== NULL || $picture !== NULL) {
            $this->model = new ApiModel();
            $this->model->addArticle($name, $text, $date_of_changes, $picture);
	}
    }
    public function action_delete(){
	$id = filter_input(INPUT_POST, 'id');
	if(!is_null($id)){
	    $this->model = new ApiModel();
            $this->model->deleteArticle($id);
	}
    }

}