<?php

require 'function.php';
require 'Response.php';
require 'router.php';


function allow_url_include($value){
    if($value === urlencode('chani.dev'));
}
