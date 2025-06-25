<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->id, $data->name, $data->quantity, $data->price)) {
    $id = intval($data->id);
    $name = $conn->real_escape_string($data->name);
    $quantity = intval($data->quantity);
    $price = floatval($data->price);

    $sql = "UPDATE products SET name='$name', quantity=$quantity, price=$price WHERE id=$id";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "Product updated"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => $conn->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
}
