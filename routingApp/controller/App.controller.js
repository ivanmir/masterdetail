sap.ui.define( ["sap/ui/core/mvc/Controller", "sap/ui/Device"], function (Controller, Device) {
	"use strict";

	return Controller.extend("sap.ui.core.sample.RoutingMasterDetail.routingApp.controller.App", {
		
		onAfterDetailNavigate: function(oEvent) {
    		this.byId("rootControl").hideMaster();
    	}
		
	});

}, /* bExport= */ true);