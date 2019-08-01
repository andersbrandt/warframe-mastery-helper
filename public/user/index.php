<?php
include_once '../conf.php';

//
//  https://github.com/googleplus/gplus-verifytoken-php
//  https://www.codexworld.com/login-with-google-api-using-php/
//  https://stackoverflow.com/questions/520237/how-do-i-expire-a-php-session-after-30-minutes
//
//  Code used are https://developers.google.com/api-client-library/php/start/installation
//

if (isset($_GET['code'])) {
    //$authCode = $_GET['code'];
    $client->authenticate($_GET['code']);
    $_SESSION['token'] = $client->getAccessToken();
    header('Location: ' . filter_var($redirectURL, FILTER_SANITIZE_URL));
}

if (isset($_SESSION['token'])) {
    // https://stackoverflow.com/questions/39314833/google-api-client-refresh-token-must-be-passed-in-or-set-as-part-of-setaccessto
    // if ($client->isAccessTokenExpired()) {
    //     $refreshTokenSaved = $client->getRefreshToken();
    //     $client->fetchAccessTokenWithRefreshToken($refreshTokenSaved);
    //     $accessTokenUpdated = $client->getAccessToken();
    //     $_SESSION['token']['refresh_token'] = $refreshTokenSaved;
    //     $client->setAccessToken($_SESSION['token']);
    // }
    $client->setAccessToken($_SESSION['token']);
}

if ($client->getAccessToken()) {
    $gpUserProfile = $google_oauthV2->userinfo->get();
    $userInfo = $gpUserProfile;

    // Insert or update user data to the database
    $gpUserData = array(
        'oauth_provider' => 'google',
        'oauth_uid' => $userInfo['id'],
        'first_name' => $userInfo['given_name'],
        'locale' => $userInfo['locale']
    );
    $userData = $user->checkUser($gpUserData);
    $userData["first_name"] = $gpUserData["first_name"];

    // Storing user data in session
    $_SESSION['userData'] = $userData;

    // Render profile data
    if (!empty($userData)) {
        header("Location: ../helper"); //TODO
    } else {
        $output = '<html><head><title>An error occurred</title><link type="text/css" rel="stylesheet" href="../helper/include/css/stylesheet.css"/></head><body>';
        $output .= '<h3 style="color:red">An error occurred, please try again.</h3>';
        $output .= '<p><a href="' . filter_var($authUrl, FILTER_SANITIZE_URL) . '" class="button">Login with Google account</a></p>';
        $output .= '</body></html>';
    }

} else {
    header("Location: ../"); //TODO
}

echo $output;

?>
