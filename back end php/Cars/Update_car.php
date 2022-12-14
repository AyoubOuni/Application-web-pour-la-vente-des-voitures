<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$marque=$_POST['marque'];
$modele=$_POST['modele'];
$annee=$_POST['annee'];
$energie=$_POST['energie'];
$boite=$_POST['boite'];
$puissance=$_POST['puissance'];
$nombreportes=$_POST['nombreportes'];
$photo=$_FILES['photo'];
$photo_ancienne=$_POST['photo_ancienne'];
$prix=$_POST['prix'];
$id=$_POST['id'];
//

$uploadfile1 = $photo_ancienne;
echo $uploadfile1 ;
if(file_exists($uploadfile1))
   unlink($uploadfile1);


//

$uploaddir = 'images/'.$id.'/';
$uploadfile = $uploaddir . basename($_FILES['photo']['name']);


move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile) ;


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
$sql = "UPDATE `car` SET  `Marque`='$marque', `Modele`='$modele', `Annee`='$annee',`price`='$prix',`Energie`='$energie', `Boite`='$boite', `Puissance`='$puissance', `Nombre_porte`='$nombreportes',`url`='$uploadfile' Where `Id_car`='$id' ";

if (mysqli_query($conn, $sql)) {
  echo "Nouveaux enregistrement ajouter avec succés";
} else {
  echo "Erreur: " . $sql . "
" . mysqli_error($conn);
}

mysqli_close($conn);



     ?>
 