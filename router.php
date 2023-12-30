<?php
$uri= parse_url($_SERVER['REQUEST_URI'])["path"];

$router = require 'routes.php';


function route($uri, $router){
    if(array_key_exists($uri, $router)){
        require $router[$uri];
    }else{
        abort();
    }
};
function abort($code = Response::NOT_FOUND){

    http_response_code($code);
    
    require "views/{$code}.php";

}

route($uri, $router);

