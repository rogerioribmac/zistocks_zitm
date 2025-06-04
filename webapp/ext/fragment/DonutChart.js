sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
    "use strict";

    return {
        onSelectionChanged: function (oEvent) {
            debugger;
            let aFilters = [];
            let aSelectedSegments = oEvent.getParameter("selectedSegments");

            for (let i = 0; i < aSelectedSegments.length; i++) {
                aFilters.push({
                    operator: "EQ",
                    validated: "NotValidated",
                    values: [aSelectedSegments[i].getProperty("label").slice(0, 4)]
                });
            }

            var oTable = this.byId("com.ep.zistockszitm::zz_pv_stock_zitm_plantsObjectPage--fe::table::_batches::LineItem");
            if (oTable) {
                if (aFilters.length) {
                    var oFilterConditions = { StorageLocation: aFilters };
                    oTable.setFilterConditions(oFilterConditions);
                } else {
                    oTable.setFilterConditions();
                }
                oTable.rebind();
            }
        }
    };
});


