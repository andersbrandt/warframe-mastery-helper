<?php

class Functions
{
    public function returnSafeURL($string)
    {
        $URL = htmlentities($string, ENT_COMPAT, "UTF-8", false);
        $URL = preg_replace('/&([a-z]{1,2})(?:acute|lig|grave|ring|tilde|uml|cedil|caron);/i', '\1', $URL);
        $URL = html_entity_decode($URL, ENT_COMPAT, "UTF-8");
        $URL = preg_replace('/[^a-z0-9-]+/i', '-', $URL);
        $URL = preg_replace('/-+/', '-', $URL);
        $URL = trim($URL, '-');
        $URL = strtolower($URL);
        return $URL;
    }

    public function returnSafe($string)
    {
        $string = stripslashes($string);
        $string = htmlentities($string, ENT_COMPAT, "UTF-8", false);
        $string = html_entity_decode($string, ENT_COMPAT, "UTF-8");
        return $string;
    }

    public function makeUUID($string)
    {
        $string = substr($string, 0, 8) . '-' .
            substr($string, 8, 4) . '-' .
            substr($string, 12, 4) . '-' .
            substr($string, 16, 4) . '-' .
            substr($string, 20);
        return $string;
    }

    public function isDev()
    {
        global $config;
        if ($config->get("baseUrl") == "https://andersbrandt.se" || $config->get("baseUrl") == "https://warframe-mastery.com") {
            return false;
        } else {
            return true;
        }
    }

    public function getVersion()
    {
        global $config;
        $version = file_get_contents($config->get("path") . "version.txt");
        if ($version){
            return trim($version);
        } else {
            return "asdf1234";
        }
    }

}
