<?php
include_once('../user-auth.php');
include_once('../conf.php');

// Header
$pageTitle = "Warframe Mastery Helper";
include_once($config->get("path") . "/helper/include/header.php");

?>
    <div id="spinner" style="display: block;">
        <i class="icon-spinner animate-spin icon-3x"></i>
    </div>

    <div class="row spinner-loaded">

        <div class="column large-12">
            <div id="status-placeholder" class="view-placeholder"></div>
        </div>

        <div class="column large-12">
            <div id="search-placeholder" class="view-placeholder"></div>
            <div id="filter-placeholder" class="view-placeholder"></div>
        </div>

        <?php include_once("include/test-style.php") ?>

        <div class="column large-12">
            <div id="all-items-placeholder" class="view-placeholder"></div>
        </div>

        <div id="stats-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
            <div id="stats-placeholder" class="view-placeholder"></div>
        </div>

        <div id="clock-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
            <div id="clock-placeholder"></div>
        </div>

        <div id="guide-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
            <div id="guide-placeholder"></div>
        </div>

        <div id="help-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
            <div id="help-placeholder" class="view-placeholder"></div>
        </div>

        <div id="user-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
            <div id="user-placeholder" class="view-placeholder"></div>
        </div>

        <div id="item-info-placeholder" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog"></div>

    </div>

</div>

<div class="row spinner-loaded" id="footer">
    <div class="column large-12">
        Warframe Mastery Helper <?php echo date("Y"); ?> | <a href="mailto:info@warframe-mastery.com">Contact us</a>
    </div>
</div>

<div id="modal-export" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
    <h1>Export data</h1>
    <p class="lead">Save this string to a text-file:</p>
    <div id="export-data-placeholder"></div>
    <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<div id="modal-import" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
    <h1>Import data</h1>
    <p>Expects array ["Excalibur", "Braton Prime"]</p>
    <p>Note: Import will overwrite current saved data!</p>
    <p class="lead">Paste saved string from export here:</p>
    <textarea id="import-data"></textarea>
    <button onclick="app.import.list();">Import</button>
    <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<div id="news-modal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
    <h1>News</h1>
    <?php echo $news->printNews(1000)?>
    <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<?php include($config->get("path") . "helper/include/google-analytics-tracking.php")?>

<?php if ($functions->isDev()) { ?>
    <script src="<?=$config->get("root")?>helper/include/js/main.js"></script>
<?php } else { ?>
    <script src="<?=$config->get("root")?>helper/include/js/main.min.js?v=<?php echo $functions->getVersion();?>"></script>
<?php } ?>

    </body>
</html>
