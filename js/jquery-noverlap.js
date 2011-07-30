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
    		boundTo: null,
    		regionResize: 0.85
    	};
    	
    	
    	var o = $.extend({}, $.fn.noverlap.defaults, options),
    		coords = [],
    		ctx = null;
    		
    		
    	if(!(o.boundTo==null)){
    		//typeof check needed.
    		//support for all margin types?
    		var elem = $(o.boundTo);
    		o.regionWidth = parseInt(elem.css('width')) * o.regionResize;
    		o.regionHeight = parseInt(elem.css('height')) * o.regionResize;
    		o.regionLeft  = parseInt(elem.css('left')) || parseInt(elem.css('margin-left'));
    		o.regionTop   = parseInt(elem.css('top')) || parseInt(elem.css('margin-top'));
    		console.log(o);
    	}
    	
        return this.each(function() {
			cxt = $(this),
			d= {
					width: cxt.outerWidth(),
					height: cxt.outerHeight()
			},
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









