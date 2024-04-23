<?php
function updateFirebaseData($url, $token, $data) : array {
    $return_response = [
        'success' => 0,
        'response' => ''
    ];
    try {
        $curl = curl_init();
        // Firebase URL to which you want to send the update request
        $firebaseUrl = $url . '.json?auth=' . $token;

        $post_field_data = json_encode($data);
        // cURL settings
        curl_setopt_array($curl, array(
            CURLOPT_URL => $firebaseUrl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "PATCH",
            CURLOPT_POSTFIELDS => $post_field_data,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        ));

        // Execute cURL request and capture response
        $response = curl_exec($curl);

        $err = curl_error($curl);

        curl_close($curl);

        // Check for errors and display the response
        if ($err) {
            $return_response['response'] = $err;
        }
        else {
            $return_response['success'] = 1;
            $return_response['response'] = $response;
        }
    }
    catch (\Exception $exception) {
        $return_response['response'] = $exception->getMessage();
    }

    return $return_response;
}

// Example usage
$data = [
    '1' => [
        'random' => time()
    ]
];

$firebase_database_link = 'https://presentation-list-default-rtdb.firebaseio.com';
$firebase_presentation_database_section_key = '';
$response = updateFirebaseData($firebase_database_link . '/presentation', $firebase_presentation_database_section_key, $data);

echo '<pre>';
echo print_r($response);
echo '</pre>';
