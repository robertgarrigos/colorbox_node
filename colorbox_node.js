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
				// Lets add our colorbox link after the base path if necessary.
				var base_path = Drupal.settings.basePath;
				if(base_path != '/') {
					var link = parse.pathname.replace(base_path, base_path + 'colorbox/');
				} else {
					var link = base_path + 'colorbox' + parse.pathname;
				}
				// Update our href to the link containing colorbox.
				$(this).attr('href', link + parse.search);
			});
			
			// When using contextual links and clicking from within the colorbox
			// we need to close down colorbox when opening the built in overlay.
			$('ul.contextual-links a', context).once('colorboxNodeContextual').click(function() {
				$.colorbox.close();
			});
		}
	};
})(jQuery);
