<?php
header("Access-Control-Allow-Origin: *"); // ← VERY IMPORTANT
require 'db.php';

$sql = "SELECT * FROM products ORDER BY id DESC";
$result = $conn->query($sql);

$products = [];

while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);
?>
