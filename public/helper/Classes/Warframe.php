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
        $db->insert($this->dataTbl, array(
                "data" => $data,
                "timeStamp" => $date,
                "userId" => $userId
            )
        );
        $result = $db->getResult();
        //TODO check result and send error | proceed
        //$returnData = $this->getData($userId);
        return $result;
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
