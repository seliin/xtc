(function($) {
	/**
	 * BootstrapCarousel module implementation.
	 *
	 * @author
	 * @namespace Tc.Module
	 * @class Default
	 * @extends Tc.Module
	 */
	Tc.Module.BootstrapCarousel = Tc.Module.extend({

		/**
		 * Initializes the BootstrapCarousel module.
		 *
		 * @method init
		 * @constructor
		 * @param {jQuery|Zepto} $ctx the jquery context
		 * @param {Sandbox} sandbox the sandbox to get the resources from
		 * @param {String} modId the unique module id
		 */
		init: function($ctx, sandbox, modId) {
			// call base constructor
			this._super($ctx, sandbox, modId);
		},

		/**
		 * Hook function to do all of your module stuff.
		 *
		 * @method on
		 * @param {Function} callback function
		 * @return void
		 */
		on: function(callback) {

			//log('Module BootstrapCarousel has unmet dependencies');
			// bootstrap-carousel.css
			// bootstrap-carousel.js
			$('.carousel').carousel({interval: false});

			this.$ctx.append('\n<br><span class="debug">JS Module BootstrapCarousel started</span>');

			callback();
		},

		/**
		 * Hook function to trigger your events.
		 *
		 * @method after
		 * @return void
		 */
		after: function() {
		}
	});
})(Tc.$);