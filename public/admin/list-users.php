<?php
include_once("auth-admin.php");
include_once("admin-header.php");

$allUsers = $user->listAll();

echo "<h2>List users</h2>";

?>
    <style>
        table td, table th {
            border: 1px solid #cdcdcd;
            padding: 4px 6px;
        }
    </style>
    <table class="sortable">
        <thead>
        <tr>
            <th>id</th>
            <th>oauth_uid</th>
            <th>uid</th>
            <th>locale</th>
            <th>created</th>
            <th>modified</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($allUsers as $item) {
            echo "<tr>";
            echo "<td><a href='user-info.php?id=" . $item["id"] . "'><b>" . $item["id"] . "</a></td>";
            echo "<td>" . $item["oauth_uid"] . "</td>";
            echo "<td>" . $item["uid"] . "</td>";
            echo "<td>" . $item["locale"] . "</td>";
            echo "<td>" . $item["created"] . "</td>";
            echo "<td>" . $item["modified"] . "</td>";
            echo "</tr>";
        } ?>
        </tbody>
    </table>
    <script>
        $('table.sortable').tablesort();
    </script>

<?php

include_once("admin-footer.php");
?>