<?php

/*
 * @Author Rory Standley <rorystandley@gmail.com>
 * @Version 2.0 (mysqli)
 * @Package Database
 */

/*
 * Updated for PHP v7 and deprecation of mysql for mysqli
 * http://net.tutsplus.com/tutorials/php/real-world-oop-with-php-and-mysql/
 * https://github.com/rorystandley/MySQL-CRUD-PHP-OOP/blob/master/class/mysql_crud.php
 * https://github.com/rorystandley/mysqli-crud-php-oop
 */

class Database
{
    /*
     * Create variables for credentials to MySQL database
     */
    private $db_host = '';
    private $db_user = '';
    private $db_pass = '';
    private $db_name = '';

    /*
     * Construct: Load variables for credentials to MySQL database from class.Config
     */
    function __construct()
    {
        global $config;

        $this->db_host = $config->get("db.host");
        $this->db_user = $config->get("db.user");
        $this->db_pass = $config->get("db.pass");
        $this->db_name = $config->get("db.name");
    }

    /*
     * Extra variables that are required by other function such as boolean con variable
     */
    private $con = false; // Check to see if the connection is active
    private $result = array(); // Any results from a query will be stored here
    private $myQuery = ""; // used for debugging process with SQL return
    private $numResults = ""; // used for returning the number of rows
    public $db_conn = false;

    // Function to make connection to database
    public function connect()
    {
        if (!$this->con) {
            $myconn = mysqli_connect($this->db_host, $this->db_user, $this->db_pass, $this->db_name);
            $this->db_conn = $myconn;
            if (mysqli_connect_errno()) {
                array_push($this->result, mysqli_connect_errno());
                return false; // Problem selecting database return FALSE
            } else {
                $this->con = true;
                return true; // Connection has been made return TRUE
            }
        } else {
            return true; // Connection has already been made return TRUE
        }
    }

    // Function to disconnect from the database
    public function disconnect()
    {
        // If there is a connection to the database
        if ($this->con) {
            // We have found a connection, try to close it
            if (mysqli_close($this->db_conn)) {
                // We have successfully closed the connection, set the connection variable to false
                $this->con = false;
                // Return true, we have closed the connection
                return true;
            } else {
                // We could not close the connection, return false
                return false;
            }
        }
    }

    public function sql($sql)
    {
        $query = mysqli_query($this->db_conn, $sql);
        $this->myQuery = $sql; // Pass back the SQL
        if ($query) {
            // If the query returns >= 1 assign the number of rows to numResults
            $this->numResults = mysqli_num_rows($query);
            // Loop through the query results by the number of rows returned
            for ($i = 0; $i < $this->numResults; $i++) {
                $r = mysqli_fetch_array($query);
                $key = array_keys($r);
                for ($x = 0; $x < count($key); $x++) {
                    // Sanitizes keys so only alphavalues are allowed
                    if (!is_int($key[$x])) {
                        if (mysqli_num_rows($query) >= 1) {
                            $this->result[$i][$key[$x]] = $r[$key[$x]];
                        } else {
                            $this->result = null;
                        }
                    }
                }
            }
            return true; // Query was successful
        } else {
            array_push($this->result, mysqli_error($this->db_conn));
            return false; // No rows where returned
        }
    }

    // Function to SHOW tables
    public function show()
    {
        // Create query from the variables passed to the function
        $q = 'SHOW TABLES FROM ' . $this->db_name;
        $this->myQuery = $q; // Pass back the SQL
        $query = mysqli_query($this->db_conn, $q);
        $this->numResults = mysqli_num_rows($query);
        $i = 0;
        while ($row = mysqli_fetch_row($query)) {
            $this->result[$i] = $row[0];
            $i++;
        }
        return true; // Query was successful
    }

    // Function to DESCRIBE table
    public function describe($table)
    {
        // Create query from the variables passed to the function
        $q = 'DESCRIBE ' . $table;
        $this->myQuery = $q; // Pass back the SQL
        // Check to see if the table exists
        if ($this->tableExists($table)) {
            $query = mysqli_query($this->db_conn, $q);
            // If the query returns >= 1 assign the number of rows to numResults
            $this->numResults = mysqli_num_rows($query);
            // Loop through the query results by the number of rows returned
            for ($i = 0; $i < $this->numResults; $i++) {
                $r = mysqli_fetch_array($query);
                $key = array_keys($r);
                for ($x = 0; $x < count($key); $x++) {
                    $this->result[$i][$key[$x]] = $r[$key[$x]];
                }
            }
            return true; // Query was successful
        } else {
            // Table dont exist
            array_push($this->result, mysqli_error($this->db_conn));
            return false; // No rows where returned
        }
    }

    // Function to return PRIMARY KEYS for table
    public function primaryKey($table)
    {
        $q = "SHOW KEYS FROM $table WHERE Key_name = 'PRIMARY'";
        $i = 0;
        $this->myQuery = $q; // Pass back the SQL
        // Check to see if the table exists
        if ($this->tableExists($table)) {
            // The table exists, run the query
            $query = mysqli_query($this->db_conn, $q);
            if ($query) {
                $this->numResults = mysqli_num_rows($query);
                while ($row = mysqli_fetch_row($query)) {
                    $this->result[$i] = $row[4];
                    $i++;
                }
                return true; // Query was successful
            }
        }
    }

    // Function to SELECT from the database
    public function select($table, $rows = '*', $join = null, $where = null, $order = null, $limit = null)
    {
        // Create query from the variables passed to the function
        $q = 'SELECT ' . $rows . ' FROM ' . $table;
        if ($join != null) {
            $q .= ' JOIN ' . $join;
        }
        if ($where != null) {
            $q .= ' WHERE ' . $where;
        }
        if ($order != null) {
            $q .= ' ORDER BY ' . $order;
        }
        if ($limit != null) {
            $q .= ' LIMIT ' . $limit;
        }

        $this->myQuery = $q; // Pass back the SQL

        // Check to see if the table exists
        if ($this->tableExists($table)) {
            // The table exists, run the query
            $query = mysqli_query($this->db_conn, $q);
            if ($query) {
                // If the query returns >= 1 assign the number of rows to numResults
                $this->numResults = mysqli_num_rows($query);
                // Loop through the query results by the number of rows returned
                for ($i = 0; $i < $this->numResults; $i++) {
                    $r = mysqli_fetch_array($query);
                    $key = array_keys($r);
                    for ($x = 0; $x < count($key); $x++) {
                        // Sanitizes keys so only alphavalues are allowed
                        if (!is_int($key[$x])) {
                            if (mysqli_num_rows($query) >= 1) {
                                $this->result[$i][$key[$x]] = $r[$key[$x]];
                            } else {
                                $this->result = null;
                            }
                        }
                    }
                }
                return true; // Query was successful
            } else {
                array_push($this->result, mysqli_error($this->db_conn));
                return false; // No rows where returned
            }
        } else {
            return false; // Table does not exist
        }
    }

    // Function to insert into the database
    public function insert($table, $params = array())
    {
        // Check to see if the table exists
        if ($this->tableExists($table)) {
            $sql = 'INSERT INTO `' . $table . '` (`' . implode('`, `', array_keys($params)) . '`) VALUES (\'' . implode('\', \'', $params) . '\')';
            $this->myQuery = $sql; // Pass back the SQL
            // Make the query to insert to the database
            if ($ins = mysqli_query($this->db_conn, $sql)) {
                array_push($this->result, mysqli_insert_id($this->db_conn));
                return true; // The data has been inserted
            } else {
                array_push($this->result, mysqli_error($this->db_conn));
                return false; // The data has not been inserted
            }
        } else {
            return false; // Table does not exist
        }
    }

    //Function to delete table or row(s) from database
    public function delete($table, $where = null)
    {
        // Check to see if table exists
        if ($this->tableExists($table)) {
            // The table exists check to see if we are deleting rows or table
            if ($where == null) {
                $delete = 'DELETE ' . $table; // Create query to delete table
            } else {
                $delete = 'DELETE FROM ' . $table . ' WHERE ' . $where; // Create query to delete rows
            }
            // Submit query to database
            if ($del = mysqli_query($this->db_conn, $delete)) {
                array_push($this->result, mysqli_affected_rows($this->db_conn));
                $this->myQuery = $delete; // Pass back the SQL
                return true; // The query exectued correctly
            } else {
                array_push($this->result, mysqli_error($this->db_conn));
                return false; // The query did not execute correctly
            }
        } else {
            return false; // The table does not exist
        }
    }

    // Function to update row in database
    public function update($table, $params = array(), $where)
    {
        // Check to see if table exists
        if ($this->tableExists($table)) {
            // Create Array to hold all the columns to update
            $args = array();
            foreach ($params as $field => $value) {
                // Seperate each column out with it's corresponding value
                $args[] = $field . '="' . $value . '"';
            }
            // Create the query
            $sql = 'UPDATE ' . $table . ' SET ' . implode(',', $args) . ' WHERE ' . $where;
            // Make query to database
            $this->myQuery = $sql; // Pass back the SQL
            if ($query = mysqli_query($this->db_conn, $sql)) {
                array_push($this->result, mysqli_affected_rows($this->db_conn));
                return true; // Update has been successful
            } else {
                array_push($this->result, mysqli_error($this->db_conn));
                return false; // Update has not been successful
            }
        } else {
            return false; // The table does not exist
        }
    }

    // Private function to check if table exists for use with queries
    private function tableExists($table)
    {
        $tablesInDb = mysqli_query($this->db_conn, 'SHOW TABLES FROM ' . $this->db_name . ' LIKE "' . $table . '"');
        if ($tablesInDb) {
            if (mysqli_num_rows($tablesInDb) == 1) {
                return true; // The table exists
            } else {
                array_push($this->result, "Table '". $table . "' does not exist in database ". $this->db_name);
                return false; // The table does not exist
            }
        }
    }

    // Public function to return the data to the user
    public function getResult()
    {
        $val = $this->result;
        $this->result = array();
        return $val;
    }

    //Pass the SQL back for debugging
    public function getSql()
    {
        $val = $this->myQuery;
        $this->myQuery = array();
        return $val;
    }

    //Pass the number of rows back
    public function numRows()
    {
        $val = $this->numResults;
        $this->numResults = array();
        return $val;
    }
}
