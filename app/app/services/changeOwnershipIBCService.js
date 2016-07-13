smartApp.service('changeOwnershipIBCService', function($filter, SystemService, $routeParams) {
    var demo = SystemService.demo;
    var validateChangeOwnershipAPI = function(msisdn, fnCallback) {

        if (!demo) {
            var target = 'aftersales/tmv/changeownership/validatechangeownership?msisdn=' + msisdn;
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {

            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "3BDPN2HLK4TZ",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "status-code": "0",
                "response-data": {
                    "customer": {
                        "title": "นางสาว",
                        "title-code": "T3",
                        "firstname": "มีนา",
                        "lastname": "มาดู",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "",
                        "id-number": "1189900130607",
                        "customer-id": "2595",
                        "installed-products": [{
                            "ouId": "930",
                            "ban": "10000546",
                            "product-category": "TMV",
                            "product-type": "PRICEPLAN",
                            "product-sub-type": "R",
                            "product-status": "A",
                            "account-category": "C",
                            "account-sub-type": "FIN",
                            "product-id": "RFSMTP01",
                            "product-name": "RFSMTP01",
                            "product-description": "(4G) Smart 999 voice 500mins net7GB",
                            "bill-cycle": "10",
                            "company-code": "RF",
                            "service-level": "C",
                            "product-id-name": "MSISDN",
                            "product-id-number": "0939861331",
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "CHILD"
                        }]
                    }
                },
                "display-messages": []
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
                    "message": "Change Ownership IR/IDD will be canceled",
                    "message-code": "TMV-CHANGE-OWNERSHIP-00008",
                    "message-type": "WARNING",
                    "en-message": "Change Ownership IR/IDD will be canceled",
                    "th-message": "ลูกค้าโอนเปลี่ยนเจ้าของ การโทรทางไกลต่างประเทศและการโทรข้ามแดนระหว่างประเทศ จะถูกยกเลิกอัตโนมัติ กด OK เพื่อยืนยันการทารายการต่อ"
                }],
                "trx-id": "491045TMJELMZ",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": {
                    "customer": {
                        "title": "นางสาว",
                        "title-code": "T3",
                        "firstname": "มีนา",
                        "lastname": "มาดู",
                        "contact-number": "",
                        "contact-mobile-number": "",
                        "id-type": "",
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
                }, {
                    "name": "FIN",
                    "description": "บุคคลธรรมดา"
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
                        "firstname": "กอไก่",
                        "lastname": "ขอไข่",
                        'birthdate': '2015-07-20T00:00:00+0700',
                        'id-expire-date': '2020-07-20T00:00:00+0700',
                        "contact-number": "029448849#123",
                        "contact-mobile-number": "444444444",
                        "id-type": "",
                        "id-number": "1250100186030",
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
                            "account-sub-type": "FINx",
                            "product-id": "0880500207",
                            "bill-cycle": "10",
                            "bill-cycle-date": "10/10",
                            "company-code": "RM",
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

            if (certificateid == "3400400489300") {
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
                "trx-id": "3X18RYBCFS9L9",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": [{
                    "name": "RMV000000000001",
                    "description": "Proposition for TEST RF ",
                    "soc": "45552",
                    "rc": 0.0,
                    "service-level": "C",
                    "proposition-code": "0019537"
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
    var validateCustomerIDAPI = function(param, fnCallback) {
        var target = "profiles/customer/validatecustomerid?" +
            "customer-type=" + param['customer-type'] + "&" +
            "id-number=" + param['id-number'] + "&" +
            "customer-id=" + param['customer-id'];
        console.log(target);
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data1 = {
                "status": "SUCCESSFUL",
                "trx-id": "2R1TMA1C40B1F",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": {
                    "customer": {
                        "gender": "MALE",
                        "title": "นาย",
                        "title-code": "T0",
                        "firstname": "บริษัท ปตท.สำรวจและผลิตปิโตรเลียม จำกัด (มหาชน)",
                        "lastname": "เงินติดล้อ",
                        "birthdate": "1980-08-20T00:00:00+0700",
                        "customer-type": "I",
                        "contact-number": "027883838",
                        "contact-mobile-number": "0870009987",
                        "contact-email": "ss@gmail.com",
                        "language": "",
                        "id-type": "I",
                        "id-number": "83838838",
                        "tax-id": "888832883898709",
                        "id-expire-date": "2018-06-30T00:00:00+0700",
                        "branch-code": "branch1",
                        "customer-level": "NON_TOP",
                        "customer-sublevel": "NONE",
                        "customer-sublevel-id": "1",
                        "customer-id": "2842",
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "61/238",
                                "moo": "8",
                                "village": "moo ban",
                                "street": "ratchada",
                                "soi": "81",
                                "district": "dindaeng",
                                "province": "Bangkok",
                                "building-name": "Pakin",
                                "building-room": "22",
                                "building-floor": "13",
                                "sub-district": "Dindaeng",
                                "zip": "10400",
                                "household": "18"
                            }
                        },
                        "customer-properties": {
                            "BILL-CYCLE": "10",
                            "BILL-CYCLE-DESCRIPTION": "xxxxxx 10/13"
                        }
                    }
                }
            };
            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "2",
                    "message-type": "ERROR",
                    "en-message": "Customer Id นี้ไม่มีในระบบ",
                    "th-message": "Customer Id นี้ไม่มีในระบบ",
                    "technical-message": ""
                }],
                "trx-id": "3ERTR5HRVF9L",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };

            if (param['customer-id'] == "555555555") {
                fnCallback({
                    status: true,
                    data: data1,
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
    var validateAccountIDAPI = function(param, fnCallback) {
        var target = "profiles/customer/validateaccountid?" +
            "customer-type=" + param['customer-type'] + "&" +
            "company-code=" + param['company-code'] + "&" +
            "account-sub-type=" + param['account-sub-type'] + "&" +
            "account-id=" + param['account-id'] + "&" +
            "customer-id=" + param['customer-id'] + "&" +
            "id-number=" + param['id-number'];
        console.log(target);
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data1 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3K3BX74TCHAKR",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "title-code": "",
                        "firstname": "บริษัท ปตท.สำรวจและผลิตปิโตรเลียม จำกัด (มหาชน)",
                        "lastname": "",
                        "customer-type": "C",
                        "contact-number": "021123565",
                        "contact-mobile-number": "021123565",
                        "id-type": "C",
                        "id-number": "0107535000206",
                        "id-expire-date": "2016-12-31T00:00:00+0700",
                        "customer-id": "2482",
                        "installed-products": [{
                            "ouId": "1374",
                            "ban": "10000819",
                            "product-category": "TMV",
                            "account-category": "",
                            "account-sub-type": "RPA",
                            "product-id": "",
                            "company-code": "RF",
                            "product-properties": {
                                "REQUIRE-PRICEPLAN-MSG-EN": "No need to select new Price Plan (Promotion)",
                                "ACCOUNT-PRICEPLAN": "RFSMTP01",
                                "AGREEMENT-ID": "1890",
                                "ACCOUNT-STATUS": "Active",
                                "ACCOUNT-PRICEPLAN-DESCRIPTION": "(4G) Smart 999 voice 500mins net7GB",
                                "ACCOUNT-LASTNAME": "",
                                "ACCOUNT-SERVICE-LEVEL": "G",
                                "ACCOUNT-FIRSTNMAE": "ปตท.การขนส่ง",
                                "REQUIRE-PRICEPLAN-MSG-TH": "ไม่ต้องระบุโปรโมชั่น Price Plan (โปรโมชั่น) ใหม่",
                                "REQUIRE-PRICEPLAN-MSG-CODE": "",
                                "REQUIRE-PRICEPLAN": "NOT REQUIRE"
                            },
                            "address-list": {
                                "TAX_ADDRESS": {
                                    "number": "221",
                                    "moo": "",
                                    "street": "พระประแดง 10",
                                    "soi": "",
                                    "district": "พระประแดง",
                                    "province": "สมุทรปราการ",
                                    "building-name": "PPT",
                                    "building-room": "",
                                    "building-floor": "",
                                    "sub-district": "สำโรงใต้",
                                    "zip": "10130",
                                    "household": "221"
                                }
                            },
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "NORMAL",
                            "parent-ouId": "1234"
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "221",
                                "moo": "",
                                "street": "พระประแดง 10",
                                "soi": "",
                                "district": "พระประแดง",
                                "province": "สมุทรปราการ",
                                "building-name": "PPT",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "สำโรงใต้",
                                "zip": "10130",
                                "household": "221"
                            }
                        },
                        "customer-properties": {
                            "BILL-CYCLE": "2",
                            "BILL-CYCLE-DESCRIPTION": "Monthly Cycle close on the 1"
                        }
                    }
                }
            };
            var data3 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3K3BX74TCHAKR",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "title-code": "",
                        "firstname": "บริษัท ปตท.สำรวจและผลิตปิโตรเลียม จำกัด (มหาชน)",
                        "lastname": "",
                        "customer-type": "C",
                        "contact-number": "021123565",
                        "contact-mobile-number": "021123565",
                        "id-type": "C",
                        "id-number": "0107535000206",
                        "id-expire-date": "2016-12-31T00:00:00+0700",
                        "customer-id": "2482",
                        "installed-products": [{
                            "ouId": "1374",
                            "ban": "10000819",
                            "product-category": "TMV",
                            "account-category": "",
                            "account-sub-type": "RPA",
                            "product-id": "",
                            "company-code": "RF",
                            "product-properties": {
                                "REQUIRE-PRICEPLAN-MSG-EN": "Ability to select New Price Plan (Promotion) or use existing Price plan (Promotion)",
                                "ACCOUNT-PRICEPLAN": "RFSMTP01",
                                "AGREEMENT-ID": "1890",
                                "ACCOUNT-STATUS": "Active",
                                "ACCOUNT-PRICEPLAN-DESCRIPTION": "(4G) Smart 999 voice 500mins net7GB",
                                "ACCOUNT-LASTNAME": "",
                                "ACCOUNT-SERVICE-LEVEL": "G",
                                "ACCOUNT-FIRSTNMAE": "ปตท.การขนส่ง",
                                "REQUIRE-PRICEPLAN-MSG-TH": "ท่านสามารถเลือก Price Plan (โปรโมชั่น) ใหม่ หรือใช้ Price Plan (โปรโมชั่น) เดิม",
                                "REQUIRE-PRICEPLAN-MSG-CODE": "",
                                "REQUIRE-PRICEPLAN": "REQUIRE"
                            },
                            "address-list": {
                                "TAX_ADDRESS": {
                                    "number": "221",
                                    "moo": "",
                                    "street": "พระประแดง 10",
                                    "soi": "",
                                    "district": "พระประแดง",
                                    "province": "สมุทรปราการ",
                                    "building-name": "PPT",
                                    "building-room": "",
                                    "building-floor": "",
                                    "sub-district": "สำโรงใต้",
                                    "zip": "10130",
                                    "household": "221"
                                }
                            },
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "NORMAL",
                            "parent-ouId": "30051"
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "221",
                                "moo": "",
                                "street": "พระประแดง 10",
                                "soi": "",
                                "district": "พระประแดง",
                                "province": "สมุทรปราการ",
                                "building-name": "PPT",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "สำโรงใต้",
                                "zip": "10130",
                                "household": "221"
                            }
                        },
                        "customer-properties": {
                            "BILL-CYCLE": "2",
                            "BILL-CYCLE-DESCRIPTION": "Monthly Cycle close on the 1"
                        }
                    }
                }
            };
            var data4 = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3K3BX74TCHAKR",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "customer": {
                        "title": "",
                        "title-code": "",
                        "firstname": "บริษัท ปตท.สำรวจและผลิตปิโตรเลียม จำกัด (มหาชน)",
                        "lastname": "",
                        "customer-type": "C",
                        "contact-number": "021123565",
                        "contact-mobile-number": "021123565",
                        "id-type": "C",
                        "id-number": "0107535000206",
                        "id-expire-date": "2016-12-31T00:00:00+0700",
                        "customer-id": "2482",
                        "installed-products": [{
                            "ouId": "1374",
                            "ban": "10000819",
                            "product-category": "TMV",
                            "account-category": "",
                            "account-sub-type": "RPA",
                            "product-id": "",
                            "company-code": "RF",
                            "product-properties": {
                                "REQUIRE-PRICEPLAN-MSG-EN": "Ability to select New Price Plan (Promotion) or use existing Price plan (Promotion)",
                                "ACCOUNT-PRICEPLAN": "RFSMTP01",
                                "AGREEMENT-ID": "1890",
                                "ACCOUNT-STATUS": "Active",
                                "ACCOUNT-PRICEPLAN-DESCRIPTION": "(4G) Smart 999 voice 500mins net7GB",
                                "ACCOUNT-LASTNAME": "",
                                "ACCOUNT-SERVICE-LEVEL": "",
                                "ACCOUNT-FIRSTNMAE": "ปตท.การขนส่ง",
                                "REQUIRE-PRICEPLAN-MSG-TH": "ท่านสามารถเลือก Price Plan (โปรโมชั่น) ใหม่ หรือใช้ Price Plan (โปรโมชั่น) เดิม",
                                "REQUIRE-PRICEPLAN-MSG-CODE": "",
                                "REQUIRE-PRICEPLAN": "OPTIONAL"
                            },
                            "address-list": {
                                "TAX_ADDRESS": {
                                    "number": "221",
                                    "moo": "",
                                    "street": "พระประแดง 10",
                                    "soi": "",
                                    "district": "พระประแดง",
                                    "province": "สมุทรปราการ",
                                    "building-name": "PPT",
                                    "building-room": "",
                                    "building-floor": "",
                                    "sub-district": "สำโรงใต้",
                                    "zip": "10130",
                                    "household": "221"
                                }
                            },
                            "mobile-servicetype": "POSTPAID",
                            "has-splitcharge": false,
                            "is-childsim": false,
                            "is-softsuspend": false,
                            "ou-hierarchytype": "ROOT",
                            "parent-ouId": "30059"
                        }],
                        "address-list": {
                            "CUSTOMER_ADDRESS": {
                                "number": "221",
                                "moo": "",
                                "street": "พระประแดง 10",
                                "soi": "",
                                "district": "พระประแดง",
                                "province": "สมุทรปราการ",
                                "building-name": "PPT",
                                "building-room": "",
                                "building-floor": "",
                                "sub-district": "สำโรงใต้",
                                "zip": "10130",
                                "household": "221"
                            }
                        },
                        "customer-properties": {
                            "BILL-CYCLE": "2",
                            "BILL-CYCLE-DESCRIPTION": "Monthly Cycle close on the 1"
                        }
                    }
                }
            };
            var data2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "2",
                    "message-type": "ERROR",
                    "en-message": "Account Id นี้ไม่มีในระบบ",
                    "th-message": "Account Id นี้ไม่มีในระบบ",
                    "technical-message": ""
                }],
                "trx-id": "3ERTR5HRVF9L",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {}
            };
            if (param['account-id'] == "666666666") {
                fnCallback({
                    status: true,
                    data: data1,
                    error: "",
                    msgErr: ""
                });
            } else if (param['account-id'] == "777777777") {
                fnCallback({
                    status: true,
                    data: data3,
                    error: "",
                    msgErr: ""
                });
            } else if (param['account-id'] == "888888888") {
                fnCallback({
                    status: true,
                    data: data4,
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
    var getBillCycleAPI = function(param, fnCallback) {
        var target = param;
        console.log(target);
        if (!demo) {
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var data1 = {
                "status": "SUCCESSFUL",
                "trx-id": "03V94EUARX80",
                "process-instance": "tpx61.true.th (instance: sale)",
                "response-data": [{
                    "name": "2",
                    "description": "Monthly Cycle close on the 1"
                }, {
                    "name": "10",
                    "description": "Monthly Cycle close on the 9"
                }]
            };
            var data2 = {
                "status": "SUCCESSFUL",
                "trx-id": "03V94EUARX80",
                "process-instance": "tpx61.true.th (instance: sale)",
                "response-data": [{
                    "name": "3",
                    "description": "Monthly Cycle close on the 4"
                }, {
                    "name": "11",
                    "description": "Monthly Cycle close on the 10"
                }]
            };

            if (target == "profiles/master/billcycle?customer-type=B") {
                fnCallback({
                    status: true,
                    data: data1,
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
        validateChangeOwnershipCallback: function(msisdn, fnCallback) {
            var res = {};

            validateChangeOwnershipAPI(msisdn, function(result) {
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
                                    console.debug("changeOwnershipService : account-sub-type not response data");
                                }

                            });
                            ////คำนำหน้าชื่อ
                            //masterListAPI("CUST-TITLE-TYPE", function (titleList) {
                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _titleTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("changeOwnershipService : CUST-TITLE-TYPE not response data");
                            //    }
                            //});
                            ////เพศ
                            //masterListAPI("CUST-GENDER", function (titleList) {

                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _genderTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("changeOwnershipService : CUST-GENDER not response data");
                            //    }
                            //});
                            ////ประเภทบัตร
                            //masterListAPI("CUST-ID-TYPE-I", function (titleList) {

                            //    if (titleList.data["response-data"] && titleList.data["response-data"]["configuration-items"]) {
                            //        _cardTypeList = titleList.data["response-data"]["configuration-items"];
                            //    }
                            //    else {
                            //        console.debug("changeOwnershipService : CUST-ID-TYPE-I not response data");
                            //    }
                            //});
                        } else {
                            console.debug("changeOwnershipService : account-category,company-code,mobile-servicetype is undefine!");
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
                                    "message": "_",
                                    "message-code": "",
                                    "message-type": "WARNING",
                                    "en-message": "_",
                                    "th-message": "_",
                                    "technical-message": "..."
                                });
                                //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ยังไม่ได้ทำให้ multi alert
                                setTimeout(function() {
                                    $('.ngdMessage').html(errorText["message"]);
                                    $('.ngdEnMessage').html(errorText["en-message"]);
                                    $('.ngdThMessage').html(errorText["th-message"]);
                                    $('.ngdTechnicalMessage').html(errorText["technical-message"]);
                                }, 200);
                                //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ยังไม่ได้ทำให้ multi alert
                                setTimeout(function() {
                                    $('.ngdMessage').html(errorText["message"]);
                                    $('.ngdEnMessage').html(errorText["en-message"]);
                                    $('.ngdThMessage').html(errorText["th-message"]);
                                    $('.ngdTechnicalMessage').html(errorText["technical-message"]);
                                }, 1200);

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
                                "technical-message": "validateChangeOwnershipAPI"
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
        },
        validateAccountIDCallback: function(target, fnCallback) {
            validateAccountIDAPI(target, function(result) {
                fnCallback(result);
            });
        },
        validateCustomerIDCallback: function(target, fnCallback) {
            validateCustomerIDAPI(target, function(result) {
                fnCallback(result);
            });
        },
        getBillCycleCallback: function(target, fnCallback) {
            getBillCycleAPI(target, function(result) {
                fnCallback(result);
            });
        }
    }
});
