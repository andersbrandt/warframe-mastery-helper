<?php

    include_once("conf.php");

    $userISloggedIn = false;
    if (!empty($_SESSION["userData"])) {
        if ($_SESSION["userData"]) {
            if ($_SESSION["userData"]["oauth_uid"]) {
                $userISloggedIn = true;
            }
        }
    }
    $authUrl = $client->createAuthUrl();

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Warframe Mastery Helper</title>

				<?php include $config->get("path") . "helper/include/google-analytics-tracking.php"?>

        <link rel="canonical" href="https://warframe-mastery.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="apple-mobile-web-app-capable" content="yes">
				<meta name="msapplication-TileColor" content="#0d131c"/>
				<meta name="theme-color" content="#0d131c"/>				
        <meta name="description" content="This website is closing down and is no longer maintained."/>
        <?php if ($functions->isDev()) { ?>
            <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon-dev.png"/>
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.css"/>
        <?php } else { ?>
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
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.min.css?v=<?php echo $functions->getVersion();?>"/><?php } ?>
    </head>
    <body class="start-page">
    <div id="start-page">
        <div class="row">
            <div class="column large-12">
                <div id="box-header" class="text-center">
                    <img src="<?=$config->get("root")?>helper/include/images/wmh-logo.svg" alt="Warframe Mastery Helper" title="Warframe Mastery Helper"> 
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column large-12">
                <div class="margin-top-10" data-equalizer-watch="boxes-top">
                    <h2 class="text-center">This website is closing down and is no longer maintained.</h2>
										<p class="text-center">
											Login to download your progress as a CSV file.
										</p>										
                    <?php if ($userISloggedIn) { ?>
                        <p class="text-center login-box">
                            <b class="margin-bottom-small">You are already logged in</b><br>
                            <a href="helper/" class="button success"><i class="icon-ok-circled2"></i> Continue to app</a><br>
                        </p>
                    <?php } else { ?>
                        <p class="text-center login-box">
                            <span onclick="window.location = '<?php echo filter_var($authUrl, FILTER_SANITIZE_URL) ?>'" class="button">Login with Google account</span>
                        </p>
                    <?php } ?>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column large-12">
                    <p class="text-center" id="footer-author">Author: <a href="https://github.com/andersbrandt/warframe-mastery-helper" target="_blank" class="white-link">Anders Brandt</a></p>
            </div>
        </div>
    </div>

    <?php if ($functions->isDev()) { ?>
        <script  src="<?=$config->get("root")?>helper/include/js/start-page.js"></script>
    <?php } else { ?>
        <script  src="<?=$config->get("root")?>helper/include/js/start-page.min.js?v=<?php echo $functions->getVersion();?>"></script>
    <?php } ?>

    </body>
</html>
