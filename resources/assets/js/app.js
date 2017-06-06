$(".close").click(function() {
	$(this).parents(".box").hide(100);
});

$(".desktop a").dblclick(function() {
	$("#" + $(this).data('target')).show(100);
})

$(".desktop a, .box").draggable();
