<?php

session_start();
$userISloggedIn = false;

if ($_SESSION["userData"]) {
    if ($_SESSION["userData"]["oauth_uid"]) {
        $userISloggedIn = true;
    }
}

if ($userISloggedIn) {

    include_once("../conf.php");

} else {
    //
    //  Redirect to app
    //
    header('HTTP/1.0 401 Unauthorized');
    ?>
    <script type="text/javascript">
        window.location.href = '/warframe-mastery-helper/warframe-mastery-helper/public/';
    </script>
    <?php
    die();
}

?>
