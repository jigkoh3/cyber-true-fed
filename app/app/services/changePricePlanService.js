smartApp.service('ChangePricePlanService', function ($filter, SystemService, $routeParams) {
    var demo = SystemService.demo;
    var that = this;
    this.validateChangePricePlan = function (msisdn, ouID, fnCallback) {
        if (!demo) {
            var target = 'aftersales/tmv/changepriceplan/validatechangepriceplan?';
            if (msisdn == "null") {
                msisdn = "";
            }
            if (ouID == "null") {
                ouID = "";
            }
            if($routeParams.oulevel){
                if($routeParams.oulevel == 'Sub'){
                    //
                    target = target +'msisdn=' + msisdn;
                }else{
                    //
                    target = target +'ou-id=' + ouID;
                }
            }else{
                target = target +'msisdn=' + msisdn;
            }
            
            SystemService.callServiceGet(target, null, function (result) {
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
                    "id-number": "1180200046320",
                    "customer-id": "33896",
                    "installed-products": [
                      {
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
                          "next-priceplan-code": "",
                          "next-priceplan-desc": ""
                      }
                    ]
                },
                "display-messages": [],
                "trx-id": "8D14IN26571RG",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "status-code": "0"
            };

            var data2 = {
                "status": "UNSUCCESSFUL",
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

            var data3 = {
                "status": "SUCCESSFUL",
                "customer": {
                    "title": "",
                    "firstname": "CustomerB",
                    "lastname": "",
                    "contact-number": "",
                    "contact-mobile-number": "",
                    "id-type": "",
                    "id-number": "RMVPOSTB2",
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
                        "contract-fee": "599",
                        "contract-term": "",
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
                        "contract-fee": "799",
                        "contract-term": "",
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
    this.getChangePricePlan = function (msisdn, ouID, fnCallback) {
        that.validateChangePricePlan(msisdn, ouID, function (result) {
            //console.log("ChangePricePlanService.getChangePricePlan : ");
            //console.log(data);
            if (result.status) {
                var data = result.data;
                if (data["status-code"] != "2") {
                    var priceplan = $filter('filter')(data.customer["installed-products"], { "product-type": "PRICEPLAN" })[0];
                    var offer = $filter('filter')(data.customer["installed-products"], { "product-type": "PROPOSITION" });
                    var discount = $filter('filter')(data.customer["installed-products"], { "product-type": "DISCOUNT" });

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
                        SystemService.showAlert({
                            "message": data["display-messages"][0]["message"],
                            "message-code": data["display-messages"][0]["message-code"],
                            "message-type": "WARNING",
                            "en-message": data["display-messages"][0]["en-message"],
                            "th-message": data["display-messages"][0]["th-message"],
                            "technical-message": data["display-messages"][0]["technical-message"]
                        });
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
    this.aftersalePriceplan = function (target, fnCallback) {
        if (!demo) {
            SystemService.callServiceGet(target, null, function (result) {
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
                    }
                    , {
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
                "trx-id": "43ZEJS7ZV4IO",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "priceplans": [{
                        "name": "1GET1P20",
                        "description": "True Move 2000 - One Get One (Rollover) For12 mth",
                        "soc": "264698",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2006-01-03",
                            "end": "2016-01-30"
                        },
                        "rc": 2000.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "BCUGFP03",
                        "description": "Biz_Buddy 600, get 600Bt,CUG,1F&F,Max2sim",
                        "soc": "936258",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "CSH",
                            "PRICEPLAN_TYPE": "SH"
                        },
                        "sale-period": {
                            "start": "2012-05-21",
                            "end": "2016-01-30"
                        },
                        "rc": 600.0,
                        "service-level": "G",
                        "priceplan-type": "SH"
                    }, {
                        "name": "BGPR3P03",
                        "description": "Biz 500 Get 600 min, CUG  Unlimited, Data 500 MB",
                        "soc": "262228",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-05-18",
                            "end": "2015-12-31"
                        },
                        "rc": 500.0,
                        "service-level": "C",
                        "priceplan-type": "N"
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
                            "end": "2016-01-31"
                        },
                        "rc": 899.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "BUFFTP60",
                        "description": "iSmartBuffet399dis100 OnNet24hr net2GB WiFi UNLTD",
                        "soc": "10517211",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-11-27",
                            "end": "2016-02-15"
                        },
                        "rc": 299.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "CCBUFP01",
                        "description": "B&E High talk  265,000 (COU)_Buffet Allnet 7AM-6PM",
                        "soc": "10434110",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2014-10-14",
                            "end": "2015-12-31"
                        },
                        "rc": 265000.0,
                        "service-level": "G",
                        "priceplan-type": "N"
                    }, {
                        "name": "CSHR5P06",
                        "description": "P_Corp sharing 450Bt On net1.10Bt, Off net 1.45Bt",
                        "soc": "927598",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2010-09-07",
                            "end": "2016-03-31"
                        },
                        "rc": 450.0,
                        "service-level": "G",
                        "priceplan-type": "N"
                    }, {
                        "name": "ECCBCP01D",
                        "description": "Test_Ent 220_V240S20Data100MB_Pooled",
                        "soc": "212188",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "CPD",
                            "PRICEPLAN_TYPE": "PD"
                        },
                        "sale-period": {
                            "start": "2014-01-01",
                            "end": "2017-06-02"
                        },
                        "rc": 220.0,
                        "service-level": "G",
                        "priceplan-type": "PD"
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
                            "end": "2015-12-31"
                        },
                        "rc": 299.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "EIPHAP21",
                        "description": "Ent_iPhone699V400mS300M50_OnNet free_WEG",
                        "soc": "264318",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2012-12-25",
                            "end": "2016-01-30"
                        },
                        "rc": 699.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "ESHRAP03",
                        "description": "P_Ent sharing 1,500Bt &data unlimit(no pro G)",
                        "soc": "936478",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "CSH",
                            "PRICEPLAN_TYPE": "SH"
                        },
                        "sale-period": {
                            "start": "2012-07-25",
                            "end": "2016-03-31"
                        },
                        "rc": 1500.0,
                        "service-level": "C",
                        "priceplan-type": "SH"
                    }, {
                        "name": "ESHRAP07",
                        "description": "P_Ent 300Bt sharing V370S20M10",
                        "soc": "843568",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "CSH",
                            "PRICEPLAN_TYPE": "SH"
                        },
                        "sale-period": {
                            "start": "2012-11-07",
                            "end": "2016-01-30"
                        },
                        "rc": 300.0,
                        "service-level": "G",
                        "priceplan-type": "SH"
                    }, {
                        "name": "ESVSMP09",
                        "description": "Biz&Ent 540bt Get400min,50SMS,CUG,F&F,UnWEG,3g384",
                        "soc": "1065119",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-02-16",
                            "end": "2016-12-31"
                        },
                        "rc": 540.0,
                        "service-level": "C",
                        "priceplan-type": "N"
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
                            "end": "2017-11-03"
                        },
                        "rc": 499.0,
                        "service-level": "C",
                        "priceplan-type": "N"
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
                            "end": "2017-11-03"
                        },
                        "rc": 699.0,
                        "service-level": "C",
                        "priceplan-type": "N"
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
                            "end": "2017-11-03"
                        },
                        "rc": 1099.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP03",
                        "description": "3G iSmart 599,VoiceAllNet300m,Net1.5GB, WiFiUNLTD",
                        "soc": "10634211",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 599.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP04",
                        "description": "3G iSmart 799,VoiceAllNet450m,Net2.5GB, WiFiUNLTD",
                        "soc": "10634411",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 799.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP05",
                        "description": "3G iSmart 999, VoiceAllNet600m, Net4GB, WiFiUNLTD",
                        "soc": "10634611",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 999.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP08",
                        "description": "4G iSmart 499, Voice150m, Net1.5GB, WiFi UNLTD",
                        "soc": "10655411",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 499.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP09",
                        "description": "4G iSmart 699,VoiceAllNet300m, Net 3GB, WiFiUNLTD",
                        "soc": "10655711",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 699.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP10",
                        "description": "4G iSmart 899, VoiceAllNet450m, Net5GB, WiFiUNLTD",
                        "soc": "10656011",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 899.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP11",
                        "description": "4G iSmart 1099,VoiceAllNet600m, Net 8GB, WiFiUNLTD",
                        "soc": "10656311",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 1099.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP12",
                        "description": "4G iSmart 1299,VoiceAllNet850m, Net10GB, WiFiUNLTD",
                        "soc": "10656611",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 1299.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP13",
                        "description": "4G iSmart 1499,VoiceAllNet1200m,Net10GB, WiFiUNLTD",
                        "soc": "10656911",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 1499.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "NPSMAP14",
                        "description": "4G iSmart 1899,VoiceAllNet2000m,Net10GB, WiFiUNLTD",
                        "soc": "10657511",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2015-01-16",
                            "end": "2015-10-06"
                        },
                        "rc": 1899.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "SMBUFP26",
                        "description": "Business True Move 199 Plus F&F_1 Baht 8pm-8am",
                        "soc": "572258",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2009-09-29",
                            "end": "2016-01-30"
                        },
                        "rc": 199.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "VPNCOP01",
                        "description": "Mobile VPN for True Corp - Corporate Solution # A1",
                        "soc": "263688",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2005-07-26",
                            "end": "2016-01-30"
                        },
                        "rc": 300.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "VTKC4P01",
                        "description": "Virtual Talk3 (A) 600 for Corp",
                        "soc": "265658",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "",
                            "PRICEPLAN_TYPE": "N"
                        },
                        "sale-period": {
                            "start": "2006-07-21",
                            "end": "2016-01-30"
                        },
                        "rc": 600.0,
                        "service-level": "C",
                        "priceplan-type": "N"
                    }, {
                        "name": "W2S02P04",
                        "description": "Corporate WOW2 Sharing Package 800-Limit 20 subs",
                        "soc": "937378",
                        "properties": {
                            "TR_SPECIAL_OFFER_IND": "CSH",
                            "PRICEPLAN_TYPE": "SH"
                        },
                        "sale-period": {
                            "start": "2005-06-27",
                            "end": "2016-01-30"
                        },
                        "rc": 16000.0,
                        "service-level": "G",
                        "priceplan-type": "SH"
                    }],
                    "mapped-propo-priceplans": [{
                        "proposition": {
                            "name": "AGE180000000001",
                            "description": "ลูกค้าอายุ 18 ปี แต่น้อยกว่า 20 ปี",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019136"
                        },
                        "priceplans": [{
                            "name": "BBSMEP26",
                            "description": "Biz_BB BIS 699 3WEG Unlimited",
                            "soc": "109936",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2012-03-13",
                                "end": "2016-01-31"
                            },
                            "rc": 449.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }, {
                            "name": "HTLK2P02",
                            "description": "POS_Corp High Talk 55,000 Tariff 1 Bt/min",
                            "soc": "572008",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2008-11-23",
                                "end": "2016-03-31"
                            },
                            "rc": 55000.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }]
                    }, {
                        "proposition": {
                            "name": "PC0000000000008",
                            "description": "SIM + BB Service",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019108"
                        },
                        "priceplans": [{
                            "name": "1GET1P19",
                            "description": "True Move 1500 - One Get One (Rollover) For12 mth",
                            "soc": "569378",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2006-01-03",
                                "end": "2016-01-30"
                            },
                            "rc": 1500.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMV000000000001",
                            "description": "Proposition for TEST RF ",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019537"
                        },
                        "priceplans": [{
                            "name": "70STGP02",
                            "description": "Biz Call 700, 70 Satang",
                            "soc": "104556",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2008-04-10",
                                "end": "2016-01-31"
                            },
                            "rc": 700.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }, {
                            "name": "BBPK2P05",
                            "description": "BB TMH Service 899",
                            "soc": "99423",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2012-02-16",
                                "end": "2016-06-30"
                            },
                            "rc": 719.0,
                            "service-level": "C",
                            "priceplan-type": "N"
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
                                "end": "2022-12-31"
                            },
                            "rc": 372.9,
                            "service-level": "C",
                            "priceplan-type": "N"
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
                            "service-level": "C",
                            "priceplan-type": "N"
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
                                "end": "2017-11-03"
                            },
                            "rc": 899.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }, {
                            "name": "RMTLKP34",
                            "description": "iTalk 299, voice400mins",
                            "soc": "102135",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-08-08",
                                "end": "2016-06-30"
                            },
                            "rc": 299.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }, {
                            "name": "STBN1P39",
                            "description": "3G iSmart 799,VoiceAllNet450m,Net2.5GB, WiFiUNLTD",
                            "soc": "1076489",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2015-04-07",
                                "end": "2016-04-03"
                            },
                            "rc": 799.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }]
                    }, {
                        "proposition": {
                            "name": "AGE150000000001",
                            "description": "ลูกค้าอายุ 15 ปี แต่น้อยกว่า 18 ปี",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019135"
                        },
                        "priceplans": [{
                            "name": "CBUFFP19",
                            "description": "POS_Corp 350 Bt bundle 300 Bt",
                            "soc": "263138",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2008-12-08",
                                "end": "2016-03-31"
                            },
                            "rc": 350.0,
                            "service-level": "C",
                            "priceplan-type": "N"
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
                                "end": "2017-11-03"
                            },
                            "rc": 899.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }]
                    }, {
                        "proposition": {
                            "name": "RMV000000000011",
                            "description": "New SIM+Handset",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019139"
                        },
                        "priceplans": [{
                            "name": "RMTLKP34",
                            "description": "iTalk 299, voice400mins",
                            "soc": "102135",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-08-08",
                                "end": "2016-06-30"
                            },
                            "rc": 299.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }]
                    }, {
                        "proposition": {
                            "name": "PC0000000000010",
                            "description": "SIM + iPhone",
                            "soc": null,
                            "rc": 0.0,
                            "service-level": null,
                            "proposition-code": "0019110"
                        },
                        "priceplans": [{
                            "name": "1GET1P19",
                            "description": "True Move 1500 - One Get One (Rollover) For12 mth",
                            "soc": "569378",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2006-01-03",
                                "end": "2016-01-30"
                            },
                            "rc": 1500.0,
                            "service-level": "C",
                            "priceplan-type": "N"
                        }, {
                            "name": "BMTY2P02",
                            "description": "Biz TMV-E1_25000bt,Buffet24hrs.Onnet, Offnet3bt",
                            "soc": "99555",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2011-02-23",
                                "end": "2016-01-31"
                            },
                            "rc": 25000.0,
                            "service-level": "C",
                            "priceplan-type": "N"
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
                            "name": "RMTLKP34",
                            "description": "iTalk 299, voice400mins",
                            "soc": "102135",
                            "properties": {
                                "TR_SPECIAL_OFFER_IND": "",
                                "PRICEPLAN_TYPE": "N"
                            },
                            "sale-period": {
                                "start": "2013-08-08",
                                "end": "2016-06-30"
                            },
                            "rc": 299.0,
                            "service-level": "C",
                            "priceplan-type": "N"
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
    this.getPriceplan = function (target, fnCallback) {
        that.aftersalePriceplan(target, function (result) {
            console.log("getPriceplan ::::::: ");
            console.log("target ::::: " + target);
            console.log(result);
            fnCallback(result);
            //alert('aftersalePriceplan');
            //SystemService.hideLoading();
        });
    };
    this.offerDetail = function (soc, fnCallback) {
        if (!demo) {
            var target = 'aftersales/tmv/priceplan/details?offer-code=' + soc;
            SystemService.callServiceGet(target, null, function (result) {
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
                            "special-offer-type": "FriendAndFamily"//FriendAndFamily
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
                            "special-offer-type": "FriendAndFamily"//FriendAndFamily
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
    this.getOfferDetail = function (soc, fnCallback) {
        that.offerDetail(soc, function (result) {
            console.log("getOfferDetail ::::::: ");
            console.log(result);
            fnCallback(result);
        });
    };
    this.getCUGList = function (fnCallback) {
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
            SystemService.callServiceGet(target, null, function (result) {
                fnCallback(result);
            });
        }

    };
    this.getCapmaxParameter = function (offerCode, fnCallback) {
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
            SystemService.callServiceGet(target, null, function (result) {
                fnCallback(result);
            });
        }
    };



});