<?php
include_once("auth-admin.php");
include_once("admin-header.php");

echo "<h2>User info</h2>";

$id = $functions->returnSafe($_GET["id"]);
$item = $user->getById($id)[0];
$latestData = $wf->getData($item["uid"]);
$allData = $wf->getDataByUId($item["uid"]);

?>
    <table>
        <thead>
        <tr>
            <th>id</th>
            <th>oauth_uid</th>
            <th>uid</th>
            <th>locale</th>
            <th>created</th>
            <th>modified</th>
            <th>saves</th>
        </tr>
        </thead>
        <tbody>
        <?php
            echo "<tr>";
            echo "<td>" . $item["id"] . "</td>";
            echo "<td>" . $item["oauth_uid"] . "</td>";
            echo "<td>" . $item["uid"] . "</td>";
            echo "<td>" . $item["locale"] . "</td>";
            echo "<td>" . $item["created"] . "</td>";
            echo "<td>" . $item["modified"] . "</td>";
            echo "<td>" . count($allData) . "</td>";
            echo "</tr>";
        ?>
        </tbody>
    </table>

    <h3>User save-data</h3>
    <p><?php
        echo count($allData) . " data-items saved";
    ?></p>
    <p><a href="delete-user-data-keep-latest.php?uid=<?php echo $item["uid"]?>"><b>Delete all but latest save</b></a></p>

    <h3>Latest save-data</h3>
    <p><?php echo $latestData["timeStamp"]?></p>
    <div id="export-data-placeholder">
        <?php
            foreach($latestData["data"] as $dataItem) {
                echo $dataItem . ", ";
            }
        ?>
    </div>

<?php

include_once("admin-footer.php");

?>
