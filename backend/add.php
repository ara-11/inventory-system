<?php
// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data->name, $data->quantity, $data->price)) {
    $name = $conn->real_escape_string($data->name);
    $quantity = intval($data->quantity);
    $price = floatval($data->price);

    $sql = "INSERT INTO products (name, quantity, price) VALUES ('$name', $quantity, $price)";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "Product added"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => $conn->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "All fields required"]);
}
