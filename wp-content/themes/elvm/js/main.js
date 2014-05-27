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


if($('#video').length){
	var video = $('#video');
	var iframe = $('#video iframe');
	var vi = new RegExp(/vimeo.com\/\d+$/i);
	var yt = new RegExp(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
	if(vi.test(video.attr('url'))){
		var id = video.attr('url').match(/\d+$/i)[0];
		$.getJSON( 'http://vimeo.com/api/v2/video/' + id + '.json', function( data ) {
			iframe.attr({
				src : '//player.vimeo.com/video/78921182?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1;',
				width : data[0].width,
				height : data[0].height,
				w : data[0].width,
				h : data[0].height
			});
			fullscreenVideo();
		});
	}else if(yt.test(video.attr('url'))){
		var id = (video.attr('url').match(/v=(\S+)($)?/i) || video.attr('url').match(/youtu.be\/(\S+)($)?/i) || video.attr('url').match(/embed\/(\S+)($)?/i))[1].split('&')[0];
		var url = 'http://query.yahooapis.com/v1/public/yql';
		var query = "select * from json where url ='http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v="+id+"&format=json'";
		$.ajax({
			url: url,
			data: { q: query, format: "json" },
			dataType: "jsonp",
			success: function(data){
				iframe.attr({
					src : '//www.youtube.com/embed/cIpo9_Fh8oE?autoplay=1',
					width : data.query.results.json.width,
					height : data.query.results.json.height,
					w : data.query.results.json.width,
					h : data.query.results.json.height
				});
				fullscreenVideo();
			}
		});
	}else{
		console.error('Wrong video url')
	}
	var fullscreenVideo = function(){
		var iframeAR = iframe.attr('h') / iframe.attr('w');
		var videoAR = video.height() / video.width();
		var w = video.height() / iframeAR;
		var h = video.height();
		if(iframeAR > videoAR){
			var w = video.width();
			var h = video.width() * iframeAR;
		}
		iframe
		.attr({
			width : w,
			height : h
		})
		iframe
		.css({
			left : (video.width() - w)/2,
			top : (video.height() - h)/2
		});
	}
	$(window).bind('resize', fullscreenVideo);
	$('#videoElements').bind('click', function(){
		$('#videoCont').fadeOut(function(){
			$(this).remove();
			$('body').attr('class', '')
		})
	})
}