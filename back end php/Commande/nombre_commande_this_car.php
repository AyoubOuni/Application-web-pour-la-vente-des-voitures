<?php
header('Access-Control-Allow-Origin: *'); header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE'); header('Access-Control-Allow-Headers: Content-Type') ;

$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "vente-voiture"; 
$id = '';
$carid=$_POST['id'];
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    case 'POST':
      $sql = "SELECT count(*) as n FROM commande WHERE Id_car=?"; // SQL with parameters
$stmt = $con->prepare($sql); 
$stmt->bind_param("i", $carid);
$stmt->execute();
$result = $stmt->get_result(); // get the mysqli result

      break;
}
 
// run SQL statement
 
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