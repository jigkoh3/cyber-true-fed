// ---------------------- changeOwnershipPrepaidController.js ----------------------
smartApp.controller('ChangeOwnershipPrepaidController', function(
    $ngBootbox,
    $scope,
    AuthenService,
    SystemService,
    $routeParams,
    ReasonService,
    changeOwnershipPrepaidService,
    ChangePricePlanService,
    paginationService,
    ValidateMsgService,
    $filter,
    $window) {

    var runTime = new Date().getTime();
    $scope.runTime = runTime;
    $scope.template = {
        "header": "app/views/header.html?" + runTime,
        "customerprofile": "app/views/customerprofile.html?" + runTime,
        "reasonmemo": "app/views/reasonmemo.html?" + runTime,
        "modalPricePlan": "app/views/modalPricePlan.html?" + runTime,
        "newparampriceplan": "app/views/newparampriceplan.html?" + runTime,
    }
    $scope.divID = "changeOwnershipPrepaidContent";
    $scope.isReadCardSuccess = false;
    $scope.isAuthorize = false;
    $scope.isMatch = true;
    $scope.isVerify = false; //for demo ============ true
    $scope.isSelectedPricePlan2 = false;

    // $scope.demo = SystemService.demo;
    $scope.demo = true;

    $scope.showApprovCode = false;
    $scope.isCustomerProfile = false;
    $scope.showPricePlanRC = true;

    $scope.isCardValueDataLastest = false;

    $scope.isClickPrint = true;

    $scope.CitizenID = "";
    $scope.isValidateSave = true;
    $scope.isLastestUser = false;
    $scope.isLastestAdress = false;
    $scope.userDealer = false;

    $scope.shopType = "0";
    $scope.propositions = [];
    $scope.approveCode = "";
    $scope.approver = "";

    $scope.attModalVal = "";

    //paging
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.currentPage_cug = 1;
    $scope.pageSize_cug = 10;
    $scope.totalCUG = 10;
    //end paging

    $scope.hideReadCardForMobile = function() {
        SystemService.hideReadCardForMobile();
    };


    var isFocus = false;
    var idFocus = "";


    $scope.secondAuthenData = {};

    $scope.cardType = {
        value: "I"
    };

    setTimeout(function() {
        SystemService.validateNummeric();
    }, 1000);
    //SystemService.genDatePicker();
    SystemService.calendarDatePicker();
    $scope.SetCardValue2 = function(result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + " " + $scope.cardInfo2.LastNameTH);

        //$scope.varCardInfo2.firstName = $scope.cardInfo2.FirstNameTH;
        //$scope.varCardInfo2.lastName = $scope.cardInfo2.LastNameTH;

        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    }

    /*   $scope.defaultNonShop = function() {
           $scope.newOwner.prefixTH = "T5";
           $scope.newOwner.sex = "MALE";
           $scope.titleOther = "แม่ชี";

       }*/

    $scope.ClearTxt = function() {
        $scope.newOwner.firstNameTH = "";
        $scope.newOwner.lastNameTH = "";
        $scope.customer['tax-id'] = "";
        $scope.newOwner.prefixTH = "T4";
        $scope.newOwner.sex = "FEMALE";
        $scope.newOwner.birthDay = "";
        $scope.newOwner.expireDay = "";

        $scope.newOwner2.firstNameTH = "";
        $scope.newOwner2.lastNameTH = "";
        $scope.newOwner2.prefixTH = "T4";
        $scope.newOwner2.sex = "FEMALE";
        $scope.newOwner2.birthDay = "";

        //$scope.partnerCode = "";
        if ($scope.getAuthen) {
            if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length == 1) {
                $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
            } else {
                $scope.partnerCode = "";
            }
        }


        //$scope.subCompanyType = "";
        $scope.setDefaultSubType();

        //$scope.promotion = "";

        $scope.onCheckInputForVerify();

    }


    $scope.readCardError = function(msg) {
        $.fancybox.close();
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": msg,
            "th-message": msg,
            "technical-message": "changeOwnershipPrepaidController"
        });
    };


    $scope.initModalReadCard = function() {
        if ($scope.shopType == "1") {
            if ($scope.shopType == "1" && !$scope.isCustomerProfile && $scope.SubNo != 'null') {
                $("#btn-fancy-ReadCard").fancybox().trigger('click');
            }
            setTimeout(function() {

                $('#loadingReadCard').hide();
                $('#unMatch').hide();
                $('#CitizenID').val('');
                if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                    $('#CitizenID').prop('disabled', false);
                    setTimeout(function() {
                        $('#CitizenID').focus();
                        $('#btnSSO').hide();
                    }, 100);

                } else {
                    if ($scope.getAuthen["isByPassSecondAuthen"] == true) {
                        $('#CitizenID').prop('disabled', false);
                        setTimeout(function() {
                            $('#CitizenID').focus();
                        }, 500);


                    } else {
                        $('#CitizenID').prop('disabled', true);
                    }
                }
            }, 1000);

        }

        setTimeout(function() {
            $('#loadingReadCard2').hide();
            $('#unMatch2').hide();
        }, 1000);


    };

    $scope.newOwnerModalReadCard = function() {
        if ($scope.shopType == "1") {
            if ($scope.shopType == "1" && !$scope.isCustomerProfile && $scope.SubNo != 'null') {
                $("#btn-fancy-ReadCard").fancybox().trigger('click');
            }
            $('#unMatchLastest').hide();
            $('#loadingReadCardLastest').hide();



            $('#CitizenIDLastest').val('');
            if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                $('#CitizenIDLastest').prop('disabled', false);
                setTimeout(function() {
                    $('#CitizenID').focus();
                    $('#btnSSO').hide();
                }, 100);

            } else {
                if ($scope.getAuthen["isByPassSecondAuthen"] == true) {
                    $('#CitizenIDLastest').prop('disabled', false);
                    setTimeout(function() {
                        $('#CitizenIDLastest').focus();
                    }, 500);


                } else {
                    $('#CitizenIDLastest').prop('disabled', true);
                }
            }


        }

        setTimeout(function() {
            $('#loadingReadCard2').hide();
            $('#unMatch2').hide();
        }, 1000);


    };

    $scope.SetCardValue = function(result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        //console.log($scope.cardInfo.CitizenID);
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
        ///$scope.ReadCardMockUp($scope.cardInfo.CitizenID);
        //console.log(result);
        //console.log(result.CitizenID);

    };

    $scope.SetCardValue3 = function(result) {
        $('#loadingReadCard3').hide();
        if (eval(result).CitizenID == $scope.data.customerProfile["id-number"] || $('#CitizenIDLastest').val() == $scope.data.customerProfile["id-number"]) {
            SystemService.showAlert(ValidateMsgService.data.msgDuplicateID);
        } else {
            $scope.isCardValueDataLastest = true;
            $scope.showEnableNewOwnerBirthday = false;
            $scope.showEnableNewOwnerExpireDay = false;
            $scope.cardInfo3 = eval(result);
            console.log($scope.cardInfo3);
            var prefix = "T2";
            if ($scope.cardInfo3.PrefixEN == "Mr.") {
                prefix = "T1";
            }
            if ($scope.cardInfo3.PrefixEN == "Miss") {
                prefix = "T3";
            }

            var sex = "MALE";
            if ($scope.cardInfo3.Sex == "2") {
                sex = "FEMALE";
            }
            $scope.customer['id-number'] = $scope.cardInfo3.CitizenID;
            $('#citizenID3').val($scope.cardInfo3.CitizenID);
            $('#prefixTH3').val(prefix);
            $scope.newOwner.prefixTH = prefix;
            $('#firstNameTH3').val($scope.cardInfo3.FirstNameTH);
            $('#lastNameTH3').val($scope.cardInfo3.LastNameTH);
            $('#birthDay').val($scope.cardInfo3.BirthDay);
            $('#disableNewOwnerBirthday').val($scope.cardInfo3.BirthDay);
            $('#expireDay').val($scope.cardInfo3.ExpireDay);
            $('#disableNewOwnerExpireDay').val($scope.cardInfo3.ExpireDay);
            $('#sex3').val(sex);

            $('#birthDay').removeClass('date-picker');
            $scope.newOwner.firstNameTH = $scope.cardInfo3.FirstNameTH;
            $scope.newOwner.lastNameTH = $scope.cardInfo3.LastNameTH;
            $scope.newOwner2.firstNameTH = $scope.cardInfo3.FirstNameTH;
            $scope.newOwner2.lastNameTH = $scope.cardInfo3.LastNameTH;
            console.log($scope.newOwner.firstNameTH);

            $scope.cardType.value = "I";
            $('#cardType').val('I');

            //binding Tax Id
            $('#taxId3').val($scope.cardInfo3.CitizenID);

            //binding user registerd - ระบุผู้ใช้หมายเลข
            $('#titleRegisterd').val(sex);
            $('#firstNameRegisterd').val($scope.cardInfo3.FirstNameTH);
            $('#lastNameRegisterd').val($scope.cardInfo3.LastNameTH);
            $('#birthDayRegisterd').val($scope.cardInfo3.BirthDay);


            // $scope.newOwner = {
            //    citizenID: $scope.cardInfo3.CitizenID,
            //    prefixTH: 'นาย',
            //    firstNameTH: $scope.cardInfo3.FirstNameTH,
            //    lastNameTH: $scope.cardInfo3.LastNameTH,
            //    prefixEN: $scope.cardInfo3.PrefixEN,
            //    firstNameEN: $scope.cardInfo3.FirstNameEN,
            //    lastNameEN: $scope.cardInfo3.LastNameEN,
            //    sex: $scope.cardInfo3.Sex,
            //    birthDay: $scope.cardInfo3.BirthDay,
            //    issueDay: $scope.cardInfo3.IssueDay,
            //    expireDay: $scope.cardInfo3.ExpireDay,
            // };
            //$scope.onselectPrefix();    
            //console.log($scope.newOwner);
            $scope.onChangeCardTypes();
            $scope.onCheckBlackList();

            setTimeout(function() {
                $scope.onCheckInputForVerify();
                $('#idBindDataAgain').click();
            }, 1000);

            $.fancybox.close();
        }
    };

    $scope.changeType = function(customerType) {
        $scope.customerType = customerType;
        $scope.isVerify = false;
        //$scope.promotion = "";

        if (customerType == 'B' || customerType == 'C') {
            $scope.blah = "P";
        }
    };

    $scope.customerType = "N";
    $scope.data = {};
    $scope.data2 = {};
    $scope.getAuthen = {};
    $scope.isNonePartner = true;
    $scope.saveData = {
        "user-id": ""
    };
    $scope.titleTypeListx = [];
    $scope.cardTypeOptions = [];
    $scope.genderTypeList = [];
    $scope.customer = {
        "id-number": "",
        "language": "TH",
        "branch-code": "00000"
    };

    $scope.isNumberTel = false;
    $scope.onInputTel = function(charCode) {
        console.log($scope.contactNo.number);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberTel = !bool;

        return bool;
    };
    $scope.isNumberTel2 = false;
    $scope.onInputTel2 = function(charCode) {
        console.log($scope.contactNo.number);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberTel2 = !bool;

        return bool;
    };
    $scope.isNumberTelTo = false;
    $scope.onNumberTelTo = function(charCode) {
        console.log($scope.contactNo.number);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberTelTo = !bool;

        return bool;
    };
    // $scope.onInputTel2 = function(charCode) {
    //     console.log($scope.customer['contact-mobile-number']);
    //     var bool = SystemService.checkInputTel(charCode);
    //     $scope.isNumberTel = !bool;

    //     return bool;
    // };

    $scope.isNumberTelZero = false;
    $scope.onInputTelZero = function(charCode) {
        if (!$scope.contactNo.number) {

            $scope.contactNo.number = "";
        }
        if ($scope.contactNo.number.length == 0 && charCode != 48) {
            $scope.isNumberTelZero = true;
            //$scope.contactNo.number = "";
        } else {
            $scope.isNumberTelZero = false;

        }
    };

    $scope.isNumberTelZero2 = false;
    $scope.onInputTelZero2 = function(charCode) {
        if (!$scope.customer['contact-mobile-number']) {

            $scope.customer['contact-mobile-number'] = "";
        }
        if ($scope.customer['contact-mobile-number'].length == 0 && charCode != 48) {
            $scope.isNumberTelZero2 = true;
            //$scope.contactNo.number = "";
        } else {
            $scope.isNumberTelZero2 = false;

        }
    };


    $scope.isNumberTelLength = false;
    $scope.onBlurTel = function() {
        $scope.isNumberTel = false;
        $scope.isNumberTelZero = false;
        if ($scope.contactNo.number) {
            if ($scope.contactNo.number.length == 9 || $scope.contactNo.number.length == 10) {
                $scope.isNumberTelLength = false;
            } else {
                $scope.isNumberTelLength = true;
            }
            console.log($scope.contactNo.number.length);
        }
    }
    $scope.isNumberTelLength2 = false;
    $scope.onBlurTel2 = function() {
        $scope.isNumberTel2 = false;
        $scope.isNumberTelZero2 = false;
        if ($scope.customer['contact-mobile-number']) {
            if ($scope.customer['contact-mobile-number'].length == 10) {
                $scope.isNumberTelLength2 = false;
            } else {
                $scope.isNumberTelLength2 = true;
            }
            console.log($scope.customer['contact-mobile-number'].length);
        }
    }
    $scope.isNumberTelLengthFF = false;
    $scope.onBlurTelFF = function(i) {
        $scope.isNumberFF = false;
        $scope.isNumberTelZeroFF = false;
        //for (var i = 1; i <= 10; i++) {
        if ($scope.saveParamData['ff' + i]) {
            if ($scope.saveParamData['ff' + i].length == 9 || $scope.saveParamData['ff' + i].length == 10) {
                $scope.isNumberTelLengthFF = false;
            } else {
                $scope.isNumberTelLengthFF = true;
                //break;
            }
            console.log($scope.saveParamData['ff' + i].length);
        } else {
            $scope.isNumberTelLengthFF = false;
            //break;
        }
        //}

    }
    $scope.isNumberTelZeroFF = false;
    $scope.onInputTelZeroFF = function(charCode, i) {
        if (!$scope.saveParamData['ff' + i]) {

            $scope.saveParamData['ff' + i] = "";
        }
        if ($scope.saveParamData['ff' + i].length == 0 && charCode != 48) {
            $scope.isNumberTelZeroFF = true;
            //$scope.contactNo.number = "";
        } else {
            $scope.isNumberTelZeroFF = false;

        }
    };

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
    $scope.isChkShopcode = true;
    $scope.chkShopcode = function() {
        if ($scope.getAuthen.shopcodes.length == 1) {
            $scope.isChkShopcode = true;
        } else {
            $scope.isChkShopcode = false;
        }
    }
    $scope.subCompanyType = "FIN";
    $scope.setDefaultSubType = function() {
        if (SystemService.checkObj($scope.data, ["installedProducts", "company-code"])) {
            if ($scope.data.installedProducts["company-code"] == "RM") {
                $scope.subCompanyType = "RPI";
            } else if ($scope.data.installedProducts["company-code"] == "RF") {
                $scope.subCompanyType = "FIN";
            } else {
                $scope.subCompanyType = "";
            }
            setTimeout(function() {
                $scope.onCheckInputForVerify();
                $('#subCompanyType').val($scope.subCompanyType);
            }, 1000);
        }
    }


    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null';
    $scope.onLoadNull = function() {
        $('#loadingReadCard3').hide();
        setTimeout(function() {
            if ($scope.SubNo == 'null') {
                $('#dataSubNo').focus();
            }
        }, 1500);
        AuthenService.getAuthen(function(result) {
            if (result == "ERROR") return;
            $scope.getAuthen = result;
            $scope.chkShopcode();
            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
                //$scope.showDataDealer = true;
            }
            $scope.shopType = $scope.getAuthen["shopType"];
            //$scope.checkUserDealer();
        });
    };
    $scope.onLoad = function() {
        $('#loadingReadCard3').hide();
        AuthenService.getAuthen(function(result) {
            $scope.getAuthen = result;
            $scope.chkShopcode();
            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
            }

            setTimeout(function() {
                if ($scope.SubNo == 'null') {
                    $('#dataSubNo').focus();
                }
            }, 1500);

            //call generate-order-id
            SystemService.showLoading();
            SystemService.getOrderId(result.channel, result.shopcode, function(resultData) {
                localStorage.setItem('orderId', resultData.orderId);
                $scope.TrxID = resultData.TrxID;
                $scope.orderId = resultData.orderId;



                //คำนำหน้า
                SystemService.getMaster_list("CUST-TITLE-TYPE", function(result) {
                    $scope.titleTypeListx = result;
                    if ($scope.getAuthen["shopType"] == "0") {
                        setTimeout(function() {
                            $('#prefixTH3').val('T5');
                        }, 1000);


                    }
                    //console.log($scope.titleTypeListx[4]);
                });
                //คำนำหน้า อื่นๆ
                SystemService.getMaster_list("CUST-TITLE-OTHER-TYPE", function(result) {
                    $scope.titleOtherTypeList = result;

                    if ($scope.getAuthen["shopType"] == "0") {
                        setTimeout(function() {
                            $scope.titleOther = "คุณ";

                            $('#title5').val('คุณ');
                            $scope.onChangeTitleOther();
                        }, 1000);


                    }

                    //console.log($scope.titleOtherTypeList);
                });
                //ประเภทของบัตร
                SystemService.getMaster_list("CUST-ID-TYPE-I", function(result) {
                    $scope.cardTypeOptions = result;
                    //console.log($scope.cardTypeOptions);
                });

                //reason

                //fix COWN : 16/11/2558

                // ReasonService.list("119", function(result) {
                //     // $scope.reasons = result;
                //     // $scope.reason = $scope.reasons[39];
                //     // $scope.selectReason = $scope.reasons[39];

                //     //solution for none fix index
                //     $scope.reasons = result;
                //     var myArray = result;
                //     var searchText = "COWN",
                //         index = -1;
                //     for (var i = 0, len = myArray.length; i < len; i++) {
                //         if (myArray[i].id === searchText) {
                //             index = i;
                //             break;
                //         }
                //     }

                //     console.log(index);

                //     $scope.reason = $scope.reasons[index];
                //     $scope.selectReason = $scope.reasons[index];
                //     //solution for none fix index
                // });

                //เพศ
                SystemService.getMaster_list("CUST-GENDER", function(result) {
                    $scope.genderTypeList = result;
                    //console.log($scope.genderTypeList);
                });
                //call getCUGId
                ChangePricePlanService.getCUGList(function(result) {
                    $scope.cugList = result.data["cug-list"];
                    //alert($scope.cugList.length);
                });


                $scope.shopType = result.shopType;
                $scope.id = $routeParams.id;
                // Check Role User
                $scope.checkUserDealer();
                console.log($scope.userDealer);

                if ($scope.SubNo != 'null') {
                    changeOwnershipPrepaidService.validateChangeOwnershipPrepaidCallback($scope.SubNo, function(result) {
                        // setTimeout(function() {
                        //     SystemService.hideLoading();
                        // }, 2000);
                        if (result.status) {
                            $scope.data = result;
                            $scope.billPayment.smss = $scope.data.installedProducts['product-id-number'];

                            if ($scope.data.installedProducts['company-code'] == "RF") {
                                $scope.promotion = "0022698";
                            } else {
                                $scope.promotion = "0022697";
                            }


                            //$scope.setDefaultSubType();
                            $scope.data2 = result;

                            //console.log($scope.data);

                            if ($scope.shopType == '1') {
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
                                $("#btn-fancy-ReadCardLastest").fancybox({
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


                                setTimeout(function() {
                                    $("#btn-fancy-ReadCard").fancybox().trigger('click');
                                }, 1000);
                                $("#btn-fancy-ReadCardLastest").fancybox().trigger('hide');
                            } else {
                                $scope.isCustomerProfile = true;
                            }

                            $scope.initModalReadCard();
                            //check partner
                            if (!$scope.isNonePartner && $scope.shopType == '1') {
                                //$scope.data = {};
                            }
                        } else {
                            $scope.SubNo = "null";
                        }
                    });
                } else {
                    SystemService.hideLoading();
                }

                if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length == 1) {
                    //$scope.partnerCode = $scope.getAuthen["shopcodes"][0];
                    $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
                } else {
                    $scope.partnerCode = "";
                }




            });



        });
    };

    $scope.disableTaxID = false; //update 20160524 disable field taxid when card type = I
    $scope.onChangeCardTypes = function() {
        console.log($scope.cardType.value);
        if ($scope.cardType.value == "I") {

            $scope.customer['tax-id'] = $scope.customer['id-number'];
            console.log($scope.customer['tax-id'], $scope.customer['id-number']);
            $scope.disableTaxID = true; //update 20160524 disable field taxid when card type = I
        } else {
            $scope.customer['tax-id'] = "0000000000000";
            $scope.disableTaxID = false; //update 20160524 disable field taxid when card type = I
        }
    }
    $scope.onInputShopCode = function() {
        if ($scope.partnerCode && $scope.partnerCode.length == 8) {
            $scope.onCheckShopCode();
        }
    };


    $scope.isNumberVolume = false;
    $scope.onInputVolume = function(charCode) {
        //console.log(charCode);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberVolume = !bool;
        return bool;
    };

    $scope.isNumberMonetary = false;
    $scope.onInputMonetary = function(charCode) {
        //console.log(charCode);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberMonetary = !bool;
        return bool;
    };

    $scope.isNumberOccurrence = false;
    $scope.onInputOccurrence = function(charCode) {
        //console.log(charCode);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberOccurrence = !bool;
        return bool;
    };

    $scope.isNumberDuration = false;
    $scope.onInputDuration = function(charCode) {
        //console.log(charCode);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberDuration = !bool;
        return bool;
    };
    $scope.onCheckShopCode = function() {
        SystemService.showLoading();
        var target = "profiles/partner/validatepartner?function-type=CHANGE_OWNERSHIP&partner-code=" + $scope.partnerCode;
        changeOwnershipPrepaidService.validatePartnerCallback(target, function(result) {
            SystemService.hideLoading();
            if (result.data["display-messages"].length == 0) {
                if ($scope.isLastestUser == true) {
                    $scope.callPropositionList();
                }
                $scope.getAuthen.shopcodes = ["" + $scope.partnerCode + ""];
                $scope.onCheckInputForVerify();
            } else {
                //error ?
                idFocus = "txtPartnerCode";
                $scope.partnerCode = "";
                setTimeout(function() {
                    SystemService.showAlert({
                        "message": result.data["display-messages"][0]["message"],
                        "message-code": result.data["display-messages"][0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": result.data["display-messages"][0]["en-message"],
                        "th-message": result.data["display-messages"][0]["th-message"],
                        "technical-message": result.data["display-messages"][0]["technical-message"]
                    });
                    //$ngBootbox.customDialog($scope.customDialogOptions);
                }, 1000);
            }

        });
    };

    $scope.pricePlan = {
        name: "",
        promotion: "",
        rc: "",
        pricePlanFilter: "",
        saveName: ""
    };
    $scope.isEnterPP = false;
    $scope.openPricePlanDialog = function() {
        $scope.isEnterPP = false;
        //var runTime = new Date().getTime();
        //$ngBootbox.customDialog({
        //    templateUrl: 'app/views/ngBootbox-pricePlan.html?v=' + runTime,
        //    onEscape: function () {
        //        return false;
        //    },
        //    show: true,
        //    backdrop: true,
        //    closeButton: false,
        //    animate: true,
        //    size: 'large'
        //});
        //$scope.pricePlanFilter = $('#ppfilter').val();
        $scope.smartSearchPP($scope.pricePlanFilter.value);
        // var list = $filter('filter')($scope.propositionList, $scope.pricePlanFilter.value);
        var list = $scope.propositionList;
        console.log(list.length, $scope.pricePlanFilter.value);
        if (list.length == 1) {
            $scope.isEnterPP = true;
            $scope.selectedPricePlan(list[0]);
            $scope.selectedPricePlan2();

        }
        if (list.length > 1 && $scope.pricePlanFilter.value) {
            $('#modalnewpriceplan').click();
        }
        if (list.length == 0) {
            idFocus = "ppfilter";
            $scope.pricePlanFilter.value = "";
            SystemService.showAlert(ValidateMsgService.data.pricePlanNotFoundMsg);

        }
    };

    //proposition
    $scope.callPropositionList = function() {
        $scope.promotion = "";
        $scope.isVerify = false;
        if ($scope.partnerCode) {
            var propParam = {
                'company-code': $scope.data.installedProducts["company-code"],
                'customer-type': 'I',
                'propo-type': 'NEW',
                'mobile-servicetype': $scope.data.installedProducts["mobile-servicetype"],
                'partner-code': $scope.partnerCode,
                'privilege': false
                    //,'proposition': ''

            };
            SystemService.showLoading();
            changeOwnershipPrepaidService.propositionCallback(propParam, function(resultProp) {
                SystemService.hideLoading();
                if (resultProp.status) {
                    $scope.propositions = resultProp.data['response-data'];
                }
            });
        }
    };
    //salepriceplan
    $scope.isLoadPricePlan = false;
    $scope.callSalePricePlanList = function() {
        if ($scope.isVerify) {
            SystemService.showLoading();
            var target = "sales/catalog/product/tmv/priceplan/search?" +
                "company-code=" + $scope.data.installedProducts['company-code'] +
                "&customer-type=I" +
                "&customer-subtype=" + $scope.subCompanyType +
                "&service-level=C" +
                //"&proposition=" + $scope.promotion +
                //"&partner-code=" + $scope.partnerCode +//cr01 :: edit :: 11-05-2016
                "&privilege=false";


            changeOwnershipPrepaidService.salePriceplanCallback(target, function(resultGetPriceplan) {
                if (resultGetPriceplan.status) {
                    if (SystemService.checkObj(resultGetPriceplan.data, ["display-messages"]) && resultGetPriceplan.data["display-messages"].length > 0) {
                        //error
                        setTimeout(function() {
                            SystemService.showAlert({
                                "message": resultGetPriceplan.data["display-messages"][0]["message"],
                                "message-code": resultGetPriceplan.data["display-messages"][0]["message-code"],
                                "message-type": "WARNING",
                                "en-message": resultGetPriceplan.data["display-messages"][0]["en-message"],
                                "th-message": resultGetPriceplan.data["display-messages"][0]["th-message"],
                                "technical-message": resultGetPriceplan.data["display-messages"][0]["technical-message"]
                            });
                            //$ngBootbox.customDialog($scope.customDialogOptions);
                        }, 1000);
                    }
                    console.log(target);
                    $scope.propositionList = [];
                    valPricePlans = [];
                    var makeDataPriceplan = function(arr, proName, proCode) {
                        if (arr && arr != undefined && arr != null) {
                            for (var i = 0; i < arr.length; i++) {
                                var item = {
                                    "proposition-code": proCode,
                                    "pricePlan": arr[i]["name"] + " : " + arr[i]["description"],
                                    "promotion": proName,
                                    "rc": arr[i]["rc"],
                                    "priceplans": arr[i],
                                    "saveName": arr[i]["name"]
                                };
                                $scope.propositionList.push(item);
                                valPricePlans.push(item);
                            }
                        }
                    };
                    // var listProp = $filter('filter')($scope.propositions, {
                    //     'proposition-code': $scope.promotion
                    // });

                    //makeDataPriceplan(resultGetPriceplan.data["response-data"], listProp[0]['name'], $scope.promotion);
                    makeDataPriceplan(resultGetPriceplan.data["response-data"], "RMV000000001641", $scope.promotion);


                    console.log($scope.propositionList);
                    $scope.isLoadPricePlan = true;
                    SystemService.hideLoading();

                } else {
                    $scope.propositionList = [];
                    valPricePlans = [];

                    SystemService.hideLoading();
                    //error
                    setTimeout(function() {
                        SystemService.showAlert({
                            "message": resultGetPriceplan.data["display-messages"][0]["message"],
                            "message-code": resultGetPriceplan.data["display-messages"][0]["message-code"],
                            "message-type": "WARNING",
                            "en-message": resultGetPriceplan.data["display-messages"][0]["en-message"],
                            "th-message": resultGetPriceplan.data["display-messages"][0]["th-message"],
                            "technical-message": resultGetPriceplan.data["display-messages"][0]["technical-message"]
                        });
                        //$ngBootbox.customDialog($scope.customDialogOptions);
                    }, 1000);
                }
            });
        }
    };
    $scope.focusPricePlanFilter = function() {
        if (!$scope.isLoadPricePlan) {
            //call Priceplan
            $scope.callSalePricePlanList();
        }
    };
    $scope.setAddress = function(address) {
        $scope.mailAddress.homeNumber = address['number'];
        $scope.mailAddress.moo = address['moo'];
        $scope.mailAddress.village = address['village'];
        $scope.mailAddress.road = address['street'];
        $scope.mailAddress.soi = address['soi'];
        $scope.mailAddress.amphur = address['district'];
        $scope.mailAddress.province = address['province'];
        $scope.mailAddress.buildingName = address['building-name'];
        $scope.mailAddress.buildingRoom = address['building-room'];
        $scope.mailAddress.buildingFloor = address['building-floor'];
        $scope.mailAddress.district = address['sub-district'];
        $scope.mailAddress.postcode = address['zip'];
    };


    //start check input 
    $scope.subCompanyType = "";
    $scope.isAddressList = {};
    $scope.onCheckBlackList = function() {
        var data = {
            "accountCat": "I",
            "channel": "WEBUI",
            "companyCode": "AL",
            "idNumber": $scope.customer['id-number'],
            //"language": null,
            "verifyType": "ALL"
        };
        SystemService.showLoading();
        SystemService.getCustomerPreverify(data, function(result) {
            SystemService.hideLoading();
            var msg = utils.getObject(result, 'display-messages');
            if (msg && msg.length > 0) {
                $scope.isCustomerPreverify = false;
                SystemService.showAlertMulti(msg, "WARNING");
                $scope.customer['id-number'] = "";
                $('#CitizenIDLastest').val('');
                return;
            } else {
                //$scope.isCustomerPreverify = true;
                $scope.onInputCitizenID3();
            }
        });
    };
    $scope.onInputCitizenID3 = function() {
        if ($('#citizenID3').val() == $scope.data.customerProfile["id-number"] || $('#CitizenIDLastest').val() == $scope.data.customerProfile["id-number"]) {
            SystemService.showAlert(ValidateMsgService.data.msgDuplicateID);


            $scope.ClearTxt();
            $scope.customer['id-number'] = "";
            $('#CitizenIDLastest').val('');
            // $('#CitizenIDLastest').focus();

            return;
        }


        //ผู้จดทะเบียนใหม่
        //$scope.customer = customer;
        if (!$scope.isCardValueDataLastest) {
            $('#idBindDataAgain').click();

            $scope.newOwner.firstNameTH = "";
            $scope.newOwner.lastNameTH = "";
            $scope.newOwner.prefixTH = "T2";
            $scope.newOwner.birthDay = "";
            $scope.newOwner.expireDay = "";

            //ระบุผู้ใช้หมายเลข
            $scope.newOwner2.firstNameTH = "";
            $scope.newOwner2.lastNameTH = "";
            $scope.newOwner2.prefixTH = "T2";

            $scope.customer['tax-id'] = "";

            $scope.customer['contact-mobile-number'] = "";
            $scope.customer['contact-email'] = "";


            $scope.contactNo.number = "";
            $scope.contactNo.continued = "";

            $scope.onselectPrefix();




        }

        //$scope.subCompanyType = $scope.data.accountSubtypeList[0]['name'];
        // (Start) Get current SIM data ----------------------
        var formatDate = function(date) {
            if (date) {
                if (date.indexOf("-") >= 0) {
                    var arr = date.split("T");
                    var arrDate = arr[0].split("-");
                    var strDate = arrDate[2] + "/" + arrDate[1] + "/" + (Number(arrDate[0]) + 543);
                    console.log(arrDate);
                    return strDate;

                } else {

                    return date;
                }
                /*if (!date) return date;
                return SystemService.convertDateToTH(moment(date).format('DD/MM/YYYY'), 'TH');*/
            }
            // if (!date) return date;

            // return moment(date).format('DD/MM/YYYY');
        };
        var cid = $('#citizenID3').val();
        if (cid.length == 13 && !SystemService.validatePID(cid)) {
            return;
        }
        if (cid.length >= 3) {
            SystemService.showLoading();
            $scope.callPropositionList();
            $scope.isLastestUser = false;
            $scope.isLastestUser = true;
            $scope.onselectPrefix();
            SystemService.hideLoading();

            $scope.onChangeCardTypes(); //update 20160524 disable field taxid when card type = I
            // });

            // } else {
            //$('#citizenID3').val('');
            //$scope.customer['id-number'] = "";
        }
    };

    //end check input
    //start check input for verify
    $scope.partnerCode = "";
    $scope.isCheckInputForVerify = false;
    $scope.onCheckInputForVerify = function() {
        setTimeout(function() {
            $scope.isCheckInputForVerify = false;
            $scope.newOwner.birthDay = $('#birthDay').val();
            $scope.newOwner.expireDay = $('#expireDay').val();

            console.log($scope.partnerCode, $scope.customer['id-number'], $scope.cardType.value, $scope.newOwner.birthDay, $scope.newOwner.expireDay, $scope.promotion, $scope.subCompanyType);


            if ($scope.partnerCode.length == 8 && $scope.customer['id-number'] && $scope.cardType.value && $scope.newOwner.birthDay && $scope.newOwner.expireDay && $scope.promotion && $scope.subCompanyType) {
                $scope.isCheckInputForVerify = true;
            } else {
                $scope.isCheckInputForVerify = false;
                $scope.isVerify = false;
                $scope.onClearPricePlan();
            }
            $scope.setBirthDateOwner2();
            console.log($scope.isCheckInputForVerify);
            //STR:(CR selected ShopCode 05-04-2016)
            localStorage.setItem('selectedShopCode', $scope.partnerCode);
            //END
            $('#idBindDataAgain').click();
        }, 500);

    };
    //end check input for verify
    $scope.setBirthDateOwner2 = function() {
        $scope.newOwner2.birthDay = $scope.newOwner.birthDay;
    };


    $scope.onInputId = function() {
        console.log($('#CitizenID').val().length);
        var cid = $('#CitizenID').val();

        if (cid.length >= 3) {
            if (cid == $scope.data2.customerProfile["id-number"]) {

                //document.getElementById('btnReadCardClose2').click();
                //$("#btnForm").fancybox().close();
                $scope.isCustomerProfile = true;
                $.fancybox.close();
                $scope.isReadCardSuccess = false;
                $scope.CitizenID = "";
                $scope.showDataDealer = false;


                $scope.data = $scope.data2;
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }

        }
    };
    //--------------------onInputIdLastest
    $scope.onInputIdLastest = function() {
        console.log($('#CitizenIDLastest').val().length);
        var cid = $('#CitizenIDLastest').val();

        if (cid.length >= 3) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);

            $scope.customer['id-number'] = cid;
            $scope.isCardValueDataLastest = false;

            $scope.onCheckBlackList();
        }
    };
    $scope.onInputIdLastestKeyUp = function() {
        console.log($('#CitizenIDLastest').val().length);
        var cid = $('#CitizenIDLastest').val();

        if (cid.length == 13) {
            //setTimeout(function () {
            $.fancybox.close();
            //}, 1000);

            $scope.customer['id-number'] = cid;
            $scope.isCardValueDataLastest = false;

            $scope.onCheckBlackList();

        }
    };
    $scope.onInputIdLastest3 = function() {
        console.log($('#citizenID3').val().length);
        var cid = $('#citizenID3').val();

        if (cid.length >= 3) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);
            $scope.isCardValueDataLastest = false;
            $scope.customer['id-number'] = cid;
            $scope.onCheckBlackList();
        }
    };
    $scope.onInputIdLastestKeyUp3 = function() {
        console.log($('#citizenID3').val().length);
        var cid = $('#citizenID3').val();

        if (cid.length == 13) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);
            $scope.isCardValueDataLastest = false;
            $scope.customer['id-number'] = cid;
            $scope.onCheckBlackList();


        }
    };
    $scope.onChangeShop = function() {

        $scope.callPropositionList();
    };

    $scope.secondAuthenDataLastest = {};
    $scope.openSSOLastest = function() {
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
                    console.log(result);
                    $scope.secondAuthenDataLastest = result;

                    if (result["display-messages"] === undefined) {
                        var res = result["response-data"][0]['authRes'];
                        if (res['responseCode'] == "200") {
                            $('#CitizenIDLastest').prop('disabled', false);
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
                                    "technical-message": "changeOwnershipConroller"
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
                        }, 1200);
                    }
                });

            });
        } else {
            //$scope.isNonePartner = true;
            //$scope.manualInputReadCard();
        }
    };
    $scope.openSSO = function() {
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
                    console.log(result);
                    $scope.secondAuthenData = result;
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
                                    "technical-message": "changeOwnershipConroller"
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
    };


    //$scope.divID = "changeOwnershipContent";
    //$scope.isMatch = true;
    //$scope.isVerify = false;

    //$scope.CitizenID = "";


    ////SystemService.genDatePicker();
    //SystemService.calendarDatePicker();
    //$scope.data = {};

    $scope.blah = "E";
    $scope.dataSlip = {
        "E": "E-Bill-Email",
        "S": "E-Bill-SMS",
        "P": "Bill-Paper",
    };
    $scope.billPayment = {
        email: "",
        smss: "",
        accountLang: "TH"
    };
    $scope.onCheckEmail = function() {
        //SystemService.setValidateEmail($scope.billPayment.email);
        if ($scope.billPayment.email) {
            if (!SystemService.validateEmail($scope.billPayment.email)) {
                idFocus = "idBillPaymentEmail";
                $scope.billPayment.email = "";
                SystemService.showAlert(ValidateMsgService.data.errFormatEmail);
            }
        }
    };
    $scope.onBlurContactEmail = function() {
        if ($scope.customer['contact-email']) {
            if (!SystemService.validateEmail($scope.customer['contact-email'])) {
                idFocus = "txtCustomerContactEmail";
                $scope.customer['contact-email'] = "";
                SystemService.showAlert(ValidateMsgService.data.errFormatEmail);
            }
        }
    };

    ////Gender
    //$scope.genders = [];
    //SystemService.getMaster_list("CUST-GENDER", function (result) {
    //    console.log('SystemService.getMaster_list("CUST-GENDER",');
    //    console.log(result);
    //    $scope.genders = result;
    //});
    $scope.showEnableNewOwnerBirthday = true;
    $scope.showEnableNewOwnerExpireDay = true;
    $scope.newOwner = {
        prefixTH: "T5",
        sex: "MALE"
    };
    $scope.newOwner2 = {
        prefixTH: "T1",
        smsLanguage: "TH",
        firstNameTH: "",
        lastNameTH: "",
        birthDay: "",
        sex: "MALE"
    };

    $scope.titleOther = "";
    $scope.titleOtherTypeList = [];
    $scope.onselectPrefix = function() {
        console.log($scope.newOwner.prefixTH);
        $scope.newOwner2.prefixTH = $scope.newOwner.prefixTH;
        if ($scope.newOwner.prefixTH == 'MR.' || $scope.newOwner.prefixTH == 'T1') {
            $scope.newOwner.sex = "MALE";
            $scope.newOwner2.sex = "MALE";
        } else {
            $scope.newOwner.sex = "FEMALE";
            $scope.newOwner2.sex = "FEMALE";
        }
    };
    $scope.onselectPrefix2 = function() {
        console.log($scope.newOwner2.prefixTH);
        if ($scope.newOwner2.prefixTH == 'MR.' || $scope.newOwner2.prefixTH == 'T1') {
            $scope.newOwner2.sex = "MALE";
        } else {
            $scope.newOwner2.sex = "FEMALE";
        }
    };
    $scope.onChangeTitleOther = function() {
        console.log($scope.titleOther);
        var selectTitleOther = $filter('filter')($scope.titleOtherTypeList, {
            value: $scope.titleOther
        });
        console.log(selectTitleOther[0]);
        if (SystemService.checkObj(selectTitleOther[0], ['attributes', 'GENDER'])) {
            $('#sex3').val(selectTitleOther[0]['attributes']['GENDER']);
            console.log(selectTitleOther[0]['attributes']['GENDER']);
        } else {
            $('#sex3').val('ALL');
            console.log('ALL');
        }
        $scope.newOwner.sex = $('#sex3').val(); //edit 20160525 fixed bug subscriber gender dont chang.
        $scope.titleOther2 = $scope.titleOther;
        $('#sex32').val($('#sex3').val()); //Fix bug sub gender not change when newOwner gender change 20160519
    };

    $scope.onChangeTitleOther2 = function() {
        console.log($scope.titleOther);
        var selectTitleOther2 = $filter('filter')($scope.titleOtherTypeList, {
            value: $scope.titleOther2
        });
        console.log(selectTitleOther2[0]);
        if (SystemService.checkObj(selectTitleOther2[0], ['attributes', 'GENDER'])) {
            $('#sex32').val(selectTitleOther2[0]['attributes']['GENDER']);
            console.log(selectTitleOther2[0]['attributes']['GENDER']);
        } else {
            $('#sex32').val('ALL');
            console.log('ALL');
        }
        // $scope.titleOther2 = $scope.titleOther;
    };


    //$scope.cardType = "0";


    //$scope.subCompanyType = "4";

    //ระบุผู้ใช้บัตร
    $scope.userRegisterd = {
        title: "T2",
        titleOther: "O1",
        firstName: "",
        lastName: "",
        birthDay: "",
        smsLanguage: "TH"
    };



    //Price plan list
    $scope.pricePlanFilter = "";

    $scope.pricePlan = {
        name: "",
        promotion: "",
        rc: "",
        code: ""
    };
    $scope.pricePlan2 = {
        name: "",
        promotion: "",
        rc: "",
        pricePlanFilter: "",
        priceplans: {},
        code: ""
    };

    $scope.isSelectedPricePlan = "";
    $scope.selectedPricePlan = function(pp) {
        $scope.isSelectedPricePlan2 = true;
        //$scope.pricePlanFilter = {};
        $scope.pricePlan2 = {
            name: pp.pricePlan,
            promotion: pp.promotion,
            rc: pp.rc,
            priceplans: pp.priceplans,
            code: pp["proposition-code"],
            saveName: pp.saveName,
            pp: pp
        };
        console.log(pp);
    };

    $scope.selectedPricePlan2 = function() {

        $('#ppfilter').val("");
        $('#ppfilter2').val("");
        $scope.pricePlanFilter = {};

        $scope.isSelectedPricePlan = $scope.pricePlan2.pricePlan;
        $scope.selectProposition = $scope.pricePlan2.code;
        $('#selectProposition').val($scope.selectProposition);
        $scope.pricePlan = {
            name: $scope.pricePlan2.name,
            promotion: $scope.pricePlan2.promotion,
            rc: $scope.pricePlan2.rc,
            pricePlanFilter: "",
            saveName: $scope.pricePlan2.saveName
        };

        //alert($scope.pricePlan.saveName);

        if ($scope.pricePlan2.name) {
            $scope.isValidate = true;
        }

        // $scope.getOfferDetail($scope.pricePlan2.priceplans.soc);
        //$scope.getCapmaxParameter($scope.pricePlan2.priceplans.soc);

    };

    $scope.selectedPricePlan3 = function() {
        $scope.isSelectedPricePlan2 = false;
        if (!$scope.isLoadPricePlan) {
            //call Priceplan
            $scope.callSalePricePlanList();
        } else {
            $scope.smartSearchPP($scope.pricePlanFilter.value);
        }
        $scope.isSelectedPricePlan = false;
        $('.radioPriceplan').prop('checked', false);
    };

    $scope.onClearPricePlan = function() {
        paginationService.setCurrentPage('PPList', 1);
        //$('#ppfilter').val('');
        //$scope.pricePlanFilter.value = "";
        $scope.pricePlan = {};
        $scope.specialOfferType = {
            CUG: false,
            FF: false,
            SA: false,
            POOL: false,
            POOLING: false,
            CAPMAX: false
        };
        $scope.isValidate = false;
        $scope.onCancelCUG();
        //$scope.onCancelFF();
        //$scope.onCancelPOOLED();
        $scope.saveParamData = {};
    };
    $scope.onCancelPricePlan = function() {
        //$('#ppfilter').val("");
        //$('#ppfilter2').val("");
        $scope.pricePlanFilter.value = "";
        console.log($scope.pricePlanFilter.value);
        // $scope.onClearPricePlan();
    };




    //for newparampriceplan : valiable
    $scope.cugList = [];
    $scope.selectCMP = {
        duration: "",
        volume: "",
        occurrence: "",
        monetary: ""
    };
    $scope.saveParamData = {};
    $scope.saveDataCUG = {};
    $scope.ffData = {
        min: 0,
        max: 10
    };
    $scope.parameter = {};
    $scope.saveParamData = {};
    $scope.specialOfferType = {
        CUG: false,
        FF: false,
        SA: false,
        POOL: false,
        POOLING: false,
        CAPMAX: false
    };
    //end newparampriceplan
    //for newparampriceplan : function
    $scope.onModalCUG = function() {
        //$scope.onCancelCUG();
        $scope.isSelectCUGList = false;
        $('.radioCUG').prop('checked', false);
    }

    $scope.onSetValueCUG = function() {
        var s = $scope.selectCUG;
        $scope.saveSelectCUG = s;
        console.log($scope.saveSelectCUG);
        $scope.saveDataCUG = {
            name: $scope.saveSelectCUG['group-id'] + ' : ' + $scope.saveSelectCUG['group-name'],
            id: $scope.saveSelectCUG['group-id']
        };
    };
    $scope.onSelectCUG = function(item) {
        $scope.isSelectCUGList = true;
        console.log(item);
        $scope.selectCUG = item;
    };
    $scope.onCancelCUG = function() {
        $scope.isSelectCUGList = false;
        $scope.saveDataCUG.filter = "";
        $scope.saveDataCUG = {};
        $scope.selectCUG = {};
        $('.radioCUG').prop('checked', false);
    };
    $scope.onFilterCUGId = function() {
        $scope.isSelectCUGList = false;
        if ($scope.saveDataCUG.filter) {
            //$scope.onSearchCUG()
            var list = $filter('filter')($scope.cugList, {
                'group-id': $scope.saveDataCUG.filter
            });
            var list2 = $filter('filter')($scope.cugList, {
                'group-name': $scope.saveDataCUG.filter
            });
            var l = list.length + list2.length;
            //alert(list.length);
            if (l == 1) {
                if (list.length == 1) {
                    $scope.selectCUG = list[0];
                }
                if (list2.length == 1) {
                    $scope.selectCUG = list2[0];
                }

                $scope.onSetValueCUG();
            } else if (l > 1) {
                $('#idModalCUG').click();
            } else {
                SystemService.showAlert(ValidateMsgService.data.cugNotFound);
            }

        }
    };
    $scope.onCheckFF = function() {
        for (var i = 1; i <= $scope.ffData.max; i++) {
            if ($scope.saveParamData["ff" + i]) {
                if ($scope.saveParamData["ff" + i].length < 3) {
                    SystemService.showAlert(ValidateMsgService.data.isDigitSubNo);
                    $scope.saveParamData["ff" + i] = "";
                }
            }
        }
    };
    $scope.isNumberFF = false;
    $scope.onInputFF = function(charCode) {
        //console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            $scope.isNumberFF = true;
            return false;
        } else {
            $scope.isNumberFF = false;
        }
    };

    $scope.clearSP = function() {
        $scope.specialOfferType = {
            CUG: false,
            FF: false,
            SA: false,
            POOL: false,
            POOLING: false,
            CAPMAX: false
        };

        $scope.onCancelCUG();
        //$scope.onCancelFF();
        //$scope.onCancelPOOLED();
        $scope.saveParamData = {};
    };
    $scope.getCapmaxParameter = function(soc) {
        var checkValue = function(capmax) {
            var value = "";
            if (capmax == "0") {
                //value = "0";
                value = "-2";
            } else if (capmax == "-2") {
                //value = "-2";
                value = "-2";
            } else if (capmax == "") {
                value = "hide";
            } else {
                value = "-2";
            }
            return value;
        };
        var checkValueCapmax = function(capmax) {
            var value = "";
            if (capmax == "0") {
                //value = "0";
                value = "-2";
            } else if (capmax == "-2") {
                //value = "-2";
                value = "-2";
            } else if (capmax == "") {
                value = "hide";
            } else {
                value = "";
            }
            return value;
        };
        ChangePricePlanService.getCapmaxParameter(soc, function(result) {
            console.log(result.data);
            $scope.capMaxParameterList = result.data['cap-max-parameter'];

            $scope.parameter = {
                Monetary: checkValue($scope.capMaxParameterList['monetary-capmax']),
                Occurrence: checkValue($scope.capMaxParameterList['occurrence-capmax']),
                Duration: checkValue($scope.capMaxParameterList['duration-capmax']),
                Volume: checkValue($scope.capMaxParameterList['volume-capmax'])
            };
            $scope.saveParamData.Monetary = checkValueCapmax($scope.capMaxParameterList['monetary-capmax']);
            $scope.saveParamData.Occurrence = checkValueCapmax($scope.capMaxParameterList['occurrence-capmax']);
            $scope.saveParamData.Duration = checkValueCapmax($scope.capMaxParameterList['duration-capmax']);
            $scope.saveParamData.Volume = checkValueCapmax($scope.capMaxParameterList['volume-capmax']);

            $scope.capMaxParameterList['durationCapMaxUOMCombo'] = SystemService.convertArray($scope.capMaxParameterList['duration-capmax-uom-combo'], "=");
            $scope.capMaxParameterList['volumeCapMaxUOMCombo'] = SystemService.convertArray($scope.capMaxParameterList['volume-capmax-uom-combo'], "=");

            $scope.capMaxParameterList['durationCapMaxUOM'] = SystemService.searchIdArray($scope.capMaxParameterList['durationCapMaxUOMCombo'], $scope.capMaxParameterList['duration-capmax-uom']);
            $scope.capMaxParameterList['volumeCapMaxUOM'] = SystemService.searchIdArray($scope.capMaxParameterList['volumeCapMaxUOMCombo'], $scope.capMaxParameterList['volume-capmax-uom']);

        });
    };

    $scope.promotion = "";
    $scope.selectedPromotion = function() {
        $scope.pricePlan = {};
        $scope.onCheckInputForVerify();
        $scope.isValidate = false;
        $scope.specialOfferType = {
            CUG: false,
            FF: false,
            SA: false,
            POOL: false
        };

        //var value = $('#selectProposition').val();
        //$scope.propositionList = $filter('filter')(valPricePlans, { "proposition-code": value });

        $scope.callSalePricePlanList();
    };
    $scope.getOfferDetail = function(soc) {
        $scope.clearSP()
        SystemService.showLoading();
        console.log(soc);
        //call offerDetail route 1
        ChangePricePlanService.getOfferDetail(soc, function(resultOfferDetail) {

            if (resultOfferDetail.status) {
                SystemService.hideLoading();
                $scope.offerDetail = resultOfferDetail.data;
                console.log('$scope.offerDetail :::: ');
                console.log($scope.offerDetail);


                var spList = $scope.offerDetail["csm-offer-details"]["csm-related-offer-details"];
                for (var i = 0; i < spList.length; i++) {
                    var sp = spList[i]["special-offer-type"];

                    //SHARE_ALLOWANCE, FriendAndFamily, CUG, POOLED
                    if (sp == 'SHARE_ALLOWANCE' || sp == 'POOLED' || sp == 'POOLING' || sp == 'CAPMAX') {
                        $scope.getCapmaxParameter(spList[i]['code']);
                        $scope.specialOfferType.SA = true;
                        $scope.specialOfferType.POOL = true;
                        $scope.specialOfferType.POOLING = true;
                        $scope.specialOfferType.CAPMAX = true;
                    }
                    if (sp == 'FriendAndFamily') {
                        $scope.specialOfferType.FF = true;
                        var crodList = $filter('filter')($scope.offerDetail["csm-offer-details"]["csm-related-offer-details"], {
                            "special-offer-type": sp
                        });
                        console.log('crodList :::: ');
                        console.log(crodList);
                        var code = crodList[0]["code"];

                        //call offerDetail route 2
                        ChangePricePlanService.getOfferDetail(code, function(resultOfferDetail2) {
                            console.log("resultOfferDetail2 :::: ");
                            console.log(resultOfferDetail2);
                            $scope.offerDetailRoute2 = resultOfferDetail2.data;

                            $scope.ffData = {
                                min: Number(resultOfferDetail2.data['csm-offer-details']['min-ff-number']),
                                max: Number(resultOfferDetail2.data['csm-offer-details']['max-ff-number'])
                            };
                        });

                    }
                    if (sp == 'CUG') {
                        $scope.specialOfferType.CUG = true;
                    }
                }
            } else {
                //error
            }


        });
    };
    ////End pricePlan




    //$scope.titleOther = "0";
    $scope.titleOther2 = "";
    ////End title


    $scope.mailAddress = {
        newss: ''
    };
    $scope.tempCardAddress = {
        newss: ''
    };


    $scope.useAddressAsCard = function(type) {
        if (type == 'H') {
            console.log($scope.cardInfo3);
            //$scope.mailAddress = $scope.tempCardAddress;
            $scope.mailAddress.province = "";
            $scope.mailAddress.amphur = "";
            $scope.mailAddress.district = "";
            $scope.mailAddress.homeNumber = "";
            $scope.mailAddress.moo = "";
            $scope.mailAddress.road = "";
            $scope.mailAddress.soi = "";
            $scope.mailAddress.trok = "";
            $scope.mailAddress.postcode = "";
            $scope.mailAddress.village = "";
            $scope.mailAddress.buildingName = "";
            $scope.mailAddress.buildingRoom = "";
            $scope.mailAddress.buildingFloor = "";


            $scope.mailAddress.province = $scope.cardInfo3.Province;
            $scope.mailAddress.amphur = $scope.cardInfo3.Amphur;
            $scope.mailAddress.district = $scope.cardInfo3.District;
            $scope.mailAddress.homeNumber = $scope.cardInfo3.HomeNumber;
            $scope.mailAddress.moo = $scope.cardInfo3.Moo;
            $scope.mailAddress.road = $scope.cardInfo3.Road;
            $scope.mailAddress.soi = $scope.cardInfo3.Soi;
            $scope.mailAddress.trok = $scope.cardInfo3.Trok;
        } else {
            $scope.billAddress = $scope.tempCardAddress;
        }
    };

    $scope.unUseAddressAsCard = function(type) {
        if (type == 'H') {
            $scope.mailAddress = {};
            $('#ulAddressList').hide();
            $scope.addressList = [];
        } else {
            $scope.billAddress = {};
        }

    };


    $scope.manualInputReadCard = function() {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        //document.getElementById("CitizenID").disabled = false;
        $('#CitizenID').prop('disabled', false);
        setTimeout(function() {
            $('#CitizenID').val('');
            $('#CitizenID').select();
        }, 1100);
        $scope.isManualReadCard = false;
    };




    //var picker = new Pikaday({
    //    field: document.getElementById('startB1'),
    //    format: "DD/MM/YYYY",
    //    i18n: {
    //        previousMonth: 'ย้อนหลัง',
    //        nextMonth: 'ถัดไป',
    //        months: [
    //            'มกราคม',
    //            'กุมภาพันธ์',
    //            'มีนาคม',
    //            'เมษายน',
    //            'พฤษภาคม',
    //            'มิถุนายน',
    //            'กรกฎาคม',
    //            'สิงหาคม',
    //            'กันยายน',
    //            'ตุลาคม',
    //            'พฤศจิกายน',
    //            'ธันวาคม'],
    //        weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    //        weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    //    },

    //    onSelect: function () {
    //        picker2.setMinDate(this.getDate());
    //    }
    //});
    //var picker = new Pikaday({
    //    field: document.getElementById('startB2'),
    //    format: "DD/MM/YYYY",
    //    i18n: {
    //        previousMonth: 'ย้อนหลัง',
    //        nextMonth: 'ถัดไป',
    //        months: [
    //            'มกราคม',
    //            'กุมภาพันธ์',
    //            'มีนาคม',
    //            'เมษายน',
    //            'พฤษภาคม',
    //            'มิถุนายน',
    //            'กรกฎาคม',
    //            'สิงหาคม',
    //            'กันยายน',
    //            'ตุลาคม',
    //            'พฤศจิกายน',
    //            'ธันวาคม'],
    //        weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    //        weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    //    },

    //    onSelect: function () {
    //        picker2.setMinDate(this.getDate());
    //    }
    //});
    //var picker = new Pikaday({
    //    field: document.getElementById('startB3'),
    //    format: "DD/MM/YYYY",
    //    i18n: {
    //        previousMonth: 'ย้อนหลัง',
    //        nextMonth: 'ถัดไป',
    //        months: [
    //            'มกราคม',
    //            'กุมภาพันธ์',
    //            'มีนาคม',
    //            'เมษายน',
    //            'พฤษภาคม',
    //            'มิถุนายน',
    //            'กรกฎาคม',
    //            'สิงหาคม',
    //            'กันยายน',
    //            'ตุลาคม',
    //            'พฤศจิกายน',
    //            'ธันวาคม'],
    //        weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    //        weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    //    },

    //    onSelect: function () {
    //        picker2.setMinDate(this.getDate());
    //    }
    //});
    //var ddd = document.getElementById('start');
    //console.log("dddddddddd : " + ddd);
    //var picker = new Pikaday({
    //    field: document.getElementById('start'),
    //    format: "DD/MM/YYYY",
    //    i18n: {
    //        previousMonth: 'ย้อนหลัง',
    //        nextMonth: 'ถัดไป',
    //        months: [
    //            'มกราคม',
    //            'กุมภาพันธ์',
    //            'มีนาคม',
    //            'เมษายน',
    //            'พฤษภาคม',
    //            'มิถุนายน',
    //            'กรกฎาคม',
    //            'สิงหาคม',
    //            'กันยายน',
    //            'ตุลาคม',
    //            'พฤศจิกายน',
    //            'ธันวาคม'],
    //        weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    //        weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    //    },

    //    onSelect: function () {
    //        picker2.setMinDate(this.getDate());
    //    }
    //});
    //var picker2 = new Pikaday({
    //    field: document.getElementById('end'),
    //    format: "DD/MM/YYYY",
    //    i18n: {
    //        previousMonth: 'ย้อนหลัง',
    //        nextMonth: 'ถัดไป',
    //        months: [
    //            'มกราคม',
    //            'กุมภาพันธ์',
    //            'มีนาคม',
    //            'เมษายน',
    //            'พฤษภาคม',
    //            'มิถุนายน',
    //            'กรกฎาคม',
    //            'สิงหาคม',
    //            'กันยายน',
    //            'ตุลาคม',
    //            'พฤศจิกายน',
    //            'ธันวาคม'],
    //        weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    //        weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    //    },
    //    onSelect: function () {
    //        picker.setMaxDate(this.getDate());
    //    }
    //});

    //var picker = new Pikaday({
    //    field: document.getElementById('startid'),
    //    format: "DD/MM/YYYY",
    //    i18n: {
    //        previousMonth: 'ย้อนหลัง',
    //        nextMonth: 'ถัดไป',
    //        months: [
    //            'มกราคม',
    //            'กุมภาพันธ์',
    //            'มีนาคม',
    //            'เมษายน',
    //            'พฤษภาคม',
    //            'มิถุนายน',
    //            'กรกฎาคม',
    //            'สิงหาคม',
    //            'กันยายน',
    //            'ตุลาคม',
    //            'พฤศจิกายน',
    //            'ธันวาคม'],
    //        weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    //        weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
    //    },

    //    onSelect: function () {
    //        picker2.setMinDate(this.getDate());
    //    }
    //});

    $scope.onChangeSub = function() {
        console.log($scope.subCompanyType);
    };

    $scope.contactNo = {
        number: "",
        continued: ""
    };
    $scope.grade = {};

    $scope.saveOrder = function() {
        SystemService.showLoading();
        if ($scope.shopType == '1') {
            $scope.selectReason.id = "COWN";
        }
        var data = {
            "target": "aftersales/order/submit",
            "order": {
                "order-id": "xxxxxxxxxxxxxxxxxxxADD",
                "creator": "xxxxxxxxxxxxxxxxxxxADD",
                //"create-date": "",
                // "customer": {
                //     "title-code": $scope.newOwner.prefixTH,
                //     "title": $scope.titleOther,
                //     "firstname": $scope.newOwner.firstNameTH,
                //     "lastname": $scope.newOwner.lastNameTH,
                //     "gender": $scope.newOwner.sex,
                //     "id-type": $scope.cardType.value,
                //     "id-number": $('#citizenID3').val(),
                //     "birthdate": SystemService.convertDataThToLongDate($('#birthDay').val()),
                //     "id-expire-date": SystemService.convertDataThToLongDate($('#expireDay').val()),
                //     "contact-number": $scope.contactNo.number + ($scope.contactNo.continued ? ("#" + $scope.contactNo.continued) : ""),
                //     "contact-mobile-number": $scope.customer["contact-mobile-number"],
                //     "contact-email": $scope.customer["contact-email"],
                //     "language": $scope.customer["language"],
                //     "branch-code": $scope.customer["branch-code"],
                //     "tax-id": $scope.customer["tax-id"],
                //     "customer-level": $scope.grade["grade-name"],
                //     //"customer-id": $scope.customerStatusN == 'O' ? $scope.lastestCustomer['customer-id'] : "",
                //     "customer-sublevel_id": $scope.grade["grade-id"],
                //     "customer-sublevel": $scope.grade["grade-sub-name"]
                //         ///check lastest or billadress
                //         ,
                //     "address-list": {
                //         "CUSTOMER_ADDRESS": {
                //             //        "number": "61/268",
                //             //        "moo": "8",
                //             //        "village": "moo ban",
                //             //        "street": "ratchada",
                //             //        "soi": "8",
                //             //        "district": "dindaeng",
                //             //        "province": "Pathumthani",
                //             //        "building-name": "Pakin",
                //             //        "building-room": "22",
                //             //        "building-floor": "13",
                //             //        "sub-district": "Dindaeng",
                //             //        "zip": "22222",
                //             //        "household": "18"
                //         }
                //     }
                //     //"customer-agents": {
                //     //    "AUTH_1": {
                //     //        "contact": "0868836665",
                //     //        "id-number": "9988877688845",
                //     //        "id-type": "I",
                //     //        "firstname": "สมคิด",
                //     //        "lastname": "คิดมากไป",
                //     //        "birthdate": "2015-07-20T00:00:00+0700"
                //     //    }
                //     //,"POA": {
                //     //    "contact": "0868836664",
                //     //    "id-number": "3257588733945",
                //     //    "id-type": "I",
                //     //    "firstname": "สมชาย",
                //     //    "lastname": "ปากสว่าง",
                //     //    "birthdate": "2015-07-20T00:00:00+0700"
                //     //},
                //     //"AUTH_2": {
                //     //    "contact": "0868836666",
                //     //    "id-number": "9988877687723",
                //     //    "id-type": "I",
                //     //    "firstname": "สมฤดี",
                //     //    "lastname": "ดีเกินไป",
                //     //    "birthdate": "2015-07-20T00:00:00+0700"
                //     //}
                //     //}
                // },
                //"sale-agent": {
                //    "name": "Chitchai Changpradist",
                //    "channel": "CM",
                //    "partner-code": "",
                //    "partner-name": "",
                //    "sale-code": "01019580",
                //    "sale-assist-code": "",
                //    "partner-type": ""
                //},
                // "order-items": [{
                //         "name": "CHANGE_OWNERSHIP",
                //         "product-name": $scope.pricePlan.saveName,
                //         "product-id-number": $scope.data.installedProducts["product-id-number"],
                //         "product-id-name": $scope.data.installedProducts["product-id-name"],
                //         "product-category": $scope.data.installedProducts["product-category"],
                //         "product-type": "PRICEPLAN",
                //         "order-type": "CHANGE",
                //         //"reason-code": $scope.selectReason.id,
                //         "reason-code": "COWN",
                //         "user-memo": $scope.saveData.memo ? $scope.getAuthen.logInName + "(" + $scope.getAuthen.saleCode + ": " + $scope.getAuthen.engName + ")" + "(" + "Order ID: " + $scope.orderId + ")" + ": " + $scope.saveData.memo : $scope.getAuthen.logInName + "(" + $scope.getAuthen.saleCode + ": " + $scope.getAuthen.engName + ")" + "(" + "Order ID: " + $scope.orderId + ")" + ": ",
                //         "address-list": {
                //             "BILLING_ADDRESS": {
                //                 "number": $scope.mailAddress.homeNumber,
                //                 "moo": $scope.mailAddress.moo,
                //                 "village": $scope.mailAddress.village,
                //                 "street": $scope.mailAddress.road,
                //                 "soi": $scope.mailAddress.soi,
                //                 "district": $scope.mailAddress.amphur,
                //                 "province": $scope.mailAddress.province,
                //                 "building-name": $scope.mailAddress.buildingName,
                //                 "building-room": $scope.mailAddress.buildingRoom,
                //                 "building-floor": $scope.mailAddress.buildingFloor,
                //                 "sub-district": $scope.mailAddress.district,
                //                 "zip": $scope.mailAddress.postcode,
                //                 "household": ""
                //             }
                //             //,"TAX_ADDRESS": {
                //             //    "number": "61/268",
                //             //    "moo": "8",
                //             //    "village": "moo ban",
                //             //    "street": "ratchada",
                //             //    "soi": "8",
                //             //    "district": "dindaeng",
                //             //    "province": "Pathumthani",
                //             //    "building-name": "Pakin",
                //             //    "building-room": "22",
                //             //    "building-floor": "13",
                //             //    "sub-district": "Dindaeng",
                //             //    "zip": "22222",
                //             //    "household": "18"
                //             //}
                //         },
                //         "order-data": {
                //             //"IMSI": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                //             "MAXALLOW-APPROVE-CODE": $scope.approveCode,
                //             //"MOBILE-SERVICETYPE": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                //             "SUBSCRIBER-TITLE-CODE": $scope.newOwner2.prefixTH,
                //             "SUBSCRIBER-TITLE": $scope.titleOther2,
                //             "SUBSCRIBER-FIRSTNAME": $scope.newOwner2.firstNameTH,
                //             "SUBSCRIBER-LASTNAME": $scope.newOwner2.lastNameTH,
                //             "SUBSCRIBER-BIRTHDATE": SystemService.convertDateToEng($('#birthDayRegisterd').val(), "ENG"),
                //             "SUBSCRIBER-GENDER": $scope.newOwner2.sex,
                //             "SUBSCRIBER-SMS-LANG": $scope.newOwner2.smsLanguage,
                //             "ACCOUNT-BILL-FORMAT": $scope.blah,
                //             "ACCOUNT-EMAIL": $scope.billPayment.email,
                //             "ACCOUNT-SMS-NUMBER": $scope.billPayment.smss,
                //             "ACCOUNT-PAYMENT-METHOD": "CA",
                //             "ACCOUNT-LANG": $scope.billPayment.accountLang,
                //             //"ACCOUNT-BILL-CYCLE": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?

                //             "CHANGE-OPTION": $scope.isLastestAdress ? "EXISTING" : "NEW"
                //         },
                //         "primary-order-data": {
                //             //"CUSTOMER-ID": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                //             "OU-ID": $scope.customerStatusN == 'O' ? $scope.lastestCustomer['installed-products'][0]['ouId'] : "",
                //             "BAN": $scope.customerStatusN == 'O' ? $scope.lastestCustomer['installed-products'][0]['ban'] : "",
                //             "ACCOUNT-CATEGORY": "I",
                //             "ACCOUNT-SUB-TYPE": $scope.subCompanyType,
                //             "COMPANY-CODE": $scope.data.installedProducts["company-code"],
                //             "NAS-PROPOSITION": $scope.selectProposition,
                //             "CCBS-PROPOSITION": $scope.pricePlan.promotion,
                //             "ORIGINAL-OWNER-ID-NUMBER": $scope.data.customerProfile['id-number'],
                //             "ORIGINAL-OWNER-FIRSTNAME": $scope.data.customerProfile['firstname'],
                //             "ORIGINAL-OWNER-LASTNAME": $scope.data.customerProfile['lastname']
                //                 //"SIM": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                //         }
                //     }]
                //,"last-modify-date": ""
            },
            "ref-id": "xxxxxxxxxxxxxxxxxxxADD",
            "user-id": "xxxxxxxxxxxxxxxxxxxADD",
            "approver": $scope.approver
        };


        // data['order']['order-id'] = $scope.orderId;
        // data['ref-id'] = $scope.orderId;
        // data['order']['creator'] = $scope.getAuthen["logInName"];
        // data['user-id'] = $scope.getAuthen["logInName"];
        // data['order']['sale-agent'] = {
        //     "name": $scope.getAuthen["engName"],
        //     "channel": $scope.getAuthen["channel"],
        //     "partner-code": $scope.partnerCode,
        //     "partner-name": $scope.getAuthen["partnerName"],
        //     "sale-code": $scope.getAuthen["saleCode"],
        //     "sale-assist-code": "",
        //     "partner-type": $scope.getAuthen["partnerType"]
        // };


        //approver
        if ($scope.approver) {
            data["approver"] = $scope.approver;
        }

        //authen
        if ($('#CitizenID2').val() && $('#authorizeFullName').val()) {
            var authenList = $('#authorizeFullName').val().split(" ");

            data["order"]["customer"]["customer-agents"] = {
                "AUTH_1": {
                    "id-number": $('#CitizenID2').val(),
                    "firstname": $('#authorizeFullName').val(),
                    "lastname": $('#authorizeFullName').val()
                }
            };
        }


        //call post
        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI',
            'E2E_REFID': $scope.orderId
        };
        console.log(data);
        if ($scope.demo) {
            SystemService.showBeforeClose({
                "message": "รายการคำขอเลขที่ " + $scope.orderId,
                "message2": "ได้รับข้อมูลเรียบร้อยแล้ว"
            });
        } else {
            SystemService.callServicePost(data, headers, function(result) {
                console.log(result);
                //save report to server
                SystemService.saveReportToServer({}, function(resultSaveReport) {});
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
                        "th-message": result.error,
                        "technical-message": ""
                    });
                }
            });
        }



    };

    $scope.varPhoto = "";
    $scope.varPhotoLastest = "";
    $scope.printOrder = function() {

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
        var cardValueDataNew = {
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
        if ($scope.isCardValueDataLastest) {
            cardValueDataNew.photoType = "SC";
            cardValueDataNew.photoIdCard = $scope.cardInfo3.CitizenID;
            cardValueDataNew = {
                //NEW---
                "photoIdCard": $scope.cardInfo3.Photo,

                //SC=Scan
                //SN=Snap
                "photoType": "SC",
                "titleEn": $scope.cardInfo3.PrefixEN,
                "firstnameEn": $scope.cardInfo3.FirstNameEN,
                "lastnameEn": $scope.cardInfo3.LastNameEN,

                "titleTh": $scope.cardInfo3.PrefixTH,
                "firstnameTh": $scope.cardInfo3.FirstNameTH,
                "lastnameTh": $scope.cardInfo3.LastNameTH,

                "expireDay": $scope.cardInfo3.ExpireDay,
                "birthDay": $scope.cardInfo3.BirthDay,
                "issueDay": $scope.cardInfo3.IssueDay,

                //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                "homeNumber": $scope.cardInfo3.HomeNumber,
                "moo": $scope.cardInfo3.Moo,
                "trok": $scope.cardInfo3.Trok,
                "soi": $scope.cardInfo3.Soi,
                "road": $scope.cardInfo3.Road,
                "district": $scope.cardInfo3.District,
                "amphur": $scope.cardInfo3.Amphur,
                "province": $scope.cardInfo3.Province
                    //NEW---
            };

        }
        var customerType = "N";
        if ($scope.data.priceplan['account-category'] == "B" || $scope.data.priceplan['account-category'] == "C") {
            customerType = "Y";
        }
        var newTitle = $filter('filter')($scope.titleTypeListx, {
            'value': $('#prefixTH3').val()
        });
        if (newTitle.length > 0) {
            newTitle = newTitle[0]['th-description'];
            if ($("#prefixTH3").val() == "T5") {
                newTitle = $("#title5 option:selected").val();
            } else {
                newTitle = $("#prefixTH3 option:selected").text();
            }
        } else {
            newTitle = "";
        }


        var data = {
            "func": "COS",
            "header": {
                "title-code": customerType == 'Y' ? "" : $scope.data.customerProfile["title-code"],
                "title": $scope.data.customerProfile["title"],
                "firstname": $scope.data.customerProfile["firstname"],
                "lastname": $scope.data.customerProfile["lastname"],
                "customerType": customerType,
                "authorizeFullName": $('#authorizeFullName').val(),
                "id-number": $scope.data.customerProfile["id-number"],
                "product-id-number": $scope.SubNo,
                "ouId": "",
                "orderId": $scope.orderId,
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
                "cosOldOwnerData": {
                    "title": $scope.data.customerProfile['title'],
                    "firstname": $scope.data.customerProfile['firstname'],
                    "lastname": $scope.data.customerProfile['lastname']
                },
                "cosNewOwnerData": {
                    "title": newTitle,
                    "firstname": $scope.newOwner.firstNameTH,
                    "lastname": $scope.newOwner.lastNameTH,
                    "photo": $scope.varPhotoLastest,
                    "id-number": $scope.customer['id-number'],
                    //NEW---
                    "photoIdCard": cardValueDataNew["photoIdCard"],

                    //SC=Scan
                    //SN=Snap
                    "photoType": cardValueDataNew["photoType"],
                    "titleEn": cardValueDataNew["titleEn"],
                    "firstnameEn": cardValueDataNew["firstnameEn"],
                    "lastnameEn": cardValueDataNew["lastnameEn"],
                    "expireDay": cardValueDataNew["expireDay"],
                    "birthDay": cardValueDataNew["birthDay"],
                    "issueDay": cardValueDataNew["issueDay"],

                    //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                    "homeNumber": cardValueDataNew["homeNumber"],
                    "moo": cardValueDataNew["moo"],
                    "trok": cardValueDataNew["trok"],
                    "soi": cardValueDataNew["soi"],
                    "road": cardValueDataNew["road"],
                    "district": cardValueDataNew["district"],
                    "amphur": cardValueDataNew["amphur"],
                    "province": cardValueDataNew["province"]
                        //NEW---
                }
            }
        };
        console.log($scope.data);
        console.log(data);

        var pdfShopCode = $scope.partnerCode;
        localStorage.setItem('pdfShopCode', pdfShopCode);
        //api generatePDF
        var srcPDF = "";
        SystemService.generatePDF(data, function(result) {
            var url = result;

            SystemService.printPDF(url);
            //printObjectPdf();

            setTimeout(function() {
                var srcPDF = url;
                document.getElementById('iframePDF').src = url + '?clearData=N';
                if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
                    setTimeout(function() {
                        //document.getElementById('iframePDF').src = 'javascript:window.print();'
                        printObjectPdf();
                    }, 2000);
                    setTimeout(function() {
                        document.getElementById('iframePDF').src = srcPDF
                    }, 2500);
                }
            }, 500);


        });
    };



    ////$scope.ucCHecked = true;
    $scope.bantypeMail = false;
    $scope.mootypeMail = false;
    $scope.bantypeBill = false;
    $scope.mootypeBill = false;
    $scope.customerType = "N";
    $scope.changCheckno = false;
    $scope.changOpenserviceN = false;
    $scope.changOpenserviceBC = false;
    $scope.customerStatusN = "O";
    $scope.customerStatusBC = "O";
    $scope.slipType = "H";


    $scope.selectedCompany = '1';
    $scope.selectCompany = function(company) {
        $scope.selectedCompany = company;
    };

    $scope.changecusStatusN = function(customerStatus) {
        if (customerStatus == 'N') {
            $scope.changOpenserviceN = false;
            $scope.mailAddress = {};
            $scope.rowNoSelected = '1';
        } else {
            $scope.setAddress($scope.lastestCustomer['address-list']['CUSTOMER_ADDRESS']);
        }
        $scope.customerStatusN = customerStatus;
    };
    $scope.changecusStatusBC = function(customerStatus) {
        if (customerStatus == 'N') {
            $scope.changOpenserviceBC = false;

        }
        $scope.customerStatusBC = customerStatus;
    };

    $scope.checkOldAddress = function() {
        if ($scope.changOpenserviceN == true)
            if ($scope.rowNoSelected == '1') {
                $scope.mailAddress = $scope.tempOldAddress;
            } else {
                $scope.mailAddress = $scope.tempOtherAddress;
            }

    };

    $scope.changeOldAddress = function(status) {
        if (status) {
            $scope.changOpenserviceN == true;
            $scope.mailAddress = $scope.tempOldAddress;
        } else {
            $scope.rowNoSelected = '1';
            $scope.changOpenserviceN == false;
            $scope.mailAddress = {};
        }
    };

    $scope.changeOldAddressBC = function(status) {
        if (status) {
            $scope.changOpenserviceBC = true;
        } else {
            $scope.changOpenserviceBC = false;
            $scope.mailAddress = {};
            $scope.billAddress = {};
        }
    };

    $scope.rowNoSelected = '1';
    $scope.updateMailAddress = function(rowNo) {
        $scope.rowNoSelected = rowNo;
        if (rowNo == '1') {
            $scope.mailAddress = $scope.tempOldAddress;
        } else {
            $scope.mailAddress = $scope.tempOtherAddress;
        }
    };

    $scope.onVerify = function() {
        SystemService.showLoading();
        var checkMaxAllow = function(result) {
            SystemService.hideLoading();
            console.log(result);
            if (result.data['display-messages'].length > 0 && result.data['display-messages'][0]['message-type'] == 'ERROR') {
                //check maxallow
                if (result.data["display-messages"][0]["message-code"] == 'TMV-PREVERIFY-11010') {
                    $scope.showApprovCode = true;
                    $scope.isVerify = false;
                    idFocus = "approveCode"; //Fix bug program not focus approve code field 20160519
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
                }

            } else {
                $scope.isVerify = true;
                $scope.showApprovCode = false;
            }
        };




        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI',
            'E2E_REFID': $scope.orderId
        };

        var data = {
            target: "profiles/customer/preverify",
            "transactionId": $scope.TrxID,
            //"username": null,
            //"password": null,
            "accountCat": "I",
            "accountType": $scope.subCompanyType,
            // O/M
            //"approveCode": $scope.approveCode,
            "birthDate": SystemService.convertDateToEng($scope.newOwner.birthDay, "ENG"),
            "channel": "WEBUI", //$scope.getAuthen["channel"],
            "companyCode": "AL", //$scope.data.installedProducts["company-code"],
            "dealerCode": $scope.partnerCode,
            //"functionType": null,
            "idNumber": $scope.customer['id-number'],
            "idType": $scope.cardType.value,
            //"isTrueMobile": null,
            //"language": null,
            "propositionId": $scope.promotion,
            //"requestMsisdn": null,
            "requestSubscriber": "1",
            //"reserveMsisdnInfo": null,
            "userLogin": $scope.getAuthen["logInName"]
        };
        if ($scope.approveCode) {
            data["approveCode"] = $scope.approveCode;
        }
        console.log(data);
        //demo
        if ($scope.demo) {
            var result = {};
            var data = {
                "status": "SUCCESSFUL",
                "fault": {
                    "name": "th.co.truecorp.ads.api.ApplicationServiceException",
                    "code": "TMV-PREVERIFY-11010",
                    "message": " VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.].  VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.]",
                    "detailed-message": "ApplicationServiceException TMV-PREVERIFY-11009 VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.]. "
                },
                "display-messages": [{
                    "message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                    "message-code": "TMV-PREVERIFY-11010x",
                    "message-type": "ERROR",
                    "en-message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                    "th-message": "ไม่สามารถเปิดบริการได้ กรุณาแนะนำเจ้าหน้าที่โทรติดต่อ 02-699-6222 (วันจันทร์-เสาร์ เวลา 9.00-18.00)",
                    "technical-message": "null( Message variable: ] ) "
                }],
                "trx-id": "3I1BDOSDXWJN8",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)"
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "trx-id": null,
                "process-instance": null,
                "display-messages": [],
                "response-data": [{
                    "verifyCode": null
                }]
            };
            var data3 = {

                "status": "SUCCESSFUL",

                "fault": {

                    "name": "th.co.truecorp.ads.api.ApplicationServiceException",

                    "code": "TMV-PREVERIFY-11010",

                    "message": " (-8.5-) request and reserve (8) is over max_allow (6).  (-8.5-) request and reserve (8) is over max_allow (6)",

                    "detailed-message": "ApplicationServiceException TMV-PREVERIFY-11010 (-8.5-) request and reserve (8) is over max_allow (6). "

                },

                "display-messages": [{

                    "message": "Your register over maximum 6 numbers. Please call 9700 press 3",

                    "message-code": "TMV-PREVERIFY-11010",

                    "message-type": "ERROR",

                    "en-message": "Your register over maximum 6 numbers. Please call 9700 press 3",

                    "th-message": "ลูกค้าได้ทำการจองเบอร์ และ/หรือมีการเปิดบริการไปครบตามจำนวนที่กำหนดตามประเภทลูกค้าแล้ว         \r\nกรณีที่ลูกค้าต้องการเปิดบริการเพิ่มจะต้องแนบเอกสารเพิ่มเติมด้านล่างมาด้วยอย่างน้อย 1 อย่าง            \r\nประเภทบุคคลธรรมดา (รวมถึงกิจการเจ้าของคนเดียว) : ต้องการจดทะเบียนมากกว่า 3 เครื่อง            \r\n- สำเนาบัญชีเงินฝากออมทรัพย์/ประจำ/กระแสรายวัน ย้อนหลัง 3 เดือนล่าสุด (พร้อมหน้าแรกของสมุดบัญชี)        \r\n- สำเนาใบแจ้งหนี้บัตรเครดิตย้อนหลัง 2 เดือนล่าสุด         \r\n- ใบแจ้งรายได้ประจำเดือนดิต (เดือนล่าสุด)        \r\nทั้งนี้ผลการพิจารณาอนุมัติขึ้นอยู่กับเอกสารเพิ่มเติมดังกล่าวด้วย            \r\nประเภทลูกค้าธุรกิจ: กรณีบริษัทจัดตั้งน้อยกว่า 2 และซื้อเกิน 15 เครื่อง             \r\n        \r\nประเภทลูกค้าธุรกิจ : กรณีซื้อเกิน 25 เครื่อง            \r\n- ให้ติดต่อฝ่ายขายตรงบริษัท ทรู มูฟ จำกัด        \r\nหมายเหตุ:            \r\n1 สำเนาเอกสารทุกฉบับต้องเซ็นรับรองสำเนาถูกต้อง พร้อมประทับตรา (ถ้ามี)        \r\n2 ให้ดีลเลอร์ และทรูมูฟ ช้อป เท่านั้น โทรและแฟกซ์เอกสารเพิ่มเติมมาที่ Referral (ฝ่ายเครดิต) เพื่อขอ \"รหัสอนุมัติ \"(Approved code) ก่อนรับจอง        \r\nเลขหมาย (โทร 0-2647-9700 กด 6, เบอร์โทรสาร 0-2647-9802) หากไม่มี  \"รหัสอนุมัติ \" (Approved code) จะไม่สามารถจดทะเบียนให้ลูกค้าได้            \r\nบริษัทอาจอนุมัติหรือไม่อนุมัติการจองให้กับลูกค้าทั้งนี้ขึ้นอยู่กับการพิจารณาเอกสารดังกล่าวข้างต้น",

                    "technical-message": "null( Message variable: [MAX_ALLOW:6] ) "

                }],

                "trx-id": "3S449PKCJPH8",

                "process-instance": "tmsapnpr1 (instance: SFF_node4)"

            }
            if ($scope.approveCode) {
                result = data2;
            } else {
                result = data3;
            }
            checkMaxAllow({
                status: true,
                data: result,
                error: "",
                msgErr: ""
            });
        } else {
            SystemService.callServicePostByPass(data, headers, function(result) {
                checkMaxAllow(result);
            });
        }

    };
    //address AND PostCodes zipcode
    $scope.addressList = [];
    var tempAddressList = [];
    $scope.selectedAddress = "";
    $scope.pauseAddress = false;
    $scope.isLoadAddress = false;
    var checkNull = function(org, txt) {
        if (txt) {
            if (org) {
                return " " + txt;
            } else {
                return txt;
            }

        } else {
            return "";
        }
    }
    $scope.onEnterAddress = function() {
        if ($scope.addressList.length == 1) {
            $scope.setSearchAddress($scope.addressList[0]);
        }
        if ($scope.addressList.length == 0 && $scope.txtSearchAddress) {
            $scope.onInputAddress();
        }
    };
    $scope.onFocusAddress = function() {
        if ($scope.addressList.length > 0) {
            $('#ulAddressList').show();
        }
    };
    $scope.onBlurAddress = function() {
        $('#ulAddressList').hide();
    };
    var filterAddressList = function(txtSearch) {
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = tempAddressList;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.addressList = arr;
        } else {
            $scope.addressList = $filter('filter')(tempAddressList, txtSearch);
        }



        console.log($scope.addressList.length, txtSearch);
        setTimeout(function() {
            if ($scope.addressList.length == 0) {
                $('#ulAddressList').hide();
            } else {
                $('#ulAddressList').show();
            }
        }, 0);
    };
    $scope.txtSearchAddress = "";
    var accountLang = "TH";
    $scope.onInputAddress = function() {
        $scope.txtSearchAddress = "";
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.postcode);
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.province);
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.amphur);
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.district);
        var target = "profiles/master/address/search?keyword=" + $scope.txtSearchAddress + "&lang=" + $scope.billPayment.accountLang;
        console.log($scope.txtSearchAddress.length, target);
        if ($scope.txtSearchAddress.length >= 3) {
            if (accountLang != $scope.billPayment.accountLang) {
                $scope.pauseAddress = false;
                $scope.isLoadAddress = false;
                accountLang = $scope.billPayment.accountLang;
            }
            if (!$scope.isLoadAddress) {
                //SystemService.showLoading();

                if (!$scope.pauseAddress) {
                    SystemService.getAddressMaster(target, function(result) {
                        //SystemService.hideLoading();

                        if (result.status) {
                            $scope.isLoadAddress = true;
                            $scope.addressList = result.data['response-data'];
                            tempAddressList = result.data['response-data'];

                            if ($scope.addressList.length == 1) {
                                $scope.setSearchAddress($scope.addressList[0]);
                            } else { //Edit 20160526 fix bug change address language
                                var arr = SystemService.filterAddressList(tempAddressList, $scope.txtSearchAddress);
                                if ($scope.addressList.length > 1 && arr.length == 0) {
                                    $scope.isChangeLang = false;
                                    $scope.clearAddress();
                                    $('#ulAddressList').show();
                                    return;
                                }
                            }
                            // =======================================================

                            filterAddressList($scope.txtSearchAddress);
                        }
                    });
                }
                $scope.pauseAddress = true;
            } else {
                filterAddressList($scope.txtSearchAddress);
            }
        } else {
            $scope.pauseAddress = false;
            $scope.isLoadAddress = false;
            $('#ulAddressList').hide();
            $scope.addressList = [];
        }
    };
    //Edit 20160526 fix bug change address language
    $scope.clearAddress = function() {
            $scope.mailAddress.district = "";
            $scope.mailAddress.amphur = "";
            $scope.mailAddress.province = "";
            $scope.mailAddress.postcode = "";
        }
        // ================================================
    $scope.onChangeBillPaymentAccountLang = function() {
        $scope.onInputAddress();
    };
    $scope.setSearchAddress = function(address) {
        console.log(address);
        $scope.mailAddress.province = address['province'];
        $scope.mailAddress.amphur = address['district'];
        $scope.mailAddress.district = address['subdistrict'];
        $scope.mailAddress.postcode = address['zipcode'];
        $('#ulAddressList').hide();
    };
    $scope.onSelectedAddress = function(e) {

        $scope.setSearchAddress($scope.addressList[e]);
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 0);
    };


    //Reasons
    $scope.reasons = [];
    $scope.reason = "";
    $scope.selectReason = {};

    $scope.onReasonChange = function() {
        $scope.selectReason = $scope.reasons[$('#selectReasonId').val()];
        console.log($('#selectReasonId').val(), $scope.selectReason);
    };
    //end reson
    $scope.cancelChanged = function() {
        closeWP();
        //$window.closed();
    };


    $scope.onChangCheckno = function() {
        //alert($scope.changCheckno);
        $('#titleRegisterd').val($('#prefixTH3').val());
        $('#sex32').val($('#sex3').val());
        //$('#sex32').val($scope.newOwner2.sex);
        $scope.onselectPrefix2();

    };

    $scope.openService = function() {
        $scope.changOpenserviceN = true;
    };
    $scope.changCheck = function() {
        $scope.changCheckno = true;
    };

    $scope.slipchangeType = function(Type) {
        $scope.slipType = Type;
    };


    $scope.isCameraLastest = false;
    //start----------- camera ----------------
    $scope.initWebCamNext = function() {
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
    $scope.initWebCam = function() {
        $scope.isCameraLastest = false;
        $scope.initWebCamNext();



    }

    function onCompleteSnap(msg) {
        if ($scope.isCameraLastest) {
            $scope.varPhotoLastest = msg;
        } else {
            $scope.varPhoto = msg;
        }

        var ie_preview_image = $("#ie_preview_image")[0];
        ie_preview_image.src = "data:image/png;base64," + msg;

        webcam.reset();
        $('#btnSavePhoto').show();
    }

    $scope.webcamSnap = function() {
            webcam.snap();
        }
        //end----------- camera ----------------
    $scope.initWebCamLastest = function() {
        $scope.isCameraLastest = true;
        $scope.initWebCamNext();
    }




    //$scope.authorize = function () {
    //    $scope.isAuthorize = true;
    //};
    ////init();
    setTimeout(function() {
        $('#authorize').click(function() {
            $scope.isAuthorize = $(this).prop('checked');
            console.log($(this).prop('checked'));
        });
    }, 3000);

    $scope.checkValidateSave = function() {
        console.log($scope.isAuthorize);
        if ($scope.isAuthorize) {

        }
    };




    var firstValidate = 0;
    $scope.validateUI = function() {
        var isNull = function(txt) {
            if (txt) {
                return false;
            } else {
                return true;
            }
        };
        var countFF = 0;
        $scope.attModalVal = "";
        for (var i = 1; i <= $scope.ffData.max; i++) {
            if ($scope.saveParamData["ff" + i]) {
                countFF++;
            }
        }
        var idFF = "txtFF1";
        for (var i = 1; i <= 10; i++) {
            if ($('#txtFF' + i).val()) {

            } else {
                idFF = "txtFF" + i;
                break;
            }
        }
        var errorFUTURE = false;
        if ($scope.saveData['EFFECTIVE-OPTION'] == 'FUTURE') {
            errorFUTURE = isNull($('.dateManual').val());
        }
        var errorCUG = false;
        if ($scope.specialOfferType.CUG == true) {
            errorCUG = isNull($scope.saveDataCUG.name);
        }
        var errorAuthorizeID = false;
        var errorAuthorizeName = false;
        if ($('#authorize').prop('checked')) { //กดมอบอำนาจ:
            errorAuthorizeID = isNull($('#CitizenID2').val());
            errorAuthorizeName = isNull($('#authorizeFullName').val());
        }
        var showValidate = function(id, msg) {
            idFocus = id;
            SystemService.showAlert(msg);
        };
        var checkCapmaxNull = function(val) {
            if (val == '' || val == 'null') {
                return true;
            } else {
                return false;
            }
        };


        ///start validate capmax
        var errorCapmax = "";
        var errorCapmaxId = "";
        var errorCapmaxMsg = "";
        if ($scope.specialOfferType.POOL == true) {
            if ($scope.parameter.Volume != 'hide' && checkCapmaxNull($scope.saveParamData.Volume)) {
                errorCapmax = "Volume";
                errorCapmaxId = $scope.parameter.Volume == 'null' ? "selectVolume" : "txtVolume";
                errorCapmaxMsg = ValidateMsgService.data.volumeMsg;
            } else if ($scope.parameter.Monetary != 'hide' && checkCapmaxNull($scope.saveParamData.Monetary)) {
                errorCapmax = "Monetary";
                errorCapmaxId = $scope.parameter.Monetary == 'null' ? "selectMonetary" : "txtMonetary";
                errorCapmaxMsg = ValidateMsgService.data.monetaryMsg;
            } else if ($scope.parameter.Occurrence != 'hide' && checkCapmaxNull($scope.saveParamData.Occurrence)) {
                errorCapmax = "Occurrence";
                errorCapmaxId = $scope.parameter.Occurrence == 'null' ? "selectOccurrence" : "txtOccurrence";
                errorCapmaxMsg = ValidateMsgService.data.occurrenceMsg;
            } else if ($scope.parameter.Duration != 'hide' && checkCapmaxNull($scope.saveParamData.Duration)) {
                errorCapmax = "Duration";
                errorCapmaxId = $scope.parameter.Duration == 'null' ? "selectDuration" : "txtDuration";
                errorCapmaxMsg = ValidateMsgService.data.durationMsg;
            }
        }
        ///end validate capmax
        console.log($scope.newOwner.firstNameTH);

        if (errorAuthorizeID) {
            showValidate("CitizenID2", ValidateMsgService.data.authorizeIdMsg);
        } else if (errorAuthorizeName) {
            showValidate("authorizeFullName", ValidateMsgService.data.authorizeNameMsg);
        } else if (isNull($scope.customer['id-number'])) {
            showValidate("citizenID3", ValidateMsgService.data.msgNewCusIDnoEmpty);
        } else if (isNull($scope.newOwner.firstNameTH)) {
            showValidate("firstNameTH3", ValidateMsgService.data.msgNewCusFirstNameEmpty);
        } else if (isNull($scope.newOwner.lastNameTH)) {
            showValidate("lastNameTH3", ValidateMsgService.data.msgNewCusLastNameEmpty);
        } else if ((isNull($scope.newOwner.sex) || isNull($('#sex3').val()))) {
            showValidate("sex3", ValidateMsgService.data.msgNewOwnerGenderEmpty);
        } else if (isNull($scope.pricePlan.name)) {
            showValidate("ppfilter", ValidateMsgService.data.pleaseSelectPP);
        } else if (errorCapmax != "") {
            showValidate(errorCapmaxId, errorCapmaxMsg);
            // } else if (errorCUG) {
            //     showValidate("txtSearchCUG", ValidateMsgService.data.cugMsg);
            // } else if ($scope.specialOfferType.FF && countFF < $scope.ffData.min) {
            //     showValidate(idFF, ValidateMsgService.data.ffMsg);
            //showValidate(idFF, {
            //    "message": "",
            //    "message-code": "",
            //    "message-type": "WARNING",
            //    "en-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
            //    "th-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
            //    "technical-message": "changePricePlanController"
            //});
            // } else if (isNull($scope.newOwner2.firstNameTH)) {
            //     showValidate("firstNameRegisterd", ValidateMsgService.data.msgSubFirstNameEmpty);
            // } else if (isNull($scope.newOwner2.lastNameTH)) {
            //     showValidate("lastNameRegisterd", ValidateMsgService.data.msgSubLastNameEmpty);
            // } else if (isNull($scope.newOwner2.sex) || isNull($('#sex32').val())) {
            //     showValidate("sex32", ValidateMsgService.data.msgSubGenderEmpty);
        } else if (isNull($scope.mailAddress.homeNumber)) {
            showValidate("txtMailAdressHomeNumber", ValidateMsgService.data.msgBillHouseNoEmpty);
        } else if (isNull($scope.mailAddress.moo)) {
            showValidate("txtMailAddressMoo", ValidateMsgService.data.msgBillVillageNoEmpty);
        } else if (isNull($scope.mailAddress.road)) {
            showValidate("txtMailAddressRoad", ValidateMsgService.data.msgBillRoadEmpty);
        } else if (isNull($scope.mailAddress.district)) {
            showValidate("txtMaillAddressDistrict", ValidateMsgService.data.msgBillSubDistrictEmpty);
        } else if (isNull($scope.mailAddress.amphur)) {
            showValidate("txtmailAddressamphur", ValidateMsgService.data.msgBillDistrictEmpty);
        } else if (isNull($scope.mailAddress.province)) {
            showValidate("txtmailAddressprovince", ValidateMsgService.data.msgBillProvinceEmpty);
        } else if (isNull($scope.mailAddress.postcode)) {
            showValidate("txtmailAddresspostcode", ValidateMsgService.data.msgBillZipcodeEmpty);
            // } else if ($scope.blah == 'E' && isNull($scope.billPayment.email)) {
            //     showValidate("idBillPaymentEmail", ValidateMsgService.data.msgBillEmailEmpty);
            // } else if ($scope.blah == 'S' && isNull($scope.billPayment.smss)) {
            //     showValidate("txtBillPaymentSmss", ValidateMsgService.data.msgBillSmsNoEmpty);
            // } else if (isNull($scope.contactNo.number)) {
            //     showValidate("txtcontactNonumber", ValidateMsgService.data.msgCusContractNoEmpty);
            // } else if (errorFUTURE) {
            //     showValidate("txtDateManual", ValidateMsgService.data.effectiveDateMsg);
        } else {
            if ($scope.isClickPrint) {
                $scope.printOrder();
            }

        }
    };
    $scope.noneShopPrint = function() {
        $scope.isClickPrint = true;
        $scope.validateUI();
    };
    $scope.afterCloseWarning = function() {
        $scope.isClickPrint = false;
        isFocus = true;
        $scope.initModalReadCard();
        $('#CitizenIDLastest').focus();
        setTimeout(function() {
            if (idFocus) {
            $('#' + idFocus).focus();
            idFocus = "";
        } else {
            // $scope.validateUI();
        }
        }, 500);
    };

    $scope.checkUserDealer = function() {
        if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == false) {
            $scope.userDealer = true;
            $scope.showDataDealer = true;
        } else {
            $scope.userDealer = false;
            $scope.showDataDealer = false;
        }
    };
    //$scope.init();

    $scope.isNumberTelSms = false;
    $scope.onInputTelSms = function(charCode) {
        console.log($scope.billPayment.smss);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberTelSms = !bool;

        return bool;
    };

    $scope.isNumberTelLengthSms = false;
    $scope.onBlurTelSms = function() {
        $scope.isNumberTelSms = false;
        $scope.isNumberTelZeroSms = false;
        if ($scope.billPayment.smss) {
            if ($scope.billPayment.smss.length == 9 || $scope.billPayment.smss.length == 10) {
                $scope.isNumberTelLengthSms = false;
                $scope.billPayment.smss = '';
            } else {
                $scope.isNumberTelLengthSms = true;
            }
            console.log($scope.billPayment.smss.length);
        }
    }

    $scope.isNumberTelZeroSms = false;
    $scope.onInputTelZeroSms = function(charCode) {
        if (!$scope.billPayment.smss) {
            $scope.billPayment.smss = "";
        }
        if ($scope.billPayment.smss.length == 0 && charCode != 48) {
            $scope.isNumberTelZeroSms = true;
        } else {
            $scope.isNumberTelZeroSms = false;
        }
    };

    $scope.ischkNumber = false;
    $scope.onChkNumber = function() {
        if ($scope.billPayment.smss.charAt(0) != '0') {
            $scope.ischkNumber = true;
            $scope.billPayment.smss = "";
        } else {
            $scope.ischkNumber = false;
        }
    };
    $scope.smartSearchPP = function(txtSearch) {
        $scope.isSelectedPricePlan2 = false;
        // if (txtSearch.indexOf(' ') > 0) {
        //     var txtList = txtSearch.split(' ');
        //     var arr = valPricePlans;
        //     console.log(txtList);
        //     for (var i = 0; i < txtList.length; i++) {
        //         arr = $filter('filter')(arr, txtList[i]);
        //     }
        //     $scope.propositionList = arr;
        // } else {
        //     $scope.propositionList = $filter('filter')(valPricePlans, txtSearch);
        // }

        //update :: 11-05-2016 //xsam32
        $scope.propositionList = SystemService.smartSearch(valPricePlans, txtSearch);
    };

    $scope.newGenderChange = function() {
        $('#sex32').val($scope.newOwner.sex);
        $scope.newOwner2.sex = $scope.newOwner.sex;
    };

    $scope.showOtpAgain = false;
    $scope.showDataOtp = false;
    $scope.otpRequest = function() {
        $scope.showOtpAgain = true;
        SystemService.showLoading();
        setTimeout(function() {
            SystemService.hideLoading();
            $('#idBindDataAgain').click();
            $('#otp').focus();
        }, 1000);


    };

    $scope.chkOtp = function(otp) {
        SystemService.showLoading();
        setTimeout(function() {
            if (otp == "55555") {
                $scope.showDataOtp = true;
            } else {
                $scope.showDataOtp = false;
                SystemService.showAlert({
                    "message": "หมายเลข OTP ไม่ถูกต้อง",
                    "message-code": "",
                    "message-type": "WARNING",
                    "en-message": "Incorrect otp",
                    "th-message": "หมายเลข OTP ไม่ถูกต้อง ",
                    "technical-message": "changeOwnershipPrepaidController"
                });
                setTimeout(function() {
                    $('#btn_ngbOK').focus();
                    idFocus = "otp";
                }, 1000);
            }
            SystemService.hideLoading();
            $('#idBindDataAgain').click();
        }, 1000);
    };
    $scope.chkOtpKeyup = function() {
        var otp = $('#otp').val();
        if (otp.length == 5) {
            $('#otp').blur();
            SystemService.showLoading();
            setTimeout(function() {
                if (otp == "55555") {
                    $scope.showDataOtp = true;
                } else {
                    $scope.showDataOtp = false;
                    SystemService.showAlert({
                        "message": "หมายเลข OTP ไม่ถูกต้อง",
                        "message-code": "",
                        "message-type": "WARNING",
                        "en-message": "Incorrect otp",
                        "th-message": "หมายเลข OTP ไม่ถูกต้อง ",
                        "technical-message": "changeOwnershipPrepaidController"
                    });
                    setTimeout(function() {
                        $('#btn_ngbOK').focus();
                        idFocus = "otp";
                    }, 1000);

                }
                SystemService.hideLoading();
                $('#idBindDataAgain').click();
            }, 1000);

        } else {
            $scope.showDataOtp = false;
        }
    };
});
