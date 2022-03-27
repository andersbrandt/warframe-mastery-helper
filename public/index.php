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
        <meta name="description" content="Get your Warframe Mastery Rank up! Keep track of all items required for mastery rank. Features tier-ranking and in-depth information. The only Warframe Mastery Tracker you need."/>
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
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.min.css?v=<?php echo $functions->getVersion();?>"/>
            <?php } ?>
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",        
                "@type": "WebApplication",
                "url": "https://warframe-mastery.com/",
                "name": "Warframe Mastery Helper",
                "image": "https://warframe-mastery.com/helper/include/images/favicon.png",
                "description": "Warframe Mastery Tracker. Keep track of all items required for mastery rank.",
                "author" : {
                    "@type" : "Person",
                    "name" : "Anders Brandt",
                    "email": "info@warframe-mastery.com"
                },
                "applicationCategory": "OtherApplication",
                "browserRequirements": "Requires JavaScript. Requires HTML5.",
                "operatingSystem": "All",
                "screenshot": "https://warframe-mastery.com/helper/include/images/screenshot.png",
                "inLanguage":[{
                    "@type": "Language",
                    "name": "English",
                    "alternateName": "en",
                    "additionalType":"https://www.loc.gov/standards/iso639-2/php/code_list.php",
                    "sameAs":"https://en.wikipedia.org/wiki/English_language"
                    }
                ],
                "offers": {
                    "@type": "Offer",
                    "availability": "http://schema.org/InStock",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            }
        </script>        
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

        <div class="row" data-equalizer="boxes-top">
            <div class="column large-4">
                <div class="box margin-top-10" data-equalizer-watch="boxes-top">
                    <h2>Warframe Mastery Tracker</h2>
                    <p class="text-larger">Keep track of all items required for mastery rank.</p>
                    <p class="text-larger">Features tier-ranking, recommendations and in-depth information.</p>
                    <p class="text-larger">Get your Warframe Mastery Rank up!</p>
                </div>
            </div>
            <div class="column large-4">
                <div class="box margin-top-10" data-equalizer-watch="boxes-top">
                    <h2>Login</h2>
                    <?php if ($userISloggedIn) { ?>
                        <p class="text-center">
                            <b class="margin-bottom-small">You are already logged in</b><br>
                            <a href="helper/" class="button success"><i class="icon-ok-circled2"></i> Continue to app</a><br>
                        </p>
                    <?php } else { ?>
                        <p class="text-center">
                            <span class="margin-bottom-small">Account will be created automatically</span><br>
                            <span onclick="window.location = '<?php echo filter_var($authUrl, FILTER_SANITIZE_URL) ?>'" class="button">Login with Google account</span>
                        </p>
                    <?php } ?>
                    <p style="margin-bottom: 22px;">We will not store your personal data or send you any emails.</p>
                </div>
            </div>
            <div class="column large-4">
                <div class="box margin-top-10" data-equalizer-watch="boxes-top">
                    <h2>News</h2>
                    <?php echo $news->printNews(3); ?>
                </div>
            </div>
        </div>

        <div class="row show-for-medium-up">
            <div class="column large-12">
                <div id="wrapper-weapons">
                    <img id="w-1" alt="Warframe primary weapon: Arca Plasmor" title="Warframe primary weapon: Arca Plasmor" src="<?=$config->get("root")?>helper/include/images/start-page/arca-plasmor.png">
                    <img id="w-2" alt="Warframe primary weapon: Kohm" title="Warframe primary weapon: Kohm" src="<?=$config->get("root")?>helper/include/images/start-page/kohm.png">
                    <img id="w-3" alt="Warframe secondary weapon: Lato" title="Warframe secondary weapon: Lato" src="<?=$config->get("root")?>helper/include/images/start-page/lato.png">
                    <img id="w-4" alt="Warframe melee weapon: Dual Cleavers" title="Warframe melee weapon: Dual Cleavers" src="<?=$config->get("root")?>helper/include/images/start-page/dual-cleavers.png">
                    <img id="w-5" alt="Warframe primary weapon: Braton" title="Warframe primary weapon: Braton" src="<?=$config->get("root")?>helper/include/images/start-page/braton.png">
                    <img id="w-6" alt="Warframe melee weapon: Dual Heat Swords" title="Warframe melee weapon: Dual Heat Swords" src="<?=$config->get("root")?>helper/include/images/start-page/dual-heat-swords.png">
                    <img id="w-7" alt="Warframe secondary weapon: Detron" title="Warframe secondary weapon: Detron" src="<?=$config->get("root")?>helper/include/images/start-page/detron.png">
                </div>            
            </div>
        </div>

        <div class="row" data-equalizer="boxes-bottom">
            <div class="column large-4 margin-top-10">
                <div class="box" data-equalizer-watch="boxes-bottom">
                    <h2>Tips</h2>
                        <p>Click an items name to open a modal.</p>
                        <p>Acquisition are searchable, search for 'dojo' for some easily obtainable items.</p>
                        <p>Statistics correspond to sections in Warframe menu 'My Profile > Equipment'.</p>
                        <p>Check the Help-section for more tips.</p>
                </div>
            </div>
            <div class="column large-4 margin-top-10">
                <div class="box" data-equalizer-watch="boxes-bottom">
                    <h2>Legend</h2>
                    <img src="helper/include/images/legend-v3.png" id="legend-image" alt="Site legend">
                </div>
            </div>
            <div class="column large-4 margin-top-10">
                <div class="box" data-equalizer-watch="boxes-bottom">
                    <h2>Privacy Policy & Disclaimer</h2>
                    <p>We will not store any personal information. Login are delegated to Google using <a class="white-link" target="_blank" href="https://developers.google.com/api-client-library/" rel="noopener">Google API Client</a></p>
                    <p>The only data we store are your public Google ID. Your ID is used in a obfuscated format in this app.</p>
                    <p>We will not send you emails or store your email.</p>
                    <p>This site is not affiliated with Digital Extremes.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column large-12">
                    <p class="text-center" id="footer-author">Author: Anders Brandt | Contact: <a href="mailto:info@warframe-mastery.com" class="white-link">info@warframe-mastery.com</a></p>
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
