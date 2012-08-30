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
				var pathname = parse.pathname;

				// Lets check to see if the pathname has a forward slash.
				// This problem happens in IE7/IE8
				if(pathname.charAt(0) != '/') {
					pathname = '/' + parse.pathname;
				}
				
				if(base_path != '/') {
					var link = pathname.replace(base_path, base_path + 'colorbox/') + parse.search;
				} else {
					var link = base_path + 'colorbox' + pathname + parse.search;
				}
				
				// Bind Ajax behaviors to all items showing the class.
			    var element_settings = {};
				
				// Lets determine if we are showing a loading screen or the throbber.
				if($(this).hasClass('colorbox-loading')) {
					// This removes any loading/progress bar on the clicked link
					// and displays the colorbox loading screen instead.
					element_settings.progress = { 'type': 'none' };
					$(this).click(function() {			    	
						$.colorbox({
							html:" ", 
							width: 400, 
							height: 300,
							initialWidth: 400,
							initialHeight: 300,
							onComplete: function() {
							  $('#cboxLoadingGraphic, #cboxLoadingOverlay').show();
							}
						});
					});
				} else {
					// Clicked links look better with the throbber than the progress bar.
					element_settings.progress = { 'type': 'throbber' };
				}
	
			    // For anchor tags, these will go to the target of the anchor rather
			    // than the usual location.
			    if ($(this).attr('href')) {
			    	element_settings.url = link;
			    	element_settings.event = 'click';
			    }
			    var base = $(this).attr('id');
			    Drupal.ajax[base] = new Drupal.ajax(base, this, element_settings);
			});			
			
			// When using contextual links and clicking from within the colorbox
			// we need to close down colorbox when opening the built in overlay.
			$('ul.contextual-links a', context).once('colorboxNodeContextual').click(function() {
				$.colorbox.close();
			});
		}
	};
})(jQuery);
