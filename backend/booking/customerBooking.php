<?php

  require "../db.php";
  
  $response = new stdClass();

  $userId = $_POST["userId"];

  $query = "
    SELECT bookings.id, bookings.package_item, bookings.status, servc.property_name
    FROM `bookings_tbl` bookings, `services_tbl` servc
    WHERE bookings.id_user = $userId AND servc.id = bookings.id_service
  ";

  $statement = $connect->prepare($query);
  $statement->execute();
  
  $result = $statement->fetchAll(PDO::FETCH_ASSOC);
  $arr = [];

  if ($result !== false) {
    foreach($result as $res) {
      array_push($arr, $res);
    }
  }

  $response->data = new stdClass();
  $response->data->bookings = $arr;

  echo json_encode($response);

?>