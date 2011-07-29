/*
*	jquery-noverlap - v0.1
*	Copyright (c) Addy Osmani, 2011.
* 	Dual licensed under the MIT & GPL licenses.
*/

(function($) {
    $.fn.noverlap = function( options ) {

    	$.fn.noverlap.defaults = {
    		leftOffset: 290,
    		topOffset: 290,
    		speed: "slow"
    	};
    	
    	var o = $.extend({}, $.fn.noverlap.defaults, options),
    		coords = [],
    		ctx = null;
    	
        return this.each(function() {
			cxt = $(this),
			d= {
					width: cxt.outerWidth(),
					height: cxt.outerHeight()
			},
			complete = false;
			while (!complete){
				d.left = parseInt(Math.random() * o.leftOffset);
				d.top = parseInt(Math.random() * o.topOffset);
				complete = true;
				$.each(coords, function(){
					if (d.left < this.left + this.width && d.left + d.width > this.left &&
						d.top < this.top + this.height && d.top + d.height > this.top){
						complete = false;
					}
				});
			}
			coords.push(d);
			cxt.animate({left: d.left,top: d.top}, o.speed);
			});
    }

})(jQuery);