<?php


// DEBUG: show what was sent from the form
echo "<pre>POST DATA:\n";
print_r($_POST);
echo "</pre>";

if (isset($_POST['uname']) && isset($_POST['password'])) {

    function validate($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Validate inputs
    $uname    = validate($_POST['uname']);
    $password = validate($_POST['password']);

    // Check if any field is empty
    if (empty($uname)) {
        header("location: index.php?error=User Name is required");
        exit();
    }
    else if (empty($password)) {
        header("location: index.php?error=Password is required");
        exit();
    }
    else {
        $sql = "SELECT * FROM  USERS WHERE User_name = '$uname' AND password='$password'";
        $result = mysqli_query($conn, $sql)
    }

} else {
    header("location: index.php?error=Invalid request");
    exit();
}
?>


