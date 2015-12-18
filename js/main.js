(function($) {
	
	$(function() {

		var $window = $(window);

		$(".cdn-image-display").lazyload({
			placeholder: "images/cdn-image-placeholder.png"
		});

		$("#cdn-images").searcher({
			"itemSelector": ".cdn-image",
			"textSelector":  ".cdn-image-title",
			"inputSelector": "#cdn-image-search-input"
		});

		$("#cdn-image-search-input").on("keyup", function() {
			$window.trigger("scroll");
		});

	});

})(jQuery);