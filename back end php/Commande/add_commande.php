<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$id=$_POST['id'];
$id_user=$_POST['id_user'];
$id_car=$_POST['id_car'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vente-voiture";

//////////////////////////////////////////////////////


// Créer une connexion
$conn = mysqli_connect($servername, $username, $password, $dbname);
// vérifier la connexion
if (!$conn) {
  die("La connexion a échouée: " . mysqli_connect_error());
}
$sql = "INSERT INTO `commande` ( `Id_commande`,`Id_user`, `Id_car`) VALUES('$id','$id_user','$id_car')";

if (mysqli_query($conn, $sql)) {
  echo "Nouveaux enregistrement ajouter avec succés";
} else {
  echo "Erreur: " . $sql . "
" . mysqli_error($conn);
}

mysqli_close($conn);



     ?>
 