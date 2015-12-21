// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('ChangeIRIDDController', function($scope,
    $filter,
    SystemService,
    $routeParams,
    changeIRIDDService,
    ReasonService,
    AuthenService,
    ValidateMsgService,
    $ngBootbox) {


    $scope.isSubIDDNo = true;
    $scope.isSubIRNo = true;
    $scope.divID = "changeIRIDDContent";
    $scope.isMatch = true;
    $scope.referralcode = "";
    $scope.CitizenID = "";
    $scope.showAuthorize = false;

    $scope.isNonePartner = true;
    $scope.TrxID = "";
    $scope.isValidateSave = false;
    $scope.isShowApproveRal = false;

    $scope.isCustomerProfile = false;
    $scope.offerGroup = 0;
    $scope.approver = "";

    $scope.showDataDealer = false;

    $scope.isNullSubNo = $routeParams.subno ? false : true;

    //$scope.lspromoType = {
    //    "0": "เลือก",
    //    "1": "PROECT1",
    //    "2": "PROROAM2",
    //    "3": "PROROAM2S",
    //};
    //$scope.promoType = "3";


    //Reasons
    $scope.reasons = [];
    $scope.reason = "";
    $scope.selectReason = {};
    $scope.setDefualtReason = function(result, value) {
        if (result) {
            var myArray = result;
            var searchText = value,
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
        }
        if ($scope.shopType == '1' && $scope.getAuthen['isSecondAuthen'] == true) {
            $scope.reason = {
                id: value
            };
        }
    };
    ReasonService.list("78", function(result) {
        //$scope.reasons = result;
        //$scope.reason = $scope.reasons[86];
        //$scope.selectReason = $scope.reasons[86];
        //solution for none fix index
        $scope.reasons = result;
        $scope.setDefualtReason($scope.reasons, "C16");
        //solution for none fix index
    });
    $scope.onReasonChange = function() {
        $scope.selectReason = $scope.reasons[$('#selectReasonId').val()];
        //console.log($scope.reason);
    };
    //end reson


    $scope.shopType = "0";
    //SystemService.genDatePicker();
    $scope.SubNo = "";

    $scope.data = {};
    $scope.data2 = {};
    $scope.orderId = "";
    $scope.isReadCardSuccess = false;

    $scope.saveOrder = function() {
        SystemService.showLoading();
        $scope.data.orderRequest["target"] = "aftersales/order/submit";
        console.log($scope.data.orderRequest);
        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI',
            'E2E_REFID': $scope.data.orderRequest["order"]["order-id"]
        };
        //console.log(headers);
        if (SystemService.demo) {
            SystemService.showBeforeClose({
                "message": "รายการคำขอเลขที่ " + $scope.orderId,
                "message2": "ได้รับข้อมูลเรียบร้อยแล้ว"
            });
        } else {
            SystemService.callServicePost($scope.data.orderRequest, headers, function(result) {
                //console.log(result);
                if (result.status) {
                    SystemService.showBeforeClose({
                        "message": result.data["display-messages"][0]["th-message"],
                        "message2": ""
                    });
                } else {
                    SystemService.showAlert({
                        "message": result.error,
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": result.error,
                        "th-message": "",
                        "technical-message": "changeIRIDDController"
                    });
                }
            });
        }

        //confirm
        //SystemService.showBeforeClose({
        //    "message": "รายการคำขอเลขที่ OR30935 ",
        //    "message2": "ได้รับข้อมูลเรียบร้อยแล้ว",
        //});
        //SystemService.showConfirm().then(function (value) {

        //}, function (reason) {
        //    //cancel

        //});
    };
    $scope.openSSO = function() {
        //var new_window = window.open('', "MsgWindow", "width=320, height=240");
        //new_window.onbeforeunload = function () {
        //    alert('close');
        //}
        //var new_window = window.open("", "MsgWindow", "width=800, height=600");
        //new_window.onbeforeunload = function () { alert('close'); }

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

        if ($scope.getAuthen["isSecondAuthen"]) {

            openDialog(url, "MsgWindow", "width=800, height=600", function(w) {
                //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');

                SystemService.showLoading();
                SystemService.second_authen($scope.TrxID, function(result) {
                    //alert(result["status"]);
                    SystemService.hideLoading();
                    //console.log(result);
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
        } else {

            $scope.isNonePartner = true;
            $scope.manualInputReadCard();
        }
        $scope.changereqType('ADD_IRIDD');
    };

    ////$scope.nextBillDate = SystemService.getNextBillDate();
    $scope.readCardError = function(msg) {
        $.fancybox.close();
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": msg,
            "th-message": msg,
            "technical-message": "changeIRIDDController"
        });
    };
    $scope.initModalReadCard = function() {
        if ($scope.shopType == "1" && !$scope.isCustomerProfile) {

            setTimeout(function() {
                $('#CitizenID').val('');
                $('#CitizenID').focus();
                if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                    $scope.showDataDealer = true;
                    $('#CitizenID').prop('disabled', false);
                    setTimeout(function() {
                        $('#btnSSO').hide();
                    }, 100);

                } else {
                    $('#CitizenID').prop('disabled', true);
                }

                $("#btnReadCardClose").click(function() {
                    if (!$scope.isCustomerProfile) {
                        $('input[type=submit]').hide();
                        $('input[type=reset]').hide();
                    }
                });
                $('#loadingReadCard').hide();
                $('#loadingReadCard2').hide();
                $('#unMatch2').hide();
                $('#unMatch').hide();


                $('input[type=submit]').show();
                $('input[type=reset]').show();
            }, 100);
        } else {
            setTimeout(function() {
                $('#CitizenID').val('');
                $('#CitizenID').focus();
            }, 100);
        }
    }
    $scope.manualInputReadCard = function() {
            $('#loadingReadCard').hide();
            $('#loadingReadCard2').hide();
            $('#unMatch').hide();
            $('#unMatch2').hide();
            $('#CitizenID').prop('disabled', false);


            setTimeout(function() {
                $('#CitizenID').val('');
            }, 500);
            setTimeout(function() {
                $('#CitizenID').select();
            }, 1500);
            $scope.isManualReadCard = false;
        }
        //SystemService.get("0689100006", function (result) {
        //    $scope.data = result.data;
        //    $scope.isReadCardSuccess = true;
        //});
    $scope.isInputSubNo = false;
    $scope.onInputSubNo = function() {
        console.log($('#dataSubNo').val().length, $scope.isInputSubNo);
        var dataSubNo = $('#dataSubNo').val();
        if (dataSubNo.length == 10) {
            if ($scope.isInputSubNo == false) {
                $scope.SubNo = $('#dataSubNo').val();
                $scope.isInputSubNo = true;
                $scope.onLoad();
            }
        } else {
            $scope.isInputSubNo = false;
        }
    };
    $scope.onInputSubNo_reset = function() {
        $scope.isInputSubNo = false;
        $scope.onInputSubNo();
    };
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

    $scope.SetCardValue = function(result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        //console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


        if ($scope.cardInfo.CitizenID == $scope.data.responseData.customer["id-number"]) {
            $scope.isCardValueData = true;
            $scope.showDataDealer = false;

            $scope.isReadCardSuccess = true;
            $scope.isCustomerProfile = true;
            $.fancybox.close();

            $scope.changereqType("ADD_IRIDD");
            setTimeout(function() {
                $('#idBindDataAgain').click();
            }, 500);
            $('.isCustomerProfile').prop('disabled', false);
        } else {
            $('#unMatch').show();
            $scope.isMatch = false;
        }
        ///$scope.ReadCardMockUp($scope.cardInfo.CitizenID);
        //console.log(result);
        //console.log(result.CitizenID);

    };

    $scope.isCitizenID2 = true;
    $scope.onInputId2 = function() {
        var cid = $('#CitizenID2').val();
        if (cid.length == 13) {
            if (SystemService.validatePID(cid)) {
                $scope.isCitizenID2 = true;
            } else {
                $scope.isCitizenID2 = false;
                $('#CitizenID2').val('');
            }
            $scope.allValidateSave();
        }
    };
    $scope.SetCardValue2 = function(result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        //console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH);
        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    }

    //$scope.isManualReadCard = true;
    $scope.onInputId = function() {
        //console.log($('#CitizenID').val().length);
        var cid = $('#CitizenID').val();

        if (cid.length >= 3) {
            if (cid == $scope.data2.customerProfile["id-number"]) {
                $scope.showDataDealer = false;
                //document.getElementById('btnReadCardClose2').click();
                //$("#btnForm").fancybox().close();
                $scope.isCustomerProfile = true;
                $.fancybox.close();
                $scope.isReadCardSuccess = false;
                $scope.CitizenID = "";

                $scope.changereqType("ADD_IRIDD");

                $scope.data = $scope.data2;
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }

        }
        //    //    if ($scope.certificateID == "0689100007") {
        //    //        SystemService.get("0689100007", function (result) {
        //    //            $scope.data = result.data;
        //    //           //console.log($scope.data);
        //    //            document.getElementById('btnReadCardClose').click();

        //    //            if ($scope.data["status-code"] == "1") {
        //    //                document.getElementById('btnModalWarning').click();
        //    //            }
        //    //        });

        //    //    }
        //   //console.log($('#CitizenID').val().length);
        //    var cid = $('#CitizenID').val();
        //    if (cid.length == 13) {
        //        if (cid == $scope.data.responseData.customer["id-number"]) {
        //            SystemService.get("0689100006", function (result) {
        //                document.getElementById('btnReadCardClose2').click();

        //                $scope.data = result.data;
        //                $scope.isReadCardSuccess = false;
        //            });

        //        } else {
        //            $('#unMatch').show();
        //            $scope.isMatch = false;
        //        }
        //        //SystemService.get($scope.certificateID, function (result) {
        //        //   //console.log(result);
        //        //    document.getElementById('btnReadCardClose').click();
        //        //    //$scope.data = result.data;
        //        //    //console.log($scope.data);

        //        //    if (result.data["status-code"] == "2") {
        //        //        document.getElementById('btnModalError').click();
        //        //    }
        //        //});

        //    }
    }

    $scope.requestType = "ADD_IRIDD";
    $scope.requestText = "ขอเปิดบริการ";
    $scope.changIDD = false;
    $scope.changIR = false;
    $scope.checkIDD = false;
    //$scope.checkIR = false;

    $scope.requestTypeDB = "";

    $scope.changereqType = function(requestType) {
        if (requestType == 'ADD_IRIDD') {
            $scope.setDefualtReason($scope.reasons, "C16");
        } else {
            $scope.setDefualtReason($scope.reasons, "DDSC");
        }
        setTimeout(function() {
            $('#btnValidatePrint').prop('disabled', true);
        }, 100);
        $scope.requestType = requestType;
        $scope.data.orderRequest['order']['order-items'][0]['name'] = requestType;
        //console.log($scope.data.orderRequest);

        if ($scope.requestType == "REMOVE_IRIDD") { //ยกเลิก บริการ
            if ($scope.requestTypeDB == "IDD") { //สมัคร IDD ไว้แล้ว
                //เปิดให้กด IDD
                $scope.isSubIDDNo = false;
                $scope.changIDD = false;
                //ปิดให้กด IR
                $scope.isSubIRNo = true;
                $scope.changIR = false;
            } else if ($scope.requestTypeDB == "IRIDD") {
                //เปิดให้กด IDD
                $scope.isSubIDDNo = false;
                $scope.changIDD = false;
                //เปิดให้กด IR
                $scope.isSubIRNo = false;
                $scope.changIR = false;
            } else {
                //ไม่ให้กด IDD
                $scope.isSubIDDNo = true;
                $scope.changIDD = false;
                //ไม่ให้กด IR
                $scope.isSubIRNo = true;
                $scope.changIR = false;
            }

            if ($scope.data.installedProduct["account-sub-type"].indexOf('HY') === 0) {
                //ไม่ให้กด IDD
                $scope.isSubIDDNo = true;
                $scope.changIDD = false;
                // //ไม่ให้กด IR
                // $scope.isSubIRNo = true;
                // $scope.changIR = false;
            }
        } else { //สมัคร บริการ
            if ($scope.requestTypeDB == "IDD") { //สมัคร IDD ไว้แล้ว
                //เปิดให้กด IDD
                $scope.isSubIDDNo = true;
                $scope.changIDD = true;
                //ปิดให้กด IR
                $scope.isSubIRNo = false;
                $scope.changIR = false;
            } else if ($scope.requestTypeDB == "IRIDD") {
                //เปิดให้กด IDD
                $scope.isSubIDDNo = true;
                $scope.changIDD = true;
                //เปิดให้กด IR
                $scope.isSubIRNo = true;
                $scope.changIR = true;
            } else {
                //ไม่ให้กด IDD
                $scope.isSubIDDNo = false;
                $scope.changIDD = false;
                //ไม่ให้กด IR
                $scope.isSubIRNo = false;
                $scope.changIR = false;
            }
        }
        //check show offer
        $scope.checkShowOffer();

        //check validate card
        if (!$scope.isCustomerProfile) {
            //ไม่ให้กด IDD
            $scope.isSubIDDNo = true;
            //ไม่ให้กด IR
            $scope.isSubIRNo = true;
        }


    };
    $scope.authorize = function() {
        $scope.isAuthorize = !$scope.isAuthorize;
    };
    $scope.iddChecked = function() {
        if ($scope.changIDD == false) {
            if ($scope.requestType != "ADD_IRIDD" && $scope.changIR == true) {
                $scope.changIR = true;
            } else {
                $scope.changIR = false;
            }
            //$scope.changIR = false;
        } else {
            if ($scope.requestType != "ADD_IRIDD" && $scope.requestTypeDB != "IDD") {
                $scope.changIR = true;
            }
        }
        //check show offer
        $scope.checkShowOffer();

    };
    $scope.offerGroupIR = "";
    $scope.irChecked = function() {
        if ($scope.changIR == true) {
            if ($scope.requestType != "ADD_IRIDD") {

                if ($scope.offerGroup == 0) {
                    $scope.offerGroup = $scope.offerGroupIR;
                };

            } else {
                $scope.changIDD = true;
                //default offer code
                //console.log($scope.data.installedProduct["account-sub-type"]);
                if ($scope.data.installedProduct["account-sub-type"].indexOf('HY') === 0) {
                    //console.log($scope.data.installedProduct["account-sub-type"]);
                    $scope.offerGroup = "PROROAM6";
                } else {
                    //console.log($scope.data.installedProduct["account-sub-type"]);
                    $scope.offerGroup = "PROROAM2S";
                }
                var list = $filter('filter')($scope.data.offerGroupList, {
                    "soc-name": $scope.offerGroup
                });
                if (list.length == 0) {
                    $scope.offerGroup = $scope.data.offerGroupList[0]["soc-name"];
                }
                $scope.data.orderRequest['order']['order-items'][0]['order-data']['IR-APPROVE-CODE'] = "";


            }
        } else {
            if ($scope.requestType != "ADD_IRIDD") {
                $scope.changIDD = false;
            }
        }

        //check show offer
        $scope.checkShowOffer();
    };
    $scope.checkShowOffer = function() {
        if ($scope.changIR == true) {
            //console.log($scope.data);
            //console.log($scope.data.responseData.customer);
            if ($scope.data.responseData.customer["cvss-process-request"] == "N" && $scope.data.responseData.customer["require-approve-code"] == "Y") {
                if ($scope.changIR == true && $scope.isSubIRNo != true && $scope.requestType != 'REMOVE_IRIDD') {
                    $scope.isShowApproveRal = true;
                    $scope.isValidateSave = false;
                } else {
                    $scope.isShowApproveRal = false;
                    if ($scope.requestTypeDB == 'IRIDD' && $scope.requestType == 'REMOVE_IRIDD') {
                        $scope.isValidateSave = true;

                    }

                }

            } else {
                $scope.isValidateSave = true;

            }
        } else {
            $scope.isShowApproveRal = false;
            if ($scope.changIDD == true) {
                if ($scope.requestTypeDB == 'IDD' && $scope.requestType == 'REMOVE_IRIDD') {
                    $scope.isValidateSave = true;

                }
                if ($scope.requestTypeDB == '' && $scope.requestType == 'ADD_IRIDD') {
                    $scope.isValidateSave = true;
                }
            } else {
                $scope.isValidateSave = false;
            }
        }
        $scope.allValidateSave();

    };
    $scope.isProcessApproveCode = true;
    $scope.onCheckValidateApproveCode = function() {
        console.log($scope.isProcessApproveCode);
        if ($scope.isProcessApproveCode) {
            $scope.isProcessApproveCode = false;
            setTimeout(function() {
                $scope.isProcessApproveCode = true;
            }, 1000);
            if ($scope.data.orderRequest['order']['order-items'][0]['order-data']['IR-APPROVE-CODE']) {
                SystemService.showLoading();
                changeIRIDDService.ValidateApproveCodeCallback($scope.data.responseData.customer["installed-products"][0]["company-code"],
                    $scope.data.responseData.customer["installed-products"][0]["account-category"],
                    $scope.data.responseData.customer["id-number"],
                    $scope.data.responseData.customer["customer-level"],
                    "IR",
                    $scope.data.orderRequest['order']['order-items'][0]['order-data']['IR-APPROVE-CODE'],
                    function(resultData) {

                        //console.log(resultData);
                        if (resultData.data.status == "SUCCESSFUL") {
                            $scope.isValidateSave = true;
                            SystemService.hideLoading();
                            //SystemService.showAlert({
                            //    "message": "SUCCESSFUL",
                            //    "message-code": "",
                            //    "message-type": "SUCCESSFUL",
                            //    "en-message": "",
                            //    "th-message": "",
                            //    "technical-message": "changeIRIDDController"
                            //});
                        } else {
                            $scope.isValidateSave = false;
                            //by pass error
                            SystemService.showAlert({
                                "message": resultData.data["display-messages"][0]["message"],
                                "message-code": resultData.data["display-messages"][0]["message-code"],
                                "message-type": "WARNING",
                                "en-message": resultData.data["display-messages"][0]["en-message"],
                                "th-message": resultData.data["display-messages"][0]["th-message"],
                                "technical-message": resultData.data["display-messages"][0]["technical-message"]
                            });
                        }
                        $scope.allValidateSave();
                    });
            }
        }

    };
    ////init();
    //$ngBootbox.customDialog({
    //    templateUrl: 'app/views/ngBootbox-template.html?v=' + runTime,
    //    onEscape: function () {
    //        return false;
    //    },
    //    show: true,
    //    backdrop: false,
    //    closeButton: false,
    //    animate: true
    //});


    //call print
    $scope.attModalVal = "";
    $scope.varPhoto = "";
    var isFocus = false;

    $scope.validateUI = function() {
        var showValidate = function(id, msg) {
            $scope.attModalVal = "";
            if (isFocus) {
                $('#' + id).focus();
                isFocus = false;
                return;
            } else {
                SystemService.showAlert(msg);
                $('#' + id).focus();
            }
        };
        var isNull = function(val) {
            if (val) { // ไม่เป็นค่าว่าง
                return false;
            } else { // เป็นค่าว่าง
                return true;
            }
        }
        var errorAuthorizeID = false;
        var errorAuthorizeName = false;
        if ($('#authorize').prop('checked')) { //กดมอบอำนาจ:
            errorAuthorizeID = isNull($('#CitizenID2').val());
            errorAuthorizeName = isNull($('#authorizeFullName').val());
        }
        var errorFUTURE = false;
        if ($scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-OPTION'] == 'FUTURE') {
            errorFUTURE = isNull($('.dateManual').val());
        }

        console.log(errorAuthorizeID, errorAuthorizeName, errorFUTURE);

        //check error validate 
        if (errorAuthorizeID) {
            showValidate("CitizenID2", ValidateMsgService.data.authorizeIdMsg);
        } else if (errorAuthorizeName) {
            showValidate("authorizeFullName", ValidateMsgService.data.authorizeNameMsg);
        } else if (!SystemService.checkObj($scope.reason, ["id"])) {
            showValidate("selectReasonCode", ValidateMsgService.data.msgReasonCodeEmpty);
        } else if (errorFUTURE) {
            showValidate("txtDateManual", ValidateMsgService.data.effectiveDateMsg);
            return false;
        } else {
            if (isFocus) {
                return false;
            } else {
                //$scope.isValidateSave = false;
                return true;
            }
        }
    };
    $scope.prePrintOrder = function() {
        isFocus = false;
        $scope.printOrder();
    };
    $scope.printOrder = function() {
        $scope.data.orderRequest['approver'] = $scope.approver;
        $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['OFFER-INSTANCE-ID'] = $scope.hybridInstanceID;


        if ($scope.validateUI()) {
            if ($('.dateManual').val()) {
                $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-DATE'] = SystemService.convertDateToEng($('.dateManual').val(), 'ENG');
                $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-OPTION'] = 'FUTURE';
            }
            $scope.data.orderRequest['order']['order-items'][0]['reason-code'] = $scope.reason.id;
            //authen
            if ($('#CitizenID2').val() && $('#authorizeFullName').val()) {
                var authenList = $('#authorizeFullName').val().split(" ");

                $scope.data.orderRequest["order"]["customer"]["customer-agents"] = {
                    "AUTH_1": {
                        "id-number": $('#CitizenID2').val(),
                        "firstname": $('#authorizeFullName').val(),
                        "lastname": $('#authorizeFullName').val()
                    }
                };
            }
            //check offer
            if ($scope.changIDD && !$scope.isSubIDDNo) {
                var ogl = $filter('filter')($scope.data.offerGroupList, {
                    'offer-group': 'IDD'
                });
                //console.log(ogl);
                $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['OFFER-GROUP-IDD'] = ogl[0]["soc-name"];
            }
            if ($scope.changIR) {
                //if (!$scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['OFFER-GROUP-IR']) {
                //    alert('require. OFFER-GROUP-IR');
                //}
                // $scope.irChecked();
                if ($scope.offerGroupIR) {
                    $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['OFFER-GROUP-IR'] = $scope.offerGroupIR;
                } else {
                    $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['OFFER-GROUP-IR'] = $scope.offerGroup;
                }

            }




            //call gen PDF
            {

                $scope.isValidateFF = true;
                $scope.attModalVal = "modal";


                var cardValueData = {
                    //NEW---
                    "photoIdCard": "",

                    //SC=Scan
                    //SN=Snap
                    "photoType": "SN",
                    "titleEn": "",
                    "firstnameEn": "",
                    "lastnameEn": "",
                    "expireDay": "",
                    "birthDay": "",
                    "issueDay": "",

                    "titleTh": "",
                    "firstnameTh": "",
                    "lastnameTh": "",

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
                        "expireDay": $scope.cardInfo.ExpireDay,
                        "birthDay": $scope.cardInfo.BirthDay,
                        "issueDay": $scope.cardInfo.IssueDay,

                        "titleTh": $scope.cardInfo.PrefixTH,
                        "firstnameTh": $scope.cardInfo.FirstNameTH,
                        "lastnameTh": $scope.cardInfo.LastNameTH,

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

                //check เปิดบริการ ยกเลิกบริการ
                var iddStatus = "N";
                var irStatus = "N";
                if ($scope.requestType == "ADD_IRIDD") {
                    if (!$scope.isSubIDDNo) {
                        iddStatus = $scope.changIDD ? "Y" : "N";
                    }
                    if (!$scope.isSubIRNo) {
                        irStatus = $scope.changIR ? "Y" : "N";
                    }

                } else {
                    iddStatus = $scope.changIDD ? "Y" : "N";
                    irStatus = $scope.changIR ? "Y" : "N";
                }
                var customerType = "N";
                if ($scope.data.priceplan['account-category'] == "B" || $scope.data.priceplan['account-category'] == "C") {
                    customerType = "Y";
                }

                var data = {
                    "func": "IR-IDD",
                    "header": {
                        "title-code": $scope.data.responseData.customer["title-code"] ? $scope.data.responseData.customer["title-code"] : "T5",
                        "title": $scope.data.responseData.customer["title"],
                        "firstname": $scope.data.responseData.customer["firstname"],
                        "lastname": $scope.data.responseData.customer["lastname"],
                        "customerType": customerType,
                        "authorizeFullName": $('#authorizeFullName').val(),
                        "id-number": $scope.data.responseData.customer["id-number"],
                        "product-id-number": $scope.SubNo,
                        "ouId": "",
                        "orderId": $scope.data.orderRequest['order']['order-id'],
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
                    "body": {
                        "irIddData": {
                            "irIddType": ($scope.requestType == "ADD_IRIDD" ? "open" : "close"),
                            "iddCheck": iddStatus,
                            "irCheck": irStatus
                        }
                    }
                };
                console.log(data);
                //api generatePDF
                var srcPDF = "";
                SystemService.generatePDF(data, function(result) {
                    var url = result;
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


                });
            }
        }

    };
    $scope.checkHybridStatus = function(accountSubType) {
        setTimeout(function() {
            var x = accountSubType.indexOf('HY');
            if (accountSubType && accountSubType.indexOf('HY') === 0) {
                $scope.onEffectiveDate('NEXT');
                //$('#divEffer').width(250);
                $('#efferNext').removeClass('hidden');
                $('#efferNext').addClass('active');
            } else {
                $('#efferNow').removeClass('hidden');
                $('#efferNext').removeClass('hidden');
                $('#efferManual').removeClass('hidden');
                $('#efferNow').addClass('active');
            }
        }, 1000);
    };
    $scope.checkAccountCategory = function(accountCategory) {
        setTimeout(function() {
            if (accountCategory == 'B' || accountCategory == 'C') {
                $('#efferNow').removeClass('hidden');
                $('#efferManual').removeClass('hidden');
                $('#efferNow').addClass('active');
            } else {
                //$('#divEffer').width(250);
                $('#efferNow').removeClass('hidden');
                $('#efferNow').addClass('active');
            }
        }, 1000);
    };
    $scope.checkCorporate = function(isCorporate) {
        setTimeout(function() {
            $('#divEffer').addClass('divEffer');
            if (isCorporate == true) {
                $('#divEffer').removeClass('divEffer');
                $('#efferNow').removeClass('hidden');
                $('#efferManual').removeClass('hidden');
                $('#efferNow').addClass('active');
            } else {
                $('#efferNow').removeClass('hidden');
                $('#efferNow').addClass('active');
            }
        }, 1000);
    };

    $scope.checkEffectivePrepaid = function(mobileServiceType, accountSubType) {
        setTimeout(function() {
            if (mobileServiceType && mobileServiceType == "PREPAID") {
                //$('#divEffer').width(250);
                $('#efferNow').removeClass('hidden');
                $('#efferNow').addClass('active');
            } else {
                $scope.checkHybridStatus(accountSubType);
            }
        }, 1000);
    };
    $scope.onEffectiveDate = function(method) {
        if (method == 'IMMEDIATE') {
            $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-DATE'] = SystemService.getDateDDMMYYYY("ENG");
            $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-OPTION'] = method;
        }
        if (method == 'NEXTBILL') {
            $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-DATE'] = "";
            $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-OPTION'] = method;
        }
        if (method == 'FUTURE') {
            $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-DATE'] = "";
            $scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['EFFECTIVE-OPTION'] = method;
        }
        //alert($scope.saveData['EFFECTIVE-DATE']+":"+$scope.saveData['EFFECTIVE-OPTION']);
    };
    $scope.onSelectOffer = function() {
        //console.log($scope.data.orderRequest['order']['order-items'][0]['primary-order-data']['OFFER-GROUP-IR']);
        console.log($scope.offerGroup);
    };

    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null';
    setTimeout(function() {
        SystemService.validateNummeric();
    }, 1000);
    $scope.hybridInstanceID = "";
    $scope.onLoad = function() {

        SystemService.showLoading();
        $scope.isAuthorize = false;
        AuthenService.getAuthen(function(result) {
            $scope.getAuthen = result;
            $scope.shopType = result.shopType;

            $scope.checkCorporate($scope.getAuthen['isCorporate']);

            var ch = $scope.getAuthen["channel"] ? $scope.getAuthen["channel"] : "";
            var dl = $scope.getAuthen["shopcodes"] ? $scope.getAuthen["shopcodes"][0] : "";
            SystemService.getOrderId(ch, dl, function(resultOrder) {

                localStorage.setItem('orderId', resultOrder.orderId);
                $scope.orderId = resultOrder.orderId;
                $scope.TrxID = resultOrder.TrxID;
                setTimeout(function() {

                    if ($scope.SubNo == 'null') {

                        $('#dataSubNo').focus();

                    }

                }, 1200);
                if ($scope.SubNo != 'null') {

                    changeIRIDDService.validateIRIDDCallback($scope.SubNo, function(resultData) {
                        $scope.data = resultData;


                        
                        if ($scope.data.status) {
                            console.log(resultData.priceplan['product-properties']['OFFER-INSTANCE-ID']);
                        $scope.hybridInstanceID = resultData.priceplan['product-properties']['OFFER-INSTANCE-ID'];

                        $scope.data2 = resultData;
                            //$scope.data.orderRequest['order']['sale-agent']

                            $scope.data.orderRequest['order']['order-id'] = resultOrder.orderId;
                            $scope.data.orderRequest['ref-id'] = resultOrder.orderId;
                            $scope.data.orderRequest['order']['order-items'][0]['name'] = "ADD_IRIDD";
                            $scope.data.orderRequest['order']['creator'] = $scope.getAuthen["logInName"];
                            $scope.data.orderRequest['user-id'] = $scope.getAuthen["logInName"];
                            $scope.data.orderRequest['order']['sale-agent'] = {
                                "name": $scope.getAuthen["engName"],
                                "channel": $scope.getAuthen["channel"],
                                "partner-code": ($scope.getAuthen["partnerCodes"].length > 0 ? $scope.getAuthen["partnerCodes"][0] : null),
                                "partner-name": $scope.getAuthen["partnerName"],
                                "sale-code": $scope.getAuthen["saleCode"],
                                "sale-assist-code": "",
                                "partner-type": $scope.getAuthen["partnerType"]
                            }




                            setTimeout(function() {
                                //if ($scope.data.installedProduct['offer-group'] && $scope.data.installedProduct['offer-group'].indexOf('|') >= 0) {
                                //    var ogList = $scope.data.installedProduct['offer-group'].split('|');
                                //    for (var i = 0; i < ogList.length; i++) {
                                //        if (ogList[i] == 'IDD') {
                                //            $scope.isSubIDDNo = true;
                                //            $scope.changIDD = true;
                                //            $scope.requestTypeDB = "IDD";
                                //            $('#chkChangIDD').click();
                                //        }
                                //        if (ogList[i] == 'IR') {
                                //            $scope.isSubIRNo = true;
                                //            $scope.changIR = true;
                                //            $scope.requestTypeDB = "IRIDD";
                                //            $('#chkChangeIR').click();
                                //        }
                                //    }
                                //}
                                if ($scope.data.priceplan['account-category'] == "B" || $scope.data.priceplan['account-category'] == "C") {
                                    $('#divShowAuthorize').show();
                                } else {
                                    $('#divShowAuthorize').hide();
                                }

                                //$scope.checkAccountCategory($scope.data.priceplan['account-category']);


                                var insPro = $scope.data.installedProductList;
                                var all = false;
                                for (var i = 0; i < insPro.length; i++) {
                                    if (insPro[i]['offer-group'] == 'IDD') {
                                        $scope.changereqType("ADD_IRIDD");
                                        $scope.changIDD = true;
                                        $scope.requestTypeDB = "IDD";
                                        $scope.changIR = false;
                                        $scope.isSubIRNo = false;
                                        $scope.isSubIDDNo = true;
                                        //$('#chkChangIDD').click();
                                    }
                                    if (insPro[i]['offer-group'] == 'IR') {
                                        $scope.offerGroupIR = insPro[i]['product-name'];
                                        $scope.changereqType("ADD_IRIDD");
                                        $scope.changIR = true;
                                        $scope.requestTypeDB = "IRIDD";
                                        $scope.isSubIRNo = true;
                                        $scope.changIDD = true;
                                        $scope.isSubIDDNo = true;
                                        all = true;
                                        $('#chkChangIDD').click();
                                        $('#chkChangIR').click();
                                        //$scope.irChecked();
                                        break;
                                    }
                                }



                                if (all) {
                                    $scope.requestTypeDB = "IRIDD";

                                    setTimeout(function() {
                                        $('#chkChangIR').click();
                                    }, 1000);
                                } else {
                                    if ($scope.requestTypeDB == "IDD") {

                                        $('#chkChangIDD').click();
                                    }
                                }
                                $scope.isValidateSave = false;
                                ////check partner
                                if ($scope.getAuthen["shopType"] == "1" && $scope.getAuthen["isSecondAuthen"] == false) {
                                    //$scope.data = {};
                                    $('#CitizenID').focus();
                                    $('#btnSSO').hide();
                                }
                                $scope.changereqType("ADD_IRIDD");
                                $('#idBindDataAgain').click();
                                $('#labelAdd').click();

                            }, 1000);



                            if ($scope.shopType == "1") {

                                setTimeout(function() {
                                    //document.getElementById('modalReadCard').click();
                                    $("#btn-fancy-ReadCard").fancybox({
                                        'type': 'div',
                                        width: '50%',
                                        height: '95%',
                                        openEffect: false,
                                        closeEffect: false,
                                        speedIn: 15000,
                                        speedOut: 15000,
                                        autoScale: false,
                                        centerOnScroll: false, // and not 'true',
                                        autoCenter: false, // and not 'true'
                                        autoDimensions: 'false',
                                        resize: 'Auto',
                                        helpers: {
                                            overlay: {
                                                css: {
                                                    'background': 'transparent',
                                                    'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#F22a2a2a,endColorstr=#F22a2a2a)',
                                                    'zoom': '1',
                                                    'background': 'rgba(42, 42, 42, 0.95)'
                                                },
                                                locked: true,
                                                closeClick: false,
                                            }

                                        }
                                    });


                                    //$("#btn-fancy-ReadCard").fancybox().trigger('hide');

                                    $scope.initModalReadCard();
                                    SystemService.calendarDatePicker();
                                }, 500);
                                setTimeout(function() {
                                    $("#btn-fancy-ReadCard").fancybox().trigger('click');
                                    if ($scope.getAuthen["isSecondAuthen"] == false) {
                                        $scope.isNonePartner = false;
                                        $scope.manualInputReadCard();
                                    }
                                }, 1100);



                            } else {
                                $scope.isCustomerProfile = true;
                                $scope.changereqType("ADD_IRIDD");
                                setTimeout(function() {

                                    $('#loadingReadCard2').hide();
                                    $('#unMatch2').hide();
                                    SystemService.calendarDatePicker();

                                }, 500);

                            }
                        } else {
                            $scope.SubNo = "null";
                        }
                    });


                } else {
                    SystemService.hideLoading();
                }


            });
        });
    };
    var runTime = new Date().getTime();
    $scope.template = {

        "header": "app/views/header.html?" + runTime,
        "customerprofile": "app/views/customerprofile.html?" + runTime,
        "effectivepriceplan": "app/views/effectivepriceplan.html?" + runTime,
        "reasonmemo": "app/views/reasonmemo.html?" + runTime

    }

    //start----------- camera ----------------
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

    $scope.cancelChanged = function() {
        closeWP();
        //$window.closed();
    };



    ////validate กรณีมอบอำนาจ
    setTimeout(function() {
        $('#authorize').click(function() {
            $scope.isAuthorize = $('#authorize').prop('checked');
            console.log($('#authorize').prop('checked'));
            $scope.allValidateSave();
        });
        $('#CitizenID2').blur(function() {
            $scope.isCitizenID2 = true;
            $scope.allValidateSave();
        });
        $('#authorizeFullName').blur(function() {
            $scope.allValidateSave();
        });

    }, 3000);


    //// validate ปุ่ม พิมพ์
    $scope.allValidateSave = function() {
        if ($scope.isValidateSave == true) { //กรณีที่: validate save = true
            //if ($('#authorize').prop('checked')) {//กดมอบอำนาจ:
            //    if ($('#CitizenID2').val() && $('#authorizeFullName').val() && $scope.isCitizenID2) {// ไม่เป็นค่าว่าง
            //        $('#btnValidatePrint').prop('disabled', false);
            //    } else {// เป็นค่าว่าง
            //        $('#btnValidatePrint').prop('disabled', true);
            //    }
            //} else {//ไม่กดมอบอำนาจ:
            //    $('#btnValidatePrint').prop('disabled', false);
            //}
            $('#btnValidatePrint').prop('disabled', false);
        } else { //กรณีที่: validate save = false
            $('#btnValidatePrint').prop('disabled', true);
        }
    };
    $scope.onBindDataAgain = function() {};
    //// end validate ปุ่ม พิมพ์

    $scope.afterCloseWarning = function() {

        if ($scope.isValidateSave == false) {
            $('#referralcodes').focus();
            //$scope.data.orderRequest['order']['order-items'][0]['order-data']['IR-APPROVE-CODE'] = "";
            isFocus = false;
        } else {
            isFocus = true;
            $scope.printOrder();
        }

        if ($scope.isNullSubNo && !$scope.data.data.status) {
            $scope.SubNo = 'null';
            // $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 1000);

        } else {

            if(!$scope.data.status){

            }
            //เปิด modal
            if ($scope.shopType == "1" && !$scope.isCustomerProfile) {
                setTimeout(function() {
                    $scope.initModalReadCard();
                }, 500);
                setTimeout(function() {
                    $("#btn-fancy-ReadCard").fancybox().trigger('click');
                    if ($scope.getAuthen["isSecondAuthen"] == false) {
                        $scope.isNonePartner = false;
                        $scope.manualInputReadCard();
                    }
                }, 1000);

            }
        }



    };

});
