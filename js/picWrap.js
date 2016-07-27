var i = 2;
var rgb = [];
rgb[0] = [29, 88, 118];
rgb[1] = [247, 202, 212];
rgb[2] = [169, 203, 200];
rgb[3] = [2, 2, 4];
var outl = $(".out-left");
var outr = $(".out-right");
var picPoint = $(".wrap-point");
var backimg = $("#backpic");
var timer;
$(function() {
	var menuWrap = $(".menu-wrap");
	var pastBtn = $(".past-btn");
	var nextBtn = $(".next-btn");
	var navSearch = $(".nav-sear");
	navSearch.find("input").focus(function(){
		$(this).parent().css("background-color","#fff");
	}).blur(function(){
		$(this).parent().css("background-color","#5c5f68");
	});
	setInterval(picRound, 6000);
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$(".nav-fixed").show();
		} else {
			$(".nav-fixed").hide();
		}
	});
	menuWrap.mouseover(function() {
		pastBtn.show();
		nextBtn.show();
	});
	menuWrap.mouseleave(function() {
		pastBtn.hide();
		nextBtn.hide();
	});
	pastBtn.on("click", function() {
		i -= 2;
		picRound();
	});
	nextBtn.on("click", function() {
		picRound();
	});
	var menuList = $(".menu-list li");
	var closeBtn = $(".close_pop");
	var popLoc = $(".menu-wrap");
	menuList.on("mouseover",showBox);
	popLoc.on("mouseleave", hideBox);
	closeBtn.on("click", hideBox);
})

function picRound() {
	backimg.fadeOut("slow", function() {
		if(i >= 5) {
			i = 1;
		} else if(i <= 0) {
			i = 4;
		}
		$(this).attr("src", "img/img" + i + ".jpg");
		picPoint.find("#point-" + i).animate({
			height: "16px"
		}, 200, function() {
			$(this).siblings().css("height", "8px");
		});
		outl.css("background", "rgb(" + rgb[i - 1] + ")");
		outr.css("background", "rgb(" + rgb[i - 1] + ")");
		i++;
	}).fadeIn("slow");
}

function showBox() {
	$(".serial-class img").attr("src", "img/" + $(this).attr("id") + ".png");
	$(".menu-pop").fadeIn();
	$(this).css({"background-color": "rgb(255,255,255)","color": "#333"}).siblings().css({
			"background-color": "",
			"color": "#fff"
	});
}
function hideBox() {
	$(".menu-pop").hide();
	$(".menu-list li").css({
		"background-color": "",
		"color": "#fff"
	});
}