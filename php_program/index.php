<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php     ?>
    <form action = "index.php" method="get">
    name: <input type="text" name="username">
    <br>
    age: <input type="text" name="age">
    <input type="submit">
    <input type="reset">
    </form>
  your name is <?php echo $_GET["username"]?><br>
  your age is <?php echo $_GET["age"] ?>
</body>
</html>