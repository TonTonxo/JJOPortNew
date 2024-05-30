<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Retrieve form values
$name    = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email   = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($_POST['phone_number']) ? strip_tags(trim($_POST['phone_number'])) : '';
$subject = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Validate form values
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    // Required fields are missing
    http_response_code(400);
    echo "Please complete all required fields.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Invalid email address
    http_response_code(400);
    echo "Invalid email address.";
    exit;
}

// Set the recipient email address
$to = 'demo@demo.com';

// Set the email headers
$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Construct the email body
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Phone: $phone\n";
$email_content .= "Subject: $subject\n\n";
$email_content .= "Message:\n$message\n";

// Send the email
$success = mail($to, $subject, $email_content, $headers);

// Respond to the client
if ($success) {
    http_response_code(200);
    echo "Thank you! Your message has been sent.";
} else {
    http_response_code(500);
    echo "Oops! Something went wrong, and we couldn't send your message.";
}

?>