<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   ?>

    <form action="madlipsgame.php" method="get">
        color: <input type="text" name="color"> 
        <br>
        plural noun: <input type="text"name="pluralnoun">
        <br>
        celebrity: <input type="text"name="celebrity">
    <input type="submit">
    <input type="reset">
    </form>

    <br><br>
    <?php 
       $color = $_GET["color"];
       $pluralnoun = $_GET["pluralnoun"];
       $colebrity = $_GET["celebrity"];
       echo "i love $color <br>";
       echo "this is red in $pluralnoum <br>";
       echo "i love $celebrty <br>";
    ?>

</body>
</html>