smartApp.service('migratePreToPostService', function($filter, SystemService, $routeParams) {
    var demo = SystemService.demo;
    var validateMigratePreToPostAPI = function(msisdn, fnCallback) {

        if (!demo) {
            var target = 'aftersales/tmv/migratepretopost/validatemigratepretopost?msisdn=' + msisdn;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "4TA3KLOQ7L5Y",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "title-code": "T3",
                        "firstname": "พฤกษวดี",
                        "lastname": "พฤกษวดีนงลักษณ์",
                        "birthdate": "1991-09-01T00:00:00+0700",
                        "id-expire-date": "2020-09-01T00:00:00+0700",
                        "contact-number": "",
                        "id-type": "P",
                        "id-number": "1189900130607",
                        "customer-id": "325",
                        "installed-products": [{
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
                    "message-code": "1",
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
            'cust-type=I' +
            '&company=' + param['company'] +
            '&service-type=POSTPAID' +
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
                    "name": "RPI",
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
                        "title": "นาย",
                        "title-code": "T1",
                        "firstname": "กูอุไก่",
                        "lastname": "สุขใจ",
                        'birthdate': '2015-07-20T00:00:00+0700',
                        'id-expire-date': '2015-11-25T00:00:00+0700',
                        "contact-number": "029448849#123",
                        "contact-mobile-number": "444444444",
                        "id-type": "I",
                        "id-number": "1189900130608",
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

            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3ERTIDCS16PT",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };

            if (certificateid == "1189900130607") {
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
                "trx-id": "3F18U42TWR9R6",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": [{
                    "name": "NETSVP89",
                    "description": "MG iNet 899, net 10 GB ULTD WiFi ULTD",
                    "soc": "107385",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-03",
                        "end": "2020-04-04"
                    },
                    "rc": 899.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                        "end": "2016-06-30"
                    },
                    "rc": 699.0,
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "RFSMTP01",
                    "description": "(4G) Smart 999 voice 500mins net7GB",
                    "soc": "94363",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-03-26",
                        "end": "2020-08-04"
                    },
                    "rc": 999.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "NETSVP89",
                    "description": "MG iNet 899, net 10 GB ULTD WiFi ULTD",
                    "soc": "107385",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-03",
                        "end": "2020-04-04"
                    },
                    "rc": 899.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                        "end": "2016-06-30"
                    },
                    "rc": 699.0,
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "RFSMTP01",
                    "description": "(4G) Smart 999 voice 500mins net7GB",
                    "soc": "94363",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-03-26",
                        "end": "2020-08-04"
                    },
                    "rc": 999.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "NETSVP89",
                    "description": "MG iNet 899, net 10 GB ULTD WiFi ULTD",
                    "soc": "107385",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-03",
                        "end": "2020-04-04"
                    },
                    "rc": 899.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                        "end": "2016-06-30"
                    },
                    "rc": 699.0,
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "RFSMTP01",
                    "description": "(4G) Smart 999 voice 500mins net7GB",
                    "soc": "94363",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-03-26",
                        "end": "2020-08-04"
                    },
                    "rc": 999.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "NETSVP89",
                    "description": "MG iNet 899, net 10 GB ULTD WiFi ULTD",
                    "soc": "107385",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-09-03",
                        "end": "2020-04-04"
                    },
                    "rc": 899.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                        "end": "2016-06-30"
                    },
                    "rc": 699.0,
                    "service-level": "C",
                    "priceplan-type": "N"
                }, {
                    "name": "RFSMTP01",
                    "description": "(4G) Smart 999 voice 500mins net7GB",
                    "soc": "94363",
                    "properties": {
                        "TR_SPECIAL_OFFER_IND": "",
                        "PRICEPLAN_TYPE": "N"
                    },
                    "sale-period": {
                        "start": "2013-03-26",
                        "end": "2020-08-04"
                    },
                    "rc": 999.0,
                    "service-level": "C",
                    "priceplan-type": "N"
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
                    "service-level": "C",
                    "priceplan-type": "N"
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
            if (target == "profiles/partner/validatepartner?function-type=CHANGE_OWNERSHIP&partner-code=88888888") {
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
                "trx-id": "4AR3P1G9VBLD",
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
                    "description": "iPhone5 MNP 1,000bt",
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
        validateGradingCallback: function(company_id, fnCallback) {
            validateGradingAPI(company_id, function(resultData) {
                fnCallback(resultData);
            });
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
        validateMigratePreToPostCallback: function(msisdn, fnCallback) {
            var res = {};

            validateMigratePreToPostAPI(msisdn, function(result) {
                var data = result.data;
                var normalFlow = function() { //SUCCESS
                    SystemService.hideLoading();
                    if (result.status) {
                        var dataCustomer = data["response-data"]["customer"];
                        var mobileServiceType = "ทรูมูฟเอช เติมเงิน";
                        //var priceplan = dataCustomer["installed-products"][0];
                        var priceplan = $filter('filter')(dataCustomer["installed-products"], {
                            "product-type": "PRICEPLAN"
                        })[0];
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
                                    console.debug("migratePreToPostService : account-sub-type not response data");
                                }

                            });
                            ////คำนำหน้าชื่อ
                            //masterListAPI("CUST-TITLE-TYPE", function (titleList) {
                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _titleTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("migratePreToPostService : CUST-TITLE-TYPE not response data");
                            //    }
                            //});
                            ////เพศ
                            //masterListAPI("CUST-GENDER", function (titleList) {

                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _genderTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("migratePreToPostService : CUST-GENDER not response data");
                            //    }
                            //});
                            ////ประเภทบัตร
                            //masterListAPI("CUST-ID-TYPE-I", function (titleList) {

                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _cardTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("migratePreToPostService : CUST-ID-TYPE-I not response data");
                            //    }
                            //});
                        } else {
                            console.debug("migratePreToPostService : account-category,company-code,mobile-servicetype is undefine!");
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
                                "technical-message": "validateMigratePreToPostAPI"
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
