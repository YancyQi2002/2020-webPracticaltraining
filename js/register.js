$(function(){
	// 密码验证
	var pwd = $('#password');
	var prompt = $('#prompt1');
	var rag1 = /^\w{8,20}$/;
	var rag2 = /^\d{8,20}$/;
	var rag3 = /^[A-z0-9]{8,10}$/;
	var rag4 = /^[A-z0-9]{10,19}$/;
	pwd.focus(function(){
		$('#div1').show();
		pwd.css('borderColor','#67a1e2');
		$('#div1').css('width',216);
		prompt.text("请设置登录密码");
		$('#div1').css('backgroundColor','#fff5D1');
		$('#grade1').css('backgroundColor','#f1d0b9');
		$('#grade1').css('color','#fff');
		$('#grade2').css('backgroundColor','#f1d0b9');
		$('#grade2').css('color','#fff');
		$('#grade3').css('backgroundColor','#f1d0b9');
		$('#grade3').css('color','#fff');
	});
	pwd.blur(function(){
		pwd.css('backgroundColor','#ddd');
		if(this.value == ""){
			$('#div1').css('width',216);
		}
		else {
			if(rag1.test(this.value) == true){
				if(rag2.test(this.value) == true){
					prompt.text('密码过于简单，有被盗风险');
					$('#div1').css('width',216);
					$('#div1').css('backgroundColor','#fff5D1');
				}
				if(rag2.test(this.value) == false){
					$('#div1').hide();
				}
				if(rag3.test(this.value) == true){
					if(rag2.test(this.value) == true) {
						$('#grade1').css('backgroundColor','#ff893a');
					}
					else {
						$('#grade1').css('backgroundColor','#ff893a');
						$('#grade2').css('backgroundColor','#ff893a');
					}
				}
				if(rag4.test(this.value) == true){
					if(rag2.test(this.value) == true) {
						$('#grade1').css('backgroundColor','#ff893a');
					}
					else {
						$('#grade1').css('backgroundColor','#ff893a');
						$('#grade2').css('backgroundColor','#ff893a');
						$('#grade3').css('backgroundColor','#ff893a');
					}
				}
			}
			else {
				prompt.text("密码需为8-20个字符，由字母、数字和符号组成。");
				$('#div1').css('width',360);
				$('#div1').css('backgroundColor','#fff5D1');
			}
		}
	});
	
	// 确认密码验证
	var pwds = $('#password1');
	var prompt2 = $('#prompt2');
	pwds.focus(function(){
		$('#div2').show();
		prompt2.text("请再次输入密码");
		$('#div2').css('backgroundColor','#fff5D1');
	});
	pwds.blur(function(){
		if(this.value == ""){
			prompt2.text("确认密码不能为空");
			$('#div2').css('backgroundColor','#fff5D1');
		}
		else {
			if(this.value == pwd.val()){
				$('#div2').hide();
			}
			else{
				prompt2.text("你两次输入的密码不一致");
			}
		}
	});
	
	// 手机号验证
	var phone = $('#phone');
	var prompt3 = $('#prompt3');
	var rag5 = /^[1][358][0-9]{9}$/;
	phone.focus(function(){
		$('#div3').show();
		phone.css('backgroundColor','#67a1e2');
		prompt3.text('请输入手机号');
		$('#div3').css('backgroundColor','#fff5D1');
	});
	phone.blur(function(){
		phone.css('backgroundColor','#ddd');
		if(this.value == ""){
			prompt3.text('手机号不能为空');
			$('#div3').css('backgroundColor','#fff5D1');
		}
		else {
			if(rag5.test(this.value) == true){
				$('#div3').hide();
			}
			else {
				prompt3.text('手机号格式不正确');
				$('#div3').css('backgroundColor','#fff5D1');
			}
		}
	});
});