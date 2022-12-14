<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;

$id=$_POST['id'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vente-voiture";

// Créer une connexion
$conn = mysqli_connect($servername, $username, $password, $dbname);
// vérifier la connexion
if (!$conn) {
  die("La connexion a échouée: " . mysqli_connect_error());
}
$sql ="
UPDATE car 
SET nombre_vue = IFNULL(nombre_vue, 0) + 1
WHERE Id_car = '".$id."'
";


if (mysqli_query($conn, $sql)) {

} else {
  echo "Erreur: " . $sql . "
" . mysqli_error($conn);
}

mysqli_close($conn);



     ?>
 