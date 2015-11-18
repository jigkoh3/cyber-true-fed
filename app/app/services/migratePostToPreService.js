smartApp.service('MigratePostToPreService', function($timeout, SystemService, $routeParams) {
    var demo = SystemService.demo;

    this.getSIMData = function(msisdn, fnCallback) {
        var that = this;

        if (utils.isEmpty(msisdn)) {
            msisdn = '';
        }

        var cb = function(result) {
            if (that.decorateSIMData(result.data) == false) {
                fnCallback(false);
                console.log(that.decorateSIMData(result.data));
            } else {
                result.data = that.decorateSIMData(result.data);

                fnCallback(result);
            }

        };
        if (!demo) {
            var target = '/aftersales/tmv/migrateposttopre/validatemigrateposttopre?msisdn=' + msisdn;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "Mobile Number is not found or cancel, Please check and try again.",
                    "message-code": "TMV-MIGRATE-POST-TO-PRE-00000",
                    "message-type": "WARNING",
                    "en-message": "Mobile Number is not found or cancel, Please check and try again.",
                    "th-message": "ขออภัยไม่พบหมายเลขโทรศัพท์นี้ในระบบ หรือหมายเลขถูกยกเลิก กรุณาตรวจสอบอีกครั้ง",
                    "technical-message": "xxxxxxxxxxxxxxxx"
                }],
                "trx-id": "491T8UKQ6DIDO",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "gender": "FEMALE",
                        "title": "นาง",
                        "title-code": "",
                        "firstname": "ประยูรกาฬวรรณ",
                        "lastname": "จันทรรัศมี",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "I",
                        "id-number": "1189900130607",
                        "birthdate": "1920-02-11T00:00:00+0700",
                        "id-expire-date": "2020-02-11T00:00:00+0700",
                        "customer-id": "2768",
                        "installed-products": [{
                            "ouId": "1078",
                            "ban": "10000622",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "number-status": "A",
                            "account-category": "I",
                            "account-sub-type": "FIN",
                            "product-id": "RFSMTP01",
                            "product-name": "RFSMTP01",
                            "product-description": "(4G) Smart 999 voice 500mins net7GB",
                            "bill-cycle": "10",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0939860548",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "523",
                                "moo": "",
                                "street": "32000",
                                "soi": "",
                                "district": "เขวาสินรินทร์",
                                "province": "สุรินทร์",
                                "building-name": "",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "ตากูก",
                                "zip": "32000",
                                "household": ""
                            }
                        }
                    }
                }
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "Mobile Number is not found or cancel, Please check and try again.",
                    "message-code": "TMV-MIGRATE-POST-TO-PRE-00000",
                    "message-type": "ERROR",
                    "en-message": "Mobile Number is not found or cancel, Please check and try again.",
                    "th-message": "ขออภัยไม่พบหมายเลขโทรศัพท์นี้ในระบบ หรือหมายเลขถูกยกเลิก กรุณาตรวจสอบอีกครั้ง",
                    "technical-message": "xxxxxxxxxxxxxxxx"
                }],
                "trx-id": "471T8KNUBJ5C4",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {}
            };
            var data3 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "463Z1K1XLIKW",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "firstname": "Nico di Angelo",
                        "lastname": "",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "",
                        "id-number": "1180200046320",
                        "customer-id": "7866",
                        "installed-products": [{
                            "ouId": "2423",
                            "ban": "10002498",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "H",
                            "product-status": "Active",
                            "number-status": "A",
                            "account-category": "C",
                            "account-sub-type": "HYE",
                            "product-id": "R13EIHP15",
                            "product-name": "R13EIHP15",
                            "product-description": "Hybrid_iphone_1355.14V550S50UnWEG2g128_HS_1.25bt",
                            "bill-cycle": "2",
                            "company-code": "RM",
                            "service-level": "C",
                            "subscriber-id": "8852",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0957570070",
                            "mobile-servicetype": "HYBRID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "1/10",
                                "moo": "",
                                "street": "หลานหลวง",
                                "soi": "",
                                "district": "ป้อมปราบศัตรูพ่าย",
                                "province": "กรุงเทพมหานคร",
                                "building-name": "",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "คลองมหานาค",
                                "zip": "10100",
                                "household": ""
                            }
                        }
                    }
                }
            }
            if (msisdn == "0689100006") {
                $timeout(function() {
                    cb({
                        status: true,
                        data: data,
                        error: '',
                        msgErr: ''
                    });
                }, 1000);
            } else if (msisdn == "0957570070") {
                $timeout(function() {
                    cb({
                        status: true,
                        data: data3,
                        error: '',
                        msgErr: ''
                    });
                }, 1000);
            } else {
                $timeout(function() {
                    cb({
                        status: true,
                        data: data2,
                        error: '',
                        msgErr: ''
                    });
                }, 1000);
            }

        }
    };

    this.decorateSIMData = function(data) {
        var msg = utils.getObject(data, 'display-messages');
        console.log(msg);
        if (msg.length > 0) {
            setTimeout(function() {
                if ($routeParams.subno) {
                    SystemService.showAlert(msg[0]);
                } else {
                    SystemService.showAlert({
                        "message": msg[0]["message"],
                        "message-code": msg[0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": msg[0]["en-message"],
                        "th-message": msg[0]["th-message"],
                        "technical-message": msg[0]["technical-message"]
                    });
                }
            }, 2000);
            if (msg[0]['message-type'] == "ERROR") {
                return false;
            }
        }

        var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
        var customerAddress = utils.getObject(customerProfile, 'address-list.CUSTOMER_ADDRESS');
        var productDetails = utils.getObject(customerProfile, 'installed-products.0');

        if (!customerProfile || !productDetails) return null;

        delete customerProfile['installed-products'];
        delete customerProfile['address-list'];

        // Prepare product type
        var productType = 'ทรูมูฟเอช รายเดือน';
        var serviceType = productDetails['mobile-servicetype'];
        // if (serviceType === 'PREPAID') {
        //     productType = 'ทรูมูฟเอช เติมเงิน';
        // } else if (serviceType === 'POSTPAID') {
        //     productType = 'ทรูมูฟเอช รายเดือน';
        // }

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
            'customerProfileNew': angular.copy(customerProfile),
            'customerAddressOriginal': customerAddress,
            'customerAddress': angular.copy(customerAddress),
            'simData': productDetails,
            'priceplan': {
                'account-category': productDetails['account-category']
            }
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
            if (result.data && result.data['response-data'] && result.data['response-data'].length) {
                for (var i = 0; i < result.data['response-data'].length; i++) {
                    result.data['response-data'][i].proposition = payload.proposition;
                }
            }

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
                }, {
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
                }, {
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

            var data2 = {

                "status": "SUCCESSFUL",

                "trx-id": "3WGRP1IJKSM4",

                "process-instance": "tmsapnpr1 (instance: SFF_node4)",

                "response-data": [{

                    "name": "R11RES251",

                    "description": "TMH Ret - Short Call 25 St, All net, 24Hr",

                    "soc": "970458",

                    "properties": {

                        "TR_SPECIAL_OFFER_IND": "",

                        "PRICEPLAN_TYPE": "N"

                    },

                    "sale-period": {

                        "start": "2011-12-22",

                        "end": "2250-08-08"

                    },

                    "rc": 0.0,

                    "service-level": "C",

                    "priceplan-type": "N"

                }]

            };

            $timeout(function() {

                if (payload.proposition == "0019087") {
                    cb({
                        status: true,
                        data: data2,
                        error: '',
                        msgErr: ''
                    });
                } else {

                    cb({
                        status: true,
                        data: data,
                        error: '',
                        msgErr: ''
                    });
                }

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
                    'title-code': payload.customerProfileNew['title-code'],
                    'title': payload.customerProfileNew['title'],
                    'firstname': payload.customerProfileNew['firstname'],
                    'lastname': payload.customerProfileNew['lastname'],
                    'gender': payload.customerProfileNew['gender'],
                    'id-type': payload.customerProfileNew['id-type'],
                    'id-number': payload.customerProfileNew['id-number'],
                    'birthdate': payload.customerProfileNew['birthdate'],
                    'id-expire-date': payload.customerProfileNew['id-expire-date'],
                    'contact-number': payload.customerProfileNew['contact-number'],
                    'contact-mobile-number': payload.customerProfileNew['contact-mobile-number'],
                    "language": payload.customerProfileNew['language'],
                    "customer-id": payload.customerProfileNew['customer-id'],
                    "address-list": {
                        "CUSTOMER_ADDRESS": payload.customerAddress
                    },
                },
                "sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : payload.saleAgent["ssoEmployeePrincipal"]['employeeId'],
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
                    //"reason-code": payload.selectReason.id,
                    "reason-code": "MGJ5",
                    "address-list": {
                        "BILLING_ADDRESS": payload.customerAddress,
                        "TAX_ADDRESS": payload.customerAddress
                    },
                    "order-data": {
                        "PRICEPLAN-SOC-CODE": payload.priceplanSelected["soc"],
                        "ORIGINAL-ID-NUMBER": payload.customerProfile['id-number'],
                        "ORIGINAL-FIRSTNAME": payload.customerProfile['firstname'],
                        "ORIGINAL-LASTNAME": payload.customerProfile['lastname']

                        //,"CCBS-PROPOSITION-SOC-CODE": payload.propositionSelected['soc']
                    },
                    "primary-order-data": {
                        "OU-ID": payload.productDetails['ouId'],
                        "BAN": payload.productDetails['ban'],
                        "ACCOUNT-CATEGORY": "P",
                        "ACCOUNT-SUB-TYPE": "PRE",
                        "COMPANY-CODE": payload.productDetails['company-code']
                            //,"NAS-PROPOSITION": payload.propositionSelected['proposition-code'],
                            //"CCBS-PROPOSITION": payload.propositionSelected['name']
                    }
                }],
                "last-modify-date": ""
            },
            'ref-id': payload.orderData.TrxID,
            'user-id': payload.saleAgent.logInName,
            'approver': payload.approver
        };

        if (SystemService.checkObj(payload.propositionSelected, ['soc'])) {
            request["order"]["order-items"][0]["order-data"]["CCBS-PROPOSITION-SOC-CODE"] = payload.propositionSelected['soc'];
            request["order"]["order-items"][0]["primary-order-data"]["NAS-PROPOSITION"] = payload.propositionSelected['proposition-code'];
            request["order"]["order-items"][0]["primary-order-data"]["CCBS-PROPOSITION"] = payload.propositionSelected['name'];
        }

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
