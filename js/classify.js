var
	iconUrl = 'http://datainfo.duapp.com/shopdata/getclass.php',
	classIdUrl = 'http://datainfo.duapp.com/shopdata/getGoods.php',
	mySwiper,
	myItem,
	mySecion,
	arrayClassId = [];
//商品类别
$.ajax({
	type: "get",
	url: iconUrl,
	success: function(data) {
		//				console.log(data)
		var
			array = JSON.parse(data),
			classifyNavItem = "",
			classifyWrap = '';

		for(var i = 0; i < array.length; i++) {
			var classId = array[i].classID;
			arrayClassId.push(classId);
			var fontStyle = array[i].icon;
			console.log(fontStyle)
				//			$('#classifyNav .swiper-slide').eq(i).html(fontStyle);
				//			console.log(fontStyle)
			classifyNavItem += '<div class="swiper-slide iconfont">' + fontStyle + '</div>';
			classifyWrap += '<div class="swiper-slide"> <div class="swiper-container item' + i + '"> <div class="swiper-wrapper"> <div class="swiper-slide content">2</div></div></div></div>'
		}
		//		console.log(arrayClassId)
		$('#classifyNav .swiper-wrapper').html(classifyNavItem);
		$('section .list>.swiper-wrapper').html(classifyWrap);
		//内容区定义
		mySecion = new Swiper('section .list', {
			onSlideChangeStart: function(swiper) {
				//		console.log(swiper.activeIndex)
				var listIndex = swiper.activeIndex
				mySwiper.slideTo(listIndex, 500, true)
				$('#classifyNav .swiper-slide').removeClass('active')
				$('#classifyNav .swiper-slide').eq(listIndex).addClass('active')
				f1(listIndex);

			},
			onInit: function(swiper) {
				f1(0);
			}
		});

		mySwiper = new Swiper('#classifyNav .swiper-container', {
			freeMode: true,
			freeModeMomentum: true,
			slidesPerView: 5,

			onTap: function(swiper) {
				tapIndex = swiper.clickedIndex
				console.log(tapIndex)
				mySecion.slideTo(tapIndex, 500, true)
				$('#classifyNav .swiper-slide').removeClass('active')
				$('#classifyNav .swiper-slide').eq(tapIndex).addClass('active')
					//				console.log(arrayClassId[tapIndex])

				//商品内容
				$.ajax({
					type: "get",
					url: classIdUrl,
					dataType: 'jsonp',
					data: 'classID=' + arrayClassId[tapIndex],
					success: function(data) {
						console.log(data)
						var goodsItem = '';
						for(var i = 0; i < data.length; i++) {
							var
								listImg = data[i].goodsListImg,
								goodsName = data[i].goodsName,
								goodNowPri = Math.round(data[i].price * data[i].discount / 10),
								goodOldPri = data[i].price;
							goodsItem += '<dl class="thing"><dd> <a href="detail.html?data=' + data[i].goodsID + '"><img src="' + listImg + '"/></a></dd><dt><a class="tit">' + goodsName + '</a><p><font color="#d51112">￥' + goodNowPri + '.00</font> <span>￥' + goodOldPri + '</span></p></dt> </dl>'
						}
						goodsItem += '<div class="swiper-scrollbar"></div>'
						var tem = '.item' + tapIndex;
						console.log(tem);
						$(tem + ' .content').html(goodsItem);
						myItem = new Swiper(tem, {
							scrollbar: '.swiper-scrollbar',
							direction: 'vertical',
							slidesPerView: 'auto',
							mousewheelControl: true,
							freeMode: true
						})
					}
				});
			},

		})

		$('#classifyNav .swiper-slide').eq(0).addClass('active')
	},
	error: function() {
		console.log('error')
	}

});

function f1(index) {
	$.ajax({
		type: "get",
		url: classIdUrl,
		dataType: 'jsonp',
		data: 'classID=' + arrayClassId[index],
		success: function(data) {
			console.log(data)
			var goodsItem = '';
			for(var i = 0; i < data.length; i++) {
				var
					listImg = data[i].goodsListImg,
					goodsName = data[i].goodsName,
					goodNowPri = Math.round(data[i].price * data[i].discount / 10),
					goodOldPri = data[i].price;
				goodsItem += '<dl class="thing"><dd> <a href="detail.html?data=' + data[i].goodsID + '"><img src="' + listImg + '"/></a></dd><dt><a class="tit">' + goodsName + '</a><p><font color="#d51112">￥' + goodNowPri + '.00</font> <span>￥' + goodOldPri + '</span></p></dt> </dl>'
			}
			goodsItem += '<div class="swiper-scrollbar"></div>'
			var tem = '.item' + index;
			console.log(tem);
			$(tem + ' .content').html(goodsItem);
			//命名标题
			$('.title').html(data[0].className)
			
			
			myItem = new Swiper(tem, {
				scrollbar: '.swiper-scrollbar',
				direction: 'vertical',
				slidesPerView: 'auto',
				mousewheelControl: true,
				freeMode: true
			})
		}
	});
}