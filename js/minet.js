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