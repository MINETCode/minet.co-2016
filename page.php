<?php
	if (!isset($_GET["page"])) {
		header("Location: ?page=home");
	}
	if ($_GET["page"] == "x") {
		header("Location: https://x.minet.co");
	}
?>
<!doctype html>
<html lang="en">

	<head>

		<title>MINET X</title>

		<meta charset="utf-8">
		<meta name="author" content="The MINET Team">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" type="text/css" href="css/app.css">

		<link rel="icon" type="image/png" href="img/icon.png">
		<link rel="apple-touch-icon-precomposed" href="img/icon.png">
		<meta name="theme-color" content="#2979ff">

	</head>

	<body id="<?php echo $_GET["page"] ?>">

		<?php include "php/header.php" ?>

		<?php
			if (file_exists("php/" . $_GET["page"] . ".php")) {
				include "php/" . $_GET["page"] . ".php";
			} else {
				include "php/404.php";
			}
		?>

		<?php include "php/footer.php" ?>


		<script src="https://use.typekit.net/ucv3orh.js"></script>
		<script>try{Typekit.load({ async: true });}catch(e){}</script>
		<script type="text/javascript" src="js/jquery-1.10.1.min.js"></script>
		<script type="text/javascript" src="js/minet.js"></script>
	</body>

</html>
