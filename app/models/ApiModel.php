<?php

class ApiModel extends Model {
    
    public function getArticles(){
        if($this->db->connect_errno===0){
            $query='select * from articles';
            $res = $this->db->query($query);
            if($res){
               return $res->fetch_all(MYSQLI_ASSOC);
            } else{
                return false;
            }
        }
    }

    public function getArticle($id){
        if($this->db->connect_errno===0){
            $query='select * from articles where id='.$id;
            $res = $this->db->query($query);
            if($res){
               return $res->fetch_all(MYSQLI_ASSOC);
            } else{
                return false;
            }
        }
    }
    
    public function addArticle($name, $text, $picture, $date_of_change){
        if($this->db->connect_errno===0){
            $query='INSERT INTO articles (name, text, picture, date_of_change) 
            values ("'.$name.'", "'.$text.'", "'.$picture.'", "'.$date_of_change.'")';
            $this->db->query($query);
        }
    }
    
    public function deleteArticle($id){
        if($this->db->connect_errno === 0){
            $query = 'DELETE from articles where id='.$id;
            $this->db->query($query);
        }
    }

    public function editArticle($id, $name, $text, $date_of_changes, $picture){
        if($this->db->connect_errno===0){
            if($picture != null){
            $query = "UPDATE articles SET name = '".$name."', text = '".$text."', date_of_changes = '".$date_of_changes."', picture = '".$picture."' WHERE id = ".$id;
            $this->db->query($query);
            } else {
                $query = "UPDATE articles SET name = '".$name."', text = '".$text."', date_of_changes = '".$date_of_changes."' WHERE id = ".$id;
            $this->db->query($query);
            }
        }
    }
}

