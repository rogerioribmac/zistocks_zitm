sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/ep/zistockszitm/test/integration/FirstJourney',
		'com/ep/zistockszitm/test/integration/pages/zz_pv_stock_zitm_materialsList',
		'com/ep/zistockszitm/test/integration/pages/zz_pv_stock_zitm_materialsObjectPage',
		'com/ep/zistockszitm/test/integration/pages/zz_pv_stock_zitm_plantsObjectPage'
    ],
    function(JourneyRunner, opaJourney, zz_pv_stock_zitm_materialsList, zz_pv_stock_zitm_materialsObjectPage, zz_pv_stock_zitm_plantsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/ep/zistockszitm') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThezz_pv_stock_zitm_materialsList: zz_pv_stock_zitm_materialsList,
					onThezz_pv_stock_zitm_materialsObjectPage: zz_pv_stock_zitm_materialsObjectPage,
					onThezz_pv_stock_zitm_plantsObjectPage: zz_pv_stock_zitm_plantsObjectPage
                }
            },
            opaJourney.run
        );
    }
);