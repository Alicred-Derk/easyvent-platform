<?php

  require "../db.php";
  
  $response = new stdClass();

  $id = $_POST["id"];
  
  $query = "
    SELECT servc.*
    FROM services_tbl servc
    WHERE servc.id = $id
  ";

  $statement = $connect->prepare($query);
  $statement->execute();
  
  $result = $statement->fetch(PDO::FETCH_ASSOC);

  if ($result !== false) {
    $response->data = new stdClass();
    $response->data->service = $result;

    echo json_encode($response);
    exit;
  }

  $response->data = new stdClass();
  $response->data->service = new stdClass();

  echo json_encode($response);

?>