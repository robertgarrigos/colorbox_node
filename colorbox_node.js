(function($) {
	Drupal.behaviors.colorboxNode = {
		// Lets find our class name and change our URL to
		// our defined menu path to open in a colorbox modal.
		attach : function(context, settings) {
			$('a.colorbox-node', context).once('colorboxNode').each(function() {
				var href = $(this).attr('href');
				// Create an element so we can parse our a URL no matter if its internal or external.
				var parse = document.createElement('a');
				parse.href = href;				
				// Lets prepend our colorbox to the beginning of our link
				var link = '/colorbox' + parse.pathname;
				$(this).attr('href', link);
			});
		}
	};
})(jQuery);
