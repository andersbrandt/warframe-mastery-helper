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
        <link rel="canonical" href="https://warframe-mastery.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="description" content="Get your Warframe Mastery Rank up! Keep track of all ranked items required for mastery rank. Features tier-ranking and in-depth information."/>
        <?php if ($functions->isDev()) { ?>
            <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon-dev.png"/>
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.css"/>
        <?php } else { ?>
            <link rel="shortcut icon" href="/favicon.ico">
            <link rel="icon" sizes="16x16 32x32 64x64" href="/favicon.ico">
            <link rel="icon" type="image/png" sizes="196x196" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-192.png">
            <link rel="icon" type="image/png" sizes="160x160" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-160.png">
            <link rel="icon" type="image/png" sizes="96x96" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-96.png">
            <link rel="icon" type="image/png" sizes="64x64" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-64.png">
            <link rel="icon" type="image/png" sizes="32x32" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-16.png">
            <link rel="apple-touch-icon" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-57.png">
            <link rel="apple-touch-icon" sizes="114x114" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-114.png">
            <link rel="apple-touch-icon" sizes="72x72" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-72.png">
            <link rel="apple-touch-icon" sizes="144x144" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-144.png">
            <link rel="apple-touch-icon" sizes="60x60" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-60.png">
            <link rel="apple-touch-icon" sizes="120x120" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-120.png">
            <link rel="apple-touch-icon" sizes="76x76" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-76.png">
            <link rel="apple-touch-icon" sizes="152x152" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="<?=$config->get("root")?>helper/include/images/favicon/favicon-180.png">
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.min.css?v=<?php echo $functions->getVersion();?>"/>
        <?php } ?>
    </head>
    <body class="start-page">

    <div id="start-page" >
        <div class="row">
            <div class="column large-12">
                <div id="box-header" class="text-center">
                    <img src="<?=$config->get("root")?>helper/include/images/favicon.png" alt="Logotype"> 
                    <h1 class="text-center" id="start-page-header">Warframe Mastery Helper</h1>
                </div>
            </div>
        </div>

        <div class="row" data-equalizer="boxes-top">
            <div class="column large-4">
                <div class="box margin-top-10" data-equalizer-watch="boxes-top">
                    <h2>Warframe Mastery Rank Tool</h2>
                    <p class="text-larger">Keep track of all leveled items required for mastery rank.</p>
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
                    <ul id="news-list">
                        <li>
                            <div class="news-header">Added Kuva Lich Update</div>
                            <div class="news-date">2020.02.07</div>
                        </li>
                        <li>
                            <div class="news-header">Added Empyrean release</div>
                            <div class="news-date">2019.12.29</div>
                        </li>
                        <li>
                            <div class="news-header">Added Ivara Prime release</div>
                            <div class="news-date">2019.12.21</div>
                        </li>
                        <li>
                            <div class="news-header">Added Update 27</div>
                            <div class="news-date">2019.12.17</div>
                        </li>
                        <li>
                            <div class="news-header">Added The Old Blood Update</div>
                            <div class="news-date">2019.11.01</div>
                        </li>
                        <li>
                            <div class="news-header">Added Atlas Prime release</div>
                            <div class="news-date">2019.10.02</div>
                        </li>
                        <li>
                            <div class="news-header">Added Pathocyst</div>
                            <div class="news-date">2019.09.27</div>
                        </li>
                        <li>
                            <div class="news-header">Added Gauss, Acceltra & Akarius</div>
                            <div class="news-date">2019.09.01</div>
                        </li>
                        <li>
                            <div class="news-header">Added Wukong Prime update + Quatz</div>
                            <div class="news-date">2019.08.24</div>
                        </li>
                        <li>
                            <div class="news-header">Added items for The Jovian Concord</div>
                            <div class="news-date">2019.05.23</div>
                        </li>
                        <li>
                            <div class="news-header">Added items for Equinox Prime & Eidolon update</div>
                            <div class="news-date">2019.04.08</div>
                        </li>
                        <li>
                            <div class="news-header">Added items for 'Buried Debts' update</div>
                            <div class="news-date">2019.03.02</div>
                        </li>
                        <li>
                            <div class="news-header">Section 'Statistics' are now grouped as in-game menu</div>
                            <div class="news-date">2019.02.23</div>
                        </li>
                    </ul>
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
                    <img src="helper/include/images/legend.png" id="legend-image" alt="Site legend">
                </div>
            </div>
            <div class="column large-4 margin-top-10">
                <div class="box" data-equalizer-watch="boxes-bottom">
                    <h2>Privacy Policy & Disclaimer</h2>
                    <p>We will not store any personal information. Login are delegated to Google using <a target="_blank" href="https://developers.google.com/api-client-library/" rel="noopener">Google API Client</a></p>
                    <p>The only data we store are your public Google ID, used publicly in a obfuscated format.</p>
                    <p>We will not send you emails or store your email.</p>
                    <p>This site is not affiliated with Digital Extremes.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column large-12 small-12">
                <div class="box item-list">
                <h2>Warframe items included in list for Mastery Rank</h2>
                <?php 
                    readfile($config->get("path") . "helper/include/start-page-item-list.html")
                ?>
                </div>
            </div>
        </div>
    </div>

        <?php if ($functions->isDev()) { ?>
            <script  src="<?=$config->get("root")?>helper/include/js/start-page.js"></script>
        <?php } else { ?>
            <script  src="<?=$config->get("root")?>helper/include/js/start-page.min.js?v=<?php echo $functions->getVersion();?>"></script>
        <?php } ?>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-77926302-2"></script>
        <script>
            window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-77926302-2');
        </script>
    </body>
</html>
