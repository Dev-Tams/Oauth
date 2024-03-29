<?php



Const BASE_PATH = __DIR__.'/../';

spl_autoload_register(function ($class){
    $class=  str_replace('\\','/', $class);

    require base_path($class .'.php');
});

require BASE_PATH.('Core/function.php');

require ref_path('Response.php');

require ref_path('Router.php');




$router = new \Core\Router();
$routes = require base_path('routes.php');
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$method= $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];
$router->route($uri, $method);