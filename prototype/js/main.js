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
	var $container = $('.c2');
	$container.isotope({
		itemSelector: '.calendar-article',
		masonry: {
			columnWidth: 252,
			gutter: 24
		}
	});
};


$("#video").okvideo({
	source: '9bZkp7q19f0',
	volume: 0,
	loop: true,
	hd:true,
	adproof: true,
	annotations: false,
	onFinished: function() { console.log('finished') },
	unstarted: function() { console.log('unstarted') },
	onReady: function() { alert('a') },
	onPlay: function() { console.log('onplay') },
	onPause: function() { console.log('pause') },
	buffering: function() { console.log('buffering') },
	cued: function() { console.log('cued') }
});