smartApp.service('changeIRIDDService', function($filter, SystemService, $routeParams) {
    var demo = SystemService.demo;
    var validateIRIDDAPI = function(msisdn, fnCallback) {

        if (!demo) {
            var target = '/aftersales/tmv/changeiridd/validateiridd?msisdn=' + msisdn;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "8D14IWLZS0PFB",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "firstname": "RS Trainer",
                        "lastname": "",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "",
                        "id-number": "1189900130607",
                        "require-approve-code": "Y",
                        "customer-id": "33896",
                        "customer-level": "NON-TOP",
                        "cvss-process-request": "N",
                        "installed-products": [{
                            "ouId": "16058",
                            "ban": "10050233",
                            "product-type": "ADDITIONAL-OFFER",
                            "product-sub-type": "R",
                            "account-category": "C",
                            "account-sub-type": "FIN",
                            "product-name": "PROROAM2S",
                            "product-description": "Postpaid Roaming Limited Data Coverage",
                            "company-code": "RM",
                            "service-level": "",
                            "product-soc-code": "105645",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0870100002",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "offer-group": "",
                            "effective-date": "02/09/2015 00:00:00"
                        }, {
                            "ouId": "16058",
                            "ban": "10050233",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "account-category": "C",
                            "account-sub-type": "FIN",
                            "product-name": "NPSMAP08",
                            "product-description": "4G iSmart 499, Voice150m, Net1.5GB, WiFi UNLTD",
                            "company-code": "RM",
                            "service-level": "",
                            "product-soc-code": "10655411",
                            "product-properties": {
                                "OFFER-INSTANCE-ID": "349249"
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0870100002",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "offer-group": "",
                            "effective-date": "09/09/2015 00:00:00"
                        }, {
                            "ouId": "16058",
                            "ban": "10050233",
                            "product-type": "ADDITIONAL-OFFER",
                            "product-sub-type": "R",
                            "account-category": "C",
                            "account-sub-type": "FIN",
                            "product-name": "EB CREDITLIMIT",
                            "product-description": "Credit Limit offer",
                            "company-code": "RM",
                            "service-level": "",
                            "product-soc-code": "97076",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0870100002",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "offer-group": "",
                            "effective-date": "02/09/2015 00:00:00"
                        }, {
                            "ouId": "16058",
                            "ban": "10050233",
                            "product-type": "ADDITIONAL-OFFER",
                            "product-sub-type": "R",
                            "account-category": "C",
                            "account-sub-type": "FIN",
                            "product-name": "PROINTL1",
                            "product-description": "International Call Enabling",
                            "company-code": "RM",
                            "service-level": "",
                            "product-soc-code": "41581",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0870100002",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "offer-group": "",
                            "effective-date": "02/09/2015 00:00:00"
                        }]
                    }
                }
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "2",
                    "message-type": "ERROR",
                    "en-message": "ไม่สามารถเปืดบริการ IDD/IR สำหรับเบอร์เติมเงิน",
                    "th-message": "ไม่สามารถเปืดบริการ IDD/IR สำหรับเบอร์เติมเงิน",
                    "technical-message": ""
                }],
                "trx-id": "3TYFBVABEU7R",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };


            if (msisdn == "0916961011") {
                //กรณี error
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            } else {
                fnCallback({
                    status: true,
                    data: data2,
                    error: "",
                    msgErr: ""
                });
            }

        }
    };
    var generateOrderIdAPI = function(channel, dealer, fnCallback) {
        if (!demo) {
            var target = '/aftersales/order/generate-id?channel=' + channel + '&dealer=' + dealer;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "4EONTQNYU4VZ",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": "15070800XXX000000002"
            };
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };
    var getOfferGroupAPI = function(companyCode, custTypt, acntSubType, serviceLevel, offerGroup, productSubType, fnCallback) {
        if (!demo) {
            var target = '/sales/catalog/product/tmv/aftersales/offer/get-offer-group?company-code=' + companyCode + '&customer-type=' + custTypt + '&account-sub-type=' + acntSubType + '&service-level=' + serviceLevel + '&offer-group=' + offerGroup + '&product-subtype=' + productSubType;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "43OJX65YZZT4",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "response-data": {
                    "offer-details": [{
                        "description": "Provisioning Call Transfer",
                        "offer-group": "IR",
                        "excl-name": "",
                        "excl-val": "",
                        "service-level": "C",
                        "soc-code": "115726",
                        "soc-name": "PROECT1",
                        "soc-type": "U",
                        "sale-expiration-date": "31/08/2004",
                        "sale-effective-date": "05/08/2004"
                    }, {
                        "description": "Provisioning - Roaming # 2 (All Countries)",
                        "offer-group": "IR",
                        "excl-name": "",
                        "excl-val": "",
                        "service-level": "C",
                        "soc-code": "41601",
                        "soc-name": "PROROAM2",
                        "soc-type": "U",
                        "sale-expiration-date": "08/08/2250",
                        "sale-effective-date": "02/01/2001"
                    }, {
                        "description": "Postpaid Roaming Limited Data Coverage",
                        "offer-group": "IR",
                        "excl-name": "",
                        "excl-val": "",
                        "service-level": "C",
                        "soc-code": "105645",
                        "soc-name": "PROROAM2S",
                        "soc-type": "U",
                        "sale-expiration-date": "08/08/2250",
                        "sale-effective-date": "01/10/2013"
                    }, {
                        "description": "International Call Enabling",
                        "offer-group": "IDD",
                        "excl-name": "",
                        "excl-val": "",
                        "service-level": "C",
                        "soc-code": "41581",
                        "soc-name": "PROINTL1",
                        "soc-type": "U",
                        "sale-expiration-date": "08/08/2250",
                        "sale-effective-date": "13/12/2001"
                    }, {
                        "description": "Provision - Mix Pay Roaming + OPEN INT'l SMS-MO",
                        "offer-group": "IR",
                        "excl-name": "",
                        "excl-val": "",
                        "service-level": "C",
                        "soc-code": "844458",
                        "soc-name": "PROROAM6",
                        "soc-type": "U",
                        "sale-expiration-date": "08/08/2250",
                        "sale-effective-date": "13/01/2005"
                    }]
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
    var ValidateApproveCodeAPI = function(company_code, customer_type, id_number, customer_level, request_type, approve_code, fnCallback) {
        var target = '/aftersales/order/validateapprovecode?company-code=' + company_code + '&customer-type=' + customer_type + '&id-number=' + id_number + '&customer-level=' + customer_level + '&request-type=' + request_type + '&approve-code=' + approve_code;
        console.log(target);
        if (!demo) {

            SystemService.callServiceGetByPass(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3HOKU1Y5BYII",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "status-code": "0"
            };
            var data = {
                "status": "UNSUCCESSFUL",
                "display-messages": [{
                    "message": "-" + approve_code,
                    "message-code": "VCVAPA2010004",
                    "message-type": "WARNING",
                    "en-message": "[VCVAPA2010004] [NOT_FOUND_CODE] [Data approveCode = [RB0012], numberOfRequest = [1], idNumber = [1111111111] not found in CVSS-SERVICES-CCBS system.]",
                    "th-message": "[VCVAPA2010004] [NOT_FOUND_CODE] [Data approveCode = [RB0012], numberOfRequest = [1], idNumber = [1111111111] not found in CVSS-SERVICES-CCBS system.]",
                    "technical-message": "CVSS Method : getValidateApproveCode, URL : http://172.19.9.200:8280/CVSS-Services-CCBS/services/CreditValidation "
                }],
                "trx-id": "3HOKUAG1EVA3",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "status-code": "2"
            };
            if (approve_code == "RB0009") {
                fnCallback({
                    status: true,
                    data: data2,
                    error: "",
                    msgErr: ""
                });
            } else {
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            }

        }
    };

    return {
        validateIRIDDCallback: function(msisdn, fnCallback) {
            validateIRIDDAPI(msisdn, function(result) {
                console.log(result);
                //SystemService.hideLoading();
                if (result.status) {
                    var data = result.data["response-data"];

                    try {
                        var check = result.data["display-messages"][0]['message-type'];

                        if ($routeParams.subno) {
                            setTimeout(function() {
                                SystemService.showAlert({
                                    "message": result.data["display-messages"][0]["message"],
                                    "message-code": result.data["display-messages"][0]["message-code"],
                                    "message-type": result.data["display-messages"][0]["message-type"],
                                    "en-message": result.data["display-messages"][0]["en-message"],
                                    "th-message": result.data["display-messages"][0]["th-message"],
                                    "technical-message": result.data["display-messages"][0]["technical-message"]
                                });
                            }, 1200);
                        } else {
                            setTimeout(function() {
                                SystemService.showAlert({
                                    "message": result.data["display-messages"][0]["message"],
                                    "message-code": result.data["display-messages"][0]["message-code"],
                                    "message-type": "WARNING",
                                    "en-message": result.data["display-messages"][0]["en-message"],
                                    "th-message": result.data["display-messages"][0]["th-message"],
                                    "technical-message": result.data["display-messages"][0]["technical-message"]
                                });
                            }, 1200);
                        }
                        fnCallback({
                            data: {
                                status: false
                            }
                        });

                    } catch (e) {

                        var mobileServiceType = "ทรูมูฟเอช รายเดือน";
                        //var priceplan = data["customer"]["installed-products"][0];
                        var priceplan = $filter('filter')(data["customer"]["installed-products"], {
                            "product-type": "PRICEPLAN"
                        })[0];
                        var _header = {
                            "producttype": mobileServiceType,
                            "subscriberno": msisdn,
                            "currpriceplan": (priceplan["product-name"] ? priceplan["product-name"] + ": " : "") + (priceplan["product-description"] ? priceplan["product-description"] : ""),
                        };
                        var _customerProfile = {
                            "id-number": data["customer"]["id-number"],
                            "title": data["customer"]["title"],
                            "firstname": data["customer"]["firstname"],
                            "lastname": data["customer"]["lastname"],
                            "title-code": data["customer"]["title-code"],
                            "contact-number": data["customer"]["contact-number"],
                            "id-type": data["customer"]["id-type"]
                        };

                        //console.log(_header);
                        //console.log(_customerProfile);


                        var _orderRequest = {
                            "order": {
                                "order-id": "xxxxxxxxxxxxxxxxxxxxxOK",
                                "creator": "xxxxxxxxxxxxxxxxxxxxxOK",
                                //"create-date": null,
                                "customer": {
                                    "title-code": data["customer"]["title-code"] ? data["customer"]["title-code"] : "N/A",
                                    "title": data["customer"]["title"],
                                    "firstname": data["customer"]["firstname"],
                                    "lastname": data["customer"]["lastname"],
                                    //"gender": null,
                                    "id-type": data["customer"]["id-type"],
                                    "id-number": data["customer"]["id-number"],
                                    //"birthdate": null,
                                    //"id-expire-date": null,
                                    //"contact-number": null,
                                    //"contact-mobile-number": null,
                                    //"contact-email": null,
                                    "customer-level": data["customer"]["customer-level"],
                                    //"customer-agents": {
                                    //    //"AUTH_1": {
                                    //    //    //"contact": null,
                                    //    //    //"id-number": $('#CitizenID2').val(),
                                    //    //    //"id-type": null,
                                    //    //    //"firstname": $('#authorizeFullName').val()
                                    //    //    //,"lastname": null,
                                    //    //    //"birthdate": null
                                    //    //}
                                    //    //,"POA": {
                                    //    //    "contact": null,
                                    //    //    "id-number": null,
                                    //    //    "id-type": null,
                                    //    //    "firstname": null,
                                    //    //    "lastname": null,
                                    //    //    "birthdate": null
                                    //    //},
                                    //    //"AUTH_2": {
                                    //    //    "contact": null,
                                    //    //    "id-number": null,
                                    //    //    "id-type": null,
                                    //    //    "firstname": null,
                                    //    //    "lastname": null,
                                    //    //    "birthdate": "2015-07-20T00:00:00+0700"
                                    //    //}
                                    //}
                                },
                                "sale-agent": {
                                    "name": "xxxxxxxxxxxxxxxxxxxxxOK",
                                    "channel": "xxxxxxxxxxxxxxxxxxxxxOK",
                                    "partner-code": "xxxxxxxxxxxxxxxxxxxxxOK",
                                    "partner-name": "xxxxxxxxxxxxxxxxxxxxxOK",
                                    "sale-code": "xxxxxxxxxxxxxxxxxxxxxOK",
                                    "sale-assist-code": "xxxxxxxxxxxxxxxxxxxxxOK",
                                    "partner-type": "xxxxxxxxxxxxxxxxxxxxxOK"
                                },
                                "order-items": [{
                                        "name": "xxxxxxxxxxxxxxxxxxxxxOK",
                                        "product-name": priceplan["product-name"],
                                        "product-id-number": priceplan["product-id-number"],
                                        "product-id-name": priceplan["product-id-name"],
                                        "reason-code": "xxxxxxxxxxxxxxxxxxxxxOK",
                                        "user-memo": "",
                                        "order-data": {
                                            "CUSTOMER-ID": data["customer"]["id-number"],
                                            "MOBILE-SERVICETYPE": priceplan["mobile-servicetype"],
                                            "SERVICE-LEVEL": priceplan["service-level"],
                                            //"IR-APPROVE-CODE": "",
                                            "CVSS-PROCESS-REQUEST": data["customer"]["cvss-process-request"]
                                        },
                                        "primary-order-data": {
                                            "OU-ID": priceplan["ouId"],
                                            "BAN": priceplan["ban"],
                                            "ACCOUNT-CATEGORY": priceplan["account-category"],
                                            "ACCOUNT-SUB-TYPE": priceplan["account-sub-type"],
                                            "COMPANY-CODE": priceplan["company-code"],
                                            //"OFFER-GROUP-IDD": "xxxxxxxxxxxxxxxxxxxxxOK",
                                            //"OFFER-GROUP-IR": "xxxxxxxxxxxxxxxxxxxxxOK",
                                            "EFFECTIVE-OPTION": "IMMEDIATE",
                                            "EFFECTIVE-DATE": SystemService.getDateDDMMYYYY("ENG")
                                                //,"EXPIRE-DATE": null
                                        },
                                        "product-category": priceplan["product-category"] ? priceplan["product-category"] : "TMV",
                                        "product-type": priceplan["product-type"] ? priceplan["product-type"] : "ADDITIONAL-OFFER",
                                        "order-type": "CHANGE"
                                    }]
                                    //,"last-modify-date": null
                            },
                            "ref-id": "xxxxxxxxxxxxxxxxxxxxxOK",
                            "user-id": "xxxxxxxxxxxxxxxxxxxxxOK",
                            "approver": ""
                        };
                        //console.log(_orderRequest);

                        //// Generate OrderID
                        //var _genOrderId = {};
                        //generateOrderIdAPI(null, null, function (orderid) {
                        //    if (orderid.data['response-data']) {
                        //        _orderRequest['order']['order-id'] = orderid.data['response-data'];
                        //        _orderRequest['ref-id'] = orderid.data['response-data'];
                        //    }
                        //    else {
                        //       //console.log("GenerateOrderId is fail !!");
                        //    }
                        //    _genOrderId = orderid;
                        //});
                        //console.log(_genOrderId);
                        /////

                        //Get Offer Group
                        var _offerGroupList = [];
                        getOfferGroupAPI(priceplan["company-code"], priceplan["account-category"], priceplan["account-sub-type"], "C", "IDD|IR", priceplan["product-sub-type"], function(offer) {
                            if (offer.data["response-data"]) {
                                if (offer.data["response-data"]["offer-details"]) {
                                    _offerGroupList = offer.data["response-data"]["offer-details"];
                                    fnCallback({
                                        header: _header,
                                        customerProfile: _customerProfile,
                                        orderRequest: _orderRequest,
                                        offerGroupList: _offerGroupList,
                                        status: true,
                                        responseData: data,
                                        installedProduct: priceplan,
                                        priceplan: priceplan,
                                        installedProductList: data["customer"]["installed-products"]
                                    });
                                }
                            } else {
                                //console.log("getOfferGroupAPI data not found");
                            }
                            SystemService.hideLoading();
                            //console.log(_offerGroupList);
                        });

                        ///



                    }

                }
            });

        },
        ValidateApproveCodeCallback: function(company_code, customer_type, id_number, customer_level, request_type, approve_code, fnCallback) {
            ValidateApproveCodeAPI(company_code, customer_type, id_number, customer_level, request_type, approve_code, function(resultData) {
                fnCallback(resultData);
            });
        }
    }
});
