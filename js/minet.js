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

var startDate = new Date(2016, 7, 13, 21, 41, 00);
var currentDate = new Date();
var interval = (startDate - currentDate);
var msecPerMinute = 1000 * 60;
var msecPerHour = msecPerMinute * 60;
var msecPerDay = msecPerHour * 24;

var days = Math.floor(interval / msecPerDay );
interval = interval - (days * msecPerDay );

var hours = Math.floor(interval / msecPerHour );
interval = interval - (hours * msecPerHour );

var minutes = Math.floor(interval / msecPerMinute );
interval = interval - (minutes * msecPerMinute );

var seconds = Math.floor(interval / 1000);

function timer(days, hours, minutes, seconds) {
    $("body#cryptx #countdown span#days").text("0" + days);
    $("body#cryptx #countdown span#hours").text("0" + hours);
    $("body#cryptx #countdown span#minutes").text("0" + minutes);
    $("body#cryptx #countdown span#seconds").text("0" + seconds);
    setInterval(function() {
      days = days;
      hours = hours;
      minutes = minutes;
      seconds = seconds;
      
      seconds--;
      
      if (seconds == -1) {
        seconds = 59;
        minutes--;
      } 
      if (minutes == -1) {
        minutes = 59;
        hours--;
      }
      
      if (hours == -1) {
        hours = 23;
        days--;
      }
      
      days = (days < 10) && (days.toString().length < 2) ? "0" + days : days; 
      hours = (hours < 10) && (hours.toString().length < 2) ? "0" + hours : hours; 
      minutes = (minutes < 10) && (minutes.toString().length < 2) ? "0" + minutes : minutes;
      seconds = (seconds < 10) && (seconds.toString().length < 2) ? "0" + seconds : seconds;
      $("body#cryptx #countdown span#days").text(days);
      $("body#cryptx #countdown span#hours").text(hours);
      $("body#cryptx #countdown span#minutes").text(minutes);
      $("body#cryptx #countdown span#seconds").text(seconds);
    }, 1000);
}

timer(days, hours, minutes, seconds);