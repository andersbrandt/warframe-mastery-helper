<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $pageTitle?></title>
    <meta name="description" content="Get your Warframe Mastery Rank up! Keep track of all items required for mastery rank. Features tier-ranking and in-depth information. The only Warframe Mastery Tracker you need."/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <?php if ($functions->isDev()) { ?>
        <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon-dev.png"/>
        <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.css"/>
    <?php } else { ?>
        <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon.png"/>
        <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.min.css?v=<?php echo $functions->getVersion();?>"/>
    <?php } ?>
    <script type="text/javascript">
        var user = {
            firstName: "<?php echo $_SESSION['userData']["first_name"]?>",
            locale: "<?php echo $_SESSION['userData']["locale"]?>",
            uid: "<?php echo $_SESSION['userData']["uid"]?>"
        }
    </script>
</head>
<body dir="ltr">
<div id="wrapper">
    <div id="notification"></div>
    <div id="warning-container"></div>
    <div class="row" id="nav">
        <div class="column large-12">
            <nav class="top-bar" data-topbar role="navigation">
                <ul class="title-area">
                    <li class="name">
                        <h1><a onclick="window.location.reload()" title="Start">
                        <?php if (!$functions->isDev()) { ?>
                            <img src="include/images/favicon.png" id="header-logo">
                        <?php } else { ?>
                            <img src="include/images/favicon-dev.png" id="header-logo">
                        <?php } ?>
                        Warframe Mastery Helper
                        </a></h1>
                    </li>
                    <li class="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
                </ul>
                <section class="top-bar-section">
                    <ul class="right spinner-loaded">
                        <li><a onclick="app.render.page.start();" title="Home">Home</a></li>
                        <li><a onclick="app.render.page.help();" title="Help">Help</a></li>
                        <li><a onclick="app.render.page.stats();" title="Statistics">Statistics</a></li>
                        <li><a onclick="app.render.page.clock();" title="Clock">Clock</a></li>
                        <li><a onclick="app.render.page.user();" title="User"><?php echo $_SESSION['userData']["first_name"]?> <i class="icon-user"></i></a></li>
                    </ul>
                </section>
            </nav>
        </div>
    </div>
