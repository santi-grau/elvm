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

function topbarclose(){
	$('.top-bar-close').toggleClass('active');	
	$('.top-bar-box').slideUp();
	$('#slider').toggleClass('active');
}


function lightbox(){
	$('.lightbox').fadeToggle();
	$('body').toggleClass('lightbox-active')
	fittobox();
}

/* Isotope for calendar */
function isotopeload(){
	$('.c2').isotope({
		itemSelector: '.calendar-article',
		masonry: {
			columnWidth: 252,
			gutter: 24
		}
	});
};