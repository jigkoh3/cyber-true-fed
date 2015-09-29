smartApp.service('ReasonService', function ($filter, SystemService) {
    var demo = SystemService.demo;
    var that = this;
    this.get = function (activityCode, fnCallback) {
        if (!demo) {
            var target = 'aftersales/configuration/order/reason?activity-code=' + activityCode;
            SystemService.callServiceGet(target, null, function (result) {
                fnCallback(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'trx-id': '5NH31QALNK0N',
                'process-instance': 'psaapdv1 (instance: SFF_node1)',
                'response-data': {
                    'activity-code': '119',
                    'activity-name': 'TMV-Change priceplan reason codes',
                    'available-reasons': {
                        'CPP08': 'Priceplan : Next PP-go DTAC',
                        'CPP07': 'Priceplan : Next PP-go AIS',
                        'CPP06': 'Priceplan : Non Voice-go other',
                        'CPP05': 'Priceplan : Non Voice-go DTAC',
                        'CPP09': 'Priceplan : Next PP-go other',
                        'CNOU': 'Cancel : No Usage',
                        'CCL01': 'Collection : Unhappy',
                        'CPP04': 'Priceplan : Voice - go AIS',
                        'CPP03': 'Priceplan : Voice - go other',
                        'CPP02': 'Priceplan : Voice - go DTAC',
                        'CPP01': 'Priceplan : Voice - go AIS',
                        'MNPHR': 'Cancel RMV Sub - Port Reverse',
                        'COT01': 'Other : Fatality',
                        'COT02': 'Other : Go abroad',
                        'COT03': 'Other : Fraud-Innocent victim',
                        'CHMNRF': 'Cancel TMH Post Sub PO to RF',
                        'MGPRE': 'Mig from Postpaid CCBS to Pre',
                        'COLB': 'Collection batch',
                        'COLL': 'CC Subs - Collection Batch',
                        '27': 'Leaving Country',
                        '2': 'Winback',
                        'CDE01': 'Dealer - free sim',
                        '30': 'Other:...',
                        'MTEN': 'Cancel Move to Ensemble',
                        'TCCBS': 'Cancel RMV Sub to CCBS',
                        '17': 'Customer Dissatisfied because of Service Quality',
                        'MNPRV': 'Cancel Sub - Port Reversal',
                        'MGJ5': 'Migrate Post to Pre',
                        '16': 'Customer Dissatisfied because of Price Structure',
                        '13': 'Customer left without Notifying',
                        'SF002': 'Cancel : Premium Rate Fraud',
                        'SF001': 'Cancel : Unable to contact',
                        'MNPRE': 'Cancel Sub - MNP',
                        'NW10': 'Network : Customer Test',
                        'DE02': 'Dealer - Cancel',
                        'RFREOT': 'Cancel RF Port Reverse',
                        '94': 'OLO Request',
                        'COWN': 'Change Ownership',
                        'CMLBS': 'Cancel to Act Multi SIM CCBS',
                        '10': 'Data Quality Problem',
                        'CSV01': 'Service : Unhappy - shop',
                        'CSV05': 'Service : Unhappy - channel',
                        'CSV04': 'Service : Unhappy - Telesale',
                        'CSV03': 'Service : Unhappy - AE',
                        'CSV02': 'Service : Unhappy-Call Center',
                        'CSV08': 'Service : Unhappy - After Sale',
                        'CSV07': 'Service : Unhappy - Dealer TVS',
                        'CSV06': 'Service : Unhappy - Dealer',
                        'CCV02': 'Convergence:TLFV contract end',
                        'CCV03': 'Convergence:no need net ATB3',
                        'SV051': 'Cancel : SIM & Accessories',
                        'RFPOTM': 'Cancel RF Sub- RF to TMV Postpay',
                        'RFPOTO': 'Cancel RF Sub-MNP Postpay',
                        'SF015': 'Cancel : Dealer Fraud',
                        'RFPOTH': 'Cancel RF Sub- RF to TMH Postpay',
                        'SF016': 'Cancel : Subscription fraud',
                        'CCV01': 'Convergence:no need TLFV',
                        'MCCBS': 'Cancel Sub – CCBS Migration',
                        '7MCN': 'Cancel Sub - Move to CCBS',
                        'CAN': 'Cancel Subs Req - No Need',
                        'HRC01': 'Cancel Sub - Unidentify Owner',
                        'CPA01': 'Payment : payment fee',
                        'SF009': 'Cancel : Not Known at Address',
                        'HMPORF': 'Cancel TMH Sub-TMH to RF',
                        'SF008': 'Cancel : Internal Fraud',
                        'SF007': 'Cancel : Roaming Fraud',
                        'SF006': 'Cancel : Call Selling',
                        'SF003': 'Cancel : Returned Bill',
                        'SF012': 'Cancel:International Call Sell',
                        'CCANR': 'Regular Collection Cancellation due to root FA.',
                        'SF010': 'Cancel : Customer Not known',
                        'SF011': 'Cancel : Innocent Victim',
                        'RMTMV': 'Cancel RMV Sub-PO to TMV',
                        'AA02': 'Require installment',
                        'AA03': 'Require device discount',
                        'AA01': 'Discount expired',
                        'AA06': 'Sook X3 / Cant install TOL',
                        'CCC01': 'Cost Control:Too many SIMs',
                        'AA04': 'Broken device',
                        'AA05': 'Fair usage',
                        'CCC04': 'Cost Control:Corporate Policy',
                        'SC001': 'Cancel : Manual Collection',
                        'CNW02': 'Network:Voice Quality-go DTAC',
                        'CNW03': 'Network:Voice Quality-go Other',
                        '56': 'Customer Deceased',
                        'CNW01': 'Network:Voice Quality-go AIS',
                        'CREQ': 'Customer request',
                        'CBL01': 'Billing : Complicated Billing',
                        'CBL02': 'Billing : Unhappy - One Bill',
                        'CBL04': 'Billing : VAS Billing Error',
                        'CBL03': 'Billing : Voice Billing Error',
                        'CNW07': 'Network:Coverage-go AIS',
                        'CNW06': 'Network:Non Voice-go Other',
                        'CNW05': 'Network:Non Voice-go DTAC',
                        'CNW04': 'Network:Non Voice-go AIS',
                        'MGPOR': 'Mig Post CCBS to Amdocs-RETEN',
                        'CNW09': 'Network:Coverage-go Other',
                        'CNW08': 'Network:Coverage-go DTAC',
                        'MGPOS': 'Mig Post from CCBS to Amdocs',
                        'MNPOH': 'Cancel RMV Sub - MNP Postpay',
                        'RH01': 'Cancel: Sub Retain to New TMH',
                        'CV04': 'Convergence:TLFV Damage(Flood)',
                        'MNPOS': 'Cancel Sub - MNP',
                        'CPD02': 'Product : Accessories Problem',
                        'CPD01': 'Product : Handset Problem',
                        'CCR01': 'Credit Limit',
                        'CPD03': 'Product : Lost/stolen'
                    }
                }
            };
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };
    this.list = function (activityCode, funCallback) {
        that.get("119", function (result) {
            //console.log("ReasonService.get");
            //console.log(result);
            var listReason = [];
            if (result.status) {
                if (SystemService.checkObj(result.data, ["response-data", "available-reasons"])) {
                    var availableReasons = $filter('filter')(result.data["response-data"]["available-reasons"]);
                    angular.forEach(availableReasons, function (value, key) {
                        this.push({
                            id: key,
                            dec: key + ": " + value
                        });
                    }, listReason);

                    funCallback(listReason);

                } else {
                    alert('object not found!');
                }
            } else {
                funCallback(listReason);
            }
        });

        
    };
});