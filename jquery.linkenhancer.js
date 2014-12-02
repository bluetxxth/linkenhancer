(function ($){
	
	// Shell for plugin code
	// fn is an alias of the jQUery.prototype JavaScript property Where jQuery
	// puts its actions.
	$.fn.linkEnhancer = function(color, backgroundcolor, fontsize, fontstyle, fontweight, hovercolor){
		
		console.log('start link enhancer');
		
	
		
		// plugin code
		return this.each(function(){
			
			console.log('color is: ' + color);
			console.log('font-size is: ' + fontsize);
			console.log('font-style is: ' + fontstyle);
			console.log('font-weigth: ' + fontweight);
			
			// Do something to each item
			$(this)
			.data('original-color', $(this).css('color'))
			.data('original-background-color', $(this).css('background-color'))
			.data('original-font-size', $(this).css('font-size'))
			.data('original-font-style',$(this).css('font-style'))
			.data('original-font-weight',$(this).css('font-weight'))
			.css('color', color || 'black')
			.css('background-color', backgroundcolor || $(this).data('original-background-color'))
			.css('font-size', fontsize || $(this).data('original-font-size'))
			.css('font-weight', fontweight || $(this).data('original-font-weight'))
			.css('font-size', fontsize || $(this).data('original-font-size'))
			.css('font-style', fontstyle || $(this).data('original-font-style'))
			
			.on('mouseover' , function(){
			 console.log('mouse is over');
				// callback function
				$(this).animate(
						{'font-size': '30px'},
						{'color' : $(this).css('color' , hovercolor) || $(this).data('original-font-color')},
						'fast'
				   );
				console.log('ready');
			})
			.on('mouseout' , function(){
				 console.log('mouse is out');
					// callback function
					$(this).animate(
							{'font-size': $(this).data('original-font-size')},							
							{'color' :  $(this).css('color' , color ) || $(this).data('original-font-color') },
							'slow'
					   );
					console.log('ready');
				})
				
			.on('click' , function(){
				 console.log('mouse clicked');
					// callback function
					$(this).animate(
							{'color': $(this).css('color' , 'magenta')},
							'slow'
					   );
					console.log('ready');
				});
			

		});
	};
})(jQuery);


///**
// * Adjust your settings here
// */
//$(document).ready(function(){
//	  console.log('start script');
//	 $('.references')/*set target here*/
//	.linkEnhancer('open-sans' );/*set options here*/
//});

