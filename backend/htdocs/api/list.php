<?php
/**
 * Returns the list of BALADES.
 */
require 'connect.php';
    
$BALADE = [];
$sql = "SELECT ID_BALADE, NOM_BALADE, DATE_DEPART, LIEU_RDV FROM BALADE";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $BALADE[$cr]['ID_BALADE'] = $row['ID_BALADE'];
    $BALADE[$cr]['NOM_BALADE'] = $row['NOM_BALADE'];
    $BALADE[$cr]['DATE_DEPART'] = $row['DATE_DEPART'];
    $BALADE[$cr]['LIEU_RDV'] = $row['LIEU_RDV'];
    $cr++;
  }
    
  echo json_encode(['data'=>$BALADES]);
}
else
{
  http_response_code(404);
}