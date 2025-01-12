<?php
require_once 'config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Page</title>
</head>
<body>
    <h1>Order Page</h1>
    <!-- Display your products or services here -->
    <form action="checkout.php" method="POST">
        <!-- Include product details and quantity fields -->
        <input type="submit" value="Proceed to Checkout">
    </form>
</body>
</html>
