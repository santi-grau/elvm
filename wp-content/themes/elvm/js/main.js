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
	$('#main').fadeIn(function(){
		$('footer').fadeIn()
	});
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
// Creates a video instance with poster image from youtube or vimeo, will play fullscreen on click
var FeatVideo = function(i){
	this.dataObject = $('#feat_video:eq('+i+')');
	var url = this.videoUrl = this.dataObject.data('url');
	this._setposter();
	this.dataObject.bind('click', function(){
		new FullscreenVideo(url)
	});
	if(this.dataObject.data('autoplay')){
		new FullscreenVideo(url)
	}
}
FeatVideo.prototype._setposter = function(){
	var vi = new RegExp(/vimeo.com\/\d+$/i);
	var yt = new RegExp(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
	if(vi.test(this.videoUrl)){
		var id = this.videoUrl.match(/\d+$/i)[0];
		$.getJSON( 'http://vimeo.com/api/v2/video/' + id + '.json', $.proxy(function( data ) {
			this._setPoster(data[0].thumbnail_large);
		}, this))
	}else if(yt.test(this.videoUrl)){
		var id = (this.videoUrl.match(/v=(\S+)($)?/i) || this.videoUrl.match(/youtu.be\/(\S+)($)?/i) || this.videoUrl.match(/embed\/(\S+)($)?/i))[1].split('&')[0];
		this._setPoster('http://img.youtube.com/vi/'+id+'/maxresdefault.jpg');
	}else{
		console.error('Wrong video url')
	}
}
FeatVideo.prototype._setPoster = function(img){
	this.dataObject.append('<img src="'+img+'" />');
}

var FullscreenVideo = function(url){
	var self = this;
	this.video = $('<div id="video" />').appendTo('body');
	this.iframe = $('<iframe frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />').appendTo(this.video);
	this.closeBut = $('<a href="javascript:void(0)" />').appendTo(this.video);
	var vi = new RegExp(/vimeo.com\/\d+$/i);
	var yt = new RegExp(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
	if(vi.test(url)){
		var id = url.match(/\d+$/i)[0];
		$.getJSON( 'http://vimeo.com/api/v2/video/' + id + '.json', $.proxy(function( data ) {
			this.iframe.attr({
				src : '//player.vimeo.com/video/'+id+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1;',
				width : data[0].width,
				height : data[0].height,
				w : data[0].width,
				h : data[0].height
			});
			self._resize()
		},this));
	}else if(yt.test(url)){
		var id = (url.match(/v=(\S+)($)?/i) || url.match(/youtu.be\/(\S+)($)?/i) || url.match(/embed\/(\S+)($)?/i))[1].split('&')[0];
		var url = 'http://query.yahooapis.com/v1/public/yql';
		var query = "select * from json where url ='http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v="+id+"&format=json'";
		$.ajax({
			url: url,
			data: { q: query, format: "json" },
			dataType: "jsonp",
			success: function(data){
				self.iframe.attr({
					src : '//www.youtube.com/embed/'+id+'?autoplay=1',
					width : data.query.results.json.width,
					height : data.query.results.json.height,
					w : data.query.results.json.width,
					h : data.query.results.json.height
				});
				self._resize()
			}
		});
	}else{
		console.error('Wrong video url')
	}
	$(window).bind('resize', $.proxy(this._resize,this));
	this.closeBut.bind('click', $.proxy(this._close,this))
}
FullscreenVideo.prototype._resize = function(){
	var iframeAR = this.iframe.attr('h') / this.iframe.attr('w');
	var videoAR = this.video.height() / this.video.width();
	var w = this.video.height() / iframeAR;
	var h = this.video.height();
	if(iframeAR > videoAR){
		var w = this.video.width();
		var h = this.video.width() * iframeAR;
	}
	this.iframe
	.attr({
		width : w,
		height : h
	})
	this.iframe
	.css({
		left : (this.video.width() - w)/2,
		top : (this.video.height() - h)/2
	});
}
FullscreenVideo.prototype._close = function(){
	this.video.fadeOut(function(){
		$(this.remove())
	})
}
$('#feat_video').each(function(i){ new FeatVideo(i) });