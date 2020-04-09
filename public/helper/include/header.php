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
        <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon.png"/>
        <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.css?v=<?php echo rand(1000,9999); ?>"/>
    <?php } else { ?>
        <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon.png"/>
        <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.min.css?v=<?php echo $functions->getVersion();?>"/>
        <link rel="shortcut icon" href="<?=$config->get("root")?>favicon.ico">
        <link rel="icon" sizes="16x16 32x32 64x64" href="<?=$config->get("root")?>favicon.ico">
        <link rel="icon" type="image/png" href="<?=$config->get("root")?>helper/include/images/favicon.png"/>
        <link rel="icon" type="image/png" sizes="196x196" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-196x196.png">
        <link rel="icon" type="image/png" sizes="192x192" href="<?=$config->get("root")?>helper/include/images/favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="160x160" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-160x160.png">
        <link rel="icon" type="image/png" sizes="64x64" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-64x64.png">
        <link rel="icon" type="image/png" sizes="32x32" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-16x16.png">
        <link rel="apple-touch-icon" sizes="57x57" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="<?=$config->get("root")?>helper/include/images/favicon/apple-icon-180x180.png">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="<?=$config->get("root")?>helper/include/images/favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
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
    <div id="warning-container" style="display: none;"></div>
    <div class="row" id="nav">
        <div class="column large-12">
            <nav class="top-bar" data-topbar role="navigation">
                <ul class="title-area">
                    <li class="name">
                        <h1><a onclick="window.location.reload()" title="Start">
                        <?php if (!$functions->isDev()) { ?>
                            <img src="include/images/wmh-logo.svg" id="header-logo" alt="Warframe Mastery Helper" title="Warframe Mastery Helper">
                        <?php } else { ?>
                            <img src="include/images/wmh-logo.svg" id="header-logo" alt="Warframe Mastery Helper" title="Warframe Mastery Helper">
                        <?php } ?>
                        </a></h1>
                    </li>
                    <li class="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
                </ul>
                <section class="top-bar-section">
                    <ul class="right spinner-loaded" style="display:none">
                        <li><a onclick="app.render.page.start();" title="Home">Home</a></li>
                        <li><a onclick="app.render.page.help();" title="Help">Help</a></li>
                        <li><a onclick="app.render.page.stats();" title="Statistics">Statistics</a></li>
                        <li><a onclick="app.render.page.clock();" title="Clock">Clock</a></li>
                        <li><a onclick="app.render.page.news();" title="News">News</a></li>
                        <li><a onclick="app.render.page.user();" title="User"><?php echo $_SESSION['userData']["first_name"]?> <i class="icon-user"></i></a></li>
                    </ul>
                </section>
            </nav>
        </div>
    </div>
