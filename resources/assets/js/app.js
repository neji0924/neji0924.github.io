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

//loading

$("#loading .loading").hide();
$("#loading button").click(function() {
	$("#loading .loading").show();
	setTimeout(function() {$("#loading .loading").hide(); }, 2000)
});


/////////////////////////////////////////////////////
var fullpageClass = {
    init: function() {
        this.setAnimationDelay();
        $('#fullpage').fullpage({
            anchors: ['first', 'second', 'third', 'fourth'],
            menu: '#menu',
            onLeave: function(index, nextIndex, direction) {
                $(this).addClass('fadeOut').removeClass('fadeIn');
                $('.fp-section').eq(nextIndex - 1).removeClass('fadeOut').addClass('fadeIn');

                switch (index)
                {
                    case 1 :
                        $('.fp-section').eq(0).find('div').removeClass('fadeInUp');
                        break;
                    case 2 :
                        $('#profile pre').removeClass('rollIn');
                        $('#profile img').removeClass('pulse');
                        break;
                    case 3 :
                        $('#skills').find('div').removeClass('fadeInUp');
                        break;
                    case 4 :
                        $('.fp-section').eq(3).find('p').removeClass('zoomIn');
                        break;
                }

                switch (nextIndex)
                {
                    case 1 :
                        $('.fp-section').eq(0).find('div')
                            .addClass('fadeInUp')
                            .css('animation-delay', '.3s');
                        break;
                    case 2 :
                        $('#profile pre').addClass('rollIn');
                        $('#profile img').addClass('pulse');
                        break;
                    case 3 :
                        $('#skills > div > div').addClass('fadeInUp');
                        break;
                    case 4 :
                        $('.fp-section').eq(3).find('p').addClass('zoomIn');
                        break;
                }
            }
        });
    },
    setAnimationDelay: function() {
        $('#skills > div').eq(0).css('animation-delay', '.3s');
        $('#skills > div').eq(1).css('animation-delay', '.5s');
        $('#skills > div').eq(2).css('animation-delay', '.6s');
        $('#skills > div').eq(3).css('animation-delay', '.7s');
        $('#projects > p').css('animation-delay', '.5s');
    }
}

$(function(){
    fullpageClass.init();
    $("#loading").hide();
});
