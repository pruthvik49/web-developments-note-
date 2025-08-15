<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
   <link rel="stylesheet" href="pp.css">

</head>
<body>
    <form action="loging.php" method="post">
    <h2>LOGING</h2>
    <?php if(isset($_GET['error'])) { ?>
         <p class="error"><?php echo $_GET['error']; ?></p>
         <?php } ?>
    <lable>User name</label>
     <input type="text" name="uname" placeholder="User Name" />
<br>
    <lable>Password</label>
<input type="password" name="password" placeholder="Password" />
    <br>
    <button type="submit">Loging</button>

    </form>
</body>
</html>