var
b = false,
a = false,
c = false;
$('#admin').blur(function(){
	var reg = /^[a-zA-z][a-zA-Z0-9_]{5,9}$/;
	a = reg.test($('#admin').val());
	console.log(a) ;
	if (!a) {
		$('.admTxt').html('请输入6~10位以字母开头的账号')
	}else{
		$('.admTxt').html('')
	}
	
})

$('#psw').blur(function(){
	var reg = /.{6,}/;
	b = reg.test($('#psw').val());
	console.log(b) ;
	if (!b) {
		$('.admPsw').html('请输入6位以上的密码')
	}else{
		$('.admPsw').html('')
	}
	
})

$('#rpsw').blur(function(){
	c = $('#rpsw').val() == $('#psw').val();
	console.log(c)
	if (!c) {
		$('.admRpsw').html('两次输入的密码不同，请重新输入')
	} else{
		$('.admRpsw').html('')
	}
});

$('#regBtn').click(function(){
	console.log(a+" "+b+" "+c)
	if (a&&b&&c) {
		$('.ok span').html('注册成功')
	} else{
		$('.ok span').html('你输入的信息有误')
	}
	$('.ok span').animate({
		opacity:1
	},300,function(){
		setTimeout(function(){
			$('.ok span').animate({
				opacity:0
			},500)
		},2000)
	});
})























































