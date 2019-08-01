<?php

include_once '../conf.php';

// Unset token and user data from session
unset($_SESSION['token']);
unset($_SESSION['userData']);

// Reset OAuth access token
//$gClient->revokeToken();

// Destroy entire session
session_destroy();

// Redirect to login-page
header("Location:../");
?>
