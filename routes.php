<?php



$router->get("/","controller/user/login.php");
$router->get('/signup','controller/reg-user/signup.php');

$router->post("/register", "controller/reg-user/store.php");