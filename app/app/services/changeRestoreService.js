smartApp.service('ChangeRestoreService', function($routeParams, $timeout, SystemService) {

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
        } else {
            productType = 'ทรูมูฟเอช รายเดือน';
        }

        //Fix value becuase migrate pre to post support personal only
        // productDetails['account-category'] = "I";
        // productDetails['account-sub-type'] = "FIN";

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
            'simData': productDetails,
            'priceplan': {
                'account-category': productDetails['account-category']
            }
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
            var target = '/aftersales/tmv/restore/validaterestore?msisdn=' + msisdn;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                "trx-id": "3BDPN2HLK4TZ",
                'process-instance': 'psaapdv1 (instance: SFF_node1)',
                'status-code': '0',
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
                        "installed-products": [{
                            "ouId": "5010",
                            "ban": "20009628",
                            "product-id": "EDATAP69",
                            "product-name": "EDATAP69",
                            "product-description": "Biz &amp; Ent 900,Data UNL5GB/128,WiFi",
                            "product-soc-code": "1234567",
                            "account-category": "B",
                            "account-sub-type": "FIN",
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
                                "PRODUCT-STATUS-DATE": '20/10/2016',
                                "REASON-CODE": null,
                                "REASON-DESC": 'test',
                                "SUBSCRIBER-ID": null,
                                "PRODUCT-STATUS-CODE": 'SOFT-SUSPEND', // CANCEL-ACTIVE, CANCEL-SOFT-SUSPEND, CANCEL-FULL-SUSPEND
                                "PRODUCT-STATUS-DESC": 'Soft Suspend by Request' // Active, Soft Suspend by Request, Full Suspend by Request
                            }
                        }]
                    },
                    "display-messages": [{
                        "message": "",
                        "message-type": "ERROR",
                        "en-message": "VIP",
                        "th-message": "",
                        "technical-message": ""
                    }, {
                        "message": "",
                        "message-type": "ERROR",
                        "en-message": "DISCOUNT",
                        "th-message": "",
                        "technical-message": ""
                    }, {
                        "message": "",
                        "message-type": "ERROR",
                        "en-message": "SUBSCRIBER STATUS",
                        "th-message": "",
                        "technical-message": ""
                    }, {
                        "message": "",
                        "message-type": "ERROR",
                        "en-message": "NICE NUMBER",
                        "th-message": "",
                        "technical-message": ""
                    }, {
                        "message": "",
                        "message-type": "WARNING",
                        "en-message": "IR",
                        "th-message": "",
                        "technical-message": ""
                    }, {
                        "message": "",
                        "message-type": "WARNING",
                        "en-message": "CONVERGENT",
                        "th-message": "",
                        "technical-message": ""
                    }]

                },
               
            };
            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "4OHUDHRBFBBZ",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "title": "นางสาว",
                        "title-code": "T3",
                        "firstname": "บุษบานงเยาว์",
                        "lastname": "พิสุทธิอาภรณ์",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "",
                        "id-number": "1189900130607",
                        "customer-id": "2590",
                        "installed-products": [{
                            "ouId": "915",
                            "ban": "10000541",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "product-status": "Active",
                            "account-category": "B",
                            "account-sub-type": "RPI",
                            "product-id": "SMRTPP87",
                            "product-name": "SMRTPP87",
                            "product-description": "iSmart 299, voice100mins net500MB UNLTD WiFi UNLTD",
                            "bill-cycle": "10",
                            "company-code": "RM",
                            "service-level": "C",
                            "subscriber-id": "3165",
                            "product-properties": {
                                "REASON-DESC": "Customer request",
                                "PRODUCT-STATUS-DESC": "Soft Suspend by Request",
                                "PRODUCT-STATUS-DATE": "06/09/2015",
                                "REASON-CODE": "CREQ",
                                "PRODUCT-STATUS-CODE": "RESTORE-SOFT-SUSPEND"
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0957730540",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "sub-status": "Barring by request "
                        }]
                    }
                }
            };
            $timeout(function() {
                cb({
                    status: true,
                    data: data2,
                    error: '',
                    msgErr: ''
                });
            }, 1000);
        }
    };

    this.submitChangeRestore = function(payload, fnCallback) {
        var request = {
            "target": "aftersales/order/submit",
            'order': {
                "order-id": payload.orderData.orderId,
                "creator": payload.saleAgent.logInName,
                'create-date': moment().format('YYYY-MM-DDTHH:mm:ss+0700'),
                'customer': {
                    'title-code': payload.customerProfile['title-code'],
                    'title': payload.customerProfile['title'],
                    'firstname': payload.customerProfile['firstname'],
                    'lastname': payload.customerProfile['lastname'],
                    'id-number': payload.customerProfile['id-number'],
                    'customer-id': payload.customerProfile['customer-id'],
                    'customer-agents': payload.customerAgent                   
                },
                "sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : payload.saleAgent["saleCode"]),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    'partner-type': payload.saleAgent['partnerType']
                },
                'order-items': [{
                    'name': 'RESTORE',
                    'product-name': payload.productDetails['product-id'],
                    'product-id-number': payload.productDetails['product-id-number'],
                    'product-id-name': payload.productDetails['product-id-name'],
                    // 'product-category': payload.productDetails['product-category'],
                    'reason-code': payload.statusReason,
                    'user-memo': payload.saleAgent.logInName + "(" + payload.saleAgent.saleCode + ": " + payload.saleAgent.engName + ")" + "(" + "Order ID: " + payload.orderData.orderId + ")" + ": "  + payload.statusReasonMemo,
                    'order-data': {
                        'MOBILE-SERVICETYPE': payload.productDetails['mobile-servicetype'],
                        "CHANGE-OPTION": 'RESTORE',
                        "PRODUCT-STATUS-DESC": payload.productDetails['product-properties'] ['PRODUCT-STATUS-DESC'],
                          
                    },
                    'primary-order-data': {
                        'OU-ID': payload.productDetails['ouId'],
                        'BAN': payload.productDetails['ban'],
                        'ACCOUNT-CATEGORY': payload.productDetails['account-category'],
                        'ACCOUNT-SUB-TYPE': payload.productDetails['account-sub-type'],
                        'COMPANY-CODE': payload.productDetails['company-code'],
                        // 'PRODUCT-CODE': payload.productDetails['productCodes'],
                        // 'SIM': payload.productDetails['simSerial'],
                        "EFFECTIVE-OPTION": "IMMEDIATE",
                        "EFFECTIVE-DATE": moment().format('YYYY-MM-DDTHH:mm:ss+0700')

                    },
                    'product-category': payload.productDetails['product-category'],
                    'product-type': "PRICEPLAN",
                    'order-type': "CHANGE"

                }],
                'last-modify-date': ''
            },
            'ref-id': payload.orderData.orderId,
            'user-id': payload.saleAgent.logInName,
            'approver': payload.approver
        };
        //20160602 Change AUTH to POA by waramun
        if ($('#CitizenID2').val() && $('#authorizeFullName').val()) {

        } else{
            delete request['order']['customer']['customer-agents'];
        }
        console.log(request);
        console.log(payload);
        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            var target = '/aftersales/order/submit';

            SystemService.callServicePost(request, null, function(result) {
            	//save report to server
            	SystemService.saveReportToServer({}, function(result){            		
            	});
                
                cb(result);                
                
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'display-messages': [{
                    'message': 'Order ORD150700000032 successful saved.',
                    'message-type': 'INFORMATION',
                    'en-message': 'Order ORD150700000032 successful saved.',
                    'th-message': 'รายการคำขอเลขที่ ORD150700000032 ได้รับข้อมูลเรียบร้อยแล้ว'
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
