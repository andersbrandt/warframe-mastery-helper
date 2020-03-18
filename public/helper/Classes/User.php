<?php

class User
{

    private $userTbl = "warframeUsers";

    function __construct()
    {
        if (!isset($this->db)) {
            global $config;
            // Connect to the database
            $conn = new mysqli($config->get("db.host"), $config->get("db.user"), $config->get("db.pass"), $config->get("db.name"));
            if ($conn->connect_error) {
                die("Failed to connect with MySQL: " . $conn->connect_error);
            } else {
                $this->db = $conn;
            }
        }
    }

    public function checkUser($userData = array())
    {
        global $functions;
        global $wf;
        if (!empty($userData)) {
            // Check if user data already exists in database
            $prevQuery = "SELECT * FROM " . $this->userTbl . " WHERE oauth_provider = '" . $userData['oauth_provider'] . "' AND oauth_uid = '" . $userData['oauth_uid'] . "'";
            $prevResult = $this->db->query($prevQuery);
            if ($prevResult->num_rows > 0) {
                // Update user data if already exists to save latest login
                $query = "UPDATE " . $this->userTbl . " SET locale = '" . $userData['locale'] . "', modified = '" . date("Y-m-d H:i:s") . "' WHERE oauth_provider = '" . $userData['oauth_provider'] . "' AND oauth_uid = '" . $userData['oauth_uid'] . "'";
                $update = $this->db->query($query);
            } else {
                // Create a new UID
                $uid = $functions->makeUUID(md5($userData["oauth_uid"].$userData["created"]));
                // Insert user data
                $query = "INSERT INTO " . $this->userTbl . " SET oauth_provider = '" . $userData['oauth_provider'] . "', oauth_uid = '" . $userData['oauth_uid'] . "', uid = '" . $uid . "', locale = '" . $userData['locale'] . "', created = '" . date("Y-m-d H:i:s") . "', modified = '" . date("Y-m-d H:i:s") . "'";
                $insert = $this->db->query($query);
                // Create an empty save-object for new user
                $wf->saveData($uid, []);
            }
            // Get user data from the database
            $result = $this->db->query($prevQuery);
            $userData = $result->fetch_assoc();
        }
        return $userData;
    }

    public function updateModified($uid, $timestamp)
    {
        $db = new Database;
        $db->connect();
        $db->update($this->userTbl, array(
            "modified" => $timestamp,
            ), "uid = '$uid'");
        $db->getResult();
        return 1;
    }

    public function get()
    {
        global $_SESSION;
        if ($_SESSION["userData"]["oauth_uid"]) {
            return $_SESSION["userData"];
        } else {
            return false;
        }
    }

}

?>
