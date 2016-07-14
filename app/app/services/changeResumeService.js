smartApp.service('resumeService', function($filter, SystemService, $routeParams) {
    var demo = SystemService.demo;
    var validateResumeAPI = function(msisdn, fnCallback) {

        if (!demo) {
            var target = 'aftersales/tmv/resume/validateresume?msisdn=' + msisdn;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "516A6VFT7CXN4",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "firstname": "customer",
                        "lastname": "",
                        "birthdate": "1996-07-07T15:30:56+0700",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "O",
                        "id-number": "755385/22",
                        "id-expire-date": "2020-12-31T00:00:00+0700",
                        "customer-id": "77901",
                        "installed-products": [{
                            "ouId": "39548",
                            "ban": "10070039",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "product-status": "Cancelled",
                            "account-category": "B",
                            "account-sub-type": "SRB",
                            "product-id": "SMRTPP87",
                            "product-name": "SMRTPP87",
                            "product-description": "iSmart 299, voice100mins net500MB UNLTD WiFi UNLTD",
                            "bill-cycle": "2",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-soc-code": "",
                            "subscriber-id": "105594",
                            "product-properties": {
                                "REASON-DESC": "Change Ownership",
                                "PRODUCT-STATUS-DESC": "Cancel",
                                "RESOURCE-SUBSCRIBER-STATUS": "PORT OUT AG",
                                "CURRENT-ACCOUNT-STATUS": "Active",
                                "PRODUCT-STATUS-DATE": "2016-06-29T17:12:02.000+07:00",
                                "IS-NEW-ACCOUNT": "false",
                                "IS-NEW-SIM": "false",
                                "CURRENT-SIM-STATUS": "AGING",
                                "REASON-CODE": "COWN",
                                "PRODUCT-STATUS-CODE": "RESUME-CANCEL-OA-OS",
                                "SUBSCRIBER-ID": "105594",
                                "REQUIRE-PRICEPLAN": "REQUIRE"/// 'NOT REQUIRE' : 'REQUIRE' //// update case selectPricePlan requirement by P'kwang ::: 08-07-2016 :: xsam32
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0610010588",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false
                        }]
                    }
                }
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "1",
                    "message-type": "ERROR",
                    "en-message": "Data not found!",
                    "th-message": "Data not found!",
                    "technical-message": ""
                }],
                "trx-id": "7MXLAYX2KRS5",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };

            var data3 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "2",
                    "message-type": "WARNING",
                    "en-message": "; nested exception is: \n\torg.xml.sax.SAXException: Invalid element in th.co.truecorp.ads.sff.ext.services.ccbint.resourcemanagement.NiceNumberInfoM - dealerCode",
                    "th-message": "; nested exception is: \n\torg.xml.sax.SAXException: Invalid element in th.co.truecorp.ads.sff.ext.services.ccbint.resourcemanagement.NiceNumberInfoM - dealerCode",
                    "technical-message": "CCB_INT Method : checkNiceNumber, URL : http://172.19.194.63:8280/SubscriberWS/ResourceManagement"
                }],
                "trx-id": "491045TMJELMZ",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "title": "นางสาว",
                        "title-code": "T3",
                        "firstname": "ว",
                        "lastname": "มาดู",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "P",
                        "id-number": "1189900130607",
                        "customer-id": "2595",
                        "installed-products": [{
                            "ouId": "930",
                            "ban": "10000546",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "product-status": "A",
                            "account-category": "I",
                            "account-sub-type": "FIN",
                            "product-id": "RFSMTP01",
                            "product-name": "RFSMTP01",
                            "product-description": "(4G) Smart 999 voice 500mins net7GB",
                            "bill-cycle": "10",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-properties": {
                                "IMSI": "520002081981781",
                                "SIM": "896600331500001222"
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0939861331",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false
                        }]
                    }
                }
            };
            var data4 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "5CX6ZEICYKEU",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "firstname": "โสลาศ",
                        "lastname": "",
                        "birthdate": "1995-11-23T18:51:28+0700",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "O",
                        "id-number": "2005031811179",
                        "id-expire-date": "2020-11-24T00:00:00+0700",
                        "customer-id": "60393",
                        "installed-products": [{
                            "ouId": "31443",
                            "ban": "10062023",
                            "product-category": "TMV",
                            "product-type": "R",
                            "product-sub-type": "R",
                            "product-status": "Cancelled",
                            "account-category": "B",
                            "account-sub-type": "SRE",
                            "product-id": "EDOGAP11",
                            "product-name": "EDOGAP11",
                            "product-description": "D_Ent_799_3GB DATA&amp;Wifi+HS",
                            "bill-cycle": "2",
                            "company-code": "RM",
                            "service-level": "C",
                            "product-soc-code": "",
                            "subscriber-id": "89405",
                            "product-properties": {
                                "REASON-DESC": "Customer request",
                                "PRODUCT-STATUS-DESC": "Cancel",
                                "CURRENT-ACCOUNT-STATUS": "Cancelled",
                                "PRODUCT-STATUS-DATE": "2015-11-25T00:00:00.000+07:00",
                                "IS-NEW-ACCOUNT": "true",
                                "IS-NEW-SIM": "true",
                                "CURRENT-SIM-STATUS": "AVAILABLE",
                                "REASON-CODE": "CREQ",
                                "PRODUCT-STATUS-CODE": "RESUME-CANCEL-OA-NS",
                                "SUBSCRIBER-ID": "89405"
                            },
                            "product-id-name": "MSISDN",
                            "product-id-number": "0863200731",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false
                        }]
                    }
                }
            };

            if (msisdn == "0870100002") {
                fnCallback({
                    status: true,
                    data: data3,
                    error: "",
                    msgErr: ""
                });
            } else if (msisdn == "0939861331") {
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
    var AccountSubtypeAPI = function(cust_type, company, service_type, fnCallback) {

        if (!demo) {
            var target = 'profiles/tmv/master/account-subtype?cust-type=' + cust_type + '&service-type=' + service_type + '&company=' + company;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
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
                }]
            };


            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        };
    };
    var masterListAPI = function(param, fnCallback) {
        if (!demo) {
            var target = 'aftersales/configuration/master/' + param;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data = {};
            switch (param) {
                case "CUST-GENDER":
                    data = {
                        "status": "SUCCESSFUL",
                        "trx-id": "3AJLEDUHEIF3",
                        "process-instance": "psaapdv1 (instance: SFF_node1)",
                        "response-data": {
                            "id": "CUST-GENDER",
                            "name": "Customer genders",
                            "description": "List of customer genders",
                            "configuration-items": [{
                                "key": "MAN",
                                "value": "M",
                                "description": "Gender type MAN",
                                "en-description": "Man",
                                "th-description": "ผู้ชาย"
                            }, {
                                "key": "WOMAN",
                                "value": "W",
                                "description": "Gender type WOMAN",
                                "en-description": "Woman",
                                "th-description": "ผู้หญิง"
                            }]
                        }
                    };
                    break;
                case "CUST-TITLE-TYPE":
                    data = {
                        "status": "SUCCESSFUL",
                        "trx-id": "3AJMUE93DMRZ",
                        "process-instance": "psaapdv1 (instance: SFF_node1)",
                        "response-data": {
                            "id": "CUST-TITLE-TYPE",
                            "name": "Customer title",
                            "description": "List of standard customer title",
                            "configuration-items": [{
                                "key": "MRS.",
                                "value": "T2",
                                "description": "นาง",
                                "en-description": "Mrs.",
                                "th-description": "นาง"
                            }, {
                                "key": "MISS",
                                "value": "T3",
                                "description": "นางสาว",
                                "en-description": "Miss",
                                "th-description": "นางสาว"
                            }, {
                                "key": "DR.",
                                "value": "T4",
                                "description": "ดร.",
                                "en-description": "Dr.",
                                "th-description": "ดร."
                            }, {
                                "key": "OTHER",
                                "value": "T5",
                                "description": "อื่่น ๆ",
                                "en-description": "Other",
                                "th-description": "อื่น ๆ"
                            }, {
                                "key": "MR.",
                                "value": "T1",
                                "description": "นาย",
                                "en-description": "Mr.",
                                "th-description": "นาย"
                            }]
                        }
                    };
                    break;
                case "CUST-ID-TYPE-I":
                    data = {
                        "status": "SUCCESSFUL",
                        "trx-id": "3AJLDR21IJM7",
                        "process-instance": "psaapdv1 (instance: SFF_node1)",
                        "response-data": {
                            "id": "CUST-ID-TYPE-I",
                            "name": "Customer ID type for individual customer",
                            "description": "List of id types for individual customer",
                            "configuration-items": [{
                                "key": "A",
                                "value": "A",
                                "description": "บัตรประจำตัวคนต่างด้าว"
                            }, {
                                "key": "D",
                                "value": "D",
                                "description": "บัตรประจำตัวพนักงานรัฐวิสาหกิจ"
                            }, {
                                "key": "E",
                                "value": "E",
                                "description": "ใบขับขี่"
                            }, {
                                "key": "F",
                                "value": "F",
                                "description": "บัตรนักเรียน"
                            }, {
                                "key": "G",
                                "value": "G",
                                "description": "บัตรประจำตัวข้าราชการ"
                            }, {
                                "key": "H",
                                "value": "H",
                                "description": "บัตรแสดงตนอื่นๆ"
                            }, {
                                "key": "I",
                                "value": "I",
                                "description": "บัตรประจำตัวประชาชน"
                            }, {
                                "key": "M",
                                "value": "M",
                                "description": "ใบสุทธิ"
                            }, {
                                "key": "O",
                                "value": "O",
                                "description": "ทะเบียนพาณิชย์"
                            }, {
                                "key": "P",
                                "value": "P",
                                "description": "หนังสือเดินทาง"
                            }, {
                                "key": "T",
                                "value": "T",
                                "description": "ทะเบียนวัด"
                            }]
                        }
                    };
                    break;
            }



            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        };
    };
    var validateGradingAPI = function(company_id, fnCallback) {
        if (!demo) {
            var target = 'profiles/customer/company/grade?company-id=' + company_id;
            SystemService.callServiceGetByPass(target, null, function(result) {
                fnCallback(result);
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
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };
    var getAccountSubTypeAPI = function(param, fnCallback) {
        var target = 'profiles/tmv/master/account-subtype?' +
            'cust-type=' + param['cust-type'] +
            '&company=' + param['company'] +
            '&service-type=' + param['service-type'] +
            //'&roles' + param['roles'] +
            '&grade=' + param['grade'];
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
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
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };
    var lastestCustomerAPI = function(certificateid, customertype, fnCallback) {
        if (!demo) {
            var target = 'profiles/customer/getlastestcustomer?certificateid=' + certificateid + '&customertype=' + customertype;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);

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
                        "title-code": "T3",
                        "firstname": "กอไก่",
                        "lastname": "ขอไข่",
                        'birthdate': '2015-07-20T00:00:00+0700',
                        'id-expire-date': '2020-07-20T00:00:00+0700',
                        "contact-number": "029448849#123",
                        "contact-mobile-number": "444444444",
                        "id-type": "",
                        "id-number": "1189900130607",
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
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "90/1",
                                "type": "CUSTOMER_ADDRESS",
                                "moo": "-",
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

            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3ERTIDCS16PT",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };

            if (certificateid == "1189900130608") {
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


        };
    };
    var salePriceplanAPI = function(target, fnCallback) {
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "5T1MLSM0X4JPD",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": [{
                    "name": "ESVSMP29",
                    "description": "B&E_(4G) 899_Allnet450min,UnFUP5GB,UnWiFi",
                    "soc": "1076069",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP28",
                    "description": "B&E_(4G) 899_Allnet450min,UnFUP10GB(6Mth),UnWiFi",
                    "soc": "1076059",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP33",
                    "description": "B&E_(3G) 999_Allnet600min,UnFUP4GB,UnWiFi",
                    "soc": "1076129",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP26",
                    "description": "B&E_(4G) 699_Allnet300min,UnFUP6GB(6Mth),UnWiFi",
                    "soc": "1076039",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP32",
                    "description": "B&E_(3G) 999_Allnet600min,UnFUP8GB(6Mth),UnWiFi",
                    "soc": "1076119",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP30",
                    "description": "B&E_(4G) 1099_Allnet600min,UnFUP16GB(6Mth),UnWiFi",
                    "soc": "1076079",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP31",
                    "description": "B&E_(4G) 1099_Allnet600min,UnFUP8GB,UnWiFi",
                    "soc": "1076099",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP27",
                    "description": "B&E_(4G) 699_Allnet300min,UnFUP3GB,UnWiFi",
                    "soc": "1076049",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-27",
                        "end": "2016-12-31"
                    },
                    "rc": 699.0,
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
                    "name": "CF01AP01",
                    "description": "P_Corporate 50 free F&F 1 No.",
                    "soc": "263998",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-15",
                        "end": "2017-01-01"
                    },
                    "rc": 50.0,
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
                    "name": "PLSMAP30",
                    "description": "4G/3G iSmart 699 Voice 300 min Net 8 GB UNLD",
                    "soc": "11182612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
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
                    "name": "STBN1P44",
                    "description": "Special 3G iSmart 999,V600m,Onnet24hr,Net4GB",
                    "soc": "1077169",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 999.0,
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
                    "name": "ESDATP46",
                    "description": "B&E_PPU_UnWEG5g384_All-net 1bt/min",
                    "soc": "10994612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-22",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "EDOGAP11",
                    "description": "D_Ent_799_3GB DATA&Wifi+HS",
                    "soc": "262568",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "NSAN1P21",
                    "description": "4G iSmart699Extra,V200m & OnNet19hrs, Net4GB, WiFi",
                    "soc": "1086979",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTPP87",
                    "description": "iSmart 299, voice100mins net500MB UNLTD WiFi UNLTD",
                    "soc": "101805",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2020-04-04"
                    },
                    "rc": 299.0,
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
                    "name": "NPSMAP30",
                    "description": "4G/3G iSmart 699 Voice 300 min Net 4 GB UNLD",
                    "soc": "11182712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESUSCP02",
                    "description": "Biz & Ent Bulk SMS40,000 Get 93,100 SMS_0.43bt",
                    "soc": "108986",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-17",
                        "end": "2017-01-01"
                    },
                    "rc": 40000.0,
                    "service-level": "C"
                }, {
                    "name": "SMTALP02",
                    "description": "SME 1000 Bundle 3000 all network",
                    "soc": "265628",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "BBINDP05",
                    "description": "BB TMH BBM 149",
                    "soc": "99103",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-01",
                        "end": "2016-06-30"
                    },
                    "rc": 104.0,
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
                    "name": "ESDATP30",
                    "description": "B&E 249 Bt_All-net 0.80bt_WiFi Unlimited",
                    "soc": "1083869",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-28",
                        "end": "2016-12-31"
                    },
                    "rc": 249.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP35",
                    "description": "4G/3G iSmart 1899 Voice 2000min Net 10GB UNLD",
                    "soc": "11185212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1899.0,
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
                    "name": "EBFN1P10",
                    "description": "Biz & Ent 1199 Smart Buffet All Net 8am-6pm (Next)",
                    "soc": "105946",
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
                    "name": "NPSMAP29",
                    "description": "4G/3G iSmart 599 Voice 300 min Net 2.5 GB UNLD",
                    "soc": "11182512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 599.0,
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
                    "name": "BUNG1P15",
                    "description": "TMH-Biz iPad 759, Data and wifi unlimited",
                    "soc": "261748",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
                    "service-level": "C"
                }, {
                    "name": "BGPR1P13",
                    "description": "Biz Data RC70bt, get 30MB",
                    "soc": "262808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-01-12",
                        "end": "2017-01-01"
                    },
                    "rc": 70.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP41",
                    "description": "Biz&Ent 649_Allnet8AM-8PM,50SMS,10MMS,FUP1GB,WiFi",
                    "soc": "10450310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-14",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP19",
                    "description": "Biz&Ent 399_Onnet12PM-6PM,V200,UNLTD2GB,WiFi",
                    "soc": "10254810",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "RMIPHP52",
                    "description": "TMH Size (S) 399Bt Disc 60Bt (RC339)",
                    "soc": "105785",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 339.0,
                    "service-level": "C"
                }, {
                    "name": "BUFFTP40",
                    "description": "Business Buffet 799 All-Net 7am-7pm",
                    "soc": "263878",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
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
                    "name": "ESBFOP03",
                    "description": "B&E_1400Bt BuffetOnnet24hrs.,UnWEG7GB/384Kb",
                    "soc": "10572311",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 1400.0,
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
                    "name": "SMRTBP74",
                    "description": "True Smart Choice 450Mins Unlimited data(4GB)&WiFi",
                    "soc": "11254912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-12",
                        "end": "2016-01-31"
                    },
                    "rc": 849.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP42",
                    "description": "B&E BuffA_799_7am7pm,S50UnWEG,3g384",
                    "soc": "11155712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-28",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
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
                    "name": "ESMHAP01",
                    "description": "SmP_GOV_399_200Min_10SMS_UnlGPRS_FreeWifi5hrs_HS",
                    "soc": "569108",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-24",
                        "end": "2016-01-30"
                    },
                    "rc": 372.89,
                    "service-level": "C"
                }, {
                    "name": "CORP6P09",
                    "description": "P_Corp 300 OnNet 0.75 OffNet 1.40 Plus 20SMS",
                    "soc": "262448",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-28",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "BGPR1P15",
                    "description": "Biz Net Sim RC 150_Data 150 MB",
                    "soc": "262818",
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
                    "name": "EBFAAP31",
                    "description": "Biz & Ent Buffet 799_ Mon-Fri 7AM-7PM,SAT&SUN",
                    "soc": "10112610",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-21",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "BUNN1P51",
                    "description": "Biz Net899, 3WEG Unlimited(PP.Next)",
                    "soc": "261788",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-07",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP01",
                    "description": "B&E RC 449_Data FUP 2GB & WiFi",
                    "soc": "10574911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 449.0,
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
                        "end": "2025-07-02"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "1BAHTP02",
                    "description": "SME True Move 399 One Baht Per Minute & handset",
                    "soc": "262788",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP01",
                    "description": "V0S1G1_Biz&Ent 69 bt_Data 15 MB",
                    "soc": "10599511",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2017-01-01"
                    },
                    "rc": 69.0,
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
                    "name": "BUNG1P17",
                    "description": "TMH-Biz iPad 899, Data and wifi unlimited",
                    "soc": "261758",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP10",
                    "description": "POS_Corp Buffet 599 7.00 am-6.00 pm",
                    "soc": "263968",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-07-21",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
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
                    "name": "SMS8CP02",
                    "description": "S_BulkSMS 10,000Bt_get 10,000SMS_Out 1.00Bt/SMS",
                    "soc": "99935",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-05-26",
                        "end": "2017-01-01"
                    },
                    "rc": 10000.0,
                    "service-level": "C"
                }, {
                    "name": "BGPR1P18",
                    "description": "Business 3G+/EDGE/GPRS 20MB, 30 Bt",
                    "soc": "261698",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-18",
                        "end": "2017-01-01"
                    },
                    "rc": 30.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP09",
                    "description": "B&E PrivateAPN_Data 8MB (2Baht/MB)_MG",
                    "soc": "1095429",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-13",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SERPUP05",
                    "description": "S_Corp PayPerUse Bulk sms On/ Off net 1.50 Bt/sms",
                    "soc": "98285",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-05-12",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "ESBFAP36",
                    "description": "B&E Buffet 649_AllNet8AM-10PM,S50M20UnWEG1g384",
                    "soc": "11079012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-31",
                        "end": "2016-12-31"
                    },
                    "rc": 649.0,
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
                    "name": "PLTKAP09",
                    "description": "iTalk+ 499 VoiceAllNet650min, Net500MB, FB12m.",
                    "soc": "11205412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP35",
                    "description": "B&E Buffet 549_AllNet 8AM-10PM,S50M20_0.99/min",
                    "soc": "11077612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-31",
                        "end": "2016-12-31"
                    },
                    "rc": 549.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P37",
                    "description": "Biz Net Sim RC 899_3WEG Unlimited",
                    "soc": "261778",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-24",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P45",
                    "description": "3G iSmart 600+,OnNet24hr, AllNet100m,Net750MB Unlt",
                    "soc": "1078539",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-10",
                        "end": "2016-07-06"
                    },
                    "rc": 600.0,
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
                    "name": "HTLK1P14",
                    "description": "E_Corp High talk 35,000 All Network 1.50Bt/min",
                    "soc": "571988",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-19",
                        "end": "2017-01-01"
                    },
                    "rc": 35000.0,
                    "service-level": "C"
                }, {
                    "name": "SMS8CP01",
                    "description": "S_BulkSMS 50,000B_Bundle 125,000SMS_Out 0.40Bt/SMS",
                    "soc": "99735",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-04-20",
                        "end": "2017-01-01"
                    },
                    "rc": 50000.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P45",
                    "description": "Biz_iPack 899, get 3GEW_UNLTD",
                    "soc": "263938",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "BUNG1P43",
                    "description": "Business 3G+/EDGE/GPRS Unlimited, 899bt",
                    "soc": "264888",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-18",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "BUNG1P27",
                    "description": "Biz Data Sim 759_3WEG Unlimited",
                    "soc": "261768",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-03",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
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
                    "name": "ESDPVP12",
                    "description": "V0S0G1_B&E Private APN_Unimited_(ERAWAN)",
                    "soc": "11040212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "BCONVP02",
                    "description": "Biz True Move on-net 8am-5pm(Wifi+TripleSpeed)",
                    "soc": "261688",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 69.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP25",
                    "description": "B&E_599_OnNet 24 Hrs,V 500S50,UnWEG,5g384",
                    "soc": "11213112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-15",
                        "end": "2016-12-31"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P37",
                    "description": "3G iSmart 399,VoiceAllNet150m,Net750MB, WiFiUNLTD",
                    "soc": "1076409",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-07",
                        "end": "2016-03-03"
                    },
                    "rc": 399.0,
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
                        "end": "2016-01-31"
                    },
                    "rc": 199.0,
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
                    "name": "ESMN1P31",
                    "description": "Biz & Ent_Smart 149",
                    "soc": "570878",
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
                    "name": "RMIP1P23",
                    "description": "iPad 249",
                    "soc": "120636",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-12-20",
                        "end": "2016-06-04"
                    },
                    "rc": 249.0,
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
                    "name": "PLTKAP07",
                    "description": "iTalk+ 199, Voice All Net 250 min, FB12 m.",
                    "soc": "11200112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP28",
                    "description": "B&E 1399_BuffetAllnet00:00-19:59,100smsFUP6GB,WiFi",
                    "soc": "1092649",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP06",
                    "description": "3G iSmart Starter249, V100m,Net1GB,WiFi,Social 6m.",
                    "soc": "10637211",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2016-02-04"
                    },
                    "rc": 249.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP20",
                    "description": "B&E_2,299_All-net 1.25bt/min,UnWEG3GB/384",
                    "soc": "1069409",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-19",
                        "end": "2016-12-31"
                    },
                    "rc": 2299.0,
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
                    "name": "EDOGAP07",
                    "description": "D_Ent_799_Unlimited DATA+HS",
                    "soc": "262558",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
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
                    "name": "RMSM1P03",
                    "description": "Smartphone 399,Voice 150mins, Data200MB,Wi-Fi15hrs",
                    "soc": "26571",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-08-30",
                        "end": "2016-06-30"
                    },
                    "rc": 399.0,
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
                    "name": "CBUFFP13",
                    "description": "POS_Corp Buffet 450 Bt 8.00-17.59",
                    "soc": "262408",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-08-14",
                        "end": "2017-01-01"
                    },
                    "rc": 450.0,
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
                    "name": "ESVSMP50",
                    "description": "Biz&Ent _349_V500UnWEG,1g384",
                    "soc": "11155812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-28",
                        "end": "2016-12-31"
                    },
                    "rc": 349.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP32",
                    "description": "B&E 1350_Data FUP5GB , WiFi",
                    "soc": "1083889",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-28",
                        "end": "2016-12-31"
                    },
                    "rc": 1350.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP20",
                    "description": "4G iSmart 499 Extra, V100m, Net2GB, WiFi Unltd",
                    "soc": "1086959",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
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
                    "name": "BBINDP07",
                    "description": "BB TMH Service 719",
                    "soc": "99123",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-01",
                        "end": "2016-06-30"
                    },
                    "rc": 539.0,
                    "service-level": "C"
                }, {
                    "name": "EVHSAP07",
                    "description": "P_Ent_300_Get 200bt 8am-5pm 100MB DATA+HS",
                    "soc": "265538",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-11",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP19",
                    "description": "B&E_PPU_All-net 0.80bt/min",
                    "soc": "1097649",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-13",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "T2RIPP03",
                    "description": "Monthly fee iPhone (L) 799 Bt/mth",
                    "soc": "89773",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-12",
                        "end": "2016-06-30"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "EVON1P03",
                    "description": "P_GOV_NET 399_Next",
                    "soc": "569188",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-30"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP10",
                    "description": "Biz & Ent BuffA_2199_6am-6pmUnWEG,10g384",
                    "soc": "1069419",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-10",
                        "end": "2016-12-31"
                    },
                    "rc": 2199.0,
                    "service-level": "C"
                }, {
                    "name": "NSAN1P20",
                    "description": "4G iSmart499 Extra,V100m & OnNet12hrs, Net2GB,WiFi",
                    "soc": "1086949",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP83",
                    "description": "Biz & Ent 1599_V500minSMS300MMS50UNLTD3GB & WiFi",
                    "soc": "10371110",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 1599.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP29",
                    "description": "B&E 2,099_Buffet Allnet 24hrs,200sms,FUP10GB,WiFi",
                    "soc": "1092659",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 2099.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P32",
                    "description": "iSmart 500, Voice All Net 100 mins net500MB UNLTD",
                    "soc": "116396",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-11-18",
                        "end": "2016-01-31"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P52",
                    "description": "iSmart Plus499,V250m Net2GB, WiFi",
                    "soc": "1089619",
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
                    "name": "EDOGAP22",
                    "description": "Don_GOV_399_UnlimitedGPRS_FreeWifi5hrs_HS",
                    "soc": "569038",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-24",
                        "end": "2016-01-30"
                    },
                    "rc": 372.89,
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
                    "name": "SMRTPP90",
                    "description": "iSmart 599, voice300mins net1.5GB UNLTD",
                    "soc": "101975",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2016-03-31"
                    },
                    "rc": 599.0,
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
                    "name": "T2RIPP02",
                    "description": "Monthly fee iPhone (M) 579 Bt/mth",
                    "soc": "89763",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-12",
                        "end": "2016-06-30"
                    },
                    "rc": 579.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP31",
                    "description": "B&E 699_Data FUP5GB , WiFi",
                    "soc": "1083879",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-28",
                        "end": "2016-12-31"
                    },
                    "rc": 699.0,
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
                    "name": "CCONVP02",
                    "description": "Corp True Move on-net 8am-5pm(Wifi+TripleSpeed)",
                    "soc": "263988",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-01-20",
                        "end": "2017-01-01"
                    },
                    "rc": 69.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P16",
                    "description": "TMH-Biz iPad 759, Data and wifi unlimited (RC559)",
                    "soc": "570608",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 559.0,
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
                    "name": "EDOGAP01",
                    "description": "D_Ent_649_3GB DATA&WiFi+HS",
                    "soc": "569018",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "T2RIPP01",
                    "description": "Monthly fee iPhone (S) 399 Bt/mth",
                    "soc": "89753",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-12",
                        "end": "2016-06-30"
                    },
                    "rc": 399.0,
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
                    "name": "EDATAP86",
                    "description": "Biz & Ent Data Pack 899_Data FUP 10GB & WiFi",
                    "soc": "10258910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "ESMPAP82",
                    "description": "Biz & Ent 1000_V2000Bt,SMS70,MMS40,Data1GB & WiFi",
                    "soc": "10357710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "CUGFRP41",
                    "description": "P_Corp 99 bt CUG  tariff 1.5bt All network",
                    "soc": "262458",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-06-11",
                        "end": "2017-01-01"
                    },
                    "rc": 99.0,
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
                    "name": "EVOCAP14",
                    "description": "Ent _Voice 0 Bt (On net 0.90Bt, Off net 1.25Bt)",
                    "soc": "262058",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2016-12-31"
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
                    "name": "EIPDAP04",
                    "description": "iPD_Ent smart pack1,799_Data+WiFi unlimit",
                    "soc": "109606",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 1799.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV4P03",
                    "description": "Biz490bt,get700min,All-net 1bt/min,2bt/sms",
                    "soc": "263868",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-17",
                        "end": "2017-01-01"
                    },
                    "rc": 490.0,
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
                    "name": "SMAN1P74",
                    "description": "Jumbo 799,voice450min net4GB ULTD",
                    "soc": "10139310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-22",
                        "end": "2016-02-03"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "CDTK2P01",
                    "description": "POS_Corp 500 Double talk All network 24 hrs",
                    "soc": "264948",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-24",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "BTMV3P04",
                    "description": "Biz800bt,get650min,24hrsCUG,30sms,10hrsEDGE/GPRS",
                    "soc": "263858",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-08",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
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
                    "name": "ESDATP53",
                    "description": "B&E 499 Bt_Data 250MB&wifi Unlimit_voice 0.75bt",
                    "soc": "11062212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
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
                    "name": "IPHN1P28",
                    "description": "Biz iPhoneFreeSize599,300min,Data2GB,_ULT(PP.Next)",
                    "soc": "264458",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "IPHN1P32",
                    "description": "Biz iPad799, 3WEG Unlimited(PP.Next)",
                    "soc": "263538",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP12",
                    "description": "TMH-Biz iPhone FreeSize599 Call 300min 3G/EG 2GB",
                    "soc": "263558",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
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
                    "name": "ESDTBP02",
                    "description": "V0S1G1_Biz&Ent 0 bt_ SMS 10,Data 40 MB",
                    "soc": "10627411",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "CMGBTP01",
                    "description": "POS_Mobile CUG 750, On-net 1.25, Off-net 1.5",
                    "soc": "264998",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-10-10",
                        "end": "2016-01-30"
                    },
                    "rc": 750.0,
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
                    "name": "CHTKAP02",
                    "description": "Biz & Ent E1 RC 12,000_All-Net 0.45 Baht/min",
                    "soc": "121787",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-05-08",
                        "end": "2015-12-31"
                    },
                    "rc": 12000.0,
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
                    "name": "EVON1P02",
                    "description": "P_GOV_Smart 899_Next",
                    "soc": "570078",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-30"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "BPPU1P02",
                    "description": "Biz Free to Talk RC0, Extra 1 bt/min",
                    "soc": "261728",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-02",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                        "end": "2016-03-31"
                    },
                    "rc": 799.0,
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
                    "name": "IPHSMP18",
                    "description": "Biz Free to Surf&Talk1849,500min,300sms,50mms,WEG",
                    "soc": "264488",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-17",
                        "end": "2017-01-01"
                    },
                    "rc": 1849.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP24",
                    "description": "B&E_Voice 0.99Bt,SMS 2Bt,MMS 2Bt ,Data 1Bt,WiFi1Bt",
                    "soc": "11321212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-15",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "ESDPVP01",
                    "description": "V0S0G1_B&E PrivateAPN_Data 0.5Bt/MB_FORTHSMART",
                    "soc": "10524811",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-12-16",
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
                    "name": "EBFN1P11",
                    "description": "Biz & Ent 1399 Smart Buffet All Net 8am-8pm (Next)",
                    "soc": "106046",
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
                    "name": "BSMRTP22",
                    "description": "Biz SmartPhone899,500min,300sms,50mms,3GEW-ULTD",
                    "soc": "262868",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-06",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "EBFN1P12",
                    "description": "Biz & Ent 1599 Smart Buffet All net 8am-10pm(Next)",
                    "soc": "106146",
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
                    "name": "EBFOAP01",
                    "description": "Ent _1,499Buffet 06.00-17.59Data&wifiUN(Fair 5 GB)",
                    "soc": "265218",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-11-01",
                        "end": "2017-01-01"
                    },
                    "rc": 1499.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP03",
                    "description": "Biz Package 300_Buffet Onnet,200min,3EG UNLTDFU200",
                    "soc": "263288",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-11-26",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P51",
                    "description": "iSmart Plus399,V200m Net1.5GB, WiFi",
                    "soc": "1089599",
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
                    "name": "ESDATP01",
                    "description": "B&E_PPU_All-net 1.25bt/min,UnWEG3GB/384",
                    "soc": "10536711",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-28",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "BUSTBP04",
                    "description": "Biz Talk RC 800 Get 1,100 min",
                    "soc": "262398",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-24",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P15",
                    "description": "3GSmartPhone399 OnNet24hr UNLT net2GB&WiFi",
                    "soc": "1062109",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 399.0,
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
                    "name": "EDOGAP14",
                    "description": "D_Ent_1,099_Unlimited DATA&WiFi_HS",
                    "soc": "117796",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP06",
                    "description": "BizSmartPack500,Voice500mins,Data300MB",
                    "soc": "262308",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP16",
                    "description": "B&E 1399_FreeOnnet,V800min,50sms,5mms,FUP3GB,WiFi",
                    "soc": "1095799",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP30",
                    "description": "B&E 1599_BuffetAllnet00:00-21:59,200smsFUP7GB,WiFi",
                    "soc": "1093499",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1599.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTPP77",
                    "description": "iSmart 200, voice100mins net200MB",
                    "soc": "103393",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-04-03",
                        "end": "2250-08-08"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP24",
                    "description": "True Move Business 300 Buffet On-net 24 hrs.",
                    "soc": "571198",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-09",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP34",
                    "description": "Biz599,get349,20sms,24hrs.BuffetSuperOn,Other1.25",
                    "soc": "262768",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-24",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P26",
                    "description": "Biz Data Sim 349 Data 1GB_WiFi 15 Hrs",
                    "soc": "262368",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-03",
                        "end": "2017-01-01"
                    },
                    "rc": 349.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP36",
                    "description": "B&E 1599_Voice400min,75sms,Data FUP3GB,WiFi",
                    "soc": "10995512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-23",
                        "end": "2016-12-31"
                    },
                    "rc": 1599.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTAP51",
                    "description": "Galaxy 1100 Disc50% on RC 24 mths",
                    "soc": "110327",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-06",
                        "end": "2016-02-04"
                    },
                    "rc": 550.0,
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
                    "name": "BSMRTP07",
                    "description": "BizSmartPack800,Voice800mins,Data500MB,WiFi ULT",
                    "soc": "262318",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP29",
                    "description": "P_GOV_Smart 899",
                    "soc": "265488",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-14",
                        "end": "2016-01-30"
                    },
                    "rc": 840.18,
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
                    "name": "ESVOCP06",
                    "description": "B&E_PPU_Onnet0.60,Offnet0.70",
                    "soc": "1069199",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-19",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "RMTLKP01",
                    "description": "Talk 400,voice 400mins all net",
                    "soc": "33881",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-08-26",
                        "end": "2016-06-30"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP69",
                    "description": "B&E_PPU_UnWEG5g384_All-net 0.99bt/min",
                    "soc": "11270112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-24",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SER2CP04",
                    "description": "SMS_Bulk SMS (Service ID) 10,000 for Police Sector",
                    "soc": "572198",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 6000.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P50",
                    "description": "Galaxy700 Voice150mins Net1GB",
                    "soc": "110317",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-06",
                        "end": "2016-02-04"
                    },
                    "rc": 700.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP29",
                    "description": "Biz&Ent 999_Onnet24Hrs,V550,UNLTD5GB,WiFi_Next2",
                    "soc": "10256810",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P54",
                    "description": "Jumbo 599, voice300mins net1.5GB UNLTD",
                    "soc": "110557",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-02-28",
                        "end": "2016-02-03"
                    },
                    "rc": 599.0,
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
                    "name": "SMBUFP09",
                    "description": "SME True Move 799 Buffet 8am-8pm",
                    "soc": "263638",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-10-09",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP15",
                    "description": "SME super on-net 299 7am-7pm",
                    "soc": "265608",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-02-12",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP16",
                    "description": "SME super on-net 399 w handset",
                    "soc": "262168",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
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
                }, {
                    "name": "EAASMP10",
                    "description": "DoubleA: Mobile WEG unlimit FUP5G/384 (200 min)",
                    "soc": "947568",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-13",
                        "end": "2017-01-01"
                    },
                    "rc": 698.0,
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
                    "name": "SMBUFP20",
                    "description": "Business True Move 199 7am-7pm",
                    "soc": "262188",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-22",
                        "end": "2017-01-01"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "SMS3CP21",
                    "description": "S_Corp bulk sms 2,000 get1,000sms step charge A2P",
                    "soc": "572308",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-03",
                        "end": "2017-01-01"
                    },
                    "rc": 2000.0,
                    "service-level": "C"
                }, {
                    "name": "SMS7CP07",
                    "description": "S_BulkSMS PPU OnNet 0.30 OffNet 0.43 for Affiliate",
                    "soc": "99115",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-06-13",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "ESVSMP54",
                    "description": "Biz & Ent 110_Voice300min,FUP4GB,Wi-Fi",
                    "soc": "11275512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-13",
                        "end": "2016-12-31"
                    },
                    "rc": 110.0,
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
                    "name": "ESDATP43",
                    "description": "B&E 489_Data FUP 1GB & WiFi",
                    "soc": "1092339",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 489.0,
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
                        "end": "2016-03-03"
                    },
                    "rc": 950.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P18",
                    "description": "3GSmartPhone1499 AllNet16hr UNLTD net7GB&WiFi",
                    "soc": "1062169",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 1499.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP28",
                    "description": "Biz&Ent 999_Onnet24Hrs,V550,UNLTD10GB,WiFi_Next1",
                    "soc": "10256710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "SMTALP03",
                    "description": "SME True Move 549 Buffet on-net 7am-7pm",
                    "soc": "569318",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 549.0,
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
                    "name": "ESVOCP10",
                    "description": "B&E_PPU_All-net 0.90bt,SMS1.3bt,MMS3bt",
                    "soc": "1071649",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-31",
                        "end": "2016-12-31"
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
                    "name": "SMPL1P01",
                    "description": "SME true move with Plus Phone",
                    "soc": "569288",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "BUNN1P47",
                    "description": "Biz Net649, Data3GB,WiFi Unlimited(PP.Next)",
                    "soc": "947498",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-07",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP08",
                    "description": "B&E 1300 Bt_UnWEG2g384_1bt",
                    "soc": "1085059",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
                    },
                    "rc": 1300.0,
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
                    "name": "ESVOCP20",
                    "description": "B&E_PPU_All-net 0.90bt/min",
                    "soc": "11114212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-07",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP41",
                    "description": "4G/3G iSmart 399 Voice 150 min Net 1GB UNLD",
                    "soc": "11203012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "CTMV1P13",
                    "description": "P_Corp 1,000Bt On-Net 1.25Bt Off-Net 1.50Bt",
                    "soc": "568888",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-08-19",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "CUGFRP18",
                    "description": "Pos Corp 400 Bundle 350+ H/S_1.25Bt/min_CUG Free",
                    "soc": "264048",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-01-29",
                        "end": "2017-01-01"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "CUGFRP36",
                    "description": "Biz TMV 299 get 299 min,free CUG  24hrs",
                    "soc": "264058",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-11-23",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP14",
                    "description": "B&E 499_FreeOnnet,V500min,50sms,5mms,FUP500MB,WiFi",
                    "soc": "1095719",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
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
                    "name": "ESDATP22",
                    "description": "Biz&Ent _PPU _UnWEG2GB/384Kb",
                    "soc": "1070069",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "CPPU1P01",
                    "description": "POS_Pay per used onnet 1.0 Bt offnet 1.3 Bt",
                    "soc": "261838",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-09-19",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
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
                    "service-level": "C"
                }, {
                    "name": "STBN1P53",
                    "description": "iSmart Plus699,V300m Net4GB, WiFi",
                    "soc": "1089679",
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
                    "name": "GURL2P07",
                    "description": "SookX2 Anywhere with Box 599",
                    "soc": "115417",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-20",
                        "end": "2016-03-31"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "BGPR1P21",
                    "description": "Business 3G+/EDGE/GPRS 50 Hrs, 199Bt (7mth oward)",
                    "soc": "569468",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-18",
                        "end": "2017-01-01"
                    },
                    "rc": 199.0,
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
                    "name": "ESDATP19",
                    "description": "B&E_2,189_All-net 1.25bt/min,UnWEG3GB/384",
                    "soc": "1069399",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-19",
                        "end": "2016-12-31"
                    },
                    "rc": 2189.0,
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
                    "name": "ESBFOP34",
                    "description": "B&E RC 350_Buffet Super Onnet 24hrs,FUP3GB,WiFi",
                    "soc": "11352412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-22",
                        "end": "2016-12-31"
                    },
                    "rc": 350.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP07",
                    "description": "B&E_PPU_All-net 0.80bt/min",
                    "soc": "1070059",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-17",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP07",
                    "description": "B&E 630 Bt_UnWEG2g384_1bt",
                    "soc": "1085049",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
                    },
                    "rc": 630.0,
                    "service-level": "C"
                }, {
                    "name": "1BAHTP05",
                    "description": "Pos Corp_399_All_Network 1Baht Only",
                    "soc": "264688",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-10-10",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "70STGP01",
                    "description": "Biz Call 490, 70 Satang",
                    "soc": "104486",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-04-10",
                        "end": "2017-01-01"
                    },
                    "rc": 490.0,
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
                    "name": "CMTY1P18",
                    "description": "CE_Corporate Mighty Talk 85,000 Bt/1.20",
                    "soc": "571398",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-11-05",
                        "end": "2017-01-01"
                    },
                    "rc": 85000.0,
                    "service-level": "C"
                }, {
                    "name": "CMTY1P24",
                    "description": "CE_Corporate Mighty Talk 30,000 Bt/ 1.10",
                    "soc": "571408",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-06",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
                    "name": "BPBF2P02",
                    "description": "Business CP 650 Buffet 6am-6pm (1 Bt/min)",
                    "soc": "262288",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-04-10",
                        "end": "2017-01-01"
                    },
                    "rc": 650.0,
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
                    "name": "EBFOAP20",
                    "description": "Biz&Ent 399_Onnet12PM-6PM,V200,UNLTD1GB,WiFi_Next",
                    "soc": "10254910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "CMTY4P02",
                    "description": "CE_Corp Mighty Talk On-net 1.2, Off-net 1.5",
                    "soc": "569638",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-10-18",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "CMTYBP01",
                    "description": "E_Corp Mighty Talk Both Way 7,500",
                    "soc": "570688",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-11-06",
                        "end": "2016-12-31"
                    },
                    "rc": 7500.0,
                    "service-level": "C"
                }, {
                    "name": "CNETWP01",
                    "description": "POS_Corp 300 bun 300 On Net0.75 Off Net1.50",
                    "soc": "568808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
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
                    "name": "EDATAP19",
                    "description": "D_Ent_759_Unlimited DATA&WiFi",
                    "soc": "115406",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-22",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
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
                    "name": "BUFFTP41",
                    "description": "Business Buffet 1,099 All-Net 8:00am-8:00pm",
                    "soc": "262908",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-12-25",
                        "end": "2016-12-31"
                    },
                    "rc": 1099.0,
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
                    "name": "GURL2P06",
                    "description": "SookX2 Anywhere with Box 499",
                    "soc": "115407",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-20",
                        "end": "2016-03-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP23",
                    "description": "Biz&Ent _PPU _UnWEG5GB/384Kb",
                    "soc": "1070079",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P02",
                    "description": "Business GPRS/EDGE Unlimited Package 599 Baht",
                    "soc": "263898",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-22",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "CORP6P13",
                    "description": "P_Corp 1,000_On 0.25_Off 1.30",
                    "soc": "568828",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-02-02",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "EIPHAP02",
                    "description": "i_Ent smart pack 800_CUG+Data+WiFi unlimit",
                    "soc": "265358",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-13",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
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
                    "name": "CPBF2P03",
                    "description": "Corporate CP 899 Buffet 6am-6pm (1 Bt/min)",
                    "soc": "264038",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-01-18",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP31",
                    "description": "B&E 659_Buffet Allnet 7AM-8PM and 75sms",
                    "soc": "10996512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-23",
                        "end": "2016-12-31"
                    },
                    "rc": 659.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP02",
                    "description": "BizSmartphone399,Voice150mins,Data200MB,Wi-Fi15hrs",
                    "soc": "262298",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP18",
                    "description": "B&E_800_All-net 1.25bt/min,UnWEG1GB/384",
                    "soc": "1069299",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-19",
                        "end": "2016-12-31"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP04",
                    "description": "BizSmartphone899bundle500mins,sms300,mms50,WEG ULT",
                    "soc": "261738",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP15",
                    "description": "Biz-smart649bt,350min,300sms,50mms,WEG-unlimit",
                    "soc": "262858",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-21",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
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
                    "name": "RMIN2P48",
                    "description": "iPhone M Monthly Fee 579 Bt/Mth",
                    "soc": "102543",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-04-05",
                        "end": "2016-01-31"
                    },
                    "rc": 579.0,
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
                    "name": "ESVOCP08",
                    "description": "Biz&Ent _PPU _On0.70Off1bt",
                    "soc": "1070049",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                        "end": "2016-03-03"
                    },
                    "rc": 750.0,
                    "service-level": "C"
                }, {
                    "name": "CTMV1P12",
                    "description": "P_Corp 1,000 All-Net 1.10 Bt/Min",
                    "soc": "569758",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-07-14",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP16",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(SATUN)",
                    "soc": "11028912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "BUSTBP03",
                    "description": "Biz Talk RC 500 Get 650 min",
                    "soc": "262998",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-24",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "BUSTBP07",
                    "description": "Biz Talk RC 350 Get 400 min",
                    "soc": "264928",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-30",
                        "end": "2017-01-01"
                    },
                    "rc": 350.0,
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
                    "name": "CMTY1P11",
                    "description": "CE_Corp Mighty Talk 30,000 Bt/ On-net 0.6, Off 0.9",
                    "soc": "100135",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-02-16",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP27",
                    "description": "P_GOV_Smart 399",
                    "soc": "265468",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-14",
                        "end": "2016-01-30"
                    },
                    "rc": 372.89,
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
                    "name": "ESVSMP04",
                    "description": "B&E RC 1,149_Data FUP 2GB & WiFi",
                    "soc": "10577911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 1149.0,
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
                    "name": "MNPB1P06",
                    "description": "Biz TrueMove 2,000 get 2,500 min, 1 B/min",
                    "soc": "569248",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-23",
                        "end": "2017-01-01"
                    },
                    "rc": 2000.0,
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
                    "name": "BGPR1P22",
                    "description": "Business 3G+/EDGE/GPRS 100 Hrs, 349Bt(7mth oward)",
                    "soc": "570498",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-18",
                        "end": "2017-01-01"
                    },
                    "rc": 349.0,
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
                    "name": "STBN1P17",
                    "description": "3GSmartPhone899 AllNet12hr UNLTD net5GB&WiFi",
                    "soc": "1062149",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 899.0,
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
                    "name": "CBUFFP03",
                    "description": "POS_CorpSud Khum599Unlimited all network5:00-16:59",
                    "soc": "947518",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-08-27",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP07",
                    "description": "POS_Corp Buffet 399, onnet 7am-7pm",
                    "soc": "568708",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-06-18",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
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
                    "name": "ESBFAP13",
                    "description": "B&E_(4G) 899_Allnet7AM-7PM,UnFUP3GB,UnWiFi",
                    "soc": "1071809",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "CUNN1P04",
                    "description": "POS_Corp 599 2/1/1 onward. All network 24hrs",
                    "soc": "570758",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-09-28",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P28",
                    "description": "Biz Data Sim 899_3WEG Unlimited",
                    "soc": "262938",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-03",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "ESBFAP16",
                    "description": "Biz & Ent Buffet 499_ Mon-Fri 8AM-8PM,SAT&SUN",
                    "soc": "1077409",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-21",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
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
                    "name": "BUNG1P50",
                    "description": "Biz Net799, 3WEG Unlimited(Dis.10%)",
                    "soc": "262378",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-07",
                        "end": "2017-01-01"
                    },
                    "rc": 719.1,
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
                    "name": "SMRTBP17",
                    "description": "3GSmartPhone899dis150 AllNet12hr UNLTDnet5GB&WiFi",
                    "soc": "1062139",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 749.0,
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
                    "name": "SERPUP01",
                    "description": "Corp Bulk SMS (SID) Pay Per Use 1.50 baht",
                    "soc": "569278",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP38",
                    "description": "B&E Buffet All-net 899,7am7pm,UnWEG,3g384",
                    "soc": "11126012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "CDGC1P10",
                    "description": "Pos Corp 300,Bun200Bt. Free CUG, On Net 1.00Bt/min",
                    "soc": "263148",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-03-10",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "CDTK2P03",
                    "description": "POS_Corp 1000 Double talk All network 24 hrs",
                    "soc": "568748",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-24",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP15",
                    "description": "3GSmartPhone399dis100 OnNet24hr UNLT net2GB&WiFi",
                    "soc": "1062099",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "CSERCP03",
                    "description": "Cool SMS (Service ID) - 2000",
                    "soc": "569718",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 2150.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP59",
                    "description": "B&E Data Pack 50_Data FUP500MB,WiFi UNLTD",
                    "soc": "11173212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-12",
                        "end": "2016-12-31"
                    },
                    "rc": 50.0,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP08",
                    "description": "P_Ent_Enterprise Package (099125)",
                    "soc": "117876",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 99.0,
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
                    "name": "NPTKAP07",
                    "description": "iTalk+ 199, Voice All Net 250 min",
                    "soc": "11200212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P16",
                    "description": "3GSmartPhone599 AllNet10hr UNLTD net4GB&WiFi",
                    "soc": "1062129",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP38",
                    "description": "4G iSmartBuffet899 All12hr net5GB WiFi UNLTD",
                    "soc": "11197312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "SER1CP03",
                    "description": "Corporate Bulk SMS S3 (Service ID) : step 3",
                    "soc": "572188",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 7200.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTPP87",
                    "description": "iSmart 299, voice100mins net500MB UNLTD WiFi UNLTD",
                    "soc": "101805",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2020-04-04"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESHRAP18",
                    "description": "Ent _1000_V1000BtS250M50Data Unlimited",
                    "soc": "265418",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP09",
                    "description": "P_Ent_Enterprise Package (099150)",
                    "soc": "117886",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 99.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP39",
                    "description": "4G iSmartBuffet1499dis500 All16hr net7GB WiFiUNLTD",
                    "soc": "11198812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESHSAP10",
                    "description": "Ent_679Sharing 400bt S50M10 WEG Unlimited(Fair1GB)",
                    "soc": "936868",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-10-30",
                        "end": "2017-01-01"
                    },
                    "rc": 679.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV1P01",
                    "description": "Business True Move 299, 1.25 Baht per minute",
                    "soc": "262338",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-16",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
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
                    "name": "EIPHAP15",
                    "description": "E_Ent_1000_iPhone V200S20 Unlimited Data Wifi+HS",
                    "soc": "264308",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-18",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
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
                    "name": "CHTKAP01",
                    "description": "Biz & Ent E1 30,000 Get 30,000 Baht",
                    "soc": "126156",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-02-20",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
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
                    "name": "UR2TRP30",
                    "description": "True Life Free View 500 get 800 Bt.",
                    "soc": "76992",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-24",
                        "end": "2016-06-30"
                    },
                    "rc": 345.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP21",
                    "description": "B&E 1,500_Data UNLTD FUP10GB & WiFi",
                    "soc": "1069129",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-17",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP14",
                    "description": "B&E_(4G)1299_Allnet7AM-11PM,UnFUP16GB(6Mth),UnWiFi",
                    "soc": "1071819",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 1299.0,
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
                    "name": "SMS2CP02",
                    "description": "Corp_Bulk SMS (P2P) 4,000 Bt (5000SMS_0.8Bt/SMS)",
                    "soc": "572268",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 4000.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP06",
                    "description": "3G iSmart Starter249, VAllNet100m,Net1GB,WiFiUNLTD",
                    "soc": "10637611",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2016-02-04"
                    },
                    "rc": 249.0,
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
                    "name": "ESBFOP15",
                    "description": "B&E 799_FreeOnnet,V800min,50sms,5mms,FUP2GB,WiFi",
                    "soc": "1095759",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
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
                    "name": "70STGP03",
                    "description": "Biz Call 1190, 70 Satang",
                    "soc": "104626",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-04-10",
                        "end": "2017-01-01"
                    },
                    "rc": 1190.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP15",
                    "description": "B&E_(4G) 1299_Allnet7AM-11PM,UnFUP8GB,UnWiFi",
                    "soc": "1071829",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 1299.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP03",
                    "description": "V0S1G1_Biz&Ent 249 bt_ SMS 20,UnEG,steady384Kbps.",
                    "soc": "10628911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2017-01-01"
                    },
                    "rc": 249.0,
                    "service-level": "C"
                }, {
                    "name": "BPPU2P01",
                    "description": "Biz Free to Talk RC0, 8.00-16.59@ 0.75bt/min",
                    "soc": "997808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-02",
                        "end": "2016-03-31"
                    },
                    "rc": 0.0,
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
                    "name": "RMTLKP45",
                    "description": "iTalk 299_Second, Voice All Net 299 min",
                    "soc": "1065329",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-01",
                        "end": "2016-07-06"
                    },
                    "rc": 299.0,
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
                    "name": "HTLK1P19",
                    "description": "E_Corp HighTalk 30,000 AllNet 0.02 Bt/Sec",
                    "soc": "569218",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-11-04",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
                    "name": "CHTKAP08",
                    "description": "Biz & Ent E1_ 15,000 Bt_V15,000Bt_On0.60,Off0.70bt",
                    "soc": "10484211",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-07",
                        "end": "2015-12-31"
                    },
                    "rc": 15000.0,
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
                    "name": "BTMV4P04",
                    "description": "Biz1000bt,get1400min,All-net 1bt/min,2bt/sms",
                    "soc": "262348",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-17",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P20",
                    "description": "Biz Data Sim 649 Data 3GB_WiFi Unlimited",
                    "soc": "262358",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-10",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
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
                    "name": "RMIPHP48",
                    "description": "iPhone M (1-18 mths, 389 baht)",
                    "soc": "102243",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-04-05",
                        "end": "2016-01-31"
                    },
                    "rc": 389.0,
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
                    "name": "SMBUFP26",
                    "description": "Business True Move 199 Plus F&F_1 Baht 8pm-8am",
                    "soc": "572258",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-29",
                        "end": "2017-01-01"
                    },
                    "rc": 199.0,
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
                    "name": "PLNTAP17",
                    "description": "4G iNet499,Net3GB UNLT,Social Unlt,WiFiUNLT",
                    "soc": "1073199",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-24",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "SERPUP04",
                    "description": "S_BulkSMS_Pay Per Use 0.80Bt/SMS",
                    "soc": "572218",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-06-14",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "SMRTBP16",
                    "description": "3GSmartPhone599dis150 AllNet10hr UNLTDnet4GB&WiFi",
                    "soc": "1062119",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 449.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP32",
                    "description": "B&E RC 999_Buffet On-net24Hrs,FUP6GB,WiFi",
                    "soc": "11258512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP27",
                    "description": "Biz&Ent 999_Onnet24Hrs,V550,UNLTD15GB,WiFi",
                    "soc": "10256610",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK1P04",
                    "description": "CE_Corp HighTalk65,000Bt, 1.10Bt/min_Second charge",
                    "soc": "100755",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-03-12",
                        "end": "2017-01-01"
                    },
                    "rc": 65000.0,
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
                    "name": "STBN1P58",
                    "description": "iSmart Plus299,V200m Net1GB, WiFi",
                    "soc": "1094509",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-09",
                        "end": "2016-07-31"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "DUMMYPP1",
                    "description": "Dummy offer for testing",
                    "soc": "10418310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-24",
                        "end": "2250-08-08"
                    },
                    "rc": 1000000.0,
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
                    "name": "EAASMP12",
                    "description": "DoubleA: Mobile WEG unlimit FUP5G/384 (500 min)",
                    "soc": "571518",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-13",
                        "end": "2017-01-01"
                    },
                    "rc": 698.0,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP07",
                    "description": "P_Ent_Enterprise Package (099100)",
                    "soc": "117836",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 99.0,
                    "service-level": "C"
                }, {
                    "name": "CPBF3P01",
                    "description": "P_Corp 300B bundle 250B TMV unlimited working hour",
                    "soc": "569678",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-10-02",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "EVON1P04",
                    "description": "P_GOV_NET 899_Next",
                    "soc": "570088",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-30"
                    },
                    "rc": 899.0,
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
                    "name": "ESDTBP10",
                    "description": "V0S0G1_Biz&Ent 899 bt_ UnWEG,10g384",
                    "soc": "1088999",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP22",
                    "description": "B&E_PPU_Voice1.25Bt,S1.25Bt,M3Bt,Data2Bt,WiFi1Bt",
                    "soc": "11277912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESMHAP29",
                    "description": "Biz&Ent_Smart849BtV300S100UnWEG3g384",
                    "soc": "122387",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-05-19",
                        "end": "2017-01-01"
                    },
                    "rc": 849.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP56",
                    "description": "B&E_Data FUP 1GB , WiFi Unlimited",
                    "soc": "11106912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "CMTY1P26",
                    "description": "CE_Corp Mighty talk 30,000 Bt bundle 30,000 Bt",
                    "soc": "569628",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-08-21",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
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
                    "name": "SMS3CP02",
                    "description": "Corporate Bulk SMS : TRUE-SAN",
                    "soc": "572278",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 31000.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP25",
                    "description": "B&E RC 1500_V400Baht,SMS50,MMS20,FUP1GB,WiFi",
                    "soc": "1069739",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP30",
                    "description": "B&E RC 599_Buffet On-net24Hrs,FUP5GB,WiFi",
                    "soc": "11258312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 599.0,
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
                    "name": "ESDATP61",
                    "description": "B&E_Wi-Fi UNLTD_Rate 0.90Baht/min",
                    "soc": "11229512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP06",
                    "description": "V0S1G1_B&E Data Pay Per Use_20sms",
                    "soc": "10610311",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-27",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "UBCCNP07",
                    "description": "Monthly fee 179 bt/mt Call 120 min  All Network",
                    "soc": "34161",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-09-30",
                        "end": "2016-06-30"
                    },
                    "rc": 179.0,
                    "service-level": "C"
                }, {
                    "name": "RMTLKP07",
                    "description": "TMH299-299mins all net1.25bt SMS 3 bt MMS 5bt 24hr",
                    "soc": "76922",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-15",
                        "end": "2016-06-30"
                    },
                    "rc": 299.0,
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
                    "name": "BBCHTP06",
                    "description": "BB TMH Chat_Social 249",
                    "soc": "52172",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-01",
                        "end": "2016-06-30"
                    },
                    "rc": 159.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP17",
                    "description": "B&E 299_FreeOnnet and Voice500min",
                    "soc": "1095809",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP27",
                    "description": "B&E Data Pack 899_Data FUP5GB , WiFi UNLTD",
                    "soc": "1083499",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP09",
                    "description": "B&E 1899 Bt_UnWEG3g384_onnet 0.75bt,0ffnet 1 bt",
                    "soc": "1092989",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 1899.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP30",
                    "description": "Biz & Ent 899 Buffet All Net 8am-8pm",
                    "soc": "10068610",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-06-30",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                        "end": "2016-03-31"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK1P10",
                    "description": "E Corp High talk 40,000 All Network 1.25Bt/min",
                    "soc": "570118",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-01-16",
                        "end": "2017-01-01"
                    },
                    "rc": 40000.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP05",
                    "description": "B&E_PPU_All-net 1bt/min",
                    "soc": "1067639",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-10",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "CSERCP05",
                    "description": "Cool SMS (Service ID) 400 Bt(300sms_1.35Bt/sms)",
                    "soc": "569738",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP05",
                    "description": "B&E RC 1,499_Data FUP 2GB & WiFi",
                    "soc": "10578011",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 1499.0,
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
                    "name": "HTLK1P05",
                    "description": "High Talk 40,000 B bundle 40,000 B tariff 1.20 B",
                    "soc": "570108",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-22",
                        "end": "2017-01-01"
                    },
                    "rc": 40000.0,
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
                    "name": "PLSMAP37",
                    "description": "4G iSmartBuffet599dis150 All10hr net4GB WiFi UNLTD",
                    "soc": "11195512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 449.0,
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
                        "end": "2016-01-31"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP13",
                    "description": "SME True Move 999 Buffet 6am- 6pm",
                    "soc": "262158",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-01-31",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "SER2CP08",
                    "description": "Bulk SMS (service ID) 5,000 SMS for ToyRus",
                    "soc": "572208",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 4000.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP13",
                    "description": "TMH-Biz iPhone(XL)899, 500min 2G/3G/WiFi Unlimited",
                    "soc": "262088",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "EIPDGP02",
                    "description": "iPD_GOV_1200_UnlimitedGPRS_Wifi",
                    "soc": "89443",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-31"
                    },
                    "rc": 1200.0,
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
                    "name": "ESDPVP05",
                    "description": "B&E PrivateAPN_Data 8MB_MG",
                    "soc": "1068349",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-17",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP33",
                    "description": "4G/3G iSmart 1299 Voice 850 min Net 10GB UNLD",
                    "soc": "11184212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1299.0,
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
                    "name": "SMS3CP20",
                    "description": "S_BulkSMS_Pay Per Use 0.43Bt/SMS_Step",
                    "soc": "572298",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-04-20",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP06",
                    "description": "SME True Move 799 Buffet 7am- 6pm",
                    "soc": "262128",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-09-21",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
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
                    "name": "SERPUP06",
                    "description": "S_Corp PayPerUse Bulk sms On/Off 0.45, P2P 1.50",
                    "soc": "572228",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-07-23",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SERPUP02",
                    "description": "S_Corp Bulk SMS Pay Per Use_Start1.50Bt/sms",
                    "soc": "97965",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-05-27",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "SPNETP04",
                    "description": "iNet 4G Extra Net350,Net1GB UNLTD",
                    "soc": "10474911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-06",
                        "end": "2016-01-05"
                    },
                    "rc": 350.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP33",
                    "description": "B&E Buffet 449_AllNet7AM-9PM,S50UnWEG1g128_1bt/Min",
                    "soc": "11048412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 449.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP12",
                    "description": "B&E_(4G) 899_Allnet7AM-7PM,UnFUP6GB(6Mth),UnWiFi",
                    "soc": "1071799",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-12",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "SMS3CP12",
                    "description": "POS_Corp Bulk SMS 12,000 B out bundle tariff 1.0 B",
                    "soc": "572288",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
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
                    "name": "ESMPAP08",
                    "description": "D_Ent smart pack_Data unlimit(Fair usage 2 GB)",
                    "soc": "998668",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "CSERCP01",
                    "description": "Cool SMS (Service ID) - 500",
                    "soc": "569708",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 600.0,
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
                    "name": "RMTLKP10",
                    "description": "TMH600-650mins all net 1 bt SMS 3 bt MMS 5 bt 24hr",
                    "soc": "76942",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-15",
                        "end": "2016-06-30"
                    },
                    "rc": 600.0,
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
                    "name": "EIPHGP02",
                    "description": "iPh_GOV_1200_800Min_50SMS_10MMS_UnlGPRS_Wifi",
                    "soc": "89463",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-31"
                    },
                    "rc": 1200.0,
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
                    "name": "ESVSMP20",
                    "description": "Biz & Ent 199 Get 100min,CUG,F&F,3WEG 500mb128",
                    "soc": "1069679",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "EAASMP14",
                    "description": "DoubleA: Mobile WEG unlimit FUP5G/384(1,000 min)",
                    "soc": "264138",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-13",
                        "end": "2017-01-01"
                    },
                    "rc": 698.0,
                    "service-level": "C"
                }, {
                    "name": "EIPDGP03",
                    "description": "iPD_GOV_1400_UnlimitedGPRS_Wifi",
                    "soc": "89453",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-31"
                    },
                    "rc": 1400.0,
                    "service-level": "C"
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
                    "name": "EDATBP05",
                    "description": "V0S0G1_Ent_799_Unlimited DATA&WiFi",
                    "soc": "265288",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-09",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP54",
                    "description": "IQ Pack 500,Pay199B.18m. V100 Mins, 3GUnltd 500MB",
                    "soc": "1091729",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP20",
                    "description": "4G iSmart499 Extra,V100m&OnNet12hrs,Net3.5GB, WiFi",
                    "soc": "1086819",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP03",
                    "description": "B&E_PPU_All-net 0.90bt/min",
                    "soc": "10622711",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-17",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "EDATAP48",
                    "description": "P_GOV_NET 899",
                    "soc": "265258",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-14",
                        "end": "2016-01-30"
                    },
                    "rc": 840.18,
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
                    "name": "SMBUFP17",
                    "description": "SME super on-net 299 7am-7pm",
                    "soc": "262178",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP31",
                    "description": "B&E RC 799_Buffet On-net24Hrs,FUP5GB,WiFi",
                    "soc": "11258412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
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
                    "name": "SMS7CP02",
                    "description": "S_Corp Bulk SMS10,000_On 0.40, Off Net 0.90B/sms",
                    "soc": "572338",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-10",
                        "end": "2017-01-01"
                    },
                    "rc": 10000.0,
                    "service-level": "C"
                }, {
                    "name": "EDOGBP02",
                    "description": "V0S0G1_Ent_849_Unlimited DATA&WiFi+HS",
                    "soc": "266328",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-18",
                        "end": "2017-01-01"
                    },
                    "rc": 849.0,
                    "service-level": "C"
                }, {
                    "name": "SMS5CP03",
                    "description": "Pos Corp Bulk SMS 2,500 Bundle 3,000 SMS",
                    "soc": "572318",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-15",
                        "end": "2017-01-01"
                    },
                    "rc": 2500.0,
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
                    "name": "EIPHGP03",
                    "description": "iPh_GOV_1400_1000Min_50SMS_10MMS_UnlGPRS_Wifi",
                    "soc": "89473",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-31"
                    },
                    "rc": 1400.0,
                    "service-level": "C"
                }, {
                    "name": "BBINDP09",
                    "description": "BB Net 450_Free Voice 100 mins",
                    "soc": "97943",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-01",
                        "end": "2016-06-30"
                    },
                    "rc": 270.0,
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
                    "name": "ESDATP55",
                    "description": "B&E 1500 Bt_UnWEG8g384_voice all-net 0.75bt/min",
                    "soc": "11060312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP45",
                    "description": "B&E Buffet Allnet799,8am8pm,Sat&Sun,S50UnWEG,1g384",
                    "soc": "11246912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-11",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP60",
                    "description": "B&E 400Bt_Call All-net 1 bt/min",
                    "soc": "11199912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-19",
                        "end": "2016-12-31"
                    },
                    "rc": 400.0,
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
                    "name": "CSERCP04",
                    "description": "Cool SMS (Service ID) - 3000",
                    "soc": "569728",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 3100.0,
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
                    "name": "ESDPVP23",
                    "description": "B&E PrivateAPN_Data 8MB (2Baht/MB)_MG",
                    "soc": "11173312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-29",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "ESDATP54",
                    "description": "B&E 899 Bt_UnWEG6g384_voice allnet 1.25 bt",
                    "soc": "11121912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-08",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
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
                    "name": "SMRTBP58",
                    "description": "iSmart Plus299,V200m Net2GB, WiFi",
                    "soc": "1094499",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-09",
                        "end": "2016-07-31"
                    },
                    "rc": 299.0,
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
                    "name": "EDATBP02",
                    "description": "V0S0G1_Ent_699_Unlimited DATA&WiFi",
                    "soc": "262008",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-18",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
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
                    "name": "CHTKAP06",
                    "description": "Biz & Ent E1_All-Net 0.90 Baht/min",
                    "soc": "10393910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-06",
                        "end": "2015-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "EVHSAP04",
                    "description": "P_Ent_300_Get 200min 100MB DATA+HS",
                    "soc": "109276",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP14",
                    "description": "B&E_Voice Onnet 0.45 , Offnet 0.65 Baht/min",
                    "soc": "1086709",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-04",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP23",
                    "description": "B&E RC 1300_V1300Baht,SMS250,MMS50,FUP3GB,WiFi",
                    "soc": "1069689",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1300.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP15",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(FUNAN)",
                    "soc": "11041112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "EBFOAP17",
                    "description": "Biz & Ent Buffet on-net 1099bt 6am-6pm",
                    "soc": "10068710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-04",
                        "end": "2016-12-31"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "SMS7CP03",
                    "description": "S_Corp Bulk SMS5,000_On 0.40, Off Net 1.05B/sms",
                    "soc": "572348",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-06-10",
                        "end": "2017-01-01"
                    },
                    "rc": 5000.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP14",
                    "description": "TMH-Biz iPhone(XXL)999,500min 2G/3G/WiFi Unlimited",
                    "soc": "262098",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
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
                    "name": "SMS5CP04",
                    "description": "S_BulkSMS_270,000B_Bundle 600,000SMS_Out0.45Bt/SMS",
                    "soc": "572328",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 270000.0,
                    "service-level": "C"
                }, {
                    "name": "EIPHAP11",
                    "description": "i_Ent smart pack1,599_Data+WiFi unlimit_HS",
                    "soc": "264298",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-25",
                        "end": "2017-01-01"
                    },
                    "rc": 1599.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP41",
                    "description": "4G/3G iSmart 399 Voice 150 min Net 3GB UNLD",
                    "soc": "11203312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP35",
                    "description": "Biz & Ent 1,199_Buffet All Net 10PM-8PM,Data 200MB",
                    "soc": "10353210",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 1199.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP25",
                    "description": "B&E_PPU_All-net 0.90bt/min(sec)",
                    "soc": "11327812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-16",
                        "end": "2017-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP24",
                    "description": "B&E PrivateAPN159_V100min,100SMS,100MB (MG)_NextPP",
                    "soc": "11173412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-29",
                        "end": "2016-12-31"
                    },
                    "rc": 159.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP40",
                    "description": "B&E Buffet All-net 1299,24hrs,UnWEG,3g384",
                    "soc": "11127112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 1299.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP36",
                    "description": "4G iSmart Buffet 399 OnNet24hr net2GB WiFi UNLTD",
                    "soc": "11194212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 399.0,
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
                    "name": "ONETPP02",
                    "description": "ONE",
                    "soc": "570198",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2005-12-03",
                        "end": "2016-01-30"
                    },
                    "rc": 499.0,
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
                    "name": "RMPN1P52",
                    "description": "TMH Size S Monthly Fee 399Bt (RC0)",
                    "soc": "106305",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 0.0,
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
                    "name": "ESVOCP15",
                    "description": "Biz&Ent PPU voice All net 0.43 bt",
                    "soc": "1088719",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-08",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P73",
                    "description": "Jumbo 599, voice300mins net3GB UNLTD",
                    "soc": "10139110",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-22",
                        "end": "2016-02-03"
                    },
                    "rc": 599.0,
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
                    "name": "CHTKAP05",
                    "description": "Biz & Ent E1 30,000_V30,000Baht_1.20Baht/min (RR)",
                    "soc": "10204910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-14",
                        "end": "2015-12-31"
                    },
                    "rc": 30000.0,
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
                    "name": "ESVSMP24",
                    "description": "B&E RC 1650_V1000Baht,SMS250,MMS50,FUP3GB,WiFi",
                    "soc": "1069699",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1650.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP06",
                    "description": "B&E PrivateAPN 149_100SMS&100MB_MG_Next PP",
                    "soc": "1068569",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-17",
                        "end": "2016-12-31"
                    },
                    "rc": 149.0,
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
                    "name": "SER1CP02",
                    "description": "Corporate Bulk SMS S2 (Service ID) : step 2",
                    "soc": "570248",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 5000.0,
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
                    "name": "ESDATP38",
                    "description": "B&E 1,650_Data FUP3GB & WiFi",
                    "soc": "1091689",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1650.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP14",
                    "description": "SME super on-net 399 w handset",
                    "soc": "570298",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-02-12",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP41",
                    "description": "D_Ent_299_UnlimitedDATA",
                    "soc": "264198",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-11-19",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP28",
                    "description": "Biz iPhoneFreeSize599,300min,Data2GB,_ULT(Dis.10%)",
                    "soc": "570168",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 539.1,
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
                        "end": "2016-07-06"
                    },
                    "rc": 199.0,
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
                    "name": "NETSAP20",
                    "description": "V0S0G1_3G iNet 99 Data 200MB (True Partner)",
                    "soc": "1094399",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2017-05-15"
                    },
                    "rc": 99.0,
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
                    "name": "RMTLKP05",
                    "description": "TMH250-250mins all net 1 bt SMS 3 bt MMS 5 bt 24hr",
                    "soc": "75662",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-15",
                        "end": "2017-01-06"
                    },
                    "rc": 250.0,
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
                        "end": "2016-06-04"
                    },
                    "rc": 759.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP22",
                    "description": "B&E RC 1000_V1000Baht,SMS250,MMS50,FUP2GB,WiFi",
                    "soc": "1069669",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP06",
                    "description": "P_Ent_Enterprise Package (000150)",
                    "soc": "106396",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "CUGFRP19",
                    "description": "Pos Corp 600 Bundle 550+ H/S_1.25Bt/min_CUG Free",
                    "soc": "569778",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-03-13",
                        "end": "2017-01-01"
                    },
                    "rc": 600.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP43",
                    "description": "Biz&Ent 799_Allnet8AM-8PM,50SMS,10MMS,FUP3GB,WiFi",
                    "soc": "10451210",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-14",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
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
                    "name": "EBFAAP34",
                    "description": "Biz & Ent 999_Buffet All Net 10PM-8PM",
                    "soc": "10353110",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESHRAP16",
                    "description": "Ent _800_V800BtS250M50Data150MB",
                    "soc": "262028",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP05",
                    "description": "B&E 1000 Bt_UnWEG5g384_1bt",
                    "soc": "1067449",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-10",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
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
                    "name": "ESVSMP35",
                    "description": "B&E RC 499_Voice100min,Data FUP1GB,Wi-Fi",
                    "soc": "1083629",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP26",
                    "description": "Biz&Ent 799_Onnet24Hrs,V450,UNLTD3GB,WiFi_Next2",
                    "soc": "10256510",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTPP92",
                    "description": "iSmart 899,voice500min net3GB ULTD",
                    "soc": "102015",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2016-03-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP10",
                    "description": "Biz&Ent1,500bt400min,50SMS,CUG,F&F,UnWEG,3g384",
                    "soc": "1065129",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
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
                    "name": "SER1CP04",
                    "description": "Corporate Bulk SMS S4 (Service ID) : step 4",
                    "soc": "570258",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 8000.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP09",
                    "description": "V0S1G1_Biz&Ent PPU SMS1.25Bt_MMS3Bt_Data2Bt/MB",
                    "soc": "1067509",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-10",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "CSERCP06",
                    "description": "Cool SMS (Service ID) 500 Bt(400sms_1.25Bt/sms)",
                    "soc": "569748",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "EIPHAP01",
                    "description": "i_Ent smart pack599 get 300min  Data&WiFi unlimit",
                    "soc": "262018",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-13",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
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
                    "name": "SMRTBP28",
                    "description": "4G OppoPack699,Disc RC 100 B,Data6GB 6 Months",
                    "soc": "1061079",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 599.0,
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
                    "name": "RMPN2P52",
                    "description": "TMH Size S Monthly Fee 399Bt/Mth",
                    "soc": "106365",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 399.0,
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
                    "name": "ESDATP37",
                    "description": "B&E 1,500_Data FUP1GB & WiFi",
                    "soc": "1091679",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP01",
                    "description": "D_Ent_500_3GB DATA&WiFi",
                    "soc": "264188",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "RMIPHP15",
                    "description": "iPhone 800 3G+/EDGE/GPRS/Wi-Fi ultd",
                    "soc": "89593",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-01-31",
                        "end": "2016-06-30"
                    },
                    "rc": 800.0,
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
                    "name": "RMPN2P54",
                    "description": "TMH Size L Monthly Fee 799Bt/Mth",
                    "soc": "106405",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP10",
                    "description": "B&E 1699 Bt_UnWEG3g384_onnet 0.75bt,0ffnet 1 bt",
                    "soc": "1093179",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 1699.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP25",
                    "description": "B&E 799_Allnet 7AM-7PM, Data FUP1GB,WiFi",
                    "soc": "1084799",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "PLBUSP02",
                    "description": "Biz PlatinumPackage for Smart Phone49,000B 24 Mths",
                    "soc": "570228",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-01-14",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP11",
                    "description": "B&E 1049 Bt_UnWEG2g384_onnet 0.75bt,0ffnet 1 bt",
                    "soc": "1093189",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 1049.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP28",
                    "description": "B&E RC 199_Buffet On-net24Hrs,FUP1GB,WiFi",
                    "soc": "11257512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP35",
                    "description": "B&E 1000_Data FUP 2GB & WiFi",
                    "soc": "1091659",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "EBFN1P15",
                    "description": "Biz & Ent 650 Smart Buffet OnNet 6am-6pm (Next )",
                    "soc": "106336",
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
                    "name": "STBN1P28",
                    "description": "4GSmartPhone 699, VoiceBuffet 7am.-7pm.,Data 3B",
                    "soc": "1061089",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "NTAN1P08",
                    "description": "4G iNet 1099, 4G Net 14GB, TVS 1GB, WiFi UNLTD",
                    "soc": "10650011",
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
                    "name": "ESDATP06",
                    "description": "B&E 2000 Bt_UnWEG5g384_1bt",
                    "soc": "1067499",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-10",
                        "end": "2017-01-01"
                    },
                    "rc": 2000.0,
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
                    "name": "ESBFOP29",
                    "description": "B&E RC 299_Buffet On-net24Hrs,FUP2GB,WiFi",
                    "soc": "11258212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "SERPUP03",
                    "description": "S_BulkSMS_Pay Per Use 0.43Bt/SMS",
                    "soc": "570288",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-06-14",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMBN1P14",
                    "description": "iSmart299, V120m,net750MB UNL FU128Kbps",
                    "soc": "10597111",
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
                    "name": "ESVSMP06",
                    "description": "B&E RC 1,849_Data FUP 3GB & WiFi",
                    "soc": "10578111",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 1849.0,
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
                    "name": "PLSMAP42",
                    "description": "4G/3G iSmart 499 Voice 200 min Net 4 GB UNLD",
                    "soc": "11203212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP27",
                    "description": "4G OppoPack499,Disc RC 100 B,Data3GB 6 Months",
                    "soc": "1061049",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP25",
                    "description": "Biz&Ent 799_Onnet24Hrs,V450,UNLTD6GB,WiFi_Next1",
                    "soc": "10256410",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
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
                    "name": "ESDATP36",
                    "description": "B&E 1,300_Data FUP3GB & WiFi",
                    "soc": "1091669",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1300.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTAP35",
                    "description": "iSmart 199 voice on-net 100 min",
                    "soc": "117386",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-11-25",
                        "end": "2016-06-30"
                    },
                    "rc": 199.0,
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
                    "name": "RMPN1P54",
                    "description": "TMH Size L Monthly Fee 799Bt (RC0)",
                    "soc": "106345",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P27",
                    "description": "4G OppoPack499, VoiceBuffet7am.-5pm.,Data1.5GB",
                    "soc": "1061059",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P42",
                    "description": "Business 3G+/EDGE/GPRS Unlimited, 799Bt",
                    "soc": "569538",
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
                    "name": "ESVSMP07",
                    "description": "B&E RC 749_Data FUP 2GB & WiFi",
                    "soc": "10578211",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 749.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP36",
                    "description": "4G iSmartBuffet399dis100 On24hr net2GB WiFi UNLTD",
                    "soc": "11194112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP11",
                    "description": "B&E 1,000_Voice1,000Baht,SMS50,UNLTD FUP5GB,WiFi",
                    "soc": "1065469",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-25",
                        "end": "2016-12-31"
                    },
                    "rc": 1000.0,
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
                    "name": "BBCHTP07",
                    "description": "BB TMH Chat_Email 249",
                    "soc": "52312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-01",
                        "end": "2016-06-30"
                    },
                    "rc": 159.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP03",
                    "description": "V0S0G1_Biz & Ent Private APN 200_Data UNLTD",
                    "soc": "10632111",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-12-31"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P56",
                    "description": "Jumbo 999,voice550min net3GB ULTD",
                    "soc": "110577",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-02-28",
                        "end": "2016-02-03"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP36",
                    "description": "Biz&Ent1399_BuffetAllNet 10PM-8PM,DataUNLTD3GB/384",
                    "soc": "10353310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP04",
                    "description": "B&E_200_Onnet0.75,Offnet1",
                    "soc": "10630911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2017-01-01"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP47",
                    "description": "Biz Value Time 300 Get 300 Bt.8am-5pm 75 Satang",
                    "soc": "570318",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-05",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP26",
                    "description": "P Corp 399 all network 1Bt ,8 am-8pm",
                    "soc": "569568",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-22",
                        "end": "2017-01-01"
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
                    "name": "STBN1P55",
                    "description": "IQ Pack 700,Pay700B. V100 Mins, 3G/4GUnlt 1.5GB",
                    "soc": "1091809",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 700.0,
                    "service-level": "C"
                }, {
                    "name": "APRILP10",
                    "description": "True Move 2000 - 25 Satang new (Rollover)-For12mth",
                    "soc": "570368",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2006-01-03",
                        "end": "2016-01-30"
                    },
                    "rc": 2000.0,
                    "service-level": "C"
                }, {
                    "name": "RMIPHP53",
                    "description": "TMH Size (M) 579Bt Disc 190Bt (RC389)",
                    "soc": "106425",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 389.0,
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
                    "name": "BUNG1P35",
                    "description": "Biz Data1849_3WEG Unlimited",
                    "soc": "569528",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-27",
                        "end": "2017-01-01"
                    },
                    "rc": 1849.0,
                    "service-level": "C"
                }, {
                    "name": "NEAN2P24",
                    "description": "V0S0G1_Family Net 299, Net10GB/4Mbps, WiFi 20Hr",
                    "soc": "11173512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-29",
                        "end": "2115-12-31"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "RMPN1P53",
                    "description": "TMH Size M Monthly Fee 579Bt (RC0)",
                    "soc": "106465",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP30",
                    "description": "4G OppoPack1099,Disc RC 100 B,Data16GB 6 Months",
                    "soc": "1061149",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-03",
                        "end": "2016-02-03"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P55",
                    "description": "Jumbo 799,voice450min net2GB ULTD",
                    "soc": "110567",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-02-28",
                        "end": "2016-02-03"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "EVHSAP05",
                    "description": "P_Ent_500_Get 500min 300MB DATA+HS",
                    "soc": "109186",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "CSMSCP02",
                    "description": "Cool SMS 1,000",
                    "soc": "571438",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2016-03-31"
                    },
                    "rc": 1100.0,
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
                    "name": "EBFOAP02",
                    "description": "Biz Package 300_Buffet Onnet,200min,3EG UNLTD FU10",
                    "soc": "263278",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-11-26",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
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
                    "name": "ESDTBP13",
                    "description": "V0S0G1_B&E 399_Data FUP3GB & WiFi _(Bar Voice&SMS)",
                    "soc": "11320912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-26",
                        "end": "2016-12-31"
                    },
                    "rc": 399.0,
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
                    "name": "SMRTBP41",
                    "description": "Special 3G iSmart399,V150m,Onnet10hr,FreeNet1.5GB6m",
                    "soc": "1077019",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P30",
                    "description": "4G OppoPack1099, VoicBuffete7am.-23pm.,Data8GB",
                    "soc": "1061159",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-03",
                        "end": "2016-02-03"
                    },
                    "rc": 1099.0,
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
                    "name": "ESDATP34",
                    "description": "B&E 750_Data FUP 500MB & WiFi",
                    "soc": "1091649",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 750.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP07",
                    "description": "3G iSmart X3,VoiceOnNet19hr, Net3GB, WiFiUNLTD",
                    "soc": "10637711",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2016-02-04"
                    },
                    "rc": 384.0,
                    "service-level": "C"
                }, {
                    "name": "RETEAP29",
                    "description": "EXT 4G iSmart 1299 Extra,V500m&OnNet24hrs,Net12GB",
                    "soc": "1098249",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-16",
                        "end": "2016-04-03"
                    },
                    "rc": 1299.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP42",
                    "description": "Special 3G iSmart 599,V300m,Onnet12hr,FreeNet3GB6m",
                    "soc": "1077039",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "SMS7CP01",
                    "description": "S_BulkSMS 1000 Bundle 1000Bt On 0.4 Off 1.15",
                    "soc": "570328",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-12-17",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P42",
                    "description": "Special 3G iSmart 599,V300m,Onnet12hr,Net1.5GB",
                    "soc": "1077049",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP29",
                    "description": "P_Corp Buffet 799 bt all network 7am.-8pm. 3/1/1",
                    "soc": "569578",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-08",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
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
                    "name": "EBFN1P13",
                    "description": "Biz & Ent 2399 Smart Buffet All Net 24 Hrs.(Next)",
                    "soc": "106166",
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
                    "name": "EDATAP81",
                    "description": "Biz&Ent 4,699bt_UnWEG30g384",
                    "soc": "10192010",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-15",
                        "end": "2017-01-01"
                    },
                    "rc": 4699.0,
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
                    "name": "CTMV1P14",
                    "description": "P_Corp 2,000 bundle2,000Bt_All net1.50Bt/min",
                    "soc": "265058",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-10-08",
                        "end": "2017-01-01"
                    },
                    "rc": 2000.0,
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
                    "name": "STBN1P43",
                    "description": "Special 3G iSmart 799,V450m,Onnet12hr,Net2.5GB",
                    "soc": "1077069",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "CSMSCP05",
                    "description": "Cool SMS 400 Bt(300sms_1.35Bt/sms)",
                    "soc": "265038",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "RMPN2P53",
                    "description": "TMH Size M Monthly Fee 579Bt/Mth",
                    "soc": "106485",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 579.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 999.0,
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
                    "name": "CTHK1P02",
                    "description": "POS Corp Thank you 0Bt Free On Net",
                    "soc": "265048",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-11-01",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP29",
                    "description": "4G OppoPack899,Disc RC 100 B,Data10GB 6 Months",
                    "soc": "1061109",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-03",
                        "end": "2016-02-03"
                    },
                    "rc": 799.0,
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
                    "name": "CNETWP03",
                    "description": "P_Corp 600_On 0.75_Off 1.30_20SMS",
                    "soc": "265008",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 600.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK6P01",
                    "description": "E_Corp HighTalk 95,000_6am.-7pm._Out 1.20Bt/Min",
                    "soc": "97886",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-12-09",
                        "end": "2017-01-01"
                    },
                    "rc": 95000.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P54",
                    "description": "IQ Pack 500,Pay500B. V100 Mins, 3GUnltd 500MB",
                    "soc": "1091789",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "CBFAAP01",
                    "description": "Biz&Ent 599 Allnet8AM-8PM_SAT&SUN, 50SMS,UNLTD1GB",
                    "soc": "10471910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-24",
                        "end": "2015-12-31"
                    },
                    "rc": 599.0,
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
                    "name": "SMRTBP43",
                    "description": "Special 3G iSmart 799,V450m,Onnet12hr,FreeNet5GB6m",
                    "soc": "1077059",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP42",
                    "description": "4G/3G iSmart 499 Voice 200 min Net 2 GB UNLD",
                    "soc": "11203112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "EVHSAP06",
                    "description": "P_Ent_800_Get 800min 500MB DATA&Wifi+HS",
                    "soc": "109056",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "CUGFRP26",
                    "description": "Business True Move CUG 500 bt / 1.5 bt per minute",
                    "soc": "265078",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-23",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "CPBF2P02",
                    "description": "Corporate CP 650 Buffet 6am-6pm (1 Bt/min)",
                    "soc": "264028",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-01-18",
                        "end": "2017-01-01"
                    },
                    "rc": 650.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP44",
                    "description": "Special 3G iSmart 999,V600m,Onnet24hr,FreeNet8GB6m",
                    "soc": "1077079",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP12",
                    "description": "BizSmartPack500,Voice500baht,Data300MB_8am-5pm",
                    "soc": "110526",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-12",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "EBFOAP24",
                    "description": "Biz&Ent 799_Onnet24Hrs,V450,UNLTD9GB,WiFi",
                    "soc": "10256310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP16",
                    "description": "Biz & Ent Buffet on-net 499 bt 6am-6pm",
                    "soc": "10068510",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-04",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP15",
                    "description": "POS_Corp Buffet 799 08.00 -19.59",
                    "soc": "261808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-09-03",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "EAAVOP03",
                    "description": "Double A : Mobile PABX (200 min)",
                    "soc": "261898",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
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
                    "name": "CSERCP07",
                    "description": "S Corp bulk SMS 400 Bundle 300 SMS (Step charge)",
                    "soc": "571428",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-11-12",
                        "end": "2017-01-01"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP20",
                    "description": "Biz & Ent RC50_Data100MB_WIFIUnlimited",
                    "soc": "11037312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 50.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 144.0,
                    "service-level": "C"
                }, {
                    "name": "EAAVOP06",
                    "description": "Double A : Mobile PABX (700 min)",
                    "soc": "263258",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP35",
                    "description": "4G/3G iSmart 1899 Voice 2000min Net 20GB UNLD",
                    "soc": "11185112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1899.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P49",
                    "description": "Biz Net759, 3WEG Unlimited(Dis.10%)",
                    "soc": "569548",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-03",
                        "end": "2017-01-01"
                    },
                    "rc": 683.1,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP18",
                    "description": "B&E_799_OnNet 24 Hrs,V 650min,UnWEG,7g384",
                    "soc": "1098209",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-23",
                        "end": "2016-12-31"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "CORP6P01",
                    "description": "Pos Corp1000,Bun1000 All N/W 1.25Bt Free CUG&20SMS",
                    "soc": "265018",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-02-09",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P29",
                    "description": "4G OppoPack899, VoiceBuffet7am.-23pm.,Data5GB",
                    "soc": "1061129",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-03",
                        "end": "2016-02-03"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP55",
                    "description": "IQ Pack 700,Pay350B.18m V100 Mins, 3G/4GUnlt 1.5GB",
                    "soc": "1091799",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 350.0,
                    "service-level": "C"
                }, {
                    "name": "BBINDP12",
                    "description": "BB Unlimited 799_Free Voice 100 mins",
                    "soc": "98643",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-01",
                        "end": "2016-06-30"
                    },
                    "rc": 619.0,
                    "service-level": "C"
                }, {
                    "name": "S1CE1P01",
                    "description": "SME smart content solution - S One",
                    "soc": "571128",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-01-28",
                        "end": "2017-01-01"
                    },
                    "rc": 39900.0,
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
                    "name": "RETEAP26",
                    "description": "EXT 4G iSmart699Extra, V200m & OnNet19hrs, Net4GB",
                    "soc": "1098219",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-16",
                        "end": "2016-04-03"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P38",
                    "description": "Biz Net Sim RC 1,699_3WEG Unlimited",
                    "soc": "568628",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-24",
                        "end": "2017-01-01"
                    },
                    "rc": 1699.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP18",
                    "description": "Biz VT800,Voice800bt,Data500MB,WiFi_ULT(Dis.10%)",
                    "soc": "568528",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-29",
                        "end": "2017-01-01"
                    },
                    "rc": 720.0,
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
                    "name": "ESDATP16",
                    "description": "B&E 1,500_Data FUP2GB & WiFi",
                    "soc": "1067229",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-03",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
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
                    "name": "SMBUFP21",
                    "description": "Business True Move 199 8pm-8am",
                    "soc": "571188",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-22",
                        "end": "2017-01-01"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP04",
                    "description": "B&E_199bt ,BuffetOnnet24hrs.,Offnet0.90bt",
                    "soc": "10578311",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV4P02",
                    "description": "Biz700bt,get1,000min,All-net 1.25bt/min,2bt/sms",
                    "soc": "568558",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-08",
                        "end": "2017-01-01"
                    },
                    "rc": 700.0,
                    "service-level": "C"
                }, {
                    "name": "NEAN1P37",
                    "description": "4G/3G iNet Plus 399 Net 4GB UNLTD",
                    "soc": "11380712",
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
                    "name": "BUSTBP02",
                    "description": "Biz Talk RC 200 Get 200 min",
                    "soc": "261798",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-24",
                        "end": "2017-01-01"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "RETEAP28",
                    "description": "EXT 4G iSmart1099Extra,V400m & OnNet24hrs,Net10GB",
                    "soc": "1098239",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-16",
                        "end": "2016-04-03"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "EAAVOP02",
                    "description": "Double A : Mobile PABX (100 min)",
                    "soc": "261888",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
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
                    "name": "CUNL5P01",
                    "description": "P_Corp 150 Unlimited call in group",
                    "soc": "263218",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-26",
                        "end": "2017-01-01"
                    },
                    "rc": 150.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP32",
                    "description": "Biz499b,get249b,24hrs.BuffetSuperOnnet,Other1.25bt",
                    "soc": "264608",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-18",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP48",
                    "description": "iSmart500, discount 50% on RC for 12 mths",
                    "soc": "1082499",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-01-31"
                    },
                    "rc": 250.0,
                    "service-level": "C"
                }, {
                    "name": "CUTK1P01",
                    "description": "POS_Corp ULTRA Talk 799 Unlimited Network 6am-6pm",
                    "soc": "264078",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-07-16",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "RETEAP27",
                    "description": "EXT 4G iSmart899 Extra,V300m & OnNet24hrs, Net7GB",
                    "soc": "1098229",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-16",
                        "end": "2016-04-03"
                    },
                    "rc": 899.0,
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
                    "name": "EBFOAP23",
                    "description": "Biz&Ent 599_Onnet12PM-6PM,V350,UNLTD2GB,WiFi_Next2",
                    "soc": "10256210",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP15",
                    "description": "B&E 1,300_Data FUP3GB & WiFi",
                    "soc": "1067219",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-03",
                        "end": "2016-12-31"
                    },
                    "rc": 1300.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "CTMV3P02",
                    "description": "P_Corp True Move 700 bt 1000 min Allnet 1.25bt",
                    "soc": "265068",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-31",
                        "end": "2017-01-01"
                    },
                    "rc": 700.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P41",
                    "description": "Special 3G iSmart399,V150m,Onnet10hr,Net750MB",
                    "soc": "1077029",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
                    },
                    "rc": 399.0,
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
                    "name": "SER1CP05",
                    "description": "Corporate Bulk SMS S5 (Service ID) : step 5",
                    "soc": "571138",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 23100.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP17",
                    "description": "B&E 1,650_Data FUP3GB & WiFi",
                    "soc": "1067239",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-03",
                        "end": "2016-12-31"
                    },
                    "rc": 1650.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP13",
                    "description": "BizSMRT800,Voice800bt,Data500MB_8am-5pm_WiFi ULT",
                    "soc": "110226",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-12",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP23",
                    "description": "B&E 890_Allnet 6AM-8PM,Sat-Sun Allday,FUP3GB,WiFi",
                    "soc": "1084529",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 890.0,
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
                    "name": "CUNL4P03",
                    "description": "POS_True Unlimited 899 for CP 6am-7pm, Bonus 300",
                    "soc": "263208",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-20",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "RETEAP25",
                    "description": "EXT 4G iSmart499 Extra,V100m & OnNet12hrs, Net2GB",
                    "soc": "1098199",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-16",
                        "end": "2016-04-03"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP49",
                    "description": "Biz 1,399 Buffet Allnet 6am-6pm and Data UNLTED",
                    "soc": "264648",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-07",
                        "end": "2016-12-31"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP11",
                    "description": "POS_Corp Buffet 899, 8.00 -19.59",
                    "soc": "263118",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-08-01",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "ESDPVP14",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(NORTH_PAILIN)",
                    "soc": "11042212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "1BAHTP03",
                    "description": "SME True Move 499 One Baht Per Minute & handset",
                    "soc": "264678",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP08",
                    "description": "B&E RC 1,399_Data FUP 2GB & WiFi",
                    "soc": "10578411",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV4P01",
                    "description": "Biz490bt,get700min,All-net 1.5bt/min,2bt/sms",
                    "soc": "568548",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-08",
                        "end": "2017-01-01"
                    },
                    "rc": 490.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP22",
                    "description": "D_Ent_499_Unlimited DATA&WiFi@Mac",
                    "soc": "261988",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-09-05",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "PSVOCP01",
                    "description": "B&E_299_V1S1.25M3,Data1,Wifi Unlimited",
                    "soc": "11137512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP01",
                    "description": "B&E_RC 800 BuffetOnnet24hrs.,UnWEG3GB,Offnet0.99bt",
                    "soc": "10568811",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-12-23",
                        "end": "2015-12-31"
                    },
                    "rc": 800.0,
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
                    "name": "EDATAP11",
                    "description": "D_Ent_850_Unlimited DATA&Wifi",
                    "soc": "261968",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 850.0,
                    "service-level": "C"
                }, {
                    "name": "EAAVOP07",
                    "description": "Double A : Mobile PABX (1,000 min)",
                    "soc": "261928",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
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
                    "name": "RMIPHP54",
                    "description": "TMH Size (L) 799Bt Disc 260Bt (RC539)",
                    "soc": "106245",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-11",
                        "end": "2016-06-04"
                    },
                    "rc": 539.0,
                    "service-level": "C"
                }, {
                    "name": "EBFN1P14",
                    "description": "Biz & Ent 450 Smart Buffet OnNet 6am-6pm (Next)",
                    "soc": "106296",
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
                    "name": "SMS6CP02",
                    "description": "S_BulkSMS 50,000Bt_80,650SMS_Out 0.62_Roll 1 Mth",
                    "soc": "109796",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-02-03",
                        "end": "2017-01-01"
                    },
                    "rc": 50000.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP17",
                    "description": "Biz&EntBuffA_599_7am9pm,SAT&SUN,S50UnWEG,1g384",
                    "soc": "1078259",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-28",
                        "end": "2016-12-31"
                    },
                    "rc": 599.0,
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
                    "name": "RMINTP02",
                    "description": "Demo SIM WEG Unlimited",
                    "soc": "111786",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-15",
                        "end": "2250-08-08"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP14",
                    "description": "B&E RC 1000_V1000Baht,SMS250,MMS50,Data200MB,WiFi",
                    "soc": "1068809",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP40",
                    "description": "Special 3G iSmart 299,V120m,Onnet10hr,Net750MB",
                    "soc": "1076949",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-04-04"
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
                    "name": "CTHK1P01",
                    "description": "POS Corp Thank you 0Bt Free CUG",
                    "soc": "261858",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-11-01",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "RMTLKP06",
                    "description": "TMH299-299mins all net 1 bt SMS 3 bt MMS 5 bt 24hr",
                    "soc": "81792",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-15",
                        "end": "2016-06-30"
                    },
                    "rc": 299.0,
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
                    "name": "RMIPHP20",
                    "description": "TMH Size(XXL)999 Call 500min WEG Unlimit(FU: 5GB)",
                    "soc": "64152",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-15",
                        "end": "2016-06-30"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP09",
                    "description": "D_Ent_799_Unlimited DATA&WiFi",
                    "soc": "261958",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP31",
                    "description": "Biz & Ent Buffet on-net 100 bt 12am-8pm",
                    "soc": "10391310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-07",
                        "end": "2017-01-01"
                    },
                    "rc": 100.0,
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
                    "name": "NPSMAP34",
                    "description": "4G/3G iSmart 1499 Voice 1200min Net 10GB UNLD",
                    "soc": "11184712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1499.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTAP75",
                    "description": "New Jumbo 999, voice550min net9GB ULTD",
                    "soc": "10138910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-22",
                        "end": "2016-02-03"
                    },
                    "rc": 999.0,
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
                    "name": "CBUFFP18",
                    "description": "POS_Corp Buffet 499 All network 6am - 6 pm",
                    "soc": "568718",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-10-15",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP32",
                    "description": "B&E Buffet 899_AllNet7AM-7PM,UnWEG3g384_1.25bt/Min",
                    "soc": "10995012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-22",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "BUFFTP44",
                    "description": "Business Buffet 999 All-Net 9:00am-9:00pm&Sat-Sun",
                    "soc": "568578",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-06-11",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P56",
                    "description": "IQ Pack 1100,Pay1100B V200 Mins, 3G/4GUnlt 3GB",
                    "soc": "1091899",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 1100.0,
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
                    "name": "NPSMAP37",
                    "description": "4G iSmartBuffet599 All10hr net4GB WiFi UNLTD",
                    "soc": "11195912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP17",
                    "description": "Biz Smart 650 Get 250 Min,1.5GB,Wi-Fi Unlimited",
                    "soc": "264808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-10",
                        "end": "2017-01-01"
                    },
                    "rc": 650.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P57",
                    "description": "IQ Pack 1500,Pay1500B. V300 Mins, 3G/4GUnlt 5GB",
                    "soc": "1091919",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 1500.0,
                    "service-level": "C"
                }, {
                    "name": "SMS3CP03",
                    "description": "Corporate Bulk SMS : UBC",
                    "soc": "571258",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "RMINTP03",
                    "description": "TrueMove H Business SIM, data 3GB",
                    "soc": "111796",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-15",
                        "end": "2250-08-08"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP10",
                    "description": "D_Ent_599_3GB DATA&Wifi",
                    "soc": "263298",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP44",
                    "description": "4GiSmart1199_Allnet6AM-9PM,30SMS,10MMS,FUP5GB,WiFi",
                    "soc": "11154112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 1199.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP16",
                    "description": "Biz Free to Surf&Talk1449,500min,300sms,50mms,WEG",
                    "soc": "568518",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-17",
                        "end": "2017-01-01"
                    },
                    "rc": 1449.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP44",
                    "description": "Biz1299,24hrs.Buf OnNet,500min,300SMS,50MMS,WEG",
                    "soc": "264628",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-10",
                        "end": "2017-01-01"
                    },
                    "rc": 1299.0,
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
                    "name": "SMBUFP42",
                    "description": "Bundle 800 minutes for all network",
                    "soc": "571208",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-09",
                        "end": "2016-03-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "SMS1CP02",
                    "description": "Corporate Bulk SMS S2: step 2",
                    "soc": "571238",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 5000.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP32",
                    "description": "4G/3G iSmart 1099 Voice 650 min Net 16GB UNLD",
                    "soc": "11183312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1099.0,
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
                        "end": "2017-01-01"
                    },
                    "rc": 350.0,
                    "service-level": "C"
                }, {
                    "name": "BUFFTP15",
                    "description": "Pack buffet 299 VIP / 3 Baht per call (12 months)",
                    "soc": "568568",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2006-09-01",
                        "end": "2016-01-30"
                    },
                    "rc": 299.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 145.0,
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
                        "end": "2016-01-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP57",
                    "description": "IQ Pack 1500,Pay750B.18m V300 Mins, 3G/4GUnlt 5GB",
                    "soc": "1091909",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2020-06-30"
                    },
                    "rc": 750.0,
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
                    "name": "EBFAAP33",
                    "description": "Biz & Ent Buffet 1099_ Mon-Fri 7AM-7PM,SAT&SUN",
                    "soc": "10114010",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-21",
                        "end": "2017-01-01"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P51",
                    "description": "Galaxy 1100 Voice300mins Net2GB",
                    "soc": "110337",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-06",
                        "end": "2016-02-04"
                    },
                    "rc": 1100.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP13",
                    "description": "B&E RC 1650_Buffet On-net24Hrs,FUP5GB,WiFi",
                    "soc": "1083189",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
                    },
                    "rc": 1650.0,
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
                    "name": "CBUFFP16",
                    "description": "POS_Corp Buffet 999 08.00 -19.59",
                    "soc": "263128",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-09-17",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP37",
                    "description": "Biz & Ent 499_Buffet All Net 6AM-6PM",
                    "soc": "10353410",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP02",
                    "description": "D_Ent_699_Ulnlimited DATA&WiFi",
                    "soc": "261948",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "CBUFFP09",
                    "description": "POS_Corp899Bt_all network_6am.-6pm.",
                    "soc": "263108",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-07-21",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "EIPDAP03",
                    "description": "iPD_Ent_smart pack1,699_Data+WiFi unlimit",
                    "soc": "109646",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 1699.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP20",
                    "description": "Biz&Ent BuffA_1399_ 24 hrs,UnWEG,3g384",
                    "soc": "1078349",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-28",
                        "end": "2016-12-31"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP25",
                    "description": "Business True Move 199 Plus F&F_1 Baht 7am-7pm",
                    "soc": "264598",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-29",
                        "end": "2017-01-01"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "CPBF2P01",
                    "description": "Corporate CP 499 Buffet 6am-6pm (1 Bt/min)",
                    "soc": "263178",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-01-18",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP12",
                    "description": "B&E 1899 Bt_UnWEG3g384_voice allnet 0.99bt",
                    "soc": "11137612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 1899.0,
                    "service-level": "C"
                }, {
                    "name": "PLAT4P05",
                    "description": "4G Platinum 1999 Voice24hrs.Net 22GBUNLD",
                    "soc": "11189212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-02-03"
                    },
                    "rc": 1999.0,
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
                    "name": "SMAN1P52",
                    "description": "Galaxy 1500 Voice400mins Net3GB",
                    "soc": "110357",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-06",
                        "end": "2016-02-04"
                    },
                    "rc": 1500.0,
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
                    "name": "SMBUFP50",
                    "description": "Biz RC149 Get Buffet On-net 24Hrs.",
                    "soc": "264658",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-17",
                        "end": "2016-12-31"
                    },
                    "rc": 149.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP18",
                    "description": "Biz&EntBuffA_649_7am9pm,SAT&SUN,UnWEG,1.5g384",
                    "soc": "1078329",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-28",
                        "end": "2016-12-31"
                    },
                    "rc": 649.0,
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
                    "name": "ESBFAP19",
                    "description": "Biz&Ent BuffA_1199_ 24 hrs,UnWEG,1g384",
                    "soc": "1078339",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-28",
                        "end": "2016-12-31"
                    },
                    "rc": 1199.0,
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
                    "name": "SMRTAP52",
                    "description": "Galaxy 1500 Disc 50% on RC 24 mths",
                    "soc": "110347",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-06",
                        "end": "2016-02-04"
                    },
                    "rc": 750.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP11",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(GIL)",
                    "soc": "11036912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                        "end": "2016-02-03"
                    },
                    "rc": 699.0,
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
                    "name": "CNETWP02",
                    "description": "P_Corp 199_On 1.00_Off 1.50_10SMS",
                    "soc": "263158",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "BUNN1P49",
                    "description": "Biz Net759, 3WEG Unlimited(Dis.10%)(PP.Next)",
                    "soc": "568668",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-03",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
                    "service-level": "C"
                }, {
                    "name": "SMS1CP04",
                    "description": "Corporate Bulk SMS S4: step 4",
                    "soc": "571248",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 8000.0,
                    "service-level": "C"
                }, {
                    "name": "EAAVOP05",
                    "description": "Double A : Mobile PABX (500 min)",
                    "soc": "261918",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
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
                    "name": "SMRETP05",
                    "description": "Ret-Biz True Move 1,190 Bt 70 Satang",
                    "soc": "264668",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-22",
                        "end": "2017-01-01"
                    },
                    "rc": 1190.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP03",
                    "description": "B&E_550_Onnet0.75,Offnet1,UnWEG2GB/384",
                    "soc": "10631211",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2017-01-01"
                    },
                    "rc": 550.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP38",
                    "description": "Biz & Ent 659_Buffet All Net 5AM-6PM & Data 100MB",
                    "soc": "10353510",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 659.0,
                    "service-level": "C"
                }, {
                    "name": "CDTK2P02",
                    "description": "POS_Corp 750 Double talk All network 24 hrs",
                    "soc": "568738",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-24",
                        "end": "2017-01-01"
                    },
                    "rc": 750.0,
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
                    "name": "SMS3CP04",
                    "description": "Corporate Bulk SMS: Plaza Athene",
                    "soc": "571268",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2017-01-01"
                    },
                    "rc": 8000.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP29",
                    "description": "B&E RC 699_Data FUP 5GB & Wi-Fi UNLTD",
                    "soc": "1083269",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
                    },
                    "rc": 699.0,
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
                    "name": "CORP7P01",
                    "description": "P_Corp300 On 300-Off net150min,All net1.35 Bt/min",
                    "soc": "263168",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-09-07",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
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
                    "name": "CUGFRP34",
                    "description": "Biz TMV 399 get 399 bt,free CUG and F&F 24hrs,2/1",
                    "soc": "263188",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-09-08",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV1P03",
                    "description": "Biz Talk 1,000 Get 1,000 Bt.All Network 1.25Bt.",
                    "soc": "121196",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-06",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 120.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "CBUF1P02",
                    "description": "POS_Corp Buffet 999 6am-6pm & On-Net 24hrs",
                    "soc": "568698",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-06-25",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP21",
                    "description": "B&E_Voice 0.99Bt,SMS 2Bt,MMS 5Bt ,Data 1Bt,WiFi1Bt",
                    "soc": "11264012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-01",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMS8CP04",
                    "description": "S_Corp PayPerUse USSD On/Off 0.70B, A2P 0.45Bt/sms",
                    "soc": "571278",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-12-15",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP41",
                    "description": "Biz_RC699,get20sms,100MB,Buf.SupOn7am-7pm",
                    "soc": "264618",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-31",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P46",
                    "description": "Bus_iPack750, get 3GEW_UNLTD",
                    "soc": "568658",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2016-01-30"
                    },
                    "rc": 750.0,
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
                    "name": "ESBFAP41",
                    "description": "B&E BuffA_899_7am11pm,onnet 24hrs,S50UnWEG,3g384",
                    "soc": "11155012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-28",
                        "end": "2016-12-31"
                    },
                    "rc": 899.0,
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
                    "name": "CPRM3P02",
                    "description": "POS_Corp Premicell 1000 B. on free off 1.25 B CLIP",
                    "soc": "568838",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-03-02",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 350.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP22",
                    "description": "Biz&Ent 599_Onnet12PM-6PM,V350,UNLTD4GB,WiFi_Next1",
                    "soc": "10256110",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP04",
                    "description": "Biz & Ent 400 Bt UnWEG,5g384_0.99bt/min",
                    "soc": "1060259",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-30",
                        "end": "2016-12-31"
                    },
                    "rc": 400.0,
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
                    "name": "NPTKAP12",
                    "description": "iTalk+ 1299 VoiceAllNet1900m, Net500MB",
                    "soc": "11207412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 1299.0,
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
                    "name": "UR22RP01",
                    "description": "RetentionTLFV 179bt./mt.Call 120min",
                    "soc": "51612",
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
                    "name": "UR22RP04",
                    "description": "TLFV TrueMove-H 299 - 75st /1.50Bt",
                    "soc": "51942",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-12",
                        "end": "2016-06-30"
                    },
                    "rc": 144.0,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP10",
                    "description": "P_Ent_Enterprise Package (999100)",
                    "soc": "263488",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "NEAN1P24",
                    "description": "V0S0G1_Family Net 150, Net10GB/4Mbps, WiFi 20Hr",
                    "soc": "11139212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-10",
                        "end": "2115-12-31"
                    },
                    "rc": 150.0,
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
                    "name": "ESBFOP12",
                    "description": "B&E RC 1500_Buffet On-net24Hrs,FUP5GB,WiFi",
                    "soc": "1083179",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
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
                    "name": "MNPB1P03",
                    "description": "Biz TrueMove 800 get 900 min, 1 B/min",
                    "soc": "264518",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-23",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
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
                    "name": "ESVSMP17",
                    "description": "B&E RC 1399_V1000Baht,SMS250,MMS50,FUP2GB,WiFi",
                    "soc": "1068979",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "EIPDAP06",
                    "description": "iPD_Ent_smart pack1,599_Data+WiFi unlimit_HS",
                    "soc": "109566",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 1599.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP04",
                    "description": "B&E RC 200_Private APN Data UNLTD_LHB",
                    "soc": "1067109",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-20",
                        "end": "2016-12-31"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "EDTSAP16",
                    "description": "V0S0G1_Biz & Ent Data Sim 349_UNLTD2GB & WiFi",
                    "soc": "10417010",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-03",
                        "end": "2017-01-01"
                    },
                    "rc": 349.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 150.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTAP74",
                    "description": "New Jumbo 799, voice450min net6GB ULTD",
                    "soc": "10138810",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-22",
                        "end": "2016-02-03"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP28",
                    "description": "B&E RC 499_Data FUP 500MB & WiFi UNLTD",
                    "soc": "1083169",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP67",
                    "description": "Biz Pro Package1699,Net 10GB WiFi Unlimited",
                    "soc": "107467",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-04-01",
                        "end": "2017-01-01"
                    },
                    "rc": 1699.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P33",
                    "description": "4G Lite700,V100m,Net1.5GB,WiFi",
                    "soc": "1075249",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-26",
                        "end": "2016-07-06"
                    },
                    "rc": 700.0,
                    "service-level": "C"
                }, {
                    "name": "EIPHAP16",
                    "description": "E_Ent_2000_iPhoneV650S40MS20Unlimited DataWifi+HS",
                    "soc": "569918",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-06",
                        "end": "2017-01-01"
                    },
                    "rc": 2000.0,
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
                    "name": "SMRTAP50",
                    "description": "Galaxy 700 Disc50% on RC 24 month",
                    "soc": "110307",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-06",
                        "end": "2016-02-04"
                    },
                    "rc": 350.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP07",
                    "description": "B&E 7,799_Data UNLTD FUP 50GB & WiFi",
                    "soc": "1065919",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-25",
                        "end": "2016-12-31"
                    },
                    "rc": 7799.0,
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
                    "name": "SMBUFP12",
                    "description": "SME True Move 499 Buffet 6am- 6pm",
                    "soc": "264588",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-01-31",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
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
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
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
                    "name": "SMS3CP15",
                    "description": "Bulk SMS_50,000Bt_Bundle 100,000SMS(Roll 1Mth)",
                    "soc": "109516",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-14",
                        "end": "2017-01-01"
                    },
                    "rc": 50000.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P44",
                    "description": "Biz_iPack 699, get300min,300sms,120mms,3GEW_UNLTD",
                    "soc": "568648",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP24",
                    "description": "B&E_199_OnNet 24 Hrs,V 500S50_offnet 0.75 bt",
                    "soc": "11212912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-15",
                        "end": "2016-12-31"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP24",
                    "description": "B&E 1099_Allnet 8AM-8PM,Sat-Sun Allday,FUP2GB,WiFi",
                    "soc": "1084669",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP18",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(TANTAWAN)",
                    "soc": "11033512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "ESDATP24",
                    "description": "B&E_PPU_UnWEG,1g128_1.25bt/min",
                    "soc": "1072699",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-10",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP14",
                    "description": "B&E 750_Data 150MB & WiFi",
                    "soc": "1067119",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-03",
                        "end": "2016-12-31"
                    },
                    "rc": 750.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP09",
                    "description": "B&E_Voice 1Bt,SMS 1.25Bt,MMS3Bt,Data1Bt,WiFi1Bt",
                    "soc": "1071189",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-02",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP37",
                    "description": "B&E Buffet All-net_649_24hrs,S120M50UnWEG,4g384",
                    "soc": "11110012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-07",
                        "end": "2016-12-31"
                    },
                    "rc": 649.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 229.0,
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
                    "name": "ESBFAP22",
                    "description": "B&E RC 719_Buffet All-net 6AM-8PM,SAT-SUN All Day",
                    "soc": "1083259",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 719.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP18",
                    "description": "Biz & Ent Buffet on-net 1999 bt 24 hrs.",
                    "soc": "10068810",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-04",
                        "end": "2016-12-31"
                    },
                    "rc": 1999.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 195.0,
                    "service-level": "C"
                }, {
                    "name": "SMS3CP14",
                    "description": "BulkSMS 22,500 Bundle 50,000 SMS",
                    "soc": "109446",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-16",
                        "end": "2017-01-01"
                    },
                    "rc": 22500.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 199.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP22",
                    "description": "4G SmartPhone 1099,Data16GB 6 Months",
                    "soc": "1061689",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 1099.0,
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
                        "end": "2025-07-02"
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
                    "name": "UB2TRP55",
                    "description": "TLFV High ARPU 559 baht /mth All net work",
                    "soc": "79062",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-25",
                        "end": "2016-06-30"
                    },
                    "rc": 279.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP13",
                    "description": "B&E 1499 Bt_UnWEG3g384_voice allnet 0.99bt",
                    "soc": "11137712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 1499.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P22",
                    "description": "4G SmartPhone1099, VoiceBuffet7am.-23pm.,Data8GB",
                    "soc": "1061699",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 1099.0,
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
                    "name": "STBN1P20",
                    "description": "4GSmartPhone 699, VoiceBuffet 7am.-7pm.,Data 3B",
                    "soc": "1061579",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP19",
                    "description": "4G SmartPhone 499,Data3GB 6 Months",
                    "soc": "1061469",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "CSMSCP01",
                    "description": "Cool SMS 500",
                    "soc": "568868",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2016-03-31"
                    },
                    "rc": 600.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP39",
                    "description": "Biz & Ent 999_Buffet All Net 10PM-8PM & Data 200MB",
                    "soc": "10353610",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP01",
                    "description": "B&E_PPU_Onnet0.80,Offnet1.10",
                    "soc": "10578511",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 0.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 144.0,
                    "service-level": "C"
                }, {
                    "name": "SMS7CP05",
                    "description": "S_Corp bulk sms3,000Bt, On 0.40 - Off 1.10 Bt/SMS",
                    "soc": "98855",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-09-13",
                        "end": "2017-01-01"
                    },
                    "rc": 3000.0,
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
                    "name": "SMRTAP73",
                    "description": "New Jumbo 599, voice300mins net4.5GB UNLTD",
                    "soc": "10138710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-22",
                        "end": "2016-02-03"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP05",
                    "description": "P_corp Free talk (7.00am-7.00pm) 1099bt",
                    "soc": "264408",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-31",
                        "end": "2017-01-01"
                    },
                    "rc": 1099.0,
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
                    "name": "EDATBP04",
                    "description": "V0S0G1_Ent_599_DATA3GB&WiFi Unlimited",
                    "soc": "572878",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-09",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "NTAN1P07",
                    "description": "4G iNet 899, 4G Net 10 GB, TVS 1GB, WiFi UNLTD",
                    "soc": "10649811",
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
                    "name": "ESDATP08",
                    "description": "B&E 15,599_Data UNLTD FUP 100GB & WiFi",
                    "soc": "1065989",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-25",
                        "end": "2016-12-31"
                    },
                    "rc": 15599.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP04",
                    "description": "B&E 659 Bt_UnWEG3g384_0.75bt",
                    "soc": "1083229",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-19",
                        "end": "2016-12-31"
                    },
                    "rc": 659.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P21",
                    "description": "4G SmartPhone 899,VoiceBuffet 7am.-23pm.,Data5GB",
                    "soc": "1061629",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP82",
                    "description": "Biz & Ent Data Pack 399_Data FUP 3GB & WiFi",
                    "soc": "10258410",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
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
                    "name": "UR2TRP32",
                    "description": "True Life Free View 1000 get 1200 min,over 1.25 Bt",
                    "soc": "79122",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-24",
                        "end": "2016-06-30"
                    },
                    "rc": 845.0,
                    "service-level": "C"
                }, {
                    "name": "EIPHAP09",
                    "description": "i_Ent_smart pack 1,399_Data+WiFi unlimit_HS",
                    "soc": "263358",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-30",
                        "end": "2017-01-01"
                    },
                    "rc": 1399.0,
                    "service-level": "C"
                }, {
                    "name": "EDOGAP12",
                    "description": "D_Ent_999_3GB DATA&Wifi+HS",
                    "soc": "569898",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP05",
                    "description": "B&E BuffO_250 Onnet24hrs_UnWEG500MB/128_Off 0.90bt",
                    "soc": "10578611",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 250.0,
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
                    "name": "SMBUFP01",
                    "description": "SME Post Pay 250 Buffet On-net 24 hrs",
                    "soc": "264578",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-02-07",
                        "end": "2017-01-01"
                    },
                    "rc": 250.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP05",
                    "description": "B&E 499 Bt_UnWEG2g384_0.75bt",
                    "soc": "1083239",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-19",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
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
                        "end": "2016-06-30"
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
                        "end": "2016-02-03"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP18",
                    "description": "B&E RC 1699_V1300Baht,SMS250,MMS50,FUP2GB,WiFi",
                    "soc": "1068989",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1699.0,
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
                    "name": "NEAN1P23",
                    "description": "4G iNet499,4G UNLT 6GB,WiFi UNLT",
                    "soc": "1099419",
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
                    "name": "UR2TRP31",
                    "description": "True Life Free View 800 get 900 min,over 1.25 Bt",
                    "soc": "79112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-24",
                        "end": "2016-06-30"
                    },
                    "rc": 645.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P19",
                    "description": "4G SmartPhone 499, VoiceBuffet7am.-5pm.,Data1.5GB ",
                    "soc": "1061479",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 499.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 1299.0,
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
                    "name": "ESVSMP19",
                    "description": "B&E RC 1899_V1500Baht,SMS250,MMS50,FUP2GB,WiFi",
                    "soc": "1068999",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1899.0,
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
                    "name": "CSERCP02",
                    "description": "Cool SMS (Service ID) - 1000",
                    "soc": "568858",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-02",
                        "end": "2017-01-01"
                    },
                    "rc": 1100.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP06",
                    "description": "SMP_Ent_460Bt v1500Unlimited DATA+wifi",
                    "soc": "263418",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-27",
                        "end": "2017-01-01"
                    },
                    "rc": 460.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP05",
                    "description": "D_Ent_500_Unlimited DATA",
                    "soc": "999138",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP21",
                    "description": "D_Ent_599_3GB Limited DATA&Wifi@TMVH",
                    "soc": "263308",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-02",
                        "end": "2250-08-08"
                    },
                    "rc": 599.0,
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
                    "name": "SMRTBP24",
                    "description": "4G SmartPhone 699,Disc RC 100 B,Data6GB 6 Months",
                    "soc": "1061729",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP17",
                    "description": "Biz-iPhone 800bt,450min,300sms,50mms,WEG-unlimit",
                    "soc": "264478",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-21",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP23",
                    "description": "4G SmartPhone 499,Disc RC 100 B,Data3GB 6 Months",
                    "soc": "1061709",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP16",
                    "description": "B&E RC 1500_V1500Baht,SMS250,MMS50,Data300MB,WiFi",
                    "soc": "1068969",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
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
                    "name": "PLSMAP34",
                    "description": "4G/3G iSmart 1499 Voice 1200min Net 20GB UNLD",
                    "soc": "11184312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1499.0,
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
                    "name": "STBN1P76",
                    "description": "iSmart Plus299,V100m Net750MB, WiFi",
                    "soc": "11263112",
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
                    "name": "PSDATP14",
                    "description": "B&E 599 Bt_UnWEG3g384_voice allnet 0.99bt",
                    "soc": "11137812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 599.0,
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
                    "name": "IPHSMP29",
                    "description": "Biz iPhoneXL899,500min,300sms,50mms,3WEG(Dis.10%)",
                    "soc": "264498",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 809.1,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP20",
                    "description": "4G SmartPhone 699,Data6GB 6 Months",
                    "soc": "1061559",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "MNPC1P01",
                    "description": "P_Corp 99 Bundle 100 Min All-Net 1.00 Bt/Min",
                    "soc": "571068",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-12-05",
                        "end": "2017-01-01"
                    },
                    "rc": 99.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP25",
                    "description": "4G SmartPhone 899,Disc RC 100 B,Data10GB 6 Months",
                    "soc": "1061739",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 799.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 120.0,
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
                    "name": "HTLK5P01",
                    "description": "E_Corp High talk pay per use all network 1.10bt",
                    "soc": "571028",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-10-29",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP40",
                    "description": "Biz & Ent Buffet All-net 1399 bt 24 hrs.",
                    "soc": "10388710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-03",
                        "end": "2017-01-01"
                    },
                    "rc": 1399.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 164.0,
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
                    "name": "ESVSMP15",
                    "description": "B&E RC 1300_V1300Baht,SMS250,MMS50,Data250MB,WiFi",
                    "soc": "1068959",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 1300.0,
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
                    "name": "CUGFRP22",
                    "description": "POS_Corp 190 Bt. bundle 190 Bt. tariff 1.50 Bt.",
                    "soc": "568898",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-16",
                        "end": "2017-01-01"
                    },
                    "rc": 190.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 144.0,
                    "service-level": "C"
                }, {
                    "name": "ESHRAP17",
                    "description": "Ent _1000_V1000BtS250M50Data200MB",
                    "soc": "263398",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2017-01-01"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "CSMSCP06",
                    "description": "Cool SMS 500 Bt(400sms_1.25Bt/sms)",
                    "soc": "568878",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-06-01",
                        "end": "2016-03-31"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP31",
                    "description": "4G/3G iSmart 899 Voice 450 min Net 6 GB UNLD",
                    "soc": "11183212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP21",
                    "description": "4G SmartPhone 899,Data10GB 6 Months",
                    "soc": "1061599",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 899.0,
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
                    "name": "UB2TRP47",
                    "description": "TLFV Lease to own 349 baht/mth all network",
                    "soc": "34001",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-15",
                        "end": "2016-06-30"
                    },
                    "rc": 169.0,
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
                    "name": "BSMRTP11",
                    "description": "BizSmartPack300,Voice200baht,Data100MB_8am-5pm",
                    "soc": "110186",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-12",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP35",
                    "description": "B&E RC 550_Buffet Super Onnet 24hrs,FUP5GB,WiFi",
                    "soc": "11353412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-22",
                        "end": "2016-12-31"
                    },
                    "rc": 550.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP26",
                    "description": "4G SmartPhone 1099,Disc RC 100 B,Data16GB 6 Months",
                    "soc": "1061749",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-05",
                        "end": "2016-02-03"
                    },
                    "rc": 999.0,
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
                    "name": "ESBFAP26",
                    "description": "B&E 699_Buffet All-net 6AM-10PM , Data FUP 2GB",
                    "soc": "1083399",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP01",
                    "description": "B&E 1700 Bt_UnWEG3g384_1bt/min",
                    "soc": "1075379",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-23",
                        "end": "2016-12-31"
                    },
                    "rc": 1700.0,
                    "service-level": "C"
                }, {
                    "name": "NEAN1P22",
                    "description": "4G iNet399,4G UNLT 4GB,WiFi UNLT",
                    "soc": "1099399",
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
                    "name": "UB2TRP50",
                    "description": "TLFV Lease to own 299 baht/mth all network",
                    "soc": "34031",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-15",
                        "end": "2016-06-30"
                    },
                    "rc": 149.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 279.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP05",
                    "description": "V0S1G1_Biz&Ent 349 bt_ SMS 20,UnEG,steady 1Mbps.",
                    "soc": "10629111",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2017-01-01"
                    },
                    "rc": 349.0,
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
                    "name": "MNPC1P03",
                    "description": "P_Corp 500 Bundle 500 Bt All-Net 1.00 Bt/Min",
                    "soc": "571078",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-12-05",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP13",
                    "description": "B&E_PPU All-net 1bt/min",
                    "soc": "1081369",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-19",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "PLSMAP25",
                    "description": "4G iSmart399 Extra,V100m, Net2.25GB, WiFi Unltd",
                    "soc": "1089259",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-04",
                        "end": "2016-07-06"
                    },
                    "rc": 399.0,
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
                    "name": "BTMV3P02",
                    "description": "Biz250bt,get200min,24hrsCUG,10sms,3hrsEDGE/GPRS",
                    "soc": "262888",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-08",
                        "end": "2017-01-01"
                    },
                    "rc": 250.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP21",
                    "description": "V0S0G1_B&E Private APN_3GB_0.50Bt/MB(RMV.CORP1)",
                    "soc": "11043912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-07",
                        "end": "2016-12-31"
                    },
                    "rc": 550.0,
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
                    "name": "EDATAP83",
                    "description": "Biz & Ent Data Pack 399_Data FUP1.5GB & WiFi_Next",
                    "soc": "10258510",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "PT4N1P05",
                    "description": "4G Platinum 1999 Voice24hrs.Net 12GB UNLD",
                    "soc": "11193412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-02-03"
                    },
                    "rc": 1999.0,
                    "service-level": "C"
                }, {
                    "name": "NETSAP24",
                    "description": "V0S0G1_Family Net 299, Net10GB/4Mbps, WiFi 20Hr",
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
                    "name": "SMRTPP90",
                    "description": "iSmart 599, voice300mins net1.5GB UNLTD",
                    "soc": "101975",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2016-03-31"
                    },
                    "rc": 599.0,
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
                    "name": "NETSVP14",
                    "description": "Net SIM 350 Data 1 GB WiFi 10 hrs.",
                    "soc": "62702",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-15",
                        "end": "2016-06-30"
                    },
                    "rc": 350.0,
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
                    "name": "NETSVP76",
                    "description": "iNet 250, net500MB 3G+,EDGE,GPRS+WiFi 5 hrs",
                    "soc": "103173",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-04-03",
                        "end": "2250-08-08"
                    },
                    "rc": 250.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTPP89",
                    "description": "iSmart 499, voice250mins net1GB UNLTD",
                    "soc": "101955",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2016-03-31"
                    },
                    "rc": 499.0,
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
                    "name": "ESVSMP37",
                    "description": "B&E 500_Voice500min,75sms,Data500MB",
                    "soc": "10995612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-23",
                        "end": "2016-12-31"
                    },
                    "rc": 500.0,
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
                    "name": "BUFFTP38",
                    "description": "Business Buffet 1200 All-Net 8am-10pm",
                    "soc": "262898",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-08-14",
                        "end": "2016-12-31"
                    },
                    "rc": 1200.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK1P24",
                    "description": "E_Corp HighTalk 40,000_On 0.50_Off 1.20_Sec Charge",
                    "soc": "101215",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-12-22",
                        "end": "2017-01-01"
                    },
                    "rc": 40000.0,
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
                    "name": "CEXN1P01",
                    "description": "True Move 500 -25 Satang(Next PP) All Net, 24 hrs.",
                    "soc": "130306",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2016-06-30"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "IPHN1P31",
                    "description": "Biz iPad759, 3WEG Unlimited(PP.Next)",
                    "soc": "264468",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
                    "service-level": "C"
                }, {
                    "name": "RMTN1P44",
                    "description": "U-Talk 199, voice 150 mins, 50SMS",
                    "soc": "10602911",
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
                    "name": "PSDATP02",
                    "description": "B&E 750 Bt_UnWEG2g384_1bt",
                    "soc": "1075449",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-23",
                        "end": "2016-12-31"
                    },
                    "rc": 750.0,
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
                    "name": "SMRTBP73",
                    "description": "True Smart Choice 300Mins Unlimited data(2GB)&WiFi",
                    "soc": "11255012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-12",
                        "end": "2016-01-31"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "RMINTP06",
                    "description": "V0S0G1_TMH Demo SIM 4G/3G",
                    "soc": "11141612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-22",
                        "end": "2250-08-08"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP39",
                    "description": "4G iSmart Buffet1499 All16hr net7GB WiFi UNLTD",
                    "soc": "11199312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 1499.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP19",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(BENCHAMAS)",
                    "soc": "11035112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "SMRTPP91",
                    "description": "iSmart 699,voice400min net2GB ULTD",
                    "soc": "101995",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-08-08",
                        "end": "2016-03-31"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP62",
                    "description": "IQPack1500Pay750B.18mV300Mins3G4GUt 5GBScil12m+Y6m",
                    "soc": "11005012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-16",
                        "end": "2020-07-31"
                    },
                    "rc": 750.0,
                    "service-level": "C"
                }, {
                    "name": "MNPB1P02",
                    "description": "Biz TrueMove 500 get 500 min, 1 B/min",
                    "soc": "263598",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-23",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP10",
                    "description": "B&E 250_On24hrs,Off50min,SMS20,MMS10,UNLD1GB,WiFi",
                    "soc": "1060329",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-28",
                        "end": "2016-12-31"
                    },
                    "rc": 250.0,
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
                    "name": "ESBFOP06",
                    "description": "B&E BuffO_350 Onnet24hrs_UnWEG1GB/384_Off 0.90bt",
                    "soc": "10578711",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 350.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 950.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP34",
                    "description": "B&E Buffet 1500_AllNet7AM-10PM,S50M10UnWEG8g384",
                    "soc": "11062312",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 1500.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP32",
                    "description": "4G/3G iSmart 1099 Voice 650 min Net 8 GB UNLD",
                    "soc": "11183712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "NE2N1P09",
                    "description": "Aircard 220,Data 30 hrs.,Wi-Fi UTLD",
                    "soc": "48852",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-24",
                        "end": "2016-06-30"
                    },
                    "rc": 220.0,
                    "service-level": "C"
                }, {
                    "name": "MNPB1P01",
                    "description": "Biz TMV 99 Bundle 100 Min All-Net 1.00 Bt/Min",
                    "soc": "263588",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-03",
                        "end": "2017-01-01"
                    },
                    "rc": 99.0,
                    "service-level": "C"
                }, {
                    "name": "EVHSAP01",
                    "description": "P_Ent_300_Get 200bt 8am-8pm 100MB DATA+HS",
                    "soc": "571828",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP26",
                    "description": "Biz&Ent_8,000_UnWEG,100g384Kbps",
                    "soc": "1079949",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-28",
                        "end": "2016-12-31"
                    },
                    "rc": 8000.0,
                    "service-level": "C"
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
                        "end": "2016-03-03"
                    },
                    "rc": 799.0,
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
                    "name": "NPSMAP25",
                    "description": "4G iSmart399 Extra,V100m, Net1.25GB,WiFi Unltd",
                    "soc": "1089269",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-04",
                        "end": "2016-07-06"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P39",
                    "description": "Biz iPack 799_3WEG UNLTD",
                    "soc": "262968",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-03",
                        "end": "2017-01-01"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "IPHN1P30",
                    "description": "Biz iPhoneXXL999,500min,300sms,50mms,3WEG(PP.Next)",
                    "soc": "263528",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2015-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP34",
                    "description": "Biz iPhoneXL899,500min,300sms,50mms,3GEW-ULTD",
                    "soc": "263578",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-28",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "SPNETP05",
                    "description": "iNet 4G Extra Net550 Net UNLTD 3GB",
                    "soc": "10475011",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-06",
                        "end": "2016-01-05"
                    },
                    "rc": 550.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP13",
                    "description": "V0S0G1_B&E Private APN_Unimited_(SOUTH_PAILIN)",
                    "soc": "11041812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "EVOCAP12",
                    "description": "P_Ent_Enterprise Package (999150)",
                    "soc": "947738",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP23",
                    "description": "B&E 250_Voice 300min_Rate 0.68Bt/min",
                    "soc": "11274112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-13",
                        "end": "2016-12-31"
                    },
                    "rc": 250.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P32",
                    "description": "Biz Free to Surf999,get 200sms, WEG Unlimited",
                    "soc": "262948",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-25",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
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
                    "name": "ESVOCP12",
                    "description": "B&E_PPU_Onnet 0.75 bt_Offnet 1bt/min",
                    "soc": "1081379",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-18",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "ESVSMP53",
                    "description": "Biz & Ent 90_Voice200min,FUP2GB,Wi-Fi",
                    "soc": "11274212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-13",
                        "end": "2016-12-31"
                    },
                    "rc": 90.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP16",
                    "description": "Biz-iPhone 599bt,300min,300sms,50mms,WEG-unlimit",
                    "soc": "263568",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-21",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "NEAN1P21",
                    "description": "4G iNet699,4G UNLT12GB,WiFi UNLT, Free Social 12Mo",
                    "soc": "1099319",
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
                    "name": "ESDTBP11",
                    "description": "V0S1G1_B&E Data 2Bt/MB_Block Voice & MMS",
                    "soc": "11245112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-04",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMAN1P75",
                    "description": "Jumbo 999,voice550min net6GB ULTD",
                    "soc": "10139710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-22",
                        "end": "2016-02-03"
                    },
                    "rc": 999.0,
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
                    "name": "PLSMAP29",
                    "description": "4G/3G iSmart 599 Voice 300 min Net 5 GB UNLD",
                    "soc": "11182112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP02",
                    "description": "B&E RC 799_Data FUP 3GB & WiFi",
                    "soc": "10577611",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP73",
                    "description": "Biz & Ent 599 Smartpack V500UnWEG3g384",
                    "soc": "10062210",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-06-30",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "EDTSAP12",
                    "description": "V0S1G1_Biz&Ent 59bt_S103G/EDGE/GPRS40MB.",
                    "soc": "10189310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-01",
                        "end": "2017-01-01"
                    },
                    "rc": 59.0,
                    "service-level": "C"
                }, {
                    "name": "IPHN1P29",
                    "description": "Biz iPhoneXL899,500min,300sms,50mms,3WEG(PP.Next)",
                    "soc": "263518",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
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
                    "name": "ESVOCP18",
                    "description": "B&E_Voice1.25Bt,S1.25Bt,M3Bt,Data1Bt,WiFi1Bt",
                    "soc": "1095269",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-06",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "70STGP02",
                    "description": "Biz Call 700, 70 Satang",
                    "soc": "104556",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-04-10",
                        "end": "2017-01-01"
                    },
                    "rc": 700.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P35",
                    "description": "4G Extra1500,V300m,Net5GB,WiFi",
                    "soc": "1075489",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-26",
                        "end": "2016-07-06"
                    },
                    "rc": 1500.0,
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
                    "name": "BUNG1P22",
                    "description": "Biz-iPack759bt,500sms,300mms,WEG-unlimit",
                    "soc": "262928",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-21",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
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
                    "name": "SMRTBP34",
                    "description": "4G Plus1100 Dis50% 12mths,V200m,Net3GB, WiFi",
                    "soc": "1075459",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-26",
                        "end": "2016-07-06"
                    },
                    "rc": 550.0,
                    "service-level": "C"
                }, {
                    "name": "BUNL4P01",
                    "description": "POS_True Unlimited 499 for CP 6am-7pm, Bonus 300",
                    "soc": "262978",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-20",
                        "end": "2016-03-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "EWFTAP03",
                    "description": "Biz&Ent WFT(PTTRM)_120_UnWEG,1.5g384Kbps",
                    "soc": "11072012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 120.0,
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
                    "name": "EDATBP06",
                    "description": "V0S0G1_Ent_DATA_373.83_UnWEG1g128_HS",
                    "soc": "999278",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-07-08",
                        "end": "2017-01-01"
                    },
                    "rc": 373.83,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP04",
                    "description": "V0S1G1_Biz&Ent 299 bt_ SMS 20,UnEG,steady512Kbps.",
                    "soc": "10629011",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "STBN1P34",
                    "description": "4G Plus1100,V200m,Net3GB,WiFi",
                    "soc": "1075469",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-26",
                        "end": "2016-07-06"
                    },
                    "rc": 1100.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP21",
                    "description": "Biz&Ent BuffA_75,000_8am8pm_1.50 bt",
                    "soc": "1077639",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-12-31"
                    },
                    "rc": 75000.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP07",
                    "description": "D_Ent smart pack Data unlimit (Fair usage 1 GB)",
                    "soc": "947688",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP22",
                    "description": "Business True Move 399 7am-7pm with handset",
                    "soc": "263648",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-22",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP21",
                    "description": "4G iSmart 699 Extra, V200m, Net4GB, WiFi Unltd",
                    "soc": "1087049",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP62",
                    "description": "B&E 999 Bt_UnWEG6g384_voice allnet 1 bt",
                    "soc": "11241912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-30",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 750.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP08",
                    "description": "V0S1G1_B&E Data SIM 110_Data120MB",
                    "soc": "1064939",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-13",
                        "end": "2016-12-31"
                    },
                    "rc": 110.0,
                    "service-level": "C"
                }, {
                    "name": "IPHN1P33",
                    "description": "Biz iPad899, 3WEG Unlimited(PP.Next)",
                    "soc": "263548",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2015-12-31"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "CEXN1P02",
                    "description": "True Move 800 -25 Satang(Next PP) All Net, 24 hrs.",
                    "soc": "130316",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-04-01",
                        "end": "2016-06-30"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "CEXN1P03",
                    "description": "True Move 1300 -25 Satang(Next PP)All Net, 24 hrs.",
                    "soc": "130326",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-03",
                        "end": "2016-06-30"
                    },
                    "rc": 1300.0,
                    "service-level": "C"
                }, {
                    "name": "RMTLKP11",
                    "description": "TMH800-900mins all net 1 bt SMS 3 bt MMS 5 bt 24hr",
                    "soc": "76042",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-15",
                        "end": "2021-03-11"
                    },
                    "rc": 800.0,
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
                    "name": "PSDATP03",
                    "description": "B&E 499 Bt_UnWEG3g384_0.99bt",
                    "soc": "1081399",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-12",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "SMRETP03",
                    "description": "Ret-Biz True Move 490 Bt 70 Satang",
                    "soc": "263668",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-22",
                        "end": "2017-01-01"
                    },
                    "rc": 490.0,
                    "service-level": "C"
                }, {
                    "name": "CHTKAP04",
                    "description": "Biz & Ent E1 25,000_V25,000Baht_0.60Baht/min (RR)",
                    "soc": "10204110",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-14",
                        "end": "2015-12-31"
                    },
                    "rc": 25000.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP07",
                    "description": "V0S0G1_Transportation, Data Unlimited No FUP",
                    "soc": "1078669",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-30",
                        "end": "2017-01-05"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP29",
                    "description": "Biz & Ent 1,799 Smart Buffet All Net 6am-6pm",
                    "soc": "121567",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-05-02",
                        "end": "2017-01-01"
                    },
                    "rc": 1799.0,
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
                    "name": "ESDATP71",
                    "description": "B&E 325_Data FUP6GB & WiFi UNLTD",
                    "soc": "11327112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-03",
                        "end": "2016-12-31"
                    },
                    "rc": 325.0,
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
                        "end": "2016-03-03"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "BUNN1P50",
                    "description": "Biz Net799, 3WEG Unlimited(PP.Next)",
                    "soc": "262988",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-07",
                        "end": "2015-12-31"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP21",
                    "description": "Biz Smart899,500min,300sms,50mms,3WEG_ULT(Dis.10%)",
                    "soc": "263818",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-29",
                        "end": "2017-01-01"
                    },
                    "rc": 809.1,
                    "service-level": "C"
                }, {
                    "name": "STBN1P36",
                    "description": "4G Advance1900,V400m,Net10GB,WiFi",
                    "soc": "1075509",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-26",
                        "end": "2016-07-06"
                    },
                    "rc": 1900.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV3P03",
                    "description": "Biz500bt,get400min,24hrsCUG,20sms,5hrsEDGE/GPRS",
                    "soc": "264848",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-08",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "ESVSMP38",
                    "description": "B&E 300_Voice300min,75sms,Data300MB",
                    "soc": "10995712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-23",
                        "end": "2016-12-31"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP09",
                    "description": "B&E BuffO_849 Onnet24hrs_UnWEG5GB/384_Off 0.90bt",
                    "soc": "10579011",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 849.0,
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
                    "name": "ESDATP58",
                    "description": "Biz&Ent 400 Bt Data Unlimited 1g128Kbps",
                    "soc": "11165112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-12",
                        "end": "2016-12-31"
                    },
                    "rc": 400.0,
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
                    "name": "UB2TRP51",
                    "description": "TLFV Lease to own 199 baht/mth all network",
                    "soc": "63792",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-11-03",
                        "end": "2016-06-30"
                    },
                    "rc": 100.0,
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
                    "name": "ESBFOP02",
                    "description": "B&E_400Bt _BuffetOnnet24hrs.,UnWEG3GB/384Kb",
                    "soc": "10571911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP07",
                    "description": "B&E BuffO_499 Onnet24hrs_UnWEG2GB/384_Off 0.90bt",
                    "soc": "10578811",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP51",
                    "description": "Biz&Ent_999_V600S50M20UnWEG,6g384",
                    "soc": "11160912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP57",
                    "description": "Biz&Ent Data Unlimited 8g384Kbps",
                    "soc": "11110512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-07",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "NEAN1P36",
                    "description": "4G/3G iNet Plus 199 Net 1GB UNLTD",
                    "soc": "11380512",
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
                    "name": "ESVSMP55",
                    "description": "Biz & Ent 120_Voice500min,FUP1GB,Wi-Fi",
                    "soc": "11275612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-13",
                        "end": "2016-12-31"
                    },
                    "rc": 120.0,
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
                    "name": "STBN1P38",
                    "description": "3G iSmart 599,VoiceAllNet300m,Net1.5GB, WiFiUNLTD",
                    "soc": "1076469",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-07",
                        "end": "2016-03-03"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP84",
                    "description": "Biz & Ent Data Pack 699_Data FUP 6GB & WiFi",
                    "soc": "10258710",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP12",
                    "description": "V0S1G1_B&E S1.25M3Data 2Bt/MB_Block Voice",
                    "soc": "11255712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-17",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "NSAN1P22",
                    "description": "4G iSmart899 Extra,V300m & OnNet24hrs, Net7GB,WiFi",
                    "soc": "1087139",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP85",
                    "description": "Biz & Ent Data Pack 699_Data FUP 3GB & WiFi_Next",
                    "soc": "10258610",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESDPVP08",
                    "description": "V0S0G1_Biz & Ent RC200_Data3GB_WIFIUnlimited",
                    "soc": "1082859",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-14",
                        "end": "2016-12-31"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP27",
                    "description": "B&E 1199_BuffetAllnet00:00-17:59,100smsFUP5GB,WiFi",
                    "soc": "1092149",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-06-16",
                        "end": "2016-12-31"
                    },
                    "rc": 1199.0,
                    "service-level": "C"
                }, {
                    "name": "SMBUFP46",
                    "description": "Biz Tallk 999 Buffet 6am-8pm",
                    "soc": "263658",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-08",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP17",
                    "description": "B&E 300_Voice0.90Bt,SMS1Bt,MMS3Bt,Data1Bt,WiFi1Bt",
                    "soc": "1092189",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP22",
                    "description": "4G iSmart 899 Extra,V300m&OnNet24hrs, Net12GB,WiFi",
                    "soc": "1087059",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP40",
                    "description": "B&E_Data FUP 3GB & WiFi",
                    "soc": "1092109",
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
                    "name": "SMRETP04",
                    "description": "Ret-Biz True Move 700 Bt 70 Satang",
                    "soc": "263678",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-03-22",
                        "end": "2017-01-01"
                    },
                    "rc": 700.0,
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
                    "name": "EVHSAP08",
                    "description": "P_Ent_500_Get 500bt 8am-5pm 300MB DATA+HS",
                    "soc": "262678",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-11",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "SMS7CP04",
                    "description": "S_BulkSMS_8,000Bt_Bundle 8,000Bt_On-Off 0.79",
                    "soc": "98475",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-06-21",
                        "end": "2017-01-01"
                    },
                    "rc": 8000.0,
                    "service-level": "C"
                }, {
                    "name": "BUFFTP10",
                    "description": "Buffet 999 baht during 06.00-21.00",
                    "soc": "264868",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2006-06-30",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
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
                        "end": "2016-03-03"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP22",
                    "description": "4G iSmart 899 Extra, V300m, Net7GB, WiFi Unltd",
                    "soc": "1087149",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP02",
                    "description": "B&E_PPU_All-net 1.25bt/min",
                    "soc": "10592111",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-23",
                        "end": "2015-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP14",
                    "description": "V0S0G1_B&E_80bt Data 30MB_Block Voice,SMS & MMS",
                    "soc": "11339512",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-21",
                        "end": "2017-12-31"
                    },
                    "rc": 80.0,
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
                    "name": "ESDPVP17",
                    "description": "V0S0G1_B&E Private APN_Unlimited_(PLATONG)",
                    "soc": "11030712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-08-25",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                        "end": "2016-03-03"
                    },
                    "rc": 399.0,
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
                    "name": "ESDATP70",
                    "description": "Biz & Ent_Data FUP 5GB,WiFi Unlimited",
                    "soc": "11274012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-13",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "ESDATP41",
                    "description": "B&E_Data FUP 2GB & WiFi",
                    "soc": "1092119",
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
                    "name": "ESDATP02",
                    "description": "B&E_PPU_All-net 1bt/min,UnWEG3GB/384",
                    "soc": "10577711",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-12-23",
                        "end": "2015-12-31"
                    },
                    "rc": 0.0,
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
                    "name": "PLSMAP24",
                    "description": "4G iSmart 1299 Extra,V500m&OnNet24hrs,Net22GB,WiFi",
                    "soc": "1087189",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 1299.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP08",
                    "description": "B&E BuffO_649 Onnet24hrs_UnWEG3GB/384_Off 0.90bt",
                    "soc": "10578911",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "ESVOCP16",
                    "description": "B&E 190_Voice0.90Bt,SMS1Bt,MMS3Bt,Data1Bt,WiFi1Bt",
                    "soc": "1092139",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 190.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP42",
                    "description": "B&E_Data FUP 1GB & WiFi",
                    "soc": "1092129",
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
                    "name": "BMTY2P02",
                    "description": "Biz TMV-E1_25000bt,Buffet24hrs.Onnet, Offnet3bt",
                    "soc": "99555",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-02-23",
                        "end": "2017-01-01"
                    },
                    "rc": 25000.0,
                    "service-level": "C"
                }, {
                    "name": "BTMV5P01",
                    "description": "Biz800bt,get900min&30mms,All-net1bt",
                    "soc": "264858",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-05",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP01",
                    "description": "Biz & Ent Buffet 1099_ Mon-Fri 7AM-7PM,SAT&SUN",
                    "soc": "10669811",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-30",
                        "end": "2017-01-01"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP23",
                    "description": "4G iSmart1099 Extra,V400m&OnNet 24hrs,Net18GB,WiFi",
                    "soc": "1087159",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP11",
                    "description": "B&E 549_On24hrs,Off50min,SMS20,MMS10,UNLD3GB,WiFi",
                    "soc": "1060629",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-28",
                        "end": "2016-12-31"
                    },
                    "rc": 549.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP24",
                    "description": "4G iSmart 1299 Extra,V500m,Net12GB, WiFi Unltd",
                    "soc": "1087199",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 1299.0,
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
                    "name": "PLSMAP40",
                    "description": "4G/3G iSmart 299 Voice 100 min Net 750MB UNLD",
                    "soc": "11202912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "NPSMAP23",
                    "description": "4G iSmart 1099 Extra,V400m,Net10GB, WiFi Unltd",
                    "soc": "1087179",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "BSMRTP03",
                    "description": "BizSmartphone649,Voice250mins,Data1.5GB,Wi-Fi ULTD",
                    "soc": "263808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP01",
                    "description": "MG On Net 400, call on-net free, net unltd 500 MB",
                    "soc": "10381310",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2016-02-15"
                    },
                    "rc": 400.0,
                    "service-level": "C"
                }, {
                    "name": "BCONVP01",
                    "description": "Biz True Move on-net 8am-5pm(Wifi+TripleSpeed)",
                    "soc": "263748",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-10-02",
                        "end": "2017-01-01"
                    },
                    "rc": 49.0,
                    "service-level": "C"
                }, {
                    "name": "ESDTBP07",
                    "description": "V0S0G1_B&E DataSIM 499_Data UNLTD4GB & WiFi",
                    "soc": "1060639",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-28",
                        "end": "2016-12-31"
                    },
                    "rc": 499.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP43",
                    "description": "4GiSmart1599_Allnet6AM-9PM,30SMS,10MMS,FUP4GB,WiFi",
                    "soc": "11154012",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-24",
                        "end": "2016-12-31"
                    },
                    "rc": 1599.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P34",
                    "description": "Biz Data1699_3WEG Unlimited",
                    "soc": "264878",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-27",
                        "end": "2017-01-01"
                    },
                    "rc": 1699.0,
                    "service-level": "C"
                }, {
                    "name": "EVHSAP09",
                    "description": "P_Ent_800_Get 800bt 8am-5pm 500MB DATA&Wifi+HS",
                    "soc": "262688",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-11",
                        "end": "2017-01-01"
                    },
                    "rc": 800.0,
                    "service-level": "C"
                }, {
                    "name": "NTAN1P06",
                    "description": "4G iNet 699, 4G Net 6 GB, TVS 1GB, WiFi UNLTD",
                    "soc": "10649311",
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
                    "name": "NETSAP25",
                    "description": "iNet 99 Data 200MB (True Partner)",
                    "soc": "11230112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-10",
                        "end": "2250-08-08"
                    },
                    "rc": 99.0,
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
                        "end": "2016-07-06"
                    },
                    "rc": 300.0,
                    "service-level": "C"
                }, {
                    "name": "CDTSAP04",
                    "description": "V0S0G1_Biz & Ent Private APN 200_Data UNLTD",
                    "soc": "10493211",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-27",
                        "end": "2015-12-31"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "BUNL4P02",
                    "description": "POS_True Unlimited 649 for CP 6am-7pm, Bonus 300",
                    "soc": "263958",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-03-20",
                        "end": "2017-01-01"
                    },
                    "rc": 649.0,
                    "service-level": "C"
                }, {
                    "name": "BUNG1P11",
                    "description": "Biz Data Sim 699 EDGE/GPRS/3G+ Unlimited",
                    "soc": "263908",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-27",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK1P23",
                    "description": "E_Corp HighTalk 80,000_All Net 1.20_Sec Charge",
                    "soc": "571998",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-12-22",
                        "end": "2017-01-01"
                    },
                    "rc": 80000.0,
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
                    "name": "EBFOAP21",
                    "description": "Biz&Ent Buffet599_Onnet12PM-6PM,V350,UNLTD6GB,WiFi",
                    "soc": "10255610",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
                        "end": "2017-01-01"
                    },
                    "rc": 599.0,
                    "service-level": "C"
                }, {
                    "name": "EBFOAP30",
                    "description": "Biz & Ent Buffet on-net 100 bt 12am-6pm",
                    "soc": "10391210",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-07",
                        "end": "2017-01-01"
                    },
                    "rc": 100.0,
                    "service-level": "C"
                }, {
                    "name": "NSAN1P23",
                    "description": "4G iSmart1099Extra,V400m & OnNet24hrs,Net10GB,WiFi",
                    "soc": "1087169",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "SMRTBP02",
                    "description": "MG On Net 700, call on-net free, net unltd 2 GB",
                    "soc": "10381410",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-09-30",
                        "end": "2016-02-15"
                    },
                    "rc": 700.0,
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
                    "name": "ESDATP52",
                    "description": "B&E 180_Data Unlmited 384kbps",
                    "soc": "11013412",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-29",
                        "end": "2016-12-31"
                    },
                    "rc": 180.0,
                    "service-level": "C"
                }, {
                    "name": "CHTKAP03",
                    "description": "Biz & Ent E1 65,000_Buffet All Net 7AM-7PM (RR)",
                    "soc": "10199210",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-14",
                        "end": "2015-12-31"
                    },
                    "rc": 65000.0,
                    "service-level": "C"
                }, {
                    "name": "BGPR3P01",
                    "description": "Biz Data115,get25MB,30sms",
                    "soc": "263758",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-10",
                        "end": "2017-01-01"
                    },
                    "rc": 115.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFOP33",
                    "description": "B&E RC 199_Buffet Super Onnet 24hrs & WiFi",
                    "soc": "11351912",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-12-22",
                        "end": "2016-12-31"
                    },
                    "rc": 199.0,
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
                    "name": "BGPR3P03",
                    "description": "Biz 500 Get 600 min, CUG  Unlimited, Data 500 MB",
                    "soc": "262228",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-18",
                        "end": "2017-01-01"
                    },
                    "rc": 500.0,
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
                    "name": "ESMPAP84",
                    "description": "Biz & Ent RC 849_V300min,SMS100,DataUNLTD3GB,WiFi",
                    "soc": "10443110",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-03",
                        "end": "2017-01-01"
                    },
                    "rc": 849.0,
                    "service-level": "C"
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
                        "end": "2017-01-01"
                    },
                    "rc": 55000.0,
                    "service-level": "C"
                }, {
                    "name": "BBPK2P07",
                    "description": "BB Unlimited 799_WiEG UTLD(FU 1GB)",
                    "soc": "99463",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-03-15",
                        "end": "2016-06-30"
                    },
                    "rc": 619.0,
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
                    "name": "PLSMAP31",
                    "description": "4G/3G iSmart 899 Voice 450 min Net 12GB UNLD",
                    "soc": "11182812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP33",
                    "description": "B&E 1650_Data FUP5GB , WiFi",
                    "soc": "1083899",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-28",
                        "end": "2016-12-31"
                    },
                    "rc": 1650.0,
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
                    "name": "CBUFFP04",
                    "description": "POS_Corp Khum Nan 599 Unlimited On-net 05:00-16:59",
                    "soc": "947528",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-08-27",
                        "end": "2017-01-01"
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
                    "name": "BMTY1P07",
                    "description": "Business Mighty Talk 60000bt all 1.20bt/min",
                    "soc": "570568",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-03-11",
                        "end": "2017-01-01"
                    },
                    "rc": 60000.0,
                    "service-level": "C"
                }, {
                    "name": "B1GN1P16",
                    "description": "TMH-Biz iPad 759, Data and wifi unlimited (RC559)",
                    "soc": "262208",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2017-01-01"
                    },
                    "rc": 759.0,
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
                    "name": "RMTLKP17",
                    "description": "Talk 200,Voice200mins all net,Out of bundle 1.25 B",
                    "soc": "64182",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-01",
                        "end": "2016-06-30"
                    },
                    "rc": 200.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 650.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP32",
                    "description": "Biz & Ent Buffet 949_ Mon-Fri 7AM-7PM,SAT&SUN",
                    "soc": "10113910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-07-21",
                        "end": "2017-01-01"
                    },
                    "rc": 949.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP44",
                    "description": "B&E 689_Data FUP 2GB & WiFi",
                    "soc": "1092469",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-02",
                        "end": "2016-12-31"
                    },
                    "rc": 689.0,
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
                    "name": "NETSAP04",
                    "description": "iNet 399, net1.5GB UNLTD WiFi UNLTD",
                    "soc": "109477",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-02-27",
                        "end": "2016-02-03"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "B1GN1P18",
                    "description": "TMH-Biz iPad 899, Data and wifi unlimited (RC699)",
                    "soc": "262218",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-06",
                        "end": "2015-12-31"
                    },
                    "rc": 899.0,
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
                    "name": "NETSVP75",
                    "description": "iNet 150, net150MB 3G+,EDGE,GPRS+WiFi 5 hrs",
                    "soc": "103013",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-04-03",
                        "end": "2250-08-08"
                    },
                    "rc": 150.0,
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
                        "end": "2016-06-30"
                    },
                    "rc": 799.0,
                    "service-level": "C"
                }, {
                    "name": "STSMSP03",
                    "description": "SME True Move for Community SIM Project",
                    "soc": "569338",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-08-08",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
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
                    "name": "SMRTBP18",
                    "description": "3GSmartPhone1499dis500AllNet16hr UNLTDnet7GB&WiFi",
                    "soc": "1062159",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-02-10",
                        "end": "2016-03-31"
                    },
                    "rc": 999.0,
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
                    "name": "NTAN1P05",
                    "description": "4G iNet 499, 4G Net 3 GB, TVS 1 GB , WiFi UNLTD",
                    "soc": "10648611",
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
                    "name": "NPTKAP09",
                    "description": "iTalk+ 499 VoiceAllNet650min, Net500MB",
                    "soc": "11205712",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
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
                    "name": "ESVSMP03",
                    "description": "B&E RC 1,099_Data FUP 2GB & WiFi",
                    "soc": "10577811",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-12-31"
                    },
                    "rc": 1099.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK4P01",
                    "description": "E_Corp High Talk_On Net 0.5_Off Net 1.25_Phayathai",
                    "soc": "572018",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2009-07-31",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "BMTY1P06",
                    "description": "Business Mighty Talk 30,000 All Network1.3B/min",
                    "soc": "570558",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-11-10",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
                    "name": "ESDATP25",
                    "description": "B&E_399_All-net 1.25bt/min,UnWEG4GB/384",
                    "soc": "1078439",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-09",
                        "end": "2016-12-31"
                    },
                    "rc": 399.0,
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
                    "name": "RMINTP07",
                    "description": "TrueMove H Business SIM, data 10GB",
                    "soc": "11261612",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-11-19",
                        "end": "2250-08-08"
                    },
                    "rc": 0.0,
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
                    "name": "ESVOCP11",
                    "description": "Biz&Ent 150,000 bt get voice 150,000 bt",
                    "soc": "1077559",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-22",
                        "end": "2016-12-31"
                    },
                    "rc": 150000.0,
                    "service-level": "C"
                }, {
                    "name": "EDOGAP02",
                    "description": "D_Ent_849_Ulnlimited DATA&WiFi+HS",
                    "soc": "117746",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-09",
                        "end": "2017-01-01"
                    },
                    "rc": 849.0,
                    "service-level": "C"
                }, {
                    "name": "ESBFAP39",
                    "description": "B&E Buffet All-net 999,7am8pm,UnWEG,3g384",
                    "soc": "11126112",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-09-01",
                        "end": "2016-12-31"
                    },
                    "rc": 999.0,
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
                    "name": "SPNETP06",
                    "description": "iNet 4G Extra Net750 Net UNLTD 5GB",
                    "soc": "10476011",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-11-06",
                        "end": "2016-01-05"
                    },
                    "rc": 750.0,
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
                    "name": "EDATAP87",
                    "description": "Biz & Ent Data Pack 899_Data FUP 5GB & WiFi_Next",
                    "soc": "10258810",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-08-26",
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
                    "name": "PLSMAP38",
                    "description": "4G iSmartBuffet899dis150 All12hr net5GB WiFi UNLTD",
                    "soc": "11197212",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-16",
                        "end": "2016-07-06"
                    },
                    "rc": 749.0,
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
                    "name": "ESVSMP21",
                    "description": "B&E RC 750_V450Baht,SMS250,MMS50,FUP500MB,WiFi",
                    "soc": "1069499",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-03-05",
                        "end": "2016-12-31"
                    },
                    "rc": 750.0,
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
                    "name": "CHTKAP07",
                    "description": "Biz & Ent E1 RC 10,000 Get 10,000Baht_Voice1Bt",
                    "soc": "10502910",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-29",
                        "end": "2015-12-31"
                    },
                    "rc": 10000.0,
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
                    "name": "ESDATP45",
                    "description": "B&E_Data FUP5GB and WiFi Unlimited",
                    "soc": "1095589",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-13",
                        "end": "2016-12-31"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "ESVSMP34",
                    "description": "Biz&Ent1,100V750S100M30,CUG,F&F,UnWEG,7g384",
                    "soc": "1074509",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-04-10",
                        "end": "2016-12-31"
                    },
                    "rc": 1100.0,
                    "service-level": "C"
                }, {
                    "name": "PSDATP06",
                    "description": "B&E 200 Bt_All-net 1bt_wifi Unlimited",
                    "soc": "1085039",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-26",
                        "end": "2016-12-31"
                    },
                    "rc": 200.0,
                    "service-level": "C"
                }, {
                    "name": "MNPB1P04",
                    "description": "Biz TrueMove 1,300 get 1,500 min, 1 B/min",
                    "soc": "264528",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-23",
                        "end": "2017-01-01"
                    },
                    "rc": 1300.0,
                    "service-level": "C"
                }, {
                    "name": "MNPB1P05",
                    "description": "Biz TrueMove 1,500 get 1,800 min, 1 B/min",
                    "soc": "569238",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-03-23",
                        "end": "2017-01-01"
                    },
                    "rc": 1500.0,
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
                    "name": "PLSMAP33",
                    "description": "4G/3G iSmart 1299 Voice 850 min Net 20GB UNLD",
                    "soc": "11183812",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-10-13",
                        "end": "2016-07-06"
                    },
                    "rc": 1299.0,
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
                    "name": "SMBUFP29",
                    "description": "Biz TMV buffet on-net 399 w handset",
                    "soc": "265618",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-02-25",
                        "end": "2017-01-01"
                    },
                    "rc": 399.0,
                    "service-level": "C"
                }, {
                    "name": "EBFAAP42",
                    "description": "Biz&Ent 699_Allnet8AM-8PM,50SMS,10MMS,FUP2GB,WiFi",
                    "soc": "10450510",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-10-14",
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESHRAP19",
                    "description": "Ent _1300_V1300BtS250M50Data250MB",
                    "soc": "262648",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-01-25",
                        "end": "2017-01-01"
                    },
                    "rc": 1300.0,
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
                    "name": "EIPDGP01",
                    "description": "iPD_GOV_1000_UnlimitedGPRS_Wifi",
                    "soc": "265338",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-30"
                    },
                    "rc": 1000.0,
                    "service-level": "C"
                }, {
                    "name": "EIPHAP04",
                    "description": "i_Ent_smart pack1,699_Data+WiFi unlimit_HS",
                    "soc": "264278",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-25",
                        "end": "2017-01-01"
                    },
                    "rc": 1699.0,
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
                    "name": "ESDPVP10",
                    "description": "B&E PrivateAPN 149_100SMS&100MB(2Bt/MB)_MG_Next PP",
                    "soc": "1095439",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-07-13",
                        "end": "2016-12-31"
                    },
                    "rc": 149.0,
                    "service-level": "C"
                }, {
                    "name": "EAASMP11",
                    "description": "DoubleA: Mobile WEG unlimit FUP5G/384 (300 min)",
                    "soc": "570788",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-13",
                        "end": "2017-01-01"
                    },
                    "rc": 698.0,
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
                    "name": "GURL2P09",
                    "description": "SookX2 Anywhere with Box 999",
                    "soc": "115437",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2014-03-20",
                        "end": "2016-03-31"
                    },
                    "rc": 999.0,
                    "service-level": "C"
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
                        "end": "2017-01-01"
                    },
                    "rc": 699.0,
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
                    "name": "HTLK1P12",
                    "description": "E Corp High talk 30,000 All Network 1.65Bt/min",
                    "soc": "570128",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-02-10",
                        "end": "2250-08-08"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK1P20",
                    "description": "E_Corp HighTalk 30,000 AllNet 1.30 Bt/Min",
                    "soc": "570988",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2010-11-04",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
                    "service-level": "C"
                }, {
                    "name": "HTLK2P01",
                    "description": "POS_Corp HighTalk 30,000Bt Off Net 1.40Bt",
                    "soc": "570998",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2008-11-05",
                        "end": "2017-01-01"
                    },
                    "rc": 30000.0,
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
                    "name": "EVOCAP04",
                    "description": "P_Ent_Enterprise Package (000100)",
                    "soc": "106346",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP05",
                    "description": "P_Ent_Enterprise Package (000125)",
                    "soc": "106386",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 0.0,
                    "service-level": "C"
                }, {
                    "name": "IPHSMP30",
                    "description": "Biz iPhoneXXL999,500min,300sms,50mms,3WEG(Dis.10%)",
                    "soc": "262728",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-05-25",
                        "end": "2017-01-01"
                    },
                    "rc": 899.1,
                    "service-level": "C"
                }, {
                    "name": "EVOCAP11",
                    "description": "P_Ent_Enterprise Package (999125)",
                    "soc": "997828",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-06-22",
                        "end": "2017-01-01"
                    },
                    "rc": 999.0,
                    "service-level": "C"
                }, {
                    "name": "PLSMAP21",
                    "description": "4G iSmart699 Extra,V200m&OnNet19hrs, Net 7GB, WiFi",
                    "soc": "1086969",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2015-05-21",
                        "end": "2016-07-06"
                    },
                    "rc": 699.0,
                    "service-level": "C"
                }, {
                    "name": "ESMPAP02",
                    "description": "P_Ent_899_500min 300sms 50mms Unlimited DATA&Wifi",
                    "soc": "262038",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-09-20",
                        "end": "2017-01-01"
                    },
                    "rc": 899.0,
                    "service-level": "C"
                }, {
                    "name": "BGPR1P16",
                    "description": "Biz Net Sim RC 350_Data 1GB, Wi-Fi 10 hrs.",
                    "soc": "262828",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-04-24",
                        "end": "2017-01-01"
                    },
                    "rc": 350.0,
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
                    "name": "BPBF2P01",
                    "description": "Business CP 499 Buffet 6am-6pm (1 Bt/min)",
                    "soc": "262848",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2007-04-10",
                        "end": "2017-01-01"
                    },
                    "rc": 499.0,
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
                    "name": "EDAN1P39",
                    "description": "Biz & Ent Multi Sim300_DataUNLTD_Fair1/128(NextPP)",
                    "soc": "570808",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-12-03",
                        "end": "2017-01-01"
                    },
                    "rc": 300.0,
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
                    "name": "EDOGGP01",
                    "description": "Don_GOV_399_UnlimitedGPRS_FreeWifi5hrs",
                    "soc": "569908",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-07-25",
                        "end": "2016-01-30"
                    },
                    "rc": 399.0,
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
                    "name": "EAAVOP01",
                    "description": "Double A : Mobile PABX (0 min)",
                    "soc": "261878",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "EAAVOP04",
                    "description": "Double A : Mobile PABX (300 min)",
                    "soc": "261908",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-08-30",
                        "end": "2017-01-01"
                    },
                    "rc": 299.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP12",
                    "description": "D_Ent_349_1GB DATA&UnlimitedWifi",
                    "soc": "261978",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2011-10-13",
                        "end": "2017-01-01"
                    },
                    "rc": 349.0,
                    "service-level": "C"
                }, {
                    "name": "EDATAP14",
                    "description": "F_Ent_149Bt_Fleet Management 30MB",
                    "soc": "570818",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2012-02-14",
                        "end": "2017-01-01"
                    },
                    "rc": 149.0,
                    "service-level": "C"
                }]
            };
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
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };
    var validatePartnerAPI = function(target, fnCallback) {
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "43RTPW8S64H6",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "partnerInfo": {
                        "status-id": "1",
                        "register-date": "2004-06-30 00:00:00.0",
                        "status-name": "Active",
                        "biz-reg-type-name": "นิติบุคคล",
                        "dealer-code": "79000001",
                        "emp-code": "",
                        "tvs-code": "",
                        "tmx-emp-code": "",
                        "channel-alias": "ENTP",
                        "channel-name": "Enterprise Customer & International Services",
                        "partner-type-name": "Corporate",
                        "partner-sub-type-name": "",
                        "partner-type-group-name": "L1",
                        "parent-code": "",
                        "partner-name-th": "บริษัท ทรู มูฟ จำกัด"
                    }
                }
            };
            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "2",
                    "message-type": "ERROR",
                    "en-message": "Partner Code นี้ไม่มีในระบบ",
                    "th-message": "Partner Code นี้ไม่มีในระบบ",
                    "technical-message": ""
                }],
                "trx-id": "3ERTR5HRVF9L",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };
            if (target == "profiles/partner/validatepartner?function-type=RESUME&partner-code=88888888") {
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
    var propositionAPI = function(param, fnCallback) {
        var target = "sales/catalog/product/tmv/proposition/search?" +
            "company-code=" + param['company-code'] +
            "&customer-type=" + param['customer-type'] +
            "&propo-type=" + param['propo-type'] +
            "&mobile-servicetype=" + param['mobile-servicetype'] +
            "&partner-code=" + param['partner-code'] +
            "&privilege=" + param['privilege'];
        console.log(target);
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "3X18RYBCFS9L9",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": [{
                    "name": "RMV000000000001",
                    "description": "New Sim Only",
                    "soc": "45552",
                    "rc": 0.0,
                    "service-level": "C",
                    "proposition-code": "0019123"
                }, {
                    "name": "RMV000000000211",
                    "description": "iPhone5 MNP",
                    "soc": "81592",
                    "rc": 0.0,
                    "service-level": "C",
                    "proposition-code": "0019460"
                }, {
                    "name": "RMV000000000215",
                    "description": "iPhone5 MNP 1,000btxxxxxxxxxxxxxxxxxxxxx xx",
                    "soc": "81612",
                    "rc": 0.0,
                    "service-level": "C",
                    "proposition-code": "0019447"
                }]
            };
            var data2 = {
                "trx-id": "62TSNI7WEJFH",
                "status": "SUCCESSFUL",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "fault": {
                    "name": "th.co.truecorp.ads.api.persistent.jdbc.DataNotFoundException",
                    "code": "PROFILE-404",
                    "message": "Not found proposition with specific criteria.",
                    "detailed-message": "DataNotFoundException Not found proposition with specific criteria.. "
                },
                "display-messages": [{
                    "message": "Not found proposition with specific criteria.",
                    "message-type": "WARNING",
                    "en-message": "Not found proposition with specific criteria.",
                    "th-message": "Not found proposition with specific criteria.",
                    "technical-message": "tmsapnpr1 (instance: SFF_node3) DataNotFoundException Not found proposition with specific criteria.. "
                }]
            };
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        }
    };


    return {
        validateGradingCallback: function(company_id, accountCat, fnCallback) {
            //// new requirement p'kwang p'muang case 'I' :: 13-07-2016 :: xsam32
            if (accountCat == 'I') {
                var resultData = SystemService.validateGradingResultI();
                fnCallback(resultData);
            } else {
                validateGradingAPI(company_id, function(resultData) {
                    fnCallback(resultData);
                });
            }
        },
        getAccountSubTypeCallback: function(sendData, fnCallback) {
            getAccountSubTypeAPI(sendData, function(resultData) {
                fnCallback(resultData);
            });
        },
        lastestCustomerCallback: function(certificateid, customertype, fnCallback) {
            lastestCustomerAPI(certificateid, customertype, function(resultData) {
                fnCallback(resultData);
            });
        },
        validateResumeCallback: function(msisdn, fnCallback) {
            var res = {};

            validateResumeAPI(msisdn, function(result) {
                var data = result.data;
                var normalFlow = function() { //SUCCESS
                    SystemService.hideLoading();
                    if (result.status) {
                        var dataCustomer = data["response-data"]["customer"];
                        var mobileServiceType = "ทรูมูฟเอช รายเดือน";
                        //var priceplan = dataCustomer["installed-products"][0];
                        var priceplan = $filter('filter')(dataCustomer["installed-products"], {
                            "product-type": "PRICEPLAN"
                        })[0];

                        if (priceplan["mobile-servicetype"] == "PREPAID")
                            mobileServiceType = "ทรูมูฟเอช เติมเงิน";

                        var _header = {
                            "producttype": mobileServiceType,
                            "subscriberno": msisdn,
                            "currpriceplan": (priceplan["product-name"] ? priceplan["product-name"] + ": " : "") + (priceplan["product-description"] ? priceplan["product-description"] : ""),
                        };
                        var _customerProfile = dataCustomer;
                        delete _customerProfile['installed-products'];

                        var _accntSubtypeList = [];
                        var _cardTypeList = [];
                        var _genderTypeList = [];
                        var _titleTypeList = [];
                        if (priceplan["account-category"], priceplan["company-code"], priceplan["mobile-servicetype"]) {
                            //ประเภทลูกค้าย่อย
                            AccountSubtypeAPI(priceplan["account-category"], priceplan["company-code"], priceplan["mobile-servicetype"], function(subtype) {
                                if (subtype.data["response-data"]) {
                                    _accntSubtypeList = subtype.data["response-data"];
                                } else {
                                    console.debug("resumeService : account-sub-type not response data");
                                }

                            });
                            ////คำนำหน้าชื่อ
                            //masterListAPI("CUST-TITLE-TYPE", function (titleList) {
                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _titleTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("resumeService : CUST-TITLE-TYPE not response data");
                            //    }
                            //});
                            ////เพศ
                            //masterListAPI("CUST-GENDER", function (titleList) {

                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _genderTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("resumeService : CUST-GENDER not response data");
                            //    }
                            //});
                            ////ประเภทบัตร
                            //masterListAPI("CUST-ID-TYPE-I", function (titleList) {

                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _cardTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("resumeService : CUST-ID-TYPE-I not response data");
                            //    }
                            //});
                        } else {
                            console.debug("resumeService : account-category,company-code,mobile-servicetype is undefine!");
                        }


                        fnCallback({
                            header: _header,
                            customerProfile: _customerProfile,
                            accountSubtypeList: _accntSubtypeList,
                            titleTypeList: _titleTypeList,
                            genderTypeList: _genderTypeList,
                            cardTypeList: _cardTypeList,
                            status: true,
                            installedProducts: priceplan,
                            priceplan: priceplan
                        });

                        if (data["display-messages"].length > 0) {

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
                                    errorText["en-message"] += errorList[i]["en-message"] + "<br /> ";
                                    errorText["th-message"] += errorList[i]["th-message"] + "<br /> ";
                                    errorText["technical-message"] += errorList[i]["technical-message"] + "<br /> ";
                                }
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

                            }, 1000);

                        }
                    } else {
                        setTimeout(function() {
                            SystemService.showAlert({
                                "message": "Can not connect!",
                                "message-code": "",
                                "message-type": "ERROR",
                                "en-message": "",
                                "th-message": "",
                                "technical-message": "validateResumeAPI"
                            });
                        }, 1000);
                    }

                };
                try {
                    var check = result.data["display-messages"][0]['message-type'];

                    if ($routeParams.subno) {
                        if (check == "WARNING") {
                            normalFlow();
                        } else {
                            setTimeout(function() {
                                SystemService.showAlert({
                                    "message": result.data["display-messages"][0]["message"],
                                    "message-code": result.data["display-messages"][0]["message-code"],
                                    "message-type": result.data["display-messages"][0]["message-type"],
                                    "en-message": result.data["display-messages"][0]["en-message"],
                                    "th-message": result.data["display-messages"][0]["th-message"],
                                    "technical-message": result.data["display-messages"][0]["technical-message"]
                                });
                            }, 1000);
                            fnCallback({
                                data: {
                                    status: false
                                }
                            });
                        }

                    } else {
                        if (check == "WARNING") {
                            normalFlow();
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
                            }, 1000);
                            fnCallback({
                                data: {
                                    status: false
                                }
                            });
                        }
                    }



                } catch (e) {
                    normalFlow();
                }

            });


        },
        salePriceplanCallback: function(target, fnCallback) {
            salePriceplanAPI(target, function(result) {
                fnCallback(result);
            });
        },
        validatePartnerCallback: function(target, fnCallback) {
            validatePartnerAPI(target, function(result) {
                fnCallback(result);
            });
        },
        propositionCallback: function(target, fnCallback) {
            propositionAPI(target, function(result) {
                fnCallback(result);
            });
        }
    }
});
