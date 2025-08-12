<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   ?>
    <form action="url_paramiter.php" method="get">
        Name: <input type="text" name ="name"><br>
        Age: <input type="text" name = "age">
        <input type="submit">
    </form><br>
    <?php
       echo $_GET["name"] & $_GET["age"];
       ?>
</body>
</html>