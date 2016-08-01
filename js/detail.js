var str = window.location.search,
	goodsID = str.slice(str.search(/\d+/)),
	mySwiperDec;
//	console.log(goodsID)
$('.back').click(function() {
	window.history.back(-1);
})

var decPicUrl = 'http://datainfo.duapp.com/shopdata/getGoods.php';
$.ajax({
	type: "get",
	url: decPicUrl,
	dataType: 'jsonp',
	data: 'goodsID='+goodsID,
	success: function(data) {
		console.log(data)
		var pic = data[0].goodsBenUrl,
			benPicHtml = '',
			goodsDecHtml = '',
		pic = JSON.parse(pic);
		//		console.log(pic.length)

		for(var i = 0; i < pic.length; i++) {
			benPicHtml += '<div class="swiper-slide"> <img src="' + pic[i] + '"/> </div>';
		};
		$('.describePic .swiper-wrapper').html(benPicHtml);
		mySwiperDec = new Swiper('.describePic', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
		})
		
		//描述
		goodsDecHtml = '<span class="goodsTit">'+data[0].goodsName+'</span> <p><b>￥'+Math.round(data[0].price*data[0].discount/10)+'.00</b> <span>'+data[0].price+'.00</span> </p> <i class="sellNumber">购买人数：'+data[0].buynumber+'</i>';
		$('section .goodsDesc').html(goodsDecHtml);
		$('.goodsDescMore a').attr('href','describe.html?data='+goodsID)
	}
});