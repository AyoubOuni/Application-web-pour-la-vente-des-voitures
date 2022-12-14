<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$id=$_POST['Id'];
$marque=$_POST['marque'];
$modele=$_POST['modele'];
$annee=$_POST['annee'];
$energie=$_POST['energie'];
$boite=$_POST['boite'];
$puissance=$_POST['puissance'];
$nombreportes=$_POST['nombreportes'];
$photo=$_FILES['photo'];
$prix=$_POST['prix'];
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
$sql = "INSERT INTO `car` ( `Id_car`,`Marque`, `Modele`, `Annee`,`price`,`Energie`, `Boite`, `Puissance`, `Nombre_porte`,`url`) VALUES('$id','$marque','$modele','$annee','$prix','$energie','$boite','$puissance','$nombreportes','$uploadfile')";

if (mysqli_query($conn, $sql)) {
  echo "Nouveaux enregistrement ajouter avec succés";
} else {
  echo "Erreur: " . $sql . "
" . mysqli_error($conn);
}

mysqli_close($conn);



     ?>
 