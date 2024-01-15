<?php

use Core\Response;
function dd($value){
    echo '<pre>';
    var_dump($value);
    echo '</pre>';
}

function base_path( $path){
    return BASE_PATH.($path);
}

function ref_path($path){
    return base_path('Core/'.$path);
}


function abort($code = Response::NOT_FOUND){

    http_response_code($code);
    
    require base_path("views/{$code}.php");

}
