/*
Powered by ly200.com		http://www.ly200.com
广州联雅网络科技有限公司		020-83226791
*/

$(function(){
	nav('#header .nav_box','#header .nav_box .n_item');

	$(".product_region .pro_list .menu .name").click(function(){
		var subul = $(this).next('.sublist');
		if(subul.length){
			$(this).toggleClass('on');
			subul.toggle();
		}
	});

	$(".product_region .pro_list .pro_cate_box .menu .name_item .item .sublist li .sub_name").click(function(){
		var subul = $(this).next('.threelist');
		if(subul.length){
			$(this).toggleClass('on');
			subul.toggle();
		}
	});
	
	$(".product_region .pro_list .menu .name, .product_region .pro_list .pro_cate_box .menu .name_item .item .sublist li .sub_name").on("click", "a", function(e) { 
        e.stopPropagation();
    });

	$('.icon_search').on('click',function(){
        if($('.search_box').hasClass('on')){
            $('.search_box').removeClass('on');
            $('.search_box').css({'opacity':'0'});
        }else{
            $('.search_box').addClass('on');
            $('.search_box').css({'opacity':'1'});
        }
    });

	$('.access_control .access_box .cutover_park .cutover_list .item').mouseenter(function(){
		var num = $(this).attr('data-num');
		$(this).addClass('on').siblings().removeClass('on');
		$("#area_"+num).addClass('show').siblings().removeClass('show');
	});

	$('.cases_and_news .cn_btn_box .cn_btn.case_btn').on('click', function(){
		$(this).addClass('cur')
		$(this).siblings().removeClass('cur')
		$('.info_switch_btn').hide();
		$('.case_switch_btn').show();
		$('#info_list').removeClass('show');
		$('#case_list').addClass('show');
	});
	$('.cases_and_news .cn_btn_box .cn_btn.new_btn').on('click', function(){
		$(this).addClass('cur')
		$(this).siblings().removeClass('cur')
		$('.info_switch_btn').show();
		$('.case_switch_btn').hide();
		$('#case_list').removeClass('show');
		$('#info_list').addClass('show');
	});

	$(".p_select_menu .menu_title").click(function(){
        if($(".p_select_menu .menubox").hasClass("show")){
            $(".p_select_menu .menubox").hide().removeClass("show");
        }else{
            $(".p_select_menu .menubox").show().addClass("show");
        }
    })

	$(document).bind('click', function(e) {  
        var clickme = $(e.target);  
        if (!clickme.hasClass("select_title")) {
            $(".attr_menu .selectbox").hide();
            $(".attr_menu .selectbox").removeClass("show");
        }
		if (!clickme.hasClass("menu_title")) {
            $(".p_select_menu .menubox").hide();
            $(".p_select_menu .menubox").removeClass("show");
        }
    });

	if($('.article_region .category_list .menu .item').length == 1){
		$('.article_region .category_list .menu').hide();
	}

	if($('.article_region .category_list .p_select_menu .menubox .list').length == 1){
		$('.article_region .category_list .p_select_menu').hide();
	}

	/*
	$(document).on("mousewheel DOMMouseScroll", function (e) {
		// jq 获取dom 事件对象要通过originalEvent 
		$(window).scroll(function(){
			var header = $("#header");
			var h_top = $('#header').outerHeight();
			var win_top = $(window).scrollTop();
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // (chrome & ie) || firefox
				if (delta > 0) {
				// 向上滚
				if(win_top == 0){
					header.removeClass('active_fixed');
					header.removeClass('on_fixed');
					header.removeClass('translate_y_dump');
				}
			} else if (delta < 0) {
				// 向下滚
				if(win_top >= 150 ){
					header.removeClass('translate_y_dump');
					header.addClass('on_fixed');
					if(header.hasClass('active_fixed')){
						clearTimeout();
					}else{
						setTimeout(function(){
							header.addClass('active_fixed');
						},400);
					}
				}
			}
		});
	});
	*/

	var wow = new WOW().init();	
});