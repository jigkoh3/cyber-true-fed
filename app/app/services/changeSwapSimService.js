smartApp.service('ChangeSwapSimService', function($timeout, SystemService, $routeParams) {
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
            var target = '/aftersales/tmv/swapsim/validateswapsim?msisdn=' + msisdn;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);

            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "Please contact 0891990135 VIP Team Number before swap SIM for VIP Customer ",
                    "message-code": "TMV-SWAPSIM-00001",
                    "message-type": "WARNING",
                    "en-message": "Please contact 0891990135 VIP Team Number before swap SIM for VIP Customer ",
                    "th-message": "เลขหมายนี้เป็นกลุ่ม VIP จะดำเนินการใดๆต้องแจ้งกับทาง ทีม VIP ก่อนเท่านั้น โปรดติดต่อ 0891990135"
                }],
                "trx-id": "3Z1N7RSSP1HYN",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "title": "นางสาว",
                        "title-code": "T3",
                        "firstname": "กุมารีหริลักษณ์",
                        "lastname": "จันทรรัศมี",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "I",
                        "id-number": "1189900130607",
                        "customer-id": "2592",
                        "installed-products": [{
                            "ouId": "921",
                            "ban": "10000543",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-status": "",
                            "number-status": "A",
                            "account-category": "I",
                            "account-sub-type": "FVI",
                            "product-id": "RFSMTP01",
                            "product-name": "RFSMTP01",
                            "product-description": "(4G) Smart 999 voice 500mins net7GB",
                            "company-code": "RF",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0939860540",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "company-code-desc": "True Move H - Real Future",
                            "is-4g": false
                        }]
                    }
                }
            };

            var data2 = {
                'status': 'SUCCESSFUL',
                'trx-id': '3BDPN2HLK4TZ',
                'process-instance': 'psaapdv1 (instance: SFF_node1)',
                'status-code': '0',
                'display-messages': [{
                    "message": "External service [CCB_INT] response error. ACAHblG10001-Data not found.",
                    "message-code": "WSC-00001",
                    "message-type": "WARNING",
                    "en-message": "External service [CCB_INT] response error. ACAHblG10001-Data not found.",
                    "technical-message": "CCB_INT response ACAHblG10001: Data not found. on service url http://172.19.194.63:8280/SearchCustomerInfoWS/SearchCustomerInfoSI."
                }]
            };

            if (msisdn == "0957730500") {

                $timeout(function() {
                    cb({
                        status: true,
                        data: data,
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
        SystemService.hideLoading();
        var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
        var productDetails = utils.getObject(customerProfile, 'installed-products.0');

        var displayMsg = utils.getObject(data, 'display-messages.0');
        console.log(displayMsg);

        if (!customerProfile || !productDetails || (displayMsg && displayMsg['message-type'])) {
            setTimeout(function() {
                if ($routeParams.subno) {
                    SystemService.showAlert(displayMsg);
                } else {
                    SystemService.showAlert({
                        "message": displayMsg["message"],
                        "message-code": displayMsg["message-code"],
                        "message-type": "WARNING",
                        "en-message": displayMsg["en-message"],
                        "th-message": displayMsg["th-message"],
                        "technical-message": displayMsg["technical-message"]
                    });
                }
            }, 1200);
            if (displayMsg['message-code'] == "WSC-00001") {
                return false;
            }
            //return null;

        }

        delete customerProfile['installed-products'];

        // Prepare product type
        var productType = '';
        var serviceType = productDetails['mobile-servicetype'];
        if (serviceType === 'PREPAID') {
            productType = 'ทรูมูฟเอช เติมเงิน';
        } else {
            productType = 'ทรูมูฟเอช รายเดือน';
        }

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
            'simData': productDetails
        };

        return response;
    };

    this.validateSIM = function(payload, fnCallback) {

        if ($('#divID').val() == "changeSwapSimContent") {
            payload['project'] = 'SWAPSIM-' + payload['mobile-servicetype'];
        } else {
            payload['project'] = '' + payload['mobile-servicetype'];
        }
        //alert(payload['project']);


        var params = utils.createParamGet(payload, [
            'sim-serial',
            'dealer-code',
            'company-code',
            'mobile-servicetype',
            'product-code',
            'project',
            'pair-msisdn'
        ]);

        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            var target = '/aftersales/order/tmv/validateswapsim?' + params;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'display-messages': [],
                'trx-id': '3BYUAFJC01W8',
                'process-instance': 'tmsapnpr1 (instance: SFF_node1)',
                'status-code': '0',
                'response-data': {
                    'sim-detail': {
                        'pin1': 'String',
                        'pin2': 'String',
                        'puk1': 'String',
                        'puk2': 'String',
                        'hlr': 'String',
                        'item-id': 'String',
                        'item-desc': 'String',
                        'manuf': 'String',
                        'model': 'String',
                        'imei-status': 'String',
                        'active-ind': 'String',
                        'missing-ind': 'String',
                        'repair-ind': 'String',
                        'ta-ind': 'String',
                        'primary-ctn': 'String',
                        'nl': 'String',
                        'ngp': 'String',
                        'sim-type': 'S',
                        'serial-type': 'String',
                        'serial-no': 'String',
                        'sys-creation-date': 'String',
                        'sys-update-date': 'String',
                        'resource-status': 'AVAILABLE',
                        'activity-code': 'String',
                        'activity-date': 'String',
                        'activity-reason': 'String',
                        'imsi': 'String',
                        'product-type': 'String',
                        'imei-desc': 'String',
                        'dealer-code': 'String',
                        'manf-code': 'String',
                        'item-cat': 'String',
                        'item-subcat': 'String',
                        'cpo-ind': 'String',
                        'init-pin1': 'String',
                        'init-pin2': 'String',
                        'sim-type-desc': 'String',
                        'logical-hlr': 'String',
                        'police-station': 'String',
                        'report-date': 'String',
                        'sim-physical-hlr': 'String',
                        'ctn': 'String',
                        'ctn-status': 'String',
                        'ctn-company-code': 'String',
                        'sim-company-code': 'String',
                        'ctn-pool-code': 'String',
                        'ctn-pool-type': 'String',
                        'transaction-id': 'String',
                        'error-message': 'String',
                        'product-code': '3000014924'
                    }
                }
            };

            var data2 = {
                "status": "UNSUCCESSFUL",
                "display-messages": [{
                    "message": "request sim prefix  is wrong format for company(RM)",
                    "message-code": "",
                    "message-type": "ERROR",
                    "en-message": "request sim prefix  is wrong format for company(RM)",
                    "th-message": "request sim prefix  is wrong format for company(RM)",
                    "technical-message": "request sim prefix  is wrong format for company(RM)"
                }],
                "trx-id": "4Q15KDZCTBQYP",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {}

            };

            $timeout(function() {
                if (payload['sim-serial'] == "888888888888888888") {
                    cb({
                        status: true,
                        data: data,
                        error: '',
                        msgErr: ''
                    });
                } else {
                    cb({
                        status: true,
                        data: data2,
                        error: '',
                        msgErr: ''
                    });
                }
            }, 1000);

        }

    };

    this.submitSwapSIMOrder = function(payload, fnCallback) {
        var request = {
            'order': {
                'order-id': payload.orderData.orderId,
                'creator': payload.saleAgent['logInName'],
                //'create-date': moment().format('YYYY-MM-DDTHH:mm:ss+0700'),
                'customer': {
                    'title-code': payload.customerProfile['title-code'],
                    'title': payload.customerProfile['title'],
                    'firstname': payload.customerProfile['firstname'],
                    'lastname': payload.customerProfile['lastname'],
                    //'gender': null,
                    'id-type': payload.customerProfile['id-type'],
                    'id-number': payload.customerProfile['id-number'],
                    'contact-number': payload.customerProfile['contact-number'],
                    'contact-mobile-number': payload.customerProfile['contact-mobile-number'],
                },
                'sale-agent': {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : null),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    'sale-assist-code': "",
                    'partner-type': payload.saleAgent['partnerType']
                },
                'order-items': [{
                        'name': 'SWAP_SIM',
                        'product-name': payload.simData['product-id'],
                        'product-id-number': payload.simData['product-id-number'],
                        'product-id-name': payload.simData['product-id-name'],
                        'product-category': payload.simData['product-category'],
                        'product-type': 'PRICEPLAN',
                        'order-type': 'CHANGE',
                        'reason-code': 'CREQ',
                        //'user-memo': 'Customer want to request .',
                        'order-data': {
                            'OU-ID': payload.simData['ouId'],
                            'BAN': payload.simData['ban'],
                            'PREPAID-SUBSCRIBER-ID': payload.simData['prepaid-subscriber-id'],
                            'IMSI': payload.simData['product-id-number'],
                            'CUSTOMER-ID': payload.customerProfile['customer-id'],
                            'SIM-OWNER': payload.simDetail['dealer-code']
                        },
                        'primary-order-data': {
                            'MOBILE-SERVICETYPE': payload.simData['mobile-servicetype'],
                            'ACCOUNT-CATEGORY': payload.simData['account-category'],
                            'ACCOUNT-SUB-TYPE': payload.simData['account-sub-type'],
                            'COMPANY-CODE': payload.simData['company-code'],
                            'PRODUCT-CODE': payload.newSIMData['productCodes'],
                            'SIM': payload.newSIMData['simSerial']
                        }
                    }]
                    //,'last-modify-date': ''
            },
            'ref-id': payload.orderData.TrxID,
            'user-id': payload.saleAgent['logInName'],
            'approver': payload.orderData.approver,
            'target': '/aftersales/order/submit'
        };
        console.log(request);
        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            //var target = '/aftersales/order/submit';

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
