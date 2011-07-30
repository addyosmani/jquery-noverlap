/*
*	jquery-noverlap - v0.1
*	Copyright (c) Addy Osmani, 2011.
* 	Dual licensed under the MIT & GPL licenses.
*/

(function($) {
    $.fn.noverlap = function( options ) {

    	$.fn.noverlap.defaults = {
    		regionWidth: 600,
    		regionHeight: 390,
    		regionLeft:0,
    		regionTop:0,
    		speed: "slow",
    		boundTo: null, //accepts jQuery objects or string selectors
    		regionResize: 0.85
    	};
    	
    	
    	var o = $.extend({}, $.fn.noverlap.defaults, options),
    		coords = [],
    		ctx = null;
    		
    		
    	if(!(o.boundTo==null)){
    		var elem;
    		(o.boundTo instanceof jQuery)? elem = o.boundTo : elem = $(o.boundTo);
    		var offset = elem.offset();
    		o.regionWidth = parseInt(elem.css('width')) * o.regionResize;
    		o.regionHeight = parseInt(elem.css('height')) * o.regionResize;
    		o.regionLeft  = parseInt(offset.left) || parseInt(elem.css('left')) || parseInt(elem.css('margin-left'));
    		o.regionTop   = parseInt(offset.top) || parseInt(elem.css('top')) || parseInt(elem.css('margin-top'));

    	}
    	
        return this.each(function() {
			cxt = $(this),
			d= { width: cxt.outerWidth(), height: cxt.outerHeight() },
			complete = false;
			while (!complete){
				d.left = parseInt(Math.random() * o.regionWidth + o.regionLeft);
				d.top = parseInt(Math.random() * o.regionHeight + o.regionTop);
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









