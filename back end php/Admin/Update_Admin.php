<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$email=$_POST['email'];
$password=$_POST['password'];
$username=$_POST['username'];
$datenissance=$_POST['datenissance'];
$sexe=$_POST['sexe'];
$adresse=$_POST['adresse'];
$tel=$_POST['tel'];
$id=$_POST['id'];
$cin=$_POST['cin'];

$servername = "localhost";
$username_db = "root";
$mdp = "";
$dbname = "vente-voiture";

// Créer une connexion
$conn = mysqli_connect($servername, $username_db, $mdp, $dbname);
// vérifier la connexion
if (!$conn) {
  die("La connexion a échouée: " . mysqli_connect_error());
}
$sql = "UPDATE `admin` SET  `Nom`='$nom', `Prenom`='$prenom', `Email`='$email',`Adresse`='$adresse',`Sexe`='$sexe', `tel`='$tel', `Datenissance`='$datenissance', `Username`='$username',`Cin`='$cin' Where `Id`='$id' ";

if (mysqli_query($conn, $sql)) {
  echo "Nouveaux enregistrement ajouter avec succés";
} else {
  echo "Erreur: " . $sql . "
" . mysqli_error($conn);
}

mysqli_close($conn);



     ?>
 