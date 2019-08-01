<?php
include_once("auth-admin.php");

$uid = $functions->returnSafe($_GET["uid"]);

$wf->deleteAllButLatest($uid);

header('Location: ' . $_SERVER['HTTP_REFERER']);
die();

?>