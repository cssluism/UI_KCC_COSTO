/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kcc_costoapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
