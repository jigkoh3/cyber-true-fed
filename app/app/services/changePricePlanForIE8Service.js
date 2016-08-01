smartApp.service('ChangePricePlanForIE8Service', function($filter, SystemService, $routeParams) {
    var demo = SystemService.demo;
    var that = this;
    this.validateChangePricePlan = function(msisdn, ouID, fnCallback) {
        if (!demo) {
            var target = 'aftersales/tmv/changepriceplan/validatechangepriceplan?';
            if (msisdn == "null") {
                msisdn = "";
            }
            if (ouID == "null") {
                ouID = "";
            }
            if ($routeParams.oulevel) {
                if ($routeParams.oulevel == 'Sub') {
                    //
                    target = target + 'msisdn=' + msisdn;
                } else {
                    //
                    target = target + 'ou-id=' + ouID;
                }
            } else {
                target = target + 'msisdn=' + msisdn;
            }

            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "customer": {
                    "title": "",
                    "firstname": "RS Trainer",
                    "lastname": "",
                    "contact-number": "",
                    "contact-mobile-number": "",
                    "id-type": "",
                    "id-number": "3400400489300",
                    "customer-id": "33896",
                    "installed-products": [{
                        "ouId": "16058",
                        "ban": "10050233",
                        "product-category": "TMV",
                        "product-type": "PRICEPLAN",
                        "product-sub-type": "R",
                        "product-status": "",
                        "number-status": "A",
                        "account-category": "C",
                        "account-sub-type": "POSTPAID",
                        "product-id": "NPSMAP08",
                        "product-name": "NPSMAP08",
                        "product-description": "4G iSmart 499, Voice150m, Net1.5GB, WiFi UNLTD",
                        "bill-cycle": "2",
                        "bill-cycle-next-date": "02/10/2015",
                        "company-code": "RM",
                        "service-level": "C",
                        "product-id-name": "MSISDN",
                        "product-id-number": "0870100002",
                        "mobile-servicetype": "POSTPAID",
                        "has-splitcharge": false,
                        "is-childsim": false,
                        "is-softsuspend": false,
                        "sim-type": "",
                        "product-properties": {
                            "IS-LARGE-CUSTOMER-SIZE": "true"
                        },
                        "next-priceplan-code": "",
                        "next-priceplan-desc": "",
                        "ou-hierarchytype": "CHILD"
                    }]
                },
                "display-messages": [],
                "trx-id": "8D14IN26571RG",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "status-code": "0"
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "Data not found.",
                    "message-code": "ACAHblG10001",
                    "message-type": "ERROR",
                    "en-message": "Data not found.",
                    "th-message": "Data not found.",
                    "technical-message": "CCB_INT Method : searchCustomerInfoTM, URL : http://172.19.216.115:8180/SearchCustomerInfoWS/SearchCustomerInfoSI"
                }],
                "trx-id": "46CT191OOBJJ",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "status-code": "2"
            };
            var data4 = {
                "status": "SUCCESSFUL",
                "customer": {
                    "title": "",
                    "firstname": "CHK003",
                    "lastname": "",
                    "contact-number": "",
                    "contact-mobile-number": "",
                    "id-type": "",
                    "id-number": "CHK003",
                    "customer-id": "54817",
                    "installed-products": [{
                        "ouId": "29442",
                        "ban": "10057247",
                        "product-category": "TMV",
                        "product-type": "PRICEPLAN",
                        "product-sub-type": "H",
                        "product-status": "Active",
                        "account-category": "C",
                        "account-sub-type": "HxYE",
                        "product-id": "R13ESMP20",
                        "product-name": "R13ESMP20",
                        "product-description": "Biz & Ent HYB 699 V450S50UnWEG2G384_F&F Unlimited",
                        "bill-cycle": "2",
                        "bill-cycle-next-date": "02/12/2015",
                        "company-code": "RF",
                        "service-level": "G",
                        "subscriber-id": "82589",
                        "product-id-name": "MSISDN",
                        "product-id-number": "0880100078",
                        "mobile-servicetype": "HYBRID",
                        "has-splitcharge": false,
                        "is-childsim": false,
                        "is-softsuspend": false,
                        "ou-hierarchytype": ""
                    }]
                },
                "display-messages": [{
                    "message-code": "TMV-CHANGE-PP-00008",
                    "message-type": "WARNING",
                    "th-message": "เป็น Large Customer Size จะมีผล end of day."
                }, {
                    "message": "Hybrid number, New Price Plan bill effective on next bill cycle",
                    "message-code": "TMV-CHANGE-PP-00007",
                    "message-type": "WARNING",
                    "en-message": "Hybrid number, New Price Plan bill effective on next bill cycle",
                    "th-message": "สำหรับหมายเลขประเภทไฮบริด การเปลี่ยนแปลงโปรโมชั่นใหม่จะมีผลรอบบิลถัดไปเท่านั้น"
                }],
                "trx-id": "40OFDU619WFW",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "status-code": "1"
            };

            var data3 = {
                "status": "SUCCESSFUL",
                "customer": {
                    "title": "",
                    "firstname": "CustomerB",
                    "lastname": "",
                    "contact-number": "",
                    "contact-mobile-number": "",
                    "id-type": "",
                    "id-number": "1189900130607",
                    "customer-id": "45313",
                    "installed-products": [{
                        "ouId": "23122",
                        "ban": "10050443",
                        "product-category": "TMV",
                        "product-type": "PRICEPLAN",
                        "product-sub-type": "R",
                        "product-status": "",
                        "number-status": "A",
                        "account-category": "B",
                        "account-sub-type": "SRE",
                        "bill-cycle": "13",
                        "bill-cycle-next-date": "13/09/2015",
                        "company-code": "RM",
                        "service-level": "C",
                        "product-id-name": "MSISDN",
                        "product-id-number": "0870100139",
                        "mobile-servicetype": "POSTPAID",
                        "has-splitcharge": false,
                        "is-childsim": false,
                        "is-softsuspend": false,
                        "sim-type": "",
                        "next-priceplan-code": "",
                        "next-priceplan-desc": ""
                    }, {
                        "product-category": "TMV",
                        "product-type": "PROPOSITION",
                        "product-status": "",
                        "product-id": "PC0000000000008",
                        "product-name": "PC0000000000008",
                        "product-description": "SIM + BB Service",
                        "product-soc-code": "T3",
                        "product-id-name": "MSISDN",
                        "product-id-number": "0870100139",
                        "has-splitcharge": false,
                        "is-childsim": false,
                        "is-softsuspend": false,
                        "product-properties": {
                            "IS-CONTRACT": "N"
                        },
                        "contract-fee": "599",
                        "contract-term": "8",
                        "contract-start-date": "01/09/2015",
                        "contract-expire-date": "01/09/2017",
                        "contract-termination-date": ""
                    }, {
                        "product-category": "TMV",
                        "product-type": "PROPOSITION",
                        "product-status": "",
                        "product-id": "PC0000000000010",
                        "product-name": "PC0000000000010",
                        "product-description": "SIM + iPhone",
                        "product-soc-code": "T04",
                        "product-id-name": "MSISDN",
                        "product-id-number": "0870100139",
                        "has-splitcharge": false,
                        "is-childsim": false,
                        "is-softsuspend": false,
                        "product-properties": {
                            "IS-CONTRACT": "Y"
                        },
                        "contract-fee": "799",
                        "contract-term": "8",
                        "contract-start-date": "01/09/2015",
                        "contract-expire-date": "01/09/2017",
                        "contract-termination-date": ""
                    }, {
                        "product-category": "TMV",
                        "product-type": "PROPOSITION",
                        "product-status": "",
                        "product-id": "PC0000000000011",
                        "product-name": "PC0000000000011",
                        "product-description": "SIM + iPhone",
                        "product-soc-code": "T04",
                        "product-id-name": "MSISDN",
                        "product-id-number": "0870100139",
                        "has-splitcharge": false,
                        "is-childsim": false,
                        "is-softsuspend": false,
                        "product-properties": {
                            "IS-CONTRACT": "Y"
                        },
                        "contract-fee": "799",
                        "contract-term": "8",
                        "contract-start-date": "01/09/2015",
                        "contract-expire-date": "01/09/2017",
                        "contract-termination-date": ""
                    }]
                },
                "display-messages": [],
                "trx-id": "5BZE83WVZ34B",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "status-code": "0"
            };

            if (msisdn == "0870100002") {
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            } else if (msisdn == "0870100139") {
                fnCallback({
                    status: true,
                    data: data3,
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
    this.getChangePricePlan = function(msisdn, ouID, fnCallback) {
        that.validateChangePricePlan(msisdn, ouID, function(result) {
            //console.log("ChangePricePlanForIE8Service.getChangePricePlan : ");
            //console.log(data);
            var checkNullText = function(txt) {
                if (txt) {
                    return txt;
                } else {
                    return "";
                }

            };
            setTimeout(function() {
                $.fancybox.close();
                var errorText = {
                    "message": "",
                    "en-message": "",
                    "th-message": "",
                    "technical-message": ""
                };
                var errorList = data["display-messages"];
                for (var i = 0; i < errorList.length; i++) {
                    errorText["message"] += errorList[i]["message"] + "<br /> ";
                    errorText["en-message"] += checkNullText(errorList[i]["en-message"]) + "<br /> ";
                    errorText["th-message"] += checkNullText(errorList[i]["th-message"]) + "<br /> ";
                    errorText["technical-message"] += checkNullText(errorList[i]["technical-message"]) + "<br /> ";
                }
                if (errorList.length > 0) {
                    SystemService.showAlert({
                        "message": errorText["message"],
                        "message-code": "",
                        "message-type": "WARNING",
                        "en-message": errorText["en-message"],
                        "th-message": errorText["th-message"],
                        "technical-message": errorText["technical-message"]
                    });
                    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ยังไม่ได้ทำให้ multi alert
                    setTimeout(function() {
                        $('.ngdMessage').html(errorText["message"]);
                        $('.ngdEnMessage').html(errorText["en-message"]);
                        $('.ngdThMessage').html(errorText["th-message"]);
                        $('.ngdTechnicalMessage').html(errorText["technical-message"]);
                    }, 200);
                }

            }, 1000);
            if (result.status) {
                var data = result.data;
                if (data["status-code"] != "2") {
                    var priceplan = $filter('filter')(data.customer["installed-products"], {
                        "product-type": "PRICEPLAN"
                    })[0];
                    var offer = $filter('filter')(data.customer["installed-products"], {
                        "product-type": "PROPOSITION"
                    });
                    var discount = $filter('filter')(data.customer["installed-products"], {
                        "product-type": "DISCOUNT"
                    });

                    var mobileServiceType = "ทรูมูฟเอช รายเดือน";
                    if (priceplan["mobile-servicetype"] == "PREPAID")
                        mobileServiceType = "ทรูมูฟเอช เติมเงิน";

                    var rusult = {
                        header: {
                            "producttype": mobileServiceType,
                            "subscriberno": msisdn,
                            "currpriceplan": (priceplan["product-name"] ? priceplan["product-name"] + ": " : "") + (priceplan["product-description"] ? priceplan["product-description"] : ""),
                        },
                        customerProfile: data["customer"],
                        priceplan: priceplan,
                        offer: offer,
                        discount: discount,
                        "display-messages": data["display-messages"],
                        "status-code": data["status-code"],
                        "status": data["status"]
                    };
                    delete rusult.customerProfile['installed-products'];
                    if (data["display-messages"].length != 0) {
                        // SystemService.showAlert({
                        //     "message": data["display-messages"][0]["message"],
                        //     "message-code": data["display-messages"][0]["message-code"],
                        //     "message-type": "WARNING",
                        //     "en-message": data["display-messages"][0]["en-message"],
                        //     "th-message": data["display-messages"][0]["th-message"],
                        //     "technical-message": data["display-messages"][0]["technical-message"]
                        // });
                    } else {
                        //alert('validateChangePricePlan');
                        SystemService.hideLoading();
                    }
                    fnCallback({
                        status: true,
                        data: rusult,
                        error: "",
                        msgErr: ""
                    });
                } else {
                    fnCallback({
                        status: false,
                        data: data,
                        error: "",
                        msgErr: ""
                    });
                }
            } else {

            }
        });
    };
    this.aftersalePriceplan = function(target, fnCallback) {
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data2 = {
                "trx-id": "8SIJX3WDLPNX",
                "status": "SUCCESSFUL",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "fault": {
                    "name": "th.co.truecorp.ads.api.persistent.jdbc.DataNotFoundException",
                    "code": "CAT-404",
                    "message": "Not found priceplan for changing.",
                    "detailed-message": "DataNotFoundException Not found priceplan for changing.. "
                },
                "display-messages": [{
                    "message": "Not found priceplan for changing.",
                    "message-type": "WARNING",
                    "en-message": "Not found priceplan for changing.",
                    "th-message": "Not found priceplan for changing.",
                    "technical-message": "tmsapnpr1 (instance: SFF_node1) DataNotFoundException Not found priceplan for changing.. "
                }]
            };
            var data4 = {
                "trx-id": "8SIJX3WDLPNX",
                "status": "SUCCESSFUL",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "response-data": {}
            };
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "02S96GZYK5TY",
                "process-instance": "tpx61.true.th (instance: sale)",
                "response-data": {
                    "priceplans": [{
                        "name": "NPSMAP12",
                        "description": "4G iSmart 1299,VoiceAllNet850m, Net10GB, WiFiUNLTD",
                        "soc": "10656611",
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-07-03"
                        },
                        "rc": 1299.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP02",
                        "description": "3G iSmart 399,VoiceAllNet150m,Net750MB, WiFiUNLTD",
                        "soc": "10633911",
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-07-03"
                        },
                        "rc": 399.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }],
                    "mapped-propo-priceplans": [{
                        "proposition": {
                            "name": "RMV000000000001",
                            "description": "New Sim Only",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019123"
                        },
                        "priceplans": [{
                            "name": "NPNTAP04",
                            "description": "3G iNet 799, Net UNLTD 5 GB, WiFi UNLTD",
                            "soc": "10633511",
                            "sale-period": {
                                "start": "2015-01-16",
                                "end": "2015-07-03"
                            },
                            "rc": 799.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }, {
                            "name": "NPSMAP02",
                            "description": "3G iSmart 399,VoiceAllNet150m,Net750MB, WiFiUNLTD",
                            "soc": "10633911",
                            "sale-period": {
                                "start": "2015-01-16",
                                "end": "2015-07-03"
                            },
                            "rc": 399.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }]
                    }]
                }
            };
            var data3 = {
                "status": "SUCCESSFUL",
                "trx-id": "665Y3TF1FC9J7",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "priceplans": [{
                        "name": "SMRTBP34",
                        "description": "4G Plus1100 Dis50% 12mths,V200m,Net3GB, WiFi",
                        "soc": "1075459",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-26",
                            "end": "2017-03-06"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP34",
                        "description": "RET 4G/3G iSmart 799 Voice 450min. Net 2.5GB UNLTD",
                        "soc": "11199212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-06-30"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP93",
                        "description": "Buffet1100-24hr,voice100min,Net 5GB Untld",
                        "soc": "12341917",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-03-31"
                        },
                        "rc": 1100.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP28",
                        "description": "4G/3G iNet 799 Net 12GB UNLTD",
                        "soc": "11171512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP09",
                        "description": "Business Team Talk 290_V400Min,30SMS",
                        "soc": "119816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 290.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP12",
                        "description": "Business Team Talk 990_V2000Min,150SMS",
                        "soc": "119886",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 990.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP14",
                        "description": "B&E 419.63_V200,UnWEG3GB/384,0.99bt",
                        "soc": "1086919",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-21",
                            "end": "2016-12-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP18",
                        "description": "Biz& Ent_Smart_476.29_V600S100_HS_Allnet0.99bt/min",
                        "soc": "10042810",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-27",
                            "end": "2017-01-01"
                        },
                        "rc": 476.29,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP56",
                        "description": "Biz & Ent Data 999_Data FUP 7/384,WiFi@TMVH UNLTD",
                        "soc": "997698",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-10",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP08",
                        "description": "Biz & EntBuffO_299_24hrs.S100M5Data50MB_1.25bt",
                        "soc": "118326",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-22",
                            "end": "2017-01-01"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP35",
                        "description": "B&E 934.58_V450S30UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11088312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 934.58,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P01",
                        "description": "TMH-iPad Monthly Fee349 Data 750MB/ wifi unlimited",
                        "soc": "24281",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-08-26",
                            "end": "2055-01-30"
                        },
                        "rc": 349.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP75",
                        "description": "4G/3G iSmart 199 Voice 100 min Net 500MB WiFi 10hr",
                        "soc": "11255612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-01",
                            "end": "2018-01-31"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP45",
                        "description": "3G iSmart 600+,Disc 50%, AllNet100m,Net750MB Unltd",
                        "soc": "1078529",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-10",
                            "end": "2017-03-06"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP15",
                        "description": "Ent_Smart_899_UnWEG(FUP5GB,384kb)",
                        "soc": "104146",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP15",
                        "description": "Biz& Ent_Smart_1499_V800S30M10_HS_Allnet1.25bt/min",
                        "soc": "570868",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-08",
                            "end": "2017-01-01"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP22",
                        "description": "Biz&Ent_ipad_1074.77_UnWEG5g128_HS_1.25bt/min",
                        "soc": "997408",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 1074.77,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP30",
                        "description": "4G/3G iNet 1099 Net 20GB UNLTD",
                        "soc": "11171912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP47",
                        "description": "Biz&Ent 0 Baht _Rate Voice1,SMS1,MMMS3,Data1,WiFi1",
                        "soc": "10421710",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-03",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP38",
                        "description": "Biz&Ent_iphone_1355.14V550S50UnWEG2g128_HS_1.25bt",
                        "soc": "570858",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 1355.14,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP09",
                        "description": "B&E 372.90_V200,UnWEG3GB/384,0.99bt",
                        "soc": "1076319",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-27",
                            "end": "2016-12-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "TVSIMP01",
                        "description": "TrueVisions SIM 145 get 300 Bt 2/1 all net 24 hrs",
                        "soc": "97195",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2009-07-21",
                            "end": "2016-06-30"
                        },
                        "rc": 145.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP27",
                        "description": "4G/3G iNet 599 Net 4GB UNLTD",
                        "soc": "11171412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP75",
                        "description": "B&E RC 300_FUP 500MB & WiFi UNLTD",
                        "soc": "11412912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "BBSMEP38",
                        "description": "Biz BB-BIS 899, get buffet On-net, 3GEW_UNLTD",
                        "soc": "263728",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-23",
                            "end": "2017-01-01"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP62",
                        "description": "B&E 419.63 Disc50% 24mths_V200,UnWEG6GB/384,0.99bt",
                        "soc": "12247713",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 209.81,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP51",
                        "description": "TLFV Lease to own 199 baht/mth all network",
                        "soc": "63792",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-03",
                            "end": "2099-06-30"
                        },
                        "rc": 100.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP82",
                        "description": "4G iSmart 333 Voice 180 min Net 3 GB UNLD",
                        "soc": "12238213",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2017-03-06"
                        },
                        "rc": 333.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP29",
                        "description": "4G/3G iNet 350 Net 2GB UNLTD",
                        "soc": "11261812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-19",
                            "end": "2025-07-02"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP51",
                        "description": "Biz&Ent smart 840.18_V500UnWEG_CUG Unlimited",
                        "soc": "571718",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 840.18,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP17",
                        "description": "4G iNet499,Net3GB UNLT,Social Unlt,WiFiUNLT",
                        "soc": "1073199",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-24",
                            "end": "2017-03-06"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP27",
                        "description": "Biz&Ent_ipad1822.43UnWEG5g128_HS_1.25bt/min",
                        "soc": "126256",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-29",
                            "end": "2017-01-01"
                        },
                        "rc": 1822.43,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP78",
                        "description": "Biz&Ent_Data_372.90UnWEG2g384_0.99bt",
                        "soc": "10056510",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP29",
                        "description": "B&E Data 1401.87_UnWEG15.0GB384Kbps_0.99bt/min",
                        "soc": "11215212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1401.87,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP74",
                        "description": "Biz&Ent_242.06V400UnWEG500MB64_0.99bt",
                        "soc": "10055310",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP13",
                        "description": "GSE_0_UnWEG(FUP12GB,384kb)",
                        "soc": "1070019",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "P2P75P03",
                        "description": "Postpay 300 Bt_75 satang",
                        "soc": "113916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-03-06"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P03",
                        "description": "TMH-iPad Monthly Fee 759 Data and wifi unlimited",
                        "soc": "24301",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-08-26",
                            "end": "2055-01-30"
                        },
                        "rc": 759.0,
                        "service-level": "C"
                    }, {
                        "name": "P2P75P04",
                        "description": "Postpay 400 Bt_75 satang",
                        "soc": "113926",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-03-06"
                        },
                        "rc": 400.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP47",
                        "description": "B&E 2056.07_V850S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11095312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 2056.07,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP27",
                        "description": "Biz&Ent1800_CUG,V750min,50SMS,Data UNL2GB/128,WiFi",
                        "soc": "109897",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1800.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP74",
                        "description": "True Smart Choice 450Mins Unlimited data(4GB)&WiFi",
                        "soc": "11254912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-12",
                            "end": "2099-09-30"
                        },
                        "rc": 849.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP48",
                        "description": "True IOT Package 99 Net 1GB UNLTD",
                        "soc": "12256817",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP44",
                        "description": "Biz&Ent_1000bt_v1500 Onnet 0 bt Offnet 1.10bt.",
                        "soc": "108507",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-11",
                            "end": "2017-01-01"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP48",
                        "description": "RET iNet599 Dis50% Net 8GB UNLTD",
                        "soc": "11423012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP40",
                        "description": "Super Save 459_Biz & Ent Get V600Min,50SMS,100MB",
                        "soc": "119786",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 459.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP27",
                        "description": "Biz & Ent_AL Sub MNP RC 0 Baht_Voice 1 Baht/min",
                        "soc": "265558",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-31",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "P2P75P05",
                        "description": "Postpay 500 Bt_75 satang",
                        "soc": "113936",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-03-06"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP12",
                        "description": "Biz & Ent 1599 Smart Buffet All net 8am-10pm",
                        "soc": "105536",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-19",
                            "end": "2017-01-01"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP06",
                        "description": "TrueMove H 250 on-net ultd 24 hrs",
                        "soc": "89803",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP28",
                        "description": "4G/3G iNet 799 Net 6GB UNLTD",
                        "soc": "11171612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP64",
                        "description": "B&E 466.36_V250,UnWEG10GB/384,0.99bt",
                        "soc": "12247913",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 466.36,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP17",
                        "description": "B&E Data 841.12_UnWEG10.0GB384Kbps_0.99bt/min",
                        "soc": "11095912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 841.12,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP15",
                        "description": "GSE_0_UnWEG(FUP20GB,384kb)",
                        "soc": "1070039",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP12",
                        "description": "GSE_0_UnWEG(FUP10GB,384kb)",
                        "soc": "1070009",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP14",
                        "description": "GSE_0_UnWEG(FUP15GB,384kb)",
                        "soc": "1070029",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP20",
                        "description": "4G+ SharePlan 1499, NetUNLTD25GB, WiFiUNLTD",
                        "soc": "12321916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP54",
                        "description": "Biz & Ent Data 799_Data FUP 3/384,WiFi@TMVH UNLTD",
                        "soc": "996918",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-10",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP38",
                        "description": "Biz&Ent 1500_V2500min,30SMS,10MMS,CUG,F&F,2GB,WiFi",
                        "soc": "265518",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP62",
                        "description": "Biz&Ent Data 653.27_UnWEG3g128k",
                        "soc": "996958",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 653.27,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP08",
                        "description": "Business Team Talk 190_V200Min,20SMS",
                        "soc": "119796",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 190.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP59",
                        "description": "Biz&Ent_Smart_849V1100UnWEG2g384_0.99bt",
                        "soc": "118666",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 849.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDPAP26",
                        "description": "B&E_Data Unlmited FUP40GB, Wi-Fi UNLTD",
                        "soc": "12340916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-17",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP40",
                        "description": "4G/3G iNet Plus 199 Net 4GB UNLTD (Lock Device)",
                        "soc": "12357916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP44",
                        "description": "U-Talk 199, voice 150 mins, 50SMS, FreeCUG24hrs.",
                        "soc": "10602011",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-15",
                            "end": "2018-12-05"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP58",
                        "description": "Biz&Ent_Smart_449V550UnWEG500MB384_0.99bt",
                        "soc": "118656",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 449.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP30",
                        "description": "B&E Data 1588.78_UnWEG15.0GB384Kbps_0.99bt/min",
                        "soc": "11215312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1588.78,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP12",
                        "description": "Ent_ipad_1500_UnWEG5g128,Bvoice_HS_1.25bt/min",
                        "soc": "265318",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-29",
                            "end": "2017-01-01"
                        },
                        "rc": 1401.86,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP51",
                        "description": "RET iSmart199 Dis50% Voice80min Net750MB UNLTD",
                        "soc": "11423312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 100.0,
                        "service-level": "C"
                    }, {
                        "name": "SMBUFP08",
                        "description": "SME True Move 999 Buffet 6am- 9pm",
                        "soc": "262138",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2007-09-24",
                            "end": "2016-12-31"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP80",
                        "description": "Biz&Ent_Data_746.73UnWEG5g384_0.99bt",
                        "soc": "10056710",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 746.73,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP20",
                        "description": "Ent_iphone_1500V700S50UnWEG2g128_HS_1.25bt/min",
                        "soc": "262628",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-29",
                            "end": "2017-01-01"
                        },
                        "rc": 1401.86,
                        "service-level": "C"
                    }, {
                        "name": "EVOCBP01",
                        "description": "P_Ent_150_80mins 40SMS Onnet free/Off 1.20bt",
                        "soc": "265568",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-04-24",
                            "end": "2017-01-01"
                        },
                        "rc": 150.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP08",
                        "description": "Ent Talk 1399 Buffet All net 8am-10pm",
                        "soc": "570798",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-08",
                            "end": "2017-01-01"
                        },
                        "rc": 1399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP35",
                        "description": "Biz&Ent 300_SplitBill_CUGF&F,300MinSMS75Data100MB",
                        "soc": "265508",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-12",
                            "end": "2017-01-01"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP19",
                        "description": "Ent_iphone_1300V650S50UnWEG2g128_HS_1.25bt/min",
                        "soc": "262618",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-29",
                            "end": "2017-01-01"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP64",
                        "description": "Biz 4G Net 1599_DataFUP10GB,WiFi UNLTD",
                        "soc": "11242112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP49",
                        "description": "RET iNet899 Dis50% Net 14GB UNLTD",
                        "soc": "11423112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP75",
                        "description": "Biz&Ent_372.90V600UnWEG500MB64_0.99bt",
                        "soc": "10055410",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP16",
                        "description": "Biz&Ent ipad 841.12 Bt_Unlimited data",
                        "soc": "265328",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-05",
                            "end": "2017-01-01"
                        },
                        "rc": 841.12,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP60",
                        "description": "Biz&Ent_Smart_899V990UnWEG3g384_0.99bt",
                        "soc": "118676",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP16",
                        "description": "P_Ent_Enterprise Package 399",
                        "soc": "265548",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-19",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP10",
                        "description": "Ent_ipad_1100_UnWEG5g128,Bvoice_HS_1.25bt/min",
                        "soc": "262588",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-29",
                            "end": "2017-01-01"
                        },
                        "rc": 1028.03,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP11",
                        "description": "Ent_ipad_1300_UnWEG5g128,Bvoice_HS_1.25bt/min",
                        "soc": "262598",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-29",
                            "end": "2017-01-01"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP28",
                        "description": "B&E Data 1214.95_UnWEG15.0GB384Kbps_0.99bt/min",
                        "soc": "11215112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP19",
                        "description": "P_Ent_Enterprise Package 999",
                        "soc": "570048",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-19",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP77",
                        "description": "GOV 1569.16_V500S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12390016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1569.16,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP62",
                        "description": "B&E500_Allnet 24:00-19:00,V200S70M10UnWifi",
                        "soc": "12422116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP20",
                        "description": "P_Ent_Enterprise Package 1,299",
                        "soc": "570058",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-19",
                            "end": "2017-01-01"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP07",
                        "description": "Ent Talk 799 Buffet All net 8am-10pm",
                        "soc": "571548",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-08",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP86",
                        "description": "GOV 728.04_V500UnWEG20GB384_0.99bt",
                        "soc": "12391116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 728.04,
                        "service-level": "C"
                    }, {
                        "name": "SMBUFP10",
                        "description": "SME True Move 599 Buffet 6am- 6pm",
                        "soc": "262148",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2007-11-22",
                            "end": "2016-12-31"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP23",
                        "description": "P_Ent_Enterprise Package 3000",
                        "soc": "570068",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-09",
                            "end": "2017-01-01"
                        },
                        "rc": 3000.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP30",
                        "description": "True Life Free View 500 get 800 Bt.",
                        "soc": "76992",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 345.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP21",
                        "description": "Biz & Ent 999 Buffet All Net 8am-8pm",
                        "soc": "571558",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP84",
                        "description": "True Smart Choice 300Mins Unlimited data(4GB)&WiFi",
                        "soc": "12505316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-28",
                            "end": "2099-10-30"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP17",
                        "description": "Biz& Ent_Smart_399_V300S50_HS_On1bt Off1.25bt/min",
                        "soc": "264398",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-26",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP17",
                        "description": "Reten_iSmart299 Voice100min,Net500MB ULTD(128kbps)",
                        "soc": "120196",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-16",
                            "end": "2250-08-08"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP11",
                        "description": "Biz&Ent_Smart_1214.95V500S50UnWEG2g128_HS_1.25bt",
                        "soc": "264388",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-14",
                            "end": "2017-01-01"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP08",
                        "description": "iTalk+ 299, Voice All Net 400 min, FB12 m.",
                        "soc": "11204812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP22",
                        "description": "Biz & Ent 999  Buffet All Net 8am-8pm Data 2GB",
                        "soc": "571568",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP90",
                        "description": "4G+ Super Smart 700, Voice 150 min, Net 8 GB Unltd",
                        "soc": "12249617",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "UBCCNP07",
                        "description": "Monthly fee 179 bt/mt Call 120 min  All Network",
                        "soc": "34161",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2010-09-30",
                            "end": "2099-06-30"
                        },
                        "rc": 179.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP37",
                        "description": "Ent_iphone_1300V1100S100UnWEG3g128_HS_1.25bt/min",
                        "soc": "264348",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-26",
                            "end": "2017-01-01"
                        },
                        "rc": 1300.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP06",
                        "description": "Biz & Ent Smart 799_V900S300M50,3WEG",
                        "soc": "264378",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-08",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP60",
                        "description": "4G+ Super Max 699,300min,4G|3G 16GB,4G 6GB",
                        "soc": "12333916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP27",
                        "description": "Biz & Ent Buffet 699_ Mon-Fri 6AM-8PM,SAT&SUN",
                        "soc": "110617",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-28",
                            "end": "2016-12-31"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RIAP01",
                        "description": "Device Package for iPad, 759 Bt/mth",
                        "soc": "76962",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 759.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RSMP01",
                        "description": "Monthly fee Android Package 549bt",
                        "soc": "76972",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 549.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP11",
                        "description": "Biz&Ent Smart599_300min,2GB,Wi-Fi UNLTD_(Disc.10%)",
                        "soc": "570008",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-27",
                            "end": "2017-01-01"
                        },
                        "rc": 539.1,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP28",
                        "description": "Ent_iphone_1599V650S50UnWEG1g128_HS_1.25bt/min",
                        "soc": "264328",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP58",
                        "description": "RET iSmart Max 599  Voice300min Net16GB UNLTD",
                        "soc": "12257913",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-27",
                            "end": "2250-08-08"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP44",
                        "description": "GOV Data 242.06_UnWEG5GB384_0.99bt",
                        "soc": "12393316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP30",
                        "description": "Biz&Ent_iphone_841.12V400S30UnWEG1g128_HS_1.25bt",
                        "soc": "264338",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-14",
                            "end": "2017-01-01"
                        },
                        "rc": 841.12,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP35",
                        "description": "B&E Data 419.63_UnWEG7GB/384,0.99bt",
                        "soc": "12249613",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP21",
                        "description": "4G+ SharePlan 1899, NetUNLTD30GB, WiFiUNLTD",
                        "soc": "12322116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1899.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP18",
                        "description": "P_Ent_Enterprise Package 699",
                        "soc": "570038",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-19",
                            "end": "2017-01-01"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP55",
                        "description": "RET iSmart899 Dis50% Voice450min Net10GB UNLTD",
                        "soc": "11423812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP28",
                        "description": "4G/3G iNet 199 Net 500MB UNLTD",
                        "soc": "11255112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-01",
                            "end": "2018-01-31"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP32",
                        "description": "4G+ Super Net 299, Net 750 MB Unltd",
                        "soc": "12437116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP02",
                        "description": "Biz & Ent_Team Talk 350 Get 350Bt,CUG, Data150MB",
                        "soc": "85504",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-11",
                            "end": "2017-12-31"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP26",
                        "description": "4G/3G iNet 399 Net 4GB UNLTD",
                        "soc": "11171112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP78",
                        "description": "Biz&Ent_Smart_242.06V150UnWEG750MB128_0.99bt",
                        "soc": "10056010",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP67",
                        "description": "SPECIAL 4G/3G iSmart 399 Voice200min Net 1GB UNLTD",
                        "soc": "11204912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP26",
                        "description": "Biz 1499_Onnet,V800min,FUP14GB(Free6GB_24Mth)WiFi",
                        "soc": "11241112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP78",
                        "description": "GOV 1662.62_V600S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12390116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1662.62,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP09",
                        "description": "TMH500-550mins all net 1 bt SMS 3 bt MMS 5 bt 24hr",
                        "soc": "76932",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP54",
                        "description": "RET iSmart599 Dis50% Voice300min Net5GB UNLTD",
                        "soc": "11423712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP59",
                        "description": "Biz & Ent Net SIM 5,607.47_V500Min,CUG,60GB,Wi-Fi",
                        "soc": "264208",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 5607.47,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP10",
                        "description": "Biz&Ent_Smart_1028.04V450S50UnWEG2g128_HS_1.25bt",
                        "soc": "571678",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-14",
                            "end": "2017-01-01"
                        },
                        "rc": 1028.04,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP05",
                        "description": "TMH250-250mins all net 1 bt SMS 3 bt MMS 5 bt 24hr",
                        "soc": "75662",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-10-15",
                            "end": "2116-05-16"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "GURL2P05",
                        "description": "Special RC 0 Baht",
                        "soc": "111337",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-13",
                            "end": "2017-01-15"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP42",
                        "description": "RET iTalk1299 Dis50% Allnet 700 min Onnet1000 min",
                        "soc": "11422312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP19",
                        "description": "Ent_Smart_0_UnWEG(FUP2GB,384kb)",
                        "soc": "262048",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP10",
                        "description": "Biz&Ent Smart 599_300min,3EG 2GB,Wi-Fi@MAC UNLTD",
                        "soc": "85554",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-27",
                            "end": "2017-01-01"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP04",
                        "description": "Biz & Ent_Team Talk 750 Get 750Bt,CUG, Data500MB",
                        "soc": "85524",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-11",
                            "end": "2017-12-31"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP55",
                        "description": "B&E 650 BuffetAllnet,7am5pm,V200S70M10UnWifi",
                        "soc": "12399916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP72",
                        "description": "Biz & Ent Data Pack 2299_UnFUP15GB/384 & WiFi@Mac",
                        "soc": "120057",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-06",
                            "end": "2017-01-01"
                        },
                        "rc": 2299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP36",
                        "description": "Biz & Ent Smart399_ 400min,300SMS,50MMS,500MB,WiFi",
                        "soc": "571698",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-24",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP07",
                        "description": "Biz&Ent_Smart_467.29V250S15UnWEG0.5g64_HS_1.25bt",
                        "soc": "571668",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-14",
                            "end": "2017-01-01"
                        },
                        "rc": 467.29,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP05",
                        "description": "Biz & Ent_Team Talk 1,000Get 1,000Bt,CUG,Data 1GB",
                        "soc": "85534",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-11",
                            "end": "2017-12-31"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP04",
                        "description": "Biz & Ent Smart 199_V200S50M10,Data50MB&WIFI",
                        "soc": "571648",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-08",
                            "end": "2017-01-01"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP83",
                        "description": "Special iSmart 199 Voice80min,Net500MB Unltd_CVG",
                        "soc": "12249713",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-25",
                            "end": "2017-02-03"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP02",
                        "description": "Ent_Smart_999_V900S300M50UnWEG,2g384_HS_1Bt",
                        "soc": "571638",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-02-04",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP39",
                        "description": "Biz&Ent_iphone_1542.06V650S50UnWEG2g128_HS_1.25bt",
                        "soc": "571618",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 1542.06,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP05",
                        "description": "Biz & Ent Smart 499_V400S300M50,3WEG",
                        "soc": "571658",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-08",
                            "end": "2017-01-01"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP43",
                        "description": "B&E 1682.24_V750S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11094812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1682.24,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP31",
                        "description": "Ent_iphone_1869.15V1300S50UnWEG2g128_HS_1.25bt/min",
                        "soc": "571608",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-09",
                            "end": "2017-01-01"
                        },
                        "rc": 1869.15,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP91",
                        "description": "4G+ Super Smart 1100, Voice 300 min, Net16GB Unltd",
                        "soc": "12249717",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 1100.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP03",
                        "description": "Biz & Ent_Team Talk 550 Get 550Bt,CUG,Data300MB",
                        "soc": "85514",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-11",
                            "end": "2017-12-31"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP26",
                        "description": "4G+ Super Net 1099, Net 22 GB Unltd",
                        "soc": "12438916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-12",
                            "end": "2250-08-08"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP47",
                        "description": "V0S0G1_iNet TOL Migrate 599 Net 8GB UNLTD",
                        "soc": "12648516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP03",
                        "description": "Biz & Ent E1_All Net Work 0.45 Baht/min",
                        "soc": "264268",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-30",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP43",
                        "description": "SME Smart Talk 1290_Voice2500min,DataFUP1GB,WiFi",
                        "soc": "11058012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 1290.0,
                        "service-level": "C"
                    }, {
                        "name": "BGPR3P07",
                        "description": "Biz & Ent_Invi.Voice399 Get 500min & Data 150 MB",
                        "soc": "85454",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "EDOGAP25",
                        "description": "Don_GOV_899_UnlimitedGPRS_WifiUnlimited_Dongle",
                        "soc": "997378",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-24",
                            "end": "2020-12-31"
                        },
                        "rc": 840.18,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP37",
                        "description": "Biz & Ent RC 350 Get CUG,V250min,150SMS,150MB",
                        "soc": "120026",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-08",
                            "end": "2017-01-01"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP28",
                        "description": "4G+Super Net 899, Net 8 GB Unltd",
                        "soc": "12438816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-12",
                            "end": "2250-08-08"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP11",
                        "description": "Biz ThuukJai RC 599 Get 1,100 min",
                        "soc": "263038",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP61",
                        "description": "B&E500_Allnet 24:00-19:00,V200S70M10UnWEG,3GB",
                        "soc": "12422216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "BSMRTP23",
                        "description": "Biz & Ent_SmartPhone899Get500min,300SMS,50MMS,3WEG",
                        "soc": "85464",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-17",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP14",
                        "description": "Biz ThuukJai RC 999 Get 2,000 min",
                        "soc": "263068",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP46",
                        "description": "Biz&Ent 1699_Voice1700min,30SMS,50MMS,CUG,F&F,3WEG",
                        "soc": "997368",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-16",
                            "end": "2017-01-01"
                        },
                        "rc": 1699.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP33",
                        "description": "4G+ Super Net 399, Net 4 GB Unltd",
                        "soc": "12437216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "BGPR3P06",
                        "description": "Biz & Ent_Invi.Voice 899, Voice1,200mins Data150MB",
                        "soc": "85444",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-17",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "BUNG1P54",
                        "description": "Biz & Ent_Invi.Net 399 Get DataUNLTD & Wi-Fi5hrs.",
                        "soc": "85474",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP10",
                        "description": "i_Ent smart pack1,499_Data+WiFi unlimit_HS",
                        "soc": "264288",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-04-25",
                            "end": "2017-01-01"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP16",
                        "description": "Biz ThuukJai RC1,399 Get2,000min,3EG UNLTED",
                        "soc": "263088",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 1399.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP41",
                        "description": "RET iTalk899 Dis50% Allnet 500 min Onnet700 min",
                        "soc": "11422212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP13",
                        "description": "Biz ThuukJai RC 899 Get 1,800 min",
                        "soc": "263058",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP40",
                        "description": "B&E_399_Onnet 24 Hrs V200_UnWEG2GB384",
                        "soc": "12322316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-28",
                            "end": "2017-12-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP09",
                        "description": "Biz ThuukJai RC 399 Get 600 min",
                        "soc": "263018",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP25",
                        "description": "4G+Super Net 899, Net 16 GB Unltd",
                        "soc": "12438716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-12",
                            "end": "2250-08-08"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P09",
                        "description": "TMH-iPad 759 Data and wifi unlimited",
                        "soc": "76832",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-15",
                            "end": "2115-06-06"
                        },
                        "rc": 759.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP58",
                        "description": "4G+ Super Max 399,150min,4G|3G 4GB,4G 1GB",
                        "soc": "12333716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP13",
                        "description": "B&E 279.44_V100,UnWEG2GB/384,0.99bt",
                        "soc": "1086899",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-21",
                            "end": "2016-12-31"
                        },
                        "rc": 279.44,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP12",
                        "description": "Biz ThuukJai RC 699 Get 1,400 min",
                        "soc": "263048",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP08",
                        "description": "Biz ThuukJai RC 299 Get 400 min",
                        "soc": "263008",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP10",
                        "description": "Biz ThuukJai RC 499 Get 800 min",
                        "soc": "263028",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP33",
                        "description": "B&E Data 372.90_UnWEG6GB/384,0.99bt",
                        "soc": "12249413",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP27",
                        "description": "Biz 1499_Onnet,V800min,Data FUP14GB,WiFi UNLTD",
                        "soc": "11241212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "BGPR3P05",
                        "description": "Biz & Ent_Invi.Voice599  Get 800min , Data 150MB",
                        "soc": "85434",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-17",
                            "end": "2017-01-01"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP42",
                        "description": "Super Save1300_Biz&EntV2000min150SMS3WEG/FUP750MB",
                        "soc": "118916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 1300.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP80",
                        "description": "B&E RC 1,500_FUP 7GB & WiFi UNLTD",
                        "soc": "11413712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP59",
                        "description": "4G+ Super Max 499,200min,4G|3G 8GB,4G 4GB",
                        "soc": "12333816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP41",
                        "description": "Super Save 759_Biz&EntV1150min100SMS3WEG(FUP500MB)",
                        "soc": "118846",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 759.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP16",
                        "description": "Biz & Ent_BuffO_1299_24hrsV300UnWEG_Offnet1.25bt",
                        "soc": "264168",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-05",
                            "end": "2017-01-01"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP31",
                        "description": "RET 4G/3G iSmart 299 Voice 120min. Net 750MB UNLTD",
                        "soc": "11195612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-06-30"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "BUNG1P55",
                        "description": "Biz & Ent_Invi.Net 899 Get Data & Wi-Fi Unlimited",
                        "soc": "85484",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP85",
                        "description": "True Smart Choice 450Mins Unlimited data(6GB)&WiFi",
                        "soc": "12505416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-28",
                            "end": "2099-10-30"
                        },
                        "rc": 849.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP97",
                        "description": "B&E RC 1599_Voice1200min,50sms,10mms,FUP7GB,WiFi",
                        "soc": "12311017",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP76",
                        "description": "Biz & Ent Data Pack 100_UnFUP100MB/64 & WiFi@Mac",
                        "soc": "121097",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-06",
                            "end": "2017-01-01"
                        },
                        "rc": 100.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIPHP01",
                        "description": "TMVH i-Phone 599 Bt Free Size",
                        "soc": "24341",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-08-30",
                            "end": "2016-06-30"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP53",
                        "description": "B&E 649 Buffet Allnet 24 Hrs.S120M50UnWEG,8GB",
                        "soc": "12397916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP74",
                        "description": "Biz & Ent Data Pack 299_UnFUP500MB/128 & WiFi@Mac",
                        "soc": "121077",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-06",
                            "end": "2017-01-01"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP75",
                        "description": "Biz & Ent Data Pack 299_UnFUP500MB/64 & WiFi@Mac",
                        "soc": "121087",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-06",
                            "end": "2017-01-01"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP34",
                        "description": "B&E Data 419.63 Disc50% 24mths_UnWEG7GB/384,0.99bt",
                        "soc": "12249513",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 209.81,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP79",
                        "description": "Biz&Ent_Smart_372.90V200UnWEG1GB256_0.99bt",
                        "soc": "10056110",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP26",
                        "description": "4G/3G iNet 399 Net 2GB UNLTD",
                        "soc": "11171212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP15",
                        "description": "Biz ThuukJai RC 1,199 Get 2,400 min",
                        "soc": "263078",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-13",
                            "end": "2022-07-13"
                        },
                        "rc": 1199.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP73",
                        "description": "Biz & Ent Data Pack 2999_UnFUP20GB/384 & WiFi@Mac",
                        "soc": "121067",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-06",
                            "end": "2017-01-01"
                        },
                        "rc": 2999.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP32",
                        "description": "RET 4G/3G iSmart 399 Voice 150min. Net 750MB UNLTD",
                        "soc": "11195712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-06-30"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP18",
                        "description": "Biz&Ent Talk 699 Buffet All net 6am-8pm",
                        "soc": "264178",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-20",
                            "end": "2017-01-01"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP66",
                        "description": "Biz 4G Net 1799_DataFUP10GB,WiFi UNLTD",
                        "soc": "11242312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1799.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP89",
                        "description": "Social 500,Free 8 Social,Voice 150min,Net2GB Untld",
                        "soc": "12249517",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "EDTSAP11",
                        "description": "V0S0G1_Biz&Ent 1000bt_UnWEG3g384",
                        "soc": "1004078",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-06-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFCP03",
                        "description": "4G Shared Plan",
                        "soc": "11186112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2017-03-06"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP32",
                        "description": "D_Fleet 169Bt_60MB",
                        "soc": "998408",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 169.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP43",
                        "description": "RET iTalk1499 Allnet 2000 minute",
                        "soc": "11422512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP25",
                        "description": "B&E Data 746.73_UnWEG10GB384_0.99bt",
                        "soc": "11091712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 746.73,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP41",
                        "description": "Special 3G iSmart399,V150m,Onnet10hr,FreeNet1.5GB6m",
                        "soc": "1077019",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-09",
                            "end": "2017-06-30"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP22",
                        "description": "4GiSmart 1099_Onnet24hrs,Voice400min,FUP18GB,WiFi",
                        "soc": "11149012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP17",
                        "description": "Biz&Ent Talk 499 Buffet All net 6am-8pm",
                        "soc": "263268",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-20",
                            "end": "2017-01-01"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP09",
                        "description": "Biz&Ent 399_Onnet6AM-6PM,AllNet200min,DataWiFi",
                        "soc": "111717",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-28",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP27",
                        "description": "4G/3G iNet 599 Net 8GB UNLTD",
                        "soc": "11171312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP11",
                        "description": "B&E 1587.85_V800S100M100UnWEG10.0GB/384,0.99bt",
                        "soc": "1080329",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-28",
                            "end": "2016-12-31"
                        },
                        "rc": 1587.85,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP30",
                        "description": "4G+ SharePlan 2499, NetUNLTD40GB, WiFiUNLTD",
                        "soc": "12295817",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-03-03"
                        },
                        "rc": 2499.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP28",
                        "description": "True Life Free View 299 get 200 min",
                        "soc": "75176",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 144.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP67",
                        "description": "Biz 4G Net 2099_DataFUP15GB,Free5GB(6mth),WiFi",
                        "soc": "11242412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 2099.0,
                        "service-level": "C"
                    }, {
                        "name": "CUNL4P02",
                        "description": "POS_True Unlimited 649 for CP 6am-7pm, Bonus 300",
                        "soc": "97885",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2008-03-20",
                            "end": "2017-12-31"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP23",
                        "description": "4GiSmart 1299_Onnet24hrs,Voice500min,FUP22GB,WiFi",
                        "soc": "11149112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "BBSMEP24",
                        "description": "Biz BB-BIS719,3G+/EDGE/GPRS Unlimited",
                        "soc": "264728",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-01-27",
                            "end": "2017-01-01"
                        },
                        "rc": 469.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP33",
                        "description": "4G+ Super Net 399, Net 2 GB Unltd",
                        "soc": "12437316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP88",
                        "description": "Social 500 discount 50% 12mth free social App",
                        "soc": "12633416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-12",
                            "end": "2250-08-08"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "CBUFFP19",
                        "description": "POS_Corp 350 Bt bundle 300 Bt",
                        "soc": "263138",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2008-12-08",
                            "end": "2017-12-31"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP57",
                        "description": "4G+ Super Max 299, Voice100min,Net1.5GB",
                        "soc": "12322416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP30",
                        "description": "Retention RC 0 bt",
                        "soc": "11173612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-30",
                            "end": "2017-01-06"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP76",
                        "description": "iSmart Plus299,V100m Net1.5GB, WiFi",
                        "soc": "11262312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-03",
                            "end": "2016-08-03"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP53",
                        "description": "RET iSmart399 Dis50% Voice150min Net3GB UNLTD",
                        "soc": "11423512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 200.0,
                        "service-level": "C"
                    }, {
                        "name": "BBSMEP37",
                        "description": "Biz BB-BIS 599, get 3G/EDGE/GPRS Unlimited",
                        "soc": "264748",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-23",
                            "end": "2017-01-01"
                        },
                        "rc": 349.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP12",
                        "description": "B&E 1775.70_V900S100M100UnWEG10.0GB/384,0.99bt",
                        "soc": "1080339",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-28",
                            "end": "2016-12-31"
                        },
                        "rc": 1775.7,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP80",
                        "description": "Biz&Ent_Smart_559.81V400UnWEG2GB384_0.99bt",
                        "soc": "10056210",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 559.81,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP60",
                        "description": "B&E450_Allnet 24:00-19:00,V200S70M10,UnWifi",
                        "soc": "12422016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP01",
                        "description": "Multi_FreeSize 599 m.",
                        "soc": "106506",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-22",
                            "end": "2250-08-08"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP30",
                        "description": "D_Fleet 69Bt_15MB",
                        "soc": "121206",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 69.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP85",
                        "description": "B&E RC 899 Get Voice(All-net) 700min,FUP7GB,WiFi",
                        "soc": "12655616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP69",
                        "description": "GOV 820.56_V300S30UnWEG15G384_HS_0.99bt/min",
                        "soc": "12389116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 820.56,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP31",
                        "description": "4G/3G iNet 1499 Net 20GB UNLTD",
                        "soc": "11262212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-17",
                            "end": "2250-08-08"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP29",
                        "description": "B&E 373.83_V200S20UnWEG3.0g384_HS_0.99bt/min",
                        "soc": "11084912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 373.83,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP06",
                        "description": "Biz & Ent E1_RC50,000bt, All-net1.30bt/min",
                        "soc": "111825",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 50000.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP45",
                        "description": "RET iNet199 Dis50% Net 1GB UNLTD",
                        "soc": "11422712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 100.0,
                        "service-level": "C"
                    }, {
                        "name": "CUNL4P03",
                        "description": "POS_True Unlimited 899 for CP 6am-7pm, Bonus 300",
                        "soc": "263208",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2008-03-20",
                            "end": "2017-12-31"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP79",
                        "description": "B&E RC 1,200_FUP 5GB & WiFi UNLTD",
                        "soc": "11413612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 1200.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP84",
                        "description": "B&E RC 499 Get Voice(All-net) 300min,FUP3GB,WiFi",
                        "soc": "12654516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP57",
                        "description": "B&E 900 Buffet Allnet 24 Hrs.S70M10 UnWifi",
                        "soc": "12400116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 900.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP57",
                        "description": "SME Smart 4G (S) 399_Voice250min,FUP2GB,Wi-Fi_Next",
                        "soc": "11359012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP14",
                        "description": "V0S0G1_Transportation, Data only 10GB UNLTD",
                        "soc": "10258110",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-08-21",
                            "end": "2025-07-02"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP14",
                        "description": "4G+ SharePlan 499, NetUNLTD 4GB, WiFi UNLTD",
                        "soc": "12317316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP18",
                        "description": "3G iNet 399, Net UNLTD 1.5 GB, WiFi UNLTD",
                        "soc": "1080109",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP02",
                        "description": "Biz & Ent E1 iTalk RC 0 Get F&F_1 Baht Per Minute",
                        "soc": "121186",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-02-18",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP78",
                        "description": "B&E RC 1,000_FUP 3GB & WiFi UNLTD",
                        "soc": "11413512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP32",
                        "description": "B&E 654.21_V350S20UnWEG5.0g384_HS_0.99bt/min",
                        "soc": "11085812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 654.21,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP32",
                        "description": "SPECIAL 4G/3G iNet 199 Net500MB UNLTD WiFi10 hrs",
                        "soc": "11265012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP43",
                        "description": "Biz&Ent Smart 245_V200Data3GBUnWiFi",
                        "soc": "263468",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 245.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP19",
                        "description": "3G iNet 599, Net UNLTD 3 GB, FreeNet 3G 3 GB 6m.",
                        "soc": "1080119",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP20",
                        "description": "3G iNet 799, Net UNLTD 5 GB, WiFi UNLTD",
                        "soc": "1080139",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "UR22RP04",
                        "description": "TLFV TrueMove-H 299 - 75st /1.50Bt",
                        "soc": "51942",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2099-06-30"
                        },
                        "rc": 144.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP10",
                        "description": "B&E 1401.87_V700S100M100UnWEG10.0GB/384,0.99bt",
                        "soc": "1080199",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-28",
                            "end": "2016-12-31"
                        },
                        "rc": 1401.87,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP33",
                        "description": "B&E 747.66_V400S30UnWEG5.0g384_HS_0.99bt/min",
                        "soc": "11085912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 747.66,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP61",
                        "description": "Biz&Ent Data 466.36_UnWEG2g128k",
                        "soc": "999098",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 466.36,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP19",
                        "description": "3G iNet 599, Net UNLTD 3 GB, WiFi UNLTD",
                        "soc": "1080129",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP60",
                        "description": "SME Smart 4G (L) 799_Voice700min,FUP8GB,Wi-Fi",
                        "soc": "11360112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP27",
                        "description": "True Life Free View 250, get 150min",
                        "soc": "51962",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 120.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP19",
                        "description": "B&E Data 1214.95_UnWEG10.0GB384Kbps_0.99bt/min",
                        "soc": "11096312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP68",
                        "description": "GOV 728.04_V250S30UnWEG10G384_HS_0.99bt/min",
                        "soc": "12389016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 728.04,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP07",
                        "description": "Biz & Ent E1_RC80,000bt, All-net1.20bt/min",
                        "soc": "111845",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 80000.0,
                        "service-level": "C"
                    }, {
                        "name": "CUNL4P01",
                        "description": "POS_True Unlimited 499 for CP 6am-7pm, Bonus 300",
                        "soc": "263198",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2008-03-20",
                            "end": "2017-12-31"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "BBINDP06",
                        "description": "BB TMH 350_ Free Voice 60 mins",
                        "soc": "98783",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-12-01",
                            "end": "2016-06-30"
                        },
                        "rc": 170.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP31",
                        "description": "4G/3G iNet 1499 Net 30GB UNLTD",
                        "soc": "11262112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-17",
                            "end": "2250-08-08"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP44",
                        "description": "RET iTalk1999 Allnet 2800 minute",
                        "soc": "11422612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 1999.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP35",
                        "description": "D_Fleet 149Bt_30MB_60SMS",
                        "soc": "998198",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 149.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP20",
                        "description": "3G iNet 799, Net UNLTD 5 GB, FreeNet 3G 5 GB 6m.",
                        "soc": "1080149",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP10",
                        "description": "Biz&Ent799_Onnet6AM-6PM,AllNet200min,DataWiFi_Next",
                        "soc": "111857",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-28",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP42",
                        "description": "Biz&Ent Smart 235_V200UnWEG2g384",
                        "soc": "263458",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 235.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP01",
                        "description": "TMH 349, 200mins, 3G/EDGE/GPRS 500MB, Wi-Fi 5 hrs",
                        "soc": "81772",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-09-28",
                            "end": "2016-06-30"
                        },
                        "rc": 349.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP26",
                        "description": "B&E Data RC0Bt_UnWEG12GB384_0.99bt",
                        "soc": "11118812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2115-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP53",
                        "description": "Biz & Ent Data 599_Data FUP 2/384,WiFi@TMVH UNLTD",
                        "soc": "998138",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-10",
                            "end": "2017-01-01"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP33",
                        "description": "RET 4G/3G iSmart 599 Voice 300min. Net 1.5GB UNLTD",
                        "soc": "11195812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-06-30"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP11",
                        "description": "Biz&Ent 599_Onnet6AM-6PM,AllNet350min,DataWiFi",
                        "soc": "111867",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-28",
                            "end": "2017-01-01"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP30",
                        "description": "Biz&Ent_Smart700BtV500BtUnWEG2g384",
                        "soc": "122667",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP13",
                        "description": "Biz&Ent 799_Onnet 24hrs, AllNet 450min, DataWiFi",
                        "soc": "111887",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-28",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP09",
                        "description": "Biz & Ent E1_RC150,000bt, All-net 1bt/min",
                        "soc": "111885",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 150000.0,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP10",
                        "description": "Biz & Ent E1_RC200,000bt, All-net0.90bt/min",
                        "soc": "111905",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 200000.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP14",
                        "description": "Biz&Ent 1599_Onnet24hrs,AllNet450min,DataWiFi_Next",
                        "soc": "111897",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-28",
                            "end": "2017-01-01"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP12",
                        "description": "Biz&Ent1199_Onnet6AM-6PM,AllNet350minDataWiFi_Next",
                        "soc": "111877",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-28",
                            "end": "2017-01-01"
                        },
                        "rc": 1199.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP10",
                        "description": "Biz & Ent 1199 Smart Buffet All Net 8am-6pm",
                        "soc": "105156",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-19",
                            "end": "2017-01-01"
                        },
                        "rc": 1199.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTAP64",
                        "description": "Device-iSmart699, V400m,net2GB UNL  CUG24h TVS",
                        "soc": "122527",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-01",
                            "end": "2018-12-05"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP41",
                        "description": "Biz&Ent Smart 225_V200UnWEG1g384",
                        "soc": "263448",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 225.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP19",
                        "description": "V0S0G1_Ent_ipad_1499_UnWEG5g128_HS_1.25bt/min",
                        "soc": "572848",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "EDTSAP06",
                        "description": "V0S0G1_Biz & Ent 4,99 Get 3WEG Unlimited",
                        "soc": "572868",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-16",
                            "end": "2017-01-01"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP15",
                        "description": "iNet199, 3G/EDGE/GPRS 500MB UNLTD,WiFi Unl",
                        "soc": "10414210",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-10",
                            "end": "2116-05-16"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP33",
                        "description": "SPECIAL 4G/3G iNet 699 Net 5GB UNLTD",
                        "soc": "11265112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP77",
                        "description": "B&E RC 700_FUP 2GB & WiFi UNLTD",
                        "soc": "11413412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP45",
                        "description": "GOV Data 372.90_UnWEG10GB384_0.99bt",
                        "soc": "12396416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP31",
                        "description": "4G/3G iNet 750 Net 5GB UNLTD",
                        "soc": "11262012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-19",
                            "end": "2025-07-02"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP14",
                        "description": "Biz & Ent 1,500_300min,50 SMS,CUG,F&F,3WEG 2/384",
                        "soc": "263408",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-10",
                            "end": "2017-01-01"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP19",
                        "description": "Biz& Ent_Smart_654.21V800S100_HS_Allnet0.99bt/min",
                        "soc": "998028",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-27",
                            "end": "2017-01-01"
                        },
                        "rc": 654.21,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP15",
                        "description": "4G+ SharePlan 599, NetUNLTD 5GB, WiFi UNLTD",
                        "soc": "12317516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP18",
                        "description": "B&E Data 1028.04_UnWEG10.0GB384Kbps_0.99bt/min",
                        "soc": "11096112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1028.04,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP47",
                        "description": "RET iNet399 Dis50% Net 4GB UNLTD",
                        "soc": "11422912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 200.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP18",
                        "description": "3G iNet 399,Net UNLTD 1.5 GB, FreeNet3G 1.5 GB 6m.",
                        "soc": "1080099",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP67",
                        "description": "iNet399+ WiFi5hrs.,DataULTD 1GB_KR",
                        "soc": "83613",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-24",
                            "end": "2116-05-16"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP61",
                        "description": "SME Smart 4G (L) 799_Voice700min,FUP4GB,Wi-Fi_Next",
                        "soc": "11360012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP37",
                        "description": "B&E 1121.49_V500S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11088912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1121.49,
                        "service-level": "C"
                    }, {
                        "name": "TVSIMP02",
                        "description": "TrueVisions SIM 145 call 300Bt, 1Bt all net 24hrs",
                        "soc": "97335",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2009-07-21",
                            "end": "2016-06-30"
                        },
                        "rc": 145.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP42",
                        "description": "V0S0G1_iNet TOL Migrate 399 Net 8GB UNLTD",
                        "soc": "12647816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP37",
                        "description": "Biz&Ent 1500_V1200min,50SMS,30MMS,CUG,F&F,2GB,WiFi",
                        "soc": "264418",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP36",
                        "description": "Ent_iphone_1200V800S100UnWEG3g128_HS_1.25bt/min",
                        "soc": "263368",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-26",
                            "end": "2017-01-01"
                        },
                        "rc": 1200.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP54",
                        "description": "B&E 650 BuffetAllnet,7am5pm,V200S70M10UnWEG,4g384",
                        "soc": "12399816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP23",
                        "description": "Ent_Smart_0_UnWEG(FUP10GB,384kb)",
                        "soc": "998038",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP52",
                        "description": "Biz & Ent SmartPack 1000_1000 Bt,50SMS,3WEG(2/384)",
                        "soc": "263478",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP11",
                        "description": "Biz & Ent E1_RC220,000bt, All-net0.85bt/min",
                        "soc": "111985",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 220000.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP34",
                        "description": "Biz&Ent iphone1822.43_CUG,Voice 700min,100SMS,3WEG",
                        "soc": "998008",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1822.43,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP11",
                        "description": "Biz & Ent 1399 Smart Buffet All Net 8am-8pm",
                        "soc": "105316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-19",
                            "end": "2017-01-01"
                        },
                        "rc": 1399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP40",
                        "description": "Biz&Ent Smart 200_V200UnWiFi",
                        "soc": "263438",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 200.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP13",
                        "description": "Promotion 88 baht, call all network 88satang",
                        "soc": "107405",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-03",
                            "end": "2016-06-30"
                        },
                        "rc": 88.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTAP63",
                        "description": "Device-iSmart499, V250m,net1GB UNL CUG24h TVS",
                        "soc": "122507",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-01",
                            "end": "2116-05-16"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP39",
                        "description": "Biz & Ent_Unlimited Data Fair 2/384 and WiFi@Mac",
                        "soc": "263428",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-23",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP34",
                        "description": "SPECIAL 4G/3G iNet999 Net10GB UNLTD",
                        "soc": "11265212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP19",
                        "description": "3G iNet 299, Net UNLTD 1 GB, Free 4GNet 500MB 6m.",
                        "soc": "1080039",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-30",
                            "end": "2025-07-02"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP20",
                        "description": "V0S0G1_Ent_ipad_1699_UnWEG5g128_HS_1.25bt/min",
                        "soc": "572858",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1699.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP15",
                        "description": "B&E 746.73_V550,UnWEG5GB/384,0.99bt",
                        "soc": "1087789",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-26",
                            "end": "2016-12-31"
                        },
                        "rc": 746.73,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP21",
                        "description": "4G MiFi 499,4GNetUNL 3GB,WiFiUNLT, Free2GB 6m",
                        "soc": "1083359",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-19",
                            "end": "2025-07-02"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP29",
                        "description": "True Life Free View 299 get 299 Bt.",
                        "soc": "76602",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 144.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP48",
                        "description": "TLFV Lease to own 459 baht/mth all network",
                        "soc": "34011",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-09-15",
                            "end": "2099-06-30"
                        },
                        "rc": 229.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP43",
                        "description": "V0S0G1_iNet TOL Migrate 399 Net 8GB UNLTD",
                        "soc": "12647916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP38",
                        "description": "Lock Device: 4G/3G iNet Plus 249 Net 10GB UNLTD",
                        "soc": "12255813",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-23",
                            "end": "2250-08-08"
                        },
                        "rc": 249.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP14",
                        "description": "Net SIM 350 Data 1 GB WiFi 10 hrs.",
                        "soc": "62702",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-15",
                            "end": "2116-05-16"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP57",
                        "description": "RET iSmart Max 499  Voice200min Net10GB UNLTD",
                        "soc": "12257813",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-27",
                            "end": "2250-08-08"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP30",
                        "description": "4G/3G iNet 1099 Net 14GB UNLTD",
                        "soc": "11172012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP46",
                        "description": "RET iNet299 Dis50% Net 3GB UNLTD",
                        "soc": "11422812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 150.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTPP36",
                        "description": "Biz & Ent_Invi.Smart399Plus,Voice150min,Data UNLTD",
                        "soc": "85714",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP71",
                        "description": "SPECIAL 4G/3G iSmart899 Voice 450min Net 5GB UNLTD",
                        "soc": "11205512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP50",
                        "description": "TLFV Lease to own 299 baht/mth all network",
                        "soc": "34031",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-09-15",
                            "end": "2099-06-30"
                        },
                        "rc": 149.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP73",
                        "description": "True Smart Choice 300Mins Unlimited data(2GB)&WiFi",
                        "soc": "11255012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-12",
                            "end": "2099-09-30"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP23",
                        "description": "4G MiFi 899, Net10GB, WiFi UNLTD, FreeNet 4GB 6mo",
                        "soc": "1083379",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-19",
                            "end": "2025-07-02"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP76",
                        "description": "B&E RC 500_FUP 1GB & WiFi UNLTD",
                        "soc": "11413312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP24",
                        "description": "4G MiFi 1099, Net14GB, WiFi UNLTD, FreeNet 6GB 6mo",
                        "soc": "1083389",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-19",
                            "end": "2025-07-02"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP47",
                        "description": "TLFV Lease to own 349 baht/mth all network",
                        "soc": "34001",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-09-15",
                            "end": "2099-06-30"
                        },
                        "rc": 169.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP35",
                        "description": "SPECIAL 4G/3G iNet1699Net20GB UNLTD",
                        "soc": "11265312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 1699.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP49",
                        "description": "TLFV Lease to own 559 baht/mth all network",
                        "soc": "34021",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-09-15",
                            "end": "2099-06-30"
                        },
                        "rc": 279.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP68",
                        "description": "Biz 4G Net 2099_DataFUP15GB,WiFi UNLTD",
                        "soc": "11242812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 2099.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP22",
                        "description": "4G MiFi 699, Net6GB, WiFi UNLTD, FreeNet 3GB 6mo",
                        "soc": "1083369",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-05-19",
                            "end": "2025-07-02"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP56",
                        "description": "RET iSmart1299 Dis50% Voice700min Net16GB UNLTD",
                        "soc": "11423912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP41",
                        "description": "GOV Data 1475.70_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12387616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1475.7,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP48",
                        "description": "Biz&Ent smart 372.90_V250WEG1GB_CUG Unlimited",
                        "soc": "947708",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP19",
                        "description": "4GiSmart 499_Onnet5AM-5PM,Voice100minFUP3.5GB,WiFi",
                        "soc": "11148712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2016-12-31"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP47",
                        "description": "SME Smart Net 999_Voice1000min,DataFUP5GB,Wi-Fi",
                        "soc": "11058712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP30",
                        "description": "Biz&Ent_Voice 1500_V2000_HS_0.75bt/min",
                        "soc": "947748",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-30",
                            "end": "2017-01-01"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP57",
                        "description": "B&E 1869.16_V800S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11213012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1869.16,
                        "service-level": "C"
                    }, {
                        "name": "PLAT3P17",
                        "description": "Platinum Package 49,000 Bt (24 Months)",
                        "soc": "123886",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-13",
                            "end": "2017-03-06"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP16",
                        "description": "4G+ SharePlan 699, NetUNLTD 8GB, WiFi UNLTD",
                        "soc": "12317716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP20",
                        "description": "4GiSmart 699_Onnet10PM-5PM,Voice200minFUP7GB,WiFi",
                        "soc": "11148812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2016-12-31"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP36",
                        "description": "4G/3G iSmart699 Second Voice350min Net2.5GB UNLTD",
                        "soc": "11264712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP72",
                        "description": "GOV 1101.87_V350S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12389516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1101.87,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP36",
                        "description": "4G/3G iNet Plus 199 Net 2GB UNLTD",
                        "soc": "11380312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-22",
                            "end": "2250-08-08"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP49",
                        "description": "True IOT Package 199 Net 3GB UNLTD",
                        "soc": "12257017",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP73",
                        "description": "GOV 1195.33_V400S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12389616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1195.33,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP49",
                        "description": "4G iSmart 399_Voice100min,FUP2.25GB,WiFi UNLTD",
                        "soc": "11148612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2016-12-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP37",
                        "description": "GOV Data 1101.87_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12386916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1101.87,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP66",
                        "description": "SPECIAL 4G/3G iSmart199 Voice100min Net500MB UNLTD",
                        "soc": "11201212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP77",
                        "description": "4G Extra1500 Dis50% 24mths,V300m,Net5GB,WiFi",
                        "soc": "11263212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-03",
                            "end": "2017-03-06"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP84",
                        "description": "GOV 372.90_V200UnWEG5GB384_0.99bt",
                        "soc": "12390916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP29",
                        "description": "D_Fleet 49Bt_10MB",
                        "soc": "125906",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 49.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP89",
                        "description": "SME Smart 1099_Voice650min,FUP16GB,Wi-Fi UNLTD",
                        "soc": "12267917",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP33",
                        "description": "Business Talk 500_V600Data300MB",
                        "soc": "117996",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIPHP64",
                        "description": "L799 Pay539 B.18m.,Voice450 M.,Data 3GB UNLTD",
                        "soc": "11303312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-24",
                            "end": "2019-01-03"
                        },
                        "rc": 539.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP45",
                        "description": "Biz & Ent Talk 99_Voice 99 min & 50 MB",
                        "soc": "116847",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-21",
                            "end": "2017-01-01"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP79",
                        "description": "Social 250 Free call 150 mins data 2GB_Free App",
                        "soc": "11272612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-12",
                            "end": "2250-08-08"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP33",
                        "description": "D_Fleet 69Bt_10MB_15SMS",
                        "soc": "130346",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 69.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP65",
                        "description": "Biz&Ent_1305_V300_CUG&F&F_UnWEG,4g384",
                        "soc": "11363412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-25",
                            "end": "2017-12-31"
                        },
                        "rc": 1305.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP34",
                        "description": "4G+ Super Net 599, Net 4 GB Unltd",
                        "soc": "12437816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP88",
                        "description": "Biz & Ent RC 800_V2500baht300M300DaUNLTD12GBWiFi",
                        "soc": "10485010",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-11-11",
                            "end": "2016-12-31"
                        },
                        "rc": 800.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP70",
                        "description": "SME Platinum_Voice7,800min,FUP16GB,WiFi UNLTD",
                        "soc": "12273016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-14",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP46",
                        "description": "Biz & Ent Talk 199_Voice 150 min & 500 MB",
                        "soc": "116877",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-21",
                            "end": "2017-01-01"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP49",
                        "description": "Biz&Ent smart 466.36_V250UnWEG_CUG Unlimited",
                        "soc": "947718",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 466.36,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP34",
                        "description": "4G+ Super Net 599, Net 8 GB Unltd",
                        "soc": "12437916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP48",
                        "description": "SME Smart Net 1299_Voice1300min,DataFUP8GB,Wi-Fi",
                        "soc": "11058812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP24",
                        "description": "Biz&Ent_ipad_1448.60_UnWEG5g128_HS_1.25bt/min",
                        "soc": "947648",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 1448.6,
                        "service-level": "C"
                    }, {
                        "name": "EPPUAP01",
                        "description": "Biz&Ent_V0.75Bt/min,SMS2Bt,MMS5Bt,1Bt/MB/WiFi1min",
                        "soc": "120726",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-16",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP62",
                        "description": "RET iSmart Max 1299  Voice800min Net50GB UNLTD",
                        "soc": "12258313",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-27",
                            "end": "2250-08-08"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP55",
                        "description": "4G+ Super Smart 1499, Voice1200min Net 25 GB Unltd",
                        "soc": "12314916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP48",
                        "description": "GOV Data 1880 UnWEG25GB/384,0.99bt",
                        "soc": "12375716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-24",
                            "end": "2017-12-31"
                        },
                        "rc": 1880.0,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP02",
                        "description": "B&E RC 409_Voice900min,50sms,10mms,FUP3GB,WiFi",
                        "soc": "12312217",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 409.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP70",
                        "description": "GOV 914.95_V300S30UnWEG15G384_HS_0.99bt/min",
                        "soc": "12389316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 914.95,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP60",
                        "description": "Biz&Ent Data 372.90_UnWEG1g128k",
                        "soc": "947598",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "EDTSAP09",
                        "description": "V0S0G1_Biz & Ent Data SIM 100 Get Data 50 MB",
                        "soc": "969298",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-21",
                            "end": "2017-01-01"
                        },
                        "rc": 100.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP78",
                        "description": "4G Advance1900 Dis50% 24mths,V400m,Net10GB,WiFi",
                        "soc": "11263412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-03",
                            "end": "2017-03-06"
                        },
                        "rc": 950.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP58",
                        "description": "B&E 2056.07_V850S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11213212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 2056.07,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP23",
                        "description": "Biz&Ent_ipad_1261.68_UnWEG5g128_HS_1.25bt/min",
                        "soc": "947638",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 1261.68,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP86",
                        "description": "Data 700bt RC discount 50% 12 mths data 8GB",
                        "soc": "12632916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-12",
                            "end": "2250-08-08"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP63",
                        "description": "4G iSmart Extra 199,V75m Net750MB UNLTD, WiFi10hr",
                        "soc": "11151112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2018-07-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP65",
                        "description": "MNP 350, Voice 600 min, Net 4 GB UNLTD",
                        "soc": "11162012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2250-08-08"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP89",
                        "description": "Biz & Ent RC 1149_V1700baht300M300DaUNLTD20GBWiFi",
                        "soc": "10485110",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-11-11",
                            "end": "2016-12-31"
                        },
                        "rc": 1149.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP21",
                        "description": "Biz&Ent_Smart934.58V400S30UnWEG2g128_HS_1.25bt/min",
                        "soc": "120756",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-30",
                            "end": "2017-01-01"
                        },
                        "rc": 934.58,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP45",
                        "description": "Biz&Ent 1900_Voice1700min,30SMS,50MMS,CUG,F&F,3WEG",
                        "soc": "947698",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-16",
                            "end": "2017-01-01"
                        },
                        "rc": 1900.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP26",
                        "description": "Biz&Ent ipad1820 Bt_Unlimited data",
                        "soc": "947658",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-12",
                            "end": "2017-01-01"
                        },
                        "rc": 1820.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP43",
                        "description": "Biz&Ent_iphone2049V1500S30UnWEG3g384_HS_0.99bt/min",
                        "soc": "120916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-27",
                            "end": "2017-01-01"
                        },
                        "rc": 2049.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP70",
                        "description": "SPECIAL 4G/3G iSmart799 Voice 400min.Net 4GB UNLTD",
                        "soc": "11205312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP22",
                        "description": "Biz&Ent_Smart699V300S20UnWEG2g384_On 0.50/Off 1 bt",
                        "soc": "947678",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-27",
                            "end": "2017-01-01"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP66",
                        "description": "Biz&Ent_1505_V300_CUG&F&F_UnWEG,4g384",
                        "soc": "11363512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-25",
                            "end": "2017-12-31"
                        },
                        "rc": 1505.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP37",
                        "description": "4G/3G iSmart999 Second Voice550min Net 6GB UNLTD",
                        "soc": "11264812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP65",
                        "description": "Biz & Ent Net 799_3WEG Unlimited Fair 4/384",
                        "soc": "947618",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-18",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP40",
                        "description": "Biz&Ent_iphone_1728.97V750S50UnWEG2g128_HS_1.25bt",
                        "soc": "947668",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-15",
                            "end": "2017-01-01"
                        },
                        "rc": 1728.97,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP72",
                        "description": "SPECIAL 4G/3G iSmart999 Voice 500min Net 7GB UNLTD",
                        "soc": "11205612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP31",
                        "description": "B&E 560.75_V300S20UnWEG3.0g384_HS_0.99bt/min",
                        "soc": "11085412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 560.75,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP63",
                        "description": "Biz&Ent Data 840.18_UnWEG5g128k",
                        "soc": "947608",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 840.18,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP48",
                        "description": "B&E_Data FUP 4GB & WiFi",
                        "soc": "10998612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-06",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP71",
                        "description": "GOV 1008.41_V350S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12389416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1008.41,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP47",
                        "description": "B&E_Data FUP 3GB & WiFi",
                        "soc": "10998512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-06",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP21",
                        "description": "RETEN_iSmart1149More Voice(1300m+3G_1.5GB UTLD)",
                        "soc": "10539911",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-02",
                            "end": "2017-01-06"
                        },
                        "rc": 1149.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP09",
                        "description": "iTalk+ 499 VoiceAllNet650min, Net500MB, FB12m.",
                        "soc": "11205412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP36",
                        "description": "GOV Data 1008.41_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12386616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1008.41,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP83",
                        "description": "B&E RC 299 Get Voice(All-net) 200min,FUP2GB,WiFi",
                        "soc": "12654016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP35",
                        "description": "4G/3G iSmart699 Second Voice350min Net3.5GB UNLTD",
                        "soc": "11264612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP12",
                        "description": "4G Entrepreneur 2500 UNLTD Call, IDD, Data Roaming",
                        "soc": "11235812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-21",
                            "end": "2017-03-06"
                        },
                        "rc": 2500.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP37",
                        "description": "4G/3G iNet Plus 399 Net 8GB UNLTD",
                        "soc": "11380612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-22",
                            "end": "2250-08-08"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP39",
                        "description": "B&E_Data FUP 5GB & WiFi",
                        "soc": "1092099",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-06-16",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP87",
                        "description": "GOV 279.44_V200,UnWEG2GB/384,0.99bt",
                        "soc": "12481716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-21",
                            "end": "2018-01-31"
                        },
                        "rc": 279.44,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP67",
                        "description": "GOV 634.58_V250S20UnWEG10G384_HS_0.99bt/min",
                        "soc": "12388916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 634.58,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP15",
                        "description": "Biz&Ent 549_SuperOnnet24hr,V50min,20SMS,10MMS,3WEG",
                        "soc": "121887",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-16",
                            "end": "2017-01-01"
                        },
                        "rc": 549.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP50",
                        "description": "True IOT Package 399 Net 8GB UNLTD",
                        "soc": "12257217",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP32",
                        "description": "4G+ Super Net 299, Net 1.5 GB Unltd",
                        "soc": "12436516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-05",
                            "end": "2250-08-08"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP64",
                        "description": "Biz & Ent Smart 225_V200Data UL2GBUnWiFi",
                        "soc": "123976",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-23",
                            "end": "2017-01-01"
                        },
                        "rc": 225.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP67",
                        "description": "Biz&Ent_1655_V300_CUG&F&F_UnWEG,4g384",
                        "soc": "11363612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-25",
                            "end": "2017-12-31"
                        },
                        "rc": 1655.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP82",
                        "description": "GOV 2036.45_V800S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12390716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 2036.45,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP01",
                        "description": "TrueMove H 299 on-net ultd 24 hrs",
                        "soc": "77402",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2017-01-06"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP46",
                        "description": "GOV Data 541.12_UnWEG20GB384_0.99bt",
                        "soc": "12397116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 541.12,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP17",
                        "description": "4G+ SharePlan 899, NetUNLTD12GB, WiFi UNLTD",
                        "soc": "12317916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P23",
                        "description": "iPad 249",
                        "soc": "120636",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-20",
                            "end": "2115-06-06"
                        },
                        "rc": 249.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP43",
                        "description": "GOV Data 1662.62_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12389216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1662.62,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP62",
                        "description": "TLFV True MoveH 899B Data3G FU 3GB Wifi Unlimited",
                        "soc": "115367",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-27",
                            "end": "2099-09-30"
                        },
                        "rc": 744.0,
                        "service-level": "C"
                    }, {
                        "name": "BUFFTP67",
                        "description": "Buffet400-18hr,voice30min,Net500MB Untld,Free 8App",
                        "soc": "12338317",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-06-09",
                            "end": "2017-03-31"
                        },
                        "rc": 400.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP07",
                        "description": "iTalk+ 199, Voice All Net 250 min, FB12 m.",
                        "soc": "11200112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP60",
                        "description": "RET iSmart Max 899  Voice400min Net30GB UNLTD",
                        "soc": "12258113",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-27",
                            "end": "2250-08-08"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP53",
                        "description": "iSmart Plus699,V300m Net7GB, WiFi",
                        "soc": "1089669",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-06-09",
                            "end": "2016-10-03"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "GURL2P06",
                        "description": "SookX2 Anywhere with Box 499",
                        "soc": "115407",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-20",
                            "end": "2099-03-31"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP74",
                        "description": "iNet 599 Data&WiFi ULTD (FU 2GB)_KR",
                        "soc": "95663",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-03-07",
                            "end": "2115-01-30"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP59",
                        "description": "SME Smart 4G (M) 599_Voice500min,FUP3GB,Wi-Fi_Next",
                        "soc": "11359812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP56",
                        "description": "B&E 900 Buffet Allnet 24 Hrs.S70M10 UnWEG3GB384",
                        "soc": "12400016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 900.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP23",
                        "description": "B&E Data 242.06_UnWEG3GB384_0.99bt",
                        "soc": "11091512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP21",
                        "description": "Ent_Smart_0_UnWEG(FUP5GB,384kb)",
                        "soc": "569118",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP18",
                        "description": "B&E 419.63_V200,UnWEG4GB/384,0.99bt",
                        "soc": "1095489",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-02",
                            "end": "2016-12-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP04",
                        "description": "B&E RC 549_Voice1200min,50sms,10mms,FUP5GB,WiFi",
                        "soc": "12312417",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 549.0,
                        "service-level": "C"
                    }, {
                        "name": "CDTSAP03",
                        "description": "V0S0G1_Biz&Ent 1275bt_UnWEG6g384",
                        "soc": "117477",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-11",
                            "end": "2017-01-01"
                        },
                        "rc": 1275.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP44",
                        "description": "SPECIAL iSmartBuffet999AllNet 7am-8pm Data 1GB",
                        "soc": "11202812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP16",
                        "description": "B&E 466.36_V250,UnWEG4GB/384,0.99bt",
                        "soc": "1095459",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-02",
                            "end": "2016-12-31"
                        },
                        "rc": 466.36,
                        "service-level": "C"
                    }, {
                        "name": "CDTSAP02",
                        "description": "V0S0G1_Biz&Ent 1,125bt_UnWEG5g384",
                        "soc": "117467",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-11",
                            "end": "2017-01-01"
                        },
                        "rc": 1125.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP51",
                        "description": "True IOT Package 599 Net 16GB UNLTD",
                        "soc": "12257417",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "70STGP04",
                        "description": "Business Talk 1,400 Get 2,000 Min_70 Satang",
                        "soc": "117426",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1400.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP24",
                        "description": "E_Ent_599_ V350S200M20 Unlimited Data Wifi",
                        "soc": "569128",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-07",
                            "end": "2017-01-01"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP47",
                        "description": "GOV Data 728.04_UnWEG25GB384_0.99bt",
                        "soc": "12397216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 728.04,
                        "service-level": "C"
                    }, {
                        "name": "ESBFOP21",
                        "description": "4GiSmart 899_Onnet24hrs,Voice300min,FUP12GB,WiFi",
                        "soc": "11148912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2016-12-31"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP96",
                        "description": "B&E RC 1699_Voice1500min,50sms,10mms,FUP7GB,WiFi",
                        "soc": "12310917",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 1699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP49",
                        "description": "B&E_Data FUP 5GB & WiFi",
                        "soc": "10998712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-06",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP83",
                        "description": "GOV 242.06_V150UnWEG3GB384_0.99bt",
                        "soc": "12390816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP51",
                        "description": "iSmart Plus399,V200m Net3GB, WiFi",
                        "soc": "1089589",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-06-09",
                            "end": "2016-10-03"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP54",
                        "description": "B&E 1308.41_V550S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11212312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1308.41,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP66",
                        "description": "GOV 541.12_V200S20UnWEG5G384_HS_0.99bt/min",
                        "soc": "12388816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 541.12,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP60",
                        "description": "TLFV True MoveH 499B Data3G FU 1GB Wifi Unlimited",
                        "soc": "115287",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-27",
                            "end": "2099-09-30"
                        },
                        "rc": 344.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP41",
                        "description": "SME Smart Talk 490_Voice700min,DataFUP500MB,WiFi",
                        "soc": "11054512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 490.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP24",
                        "description": "B&E Data 559.81_UnWEG7GB384_0.99bt",
                        "soc": "11091612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 559.81,
                        "service-level": "C"
                    }, {
                        "name": "GURL2P09",
                        "description": "SookX2 Anywhere with Box 999",
                        "soc": "115437",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-20",
                            "end": "2099-03-31"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "GURL2P07",
                        "description": "SookX2 Anywhere with Box 599",
                        "soc": "115417",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-20",
                            "end": "2099-03-31"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP73",
                        "description": "SME Smart 1299_Voice 850min,FUP10GB, Wi-Fi UNLTD",
                        "soc": "12273316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-14",
                            "end": "2017-12-31"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP50",
                        "description": "B&E_Data FUP 6GB & WiFi",
                        "soc": "10998812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-06",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP17",
                        "description": "P_Ent_Enterprise Package 499",
                        "soc": "569158",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-19",
                            "end": "2017-01-01"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP03",
                        "description": "B&E RC 549_Voice1000min,50sms,10mms,FUP7GB,WiFi",
                        "soc": "12312317",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 549.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP13",
                        "description": "B&E RC 450_V400min,70SMS,10MMS,UNLTD3GB,WiFi",
                        "soc": "1066599",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP53",
                        "description": "B&E 1214.95_V500S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11212212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP20",
                        "description": "BizEnt1090_Buffet 6AM-6PM,SAT&SUN,3WEG(FUP3/384)",
                        "soc": "569008",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1090.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP34",
                        "description": "Biz&Ent 500_SplitBill_CUGF&F,500MinSMS75Data300MB",
                        "soc": "569138",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-12",
                            "end": "2017-01-01"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP24",
                        "description": "RETEN_iSmart899 More Net(300min+3G_5GB ULTD)",
                        "soc": "10540311",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-02",
                            "end": "2017-01-06"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP27",
                        "description": "4G+ Super Net 699, Net 5 GB Unltd",
                        "soc": "12438616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-12",
                            "end": "2250-08-08"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP20",
                        "description": "Biz& Ent_Smart_842.12V1000S100_HS_Allnet0.99bt/min",
                        "soc": "10023510",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-27",
                            "end": "2017-01-01"
                        },
                        "rc": 842.12,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP42",
                        "description": "Biz&Ent_iphone1200V500S50UnWEG5g384_HS_0.99bt/min",
                        "soc": "120546",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-06",
                            "end": "2017-01-01"
                        },
                        "rc": 1200.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP45",
                        "description": "V0S0G1_iNet TOL Migrate 599 Net 16GB UNLTD",
                        "soc": "12648316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP43",
                        "description": "SPECIAL iSmartBuffet 699 AllNet7am-5pm Data500MB",
                        "soc": "11201512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP61",
                        "description": "RET iSmart Max 1099  Voice600min Net40GB UNLTD",
                        "soc": "12258213",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-27",
                            "end": "2250-08-08"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP92",
                        "description": "Buffet700-24hr,voice60min,Net 1.5GB Untld",
                        "soc": "12339517",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-03-31"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP95",
                        "description": "Super Smart Plus 499, Voice200min Net 4 GB Unltd",
                        "soc": "12374117",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-23",
                            "end": "2017-02-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP52",
                        "description": "4G+ Super Smart 899, Voice500min Net 12 GB Unltd",
                        "soc": "12314616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP52",
                        "description": "iSmart Plus499,V250m Net4GB, WiFi",
                        "soc": "1089609",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-06-09",
                            "end": "2016-10-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP61",
                        "description": "TLFV True MoveH 699B Data3G FU 2GB Wifi Unlimited",
                        "soc": "115297",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-27",
                            "end": "2099-09-30"
                        },
                        "rc": 544.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP56",
                        "description": "SME Smart 4G (S) 399_Voice250min,FUP4GB,Wi-Fi",
                        "soc": "11359712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP01",
                        "description": "B&E RC 409_Voice800min,50sms,10mms,FUP5GB,WiFi",
                        "soc": "12311717",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 409.0,
                        "service-level": "C"
                    }, {
                        "name": "GURL2P08",
                        "description": "SookX2 Anywhere with Box 799",
                        "soc": "115427",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-20",
                            "end": "2099-03-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP52",
                        "description": "B&E 1028.04_V450S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11212112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1028.04,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP98",
                        "description": "B&E RC 1699_Voice2000min,50sms,10mms,FUP5GB,WiFi",
                        "soc": "12311417",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 1699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP51",
                        "description": "B&E_Data FUP 7GB & WiFi",
                        "soc": "10998912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-06",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP72",
                        "description": "SME Platinum_Voice10,200min,FUP20GB,WiFi UNLTD",
                        "soc": "12273216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-14",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EDTSAP08",
                        "description": "V0S1G1_Biz Data SIM 50_15SMSData150MB_BarVoiceMMS",
                        "soc": "120366",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-13",
                            "end": "2017-01-01"
                        },
                        "rc": 50.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP09",
                        "description": "B&E RC 150_Data UNLTD 1GB & Wi-Fi UNLTD",
                        "soc": "1066659",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 150.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP81",
                        "description": "GOV 1942.99_V700S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12390616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1942.99,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP03",
                        "description": "TrueMove H 99bt call on-net 5am-5pm",
                        "soc": "91773",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIPHP63",
                        "description": "M579 Pay389 B.18m.,Voice250 M.,Data 3GB UNLTD",
                        "soc": "11303012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-24",
                            "end": "2019-01-03"
                        },
                        "rc": 389.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP46",
                        "description": "V0S0G1_iNet TOL Migrate 599 Net 16GB UNLTD",
                        "soc": "12648416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP09",
                        "description": "Ent Talk 1599 Buffet All net 8am-10pm",
                        "soc": "947578",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-08",
                            "end": "2017-01-01"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTAP06",
                        "description": "Biz & Ent Team Talk 750_750 Baht, 3WEG(FUP700MB)",
                        "soc": "117646",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP05",
                        "description": "TrueMove H 129 call on-net 5am-5pm",
                        "soc": "91783",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2017-01-06"
                        },
                        "rc": 129.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP18",
                        "description": "V0S0G1_Ent_ipad_1299_UnWEG5g128_HS_1.25bt/min",
                        "soc": "569068",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTAP07",
                        "description": "Biz & Ent Team Talk 1000_1000 Baht, 3WEG(FUP1GB)",
                        "soc": "117686",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP02",
                        "description": "TrueMove H free call on-net 1st min",
                        "soc": "91763",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 89.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP10",
                        "description": "B&E RC 250_Data UNLTD 2GB & Wi-Fi UNLTD",
                        "soc": "1066689",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP11",
                        "description": "B&E RC 350_Data UNLTD 3GB & Wi-Fi UNLTD",
                        "soc": "1066699",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP06",
                        "description": "B&E RC 649_Voice1800min,50sms,10mms,FUP7GB,WiFi",
                        "soc": "12312617",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP07",
                        "description": "TrueMove H 289 on-net ultd 24 hrs",
                        "soc": "91793",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 289.0,
                        "service-level": "C"
                    }, {
                        "name": "BSMRTP24",
                        "description": "Business Value Time 800 Get 800Bt,3WEG (FUP500MB)",
                        "soc": "117606",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 800.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP23",
                        "description": "4G+ Taxi SharePlan 499, NetUNLTD 4GB, WiFi UNLTD",
                        "soc": "12354916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-22",
                            "end": "2017-02-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP39",
                        "description": "RET iTalk399 Dis50% Allnet 200 min Onnet200 min",
                        "soc": "11421912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 200.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP51",
                        "description": "4G+ Super Smart 699, Voice350min Net 8 GB Unltd",
                        "soc": "12314516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP45",
                        "description": "SPECIAL iSmartBuffet1199 10pm-8pm Data 200MB",
                        "soc": "11203712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 1199.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP45",
                        "description": "SME Smart Net 599_Voice500min,DataFUP3GB,Wi-Fi",
                        "soc": "11058312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP94",
                        "description": "Super Smart Plus 399, Voice150min Net 3 GB Unltd",
                        "soc": "12374017",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-23",
                            "end": "2017-02-03"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP76",
                        "description": "GOV 1475.70_V500S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12389916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1475.7,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP59",
                        "description": "RET iSmart Max 699  Voice300min Net20GB UNLTD",
                        "soc": "12258013",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-27",
                            "end": "2250-08-08"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP51",
                        "description": "B&E 934.58_V450S30UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11212012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 934.58,
                        "service-level": "C"
                    }, {
                        "name": "EDOGAP03",
                        "description": "D_Ent_999_Unlimited DATA&WiFi+HS",
                        "soc": "117786",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP68",
                        "description": "iNet 899 WiEG ULTD (FU5GB)_KR",
                        "soc": "82133",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-24",
                            "end": "2116-05-16"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP28",
                        "description": "Biz & Ent Buffet 999_ Mon-Fri 6AM-9PM,SAT&SUN",
                        "soc": "110917",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-28",
                            "end": "2016-12-31"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP41",
                        "description": "Biz&Ent_iphone2100V1000S50UnWEG2g384_HS_0.75bt/min",
                        "soc": "120236",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-12-02",
                            "end": "2017-01-01"
                        },
                        "rc": 2100.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP10",
                        "description": "iTalk+ 699 VoiceAllNet950min, Net 500MB, FB12m.",
                        "soc": "11206912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP68",
                        "description": "Biz & Ent 1000,Data UNL5GB/128,WiFi",
                        "soc": "110947",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "CDATAP01",
                        "description": "Biz&Ent 1599 Bt_Data 10 GB Wifi Unlimited",
                        "soc": "120217",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-05-08",
                            "end": "2017-01-01"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVOCP31",
                        "description": "B&E RC 99 Get Voice(All-net) 100min",
                        "soc": "12652216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP24",
                        "description": "4G+ Super Net 699, Net 10 GB Unltd",
                        "soc": "12438316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-12",
                            "end": "2250-08-08"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP13",
                        "description": "B&E RC 650_Data UNLTD 7GB & Wi-Fi UNLTD",
                        "soc": "1066719",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP14",
                        "description": "SPECIAL iTalk+ 1399 Voice 2000 min. Net 1GB",
                        "soc": "11201412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 1399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP21",
                        "description": "B&E Data 1588.78_UnWEG10.0GB384Kbps_0.99bt/min",
                        "soc": "11091312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1588.78,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP22",
                        "description": "RETEN_iSmart1149 More Net(300min+3G_7GB ULTD)",
                        "soc": "10540111",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-02",
                            "end": "2017-01-06"
                        },
                        "rc": 1149.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP56",
                        "description": "4G+ Super Smart 1899, Voice2000min Net 20 GB Unltd",
                        "soc": "12315916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1899.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP16",
                        "description": "B&E_Data_900UnWEG12GB/384,0.99bt",
                        "soc": "1098949",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 900.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP30",
                        "description": "B&E 467.29_V250S20UnWEG3.0g384_HS_0.99bt/min",
                        "soc": "11085312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 467.29,
                        "service-level": "C"
                    }, {
                        "name": "NPTKAP09",
                        "description": "iTalk+ 499 VoiceAllNet650min, Net500MB",
                        "soc": "11205712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP28",
                        "description": "B&E 800_V500S100,UnWEG5GB/384,0.99bt",
                        "soc": "1098939",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 800.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP88",
                        "description": "SME Platinum_Voice7800min,FUP16GB,WiFi UNLTD",
                        "soc": "12267217",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP27",
                        "description": "B&E 900_V1000S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098929",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 900.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP12",
                        "description": "B&E RC 500_Data UNLTD 5GB & Wi-Fi UNLTD",
                        "soc": "1066709",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP54",
                        "description": "4G+ Super Smart 1299, Voice850min Net 20 GB Unltd",
                        "soc": "12314816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP38",
                        "description": "4G/3G iSmart999 Second Voice550min Net 5GB UNLTD",
                        "soc": "11264912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2025-07-02"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "IPHSMP27",
                        "description": "Biz_FreeSize1899,get300min,300sms,50mms,3GEW_UNLTD",
                        "soc": "572068",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-25",
                            "end": "2017-01-01"
                        },
                        "rc": 1899.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP13",
                        "description": "SPECIAL iTalk+ 899 Voice 1200 min Net 500MB",
                        "soc": "11201312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP05",
                        "description": "B&E RC 649_Voice1700min,50sms,10mms,FUP8GB,WiFi",
                        "soc": "12312517",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP34",
                        "description": "D_Fleet 89Bt_15MB_30SMS",
                        "soc": "947588",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 89.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP75",
                        "description": "GOV 1382.24_V400S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12389816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1382.24,
                        "service-level": "C"
                    }, {
                        "name": "ESSMAP07",
                        "description": "B&E RC 649_Voice2000min,50sms,10mms,FUP5GB,WiFi",
                        "soc": "12312717",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP08",
                        "description": "TrueMove H 299 25 satang all net",
                        "soc": "91803",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "GURL2P12",
                        "description": "SookX2 Anywhere with Box 399",
                        "soc": "10556011",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-16",
                            "end": "2099-03-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP58",
                        "description": "SME Smart 4G (M) 599_Voice500min,FUP6GB,Wi-Fi",
                        "soc": "11359912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP43",
                        "description": "Biz&Ent_Voice50 bt_ Onnet 0.70 bt Offnet 0.99bt.",
                        "soc": "126516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-04",
                            "end": "2017-01-01"
                        },
                        "rc": 50.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP45",
                        "description": "iTalk 299_Second, Voice All Net 299 min",
                        "soc": "1065329",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-01",
                            "end": "2017-03-06"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP22",
                        "description": "B&E Data 1775.70_UnWEG10.0GB384Kbps_0.99bt/min",
                        "soc": "11091412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1775.7,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP44",
                        "description": "V0S0G1_iNet TOL Migrate 399 Net 4GB UNLTD",
                        "soc": "12648216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2250-08-08"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP79",
                        "description": "GOV 1755.14_V600S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12390316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1755.14,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP40",
                        "description": "B&E 1401.87_V600S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11089312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1401.87,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP71",
                        "description": "Biz&Ent_Data 99 Bt Unlimited Speed 384 Kbps",
                        "soc": "116327",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-28",
                            "end": "2017-01-01"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "NPTKAP07",
                        "description": "iTalk+ 199, Voice All Net 250 min",
                        "soc": "11200212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP46",
                        "description": "SPECIAL iSmartBuffet1399 10pm-8pm Data 500MB",
                        "soc": "11204712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 1399.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP55",
                        "description": "4G+ Super Smart 1499, Voice1200min Net 15 GB Unltd",
                        "soc": "12315816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP80",
                        "description": "GOV 1849.53_V700S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12390416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1849.53,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP45",
                        "description": "Biz&Ent_Iphone3271.33BtV2000S50M20UnWEG5g128",
                        "soc": "116267",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-28",
                            "end": "2017-01-01"
                        },
                        "rc": 3271.33,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP23",
                        "description": "RETEN_iSmart899More Voice(900min+3G_1.5GB UTLD)",
                        "soc": "10540211",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-02",
                            "end": "2017-01-06"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP71",
                        "description": "SME Smart 1099_Voice 650min,FUP8GB, Wi-Fi UNLTD",
                        "soc": "12273116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-14",
                            "end": "2017-12-31"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP46",
                        "description": "SME Smart Net 799_Voice700min,DataFUP4GB,Wi-Fi",
                        "soc": "11058612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "SPNETP04",
                        "description": "iNet 4G Extra Net350,Net1GB UNLTD",
                        "soc": "10474911",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-11-06",
                            "end": "2025-07-02"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP64",
                        "description": "4G iSmart Extra 199,V75m Net750MB UNLTD, WiFi10hr",
                        "soc": "11151512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-09-22",
                            "end": "2018-07-31"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP74",
                        "description": "GOV 1287.85_V400S50UnWEG20G384_HS_0.99bt/min",
                        "soc": "12389716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1287.85,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP07",
                        "description": "B&E RC 600_Allnet6AM-6PM,V200min,DataFUP1.5GB,WiFi",
                        "soc": "1068329",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-02",
                            "end": "2016-12-31"
                        },
                        "rc": 600.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP25",
                        "description": "4G/3G iNet 299 Net 1.5GB UNLTD",
                        "soc": "11169912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP28",
                        "description": "Biz&Ent_Smart700BtV800S50M20UnWEG2g128",
                        "soc": "116287",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-28",
                            "end": "2017-01-01"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP32",
                        "description": "Business Talk 300_V350Data100MB",
                        "soc": "117896",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP95",
                        "description": "B&E RC 1799_Voice2000min,50sms,10mms,FUP7GB,WiFi",
                        "soc": "12310517",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-09",
                            "end": "2017-12-31"
                        },
                        "rc": 1799.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP53",
                        "description": "4G+ Super Smart 1099, Voice650min Net 16 GB Unltd",
                        "soc": "12314716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP05",
                        "description": "Ent Talk 899 Buffet All net 6am-6pm",
                        "soc": "265188",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-07",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP14",
                        "description": "Ent_Smart_799_UnWEG(FUP3GB,384kb)",
                        "soc": "89483",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP09",
                        "description": "B&E RC1,000_Allnet6AM-6PM,V500min,Data FUP5GB,WiFi",
                        "soc": "1068359",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-02",
                            "end": "2016-12-31"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP03",
                        "description": "Biz & Ent 659_Split Bill_Buffet 7am-8pm & 75 SMS",
                        "soc": "265168",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-12",
                            "end": "2017-01-01"
                        },
                        "rc": 659.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP40",
                        "description": "SME Smart Talk 290_Voice400min,Data300MB",
                        "soc": "11050712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 290.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP04",
                        "description": "B&E 650_AllNet12PM-7PM,V200min70SMS10MMS,FUP 2GB",
                        "soc": "1067669",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-31",
                            "end": "2016-12-31"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP03",
                        "description": "B&E 450_AllNet12PM-7PM,V200min70SMS10MMS,FUP1.5GB",
                        "soc": "1067659",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-31",
                            "end": "2016-12-31"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP53",
                        "description": "4G+ Super Smart 1099, Voice650min Net 8 GB Unltd",
                        "soc": "12315616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP93",
                        "description": "SME Smart 1299_Voice850min,FUP10GB,Wi-Fi UNLTD",
                        "soc": "12268217",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP39",
                        "description": "B&E 1308.41_V550S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11089212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1308.41,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP26",
                        "description": "Biz & Ent Buffet 799_ Mon-Fri 8AM-8PM,SAT&SUN",
                        "soc": "265208",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-25",
                            "end": "2016-12-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP47",
                        "description": "4G+ Super Smart 299, Voice100min Net 750 MB Unltd",
                        "soc": "12314116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP05",
                        "description": "GSE_0_UnWEG(FUP3GB,384kb)",
                        "soc": "1069939",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP44",
                        "description": "Biz&Ent_Iphone1495.33BtV1000S50M20UnWEG2g128",
                        "soc": "116067",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-28",
                            "end": "2017-01-01"
                        },
                        "rc": 1495.33,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP04",
                        "description": "GSE_0_UnWEG(FUP2GB,384kb)",
                        "soc": "1069929",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP64",
                        "description": "Biz&Ent_1255_V300_CUG&F&F_UnWEG,4g384",
                        "soc": "11363312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-25",
                            "end": "2017-12-31"
                        },
                        "rc": 1255.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP05",
                        "description": "B&E 750_AllNet12PM-7PM,V200min70SMS10MMS,FUP 3GB",
                        "soc": "1067729",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-31",
                            "end": "2016-12-31"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP01",
                        "description": "B&E 242.06_V150,UnWEG2GB/384,0.99bt",
                        "soc": "1064249",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP03",
                        "description": "GSE_0_UnWEG(FUP1GB,384kb)",
                        "soc": "1069919",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP08",
                        "description": "B&E RC 800_Allnet6AM-6PM,V400min,Data FUP3GB,WiFi",
                        "soc": "1068339",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-02",
                            "end": "2016-12-31"
                        },
                        "rc": 800.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP22",
                        "description": "B&E 3600_V1000S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098509",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 3600.0,
                        "service-level": "C"
                    }, {
                        "name": "CERM1P26",
                        "description": "True Move 299 - New Sud Khum 25 satang, 24 hrs.",
                        "soc": "126586",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2009-04-01",
                            "end": "2016-06-30"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP62",
                        "description": "Biz&Ent_255_V300_CUG&F&F_UnWEG,4g384",
                        "soc": "11363112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-25",
                            "end": "2017-12-31"
                        },
                        "rc": 255.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP87",
                        "description": "SME Smart 899_Voice500min,FUP6GB,Wi-Fi UNLTD",
                        "soc": "12267117",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP14",
                        "description": "iSmart299, V120m,net750MB UNL FU128Kbps CUG24h TVS",
                        "soc": "10583611",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-26",
                            "end": "2018-12-05"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP06",
                        "description": "Biz&Ent Buffet450_ Mon-Fri 6AM-6PM&24hrs.Sat,Sun",
                        "soc": "265198",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-24",
                            "end": "2017-01-01"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP04",
                        "description": "Ent Talk 750 Buffet All net 8am-10pm",
                        "soc": "265178",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-29",
                            "end": "2017-01-01"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP69",
                        "description": "Biz&Ent_Smart_399V1600S50M30UnWEG5g384_1.25bt",
                        "soc": "109277",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-17",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESRCAP05",
                        "description": "Biz & Ent SMS 2 way 22,500Bt get 30,000 SMS",
                        "soc": "124227",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-07",
                            "end": "2017-01-01"
                        },
                        "rc": 22500.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP48",
                        "description": "4G+ Super Smart 399, Voice150min Net 3 GB Unltd",
                        "soc": "12314216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP06",
                        "description": "B&E RC 400_Allnet 6AM-6PM,Data FUP500MB,WiFi",
                        "soc": "1068259",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-02",
                            "end": "2016-12-31"
                        },
                        "rc": 400.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP90",
                        "description": "SME Smart 1099_Voice650min,FUP8GB,Wi-Fi UNLTD",
                        "soc": "12268117",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "EDTFAP03",
                        "description": "Biz&Ent Net Sim 999_3WEG Unlimited_Fair7/128",
                        "soc": "265298",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-09-27",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP59",
                        "description": "B&E450_Allnet 24:00-19:00,V200S70M10UnWEG,1.5GB",
                        "soc": "12421916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-11",
                            "end": "2017-12-31"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "TESTTVSP02",
                        "description": "Subscription Fee of GoldHD P1 (6M)",
                        "soc": "11033112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-01",
                            "end": "2250-08-08"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "ESRCAP06",
                        "description": "Biz & Ent SMS 2 way 25,000Bt get 50,000 SMS",
                        "soc": "124237",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-07",
                            "end": "2017-01-01"
                        },
                        "rc": 25000.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP08",
                        "description": "711 Social iSmart 199, v-allnet100min net500MB",
                        "soc": "10485910",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-06",
                            "end": "2017-03-06"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP59",
                        "description": "TLFV True MoveH 499B, Data3G 1GB, Wifi Unlimited",
                        "soc": "130876",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-13",
                            "end": "2099-09-30"
                        },
                        "rc": 344.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP67",
                        "description": "Biz & Ent Smart 655_V200Data UL5GBUnWiFi",
                        "soc": "124246",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-23",
                            "end": "2017-01-01"
                        },
                        "rc": 655.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP34",
                        "description": "B&E 841.12_V400S30UnWEG5.0g384_HS_0.99bt/min",
                        "soc": "11086012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 841.12,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP24",
                        "description": "Biz & Ent Buffet 799_ Mon-Fri 6AM-6PM,SAT&SUN",
                        "soc": "988918",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-25",
                            "end": "2016-12-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "CUNL4P04",
                        "description": "POS_True Unlimited 1,499 for CP 6am-7pm, Bonus 300",
                        "soc": "569798",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2008-03-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP17",
                        "description": "V0S0G1_Ent_ipad_1099_UnWEG5g128_HS_1.25bt/min",
                        "soc": "266348",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP86",
                        "description": "SME Platinum_Voice5400min,FUP12GB,WiFi UNLTD",
                        "soc": "12267017",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVOCP32",
                        "description": "B&E RC 199 Get Voice(All-net) 200min",
                        "soc": "12652916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP23",
                        "description": "B&E 2050_V1250S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098499",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 2050.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP28",
                        "description": "Ent_Data_300_Data Unlimited_1.25bt/min(Fair 1GB)",
                        "soc": "265238",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-24",
                            "end": "2017-01-01"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP21",
                        "description": "V0S0G1 Ent_ipad_2607.48_UnWEG5g384_HS_1.25bt/min",
                        "soc": "266318",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-17",
                            "end": "2017-01-01"
                        },
                        "rc": 2607.48,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP57",
                        "description": "Biz & Ent_Data 70Bt Get 80MB_1.25 Baht/min",
                        "soc": "265268",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-13",
                            "end": "2017-01-01"
                        },
                        "rc": 70.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP66",
                        "description": "Biz & Ent Smart 455_V200Data UL4GBUnWiFi",
                        "soc": "124206",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-23",
                            "end": "2017-01-01"
                        },
                        "rc": 455.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP71",
                        "description": "Biz&Ent_Smart_500V800S50M30UnWEG3g384_1.25bt",
                        "soc": "109287",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-17",
                            "end": "2017-01-01"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP38",
                        "description": "B&E 1214.95_V500S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11089112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1214.95,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP70",
                        "description": "Biz&Ent_Smart_400V800S50M30_1.25bt",
                        "soc": "109267",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-17",
                            "end": "2017-01-01"
                        },
                        "rc": 400.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP63",
                        "description": "Biz&Ent_455_V300_CUG&F&F_UnWEG,4g384",
                        "soc": "11363212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-25",
                            "end": "2017-12-31"
                        },
                        "rc": 455.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP25",
                        "description": "B&E 1000_V700S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098879",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP26",
                        "description": "B&E 900_V700S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098889",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 900.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP54",
                        "description": "4G+ Super Smart 1299, Voice850min Net 10 GB Unltd",
                        "soc": "12315716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP20",
                        "description": "Ent_Smart_0_UnWEG(FUP3GB,384kb)",
                        "soc": "89493",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP07",
                        "description": "Biz&Ent_0Bt Buffet-OnNet 24hrsV3000S200M100UnWEG",
                        "soc": "265228",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-19",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP25",
                        "description": "Biz & Ent Buffet 799_ Mon-Fri 8AM-6PM,SAT&SUN",
                        "soc": "988928",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-25",
                            "end": "2016-12-31"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP47",
                        "description": "B&E Temporary PP_Allnet24hr150sms100mmsFUP15GBWiFi",
                        "soc": "11399112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-12-24",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP49",
                        "description": "4G+ Super Smart 499, Voice200min Net 4 GB Unltd",
                        "soc": "12314316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP55",
                        "description": "B&E 1495.33_V650S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11212412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1495.33,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP15",
                        "description": "Net SIM 650 Data 3GB WiFi Unlimited",
                        "soc": "89553",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-15",
                            "end": "2115-06-06"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP02",
                        "description": "B&E 450_AllNet12PM-7PM,V200min70SMS10MMS,FUP500MB",
                        "soc": "1067459",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-31",
                            "end": "2016-12-31"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP24",
                        "description": "B&E 1850_V1250S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098839",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 1850.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP39",
                        "description": "Lock Device: 4G/3G iNet Plus 199 Net 8GB UNLTD",
                        "soc": "12256013",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-23",
                            "end": "2250-08-08"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDPVP02",
                        "description": "Biz & Ent RC75_Data50MB_WIFIUnlimited",
                        "soc": "10589111",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-25",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "CDTSAP01",
                        "description": "V0S0G1_Biz&Ent 925bt_UnWEG4g384",
                        "soc": "117367",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-11",
                            "end": "2017-01-01"
                        },
                        "rc": 925.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP26",
                        "description": "V0S0G1_4G Shared WiFi 499, Net 5GB UNLTD",
                        "soc": "11237112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2115-12-31"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP96",
                        "description": "Super Smart Plus 699, Voice350min Net 8 GB Unltd",
                        "soc": "12374217",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-23",
                            "end": "2017-02-03"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP56",
                        "description": "IQ Pack 1100,Pay550B.18m V200 Mins, 3G/4GUnlt 3GB",
                        "soc": "1091819",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-06-16",
                            "end": "2020-06-30"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP51",
                        "description": "4G+ Super Smart 699, Voice350min Net 4 GB Unltd",
                        "soc": "12315416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-02-03"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP06",
                        "description": "4G iNet 699, 4G Net 6 GB, WiFi UNLTD",
                        "soc": "10649511",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESBFAP11",
                        "description": "B&E 450_AllNet12PM-7PM,V200min70SMS10MMS,Data1.5GB",
                        "soc": "1070989",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-31",
                            "end": "2016-12-31"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP02",
                        "description": "Multi_iSmart 699 m.",
                        "soc": "108056",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-10-22",
                            "end": "2250-08-08"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP91",
                        "description": "SME Platinum_Voice10200min,FUP20GB,WiFi UNLTD",
                        "soc": "12268417",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP42",
                        "description": "SME Smart Talk 790_Voice1500min,DataFUP500MB,WiFi",
                        "soc": "11056112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 790.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP56",
                        "description": "B&E 1682.24_V750S50UnWEG15.0g384_HS_0.99bt/min",
                        "soc": "11212512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1682.24,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP52",
                        "description": "4G+ Super Smart 899, Voice500min Net 6 GB Unltd",
                        "soc": "12315516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP50",
                        "description": "B&E 747.66_V400S30UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11211912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 747.66,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP05",
                        "description": "4GiNet499,4GNetUNL 3GB,TVS1GB,WiFiUNLT, Free2GB 6m",
                        "soc": "10648411",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP27",
                        "description": "V0S0G1_4G Shared WiFi 899, Net 14GB UNLTD",
                        "soc": "11237212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-10",
                            "end": "2115-12-31"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP12",
                        "description": "B&E RC 250_V400min,70SMS,10MMS,UNLTD1.5GB,WiFi",
                        "soc": "1066269",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-24",
                            "end": "2016-12-31"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "CYBERP25",
                        "description": "Biz Data Pack399 Get 3EG UNLTED,Wi-Fi 5hrs,100SMS",
                        "soc": "265098",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-07-17",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP06",
                        "description": "4GiNet699,4GNetUNLT 6GB,TVS1GB,WiFiUNLT, Free3GB6m",
                        "soc": "10648811",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP92",
                        "description": "SME Smart 1299_Voice850min,FUP20GB,Wi-Fi UNLTD",
                        "soc": "12268317",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-31",
                            "end": "2017-12-31"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP83",
                        "description": "iNet 899, net5GB UNLTD WiFi UNLTD",
                        "soc": "102115",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-08",
                            "end": "2116-05-16"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP50",
                        "description": "4G+ Super Smart 599, Voice300min Net 5 GB Unltd",
                        "soc": "12314416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP97",
                        "description": "Super Smart Plus 899, Voice500min Net 12 GB Unltd",
                        "soc": "12374317",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-06-23",
                            "end": "2017-02-03"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP07",
                        "description": "4G iNet 899, 4G Net 10 GB, WiFi UNLTD",
                        "soc": "10650211",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P08",
                        "description": "TMH-Net(i)899 Data and wifi ULTD (Fair Usage5GB)",
                        "soc": "64142",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-15",
                            "end": "2116-05-16"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP61",
                        "description": "4G+ Super Max 899,400min,4G|3G 24GB,4G 8GB",
                        "soc": "12334016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "UR22RP03",
                        "description": "TLFV Buffet On-net 300Bt 24 hrs",
                        "soc": "51882",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2099-06-30"
                        },
                        "rc": 145.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP19",
                        "description": "B&E 5600_V3100S100,UnWEG10GB/384,0.99bt",
                        "soc": "10992912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 5600.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP02",
                        "description": "B&E 419.63_UnWEG6GB/384,0.99bt",
                        "soc": "1064679",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "CPBF4P01",
                        "description": "P_Corp 300B bundle 250B TMV unlimited working hour",
                        "soc": "261828",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2010-02-01",
                            "end": "2017-12-31"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP52",
                        "description": "Biz & Ent_Pack Pay Per Use",
                        "soc": "11191712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2016-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP01",
                        "description": "B&E 372.90_UnWEG5GB/384,0.99bt",
                        "soc": "1064509",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP06",
                        "description": "B&E 279.44_V200,UnWEG2GB/384,0.99bt (Next)",
                        "soc": "1064649",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 279.44,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP20",
                        "description": "RETEN_iSmart 1299 (1100min+3G_5GB ULTD)",
                        "soc": "10538611",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-02",
                            "end": "2017-01-06"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP05",
                        "description": "B&E 279.44_V200,UnWEG2GB/384,0.99bt",
                        "soc": "1064639",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 279.44,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP22",
                        "description": "IOT Share Plan 50, Net 2GB",
                        "soc": "12335116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 50.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P22",
                        "description": "Device Net(i) 899 net5GB UNLTD WiFi UNLTD",
                        "soc": "109785",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2116-05-16"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP49",
                        "description": "4G+ Super Smart 499, Voice200min Net 2 GB Unltd",
                        "soc": "12315216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP01",
                        "description": "BizFreeToTalk299bt,get299min,All1bt",
                        "soc": "109786",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-07",
                            "end": "2017-01-01"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP39",
                        "description": "SME Smart Talk 190_Voice250min,Data300MB",
                        "soc": "11050312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 190.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP08",
                        "description": "B&E 419.63_V350,UnWEG4GB/384,0.99bt (Next)",
                        "soc": "1064669",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP68",
                        "description": "SPECIAL 4G/3G iSmart499 Voice250min Net1.5GB UNLTD",
                        "soc": "11205012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP07",
                        "description": "B&E 419.63_V350,UnWEG4GB/384,0.99bt",
                        "soc": "1064659",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP69",
                        "description": "SME Smart 899_Voice 450min,FUP6GB, Wi-Fi UNLTD",
                        "soc": "12272916",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-14",
                            "end": "2017-12-31"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "NPTKAP11",
                        "description": "iTalk+ 999 VoiceAllNet1400m, Net 500MB",
                        "soc": "11207212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP39",
                        "description": "GOV Data 1287.85_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12387116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1287.85,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP07",
                        "description": "4GiNet899,4GNetUNL 10GB,TVS1GB,WiFiUNLT, Free4GB6m",
                        "soc": "10649611",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP11",
                        "description": "iTalk+ 999 VoiceAllNet1400m, Net 500MB, FB12m.",
                        "soc": "11207112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP77",
                        "description": "Biz&Ent_746.73V1200UnWEG500MB64_0.99bt",
                        "soc": "10055910",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 746.73,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP31",
                        "description": "B&E Data 1950 UnWEG20GB/384,0.99bt",
                        "soc": "11427412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-12",
                            "end": "2017-12-31"
                        },
                        "rc": 1950.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP23",
                        "description": "Biz&Ent 700_CUG,V150min,50SMS,Data UNL2GB/128,WiFi",
                        "soc": "109677",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP44",
                        "description": "SME Smart Net 399_Voice250min,DataFUP2GB,Wi-Fi",
                        "soc": "11012012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-25",
                            "end": "2016-12-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "BUFFTP66",
                        "description": "250 buffet on-net 5AM - 5PM",
                        "soc": "11250312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2250-08-08"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP92",
                        "description": "Device iNet 899 net5GB UNLTD WiFi UNLTD",
                        "soc": "109665",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2116-01-30"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP38",
                        "description": "GOV Data 1195.33_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12387016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1195.33,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP08",
                        "description": "4G iNet 1099, 4G Net 14GB, WiFi UNLTD",
                        "soc": "10650111",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP40",
                        "description": "GOV Data 1382.24_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12387216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1382.24,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP50",
                        "description": "4G+ Super Smart 599, Voice300min Net 2.5 GB Unltd",
                        "soc": "12315316",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP04",
                        "description": "B&E 372.90_V350,UnWEG3GB/384,0.99bt (Next)",
                        "soc": "1064499",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "ESVSMP68",
                        "description": "SME Platinum_Voice5,400min,FUP12GB,WiFi UNLTD",
                        "soc": "12271816",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-14",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP90",
                        "description": "Device iNet 599 net2GB UNLTD WiFi UNLTD",
                        "soc": "109625",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2116-01-30"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFOAP06",
                        "description": "Biz & Ent RC 150 Get Buffet On-net 24 hrs.",
                        "soc": "261938",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-04",
                            "end": "2017-01-01"
                        },
                        "rc": 150.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIPHP62",
                        "description": "S399 Pay339 B.18m.,Voice100 m.,Data 400 MB Limited",
                        "soc": "11302712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-24",
                            "end": "2019-01-03"
                        },
                        "rc": 339.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP25",
                        "description": "Ent_Voice_1500_v1500Bt On0.65 Off1.10bt.",
                        "soc": "130416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-23",
                            "end": "2017-01-01"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP69",
                        "description": "SPECIAL 4G/3G iSmart599 Voice300min Net 2GB UNLTD",
                        "soc": "11205212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP22",
                        "description": "Ent_1682.42_ V800S50 Unlimited Data & Wifi",
                        "soc": "569928",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-15",
                            "end": "2017-01-01"
                        },
                        "rc": 1682.24,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP16",
                        "description": "MNP Retention 500,voice550min net2GB ULTD _RET",
                        "soc": "108456",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-01-06"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP65",
                        "description": "Biz & Ent Smart 255_V200Data UL3GBUnWiFi",
                        "soc": "124166",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-01-23",
                            "end": "2017-01-01"
                        },
                        "rc": 255.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP15",
                        "description": "MNP Retention 350,voice350min net1GB ULTD_RET",
                        "soc": "108446",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-01-06"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP21",
                        "description": "B&E 3800_V1250S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098489",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 3800.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP05",
                        "description": "iNet 699, net3GB UNLTD WiFi UNLTD",
                        "soc": "109537",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2116-05-16"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP19",
                        "description": "RETEN_iSmart 1549 (1400min+3G_5GB ULTD)",
                        "soc": "10537311",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-12-02",
                            "end": "2017-01-06"
                        },
                        "rc": 1549.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RNEP01",
                        "description": "Net SIM TI 1000 Bt, WEG unlimited",
                        "soc": "89144",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-06-05",
                            "end": "2016-06-30"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "UR22RP02",
                        "description": "TLFV 299 get200mins, 1 bt All-Net",
                        "soc": "51682",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2099-06-30"
                        },
                        "rc": 144.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP55",
                        "description": "TLFV High ARPU 559 baht /mth All net work",
                        "soc": "79062",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-04-25",
                            "end": "2099-06-30"
                        },
                        "rc": 279.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP26",
                        "description": "Ent_Iphone_1495.32_V650S50UnWEG,2g128_HS_1.25Bt",
                        "soc": "569938",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-05",
                            "end": "2017-01-01"
                        },
                        "rc": 1495.32,
                        "service-level": "C"
                    }, {
                        "name": "NPTKAP10",
                        "description": "iTalk+ 699 VoiceAllNet950min, Net 500MB",
                        "soc": "11207012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP42",
                        "description": "GOV Data 1569.16_UnWEG25GB384Kbps_0.99bt/min",
                        "soc": "12388416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 1569.16,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP38",
                        "description": "Super Save 159_Biz & Ent Get V200Min,20SMS,30MB",
                        "soc": "119036",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 159.0,
                        "service-level": "C"
                    }, {
                        "name": "BUNG1P41",
                        "description": "Business 3G+/EDGE/GPRS Unlimited, 799 Bt",
                        "soc": "568638",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-18",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP33",
                        "description": "4G Lite700 Dis50% 12mths,V100m,Net1.5GB, WiFi",
                        "soc": "1075059",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-26",
                            "end": "2017-03-06"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP02",
                        "description": "B&E 242.06_V150,UnWEG2GB/384,0.99bt (Next)",
                        "soc": "1064479",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "UR22RP01",
                        "description": "RetentionTLFV 179bt./mt.Call 120min",
                        "soc": "51612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2099-06-30"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RIPP05",
                        "description": "iPhone 699 WiFi/3G+/EDGE/GPRS unlimited",
                        "soc": "89044",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-08-14",
                            "end": "2016-06-30"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP56",
                        "description": "4G+ Super Smart 1899, Voice2000min Net 30 GB Unltd",
                        "soc": "12315016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1899.0,
                        "service-level": "C"
                    }, {
                        "name": "NPTKAP12",
                        "description": "iTalk+ 1299 VoiceAllNet1900m, Net500MB",
                        "soc": "11207412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP03",
                        "description": "B&E 372.90_V350,UnWEG3GB/384,0.99bt",
                        "soc": "1064489",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-17",
                            "end": "2016-12-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "NE2STP10",
                        "description": "Net SIM (T) 150  Data 30 hrs. (Speed 384 Kbps.)",
                        "soc": "49152",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-04-05",
                            "end": "2116-05-16"
                        },
                        "rc": 150.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP27",
                        "description": "Ent_Iphone_1682.24_V750S50UnWEG,2g128_HS_1.25Bt",
                        "soc": "569948",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-05",
                            "end": "2017-01-01"
                        },
                        "rc": 1682.24,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP20",
                        "description": "B&E 5600_V3600S100,UnWEG10GB/384,0.99bt",
                        "soc": "1098479",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-16",
                            "end": "2016-12-31"
                        },
                        "rc": 5600.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP14",
                        "description": "MNP Retention 250,voice250min net500MB ULTD_RET",
                        "soc": "108436",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-01-06"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "NPSMAP48",
                        "description": "4G+ Super Smart 399, Voice150min Net 1 GB Unltd",
                        "soc": "12315116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RNEP02",
                        "description": "NetSIM TI 600Bt,EG 1.5GB, WiFi ultd",
                        "soc": "89164",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-06-05",
                            "end": "2016-06-30"
                        },
                        "rc": 600.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP88",
                        "description": "Biz&Ent RC 299_Data UNLTD 1GB",
                        "soc": "10422110",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-03",
                            "end": "2017-01-01"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP35",
                        "description": "True Life Free View 350 get 700 bt,over 2 Bt",
                        "soc": "79152",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-25",
                            "end": "2099-06-30"
                        },
                        "rc": 195.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP07",
                        "description": "GSE_0_UnWEG(FUP5GB,384kb)",
                        "soc": "1069959",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP65",
                        "description": "GOV 447.66_V200S20UnWEG5G384_HS_0.99bt/min",
                        "soc": "12387416",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-31",
                            "end": "2115-12-31"
                        },
                        "rc": 447.66,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP10",
                        "description": "GSE_0_UnWEG(FUP8GB,384kb)",
                        "soc": "1069989",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP45",
                        "description": "B&E 1869.16_V800S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11095412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1869.16,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP04",
                        "description": "iNet 399, net1.5GB UNLTD WiFi UNLTD",
                        "soc": "109477",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2116-05-16"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP09",
                        "description": "GSE_0_UnWEG(FUP7GB,384kb)",
                        "soc": "1069979",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP64",
                        "description": "Biz&Ent_DATA_559.81_UnWEG3g384",
                        "soc": "569878",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 559.81,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP36",
                        "description": "TLFV Dual LNBF 349 baht/mth All network",
                        "soc": "79162",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-25",
                            "end": "2099-06-30"
                        },
                        "rc": 164.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP46",
                        "description": "TMH 99 Voice On-Net Net 100MB",
                        "soc": "12508116",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-09",
                            "end": "2017-02-03"
                        },
                        "rc": 99.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP10",
                        "description": "KR-iNet 299, net750MB UNLTD WiFi UNLTD",
                        "soc": "119187",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-18",
                            "end": "2116-05-16"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP78",
                        "description": "KR-iNet 299, net500MB UNLTD WiFi UNLTD",
                        "soc": "99635",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-24",
                            "end": "2116-01-30"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP23",
                        "description": "4G iNet499,4G UNLT 6GB,WiFi UNLT, Free Social 12Mo",
                        "soc": "1099409",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-23",
                            "end": "2020-08-31"
                        },
                        "rc": 499.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP33",
                        "description": "True Life Free View 200 get 200 baht,over 1.50 Bt",
                        "soc": "79132",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 120.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RNEP03",
                        "description": "Net SIM TI 300 Bt, EG 500MB",
                        "soc": "89244",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-06-05",
                            "end": "2016-06-30"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP18",
                        "description": "4G+ SharePlan 1099, NetUNLTD16GB, WiFiUNLTD",
                        "soc": "12321516",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP52",
                        "description": "Biz & Ent Data 399_Data FUP 1/64,WiFi@TMVH5hrs.",
                        "soc": "569868",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-10",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "PLTKAP12",
                        "description": "iTalk+ 1299 VoiceAllNet1900m, Net500MB, FB12m",
                        "soc": "11207312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP11",
                        "description": "GSE_0_UnWEG(FUP9GB,384kb)",
                        "soc": "1069999",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP31",
                        "description": "True Life Free View 800 get 900 min,over 1.25 Bt",
                        "soc": "79112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 645.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP37",
                        "description": "TLFV Triple LNBF 399 baht/mth All network",
                        "soc": "79172",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-25",
                            "end": "2099-06-30"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP34",
                        "description": "True Life Free View 1300 get 1500 min,over 1.25 Bt",
                        "soc": "79142",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-25",
                            "end": "2099-06-30"
                        },
                        "rc": 1145.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP03",
                        "description": "iNet 299, net750MB UNLTD WiFi UNLTD",
                        "soc": "109437",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2116-05-16"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "UR2TRP32",
                        "description": "True Life Free View 1000 get 1200 min,over 1.25 Bt",
                        "soc": "79122",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-11-24",
                            "end": "2099-06-30"
                        },
                        "rc": 845.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP08",
                        "description": "GSE_0_UnWEG(FUP6GB,384kb)",
                        "soc": "1069969",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP81",
                        "description": "data 550bt free call 300 min data 16GB",
                        "soc": "11940912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-16",
                            "end": "2250-08-08"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP76",
                        "description": "Biz&Ent_559.81V900UnWEG500MB64_0.99bt",
                        "soc": "10055510",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 559.81,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP27",
                        "description": "B&E Data 1028.04_UnWEG15.0GB384Kbps_0.99bt/min",
                        "soc": "11215012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-13",
                            "end": "2115-12-31"
                        },
                        "rc": 1028.04,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP37",
                        "description": "3G iSmart 399,V150m,Net750MB,WiFi,FreeNet1.5GB12m.",
                        "soc": "1076399",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-07",
                            "end": "2017-07-06"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP42",
                        "description": "B&E 1588.78_V650S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11094112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1588.78,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP30",
                        "description": "4G/3G iNet 550 Net 3GB UNLTD",
                        "soc": "11261912",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-11-19",
                            "end": "2025-07-02"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP22",
                        "description": "Ent_Smart_0_UnWEG(FUP7GB,384kb)",
                        "soc": "262668",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP77",
                        "description": "Biz&Ent_Data_242.06UnWEG1g256_0.99bt",
                        "soc": "10056410",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 242.06,
                        "service-level": "C"
                    }, {
                        "name": "STSMSP01",
                        "description": "SMS Package",
                        "soc": "102596",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2005-12-01",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP18",
                        "description": "Ent_Smart_0_UnWEG(FUP1GB,128kb)",
                        "soc": "262658",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP14",
                        "description": "Biz & Ent 450 Smart Buffet OnNet 6am-6pm",
                        "soc": "105846",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-23",
                            "end": "2017-01-01"
                        },
                        "rc": 450.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP41",
                        "description": "B&E 1495.33_V650S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11093312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1495.33,
                        "service-level": "C"
                    }, {
                        "name": "BUSTBP06",
                        "description": "Biz_Talk 888, get 888Bt",
                        "soc": "264918",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-21",
                            "end": "2017-01-01"
                        },
                        "rc": 888.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP44",
                        "description": "B&E 1775.70_V750S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11095212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1775.7,
                        "service-level": "C"
                    }, {
                        "name": "SPNETP06",
                        "description": "iNet 4G Extra Net750 Net UNLTD 5GB",
                        "soc": "10476011",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-11-06",
                            "end": "2025-07-02"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP62",
                        "description": "4G+Super Max 1299,600min,4G|3G 40GB,4G 12GB",
                        "soc": "12334216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "NETFPP19",
                        "description": "4G+ SharePlan 1299, NetUNLTD20GB, WiFiUNLTD",
                        "soc": "12321716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1299.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP89",
                        "description": "Biz & Ent RC 49_Wi-Fi Unlimited",
                        "soc": "10443510",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-03",
                            "end": "2017-01-01"
                        },
                        "rc": 49.0,
                        "service-level": "C"
                    }, {
                        "name": "BUNG1P36",
                        "description": "Biz Net Sim RC 799_3WEG Unlimited",
                        "soc": "262958",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-04-24",
                            "end": "2017-01-01"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP33",
                        "description": "Biz&Ent 1599_SplitBill_CUGF&F,400MinSMS75Data&WiFi",
                        "soc": "265498",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-12",
                            "end": "2017-01-01"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP88",
                        "description": "GOV 279.44_V100,UnWEG3GB/384,0.99bt",
                        "soc": "12486016",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-04-21",
                            "end": "2018-01-31"
                        },
                        "rc": 279.44,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP52",
                        "description": "RET iSmart299 Dis50% Voice100min Net1.5GB UNLTD",
                        "soc": "11423412",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2018-01-07"
                        },
                        "rc": 150.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP39",
                        "description": "3G iSmart 799,V450m,Net2.5GB,WiFi,FreeNet5GB12m.",
                        "soc": "1076479",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-07",
                            "end": "2017-07-06"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP31",
                        "description": "D_Fleet 119Bt_30MB",
                        "soc": "996318",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 119.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP35",
                        "description": "4G Extra1500 Dis50% 12mths,V300m,Net5GB,WiFi",
                        "soc": "1075479",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-26",
                            "end": "2017-03-06"
                        },
                        "rc": 750.0,
                        "service-level": "C"
                    }, {
                        "name": "SPNETP05",
                        "description": "iNet 4G Extra Net550 Net UNLTD 3GB",
                        "soc": "10475011",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-11-06",
                            "end": "2025-07-02"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP25",
                        "description": "4G/3G iNet 299 Net 750MB UNLTD",
                        "soc": "11170512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTPP29",
                        "description": "Biz_Smartphone299,get200mins,200MB,Wi-Fi15hrs.",
                        "soc": "97183",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-21",
                            "end": "2017-01-01"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "BBSMEP25",
                        "description": "Biz BB-BIS899,WEG Unlimited,24hrs.Buffet On-net",
                        "soc": "263718",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-01-27",
                            "end": "2017-01-01"
                        },
                        "rc": 649.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP17",
                        "description": "Ent_Smart_1699_UnWEG(FUP10GB,384kb)",
                        "soc": "265448",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 1699.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP36",
                        "description": "B&E 1028.04_V450S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11088712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1028.04,
                        "service-level": "C"
                    }, {
                        "name": "PLSMAP63",
                        "description": "4G+ Super Max1899,1500min,4G|3G 60GB,4G 18GB",
                        "soc": "12334616",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-03-21",
                            "end": "2017-02-03"
                        },
                        "rc": 1899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP81",
                        "description": "Biz&Ent_Smart_746.73V550UnWEG3GB384_0.99bt",
                        "soc": "10056310",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 746.73,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP66",
                        "description": "Biz&Ent_DATA_270_UnWEG2g384",
                        "soc": "118436",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 270.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP63",
                        "description": "Biz 4G Net 1599_DataFUP10GB,Free5GB(6mth),WiFi",
                        "soc": "11242012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1599.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP17",
                        "description": "Net SIM 799, WiEG Unlimited (Fairuse 3GB)",
                        "soc": "63702",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-15",
                            "end": "2116-05-16"
                        },
                        "rc": 799.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP48",
                        "description": "B&E 559.81_V400UnWEG5GB384_0.99bt",
                        "soc": "11095512",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 559.81,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP44",
                        "description": "Biz&Ent 1199_Voice1700min,30SMS,50MMS,CUG,F&F,3WEG",
                        "soc": "571708",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-16",
                            "end": "2017-01-01"
                        },
                        "rc": 1199.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP87",
                        "description": "Data 1100bt RC discount 50% 12 mths data 16GB",
                        "soc": "12633216",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-05-12",
                            "end": "2250-08-08"
                        },
                        "rc": 550.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP36",
                        "description": "4G Advance1900 Dis50% 12mths,V400m,Net10GB,WiFi",
                        "soc": "1075499",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-26",
                            "end": "2017-03-06"
                        },
                        "rc": 950.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP34",
                        "description": "Business Talk 800_V1000UnWEG500m128",
                        "soc": "118006",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 800.0,
                        "service-level": "C"
                    }, {
                        "name": "RMIP1P02",
                        "description": "TMH-iPad Monthly Fee 549 Data 2GB/ wifi unlimited",
                        "soc": "24291",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-08-26",
                            "end": "2055-01-30"
                        },
                        "rc": 549.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP50",
                        "description": "Biz&Ent smart 635.27_V400UnWEG_CUG Unlimited",
                        "soc": "570908",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-09",
                            "end": "2017-01-01"
                        },
                        "rc": 635.27,
                        "service-level": "C"
                    }, {
                        "name": "ESRCAP07",
                        "description": "Biz & Ent SMS 2 Way Get 1,000 SMS",
                        "soc": "109907",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-03-07",
                            "end": "2017-01-01"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP13",
                        "description": "Ent_Smart_599_UnWEG(FUP2GB,384kb)",
                        "soc": "104136",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP69",
                        "description": "Biz & Ent 900,Data UNL5GB/128,WiFi",
                        "soc": "111017",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 900.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP12",
                        "description": "Ent_Smart_399_UnWEG(FUP1GB,128kb)",
                        "soc": "104126",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP87",
                        "description": "Biz & Ent RC 700_V700minS100M50DataUNLTD5GBWiFi",
                        "soc": "10443410",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-03",
                            "end": "2017-01-01"
                        },
                        "rc": 700.0,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP01",
                        "description": "3G iNet 199, Net UNLTD 500 MB, WiFi 10 hr",
                        "soc": "10632911",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2116-05-16"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "BBSMEP26",
                        "description": "Biz_BB BIS 699 3WEG Unlimited",
                        "soc": "109936",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-13",
                            "end": "2017-01-01"
                        },
                        "rc": 449.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP39",
                        "description": "Super Save 259_Biz & Ent Get V300Min,30SMS,50MB",
                        "soc": "119716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 259.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP15",
                        "description": "TMH2000-2500min all net 1 bt SMS 3 bt MMS 5bt 24hr",
                        "soc": "81832",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 2000.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RTLP04",
                        "description": "TrueMove H 250 call on-net 400mins",
                        "soc": "89793",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 250.0,
                        "service-level": "C"
                    }, {
                        "name": "NPNTAP29",
                        "description": "4G/3G iNet 899 Net 8GB UNLTD",
                        "soc": "11171812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP38",
                        "description": "3G iSmart 599,V300m,Net1.5GB,WiFi,FreeNet3GB12m.",
                        "soc": "1076459",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-04-07",
                            "end": "2017-07-06"
                        },
                        "rc": 599.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP08",
                        "description": "TMH350-700bt all net 2 bt SMS 3 bt MMS 5 bt 24hr",
                        "soc": "81802",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-10-15",
                            "end": "2016-06-30"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP31",
                        "description": "Biz & Ent_Smart 149 pay data 500M_3mth",
                        "soc": "570898",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-21",
                            "end": "2017-01-01"
                        },
                        "rc": 149.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP13",
                        "description": "TMH1300-1500min  allnet 1 bt SMS 3 bt MMS 5bt 24hr",
                        "soc": "81812",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 1300.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP26",
                        "description": "Biz&Ent1600_CUG,V650min,50SMS,Data UNL2GB/128,WiFi",
                        "soc": "109887",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1600.0,
                        "service-level": "C"
                    }, {
                        "name": "RMTLKP14",
                        "description": "TMH1500-1800min all net 1 bt SMS 3 bt MMS 5bt 24hr",
                        "soc": "81822",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2011-10-15",
                            "end": "2017-01-06"
                        },
                        "rc": 1500.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP13",
                        "description": "Biz & Ent 2399 Smart Buffet All Net 24 Hrs.",
                        "soc": "105716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-19",
                            "end": "2017-01-01"
                        },
                        "rc": 2399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP24",
                        "description": "Biz&Ent1000_CUG,V250min,50SMS,Data UNL3GB/128,WiFi",
                        "soc": "109867",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1000.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP70",
                        "description": "Biz & Ent 600,Data UNL2GB/128,WiFi",
                        "soc": "111027",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 600.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP72",
                        "description": "Biz & Ent SmartPack 1200_V700min,100SMS,30MMS,3WEG",
                        "soc": "118537",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-22",
                            "end": "2017-01-01"
                        },
                        "rc": 1200.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP25",
                        "description": "Biz&Ent1400_CUG,V550min,50SMS,Data UNL2GB/128,WiFi",
                        "soc": "109877",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1400.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDPAP07",
                        "description": "B&E RC 1,600_FUP 8GB & WiFi UNLTD",
                        "soc": "11936712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-16",
                            "end": "2017-12-31"
                        },
                        "rc": 1600.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPDAP25",
                        "description": "Biz&Ent_ipad_1635.51_UnWEG5g128_HS_1.25bt/min",
                        "soc": "997418",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-13",
                            "end": "2017-01-01"
                        },
                        "rc": 1635.51,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP29",
                        "description": "4G/3G iNet 899 Net 14GB UNLTD",
                        "soc": "11171712",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-08",
                            "end": "2025-07-02"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP86",
                        "description": "Biz & Ent RC 500_V500minS100M50DataUNLTD3GBWiFi",
                        "soc": "10443310",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-03",
                            "end": "2017-01-01"
                        },
                        "rc": 500.0,
                        "service-level": "C"
                    }, {
                        "name": "P2P75P01",
                        "description": "Postpay 100 Bt_75 satang",
                        "soc": "113846",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-03-06"
                        },
                        "rc": 100.0,
                        "service-level": "C"
                    }, {
                        "name": "EVOCAP36",
                        "description": "Biz & Ent RC 130 Get 100 SMS, CUG",
                        "soc": "119936",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-08",
                            "end": "2017-01-01"
                        },
                        "rc": 130.0,
                        "service-level": "C"
                    }, {
                        "name": "P2P75P02",
                        "description": "Postpay 200 Bt_75 satang",
                        "soc": "113856",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-01",
                            "end": "2017-03-06"
                        },
                        "rc": 200.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RIPP04",
                        "description": "Device Package_Grey Market, 699 Bt",
                        "soc": "89783",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP11",
                        "description": "Business Team Talk 790_V1500Min,100SMS,CUG",
                        "soc": "119876",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 790.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP61",
                        "description": "Biz&Ent_Smart_1,079V550UnWEG3g384_0.99bt",
                        "soc": "118716",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 1079.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP63",
                        "description": "Biz&Ent_Smart_1,479V330UnWEG3g384_0.99bt",
                        "soc": "118736",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 1479.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP55",
                        "description": "Biz & Ent Data 899_Data FUP 5/384,WiFi@TMVH UNLTD",
                        "soc": "997688",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-01-10",
                            "end": "2017-01-01"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDATP65",
                        "description": "Biz 4G Net 1799_DataFUP10GB,Free5GB(6mth),WiFi",
                        "soc": "11242212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-22",
                            "end": "2016-12-31"
                        },
                        "rc": 1799.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP29",
                        "description": "Ent_iphone_1799V650S50UnWEG1g128_HS_1.25bt/min",
                        "soc": "265378",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-05-20",
                            "end": "2017-01-01"
                        },
                        "rc": 1799.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP25",
                        "description": "Ent_Iphone_1308.41_V550S50UnWEG,2g128_HS_1.25Bt",
                        "soc": "265368",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-05",
                            "end": "2017-01-01"
                        },
                        "rc": 1308.41,
                        "service-level": "C"
                    }, {
                        "name": "TESTTVSP01",
                        "description": "Subscription Fee of PlatinumHD P1 (6M)",
                        "soc": "11032012",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-01",
                            "end": "2250-08-08"
                        },
                        "rc": 2000.0,
                        "service-level": "C"
                    }, {
                        "name": "EHTKAP05",
                        "description": "Biz & Ent E1_RC30,000bt, All-net1.50bt/min",
                        "soc": "109825",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-09-12",
                            "end": "2017-01-01"
                        },
                        "rc": 30000.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP85",
                        "description": "Biz & Ent RC 300_V300minS100M50DataUNLTD2GBWiFi",
                        "soc": "10443210",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-03",
                            "end": "2017-01-01"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP46",
                        "description": "B&E 1962.62_V850S50UnWEG10.0g384_HS_0.99bt/min",
                        "soc": "11095612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-08-27",
                            "end": "2115-12-31"
                        },
                        "rc": 1962.62,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP68",
                        "description": "Biz&Ent_Smart_319V1600S50M30_1.25bt",
                        "soc": "108957",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-17",
                            "end": "2017-01-01"
                        },
                        "rc": 319.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP09",
                        "description": "iTalk 88 baht, voice 100 minutes",
                        "soc": "87754",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-04-26",
                            "end": "2017-01-06"
                        },
                        "rc": 88.0,
                        "service-level": "C"
                    }, {
                        "name": "BUSTCP10",
                        "description": "Business Team Talk 490_V700Min,50SMS",
                        "soc": "119846",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-04",
                            "end": "2017-01-01"
                        },
                        "rc": 490.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP18",
                        "description": "Retention 59 bt/m. all net 40mins",
                        "soc": "118367",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-17",
                            "end": "2017-01-06"
                        },
                        "rc": 59.0,
                        "service-level": "C"
                    }, {
                        "name": "T2RIAP02",
                        "description": "Device Package for iPad, 549 Bt/mth",
                        "soc": "89743",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-03-12",
                            "end": "2016-06-30"
                        },
                        "rc": 549.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP79",
                        "description": "Biz&Ent_Data_559.81UnWEG3g384_0.99bt",
                        "soc": "10056610",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-07-10",
                            "end": "2017-01-01"
                        },
                        "rc": 559.81,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP32",
                        "description": "B&E Data 372.90 Disc50% 24mths_UnWEG6GB/384,0.99bt",
                        "soc": "12248713",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 186.45,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP62",
                        "description": "Biz&Ent_Smart_1,169V330UnWEG5g384_0.99bt",
                        "soc": "118726",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-11-11",
                            "end": "2017-01-01"
                        },
                        "rc": 1169.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP61",
                        "description": "B&E 372.90_V200,UnWEG5GB/384,0.99bt",
                        "soc": "12247613",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 372.9,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP50",
                        "description": "RET iNet1299 Dis50% Net 20GB UNLTD",
                        "soc": "11423212",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP60",
                        "description": "B&E 372.90 Disc50% 24mths_V200,UnWEG5GB/384,0.99bt",
                        "soc": "12247213",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 186.45,
                        "service-level": "C"
                    }, {
                        "name": "ESRCAP01",
                        "description": "Biz & Ent SMS 2 way 1,750Bt get 1000 SMS",
                        "soc": "124007",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-07",
                            "end": "2017-01-01"
                        },
                        "rc": 1750.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP08",
                        "description": "Biz&Ent_Smart_654.21V350S20UnWEG1g128_HS_1.25bt",
                        "soc": "569978",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-03",
                            "end": "2017-01-01"
                        },
                        "rc": 654.21,
                        "service-level": "C"
                    }, {
                        "name": "ESMPAP16",
                        "description": "Ent_Smart_999_UnWEG(FUP7GB,384kb)",
                        "soc": "997938",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-10-08",
                            "end": "2017-01-01"
                        },
                        "rc": 999.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP09",
                        "description": "Biz&Ent_Smart_747.66V400S30UnWEG1g128_HS_1.25bt",
                        "soc": "569988",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-14",
                            "end": "2017-01-01"
                        },
                        "rc": 747.66,
                        "service-level": "C"
                    }, {
                        "name": "PLNTAP08",
                        "description": "4GiNet1099,4GNetUNL14GB,TVS1GB,WiFiUNLT, Free6GB6m",
                        "soc": "10649911",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2025-07-02"
                        },
                        "rc": 1099.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP22",
                        "description": "4G iNet399,4G UNLT 4GB,WiFi UNLT, Free Social 12Mo",
                        "soc": "1099329",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-23",
                            "end": "2020-08-31"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "ESRCAP03",
                        "description": "Biz & Ent SMS 2 way 6,250Bt get5,000 SMS",
                        "soc": "124027",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-07",
                            "end": "2017-01-01"
                        },
                        "rc": 6250.0,
                        "service-level": "C"
                    }, {
                        "name": "ESMHAP13",
                        "description": "Biz & Ent 659 Get 700min,60SMS,CUG,F&F,3WEG 2/384",
                        "soc": "569998",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-06-10",
                            "end": "2017-01-01"
                        },
                        "rc": 659.0,
                        "service-level": "C"
                    }, {
                        "name": "EDATAP36",
                        "description": "D_Fleet 219Bt_60MB_120SMS",
                        "soc": "997878",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-11-29",
                            "end": "2017-01-01"
                        },
                        "rc": 219.0,
                        "service-level": "C"
                    }, {
                        "name": "ESDPAP06",
                        "description": "B&E RC 800_FUP 4GB & WiFi UNLTD",
                        "soc": "11936612",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-16",
                            "end": "2017-12-31"
                        },
                        "rc": 800.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP11",
                        "description": "KR-iNet 399, net1.5GB UNLTD WiFi UNLTD",
                        "soc": "119267",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-18",
                            "end": "2116-05-16"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "GSVSMP63",
                        "description": "B&E 419.63_V200,UnWEG6GB/384,0.99bt",
                        "soc": "12247813",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-20",
                            "end": "2018-01-31"
                        },
                        "rc": 419.63,
                        "service-level": "C"
                    }, {
                        "name": "ESRCAP02",
                        "description": "Biz & Ent SMS 2 way 4,500Bt get3,000 SMS",
                        "soc": "124017",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-07",
                            "end": "2017-01-01"
                        },
                        "rc": 4500.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP15",
                        "description": "Biz & Ent 650 Smart Buffet OnNet 6am-6pm",
                        "soc": "105646",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-23",
                            "end": "2017-01-01"
                        },
                        "rc": 650.0,
                        "service-level": "C"
                    }, {
                        "name": "EDTSAP07",
                        "description": "V0S0G1_Biz & Ent 1,499 Get 3WEG Unlimited",
                        "soc": "997928",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-16",
                            "end": "2017-01-01"
                        },
                        "rc": 1499.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSVP79",
                        "description": "KR-iNet 399, net1GB UNLTD WiFi UNLTD",
                        "soc": "99655",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-07-24",
                            "end": "2116-01-30"
                        },
                        "rc": 399.0,
                        "service-level": "C"
                    }, {
                        "name": "EIPHAP33",
                        "description": "Biz&Ent iphone1682.24_CUG,Voice 700min,100SMS,3WEG",
                        "soc": "997918",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-27",
                            "end": "2017-01-01"
                        },
                        "rc": 1682.24,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP13",
                        "description": "KR-iNet 899, net5GB UNLTD WiFi UNLTD",
                        "soc": "119287",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-18",
                            "end": "2116-05-16"
                        },
                        "rc": 899.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP12",
                        "description": "KR-iNet 699, net3GB UNLTD WiFi UNLTD",
                        "soc": "119277",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-04-18",
                            "end": "2116-05-16"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "GSDATP06",
                        "description": "GSE_0_UnWEG(FUP4GB,384kb)",
                        "soc": "1069949",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-03-12",
                            "end": "2017-12-31"
                        },
                        "rc": 0.0,
                        "service-level": "C"
                    }, {
                        "name": "UB2TRP58",
                        "description": "TLFV True MoveH 349B, Data3G 500MB, Wifi Unlimited",
                        "soc": "130626",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-02-13",
                            "end": "2099-09-30"
                        },
                        "rc": 194.0,
                        "service-level": "C"
                    }, {
                        "name": "NPTKAP08",
                        "description": "iTalk+ 299, Voice All Net 400 min",
                        "soc": "11205112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-10-16",
                            "end": "2017-03-06"
                        },
                        "rc": 299.0,
                        "service-level": "C"
                    }, {
                        "name": "SMRTBP80",
                        "description": "data 350bt free call 150min data 8GB",
                        "soc": "11940312",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-02-16",
                            "end": "2250-08-08"
                        },
                        "rc": 350.0,
                        "service-level": "C"
                    }, {
                        "name": "NETSAP21",
                        "description": "4G iNet699,4G UNLT12GB,WiFi UNLT, Free Social 12Mo",
                        "soc": "1099309",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-07-23",
                            "end": "2020-08-31"
                        },
                        "rc": 699.0,
                        "service-level": "C"
                    }, {
                        "name": "INTSMP02",
                        "description": "Inter SIM True Move 199Bt all net work 1.25Bt/min",
                        "soc": "263508",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2010-07-08",
                            "end": "2016-06-30"
                        },
                        "rc": 199.0,
                        "service-level": "C"
                    }, {
                        "name": "EBFAAP19",
                        "description": "BizEnt 590_Buffet 6AM-6PM,SAT&SUN,V100min100MB",
                        "soc": "568998",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2013-08-23",
                            "end": "2017-01-01"
                        },
                        "rc": 590.0,
                        "service-level": "C"
                    }, {
                        "name": "RETEAP40",
                        "description": "RET iTalk599 Dis50% Allnet 400 min Onnet400 min",
                        "soc": "11422112",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2016-01-14",
                            "end": "2250-08-08"
                        },
                        "rc": 300.0,
                        "service-level": "C"
                    }],
                    "mapped-propo-priceplans": [{
                        "proposition": {
                            "name": "RMV000000002072",
                            "description": "RM_MG_4G Device Upgrade for non shop",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0024144"
                        },
                        "priceplans": [{
                            "name": "SMRTBP46",
                            "description": "True Smart Choice 300Mins Unlimited data(2GB)&WiFi",
                            "soc": "1081059",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-05-01",
                                "end": "2020-06-30"
                            },
                            "rc": 649.0,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMVB00000000008",
                            "description": "PricePlan Business Sector",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019398"
                        },
                        "priceplans": [{
                            "name": "GSVSMP49",
                            "description": "B&E 746.73_V550UnWEG7GB384_0.99bt",
                            "soc": "11095712",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-08-27",
                                "end": "2115-12-31"
                            },
                            "rc": 746.73,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "CVG000000000026",
                            "description": "RM_Convergence 4P",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0020866"
                        },
                        "priceplans": [{
                            "name": "GSDATP20",
                            "description": "B&E Data 1401.87_UnWEG10.0GB384Kbps_0.99bt/min",
                            "soc": "11089412",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-08-27",
                                "end": "2115-12-31"
                            },
                            "rc": 1401.87,
                            "service-level": "C"
                        }, {
                            "name": "SMRTBP46",
                            "description": "True Smart Choice 300Mins Unlimited data(2GB)&WiFi",
                            "soc": "1081059",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-05-01",
                                "end": "2020-06-30"
                            },
                            "rc": 649.0,
                            "service-level": "C"
                        }, {
                            "name": "GSVSMP17",
                            "description": "B&E 279.44_V100,UnWEG3GB/384,0.99bt",
                            "soc": "1095479",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-07-02",
                                "end": "2016-12-31"
                            },
                            "rc": 279.44,
                            "service-level": "C"
                        }, {
                            "name": "ESMHAP12",
                            "description": "Biz & Ent 540 Get 300min,50 SMS,CUG,F&F,3WEG 2/384",
                            "soc": "265428",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-06-10",
                                "end": "2017-01-01"
                            },
                            "rc": 540.0,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "CVG000000000027",
                            "description": "RM_Convergence 4P(2nd SIM)",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0020892"
                        },
                        "priceplans": [{
                            "name": "SMRTBP46",
                            "description": "True Smart Choice 300Mins Unlimited data(2GB)&WiFi",
                            "soc": "1081059",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-05-01",
                                "end": "2020-06-30"
                            },
                            "rc": 649.0,
                            "service-level": "C"
                        }, {
                            "name": "SMRTBP47",
                            "description": "True Smart Choice 450Mins Unlimited data(4GB)&WiFi",
                            "soc": "1081129",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-05-01",
                                "end": "2020-06-30"
                            },
                            "rc": 849.0,
                            "service-level": "C"
                        }, {
                            "name": "70STGP05",
                            "description": "Business Talk 1,890 Get 2,700 Min_70 Satang",
                            "soc": "117536",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-08-23",
                                "end": "2017-01-01"
                            },
                            "rc": 1890.0,
                            "service-level": "C"
                        }, {
                            "name": "PLSMAP64",
                            "description": "Dummy_IOT Package 50 (monthly299 V100 Net 750MB)",
                            "soc": "12335316",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2016-03-21",
                                "end": "2017-02-03"
                            },
                            "rc": 299.0,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMV000000000001",
                            "description": "New Sim Only",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019123"
                        },
                        "priceplans": [{
                            "name": "BUSTCP01",
                            "description": "Biz & Ent_Team Talk 150 Get 150Bt,CUG",
                            "soc": "85494",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2012-09-11",
                                "end": "2017-12-31"
                            },
                            "rc": 150.0,
                            "service-level": "C"
                        }, {
                            "name": "HTLK1P18",
                            "description": "E Corp Hightalk 50,000 Bundle50,000Bt_All net1 Bt",
                            "soc": "100835",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-02-10",
                                "end": "2017-01-01"
                            },
                            "rc": 50000.0,
                            "service-level": "C"
                        }, {
                            "name": "NETSAP24",
                            "description": "V0S0G1_HomeWirelessBroadband299 10GB/4MB WiFi 20Hr",
                            "soc": "11139112",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-09-10",
                                "end": "2115-12-31"
                            },
                            "rc": 299.0,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMV000000001349",
                            "description": "RM_MG_Pre2Post_4G H/S",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0021662"
                        },
                        "priceplans": [{
                            "name": "SMRTBP46",
                            "description": "True Smart Choice 300Mins Unlimited data(2GB)&WiFi",
                            "soc": "1081059",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-05-01",
                                "end": "2020-06-30"
                            },
                            "rc": 649.0,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "CVGB00000000004",
                            "description": "New_Convergence For Business_Penalty 2990",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0020939"
                        },
                        "priceplans": [{
                            "name": "GSVSMP17",
                            "description": "B&E 279.44_V100,UnWEG3GB/384,0.99bt",
                            "soc": "1095479",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-07-02",
                                "end": "2016-12-31"
                            },
                            "rc": 279.44,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "CVGB00000000003",
                            "description": "New_Convergence For Business_Penalty 1990",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0020938"
                        },
                        "priceplans": [{
                            "name": "GSVSMP17",
                            "description": "B&E 279.44_V100,UnWEG3GB/384,0.99bt",
                            "soc": "1095479",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-07-02",
                                "end": "2016-12-31"
                            },
                            "rc": 279.44,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMVC00000000181",
                            "description": "GOV Welfare",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0024180"
                        },
                        "priceplans": [{
                            "name": "GSVSMP85",
                            "description": "GOV 541.12_V400UnWEG15GB384_0.99bt",
                            "soc": "12391016",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2016-03-31",
                                "end": "2115-12-31"
                            },
                            "rc": 541.12,
                            "service-level": "C"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMV000000001287",
                            "description": "New SIM Only Lucky no.",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0021484"
                        },
                        "priceplans": [{
                            "name": "GURL2P11",
                            "description": "SookX2 Anywhere with Box 299",
                            "soc": "10536811",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2014-11-28",
                                "end": "2250-08-08"
                            },
                            "rc": 299.0,
                            "service-level": "C"
                        }, {
                            "name": "EHTKAP08",
                            "description": "Biz & Ent E1_RC100,000bt, All-net1.10bt/min",
                            "soc": "111865",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-09-12",
                                "end": "2017-01-01"
                            },
                            "rc": 100000.0,
                            "service-level": "C"
                        }, {
                            "name": "ESRCAP04",
                            "description": "Biz & Ent SMS 2 way 10,000Bt get 10,000 SMS",
                            "soc": "124217",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2012-12-07",
                                "end": "2017-01-01"
                            },
                            "rc": 10000.0,
                            "service-level": "C"
                        }, {
                            "name": "NPNTAP05",
                            "description": "4G iNet 499, 4G Net 3GB, WiFi UNLTD",
                            "soc": "10648711",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-01-16",
                                "end": "2025-07-02"
                            },
                            "rc": 499.0,
                            "service-level": "C"
                        }]
                    }]
                }
            };
            fnCallback({
                status: true,
                data: data3,
                error: "",
                msgErr: ""
            });
        }
    };
    this.getPriceplan = function(target, fnCallback) {
        that.aftersalePriceplan(target, function(result) {
            console.log("getPriceplan ::::::: ");
            console.log("target ::::: " + target);
            console.log(result);
            fnCallback(result);
            //alert('aftersalePriceplan');
            //SystemService.hideLoading();
        });
    };
    this.offerDetail = function(soc, fnCallback) {
        if (!demo) {
            var target = 'aftersales/tmv/priceplan/details?offer-code=' + soc;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data = {};
            if (soc == "265738") {
                data = {
                    "status": "SUCCESSFUL",
                    "display-messages": [],
                    "trx-id": "3X1005SUT3TT1",
                    "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                    "status-code": "0",
                    "csm-offer-details": {
                        "currency": "THB",
                        "name": "FTALKS31",
                        "deployFromGroupIndicator": "Y",
                        "description": "Talk: 1F&amp;F True FL",
                        "duration": "",
                        "product-type": "RR",
                        "soc-properties": "TR_DEFAULT_CONTRACT_FEE=0;TR_CUSTOMER_TYPE=Null;businessEntityID=0;Should be deployed=Y;TR_CONTRACT_TERM=0;Activation date to charge=Y;type=Additional offer;Maximum offer duplicates allowed=0;Limit_Subs=99999;TR_SPECIAL_OFFER_IND=Null;id=265738;saleContext=Relation;level=Subscriber;description=Talk: 1F&amp;F True FL;name=FTALKS31;CUG_IND=Null;cappingOffer=N;ApplyInOverlappingMove=false;currencyCode=THB;FF_Number=1;itemization_offer_ind=N;saleExpirationDate=2250-08-08;Product type=RR;TR_ACCOUNT_SUB_TYPE=Null;english_offer_description=Talk: 1F&amp;F True FL;thai_offer_description=Talk: 1F&amp;F True FL;saleEffectiveDate=2008-02-28;TR_CUSTOMER_SUB_TYPE=Null;TR_NEXT_PP=null;TR_DURATION_MONTH=0;Deactivation date to charge=Y;TR_GENERATE_CHARGE_YES_NO=N;TR_PRODUCT_SUB_TYPE=R;Agreement distribute level=0;",
                        "sale-expiration-date": "08/08/2250 00:00:00",
                        "max-instances-allowed": "Duplication is Forbidden",
                        "offer-type": "U",
                        "sale-effective-date": "28/02/2008 00:00:00",
                        "sale-context": "R",
                        "rc-indicator": "",
                        "primary-resource": "",
                        "special-offer-type": "FriendAndFamily",
                        "min-ff-number": "2",
                        "max-ff-number": "3",
                        "product-sub-type": "PostPay",
                        "csm-related-offer-details": []
                    }
                };
            } else if (soc == "0019537") {
                data = {
                    "status": "SUCCESSFUL",
                    "display-messages": [{
                        "message": "Can not connect!",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "",
                        "th-message": "",
                        "technical-message": ""
                    }],
                    "trx-id": "5D1004R4CQA8A",
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
                        "max-ff-number": "",
                        "product-sub-type": "PostPay",
                        "csm-related-offer-details": [{
                            "code": "265738",
                            "name": "FTALKS31",
                            "description": "Talk: 1F&amp;F True FL",
                            "service-level": "C",
                            "sale-expiration-date": "08/08/2250 00:00:00",
                            "offer-type": "U",
                            "sale-effective-date": "28/02/2008 00:00:00",
                            "special-offer-type": "FriendAndFamily" //FriendAndFamily
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
            } else {
                data = {
                    "status": "SUCCESSFUL",
                    "display-messages": [{
                        "message": "Can not connect!",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "",
                        "th-message": "",
                        "technical-message": ""
                    }],
                    "trx-id": "5D1004R4CQA8A",
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
                        "max-ff-number": "",
                        "product-sub-type": "PostPay",
                        "csm-related-offer-details": [{
                            "code": "265738",
                            "name": "FTALKS31",
                            "description": "Talk: 1F&amp;F True FL",
                            "service-level": "C",
                            "sale-expiration-date": "08/08/2250 00:00:00",
                            "offer-type": "U",
                            "sale-effective-date": "28/02/2008 00:00:00",
                            "special-offer-type": "FriendAndFamily" //FriendAndFamily
                        }, {
                            "code": "40941",
                            "name": "PROSTDA1",
                            "description": "Standard Provisioning Services for Post Pay # 1",
                            "service-level": "C",
                            "sale-expiration-date": "08/08/2250 00:00:00",
                            "offer-type": "U",
                            "sale-effective-date": "04/08/2010 00:00:00",
                            "special-offer-type": "CAPMAX"
                        }, {
                            "code": "41861",
                            "name": "FCVBAR",
                            "description": "First Call Verification, Barring",
                            "service-level": "C",
                            "sale-expiration-date": "08/08/2250 00:00:00",
                            "offer-type": "U",
                            "sale-effective-date": "08/01/2008 00:00:00",
                            "special-offer-type": "CUG"
                        }]
                    }
                };
            }
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };
    this.getOfferDetail = function(soc, fnCallback) {
        that.offerDetail(soc, function(result) {
            console.log("getOfferDetail ::::::: ");
            console.log(result);
            fnCallback(result);
        });
    };
    this.getCUGList = function(fnCallback) {
        var data = {};
        if (demo) {
            data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3B10QPEHHLK4H",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "status-code": "0",
                "cug-list": [{
                    "group-type": "GAS",
                    "group-id": "290",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "300",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "301",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "302",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "303",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "505",
                    "group-name": "TEST6",
                    "group-description": "TEST6",
                    "group-identifier": "TEST6"
                }, {
                    "group-type": "GAS",
                    "group-id": "506",
                    "group-name": "TEST7",
                    "group-description": "TEST7",
                    "group-identifier": "TEST7"
                }, {
                    "group-type": "GAS",
                    "group-id": "507",
                    "group-name": "toyota",
                    "group-description": "ta",
                    "group-identifier": "ta"
                }, {
                    "group-type": "GAS",
                    "group-id": "508",
                    "group-name": "0001",
                    "group-description": "CUG Group",
                    "group-identifier": "CP"
                }, {
                    "group-type": "GAS",
                    "group-id": "511",
                    "group-name": "0009",
                    "group-description": "CUG Group",
                    "group-identifier": "SCG"
                }, {
                    "group-type": "GAS",
                    "group-id": "512",
                    "group-name": "PEP HR",
                    "group-description": "PEP HR",
                    "group-identifier": "การไฟฟ้านครหลวง"
                }, {
                    "group-type": "GAS",
                    "group-id": "513",
                    "group-name": "63637",
                    "group-description": "CUG ",
                    "group-identifier": "CCC"
                }, {
                    "group-type": "GAS",
                    "group-id": "523",
                    "group-name": "0045",
                    "group-description": "test",
                    "group-identifier": "tes"
                }, {
                    "group-type": "GAS",
                    "group-id": "524",
                    "group-name": "HR1",
                    "group-description": "HR1",
                    "group-identifier": "Test"
                }, {
                    "group-type": "GAS",
                    "group-id": "525",
                    "group-name": "HR 1",
                    "group-description": "HR 1",
                    "group-identifier": "Te st"
                }, {
                    "group-type": "GAS",
                    "group-id": "526",
                    "group-name": "IT 1",
                    "group-description": "IT 1",
                    "group-identifier": "ศาลล้มละลายกลาง"
                }, {
                    "group-type": "GAS",
                    "group-id": "527",
                    "group-name": "TT 01",
                    "group-description": "TT 01",
                    "group-identifier": "Home"
                }, {
                    "group-type": "GAS",
                    "group-id": "543",
                    "group-name": "EEE",
                    "group-description": "EEE",
                    "group-identifier": "EEE"
                }, {
                    "group-type": "GAS",
                    "group-id": "623",
                    "group-name": "HR 001",
                    "group-description": "HR 001",
                    "group-identifier": "Test"
                }, {
                    "group-type": "GAS",
                    "group-id": "625",
                    "group-name": "T002",
                    "group-description": "T002",
                    "group-identifier": "T002"
                }, {
                    "group-type": "GAS",
                    "group-id": "626",
                    "group-name": "T003",
                    "group-description": "T003",
                    "group-identifier": "T003"
                }, {
                    "group-type": "GAS",
                    "group-id": "627",
                    "group-name": "T004",
                    "group-description": "T004",
                    "group-identifier": "T004"
                }, {
                    "group-type": "GAS",
                    "group-id": "628",
                    "group-name": "T05",
                    "group-description": "T05",
                    "group-identifier": "T05"
                }, {
                    "group-type": "GAS",
                    "group-id": "629",
                    "group-name": "T06",
                    "group-description": "T06",
                    "group-identifier": "T06"
                }, {
                    "group-type": "GAS",
                    "group-id": "644",
                    "group-name": "SIT 01",
                    "group-description": "SIT 01",
                    "group-identifier": "SIT 01"
                }, {
                    "group-type": "GAS",
                    "group-id": "645",
                    "group-name": "HH1",
                    "group-description": "HHH1",
                    "group-identifier": "Hospital"
                }, {
                    "group-type": "GAS",
                    "group-id": "663",
                    "group-name": "ggg",
                    "group-description": "yyyy",
                    "group-identifier": "ffggg"
                }, {
                    "group-type": "GAS",
                    "group-id": "703",
                    "group-name": "IT101",
                    "group-description": "IT101",
                    "group-identifier": "คริสเตียนี่"
                }, {
                    "group-type": "GAS",
                    "group-id": "704",
                    "group-name": "T001",
                    "group-description": "T001",
                    "group-identifier": "T001"
                }, {
                    "group-type": "GAS",
                    "group-id": "706",
                    "group-name": "T011",
                    "group-description": "T011",
                    "group-identifier": "T011"
                }, {
                    "group-type": "GAS",
                    "group-id": "708",
                    "group-name": "T012",
                    "group-description": "T012",
                    "group-identifier": "บริษัท"
                }, {
                    "group-type": "GAS",
                    "group-id": "711",
                    "group-name": "T013",
                    "group-description": "T013",
                    "group-identifier": "T013"
                }, {
                    "group-type": "GAS",
                    "group-id": "712",
                    "group-name": "HR101",
                    "group-description": "HR101",
                    "group-identifier": "คริสเตียนี่"
                }, {
                    "group-type": "GAS",
                    "group-id": "715",
                    "group-name": "HH11",
                    "group-description": "HH11",
                    "group-identifier": "กมล"
                }, {
                    "group-type": "GAS",
                    "group-id": "716",
                    "group-name": "HH102",
                    "group-description": "HH102",
                    "group-identifier": "กมล"
                }, {
                    "group-type": "GAS",
                    "group-id": "717",
                    "group-name": "HHH",
                    "group-description": "HHH1",
                    "group-identifier": "บริษัทคริส"
                }, {
                    "group-type": "GAS",
                    "group-id": "719",
                    "group-name": "HHA1",
                    "group-description": "HHA1",
                    "group-identifier": "ไมเนอร์"
                }, {
                    "group-type": "GAS",
                    "group-id": "720",
                    "group-name": "HHB1",
                    "group-description": "HHB1",
                    "group-identifier": "บริษัท ไมเนอร์"
                }, {
                    "group-type": "GAS",
                    "group-id": "723",
                    "group-name": "BOI1",
                    "group-description": "BOI1",
                    "group-identifier": "คริสเตียนี่"
                }, {
                    "group-type": "GAS",
                    "group-id": "743",
                    "group-name": "HHB01",
                    "group-description": "HHB01",
                    "group-identifier": "ดิจิตอลเทส"
                }, {
                    "group-type": "GAS",
                    "group-id": "803",
                    "group-name": "HOS1",
                    "group-description": "HOS1",
                    "group-identifier": "HHOOSS"
                }, {
                    "group-type": "GAS",
                    "group-id": "804",
                    "group-name": "HHS2",
                    "group-description": "HHS2",
                    "group-identifier": "HHOOSS"
                }, {
                    "group-type": "GAS",
                    "group-id": "823",
                    "group-name": "HHOT",
                    "group-description": "HHOT",
                    "group-identifier": "คริสเตีย"
                }, {
                    "group-type": "GAS",
                    "group-id": "825",
                    "group-name": "HHA12",
                    "group-description": "HHA12",
                    "group-identifier": "เดลล์"
                }, {
                    "group-type": "GAS",
                    "group-id": "826",
                    "group-name": "HHOT01",
                    "group-description": "HHOT01",
                    "group-identifier": "คริสเตีย"
                }, {
                    "group-type": "GAS",
                    "group-id": "827",
                    "group-name": "HHOS01",
                    "group-description": "HHOS01",
                    "group-identifier": "ABC"
                }, {
                    "group-type": "GAS",
                    "group-id": "828",
                    "group-name": "Siam Dnan",
                    "group-description": "Billing Siam Dnan",
                    "group-identifier": "Siam Dnan Ltd, Co."
                }, {
                    "group-type": "GAS",
                    "group-id": "884",
                    "group-name": "BBOI1",
                    "group-description": "BBOI1",
                    "group-identifier": "ABC"
                }, {
                    "group-type": "GAS",
                    "group-id": "885",
                    "group-name": "BBOI2",
                    "group-description": "BBOI2",
                    "group-identifier": "คมคาย"
                }, {
                    "group-type": "GAS",
                    "group-id": "923",
                    "group-name": "eeww2",
                    "group-description": "rrrr",
                    "group-identifier": "ttest"
                }, {
                    "group-type": "GAS",
                    "group-id": "943",
                    "group-name": "็HR",
                    "group-description": "Free call in group",
                    "group-identifier": "Sansiri"
                }, {
                    "group-type": "GAS",
                    "group-id": "963",
                    "group-name": "IT001",
                    "group-description": "IT001",
                    "group-identifier": "Ta ta "
                }, {
                    "group-type": "GAS",
                    "group-id": "964",
                    "group-name": "IT001",
                    "group-description": "IT001",
                    "group-identifier": "Ta ta "
                }, {
                    "group-type": "GAS",
                    "group-id": "1983",
                    "group-name": "HHRO01",
                    "group-description": "HHRO01",
                    "group-identifier": "tata"
                }, {
                    "group-type": "GAS",
                    "group-id": "1984",
                    "group-name": "HHRO01",
                    "group-description": "HHRO01",
                    "group-identifier": "tata"
                }, {
                    "group-type": "GAS",
                    "group-id": "1985",
                    "group-name": "HHRO02",
                    "group-description": "HHRO02",
                    "group-identifier": "tata"
                }, {
                    "group-type": "GAS",
                    "group-id": "1987",
                    "group-name": "ITC1",
                    "group-description": "ITC1",
                    "group-identifier": "Infomation"
                }, {
                    "group-type": "GAS",
                    "group-id": "1988",
                    "group-name": "ITC1",
                    "group-description": "ITC1",
                    "group-identifier": "Infomation"
                }, {
                    "group-type": "GAS",
                    "group-id": "1989",
                    "group-name": "TIC03",
                    "group-description": "TIC03",
                    "group-identifier": "ไทยวาโก้"
                }, {
                    "group-type": "GAS",
                    "group-id": "1990",
                    "group-name": "สารสนเทศ1",
                    "group-description": "สารสนเทศ1",
                    "group-identifier": "Information"
                }, {
                    "group-type": "GAS",
                    "group-id": "1991",
                    "group-name": "hr01",
                    "group-description": "hr02",
                    "group-identifier": "human"
                }, {
                    "group-type": "GAS",
                    "group-id": "1993",
                    "group-name": "TEST44",
                    "group-description": "TEST44",
                    "group-identifier": "TEST44"
                }, {
                    "group-type": "GAS",
                    "group-id": "1994",
                    "group-name": "TEST55",
                    "group-description": "TEST55",
                    "group-identifier": "TEST55"
                }, {
                    "group-type": "GAS",
                    "group-id": "1995",
                    "group-name": "Account01",
                    "group-description": "Account01",
                    "group-identifier": "Accounting"
                }, {
                    "group-type": "GAS",
                    "group-id": "1997",
                    "group-name": "test1",
                    "group-description": "test1",
                    "group-identifier": "test1"
                }, {
                    "group-type": "GAS",
                    "group-id": "1998",
                    "group-name": "test2",
                    "group-description": "test2",
                    "group-identifier": "test2"
                }, {
                    "group-type": "GAS",
                    "group-id": "1999",
                    "group-name": "test3",
                    "group-description": "test3",
                    "group-identifier": "test3"
                }, {
                    "group-type": "GAS",
                    "group-id": "2000",
                    "group-name": "test4",
                    "group-description": "test4",
                    "group-identifier": "test4"
                }, {
                    "group-type": "GAS",
                    "group-id": "2001",
                    "group-name": "test5",
                    "group-description": "test5",
                    "group-identifier": "test5"
                }, {
                    "group-type": "GAS",
                    "group-id": "2002",
                    "group-name": "account11",
                    "group-description": "account11",
                    "group-identifier": "acounting"
                }, {
                    "group-type": "GAS",
                    "group-id": "2004",
                    "group-name": "HR0010",
                    "group-description": "HR0010",
                    "group-identifier": "Human"
                }, {
                    "group-type": "GAS",
                    "group-id": "2005",
                    "group-name": "HR0010",
                    "group-description": "HR0010",
                    "group-identifier": "Human"
                }, {
                    "group-type": "GAS",
                    "group-id": "2006",
                    "group-name": "SB01",
                    "group-description": "SB01",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2007",
                    "group-name": "SB01",
                    "group-description": "SB01",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2008",
                    "group-name": "SB02",
                    "group-description": "SB02",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2009",
                    "group-name": "SB02",
                    "group-description": "SB02",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2010",
                    "group-name": "aaa",
                    "group-description": "aaa",
                    "group-identifier": "aaa"
                }, {
                    "group-type": "GAS",
                    "group-id": "2011",
                    "group-name": "bbb",
                    "group-description": "bbb",
                    "group-identifier": "bbb"
                }, {
                    "group-type": "GAS",
                    "group-id": "2013",
                    "group-name": "sb003",
                    "group-description": "sb003",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2015",
                    "group-name": "sb05",
                    "group-description": "sb05",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2017",
                    "group-name": "sb06",
                    "group-description": "sb06",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2019",
                    "group-name": "sb08",
                    "group-description": "sb08",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2021",
                    "group-name": "sb010",
                    "group-description": "sb010",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "3003",
                    "group-name": "ITS01",
                    "group-description": "ITS01",
                    "group-identifier": "เดลล์"
                }, {
                    "group-type": "GAS",
                    "group-id": "3004",
                    "group-name": "ITS01",
                    "group-description": "ITS01",
                    "group-identifier": "เดลล์"
                }, {
                    "group-type": "GAS",
                    "group-id": "4083",
                    "group-name": "AM_TEST1",
                    "group-description": "AM_TEST1",
                    "group-identifier": "AM_TEST1"
                }, {
                    "group-type": "GAS",
                    "group-id": "4103",
                    "group-name": "GroupTOYOTA",
                    "group-description": "GroupTOYOTA",
                    "group-identifier": "Toyota1"
                }, {
                    "group-type": "GAS",
                    "group-id": "4104",
                    "group-name": "toyota1",
                    "group-description": "toyota1",
                    "group-identifier": "Toyota1"
                }, {
                    "group-type": "GAS",
                    "group-id": "4123",
                    "group-name": "IT",
                    "group-description": "IT",
                    "group-identifier": "7463"
                }, {
                    "group-type": "GAS",
                    "group-id": "4163",
                    "group-name": "AM_TEST2",
                    "group-description": "AM_TEST2",
                    "group-identifier": "AM_TEST2"
                }, {
                    "group-type": "GAS",
                    "group-id": "4323",
                    "group-name": "sale-vcare",
                    "group-description": "sale desc",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "4403",
                    "group-name": "aa",
                    "group-description": "bb",
                    "group-identifier": "กขคง"
                }, {
                    "group-type": "GAS",
                    "group-id": "4486",
                    "group-name": "IT HR",
                    "group-description": "Information",
                    "group-identifier": "ส่งเสริมการค้าไทยจำ"
                }, {
                    "group-type": "GAS",
                    "group-id": "4566",
                    "group-name": "การเงิน",
                    "group-description": "แผนกการเงิน",
                    "group-identifier": "การค้าไทย"
                }, {
                    "group-type": "GAS",
                    "group-id": "4745",
                    "group-name": "UOB008",
                    "group-description": "Test",
                    "group-identifier": "บริษัท ไอที"
                }, {
                    "group-type": "GAS",
                    "group-id": "4747",
                    "group-name": "B0001",
                    "group-description": "B0001",
                    "group-identifier": "BSC"
                }, {
                    "group-type": "GAS",
                    "group-id": "4748",
                    "group-name": "B0002",
                    "group-description": "B0002",
                    "group-identifier": "B2S"
                }, {
                    "group-type": "GAS",
                    "group-id": "2058282",
                    "group-name": "Share Plan",
                    "group-description": "Share Plan",
                    "group-identifier": "Share Plan"
                }]
            };
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        } else {
            var target = 'sales/catalog/product/tmv/aftersales/cug/list?search-type=GROUP_IDENTIFIER';
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
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



});
