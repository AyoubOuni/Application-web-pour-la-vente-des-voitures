<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$id=$_POST['id'];
echo $id ;
 
$pdo = new PDO('mysql:host=localhost;dbname=vente-voiture', 'root', '');
$query = $pdo->prepare("Delete  from utilisateur where Id_user=?");
$query->execute([$id]);
// die if SQL statement failed
if (!$query) {
    echo "Deleting invalide";
}
 else{
    echo "Deleting valide";
 }


?>