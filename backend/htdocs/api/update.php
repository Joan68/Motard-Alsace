<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  if ((int)$request->data->ID_BALADE < 1 || trim($request->data->NOM_BALADE) == '' || trim($request->data->DATE_DEPART) == '' || trim($request->data->LIEU_RDV) == '') {
    return http_response_code(400);
  }
    
  // Sanitize.
  $ID_BALADE = mysqli_real_escape_string($con, (int)$request->data->ID_BALADE);
  $NOM_BALADE = mysqli_real_escape_string($con, trim($request->data->NOM_BALADE));
  $DATE_DEPART = mysqli_real_escape_string($con, trim($request->data->DATE_DEPART));
  $LIEU_RDV = mysqli_real_escape_string($con, trim($request->data->LIEU_RDV));

  // Update.
  $sql = "UPDATE `BALADE` SET `NOM_BALADE`='$NOM_BALADE',`DATE_DEPART`='$DATE_DEPART',`LIEU_RDV`='$LIEU_RDV' WHERE `ID_BALADE` = '{$ID_BALADE}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}