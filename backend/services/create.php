<?php

  require "../db.php";

  $userId = $_POST["userId"];
  $category = $_POST["category"];
  $status = $_POST["status"];
  $property_name = addslashes($_POST["property_name"]);
  $property_description = addslashes($_POST["property_description"]);
  $images_url = addslashes($_POST["images_url"]);
  $highlights = addslashes($_POST["highlights"]);
  $amenities = addslashes($_POST["amenities"]);
  $location = addslashes($_POST["location"]);
  $packages_list = addslashes($_POST["packages_list"]);

  $mutate = "
    INSERT INTO `services_tbl`
    (`category`, `property_name`, `property_description`, `images_url`, `highlights`, `amenities`, `location`, `packages_list`, `status`)
    VALUES ('$category','$property_name','$property_description','$images_url','$highlights','$amenities','$location','$packages_list','$status')
  ";

  $statement = $connect->prepare($mutate);
  $statement->execute();

  $lastId = $connect->lastInsertId();

  $response = new stdClass();
  $response->data = new stdClass();
  $response->data->message = "Successfully created new service.";
  $response->data->id = $lastId;

  $mutate = "
    INSERT INTO `user_providers_tbl`
    (`id_user`, `id_service`, `role`, `status`)
    VALUES ('$userId','$lastId','Admin','Active')
  ";

  $statement = $connect->prepare($mutate);
  $statement->execute();

  print_r(json_encode($response));

?>