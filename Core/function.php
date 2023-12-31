<?php

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
