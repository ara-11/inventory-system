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

if (isset($data->id)) {
    $id = intval($data->id);

    $sql = "DELETE FROM products WHERE id = $id";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "Product deleted"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => $conn->error]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Missing product ID"]);
}
