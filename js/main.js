
$(window).bind({
	'load' : init,
	'resize' : resizing
});

function init(){
	fittobox(); // fittobox
	mainfadein(); // fadein content
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
	$('.top-bar-box').slideToggle();
	$('.top-bar-close').fadeToggle();
}

function lightbox(){
	$('.lightbox').fadeToggle();
	$('body').toggleClass('lightbox-active')
	fittobox(); // fittobox
}

/* Isotope for calendar */
$(window).load(function(){
	var $container = $('.c2');
	$container.isotope({
		itemSelector: '.calendar-article',
		masonry: {
		  columnWidth: 252,
		  gutter: 24
		}
	});
});