$(document).ready(function(){
	$('.boxrm1').mousemove(function(){
		var _index = $(this).index();
		$('.boxrm1-o>img').eq(_index).css({
			'transition': '2s',
			'transform': 'scale(1.4,1.4)'
		});
	});
	$('.boxrm1').mouseout(function(){
		var _index = $(this).index();
		$('.boxrm1-o>img').eq(_index).css({
			'transition': '2s',
			'transform': 'scale(1,1)'
		});
	});
});