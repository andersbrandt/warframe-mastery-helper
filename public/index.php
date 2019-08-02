<?php

    include_once "conf.php";

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
<html>
    <head>
        <meta charset="UTF-8">
        <title>Warframe Mastery Helper</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="description" content="Get your Warframe Mastery Rank up! Keep track of all leveled items required for mastery rank. Features tier-ranking, recommendations and in-depth information."/>
        <?php if ($functions->isDev()) { ?>
            <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon-dev.png"/>
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.css"/>
        <?php } else { ?>
            <link type="image/png" rel="icon" href="<?=$config->get("root")?>helper/include/images/favicon.png"/>
            <link type="text/css" rel="stylesheet" href="<?=$config->get("root")?>helper/include/css/stylesheet.min.css?v=<?php echo $functions->getVersion();?>"/>
        <?php } ?>
    </head>
    <body class="start-page">

    <div id="start-page" >
        <div class="row">
            <div class="column large-12">
                <div id="box-header" class="text-center">
                    <img src="helper/include/images/favicon.png"> 
                    <h1 class="text-center" id="start-page-header">Warframe Mastery Helper</h1>
                </div>
            </div>
        </div>

        <div class="row" data-equalizer="boxes-top">
            <div class="column large-4">
                <div class="box margin-top-10" data-equalizer-watch="boxes-top">
                    <h2>Mastery Rank Tool</h2>
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
                            <a href="helper/" class="button success"><i class="far fa-fw fa-check-circle"></i> Continue to app</a><br>
                        </p>
                    <?php } else { ?>
                        <p class="text-center">
                            <span class="margin-bottom-small">Account will be created automatically</span><br>
                            <a href="<?php echo filter_var($authUrl, FILTER_SANITIZE_URL) ?>" class="button">Login with Google account</a>
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
                    <img id="w-1" alt="Warframe primary weapon: Arca Plasmor" title="Warframe primary weapon: Arca Plasmor" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/arca-plasmor.png">
                    <img id="w-2" alt="Warframe primary weapon: Kohm" title="Warframe primary weapon: Kohm" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/kohm.png">
                    <img id="w-3" alt="Warframe secondary weapon: Lato" title="Warframe secondary weapon: Lato" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/lato.png">
                    <img id="w-4" alt="Warframe melee weapon: Dual Cleavers" title="Warframe melee weapon: Dual Cleavers" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/dual-cleavers.png">
                    <img id="w-5" alt="Warframe primary weapon: Braton" title="Warframe primary weapon: Braton" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/braton.png">
                    <img id="w-6" alt="Warframe melee weapon: Dual Heat Swords" title="Warframe melee weapon: Dual Heat Swords" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/dual-heat-swords.png">
                    <img id="w-7" alt="Warframe secondary weapon: Detron" title="Warframe secondary weapon: Detron" src="https://raw.githubusercontent.com/wfcd/warframe-items/development/data/img/detron.png">
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
                    <img src="helper/include/images/legend.png" id="legend-image">
                </div>
            </div>
            <div class="column large-4 margin-top-10">
                <div class="box" data-equalizer-watch="boxes-bottom">
                    <h2>Privacy Policy & Disclaimer</h2>
                    <p>We will not store any personal information. Login are delegated to Google using <a target="_blank" href="https://developers.google.com/api-client-library/">Google API Client</a></p>
                    <p>The only data we store are your <a target="_blank" href="https://www.google.com/search?q=what%27s+my+google+id">public Google ID</a>, used publicly in a obfuscated format.</p>
                    <p>We will not send you emails or store your email.</p>
                    <p>This site is not affiliated with Digital Extremes.</p>
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
