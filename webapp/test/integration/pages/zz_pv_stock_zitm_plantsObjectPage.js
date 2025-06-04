sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.ep.zistockszitm',
            componentId: 'zz_pv_stock_zitm_plantsObjectPage',
            contextPath: '/zz_pv_stock_zitm_materials/_plant'
        },
        CustomPageDefinitions
    );
});