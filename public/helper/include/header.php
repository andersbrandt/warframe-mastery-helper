<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?php echo $pageTitle?></title>
		
		<?php include $config->get("path") . "helper/include/google-analytics-tracking.php"?>

    <meta name="description" content="This website are closing down and are no longer maintained."/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="msapplication-TileColor" content="#0d131c"/>
		<meta name="theme-color" content="#0d131c"/>				
    <?php if ($functions->isDev()) { ?>
        <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon-dev.png"/>
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
                        <h1><a title="Start" class="action-reload">
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
                        <li><a class="action-render-page" title="Help" data-page="help">Help</a></li>
                        <li><a class="action-render-page" title="Statistics" data-page="stats">Statistics</a></li>
                        <li><a class="action-render-page" title="News" data-page="news">News</a></li>
                        <li><a class="action-render-page" title="MR" data-page="mr">MR</a></li>
                        <li><a class="action-render-page" title="User" data-page="user" id="user-name"><?php echo $_SESSION['userData']["first_name"]?> <i class="icon-user"></i></a></li>
                    </ul>
                </section>
            </nav>
        </div>
    </div>

		<div class="row">
			<div class="col">
				<div id="maintainer-needed-wrapper">
					<p><b>This website is closing down and is no longer maintained.</b></p>
					<p><a href="download-csv.php">Click here to download current progress</a> as a CVS file.</p>
					<p>This file can be imported to Microsoft Excel or Google Sheets.</p>
				</div>				
			</div>
		</div>
