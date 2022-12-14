<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$email=$_POST['email'];
$password=$_POST['password'];
$pdo = new PDO('mysql:host=localhost;dbname=vente-voiture', 'root', '');
$query = $pdo->prepare("SELECT * FROM admin WHERE email = ? and password =?");
$query->execute([$_POST['email'],$_POST['password']]);
$user = $query->fetch();
if ($user==0){
    json_encode('connection failed');
}
else{
    json_encode('connection valider');
}
