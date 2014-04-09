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