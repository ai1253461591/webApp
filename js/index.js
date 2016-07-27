var baseUrl = "http://datainfo.duapp.com/shopdata/getBanner.php";
var mySwiper;
$.ajax({
	type:"GET",
	dataType:"jsonp",
	url:baseUrl,
	success:function(data){
		var 
		img1 = JSON.parse(data[0].goodsBenUrl)[0],
		img2 = JSON.parse(data[1].goodsBenUrl)[0],
		img3 = JSON.parse(data[2].goodsBenUrl)[0],
		img4 = JSON.parse(data[3].goodsBenUrl)[0],
		ban1 = $('#prdListCon .n1 img'),
		ban2 = $('#prdListCon .n2 img'),
		ban3 = $('#prdListCon .n3 img'),
		ban4 = $('#prdListCon .n4 img');
		ban1.attr('src',img1);
		ban2.attr('src',img2);
		ban3.attr('src',img3);
		ban4.attr('src',img4);
		
		mySwiper = new Swiper('.swiper-container', {
			loop: true,
			paginationClickable :true,
			autoplay: 2500,
			// 如果需要分页器
			pagination: '.swiper-pagination'
		})
	

		
	}
});

//$.ajax({
//	type:"get",
//	url:"http://datainfo.duapp.com/shopdata/getGoods.php",
//	dataType:"jsonp",
//	success:function(data){
//		var shopHtml = "";
//		for (var i=0;i<data.length;i++) {
//			shopHtml += '<li class="prdListItem"><a class="prdpic" href="'+'detal'+ goodsID +'"><img src="'+data[i].goodsListImg+'">'
//		}
//	}
//});





















