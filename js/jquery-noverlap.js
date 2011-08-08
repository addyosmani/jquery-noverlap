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
    		regionResize: 0.85,
			animate: true,
			coords:[]
    	};
    	
    	
    	var o = $.extend({}, $.fn.noverlap.defaults, options),
    		ctx = null,
			props = [],
			t = null;
    		
    		
    	if(!(o.boundTo==null)){
    		var elem, offset;
    		(o.boundTo instanceof jQuery)? elem = o.boundTo : elem = $(o.boundTo);
    		offset = elem.offset();
    		o.regionWidth = parseInt(elem.css('width')) * o.regionResize;
    		o.regionHeight = parseInt(elem.css('height')) * o.regionResize;
    		o.regionLeft  = parseInt(offset.left) || parseInt(elem.css('left')) || parseInt(elem.css('margin-left'));
    		o.regionTop   = parseInt(offset.top) || parseInt(elem.css('top')) || parseInt(elem.css('margin-top'));
    	}
    	
        return this.each(function(){
			cxt = $(this),
			d= { width: parseInt(cxt.outerWidth()), height: parseInt(cxt.outerHeight()) },
			complete = false;
			while (!complete){
				d.left = parseInt(Math.random() * parseInt(o.regionWidth) + o.regionLeft);
				d.top = parseInt(Math.random() * parseInt(o.regionHeight) + o.regionTop);
				complete = true;
				for(var i=0; i<o.coords.length;i++){
					t = o.coords[i];
					if(d.left < t.left + t.width && d.left + d.width > t.left &&
				       d.top < t.top + t.height && d.top + d.height > t.top){ 
						complete = false;
					}
				}
			}
			o.coords.push(d);
			(o.animate)? cxt.animate({left: d.left,top: d.top}, o.speed) : cxt.css({left: d.left,top: d.top});
			});
    }

})(jQuery);









