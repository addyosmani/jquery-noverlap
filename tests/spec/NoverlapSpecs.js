	var testElems, noverlaps;
	testElems = $('<div /><div /><div />'),
	noverlaps = testElems.addClass('win').appendTo('body').noverlap({'speed':0});


describe("NoverlapSpec", function(){
	
	it("should ensure the size of the output collection matches the input collection", function(){
		expect(testElems.length).toEqual(noverlaps.length);
	});
	
	
	it("should ensure the top and left positions of all elements in the collection are greater than 0", function(){
		
		var isValid = true, c = null;
		noverlaps.each(function(){
			c = $(this);
			if(parseInt(c.css('left')) > 0 && parseInt(c.css('top')) > 0 ){
			}else{
				isValid = false;
			}
		});
		
		expect(isValid).toEqual(true);
	});

	it("should pass the overlapping algorithm test", function(){
	
		var c = null, 
		complete = false, 
		outerW, 
		outerH, 
		currentL, 
		currentT, 
		currentW, 
		currentH, 
		randomL, 
		randomT;
		
		noverlaps.each(function(){
			c = $(this);
			outerW = c.outerWidth(),
			outerH = c.outerHeight(),
			currentL = c.css('left'),
			currentT = c.css('top'),
			currentW = c.css('width'),
			currentH = c.css('height'),
			randomL  = parseInt(Math.random() * 600),
			randomT  = parseInt(Math.random() * 390);
				
			 expect(randomL < currentL + currentW && randomL + outerW > currentL + randomT < currentT + currentH && randomT +
			 outerH > currentT).toEqual(false);
	 
	 	});
	 

	});

});