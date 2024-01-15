<?php
 namespace Core;
 use PDO;

 //create a db class to handle and query database.

class Database{

    public $connection;

    protected $statement;

    
 //created the db connection
    public function __construct($config, $username='root', $password=""){
        $dsn = "mysql:". http_build_query($config, '', ';');

        $this->connection = new PDO($dsn, $username, $password, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    }


    //enable query string for db, including a parameter to avoid inline strings

    public function query($query, $params=[]){
        $this->statement = $this->connection->prepare($query);
 
       $this->statement->execute($params);
 
         return $this;
     }

     //wrapping the fetch Api into a personal method 
     public function find(){
        return $this->statement->fetch();
    }
    public function get(){
        return $this->statement->fetchAll();
    }
   

    public function findorfail(){
        $result = $this->find();
        if(!$result){
            abort();
        }
        return $result;
    }
 
}