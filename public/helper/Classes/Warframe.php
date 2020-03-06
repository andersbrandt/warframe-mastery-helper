<?php

class Warframe
{

    private $dataTbl = "warframeUserData";

    public function saveData($userId, $data)
    {
        global $db;
        global $config;
        global $functions;
        $db->connect();
        $data = $functions->returnSafe(serialize($data));
        $data = base64_encode($data);
        $date = date("Y-m-d H:i:s");
        // Find the users entry, update OR insert
        $db->select($this->dataTbl, "id", null, "userId = '$userId'", "id desc", "1");
        $userEntry = $db->getResult();
        //TODO check for errors!
        if (count($userEntry)) {
            // UPDATE
            $userEntryId = $userEntry[0]["id"];
            $db->update($this->dataTbl, array(
                "data" => $data,
                "timeStamp" => $date,
                "userId" => $userId
                ), "id = '$userEntryId'");
            $db->getResult();
            return 1;
        } else {
            // INSERT
            $db->insert($this->dataTbl, array(
                "data" => $data,
                "timeStamp" => $date,
                "userId" => $userId
            ));
            $result = $db->getResult();
            return $result;
        }
    }

    public function getData($userId)
    {
        global $db;
        global $config;
        global $functions;
        $db->connect();
        $userId = $functions->returnSafe($userId);
        $db->select($this->dataTbl, "data, timeStamp", null, "userId = '$userId'", "id desc", "1");
        $result = $db->getResult();
        if ($result) {
            //TODO better handling for getData
            $result[0]["data"] = unserialize(base64_decode($result[0]["data"]));
            return $result[0];
        } else {
            return [
                "data" => [],
                "timeStamp" => date("Y-m-d H:i:s")
            ];
        }
    }

    public function getDataByUId($uid)
    {
        global $db;
        $db->connect();
        $db->select($this->dataTbl, "*", null, "userId = '$uid'");
        $result = $db->getResult();
        return $result;
    }

    public function deleteAllButLatest($uid)
    {
        global $db;
        $db->connect();

        // Get latest
        $db->select($this->dataTbl, "data, timeStamp", null, "userId = '$uid'", "id desc", "1");
        $latestData = $db->getResult();

        // Delete all
        $db->delete($this->dataTbl, "userId = '". $uid ."'");
        $result = $db->getResult();

        // Insert latest
        $db->insert($this->dataTbl, array(
                "data" => $latestData[0]["data"],
                "timeStamp" => $latestData[0]["timeStamp"],
                "userId" => $uid
            )
        );
        $result = $db->getResult();
    }

}
