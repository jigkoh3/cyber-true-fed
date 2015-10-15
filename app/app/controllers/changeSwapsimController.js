smartApp.controller('ChangeSwapSimController', function($routeParams, $scope, AuthenService, ChangeSwapSimService, DeviceService, sharedServices, SystemService) {

    // Templates
    var runTime = new Date().getTime();
    $scope.template = {
        header: 'app/views/header.html?' + runTime,
        customerprofile: 'app/views/customerprofile.html?' + runTime
    };


    // Prepare page states
    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null';



    // Initialize variables
    $scope.divID = 'changeSwapSimContent';
    $scope.subNoLength = 10;
    $scope.dealerCodeLength = 8;
    $scope.simSerialLength = 18;

    $scope.isCardValueData = false;
    $scope.isReadCardSuccess = false;
    $scope.approver = "";


    // Initalize states of the UI controls in the CustomerProfile template to display properly in the SwapSIM page
    $scope.onCustomerProfileTemplateLoaded = function() {
        $('#unMatch2').hide();
        $scope.isAuthorize = false;
        $scope.isCustomerProfile = false;

        //$('#btnSSO').hide();
        //$('#CitizenID').show();
    };


    // Submit form
    var isDataComplete = function() {
        //return !$('#simSerial').prop('disabled');
        return true;
    };

    var generateOrderRequest = function() {
        return {
            orderData: orderData,
            customerProfile: $scope.data.customerProfile,
            simData: $scope.data.simData,
            newSIMData: {
                productCodes: $scope.data.simDetails['product-code'],
                simSerial: $scope.simSerial
            },
            saleAgent: $scope.getAuthen,
            simDetail: $scope.data.simDetails
        };
    };

    $scope.submit = function() {
        $scope.hasSubmitted = true;
        orderData.approver = $scope.approver;

        var data = generateOrderRequest();

        SystemService.showLoading();
        console.log(data);
        ChangeSwapSimService.submitSwapSIMOrder(data, function(result) {
            SystemService.hideLoading();

            setTimeout(function() {
                var displayMsg = utils.getObject(result.data, 'display-messages.0');

                if (!displayMsg || !displayMsg['message-type']) {
                    SystemService.showBeforeClose({
                        "message": "DEMO > " + result.data["display-messages"][0]["th-message"],
                        "message2": ""
                    });
                } else {
                    SystemService.showBeforeClose({
                        "message": result.data["display-messages"][0]["th-message"],
                        "message2": ""
                    });
                }
            }, 1000);
        });
    };

    $scope.openPDFDialog = function() {
        if (!isDataComplete()) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วนก่อน');
            return;
        }

        SystemService.showLoading();



        var customerType = 'N';
        if ($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') {
            customerType = 'Y';
        }
        var cardValueData = {
            //NEW---
            "photoIdCard": "",

            //SC=Scan
            //SN=Snap
            "photoType": "SN",
            "titleEn": "",
            "firstnameEn": "",
            "lastnameEn": "",

            "titleTh": "",
            "firstnameTh": "",
            "lastnameTh": "",

            "expireDay": "",
            "birthDay": "",
            "issueDay": "",

            //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
            "homeNumber": "",
            "moo": "",
            "trok": "",
            "soi": "",
            "road": "",
            "district": "",
            "amphur": "",
            "province": ""
                //NEW---
        };
        if ($scope.isCardValueData) {
            cardValueData.photoType = "SC";
            cardValueData.photoIdCard = $scope.cardInfo.CitizenID;
            cardValueData = {
                //NEW---
                "photoIdCard": $scope.cardInfo.Photo,

                //SC=Scan
                //SN=Snap
                "photoType": "SC",
                "titleEn": $scope.cardInfo.PrefixEN,
                "firstnameEn": $scope.cardInfo.FirstNameEN,
                "lastnameEn": $scope.cardInfo.LastNameEN,

                "titleTh": $scope.cardInfo.PrefixTH,
                "firstnameTh": $scope.cardInfo.FirstNameTH,
                "lastnameTh": $scope.cardInfo.LastNameTH,


                "expireDay": $scope.cardInfo.ExpireDay,
                "birthDay": $scope.cardInfo.BirthDay,
                "issueDay": $scope.cardInfo.IssueDay,



                //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                "homeNumber": $scope.cardInfo.HomeNumber,
                "moo": $scope.cardInfo.Moo,
                "trok": $scope.cardInfo.Trok,
                "soi": $scope.cardInfo.Soi,
                "road": $scope.cardInfo.Road,
                "district": $scope.cardInfo.District,
                "amphur": $scope.cardInfo.Amphur,
                "province": $scope.cardInfo.Province
                    //NEW---
            };

        }
        var data = {
            'func': 'SWS',
            'header': {
                'title-code': $scope.data.customerProfile['title-code'],
                'title': $scope.data.customerProfile['title'],
                'firstname': $scope.data.customerProfile['firstname'],
                'lastname': $scope.data.customerProfile['lastname'],
                'customerType': customerType,
                'authorizeFullName': $('#authorizeFullName').val(),
                'id-number': $scope.data.customerProfile['id-number'],
                'product-id-number': $scope.SubNo,
                'ouId': $scope.data.simData['ouId'],
                'orderId': orderData.orderId,
                "photo": $scope.varPhoto,

                //NEW---
                "photoIdCard": cardValueData["photoIdCard"],

                //SC=Scan
                //SN=Snap
                "photoType": cardValueData["photoType"],
                "titleEn": cardValueData["titleEn"],
                "firstnameEn": cardValueData["firstnameEn"],
                "lastnameEn": cardValueData["lastnameEn"],

                "titleTh": cardValueData["titleTh"],
                "firstnameTh": cardValueData["firstnameTh"],
                "lastnameTh": cardValueData["lastnameTh"],

                "expireDay": cardValueData["expireDay"],
                "birthDay": cardValueData["birthDay"],
                "issueDay": cardValueData["issueDay"],

                //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                "homeNumber": cardValueData["homeNumber"],
                "moo": cardValueData["moo"],
                "trok": cardValueData["trok"],
                "soi": cardValueData["soi"],
                "road": cardValueData["road"],
                "district": cardValueData["district"],
                "amphur": cardValueData["amphur"],
                "province": cardValueData["province"]
                    //NEW---
            },
            'body': generateOrderRequest()
        };
        console.log(data);
        SystemService.generatePDF(data, function(url) {
            SystemService.hideLoading();

            setTimeout(function() {
                $('#modalPDFOpener').click();

                setTimeout(function() {
                    var srcPDF = url;
                    document.getElementById('iframePDF').src = url + '?clearData=N';
                    if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
                        setTimeout(function() {
                            document.getElementById('iframePDF').src = 'javascript:window.print();'
                        }, 2000);
                        setTimeout(function() {
                            document.getElementById('iframePDF').src = srcPDF
                        }, 2500);
                    }
                }, 500);


            }, 1000);
        });
    };


    // Get device list
    var deviceByCode = {};

    var onGetDeviceTypeList = function(result) {
        $scope.deviceTypeList = result.data['response-data'];

        if ($scope.deviceTypeList && $scope.deviceTypeList.length) {
            deviceByCode = _.indexBy($scope.deviceTypeList, 'device-code');

            // Non-shop users always have only one device type, just auto-select it
            if ($scope.shopType === '0' || $scope.deviceTypeList.length === 1) {
                setTimeout(function() {
                    $scope.deviceType = $scope.deviceTypeList[0]['device-code'];
                    $scope.$digest();
                }, 0);
            }
        }
    };

    $scope.$watch('deviceType', function(val) {
        if (deviceByCode[val]) {
            var device = deviceByCode[val];

            $scope.productCodes = device['product-codes'].join('/');
            $scope.simType = device['sim-type'];
        } else {
            $scope.productCodes = '';
            $scope.simType = ''
        }
    });


    // Get current SIM data
    var onGetSIMData = function(result) {

        if (result == false) {
            console.log(result);
            $scope.SubNo = 'null';
            $('#dataSubNo').val("");
            setTimeout(function() {
                $('#dataSubNo').focus();

            }, 1200);
            return;
        } else {
            $scope.data = result.data;
            $scope.SubNo = result.data.header.subscriberno;

            if (!$scope.data) return;

            authenticate();

            var companyCode = utils.getObject(result.data, 'simData.company-code');
            if (!utils.isEmpty(companyCode)) {
                DeviceService.getDeviceTypeList(companyCode, onGetDeviceTypeList);
            }
        }

    };

    $scope.onload = function() {
        if ($scope.SubNo !== 'null') {
            SystemService.showLoading();
            ChangeSwapSimService.getSIMData($scope.SubNo, onGetSIMData);
        }
    }

    setTimeout(function() {
        if ($scope.SubNo == 'null') {
            $('#dataSubNo').focus();
        }
    }, 100);

    setTimeout(function() {
        SystemService.validateNummeric();
    }, 1000);
    $scope.isNumberSubNo = false;
    $scope.onKeyUpSubNo = function(charCode) {
        //console.log(charCode);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberSubNo = !bool;
        //setTimeout(function () {
        //    $scope.isNumberSubNo = false;
        //    $('#idBindDataAgain').click();
        //}, 3000);
        $scope.autoHideNumberSubNo = false;
        return bool;
    }
    $scope.onInputSubNo = function() {

        console.log($('#dataSubNo').val().length);
        var dataSubNo = $('#dataSubNo').val();
        if (dataSubNo.length == 10) {
            $scope.SubNo = $('#dataSubNo').val();
            $('#swapSubNo').prop('disabled', true);

            SystemService.showLoading();

            ChangeSwapSimService.getSIMData(dataSubNo, function(result) {

                $('#swapSubNo').prop('disabled', false);

                onGetSIMData(result);
            });
        }

    };
    $scope.onInputSubNo_reset = function() {
        $scope.isInputSubNo = false;
        $scope.onInputSubNo();
    };


    // Validate new SIM
    var validateSIMType = function(simType) {
        return jQuery.inArray(simType, ['1', '3', '5', 'S']) === -1 ? false : true;
    };

    var validateResourceStatus = function(resourceStatus) {
        return resourceStatus === 'AVAILABLE' ? true : false;
    };

    $scope.onInputSIMSerial = function() {
        if ($scope.simSerial.length === $scope.simSerialLength) {



            var data = {
                'sim-serial': $scope.simSerial,
                'dealer-code': $scope.dealerCode,
                'company-code': $scope.data.simData['company-code'],
                'mobile-servicetype': $scope.data.simData['mobile-servicetype'] == 'PREPAID' ? 'PREPAID' : 'POSTPAID'
                    //,'product-code': $scope.productCodes,
                    //'pair-msisdn': $scope.SubNo
            };

            if ($scope.getAuthen['shopType'] == '1' && $scope.getAuthen['isSecondAuthen'] == true) {
                data['product-code'] = $scope.productCodes;
            }
            console.log(data);
            ChangeSwapSimService.validateSIM(data, function(result) {
                var displayMsg = utils.getObject(result.data, 'display-messages.0');

                if (displayMsg && displayMsg['message-type']) {
                    $('#simSerial').prop('disabled', false);
                    SystemService.showAlert({
                        "message": result.data["display-messages"][0]["message"],
                        "message-code": result.data["display-messages"][0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": result.data["display-messages"][0]["en-message"],
                        "th-message": result.data["display-messages"][0]["th-message"],
                        "technical-message": result.data["display-messages"][0]["technical-message"]
                    });
                    //SystemService.showAlert(displayMsg);
                } else {
                    $('#simSerial').prop('disabled', true);
                }

                $scope.printAble = false;

                if (result.data) {
                    var simDetails = utils.getObject(result.data, 'response-data.sim-detail');
                    $scope.data.simDetails = simDetails;

                    if (
                        // TODO: Validate (See Page 10 - NO 6)
                        // TODO: Validate (See Page 10 - NO 7)
                        validateSIMType(simDetails['sim-type']) &&
                        validateResourceStatus(simDetails['resource-status'])
                        // TODO: Validate (See Page 10 - NO 10)
                        // TODO: Validate (See Page 10 - NO 11)
                        // TODO: Validate (See Page 10 - NO 12)
                    ) {
                        $scope.printAble = true;

                        if ($scope.shopType === '1') {
                            $scope.openPDFDialog();
                        }
                    } else {
                        alert('หมายเลขซิมการ์ดใหม่ ไม่ถูกต้อง'); // ปรับ alert message

                    }
                }
            });
        } else {
            $scope.printAble = false;
        }
    };

    $scope.onInputDealerCode = function() {
        if ($scope.dealerCode.length === $scope.dealerCodeLength) {

            $('#dealerCodeInput').prop('disabled', true);

            var data = {
                'partner-code': $scope.dealerCode,
                'function-type': 'SWAPSIM'
            };

            sharedServices.validateDealerCode(data, function(result) {
                $scope.alreadyValidatedDealerCode = true;
                $scope.dealerCodeValid = false;

                $('#dealerCodeInput').prop('disabled', false);

                if (result.status === true && result.data) {
                    var dealerCode = utils.getObject(result.data, 'response-data.partnerInfo.dealer-code');

                    if ($scope.dealerCode === dealerCode) {
                        $scope.dealerCodeValid = true;
                    }
                }
            });
        } else {
            $scope.dealerCodeValid = false;
        }
    };


    // Authentication
    var orderData = {};

    var authenticate = function() {
        AuthenService.getAuthen(function(authResult) {
            $scope.getAuthen = authResult;
            $scope.shopType = authResult.shopType;
            //console.log(authResult);




            $scope.shopType = $scope.getAuthen['shopType'];
            if ($scope.shopType == '1') {

            } else {
                $scope.isCustomerProfile = true;
            }

            // Prepare dealer code list
            $scope.dealerCodeList = $scope.getAuthen.shopcodes;
            if ($scope.dealerCodeList && $scope.dealerCodeList.length === 1) {
                $scope.dealerCode = $scope.dealerCodeList[0];
                $scope.dealerCodeValid = true;
            } else if ($scope.dealerCodeList && $scope.dealerCodeList.length > 1) {
                $scope.dealerCodeValid = true;
                //$('#dealerCodeList').attr('size', $scope.dealerCodeList.length + 1);
            }

            var dealerCode = utils.getObject($scope.getAuthen, 'shopcodes.0');

            SystemService.getOrderId($scope.getAuthen.channel, dealerCode, function(order) {
                //SystemService.hideLoading();

                orderData = order;

                if ($scope.shopType === '1') {
                    // Auto-open the CardReader dialog
                    setTimeout(function() {
                        var fancyboxOptions = {
                            helpers: {
                                overlay: {
                                    //closeClick: false
                                }
                            },

                            beforeShow: function() {

                                if ($scope.getAuthen['shopType'] == '1' && $scope.getAuthen['isSecondAuthen'] == false) {
                                    $('#btnSSO').hide();
                                    //hidden button and disabled=false
                                    $('#CitizenID').prop('disabled', false);
                                } else {
                                    //disabled=true
                                    //alert('show');
                                    $('#CitizenID').prop('disabled', true);
                                }
                                $('#loadingReadCard').hide();
                                $('#unMatch').hide();
                            },

                            afterClose: function() {
                                if (!$scope.onInputId()) {
                                    //window.close();
                                }
                            }
                        };

                        $('#btn-fancy-ReadCard').fancybox(fancyboxOptions).trigger('click');
                    }, 1000);
                }
            });
        });
    };

    $scope.openSSO = function() {
        var getReadyCitizenInput = function() {
            $('#CitizenID').prop('disabled', false);
            $('#CitizenID').focus();
        };

        if ($scope.getAuthen.isSecondAuthen) {
            var openDialog = function(uri, name, options, closeCallback) {
                var win = window.open(uri, name, options);

                var interval = window.setInterval(function() {
                    try {
                        if (!win || win.closed) {
                            window.clearInterval(interval);
                            closeCallback(win);
                        }
                    } catch (ex) {}
                }, 1000);

                return win;
            };

            var url = SystemService.secondAuthenURL + 'SecondAuthen.jsp?App=WEBUI&TrxID=' + orderData.TrxID + '&Retry=yes&Goto=';

            openDialog(url, 'MsgWindow', 'width=800, height=600', function(w) {
                SystemService.showLoading();

                SystemService.second_authen(orderData.TrxID, function(result) {
                    SystemService.hideLoading();


                    var displayMsg = utils.getObject(result, 'display-messages.0');
                    if (!displayMsg || !displayMsg['message-type']) {
                        $scope.approver = result['response-data'][0]['loginName'];
                        setTimeout(function() {
                            getReadyCitizenInput();
                        }, 1000);
                    } else {
                        setTimeout(function() {
                            SystemService.showAlert(displayMsg);
                        }, 1200);
                    }
                });
            });
        } else {
            getReadyCitizenInput();
        }
    };

    $scope.onInputId = function() {
        var value = $('#CitizenID').val();

        if (value.length === 13) {
            if (value === $scope.data.customerProfile['id-number']) {
                $scope.isCustomerProfile = true;
                $('#unMatch').hide();
                $('.fancybox-close').click();

                return true;
            } else {
                $('#unMatch').show();
            }
        }
    };
    $scope.onInputIdReadCard = function() {
        var value = $('#CitizenID').val();

        if (value.length === 13) {
            if (value === $scope.data.customerProfile['id-number']) {
                $scope.isCustomerProfile = true;
                $('#unMatch').hide();
                $('.fancybox-close').click();

                return true;
            } else {
                $('#unMatch').show();
            }
        }
    };

    $scope.readCardError = function(msg) {
        SystemService.showAlert({
            'message': msg,
            'message-code': '',
            'message-type': 'WARNING',
            'en-message': msg,
            'th-message': msg,
            'technical-message': ''
        });
    };
    $scope.SetCardValue2 = function(result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + " " + $scope.cardInfo2.LastNameTH);

        $scope.varCardInfo2.firstName = $scope.cardInfo2.FirstNameTH;
        $scope.varCardInfo2.lastName = $scope.cardInfo2.LastNameTH;

        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    }
    $scope.SetCardValue = function(result) {
        $scope.cardInfo = eval(result);
        if ($scope.data.customerProfile["id-number"] == $scope.cardInfo.CitizenID) {
            $scope.isCardValueData = true;
        } else {
            $scope.isCardValueData = false;
        }


        $('#CitizenID').val($scope.cardInfo.CitizenID);

        $scope.isReadCardSuccess = true;

        $scope.onInputIdReadCard();

        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 1000);
    };

    //start----------- camera ----------------
    $scope.varPhoto = "";
    $scope.initWebCam = function() {

        setTimeout(function() {
            $('#btnSavePhoto').hide();
            var html = webcam.get_html(320, 240);
            $("#dataCamera").html(html);

            webcam.set_api_url(getURL('services/file/upload.service'));
            webcam.set_quality(90); // JPEG quality (1 - 100)
            webcam.set_shutter_sound(true); // play shutter click sound
            webcam.set_hook('onComplete', onCompleteSnap);

        }, 500);

    }

    function onCompleteSnap(msg) {
        $scope.varPhoto = msg;
        var ie_preview_image = $("#ie_preview_image")[0];
        ie_preview_image.src = "data:image/png;base64," + msg;

        webcam.reset();
        $('#btnSavePhoto').show();
    }

    $scope.webcamSnap = function() {
            webcam.snap();
        }
        //end----------- camera ----------------
    $scope.afterCloseWarning = function() {

        if ($scope.SubNo = 'null') {
            $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 500);
        }


    };
});

// TODO: Each function in sharedServices should be moved to another file
smartApp.service('sharedServices', function($timeout, SystemService) {

    this.validateDealerCode = function(payload, fnCallback) {
        var params = utils.createParamGet(payload, [
            'partner-code',
            'function-type'
        ]);

        var cb = function(result) {
            var displayMsg = utils.getObject(result.data, 'display-messages.0');

            if (displayMsg && displayMsg['message-type']) {
                SystemService.showAlert(displayMsg);
            }

            fnCallback(result);
        };

        if (!SystemService.demo) {
            var target = '/profiles/partner/validatepartner?' + params;

            SystemService.callServiceGet(target, null, function(result) {
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'display-messages': [],
                'trx-id': '7K1EFF8LA2BTF',
                'process-instance': 'psaapdv1 (instance: SFF_node1)',
                'response-data': {
                    'partnerInfo': {
                        'status-id': '1',
                        'register_date': '2003-06-23 00:00:00.0',
                        'status_name': 'Active',
                        'biz-reg-type-name': 'นิติบุคคล',
                        'dealer-code': payload['partner-code'],
                        'emp-code': '',
                        'tvs-code': '',
                        'tmx-emp-code': '',
                        'channel-alias': 'OTHER',
                        'channel-name': 'Other',
                        'partner-type-name': 'Sub-Partner',
                        'partner-sub-type-name': '',
                        'partner-type-group-name': 'OUTLET',
                        'parent-code': '79000001',
                        'partner-name-th': 'TA Orange Co.'
                    }
                }
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
