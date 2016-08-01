<section id="invite-form">

	<div class="container">

		<div class="card">
			
			<h1>Request Invite</h1>
			
			<form id="request-form" action="js/validate.php">

				<div class="result"></div>
				<p>Please fill in the following details:</p>
						
				<input type="text" name="name" id="name" placeholder="Institution Name" required>
				<input type="email" name="email" id="email" placeholder="Email" required>
				<input type="text" name="tel" id="tel" placeholder="Contact Number" required>

				<textarea placeholder="Website/Relevant link" maxlength="420" rows="10" required name="link" id="link" resizable="false"></textarea>

				<input type="submit" value="Request Invite">

			</form>

		</div>
				
	</div>

</section>