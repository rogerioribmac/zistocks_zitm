sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.ep.zistockszitm',
            componentId: 'zz_pv_stock_zitm_materialsList',
            contextPath: '/zz_pv_stock_zitm_materials'
        },
        CustomPageDefinitions
    );
});