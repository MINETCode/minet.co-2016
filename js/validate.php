<?php

    //Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {


        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $link = trim($_POST["link"]);
        $contact = $_POST["tel"];

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($link) OR empty($contact) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "minet@themis.in";

        // Set the email subject.
        $subject = "$name wants an invite to X 2016";

        // Build the email content.
        $email_content = "Institution Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Contact Number: $contact\n\n";
        $email_content .= "Website/Relevant link: \n$link\n";

        // Build the email headers.
        $email_headers = "From: MINET <minet@themis.in>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers, "-f minet@themis.in")) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Your request has been sent successfully. We'll be in touch.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>