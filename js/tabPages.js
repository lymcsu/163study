$(function() {
	var indexPage = $(".tab-index");
	var notePage = $(".tab-note");
	var talkPage = $(".tab-comment");
	var consultDetail = $(".consult-cont-detail");
	var hideBtn = $(".hide-btn");
	var logList = $(".catalog-list li");
	var selectPop = $(".select-pop");
	var searchSelect = $(".search-select div");
	var sideBtn = $(".side-btn");
	var serviceBox = $(".service-box");
	var linkA = $(".pop-func a:first");
	var shareLink = $(".a-link");
	var noteList = $(".note-list");
	var popCourse = $(".course-pop");
	$("#J-index").on("click", function() {
		$(this).addClass("tab-active").removeClass("tab-bars-a").siblings().removeClass("tab-active").addClass("tab-bars-a");
		indexPage.show();
		notePage.hide();
		talkPage.hide();
	})
	$("#J-note").on("click", function() {
		$(this).addClass("tab-active").removeClass("tab-bars-a").siblings().removeClass("tab-active").addClass("tab-bars-a");
		indexPage.hide();
		notePage.show();
		talkPage.hide();
	})
	$("#J-talk").on("click", function() {
		$(this).addClass("tab-active").removeClass("tab-bars-a").siblings().removeClass("tab-active").addClass("tab-bars-a");
		indexPage.hide();
		notePage.hide();
		talkPage.show();
	})
	logList.on("mouseover", function() {
		$(this).find(".list-time").hide().end().find(".hide-eye").show().end().one("mouseleave", function() {
			$(this).find(".list-time").show().end().find(".hide-eye").hide();
		});
	})
	consultDetail.one("mouseover", function() {
		hideBtn.slideDown("fast");
	})
	hideBtn.on("mouseleave", function() {
		hideBtn.fadeOut(50, function() {
				consultDetail.one("mouseover", function() {
				hideBtn.show();
			})
		});
	})
	var selectPop_div = selectPop.find("div");
	selectPop_div.on("click",function(){
			alert(this.id);
			$(".select-pop").hide();
		})
	searchSelect.focus(function() {
		selectPop.show();
	}).blur(function() {
		setTimeout(function(){
			selectPop.hide();
		},100);
	})
	sideBtn.eq(0).hover(
		function() {
			$(this).find("span").show().end().find(".side-btn-img").hide().end().css({
				"background-color": "#39a030",
				"border-radius": "6px 6px 0 0"
			});
			serviceBox.show();
		},
		function() {
			$(this).find("span").hide().end().find(".side-btn-img").show().end().css({
				"background-color": "#fff"
			});
			serviceBox.hide();
		}
	).end().eq(1).hover(
		function() {
			$(this).find("span").show().end().find(".side-btn-img").hide().end().css({
				"background-color": "#39a030"
			});
		},
		function() {
			$(this).find("span").hide().end().find(".side-btn-img").show().end().css({
				"background-color": "#fff"
			});
		}
	).end().eq(2).hover(
		function() {
			$(this).find("span").show().end().find(".side-btn-img").hide().end().css({
				"background-color": "#39a030",
				"border-radius": "0px 0px 6px 6px"
			});
		},
		function() {
			$(this).find("span").hide().end().find(".side-btn-img").show().end().css({
				"background-color": "#fff"
			});
		}
	);
	linkA.hover(
		function() {
			shareLink.show();
		},
		function() {
			shareLink.hide();
		}
	);
	noteList.hover(
		function(){
			$(this).find(".J-onload-time").html("进入详情页").parent().find(".J-tip").html("举报");
		},
		function(){
			$(this).find(".J-onload-time").html("3月22日").parent().find(".J-tip").html("");
		}
	)
	$(window).scroll(function(){
		if($(this).scrollTop()>20){
			$(".side-menu").show();
		}else{
			setTimeout(function(){
				$(".side-menu").hide();
			},400)
		}
	});
	$("#J-popCourse").hover(
		function(){
			popCourse.show();
		},
		function(){
			popCourse.hide();
		}
	);
	popInfoBox();
})

function popInfoBox() {
	var popLink = $(".pop-link");
	var popInfo = $(".userinfo-box");
	var inTime,outTime;
	popLink.on("mouseover", function(e) {
		clearTimeout(outTime);
		inTime = setTimeout(function() {
			var event = e || window.event;
			var _overlength = $(document).width() - event.clientX - 280;
			if(_overlength < 0) {
				popInfo.css({
					"left": event.clientX,
					"top": event.clientY + 10,
					"margin-left": -20 + _overlength
				}).show();
				return;
			} else {
				popInfo.css({
					"left": event.clientX,
					"top": event.clientY + 20,
					"margin-left": -40
				}).show();
				return;
			}
		}, 400);
	});
	popLink.on("mouseleave", function() {
		clearTimeout(inTime);
		outTime = setTimeout(function(){
			popInfo.hide();
		},100);
	});
	popInfo.hover(
		function(){
			clearTimeout(outTime);
		},
		function(){
			outTime = setTimeout(function(){
				popInfo.hide();
			},100);
		}
	)
}