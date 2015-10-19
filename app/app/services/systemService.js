smartApp.service('SystemService', function($ngBootbox, $filter, $http, ModalService, ValidateMsgService) {
    console.log('SystemService');
    var that = this;
    this.demo = true;
    //this.secondAuthenURL = "https://sso-devt.true.th:11443/";//DEV
    //this.secondAuthenURL = "https://xxo-uat.true.th:11443/SSORESTFul/"; //UAT
    //this.secondAuthenURL = "https://xxo-uat.true.th:11443/SSORESTFul/";//PRO

    //for get by env
    this.secondAuthenURL = getSecondAuthenURL();

    this.pricePlans = [];
    var runTime = new Date().getTime();

    this.checkObj = function(obj, arr) {
        try {
            var o1 = obj;
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                o1 = o1[arr[i]];
                if (o1) {
                    count++;
                }
            }
            return (count == arr.length);
        } catch (e) {
            return false;
        }
    };
    this.validateEmail = function(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };
    this.setValidateEmail = function(email) {
        if (!that.validateEmail(email)) {
            that.showAlert(ValidateMsgService.data.errFormatEmail);
        }
    };
    this.validatePID = function(pid) {
        function checkPID() {
            pid = pid.toString().replace(/\D/g, '');
            if (pid.length == 13) {
                var sum = 0;
                for (var i = 0; i < pid.length - 1; i++) {
                    sum += Number(pid.charAt(i)) * (pid.length - i);
                }
                var last_digit = (11 - sum % 11) % 10;
                return pid.charAt(12) == last_digit;
            } else {
                return false;
            }
        }
        if (checkPID(pid)) {
            if (pid == '1212121211221' || pid == '1212121212121' || pid == '1212121212112' || pid == '1212122122222' || pid == '1221221212121' || pid == '0000000000001') {
                that.showAlert(ValidateMsgService.data.errFormatIdCard);
                return false;
            } else {
                return true;
            }
        } else {
            that.showAlert(ValidateMsgService.data.errFormatIdCard);
            return false;
        }
    }

    this.callServiceGetByPass = function(target, headers, fnCallback) {
        var requestData = {
            target: target
        };
        var httpRequest = {
            method: "POST",
            //url: '/webui/services/gateway/get.service',
            url: getURL('services/gateway/get.service'),
            data: requestData,
            timeout: 180000
        };
        if (headers != null) {
            httpRequest.headers = headers;
        }
        if (localStorage.getItem('orderId')) {
            httpRequest.headers = {
                'WEB_METHOD_CHANNEL': 'WEBUI',
                'E2E_REFID': localStorage.getItem('orderId')
            };
        }
        $http(httpRequest).success(function(data) {
            console.log('success ::: callServiceGetByPass');
            console.log(requestData.target);
            console.log(data);

            if (data.status == "SUCCESSFUL") {
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            } else {
                fnCallback({
                    status: false,
                    data: data,
                    error: "ERROR",
                    msgErr: ""
                });
            }
        }).error(function(data, status, errorJSON) {
            console.log('error ::: callServiceGet');
            console.log(requestData.target);
            console.log("ERROR");
            console.log(status, data, errorJSON);
            fnCallback({
                status: false,
                data: "",
                error: status,
                msgErr: status == 0 ? "Can not connect!" : ""
            });
            setTimeout(function() {
                that.showAlert({
                    "message": "Can not connect!",
                    "message-code": "",
                    "message-type": "ERROR",
                    "en-message": "Can not connect",
                    "th-message": "Can not connect",
                    "technical-message": target
                });
            }, 1000);
        });
    };
    this.callServiceGet = function(target, headers, fnCallback) {
        var requestData = {
            target: target
        };
        var httpRequest = {
            method: "POST",
            //url: '/webui/services/gateway/get.service',
            url: getURL('services/gateway/get.service'),
            data: requestData,
            timeout: 180000
        };
        if (headers != null) {
            httpRequest.headers = headers;
        }
        if (localStorage.getItem('orderId')) {
            httpRequest.headers = {
                'WEB_METHOD_CHANNEL': 'WEBUI',
                'E2E_REFID': localStorage.getItem('orderId')
            };
        }
        //console.log(httpRequest);
        $http(httpRequest).success(function(data) {
            console.log('success ::: callServiceGet');
            console.log(requestData.target);
            console.log(data);

            if (data.status == "SUCCESSFUL") {
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            } else {
                fnCallback({
                    status: false,
                    data: data,
                    error: "ERROR",
                    msgErr: ""
                });
                setTimeout(function() {
                    that.showAlert({
                        "message": data["display-messages"][0]["message"],
                        "message-code": data["display-messages"][0]["message-code"],
                        "message-type": "ERROR",
                        "en-message": data["display-messages"][0]["en-message"],
                        "th-message": data["display-messages"][0]["th-message"],
                        "technical-message": data["display-messages"][0]["technical-message"]
                    });
                }, 1000);
            }
        }).error(function(data, status, errorJSON) {
            console.log('error ::: callServiceGet');
            console.log(requestData.target);
            console.log("ERROR");
            console.log(status, data, errorJSON);
            fnCallback({
                status: false,
                data: "",
                error: status,
                msgErr: status == 0 ? "Can not connect!" : ""
            });
            that.showAlert({
                "message": "Can not connect!",
                "message-code": "",
                "message-type": "ERROR",
                "en-message": "Can not connect",
                "th-message": "Can not connect",
                "technical-message": target
            });
        });
    };
    this.callServicePost = function(data, headers, fnCallback) {
        console.log(data);
        var httpRequest = {
            method: "POST",
            //url: '/webui/services/gateway/post.service',
            url: getURL('services/gateway/post.service'),
            data: data,
            timeout: 180000
        };

        if (headers != null) {
            //httpRequest.headers = headers;
        }
        if (localStorage.getItem('orderId')) {
            httpRequest.headers = {
                'WEB_METHOD_CHANNEL': 'WEBUI',
                'E2E_REFID': localStorage.getItem('orderId')
            };
        }
        $http(httpRequest).success(function(data) {
            console.log(data);
            if (data.status == "SUCCESSFUL") {
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            } else {
                fnCallback({
                    status: false,
                    data: data,
                    error: "ERROR",
                    msgErr: ""
                });
                setTimeout(function() {
                    that.showAlert({
                        "message": data["display-messages"][0]["message"],
                        "message-code": data["display-messages"][0]["message-code"],
                        "message-type": "ERROR",
                        "en-message": data["display-messages"][0]["en-message"],
                        "th-message": data["display-messages"][0]["th-message"],
                        "technical-message": data["display-messages"][0]["technical-message"]
                    });
                }, 1000);
            }
        }).error(function(dataErr, status) {
            console.log("ERROR");
            console.log(status, dataErr);
            fnCallback({
                status: false,
                data: "",
                error: status,
                msgErr: status == 0 ? "Can not connect!" : ""
            });
            setTimeout(function() {
                that.showAlert({
                    "message": "Can not connect!",
                    "message-code": "",
                    "message-type": "ERROR",
                    "en-message": "Can not connect",
                    "th-message": "Can not connect",
                    "technical-message": data.target
                });
            }, 1000);

        });
    };
    this.callServicePostByPass = function(data, headers, fnCallback) {
        console.log(data);
        var httpRequest = {
            method: "POST",
            url: getURL('services/gateway/post.service'),
            data: data,
            timeout: 180000
        };

        if (headers != null) {
            //httpRequest.headers = headers;
        }
        if (localStorage.getItem('orderId')) {
            httpRequest.headers = {
                'WEB_METHOD_CHANNEL': 'WEBUI',
                'E2E_REFID': localStorage.getItem('orderId')
            };
        }
        $http(httpRequest).success(function(data) {
            console.log(data);
            if (data.status == "SUCCESSFUL") {
                fnCallback({
                    status: true,
                    data: data,
                    error: "",
                    msgErr: ""
                });
            } else {
                fnCallback({
                    status: false,
                    data: data,
                    error: "ERROR",
                    msgErr: ""
                });
            }
        }).error(function(dataErr, status) {
            console.log("ERROR");
            console.log(status, dataErr);
            fnCallback({
                status: false,
                data: "",
                error: status,
                msgErr: status == 0 ? "Can not connect!" : ""
            });
            setTimeout(function() {
                that.showAlert({
                    "message": "Can not connect!",
                    "message-code": "",
                    "message-type": "ERROR",
                    "en-message": "Can not connect",
                    "th-message": "Can not connect",
                    "technical-message": data.target
                });
            }, 1000);

        });
    };


    this.generateOrderId = function(parameter, fnCallback) {
        //var target = 'aftersales/order/generate-id?channel=WEBUI&dealer=80000011';
        var target = 'aftersales/order/generate-id' + parameter;
        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI'
        };
        if (!that.demo) {
            that.callServiceGet(target, headers, function(result) {
                fnCallback(result.data);
            });
        } else {
            fnCallback({
                "status": "SUCCESSFUL",
                "trx-id": "4EONTQNYU4VZ",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": "15070800DEMO000000002"
            });
        }

    };
    this.second_authen = function(trx_id, fnCallback) {
        var target = 'security/identity/second_authen?trx_id=' + trx_id + '&app_id=WEBUI';
        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI'
        };
        if (!that.demo) {
            that.callServiceGetByPass(target, headers, function(result) {
                fnCallback(result.data);
            });
        } else {
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "6OKMIN4J8HDZ",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": [{
                    "loginName": "UserTSM4",
                    "employeeId": "10000004",
                    "authRes": {
                        "app": "WEBUI",
                        "info": "COMPANY=True Information Technology company limited;;DEPARTMENT=Information Technology (Infrastructure);;DIVISION=--;;EMPLOYEEID=10000004;;ENGLISHNAME=User Test4;;FIRSTNAME=User;;INITIALS=Mr.;;LOGINNAME=UserTSM4;;MAIL=usr_tsm4@Truecorp.co.th;;POSITION=IT Security Administration;;ROLES=CN=R-TSM-USER2,OU=Groups,DC=essoad,DC=th|CN=R-INCT-SALESUP,OU=Unused,OU=Groups,DC=essoad,DC=th;;SECTION=IT Security Administration;;SHOPCODE=80000001|80000001|80000005|80000008;;SURNAME=Test4;;THAINAME=นาย ไทย test4",
                        "responseCode": "200",
                        "responseDesc": "Success",
                        "trxID": "71e5603394694c40a744739188496b83"
                    }
                }]
            };
            var data2 = {
                "status": "UNSUCCESSFUL",
                "display-messages": [{
                    "message": "",
                    "message-code": "1",
                    "message-type": "ERROR",
                    "en-message": "Data not found",
                    "th-message": "Data not found",
                    "technical-message": ""
                }, {
                    "message": "",
                    "message-code": "1",
                    "message-type": "ERROR",
                    "en-message": "สิทธิการใช้งานต่างประเทศจะถูกยกเลิก",
                    "th-message": "สิทธิการใช้งานต่างประเทศจะถูกยกเลิก",
                    "technical-message": ""
                }],
                "trx-id": "6OKMIN4J8HDZ",
                "process-instance": "psaapdv1 (instance: SFF_node1)",
                "response-data": [{
                    "loginName": "UserTSM4",
                    "employeeId": "10000004",
                    "authRes": {
                        "app": "WEBUI",
                        "info": "COMPANY=True Information Technology company limited;;DEPARTMENT=Information Technology (Infrastructure);;DIVISION=--;;EMPLOYEEID=10000004;;ENGLISHNAME=User Test4;;FIRSTNAME=User;;INITIALS=Mr.;;LOGINNAME=UserTSM4;;MAIL=usr_tsm4@Truecorp.co.th;;POSITION=IT Security Administration;;ROLES=CN=R-TSM-USER2,OU=Groups,DC=essoad,DC=th|CN=R-INCT-SALESUP,OU=Unused,OU=Groups,DC=essoad,DC=th;;SECTION=IT Security Administration;;SHOPCODE=80000001|80000001|80000005|80000008;;SURNAME=Test4;;THAINAME=นาย ไทย test4",
                        "responseCode": "200",
                        "responseDesc": "Success",
                        "trxID": "71e5603394694c40a744739188496b83"
                    }
                }]
            };
            if (trx_id == "4EONTQNYU4VZ") {
                fnCallback(data);
            } else {
                fnCallback(data2);
            }

        }

    };
    this.generatePDF = function(data, fnCallback) {
        var url = '';


        if (!that.demo) {
            var httpRequest = {
                method: "POST",
                url: getURL('services/report/createReport.service'),
                data: data,
                timeout: 30000
            };
            $http(httpRequest).success(function(response) {
                url = getURL('report/view/pdf/') + response.reportId + '.action';
                fnCallback(url);
            });
        } else {
            url = 'PDFs/AfterSaleReport.pdf';
            fnCallback(url);
        }
    };


    this.customerProfile = function(subscriberno, fnCallback) {
        var requestData = {
            target: 'profiles/customer/tmv/customerProfile/' + subscriberno
        };
        $http({
            method: "POST",
            url: getURL('services/gateway/get.service'),
            data: requestData,
            timeout: 30000,
            //contentType: "application/JSON"
        }).success(function(data) {
            console.log(data);
            if (data["status-code"] != "2") {
                var priceplan = $filter('filter')(data.customer["installed-products"], {
                    "product-type": "PRICEPLAN"
                })[0];
                var offer = $filter('filter')(data.customer["installed-products"], {
                    "product-type": "!PRICEPLAN"
                });

                var mobileServiceType = "ทรูมูฟเอช เติมเงิน";
                if (priceplan["mobile-servicetype"] == "POSTPAID")
                    mobileServiceType = "ทรูมูฟเอช รายเดือน";

                var rusult = {
                    header: {
                        "producttype": mobileServiceType,
                        "subscriberno": subscriberno,
                        "currpriceplan": priceplan["product-name"] + ": " + priceplan["product-description"],
                    },
                    customerProfile: {
                        "id-number": data["customer"]["id-number"],
                        "title": data["customer"]["title"],
                        "firstname": data["customer"]["firstname"],
                        "lastname": data["customer"]["lastname"],
                    },
                    priceplan: priceplan,
                    offer: offer,
                    "display-messages": data["display-messages"],
                    "status-code": data["status-code"],
                    "status": data["status"]
                };
                fnCallback({
                    status: true,
                    data: rusult,
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
        }).error(function(data, status) {
            console.log("ERROR");
            console.log(data, status);
            fnCallback({
                status: false,
                data: [],
                error: status,
                msgErr: data
            });
        });

    }
    this.get = function(subscriberno, fnCallback) {
        var data = {
            'status': 'SUCCESSFUL',
            'customer': {
                'title': 'Miss',
                'title-code': 'T3',
                'firstname': 'Nate',
                'lastname': 'Phutthicha',
                'contact-number': null,
                'id-number': '3389225969739',
                'id-type': '',
                'installed-products': [{
                    'ouId': '5010',
                    'ban': '20009628',
                    'product-category': 'TMH',
                    'product-type': 'PRICEPLAN',
                    'product-status': '',
                    'number-status': 'A',
                    'account-category': 'I',
                    'account-sub-type': 'FIN',
                    'product-id': 'EDATAP69',
                    'product-name': 'EDATAP69',
                    'product-description': 'Biz &amp; Ent 900,Data UNL5GB/128,WiFi',
                    'bill-cycle': '2',
                    'bill-cycle-next-date': '02/07/2015',
                    'company-code': 'RF',
                    'service-level': 'C',
                    'product-id-name': 'MSISDN',
                    'product-id-number': '0689100006',
                    'installed-date': 1431363600000,
                    'mobile-servicetype': 'POSTPAID',
                    'has-splitcharge': false,
                    'is-childsim': false,
                    'is-softsuspend': false,
                    'next-priceplan-code': 'NETSVP73',
                    'next-priceplan-desc': 'V0S0G1_Multi SIM 300, Data only 1GB'
                }, {
                    'product-category': 'TMH',
                    'product-type': 'PROPOSITION',
                    'product-status': '',
                    'product-id': 'RMV0000000002720',
                    'product-name': 'RMV0000000002720',
                    'product-description': 'iPhone 4_8GB,Free RC 699*7 mths (Penalty 4,893.-,Contract 18 mths)',
                    'product-soc-code': 'installedProductTmv2',
                    'product-id-name': 'MSISDN',
                    'product-id-number': '0689100006',
                    'has-splitcharge': false,
                    'is-childsim': false,
                    'is-softsuspend': false
                }, {
                    'product-category': 'TMH',
                    'product-type': 'PROPOSITION',
                    'product-status': '',
                    'product-id': 'RMV0000000002721',
                    'product-name': 'RMV0000000002721',
                    'product-description': 'iPhone 4_8GB,Free RC 699*7 mths (Penalty 4,893.-,Contract 18 mths)',
                    'product-soc-code': 'installedProductTmv2',
                    'product-id-name': 'MSISDN',
                    'product-id-number': '0689100006',
                    'has-splitcharge': false,
                    'is-childsim': false,
                    'is-softsuspend': false
                }, {
                    'product-category': 'TMH',
                    'product-type': 'DISCOUNT',
                    'product-status': '',
                    'product-id': 'DIR040',
                    'product-name': 'DIR040',
                    'product-description': 'Discount 100 bt on Monthly fee',
                    'product-soc-code': '31891',
                    'product-id-name': 'MSISDN',
                    'product-id-number': '0689100006',
                    'has-splitcharge': false,
                    'is-childsim': false,
                    'is-softsuspend': false
                }, {
                    'product-category': 'TMH',
                    'product-type': 'DISCOUNT',
                    'product-status': '',
                    'product-id': 'DIR040',
                    'product-name': 'DIR040',
                    'product-description': 'Discount 100 bt on Monthly fee',
                    'product-soc-code': '31891',
                    'product-id-name': 'MSISDN',
                    'product-id-number': '0689100006',
                    'has-splitcharge': false,
                    'is-childsim': false,
                    'is-softsuspend': false
                }]
            },
            'display-messages': [],
            'trx-id': '3BDPN2HLK4TZ',
            'process-instance': 'psaapdv1 (instance: SFF_node1)',
            'status-code': '0'
        };
        if (data["status-code"] != "2") {
            var priceplan = $filter('filter')(data.customer["installed-products"], {
                "product-type": "PRICEPLAN"
            })[0];
            var offer = $filter('filter')(data.customer["installed-products"], {
                "product-type": "!PRICEPLAN"
            });

            var mobileServiceType = "ทรูมูฟเอช เติมเงิน";
            if (priceplan["mobile-servicetype"] == "POSTPAID")
                mobileServiceType = "ทรูมูฟเอช รายเดือน";

            var rusult = {
                header: {
                    "producttype": mobileServiceType,
                    "subscriberno": subscriberno,
                    "currpriceplan": priceplan["product-name"] + ": " + priceplan["product-description"],
                },
                customerProfile: {
                    "id-number": data["customer"]["id-number"],
                    "title": data["customer"]["title"],
                    "firstname": data["customer"]["firstname"],
                    "lastname": data["customer"]["lastname"],
                    "title-code": data["customer"]["title-code"]
                },
                priceplan: priceplan,
                offer: offer,
                "display-messages": data["display-messages"],
                "status-code": data["status-code"],
                "status": data["status"]
            };
            fnCallback({
                status: true,
                data: rusult,
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

    this.getReasons = function(activityCode, fnCallback) {
        var data = {
            'status': 'SUCCESSFUL',
            'trx-id': '5NH31QALNK0N',
            'process-instance': 'psaapdv1 (instance: SFF_node1)',
            'response-data': {
                'activity-code': '119',
                'activity-name': 'TMV-Change priceplan reason codes',
                'available-reasons': {
                    'CPP08': 'Priceplan : Next PP-go DTAC',
                    'CPP07': 'Priceplan : Next PP-go AIS',
                    'CPP06': 'Priceplan : Non Voice-go other',
                    'CPP05': 'Priceplan : Non Voice-go DTAC',
                    'CPP09': 'Priceplan : Next PP-go other',
                    'CNOU': 'Cancel : No Usage',
                    'CCL01': 'Collection : Unhappy',
                    'CPP04': 'Priceplan : Voice - go AIS',
                    'CPP03': 'Priceplan : Voice - go other',
                    'CPP02': 'Priceplan : Voice - go DTAC',
                    'CPP01': 'Priceplan : Voice - go AIS',
                    'MNPHR': 'Cancel RMV Sub - Port Reverse',
                    'COT01': 'Other : Fatality',
                    'COT02': 'Other : Go abroad',
                    'COT03': 'Other : Fraud-Innocent victim',
                    'CHMNRF': 'Cancel TMH Post Sub PO to RF',
                    'MGPRE': 'Mig from Postpaid CCBS to Pre',
                    'COLB': 'Collection batch',
                    'COLL': 'CC Subs - Collection Batch',
                    '27': 'Leaving Country',
                    '2': 'Winback',
                    'CDE01': 'Dealer - free sim',
                    '30': 'Other:...',
                    'MTEN': 'Cancel Move to Ensemble',
                    'TCCBS': 'Cancel RMV Sub to CCBS',
                    '17': 'Customer Dissatisfied because of Service Quality',
                    'MNPRV': 'Cancel Sub - Port Reversal',
                    'MGJ5': 'Migrate Post to Pre',
                    '16': 'Customer Dissatisfied because of Price Structure',
                    '13': 'Customer left without Notifying',
                    'SF002': 'Cancel : Premium Rate Fraud',
                    'SF001': 'Cancel : Unable to contact',
                    'MNPRE': 'Cancel Sub - MNP',
                    'NW10': 'Network : Customer Test',
                    'DE02': 'Dealer - Cancel',
                    'RFREOT': 'Cancel RF Port Reverse',
                    '94': 'OLO Request',
                    'COWN': 'Change Ownership',
                    'CMLBS': 'Cancel to Act Multi SIM CCBS',
                    '10': 'Data Quality Problem',
                    'CSV01': 'Service : Unhappy - shop',
                    'CSV05': 'Service : Unhappy - channel',
                    'CSV04': 'Service : Unhappy - Telesale',
                    'CSV03': 'Service : Unhappy - AE',
                    'CSV02': 'Service : Unhappy-Call Center',
                    'CSV08': 'Service : Unhappy - After Sale',
                    'CSV07': 'Service : Unhappy - Dealer TVS',
                    'CSV06': 'Service : Unhappy - Dealer',
                    'CCV02': 'Convergence:TLFV contract end',
                    'CCV03': 'Convergence:no need net ATB3',
                    'SV051': 'Cancel : SIM & Accessories',
                    'RFPOTM': 'Cancel RF Sub- RF to TMV Postpay',
                    'RFPOTO': 'Cancel RF Sub-MNP Postpay',
                    'SF015': 'Cancel : Dealer Fraud',
                    'RFPOTH': 'Cancel RF Sub- RF to TMH Postpay',
                    'SF016': 'Cancel : Subscription fraud',
                    'CCV01': 'Convergence:no need TLFV',
                    'MCCBS': 'Cancel Sub – CCBS Migration',
                    '7MCN': 'Cancel Sub - Move to CCBS',
                    'CAN': 'Cancel Subs Req - No Need',
                    'HRC01': 'Cancel Sub - Unidentify Owner',
                    'CPA01': 'Payment : payment fee',
                    'SF009': 'Cancel : Not Known at Address',
                    'HMPORF': 'Cancel TMH Sub-TMH to RF',
                    'SF008': 'Cancel : Internal Fraud',
                    'SF007': 'Cancel : Roaming Fraud',
                    'SF006': 'Cancel : Call Selling',
                    'SF003': 'Cancel : Returned Bill',
                    'SF012': 'Cancel:International Call Sell',
                    'CCANR': 'Regular Collection Cancellation due to root FA.',
                    'SF010': 'Cancel : Customer Not known',
                    'SF011': 'Cancel : Innocent Victim',
                    'RMTMV': 'Cancel RMV Sub-PO to TMV',
                    'AA02': 'Require installment',
                    'AA03': 'Require device discount',
                    'AA01': 'Discount expired',
                    'AA06': 'Sook X3 / Cant install TOL',
                    'CCC01': 'Cost Control:Too many SIMs',
                    'AA04': 'Broken device',
                    'AA05': 'Fair usage',
                    'CCC04': 'Cost Control:Corporate Policy',
                    'SC001': 'Cancel : Manual Collection',
                    'CNW02': 'Network:Voice Quality-go DTAC',
                    'CNW03': 'Network:Voice Quality-go Other',
                    '56': 'Customer Deceased',
                    'CNW01': 'Network:Voice Quality-go AIS',
                    'CREQ': 'Customer request',
                    'CBL01': 'Billing : Complicated Billing',
                    'CBL02': 'Billing : Unhappy - One Bill',
                    'CBL04': 'Billing : VAS Billing Error',
                    'CBL03': 'Billing : Voice Billing Error',
                    'CNW07': 'Network:Coverage-go AIS',
                    'CNW06': 'Network:Non Voice-go Other',
                    'CNW05': 'Network:Non Voice-go DTAC',
                    'CNW04': 'Network:Non Voice-go AIS',
                    'MGPOR': 'Mig Post CCBS to Amdocs-RETEN',
                    'CNW09': 'Network:Coverage-go Other',
                    'CNW08': 'Network:Coverage-go DTAC',
                    'MGPOS': 'Mig Post from CCBS to Amdocs',
                    'MNPOH': 'Cancel RMV Sub - MNP Postpay',
                    'RH01': 'Cancel: Sub Retain to New TMH',
                    'CV04': 'Convergence:TLFV Damage(Flood)',
                    'MNPOS': 'Cancel Sub - MNP',
                    'CPD02': 'Product : Accessories Problem',
                    'CPD01': 'Product : Handset Problem',
                    'CCR01': 'Credit Limit',
                    'CPD03': 'Product : Lost/stolen'
                }
            }
        };


        if (data["status"] == "SUCCESSFUL") {
            var availableReasons = $filter('filter')(data["response-data"]["available-reasons"]);
            //console.log("availableReasons:");
            //console.log(availableReasons);

            var rusult = {
                reasons: availableReasons
            };
            fnCallback({
                status: true,
                data: rusult,
                error: "",
                msgErr: ""
            });
        }


    };

    this.getNextBillDate = function() {
        var date = new Date();
        date.setDate(date.getDate() + 1);

        return $filter('date')(date, 'dd/MM/yyyy');
    };

    this.genDatePicker = function() {
        var date = new Date();
        date.setDate(date.getDate() + 1);

        setTimeout(function() {
            var picker = new Pikaday({
                field: document.getElementsByClassName('fec-date-picker')[0],
                format: "DD/MM/YYYY",
                defaultDate: date,
                isBuddhist: true,
                minDate: date,
                i18n: {
                    previousMonth: 'ย้อนหลัง',
                    nextMonth: 'ถัดไป',
                    months: [
                        'มกราคม',
                        'กุมภาพันธ์',
                        'มีนาคม',
                        'เมษายน',
                        'พฤษภาคม',
                        'มิถุนายน',
                        'กรกฎาคม',
                        'สิงหาคม',
                        'กันยายน',
                        'ตุลาคม',
                        'พฤศจิกายน',
                        'ธันวาคม'
                    ],
                    weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
                    weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
                },
                onSelect: function() {

                }

            });
        }, 500);

        setTimeout(function() {
            var picker = new Pikaday({
                field: document.getElementsByClassName('fec-date-picker-birthDay')[0],
                format: "DD/MM/YYYY",
                defaultDate: date,
                isBuddhist: true,
                i18n: {
                    previousMonth: 'ย้อนหลัง',
                    nextMonth: 'ถัดไป',
                    months: [
                        'มกราคม',
                        'กุมภาพันธ์',
                        'มีนาคม',
                        'เมษายน',
                        'พฤษภาคม',
                        'มิถุนายน',
                        'กรกฎาคม',
                        'สิงหาคม',
                        'กันยายน',
                        'ตุลาคม',
                        'พฤศจิกายน',
                        'ธันวาคม'
                    ],
                    weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
                    weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
                },
                onSelect: function() {

                }

            });
        }, 500);
        setTimeout(function() {
            var picker = new Pikaday({
                field: document.getElementsByClassName('fec-date-picker-expireDay')[0],
                format: "DD/MM/YYYY",
                defaultDate: date,
                isBuddhist: true,
                i18n: {
                    previousMonth: 'ย้อนหลัง',
                    nextMonth: 'ถัดไป',
                    months: [
                        'มกราคม',
                        'กุมภาพันธ์',
                        'มีนาคม',
                        'เมษายน',
                        'พฤษภาคม',
                        'มิถุนายน',
                        'กรกฎาคม',
                        'สิงหาคม',
                        'กันยายน',
                        'ตุลาคม',
                        'พฤศจิกายน',
                        'ธันวาคม'
                    ],
                    weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
                    weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
                },
                onSelect: function() {

                }

            });
        }, 500);



    }

    //ngDialog -----------
    this.ngDialogData = {
        "message": "",
        "message-code": "",
        "message-type": "",
        "en-message": "",
        "th-message": "",
        "technical-message": ""
    };
    this.validateErrorAlert = function(msgModel) {
        //ModalService.showAlert(msgModel);

        that.ngDialogData = msgModel;

        $ngBootbox.customDialog({
            templateUrl: 'app/views/ngBootbox-validate-template.html?v=' + runTime,
            onEscape: function() {
                return false;
            },
            show: true,
            backdrop: true,
            closeButton: false,
            animate: true
        });
        setTimeout(function() {
            $("#btn_ngbOK").focus();
        }, 800);

    };
    this.showAlert = function(msgModel) {
        //ModalService.showAlert(msgModel);

        that.ngDialogData = msgModel;

        $ngBootbox.customDialog({
            templateUrl: 'app/views/ngBootbox-template.html?v=' + runTime,
            onEscape: function() {
                return false;
            },
            show: true,
            backdrop: true,
            closeButton: false,
            animate: true
        });
        setTimeout(function() {
            $("#btn_ngbOK").focus();
        }, 800);

    };
    this.showLoading = function() {
        //ModalService.showLoading();
        $ngBootbox.customDialog({
            templateUrl: 'app/views/ngBootbox-loading.html?v=' + runTime,
            onEscape: function() {
                return false;
            },
            show: true,
            backdrop: true,
            closeButton: false,
            animate: true
        });

    };
    this.hideLoading = function() {
        //ModalService.hideLoading();
        //alert('hideLoading');
        setTimeout(function() {
            $ngBootbox.hideAll();
        }, 1000);
    };
    this.showConfirm = function() {
        return ModalService.showConfirm();
    };
    this.showBeforeClose = function(msgModel, approveFunction, cancelFunction) {
        //$ngBootbox.hideAll();
        that.ngDialogData = msgModel;
        $ngBootbox.customDialog({
            templateUrl: 'app/views/ngBootbox-showBeforeClose.html?v=' + runTime,
            onEscape: function() {
                return false;
            },
            show: true,
            backdrop: true,
            closeButton: false,
            animate: true
        });
        //ModalService.showBeforeClose(msgModel, approveFunction, cancelFunction);

    };

    //change onwnership
    this.getAddressByType = function(type, fnCallback) {
        var rusult = {};

        if (type == "0") {
            rusult = {
                citizenID: '3400400489300',
                prefixTH: 'นาย',
                firstNameTH: 'ทวัชร์',
                lastNameTH: 'แสงถลุงเหล็ก',
                prefixEN: 'Mr.',
                firstNameEN: 'Thawat',
                lastNameEN: 'Saengthalunglek',
                sex: '1',
                birthDay: '13/07/2526',
                issueDay: '01/08/2551',
                expireDay: '12/07/2558',
                homeNumber: '76',
                moo: '5',
                trok: '',
                soi: '',
                road: '',
                district: 'โนนทัน',
                amphur: 'หนองเรือ',
                province: 'ขอนแก่น',
                postcode: '40210',
                photoID: '40040108011454',
                photo: ''
            }
        } else if (type == "1") {
            rusult = {
                citizenID: '3400400489300',
                prefixTH: 'นาย',
                firstNameTH: 'ทวัชร์',
                lastNameTH: 'แสงถลุงเหล็ก',
                prefixEN: 'Mr.',
                firstNameEN: 'Thawat',
                lastNameEN: 'Saengthalunglek',
                sex: '1',
                birthDay: '13/07/2526',
                issueDay: '01/08/2551',
                expireDay: '12/07/2558',
                homeNumber: '96/229',
                moo: '6',
                trok: '',
                soi: '',
                road: 'ลำลูกกา 2',
                district: 'คูคต',
                amphur: 'ลำลูกกา',
                province: 'ปทุมธานี',
                postcode: '12130',
                photoID: '40040108011454',
                photo: ''
            }
        } else {
            rusult = {
                citizenID: '3400400489300',
                prefixTH: 'นาย',
                firstNameTH: 'ทวัชร์',
                lastNameTH: 'แสงถลุงเหล็ก',
                prefixEN: 'Mr.',
                firstNameEN: 'Thawat',
                lastNameEN: 'Saengthalunglek',
                sex: '1',
                birthDay: '13/07/2526',
                issueDay: '01/08/2551',
                expireDay: '12/07/2558',
                homeNumber: '55/6',
                moo: '11',
                trok: '',
                soi: '',
                road: '',
                district: 'บึงคำพร้อย',
                amphur: 'ลำลูกกา',
                province: 'ปทุมธานี',
                postcode: '12150',
                photoID: '40040108011454',
                photo: ''
            }
        }

        fnCallback({
            status: true,
            data: rusult,
            error: "",
            msgErr: ""
        });
    };

    //masterData ------//for demo-----
    this.getMasterGender = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "4819LRXVSQHUM",
            "process-instance": "tmsapnpr1 (instance: SFF_node4)",
            "response-data": {
                "id": "CUST-GENDER",
                "name": "Customer genders",
                "description": "List of customer genders",
                "configuration-items": [{
                    "key": "FEMALE",
                    "value": "FEMALE",
                    "description": "Gender type FEMALE",
                    "en-description": "FEMALE",
                    "th-description": "ผู้หญิง"
                }, {
                    "key": "MALE",
                    "value": "MALE",
                    "description": "Gender type MALE",
                    "en-description": "MALE",
                    "th-description": "ผู้ชาย"
                }]
            }
        };
    };
    this.getMasterTitleType = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "4CN1Y7BQSIJR",
            "process-instance": "psaapdv1 (instance: SFF_node1)",
            "response-data": {
                "id": "CUST-TITLE-TYPE",
                "name": "Customer title",
                "description": "List of standard customer title",
                "configuration-items": [{
                    "key": "DR.",
                    "value": "T4",
                    "description": "ดร.",
                    "en-description": "Dr.",
                    "th-description": "ดร."
                }, {
                    "key": "MISS",
                    "value": "T3",
                    "description": "นางสาว",
                    "en-description": "Miss",
                    "th-description": "นางสาว"
                }, {
                    "key": "MR.",
                    "value": "T1",
                    "description": "นาย",
                    "en-description": "Mr.",
                    "th-description": "นาย"
                }, {
                    "key": "MRS.",
                    "value": "T2",
                    "description": "นาง",
                    "en-description": "Mrs.",
                    "th-description": "นาง"
                }, {
                    "key": "OTHER",
                    "value": "T5",
                    "description": "อื่่น ๆ",
                    "en-description": "Other",
                    "th-description": "อื่น ๆ"
                }]
            }
        };
    };
    this.getMasterTitleOtherType = function() {
        return {
  "status": "SUCCESSFUL",
  "trx-id": "733BAUT36D65",
  "process-instance": "tmsapnpr1 (instance: SFF_node3)",
  "response-data": {
    "id": "CUST-TITLE-OTHER-TYPE",
    "name": "Customer title others types",
    "description": "List of other customer title",
    "configuration-items": [
      {
        "key": "BROTHER",
        "value": "BROTHER",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พี่ชาย/น้องชาย",
        "en-description": "พี่ชาย/น้องชาย",
        "th-description": "พี่ชาย/น้องชาย"
      },
      {
        "key": "DR.",
        "value": "DR.",
        "description": "ด็อกเตอร์",
        "en-description": "ด็อกเตอร์",
        "th-description": "ด็อกเตอร์"
      },
      {
        "key": "FATHER",
        "value": "FATHER",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ่อ",
        "en-description": "พ่อ",
        "th-description": "พ่อ"
      },
      {
        "key": "MASTER",
        "value": "MASTER",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "MASTER",
        "en-description": "MASTER",
        "th-description": "MASTER"
      },
      {
        "key": "MR.",
        "value": "MR.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาย",
        "en-description": "นาย",
        "th-description": "นาย"
      },
      {
        "key": "SIR",
        "value": "SIR",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ครับ",
        "en-description": "ครับ",
        "th-description": "ครับ"
      },
      {
        "key": "ก.ญ.",
        "value": "ก.ญ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายกองใหญ่",
        "en-description": "นายกองใหญ่",
        "th-description": "นายกองใหญ่"
      },
      {
        "key": "ก.ต.",
        "value": "ก.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายกองตรี",
        "en-description": "นายกองตรี",
        "th-description": "นายกองตรี"
      },
      {
        "key": "ก.ท.",
        "value": "ก.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายกองโท",
        "en-description": "นายกองโท",
        "th-description": "นายกองโท"
      },
      {
        "key": "ก.อ.",
        "value": "ก.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายกองเอก",
        "en-description": "นายกองเอก",
        "th-description": "นายกองเอก"
      },
      {
        "key": "ขุน",
        "value": "ขุน",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ขุน",
        "en-description": "ขุน",
        "th-description": "ขุน"
      },
      {
        "key": "คุณ",
        "value": "คุณ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "คุณ",
        "en-description": "คุณ",
        "th-description": "คุณ"
      },
      {
        "key": "คุณพระ",
        "value": "คุณพระ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "คุณพระ",
        "en-description": "คุณพระ",
        "th-description": "คุณพระ"
      },
      {
        "key": "คุณหญิง",
        "value": "คุณหญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "คุณหญิง",
        "en-description": "คุณหญิง",
        "th-description": "คุณหญิง"
      },
      {
        "key": "จ.ต.",
        "value": "จ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าตรี,จ่าอากาศตรี",
        "en-description": "จ่าตรี,จ่าอากาศตรี",
        "th-description": "จ่าตรี,จ่าอากาศตรี"
      },
      {
        "key": "จ.ต.หญิง",
        "value": "จ.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าตรีหญิง,จ่าอากาศตรีหญิง",
        "en-description": "จ่าตรีหญิง,จ่าอากาศตรีหญิง",
        "th-description": "จ่าตรีหญิง,จ่าอากาศตรีหญิง"
      },
      {
        "key": "จ.ท.",
        "value": "จ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าโท,จ่าอากาศโท",
        "en-description": "จ่าโท,จ่าอากาศโท",
        "th-description": "จ่าโท,จ่าอากาศโท"
      },
      {
        "key": "จ.ท.หญิง",
        "value": "จ.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าโทหญิง,จ่าอากาศโทหญิง",
        "en-description": "จ่าโทหญิง,จ่าอากาศโทหญิง",
        "th-description": "จ่าโทหญิง,จ่าอากาศโทหญิง"
      },
      {
        "key": "จ.ส.ต.",
        "value": "จ.ส.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบตำรวจ",
        "en-description": "จ่าสิบตำรวจ",
        "th-description": "จ่าสิบตำรวจ"
      },
      {
        "key": "จ.ส.ต.ม.ร.ว.",
        "value": "จ.ส.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบตรีหม่อมราชวงศ์",
        "en-description": "จ่าสิบตรีหม่อมราชวงศ์",
        "th-description": "จ่าสิบตรีหม่อมราชวงศ์"
      },
      {
        "key": "จ.ส.ต.ม.ล.",
        "value": "จ.ส.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบตรีหม่อมหลวง",
        "en-description": "จ่าสิบตรีหม่อมหลวง",
        "th-description": "จ่าสิบตรีหม่อมหลวง"
      },
      {
        "key": "จ.ส.ต.หญิง",
        "value": "จ.ส.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าสิบตำรวจหญิง",
        "en-description": "จ่าสิบตำรวจหญิง",
        "th-description": "จ่าสิบตำรวจหญิง"
      },
      {
        "key": "จ.ส.ท.",
        "value": "จ.ส.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบโท",
        "en-description": "จ่าสิบโท",
        "th-description": "จ่าสิบโท"
      },
      {
        "key": "จ.ส.ท.หญิง",
        "value": "จ.ส.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าสิบโทหญิง",
        "en-description": "จ่าสิบโทหญิง",
        "th-description": "จ่าสิบโทหญิง"
      },
      {
        "key": "จ.ส.อ.",
        "value": "จ.ส.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบเอก",
        "en-description": "จ่าสิบเอก",
        "th-description": "จ่าสิบเอก"
      },
      {
        "key": "จ.ส.อ.พิเศษ",
        "value": "จ.ส.อ.พิเศษ",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าสิบเอกพิเศษ",
        "en-description": "จ่าสิบเอกพิเศษ",
        "th-description": "จ่าสิบเอกพิเศษ"
      },
      {
        "key": "จ.ส.อ.ม.ร.ว.",
        "value": "จ.ส.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบเอกหม่อมราชวงศ์",
        "en-description": "จ่าสิบเอกหม่อมราชวงศ์",
        "th-description": "จ่าสิบเอกหม่อมราชวงศ์"
      },
      {
        "key": "จ.ส.อ.ม.ล.",
        "value": "จ.ส.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสิบเอกหม่อมหลวง",
        "en-description": "จ่าสิบเอกหม่อมหลวง",
        "th-description": "จ่าสิบเอกหม่อมหลวง"
      },
      {
        "key": "จ.ส.อ.หญิง",
        "value": "จ.ส.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าสิบเอกหญิง",
        "en-description": "จ่าสิบเอกหญิง",
        "th-description": "จ่าสิบเอกหญิง"
      },
      {
        "key": "จ.อ.",
        "value": "จ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าเอก",
        "en-description": "จ่าเอก",
        "th-description": "จ่าเอก"
      },
      {
        "key": "จ.อ.ต.",
        "value": "จ.อ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ.อ.ต.",
        "en-description": "จ.อ.ต.",
        "th-description": "จ.อ.ต."
      },
      {
        "key": "จ.อ.ท.",
        "value": "จ.อ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ.อ.ท.",
        "en-description": "จ.อ.ท.",
        "th-description": "จ.อ.ท."
      },
      {
        "key": "จ.อ.หญิง",
        "value": "จ.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "จ่าเอกหญิง",
        "en-description": "จ่าเอกหญิง",
        "th-description": "จ่าเอกหญิง"
      },
      {
        "key": "จอมพล",
        "value": "จอมพล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จอมพล",
        "en-description": "จอมพล",
        "th-description": "จอมพล"
      },
      {
        "key": "จ่าสำรอง",
        "value": "จ่าสำรอง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "จ่าสำรอง",
        "en-description": "จ่าสำรอง",
        "th-description": "จ่าสำรอง"
      },
      {
        "key": "ซิสเตอร์",
        "value": "ซิสเตอร์",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ซิสเตอร์",
        "en-description": "ซิสเตอร์",
        "th-description": "ซิสเตอร์"
      },
      {
        "key": "ด.ช.",
        "value": "ด.ช.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เด็กชาย",
        "en-description": "เด็กชาย",
        "th-description": "เด็กชาย"
      },
      {
        "key": "ด.ญ.",
        "value": "ด.ญ.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "เด็กหญิง",
        "en-description": "เด็กหญิง",
        "th-description": "เด็กหญิง"
      },
      {
        "key": "ด.ต.",
        "value": "ด.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายดาบตำรวจ",
        "en-description": "นายดาบตำรวจ",
        "th-description": "นายดาบตำรวจ"
      },
      {
        "key": "ด.ต.ม.ล.",
        "value": "ด.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายดาบตำรวจหม่อมหลวง",
        "en-description": "นายดาบตำรวจหม่อมหลวง",
        "th-description": "นายดาบตำรวจหม่อมหลวง"
      },
      {
        "key": "ด.ต.หญิง",
        "value": "ด.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ดาบตำรวจหญิง",
        "en-description": "ดาบตำรวจหญิง",
        "th-description": "ดาบตำรวจหญิง"
      },
      {
        "key": "ดร.",
        "value": "ดร.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ด็อกเตอร์",
        "en-description": "ด็อกเตอร์",
        "th-description": "ด็อกเตอร์"
      },
      {
        "key": "ดร.น.พ.",
        "value": "ดร.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ด็อกเตอร์ นายแพทย์ ",
        "en-description": "ด็อกเตอร์ นายแพทย์ ",
        "th-description": "ด็อกเตอร์ นายแพทย์ "
      },
      {
        "key": "ดร.พระมหา",
        "value": "ดร.พระมหา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ดร.พระมหา",
        "en-description": "ดร.พระมหา",
        "th-description": "ดร.พระมหา"
      },
      {
        "key": "ดร.ม.ล.",
        "value": "ดร.ม.ล.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ดร.ม.ล.",
        "en-description": "ดร.ม.ล.",
        "th-description": "ดร.ม.ล."
      },
      {
        "key": "ท.ญ.",
        "value": "ท.ญ.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ทัณตแพทย์หญิง",
        "en-description": "ทัณตแพทย์หญิง",
        "th-description": "ทัณตแพทย์หญิง"
      },
      {
        "key": "ท.พ.",
        "value": "ท.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ทัณตแพทย์",
        "en-description": "ทัณตแพทย์",
        "th-description": "ทัณตแพทย์"
      },
      {
        "key": "ทูลกระหม่อม",
        "value": "ทูลกระหม่อม",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ทูลกระหม่อม",
        "en-description": "ทูลกระหม่อม",
        "th-description": "ทูลกระหม่อม"
      },
      {
        "key": "ท่านผู้หญิง",
        "value": "ท่านผู้หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ท่านผู้หญิง",
        "en-description": "ท่านผู้หญิง",
        "th-description": "ท่านผู้หญิง"
      },
      {
        "key": "ท่านเจ้าคุณพระ",
        "value": "ท่านเจ้าคุณพระ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ท่านเจ้าคุณพระ",
        "en-description": "ท่านเจ้าคุณพระ",
        "th-description": "ท่านเจ้าคุณพระ"
      },
      {
        "key": "ท้าว",
        "value": "ท้าว",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ท้าว",
        "en-description": "ท้าว",
        "th-description": "ท้าว"
      },
      {
        "key": "น.ต.",
        "value": "น.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาตรี",
        "en-description": "นาวาตรี",
        "th-description": "นาวาตรี"
      },
      {
        "key": "น.ต.ดร.",
        "value": "น.ต.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "น.ต.ดร.",
        "en-description": "น.ต.ดร.",
        "th-description": "น.ต.ดร."
      },
      {
        "key": "น.ต.น.พ.",
        "value": "น.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาตรีนายแพทย์",
        "en-description": "นาวาตรีนายแพทย์",
        "th-description": "นาวาตรีนายแพทย์"
      },
      {
        "key": "น.ต.พ.ญ.",
        "value": "น.ต.พ.ญ.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "นาวาตรีแพทย์หญิง",
        "en-description": "นาวาตรีแพทย์หญิง",
        "th-description": "นาวาตรีแพทย์หญิง"
      },
      {
        "key": "น.ต.ม.จ.",
        "value": "น.ต.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาตรีหม่อมเจ้า",
        "en-description": "นาวาตรีหม่อมเจ้า",
        "th-description": "นาวาตรีหม่อมเจ้า"
      },
      {
        "key": "น.ต.ม.ร.ว.",
        "value": "น.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาตรีหม่อมราชวงศ์",
        "en-description": "นาวาตรีหม่อมราชวงศ์",
        "th-description": "นาวาตรีหม่อมราชวงศ์"
      },
      {
        "key": "น.ต.ม.ล.",
        "value": "น.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาตรีหม่อมหลวง",
        "en-description": "นาวาตรีหม่อมหลวง",
        "th-description": "นาวาตรีหม่อมหลวง"
      },
      {
        "key": "น.ต.หญิง",
        "value": "น.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "นาวาตรีหญิง",
        "en-description": "นาวาตรีหญิง",
        "th-description": "นาวาตรีหญิง"
      },
      {
        "key": "น.ต.หญิงท.ญ.",
        "value": "น.ต.หญิงท.ญ.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "น.ต.หญิงท.ญ.",
        "en-description": "น.ต.หญิงท.ญ.",
        "th-description": "น.ต.หญิงท.ญ."
      },
      {
        "key": "น.ท.",
        "value": "น.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศโท",
        "en-description": "นาวาอากาศโท",
        "th-description": "นาวาอากาศโท"
      },
      {
        "key": "น.ท.น.พ.",
        "value": "น.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาโท นายแพทย์",
        "en-description": "นาวาโท นายแพทย์",
        "th-description": "นาวาโท นายแพทย์"
      },
      {
        "key": "น.ท.ม.จ.",
        "value": "น.ท.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาโทหม่อมเจ้า",
        "en-description": "นาวาโทหม่อมเจ้า",
        "th-description": "นาวาโทหม่อมเจ้า"
      },
      {
        "key": "น.ท.ม.ร.ว.",
        "value": "น.ท.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาโทหม่อมราชวงศ์",
        "en-description": "นาวาโทหม่อมราชวงศ์",
        "th-description": "นาวาโทหม่อมราชวงศ์"
      },
      {
        "key": "น.ท.ม.ล.",
        "value": "น.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาโทหม่อมหลวง",
        "en-description": "นาวาโทหม่อมหลวง",
        "th-description": "นาวาโทหม่อมหลวง"
      },
      {
        "key": "น.ท.หญิง",
        "value": "น.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "นาวาอากาศโทหญิง",
        "en-description": "นาวาอากาศโทหญิง",
        "th-description": "นาวาอากาศโทหญิง"
      },
      {
        "key": "น.พ.",
        "value": "น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายแพทย์",
        "en-description": "นายแพทย์",
        "th-description": "นายแพทย์"
      },
      {
        "key": "น.พ.ม.ล.",
        "value": "น.พ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายแพทย์ หม่อมหลวง",
        "en-description": "นายแพทย์ หม่อมหลวง",
        "th-description": "นายแพทย์ หม่อมหลวง"
      },
      {
        "key": "น.พ.อ.",
        "value": "น.พ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนพยาบาลทหารอากาศ",
        "en-description": "นักเรียนพยาบาลทหารอากาศ",
        "th-description": "นักเรียนพยาบาลทหารอากาศ"
      },
      {
        "key": "น.ส.",
        "value": "น.ส.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "นางสาว",
        "en-description": "นางสาว",
        "th-description": "นางสาว"
      },
      {
        "key": "น.สพ.",
        "value": "น.สพ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายสัตวแพทย์",
        "en-description": "นายสัตวแพทย์",
        "th-description": "นายสัตวแพทย์"
      },
      {
        "key": "น.สพ.ดร.",
        "value": "น.สพ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายสัตวแพทย์ ด็อกเตอร์",
        "en-description": "นายสัตวแพทย์ ด็อกเตอร์",
        "th-description": "นายสัตวแพทย์ ด็อกเตอร์"
      },
      {
        "key": "น.อ.",
        "value": "น.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาเอก",
        "en-description": "นาวาเอก",
        "th-description": "นาวาเอก"
      },
      {
        "key": "น.อ.ดร.",
        "value": "น.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศเอก ด็อกเตอร์",
        "en-description": "นาวาอากาศเอก ด็อกเตอร์",
        "th-description": "นาวาอากาศเอก ด็อกเตอร์"
      },
      {
        "key": "น.อ.ต.",
        "value": "น.อ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "น.อ.ต.",
        "en-description": "น.อ.ต.",
        "th-description": "น.อ.ต."
      },
      {
        "key": "น.อ.ท.",
        "value": "น.อ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "น.อ.ท.",
        "en-description": "น.อ.ท.",
        "th-description": "น.อ.ท."
      },
      {
        "key": "น.อ.น.พ.",
        "value": "น.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศเอก นายแพทย์",
        "en-description": "นาวาอากาศเอก นายแพทย์",
        "th-description": "นาวาอากาศเอก นายแพทย์"
      },
      {
        "key": "น.อ.พิเศษ",
        "value": "น.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศเอกพิเศษ",
        "en-description": "นาวาอากาศเอกพิเศษ",
        "th-description": "นาวาอากาศเอกพิเศษ"
      },
      {
        "key": "น.อ.พิเศษ ดร.",
        "value": "น.อ.พิเศษ ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศเอกพิเศษด็อกเตอร์",
        "en-description": "นาวาอากาศเอกพิเศษด็อกเตอร์",
        "th-description": "นาวาอากาศเอกพิเศษด็อกเตอร์"
      },
      {
        "key": "น.อ.ม.จ.",
        "value": "น.อ.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาเอกหม่อมเจ้า",
        "en-description": "นาวาเอกหม่อมเจ้า",
        "th-description": "นาวาเอกหม่อมเจ้า"
      },
      {
        "key": "น.อ.ม.ร.ว.",
        "value": "น.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาเอกหม่อมราชวงศ์",
        "en-description": "นาวาเอกหม่อมราชวงศ์",
        "th-description": "นาวาเอกหม่อมราชวงศ์"
      },
      {
        "key": "น.อ.ม.ล.",
        "value": "น.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศเอกหม่อมหลวง",
        "en-description": "นาวาอากาศเอกหม่อมหลวง",
        "th-description": "นาวาอากาศเอกหม่อมหลวง"
      },
      {
        "key": "น.อ.หญิง",
        "value": "น.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "นาวาเอกหญิง",
        "en-description": "นาวาเอกหญิง",
        "th-description": "นาวาเอกหญิง"
      },
      {
        "key": "น.อ.หลวง",
        "value": "น.อ.หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาวาอากาศเอกหลวง",
        "en-description": "นาวาอากาศเอกหลวง",
        "th-description": "นาวาอากาศเอกหลวง"
      },
      {
        "key": "น.อ.อ.",
        "value": "น.อ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "น.อ.อ.",
        "en-description": "น.อ.อ.",
        "th-description": "น.อ.อ."
      },
      {
        "key": "นจอ.",
        "value": "นจอ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนจ่าอาการ",
        "en-description": "นักเรียนจ่าอาการ",
        "th-description": "นักเรียนจ่าอาการ"
      },
      {
        "key": "นตท.",
        "value": "นตท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นตท.",
        "en-description": "นตท.",
        "th-description": "นตท."
      },
      {
        "key": "นนร.",
        "value": "นนร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายร้อย",
        "en-description": "นักเรียนนายร้อย",
        "th-description": "นักเรียนนายร้อย"
      },
      {
        "key": "นนร.ม.ล.",
        "value": "นนร.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายร้อยหม่อมหลวง",
        "en-description": "นักเรียนนายร้อยหม่อมหลวง",
        "th-description": "นักเรียนนายร้อยหม่อมหลวง"
      },
      {
        "key": "นนส.",
        "value": "นนส.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายสิบ",
        "en-description": "นักเรียนนายสิบ",
        "th-description": "นักเรียนนายสิบ"
      },
      {
        "key": "นนอ.",
        "value": "นนอ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายเรืออากาศ",
        "en-description": "นักเรียนนายเรืออากาศ",
        "th-description": "นักเรียนนายเรืออากาศ"
      },
      {
        "key": "นพต.",
        "value": "นพต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนพลตำรวจ",
        "en-description": "นักเรียนพลตำรวจ",
        "th-description": "นักเรียนพลตำรวจ"
      },
      {
        "key": "นรจ.",
        "value": "นรจ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนจ่าทหารเรือ",
        "en-description": "นักเรียนจ่าทหารเรือ",
        "th-description": "นักเรียนจ่าทหารเรือ"
      },
      {
        "key": "นรต.",
        "value": "นรต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายร้อยตำรวจ",
        "en-description": "นักเรียนนายร้อยตำรวจ",
        "th-description": "นักเรียนนายร้อยตำรวจ"
      },
      {
        "key": "นรต.ม.จ.",
        "value": "นรต.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายร้อยตำรวจหม่อมเจ้า",
        "en-description": "นักเรียนนายร้อยตำรวจหม่อมเจ้า",
        "th-description": "นักเรียนนายร้อยตำรวจหม่อมเจ้า"
      },
      {
        "key": "นรต.ม.ล.",
        "value": "นรต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายร้อยตำรวจหม่อมหลวง",
        "en-description": "นักเรียนนายร้อยตำรวจหม่อมหลวง",
        "th-description": "นักเรียนนายร้อยตำรวจหม่อมหลวง"
      },
      {
        "key": "นศท.",
        "value": "นศท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักศึกษาวิชาทหาร",
        "en-description": "นักศึกษาวิชาทหาร",
        "th-description": "นักศึกษาวิชาทหาร"
      },
      {
        "key": "นสต.",
        "value": "นสต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักเรียนนายสิบตำรวจ",
        "en-description": "นักเรียนนายสิบตำรวจ",
        "th-description": "นักเรียนนายสิบตำรวจ"
      },
      {
        "key": "นักบวช",
        "value": "นักบวช",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นักบวช",
        "en-description": "นักบวช",
        "th-description": "นักบวช"
      },
      {
        "key": "นาง",
        "value": "นาง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "นาง",
        "en-description": "นาง",
        "th-description": "นาง"
      },
      {
        "key": "นาย",
        "value": "นาย",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นาย",
        "en-description": "นาย",
        "th-description": "นาย"
      },
      {
        "key": "บาทหลวง",
        "value": "บาทหลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "บาทหลวง",
        "en-description": "บาทหลวง",
        "th-description": "บาทหลวง"
      },
      {
        "key": "ผ.ศ.ดร.",
        "value": "ผ.ศ.ดร.",
        "description": "ผ.ศ.ดร.",
        "en-description": "ผ.ศ.ดร.",
        "th-description": "ผ.ศ.ดร."
      },
      {
        "key": "ผศ.",
        "value": "ผศ.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ผู้ช่วยศาสตร์ตราจารย์",
        "en-description": "ผู้ช่วยศาสตร์ตราจารย์",
        "th-description": "ผู้ช่วยศาสตร์ตราจารย์"
      },
      {
        "key": "ผศ.ดร.",
        "value": "ผศ.ดร.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ผู้ช่วยศาสตราจารย์ ด็อกเตอร์  ",
        "en-description": "ผู้ช่วยศาสตราจารย์ ด็อกเตอร์  ",
        "th-description": "ผู้ช่วยศาสตราจารย์ ด็อกเตอร์  "
      },
      {
        "key": "ผศ.ดร.ภก.",
        "value": "ผศ.ดร.ภก.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผศ.ดร.ภก.",
        "en-description": "ผศ.ดร.ภก.",
        "th-description": "ผศ.ดร.ภก."
      },
      {
        "key": "ผศ.ท.ญ.ดร.",
        "value": "ผศ.ท.ญ.ดร.",
        "description": "ผู้ช่วยศาสตร์จารย์ ทันตแพทย์หญิง ด็อกเตอร์",
        "en-description": "ผู้ช่วยศาสตร์จารย์ ทันตแพทย์หญิง ด็อกเตอร์",
        "th-description": "ผู้ช่วยศาสตร์จารย์ ทันตแพทย์หญิง ด็อกเตอร์"
      },
      {
        "key": "ผศ.ท.พ.",
        "value": "ผศ.ท.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผศ.ท.พ.",
        "en-description": "ผศ.ท.พ.",
        "th-description": "ผศ.ท.พ."
      },
      {
        "key": "ผศ.น.พ.",
        "value": "ผศ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผู้ช่วยศาสตร์จารย์ นายแพทย์",
        "en-description": "ผู้ช่วยศาสตร์จารย์ นายแพทย์",
        "th-description": "ผู้ช่วยศาสตร์จารย์ นายแพทย์"
      },
      {
        "key": "ผศ.พ.ท.น.พ.",
        "value": "ผศ.พ.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผู้ช่วยศาสตร์จารย์ พันโท นายแพทย์",
        "en-description": "ผู้ช่วยศาสตร์จารย์ พันโท นายแพทย์",
        "th-description": "ผู้ช่วยศาสตร์จารย์ พันโท นายแพทย์"
      },
      {
        "key": "ผศ.พ.อ.",
        "value": "ผศ.พ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผู้ช่วยศาสตร์จารย์ พันเอก",
        "en-description": "ผู้ช่วยศาสตร์จารย์ พันเอก",
        "th-description": "ผู้ช่วยศาสตร์จารย์ พันเอก"
      },
      {
        "key": "ผศ.พ.อ.น.พ.",
        "value": "ผศ.พ.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผู้ช่วยศาสตร์จารย์ พันเอก นายแพทย์",
        "en-description": "ผู้ช่วยศาสตร์จารย์ พันเอก นายแพทย์",
        "th-description": "ผู้ช่วยศาสตร์จารย์ พันเอก นายแพทย์"
      },
      {
        "key": "ผศ.ร.อ.",
        "value": "ผศ.ร.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ผศ.ร.อ.",
        "en-description": "ผศ.ร.อ.",
        "th-description": "ผศ.ร.อ."
      },
      {
        "key": "พ.จ.ต.",
        "value": "พ.จ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าตรี",
        "en-description": "พันจ่าตรี",
        "th-description": "พันจ่าตรี"
      },
      {
        "key": "พ.จ.ต.หญิง",
        "value": "พ.จ.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันจ่าตรีหญิง",
        "en-description": "พันจ่าตรีหญิง",
        "th-description": "พันจ่าตรีหญิง"
      },
      {
        "key": "พ.จ.ท.",
        "value": "พ.จ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าโท",
        "en-description": "พันจ่าโท",
        "th-description": "พันจ่าโท"
      },
      {
        "key": "พ.จ.ท.หญิง",
        "value": "พ.จ.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันจ่าโทหญิง",
        "en-description": "พันจ่าโทหญิง",
        "th-description": "พันจ่าโทหญิง"
      },
      {
        "key": "พ.จ.อ.",
        "value": "พ.จ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าเอก",
        "en-description": "พันจ่าเอก",
        "th-description": "พันจ่าเอก"
      },
      {
        "key": "พ.จ.อ.พิเศษ",
        "value": "พ.จ.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.จ.อ.พิเศษ",
        "en-description": "พ.จ.อ.พิเศษ",
        "th-description": "พ.จ.อ.พิเศษ"
      },
      {
        "key": "พ.จ.อ.ม.ล.",
        "value": "พ.จ.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าเอกหม่อมหลวง",
        "en-description": "พันจ่าเอกหม่อมหลวง",
        "th-description": "พันจ่าเอกหม่อมหลวง"
      },
      {
        "key": "พ.จ.อ.หญิง",
        "value": "พ.จ.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันจ่าเอกหญิง",
        "en-description": "พันจ่าเอกหญิง",
        "th-description": "พันจ่าเอกหญิง"
      },
      {
        "key": "พ.ญ.",
        "value": "พ.ญ.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "แพทย์หญิง",
        "en-description": "แพทย์หญิง",
        "th-description": "แพทย์หญิง"
      },
      {
        "key": "พ.ต.",
        "value": "พ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรี",
        "en-description": "พันตรี",
        "th-description": "พันตรี"
      },
      {
        "key": "พ.ต.ดร.",
        "value": "พ.ต.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.ต.ดร.",
        "en-description": "พ.ต.ดร.",
        "th-description": "พ.ต.ดร."
      },
      {
        "key": "พ.ต.ต.",
        "value": "พ.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจตรี",
        "en-description": "พันตำรวจตรี",
        "th-description": "พันตำรวจตรี"
      },
      {
        "key": "พ.ต.ต.ดร.",
        "value": "พ.ต.ต.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.ต.ต.ดร.",
        "en-description": "พ.ต.ต.ดร.",
        "th-description": "พ.ต.ต.ดร."
      },
      {
        "key": "พ.ต.ต.น.พ.",
        "value": "พ.ต.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.ต.ต.น.พ.",
        "en-description": "พ.ต.ต.น.พ.",
        "th-description": "พ.ต.ต.น.พ."
      },
      {
        "key": "พ.ต.ต.นพ.",
        "value": "พ.ต.ต.นพ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจตรีนายแพทย์",
        "en-description": "พันตำรวจตรีนายแพทย์",
        "th-description": "พันตำรวจตรีนายแพทย์"
      },
      {
        "key": "พ.ต.ต.ม.ร.ว.",
        "value": "พ.ต.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจตรีหม่อมราชวงศ์",
        "en-description": "พันตำรวจตรีหม่อมราชวงศ์",
        "th-description": "พันตำรวจตรีหม่อมราชวงศ์"
      },
      {
        "key": "พ.ต.ต.ม.ล.",
        "value": "พ.ต.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจตรีหม่อมหลวง",
        "en-description": "พันตำรวจตรีหม่อมหลวง",
        "th-description": "พันตำรวจตรีหม่อมหลวง"
      },
      {
        "key": "พ.ต.ต.หญิง",
        "value": "พ.ต.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันตำรวจตรีหญิง",
        "en-description": "พันตำรวจตรีหญิง",
        "th-description": "พันตำรวจตรีหญิง"
      },
      {
        "key": "พ.ต.ต.หลวง",
        "value": "พ.ต.ต.หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจตรีหลวง",
        "en-description": "พันตำรวจตรีหลวง",
        "th-description": "พันตำรวจตรีหลวง"
      },
      {
        "key": "พ.ต.ท.",
        "value": "พ.ต.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโท",
        "en-description": "พันตำรวจโท",
        "th-description": "พันตำรวจโท"
      },
      {
        "key": "พ.ต.ท.ดร.",
        "value": "พ.ต.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโท ด็อกเตอร์",
        "en-description": "พันตำรวจโท ด็อกเตอร์",
        "th-description": "พันตำรวจโท ด็อกเตอร์"
      },
      {
        "key": "พ.ต.ท.ท.พ.",
        "value": "พ.ต.ท.ท.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโท นายแพทย์",
        "en-description": "พันตำรวจโท นายแพทย์",
        "th-description": "พันตำรวจโท นายแพทย์"
      },
      {
        "key": "พ.ต.ท.น.พ.",
        "value": "พ.ต.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโทนายแพทย์",
        "en-description": "พันตำรวจโทนายแพทย์",
        "th-description": "พันตำรวจโทนายแพทย์"
      },
      {
        "key": "พ.ต.ท.พ.",
        "value": "พ.ต.ท.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.ต.ท.พ.",
        "en-description": "พ.ต.ท.พ.",
        "th-description": "พ.ต.ท.พ."
      },
      {
        "key": "พ.ต.ท.ม.จ.",
        "value": "พ.ต.ท.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโทหม่อมเจ้า",
        "en-description": "พันตำรวจโทหม่อมเจ้า",
        "th-description": "พันตำรวจโทหม่อมเจ้า"
      },
      {
        "key": "พ.ต.ท.ม.ร.ว.",
        "value": "พ.ต.ท.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโทหม่อมราชวงศ์",
        "en-description": "พันตำรวจโทหม่อมราชวงศ์",
        "th-description": "พันตำรวจโทหม่อมราชวงศ์"
      },
      {
        "key": "พ.ต.ท.ม.ล.",
        "value": "พ.ต.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจโทหม่อมหลวง",
        "en-description": "พันตำรวจโทหม่อมหลวง",
        "th-description": "พันตำรวจโทหม่อมหลวง"
      },
      {
        "key": "พ.ต.ท.หญิง",
        "value": "พ.ต.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันตำรวจโทหญิง",
        "en-description": "พันตำรวจโทหญิง",
        "th-description": "พันตำรวจโทหญิง"
      },
      {
        "key": "พ.ต.น.พ.",
        "value": "พ.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรีนายแพทย์",
        "en-description": "พันตรีนายแพทย์",
        "th-description": "พันตรีนายแพทย์"
      },
      {
        "key": "พ.ต.พระเจ้าวรวงศ์เธอพระองค์",
        "value": "พ.ต.พระเจ้าวรวงศ์เธอพระองค์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรีพระเจ้าวรวงศ์เธอพระองค์",
        "en-description": "พันตรีพระเจ้าวรวงศ์เธอพระองค์",
        "th-description": "พันตรีพระเจ้าวรวงศ์เธอพระองค์"
      },
      {
        "key": "พ.ต.พระเจ้าวรวงศ์เธอพระองค์เจ้า",
        "value": "พ.ต.พระเจ้าวรวงศ์เธอพระองค์เจ้า",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรีพระเจ้าวรวงศ์เธอพระองค์เจ้า",
        "en-description": "พันตรีพระเจ้าวรวงศ์เธอพระองค์เจ้า",
        "th-description": "พันตรีพระเจ้าวรวงศ์เธอพระองค์เจ้า"
      },
      {
        "key": "พ.ต.ม.ร.ว.",
        "value": "พ.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรีหม่อมราชวงศ์",
        "en-description": "พันตรีหม่อมราชวงศ์",
        "th-description": "พันตรีหม่อมราชวงศ์"
      },
      {
        "key": "พ.ต.ม.ล.",
        "value": "พ.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรีหม่อมหลวง",
        "en-description": "พันตรีหม่อมหลวง",
        "th-description": "พันตรีหม่อมหลวง"
      },
      {
        "key": "พ.ต.หญิง",
        "value": "พ.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันตรีหญิง",
        "en-description": "พันตรีหญิง",
        "th-description": "พันตรีหญิง"
      },
      {
        "key": "พ.ต.หลวง",
        "value": "พ.ต.หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตรีหลวง",
        "en-description": "พันตรีหลวง",
        "th-description": "พันตรีหลวง"
      },
      {
        "key": "พ.ต.อ.",
        "value": "พ.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอก",
        "en-description": "พันตำรวจเอก",
        "th-description": "พันตำรวจเอก"
      },
      {
        "key": "พ.ต.อ.ดร.",
        "value": "พ.ต.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอกด็อกเตอร์",
        "en-description": "พันตำรวจเอกด็อกเตอร์",
        "th-description": "พันตำรวจเอกด็อกเตอร์"
      },
      {
        "key": "พ.ต.อ.น.พ.",
        "value": "พ.ต.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอกนายแพทย์",
        "en-description": "พันตำรวจเอกนายแพทย์",
        "th-description": "พันตำรวจเอกนายแพทย์"
      },
      {
        "key": "พ.ต.อ.พิเศษ",
        "value": "พ.ต.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอกพิเศษ",
        "en-description": "พันตำรวจเอกพิเศษ",
        "th-description": "พันตำรวจเอกพิเศษ"
      },
      {
        "key": "พ.ต.อ.ม.จ.",
        "value": "พ.ต.อ.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอกหม่อมเจ้า",
        "en-description": "พันตำรวจเอกหม่อมเจ้า",
        "th-description": "พันตำรวจเอกหม่อมเจ้า"
      },
      {
        "key": "พ.ต.อ.ม.ร.ว.",
        "value": "พ.ต.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอกหม่อมราชวงศ์",
        "en-description": "พันตำรวจเอกหม่อมราชวงศ์",
        "th-description": "พันตำรวจเอกหม่อมราชวงศ์"
      },
      {
        "key": "พ.ต.อ.ม.ล.",
        "value": "พ.ต.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันตำรวจเอกหม่อมหลวง",
        "en-description": "พันตำรวจเอกหม่อมหลวง",
        "th-description": "พันตำรวจเอกหม่อมหลวง"
      },
      {
        "key": "พ.ต.อ.หญิง",
        "value": "พ.ต.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันตำรวจเอกหญิง",
        "en-description": "พันตำรวจเอกหญิง",
        "th-description": "พันตำรวจเอกหญิง"
      },
      {
        "key": "พ.ท.",
        "value": "พ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันโท",
        "en-description": "พันโท",
        "th-description": "พันโท"
      },
      {
        "key": "พ.ท.ดร.",
        "value": "พ.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.ท.ดร.",
        "en-description": "พ.ท.ดร.",
        "th-description": "พ.ท.ดร."
      },
      {
        "key": "พ.ท.น.พ.",
        "value": "พ.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันโทนายแพทย์",
        "en-description": "พันโทนายแพทย์",
        "th-description": "พันโทนายแพทย์"
      },
      {
        "key": "พ.ท.ม.จ.",
        "value": "พ.ท.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันโทหม่อมเจ้า",
        "en-description": "พันโทหม่อมเจ้า",
        "th-description": "พันโทหม่อมเจ้า"
      },
      {
        "key": "พ.ท.ม.ร.ว.",
        "value": "พ.ท.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันโทหม่อมราชวงศ์",
        "en-description": "พันโทหม่อมราชวงศ์",
        "th-description": "พันโทหม่อมราชวงศ์"
      },
      {
        "key": "พ.ท.ม.ล.",
        "value": "พ.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันโทหม่อมหลวง",
        "en-description": "พันโทหม่อมหลวง",
        "th-description": "พันโทหม่อมหลวง"
      },
      {
        "key": "พ.ท.หญิง",
        "value": "พ.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันโทหญิง",
        "en-description": "พันโทหญิง",
        "th-description": "พันโทหญิง"
      },
      {
        "key": "พ.ท.หลวง",
        "value": "พ.ท.หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันโทหลวง",
        "en-description": "พันโทหลวง",
        "th-description": "พันโทหลวง"
      },
      {
        "key": "พ.อ.",
        "value": "พ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอก",
        "en-description": "พันเอก",
        "th-description": "พันเอก"
      },
      {
        "key": "พ.อ.(พิเศษ)",
        "value": "พ.อ.(พิเศษ)",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอกพิเศษ",
        "en-description": "พันเอกพิเศษ",
        "th-description": "พันเอกพิเศษ"
      },
      {
        "key": "พ.อ.(พิเศษ)ม.ร.ว.",
        "value": "พ.อ.(พิเศษ)ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอก(พิเศษ)หม่อมราชวงศ์",
        "en-description": "พันเอก(พิเศษ)หม่อมราชวงศ์",
        "th-description": "พันเอก(พิเศษ)หม่อมราชวงศ์"
      },
      {
        "key": "พ.อ.ดร.",
        "value": "พ.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.อ.ดร.",
        "en-description": "พ.อ.ดร.",
        "th-description": "พ.อ.ดร."
      },
      {
        "key": "พ.อ.ต.",
        "value": "พ.อ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าอากาศตรี",
        "en-description": "พันจ่าอากาศตรี",
        "th-description": "พันจ่าอากาศตรี"
      },
      {
        "key": "พ.อ.ต.หญิง",
        "value": "พ.อ.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันจ่าอากาศตรีหญิง",
        "en-description": "พันจ่าอากาศตรีหญิง",
        "th-description": "พันจ่าอากาศตรีหญิง"
      },
      {
        "key": "พ.อ.ท.",
        "value": "พ.อ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าอากาศโท",
        "en-description": "พันจ่าอากาศโท",
        "th-description": "พันจ่าอากาศโท"
      },
      {
        "key": "พ.อ.ท.หญิง",
        "value": "พ.อ.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันจ่าอากาศโทหญิง",
        "en-description": "พันจ่าอากาศโทหญิง",
        "th-description": "พันจ่าอากาศโทหญิง"
      },
      {
        "key": "พ.อ.น.พ.",
        "value": "พ.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอกนายแพทย์",
        "en-description": "พันเอกนายแพทย์",
        "th-description": "พันเอกนายแพทย์"
      },
      {
        "key": "พ.อ.พิเศษ",
        "value": "พ.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.อ.พิเศษ",
        "en-description": "พ.อ.พิเศษ",
        "th-description": "พ.อ.พิเศษ"
      },
      {
        "key": "พ.อ.พิเศษ น.พ.",
        "value": "พ.อ.พิเศษ น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พ.อ.พิเศษ น.พ.",
        "en-description": "พ.อ.พิเศษ น.พ.",
        "th-description": "พ.อ.พิเศษ น.พ."
      },
      {
        "key": "พ.อ.ม.จ.",
        "value": "พ.อ.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอกหม่อมเจ้า",
        "en-description": "พันเอกหม่อมเจ้า",
        "th-description": "พันเอกหม่อมเจ้า"
      },
      {
        "key": "พ.อ.ม.ร.ว.",
        "value": "พ.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอกหม่อมราชวงศ์",
        "en-description": "พันเอกหม่อมราชวงศ์",
        "th-description": "พันเอกหม่อมราชวงศ์"
      },
      {
        "key": "พ.อ.ม.ล.",
        "value": "พ.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันเอกหม่อมหลวง",
        "en-description": "พันเอกหม่อมหลวง",
        "th-description": "พันเอกหม่อมหลวง"
      },
      {
        "key": "พ.อ.หญิง",
        "value": "พ.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันเอกหญิง",
        "en-description": "พันเอกหญิง",
        "th-description": "พันเอกหญิง"
      },
      {
        "key": "พ.อ.อ.",
        "value": "พ.อ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าอากาศเอก",
        "en-description": "พันจ่าอากาศเอก",
        "th-description": "พันจ่าอากาศเอก"
      },
      {
        "key": "พ.อ.อ.ม.ร.ว.",
        "value": "พ.อ.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันอากาศเอกหม่อมราชวงศ์",
        "en-description": "พันอากาศเอกหม่อมราชวงศ์",
        "th-description": "พันอากาศเอกหม่อมราชวงศ์"
      },
      {
        "key": "พ.อ.อ.ม.ล.",
        "value": "พ.อ.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พันจ่าอากาศเอกหม่อมหลวง",
        "en-description": "พันจ่าอากาศเอกหม่อมหลวง",
        "th-description": "พันจ่าอากาศเอกหม่อมหลวง"
      },
      {
        "key": "พ.อ.อ.หญิง",
        "value": "พ.อ.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พันจ่าอากาศเอกหญิง",
        "en-description": "พันจ่าอากาศเอกหญิง",
        "th-description": "พันจ่าอากาศเอกหญิง"
      },
      {
        "key": "พต.นสพ.",
        "value": "พต.นสพ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พต.นสพ.",
        "en-description": "พต.นสพ.",
        "th-description": "พต.นสพ."
      },
      {
        "key": "พระ",
        "value": "พระ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระ",
        "en-description": "พระ",
        "th-description": "พระ"
      },
      {
        "key": "พระครู",
        "value": "พระครู",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครู",
        "en-description": "พระครู",
        "th-description": "พระครู"
      },
      {
        "key": "พระครูกาญจนยติกิจ",
        "value": "พระครูกาญจนยติกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูกาญจนยติกิจ",
        "en-description": "พระครูกาญจนยติกิจ",
        "th-description": "พระครูกาญจนยติกิจ"
      },
      {
        "key": "พระครูกิตติกาญจนวงศ์",
        "value": "พระครูกิตติกาญจนวงศ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูกิตติกาญจนวงศ์",
        "en-description": "พระครูกิตติกาญจนวงศ์",
        "th-description": "พระครูกิตติกาญจนวงศ์"
      },
      {
        "key": "พระครูจันทเขมคุณ",
        "value": "พระครูจันทเขมคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูจันทเขมคุณ",
        "en-description": "พระครูจันทเขมคุณ",
        "th-description": "พระครูจันทเขมคุณ"
      },
      {
        "key": "พระครูจารุธรรมกิตติ์",
        "value": "พระครูจารุธรรมกิตติ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูจารุธรรมกิตติ์",
        "en-description": "พระครูจารุธรรมกิตติ์",
        "th-description": "พระครูจารุธรรมกิตติ์"
      },
      {
        "key": "พระครูถาวรสันติคุณ",
        "value": "พระครูถาวรสันติคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูถาวรสันติคุณ",
        "en-description": "พระครูถาวรสันติคุณ",
        "th-description": "พระครูถาวรสันติคุณ"
      },
      {
        "key": "พระครูธรรมธร",
        "value": "พระครูธรรมธร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูธรรมธร",
        "en-description": "พระครูธรรมธร",
        "th-description": "พระครูธรรมธร"
      },
      {
        "key": "พระครูนิเทศปิยธรรม",
        "value": "พระครูนิเทศปิยธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูนิเทศปิยธรรม",
        "en-description": "พระครูนิเทศปิยธรรม",
        "th-description": "พระครูนิเทศปิยธรรม"
      },
      {
        "key": "พระครูบรรณวัตร",
        "value": "พระครูบรรณวัตร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูบรรณวัตร",
        "en-description": "พระครูบรรณวัตร",
        "th-description": "พระครูบรรณวัตร"
      },
      {
        "key": "พระครูบวรรัตนวงศ์",
        "value": "พระครูบวรรัตนวงศ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูบวรรัตนวงศ์",
        "en-description": "พระครูบวรรัตนวงศ์",
        "th-description": "พระครูบวรรัตนวงศ์"
      },
      {
        "key": "พระครูปภัสสราธิคุณ",
        "value": "พระครูปภัสสราธิคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปภัสสราธิคุณ",
        "en-description": "พระครูปภัสสราธิคุณ",
        "th-description": "พระครูปภัสสราธิคุณ"
      },
      {
        "key": "พระครูประกาศพุทธพากย์",
        "value": "พระครูประกาศพุทธพากย์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูประกาศพุทธพากย์",
        "en-description": "พระครูประกาศพุทธพากย์",
        "th-description": "พระครูประกาศพุทธพากย์"
      },
      {
        "key": "พระครูประโชติธรรมรัตน์",
        "value": "พระครูประโชติธรรมรัตน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูประโชติธรรมรัตน์",
        "en-description": "พระครูประโชติธรรมรัตน์",
        "th-description": "พระครูประโชติธรรมรัตน์"
      },
      {
        "key": "พระครูประโชติธรรมานุกูล",
        "value": "พระครูประโชติธรรมานุกูล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูประโชติธรรมานุกูล",
        "en-description": "พระครูประโชติธรรมานุกูล",
        "th-description": "พระครูประโชติธรรมานุกูล"
      },
      {
        "key": "พระครูปลัด",
        "value": "พระครูปลัด",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปลัด",
        "en-description": "พระครูปลัด",
        "th-description": "พระครูปลัด"
      },
      {
        "key": "พระครูปลัด ม.ร.ว.",
        "value": "พระครูปลัด ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปลัดหม่อมราชวงศ์",
        "en-description": "พระครูปลัดหม่อมราชวงศ์",
        "th-description": "พระครูปลัดหม่อมราชวงศ์"
      },
      {
        "key": "พระครูปลัดมหา",
        "value": "พระครูปลัดมหา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปลัดมหา",
        "en-description": "พระครูปลัดมหา",
        "th-description": "พระครูปลัดมหา"
      },
      {
        "key": "พระครูปลัดวิมลสิริวัฒน์",
        "value": "พระครูปลัดวิมลสิริวัฒน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิมลสิริวัฒน์",
        "en-description": "พระครูวิมลสิริวัฒน์",
        "th-description": "พระครูวิมลสิริวัฒน์"
      },
      {
        "key": "พระครูปลัดสัมพิพัฒนวิริยาจารย์",
        "value": "พระครูปลัดสัมพิพัฒนวิริยาจารย์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปลัดสัมพิพัฒนวิริยาจารย์",
        "en-description": "พระครูปลัดสัมพิพัฒนวิริยาจารย์",
        "th-description": "พระครูปลัดสัมพิพัฒนวิริยาจารย์"
      },
      {
        "key": "พระครูปลัดสุวัฒนญาณคุณ",
        "value": "พระครูปลัดสุวัฒนญาณคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปลัดสุวัฒนญาณคุณ",
        "en-description": "พระครูปลัดสุวัฒนญาณคุณ",
        "th-description": "พระครูปลัดสุวัฒนญาณคุณ"
      },
      {
        "key": "พระครูปลัดอาจารย์วัฒน์",
        "value": "พระครูปลัดอาจารย์วัฒน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปลัดอาจารย์วัฒน์",
        "en-description": "พระครูปลัดอาจารย์วัฒน์",
        "th-description": "พระครูปลัดอาจารย์วัฒน์"
      },
      {
        "key": "พระครูปัญญาภรณโสภณ",
        "value": "พระครูปัญญาภรณโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปัญญาภรณโสภณ",
        "en-description": "พระครูปัญญาภรณโสภณ",
        "th-description": "พระครูปัญญาภรณโสภณ"
      },
      {
        "key": "พระครูปิยสีลสาร",
        "value": "พระครูปิยสีลสาร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูปิยสีลสาร",
        "en-description": "พระครูปิยสีลสาร",
        "th-description": "พระครูปิยสีลสาร"
      },
      {
        "key": "พระครูผาสุกวิหารการ",
        "value": "พระครูผาสุกวิหารการ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูผาสุกวิหารการ",
        "en-description": "พระครูผาสุกวิหารการ",
        "th-description": "พระครูผาสุกวิหารการ"
      },
      {
        "key": "พระครูพรหมวีรสุนทร",
        "value": "พระครูพรหมวีรสุนทร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพรหมวีรสุนทร",
        "en-description": "พระครูพรหมวีรสุนทร",
        "th-description": "พระครูพรหมวีรสุนทร"
      },
      {
        "key": "พระครูพัฒนสารคุณ",
        "value": "พระครูพัฒนสารคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพัฒนสารคุณ",
        "en-description": "พระครูพัฒนสารคุณ",
        "th-description": "พระครูพัฒนสารคุณ"
      },
      {
        "key": "พระครูพิทักษ์พรหมรังษี",
        "value": "พระครูพิทักษ์พรหมรังษี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิทักษ์พรหมรังษี",
        "en-description": "พระครูพิทักษ์พรหมรังษี",
        "th-description": "พระครูพิทักษ์พรหมรังษี"
      },
      {
        "key": "พระครูพิบูลสมณธรรม",
        "value": "พระครูพิบูลสมณธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิบูลสมณธรรม",
        "en-description": "พระครูพิบูลสมณธรรม",
        "th-description": "พระครูพิบูลสมณธรรม"
      },
      {
        "key": "พระครูพิบูลโชติธรรม",
        "value": "พระครูพิบูลโชติธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิบูลโชติธรรม",
        "en-description": "พระครูพิบูลโชติธรรม",
        "th-description": "พระครูพิบูลโชติธรรม"
      },
      {
        "key": "พระครูพิพัฒน์ชินวงศ์",
        "value": "พระครูพิพัฒน์ชินวงศ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิพัฒน์ชินวงศ์",
        "en-description": "พระครูพิพัฒน์ชินวงศ์",
        "th-description": "พระครูพิพัฒน์ชินวงศ์"
      },
      {
        "key": "พระครูพิพัฒน์บรรณกิจ",
        "value": "พระครูพิพัฒน์บรรณกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิพัฒน์บรรณกิจ",
        "en-description": "พระครูพิพัฒน์บรรณกิจ",
        "th-description": "พระครูพิพัฒน์บรรณกิจ"
      },
      {
        "key": "พระครูพิพิธวรคุณ",
        "value": "พระครูพิพิธวรคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิพิธวรคุณ",
        "en-description": "พระครูพิพิธวรคุณ",
        "th-description": "พระครูพิพิธวรคุณ"
      },
      {
        "key": "พระครูพิพิธอุดมคุณ",
        "value": "พระครูพิพิธอุดมคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิพิธอุดมคุณ",
        "en-description": "พระครูพิพิธอุดมคุณ",
        "th-description": "พระครูพิพิธอุดมคุณ"
      },
      {
        "key": "พระครูพิศิษฎ์ศาสนการ",
        "value": "พระครูพิศิษฎ์ศาสนการ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพิศิษฎ์ศาสนการ",
        "en-description": "พระครูพิศิษฎ์ศาสนการ",
        "th-description": "พระครูพิศิษฎ์ศาสนการ"
      },
      {
        "key": "พระครูพุทธิธรรมานุศาสน์",
        "value": "พระครูพุทธิธรรมานุศาสน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูพุทธิธรรมานุศาสน์",
        "en-description": "พระครูพุทธิธรรมานุศาสน์",
        "th-description": "พระครูพุทธิธรรมานุศาสน์"
      },
      {
        "key": "พระครูภาวนาวรกิจ",
        "value": "พระครูภาวนาวรกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูภาวนาวรกิจ",
        "en-description": "พระครูภาวนาวรกิจ",
        "th-description": "พระครูภาวนาวรกิจ"
      },
      {
        "key": "พระครูมหา",
        "value": "พระครูมหา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูมหา",
        "en-description": "พระครูมหา",
        "th-description": "พระครูมหา"
      },
      {
        "key": "พระครูวชิรวุฒิกร",
        "value": "พระครูวชิรวุฒิกร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวชิรวุฒิกร",
        "en-description": "พระครูวชิรวุฒิกร",
        "th-description": "พระครูวชิรวุฒิกร"
      },
      {
        "key": "พระครูวรสังฆกิจ",
        "value": "พระครูวรสังฆกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวรสังฆกิจ",
        "en-description": "พระครูวรสังฆกิจ",
        "th-description": "พระครูวรสังฆกิจ"
      },
      {
        "key": "พระครูวัชรสีลาภรณ์",
        "value": "พระครูวัชรสีลาภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวัชรสีลาภรณ์",
        "en-description": "พระครูวัชรสีลาภรณ์",
        "th-description": "พระครูวัชรสีลาภรณ์"
      },
      {
        "key": "พระครูวิจารณ์สังฆกิจ",
        "value": "พระครูวิจารณ์สังฆกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิจารณ์สังฆกิจ",
        "en-description": "พระครูวิจารณ์สังฆกิจ",
        "th-description": "พระครูวิจารณ์สังฆกิจ"
      },
      {
        "key": "พระครูวิชิตพัฒนคุณ",
        "value": "พระครูวิชิตพัฒนคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิชิตพัฒนคุณ",
        "en-description": "พระครูวิชิตพัฒนคุณ",
        "th-description": "พระครูวิชิตพัฒนคุณ"
      },
      {
        "key": "พระครูวินัยธร",
        "value": "พระครูวินัยธร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวินัยธร",
        "en-description": "พระครูวินัยธร",
        "th-description": "พระครูวินัยธร"
      },
      {
        "key": "พระครูวิบูลกาญจนกิจ",
        "value": "พระครูวิบูลกาญจนกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิบูลกาญจนกิจ",
        "en-description": "พระครูวิบูลกาญจนกิจ",
        "th-description": "พระครูวิบูลกาญจนกิจ"
      },
      {
        "key": "พระครูวิบูลธรรมกิจ",
        "value": "พระครูวิบูลธรรมกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิบูลธรรมกิจ",
        "en-description": "พระครูวิบูลธรรมกิจ",
        "th-description": "พระครูวิบูลธรรมกิจ"
      },
      {
        "key": "พระครูวิบูลย์ธรรมศาสก์",
        "value": "พระครูวิบูลย์ธรรมศาสก์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิบูลย์ธรรมศาสก์",
        "en-description": "พระครูวิบูลย์ธรรมศาสก์",
        "th-description": "พระครูวิบูลย์ธรรมศาสก์"
      },
      {
        "key": "พระครูวิมลญาณโสภณ",
        "value": "พระครูวิมลญาณโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิมลญาณโสภณ",
        "en-description": "พระครูวิมลญาณโสภณ",
        "th-description": "พระครูวิมลญาณโสภณ"
      },
      {
        "key": "พระครูวิมลภาณ",
        "value": "พระครูวิมลภาณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิมลภาณ",
        "en-description": "พระครูวิมลภาณ",
        "th-description": "พระครูวิมลภาณ"
      },
      {
        "key": "พระครูวิมลสารวิสุทธิ์",
        "value": "พระครูวิมลสารวิสุทธิ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิมลสารวิสุทธิ์",
        "en-description": "พระครูวิมลสารวิสุทธิ์",
        "th-description": "พระครูวิมลสารวิสุทธิ์"
      },
      {
        "key": "พระครูวิศาลปัญญาคุณ",
        "value": "พระครูวิศาลปัญญาคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิศาลปัญญาคุณ",
        "en-description": "พระครูวิศาลปัญญาคุณ",
        "th-description": "พระครูวิศาลปัญญาคุณ"
      },
      {
        "key": "พระครูวิสุทธาจาร",
        "value": "พระครูวิสุทธาจาร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิสุทธาจาร",
        "en-description": "พระครูวิสุทธาจาร",
        "th-description": "พระครูวิสุทธาจาร"
      },
      {
        "key": "พระครูวิสุทธาจารวิมล",
        "value": "พระครูวิสุทธาจารวิมล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิสุทธาจารวิมล",
        "en-description": "พระครูวิสุทธาจารวิมล",
        "th-description": "พระครูวิสุทธาจารวิมล"
      },
      {
        "key": "พระครูวิสุทธิ์กิจจานุกูล",
        "value": "พระครูวิสุทธิ์กิจจานุกูล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูวิสุทธิ์กิจจานุกูล",
        "en-description": "พระครูวิสุทธิ์กิจจานุกูล",
        "th-description": "พระครูวิสุทธิ์กิจจานุกูล"
      },
      {
        "key": "พระครูศรัทธาธรรมโสภณ",
        "value": "พระครูศรัทธาธรรมโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูศรัทธาธรรมโสภณ",
        "en-description": "พระครูศรัทธาธรรมโสภณ",
        "th-description": "พระครูศรัทธาธรรมโสภณ"
      },
      {
        "key": "พระครูศรีธวัชคุณาภรณ์",
        "value": "พระครูศรีธวัชคุณาภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูศรีธวัชคุณาภรณ์",
        "en-description": "พระครูศรีธวัชคุณาภรณ์",
        "th-description": "พระครูศรีธวัชคุณาภรณ์"
      },
      {
        "key": "พระครูศรีศาสนคุณ",
        "value": "พระครูศรีศาสนคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูศรีศาสนคุณ",
        "en-description": "พระครูศรีศาสนคุณ",
        "th-description": "พระครูศรีศาสนคุณ"
      },
      {
        "key": "พระครูศัพทมงคล",
        "value": "พระครูศัพทมงคล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูศัพทมงคล",
        "en-description": "พระครูศัพทมงคล",
        "th-description": "พระครูศัพทมงคล"
      },
      {
        "key": "พระครูศีลกันตาภรณ์",
        "value": "พระครูศีลกันตาภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูศีลกันตาภรณ์",
        "en-description": "พระครูศีลกันตาภรณ์",
        "th-description": "พระครูศีลกันตาภรณ์"
      },
      {
        "key": "พระครูศีลสารวิสุทธิ์",
        "value": "พระครูศีลสารวิสุทธิ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูศีลสารวิสุทธิ์",
        "en-description": "พระครูศีลสารวิสุทธิ์",
        "th-description": "พระครูศีลสารวิสุทธิ์"
      },
      {
        "key": "พระครูสถิตบุญวัฒน์",
        "value": "พระครูสถิตบุญวัฒน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสถิตบุญวัฒน์",
        "en-description": "พระครูสถิตบุญวัฒน์",
        "th-description": "พระครูสถิตบุญวัฒน์"
      },
      {
        "key": "พระครูสถิตย์บุญวัฒน์",
        "value": "พระครูสถิตย์บุญวัฒน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสถิตย์บุญวัฒน์",
        "en-description": "พระครูสถิตย์บุญวัฒน์",
        "th-description": "พระครูสถิตย์บุญวัฒน์"
      },
      {
        "key": "พระครูสมุทรขันตยาภรณ์",
        "value": "พระครูสมุทรขันตยาภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสมุทรขันตยาภรณ์",
        "en-description": "พระครูสมุทรขันตยาภรณ์",
        "th-description": "พระครูสมุทรขันตยาภรณ์"
      },
      {
        "key": "พระครูสมุห์",
        "value": "พระครูสมุห์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสมุห์",
        "en-description": "พระครูสมุห์",
        "th-description": "พระครูสมุห์"
      },
      {
        "key": "พระครูสมฺห์",
        "value": "พระครูสมฺห์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสมฺห์",
        "en-description": "พระครูสมฺห์",
        "th-description": "พระครูสมฺห์"
      },
      {
        "key": "พระครูสังฆบริรักษ์",
        "value": "พระครูสังฆบริรักษ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสังฆบริรักษ์",
        "en-description": "พระครูสังฆบริรักษ์",
        "th-description": "พระครูสังฆบริรักษ์"
      },
      {
        "key": "พระครูสังฆภารวิชัย",
        "value": "พระครูสังฆภารวิชัย",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสังฆภารวิชัย",
        "en-description": "พระครูสังฆภารวิชัย",
        "th-description": "พระครูสังฆภารวิชัย"
      },
      {
        "key": "พระครูสังฆรักษ์",
        "value": "พระครูสังฆรักษ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสังฆรักษ์",
        "en-description": "พระครูสังฆรักษ์",
        "th-description": "พระครูสังฆรักษ์"
      },
      {
        "key": "พระครูสังฆวิชัย",
        "value": "พระครูสังฆวิชัย",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสังฆวิชัย",
        "en-description": "พระครูสังฆวิชัย",
        "th-description": "พระครูสังฆวิชัย"
      },
      {
        "key": "พระครูสังฆวิชิต",
        "value": "พระครูสังฆวิชิต",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสังฆวิชิต",
        "en-description": "พระครูสังฆวิชิต",
        "th-description": "พระครูสังฆวิชิต"
      },
      {
        "key": "พระครูสิริคุณารักษ์",
        "value": "พระครูสิริคุณารักษ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสิริคุณารักษ์",
        "en-description": "พระครูสิริคุณารักษ์",
        "th-description": "พระครูสิริคุณารักษ์"
      },
      {
        "key": "พระครูสิริชัยสถิต",
        "value": "พระครูสิริชัยสถิต",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสิริชัยสถิต",
        "en-description": "พระครูสิริชัยสถิต",
        "th-description": "พระครูสิริชัยสถิต"
      },
      {
        "key": "พระครูสุทัศน์ธรรมาภิรม",
        "value": "พระครูสุทัศน์ธรรมาภิรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุทัศน์ธรรมาภิรม",
        "en-description": "พระครูสุทัศน์ธรรมาภิรม",
        "th-description": "พระครูสุทัศน์ธรรมาภิรม"
      },
      {
        "key": "พระครูสุธรรมโสภิต",
        "value": "พระครูสุธรรมโสภิต",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุธรรมโสภิต",
        "en-description": "พระครูสุธรรมโสภิต",
        "th-description": "พระครูสุธรรมโสภิต"
      },
      {
        "key": "พระครูสุนทรคณาภิรักษ์",
        "value": "พระครูสุนทรคณาภิรักษ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุนทรคณาภิรักษ์",
        "en-description": "พระครูสุนทรคณาภิรักษ์",
        "th-description": "พระครูสุนทรคณาภิรักษ์"
      },
      {
        "key": "พระครูสุนทรปภากร",
        "value": "พระครูสุนทรปภากร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุนทรปภากร",
        "en-description": "พระครูสุนทรปภากร",
        "th-description": "พระครูสุนทรปภากร"
      },
      {
        "key": "พระครูสุนทรวรธัช",
        "value": "พระครูสุนทรวรธัช",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุนทรวรธัช",
        "en-description": "พระครูสุนทรวรธัช",
        "th-description": "พระครูสุนทรวรธัช"
      },
      {
        "key": "พระครูสุนทรวรวัฒน์",
        "value": "พระครูสุนทรวรวัฒน์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุนทรวรวัฒน์",
        "en-description": "พระครูสุนทรวรวัฒน์",
        "th-description": "พระครูสุนทรวรวัฒน์"
      },
      {
        "key": "พระครูสุนทรสมณคุณ",
        "value": "พระครูสุนทรสมณคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุนทรสมณคุณ",
        "en-description": "พระครูสุนทรสมณคุณ",
        "th-description": "พระครูสุนทรสมณคุณ"
      },
      {
        "key": "พระครูสุพจน์วรคุณ",
        "value": "พระครูสุพจน์วรคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุพจน์วรคุณ",
        "en-description": "พระครูสุพจน์วรคุณ",
        "th-description": "พระครูสุพจน์วรคุณ"
      },
      {
        "key": "พระครูสุพจน์วราภรณ์",
        "value": "พระครูสุพจน์วราภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุพจน์วราภรณ์",
        "en-description": "พระครูสุพจน์วราภรณ์",
        "th-description": "พระครูสุพจน์วราภรณ์"
      },
      {
        "key": "พระครูสุวรรณพัฒนคุณ",
        "value": "พระครูสุวรรณพัฒนคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูสุวรรณพัฒนคุณ",
        "en-description": "พระครูสุวรรณพัฒนคุณ",
        "th-description": "พระครูสุวรรณพัฒนคุณ"
      },
      {
        "key": "พระครูอมรธรรมนายก",
        "value": "พระครูอมรธรรมนายก",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูอมรธรรมนายก",
        "en-description": "พระครูอมรธรรมนายก",
        "th-description": "พระครูอมรธรรมนายก"
      },
      {
        "key": "พระครูอมรวิสุทธิคุณ",
        "value": "พระครูอมรวิสุทธิคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูอมรวิสุทธิคุณ",
        "en-description": "พระครูอมรวิสุทธิคุณ",
        "th-description": "พระครูอมรวิสุทธิคุณ"
      },
      {
        "key": "พระครูอาทรโพธิกิจ",
        "value": "พระครูอาทรโพธิกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูอาทรโพธิกิจ",
        "en-description": "พระครูอาทรโพธิกิจ",
        "th-description": "พระครูอาทรโพธิกิจ"
      },
      {
        "key": "พระครูอุปถัมภ์นันทกิจ",
        "value": "พระครูอุปถัมภ์นันทกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูอุปถัมภ์นันทกิจ",
        "en-description": "พระครูอุปถัมภ์นันทกิจ",
        "th-description": "พระครูอุปถัมภ์นันทกิจ"
      },
      {
        "key": "พระครูอุปถัมภ์วชิโรภาส",
        "value": "พระครูอุปถัมภ์วชิโรภาส",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูอุปถัมภ์วชิโรภาส",
        "en-description": "พระครูอุปถัมภ์วชิโรภาส",
        "th-description": "พระครูอุปถัมภ์วชิโรภาส"
      },
      {
        "key": "พระครูอุเทศธรรมนิวิฐ",
        "value": "พระครูอุเทศธรรมนิวิฐ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูอุเทศธรรมนิวิฐ",
        "en-description": "พระครูอุเทศธรรมนิวิฐ",
        "th-description": "พระครูอุเทศธรรมนิวิฐ"
      },
      {
        "key": "พระครูเกษมธรรมานันท์",
        "value": "พระครูเกษมธรรมานันท์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูเกษมธรรมานันท์",
        "en-description": "พระครูเกษมธรรมานันท์",
        "th-description": "พระครูเกษมธรรมานันท์"
      },
      {
        "key": "พระครูเมธีธรรมานุยุต",
        "value": "พระครูเมธีธรรมานุยุต",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูเมธีธรรมานุยุต",
        "en-description": "พระครูเมธีธรรมานุยุต",
        "th-description": "พระครูเมธีธรรมานุยุต"
      },
      {
        "key": "พระครูโกวิทธรรมโสภณ",
        "value": "พระครูโกวิทธรรมโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโกวิทธรรมโสภณ",
        "en-description": "พระครูโกวิทธรรมโสภณ",
        "th-description": "พระครูโกวิทธรรมโสภณ"
      },
      {
        "key": "พระครูโสภณคุณานุกูล",
        "value": "พระครูโสภณคุณานุกูล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโสภณคุณานุกูล",
        "en-description": "พระครูโสภณคุณานุกูล",
        "th-description": "พระครูโสภณคุณานุกูล"
      },
      {
        "key": "พระครูโสภณปริยัติคุณ",
        "value": "พระครูโสภณปริยัติคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโสภณปริยัติคุณ",
        "en-description": "พระครูโสภณปริยัติคุณ",
        "th-description": "พระครูโสภณปริยัติคุณ"
      },
      {
        "key": "พระครูโสภณสมุทรคุณ",
        "value": "พระครูโสภณสมุทรคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโสภณสมุทรคุณ",
        "en-description": "พระครูโสภณสมุทรคุณ",
        "th-description": "พระครูโสภณสมุทรคุณ"
      },
      {
        "key": "พระครูโสภิตวัชรกิจ",
        "value": "พระครูโสภิตวัชรกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโสภิตวัชรกิจ",
        "en-description": "พระครูโสภิตวัชรกิจ",
        "th-description": "พระครูโสภิตวัชรกิจ"
      },
      {
        "key": "พระครูโอภาสธรรมพิมล",
        "value": "พระครูโอภาสธรรมพิมล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโอภาสธรรมพิมล",
        "en-description": "พระครูโอภาสธรรมพิมล",
        "th-description": "พระครูโอภาสธรรมพิมล"
      },
      {
        "key": "พระครูโอภาสสมาจาร",
        "value": "พระครูโอภาสสมาจาร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูโอภาสสมาจาร",
        "en-description": "พระครูโอภาสสมาจาร",
        "th-description": "พระครูโอภาสสมาจาร"
      },
      {
        "key": "พระครูใบฎีกา",
        "value": "พระครูใบฎีกา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูใบฎีกา",
        "en-description": "พระครูใบฎีกา",
        "th-description": "พระครูใบฎีกา"
      },
      {
        "key": "พระครูไพบูลชัยสิทธิ์",
        "value": "พระครูไพบูลชัยสิทธิ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูไพบูลชัยสิทธิ์",
        "en-description": "พระครูไพบูลชัยสิทธิ์",
        "th-description": "พระครูไพบูลชัยสิทธิ์"
      },
      {
        "key": "พระครูไพศาลศุภกิจ",
        "value": "พระครูไพศาลศุภกิจ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูไพศาลศุภกิจ",
        "en-description": "พระครูไพศาลศุภกิจ",
        "th-description": "พระครูไพศาลศุภกิจ"
      },
      {
        "key": "พระครูไพโรจน์อริญชัย",
        "value": "พระครูไพโรจน์อริญชัย",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระครูไพโรจน์อริญชัย",
        "en-description": "พระครูไพโรจน์อริญชัย",
        "th-description": "พระครูไพโรจน์อริญชัย"
      },
      {
        "key": "พระคาร์ดินัล",
        "value": "พระคาร์ดินัล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระคาร์ดินัล",
        "en-description": "พระคาร์ดินัล",
        "th-description": "พระคาร์ดินัล"
      },
      {
        "key": "พระคุณเจ้า",
        "value": "พระคุณเจ้า",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระคุณเจ้า",
        "en-description": "พระคุณเจ้า",
        "th-description": "พระคุณเจ้า"
      },
      {
        "key": "พระญาณ",
        "value": "พระญาณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระญาณ",
        "en-description": "พระญาณ",
        "th-description": "พระญาณ"
      },
      {
        "key": "พระญาณโศภณ",
        "value": "พระญาณโศภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระญาณโศภณ",
        "en-description": "พระญาณโศภณ",
        "th-description": "พระญาณโศภณ"
      },
      {
        "key": "พระธรรม",
        "value": "พระธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระธรรม",
        "en-description": "พระธรรม",
        "th-description": "พระธรรม"
      },
      {
        "key": "พระธรรมเมธาจารย์",
        "value": "พระธรรมเมธาจารย์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระธรรมเมธาจารย์",
        "en-description": "พระธรรมเมธาจารย์",
        "th-description": "พระธรรมเมธาจารย์"
      },
      {
        "key": "พระธรรมโสภณ",
        "value": "พระธรรมโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระธรรมโสภณ",
        "en-description": "พระธรรมโสภณ",
        "th-description": "พระธรรมโสภณ"
      },
      {
        "key": "พระบริการ",
        "value": "พระบริการ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระบริการ",
        "en-description": "พระบริการ",
        "th-description": "พระบริการ"
      },
      {
        "key": "พระบาทสมเด็จพระเจ้าอยู่หัว",
        "value": "พระบาทสมเด็จพระเจ้าอยู่หัว",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระบาทสมเด็จพระเจ้าอยู่หัว",
        "en-description": "พระบาทสมเด็จพระเจ้าอยู่หัว",
        "th-description": "พระบาทสมเด็จพระเจ้าอยู่หัว"
      },
      {
        "key": "พระปริยัติ",
        "value": "พระปริยัติ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระปริยัติ",
        "en-description": "พระปริยัติ",
        "th-description": "พระปริยัติ"
      },
      {
        "key": "พระปลัด",
        "value": "พระปลัด",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระปลัด",
        "en-description": "พระปลัด",
        "th-description": "พระปลัด"
      },
      {
        "key": "พระปลัดขวา",
        "value": "พระปลัดขวา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระปลัดขวา",
        "en-description": "พระปลัดขวา",
        "th-description": "พระปลัดขวา"
      },
      {
        "key": "พระปลัดซ้าย",
        "value": "พระปลัดซ้าย",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระปลัดซ้าย",
        "en-description": "พระปลัดซ้าย",
        "th-description": "พระปลัดซ้าย"
      },
      {
        "key": "พระปิฎก",
        "value": "พระปิฎก",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระปิฎก",
        "en-description": "พระปิฎก",
        "th-description": "พระปิฎก"
      },
      {
        "key": "พระพรหมมุนี",
        "value": "พระพรหมมุนี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระพรหมมุนี",
        "en-description": "พระพรหมมุนี",
        "th-description": "พระพรหมมุนี"
      },
      {
        "key": "พระพรหมวชิรญาณ",
        "value": "พระพรหมวชิรญาณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระพรหมวชิรญาณ",
        "en-description": "พระพรหมวชิรญาณ",
        "th-description": "พระพรหมวชิรญาณ"
      },
      {
        "key": "พระพิศาลสารคุณ",
        "value": "พระพิศาลสารคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระพิศาลสารคุณ",
        "en-description": "พระพิศาลสารคุณ",
        "th-description": "พระพิศาลสารคุณ"
      },
      {
        "key": "พระภิกษุ",
        "value": "พระภิกษุ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระภิกษุ",
        "en-description": "พระภิกษุ",
        "th-description": "พระภิกษุ"
      },
      {
        "key": "พระมหา",
        "value": "พระมหา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระมหา",
        "en-description": "พระมหา",
        "th-description": "พระมหา"
      },
      {
        "key": "พระมหานายก",
        "value": "พระมหานายก",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระมหานายก",
        "en-description": "พระมหานายก",
        "th-description": "พระมหานายก"
      },
      {
        "key": "พระยา",
        "value": "พระยา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระยา",
        "en-description": "พระยา",
        "th-description": "พระยา"
      },
      {
        "key": "พระรัตน",
        "value": "พระรัตน",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระรัตน",
        "en-description": "พระรัตน",
        "th-description": "พระรัตน"
      },
      {
        "key": "พระรัตนมงคลวิสุทธ์",
        "value": "พระรัตนมงคลวิสุทธ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระรัตนมงคลวิสุทธ์",
        "en-description": "พระรัตนมงคลวิสุทธ์",
        "th-description": "พระรัตนมงคลวิสุทธ์"
      },
      {
        "key": "พระราช",
        "value": "พระราช",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราช",
        "en-description": "พระราช",
        "th-description": "พระราช"
      },
      {
        "key": "พระราชญาณ",
        "value": "พระราชญาณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชญาณ",
        "en-description": "พระราชญาณ",
        "th-description": "พระราชญาณ"
      },
      {
        "key": "พระราชบัณฑิต",
        "value": "พระราชบัณฑิต",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชบัณฑิต",
        "en-description": "พระราชบัณฑิต",
        "th-description": "พระราชบัณฑิต"
      },
      {
        "key": "พระราชปัญญา",
        "value": "พระราชปัญญา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชปัญญา",
        "en-description": "พระราชปัญญา",
        "th-description": "พระราชปัญญา"
      },
      {
        "key": "พระราชพัชราภรณ์",
        "value": "พระราชพัชราภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชพัชราภรณ์",
        "en-description": "พระราชพัชราภรณ์",
        "th-description": "พระราชพัชราภรณ์"
      },
      {
        "key": "พระราชวชิราภรณ์",
        "value": "พระราชวชิราภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชวชิราภรณ์",
        "en-description": "พระราชวชิราภรณ์",
        "th-description": "พระราชวชิราภรณ์"
      },
      {
        "key": "พระราชวิมลโมลี",
        "value": "พระราชวิมลโมลี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชาวิมลโมลี",
        "en-description": "พระราชาวิมลโมลี",
        "th-description": "พระราชาวิมลโมลี"
      },
      {
        "key": "พระราชาคณะ",
        "value": "พระราชาคณะ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชาคณะ",
        "en-description": "พระราชาคณะ",
        "th-description": "พระราชาคณะ"
      },
      {
        "key": "พระราชเมธาภรณ์",
        "value": "พระราชเมธาภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระราชเมธาภรณ์",
        "en-description": "พระราชเมธาภรณ์",
        "th-description": "พระราชเมธาภรณ์"
      },
      {
        "key": "พระวรวงศ์เธอ",
        "value": "พระวรวงศ์เธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระวรวงศ์เธอ",
        "en-description": "พระวรวงศ์เธอ",
        "th-description": "พระวรวงศ์เธอ"
      },
      {
        "key": "พระวรวงศ์เธอพระองค์เจ้า",
        "value": "พระวรวงศ์เธอพระองค์เจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระวรวงศ์เธอพระองค์เจ้า",
        "en-description": "พระวรวงศ์เธอพระองค์เจ้า",
        "th-description": "พระวรวงศ์เธอพระองค์เจ้า"
      },
      {
        "key": "พระวิริวัฒน์วิสุทธิ์",
        "value": "พระวิริวัฒน์วิสุทธิ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระวิริวัฒน์วิสุทธิ์",
        "en-description": "พระวิริวัฒน์วิสุทธิ์",
        "th-description": "พระวิริวัฒน์วิสุทธิ์"
      },
      {
        "key": "พระศรี",
        "value": "พระศรี",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระศรี",
        "en-description": "พระศรี",
        "th-description": "พระศรี"
      },
      {
        "key": "พระศรีปริยัติธาดา",
        "value": "พระศรีปริยัติธาดา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระศรีปริยัติธาดา",
        "en-description": "พระศรีปริยัติธาดา",
        "th-description": "พระศรีปริยัติธาดา"
      },
      {
        "key": "พระศรีปริยัติบัณฑิต",
        "value": "พระศรีปริยัติบัณฑิต",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระศรีปริยัติบัณฑิต",
        "en-description": "พระศรีปริยัติบัณฑิต",
        "th-description": "พระศรีปริยัติบัณฑิต"
      },
      {
        "key": "พระศรีปริยัติโมลี",
        "value": "พระศรีปริยัติโมลี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระศรีปริยัติโมลี",
        "en-description": "พระศรีปริยัติโมลี",
        "th-description": "พระศรีปริยัติโมลี"
      },
      {
        "key": "พระศรีวชิราภรณ์",
        "value": "พระศรีวชิราภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระศรีวชิราภรณ์",
        "en-description": "พระศรีวชิราภรณ์",
        "th-description": "พระศรีวชิราภรณ์"
      },
      {
        "key": "พระสมุห์",
        "value": "พระสมุห์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระสมุห์",
        "en-description": "พระสมุห์",
        "th-description": "พระสมุห์"
      },
      {
        "key": "พระสรภาณโกศล",
        "value": "พระสรภาณโกศล",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระสรภาณโกศล",
        "en-description": "พระสรภาณโกศล",
        "th-description": "พระสรภาณโกศล"
      },
      {
        "key": "พระสังฆราช",
        "value": "พระสังฆราช",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระสังฆราช",
        "en-description": "พระสังฆราช",
        "th-description": "พระสังฆราช"
      },
      {
        "key": "พระสัญญาบัตร",
        "value": "พระสัญญาบัตร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระสัญญาบัตร",
        "en-description": "พระสัญญาบัตร",
        "th-description": "พระสัญญาบัตร"
      },
      {
        "key": "พระสาสนโสภณ",
        "value": "พระสาสนโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระสาสนโสภณ",
        "en-description": "พระสาสนโสภณ",
        "th-description": "พระสาสนโสภณ"
      },
      {
        "key": "พระสุธีวัชโรดม",
        "value": "พระสุธีวัชโรดม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระสุธีวัชโรดม",
        "en-description": "พระสุธีวัชโรดม",
        "th-description": "พระสุธีวัชโรดม"
      },
      {
        "key": "พระหิรัญยบัฏ",
        "value": "พระหิรัญยบัฏ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระหิรัญยบัฏ",
        "en-description": "พระหิรัญยบัฏ",
        "th-description": "พระหิรัญยบัฏ"
      },
      {
        "key": "พระองค์เจ้า",
        "value": "พระองค์เจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระองค์เจ้า",
        "en-description": "พระองค์เจ้า",
        "th-description": "พระองค์เจ้า"
      },
      {
        "key": "พระอธิการ",
        "value": "พระอธิการ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระอธิการ",
        "en-description": "พระอธิการ",
        "th-description": "พระอธิการ"
      },
      {
        "key": "พระอธิธรรม",
        "value": "พระอธิธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระอธิธรรม",
        "en-description": "พระอธิธรรม",
        "th-description": "พระอธิธรรม"
      },
      {
        "key": "พระอัครสังฆราช",
        "value": "พระอัครสังฆราช",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระอัครสังฆราช",
        "en-description": "พระอัครสังฆราช",
        "th-description": "พระอัครสังฆราช"
      },
      {
        "key": "พระอาจารย์",
        "value": "พระอาจารย์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระอาจารย์",
        "en-description": "พระอาจารย์",
        "th-description": "พระอาจารย์"
      },
      {
        "key": "พระอุดมสารโสภณ",
        "value": "พระอุดมสารโสภณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระอุดมสารโสภณ",
        "en-description": "พระอุดมสารโสภณ",
        "th-description": "พระอุดมสารโสภณ"
      },
      {
        "key": "พระเจ้าบรมวงศ์เธอ",
        "value": "พระเจ้าบรมวงศ์เธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระเจ้าบรมวงศ์เธอ",
        "en-description": "พระเจ้าบรมวงศ์เธอ",
        "th-description": "พระเจ้าบรมวงศ์เธอ"
      },
      {
        "key": "พระเจ้าวรวงศ์เธอ",
        "value": "พระเจ้าวรวงศ์เธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระเจ้าวรวงศ์เธอ",
        "en-description": "พระเจ้าวรวงศ์เธอ",
        "th-description": "พระเจ้าวรวงศ์เธอ"
      },
      {
        "key": "พระเจ้าวรวงศ์เธอ พระองค์เจ้า",
        "value": "พระเจ้าวรวงศ์เธอ พระองค์เจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระเจ้าวรวงศ์เธอ พระองค์เจ้า",
        "en-description": "พระเจ้าวรวงศ์เธอ พระองค์เจ้า",
        "th-description": "พระเจ้าวรวงศ์เธอ พระองค์เจ้า"
      },
      {
        "key": "พระเจ้าหลานยาเธอ",
        "value": "พระเจ้าหลานยาเธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระเจ้าหลานยาเธอ",
        "en-description": "พระเจ้าหลานยาเธอ",
        "th-description": "พระเจ้าหลานยาเธอ"
      },
      {
        "key": "พระเจ้าหลานเธอ",
        "value": "พระเจ้าหลานเธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระเจ้าหลานเธอ",
        "en-description": "พระเจ้าหลานเธอ",
        "th-description": "พระเจ้าหลานเธอ"
      },
      {
        "key": "พระเจ้าหลานเธอ พระองค์เจ้า",
        "value": "พระเจ้าหลานเธอ พระองค์เจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พระเจ้าหลานเธอ พระองค์เจ้า",
        "en-description": "พระเจ้าหลานเธอ พระองค์เจ้า",
        "th-description": "พระเจ้าหลานเธอ พระองค์เจ้า"
      },
      {
        "key": "พระเทพ",
        "value": "พระเทพ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระเทพ",
        "en-description": "พระเทพ",
        "th-description": "พระเทพ"
      },
      {
        "key": "พระเทพชลธารมุนี ศรีชลบุราจารย์",
        "value": "พระเทพชลธารมุนี ศรีชลบุราจารย์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระเทพชลธารมุนี ศรีชลบุราจารย์",
        "en-description": "พระเทพชลธารมุนี ศรีชลบุราจารย์",
        "th-description": "พระเทพชลธารมุนี ศรีชลบุราจารย์"
      },
      {
        "key": "พระเทพญาณกวี",
        "value": "พระเทพญาณกวี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระเทพญาณกวี",
        "en-description": "พระเทพญาณกวี",
        "th-description": "พระเทพญาณกวี"
      },
      {
        "key": "พระเปรียญธรรม",
        "value": "พระเปรียญธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระเปรียญธรรม",
        "en-description": "พระเปรียญธรรม",
        "th-description": "พระเปรียญธรรม"
      },
      {
        "key": "พระโสภณธรรมาภรณ์",
        "value": "พระโสภณธรรมาภรณ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระโสภณธรรมาภรณ์",
        "en-description": "พระโสภณธรรมาภรณ์",
        "th-description": "พระโสภณธรรมาภรณ์"
      },
      {
        "key": "พระโสภณปริยัติธรรม",
        "value": "พระโสภณปริยัติธรรม",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระโสภณปริยัติธรรม",
        "en-description": "พระโสภณปริยัติธรรม",
        "th-description": "พระโสภณปริยัติธรรม"
      },
      {
        "key": "พระใบฎีกา",
        "value": "พระใบฎีกา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พระใบฎีกา",
        "en-description": "พระใบฎีกา",
        "th-description": "พระใบฎีกา"
      },
      {
        "key": "พล.จ.",
        "value": "พล.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลจัตวา",
        "en-description": "พลจัตวา",
        "th-description": "พลจัตวา"
      },
      {
        "key": "พล.จ.หลวง",
        "value": "พล.จ.หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลจัตวาหลวง",
        "en-description": "พลจัตวาหลวง",
        "th-description": "พลจัตวาหลวง"
      },
      {
        "key": "พล.ต.",
        "value": "พล.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตรี",
        "en-description": "พลตรี",
        "th-description": "พลตรี"
      },
      {
        "key": "พล.ต.จ.",
        "value": "พล.ต.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจจัตวา",
        "en-description": "พลตำรวจจัตวา",
        "th-description": "พลตำรวจจัตวา"
      },
      {
        "key": "พล.ต.ดร",
        "value": "พล.ต.ดร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ต.ดร",
        "en-description": "พล.ต.ดร",
        "th-description": "พล.ต.ดร"
      },
      {
        "key": "พล.ต.ต.",
        "value": "พล.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจตรี",
        "en-description": "พลตำรวจตรี",
        "th-description": "พลตำรวจตรี"
      },
      {
        "key": "พล.ต.ต.ดร.",
        "value": "พล.ต.ต.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ต.ต.ดร.",
        "en-description": "พล.ต.ต.ดร.",
        "th-description": "พล.ต.ต.ดร."
      },
      {
        "key": "พล.ต.ต.น.พ.",
        "value": "พล.ต.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ต.ต.น.พ.",
        "en-description": "พล.ต.ต.น.พ.",
        "th-description": "พล.ต.ต.น.พ."
      },
      {
        "key": "พล.ต.ต.ม.ร.ว.",
        "value": "พล.ต.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจตรีหม่อมราชวงศ์",
        "en-description": "พลตำรวจตรีหม่อมราชวงศ์",
        "th-description": "พลตำรวจตรีหม่อมราชวงศ์"
      },
      {
        "key": "พล.ต.ต.ม.ล.",
        "value": "พล.ต.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจตรีหม่อมหลวง",
        "en-description": "พลตำรวจตรีหม่อมหลวง",
        "th-description": "พลตำรวจตรีหม่อมหลวง"
      },
      {
        "key": "พล.ต.ต.หญิง",
        "value": "พล.ต.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลตำรวจตรีหญิง",
        "en-description": "พลตำรวจตรีหญิง",
        "th-description": "พลตำรวจตรีหญิง"
      },
      {
        "key": "พล.ต.ท.",
        "value": "พล.ต.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจโท",
        "en-description": "พลตำรวจโท",
        "th-description": "พลตำรวจโท"
      },
      {
        "key": "พล.ต.ท.ดร.",
        "value": "พล.ต.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ต.ท.ดร.",
        "en-description": "พล.ต.ท.ดร.",
        "th-description": "พล.ต.ท.ดร."
      },
      {
        "key": "พล.ต.ท.น.พ.",
        "value": "พล.ต.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ต.ท.น.พ.",
        "en-description": "พล.ต.ท.น.พ.",
        "th-description": "พล.ต.ท.น.พ."
      },
      {
        "key": "พล.ต.ท.หญิง",
        "value": "พล.ต.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลตำรวจโทหญิง",
        "en-description": "พลตำรวจโทหญิง",
        "th-description": "พลตำรวจโทหญิง"
      },
      {
        "key": "พล.ต.น.พ.",
        "value": "พล.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตรีนายแพทย์",
        "en-description": "พลตรีนายแพทย์",
        "th-description": "พลตรีนายแพทย์"
      },
      {
        "key": "พล.ต.ม.ร.ว.",
        "value": "พล.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตรีหม่อมราชวงศ์",
        "en-description": "พลตรีหม่อมราชวงศ์",
        "th-description": "พลตรีหม่อมราชวงศ์"
      },
      {
        "key": "พล.ต.ม.ล.",
        "value": "พล.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตรีหม่อมหลวง",
        "en-description": "พลตรีหม่อมหลวง",
        "th-description": "พลตรีหม่อมหลวง"
      },
      {
        "key": "พล.ต.หญิง",
        "value": "พล.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลตรีหญิง",
        "en-description": "พลตรีหญิง",
        "th-description": "พลตรีหญิง"
      },
      {
        "key": "พล.ต.อ.",
        "value": "พล.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจเอก",
        "en-description": "พลตำรวจเอก",
        "th-description": "พลตำรวจเอก"
      },
      {
        "key": "พล.ต.อ.ดร.",
        "value": "พล.ต.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจเอกด็อกเตอร์",
        "en-description": "พลตำรวจเอกด็อกเตอร์",
        "th-description": "พลตำรวจเอกด็อกเตอร์"
      },
      {
        "key": "พล.ต.อ.หญิง",
        "value": "พล.ต.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลตำรวจเอกหญิง",
        "en-description": "พลตำรวจเอกหญิง",
        "th-description": "พลตำรวจเอกหญิง"
      },
      {
        "key": "พล.ท.",
        "value": "พล.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลโท",
        "en-description": "พลโท",
        "th-description": "พลโท"
      },
      {
        "key": "พล.ท.ดร.",
        "value": "พล.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ท.ดร.",
        "en-description": "พล.ท.ดร.",
        "th-description": "พล.ท.ดร."
      },
      {
        "key": "พล.ท.น.พ.",
        "value": "พล.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ท.น.พ.",
        "en-description": "พล.ท.น.พ.",
        "th-description": "พล.ท.น.พ."
      },
      {
        "key": "พล.ท.ม.จ.",
        "value": "พล.ท.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลโทหม่อมเจ้า",
        "en-description": "พลโทหม่อมเจ้า",
        "th-description": "พลโทหม่อมเจ้า"
      },
      {
        "key": "พล.ท.ม.ล.",
        "value": "พล.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลโทหม่อมหลวง",
        "en-description": "พลโทหม่อมหลวง",
        "th-description": "พลโทหม่อมหลวง"
      },
      {
        "key": "พล.ท.หญิง",
        "value": "พล.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลโทหญิง",
        "en-description": "พลโทหญิง",
        "th-description": "พลโทหญิง"
      },
      {
        "key": "พล.ท.หลวง",
        "value": "พล.ท.หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลโทหลวง",
        "en-description": "พลโทหลวง",
        "th-description": "พลโทหลวง"
      },
      {
        "key": "พล.ร.จ.",
        "value": "พล.ร.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือจัตวา",
        "en-description": "พลเรือจัตวา",
        "th-description": "พลเรือจัตวา"
      },
      {
        "key": "พล.ร.ต.",
        "value": "พล.ร.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือตรี",
        "en-description": "พลเรือตรี",
        "th-description": "พลเรือตรี"
      },
      {
        "key": "พล.ร.ต.นพ.",
        "value": "พล.ร.ต.นพ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.ร.ต.นพ.",
        "en-description": "พล.ร.ต.นพ.",
        "th-description": "พล.ร.ต.นพ."
      },
      {
        "key": "พล.ร.ต.ม.จ.",
        "value": "พล.ร.ต.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือตรีหม่อมเจ้า",
        "en-description": "พลเรือตรีหม่อมเจ้า",
        "th-description": "พลเรือตรีหม่อมเจ้า"
      },
      {
        "key": "พล.ร.ต.ม.ร.ว.",
        "value": "พล.ร.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือตรีหม่อมราชวงศ์",
        "en-description": "พลเรือตรีหม่อมราชวงศ์",
        "th-description": "พลเรือตรีหม่อมราชวงศ์"
      },
      {
        "key": "พล.ร.ต.ม.ล.",
        "value": "พล.ร.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือตรีหม่อมหลวง",
        "en-description": "พลเรือตรีหม่อมหลวง",
        "th-description": "พลเรือตรีหม่อมหลวง"
      },
      {
        "key": "พล.ร.ต.หญิง",
        "value": "พล.ร.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลเรือตรีหญิง",
        "en-description": "พลเรือตรีหญิง",
        "th-description": "พลเรือตรีหญิง"
      },
      {
        "key": "พล.ร.ท.",
        "value": "พล.ร.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือโท",
        "en-description": "พลเรือโท",
        "th-description": "พลเรือโท"
      },
      {
        "key": "พล.ร.ท.หญิง",
        "value": "พล.ร.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลเรือโทหญิง",
        "en-description": "พลเรือโทหญิง",
        "th-description": "พลเรือโทหญิง"
      },
      {
        "key": "พล.ร.อ.",
        "value": "พล.ร.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเรือเอก",
        "en-description": "พลเรือเอก",
        "th-description": "พลเรือเอก"
      },
      {
        "key": "พล.ร.อ.หญิง",
        "value": "พล.ร.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลเรือเอกหญิง",
        "en-description": "พลเรือเอกหญิง",
        "th-description": "พลเรือเอกหญิง"
      },
      {
        "key": "พล.อ.",
        "value": "พล.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเอก",
        "en-description": "พลเอก",
        "th-description": "พลเอก"
      },
      {
        "key": "พล.อ.จ.",
        "value": "พล.อ.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศจัตวา",
        "en-description": "พลอากาศจัตวา",
        "th-description": "พลอากาศจัตวา"
      },
      {
        "key": "พล.อ.ดร.",
        "value": "พล.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.ดร.",
        "en-description": "พล.อ.ดร.",
        "th-description": "พล.อ.ดร."
      },
      {
        "key": "พล.อ.ต.",
        "value": "พล.อ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศตรี",
        "en-description": "พลอากาศตรี",
        "th-description": "พลอากาศตรี"
      },
      {
        "key": "พล.อ.ต.ดร.",
        "value": "พล.อ.ต.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.ต.ดร.",
        "en-description": "พล.อ.ต.ดร.",
        "th-description": "พล.อ.ต.ดร."
      },
      {
        "key": "พล.อ.ต.น.พ.",
        "value": "พล.อ.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.ต.น.พ.",
        "en-description": "พล.อ.ต.น.พ.",
        "th-description": "พล.อ.ต.น.พ."
      },
      {
        "key": "พล.อ.ต.ม.ร.ว.",
        "value": "พล.อ.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศตรีหม่อมราชวงศ์",
        "en-description": "พลอากาศตรีหม่อมราชวงศ์",
        "th-description": "พลอากาศตรีหม่อมราชวงศ์"
      },
      {
        "key": "พล.อ.ต.ม.ล.",
        "value": "พล.อ.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศตรีหม่อมหลวง",
        "en-description": "พลอากาศตรีหม่อมหลวง",
        "th-description": "พลอากาศตรีหม่อมหลวง"
      },
      {
        "key": "พล.อ.ต.หญิง",
        "value": "พล.อ.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลอากาศตรีหญิง",
        "en-description": "พลอากาศตรีหญิง",
        "th-description": "พลอากาศตรีหญิง"
      },
      {
        "key": "พล.อ.ท.",
        "value": "พล.อ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศโท",
        "en-description": "พลอากาศโท",
        "th-description": "พลอากาศโท"
      },
      {
        "key": "พล.อ.ท.ดร.",
        "value": "พล.อ.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.ท.ดร.",
        "en-description": "พล.อ.ท.ดร.",
        "th-description": "พล.อ.ท.ดร."
      },
      {
        "key": "พล.อ.ท.ม.ร.ว.",
        "value": "พล.อ.ท.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศโทหม่อมราชวงศ์",
        "en-description": "พลอากาศโทหม่อมราชวงศ์",
        "th-description": "พลอากาศโทหม่อมราชวงศ์"
      },
      {
        "key": "พล.อ.ท.ม.ล.",
        "value": "พล.อ.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศโทหม่อมหลวง",
        "en-description": "พลอากาศโทหม่อมหลวง",
        "th-description": "พลอากาศโทหม่อมหลวง"
      },
      {
        "key": "พล.อ.ท.หญิง",
        "value": "พล.อ.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลอากาศโทหญิง",
        "en-description": "พลอากาศโทหญิง",
        "th-description": "พลอากาศโทหญิง"
      },
      {
        "key": "พล.อ.น.พ.",
        "value": "พล.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.น.พ.",
        "en-description": "พล.อ.น.พ.",
        "th-description": "พล.อ.น.พ."
      },
      {
        "key": "พล.อ.พิเศษ",
        "value": "พล.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.พิเศษ",
        "en-description": "พล.อ.พิเศษ",
        "th-description": "พล.อ.พิเศษ"
      },
      {
        "key": "พล.อ.มล.",
        "value": "พล.อ.มล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลเอกหม่อมหลวง",
        "en-description": "พลเอกหม่อมหลวง",
        "th-description": "พลเอกหม่อมหลวง"
      },
      {
        "key": "พล.อ.หญิง",
        "value": "พล.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลเอกหญิง",
        "en-description": "พลเอกหญิง",
        "th-description": "พลเอกหญิง"
      },
      {
        "key": "พล.อ.อ.",
        "value": "พล.อ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศเอก",
        "en-description": "พลอากาศเอก",
        "th-description": "พลอากาศเอก"
      },
      {
        "key": "พล.อ.อ.ดร.",
        "value": "พล.อ.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พล.อ.อ.ดร.",
        "en-description": "พล.อ.อ.ดร.",
        "th-description": "พล.อ.อ.ดร."
      },
      {
        "key": "พล.อ.อ.ม.ร.ว.",
        "value": "พล.อ.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลอากาศเอกหม่อมราชวงศ์",
        "en-description": "พลอากาศเอกหม่อมราชวงศ์",
        "th-description": "พลอากาศเอกหม่อมราชวงศ์"
      },
      {
        "key": "พล.อ.อ.หญิง",
        "value": "พล.อ.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลอากาศเอกหญิง",
        "en-description": "พลอากาศเอกหญิง",
        "th-description": "พลอากาศเอกหญิง"
      },
      {
        "key": "พลตรีสมเด็จพระเทพรัตนราชสุดา",
        "value": "พลตรีสมเด็จพระเทพรัตนราชสุดา",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พลตรีสมเด็จพระเทพรัตนราชสุดา",
        "en-description": "พลตรีสมเด็จพระเทพรัตนราชสุดา",
        "th-description": "พลตรีสมเด็จพระเทพรัตนราชสุดา"
      },
      {
        "key": "พลสารวัตร",
        "value": "พลสารวัตร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลสารวัตร",
        "en-description": "พลสารวัตร",
        "th-description": "พลสารวัตร"
      },
      {
        "key": "พลฯ",
        "value": "พลฯ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจ,พลทหารเรือ,พลทหารอากาศ,พลทหาร",
        "en-description": "พลตำรวจ,พลทหารเรือ,พลทหารอากาศ,พลทหาร",
        "th-description": "พลตำรวจ,พลทหารเรือ,พลทหารอากาศ,พลทหาร"
      },
      {
        "key": "พลฯ หญิง",
        "value": "พลฯ หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "พลตำรวจหญิง,พลทหารเรือหญิง,พลทหารอากาศหญิง,พลทหารหญิง",
        "en-description": "พลตำรวจหญิง,พลทหารเรือหญิง,พลทหารอากาศหญิง,พลทหารหญิง",
        "th-description": "พลตำรวจหญิง,พลทหารเรือหญิง,พลทหารอากาศหญิง,พลทหารหญิง"
      },
      {
        "key": "พลฯ อาสา",
        "value": "พลฯ อาสา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลฯ อาสาสมัคร",
        "en-description": "พลฯ อาสาสมัคร",
        "th-description": "พลฯ อาสาสมัคร"
      },
      {
        "key": "พลฯพิเศษ",
        "value": "พลฯพิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจพิเศษ",
        "en-description": "พลตำรวจพิเศษ",
        "th-description": "พลตำรวจพิเศษ"
      },
      {
        "key": "พลฯม.ล.",
        "value": "พลฯม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลฯหม่อมหลวง",
        "en-description": "พลฯหม่อมหลวง",
        "th-description": "พลฯหม่อมหลวง"
      },
      {
        "key": "พลฯสมัคร",
        "value": "พลฯสมัคร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจสมัคร",
        "en-description": "พลตำรวจสมัคร",
        "th-description": "พลตำรวจสมัคร"
      },
      {
        "key": "พลฯสำรอง",
        "value": "พลฯสำรอง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจสำรอง",
        "en-description": "พลตำรวจสำรอง",
        "th-description": "พลตำรวจสำรอง"
      },
      {
        "key": "พลฯสำรองพิเศษ",
        "value": "พลฯสำรองพิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจสำรองพิเศษ",
        "en-description": "พลตำรวจสำรองพิเศษ",
        "th-description": "พลตำรวจสำรองพิเศษ"
      },
      {
        "key": "พลฯอาสา",
        "value": "พลฯอาสา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "พลตำรวจอาสาสมัคร",
        "en-description": "พลตำรวจอาสาสมัคร",
        "th-description": "พลตำรวจอาสาสมัคร"
      },
      {
        "key": "พลโทสมเด็จพระบรมโอรสาธิราช",
        "value": "พลโทสมเด็จพระบรมโอรสาธิราช",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "พลโทสมเด็จพระบรมโอรสาธิราช",
        "en-description": "พลโทสมเด็จพระบรมโอรสาธิราช",
        "th-description": "พลโทสมเด็จพระบรมโอรสาธิราช"
      },
      {
        "key": "ภก.",
        "value": "ภก.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เภสัชกรชาย",
        "en-description": "เภสัชกรชาย",
        "th-description": "เภสัชกรชาย"
      },
      {
        "key": "ภก.ดร.",
        "value": "ภก.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ภก.ดร.",
        "en-description": "ภก.ดร.",
        "th-description": "ภก.ดร."
      },
      {
        "key": "ภาราดา",
        "value": "ภาราดา",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ภาราดา",
        "en-description": "ภาราดา",
        "th-description": "ภาราดา"
      },
      {
        "key": "ม.จ.",
        "value": "ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "หม่อมเจ้า",
        "en-description": "หม่อมเจ้า",
        "th-description": "หม่อมเจ้า"
      },
      {
        "key": "ม.ญ.",
        "value": "ม.ญ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมู่ใหญ่",
        "en-description": "นายหมู่ใหญ่",
        "th-description": "นายหมู่ใหญ่"
      },
      {
        "key": "ม.ต.",
        "value": "ม.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมู่ตรี",
        "en-description": "นายหมู่ตรี",
        "th-description": "นายหมู่ตรี"
      },
      {
        "key": "ม.ต.ต.หญิง",
        "value": "ม.ต.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ร้อยตำรวจตรีหญิง",
        "en-description": "ร้อยตำรวจตรีหญิง",
        "th-description": "ร้อยตำรวจตรีหญิง"
      },
      {
        "key": "ม.ท.",
        "value": "ม.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมู่โท",
        "en-description": "นายหมู่โท",
        "th-description": "นายหมู่โท"
      },
      {
        "key": "ม.ร.ว.",
        "value": "ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "หม่อมราชวงศ์",
        "en-description": "หม่อมราชวงศ์",
        "th-description": "หม่อมราชวงศ์"
      },
      {
        "key": "ม.ร.ว.หญิง",
        "value": "ม.ร.ว.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "หม่อมราชวงศ์หญิง",
        "en-description": "หม่อมราชวงศ์หญิง",
        "th-description": "หม่อมราชวงศ์หญิง"
      },
      {
        "key": "ม.ล.",
        "value": "ม.ล.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "หม่อมหลวง",
        "en-description": "หม่อมหลวง",
        "th-description": "หม่อมหลวง"
      },
      {
        "key": "ม.อ.",
        "value": "ม.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมู่เอก",
        "en-description": "นายหมู่เอก",
        "th-description": "นายหมู่เอก"
      },
      {
        "key": "มร.",
        "value": "มร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "มร.",
        "en-description": "มร.",
        "th-description": "มร."
      },
      {
        "key": "มว.ต.",
        "value": "มว.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมวดตรี",
        "en-description": "นายหมวดตรี",
        "th-description": "นายหมวดตรี"
      },
      {
        "key": "มว.ท.",
        "value": "มว.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมวดโท",
        "en-description": "นายหมวดโท",
        "th-description": "นายหมวดโท"
      },
      {
        "key": "มว.อ.",
        "value": "มว.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "นายหมวดเอก",
        "en-description": "นายหมวดเอก",
        "th-description": "นายหมวดเอก"
      },
      {
        "key": "ร.ต.",
        "value": "ร.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตรี",
        "en-description": "ร้อยตรี",
        "th-description": "ร้อยตรี"
      },
      {
        "key": "ร.ต.ดร.",
        "value": "ร.ต.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตรีดอกเตอร์",
        "en-description": "ร้อยตรีดอกเตอร์",
        "th-description": "ร้อยตรีดอกเตอร์"
      },
      {
        "key": "ร.ต.ต.",
        "value": "ร.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจตรี",
        "en-description": "ร้อยตำรวจตรี",
        "th-description": "ร้อยตำรวจตรี"
      },
      {
        "key": "ร.ต.ต.น.พ.",
        "value": "ร.ต.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร.ต.ต.น.พ.",
        "en-description": "ร.ต.ต.น.พ.",
        "th-description": "ร.ต.ต.น.พ."
      },
      {
        "key": "ร.ต.ท.",
        "value": "ร.ต.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจโท",
        "en-description": "ร้อยตำรวจโท",
        "th-description": "ร้อยตำรวจโท"
      },
      {
        "key": "ร.ต.ท.ดร.",
        "value": "ร.ต.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจโทดอกเตอร์",
        "en-description": "ร้อยตำรวจโทดอกเตอร์",
        "th-description": "ร้อยตำรวจโทดอกเตอร์"
      },
      {
        "key": "ร.ต.ท.น.พ.",
        "value": "ร.ต.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจโทนายแพทย์",
        "en-description": "ร้อยตำรวจโทนายแพทย์",
        "th-description": "ร้อยตำรวจโทนายแพทย์"
      },
      {
        "key": "ร.ต.ท.ม.ล.",
        "value": "ร.ต.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจโทหม่อมหลวง",
        "en-description": "ร้อยตำรวจโทหม่อมหลวง",
        "th-description": "ร้อยตำรวจโทหม่อมหลวง"
      },
      {
        "key": "ร.ต.ท.หญิง",
        "value": "ร.ต.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ร้อยตำรวจโทหญิง",
        "en-description": "ร้อยตำรวจโทหญิง",
        "th-description": "ร้อยตำรวจโทหญิง"
      },
      {
        "key": "ร.ต.น.พ.",
        "value": "ร.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตรีนายแพทย์",
        "en-description": "ร้อยตรีนายแพทย์",
        "th-description": "ร้อยตรีนายแพทย์"
      },
      {
        "key": "ร.ต.ม.จ.",
        "value": "ร.ต.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตรีหม่อมเจ้า",
        "en-description": "ร้อยตรีหม่อมเจ้า",
        "th-description": "ร้อยตรีหม่อมเจ้า"
      },
      {
        "key": "ร.ต.ม.ร.ว.",
        "value": "ร.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตรีหม่อมราชวงศ์",
        "en-description": "ร้อยตรีหม่อมราชวงศ์",
        "th-description": "ร้อยตรีหม่อมราชวงศ์"
      },
      {
        "key": "ร.ต.ม.ล.",
        "value": "ร.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตรีหม่อมหลวง",
        "en-description": "ร้อยตรีหม่อมหลวง",
        "th-description": "ร้อยตรีหม่อมหลวง"
      },
      {
        "key": "ร.ต.หญิง",
        "value": "ร.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ร้อยตรีหญิง",
        "en-description": "ร้อยตรีหญิง",
        "th-description": "ร้อยตรีหญิง"
      },
      {
        "key": "ร.ต.อ.",
        "value": "ร.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจเอก",
        "en-description": "ร้อยตำรวจเอก",
        "th-description": "ร้อยตำรวจเอก"
      },
      {
        "key": "ร.ต.อ.ดร.",
        "value": "ร.ต.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร.ต.อ.ดร.",
        "en-description": "ร.ต.อ.ดร.",
        "th-description": "ร.ต.อ.ดร."
      },
      {
        "key": "ร.ต.อ.น.พ.",
        "value": "ร.ต.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจเอกนายแพทย์",
        "en-description": "ร้อยตำรวจเอกนายแพทย์",
        "th-description": "ร้อยตำรวจเอกนายแพทย์"
      },
      {
        "key": "ร.ต.อ.ม.ร.ว.",
        "value": "ร.ต.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจเอกหม่อมราชวงศ์",
        "en-description": "ร้อยตำรวจเอกหม่อมราชวงศ์",
        "th-description": "ร้อยตำรวจเอกหม่อมราชวงศ์"
      },
      {
        "key": "ร.ต.อ.ม.ล.",
        "value": "ร.ต.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยตำรวจเอกหม่อมหลวง",
        "en-description": "ร้อยตำรวจเอกหม่อมหลวง",
        "th-description": "ร้อยตำรวจเอกหม่อมหลวง"
      },
      {
        "key": "ร.ต.อ.หญิง",
        "value": "ร.ต.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ร้อยตำรวจเอกหญิง",
        "en-description": "ร้อยตำรวจเอกหญิง",
        "th-description": "ร้อยตำรวจเอกหญิง"
      },
      {
        "key": "ร.ท.",
        "value": "ร.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยโท",
        "en-description": "ร้อยโท",
        "th-description": "ร้อยโท"
      },
      {
        "key": "ร.ท.ขุน",
        "value": "ร.ท.ขุน",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เรืออากาศโทขุน",
        "en-description": "เรืออากาศโทขุน",
        "th-description": "เรืออากาศโทขุน"
      },
      {
        "key": "ร.ท.ดร.",
        "value": "ร.ท.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยโทด็อกเตอร์",
        "en-description": "ร้อยโทด็อกเตอร์",
        "th-description": "ร้อยโทด็อกเตอร์"
      },
      {
        "key": "ร.ท.น.พ.",
        "value": "ร.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยโทนายแพทย์",
        "en-description": "ร้อยโทนายแพทย์",
        "th-description": "ร้อยโทนายแพทย์"
      },
      {
        "key": "ร.ท.ม.จ.",
        "value": "ร.ท.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยโทหม่อมเจ้า",
        "en-description": "ร้อยโทหม่อมเจ้า",
        "th-description": "ร้อยโทหม่อมเจ้า"
      },
      {
        "key": "ร.ท.ม.ร.ว.",
        "value": "ร.ท.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยโทหม่อมราชวงศ์",
        "en-description": "ร้อยโทหม่อมราชวงศ์",
        "th-description": "ร้อยโทหม่อมราชวงศ์"
      },
      {
        "key": "ร.ท.ม.ล.",
        "value": "ร.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยโทหม่อมหลวง",
        "en-description": "ร้อยโทหม่อมหลวง",
        "th-description": "ร้อยโทหม่อมหลวง"
      },
      {
        "key": "ร.ท.หญิง",
        "value": "ร.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ร้อยโทหญิง",
        "en-description": "ร้อยโทหญิง",
        "th-description": "ร้อยโทหญิง"
      },
      {
        "key": "ร.อ.",
        "value": "ร.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยเอก,เรือเอก,เรืออากาศเอก",
        "en-description": "ร้อยเอก,เรือเอก,เรืออากาศเอก",
        "th-description": "ร้อยเอก,เรือเอก,เรืออากาศเอก"
      },
      {
        "key": "ร.อ.ด.",
        "value": "ร.อ.ด.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร.อ.ด.",
        "en-description": "ร.อ.ด.",
        "th-description": "ร.อ.ด."
      },
      {
        "key": "ร.อ.ดร.",
        "value": "ร.อ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยเอกด็อกเตอร์",
        "en-description": "ร้อยเอกด็อกเตอร์",
        "th-description": "ร้อยเอกด็อกเตอร์"
      },
      {
        "key": "ร.อ.ท.",
        "value": "ร.อ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร.อ.ท.",
        "en-description": "ร.อ.ท.",
        "th-description": "ร.อ.ท."
      },
      {
        "key": "ร.อ.น.พ.",
        "value": "ร.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เรืออากาศเอกนายแพทย์",
        "en-description": "เรืออากาศเอกนายแพทย์",
        "th-description": "เรืออากาศเอกนายแพทย์"
      },
      {
        "key": "ร.อ.ม.จ.",
        "value": "ร.อ.ม.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยเอกหม่อมเจ้า",
        "en-description": "ร้อยเอกหม่อมเจ้า",
        "th-description": "ร้อยเอกหม่อมเจ้า"
      },
      {
        "key": "ร.อ.ม.ร.ว.",
        "value": "ร.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยเอกหม่อมราชวงศ์",
        "en-description": "ร้อยเอกหม่อมราชวงศ์",
        "th-description": "ร้อยเอกหม่อมราชวงศ์"
      },
      {
        "key": "ร.อ.ม.ล.",
        "value": "ร.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร้อยเอกหม่อมหลวง",
        "en-description": "ร้อยเอกหม่อมหลวง",
        "th-description": "ร้อยเอกหม่อมหลวง"
      },
      {
        "key": "ร.อ.หญิง",
        "value": "ร.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "ร้อยเอกหญิง,เรือเอกหญิง,เรืออากาศหญิง",
        "en-description": "ร้อยเอกหญิง,เรือเอกหญิง,เรืออากาศหญิง",
        "th-description": "ร้อยเอกหญิง,เรือเอกหญิง,เรืออากาศหญิง"
      },
      {
        "key": "ร.อ.อ.",
        "value": "ร.อ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ร.อ.อ.",
        "en-description": "ร.อ.อ.",
        "th-description": "ร.อ.อ."
      },
      {
        "key": "รศ.",
        "value": "รศ.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "รองศาสตราจารย์",
        "en-description": "รองศาสตราจารย์",
        "th-description": "รองศาสตราจารย์"
      },
      {
        "key": "รศ.ดร.",
        "value": "รศ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รศ.ดร.",
        "en-description": "รศ.ดร.",
        "th-description": "รศ.ดร."
      },
      {
        "key": "รศ.ดร.ภก.",
        "value": "รศ.ดร.ภก.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รศ.ดร.ภก.",
        "en-description": "รศ.ดร.ภก.",
        "th-description": "รศ.ดร.ภก."
      },
      {
        "key": "รศ.ท.พ.",
        "value": "รศ.ท.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รศ.ท.พ.",
        "en-description": "รศ.ท.พ.",
        "th-description": "รศ.ท.พ."
      },
      {
        "key": "รศ.น.พ.",
        "value": "รศ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รศ.น.พ.",
        "en-description": "รศ.น.พ.",
        "th-description": "รศ.น.พ."
      },
      {
        "key": "รศ.น.อ.",
        "value": "รศ.น.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รศ.น.อ.",
        "en-description": "รศ.น.อ.",
        "th-description": "รศ.น.อ."
      },
      {
        "key": "รศ.ร.อ.น.พ.",
        "value": "รศ.ร.อ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รศ.ร.อ.น.พ.",
        "en-description": "รศ.ร.อ.น.พ.",
        "th-description": "รศ.ร.อ.น.พ."
      },
      {
        "key": "รองสมเด็จพระราชาคณะ",
        "value": "รองสมเด็จพระราชาคณะ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รองสมเด็จพระราชาคณะ",
        "en-description": "รองสมเด็จพระราชาคณะ",
        "th-description": "รองสมเด็จพระราชาคณะ"
      },
      {
        "key": "รองอำมาตย์ตรี",
        "value": "รองอำมาตย์ตรี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รองอำมาตย์ตรี",
        "en-description": "รองอำมาตย์ตรี",
        "th-description": "รองอำมาตย์ตรี"
      },
      {
        "key": "รองอำมาตย์เอก",
        "value": "รองอำมาตย์เอก",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รองอำมาตย์เอก",
        "en-description": "รองอำมาตย์เอก",
        "th-description": "รองอำมาตย์เอก"
      },
      {
        "key": "รองเจ้าอธิการ",
        "value": "รองเจ้าอธิการ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รองเจ้าอธิการ",
        "en-description": "รองเจ้าอธิการ",
        "th-description": "รองเจ้าอธิการ"
      },
      {
        "key": "รองเสวกตรี",
        "value": "รองเสวกตรี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "รองเสวกตรี",
        "en-description": "รองเสวกตรี",
        "th-description": "รองเสวกตรี"
      },
      {
        "key": "ว่าที่ น.ต.",
        "value": "ว่าที่ น.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่นาวาตรี",
        "en-description": "ว่าที่นาวาตรี",
        "th-description": "ว่าที่นาวาตรี"
      },
      {
        "key": "ว่าที่ น.ท.",
        "value": "ว่าที่ น.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่นาวาโท",
        "en-description": "ว่าที่นาวาโท",
        "th-description": "ว่าที่นาวาโท"
      },
      {
        "key": "ว่าที่ น.อ.",
        "value": "ว่าที่ น.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่นาวาเอก",
        "en-description": "ว่าที่นาวาเอก",
        "th-description": "ว่าที่นาวาเอก"
      },
      {
        "key": "ว่าที่ น.อ.พิเศษ",
        "value": "ว่าที่ น.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่นาวาเอกพิเศษ",
        "en-description": "ว่าที่นาวาเอกพิเศษ",
        "th-description": "ว่าที่นาวาเอกพิเศษ"
      },
      {
        "key": "ว่าที่ พ.ต.",
        "value": "ว่าที่ พ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันตรี",
        "en-description": "ว่าที่พันตรี",
        "th-description": "ว่าที่พันตรี"
      },
      {
        "key": "ว่าที่ พ.ต.ต.",
        "value": "ว่าที่ พ.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันตำรวจตรี",
        "en-description": "ว่าที่พันตำรวจตรี",
        "th-description": "ว่าที่พันตำรวจตรี"
      },
      {
        "key": "ว่าที่ พ.ต.ท.",
        "value": "ว่าที่ พ.ต.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันตำรวจโท",
        "en-description": "ว่าที่พันตำรวจโท",
        "th-description": "ว่าที่พันตำรวจโท"
      },
      {
        "key": "ว่าที่ พ.ต.อ.",
        "value": "ว่าที่ พ.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันตำรวจเอก",
        "en-description": "ว่าที่พันตำรวจเอก",
        "th-description": "ว่าที่พันตำรวจเอก"
      },
      {
        "key": "ว่าที่ พ.ต.อ.พิเศษ",
        "value": "ว่าที่ พ.ต.อ.พิเศษ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันตำรวจเอก(พิเศษ)",
        "en-description": "ว่าที่พันตำรวจเอก(พิเศษ)",
        "th-description": "ว่าที่พันตำรวจเอก(พิเศษ)"
      },
      {
        "key": "ว่าที่ พ.ท.",
        "value": "ว่าที่ พ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันโท",
        "en-description": "ว่าที่พันโท",
        "th-description": "ว่าที่พันโท"
      },
      {
        "key": "ว่าที่ พ.อ.",
        "value": "ว่าที่ พ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันเอก",
        "en-description": "ว่าที่พันเอก",
        "th-description": "ว่าที่พันเอก"
      },
      {
        "key": "ว่าที่ พ.อ.(พิเศษ)",
        "value": "ว่าที่ พ.อ.(พิเศษ)",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พันเอกพิเศษ",
        "en-description": "ว่าที่พันเอกพิเศษ",
        "th-description": "ว่าที่พันเอกพิเศษ"
      },
      {
        "key": "ว่าที่ พล.ต.",
        "value": "ว่าที่ พล.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลตรี",
        "en-description": "ว่าที่พลตรี",
        "th-description": "ว่าที่พลตรี"
      },
      {
        "key": "ว่าที่ พล.ต.ต.",
        "value": "ว่าที่ พล.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลตำรวจตรี",
        "en-description": "ว่าที่พลตำรวจตรี",
        "th-description": "ว่าที่พลตำรวจตรี"
      },
      {
        "key": "ว่าที่ พล.ต.ท.",
        "value": "ว่าที่ พล.ต.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลตำรวจโท",
        "en-description": "ว่าที่พลตำรวจโท",
        "th-description": "ว่าที่พลตำรวจโท"
      },
      {
        "key": "ว่าที่ พล.ต.อ.",
        "value": "ว่าที่ พล.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลตำรวจเอก",
        "en-description": "ว่าที่พลตำรวจเอก",
        "th-description": "ว่าที่พลตำรวจเอก"
      },
      {
        "key": "ว่าที่ พล.ร.ต.",
        "value": "ว่าที่ พล.ร.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลเรือตรี",
        "en-description": "ว่าที่พลเรือตรี",
        "th-description": "ว่าที่พลเรือตรี"
      },
      {
        "key": "ว่าที่ พล.ร.ท.",
        "value": "ว่าที่ พล.ร.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลเรือโท",
        "en-description": "ว่าที่พลเรือโท",
        "th-description": "ว่าที่พลเรือโท"
      },
      {
        "key": "ว่าที่ พล.ร.อ.",
        "value": "ว่าที่ พล.ร.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลเรือเอก",
        "en-description": "ว่าที่พลเรือเอก",
        "th-description": "ว่าที่พลเรือเอก"
      },
      {
        "key": "ว่าที่ พล.อ.",
        "value": "ว่าที่ พล.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลเอก",
        "en-description": "ว่าที่พลเอก",
        "th-description": "ว่าที่พลเอก"
      },
      {
        "key": "ว่าที่ พล.อ.ต.",
        "value": "ว่าที่ พล.อ.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลอากาศตรี",
        "en-description": "ว่าที่พลอากาศตรี",
        "th-description": "ว่าที่พลอากาศตรี"
      },
      {
        "key": "ว่าที่ พล.อ.ท.",
        "value": "ว่าที่ พล.อ.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลอากาศโท",
        "en-description": "ว่าที่พลอากาศโท",
        "th-description": "ว่าที่พลอากาศโท"
      },
      {
        "key": "ว่าที่ พล.อ.อ.",
        "value": "ว่าที่ พล.อ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลอากาศเอก",
        "en-description": "ว่าที่พลอากาศเอก",
        "th-description": "ว่าที่พลอากาศเอก"
      },
      {
        "key": "ว่าที่ ร.ต.",
        "value": "ว่าที่ ร.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยตรี",
        "en-description": "ว่าที่ร้อยตรี",
        "th-description": "ว่าที่ร้อยตรี"
      },
      {
        "key": "ว่าที่ ร.ต.ต.",
        "value": "ว่าที่ ร.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยตำรวจตรี",
        "en-description": "ว่าที่ร้อยตำรวจตรี",
        "th-description": "ว่าที่ร้อยตำรวจตรี"
      },
      {
        "key": "ว่าที่ ร.ต.ท.",
        "value": "ว่าที่ ร.ต.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยตำรวจโท",
        "en-description": "ว่าที่ร้อยตำรวจโท",
        "th-description": "ว่าที่ร้อยตำรวจโท"
      },
      {
        "key": "ว่าที่ ร.ต.น.พ.",
        "value": "ว่าที่ ร.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ ร.ต.น.พ.",
        "en-description": "ว่าที่ ร.ต.น.พ.",
        "th-description": "ว่าที่ ร.ต.น.พ."
      },
      {
        "key": "ว่าที่ ร.ต.ม.ร.ว.",
        "value": "ว่าที่ ร.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยตรีหม่อมราชวงศ์",
        "en-description": "ว่าที่ร้อยตรีหม่อมราชวงศ์",
        "th-description": "ว่าที่ร้อยตรีหม่อมราชวงศ์"
      },
      {
        "key": "ว่าที่ ร.ต.อ.",
        "value": "ว่าที่ ร.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยตำรวจเอก",
        "en-description": "ว่าที่ร้อยตำรวจเอก",
        "th-description": "ว่าที่ร้อยตำรวจเอก"
      },
      {
        "key": "ว่าที่ ร.ท.",
        "value": "ว่าที่ ร.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยโท",
        "en-description": "ว่าที่ร้อยโท",
        "th-description": "ว่าที่ร้อยโท"
      },
      {
        "key": "ว่าที่ ร.ท.น.พ.",
        "value": "ว่าที่ ร.ท.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยโทนายแพทย์",
        "en-description": "ว่าที่ร้อยโทนายแพทย์",
        "th-description": "ว่าที่ร้อยโทนายแพทย์"
      },
      {
        "key": "ว่าที่ ร.อ.",
        "value": "ว่าที่ ร.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยเอก",
        "en-description": "ว่าที่ร้อยเอก",
        "th-description": "ว่าที่ร้อยเอก"
      },
      {
        "key": "ว่าที่ ส.อ.",
        "value": "ว่าที่ ส.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่สิบเอก",
        "en-description": "ว่าที่สิบเอก",
        "th-description": "ว่าที่สิบเอก"
      },
      {
        "key": "ว่าที่พล.ต.จ.",
        "value": "ว่าที่พล.ต.จ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่พลตำรวจจัตวา",
        "en-description": "ว่าที่พลตำรวจจัตวา",
        "th-description": "ว่าที่พลตำรวจจัตวา"
      },
      {
        "key": "ว่าที่ร.ต.น.พ.",
        "value": "ว่าที่ร.ต.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร.ต.น.พ.",
        "en-description": "ว่าที่ร.ต.น.พ.",
        "th-description": "ว่าที่ร.ต.น.พ."
      },
      {
        "key": "ว่าที่ร.ต.ม.ล.",
        "value": "ว่าที่ร.ต.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ว่าที่ร้อยตรีหม่อมหลวง",
        "en-description": "ว่าที่ร้อยตรีหม่อมหลวง",
        "th-description": "ว่าที่ร้อยตรีหม่อมหลวง"
      },
      {
        "key": "ศ.",
        "value": "ศ.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ศาสตราจารย์",
        "en-description": "ศาสตราจารย์",
        "th-description": "ศาสตราจารย์"
      },
      {
        "key": "ศ.ดร.",
        "value": "ศ.ดร.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ศาสตราจารย์ด็อกเตอร์",
        "en-description": "ศาสตราจารย์ด็อกเตอร์",
        "th-description": "ศาสตราจารย์ด็อกเตอร์"
      },
      {
        "key": "ศ.ดร.พระ",
        "value": "ศ.ดร.พระ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศ.ดร.พระ",
        "en-description": "ศ.ดร.พระ",
        "th-description": "ศ.ดร.พระ"
      },
      {
        "key": "ศ.ท.พ.",
        "value": "ศ.ท.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศ.ท.พ.",
        "en-description": "ศ.ท.พ.",
        "th-description": "ศ.ท.พ."
      },
      {
        "key": "ศ.น.พ.",
        "value": "ศ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศ.น.พ.",
        "en-description": "ศ.น.พ.",
        "th-description": "ศ.น.พ."
      },
      {
        "key": "ศ.น.พ.ดร.",
        "value": "ศ.น.พ.ดร.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศ.น.พ.ดร.",
        "en-description": "ศ.น.พ.ดร.",
        "th-description": "ศ.น.พ.ดร."
      },
      {
        "key": "ศ.นพ.",
        "value": "ศ.นพ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศ.นพ.",
        "en-description": "ศ.นพ.",
        "th-description": "ศ.นพ."
      },
      {
        "key": "ศ.พ.อ.",
        "value": "ศ.พ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศ.พ.อ.",
        "en-description": "ศ.พ.อ.",
        "th-description": "ศ.พ.อ."
      },
      {
        "key": "ศจ.",
        "value": "ศจ.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "ศาสตราจารย์",
        "en-description": "ศาสตราจารย์",
        "th-description": "ศาสตราจารย์"
      },
      {
        "key": "ศจ.น.พ.",
        "value": "ศจ.น.พ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศาสตราจารย์นายแพทย์",
        "en-description": "ศาสตราจารย์นายแพทย์",
        "th-description": "ศาสตราจารย์นายแพทย์"
      },
      {
        "key": "ศจ.น.พ.พ.ต.อ.",
        "value": "ศจ.น.พ.พ.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศาสตราจารย์นายแพทย์พันตำรวจเอก",
        "en-description": "ศาสตราจารย์นายแพทย์พันตำรวจเอก",
        "th-description": "ศาสตราจารย์นายแพทย์พันตำรวจเอก"
      },
      {
        "key": "ศจ.พ.อ.",
        "value": "ศจ.พ.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศาสตราจารย์พันเอก",
        "en-description": "ศาสตราจารย์พันเอก",
        "th-description": "ศาสตราจารย์พันเอก"
      },
      {
        "key": "ศจ.ร.อ.",
        "value": "ศจ.ร.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "ศาสตราจารย์ร้อยเอก",
        "en-description": "ศาสตราจารย์ร้อยเอก",
        "th-description": "ศาสตราจารย์ร้อยเอก"
      },
      {
        "key": "ส.ต.",
        "value": "ส.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบตรี",
        "en-description": "สิบตรี",
        "th-description": "สิบตรี"
      },
      {
        "key": "ส.ต.ต.",
        "value": "ส.ต.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบตำรวจตรี",
        "en-description": "สิบตำรวจตรี",
        "th-description": "สิบตำรวจตรี"
      },
      {
        "key": "ส.ต.ต.หญิง",
        "value": "ส.ต.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สิบตำรวจตรีหญิง",
        "en-description": "สิบตำรวจตรีหญิง",
        "th-description": "สิบตำรวจตรีหญิง"
      },
      {
        "key": "ส.ต.ท",
        "value": "ส.ต.ท",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบตำรวจโท",
        "en-description": "สิบตำรวจโท",
        "th-description": "สิบตำรวจโท"
      },
      {
        "key": "ส.ต.ท.หญิง",
        "value": "ส.ต.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สิบตำรวจโทหญิง",
        "en-description": "สิบตำรวจโทหญิง",
        "th-description": "สิบตำรวจโทหญิง"
      },
      {
        "key": "ส.ต.ม.ร.ว.",
        "value": "ส.ต.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบตรีหม่อมราชวงศ์",
        "en-description": "สิบตรีหม่อมราชวงศ์",
        "th-description": "สิบตรีหม่อมราชวงศ์"
      },
      {
        "key": "ส.ต.หญิง",
        "value": "ส.ต.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สิบตรีหญิง",
        "en-description": "สิบตรีหญิง",
        "th-description": "สิบตรีหญิง"
      },
      {
        "key": "ส.ต.อ.",
        "value": "ส.ต.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบตำรวจเอก",
        "en-description": "สิบตำรวจเอก",
        "th-description": "สิบตำรวจเอก"
      },
      {
        "key": "ส.ต.อ.ม.ล.",
        "value": "ส.ต.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบตำรวจเอกหม่อมหลวง",
        "en-description": "สิบตำรวจเอกหม่อมหลวง",
        "th-description": "สิบตำรวจเอกหม่อมหลวง"
      },
      {
        "key": "ส.ต.อ.หญิง",
        "value": "ส.ต.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สิบตำรวจเอกหญิง",
        "en-description": "สิบตำรวจเอกหญิง",
        "th-description": "สิบตำรวจเอกหญิง"
      },
      {
        "key": "ส.ท.",
        "value": "ส.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบโท",
        "en-description": "สิบโท",
        "th-description": "สิบโท"
      },
      {
        "key": "ส.ท.ม.ล.",
        "value": "ส.ท.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบโทหม่อมหลวง",
        "en-description": "สิบโทหม่อมหลวง",
        "th-description": "สิบโทหม่อมหลวง"
      },
      {
        "key": "ส.ท.หญิง",
        "value": "ส.ท.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สิบโทหญิง",
        "en-description": "สิบโทหญิง",
        "th-description": "สิบโทหญิง"
      },
      {
        "key": "ส.ห.",
        "value": "ส.ห.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สารวัตรทหาร",
        "en-description": "สารวัตรทหาร",
        "th-description": "สารวัตรทหาร"
      },
      {
        "key": "ส.อ.",
        "value": "ส.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบเอก",
        "en-description": "สิบเอก",
        "th-description": "สิบเอก"
      },
      {
        "key": "ส.อ.ม.ร.ว.",
        "value": "ส.อ.ม.ร.ว.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบเอกหม่อมราชวงศ์",
        "en-description": "สิบเอกหม่อมราชวงศ์",
        "th-description": "สิบเอกหม่อมราชวงศ์"
      },
      {
        "key": "ส.อ.ม.ล.",
        "value": "ส.อ.ม.ล.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สิบเอกหม่อมหลวง",
        "en-description": "สิบเอกหม่อมหลวง",
        "th-description": "สิบเอกหม่อมหลวง"
      },
      {
        "key": "ส.อ.หญิง",
        "value": "ส.อ.หญิง",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สิบเอกหญิง",
        "en-description": "สิบเอกหญิง",
        "th-description": "สิบเอกหญิง"
      },
      {
        "key": "สญ.",
        "value": "สญ.",
        "attributes": {
          "GENDER": "FEMALE"
        },
        "description": "สัตวแพทย์หญิง",
        "en-description": "สัตวแพทย์หญิง",
        "th-description": "สัตวแพทย์หญิง"
      },
      {
        "key": "สมาชิกตรี",
        "value": "สมาชิกตรี",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมาชิกตรี",
        "en-description": "สมาชิกตรี",
        "th-description": "สมาชิกตรี"
      },
      {
        "key": "สมาชิกเอก",
        "value": "สมาชิกเอก",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมาชิกเอก",
        "en-description": "สมาชิกเอก",
        "th-description": "สมาชิกเอก"
      },
      {
        "key": "สมาชิกโท",
        "value": "สมาชิกโท",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมาชิกโท",
        "en-description": "สมาชิกโท",
        "th-description": "สมาชิกโท"
      },
      {
        "key": "สมเด็จพระ",
        "value": "สมเด็จพระ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมเด็จพระ",
        "en-description": "สมเด็จพระ",
        "th-description": "สมเด็จพระ"
      },
      {
        "key": "สมเด็จพระมหาวีรวงศ์",
        "value": "สมเด็จพระมหาวีรวงศ์",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมเด็จพระมหาวีรวงศ์",
        "en-description": "สมเด็จพระมหาวีรวงศ์",
        "th-description": "สมเด็จพระมหาวีรวงศ์"
      },
      {
        "key": "สมเด็จพระราชาคณะ",
        "value": "สมเด็จพระราชาคณะ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมเด็จพระราชาคณะ",
        "en-description": "สมเด็จพระราชาคณะ",
        "th-description": "สมเด็จพระราชาคณะ"
      },
      {
        "key": "สมเด็จพระสังฆราช",
        "value": "สมเด็จพระสังฆราช",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมเด็จพระสังฆราช",
        "en-description": "สมเด็จพระสังฆราช",
        "th-description": "สมเด็จพระสังฆราช"
      },
      {
        "key": "สมเด็จพระสังฆราชเจ้า",
        "value": "สมเด็จพระสังฆราชเจ้า",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมเด็จพระสังฆราชเจ้า",
        "en-description": "สมเด็จพระสังฆราชเจ้า",
        "th-description": "สมเด็จพระสังฆราชเจ้า"
      },
      {
        "key": "สมเด็จพระอริยวงศาคตญาณ",
        "value": "สมเด็จพระอริยวงศาคตญาณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สมเด็จพระอริยวงศาคตญาณ",
        "en-description": "สมเด็จพระอริยวงศาคตญาณ",
        "th-description": "สมเด็จพระอริยวงศาคตญาณ"
      },
      {
        "key": "สมเด็จพระเจ้าภคินีเธอ",
        "value": "สมเด็จพระเจ้าภคินีเธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมเด็จพระเจ้าภคินีเธอ",
        "en-description": "สมเด็จพระเจ้าภคินีเธอ",
        "th-description": "สมเด็จพระเจ้าภคินีเธอ"
      },
      {
        "key": "สมเด็จพระเจ้าลูกยาเธอ",
        "value": "สมเด็จพระเจ้าลูกยาเธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมเด็จพระเจ้าลูกยาเธอ",
        "en-description": "สมเด็จพระเจ้าลูกยาเธอ",
        "th-description": "สมเด็จพระเจ้าลูกยาเธอ"
      },
      {
        "key": "สมเด็จพระเจ้าลูกเธอ",
        "value": "สมเด็จพระเจ้าลูกเธอ",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมเด็จพระเจ้าลูกเธอ",
        "en-description": "สมเด็จพระเจ้าลูกเธอ",
        "th-description": "สมเด็จพระเจ้าลูกเธอ"
      },
      {
        "key": "สมเด็จเจ้า",
        "value": "สมเด็จเจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมเด็จเจ้า",
        "en-description": "สมเด็จเจ้า",
        "th-description": "สมเด็จเจ้า"
      },
      {
        "key": "สมเด็จเจ้าฟ้า",
        "value": "สมเด็จเจ้าฟ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมเด็จเจ้าฟ้า",
        "en-description": "สมเด็จเจ้าฟ้า",
        "th-description": "สมเด็จเจ้าฟ้า"
      },
      {
        "key": "สามเณร",
        "value": "สามเณร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "สามเณร",
        "en-description": "สามเณร",
        "th-description": "สามเณร"
      },
      {
        "key": "หมื่น",
        "value": "หมื่น",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "หมื่น",
        "en-description": "หมื่น",
        "th-description": "หมื่น"
      },
      {
        "key": "หม่อม",
        "value": "หม่อม",
        "description": "หม่อม",
        "en-description": "หม่อม",
        "th-description": "หม่อม"
      },
      {
        "key": "หลวง",
        "value": "หลวง",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "หลวง",
        "en-description": "หลวง",
        "th-description": "หลวง"
      },
      {
        "key": "หลวงจีน",
        "value": "หลวงจีน",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "หลวงจีน",
        "en-description": "หลวงจีน",
        "th-description": "หลวงจีน"
      },
      {
        "key": "หลวงพ่อ",
        "value": "หลวงพ่อ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "หลวงพ่อ",
        "en-description": "หลวงพ่อ",
        "th-description": "หลวงพ่อ"
      },
      {
        "key": "อ.",
        "value": "อ.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "อาจารย์",
        "en-description": "อาจารย์",
        "th-description": "อาจารย์"
      },
      {
        "key": "องสุตบทบวร",
        "value": "องสุตบทบวร",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "องสุตบทบวร",
        "en-description": "องสุตบทบวร",
        "th-description": "องสุตบทบวร"
      },
      {
        "key": "อส.",
        "value": "อส.",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "สมาชิกอาสารักษาดินแดน",
        "en-description": "สมาชิกอาสารักษาดินแดน",
        "th-description": "สมาชิกอาสารักษาดินแดน"
      },
      {
        "key": "อส.ต.",
        "value": "อส.ต.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "อส.ต.",
        "en-description": "อส.ต.",
        "th-description": "อส.ต."
      },
      {
        "key": "อส.ท.",
        "value": "อส.ท.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "อส.ท.",
        "en-description": "อส.ท.",
        "th-description": "อส.ท."
      },
      {
        "key": "อส.ทพ.",
        "value": "อส.ทพ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "อาสาสมัครนายพราน",
        "en-description": "อาสาสมัครนายพราน",
        "th-description": "อาสาสมัครนายพราน"
      },
      {
        "key": "อส.อ.",
        "value": "อส.อ.",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "อส.อ.",
        "en-description": "อส.อ.",
        "th-description": "อส.อ."
      },
      {
        "key": "เจ้า",
        "value": "เจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "เจ้า",
        "en-description": "เจ้า",
        "th-description": "เจ้า"
      },
      {
        "key": "เจ้าคุณ",
        "value": "เจ้าคุณ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เจ้าคุณ",
        "en-description": "เจ้าคุณ",
        "th-description": "เจ้าคุณ"
      },
      {
        "key": "เจ้าชาย",
        "value": "เจ้าชาย",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เจ้าชาย",
        "en-description": "เจ้าชาย",
        "th-description": "เจ้าชาย"
      },
      {
        "key": "เจ้าฟ้า",
        "value": "เจ้าฟ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "เจ้าฟ้า",
        "en-description": "เจ้าฟ้า",
        "th-description": "เจ้าฟ้า"
      },
      {
        "key": "เจ้าอธิการ",
        "value": "เจ้าอธิการ",
        "attributes": {
          "GENDER": "MALE"
        },
        "description": "เจ้าอธิการ",
        "en-description": "เจ้าอธิการ",
        "th-description": "เจ้าอธิการ"
      },
      {
        "key": "เสด็จเจ้า",
        "value": "เสด็จเจ้า",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "เสด็จเจ้า",
        "en-description": "เสด็จเจ้า",
        "th-description": "เสด็จเจ้า"
      },
      {
        "key": "เอกอัครราชฑูต",
        "value": "เอกอัครราชฑูต",
        "attributes": {
          "GENDER": "ALL"
        },
        "description": "เอกอัครราชฑูต",
        "en-description": "เอกอัครราชฑูต",
        "th-description": "เอกอัครราชฑูต"
      },
      {
        "key": "แม่ชี",
        "value": "แม่ชี",
        "description": "แม่ชี",
        "en-description": "แม่ชี",
        "th-description": "แม่ชี"
      }
    ]
  }
};
    };
    this.getMasterIdTypeB = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "4CN2228VJ5XJ",
            "process-instance": "psaapdv1 (instance: SFF_node1)",
            "response-data": {
                "id": "CUST-ID-TYPE-B",
                "name": "Customer ID type for business customer",
                "description": "LIst of id types for business customer",
                "configuration-items": [{
                    "key": "A",
                    "value": "A",
                    "description": "บัตรประจำตัวคนต่างด้าว"
                }, {
                    "key": "B",
                    "value": "B",
                    "description": "บัญชีมูลนิธิ"
                }, {
                    "key": "C",
                    "value": "C",
                    "description": "หนังสือรับรองบริษัท/ห้างฯ"
                }, {
                    "key": "H",
                    "value": "H",
                    "description": "อื่นๆ"
                }, {
                    "key": "I",
                    "value": "I",
                    "description": "บัตรประชาชน"
                }, {
                    "key": "J",
                    "value": "J",
                    "description": "หนังสือรับรองการจัดตั้งสมาคม"
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
    };
    this.getMasterIdTypeC = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "4CN1ZTT9NERJ",
            "process-instance": "psaapdv1 (instance: SFF_node1)",
            "response-data": {
                "id": "CUST-ID-TYPE-C",
                "name": "Customer id type for corporate customer",
                "description": "List of id types for corporate customer",
                "configuration-items": [{
                    "key": "A",
                    "value": "A",
                    "description": "บัตรประจำตัวคนต่างด้าว"
                }, {
                    "key": "B",
                    "value": "B",
                    "description": "บัญชีมูลนิธิ หรือ หนังสือจัดตั้งมูลนิธิ"
                }, {
                    "key": "C",
                    "value": "C",
                    "description": "หนังสือรับรองบริษัท/ห้างฯ"
                }, {
                    "key": "H",
                    "value": "H",
                    "description": "อื่นๆ"
                }, {
                    "key": "I",
                    "value": "I",
                    "description": "บัตรประชาชน"
                }, {
                    "key": "J",
                    "value": "J",
                    "description": "หนังสือรับรองการจัดตั้งสมาคม"
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
    };
    this.getMasterIdTypeI = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "4CN22BAIHEDJ",
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
    };
    this.getMasterIdTypeP = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "4CN1Z6WKVSSF",
            "process-instance": "psaapdv1 (instance: SFF_node1)",
            "response-data": {
                "id": "CUST-ID-TYPE-P",
                "name": "Customer id type for prepaid customer",
                "description": "List of id types for prepaid customer",
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
    };
    //masterData ------//for demo-----
    this.getMasterData = function(target, headers, fnCallback) {
        var result = {};
        var status = true;
        if (target == 'aftersales/configuration/master/CUST-GENDER') {
            result = that.getMasterGender();
        } else if (target == 'aftersales/configuration/master/CUST-TITLE-TYPE') {
            result = that.getMasterTitleType();
        } else if (target == 'aftersales/configuration/master/CUST-TITLE-OTHER-TYPE') {
            result = that.getMasterTitleOtherType();
        } else if (target == 'aftersales/configuration/master/CUST-ID-TYPE-B') {
            result = that.getMasterIdTypeB();
        } else if (target == 'aftersales/configuration/master/CUST-ID-TYPE-C') {
            result = that.getMasterIdTypeC();
        } else if (target == 'aftersales/configuration/master/CUST-ID-TYPE-I') {
            result = that.getMasterIdTypeI();
        } else if (target == 'aftersales/configuration/master/CUST-ID-TYPE-P') {
            result = that.getMasterIdTypeP();
        } else {
            status = false;
        }
        fnCallback({
            status: status,
            data: result,
            error: "",
            msgErr: ""
        });

    };


   this.calendarDatePicker = function () {
        var date = new Date();
        date.setDate(date.getDate() + 1);


        var expiredate = new Date();
        expiredate.setDate(expiredate.getDate() - 1);
        
        $('.date-picker').datepicker({
            autoclose: true,
            todayHighlight: true,
            language: 'th-th'
        });

        $('.date-picker-start').datepicker({
            autoclose: true,
            todayHighlight: true,
            language: 'th-th',
            startDate: date
        });


        $('.date-picker-expiredate').datepicker({
            autoclose: true,
            todayHighlight: true,
            language: 'th-th',
            startDate: date
        });

    };

    //masterData //for deploy
    this.getMaster = function(target, fnCallback) {
        var masterUrl = "aftersales/configuration/master/";
        if (that.demo) {
            data = that.getMasterData(masterUrl + target, null, function(result) {
                fnCallback(result);
            });
        } else {
            that.callServiceGet(masterUrl + target, null, function(result) {
                fnCallback(result);
            });
        }
    };
    this.getMaster_list = function(target, fnCallback) {
        var listArray = [];
        that.getMaster(target, function(result) {
            console.log(result);
            if (result.status) {
                //listArray = $filter('filter')(result.data["response-data"]["configuration-items"]);
                listArray = result.data["response-data"]["configuration-items"];
                fnCallback(listArray);
            } else {
                that.showAlert({
                    "message": "Error",
                    "message-code": "",
                    "message-type": "ERROR",
                    "en-message": "Error",
                    "th-message": "Error",
                    "technical-message": "systemService"
                });
                fnCallback(listArray);
            }
        });
    };
    this.getTimestamp = function() {
        var d = new Date();
        var n = d.getTime();
        return n;
    };
    this.setTimestamp = function(time) {
        return new Date(time);
    };
    this.checkInputTel = function(charCode) {
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        } else {
            return true;
        }
    };
    this.checkInputTelZero = function(charCode) {
        
          //  var charCode = (evt.which) ? evt.which : event.keyCode;

             
            if (charCode != 48) {
                
                return false;
            } else {
               
            }
    };
    this.validateNummeric = function() {
        //$(".numberic").keypress(function (evt) {
        //    var charCode = (evt.which) ? evt.which : evt.keyCode
        //    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode == 190)
        //        return false;

        //    return true;
        //});
        $(".numberic").keypress(function(e) {
            var charCode = (e.which) ? e.which : e.keyCode;
            if (this.value.indexOf(".") >= 0) {
                if (charCode == 46) {
                    return false;
                }
            }
            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
        });

        $(".telephone").keypress(function(evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;

            return true;
        });

        $(".telephoneZero").keypress(function(evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;

            console.log($(this).val());

            var subNo = $(this).val();
            if (subNo.length == 0 && charCode != 48) {
                $(this).val('');
                return false;
            } else {
                
                if (charCode > 31 && (charCode < 48 || charCode > 57))
                    return false;

                return true;
            }

        });
        //// disable right click
        //$('.telephone').mousedown(function (event) {
        //    if (event.which == 3) {
        //        return false;
        //    }

        //});
    };

    this.getDateDDMMYYYY = function(lang) {
        var ln = lang == 'TH' ? 543 : 0;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear() + ln;
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var today = dd + '/' + mm + '/' + yyyy;
        return today;
    };

    this.getDateDDMMYYYY_nextBill = function(nextDay, lang) {

        var date = new Date();
        date.setDate(date.getDate() + nextDay);

        var ln = lang == 'TH' ? 543 : 0;
        var today = date;
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear() + ln;
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var today = dd + '/' + mm + '/' + yyyy;
        return today;
    };
    this.convertDateTo = function(ddMMyyyy, lang) {
        var ssc = "-";
        var ln = lang == 'TH' ? 543 : -543;
        var arr = ddMMyyyy.split("/");
        return "" + (Number(arr[2]) + ln) + ssc + arr[1] + ssc + arr[0];
    };
    this.convertDateToEng = function(ddMMyyyy, lang) {
        if (ddMMyyyy) {
            var ssc = "/";
            var ln = lang == 'TH' ? 543 : -543;
            var arr = ddMMyyyy.split("/");
            return "" + arr[0] + ssc + arr[1] + ssc + (Number(arr[2]) + ln);
        } else {
            return ddMMyyyy;
        }
    };
    this.convertDateToTH = function(ddMMyyyy, lang) {
        if (ddMMyyyy) {
            var ssc = "/";
            var ln = lang == 'TH' ? 543 : -543;
            var arr = ddMMyyyy.split("/");
            return "" + arr[0] + ssc + arr[1] + ssc + (Number(arr[2]) + ln);
        } else {
            return ddMMyyyy;
        }
    };
    this.convertDataThToLongDate = function(dateTH) {
        //dateTH : "28/08/2558"
        //return : "2015-07-20T00:00:00+0700"
        if (dateTH) {
            var ssc = "-";
            var arr = dateTH.split("/");
            return "" + (Number(arr[2]) - 543) + ssc + arr[1] + ssc + arr[0] + "T00:00:00+0700";
        } else {
            return "";
        }
    };
    this.getContactNo = function(contactNo, returnField) {
        //contactNO : "02994848#123
        //returnField : "number" || "continued"
        var result = "";
        var arr = ["", ""];
        if (contactNo) {
            if (contactNo.indexOf('#') >= 0) {
                var arrx = contactNo.split("#");
                arr[0] = arrx[0];
                arr[1] = arrx[1];
            } else {
                arr[0] = contactNo;
            }
        }
        if (returnField == "number") {
            result = arr[0];
        } else {
            result = arr[1];
        }
        return result;
    };
    this.guid = function() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    this.convertArray = function(arr, oparator) {
        var resultArr = [];
        console.log(arr);
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                var list = arr[i].split(oparator);
                resultArr.push({
                    id: list[0],
                    value: list[1]
                });
            }
        }
        return resultArr;
    };
    this.searchIdArray = function(arr, select) {
        console.log(arr, select);
        var result = $filter('filter')(arr, {
            value: select
        });
        var id = "";
        console.log(result);
        if (result.length) {
            id = result[0].id;
        }
        return id;
    };

    this.setupFancyBox = function(id) {
        $("#" + id).fancybox({
            showCloseButton: false
        });
    };
    //--------------- fancyBox -----------------------
    that.setupFancyBox("btn-fancy-alertDialog");

    //----------------end fancyBox -------------------

    this.getOrderId = function(channel, shopcodes, fnCallback) {
        var generateOrder_target = "?channel=" + (channel ? channel : "") + "&dealer=" + (shopcodes ? shopcodes : "");
        //generateOrder_target = "";

        if (generateOrder_target == "") {
            if (channel) {
                generateOrder_target = "?channel=" + channel;
            }
            if (shopcodes && shopcodes.length > 0) {
                if (generateOrder_target) {
                    generateOrder_target = "?dealer=" + shopcodes[0];
                } else {
                    generateOrder_target += "&dealer=" + shopcodes[0];
                }
            }
        }
        //alert(generateOrder_target);
        //call generate-order-id
        that.generateOrderId(generateOrder_target, function(data) {
            fnCallback({
                TrxID: data["trx-id"],
                orderId: data["response-data"]
            });
        });
    };

    this.getAddressMaster = function(target, fnCallback) {
        if (that.demo) {
            var data = {
                "status": "SUCCESSFUL",
                "trx-id": "4I1AKKSUOGER5",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": [{
                    "subdistrict": "ตลาด",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "ตลาด",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10132"
                }, {
                    "subdistrict": "ทรงคนอง",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางกระสอบ",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางกอบัว",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางกะเจ้า",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางครุ",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางจาก",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางน้ำผึ้ง",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "โนนสูง",
                    "district": "เมืองอุดรธานี",
                    "province": "อุดรธานี",
                    "zipcode": "41010"
                }, {
                    "subdistrict": "คลองเตยเหนือ",
                    "district": "วัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10117"
                }, {
                    "subdistrict": "พระโขนงเหนือ",
                    "district": "วัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "ช้างคลาน",
                    "district": "เมืองเชียงใหม่",
                    "province": "เชียงใหม่",
                    "zipcode": "50101"
                }, {
                    "subdistrict": "จักรวรรดิ์",
                    "district": "สัมพันธวงศ์",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "จักรวรรดิ์",
                    "district": "สัมพันธวงศ์",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10101"
                }, {
                    "subdistrict": "ตลาดน้อย",
                    "district": "สัมพันธวงศ์",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "สัมพันธวงศ์",
                    "district": "สัมพันธวงศ์",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "ทุ่งมหาเมฆ",
                    "district": "สาทร",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "ทุ่งมหาเมฆ",
                    "district": "สาทร",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10121"
                }, {
                    "subdistrict": "ทุ่งวัดดอน",
                    "district": "สาทร",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "ยานนาวา",
                    "district": "สาทร",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "หนองแขม",
                    "district": "หนองแขม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "หนองค้างพลู",
                    "district": "หนองแขม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางปะกอก",
                    "district": "ราษฎร์บูรณะ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10140"
                }, {
                    "subdistrict": "บางปะกอก",
                    "district": "ราษฎร์บูรณะ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10141"
                }, {
                    "subdistrict": "ราษฎร์บูรณะ",
                    "district": "ราษฎร์บูรณะ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10140"
                }, {
                    "subdistrict": "คลองตันเหนือ",
                    "district": "วัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "คลองตันเหนือ",
                    "district": "วัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10116"
                }, {
                    "subdistrict": "คลองเตยเหนือ",
                    "district": "วัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "คลองเตยเหนือ",
                    "district": "วัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10114"
                }, {
                    "subdistrict": "คลองขวาง",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "คูหาสวรรค์",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางจาก",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางด้วน",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางแวก",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางหว้า",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางหว้า",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10161"
                }, {
                    "subdistrict": "บางหว้า",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10163"
                }, {
                    "subdistrict": "ปากคลองภาษีเจริญ",
                    "district": "ภาษีเจริญ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "หนองแขม",
                    "district": "หนองแขม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10164"
                }, {
                    "subdistrict": "ช่องนนทรี",
                    "district": "ยานนาวา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "บางโพงพาง",
                    "district": "ยานนาวา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "บางโพงพาง",
                    "district": "ยานนาวา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10124"
                }, {
                    "subdistrict": "บางโพงพาง",
                    "district": "ยานนาวา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10125"
                }, {
                    "subdistrict": "คลองมหานาค",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "บ้านบาตร",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "ป้อมปราบ",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "ป้อมปราบ",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10103"
                }, {
                    "subdistrict": "วัดเทพศิรินทร์",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "วัดโสมนัส",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10100"
                }, {
                    "subdistrict": "วัดโสมนัส",
                    "district": "ป้อมปราบศัตรูพ่าย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10102"
                }, {
                    "subdistrict": "วังใหม่",
                    "district": "ปทุมวัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "วังใหม่",
                    "district": "ปทุมวัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "บางแคเหนือ",
                    "district": "บางแค",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางไผ่",
                    "district": "บางแค",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "หลักสอง",
                    "district": "บางแค",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "บางบอน",
                    "district": "บางบอน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "บางบอน",
                    "district": "บางบอน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10151"
                }, {
                    "subdistrict": "ท่าข้าม",
                    "district": "บางขุนเทียน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "แสมดำ",
                    "district": "บางขุนเทียน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "แสมดำ",
                    "district": "บางขุนเทียน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10152"
                }, {
                    "subdistrict": "บางคอแหลม",
                    "district": "บางคอแหลม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "บางคอแหลม",
                    "district": "บางคอแหลม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10122"
                }, {
                    "subdistrict": "บางโคล่",
                    "district": "บางคอแหลม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "วัดพระยาไกร",
                    "district": "บางคอแหลม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10120"
                }, {
                    "subdistrict": "วัดพระยาไกร",
                    "district": "บางคอแหลม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10123"
                }, {
                    "subdistrict": "บางแค",
                    "district": "บางแค",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10160"
                }, {
                    "subdistrict": "คลองชักพระ",
                    "district": "ตลิ่งชัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "ฉิมพลี",
                    "district": "ตลิ่งชัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "ตลิ่งชัน",
                    "district": "ตลิ่งชัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "บางเชือกหนัง",
                    "district": "ตลิ่งชัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "บางพรม",
                    "district": "ตลิ่งชัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "บางระมาด",
                    "district": "ตลิ่งชัน",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "ทวีวัฒนา",
                    "district": "ทวีวัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "ศาลาธรรมสพน์",
                    "district": "ทวีวัฒนา",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10170"
                }, {
                    "subdistrict": "ทุ่งครุ",
                    "district": "ทุ่งครุ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10140"
                }, {
                    "subdistrict": "บางมด",
                    "district": "ทุ่งครุ",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10140"
                }, {
                    "subdistrict": "คลองตัน",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "คลองเตย",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "คลองเตย",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10111"
                }, {
                    "subdistrict": "หนองค้างพลู",
                    "district": "หนองแขม",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10162"
                }, {
                    "subdistrict": "จอมทอง",
                    "district": "จอมทอง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "บางขุนเทียน",
                    "district": "จอมทอง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "บางค้อ",
                    "district": "จอมทอง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "บางมด",
                    "district": "จอมทอง",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10150"
                }, {
                    "subdistrict": "คลองเตย",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10112"
                }, {
                    "subdistrict": "คลองเตย",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10113"
                }, {
                    "subdistrict": "พระโขนง",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10110"
                }, {
                    "subdistrict": "พระโขนง",
                    "district": "คลองเตย",
                    "province": "กรุงเทพมหานคร",
                    "zipcode": "10115"
                }, {
                    "subdistrict": "อุโมงค์",
                    "district": "เมืองลำพูน",
                    "province": "ลำพูน",
                    "zipcode": "51010"
                }, {
                    "subdistrict": "บางพึ่ง",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางยอ",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางหญ้าแพรก",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "บางหัวเสือ",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "สำโรง",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "สำโรงกลาง",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "สำโรงกลาง",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10131"
                }, {
                    "subdistrict": "สำโรงใต้",
                    "district": "พระประแดง",
                    "province": "สมุทรปราการ",
                    "zipcode": "10130"
                }, {
                    "subdistrict": "สันปูเลย",
                    "district": "ดอยสะเก็ด",
                    "province": "เชียงใหม่",
                    "zipcode": "50220"
                }, {
                    "subdistrict": "นาดี",
                    "district": "ด่านซ้าย",
                    "province": "เลย",
                    "zipcode": "42120"
                }, {
                    "subdistrict": "นาหอ",
                    "district": "ด่านซ้าย",
                    "province": "เลย",
                    "zipcode": "42120"
                }, {
                    "subdistrict": "ปากหมัน",
                    "district": "ด่านซ้าย",
                    "province": "เลย",
                    "zipcode": "42120"
                }, {
                    "subdistrict": "โป่ง",
                    "district": "ด่านซ้าย",
                    "province": "เลย",
                    "zipcode": "42120"
                }, {
                    "subdistrict": "โพนสูง",
                    "district": "ด่านซ้าย",
                    "province": "เลย",
                    "zipcode": "42120"
                }, {
                    "subdistrict": "วังยาว",
                    "district": "ด่านซ้าย",
                    "province": "เลย",
                    "zipcode": "42120"
                }]
            };

            if (target.indexOf('lang=EN') >= 0) {
                fnCallback({
                    status: true,
                    data: {
                        "status": "SUCCESSFUL",
                        "trx-id": "4I1AKKSUOGER5",
                        "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                        "response-data": [{
                            "subdistrict": "Din Daeng",
                            "district": "Din Daeng",
                            "province": "Bangkok",
                            "zipcode": "10130"
                        }]
                    },
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

        } else {
            that.callServiceGetByPass(target, null, function(result) {
                fnCallback(result);
            });
        }
    };
});
