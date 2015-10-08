smartApp.service('MigratePostToPreService', function($timeout, SystemService) {
    var demo = SystemService.demo;

    this.getSIMData = function(msisdn, fnCallback) {
        var that = this;

        if (utils.isEmpty(msisdn)) {
            msisdn = '';
        }

        var cb = function(result) {
            result.data = that.decorateSIMData(result.data);

            fnCallback(result);
        };

        if (!demo) {
            var target = '/aftersales/tmv/migrateposttopre/validatemigrateposttopre?msisdn=' + msisdn;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'trx-id': '3BDPN2HLK4TZ',
                'process-instance': 'psaapdv1 (instance: SFF_node1)',
                'status-code': '0',
                'response-data': {
                    'customer': {
                        'title': 'Miss',
                        'title-code': null,
                        'firstname': 'Nate',
                        'lastname': 'Phutthicha',
                        'birthdate': '2015-07-20T00:00:00+0700',
                        'contact-number': null,
                        'id-number': '1189900130607',
                        'id-type': null,
                        'id-expire-date': '2017-07-20T00:00:00+0700',
                        'customer-id': null,
                        'customer-level': null,
                        'customer_sublevel_id': null,
                        'customer_sublevel': null,
                        'gender': 'F',
                        'installed-products': [{
                            'ouId': '5010',
                            'ban': '20009628',
                            'product-type': 'PRICEPLAN',
                            'product-id': 'EDATAP69',
                            'product-name': 'EDATAP69',
                            'product-description': 'Biz &amp; Ent 900,Data UNL5GB/128,WiFi',
                            'product-soc-code': '1234567',
                            'account-category': 'P',
                            'account-sub-type': 'PRE',
                            'company-code': 'RF',
                            'product-category': 'TMV',
                            'product-status': 'ACTIVE',
                            'product-id-name': 'MSISDN',
                            'product-id-number': msisdn,
                            'mobile-servicetype': 'POSTPAID',
                            'ou-hierarchytype': 'CHILD',
                            'parent-ouId': '1234',
                            'has-splitcharge': false,
                            'is-childsim': false,
                            'is-softsuspend': false
                        }],
                        'address-list': {
                            'CUSTOMER_ADDRESS': {
                                'number': '61/238',
                                'moo': '8',
                                'village': 'moo ban',
                                'street': 'ratchada',
                                'soi': '81',
                                'district': 'dindaeng',
                                'province': 'Bangkok',
                                'building-name': 'Pakin',
                                'building-room': '22',
                                'building-floor': '13',
                                'sub-district': 'Dindaeng',
                                'zip': '10400',
                                'household': '18'
                            }
                        }
                    }
                },
                'display-messages': [{
                    'message': '',
                    'message-type': 'ERROR',
                    'en-message': 'VIP',
                    'th-message': '',
                    'technical-message': ''
                }, {
                    'message': '',
                    'message-type': 'WARNING',
                    'en-message': 'DISCOUNT',
                    'th-message': '',
                    'technical-message': ''
                }, {
                    'message': '',
                    'message-type': 'ERROR',
                    'en-message': 'SUBSCRIBER STATUS',
                    'th-message': '',
                    'technical-message': ''
                }, {
                    'message': '',
                    'message-type': 'ERROR',
                    'en-message': 'NICE NUMBER',
                    'th-message': '',
                    'technical-message': ''
                }, {
                    'message': '',
                    'message-type': 'ERROR',
                    'en-message': 'SHARED PLAN',
                    'th-message': '',
                    'technical-message': ''
                }, {
                    'message': '',
                    'message-type': 'WARNING',
                    'en-message': 'CONVERGENT',
                    'th-message': '',
                    'technical-message': ''
                }]
            };

            $timeout(function() {
                cb({
                    status: true,
                    data: data,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

    this.decorateSIMData = function(data) {
        var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
        var customerAddress = utils.getObject(customerProfile, 'address-list.CUSTOMER_ADDRESS');
        var productDetails = utils.getObject(customerProfile, 'installed-products.0');

        if (!customerProfile || !productDetails) return null;

        delete customerProfile['installed-products'];
        delete customerProfile['address-list'];

        // Prepare product type
        var productType = '';
        var serviceType = productDetails['mobile-servicetype'];
        if (serviceType === 'PREPAID') {
            productType = 'ทรูมูฟเอช เติมเงิน';
        } else if (serviceType === 'POSTPAID') {
            productType = 'ทรูมูฟเอช รายเดือน';
        }

        //Fix value becuase migrate post to pre support personal only
        productDetails['account-category'] = "P";
        productDetails['account-sub-type'] = "PRE";

        // Prepare current price plan
        var currentPricePlan = [];
        if (productDetails['product-name']) {
            currentPricePlan.push(productDetails['product-name']);
        }
        if (productDetails['product-description']) {
            currentPricePlan.push(productDetails['product-description']);
        }

        var response = {
            'header': {
                'producttype': productType,
                'subscriberno': productDetails['product-id-number'],
                'currpriceplan': currentPricePlan.join(': ')

            },
            'customerProfile': customerProfile,
            'customerAddressOriginal': customerAddress,
            'customerAddress': angular.copy(customerAddress),
            'simData': productDetails
        };

        return response;
    };

    this.getProPosition = function(payload, fnCallback) {
        var params = utils.createParamGet(payload, [
            'company-code',
            'customer-type',
            'propo-type',
            'mobile-servicetype',
            'partner-code',
            'privilege'
        ]);

        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            var target = '/sales/catalog/product/tmv/proposition/search?' + params;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'trx-id': '3BYUAFJC01W8',
                'process-instance': 'tmsapnpr1 (instance: SFF_node1)',
                'response-data': [{
                    'name': 'P00000000000211',
                    'description': 'SIM Koo Kan',
                    'soc': null,
                    'rc': 0.0,
                    'service-level': null,
                    'proposition-code': '0019087'
                }, {
                    'name': 'RMV000000000001',
                    'description': 'New Sim Only',
                    'soc': null,
                    'rc': 0.0,
                    'service-level': null,
                    'proposition-code': '0019123'
                }]
            };

            $timeout(function() {
                cb({
                    status: true,
                    data: data,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

    this.getPricePlan = function(payload, fnCallback) {
        var params = utils.createParamGet(payload, [
            'company-code',
            'customer-type',
            'customer-subtype',
            'service-level',
            //'keyword',
            'proposition',
            'partner-code',
            'privilege'
        ]);

        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            var target = '/sales/catalog/product/tmv/priceplan/search?' + params;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'trx-id': '3BYUAFJC01W8',
                'process-instance': 'tmsapnpr1 (instance: SFF_node1)',
                'response-data': [{
                    'name': 'BCUGFP03',
                    'description': payload.proposition + ' Biz_Buddy 600, get 600Bt,CUG,1F&F,Max2sim',
                    'soc': '936258',
                    'properties': {
                        'TR_SPECIAL_OFFER_IND': 'CSH',
                        'PRICEPLAN_TYPE': 'SH'
                    },
                    'sale-period': {
                        'start': '2012-05-21',
                        'end': '2016-01-30'
                    },
                    'rc': 600.0,
                    'service-level': 'G',
                    'priceplan-type': 'SH'
                }, {
                    'name': 'BGAINP12',
                    'description': 'BizShare37700bt,All-net1.10bt/min',
                    'soc': '843368',
                    'properties': {
                        'TR_SPECIAL_OFFER_IND': 'CSH',
                        'PRICEPLAN_TYPE': 'SH'
                    },
                    'sale-period': {
                        'start': '2014-04-13',
                        'end': '2016-01-30'
                    },
                    'rc': 37700.0,
                    'service-level': 'G',
                    'priceplan-type': 'SH'
                }, {
                    'name': 'W2S02P04',
                    'description': 'Corporate WOW2 Sharing Package 800-Limit 20 subs',
                    'soc': '937378',
                    'properties': {
                        'TR_SPECIAL_OFFER_IND': 'CSH',
                        'PRICEPLAN_TYPE': 'SH'
                    },
                    'sale-period': {
                        'start': '2005-06-27',
                        'end': '2016-01-30'
                    },
                    'rc': 16000.0,
                    'service-level': 'G',
                    'priceplan-type': 'SH'
                }]
            };

            $timeout(function() {
                cb({
                    status: true,
                    data: data,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

    this.searchAddress = function(payload, fnCallback) {
        if (!payload.lang) payload.lang = 'TH';

        var params = utils.createParamGet(payload, [
            'keyword',
            'lang'
        ]);

        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            var target = '/profiles/master/address/search?' + params;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'trx-id': '3BYUAFJC01W8',
                'process-instance': 'tmsapnpr1 (instance: SFF_node1)',
                'response-data': [{
                    'subdistrict': 'ดินแดง',
                    'district': 'ดินแดง',
                    'province': 'กรุงเทพมหานคร',
                    'zipcode': '10400'
                }, {
                    'subdistrict': 'ดินแดง',
                    'district': 'ดินแดง',
                    'province': 'กรุงเทพมหานคร',
                    'zipcode': '10325'
                }, {
                    'subdistrict': 'ดินแดง',
                    'district': 'ดินแดง',
                    'province': 'กรุงเทพมหานคร',
                    'zipcode': '10326'
                }, {
                    'subdistrict': 'ดินแดง',
                    'district': 'ดินแดง',
                    'province': 'กรุงเทพมหานคร',
                    'zipcode': '10400'
                }, {
                    'subdistrict': 'ดินแดง',
                    'district': 'ดินแดง',
                    'province': 'กรุงเทพมหานคร',
                    'zipcode': '10407'
                }]
            };

            $timeout(function() {
                cb({
                    status: true,
                    data: data,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

    

    this.submitOrder = function(payload, fnCallback) {
        var request = {
            "order": {
                "order-id": payload.orderData.orderId,
                "creator": payload.saleAgent.logInName,
                "customer": {
                    'title-code': payload.customerProfile['title-code'],
                    //'title': payload.customerProfile['title'],
                    'firstname': payload.customerProfile['firstname'],
                    'lastname': payload.customerProfile['lastname'],
                    'gender': payload.customerProfile['gender'],
                    'id-type': payload.customerProfile['id-type'],
                    'id-number': payload.customerProfile['id-number'],
                    'birthdate': payload.customerProfile['birthdate'],
                    'id-expire-date': payload.customerProfile['id-expire-date'],
                    'contact-number': payload.customerProfile['contact-number'],
                    'contact-mobile-number': payload.customerProfile['contact-mobile-number'],
                    "language": payload.customerProfile['language'],
                    "customer-id": payload.customerProfile['customer-id'],
                    "address-list": {
                        "CUSTOMER_ADDRESS": payload.customerAddress
                    },
                },
                "sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : null),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    'partner-type': payload.saleAgent['partnerType']
                },
                "order-items": [{
                    "name": "MIGRATE_POST_TO_PRE",
                    "product-name": payload.priceplanSelected["name"],
                    "product-id-number": payload.productDetails['product-id-number'],
                    "product-id-name": payload.productDetails['product-id-name'],
                    "product-category": payload.productDetails['product-category'],
                    "product-type": payload.productDetails['product-type'],
                    "order-type": "CHANGE",
                    "reason-code": "AA02",
                    "address-list": {
                        "BILLING_ADDRESS": payload.customerAddress,
                        "TAX_ADDRESS": payload.customerAddress
                    },
                    "order-data": {
                        "PRICEPLAN-SOC-CODE": payload.priceplanSelected["soc"],
                        "CCBS-PROPOSITION-SOC-CODE": payload.propositionSelected['soc']
                    },
                    "primary-order-data": {
                        "OU-ID": payload.productDetails['ouId'],
                        "BAN": payload.productDetails['ban'],
                        "ACCOUNT-CATEGORY": payload.productDetails['account-category'],
                        "ACCOUNT-SUB-TYPE": payload.productDetails['account-sub-type'],
                        "COMPANY-CODE": payload.productDetails['company-code'],
                        "NAS-PROPOSITION": payload.propositionSelected['proposition-code'],
                        "CCBS-PROPOSITION": payload.propositionSelected['name']
                    }
                }],
                "last-modify-date": ""
            },
            'ref-id': payload.orderData.TrxID,
            'user-id': payload.saleAgent.logInName,
            'approver': ""
        };

        console.log(request);

        var cb = function(result) {
        	fnCallback(result);
        };

        if (!demo) {
            request['target'] = '/aftersales/order/submit';

            SystemService.callServicePost(request, null, function(result) {

                cb(result);
            });
        } else {
            
            var data = {
                'status': 'SUCCESSFUL',
                'display-messages': [{
                    'message': 'Order ' + payload.orderData.orderId + ' successful saved.',
                    'message-type': 'ERROR',
                    'en-message': 'Order ' + payload.orderData.orderId + ' successful saved.',
                    'th-message': 'บันทึกข้อมูลเรียบร้อย Order ' + payload.orderData.orderId + ' successful saved.'
                }],
                'trx-id': '03J5HVSFXH8R',
                'process-instance': 'tpx61.true.th (instance: sale)'
            };

            $timeout(function() {
                cb({
                    status: true,
                    data: data,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

});