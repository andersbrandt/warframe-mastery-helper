<?php
/*
 *
 *  This file need to be served standalone,
 *  with no depencies to conf.php
 *
 */

session_start();
$userISloggedIn = false;

if (!empty($_SESSION["userData"])){
    if ($_SESSION["userData"]) {
        if ($_SESSION["userData"]["oauth_uid"]) {
            $userISloggedIn = true;
        }
    }
} 

if ($userISloggedIn) {
    // nothing
} else {
    header('HTTP/1.0 401 Unauthorized');
    ?>
    <script type="text/javascript">
       window.location.href = '/warframe-mastery-helper/warframe-mastery-helper/public/';
    </script>
    <?php
    die();
}
