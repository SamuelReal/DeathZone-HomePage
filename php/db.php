<?php

class db
{
    private $host = '185.73.243.45:25565';
    private $user = 'u10245_m9hdx9Rzh6';
    private $password = "Y!^RVT7iYZIWl6Mu!j0U2ZRL";
    private $database = "s10245_WEB";
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

    public function getFirstRow() {
        $sqlQuery = "SELECT * FROM `first_row` ORDER BY `order` ASC, `nickname` ASC";
        return $this->getData($sqlQuery);
    }

    public function getSecondRow() {
        $sqlQuery = "SELECT * FROM `second_row` ORDER BY `order` ASC, `nickname` ASC";
        return $this->getData($sqlQuery);
    }

    public function getThirdRow() {
        $sqlQuery = "SELECT * FROM `third_row` ORDER BY `order` ASC, `nickname` ASC";
        return $this->getData($sqlQuery);
    }

    public function getFourthRow() {
        $sqlQuery = "SELECT * FROM `fourth_row` ORDER BY `order` ASC, `nickname` ASC";
        return $this->getData($sqlQuery);
    }
}

$db = new db();