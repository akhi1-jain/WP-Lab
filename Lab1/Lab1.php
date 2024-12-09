<?php
    $pattern = "/[0-9]/";

    $bID = $_POST["bookID"];
    $bName = $_POST["bookName"];
    $bPrice = $_POST["bookPrice"];
    $bCopies = $_POST["bookCopies"];

    if(empty($bID) || empty($bName) || empty($bPrice) || empty($bCopies)) {
        echo "Fields cannot be empty.";
    }
    elseif (!preg_match($pattern, $bPrice)) {
        echo "Price cannot be anything else than digits.";
    }
    elseif ($bPrice <= 0 || $bCopies <= 0) {
        echo "Price and Copies cannot be negative.";
    }
    else {
        echo "Form data is validated";
    }
?>