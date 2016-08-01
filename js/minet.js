$("body#schedule #schedule-table .toggle-btn").click(function() {

	if ($(this).hasClass("selected")) {
		//do nothing lol
	} else {
		$(".toggle-btn.selected").removeClass("selected");
		$(this).addClass("selected");
	}

	var dayInfo = $(this).attr('id');
	var tableid = "#" + dayInfo;
	$("#schedule-table table.selected").removeClass("selected");
	$("#schedule-table").find("table" + tableid).addClass("selected");

});

$('body#request form#request-form').on('submit', function(e) {

    var form = $("form#request-form");
    var resultMessage = $(".result");

    e.preventDefault();

    var proceed = false;

    if ($('input[name="name"]').val() != null &&
        $('input[name="email"]').val() != null &&
        $('input[name="tel"]').val() != null &&
        $('textarea[name="link"]').val() != null) {

        proceed = true;

    }

    if (proceed) {

        var applicationData = $(form).serialize();

        $.ajax({

            type: 'POST',
            url: $(form).attr("action"),
            data: applicationData,

        })

        .done(function(response) {

            $("#request-form p, #request-form input, #request-form textarea").hide();
            $(resultMessage).show();
            $(resultMessage).removeClass("error");
            $(resultMessage).addClass("success");

            $(resultMessage).text(response);

            $('input[type=text]').val('');
            $('input[type=email]').val('');
            $('textarea').val('');

        })

        .fail(function(data) {

            $("#request-form p, #request-form input, #request-form textarea").hide()
            $(resultMessage).show();
            $(resultMessage).removeClass("success");
            $(resultMessage).addClass("error");

            if (data.responseText != '') {

                $(resultMessage).text(data.responseText);

            } else {

                $(resultMessage).text('Oops! An error occurred.');

            }

        });

    }

});