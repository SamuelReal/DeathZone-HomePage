<?php

class db
{
    private $host = '51.83.47.197';
    private $user = 'deathzone.net';
    private $password = "YIuTm7OLq-b12q9.";
    private $database = "deathzone.net";
    private $dbConnect = false;
    public function __construct() {
        if (!$this->dbConnect) {
            $conn = new mysqli($this->host, $this->user, $this->password, $this->database);
            if ($conn->connect_error) {
                // die("Error failed to connect to MySQL: " . $conn->connect_error);
            } else {
                $this->dbConnect = $conn;
            }
        }
    }
    private function getData($sqlQuery) {
        $result = mysqli_query($this->dbConnect, $sqlQuery);
        if (!$result) {
            die('Error in query: ' . mysqli_error($this->dbConnect) . " sqlQuery: " . $sqlQuery);
        }
        $data = array();
        /*while ($row = mysqli_fetch_array($result, MYSQL_ASSOC)) {*/
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }
    public function getStaffs() {
        $sqlQuery = "SELECT * FROM `staffs` ORDER BY `order` ASC, `nickname` ASC";
        return $this->getData($sqlQuery);
    }
}

$db = new db();