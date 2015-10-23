smartApp.service('MigratePreToPostService', function($routeParams, $timeout, SystemService) {

    var demo = SystemService.demo;

    this.decorateSIMData = function(data) {

        var msg = utils.getObject(data, 'display-messages');

        if (msg && msg.length > 0) {
            setTimeout(function() {
                if ($routeParams.subno) {
                    SystemService.validateErrorAlert(msg[0]);
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
            }, 1000);
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
        var productType = '';
        var serviceType = productDetails['mobile-servicetype'];
        if (serviceType === 'PREPAID') {
            productType = 'ทรูมูฟเอช เติมเงิน';
        } else if (serviceType === 'POSTPAID') {
            productType = 'ทรูมูฟเอช รายเดือน';
        }

        //Fix value becuase migrate pre to post support personal only
        //productDetails['account-category'] = "I";
        //productDetails['account-sub-type'] = "FIN";

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

    this.decorateLastestCustomer = function(data) {
        var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
        var customerAddress = utils.getObject(customerProfile, 'address-list.CUSTOMER_ADDRESS');
        var productDetails = utils.getObject(customerProfile, 'installed-products');

        if (!customerProfile || !productDetails) return null;

        delete customerProfile['installed-products'];
        delete customerProfile['address-list'];

        var response = {
            'customerProfile': customerProfile,
            'customerAddressOriginal': customerAddress,
            'customerAddress': angular.copy(customerAddress),
            'installedProducts': productDetails
        };

        return response;
    };

    this.getSIMData = function(msisdn, callback) {
        var that = this;

        if (utils.isEmpty(msisdn)) {
            msisdn = '';
        }

        var cb = function(result) {
            result.data = that.decorateSIMData(result.data);

            callback(result);
        };

        if (!demo) {
            var target = '/aftersales/tmv/migratepretopost/validatemigratepretopost?msisdn=' + msisdn;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {

                "status": "SUCCESSFUL",

                "display-messages": [],

                "trx-id": "3Q5RSB5WGKN4",

                "process-instance": "tmsapnpr1 (instance: SFF_node4)",

                "response-data": {

                    "customer": {

                        "title": "",

                        "title-code": "T3",

                        "firstname": "พฤกษวดี",

                        "lastname": "พฤกษวดีนงลักษณ์",

                        "birthdate": "2531-09-01T00:00:00+0700",

                        "contact-number": "",

                        "id-type": "P",

                        "id-number": "012369857789",

                        "customer-id": "325",

                        "installed-products": [

                            {

                                "ouId": "",

                                "ban": "",

                                "product-category": "TMV",

                                "product-type": "PRICEPLAN",

                                "product-sub-type": "P",

                                "product-status": null,

                                "account-category": "P",

                                "account-sub-type": "PRE",

                                "product-id": "R12RMMNP1",

                                "product-name": "R12RMMNP1",

                                "bill-cycle": "",

                                "company-code": "RM",

                                "service-level": "C",

                                "product-properties": {

                                    "IMSI": "520002081981781",

                                    "SIM": "896600331500001222"

                                },

                                "product-id-name": "MSISDN",

                                "product-id-number": "0957732665",

                                "mobile-servicetype": "PREPAID",

                                "has-splitcharge": false,

                                "is-childsim": false,

                                "is-softsuspend": false

                            }

                        ]

                    }

                }

            }

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

    this.validateMigratePreToPost = function(msisdn, callback) {

        msisdn = utils.isEmpty(msisdn) ? '' : msisdn;

        var that = this;

        var cb = function(result) {
            result.data = that.decorateSIMData(result.data);
            callback(result);
        };

        if (!demo) {
            var target = '/aftersales/tmv/migratepretopost/validatemigratepretopost?msisdn=' + msisdn;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                "trx-id": "3BDPN2HLK4TZ",
                'process-instance': 'psaapdv1 (instance: SFF_node1)',
                'status-code': '0',
                'response-data': {
                    'customer': {
                        'title': 'Miss',
                        'title-code': 'T2',
                        'firstname': 'Nate',
                        'lastname': 'Phutthicha',
                        'birthdate': '2015-07-20T00:00:00+0700',
                        'contact-number': null,
                        'id-number': '1189900130607',
                        'id-type': 'I',
                        'id-expire-date': '2017-07-20T00:00:00+0700',
                        'customer-id': null,
                        'customer-level': null,
                        'customer_sublevel_id': null,
                        'customer_sublevel': null,
                        'gender': 'FEMALE',
                        'installed-products': [{
                            "ouId": "5010",
                            "ban": "20009628",
                            "product-id": "EDATAP69",
                            "product-name": "EDATAP69",
                            "product-description": "Biz &amp; Ent 900,Data UNL5GB/128,WiFi",
                            "account-category": "I",
                            "account-sub-type": "FIN",
                            "customer-level": "NON-TOP",
                            "company-code": "RF",
                            "product-category": "TMV",
                            "product-status": "ACTIVE",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0XXXXXXXXX",
                            "mobile-servicetype": "POSTPAID",
                            "ou-hierarchytype": "CHILD",
                            "parent-ouId": "1234",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "product-properties": {
                                "SIM  ": null,
                                "IMSI": null
                            }
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

    this.validateGrading = function(payload, callback) {

        var params = utils.createParamGet(payload, [
            'company-id'
        ]);

        var that = this;

        var cb = function(result) {
            callback(result);
        };

        if (!demo) {
            var target = '/profiles/customer/company/grade?' + params;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "461HQMYTGV3HF",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": {
                    "company-grade": {
                        "company-id": "0105524019341",
                        "company-name": "บริษัท อเมริกัน เอ็กซ์เพรส (ไทย) จำกัด",
                        "grade-id": "3",
                        "grade-name": "TOP",
                        "grade-sub-name": "ENT_TOPREV"
                    }
                }
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

    this.validatePartner = function(payload, callback) {

        var params = utils.createParamGet(payload, [
            'partner-code',
            'function-type'
        ]);

        var that = this;

        var cb = function(result) {
            callback(result);
        };

        if (!demo) {
            var target = '/profiles/partner/validatepartner?' + params;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "7K1EFF8LA2BTF",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": {
                    "partnerInfo": {
                        "status-id": "1",
                        "register_date": "2003-06-23 00:00:00.0",
                        "status_name": "Active",
                        "biz-reg-type-name": "นิติบุคคล",
                        "dealer-code": "20999999",
                        "emp-code": "",
                        "tvs-code": "",
                        "tmx-emp-code": "",
                        "channel-alias": "OTHER",
                        "channel-name": "Other",
                        "partner-type-name": "Sub-Partner",
                        "partner-sub-type-name": "",
                        "partner-type-group-name": "OUTLET",
                        "parent-code": "79000001",
                        "partner-name-th": "TA Orange Co., Ltd."
                    }
                }
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

    this.preverify = function(header, dataRequest, callback) {

        var that = this;

        var cb = function(result) {
            callback(result);
        };

        if (!demo) {

            SystemService.callServicePostByPass(dataRequest, header, function(result) {
                cb(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "fault": {
                    "name": "th.co.truecorp.ads.api.ApplicationServiceException",
                    "code": "TMV-PREVERIFY-11010",
                    "message": " VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.].  VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.]",
                    "detailed-message": "ApplicationServiceException TMV-PREVERIFY-11009 VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.]. "
                },
                "display-messages": [{
                    "message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                    "message-code": "TMV-PREVERIFY-11010x",
                    "message-type": "ERROR",
                    "en-message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                    "th-message": "ไม่สามารถเปิดบริการได้ กรุณาแนะนำเจ้าหน้าที่โทรติดต่อ 02-699-6222 (วันจันทร์-เสาร์ เวลา 9.00-18.00)",
                    "technical-message": "null( Message variable: ] ) "
                }],
                "trx-id": "3I1BDOSDXWJN8",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)"
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "trx-id": null,
                "process-instance": null,
                "display-messages": [],
                "response-data": [{
                    "verifyCode": null
                }]
            };

            var result = {};

            if ($scope.approveCode) {
                result = data2;
            } else {
                result = data2;
            }

            $timeout(function() {
                cb({
                    status: true,
                    data: result,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

    this.accountSubType = function(payload, callback) {

        var params = utils.createParamGet(payload, [
            'company',
            'customer-type',
            'grade',
            'service-type'
        ]);

        var that = this;

        var cb = function(result) {
            callback(result);
        };

        if (!demo) {
            var target = '/profiles/tmv/master/account-subtype?' + params;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "03V94EUARX80",
                "process-instance": "tpx61.true.th (instance: sale)",
                "response-data": [{
                    "name": "PRI",
                    "description": "บุคคลธรรมดา"
                }, {
                    "name": "SOL",
                    "description": "เจ้าของกิจการคนเดียว"
                }, {
                    "name": "FIN",
                    "description": "RF-Individual"
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

    this.lastestCustomer = function(payload, callback) {

        var params = utils.createParamGet(payload, [
            'certificateid',
            'customer-type'
        ]);

        var that = this;

        var cb = function(result) {
            result.data = that.decorateLastestCustomer(result.data);
            callback(result);
        };

        if (!demo) {
            var target = '/profiles/customer/getlastestcustomer?' + params;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "AMBPAQ9JO3EX",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "response-data": {
                    "customer": {
                        "title": "คุณ",
                        "title-code": "T2",
                        "firstname": "กอไก่",
                        "lastname": "ขอไข่",
                        "contact-number": "029448849#123",
                        "contact-mobile-number": "444444444",
                        "id-type": "",
                        "id-number": "1984051311082",
                        "customer-id": "4811",
                        "customer-level": "NON-TOP",
                        "customer_sublevel_id": null,
                        "customer_sublevel": null,
                        "installed-products": [{
                            "ouId": "6953",
                            "ban": "10007237",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "account-category": "I",
                            "account-sub-type": "FIN",
                            "product-id": "0880500207",
                            "bill-cycle": "10",
                            "bill-cycle-date": "10/10",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0880500207",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "CHILD",
                            "parent-ouId": "1234"
                        }, {
                            "ouId": "6954",
                            "ban": "10007237",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "account-category": "I",
                            "account-sub-type": "FIN",
                            "product-id": "0880500207",
                            "bill-cycle": "10",
                            "bill-cycle-date": "9/11",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0880500207",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "CHILD",
                            "parent-ouId": "1234"
                        }, {
                            "ouId": "6955",
                            "ban": "10007237",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "account-category": "I",
                            "account-sub-type": "FIN",
                            "product-id": "0880500207",
                            "bill-cycle": "10",
                            "bill-cycle-date": "5/12",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0880500207",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "CHILD",
                            "parent-ouId": "1234"
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "90/1",
                                "type": "CUSTOMER_ADDRESS",
                                "moo": "",
                                "village": "",
                                "street": "พหลโยธิน",
                                "soi": "",
                                "district": "โกสัมพีนคร",
                                "province": "กำแพงเพชร",
                                "building-name": "",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "โกสัมพี",
                                "zip": "62000",
                                "household": "90/1"
                            },
                            "BILLING_ADDRESS": {
                                "number": "90/1",
                                "type": "BILLING_ADDRESS",
                                "moo": "",
                                "village": "",
                                "street": "พหลโยธิน",
                                "soi": "",
                                "district": "โกสัมพีนคร",
                                "province": "กำแพงเพชร",
                                "building-name": "",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "โกสัมพี",
                                "zip": "62000",
                                "household": "90/1"
                            },
                            "TAX_ADDRESS": {
                                "number": "90/1",
                                "type": "TAX_ADDRESS",
                                "moo": "",
                                "village": "",
                                "street": "พหลโยธิน",
                                "soi": "",
                                "district": "โกสัมพีนคร",
                                "province": "กำแพงเพชร",
                                "building-name": "",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "โกสัมพี",
                                "zip": "62000",
                                "household": "90/1"
                            },
                            "INSTALLATION_ADDRESS": {
                                "number": "90/1",
                                "type": "INSTALLATION_ADDRESS",
                                "moo": "",
                                "village": "",
                                "street": "พหลโยธิน",
                                "soi": "",
                                "district": "โกสัมพีนคร",
                                "province": "กำแพงเพชร",
                                "building-name": "",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "โกสัมพี",
                                "zip": "62000",
                                "household": "90/1"
                            }
                        }
                    }
                }
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

    this.proposition = function(payload, callback) {
        var params = utils.createParamGet(payload, [
            'company-code',
            'customer-type',
            'propo-type',
            'mobile-servicetype',
            'partner-code',
            'privilege'
        ]);

        var cb = function(result) {
            callback(result);
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

    this.pricePlan = function(payload, callback) {
        var params = utils.createParamGet(payload, [
            'company-code',
            'customer-type',
            'customer-subtype',
            'service-level',
            'keyword',
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
            callback(result);
        };

        if (!demo) {
            var target = '/sales/catalog/product/tmv/priceplan/search?' + params;

            SystemService.callServiceGet(target, null, function(result) {
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

    this.address = function(address, callback) {

        address = utils.isEmpty(address) ? '' : address;

        var cb = function(result) {
            callback(result);
        };

        if (!demo) {
            var target = '/profiles/master/address/search?keyword=' + address;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "6910OUYKLNCOK",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": [{
                    "subdistrict": "ดินแดง",
                    "district": "ดินแดง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10321"
                }, {
                    "subdistrict": "ดินแดง",
                    "district": "ดินแดง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10325"
                }, {
                    "subdistrict": "ดินแดง",
                    "district": "ดินแดง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10326"
                }, {
                    "subdistrict": "ดินแดง",
                    "district": "ดินแดง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10400"
                }, {
                    "subdistrict": "ดินแดง",
                    "district": "ดินแดง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10407"
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

    this.reason = function() {

    };

    this.masterList = function() {

    };

    this.secondAuthen = function() {

    };

    this.generateOrderId = function() {

    };

    this.getOfferDetail = function(soc, callback) {

        var cb = function(result) {
            callback(result);
        };

        if (!demo) {
            var target = '/aftersales/tmv/priceplan/details?offer-code=' + soc;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3BYU2Z95RW3I",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "status-code": "0",
                "csm-offer-details": {
                    "currency": "THB",
                    "name": "CF01AP01",
                    "deployFromGroupIndicator": "Y",
                    "description": "P_Corporate 50 free F&amp;F 1 No.",
                    "duration": "",
                    "product-type": "RR",
                    "soc-properties": "TR_DEFAULT_CONTRACT_FEE=0;TR_CUSTOMER_TYPE=B,C;businessEntityID=0;Should be deployed=Y;TR_CONTRACT_TERM=0;Activation date to charge=Y;type=Price plan;Maximum offer duplicates allowed=0;Limit_Subs=99999;TR_SPECIAL_OFFER_IND=Null;id=263998;saleContext=Stand alone;level=Subscriber;description=P_Corporate 50 free F&amp;F 1 No.;name=CF01AP01;CUG_IND=Null;primaryServiceItem=MSISDN;cappingOffer=N;ApplyInOverlappingMove=false;currencyCode=THB;FF_Number=Null;itemization_offer_ind=N;saleExpirationDate=2016-01-30;Product type=RR;TR_ACCOUNT_SUB_TYPE=Null;english_offer_description=Corporate 50 free F&amp;F 1 No.;thai_offer_description=Corporate 50 free F&amp;F 1 No.;saleEffectiveDate=2009-09-15;TR_CUSTOMER_SUB_TYPE=Null;TR_NEXT_PP=null;TR_DURATION_MONTH=0;Deactivation date to charge=Y;TR_GENERATE_CHARGE_YES_NO=N;TR_PRODUCT_SUB_TYPE=R;Agreement distribute level=0;",
                    "sale-expiration-date": "30/01/2016 00:00:00",
                    "max-instances-allowed": "Duplication is Forbidden",
                    "offer-type": "P",
                    "sale-effective-date": "15/09/2009 00:00:00",
                    "sale-context": "S",
                    "rc-indicator": "",
                    "primary-resource": "MSISDN",
                    "special-offer-type": "",
                    "min-ff-number": "1",
                    "product-sub-type": "PostPay",
                    "csm-related-offer-details": [{
                        "code": "265738",
                        "name": "FTALKS31",
                        "description": "Talk: 1F&amp;F True FL",
                        "service-level": "C",
                        "sale-expiration-date": "08/08/2250 00:00:00",
                        "offer-type": "U",
                        "sale-effective-date": "28/02/2008 00:00:00",
                        "special-offer-type": "FriendAndFamily"
                    }, {
                        "code": "40941",
                        "name": "PROSTDA1",
                        "description": "Standard Provisioning Services for Post Pay # 1",
                        "service-level": "C",
                        "sale-expiration-date": "08/08/2250 00:00:00",
                        "offer-type": "U",
                        "sale-effective-date": "04/08/2010 00:00:00",
                        "special-offer-type": ""
                    }, {
                        "code": "41861",
                        "name": "FCVBAR",
                        "description": "First Call Verification, Barring",
                        "service-level": "C",
                        "sale-expiration-date": "08/08/2250 00:00:00",
                        "offer-type": "U",
                        "sale-effective-date": "08/01/2008 00:00:00",
                        "special-offer-type": ""
                    }]
                }
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

    this.getCUGId = function() {

    };

    this.validateCUG = function() {

    };

    this.getCapmaxParameter = function() {

    };

    this.orderSave = function() {

    };

    this.orderValidate = function() {

    };

    this.submit = function(payload, callback) {

        var request = {
            "order": {
                "order-id": payload.orderData.orderId,
                "creator": payload.saleAgent.logInName,
                "customer": {
                    'title-code': payload.customerProfile['title-code'],
                    'title': payload.customerProfile['title'],
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
                    }
                },
                "sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : null),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    //'sale-assist-code': "",
                    'partner-type': payload.saleAgent['partnerType']
                },
                "order-items": [{
                    "name": "MIGRATE_PRE_TO_POST",
                    "product-name": payload.priceplanSelected["name"],
                    "product-id-number": payload.productDetails['product-id-number'],
                    "product-id-name": payload.productDetails['product-id-name'],
                    "product-category": payload.productDetails['product-category'],
                    "product-type": payload.productDetails['product-type'],
                    "order-type": "CHANGE",
                    "reason-code": "AA02",
                    //"user-memo": "Customer want to request .",
                    "address-list": {
                        "BILLING_ADDRESS": payload.customerAddress,
                        "TAX_ADDRESS": payload.customerAddress
                    },
                    "order-data": {
                        "SUBSCRIBER-TITLE-CODE": payload.customerProfile['title-code'],
                        "SUBSCRIBER-TITLE": payload.customerProfile['title'],
                        "SUBSCRIBER-FIRSTNAME": payload.customerProfile['firstname'],
                        "SUBSCRIBER-LASTNAME": payload.customerProfile['lastname'],
                        "SUBSCRIBER-BIRTHDATE": payload.customerProfile['birthdate'],
                        "SUBSCRIBER-GENDER": payload.customerProfile['gender'],
                        "SUBSCRIBER-SMS-LANG": "TH",
                        "ACCOUNT-BILL-FORMAT": "P",
                        "ACCOUNT-PAYMENT-METHOD": "CA",
                        "ACCOUNT-LANG": "TH",
                        "CHANGE-OPTION": "NEW",
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
                        "CCBS-PROPOSITION": payload.propositionSelected['name'],
                        "SIM": ""
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
            callback(result);
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
