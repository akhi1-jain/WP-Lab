<?php
    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $conn = new mysqli('localhost', 'root', '', 'student_database');
        $sql = "select * from student_login where username = '{$username}' and password = '{$password}'";
        $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) > 0) {
            echo "Login Successful.";
        }
        else {
            echo "Username and password does not exist.";
        }
    }
?>