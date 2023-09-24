$(function() {
	$('#gnb .n')
	
	  .on('mouseover', function() {
			$('ul', this).show();
			$(this).siblings('li').find('ul').hide();
			$(this).addClass('on').siblings('li').removeClass('on');

		}
})
