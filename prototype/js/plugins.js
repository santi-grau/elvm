// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*!
 * jQuery.quark-alien
 * Licensed under MIT
 * @projectDescription This (conceptual) jquery plugin will show the Quark alien(s) on your website when pressing the combo Cmd+alt+del(erase/backsace)
 */
 (function($) {
	$.fn.quarkAlien = function( options ) {
		var alien1WalkCanvas = [55,32];
		var alien1CanvasOffset = 23;
		var alien1WalkFrameDurations = [4,3,3,1,3,2,2,3,3,2,2];
		var alien1WalkFrames =  [[90,30,0],[228,26,7],[202,26,9],[30,30,7],[0,30,9],[120,28,12],[278,24,17],[254,24,19],[176,26,19],[148,28,19],[60,30,20]];
		var alien1WalkSequence = [];
		var alien1FireFrameDurations = [4,4,5,4,4,4];
		var alien1FireFrames = [[149,27,25],[122,27,25],[93,29,24],[64,29,24],[33,31,23],[0,33,22]];
		var alien1FireSequence = [];
		var alien1Height = 32;
		var alien1DistanceFromTarget = 30;
		var targetPosition = this.css('position');
		if (targetPosition !== 'absolute' && targetPosition !== 'fixed') targetPosition = 'absolute';
		var targetLeft = this.offset().left;
		var targetTop = parseInt(this.offset().top) + parseInt(this.height()/2) - alien1Height/2;
		var alien1Steps = Math.ceil((targetLeft - alien1DistanceFromTarget) / alien1CanvasOffset);
		var alien1StepsCount = 0;
		var alien1WalkCount = 0;
		var alien1FireCount = 0;
		// Apply duration of frames to alien1WalkFrames
		$.each(alien1WalkFrames, function(i,j){
			for(c=0;c<alien1WalkFrameDurations[i];c++){
				alien1WalkSequence.push(j)
			}
		})
		// Apply duration of frames to alien1FireFrames
		$.each(alien1FireFrames, function(i,j){
			for(c=0;c<alien1FireFrameDurations[i];c++){
				alien1FireSequence.push(j)
			}
		})
		var alien1WalkContainer = $('<div class="quarkAlienSmall" />').appendTo('body');
		var alien1WalkInner = $('<div />').appendTo(alien1WalkContainer);
		var setAlienCanvasCss = function(){
			alien1WalkContainer.css({
				// background: '#DEDEDE',
				'z-index' : 21345678293234,
				position: targetPosition,
				width: alien1WalkCanvas[0],
				height: alien1WalkCanvas[1],
				top: targetTop,
				left: targetLeft - alien1DistanceFromTarget - alien1CanvasOffset*alien1Steps + alien1CanvasOffset * alien1StepsCount
			})
		}
		var setalien1WalkCss = function(step){
			alien1WalkInner.css({
				position : 'absolute',
				height : 32,
				width : alien1WalkSequence[step][1],
				top : 0,
				left : alien1WalkSequence[step][2],
				'background-image' : 'url(data:image/gif;base64,R0lGODlhLgEgANUsAMoAAAAA//8AADkAoADOlwAAAACuAADOlv8AAACtADkAnwDPlzcAn2ZnAMsAAPAAK7MuLADOlgBlnrQuLDYA/wAA9/IAK3kAaWZnJ3kAADb/AHUk1DH/AGdnAM3OVHoAAM3OVnck1bQuLc7PVmZmJmZmAHYj1HkAanoAavIALGZnJgAA+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQ1NzAwQjVDRDY1MTFFM0I5RUNFNUNCMzAzRDFERUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ1NzAwQjZDRDY1MTFFM0I5RUNFNUNCMzAzRDFERUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRDVEODc1MENENjIxMUUzQjlFQ0U1Q0IzMDNEMURFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp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)',
				'background-position' : -alien1WalkSequence[step][0] + 'px ' + 0 + 'px'
			})
		}
		var setalien1FireCss = function(step){
			alien1WalkInner.css({
				position : 'absolute',
				height : 32,
				width : alien1FireSequence[step][1],
				top : 0,
				left : alien1FireSequence[step][2],
				'background-image' : 'url(data:image/gif;base64,R0lGODlhsAAgAMQWAMoAAAAA//8AADkAoADOlwCuAAAAAADOlv8AAPAAZ/IAaDkAnwCtAACcADcAn8sAAADPlwCbAPAAaADOlkCX/0KX/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ4MzgwNkNDRDc0MTFFM0I5RUNFNUNCMzAzRDFERUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ4MzgwNkRDRDc0MTFFM0I5RUNFNUNCMzAzRDFERUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNjlGMkQ1MUNENzExMUUzQjlFQ0U1Q0IzMDNEMURFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNjlGMkQ1MkNENzExMUUzQjlFQ0U1Q0IzMDNEMURFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAABYALAAAAACwACAAAAX/oCWOFmJaQUqua8KuJoKqb13Hc2DvJJ7qPJuPFmQNgUXY6RdMOJ3CJTH5OlJvUuRVZN1ys96vjLl7JhTPKjjcW7NLbm9XHt8aRveySyRRoGt5FoFvIoGDb4aEgniEiYiMZSMNEVCAkIqLhZiZnGyOnpdhn0ENFmc2o42hj5qqraCvsJ02pRZ+O6k1e7irsodeuVfBRQAAD8XFpBEiuyzIxsk8lTXPyIrV0WHYAGzb2tsFBTu1ptTg4jbNzufdD8fPBQxe2wDxW/ThV+AGBgzoLBHIqROxz0C+F6fMVSvA76A+bAwN/iMGkZ8/KtsYWJy4g55Gg/JeLBshYR22jw5b/9jA15DjiD8mF7bEWDBlR2jPPl5Mci6cSwuTgvTc2WIgiYw+QxZdCdEfA6UkbsWEFs8nzYU+f95ElrXGgqvFwj2tMYAiV6svyvKo5s/miK9MkbXVqvbFwrZk4z6zMYEACaMjvNWYMMHs3hoE/K7FZoMAhK2HXzjWaw2x4qmVWQy4zEyBwmpeOVPOvGJA4cWM057+HLm06KOCWSx4TZAeYoQD6XGTbBg0b9SpWdAObPu33eIsVmNGdmzBgAELHBBwUEMqcd3PsxOoC3mbcwcOTHNnXewdAAfOFyyYAJd8tQHhn28fXe079AnjYdMj0HcAhc2JmTbBJA00kNB120CQmP9zm/WXmB+56UYYfvIRNtsEMOm3TV8UmsbfABBguIJuAPA3QXyJscffiBIuGB5h262oITZ9bVfBghNAYNoI0yBIY38TNrgZM+qQaGKDBMy23WPH4fQMf9txeOGOLO4XIoAnEjbkjNVwCOKVQC5XTHz+WSDjXyV5VmV5yGSn1pnAvZedCIn19oybIigYJ5vPqSdCX93d+Rx1FhC2ZzYkKPdShlwiOsJwTfq2AqRrtvaoULEleuhuk2JKnGT5lcTUp8K156mjJMznqQWojsDeYqQKlx9sVU46K621IaYorLm+AChFrHLq667rxMqCnqMamyikqKJaZ7KtjnCrOb2SJSrlr9GKMICayQa7w7TeKkvCtK2iSii14dowErDpVmcdutmKwGix4kbVbbs0HXfPbvFaEBBPux1TBLfo4rsvrvMIa/CqLB688ArrlgOvwt1w2i+v1TpcL8Yb35QxC2cUSCS0FH/TMbsf54uwyisXMYcuCdQCGBxjTMEGDjm8gXPOdMgwAhlU7CwC0DzEYPQPWrwgQcwSt2E0Akjf/DTUUV8xNdVVuzw10kRH8XQOWWNxNdZJg+wEwWOTXXbRY3O9thpXu/2201u7zXbccu+Qdgxha90210HvbffdfwPuNd6Dw1244SyEAAA7)',
				'background-position' : -alien1FireSequence[step][0] + 'px ' + 0 + 'px'
			})
		}
		var alien1Walk = function(){
			if(alien1StepsCount < alien1Steps){
				if(alien1WalkCount < alien1WalkSequence.length-1){
					alien1WalkCount++; 
				}else{
					alien1WalkCount = 0;
					setAlienCanvasCss();
					alien1StepsCount++;
				}
				setalien1WalkCss(alien1WalkCount);
				setTimeout(alien1Walk,33);
			}else{
				//setalien1FireCss(0);
				setTimeout(alien1Fire,33);
			}
		}
		var alien1Fire = function(){
			if(alien1FireCount < alien1FireSequence.length){
				alien1FireCount++; 
				setalien1FireCss(alien1FireCount);
				setTimeout(alien1Fire,33);
			}else{
				alert('done')
			}
		}
		setTimeout(alien1Walk,33);
	};
}(jQuery));
setTimeout(function(){
	$('.c1 img').quarkAlien();
},1000)

// Place any jQuery/helper plugins in here.

// Fittobox
jQuery.fn.fitToBox = function(fitInBox) {
	var div = this.parent();
	var img = this;
	var imAR = img.attr("height") / img.attr("width");
	var bgAR = div.height() / div.width();
	var attr = {};
	if (imAR >= bgAR) {
		attr = {
			"width": div.width(),
			"height": div.width() * imAR
		}
	} else {
		attr = {
			"height": div.height(),
			"width": div.height() / imAR
		}
	}
	if (fitInBox) {
		if (imAR <= bgAR) {
			attr = {
				"width": div.width(),
				"height": div.width() * imAR
			}
		} else {
			attr = {
				"height": div.height(),
				"width": div.height() / imAR
			}
		}
	}
	img.attr(attr)
	var divposition = div.css('position');
	if (divposition !== 'relative' && divposition !== 'absolute' && divposition !== 'fixed') {
		divposition = 'relative';
	}
	div.css({
		"position": divposition,
		"overflow": "hidden"
	});
	img.css({
		"position": "absolute",
		"left": (div.width() - img.attr("width")) / 2,
		"top": (div.height() - img.attr("height")) / 2
	});
	img.fadeIn();
};