<?php

$device_token = '';
$notification_data = [
    'title' => 'Hello',
    'body' => 'bodyyyyyy'
];

$fcm_response = sendFirebaseNotification($device_token, $notification_data);
echo '<pre>';
echo print_r($fcm_response);
echo '</pre>';
function sendFirebaseNotification($device_tokens, $notification_data, $data_payload = []) : array {
    /**
    Notification data array format
    $notification_data['title'] = '';
    $notification_data['body'] = '';
    $notification_data['image'] = '';
    $notification_data['click_action'] = '';
     */

    $api_key = 'AAAAeuAWvfs:APA91bGzyTgYI8im6c8c8AvZnTHypJKizuI6JqewDF3FGusamYhSZLqwOkOKyh1LYgC1qIFCyqXOuwhZ7pAr13v9awOb1v0WXnwehJWiu0zihgKaei9tshPj0E7abL7mWBX2PZ0HNesS';
    $header = [
        'Authorization: key='. $api_key,
        'Content-Type: application/json'
    ];

    $prepare_notification_data = [
        'notification' => $notification_data,
        // 'time_to_live' => 3600
        // 'click_action' => ''
    ];
    if (!empty($data_payload)) {
        $prepare_notification_data['data'] = $data_payload;
    }
    if (is_array($device_tokens)) {
        $prepare_notification_data['registration_ids'] = $device_tokens; // send notification to multiple devices
    }
    else {
        $prepare_notification_data['to'] = $device_tokens; // send notification to a specific device
    }

    $notification_json_data = json_encode($prepare_notification_data);
    $url = "https://fcm.googleapis.com/fcm/send";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $notification_json_data);
    curl_setopt($ch, CURLOPT_VERBOSE,TRUE);
    $curl_result =curl_exec($ch);
    $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $notification_response = [];

    $curl_result_arr = json_decode($curl_result, true);
    $success = $curl_result_arr['success'] ?? 0;
    if ($status_code == 200 && $success) {
        $notification_response['status'] = 1;
    }
    else {
        $notification_response['status'] = 0;
    }
    $notification_response['response'] = $curl_result_arr;

    return $notification_response;
}
