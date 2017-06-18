function full(obj) {
	if (obj.parents(".box").hasClass('full') ) {
		obj.parents(".box").removeClass('full').css('top', "10%").css('left', "10%");
	} else {
		obj.parents(".box").addClass('full').css('top', 0).css('left', 0);
	}
};

$(".close").click(function() {
	$(this).parents(".box").hide(100);
});

$(".desktop .computer, .desktop .doc").dblclick(function() {
	$("#" + $(this).data('target')).show(100);
});

$(".desktop > div, .box").draggable();
$(".content a").draggable({
	                containment: "parent",
	                scroll: false
	        	});

$(".box > .tool").dblclick(function() {
	full($(this));
});

$(".full-btn").click(function() {
	full($(this));
})

$(".content a").dblclick(function() {
	$("#" + $(this).data('target')).show(100);
});

$(".desktop .chrome").dblclick(function() {
	location.href = $(this).data('target');
});


//banner

$("#my-banner a").css({
	"height": $("#my-banner .banner img").css("height")
});

$("#my-banner .next").click(function() {
	var $temp = $("#my-banner > .banner > div").eq(0).clone(true);
	$("#my-banner > .banner").append($temp);
	$("#my-banner > .banner > div").eq(0).remove();
});

$("#my-banner .prev").click(function() {
	var $temp = $("#my-banner > .banner > div").last().clone(true);
	$("#my-banner > .banner").prepend($temp);
	$("#my-banner > .banner > div").last().remove();
});

