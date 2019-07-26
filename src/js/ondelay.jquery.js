
(function($){
	$.fn.onDelay = function(event,handler,delay){
		var event = event;
		var handler= handler;
		var delay = delay || 500		
		var that = this;

		this.each(function(){
			var timer;
			$(this).on(event,function(e){
			e.preventDefault();
			clearInterval(timer);
			timer = setTimeout(function(){
				handler.call(e.target);
			}, delay )	
		
			})
		})
		return this;
	};
})(jQuery)







/*$(window).onDelay({
	event:
	handler:
	delay:
});*/