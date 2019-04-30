<?php
require 'connect.php';
// Get the posted data.
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if(trim($request->data->NOM_BALADE) === '' || trim($request->data->DATE_DEPART) === '' || trim($request->data->LIEU_RDV) === '')
  {
    return http_response_code(400);
  }
	
  // Sanitize.
  $NOM_BALADE = mysqli_real_escape_string($con, trim($request->data->NOM_BALADE));
  $DATE_DEPART = mysqli_real_escape_string($con, trim($request->data->DATE_DEPART));
  $LIEU_RDV = mysqli_real_escape_string($con, trim($request->data->LIEU_RDV));
    
  // Store.
  $sql = "INSERT INTO `BALADE`(`ID_BALADE`,`NOM_BALADE`,`DATE_DEPART`,`LIEU_RDV`) VALUES (null,'{$NOM_BALADE}','{$DATE_DEPART}','{$LIEU_RDV}')";
  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    
    $BALADES = [
      'NOM_BALADE' => $NOM_BALADE,
      'DATE_DEPART' => $DATE_DEPART,
      'LIEU_RDV' => $LIEU_RDV,
      'ID_BALADE' => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$BALADES]);
  }
  else
  {
    http_response_code(422);
  }
}