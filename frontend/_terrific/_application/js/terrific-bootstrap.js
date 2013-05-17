
// WP7 can't be detected with conditional comments.
(navigator.userAgent.indexOf('Windows Phone') != -1 || navigator.userAgent.indexOf('WP7') != -1) && (document.documentElement.className += ' wp7');
$(document.documentElement).removeClass('no-js');

/**
 * Terrific Bootstrapping
 */
(function (window, Tc, document) {
	$(document).ready(function () {
		var app
			,$ = Tc.$
			,$body = $(document.documentElement)
			,config = {
				dependencyPath: {
					library: window.assetsUrl + '/scripts/libs-dyn/',
					plugin:  window.assetsUrl + '/scripts/plugins-dyn/',
					util:    window.assetsUrl + '/scripts/utils-dyn/'
				}
			},
			moduleTest
		;

		// custom function for context selection
		Tc.Module.prototype.$$ = function $$(selector) {
			return this.$ctx.find(selector);
		};

		app = window.application = new Tc.Application($body, config);
		app.registerModules();
		typeof ModuleTest != 'undefined' && (moduleTest = new ModuleTest(app)); // Prepare atomic module tests
		//app.registerModule($body, 'Layout');
		app.start();
		moduleTest && moduleTest.run();
	});
})(window, Tc, document);