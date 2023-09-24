$(function() {
	$('#gnb .n')
	
	  .on('mouseover', function() {
			$('ul', this).show();
			$(this).siblings('li').find('ul').hide();
			$(this).addClass('on').siblings('li').removeClass('on');

		}).on('mouseleave', function() {
			$('#gnb ul').hide().add('#gnb .n').removeClass('on');
		})
})
