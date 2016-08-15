// ---------------------- ChangeSuspendController.js ----------------------
smartApp.controller('ChangeSuspendController', function($scope, $routeParams, AuthenService, ChangeSuspendService, ChangePricePlanService, DeviceService, ReasonService, SystemService, ValidateMsgService) {

    // Templates
    var runTime = new Date().getTime();
    $scope.template = {
        header: 'app/views/header.html?' + runTime,
        customerprofile: 'app/views/customerprofile.html?' + runTime,
        reasonmemo: 'app/views/reasonmemo.html?' + runTime
    };

    // Read route parameters
    $scope.Id = "";
    $scope.shopType = '1';
    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null'; //$routeParams.SubNo;


    // Initialize variables
    $scope.divID = 'changeSuspendContent';
    $scope.subNoLength = 10;
    $scope.simSerialLength = 18;

    $scope.dealerCodes = [];
    $scope.dealerCode = '';
    $scope.approver = "";
    $scope.isMatch = true;

    $scope.CitizenID = "";

    $scope.data = {};
    $scope.isReadCardSuccess = false;

    $scope.statusChangeSuspend = '';
    $scope.statusReason = '';
    $scope.statusReasonMemo = '';

    var orderData = {};
    var isRead = false;

    //Reasons
    $scope.reasons = [];
    $scope.statusReason = "";

    /// requirement by p'mam :: 15-08-2-16 :: xsam32
    $scope.isShowReason = false;




    //end reson

    $scope.hideReadCardForMobile = function() {
        SystemService.hideReadCardForMobile();
    };

    // Submit form
    $scope.submit = function() {
        $scope.hasSubmitted = true;

        var data = {
            customerProfile: $scope.data.customerProfile,
            simData: $scope.data.simData,
            newSIMData: {
                productCodes: $scope.productCodes,
                simSerial: $scope.simSerial
            }
        };

        ChangeSuspendService.submitChangeSuspend(data, function(result) {
            console.log(result);
            if (result.status === true && result.data.status === 'SUCCESSFUL') {
                $('#modalPDFOpener').click();
            }
        });
    };

    $scope.logDataBeforeSubmit = function() {
        console.log($scope.data);

        console.log($scope.statusChangeSuspend);

        console.log($scope.statusReason);

        console.log($scope.statusReasonMemo);
    };

    // var checkIsChangeSuspendSim = function(data) {
    //  var prop = utils.getObject(data, 'simData.product-properties.PRODUCT-STATUS-CODE');
    //  var prodStatus = utils.getObject(data, 'simData.product-status');
    //  if ('CANCEL-ACTIVE, CANCEL-SOFT-SUSPEND, CANCEL-FULL-SUSPEND'.indexOf(prop) > -1) {
    //      alert('ไม่สามารถทำรายการได้ เนื่องจากสถานะของเบอร์เป็น ' + prop);
    //      return false;
    //  }
    //  else if (prodStatus.toUpperCase() !== 'ACTIVE') {
    //      alert('ไม่สามารถทำรายการได้ เนื่องจากสถานะของเบอร์ไม่ได้ ACTIVE');
    //      return false;
    //  }
    //  else {
    //      console.log(prop);
    //      return true;
    //  }
    // };

    // Get current SIM data
    var onGetSIMData = function(result) {

        if (result.data == false) {
            console.log(result);
            $scope.SubNo = 'null';
            // $('#dataSubNo').val("");

            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 1200);
        }

        $scope.data = result.data;
        var cusAccountCate = $scope.data.simData['account-category'];
        console.log(cusAccountCate);
        if (cusAccountCate == "I" || cusAccountCate == "P") {
            $('#divShowAuthorize').hide();
        }
        $('#unMatch2').hide();

        // if (!checkIsChangeSuspendSim($scope.data)) {
        //  window.close();
        // }

        $scope.getSIMDataFailed = false;

        if (!$scope.data) {
            $scope.getSIMDataFailed = true;
            SystemService.hideLoading();
        } else {
            authenticate();
        }

        // var activeDate = utils.getObject($scope.data, 'simData.product-properties.PRODUCT-STATUS-DATE');
        // if (activeDate) {
        //     var activeDateResult = moment(Date.parse(activeDate));
        //     if (activeDateResult.isValid()) {
        //         $scope.activeDate = activeDateResult.format('DD/MM/YYYY');
        //     }
        // }

        $scope.productStatus = utils.getObject($scope.data, 'simData.product-properties.PRODUCT-STATUS-DESC');
        $scope.activeDate = formatActiveDate(utils.getObject($scope.data, 'simData.product-properties.PRODUCT-STATUS-DATE'));

        var reasonCode = utils.getObject($scope.data, 'simData.product-properties.REASON-DESC');
        if (reasonCode) {
            $scope.reasonCodeDisplay = '(' + reasonCode + ')';
        }

        var companyCode = utils.getObject(result.data, 'simData.company-code');
        if (!utils.isEmpty(companyCode)) {
            // DeviceService.getDeviceTypeList(companyCode, onGetDeviceTypeList);
        }
        var reasonCode = utils.getObject($scope.data, 'simData.product-properties.REASON-DESC');
        if (reasonCode) {
            $scope.reasonCodeDisplay = '(' + reasonCode + ')';
        }


    };

    if ($scope.SubNo !== 'null') {
        SystemService.showLoading();
        ChangeSuspendService.getSIMData($scope.SubNo, onGetSIMData);
    }

    $scope.onChangeStatus = function() {
        $scope.isShowReason = false;
        if ($scope.getAuthen['shopType'] == '0' || (($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') && $scope.getAuthen["userGroup"] == 'SHOP' && $scope.statusChangeSuspend == 'FULL-SUSPEND')) {
            var actPathId = "78";
            if ($scope.statusChangeSuspend == 'FULL-SUSPEND') {
                actPathId = "196";
            }
            var defaultReasonCode = "CREQ";
            if(($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') && $scope.getAuthen["userGroup"] == 'SHOP' && $scope.statusChangeSuspend == 'FULL-SUSPEND') {
                $scope.isShowReason = true;
                defaultReasonCode = "";
            }
            console.log($scope.statusChangeSuspend, actPathId);
            SystemService.showLoading();
            ReasonService.list(actPathId, function(resultReason) {
                SystemService.hideLoading();
                //solution for none fix index
                $scope.reasons = resultReason;
                var myArray = resultReason;
                var searchText = defaultReasonCode,
                    index = -1;
                for (var i = 0, len = myArray.length; i < len; i++) {
                    if (myArray[i].id === searchText) {
                        index = i;
                        break;
                    }
                }

                console.log(index);

                $scope.reason = $scope.reasons[index];
                $scope.selectReason = $scope.reasons[index];
                $scope.statusReason = $scope.reasons[index];
                //solution for none fix index
            });
        } else {
            $scope.statusReason = {
                id: "CREQ"
            };
        }
    };

    $scope.onInputSubNo = function() {
        $scope.subNoInput = $('#dataSubNo').val();

        if ($scope.subNoInput && $scope.subNoInput.length === 10) {
            SystemService.showLoading();
            $scope.SubNo = $('#dataSubNo').val();
            ChangeSuspendService.getSIMData($scope.subNoInput, onGetSIMData);
        }
    };
    // (End) Get current SIM data ----------------------
    $scope.TrxID = '';
    $scope.orderId = '';
    $scope.statusList = {};
    var authenticate = function() {
        AuthenService.getAuthen(function(authResult) {

            $scope.getAuthen = authResult;
            $scope.shopType = $scope.getAuthen['shopType'];

            if ($scope.shopType === '0') {
                $scope.isCustomerProfile = true;
            }

            $scope.partnerCode = utils.getObject($scope.getAuthen, 'partnerCodes.0');

            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
                $scope.showDataDealer = true;
            }

            if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length >= 1) {
                $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
            }

            //get list dropdown status
            SystemService.getMaster_list($scope.data.simData["product-properties"]["PRODUCT-STATUS-CODE"], function(result) {
                $scope.statusList = result;
                //console.log($scope.statusList);
            });

            SystemService.getOrderId($scope.getAuthen.channel, $scope.partnerCode, function(order) {

                SystemService.hideLoading();
                orderData = order;
                $scope.TrxID = order.TrxID;
                $scope.orderId = order.orderId;
                localStorage.setItem('orderId', order.orderId);

                // if ($scope.shopType == "1") {
                //     if ($scope.shopType == "1" && !$scope.isCustomerProfile && $scope.SubNo != 'null') {
                //         $("#btn-fancy-ReadCard").fancybox().trigger('click');
                //     }
                //     $('#loadingReadCard').hide();
                //     $('#unMatch').hide();
                //     setTimeout(function() {

                //         $('#CitizenID').val('');
                //         if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                //             $('#CitizenID').prop('disabled', false);
                //             $('#btnSSO').hide();
                //             setTimeout(function() {
                //                 $('#CitizenID').focus();

                //             }, 1000);

                //         } else {
                //             $('#CitizenID').prop('disabled', true);
                //         }
                //     }, 100);
                // } else {
                //     $scope.showDataDealer = false;
                // }

                // setTimeout(function() {
                //     $('#loadingReadCard2').hide();
                //     $('#unMatch2').hide();
                // }, 1000);
                $scope.initModalReadCard();
            });
        });
    };

    //----------- camera ----------------
    $scope.initWebCam = function() {

        setTimeout(function() {
            $('#btnSavePhoto').hide();
            $('#btnSavePhoto_Mobile').hide();
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
    $scope.mobileCamSnap = function() {
        var msg = $('#varMobileCam').val();
        msg = msg.replace('data:image/png;base64,', '');
        msg = msg.replace('data:image/jpeg;base64,', '');
        //console.log(msg); 
        // $('#btnSavePhoto_Mobile').hide();
        $scope.varPhoto = msg;
    };
    $scope.webcamSnap = function() {
        webcam.snap();
    }


    var formatActiveDate = function(date) {
        if (date) {
            if (date.indexOf("/") >= 0) {
                var arrDate = date.split("/");
                var strDate = arrDate[0] + "/" + arrDate[1] + "/" + (Number(arrDate[2]) + 543);
                console.log(arrDate);
                return strDate;

            } else {

                return date;
            }
            /*if (!date) return date;

            return SystemService.convertDateToTH(moment(date).format('DD/MM/YYYY'), 'TH');*/
        }
    };

    $scope.isManualReadCard = true;
    $scope.onInputId = function() {
        //console.log($('#CitizenID').val().length);
        var cid = $('#CitizenID').val();

        // console.log(cid + ";" + $scope.data.customerProfile["id-number"]);
        if (cid.length >= 3) {
            if (cid == $scope.data.customerProfile["id-number"]) {
                $scope.showDataDealer = false;
                //document.getElementById('btnReadCardClose2').click();
                //$("#btnForm").fancybox().close();
                $scope.isCustomerProfile = true;
                $.fancybox.close();
                $scope.isReadCardSuccess = false;
                // $scope.CitizenID = "";

                // $scope.changereqType("ADD_IRIDD");

                // $scope.data = $scope.data2;
                if (isRead == true) {
                    $('#snapshot').hide();
                } else {
                    $('#snapshot').show();
                }
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
                isRead = false;
            }

        }
    }

    var validateInput = function() {
        if (!$scope.statusChangeSuspend) {
            //alert('กรุณาเลือกสถานะหมายเลขใหม่');
            SystemService.showAlert(ValidateMsgService.data.msgStatusSubNoEmpty);
            return false;
        }

        if (!$scope.statusReason) {
            //alert('กรุณาเลือกเหตุผล');
            SystemService.showAlert(ValidateMsgService.data.msgReasonCodeEmpty);
            return false;
        }

        return true;
    };

    var generateOrderRequest = function() {
        $scope.data.customerProfile['language'] = "TH";
        //20160603 Chanhe AUTH to POA by waramun
        var customerAgent = {
            "POA": {
                "id-number": $('#CitizenID2').val(),
                "firstname": $('#authorizeFullName').val(),
                "lastname": $('#authorizeFullName').val()
            }
        };

        return {
            customerProfile: $scope.data.customerProfile,
            customerAddress: $scope.data.customerAddress,
            productDetails: $scope.data.simData,
            orderData: orderData,
            saleAgent: $scope.getAuthen,
            reason: $scope.statusReason,
            memo: $scope.statusReasonMemo,
            approver: $scope.approver,
            customerAgent: customerAgent //20160603 Chanhe AUTH to POA by waramun
        };
    };

    $scope.openPDFDialog = function() {

        if (!validateInput()) {
            return;
        }

        SystemService.showLoading();

        var customerType = 'N';
        if ($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') {
            customerType = 'Y';
        }

        var data = {
            'func': 'SUS',
            'header': {
                'title-code': customerType == 'Y' ? "" : $scope.data.customerProfile['title-code'],
                'title': $scope.data.customerProfile['title'],
                'firstname': $scope.data.customerProfile['firstname'],
                'lastname': $scope.data.customerProfile['lastname'],
                'customerType': customerType,
                'authorizeFullName': $('#authorizeFullName').val(),
                'id-number': $scope.data.customerProfile['id-number'],
                'product-id-number': $scope.SubNo,
                'ouId': $scope.data.simData['ouId'],
                'orderId': orderData.orderId,
                'photo': $scope.varPhoto,

                'photoIdCard': '',
                'photoType': 'SN',
                'titleEn': '',
                'firstnameEn': '',
                'lastnameEn': '',
                'expireDay': $scope.data.customerProfile['id-expire-date'],
                'birthDay': $scope.data.customerProfile['birthdate'],
                'issueDay': '',

                'homeNumber': '',
                'moo': '',
                'trok': '',
                'soi': '',
                'road': '',
                'district': '',
                'amphur': '',
                'province': ''
            },
            'body': generateOrderRequest()
        };

        console.log(data);

        var pdfShopCode = ($scope.getAuthen["partnerCodes"].length > 0 ? $scope.getAuthen["partnerCodes"][0] : $scope.getAuthen.saleCode);
        localStorage.setItem('pdfShopCode', pdfShopCode);

        SystemService.generatePDF(data, function(url) {
            SystemService.hideLoading();

            SystemService.printPDF(url);
            //printObjectPdf();

            setTimeout(function() {
                $('#modalPDFOpener').click();

                setTimeout(function() {
                    //case for PDF Android ::18-05-2016 //xsam32
                    SystemService.checkPDFAndroid_show(url);
                }, 500);
                if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
                    //case for PDF Android ::18-05-2016 //xsam32
                    setTimeout(function() {
                        SystemService.checkPDFAndroid_print(url);
                    }, 2000);
                }

                // setTimeout(function() {
                //     var srcPDF = url;
                //     document.getElementById('iframePDF').src = url + '?clearData=N';
                //     if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
                //         setTimeout(function() {
                //             //document.getElementById('iframePDF').src = 'javascript:window.print();'
                //             printObjectPdf();
                //         }, 2000);
                //         setTimeout(function() {
                //             document.getElementById('iframePDF').src = srcPDF
                //         }, 2500);
                //     }
                // }, 500);


            }, 1000);
        });
    };

    $scope.confirmPrint = function() {

        SystemService.showLoading();

        var data = generateOrderRequest();

        data['statusChangeSuspend'] = $scope.statusChangeSuspend;
        data['statusReason'] = $scope.statusReason.id ? $scope.statusReason.id : "CREQ";
        data['statusReasonMemo'] = $scope.statusReasonMemo;

        ChangeSuspendService.submitChangeSuspend(data, function(result) {
            SystemService.hideLoading();
            console.log(result);
            setTimeout(function() {
                var displayMsg = utils.getObject(result.data, 'display-messages.0');
                console.log(displayMsg);
                if (!displayMsg || !displayMsg['message-type']) {
                    SystemService.showBeforeClose({
                        "message": "" + result.data["display-messages"][0]["th-message"],
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

    $scope.printAndSaveOrder = function() {
        //case for PDF Android ::18-05-2016 //xsam32
        SystemService.checkPDFAndroid_printNoneShop();
        $scope.confirmPrint();
    };

    $scope.openSSO = function() {
        isRead = false;
        var openDialog = function(uri, name, options, closeCallback) {
            var win = window.open(uri, name, options);
            var interval = window.setInterval(function() {
                try {
                    if (win == null || win.closed) {
                        window.clearInterval(interval);
                        closeCallback(win);
                    }
                } catch (e) {}
            }, 1000);
            return win;
        };


        var url = SystemService.secondAuthenURL + "SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
        //var url = "https://www.google.co.th";

        openDialog(url, "MsgWindow", "width=800, height=600", function(w) {
            //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
            SystemService.showLoading();
            SystemService.second_authen($scope.TrxID, function(result) {
                SystemService.hideLoading();
                if (result["display-messages"] === undefined) {
                    var res = result["response-data"][0]['authRes'];
                    if (res['responseCode'] == "200") {
                        $scope.approver = result['response-data'][0]['loginName'];
                        $scope.manualInputReadCard();
                    } else {
                        $.fancybox.close();
                        //unsuccessul

                        setTimeout(function() {
                            SystemService.showAlert({
                                "message": "",
                                "message-code": "",
                                "message-type": "WARNING",
                                "en-message": res['responseCode'] + ": " + res['responseDesc'],
                                "th-message": "",
                                "technical-message": "changeResumeConroller"
                            });
                        }, 1000);
                    }

                } else {
                    $.fancybox.close();
                    //unsuccessul

                    setTimeout(function() {
                        SystemService.showAlert({
                            "message": result["display-messages"][0]["message"],
                            "message-code": result["display-messages"][0]["message-code"],
                            "message-type": "WARNING",
                            "en-message": result["display-messages"][0]["en-message"],
                            "th-message": result["display-messages"][0]["th-message"],
                            "technical-message": result["display-messages"][0]["technical-message"]
                        });
                    }, 1000);
                }
            });

        });
    };
    //$scope.nextBillDate = SystemService.getNextBillDate();
    $scope.readCardError = function(msg) {
        $.fancybox.close();
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": msg,
            "th-message": msg,
            "technical-message": "changeSuspendController"
        });
    };
    $scope.initModalReadCard = function() {
        $("#btnReadCardClose").click(function() {
            $('input[type=submit]').hide();
            $('input[type=reset]').hide();
        });
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        $('#CitizenID').val('');
        document.getElementById("CitizenID").disabled = true;
        $('input[type=submit]').show();
        $('input[type=reset]').show();
        if ($scope.shopType == "1") {
            if ($scope.shopType == "1" && !$scope.isCustomerProfile && $scope.SubNo != 'null') {
                $("#btn-fancy-ReadCard").fancybox().trigger('click');
            }
            $('#loadingReadCard').hide();
            $('#unMatch').hide();
            setTimeout(function() {

                $('#CitizenID').val('');
                if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                    $('#CitizenID').prop('disabled', false);
                    $('#btnSSO').hide();
                    setTimeout(function() {
                        $('#CitizenID').focus();
                    }, 1000);

                } else {
                    if ($scope.getAuthen["isByPassSecondAuthen"] == true) {
                        $('#CitizenID').prop('disabled', false);
                        setTimeout(function() {
                            $('#CitizenID').focus();
                        }, 1000);
                    } else {
                        $('#CitizenID').prop('disabled', true);
                    }
                }
            }, 100);

        }

        setTimeout(function() {
            $('#loadingReadCard2').hide();
            $('#unMatch2').hide();
        }, 1000);
    }
    $scope.manualInputReadCard = function() {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        document.getElementById("CitizenID").disabled = false;

        setTimeout(function() {
            $('#CitizenID').val('');
        }, 0);
        $scope.isManualReadCard = false;
    }

    // Get device list
    var deviceByCode = {};

    var onGetDeviceTypeList = function(result) {
        $scope.deviceTypeList = utils.getObject(result.data, 'response-data.device');

        if ($scope.deviceTypeList && $scope.deviceTypeList.length) {
            deviceByCode = _.indexBy($scope.deviceTypeList, 'device-code');
        }
    };

    $scope.$watch('deviceType', function(val) {
        if (deviceByCode[val]) {
            var sim = deviceByCode[val].sim[0];

            var productCodes = _.pluck(sim['product-code'], 'code');
            $scope.productCodes = productCodes.join('/');

            $scope.simType = sim['sim-type'];
        } else {
            $scope.productCodes = '';
            $scope.simType = ''
        }
    });

    $scope.SetCardValue = function(result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);

        if ($scope.cardInfo.CitizenID == $scope.data.customerProfile['id-number']) {
            $scope.isCardValueData = true;
            $scope.showDataDealer = false;
            $scope.isReadCardSuccess = true;
            $scope.isCustomerProfile = true;
            $.fancybox.close();
            setTimeout(function() {
                $('#idBindDataAgain').click();
            }, 500);
            $('.isCustomerProfile').prop('disabled', false);
        } else {
            $('#unMatch').show();
            $scope.isMatch = false;
        }

        // $scope.onInputId();
        ///$scope.ReadCardMockUp($scope.cardInfo.CitizenID);
        //console.log(result);
        //console.log(result.CitizenID);
    };

    $scope.onInputId2 = function() {
        var cid = $('#CitizenID2').val();
        if (cid.length == 13) {
            if (SystemService.validatePID(cid)) {

            } else {
                $('#CitizenID2').val('');
            }
        }
    };

    $scope.SetCardValue2 = function(result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH);
        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    };

    // $scope.isManualReadCard = true;
    // $scope.onInputId = function () {
    //  console.log($('#CitizenID').val().length);
    //  var cid = $('#CitizenID').val();
    //  if (cid.length == 13) {
    //      if (cid == $routeParams.ID) {
    //          document.getElementById('btnReadCardClose2').click();
    //          $scope.isReadCardSuccess = false;
    //      } else {
    //          $('#unMatch').show();
    //          $scope.isMatch = false;
    //      }
    //  }
    // };

    $scope.customerType = "N";
    $scope.isAuthorize = false;
    $scope.authorize = function() {
        $scope.isAuthorize = true;
    };

    $scope.afterCloseWarning = function() {
        if ($scope.SubNo === 'null') {
            // $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 500);
        }
        $scope.isClickPrint = false;
        isFocus = true;
        $scope.initModalReadCard();



        if (idFocus) {
            $('#' + idFocus).focus();
            idFocus = "";
        } else {
            $scope.validateUI();
        }
    };
    //init();
});
