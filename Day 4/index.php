<?php
$servername="localhost";
$username= "root";
$password= "";
$database="test";
$port=3307;

$conn=new mysqli($servername, $username, $password, $database,$port);

if ($conn->connect_error) {
  die("connection failed". $conn->connect_error);
}
echo "connected successfully";
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script> 
</head>
<body>
    <form action="" id="tripform"> <h1>TRIP FORM</h1>
  <label for="name">Name:</label>
  <input type="text" name="name" id="name"><br>
  <label for="age">Age:</label>
  <input type="number" name="age" id="age"><br>
  <label for="email">Email:</label>
  <input type="text" name="email" id="email"><br>
  <label for="gender">Gender:</label>
  <input type="gender" name="gender" id="gender"><br>
  <label for="desc">Description:</label>
  <textarea name="desc" id="desc"></textarea><br>
  <input type="submit">
</form>

<script src="index.js"></script>
</body>
</html>
