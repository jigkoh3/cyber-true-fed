smartApp.service('SystemService', function($routeParams, $ngBootbox, $filter, $http, ModalService, ValidateMsgService) {
    console.log('SystemService');
    var that = this;

    //10/02/2016 fix
    var _WEB_METHOD_CHANNEL = "AFTERSALE_SMARTUI_WEB";
    var _REF_WEB_CHANNEL = $routeParams.channel ? $routeParams.channel : '';

    this.demo = false;
    //this.secondAuthenURL = "https://sso-devt.true.th:11443/";//DEV
    //this.secondAuthenURL = "https://xxo-uat.true.th:11443/SSORESTFul/"; //UAT
    //this.secondAuthenURL = "https://xxo-uat.true.th:11443/SSORESTFul/";//PRO

    //for get by env
    this.secondAuthenURL = getSecondAuthenURL();

    window.onresize = function(event) {
        //console.log($('#hModal').height());
        $('#hModal').height(($(window).height()) - 235);
        //console.log($('#hModal').height());
    };
    window.mobilecheck = function() {
            var check = false;
            //mobile
            // (function(a) {
            //     if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
            // })(navigator.userAgent || navigator.vendor || window.opera);
            //mobile & tab
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                check = true;
            }
            return check;
        }
        //STR: Solution detecting MOBILE 16/02/2016
    var hideReadCardForMobile = function() {
        if (window.mobilecheck()) {
            $('.idBtnReadCard').addClass('hide');
            //$('.btn-camera').addClass('hide');
            $('#divWebCam').hide();
            $('#divMobileCam').show();
        }else{
            $('#divWebCam').show();
            $('#divMobileCam').hide();
        }
    };

    this.hideReadCardForMobile = function() {
        hideReadCardForMobile();
    };
    //END: Solution detecting MOBILE 16/02/2016

    this.printPDF = function(url) {
        divPDF2.innerHTML =
            '<object id="idPdfObject" width="0" height="0" style="width: 0px; height: 0px;" type="application/pdf" data="' + url + '?clearData=N' + '">' +
            '<embed src="' + url + '?clearData=N' + '" width="0" height="0" style="width: 0px; height: 0px;" type="application/pdf">' +
            '</embed>' +
            '<span>PDF plugin is not available.</span>' +
            '</object>';
    }

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
                'WEB_METHOD_CHANNEL': _WEB_METHOD_CHANNEL,
                'E2E_REFID': localStorage.getItem('orderId'),
                'REF_WEB_CHANNEL': _REF_WEB_CHANNEL
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
                'WEB_METHOD_CHANNEL': _WEB_METHOD_CHANNEL,
                'E2E_REFID': localStorage.getItem('orderId'),
                'REF_WEB_CHANNEL': _REF_WEB_CHANNEL
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
                'WEB_METHOD_CHANNEL': _WEB_METHOD_CHANNEL,
                'E2E_REFID': localStorage.getItem('orderId'),
                'REF_WEB_CHANNEL': _REF_WEB_CHANNEL
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
                'WEB_METHOD_CHANNEL': _WEB_METHOD_CHANNEL,
                'E2E_REFID': localStorage.getItem('orderId'),
                'REF_WEB_CHANNEL': _REF_WEB_CHANNEL
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

    this.saveReportToServer = function(data, fnCallback) {
        var httpRequest = {
            method: "POST",
            url: getURL('/services/report/saveFile.service'),
            data: data,
            timeout: 30000
        };

        httpRequest.headers = {
            'WEB_METHOD_CHANNEL': _WEB_METHOD_CHANNEL,
            'E2E_REFID': localStorage.getItem('orderId'),
            'REF_WEB_CHANNEL': _REF_WEB_CHANNEL
        };

        $http(httpRequest).success(function(response) {
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        });
    };


    //CR02 ------------
    this.showAlertMulti = function(msgArray, msgType) {
        var errorText = {
            "message": "",
            "en-message": "",
            "th-message": "",
            "technical-message": ""
        };
        var errorList = msgArray;
        for (var i = 0; i < errorList.length; i++) {
            errorText["message"] += errorList[i]["message"] + "<br /> ";
            errorText["en-message"] += errorList[i]["en-message"] + "<br /> ";
            errorText["th-message"] += errorList[i]["th-message"] + "<br /> ";
            errorText["technical-message"] += errorList[i]["technical-message"] + "<br /> ";
        }
        that.showAlert({
            "message": errorText["message"],
            "message-code": "",
            "message-type": msgType,
            "en-message": errorText["en-message"],
            "th-message": errorText["th-message"],
            "technical-message": errorText["technical-message"]
        });
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        setTimeout(function() {
            $('.ngdMessage').html(errorText["message"]);
            $('.ngdEnMessage').html(errorText["en-message"]);
            $('.ngdThMessage').html(errorText["th-message"]);
            $('.ngdTechnicalMessage').html(errorText["technical-message"]);
        }, 1200);
    };
    this.getCustomerPreverify = function(data, fnCallback) {

        //var target = 'aftersales/order/generate-id?channel=WEBUI&dealer=80000011';
        // var headers = {
        //     'WEB_METHOD_CHANNEL': 'WEBUI'
        // };
        data['target'] = 'profiles/customer/customer-preverify';
        if (!that.demo) {
            that.callServicePostByPass(data, null, function(result) {
                fnCallback(result.data);
            });
        } else {
            var dataTest = {
                "status": "SUCCESSFUL",
                "trx-id": null,
                "process-instance": null,
                "response-data": []
            };
            //=================Data for blacklist=================
            var dataTest2 = {
                "status": "SUCCESSFUL",
                "display-messages": [{
                    "message": "Unable to activate the service due to outstanding balance on customer’s ID, please inform customer to  make a payment at True Shop or True Partner",
                    "message-code": "TMV-PREVERIFY-11008",
                    "message-type": "ERROR",
                    "en-message": "Unable to activate the service due to outstanding balance on customer’s ID, please inform customer to  make a payment at True Shop or True Partner",
                    "th-message": "ไม่สามารถเปิดบริการได้ เนื่องจากมียอดค้างชำระแจ้งลูกค้าชำระค่าบริการที่ ทรู ช็อป/ตัวแทนจำหน่าย",
                    "technical-message": "(-1-) checkCollection return result=Y"
                }, {
                    "message": "Unable to activate the service due to outstanding balance on customer’s ID, please inform customer to  make a payment at True Shop or True Partner",
                    "message-code": "TMV-PREVERIFY-11007",
                    "message-type": "ERROR",
                    "en-message": "Unable to activate the service due to outstanding balance on customer’s ID, please inform customer to  make a payment at True Shop or True Partner",
                    "th-message": "ไม่สามารถเปิดบริการได้ เนื่องจากมียอดค้างชำระแจ้งลูกค้าชำระค่าบริการที่ ทรู ช็อป/ตัวแทนจำหน่าย",
                    "technical-message": "(-2-) checkBlacklist return result=Y"
                }, {
                    "message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                    "message-code": "TMV-PREVERIFY-11009",
                    "message-type": "ERROR",
                    "en-message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                    "th-message": "ไม่สามารถเปิดบริการได้ กรุณาแนะนำเจ้าหน้าที่โทรติดต่อ 02-699-6222 (วันจันทร์-เสาร์ เวลา 9.00-18.00)",
                    "technical-message": "(-3-) checkFruad return result=Y"
                }],
                "trx-id": "7U29L82ZRK653",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "verifyCode": null
                }
            };
            if (data.idNumber == "2011112916616") {
                fnCallback(dataTest2);
            } else {
                fnCallback(dataTest);
            }
        }

    };


    this.generateOrderId = function(parameter, fnCallback) {
        //var target = 'aftersales/order/generate-id?channel=WEBUI&dealer=80000011';
        var target = 'aftersales/order/generate-id' + parameter;
        // var headers = {
        //     'WEB_METHOD_CHANNEL': 'WEBUI'
        // };
        if (!that.demo) {
            that.callServiceGet(target, null, function(result) {
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
        // var headers = {
        //     'WEB_METHOD_CHANNEL': 'WEBUI'
        // };
        if (!that.demo) {
            that.callServiceGetByPass(target, null, function(result) {
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
            var data3 = {
                "status": "SUCCESSFUL",
                "trx-id": "3MSQPX2TRAYH",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": [{
                    "loginName": "fsdf",
                    "employeeId": "",
                    "authRes": {
                        "app": "WEBUI",
                        "info": null,
                        "responseCode": "401",
                        "responseDesc": "OPENAM_ERROR=AuthenticationFailed",
                        "trxID": "5USQP1ZRRP79"
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
            //$ngBootbox.hideAll();
            $('#btnCloseLoading').click();
            setTimeout(function() {
                //$ngBootbox.hideAll();
                $('#btnCloseLoading').click();
                setTimeout(function() {
                    //$ngBootbox.hideAll();
                    $('#btnCloseLoading').click();
                    setTimeout(function() {
                        //$ngBootbox.hideAll();
                        $('#btnCloseLoading').click();
                    }, 1000);
                }, 1000);
            }, 1000);
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
                "configuration-items": [{
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
                        "key": "คุณ",
                        "value": "คุณ",
                        "attributes": {
                            "GENDER": "FEMALE"
                        },
                        "description": "คุณ",
                        "en-description": "คุณ",
                        "th-description": "คุณ"
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
    this.getMasterSuspendActive = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "40HTHECIJHTG",
            "process-instance": "tmsapnpr1 (instance: SFF_node4)",
            "response-data": {
                "id": "SUSPEND-ACTIVE",
                "name": "List of change status suspend - active",
                "description": "List of change status suspend - active",
                "configuration-items": [{
                    "key": "SOFT-SUSPEND",
                    "value": "SOFT-SUSPEND",
                    "description": "Soft suspend by Request",
                    "en-description": "Soft suspend by Request",
                    "th-description": "Soft suspend by Request"
                }, {
                    "key": "FULL-SUSPEND",
                    "value": "FULL-SUSPEND",
                    "description": "Full Suspend by Request",
                    "en-description": "Full Suspend by Request",
                    "th-description": "Full Suspend by Request"
                }]
            }
        }
        //
    };
    this.getMasterRestoreActive = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "41XY43HJ1BYE",
            "process-instance": "tmsapnpr1 (instance: SFF_node4)",
            "response-data": {
                "id": "RESTORE-FULL-SUSPEND",
                "name": "List of change status restore - full suspend",
                "description": "List of change status suspend - full suspend",
                "configuration-items": [{
                    "key": "ACTIVE",
                    "value": "ACTIVE",
                    "description": "Active",
                    "en-description": "Active",
                    "th-description": "Active"
                }]
            }
        }
        //
    };
    this.getMasterCancel = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "41XYDHWGQP1I",
            "process-instance": "tmsapnpr1 (instance: SFF_node4)",
            "response-data": {
                "id": "CANCEL-ACTIVE",
                "name": "List of change status cancel - active",
                "description": "List of change status cancel - active",
                "configuration-items": [{
                    "key": "CANCEL",
                    "value": "CANCEL",
                    "description": "Cancel",
                    "en-description": "Cancel",
                    "th-description": "Cancel"
                }]
            }
        }
        //
    };
    this.getMasterResumeCancel_OA_OS = function() {
        return {
            "status": "SUCCESSFUL",
            "trx-id": "70L32TV3DB7X",
            "process-instance": "tmsapnpr1 (instance: SFF_node3)",
            "response-data": {
                "id": "RESUME-CANCEL-OA-OS",
                "name": "List of change status resume - old account , ols sim",
                "description": "List of change status resume - old account , old sim",
                "configuration-items": [{
                    "key": "CANCEL-OA-OS",
                    "value": "CANCEL-OA-OS",
                    "description": "Resume",
                    "en-description": "Resume",
                    "th-description": "Resume"
                }]
            }
        }
        //
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
        } else if (target == 'aftersales/configuration/master/SUSPEND-ACTIVE') {
            result = that.getMasterSuspendActive();
        } else if (target == 'aftersales/configuration/master/RESTORE-FULL-SUSPEND') {
            result = that.getMasterRestoreActive();
        } else if (target == 'aftersales/configuration/master/RESTORE-SOFT-SUSPEND') {
            result = that.getMasterRestoreActive();
        } else if (target == 'aftersales/configuration/master/CANCEL-ACTIVE') {
            result = that.getMasterCancel();
        } else if (target == 'aftersales/configuration/master/RESUME-CANCEL-OA-OS') {
            result = that.getMasterResumeCancel_OA_OS();
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


    this.calendarDatePicker = function() {
        var date = new Date();
        date.setDate(date.getDate() + 1);

        var birthdate = new Date();
        birthdate.setDate(birthdate.getDate());

        var expiredate = new Date();
        expiredate.setDate(expiredate.getDate() - 1);

        $('.date-picker').datepicker({
            clearBtn: true,
            autoclose: true,
            todayHighlight: true,
            language: 'th-th'
        });

        $('.date-picker-start').datepicker({
            clearBtn: true,
            autoclose: true,
            todayHighlight: true,
            language: 'th-th',
            startDate: date
        });


        $('.date-picker-expiredate').datepicker({
            clearBtn: true,
            autoclose: true,
            todayHighlight: true,
            language: 'th-th',
            startDate: date
        });

        $('.date-picker-birthdate').datepicker({
            clearBtn: true,
            autoclose: true,
            todayHighlight: true,
            language: 'th-th',
            endDate: birthdate
        });

        // var x = "";
        // $('.date-picker-birthdate').keydown(function(event) {
        //     /* Act on the event */
        //     if(this.value){
        //         if(this.value.length==10){
        //             x = this.value;
        //         }
        //     }else{
        //         this.value = x;
        //     }
        // });

        $('.dateFormat').keyup(function(event) {
                /* Act on the event */
                if (this.value) {
                    console.log(this.value, this.value.split('/').length);
                    var dateValues = this.value.split('/');
                    console.log(dateValues[0], dateValues[1], dateValues[2]);

                    if (dateValues[1] > 12) {
                        //dateValues[1] = "";
                        if (!dateValues[2]) {
                            this.value = dateValues[0] + "/" + "12";
                        } else {
                            this.value = dateValues[0] + "/" + "12" + "/" + dateValues[2];
                        }
                    } else if (dateValues[1] == "00") {
                        //dateValues[1] = "";
                        if (!dateValues[2]) {
                            this.value = dateValues[0] + "/" + "01";
                        } else {
                            this.value = dateValues[0] + "/" + "01" + "/" + dateValues[2];
                        }
                    } else if (dateValues[0] == "00") {

                        if (dateValues[0] && !dateValues[1] && !dateValues[2]) {
                            this.value = "01";
                        } else if (dateValues[0] && dateValues[1] && !dateValues[2]) {
                            this.value = "01" + "/" + dateValues[1];
                        } else if (dateValues[0] && !dateValues[1] && dateValues[2]) {
                            this.value = "01" + "/" + "" + "/" + dateValues[2];
                        } else if (dateValues[0] && dateValues[1] && dateValues[2]) {
                            this.value = "01" + "/" + dateValues[1] + "/" + dateValues[2];
                        }
                    } else if (dateValues[0] > 31 && !(dateValues[1] == 4 || dateValues[1] == 2 || dateValues[1] == 6 || dateValues[1] == 9 || dateValues[1] == 11)) {

                        if (dateValues[0] && !dateValues[1] && !dateValues[2]) {
                            this.value = "31";
                        } else if (dateValues[0] && dateValues[1] && !dateValues[2]) {
                            this.value = "31" + "/" + dateValues[1];
                        } else if (dateValues[0] && !dateValues[1] && dateValues[2]) {
                            this.value = "31" + "/" + "" + "/" + dateValues[2];
                        } else if (dateValues[0] && dateValues[1] && dateValues[2]) {
                            this.value = "31" + "/" + dateValues[1] + "/" + dateValues[2];
                        }
                    } else if ((dateValues[1] == 4 || dateValues[1] == 6 || dateValues[1] == 9 || dateValues[1] == 11) && dateValues[0] > 30) {
                        dateValues[0] = "30";
                        if (!dateValues[2]) {
                            this.value = dateValues[0] + "/" + dateValues[1];
                        } else {
                            this.value = dateValues[0] + "/" + dateValues[1] + "/" + dateValues[2];
                        }
                    } else if (dateValues[1] == 2) {
                        var beYear = dateValues[2]
                        if (dateValues[2] > 2500) {
                            beYear = dateValues[2] - 543;
                        }
                        var isleap = (beYear % 4 == 0 && (beYear % 100 != 0 || beYear % 400 == 0));
                        if (dateValues[0] >= 29 && !isleap) {
                            if (dateValues[0] && !dateValues[1] && !dateValues[2]) {
                                this.value = "28";
                            } else if (dateValues[0] && dateValues[1] && !dateValues[2]) {
                                this.value = "28" + "/" + dateValues[1];
                            } else if (dateValues[0] && !dateValues[1] && dateValues[2]) {
                                this.value = "28" + "/" + "" + "/" + dateValues[2];
                            } else if (dateValues[0] && dateValues[1] && dateValues[2]) {
                                this.value = "28" + "/" + dateValues[1] + "/" + dateValues[2];
                            }
                        }
                        // else if (dateValues[0] >= 29 && isleap) {
                        //     if (dateValues[0] && !dateValues[1] && !dateValues[2]) {
                        //         this.value = "29";
                        //     } else if (dateValues[0] && dateValues[1] && !dateValues[2]) {
                        //         this.value = "29" + "/" + dateValues[1];
                        //     } else if (dateValues[0] && !dateValues[1] && dateValues[2]) {
                        //         this.value = "29" + "/" + "" + "/" + dateValues[2];
                        //     } else if (dateValues[0] && dateValues[1] && dateValues[2]) {
                        //         this.value = "29" + "/" + dateValues[1] + "/" + dateValues[2];
                        //     }
                        // }
                    }

                    var key = event.keyCode || event.charCode;
                    console.log(key);
                    if (key != 8 && key != 46) {
                        if (this.value.length == 2 && this.value.split('/').length == 1) {
                            this.value = this.value + "/";
                        }

                        if (this.value.length == 5 && this.value.split('/').length == 2) {
                            this.value = this.value + "/";
                        }
                    }

                }


            })
            .keypress(function(e) {
                //alert('press');
                var charCode = (e.which) ? e.which : e.keyCode;
                //console.log(this.value.length, this.value.indexOf("0"), this.value)
                // if (this.value.length == 0 && charCode != 48) {
                //     //showSpan();
                //     return false;
                // }
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    // show msg
                    //showSpan();
                    return false;
                } else {
                    //hideSpan();
                }
                if (charCode == 13) {
                    //alert('');
                    this.blur();
                }
            });

        $('.inputPartner').keyup(function(event) {
            /* Act on the event */
            if (this.value.length == 8) {
                return false;
            }
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
        if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 95 || charCode > 105)) {
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

        $(".inputDate").keypress(function(e) {
            var charCode = (e.which) ? e.which : e.keyCode;
            if (this.value.indexOf("/") >= 3) {
                if (charCode == 47) {
                    return false;
                }
            }
            if (charCode != 47 && charCode > 31 && (charCode < 48 || charCode > 57))
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
