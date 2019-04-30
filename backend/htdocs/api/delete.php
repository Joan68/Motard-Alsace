<?php
require 'connect.php';
// Extract, validate and sanitize the id.
$id = ($_GET['ID_BALADE'] !== null && (int)$_GET['ID_BALADE'] > 0)? mysqli_real_escape_string($con, (int)$_GET['ID_BALADE']) : false;
if(!$id)
{
  return http_response_code(400);
}
// Delete.
$sql = "DELETE FROM `BALADE` WHERE `ID_BALADE` ='{$id}' LIMIT 1";
if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}