<?php
// Setup
include_once("../conf.php");

if ($_SESSION['userData']["uid"]){

	$action = stripslashes($_GET['action']);

	if (isset($_REQUEST['json'])) {
		$payload = $_REQUEST['json'];
		$payload = str_replace('\\', "", $payload);
		$payload = json_decode($payload, TRUE);
	} else {
		$payload = "";
	}

	switch ($action) {

		case "save":
			$data = $wf->saveData($_SESSION['userData']["uid"], $payload);
			header('content-type: application/json; charset=utf-8');
			echo json_encode($data, JSON_NUMERIC_CHECK);
			break;

		case "get":
			$data = $wf->getData($_SESSION['userData']["uid"]);
			header('content-type: application/json; charset=utf-8');
			echo json_encode($data, JSON_NUMERIC_CHECK);
			break;

		default:
			# DEFAULT
			echo "Controller.php called.";
			break;
	}

} else {
	$errorMessage = [
		"ERROR" => "User not authenticated"
	];
	header('content-type: application/json; charset=utf-8');
	echo json_encode($errorMessage, JSON_NUMERIC_CHECK);
}
