<?php

class Warframe
{

    private $dataTbl = "warframeUserData";

    public function saveData($userId, $data)
    {
        $Functions = new Functions;
        $User = new User;
        $data = $Functions->returnSafe(serialize($data));
        $data = base64_encode($data);
        $timestamp = date("Y-m-d H:i:s");
        $User->updateModified($userId, $timestamp);
        $userEntryId = $this->getUserEntryId($userId);
        if ($userEntryId) {
            $this->updateData($data, $timestamp, $userId, $userEntryId);
            return 1;
        } else {
            $result = $this->insertData($data, $timestamp, $userId);
            return $result;
        }
    }

    private function getUserEntryId($userId) {
        $db = New Database;
        $db->connect();
        $db->select($this->dataTbl, "id", null, "userId = '$userId'", "id desc", "1");
        $userEntry = $db->getResult();
        if (count($userEntry)) {
            if(isset($userEntry[0]["id"])){
                return $userEntry[0]["id"];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    private function updateData($data, $date, $userId, $userEntryId) {
        $db = new Database;
        $db->connect();
        $db->update($this->dataTbl, array(
            "data" => $data,
            "timeStamp" => $date,
            "userId" => $userId
            ), "id = '$userEntryId'");
        $db->getResult();
        return 1;
    }

    private function insertData($data, $date, $userId) {
        $db = new Database;
        $db->connect();
        $db->insert($this->dataTbl, array(
            "data" => $data,
            "timeStamp" => $date,
            "userId" => $userId
        ));
        $result = $db->getResult();
        return $result;
    }

    public function getData($userId)
    {
        $db = new Database;
        $Functions = new Functions;
        $db->connect();
        $userId = $Functions->returnSafe($userId);
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

}
