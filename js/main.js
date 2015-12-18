(function($) {
	
	$(function() {

		$(".cdn-image-display").lazyload({
			placeholder: "images/cdn-image-placeholder.png"
		});

		$("#cdn-images").searcher({
			"itemSelector": ".cdn-image",
			"textSelector":  ".cdn-image-title",
			"inputSelector": "#cdn-image-search-input"
		});

	});

})(jQuery);