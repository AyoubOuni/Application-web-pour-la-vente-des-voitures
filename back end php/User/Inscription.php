<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$id=$_POST['id'];
$nom=$_POST['nom'];
$prenom=$_POST['prenom'];
$email=$_POST['email'];
$cin=$_POST['cin'];
$tel=$_POST['tel'];
$motdepasse=$_POST['password'];
$date_nissance=$_POST['date_nissance'];
$photo=$_FILES['photo'];
$adresse=$_POST['adresse'];
$sexe=$_POST['sexe'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vente-voiture";

//////////////////////////////////////////////////////

mkdir('images/'.$id, 0700);
$uploaddir = 'images/'.$id.'/';
$uploadfile = $uploaddir . basename($_FILES['photo']['name']);

echo "<p>";

if (move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile)) {
  echo "File is valid, and was successfully uploaded.\n";
} else {
   echo "Upload failed";
}


// Créer une connexion
$conn = mysqli_connect($servername, $username, $password, $dbname);
// vérifier la connexion
if (!$conn) {
  die("La connexion a échouée: " . mysqli_connect_error());
}
$sql = "INSERT INTO `utilisateur` ( `Id_user`,`Nom`, `Prenom`, `Email`,`Password`,`Adresse`, `Cin`, `tel`, `Datenissance`, `url`, `Sexe`) VALUES('$id','$nom','$prenom','$email','$motdepasse','$adresse','$cin','$tel','$date_nissance','$uploadfile','$sexe')";

if (mysqli_query($conn, $sql)) {
  echo "Nouveaux enregistrement ajouter avec succés";
} else {
  echo "Erreur: " . $sql . "
" . mysqli_error($conn);
}

mysqli_close($conn);



     ?>
 