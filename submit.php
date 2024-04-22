<?php
<!-- // Get reCAPTCHA response token from the form submission
$captchaResponse = $_POST['g-recaptcha-response'];

// Verify reCAPTCHA response token
$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdVkpkpAAAAAAQucK6H3Es1lZOseD9KvFIJIQiG&response=".$captchaResponse);
$responseKeys = json_decode($response, true);

// Check if verification was successful
if(intval($responseKeys["success"]) !== 1) {
    // Verification failed, handle accordingly
    echo "reCAPTCHA verification failed.";
} else {
    // Verification successful, process form submission
    // Your form processing code goes here
} -->

$recaptchaResponse = $_POST['g-recaptcha-response'];
$secretKey = '6LdVkpkpAAAAAAQucK6H3Es1lZOseD9KvFIJIQiG';
$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
    'secret' => $secretKey,
    'response' => $recaptchaResponse
);
$options = array(
    'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    )
);
$context = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captchaSuccess = json_decode($verify);
if ($captchaSuccess->success) {
    // reCAPTCHA verification successful, process the form data
} else {
    // reCAPTCHA verification failed, display an error message
}
?>



