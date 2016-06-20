$(function() {

	$(window).scroll(function(){
		var top1 = $(window).scrollTop();
		if(top1>150){
			$('.topheader').addClass('on')
		}else{
			$('.topheader').removeClass('on')
		}

        if(top1>380){
            $('.fixRight').addClass('on')
        }else{
            $('.fixRight').removeClass('on')
        }
	})


	var winW=$(document.body).width();
    var index = -1;
    var Lindex=-1;
    // 自动轮播
    var t = setInterval(function() {
        index++;
        if (index == 8) {
            index = 0;
        }
        Lindex++;
         if (Lindex == 2) {
            Lindex = 0;
        }

        $('.slide .slide-list').stop().animate({ left: -winW* index + 'px' });
        $('.slide .swiper-pagination .swiper-pagination-bullet ').eq(index).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active')
       
       $('.littslide .swiper-wrapper').stop().animate({ left: -winW* Lindex + 'px' });
        $('.littslide .swiper-pagination .swiper-pagination-bullet ').eq(Lindex).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active')
       
        $('.littleSlide .con .swiper-wrapper').stop().animate({ left: -winW* Lindex + 'px' });
        $('.littleSlide .con .swiper-pagination .swiper-pagination-bullet ').eq(Lindex).addClass('swiper-pagination-bullet-active').siblings().removeClass('swiper-pagination-bullet-active')
       


    }, 3000);


    // 分类分页面的js效果
    $('.content .slide-nav ul li').each(function(i){
        $(this).click(function(){

            $('.content .slide-nav ul li a').removeClass('on');
            $(this).addClass('on').addClass('on').siblings().removeClass('on');
            $('.content .slide-nav ul li a').eq(i).addClass('on');
            $('.content .slide-nav').animate({ top: -(i-1)* 53 + 'px' });

        })
    })
})
