var str = window.location.search,
	goodsID = str.slice(str.search(/\d+/));
	
$('.back').click(function() {
	window.history.back(-1);
})
var desPicSwiper;
$.ajax({
	type: "get",
	url: "http://datainfo.duapp.com/shopdata/getGoods.php",
	data: 'goodsID='+goodsID,
	dataType: 'jsonp',
	success: function(data) {
		console.log(data)
		var desPic = data[0].imgsUrl,
		desPic = JSON.parse(desPic),
		desPicHtml = '',
		desDetailHtml = '';
		desDetail = data[0].detail.split('。');
		console.log(desDetail)
		for (var j=0;j<desDetail.length;j++) {
			desDetailHtml += '<p>'+desDetail[j]+'</p>'
		}
		
		
		for(var i = 0; i < desPic.length; i++) {
			desPicHtml += '<img src="' + desPic[i] + '"/>'
		}
		desPicHtml += desDetailHtml;
		$('.desText .swiper-slide').html(desPicHtml);
		desPicSwiper = new Swiper('.desText', {
			direction: 'vertical',
			slidesPerView: 'auto',
			mousewheelControl: true,
			freeMode: true
		})
	}
});