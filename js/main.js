$(window).bind({
	'load' : init,
	'resize' : resizing
});

function init(){
	fittobox(); // fittobox
	mainfadein(); // fadein content
	isotopeload();
}

function resizing(){
	fittobox(); // ajusta las imágenes con la clase fittobox
}

function fittobox(){
	$('.fittobox').each(function(){
		$(this).fitToBox();
	});
}

function mainfadein(){
	$('#main').fadeIn();
}

function topbartoggle(){
	$('#top-bar').toggleClass('active');
	$('.top-bar-box').slideToggle();
	$('.top-bar-close').fadeToggle();	
	if(topbarID != false) {
		clearInterval(topbarID);
		topbarID = false;
	}
}

function lightbox(){
	$('.lightbox').fadeToggle();
	$('body').toggleClass('lightbox-active')
	fittobox();
}

/* Isotope for calendar */
function isotopeload(){
	var $container = $('.c2');
	$container.isotope({
		itemSelector: '.calendar-article',
		masonry: {
			columnWidth: 252,
			gutter: 24
		}
	});
};