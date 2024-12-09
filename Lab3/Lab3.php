<?php

$cookie_name = $_POST['sname'];
$cookie_value = $_POST['sphone'];
setcookie($cookie_name, $cookie_value, time() + 1800, "/");

if(!isset($_COOKIE[$cookie_name])) {
    echo "Cookie named {$cookie_name} is not set.";
}
else {
    echo "Cookie {$cookie_name} is set.";
    echo "Value is: $_COOKIE[$cookie_name]";
}

?>