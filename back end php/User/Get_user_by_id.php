<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;
$ID=$_POST['id'];
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "vente-voiture";
$method = $_SERVER['REQUEST_METHOD'];
$id = '';

// Créer une connexion
$con = mysqli_connect($servername, $username, $password, $dbname);
// vérifier la connexion
if (!$con) {
  die("La connexion a échouée: " . mysqli_connect_error());
}
switch ($method) {
    case 'POST':
$sql = "Select * From utilisateur where `Id_user`='$ID'";
break;
}

// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'POST') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
}else {
    echo mysqli_affected_rows($con);
}
$con->close();
?>
 