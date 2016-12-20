smartApp.service('AddDeleteEditOfferService', function($routeParams, $timeout, SystemService) {

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

    this.getSIMData = function(msisdn, level, callback) {
        var that = this;

        if (utils.isEmpty(msisdn)) {
            msisdn = '';
        }

        var cb = function(result) {
            result.data = that.decorateSIMData(result.data);

            callback(result);
        };

        if (!demo) {
            var target = '/aftersales/tmv/offer/validate-change-offer?level=' + level + '&key-value=' + msisdn;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var url = "/app/jsonFiles/offer/validate-change-offer.json";
            SystemService.getFileJson(url, function(response) {
                // console.log(response);

                $timeout(function() {
                    cb({
                        status: true,
                        data: response,
                        error: '',
                        msgErr: ''
                    });
                }, 1000);
            });
        }
    };

    this.getExistingOffer = function(level, keyvalue, keyid, fnCallback) {

        if (!demo) {

            var target = '/aftersales/tmv/offer/get-existing-offer?' + 'level=' + level + '&key-value=' + keyvalue + '&key-id=' + keyid;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });

        } else {

            var url = "/app/jsonFiles/Offer/get-existing-offer-tDiscount.json";
            SystemService.getFileJson(url, function(response) {
                // console.log(response);

                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }

    };

    this.getUserGroup = function(roles, fnCallback) {
        if (!demo) {
            var target = "aftersales/order/activity-rule/validate?activity=GET_USER_GROUP";
            var request = {
                "target": target,
                "ROLES": roles
            };
            SystemService.callServicePost(request, null, function(response) {
                fnCallback(response);
            });
        } else {
            var url = "/app/jsonFiles/GET_USER_GROUP_CM.json";
            SystemService.getFileJson(url, function(response) {
                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }
    };

    this.searchOffer = function(param, type, fnCallback) {
        if (!demo) {
            if (type == "RELATED") {
                var target = '/sales/catalog/product/tmv/offer/related/search?' + param;
            } else {
                var target = '/sales/catalog/product/tmv/offer/search?' + param;
            }

            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            if (type == 'ALL') {
                var url = "/app/jsonFiles/Offer/search-offer-additional.json"
            } else if (type == 'CUG') {
                var url = "/app/jsonFiles/Offer/search-offer-cug.json"
            } else if (type == 'CONTRACT_PROPO') {
                var url = "/app/jsonFiles/Offer/search-offer-contract_propo.json"
            } else if (type == 'SHARE_ALLOWANCE') {
                var url = "/app/jsonFiles/Offer/search-offer-share_allowance.json"
            } else if (type == 'FF') {
                var url = "/app/jsonFiles/Offer/search-offer-ff.json"
            } else if (type == 'DISCOUNT') {
                var url = "/app/jsonFiles/Offer/search-offer-discount.json"
            } else if (type == 'IR') {
                var url = "/app/jsonFiles/Offer/search-offer-ir.json"
            } else if (type == 'IDD') {
                var url = "/app/jsonFiles/Offer/search-offer-idd.json"
            } else if (type == 'ADDITIONAL') {
                var url = "/app/jsonFiles/Offer/search-offer-additional.json"
            } else if (type == 'POOLING') {
                var url = "/app/jsonFiles/Offer/search-offer-pooling.json"
            } else if (type == '') {
                var url = "/app/jsonFiles/Offer/search-offer-all.json"
            } else if (type == 'BARRING') {
                var url = "/app/jsonFiles/Offer/search-offer-barring.json"
            } else if (type == 'RELATED') {
                var url = "/app/jsonFiles/Offer/search-related-offer-priceplan2.json"
                    // var url = "/app/jsonFiles/Offer/search-offer-notfound.json"
            } else {
                var url = "/app/jsonFiles/Offer/search-offer-notfound.json"
            }

            SystemService.getFileJson(url, function(response) {
                // console.log(response);
                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }
    };

    this.searchOfferByName = function(offerName, fnCallback) {
        if (!demo) {
            var target = '/sales/catalog/product/tmv/offer/' + offerName;

            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else { 
            var url = "/app/jsonFiles/Offer/search-offer-" + offerName + ".json"

            SystemService.getFileJson(url, function(response) {
                // console.log(response);
                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }
    };

    this.submitAddDeleteEditOffer = function(payload, orderItem, fnCallback) {

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
                    'customer-id': payload.customerProfile['customer-id']

                    // 'customer-agents': {
                    //  'AUTH_1': {
                    //      'contact': '0868836665',
                    //      'id-number': '9988877688845',
                    //      'id-type': 'I',
                    //      'firstname': 'สมคิด',
                    //      'lastname': 'คิดมากไป',
                    //      'birthdate': '2015-07-20T00:00:00+0700'
                    //  },
                    //  'POA': {
                    //      'contact': '0868836664',
                    //      'id-number': '3257588733945',
                    //      'id-type': 'I',
                    //      'firstname': 'สมชาย',
                    //      'lastname': 'ปากสว่าง',
                    //      'birthdate': '2015-07-20T00:00:00+0700'
                    //  },
                    //  'AUTH_2': {
                    //      'contact': '0868836666',
                    //      'id-number': '9988877687723',
                    //      'id-type': 'I',
                    //      'firstname': 'สมฤดี',
                    //      'lastname': 'ดีเกินไป',
                    //      'birthdate': '2015-07-20T00:00:00+0700'
                    //  }
                    // }
                },
                "sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : payload.saleAgent["ssoEmployeePrincipal"]["employeeId"]),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    'partner-type': payload.saleAgent['partnerType']
                },
                'order-items': orderItem,
                'last-modify-date': ''
            },
            'ref-id': payload.orderData.orderId,
            'user-id': payload.saleAgent.logInName,
            'approver': payload.approver
        };

        if (payload.POA) {
            request.order.customer['customer-agents'] = {
                'POA': payload.POA
            };
        }
        console.log(request);
        var cb = function(result) {
            var displayMsg = utils.getObject(result.data, 'display-messages.0');
            console.log(displayMsg);
            fnCallback(result);
        };

        if (!demo) {
            var target = '/aftersales/order/submit';

            SystemService.callServicePost(request, null, function(result) {
                //save report to server
                SystemService.saveReportToServer({}, function(result) {

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
    this.getCapmaxParameter = function(offerCode, fnCallback) {
        var data = {};
        if (demo) {
            data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3D13KQS6QT7VC",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "status-code": "0",
                "cap-max-parameter": {
                    "monetary-capmax": "-2",
                    "occurrence-capmax": "-2",
                    "duration-capmax": "-2",
                    "duration-capmax-uom": "Minutes",
                    "volume-capmax": "-2",
                    "volume-capmax-uom": "MB",
                    "duration-capmax-uom-combo": ["Seconds=Seconds", "Minutes=Minutes", "Hours=Hours"],
                    "volume-capmax-uom-combo": ["B=Bytes", "KB=KiloBytes", "MB=MegaBytes", "GB=GigaBytes", "TB=TeraBytes"]
                }
            };
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        } else {
            var target = 'aftersales/tmv/offer/listcapmaxparameter?offer-code=' + offerCode;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        }
    };

    this.getExistingParameter = function(param, fnCallback) {
        var data = {};
        if (demo) {
            var url = "/app/jsonFiles/Offer/get-existing-parameter2.json";
            SystemService.getFileJson(url, function(result) {
                // console.log(response);

                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            });
        } else {
            var target = 'aftersales/tmv/offer/get-existing-parameter?' + param;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        }
    };

    this.getFutureOffer = function(param, fnCallback) {
        var data = {};
        if (demo) {
            var url = "/app/jsonFiles/Offer/get-future-offer.json";
            SystemService.getFileJson(url, function(result) {
                // console.log(response);

                fnCallback({
                    status: true,
                    data: result,
                    error: "",
                    msgErr: ""
                });
            });
        } else {
            var target = 'aftersales/tmv/offer/get-future-order?' + param;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        }
    };

    this.validateOffer = function(name, currentOffer, cusType, fnCallback) {
        if (!demo) {
            var target = "/sales/catalog/product/tmv/offer/validate?" + "new-offer=" + name + "&current-offers=" + currentOffer + "&customer-type=" + cusType;
            var request = {
                "target": target
            };
            SystemService.callServicePostByPass(request, null, function(result) {
                fnCallback(result);
            });
        } else {
            var url = "/app/jsonFiles/Offer/validate-offer-success.json";
            // var url = "/app/jsonFiles/Offer/validate-offer-discount-normal.json";
            SystemService.getFileJson(url, function(response) {
                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }
    };

    this.validateModifyOffer = function(param, fnCallback) {
        var data = {};
        if (!demo) {
            var target = "/sales/catalog/product/tmv/offer/validate-modification?" + param;
            var request = {
                "target": target
            };
            SystemService.callServicePost(request, null, function(result) {
                fnCallback(result);
            });
        } else {
            var url = "/app/jsonFiles/Offer/validate-modify-offer.json";
            SystemService.getFileJson(url, function(response) {
                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }
    };

});
