// ---------------------- MigratePreToPostIBCController.js ----------------------
smartApp.controller('MigratePreToPostIBCController', function(
    $ngBootbox,
    $scope,
    AuthenService,
    SystemService,
    $routeParams,
    ReasonService,
    migratePreToPostIBCService,
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
    $scope.divID = "migratePreToPostIBCContent";
    $scope.isReadCardSuccess = false;
    $scope.isAuthorize = false;
    $scope.isMatch = true;
    $scope.isVerify = false; //for demo ============ true
    $scope.limitAddressList = SystemService.limitAddressList;
    $scope.isSelectedPricePlan2 = false;
    $scope.clickButtonAddress = false;
    $scope.notLastestCus = true;
    $scope.demo = SystemService.demo;

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
    $scope.customerDealer = false;
    $scope.checkBirthDate = false;
    $scope.checkExpireDate = false;
    $scope.userShop = false;
    $scope.userNonShop = false;

    $scope.attModalVal = "";
    $scope.lastestCustomer = {};
    $scope.clickModalReadCard = false;
    $scope.isUseCardValueData = false;

    $scope.disabledSaleCode = false;
    $scope.txtSaleCode = "";

    //paging
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.currentPage_cug = 1;
    $scope.pageSize_cug = 10;
    $scope.totalCUG = 10;
    //end paging

    $scope.existingPP = false;

    $scope.checkInputDisabledFirstName = true;
    $scope.checkInputDisabledLastName = true;


    var isFocus = false;
    var idFocus = "";


    $scope.secondAuthenData = {};

    $scope.cardType = {
        value: "I"
    };
    $scope.cardTypeBC = {
        value: "C"
    };

    $scope.hideReadCardForMobile = function() {
        SystemService.hideReadCardForMobile();
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

    }


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

        $scope.setDefaultSubType();

    }

    $scope.checkDisableTitle = function() {
        if ($scope.data.customerProfile['title-code']) {
            return true;

        } else {
            return false;
        }

    }

    $scope.isChkShopcode = true;
    $scope.chkShopcode = function() {
        if ($scope.getAuthen.shopcodes.length == 1 && $scope.getAuthen.shopType == '1') {
            $scope.isChkShopcode = true;
        } else {
            $scope.isChkShopcode = false;
        }
    }

    $scope.disableGender = function() {
        if ($scope.newOwner.prefixTH == 'T5') {
            return false;
        } else {
            return true;
        }
    }




    $scope.readCardError = function(msg) {
        $.fancybox.close();
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": msg,
            "th-message": msg,
            "technical-message": "MigratePreToPostIBCController"
        });
    };

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
    };

    $scope.initModalReadCard = function() {
        var startModal = function() {
            $('#loadingReadCard').hide();
            $('#unMatch').hide();
            $('#CitizenID').val('');
            if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                $('#CitizenID').prop('disabled', false);
                setTimeout(function() {
                    $('#CitizenID').focus();
                    $('#btnSSO').hide();
                }, 100);

            } else if ($scope.getAuthen["isSecondAuthen"] == true && $scope.getAuthen["shopType"] == "1" && $scope.getAuthen["isByPassSecondAuthen"] == true) {
                $('#CitizenID').prop('disabled', false);
                setTimeout(function() {
                    $('#CitizenID').focus();
                }, 500);
            } else {
                $('#CitizenID').prop('disabled', true);
            }

        }
        if ($scope.getAuthen["shopType"] == "1" && ($scope.getAuthen["isByPassSecondAuthen"] == true && $scope.getAuthen["isSecondAuthen"] == true) || ($scope.getAuthen["isSecondAuthen"] == false)) {

            setTimeout(function() {
                $('#CitizenID').prop('disabled', false);
                $('#CitizenID').focus();
            }, 500);
        }
        // else {
        //     $('#CitizenID').prop('disabled', true);
        // }
        if ($scope.shopType == "1" && !$scope.isCustomerProfile && $scope.SubNo != 'null') {


            if ($scope.clickModalReadCard) {
                $scope.clickModalReadCard = false;
                if (navigator.userAgent.indexOf('Chrome') > 0) {
                    setTimeout(function() {
                        //$("#btn-fancy-ReadCard").click();
                        startModal();
                    }, 2000);

                } else {
                    $(document).ready(function() {
                        setTimeout(function() {
                            startModal();
                        }, 2000);
                    });
                }
            }

        }

        setTimeout(function() {
            $('#loadingReadCard2').hide();
            $('#unMatch2').hide();
        }, 1000);


    };

    $scope.cardInfo = {};

    $scope.SetCardValue = function(result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        //console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


        if ($scope.cardInfo.CitizenID == $scope.data.customerProfile['id-number']) {
            $scope.isCardValueData = true;
            $scope.isUseCardValueData = true;
            $scope.showDataDealer = false;
            $scope.isReadCardSuccess = true;
            $scope.isCustomerProfile = true;
            $.fancybox.close();
            $scope.cardInfo3 = eval(result);
            console.log($scope.cardInfo3);
            var prefix = "T2";
            if ($scope.cardInfo3.PrefixEN == "Mr.") {
                prefix = "T1";
            }
            if ($scope.cardInfo3.PrefixEN == "Miss") {
                prefix = "T3";
            }
            if ($scope.cardInfo3.PrefixTH == "นาง") {
                prefix = "T2";
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
            $('#titleRegisterd').val(prefix);
            $scope.newOwner2.prefixTH = prefix;
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

            $('#cardType').val('I');
            $scope.customer['tax-id'] = $scope.cardInfo.CitizenID;

            if ($scope.clickButtonAddress == false) {
                $('#useAddressAsCard').click();
            }
            setTimeout(function() {
                $('#idBindDataAgain').click();
            }, 500);
            $('.isCustomerProfile').prop('disabled', false);
        } else {
            $('#unMatch').show();
            $scope.isMatch = false;
        }

    };

    $scope.SetCardValueOnTabI = function() {
        if ($scope.customerType == 'N') {
            $scope.CitizenID = $scope.cardInfo.CitizenID;
            $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


            if ($scope.cardInfo.CitizenID == $scope.data.customerProfile['id-number']) {
                $scope.isCardValueData = true;
                $scope.isUseCardValueData = true;
                $scope.showDataDealer = false;
                $scope.isReadCardSuccess = true;
                $scope.isCustomerProfile = true;
                $scope.cardInfo3 = $scope.cardInfo;
                console.log($scope.cardInfo3);
                var prefix = "T2";
                if ($scope.cardInfo3.PrefixEN == "Mr.") {
                    prefix = "T1";
                }
                if ($scope.cardInfo3.PrefixEN == "Miss") {
                    prefix = "T3";
                }
                if ($scope.cardInfo3.PrefixTH == "นาง") {
                    prefix = "T2";
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

                $('#cardType').val('I');
                $scope.customer['tax-id'] = $scope.cardInfo.CitizenID;

                if ($scope.clickButtonAddress == false) {
                    $('#useAddressAsCard').click();
                }
                setTimeout(function() {
                    $('#idBindDataAgain').click();
                }, 500);
                $('.isCustomerProfile').prop('disabled', false);
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }
        }

    };

    $scope.SetCardValue3 = function(result) {
        $('#loadingReadCard3').hide();
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

        $scope.onInputCitizenID3();
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 1000);

        $.fancybox.close();
    };
    $scope.checkAuthorize = function(type) {
        setTimeout(function() {
            if (type == "I" || type == "P") {
                //hide มอบอำนาจ
                $('#divShowAuthorize').hide();
            } else {
                //show มอบอำนาจ
                $('#divShowAuthorize').show();
            }
            //edit 07-04-2016
            $('#divShowAuthorize').hide();
        }, 1100);
    };

    $scope.changeType = function(customerType) {
        $scope.customerType = customerType;
        $scope.isVerify = false;
        $scope.promotion = "";

        //xxxxxx ShowAuthorize
        $scope.isAuthorize = false;
        $scope.CitizenID2 = "";
        $scope.authorizeFullName = "";
        //$('#divShowAuthorizeID').hide();
        $('#loadingReadCard3').hide();
        $('#authorize').prop("checked", false);

        if (customerType == 'B' || customerType == 'C') {

            //CR02
            $scope.blah = "PS";
            if ($scope.getAuthen['shopType'] == '0') {
                $scope.getBillCycleList();
            }

        } else {
            //
        }


        //ST: clear input
        $scope.clearInputIBC();
        //EN: clear input
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

    // $scope.disableIdType = false;
    $scope.valueIdType = function() {

        if ($scope.cardType.value) {
            // $scope.disableIdType = true;
            return true;
        } else {
            // $scope.disableIdType = false;
            return false;
        }


    }


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

    $scope.checkPrefixT5 = function() {
        if ($scope.newOwner.prefixTH == 'T5')
            return true;
    }

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
        $scope.autoHideNumberSubNo = false;
        return bool;
    }

    //START: CR02 -- 18/01/2016
    $scope.promotionLevel = "SUB";
    $scope.isCustomerPreverify = false;
    $scope.isAuthorizeBC = false;
    $scope.bcName = "";
    $scope.bcName2 = "";
    $scope.accountID_root = "";
    $scope.accountID_child = "";
    $scope.billCycleList = [];
    $scope.billCycleSelected = "null";

    $scope.isNewCustomer = false;
    $scope.isNewCustomerI = false;
    $scope.customSelectBC = "CUSTOMER";

    $scope.auth_1 = {
        "contact": "0868836665",
        "id-number": "9988877688845",
        "id-type": "I",
        "firstname": "DEMO",
        "lastname": "DEMO",
        "birthdate": "2015-07-20T00:00:00+0700"
    };
    $scope.poa_1 = {
        "contact": "0868836665",
        "id-number": "9988877688845",
        "id-type": "I",
        "firstname": "DEMO",
        "lastname": "DEMO",
        "birthdate": "2015-07-20T00:00:00+0700"
    };
    $scope.clearDataAccount = function() {
        $scope.promotionLevel = 'SUB';
        $scope.clearAccount();
        if ($scope.isLastestAdress == true) {
            $scope.changOpenserviceBC = 'L';
        }
        $scope.isNewCustomer = false;
    };
    $scope.clearInputIBC = function() {
        $scope.ClearTxt();
        $scope.auth_1 = {};
        $scope.poa_1 = {};
        $scope.isCustomerPreverify = false;
        $scope.isCheckInputForVerify = false;
        $scope.showApprovCode = false;
        $scope.isAuthorizeBC = false;
        $scope.isLastestUser = false;
        $scope.isVerify = false;
        firstValidate = 0; //update 20160524
        $scope.isAccount_child = false;
        $scope.isAccount_root = false;

        $scope.isLoadPricePlan = false;
        $scope.propositionList = [];
        valPricePlans = [];

        $scope.isAccountPreverify = false;
        //$scope.customer['id-number'] = "";

        //// clear for sale-code
        $scope.propositions = [];
        if ($scope.getAuthen['userGroup'] == 'ADMIN') {
            $scope.partnerCode = "";
            $scope.txtSaleCode = "";
            $scope.getAuthen['showThaiName'] = "";
        }


        //update 20160524
        if ($scope.customerType != 'N') {
            $scope.customer['branch-code'] = "";
        } else {
            $scope.customer['branch-code'] = "00000";
        }
        // =========================================================
        $scope.customer['tax-id'] = "";
        $scope.bcName = "";
        $scope.bcName2 = "";

        $scope.slipType = 'H';

        // clear searchAddress
        $scope.pauseAddress = false;
        $scope.isLoadAddress = false;
        $('#ulAddressList').hide();
        $scope.addressList = [];

        $scope.unUseAddressMailBC();
        $scope.unUseAddressAsCard('H');

        $scope.dataAccountPreverify = {};
        $scope.subCompanyType = "";

        $scope.billPayment.preferedContace = "*";

        $scope.billPayment.email = "";
        $scope.billPayment.smss = $scope.SubNo;
        $scope.billPayment.accountLang = "TH";

        $scope.contactNo = {
            number: "",
            continued: ""
        };

        $scope.customer['contact-mobile-number'] = "";
    };
    $scope.getAccountCat = function() {
        var accountCat = 'I';
        if ($scope.customerType == 'B' || $scope.customerType == 'C') {
            accountCat = $scope.customerType;
        }
        return accountCat;
    };
    $scope.onInputIdBC = function() {
        $scope.promotion = "";
        if ($scope.isCustomerPreverify == true) {
            $scope.clearInputIBC();
        }
        var data = {
            "accountCat": $scope.getAccountCat(),
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
                $scope.customer['id-number'] = "";
                SystemService.showAlertMulti(msg, "WARNING");

            } else {
                //$scope.isCustomerPreverify = true;
                $scope.onInputCitizenID3();
            }
        });
    };
    $scope.setFreeReadCard = '';
    $scope.freeReadCard = function(result) {
        var cardInfo = eval(result);

        if ($scope.setFreeReadCard == 'auth_1') {
            $scope.auth_1['id-number'] = cardInfo.CitizenID;
            $scope.auth_1['firstname'] = cardInfo.FirstNameTH;
            $scope.auth_1['lastname'] = cardInfo.LastNameTH;
        }
        if ($scope.setFreeReadCard == 'poa_1') {
            $scope.poa_1['id-number'] = cardInfo.CitizenID;
            $scope.poa_1['firstname'] = cardInfo.FirstNameTH;
            $scope.poa_1['lastname'] = cardInfo.LastNameTH;
        }
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 500);
    };
    $scope.isAccount_root = false;
    $scope.isAccount_child = false;

    $scope.showPPParentOU = false;
    $scope.dataAccountPreverify = {};
    $scope.isAccountPreverify = false;
    $scope.validateCustomerIDData = {};

    $scope.showRequirePP = true;
    $scope.PPTypeId = "N";

    $scope.onChangePPTypeId = function() {
        console.log($scope.PPTypeId);
    };
    var testID = "";
    var testLevel = "";
    $scope.onEnterAccountPreverify = function(level, id) {
        if (!id) return;
        if (testID == id && testLevel == level) {
            return;
        } else {
            testID = id;
            testLevel = level;
        }
        if (level == 'ROOT') {
            SystemService.showLoading();
            var data = {
                "customer-type": $scope.getAccountCat(),
                "customer-id": id,
                "id-number": $('#idNumberBC').val()

            };
            $scope.isAccountPreverify = false;
            $scope.validateCustomerIDData = {};
            migratePreToPostIBCService.validateCustomerIDCallback(data, function(result) {
                SystemService.hideLoading();
                console.log(result);
                var msg = utils.getObject(result.data, 'display-messages');
                if (msg && msg.length > 0) {
                    //// ??? :: 02-08-2016 :: xsam32
                    // $scope.isCustomerPreverify = false;
                    $scope.accountID_root = "";
                    idFocus = "accountID_root";
                    SystemService.showAlert({
                        "message": msg[0]["message"],
                        "message-code": msg[0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": msg[0]["en-message"],
                        "th-message": msg[0]["th-message"],
                        "technical-message": msg[0]["technical-message"]
                    });
                } else {
                    $scope.validateCustomerIDData = result.data['response-data']['customer'];
                    $scope.isAccountPreverify = true;
                    $scope.isAccount_root = true;
                }
            });
        } else { // CHILD
            SystemService.showLoading();
            var data = {
                "customer-type": $scope.getAccountCat(),
                "company-code": $scope.data.installedProducts['company-code'],
                "account-sub-type": $scope.subCompanyType,
                "account-id": id,
                "customer-id": $scope.accountID_root,
                "id-number": $scope.customer['id-number']
            };
            $scope.isAccountPreverify = false;
            migratePreToPostIBCService.validateAccountIDCallback(data, function(result) {
                SystemService.hideLoading();
                console.log(result);
                var msg = utils.getObject(result.data, 'display-messages');
                if (msg && msg.length > 0) {
                    //// ??? :: 02-08-2016 :: xsam32
                    //$scope.isCustomerPreverify = false;
                    $scope.accountID_child = "";
                    idFocus = "accountID_child";
                    SystemService.showAlert({
                        "message": msg[0]["message"],
                        "message-code": msg[0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": msg[0]["en-message"],
                        "th-message": msg[0]["th-message"],
                        "technical-message": msg[0]["technical-message"]
                    });
                } else {
                    $scope.dataAccountPreverify = result.data['response-data']['customer'];
                    $scope.isAccountPreverify = true;
                    $scope.isAccount_child = true;
                    if ($scope.accountID_root == "") {
                        //$scope.accountID_root = $scope.lastestCustomer['installed-products'][0]['ban'];
                        $scope.accountID_root = $scope.dataAccountPreverify["customer-id"];
                    }
                    //check ParentOU Level & SelectedOU Level
                    if ($scope.dataAccountPreverify["installed-products"][0]['product-properties']["REQUIRE-PRICEPLAN"] == "NOT REQUIRE") {
                        $scope.existingPP = true;
                        $scope.showPPParentOU = true;
                        $scope.pricePlan2.priceplans.soc = $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-SOC-CODE'];
                        $scope.pricePlan.name = $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-PRICEPLAN'] +
                            ": " +
                            $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-PRICEPLAN-DESCRIPTION'];
                        //// for product-name :: ??? :: 12-07-2016 :: xsam32
                        $scope.pricePlan.saveName = $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-PRICEPLAN'];
                    } else {
                        $scope.showPPParentOU = false;
                        $scope.existingPP = false;
                    }
                    if ($scope.dataAccountPreverify["installed-products"][0]['product-properties']["REQUIRE-PRICEPLAN"] == "NOT REQUIRE" || $scope.dataAccountPreverify["installed-products"][0]['product-properties']["REQUIRE-PRICEPLAN"] == "REQUIRE") {
                        $scope.existingPP = true;
                    } else {
                        $scope.showRequirePP = false;
                        if ($scope.dataAccountPreverify["installed-products"][0]['product-properties']["REQUIRE-PRICEPLAN"] == "OPTIONAL") {
                            $scope.pricePlan2.priceplans.soc = $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-SOC-CODE'];
                            console.log($scope.pricePlan2.priceplans.soc, $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-SOC-CODE']);
                            $scope.existingPP = true;
                            $scope.pricePlan.name = $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-PRICEPLAN'] +
                                ": " +
                                $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-PRICEPLAN-DESCRIPTION'];
                            //// for product-name :: ??? :: 12-07-2016 :: xsam32
                            $scope.pricePlan.saveName = $scope.dataAccountPreverify["installed-products"][0]['product-properties']['ACCOUNT-PRICEPLAN'];
                        }
                    }

                    // var requirePP = $scope.dataAccountPreverify["installed-products"][0]['product-properties']["REQUIRE-PRICEPLAN"];
                    // if (requirePP == "NOT REQUIRE") {
                    //     //
                    // } else if (requirePP == "OPTIONAL") {
                    //     //
                    // } else if (requirePP == "REQUIRE") {
                    //     //
                    // } else {
                    //     //
                    // }
                    //build BILLING_ADDRESS here ::

                }
            });
        }

    };
    $scope.onChangeAccountPreverify = function(level) {
        $scope.isAccountPreverify = false;
        $scope.showPPParentOU = false;
        $scope.dataAccountPreverify = {};
        $scope.onClearPricePlan();
        if (level == 'CHILD') {
            if ($scope.isAccount_child) {
                $scope.isAccount_child = false;
                //$scope.accountID_child = "";
            }
        } else {
            if ($scope.isAccount_root) {
                $scope.isAccount_child = false;
                $scope.accountID_child = "";

                $scope.isAccount_root = false;
                //$scope.accountID_root = "";
            }

        }
    };
    $scope.clearOnChangeLevel = function() {
        $scope.isLoadPricePlan = false;
        $scope.propositionList = [];
        valPricePlans = [];
        $scope.onClearPricePlan();
    };
    $scope.clearAccount = function() {
        $scope.isAccountPreverify = false;
        $scope.onClearPricePlan();
        $scope.dataAccountPreverify = {};

        $scope.isAccount_child = false;
        $scope.accountID_child = "";
        $scope.isAccount_root = false;
        $scope.accountID_root = "";

        $scope.showPPParentOU = false;
        $scope.showRequirePP = true;

        $scope.promotionLevel = "SUB";

        testID = "";
        testLevel = "";
    };
    $scope.onKeyUpAccountPreverify = function() {
        //if lenght == 5
    };
    $scope.smartSearchPP = function(txtSearch) {
        $scope.isSelectedPricePlan2 = false;
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = valPricePlans;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.propositionList = arr;
        } else {
            $scope.propositionList = $filter('filter')(valPricePlans, txtSearch);
        }
    };
    $scope.onChangeCusType = function() {
        //alert($scope.getAccountCat());
        //ประเภทของบัตร
        SystemService.getMaster_list("CUST-ID-TYPE-" + $scope.getAccountCat(), function(result) {
            var result2 = {
                "status": "SUCCESSFUL",
                "trx-id": "4W2BY78EMBJWR",
                "process-instance": "tmsapnpr1 (instance: SFF_node3)",
                "response-data": {
                    "id": "CUST-ID-TYPE-B",
                    "name": "Customer ID type for business customer",
                    "description": "LIst of id types for business customer",
                    "configuration-items": [{
                        "key": "I",
                        "value": "I",
                        "description": "บัตรประชาชน"
                    }, {
                        "key": "B",
                        "value": "B",
                        "description": "บัญชีมูลนิธิ"
                    }, {
                        "key": "J",
                        "value": "J",
                        "description": "หนังสือรับรองการจัดตั้งสมาคม"
                    }, {
                        "key": "C",
                        "value": "C",
                        "description": "หนังสือรับรองบริษัท/ห้างฯ"
                    }, {
                        "key": "O",
                        "value": "O",
                        "description": "ทะเบียนพาณิชย์"
                    }, {
                        "key": "P",
                        "value": "P",
                        "description": "หนังสือเดินทาง"
                    }, {
                        "key": "M",
                        "value": "M",
                        "description": "ใบสุทธิ"
                    }, {
                        "key": "A",
                        "value": "A",
                        "description": "บัตรประจำตัวคนต่างด้าว"
                    }, {
                        "key": "T",
                        "value": "T",
                        "description": "ทะเบียนวัด"
                    }, {
                        "key": "H",
                        "value": "H",
                        "description": "อื่นๆ"
                    }]
                }
            };
            if ($scope.getAccountCat() == 'I') {
                $scope.cardTypeOptions = result;
                setTimeout(function() {
                    $('#cardType').val($scope.cardType.value);
                }, 500);
            } else {
                if (SystemService.demo == true) {
                    $scope.cardTypeOptions = result2["response-data"]["configuration-items"];
                } else {
                    $scope.cardTypeOptions = result;
                }
                setTimeout(function() {
                    $('#cardTypeBC').val($scope.cardTypeBC.value);
                }, 500);
            }
        });
    };
    $scope.onKeyUpIdBC = function() {
        if ($scope.customer['id-number'] != $scope.customer['tax-id']) {
            if ($scope.customer['id-number'] && $scope.customer['id-number'].length == 13) {
                $('#idNumberBC').blur();
                $scope.onInputIdBC();
            }
        }
    };
    $scope.onEnterIdBC = function() {
        if ($scope.customer['id-number'] && $scope.customer['id-number'].length >= 3) {
            $scope.onInputIdBC();
        }
    };
    $scope.getBillCycleList = function(cust_type) {
        //SystemService.showLoading();
        var data = "profiles/master/billcycle?customer-type=" + $scope.getAccountCat();
        migratePreToPostIBCService.getBillCycleCallback(data, function(result) {
            //SystemService.hideLoading();
            var msg = utils.getObject(result.data, 'display-messages');
            if (msg && msg.length > 0) {
                //// ??? :: 02-08-2016 :: xsam32
                // $scope.isCustomerPreverify = false;
                SystemService.showAlert({
                    "message": msg[0]["message"],
                    "message-code": msg[0]["message-code"],
                    "message-type": "WARNING",
                    "en-message": msg[0]["en-message"],
                    "th-message": msg[0]["th-message"],
                    "technical-message": msg[0]["technical-message"]
                });
            } else {
                $scope.billCycleList = result.data['response-data'];
                console.log(result);
            }
        });
    };
    //END: CR02 

    //// for saleCode and shopCode :: 14-07-2016 :: xsam32
    $scope.checkUserGroup = function() {
        //// disabledSaleCode
        if ($scope.getAuthen['userGroup'] == 'TELESALES' && $scope.getAuthen['saleCode']) {
            //$scope.disabledSaleCode = true;
        } else if ($scope.getAuthen['userGroup'] == 'DEALER' && $scope.getAuthen['ssoPartnerPrincipal']['partnerTypeLevel'] == '2') {
            $scope.disabledSaleCode = true;
        } else {
            //
        }
        //// set txtSaleCode 
        if ($scope.getAuthen['userGroup'] == 'ADMIN') {
            //// clear all
            $scope.txtSaleCode = "";
            $scope.partnerCode = "";
            $scope.getAuthen['showThaiName'] = "";
        } else if ($scope.getAuthen['userGroup'] == 'SHOP') {
            //// set saleCode and name
            $scope.txtSaleCode = $scope.getAuthen['saleCode'];
            $scope.getAuthen['showThaiName'] = $scope.getAuthen['thaiName'];
        } else if ($scope.getAuthen['userGroup'] == 'TELESALES' && $scope.getAuthen['saleCode']) {
            //// set saleCode and name
            $scope.txtSaleCode = $scope.getAuthen['saleCode'];
            $scope.getAuthen['showThaiName'] = $scope.getAuthen['thaiName'];
        } else if ($scope.getAuthen['userGroup'] == 'DEALER') {
            //// set saleCode and name
            $scope.txtSaleCode = $scope.getAuthen['saleCode'];
            $scope.getAuthen['showThaiName'] = $scope.getAuthen['thaiName'];
        } else {
            //// clear all
            $scope.txtSaleCode = "";
            $scope.partnerCode = "";
            $scope.getAuthen['showThaiName'] = "";
        }
    };

    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null';
    $scope.onLoadSubNoNull = function() {
        setTimeout(function() {
            $('#divShowAuthorize').hide();
            $('#loadingReadCard3').hide();
        }, 500);
        AuthenService.getAuthen(function(result) {
            if (result == "ERROR") return;
            $scope.getAuthen = result;
            $scope.checkUserGroup();
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
        if (!$routeParams.subno) {
            // $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 1500);
        }

        $('#loadingReadCard3').hide();
        AuthenService.getAuthen(function(result) {
            if (result == "ERROR") return;
            $scope.getAuthen = result;
            $scope.checkUserGroup();
            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
            }

            setTimeout(function() {
                if ($scope.SubNo == 'null') {
                    $('#dataSubNo').focus();
                }
            }, 1100);

            //call generate-order-id
            SystemService.showLoading();
            SystemService.getOrderId(result.channel, result.shopcode, function(resultData) {
                localStorage.setItem('orderId', resultData.orderId);
                $scope.TrxID = resultData.TrxID;
                $scope.orderId = resultData.orderId;



                //คำนำหน้า
                SystemService.getMaster_list("CUST-TITLE-TYPE", function(result) {
                    $scope.titleTypeListx = result;
                    // console.log($scope.titleTypeListx);
                });
                //คำนำหน้า อื่นๆ
                SystemService.getMaster_list("CUST-TITLE-OTHER-TYPE", function(result) {
                    $scope.titleOtherTypeList = result;
                    //console.log($scope.titleOtherTypeList);
                });
                //ประเภทของบัตร
                SystemService.getMaster_list("CUST-ID-TYPE-I", function(result) {
                    $scope.cardTypeOptions = result;
                    //console.log($scope.cardTypeOptions);
                });

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


                if ($scope.SubNo != 'null') {
                    migratePreToPostIBCService.validateMigratePreToPostCallback($scope.SubNo, function(result) {
                        // setTimeout(function() {
                        //     SystemService.hideLoading();
                        // }, 2000);
                        var accountCat = 'I';
                        console.log(result);
                        var msgType = 'WARNING';
                        if ($routeParams.subno) {
                            msgType = 'ERROR';
                        }
                        // if ($scope.customerType == 'B' || $scope.customerType == 'C') {
                        //     accountCat = $scope.customerType;
                        // }
                        if (result.status) {
                            var data = {
                                "accountCat": $scope.getAccountCat(),
                                "channel": "WEBUI",
                                "companyCode": "AL",
                                "idNumber": result.customerProfile['id-number'],
                                //"language": null,
                                "verifyType": "ALL"
                            };

                            SystemService.getCustomerPreverify(data, function(blackList) {
                                var msg = utils.getObject(blackList, 'display-messages');
                                if (msg && msg.length > 0) {
                                    SystemService.showAlertMulti(msg, msgType);
                                    $scope.SubNo = "null";
                                    $('#dataSubNo').val('');
                                    setTimeout(function() {
                                        $('#btn_ngbOK').focus();
                                    }, 1500);

                                    return;
                                } else {
                                    $scope.data = result;
                                    if ($scope.customerType == 'N') {
                                        $scope.newOwner.firstNameTH = $scope.data.customerProfile['firstname'];
                                        $scope.newOwner.lastNameTH = $scope.data.customerProfile['lastname'];
                                        $scope.newOwner2.firstNameTH = $scope.data.customerProfile['firstname'];
                                        $scope.newOwner2.lastNameTH = $scope.data.customerProfile['lastname'];
                                        $scope.customer['id-number'] = $scope.data.customerProfile['id-number'];
                                        // $scope.customer['tax-id'] = $scope.data.customerProfile['id-number'];
                                        $scope.newOwner.birthDay = formatDate($scope.data.customerProfile['birthdate']);
                                        $scope.newOwner.expireDay = formatDate($scope.data.customerProfile['id-expire-date']);
                                        $scope.cardType.value = $scope.data.customerProfile['id-type'];


                                        $scope.newOwner.prefixTH = $scope.data.customerProfile['title-code'];

                                        $('#citizenID3').val($scope.data.customerProfile['id-number']);
                                    }

                                    // $scope.onInputIdLastest3();
                                    // $scope.checkValueExpireDate();
                                    // $scope.checkValueDate();
                                    $scope.valueIdType();
                                    $scope.checkUserDealer();
                                    $scope.chkShopcode();
                                    $scope.checkUserNonShop();
                                    $scope.checkUserShop();
                                    console.log($scope.isChkShopcode);
                                    // $scope.onInputCitizenID3();
                                    $scope.onChangeCardTypes();
                                    console.log($scope.checkExpireDate);
                                    console.log($scope.newOwner.expireDay);
                                    setTimeout(function() {

                                        ////str:: issue 27-09-2016 :: case other-title not found data in list array :: xsam32
                                        var checkTOTL_value = $scope.data.customerProfile['title'];
                                        var checkarr = $filter('filter')($scope.titleOtherTypeList, checkTOTL_value);
                                        //// fixed bug otherTitle :: 04-11-2016 :: xsam32
                                        var isMatchTitle = false;
                                        $scope.titleOther = checkTOTL_value;
                                        $.each(checkarr, function(index, el) {
                                            if (el["description"] == checkTOTL_value) {
                                                isMatchTitle = true;
                                                $scope.titleOther = el["value"];
                                                return false;
                                            }
                                        });

                                        if (isMatchTitle) {
                                            // $scope.titleOther = checkTOTL_value;
                                        } else {
                                            var totl = {
                                                "key": checkTOTL_value,
                                                "value": checkTOTL_value,
                                                "attributes": {
                                                    "GENDER": "ALL"
                                                },
                                                "description": checkTOTL_value,
                                                "en-description": checkTOTL_value,
                                                "th-description": checkTOTL_value
                                            };
                                            $scope.titleOtherTypeList.push(totl);
                                            setTimeout(function() {
                                                $('#titleOther').val(checkTOTL_value);
                                            }, 100);
                                        }
                                        ////end:: issue 27-09-2016 :: case other-title not found data in list array

                                        $('#titleOther').val($scope.data.customerProfile['title']);
                                        // $('#divShowAuthorize').hide();
                                        var cutomerType = $scope.data.priceplan['account-category'];
                                        console.log(cutomerType);
                                        if (cutomerType == "P") {
                                            //edit 07-04-2016
                                            //$('#divShowAuthorize').hide();
                                        }

                                        $('#cardType').val($scope.cardType.value);


                                        $scope.onChangeCardTypes();
                                        $('#prefixTH3').val($scope.data.customerProfile['title-code']);
                                        $scope.onselectPrefix();
                                        if ($scope.customerType == 'N') {
                                            $scope.onChangeCardTypes(); //update 20160524 disable field taxid when card type = I
                                        }
                                        //$ngBootbox.customDialog($scope.customDialogOptions);

                                    }, 1000);



                                    $scope.billPayment.smss = $scope.data.installedProducts['product-id-number'];

                                    $scope.data2 = result;
                                    $scope.onInputCitizenID3();
                                    // console.log($scope.data.customerProfile['firstname']);

                                    if ($scope.shopType == '1') {
                                        // Auto-open the CardReader dialog
                                        setTimeout(function() {
                                            var fancyboxOptions = {
                                                helpers: {
                                                    overlay: {
                                                        //closeClick: false
                                                    }
                                                },

                                                beforeShow: function() {
                                                    // $('#CitizenID').prop('disabled', true);
                                                    $('#loadingReadCard').hide();
                                                    $('#unMatch').hide();
                                                },

                                                afterClose: function() {
                                                    //
                                                }
                                            };
                                            $('#btn-fancy-ReadCard').fancybox(fancyboxOptions).trigger('click');
                                        }, 1000);
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


                                        $("#btn-fancy-ReadCardLastest").fancybox().trigger('hide');
                                        $scope.clickModalReadCard = true;
                                        $scope.initModalReadCard();

                                    } else {
                                        $scope.isCustomerProfile = true;
                                    }

                                    //$scope.initModalReadCard();
                                    //check partner
                                    if (!$scope.isNonePartner && $scope.shopType == '1') {
                                        //$scope.data = {};
                                    }
                                    $scope.checkAuthorize($scope.data.priceplan['account-category']);
                                }
                            });
                        } else {
                            $scope.SubNo = "null";
                        }
                    });
                } else {
                    SystemService.hideLoading();
                    setTimeout(function() {
                        //$('#divShowAuthorize').hide();
                    }, 1000);
                }
                if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length >= 1) {
                    $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
                }




            });


            if ($scope.SubNo != "null") {
                $scope.callPropositionList();
            }


        });
    };



    $scope.disableTaxID = false;
    $scope.onChangeCardTypes = function() {
        //console.log($scope.cardType.value);
        var ct = $('#cardType').val();

        if (!ct || ct == "I") {
            if ($scope.customerType == 'N') {
                $scope.customer['tax-id'] = $scope.lastestCustomer['id-number'] ? $scope.lastestCustomer['id-number'] : $scope.customer['id-number'];
                console.log($scope.customer['tax-id'], $scope.lastestCustomer['id-number']);
                $scope.disableTaxID = true;
            }
        } else {
            var isnum = /^\d+$/.test($scope.customer['id-number']);
            console.log($scope.customer['id-number'].length, $scope.customerType, isnum);
            if ($scope.customer['id-number'].length == 13 && $scope.customerType != 'N' && isnum) {
                // $scope.customer['tax-id'] = $scope.customer['id-number'];
                $scope.customer['tax-id'] = ""; //update 20160524 When click tab B,C taxID = ""
                $('#idBindDataAgain').click();
            } else {
                if ($scope.customerType == 'N') {
                    $scope.disableTaxID = false;
                    $scope.customer['tax-id'] = "0000000000000";
                } else {
                    $scope.customer['tax-id'] = "";
                }
            }
        }

    }
    $scope.onInputShopCode = function() {
        if ($scope.partnerCode && $scope.partnerCode.length == 8) {

            $scope.onCheckShopCode();
        }
    };

    ////input saleCode :: new requirement :: 13-07-2016 :: xsam32

    $scope.onEnterSaleCode = function() {
        $scope.onChangeSaleCode();
        $scope.onCheckSaleCode();
    };
    $scope.onKeyUpSaleCode = function() {
        if ($scope.txtSaleCode && $scope.txtSaleCode.length == 8) {
            $scope.onCheckSaleCode();
        }
    };
    $scope.onChangeSaleCode = function() {

        $scope.isVerify = false;
        $scope.approveCode = "";
        $scope.onCheckInputForVerify();

        $scope.getAuthen.showThaiName = "";

        if ($scope.getAuthen['userGroup'] == 'ADMIN') {
            $scope.partnerCode = "";
        }
    };
    $scope.onCheckSaleCode = function() {
        $scope.promotion = "";
        $scope.getAuthen.showThaiName = "";
        SystemService.showLoading();
        var target = "profiles/partner/valdiate-partner-hierarchy?partner-code=" + $scope.txtSaleCode + "&parent-partner-code=" + $scope.partnerCode;
        // if ($scope.getAuthen['userGroup'] == 'TELESALES') {
        //     target += "&partner-code=" + $scope.partnerCode;
        // }
        console.log(target);
        migratePreToPostIBCService.validateSaleCodeCallback(target, function(result) {
            SystemService.hideLoading();
            if (result.data["display-messages"].length == 0) {
                var saleData = result.data['response-data']['partnerInfo'];
                $scope.getAuthen['showThaiName'] = saleData['partner-name-th'];

                if ($scope.getAuthen['userGroup'] == 'ADMIN') {
                    $scope.partnerCode = saleData['selected-parent-partner-code'];
                }

                if ($scope.getAuthen['userGroup'] == 'TELESALES') {
                    //target += "&partner-code=" + $scope.partnerCode;
                } else if ($scope.getAuthen['userGroup'] == 'ADMIN') {
                    $scope.callPropositionList();
                    // }
                    $scope.getAuthen.shopcodes = ["" + $scope.partnerCode + ""];
                    $scope.onCheckInputForVerify();
                } else {
                    //
                }
            } else {
                //error ?
                if ($scope.getAccountCat() == 'I') {
                    idFocus = "txtSaleCodeI";
                } else {
                    idFocus = "txtSaleCodeBC";
                }
                $scope.txtSaleCode = "";
                SystemService.showAlert({
                    "message": result.data["display-messages"][0]["message"],
                    "message-code": result.data["display-messages"][0]["message-code"],
                    "message-type": "WARNING",
                    "en-message": result.data["display-messages"][0]["en-message"],
                    "th-message": result.data["display-messages"][0]["th-message"],
                    "technical-message": result.data["display-messages"][0]["technical-message"]
                });
            }
        });
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

    $scope.onCheckIdType = function() {
        if ($scope.data.customerProfile['id-type'] != "I") {
            $scope.customer['tax-id'] = "";
            return false;
        }
    };

    $scope.onCheckShopCode = function() {
        $scope.promotion = "";
        SystemService.showLoading();
        var target = "profiles/partner/validatepartner?function-type=MIGRATE_PRETOPOST&partner-code=" + $scope.partnerCode;
        migratePreToPostIBCService.validatePartnerCallback(target, function(result) {
            SystemService.hideLoading();
            if (result.data["display-messages"].length == 0) {
                // if ($scope.isLastestUser == true) {
                $scope.callPropositionList();
                // }
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
        var list = $filter('filter')($scope.propositionList, $scope.pricePlanFilter.value);
        console.log(list.length, $scope.pricePlanFilter.value);
        $scope.selectedPricePlan3();
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
        if ($scope.partnerCode) {
            var propParam = {
                'company-code': $scope.data.installedProducts["company-code"],
                'customer-type': $scope.getAccountCat(),
                'propo-type': 'NEW,MIG', /// add ,MIG :: 14-07-2016 :: xsam32
                'mobile-servicetype': "POSTPAID",
                'partner-code': $scope.partnerCode,
                'privilege': false
                    //,'proposition': ''

            };
            migratePreToPostIBCService.propositionCallback(propParam, function(resultProp) {
                if (resultProp.status) {

                    var displayMsg = utils.getObject(resultProp, 'display-messages.0');
                    if (displayMsg && resultProp.data["display-messages"].length > 0) {
                        setTimeout(function() {
                            SystemService.showAlert({
                                "message": resultProp.data["display-messages"][0]["message"],
                                "message-code": resultProp.data["display-messages"][0]["message-code"],
                                "message-type": "WARNING",
                                "en-message": resultProp.data["display-messages"][0]["en-message"],
                                "th-message": resultProp.data["display-messages"][0]["th-message"],
                                "technical-message": resultProp.data["display-messages"][0]["technical-message"]
                            });
                            //$ngBootbox.customDialog($scope.customDialogOptions);
                        }, 3000);
                    }
                    console.log(resultProp.data['response-data']);
                    $scope.propositions = SystemService.myOrderBy(resultProp.data['response-data'], 'proposition-code', 'proposition_code', false);
                    console.log($scope.propositions);
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
                "&customer-type=" + $scope.getAccountCat() +
                "&customer-subtype=" + $scope.subCompanyType +
                //"&service-level=" + $scope.data.installedProducts['service-level'] +
                "&proposition=" + $scope.promotion +
                "&partner-code=" + $scope.partnerCode +
                "&privilege=false";

            //case :: ou-hierarchytype
            if ($scope.promotionLevel == 'OU') {
                //ISSUE 11-05-2016 :: ไม่ต้องCheck
                // var ouHierachyType = "";
                // if($scope.isAccount_child == true){
                //     ouHierachyType = $scope.dataAccountPreverify['ou-hierarchytype'];
                // }else if($scope.isAccount_root == true){
                //     //API ไม่รองรับ
                //     //ไม่ส่ง
                //     //ouHierachyType = $scope.validateCustomerIDData['ou-hierarchytype'];
                // }else{
                //     //ไม่ส่ง
                // }
                // if (ouHierachyType == 'CHILD') {
                //     target = target + "&ou-level=C";
                // } else if (ouHierachyType == 'ROOT') {
                //     target = target + "&ou-level=R";
                // } else {
                //     //ไม่ส่ง
                // }
            }
            //case :: ou
            if ($scope.promotionLevel == 'OU') {
                target = target + "&priceplan-type=" + $scope.PPTypeId;
            } else {
                target = target + "&service-level=C";
            }
            migratePreToPostIBCService.salePriceplanCallback(target, function(resultGetPriceplan) {
                if (resultGetPriceplan.status) {
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
                    var msg = utils.getObject(resultGetPriceplan.data, 'display-messages');
                    if (msg && msg.length > 0) {
                        SystemService.showAlert({
                            "message": msg[0]["message"],
                            "message-code": msg[0]["message-code"],
                            "message-type": "WARNING",
                            "en-message": msg[0]["en-message"],
                            "th-message": msg[0]["th-message"],
                            "technical-message": msg[0]["technical-message"]
                        });
                    }

                    var listProp = $filter('filter')($scope.propositions, {
                        'proposition-code': $scope.promotion
                    });

                    makeDataPriceplan(resultGetPriceplan.data["response-data"], listProp[0]['name'], $scope.promotion);


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
                //$scope.isVerify = false;
                //$scope.approveCode = "";

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
        if (address) {
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
        }
    };
    $scope.setAddressBC = function(address) {
        if (address) {
            $scope.mailAddressBC.homeNumber = address['number'];
            $scope.mailAddressBC.moo = address['moo'];
            $scope.mailAddressBC.village = address['village'];
            $scope.mailAddressBC.road = address['street'];
            $scope.mailAddressBC.soi = address['soi'];
            $scope.mailAddressBC.amphur = address['district'];
            $scope.mailAddressBC.province = address['province'];
            $scope.mailAddressBC.buildingName = address['building-name'];
            $scope.mailAddressBC.buildingRoom = address['building-room'];
            $scope.mailAddressBC.buildingFloor = address['building-floor'];
            $scope.mailAddressBC.district = address['sub-district'];
            $scope.mailAddressBC.postcode = address['zip'];
        }
    };


    //start check input 
    // $scope.subCompanyType = "PRI";
    $scope.isAddressList = {};
    $scope.onInputCitizenID3 = function() {



        //$scope.subCompanyType = $scope.data.accountSubtypeList[0]['name'];
        // (Start) Get current SIM data ----------------------
        var formatDate2 = function(date) {
            if (!date) return date;

            return moment(date).format('DD/MM/YYYY');
        };
        var cid = "";
        if ($scope.customerType == 'N') {
            //cid = $('#citizenID3').val();
            cid = $scope.data.customerProfile['id-number'];
            $('#citizenID3').val(cid);
        } else {
            cid = $('#idNumberBC').val();
        }
        console.log("cid = " + cid);
        if (cid.length >= 3) {
            SystemService.showLoading();
            if (1 == 1) {
                migratePreToPostIBCService.validateGradingCallback(cid, $scope.getAccountCat(), function(resultData) {
                    console.log(resultData);
                    console.log(resultData.data["display-messages"]);
                    if (resultData.data["display-messages"].length == 0) {
                        console.log(resultData);
                        var grade = resultData.data["response-data"]["company-grade"]["grade-id"];
                        $scope.grade = resultData.data["response-data"]["company-grade"];
                        var param = {
                            //'cust-type': $scope.data.installedProducts["account-category"],
                            'cust-type': $scope.getAccountCat(),
                            'company': $scope.data.installedProducts["company-code"],
                            'service-type': "POSTPAID",
                            'grade': grade
                        };
                        migratePreToPostIBCService.getAccountSubTypeCallback(param, function(resultST) {
                            $scope.data.accountSubtypeList = resultST.data["response-data"];
                            // $scope.subCompanyType = resultST.data["response-data"][0]['name'];
                            $scope.setDefaultSubType();
                        });




                        $scope.onChangeCardTypes();
                        $scope.callPropositionList();
                        $scope.isLastestUser = false; // jigkoh3 mockup



                        migratePreToPostIBCService.lastestCustomerCallback(cid, $scope.getAccountCat(), function(lastestCustomer) {
                            $scope.isLastestUser = true;
                            $scope.isCustomerPreverify = true;
                            //$.fancybox.close();
                            $scope.checkInputDisabledFirstName = false;
                            $scope.checkInputDisabledLastName = false;

                            if ($scope.customerType != 'N') {
                                //CR02
                                var dateNow = new Date();
                                var fillZero = function(i) {
                                    return i < 10 ? ("0" + i) : i;
                                }

                                var birthDate = (dateNow.getFullYear() - 20) + "-" + fillZero(dateNow.getMonth() + 1) + "-" + fillZero(dateNow.getDate()) + "T00:00:00+0700";
                                var expireDate = (dateNow.getFullYear() + 1) + "-" + fillZero(dateNow.getMonth() + 1) + "-" + fillZero(dateNow.getDate()) + "T00:00:00+0700";

                                //// cr fix birthDate BC to '01-01-1950' :: 21-06-2016 ::: xsam32 
                                var birthDate = "1950-01-01T00:00:00+0700";


                                //alert(birthDate+":::"+expireDate);
                                if ($scope.getAccountCat() != 'I') {
                                    $scope.newOwner.birthDay = formatDate(birthDate);
                                    $scope.newOwner.expireDay = formatDate(expireDate);

                                    $("#birthDay").datepicker("update", $scope.newOwner.birthDay);
                                    $("#expireDay").datepicker("update", $scope.newOwner.expireDay);

                                    $scope.onCheckInputForVerify();
                                }
                            }


                            SystemService.hideLoading();
                            if (lastestCustomer.data['display-messages'].length > 0 || !SystemService.checkObj(lastestCustomer.data["response-data"], ["customer"])) {
                                //ผู้จดทะเบียนใหม่
                                //$scope.customer = customer;
                                $scope.notLastestCus = false;
                                $scope.clickButtonAddress = false;
                                if (!$scope.isCardValueDataLastest) {
                                    if ($scope.customerType == 'N') {
                                        $scope.newOwner.firstNameTH = ""; //$scope.data.customerProfile['firstname']; Requirement fron P'mam 20160518
                                        $scope.newOwner.lastNameTH = ""; //$scope.data.customerProfile['lastname']; Requirement fron P'mam 20160518
                                        $scope.customer['id-number'] = $scope.data.customerProfile['id-number'];
                                        // $scope.customer['tax-id'] = $scope.data.customerProfile['id-number'];
                                        $scope.newOwner.birthDay = ""; //formatDate($scope.data.customerProfile['birthdate']); Requirement fron P'mam 20160518
                                        $scope.newOwner.expireDay = ""; //formatDate($scope.data.customerProfile['id-expire-date']); Requirement fron P'mam 20160518
                                        $scope.cardType.value = $scope.data.customerProfile['id-type'];

                                        $scope.data.customerProfile['title-code'] = $scope.data.customerProfile['title-code'] ? $scope.data.customerProfile['title-code'] : "T5";

                                        $scope.onChangeCardTypes();


                                        $scope.valueIdType();
                                    }
                                    // $scope.onInputCitizenID3();

                                    setTimeout(function() {
                                        // $('#divShowAuthorize').hide();
                                        $('#cardType').val($scope.cardType.value);
                                        $scope.onChangeCardTypes();
                                        $('#prefixTH3').val($scope.data.customerProfile['title-code']);
                                        //$ngBootbox.customDialog($scope.customDialogOptions);

                                    }, 1000);

                                    $scope.newOwner.prefixTH = $scope.data.customerProfile['title-code'];

                                    //ระบุผู้ใช้หมายเลข
                                    $scope.newOwner2.firstNameTH = $scope.newOwner.firstNameTH; //$scope.data.customerProfile['firstname']; Requirement fron P'mam 20160518
                                    $scope.newOwner2.lastNameTH = $scope.newOwner.lastNameTH; //$scope.data.customerProfile['lastname']; Requirement fron P'mam 20160518
                                    $scope.newOwner2.prefixTH = $scope.newOwner.prefixTH; //$scope.data.customerProfile['title-code']; Requirement fron P'mam 20160518
                                    $scope.titleOther2 = $scope.titleOther;
                                    // $scope.customer['tax-id'] = $scope.data.customerProfile['id-number'];;


                                    $scope.onselectPrefix();
                                    $scope.onselectPrefix2(); //Requirement from P'mam 20160518
                                    if ($scope.customerType == 'N') {
                                        $scope.onChangeCardTypes(); //update 20160524 disable field taxid when card type = I
                                    }

                                }

                                // $scope.subCompanyType = $scope.data.accountSubtypeList[0]['name'];

                                setTimeout(function() {
                                    $scope.isLastestAdress = false;
                                    $scope.changecusStatusN('N');


                                    if (lastestCustomer.data['display-messages'].length > 0) {
                                        SystemService.showAlert({

                                            "message": lastestCustomer.data["display-messages"][0]["message"],
                                            "message-code": lastestCustomer.data["display-messages"][0]["message-code"],
                                            "message-type": "WARNING",
                                            "en-message": lastestCustomer.data["display-messages"][0]["en-message"],
                                            "th-message": lastestCustomer.data["display-messages"][0]["th-message"],
                                            "technical-message": lastestCustomer.data["display-messages"][0]["technical-message"]

                                        });
                                    }
                                }, 1000);
                                $scope.isAddressList = {};
                                $scope.changOpenserviceBC = "N";
                                setTimeout(function() {
                                    if ($scope.isCardValueData == true) {
                                        $scope.SetCardValueOnTabI();
                                    }
                                }, 1000);

                            } else {
                                $scope.changOpenserviceBC = "L";
                                $scope.clickButtonAddress = true;
                                var customer = lastestCustomer.data["response-data"]["customer"];

                                $scope.lastestCustomer = customer;
                                if ($scope.isCardValueDataLastest == false) {
                                    //ผู้จดทะเบียนใหม่
                                    //$scope.customer = customer;
                                    $scope.newOwner.firstNameTH = customer["firstname"];
                                    $scope.newOwner.lastNameTH = customer["lastname"];

                                    // $scope.titleOther = customer["title"];
                                    ////str:: issue 27-09-2016 :: case other-title not found data in list array
                                    var checkTOTL_value = customer["title"];
                                    var checkarr = $filter('filter')($scope.titleOtherTypeList, checkTOTL_value);
                                    //// fixed bug otherTitle :: 04-11-2016 :: xsam32
                                    var isMatchTitle = false;
                                    $scope.titleOther = checkTOTL_value;
                                    $.each(checkarr, function(index, el) {
                                        if (el["description"] == checkTOTL_value) {
                                            isMatchTitle = true;
                                            $scope.titleOther = el["value"];
                                            return false;
                                        }
                                    });

                                    if (isMatchTitle) {
                                        // $scope.titleOther = checkTOTL_value;
                                    } else {
                                        var totl = {
                                            "key": checkTOTL_value,
                                            "value": checkTOTL_value,
                                            "attributes": {
                                                "GENDER": "ALL"
                                            },
                                            "description": checkTOTL_value,
                                            "en-description": checkTOTL_value,
                                            "th-description": checkTOTL_value
                                        };
                                        $scope.titleOtherTypeList.push(totl);
                                        var tts = SystemService.demo ? 2200 : 100;
                                        setTimeout(function() {
                                            $('#titleOther').val(checkTOTL_value);
                                        }, tts);
                                    }
                                    ////end:: issue 27-09-2016 :: case other-title not found data in list array

                                    if ($scope.customerType == 'N') {
                                        //FIXED ISSUE :: 03-05-2016
                                        customer["title-code"] = customer["title-code"] ? customer["title-code"] : "T5";
                                        $scope.checkInputDisabledFirstName = customer["firstname"] ? true : false;
                                        $scope.checkInputDisabledLastName = customer["lastname"] ? true : false;

                                        $scope.newOwner2.firstNameTH = customer["firstname"];
                                        $scope.newOwner2.lastNameTH = customer["lastname"];
                                        $scope.newOwner2.prefixTH = customer["title-code"];
                                    }

                                    setTimeout(function() {
                                        $scope.newOwner.prefixTH = customer["title-code"];
                                        $('#prefixTH3').val(customer["title-code"]);
                                        //$('#titleOther').val(customer["title"]);
                                        //$scope.newOwner2.prefixTH = customer["title-code"];
                                        $('#titleRegisterd').val(customer["title-code"]);
                                    }, 1000);

                                    if ($scope.customerType == 'N') {
                                        $scope.newOwner.birthDay = formatDate(customer["birthdate"]);
                                        $scope.newOwner.expireDay = formatDate(customer["id-expire-date"]);
                                        $scope.cardType.value = customer['id-type'] ? customer['id-type'] : "I";
                                    } else {
                                        $scope.accountID_root = customer['customer-id'];
                                        $scope.newOwner2.prefixTH = "T5";
                                        $scope.onselectPrefix2();
                                    }

                                    $("#birthDay").datepicker("update", $scope.newOwner.birthDay);
                                    $("#expireDay").datepicker("update", $scope.newOwner.expireDay);
                                    $("#birthDayRegisterd").datepicker("update", $scope.newOwner.birthDay);

                                    //BC--------------
                                    // $scope.bcName = customer["firstname"] + " " + customer["lastname"];
                                    // $scope.bcName2 = customer["firstname"] + " " + customer["lastname"];

                                    $scope.mailAddress.sendName = customer["firstname"];
                                    $scope.mailAddressBC.sendName = customer["firstname"];

                                    $scope.bcName = customer["firstname"];
                                    $scope.bcName2 = customer["firstname"];

                                    $scope.checkValueExpireDate();
                                    $scope.checkValueDate();


                                    $scope.checkPrefixT5();
                                }

                                //ระบุผู้ใช้หมายเลข



                                // $scope.customer['tax-id'] = customer["id-number"];

                                $scope.customer['contact-mobile-number'] = customer['contact-mobile-number'];
                                $scope.customer['contact-email'] = customer['contact-email'];


                                $scope.contactNo.number = SystemService.getContactNo(customer["contact-number"], "number");
                                $scope.contactNo.continued = SystemService.getContactNo(customer["contact-number"], "continued");

                                $scope.isAddressList = customer['address-list']['CUSTOMER_ADDRESS'];

                                //$scope.onselectPrefix();


                                // $scope.subCompanyType = customer["installed-products"][0]["account-sub-type"];


                                // //ที่อยู่จัดส่งเอกสาร
                                // $scope.setAddress(customer['address-list']['CUSTOMER_ADDRESS']);
                                if ($scope.customerType != 'N') {
                                    //ที่อยู่ BC
                                    $scope.setAddress(customer['address-list']['TAX_ADDRESS']);
                                    $scope.setAddressBC(customer['address-list']['BILLING_ADDRESS']);

                                    $scope.mailAddress.sendName = customer["firstname"];
                                    $scope.mailAddressBC.sendName = customer["firstname"];
                                } else {
                                    //ที่อยู่จัดส่งเอกสาร I
                                    $scope.setAddress(customer['address-list']['CUSTOMER_ADDRESS']);
                                }

                                //disable ที่อยู่ลูกค้าเก่า
                                $scope.isLastestAdress = true;
                                $scope.changecusStatusN('O');

                                if ($scope.cardType.value == "I") {
                                    if ($scope.customerType == 'N') {
                                        $scope.customer['tax-id'] = $scope.customer['id-number'];
                                        console.log($scope.customer['tax-id'], $scope.customer['id-number']);
                                        $scope.disableTaxID = true;
                                    }
                                } else {
                                    $scope.disableTaxID = false;
                                    $scope.customer['tax-id'] = "0000000000000";
                                }


                                $scope.bcName = customer["firstname"];
                                $scope.bcName2 = customer["firstname"];

                                //setTimeout(function() {
                                // $('#divShowAuthorize').hide();
                                $('#cardType').val($scope.cardType.value);
                                $scope.onChangeCardTypes();
                                // $('#prefixTH3').val($scope.data.customerProfile['title-code']);
                                //$ngBootbox.customDialog($scope.customDialogOptions);
                                // $scope.onInputCitizenID3();
                                $scope.initModalReadCard();
                                //}, 1000);
                                $scope.onChangeCardTypes();

                                if ($scope.customerType == 'N') {
                                    if (customer["title-code"]) {
                                        //
                                    } else {
                                        $scope.titleOther2 = "คุณ";
                                    }
                                } else {
                                    $scope.accountID_root = customer['customer-id'];
                                    $scope.newOwner2.prefixTH = "T5";
                                    $scope.onselectPrefix2();
                                }
                                //$scope.onselectPrefix();
                                setTimeout(function() {
                                    $scope.onselectPrefix();
                                    if ($scope.customerType == 'N') {
                                        $scope.onChangeCardTypes(); //update 20160524 disable field taxid when card type = I
                                    }
                                    //$('#titleOther').val(customer["title"]);
                                }, 1500);
                                setTimeout(function() {
                                    if ($scope.isCardValueData == true) {
                                        $scope.SetCardValueOnTabI();
                                    }
                                }, 1000);
                                console.log(customer);
                                SystemService.hideLoading();
                            }
                        });
                    } else {
                        $scope.onselectPrefix();
                        if ($scope.customerType == 'N') {
                            $scope.onChangeCardTypes(); //update 20160524 disable field taxid when card type = I
                        }
                        SystemService.hideLoading();
                        setTimeout(function() {
                            SystemService.showAlert({
                                "message": resultData.data["display-messages"][0]["message"],
                                "message-code": resultData.data["display-messages"][0]["message-code"],
                                "message-type": "WARNING",
                                "en-message": resultData.data["display-messages"][0]["en-message"],
                                "th-message": resultData.data["display-messages"][0]["th-message"],
                                "technical-message": resultData.data["display-messages"][0]["technical-message"]
                            });
                        }, 1000);
                    }
                });

            } else {
                $('#citizenID3').val('');
                $scope.customer['id-number'] = "";
            }
        }
        //ผู้จดทะเบียนใหม่
        //$scope.customer = customer;
        if (!$scope.isCardValueDataLastest) {

        }
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 1000);


    };
    //end check input
    //start check input for verify
    $scope.partnerCode = "";
    $scope.isCheckInputForVerify = false;
    $scope.onCheckInputForVerify = function() {
        if ($scope.customerType != 'N') {
            $scope.cardType.value = $scope.cardTypeBC.value;
        }
        $scope.showApprovCode = false;
        $scope.isVerify = false;
        setTimeout(function() {
            $scope.validatePrivilegeData = {};
            $scope.isCheckInputForVerify = false;
            $scope.isValidatePrivilege = false;
            $scope.isLoadPricePlan = false;
            $scope.isVerify = false;
            $scope.approveCode = "";
            $scope.newOwner.birthDay = $('#birthDay').val();
            $scope.newOwner.expireDay = $('#expireDay').val();

            console.log($scope.partnerCode.length == 8, $scope.customer['id-number'], $scope.cardType.value, $scope.newOwner.birthDay, $scope.newOwner.expireDay, $scope.promotion, $scope.subCompanyType);


            if ($scope.partnerCode.length == 8 && $scope.customer['id-number'] && $scope.cardType.value && $scope.newOwner.birthDay && $scope.newOwner.expireDay && $scope.promotion && $scope.subCompanyType && $scope.txtSaleCode) {
                $scope.isCheckInputForVerify = true;
            } else {
                $scope.isCheckInputForVerify = false;
                $scope.isVerify = false;
                $scope.onClearPricePlan();
            }
            $scope.setBirthDateOwner2();
            console.log($scope.isCheckInputForVerify);
            $('#idBindDataAgain').click();


        }, 500);

    };
    //end check input for verify
    $scope.setBirthDateOwner2 = function() {
        if ($scope.customerType == 'N') {
            $scope.newOwner2.birthDay = $scope.newOwner.birthDay;
        }
    };


    $scope.onInputId = function() {
        console.log($('#CitizenID').val().length);
        var cid = $('#CitizenID').val();

        if (cid.length >= 3) {
            if (cid == $scope.data2.customerProfile["id-number"]) {

                //document.getElementById('btnReadCardClose2').click();
                //$("#btnForm").fancybox().close();
                $scope.showDataDealer = false;
                $scope.isCustomerProfile = true;
                $.fancybox.close();
                $scope.isReadCardSuccess = false;
                $scope.CitizenID = "";


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

        if (cid.length >= 9) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);

            $scope.customer['id-number'] = cid;

            $scope.onInputCitizenID3();
        }
    };
    $scope.onInputIdLastestKeyUp = function() {
        console.log($('#CitizenIDLastest').val().length);
        var cid = $('#CitizenIDLastest').val();

        if (cid.length == 13) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);

            $scope.customer['id-number'] = cid;

            $scope.onInputCitizenID3();

        }
    };
    $scope.onInputIdLastest3 = function() {
        console.log($('#citizenID3').val().length);
        var cid = $('#citizenID3').val();

        if (cid.length >= 9) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);

            $scope.customer['id-number'] = cid;
            $scope.onInputCitizenID3();
        }
    };
    $scope.onInputIdLastestKeyUp3 = function() {
        console.log($('#citizenID3').val().length);
        var cid = $('#citizenID3').val();

        if (cid.length == 13) {
            //setTimeout(function () {
            //    //$.fancybox.close();
            //}, 1000);

            $scope.customer['id-number'] = cid;
            $scope.onInputCitizenID3();

        }
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
                            //$.fancybox.close();
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
    };

    $scope.blah = "PS";
    $scope.dataSlip = {
        "E": "E-Bill",
        "P": "จดหมาย (ทางไปรษณีย์)",
        "S": "SMS",
        "PS": "ไปรษณีย์(Paper) และ SMS",
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

    $scope.showEnableNewOwnerBirthday = true;
    $scope.showEnableNewOwnerExpireDay = true;
    $scope.newOwner = {
        prefixTH: "T1",
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
            $('#sex3').val("MALE");
            $scope.newOwner2.sex = "MALE";
            $('#sex32').val("MALE");
        } else {

            $scope.newOwner.sex = "FEMALE";
            $('#sex3').val("FEMALE");
            $scope.newOwner2.sex = "FEMALE";
            $('#sex32').val("FEMALE");
        }

        if ($scope.newOwner.prefixTH == 'T5' && $scope.titleOther == "") {
            $scope.titleOther = "คุณ";
            $('#titleOther').val('คุณ');
            //Requirement from P'mam 20160518
            $scope.titleOther2 = "คุณ";
            $('#titleOtherRegisterd').val('คุณ');
            // ===================================
        } else if ($scope.newOwner.prefixTH != 'T5' && $scope.titleOther != "") {
            $scope.titleOther = "คุณ";
            $('#titleOther').val('คุณ');
            //Requirement from P'mam 20160518
            $scope.titleOther2 = "คุณ";
            $('#titleOtherRegisterd').val('คุณ');
            // =====================================
        } else if ($scope.newOwner.prefixTH == 'T5' && $scope.titleOther != "") {
            //$scope.titleOther = "คุณ";

            $('#titleOther').val($scope.titleOther);
        }
    };
    $scope.onselectPrefix2 = function() {
        console.log($scope.newOwner2.prefixTH);
        //===========Requirement from P'mam 20160518=============
        if ($scope.newOwner2.prefixTH == 'T5') {
            $scope.titleOther2 = "คุณ";
            $('#titleOtherRegisterd').val('คุณ');
        }
        // ======================================================
        if ($scope.newOwner2.prefixTH == 'MR.' || $scope.newOwner2.prefixTH == 'T1') {
            $scope.newOwner2.sex = "MALE";
        } else {
            $scope.newOwner2.sex = "FEMALE";
        }

        if ($scope.newOwner2.prefixTH == 'T5') {
            $scope.titleOther2 = "คุณ";
        }
    };
    $scope.onChangeTitleOther = function() {
        console.log($scope.titleOther);
        console.log($scope.titleOtherTypeList);
        var selectTitleOther = $filter('filter')($scope.titleOtherTypeList, {
            value: $scope.titleOther
        });
        console.log(selectTitleOther[0]);
        if (SystemService.checkObj(selectTitleOther[0], ['attributes', 'GENDER'])) {
            $('#sex3').val(selectTitleOther[0]['attributes']['GENDER']);
            $('#sex32').val(selectTitleOther[0]['attributes']['GENDER']);
            console.log(selectTitleOther[0]['attributes']['GENDER']);
        } else {
            $('#sex3').val('ALL');
            $('#sex32').val('ALL');
            console.log('ALL');
        }
        $scope.newOwner.sex = $('#sex3').val(); //edit 20160525 fixed bug subscriber gender dont chang.
        $scope.titleOther2 = $scope.titleOther;
        $scope.newOwner2.sex = $scope.newOwner.sex;
    };


    $scope.onChangeTitleOther2 = function() {
        console.log($scope.titleOther2);
        var selectTitleOther = $filter('filter')($scope.titleOtherTypeList, {
            value: $scope.titleOther2
        });
        console.log(selectTitleOther[0]);
        if (SystemService.checkObj(selectTitleOther[0], ['attributes', 'GENDER'])) {
            $('#sex32').val(selectTitleOther[0]['attributes']['GENDER']);
            console.log(selectTitleOther[0]['attributes']['GENDER']);
            console.log($('#sex32').val());
        } else {
            $('#sex32').val('ALL');
            console.log('ALL');
        }
        //$scope.titleOther2 = $scope.titleOther;
        $scope.newOwner2.sex = $('#sex32').val(); //20160525 Fixed DF1954
    };

    $scope.onChangeTitleOther2BC = function() {
        console.log($scope.titleOther2);
        var selectTitleOther = $filter('filter')($scope.titleOtherTypeList, {
            value: $scope.titleOther2
        });
        console.log(selectTitleOther[0]);
        if (SystemService.checkObj(selectTitleOther[0], ['attributes', 'GENDER'])) {
            $('#sex32BC').val(selectTitleOther[0]['attributes']['GENDER']);
            console.log(selectTitleOther[0]['attributes']['GENDER']);
            console.log($('#sex32BC').val());
        } else {
            $('#sex32BC').val('ALL');
            console.log('ALL');
        }
        //$scope.titleOther2 = $scope.titleOther;
        $scope.newOwner2.sex = $('#sex32BC').val(); //20160525 Fixed DF1954
    };

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
        $scope.existingPP = false;
        // $scope.pricePlanFilter = {};
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

        $scope.getOfferDetail($scope.pricePlan2.priceplans.soc);
        //$scope.getCapmaxParameter($scope.pricePlan2.priceplans.soc);
        console.log($scope.pricePlan2.priceplans.soc);
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
    $scope.propositionSoc = "";
    $scope.promotion = "";
    $scope.selectedPromotion = function() {
        $scope.pricePlan = {};
        $scope.onCheckInputForVerify();
        $scope.isValidate = false;
        $scope.showApprovCode = false;
        $scope.specialOfferType = {
            CUG: false,
            FF: false,
            SA: false,
            POOL: false
        };

        //var value = $('#selectProposition').val();
        //$scope.propositionList = $filter('filter')(valPricePlans, { "proposition-code": value });
        var propositionSocList = $filter('filter')($scope.propositions, {
            "proposition-code": $scope.promotion
        });
        console.log(propositionSocList[0].soc);
        $scope.propositionSoc = propositionSocList[0].soc;

        //$scope.callSalePricePlanList();

        //$scope.getValidatePrivilege();
    };
    $scope.validatePrivilegeData = {};
    $scope.isValidatePrivilege = false;
    $scope.getValidatePrivilege = function() {
        if ($scope.isValidatePrivilege == false) {
            if ($scope.promotion) {
                SystemService.showLoading();
                var target = 'first-call-date=' + $scope.data.priceplan['product-properties']['FIRST-CALL-DATE'] +
                    '&nas-proposition=' + $scope.promotion +
                    '&company-code=' + $scope.data.priceplan['company-code'] +
                    '&current-priceplan=' + $scope.data.installedProducts['product-name'] +
                    '&customer-type-new=' + $scope.getAccountCat();
                console.log(target);
                migratePreToPostIBCService.validatePrivilegeCallback(target, function(resultVP) {
                    SystemService.hideLoading();
                    $scope.isValidatePrivilege = true;
                    console.log(resultVP.data);
                    var msg = utils.getObject(resultVP.data, 'display-messages');
                    if (msg && msg.length > 0 && resultVP.data['response-data']['privilege']['privilege-status'] == "1") {
                        $scope.promotion = "";
                        $scope.isCheckInputForVerify = false;
                        $scope.onCheckInputForVerify();
                        SystemService.showAlert({
                            "message": msg[0]["message"],
                            "message-code": msg[0]["message-code"],
                            "message-type": "WARNING",
                            "en-message": msg[0]["en-message"],
                            "th-message": msg[0]["th-message"],
                            "technical-message": msg[0]["technical-message"]
                        });
                    }
                    if (resultVP.data['response-data']['privilege']['privilege-status'] == "0" || resultVP.data['response-data']['privilege']['privilege-status'] == "2") {
                        $scope.onVerify();
                    }
                    $scope.validatePrivilegeData = resultVP.data['response-data']['privilege'];
                });
            }
        } else {
            //case :: รหัสอนุมัติ
            $scope.onVerify();
        }
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
    $scope.titleOther2 = "คุณ";
    ////End title


    $scope.mailAddress = {
        newss: ''
    };
    $scope.mailAddressBC = {
        newss: '',
        accountLang: "TH"
    };
    $scope.tempCardAddress = {
        newss: ''
    };


    $scope.useAddressAsCard = function(type) {
        if (type == 'H') {
            console.log($scope.cardInfo3);
            //$scope.mailAddress = $scope.tempCardAddress;
            $scope.mailAddress.province = $scope.cardInfo.Province;
            $scope.mailAddress.amphur = $scope.cardInfo.Amphur;
            $scope.mailAddress.district = $scope.cardInfo.District;
            $scope.mailAddress.homeNumber = $scope.cardInfo.HomeNumber;
            $scope.mailAddress.moo = $scope.cardInfo.Moo;
            $scope.mailAddress.road = $scope.cardInfo.Road;
            $scope.mailAddress.soi = $scope.cardInfo.Soi;
            $scope.mailAddress.trok = $scope.cardInfo.Trok;
        } else {
            $scope.billAddress = $scope.tempCardAddress;
        }
    };
    $scope.useAddressMailAsBillBC = function(type) {

        $scope.mailAddressBC.sendName = $scope.mailAddress.sendName;

        $scope.bantypeMailBC = $scope.bantypeMail;
        $scope.mootypeMailBC = $scope.mootypeMail;

        $scope.mailAddressBC.accountLang = $scope.billPayment.accountLang;

        $scope.mailAddressBC.province = $scope.mailAddress.province;
        $scope.mailAddressBC.amphur = $scope.mailAddress.amphur;
        $scope.mailAddressBC.district = $scope.mailAddress.district;
        $scope.mailAddressBC.homeNumber = $scope.mailAddress.homeNumber;
        $scope.mailAddressBC.moo = $scope.mailAddress.moo;
        $scope.mailAddressBC.road = $scope.mailAddress.road;
        $scope.mailAddressBC.soi = $scope.mailAddress.soi;
        $scope.mailAddressBC.trok = $scope.mailAddress.trok;
        $scope.mailAddressBC.postcode = $scope.mailAddress.postcode;
        $scope.mailAddressBC.village = $scope.mailAddress.village;
        $scope.mailAddressBC.buildingName = $scope.mailAddress.buildingName;
        $scope.mailAddressBC.buildingRoom = $scope.mailAddress.buildingRoom;
        $scope.mailAddressBC.buildingFloor = $scope.mailAddress.buildingFloor;
    };

    $scope.unUseAddressAsCard = function(type) {
        if (type == 'H') {
            $scope.bantypeMail = false;
            $scope.mootypeMail = false;

            $scope.mailAddress = {};

            $scope.billPayment.accountLang = "TH";
            $('#ulAddressList').hide();
            $scope.addressList = [];
        } else {
            $scope.billAddress = {};
        }

    };
    $scope.unUseAddressMailBC = function() {


        $scope.bantypeMailBC = false;
        $scope.mootypeMailBC = false;

        $scope.mailAddressBC = {};
        $scope.mailAddressBC.accountLang = "TH";
        $('#ulAddressListBC').hide();
        $scope.addressListBC = [];
    };
    $scope.setSendName = function() {
        $scope.mailAddress.sendName = $scope.bcName;
        $scope.mailAddressBC.sendName = $scope.bcName;
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
        console.log($scope.lastestCustomer);
        if ($scope.shopType == '1') {
            $scope.selectReason.id = "CREQ";
        }
        //check IBC
        var _customerID = $scope.lastestCustomer["customer-id"];
        var cardTypeIBC = "";
        var changeOption = "xxx";
        var BILLING_ADDRESS = {};
        var TAX_ADDRESS = {};
        //// fix lastest title=null :: 10-06-2016 :: xsam32
        //$scope.titleOther = $("#prefixTH3 option:selected").text();

        if ($scope.customerType != 'N') {
            $scope.billPayment.accountLang = $scope.mailAddressBC.accountLang;

            $scope.titleOther = "";
            $scope.newOwner.prefixTH = "T1";
            $scope.newOwner.sex = "MALE";

            cardTypeIBC = $scope.cardTypeBC.value;
            if ($scope.changOpenserviceBC == 'L' && $scope.isLastestAdress == true) {
                changeOption = "EXISTING";
            } else if ($scope.changOpenserviceBC == 'S' && $scope.isAccount_root == true && $scope.isAccount_child == false) {
                _customerID = $scope.validateCustomerIDData['customer-id'];
                changeOption = "EXISTING";
            } else if ($scope.changOpenserviceBC == 'S' && $scope.isAccount_child == true) {
                _customerID = $scope.dataAccountPreverify['customer-id'];
                changeOption = "EXISTING-ACCOUNT";
            } else {
                changeOption = "NEW";
            }
            if ($scope.useNumberType == 'I') {
                $scope.titleOther2 = $("#titleRegisterdBC option:selected").text();
                //ISSUE : 25-04-2016 TITLE
                if ($scope.newOwner2.prefixTH == 'T5') {
                    $scope.titleOther2 = $("#titleOtherRegisterdBC option:selected").val();
                }
            }
            $scope.newOwner.firstNameTH = $scope.bcName;
            BILLING_ADDRESS = {
                "number": $scope.mailAddressBC.homeNumber,
                "moo": $scope.mailAddressBC.moo,
                "village": $scope.mailAddressBC.village,
                "street": $scope.mailAddressBC.road,
                "soi": $scope.mailAddressBC.soi,
                "district": $scope.mailAddressBC.amphur,
                "province": $scope.mailAddressBC.province,
                "building-name": $scope.mailAddressBC.buildingName,
                "building-room": $scope.mailAddressBC.buildingRoom,
                "building-floor": $scope.mailAddressBC.buildingFloor,
                "sub-district": $scope.mailAddressBC.district,
                "zip": $scope.mailAddressBC.postcode,
                "household": "",
                "contact-name": $scope.mailAddressBC.sendName
            };
            TAX_ADDRESS = {
                "number": $scope.mailAddress.homeNumber,
                "moo": $scope.mailAddress.moo,
                "village": $scope.mailAddress.village,
                "street": $scope.mailAddress.road,
                "soi": $scope.mailAddress.soi,
                "district": $scope.mailAddress.amphur,
                "province": $scope.mailAddress.province,
                "building-name": $scope.mailAddress.buildingName,
                "building-room": $scope.mailAddress.buildingRoom,
                "building-floor": $scope.mailAddress.buildingFloor,
                "sub-district": $scope.mailAddress.district,
                "zip": $scope.mailAddress.postcode,
                "household": "",
                "contact-name": $scope.mailAddress.sendName
            };
        } else {
            //// fix lastest title=null :: 10-06-2016 :: xsam32
            if ($('#prefixTH3').val() == 'T5') {
                $scope.titleOther = $("#titleOther option:selected").val();
            } else {
                $scope.titleOther = $("#prefixTH3 option:selected").text();
            }
            BILLING_ADDRESS = {
                "number": $scope.mailAddress.homeNumber,
                "moo": $scope.mailAddress.moo,
                "village": $scope.mailAddress.village,
                "street": $scope.mailAddress.road,
                "soi": $scope.mailAddress.soi,
                "district": $scope.mailAddress.amphur,
                "province": $scope.mailAddress.province,
                "building-name": $scope.mailAddress.buildingName,
                "building-room": $scope.mailAddress.buildingRoom,
                "building-floor": $scope.mailAddress.buildingFloor,
                "sub-district": $scope.mailAddress.district,
                "zip": $scope.mailAddress.postcode,
                "household": "",
                "contact-name": $scope.mailAddress.sendName
            };
            cardTypeIBC = $scope.cardType.value;
            //// new check CHANGE-OPTION ::: 31-05-2016 //xsam32
            if ($scope.isLastestAdress == true && $scope.customerStatusN == 'O') {
                _customerID = $scope.lastestCustomer['customer-id'];
                changeOption = "EXISTING";
            } else {
                changeOption = "NEW";
            }
        }

        $scope.saveData.memo = $scope.saveData.memo ? $scope.saveData.memo : ""
        $scope.saveData.memo = $scope.getAuthen.logInName + "(" + $scope.txtSaleCode + ": " + $scope.getAuthen.engName + ")" + "(" + "Order ID: " + $scope.orderId + ")" + ": " + $scope.saveData.memo;

        if ($scope.customerType != 'N' && $scope.useNumberType == 'BC') {
            $scope.newOwner2.firstNameTH = $scope.bcName2;
        }

        var bcOUID = "";
        var bcBAN = "";
        if ($scope.customerType == 'N') {
            // bcOUID = $scope.customerStatusN == 'O' ? $scope.lastestCustomer['installed-products'][0]['ouId'] : "";
            // bcBAN = $scope.customerStatusN == 'O' ? $scope.lastestCustomer['installed-products'][0]['ban'] : "";
            ////new requirement ::: 25-05-2016 //xsam32 @by BA
            bcOUID = "";
            bcBAN = "";
        } else {
            if ($scope.isAccount_child == true) {
                bcOUID = $scope.dataAccountPreverify['installed-products'][0]['ouId'];
                bcBAN = $scope.accountID_child;
            } else {
                bcOUID = "";
                bcBAN = "";
            }
        }
        if (!$scope.selectProposition) {
            var arr = $filter('filter')($scope.propositions, { 'proposition-code': $scope.promotion });
            $scope.selectProposition = $scope.promotion;
            $scope.pricePlan.promotion = arr[0]['name'];
        }


        var data = {
            "target": "aftersales/order/submit",
            "order": {
                "order-id": "xxxxxxxxxxxxxxxxxxxADD",
                "creator": "xxxxxxxxxxxxxxxxxxxADD",
                //"create-date": "",
                "customer": {
                    "title-code": $scope.newOwner.prefixTH,
                    "title": $scope.titleOther,
                    "firstname": $scope.newOwner.firstNameTH,
                    "lastname": $scope.newOwner.lastNameTH,
                    "gender": $scope.newOwner.sex,
                    "id-type": cardTypeIBC,
                    "id-number": $scope.customer['id-number'],
                    "birthdate": SystemService.convertDataThToLongDate($('#birthDay').val()),
                    "id-expire-date": SystemService.convertDataThToLongDate($('#expireDay').val()),
                    "contact-number": $scope.contactNo.number + ($scope.contactNo.continued ? ("#" + $scope.contactNo.continued) : ""),
                    "contact-mobile-number": $scope.customer["contact-mobile-number"],
                    "contact-email": $scope.customer["contact-email"],
                    "language": $scope.customer["language"],
                    "branch-code": $scope.customer["branch-code"],
                    "tax-id": $scope.customer["tax-id"],
                    "customer-id": _customerID,
                    "customer-level": $scope.grade["grade-name"],
                    //"customer-id": $scope.data.customerProfile["customer-id"],
                    "customer-sublevel-id": $scope.grade["grade-id"],
                    "customer-sublevel": $scope.grade["grade-sub-name"]
                        ///check lastest or billadress
                        ,
                    "address-list": {
                        "CUSTOMER_ADDRESS": {
                            "number": "61/268",
                            "moo": "8",
                            //        "village": "moo ban",
                            "street": "ratchada",
                            //        "soi": "8",
                            "district": "dindaeng",
                            "province": "Pathumthani",
                            //        "building-name": "Pakin",
                            //        "building-room": "22",
                            //        "building-floor": "13",
                            "sub-district": "Dindaeng",
                            "zip": "22222",
                            //        "household": "18"
                        }
                    }
                    //"customer-agents": {
                    //    "AUTH_1": {
                    //        "contact": "0868836665",
                    //        "id-number": "9988877688845",
                    //        "id-type": "I",
                    //        "firstname": "สมคิด",
                    //        "lastname": "คิดมากไป",
                    //        "birthdate": "2015-07-20T00:00:00+0700"
                    //    }
                    //,"POA": {
                    //    "contact": "0868836664",
                    //    "id-number": "3257588733945",
                    //    "id-type": "I",
                    //    "firstname": "สมชาย",
                    //    "lastname": "ปากสว่าง",
                    //    "birthdate": "2015-07-20T00:00:00+0700"
                    //},
                    //"AUTH_2": {
                    //    "contact": "0868836666",
                    //    "id-number": "9988877687723",
                    //    "id-type": "I",
                    //    "firstname": "สมฤดี",
                    //    "lastname": "ดีเกินไป",
                    //    "birthdate": "2015-07-20T00:00:00+0700"
                    //}
                    //}
                },
                // "sale-agent": {
                // "name": "Chitchai Changpradist",
                //    "channel": "CM",
                //    "partner-code": "",
                //    "partner-name": "",
                //    "sale-code": "01019580",
                //    "sale-assist-code": "",
                //    "partner-type": ""
                // },
                "order-items": [{
                        "name": "MIGRATE_PRE_TO_POST",
                        "product-name": $scope.pricePlan.saveName,
                        "product-id-number": $scope.data.installedProducts["product-id-number"],
                        "product-id-name": $scope.data.installedProducts["product-id-name"],
                        "product-category": $scope.data.installedProducts["product-category"],
                        "product-type": "PRICEPLAN",
                        "order-type": "CHANGE",
                        //"reason-code": $scope.selectReason.id,
                        "reason-code": "CREQ",
                        "user-memo": $scope.saveData.memo ? $scope.saveData.memo : "",
                        "address-list": {
                            "BILLING_ADDRESS": BILLING_ADDRESS,
                            "TAX_ADDRESS": TAX_ADDRESS
                        },
                        "order-data": {
                            //"IMSI": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                            "MAXALLOW-APPROVE-CODE": $scope.approveCode,
                            //"MOBILE-SERVICETYPE": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                            "SUBSCRIBER-TITLE-CODE": $scope.newOwner2.prefixTH,
                            "SUBSCRIBER-TITLE": $scope.titleOther2,
                            "SUBSCRIBER-FIRSTNAME": $scope.newOwner2.firstNameTH,
                            "SUBSCRIBER-LASTNAME": $scope.newOwner2.lastNameTH,
                            "SUBSCRIBER-BIRTHDATE": SystemService.convertDateToEng($('#birthDayRegisterd').val(), "ENG"),
                            "SUBSCRIBER-GENDER": $scope.newOwner2.sex,
                            "SUBSCRIBER-SMS-LANG": $scope.newOwner2.smsLanguage,
                            "ACCOUNT-BILL-FORMAT": $scope.blah,
                            "ACCOUNT-EMAIL": $scope.billPayment.email,
                            "ACCOUNT-SMS-NUMBER": $scope.billPayment.smss,
                            "ACCOUNT-PAYMENT-METHOD": "CA",
                            "ACCOUNT-LANG": $scope.billPayment.accountLang,
                            "ACCOUNT-BILL-CYCLE": "", //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?

                            "CHANGE-OPTION": changeOption,
                            "OU-HIERARCHYTYPE": "xxxxxxxxxxxxxxxxxxxADD",
                            "PARENT-OUID": "xxxxxxxxxxxxxxxxxxxADD",
                            "PRICEPLAN-SERVICE-LEVEL": "xxxxxxxxxxxxxxxxxxxADD",

                            "MAIN-BALANCE": $scope.data.installedProducts["product-properties"]["MAIN-BALANCE"],

                            "PRICEPLAN-SOC-CODE": $scope.pricePlan2.priceplans.soc,
                            "CCBS-PROPOSITION-SOC-CODE": $scope.propositionSoc,
                            "ORIGINAL-ID-NUMBER": $scope.data.customerProfile['id-number'],
                            "ORIGINAL-FIRSTNAME": $scope.data.customerProfile['firstname'],
                            "ORIGINAL-LASTNAME": $scope.data.customerProfile['lastname']

                        },
                        "primary-order-data": {
                            //"CUSTOMER-ID": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                            "OU-ID": bcOUID,
                            "BAN": bcBAN,
                            "ACCOUNT-CATEGORY": $scope.getAccountCat(),
                            "ACCOUNT-SUB-TYPE": $scope.subCompanyType,
                            "COMPANY-CODE": $scope.data.installedProducts["company-code"],
                            "NAS-PROPOSITION": $scope.selectProposition,
                            "CCBS-PROPOSITION": $scope.pricePlan.promotion,
                            // "ORIGINAL-OWNER-ID-NUMBER": $scope.data.customerProfile['id-number'],
                            // "ORIGINAL-OWNER-FIRSTNAME": $scope.data.customerProfile['firstname'],
                            // "ORIGINAL-OWNER-LASTNAME": $scope.data.customerProfile['lastname']
                            "SIM": $scope.data.installedProducts["product-properties"]["SIM"] //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                        }
                    }]
                    //,"last-modify-date": ""
            },
            "ref-id": "xxxxxxxxxxxxxxxxxxxADD",
            "user-id": "xxxxxxxxxxxxxxxxxxxADD",
            "approver": $scope.approver
        };


        data['order']['order-id'] = $scope.orderId;
        data['ref-id'] = $scope.orderId;
        data['order']['creator'] = $scope.getAuthen["logInName"];
        data['user-id'] = $scope.getAuthen["logInName"];
        data['order']['sale-agent'] = {
            "name": $scope.getAuthen["engName"],
            "channel": $scope.getAuthen["channel"],
            "partner-code": $scope.partnerCode,
            "partner-name": $scope.getAuthen["partnerName"],
            "sale-code": $scope.txtSaleCode,
            "sale-assist-code": "",
            "partner-type": $scope.getAuthen["partnerType"]
        };


        //approver
        if ($scope.approver) {
            data["approver"] = $scope.approver;
        }

        //
        data["order"]["customer"]["customer-agents"] = {
            //20160602 Change AUTH to POA and POA to AUTH by waramun
            "POA": {},
            "AUTH_1": {},
            "POA_2": {}
        };
        //authen
        if ($('#CitizenID2').val() && $('#authorizeFullName').val()) {
            data["order"]["customer"]["customer-agents"] = {
                //20160602 Change AUTH to POA and POA to AUTH by waramun
                "POA": {
                    "id-number": $('#CitizenID2').val(),
                    "firstname": $('#authorizeFullName').val(),
                    "lastname": $('#authorizeFullName').val()
                }
            };
        } else {
            delete data["order"]["customer"]["customer-agents"]["POA"];
        }

        //build DATA : BUSINESS/CORPORATE
        if ($scope.customerType == 'B' || $scope.customerType == 'C') {
            //POA - ผู้มีอำนาจลงนาม 1
            //20160602 Change AUTH to POA and POA to AUTH by waramun
            data["order"]["customer"]["customer-agents"]["AUTH_1"] = {
                "id-number": $('#auth_1_id_number').val(),
                "firstname": $('#auth_1_firstName').val(),
                "lastname": $('#auth_1_lastName').val()
            };
            if ($scope.isAccount_child == true) {
                //case: BUSINESS/CORPORATE : EXISTING-CUSTOMER : EXISTING ACCOUNT
                delete data["order"]["order-items"][0]["address-list"]["BILLING_ADDRESS"];
                delete data["order"]["order-items"][0]["address-list"]["TAX_ADDRESS"];

                //// case EXISTING-ACCOUNT ::: 23-06-2016 :: xsam32
                data["order"]["customer"]["contact-number"] = "";
            }
            //check :: PREFER-CONTACT
            if ($scope.billPayment.preferedContace == "FIX") {
                data["order"]["order-items"][0]["order-data"]["PREFER-CONTACT"] = $scope.fixPreferedContact;
            } else {
                data["order"]["order-items"][0]["order-data"]["PREFER-CONTACT"] = $scope.billPayment.preferedContace;
            }
            //DELETE FOR BUSINESS/CORPORATE :::
            //DELETE FOR BUSINESS/CORPORATE :::
            //delete data["order"]["customer"]["lastname"];
            delete data["order"]["customer"]["title-code"];
        } else {
            //case: INDIVIDUAL
            delete data["order"]["customer"]["customer-agents"]["AUTH_1"]; //20160602 Change AUTH to POA and POA to AUTH by waramun
            delete data["order"]["order-items"][0]["address-list"]["TAX_ADDRESS"];
        }
        //end build

        //authen 2
        if ($('#poa_1_id_number').val() && $('#poa_1_firstname').val() && $('#poa_1_lastname').val()) {
            //20160602 Change AUTH to POA and POA to AUTH by waramun
            data["order"]["customer"]["customer-agents"]["POA_2"] = {
                "id-number": $('#poa_1_id_number').val(),
                "firstname": $('#poa_1_firstname').val(),
                "lastname": $('#poa_1_lastname').val()
            }
        } else {
            //20160602 Change AUTH to POA and POA to AUTH by waramun
            delete data["order"]["customer"]["customer-agents"]["POA_2"];
        }

        //SHARE_ALLOWANCE, FriendAndFamily, CUG, POOLED

        //var spName = $scope.offerDetail["csm-offer-details"]["name"];
        var spAll = "";
        var spNameAll = "";
        ////new requirement 13-06-2016 :: add SOC :: xsam32
        var spSocAll = "";
        $scope.attModalVal = "modal";
        var spArray = {
            'SHARE_ALLOWANCE': [],
            'POOLED': [],
            'FriendAndFamily': [],
            'CUG': [],
            'POOLING': [],
            'CAPMAX': []
        };
        if ($scope.existingPP == false) {
            var spList = $scope.offerDetail["csm-offer-details"]["csm-related-offer-details"];
            for (var isp = 0; isp < spList.length; isp++) {
                var sp = spList[isp]["special-offer-type"];
                var spName = spList[isp]["name"];
                var spSoc = spList[isp]["code"];

                if (sp == "SHARE_ALLOWANCE" || sp == "POOLED" || sp == 'POOLING' || sp == 'CAPMAX') {
                    spAll = spAll + (spAll ? "|" : "") + sp;
                    spNameAll = spNameAll + (spNameAll ? "|" : "") + spName;
                    spSocAll = spSocAll + (spSocAll ? "|" : "") + spSoc;
                    if ($scope.capMaxParameterList['monetary-capmax']) {
                        spArray[sp].push("Monetary cap max|" + $scope.saveParamData.Monetary + "|");
                    }
                    if ($scope.capMaxParameterList['occurrence-capmax']) {
                        spArray[sp].push("Occurrence cap max|" + $scope.saveParamData.Occurrence + "|");
                    }
                    if ($scope.capMaxParameterList['duration-capmax']) {
                        spArray[sp].push("Duration cap max|" + $scope.saveParamData.Duration + "|" + $scope.capMaxParameterList['durationCapMaxUOM']);
                    }
                    if ($scope.capMaxParameterList['volume-capmax']) {
                        spArray[sp].push("Volume cap max|" + $scope.saveParamData.Volume + "|" + $scope.capMaxParameterList['volumeCapMaxUOM']);
                    }
                }
                if (sp == 'FriendAndFamily') {
                    spAll = spAll + (spAll ? "|" : "") + sp;
                    spNameAll = spNameAll + (spNameAll ? "|" : "") + spName;
                    spSocAll = spSocAll + (spSocAll ? "|" : "") + spSoc;
                    var countFF = 0;
                    for (var i = 1; i <= $scope.ffData.max; i++) {
                        if ($scope.saveParamData["ff" + i]) {
                            spArray[sp].push("Friend numbers offer level|" + $scope.saveParamData["ff" + i] + "|");
                            countFF++;
                        }
                    }
                    if (countFF < $scope.ffData.min) {
                        SystemService.showAlert({
                            "message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
                            "message-code": "",
                            "message-type": "WARNING",
                            "en-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
                            "th-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
                            "technical-message": "changePricePlanController"
                        });
                    } else {
                        $scope.attModalVal = "modal";
                    }
                }
                if (sp == 'CUG') {

                    spAll = spAll + (spAll ? "|" : "") + sp;
                    spNameAll = spNameAll + (spNameAll ? "|" : "") + spName;
                    spSocAll = spSocAll + (spSocAll ? "|" : "") + spSoc;
                    spArray[sp].push("CUG ID|" + $scope.saveDataCUG.id + "|");
                }


                //create field JSON
                var list = spAll.split("|");
                var listName = spNameAll.split('|');
                var listSoc = spSocAll.split('|');
                if (spAll) {
                    for (var i = 0; i < list.length; i++) {
                        data["order"]["order-items"][0]["order-data"][list[i] + "-PARAM-SIZE"] = spArray[list[i]].length;

                        data["order"]["order-items"][0]["order-data"][list[i] + "-PARAM-OFFER-NAME"] = listSoc[i] + "|" + listName[i];

                        var listValue = spArray[list[i]];
                        for (var ii = 0; ii < listValue.length; ii++) {
                            data["order"]["order-items"][0]["order-data"][list[i] + "-PARAM-" + ii] = listValue[ii];
                        }

                    }
                }


            }
        }
        data["order"]["order-items"][0]["order-data"]["OFFERS-REQUIRE-PARAMETER"] = spAll;

        //case Privilage
        data["order"]["order-items"][0]["order-data"]["PRIVILEGE-STATUS"] = $scope.validatePrivilegeData['privilege-status'];
        if ($scope.validatePrivilegeData['privilege-status'] == "0") {
            data["order"]["order-items"][0]["order-data"]["CAMPAIGN-CODE"] = $scope.validatePrivilegeData['campaign-code'];
            data["order"]["order-items"][0]["order-data"]["AGING"] = $scope.validatePrivilegeData['aging'];
            data["order"]["order-items"][0]["order-data"]["FIRST-CALL-DATE"] = $scope.data.priceplan['product-properties']['FIRST-CALL-DATE'];
        }

        ////address list
        if ($scope.isAddressList) {
            //data['order']["customer"]["address-list"]["CUSTOMER_ADDRESS"] = $scope.isAddressList;
        } else {
            //data['order']["customer"]["address-list"]["CUSTOMER_ADDRESS"] = data['order']["order-items"][0]["address-list"]["BILLING_ADDRESS"];
        }

        data['order']["customer"]["address-list"]["CUSTOMER_ADDRESS"] = data['order']["order-items"][0]["address-list"]["BILLING_ADDRESS"];

        //// Fixed by comment case ISSUE customer-id ::: 21-06-2016 ::: xsam32
        // if ($scope.customerStatusN == 'O') {
        //     data['order']["customer"]["customer-id"] = $scope.lastestCustomer['customer-id'];
        // }

        //check :: customer-id
        if (changeOption == "NEW") {
            delete data['order']["customer"]["customer-id"];
        }
        //check :: ACCOUNT-BILL-CYCLE
        if ($scope.getAuthen["shopType"] == "0") {
            data["order"]["order-items"][0]["order-data"]["ACCOUNT-BILL-CYCLE"] = $scope.billCycleSelected;
        } else {
            delete data["order"]["order-items"][0]["order-data"]["ACCOUNT-BILL-CYCLE"];
        }
        //check :: ROOT/CHILD/NORMAL
        if ($scope.isAccount_child == true) {
            data["order"]["order-items"][0]["order-data"]["OU-HIERARCHYTYPE"] = $scope.dataAccountPreverify["installed-products"][0]["ou-hierarchytype"];
            data["order"]["order-items"][0]["order-data"]["REQUIRE-PRICEPLAN"] = $scope.dataAccountPreverify["installed-products"][0]["product-properties"]["REQUIRE-PRICEPLAN"];
            if ($scope.dataAccountPreverify["installed-products"][0]["ou-hierarchytype"] == "CHILD") {
                data["order"]["order-items"][0]["order-data"]["PARENT-OUID"] = $scope.dataAccountPreverify["installed-products"][0]["parent-ouId"];
            } else {
                delete data["order"]["order-items"][0]["order-data"]["PARENT-OUID"];
            }
        } else {
            delete data["order"]["order-items"][0]["order-data"]["OU-HIERARCHYTYPE"];
            delete data["order"]["order-items"][0]["order-data"]["PARENT-OUID"];
        }
        //check :: SUBSCRIBER TYPE
        if ($scope.useNumberType == "BC" && $scope.customerType != 'N') {
            delete data["order"]["order-items"][0]["order-data"]["SUBSCRIBER-TITLE-CODE"];
            delete data["order"]["order-items"][0]["order-data"]["SUBSCRIBER-TITLE"];
            delete data["order"]["order-items"][0]["order-data"]["SUBSCRIBER-GENDER"];
            data["order"]["order-items"][0]["order-data"]["SUBSCRIBER-LASTNAME"] = "";
        }

        // //check :: SUB/OU
        // if ($scope.isAccount_child == true || $scope.customerType == 'N') {
        //     delete data["order"]["order-items"][0]["order-data"]["PRICEPLAN-SERVICE-LEVEL"];
        // } else {
        //     data["order"]["order-items"][0]["order-data"]["PRICEPLAN-SERVICE-LEVEL"] = $scope.promotionLevel == "OU" ? "OU" : "SUBSCRIBER";
        // }
        //check :: SUB/OU
        data["order"]["order-items"][0]["order-data"]["PRICEPLAN-SERVICE-LEVEL"] = $scope.promotionLevel == "OU" ? "OU" : "SUBSCRIBER";
        if ($scope.isAccount_child == true || $scope.customerType == 'N') {
            delete data["order"]["order-items"][0]["order-data"]["PRICEPLAN-SERVICE-LEVEL"];
        }



        //call post
        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI',
            'E2E_REFID': $scope.orderId
        };
        console.log(data);
        console.log(JSON.stringify(data));
        if (SystemService.demo) {
            var result = {
                data: {
                    "status": "SUCCESSFUL",
                    "display-messages": [{
                        "message": "Order ORD150700000032 successful saved.",
                        "message-type": "INFORMATION",
                        "en-message": "Order ORD150700000032 successful saved.",
                        "th-message": "รายการคำขอเลขที่ ORD150700000032 ได้รับข้อมูลเรียบร้อยแล้ว"
                    }, {
                        "message": "",
                        "message-type": "",
                        "en-message": "",
                        "th-message": "* หมายเลขได้รับสิทธิตามแคมเปญ"
                    }],
                    "trx-id": "03J5HVSFXH8R",
                    "process-instance": "tpx61.true.th (instance: sale)"

                }
            }
            SystemService.showBeforeClose({
                "message": result.data["display-messages"][0]["th-message"],
                "message2": result.data["display-messages"].length > 1 ? result.data["display-messages"][1]["th-message"] : ""
            });
        } else {
            SystemService.callServicePost(data, headers, function(result) {
                console.log(result);
                //save report to server
                SystemService.saveReportToServer({}, function(resultSaveReport) {});
                if (result.status) {
                    SystemService.showBeforeClose({
                        "message": result.data["display-messages"][0]["th-message"],
                        "message2": result.data["display-messages"].length > 1 ? result.data["display-messages"][1]["th-message"] : ""
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

    $scope.printAndSaveOrder = function() {
        //case for PDF Android ::18-05-2016 //xsam32
        SystemService.checkPDFAndroid_printNoneShop();
        $scope.saveOrder();
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
            'value': $scope.newOwner.prefixTH
        });
        if (newTitle.length > 0) {
            newTitle = newTitle[0]['th-description'];
        } else {
            newTitle = "";
        }
        //IBC
        var firstname = "";
        var lastname = "";
        var title = "";
        var titlecode = "";
        var isBC = null;

        //??????????????????????????????????????????
        if ($scope.customerType == 'N') {
            //I
            firstname = $scope.newOwner.firstNameTH;
            lastname = $scope.newOwner.lastNameTH;
            title = $scope.newOwner.prefixTH == 'T4' ? "ดร." : $scope.titleOther;
            titlecode = customerType == 'Y' ? "" : $scope.newOwner.prefixTH;
            isBC = null;
        } else {
            //BC
            firstname = $scope.data.customerProfile["firstname"];
            lastname = $scope.data.customerProfile["lastname"];
            title = $scope.data.customerProfile["title"];
            titlecode = customerType == 'Y' ? "" : $scope.data.customerProfile["title-code"];
            isBC = 'Y';
        }



        var data = {
            "func": "PEP",
            "header": {
                "title-code": titlecode,
                "title": title,
                "firstname": firstname,
                "lastname": lastname,
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
                "isBC": isBC,
                "oldOwner": "",
                "newOwner": $scope.bcName
                    // "cosOldOwnerData": {
                    //     "title": $scope.data.customerProfile['title'],
                    //     "firstname": $scope.data.customerProfile['firstname'],
                    //     "lastname": $scope.data.customerProfile['lastname']
                    // },
                    // "cosNewOwnerData": {
                    //     "title": newTitle,
                    //     "firstname": $scope.newOwner.firstNameTH,
                    //     "lastname": $scope.newOwner.lastNameTH,
                    //     "photo": $scope.varPhotoLastest,
                    //     "id-number": $scope.customer['id-number'],
                    //NEW---
                    // "photoIdCard": cardValueDataNew["photoIdCard"],

                //SC=Scan
                //SN=Snap
                // "photoType": cardValueDataNew["photoType"],
                // "titleEn": cardValueDataNew["titleEn"],
                // "firstnameEn": cardValueDataNew["firstnameEn"],
                // "lastnameEn": cardValueDataNew["lastnameEn"],
                // "expireDay": cardValueDataNew["expireDay"],
                // "birthDay": cardValueDataNew["birthDay"],
                // "issueDay": cardValueDataNew["issueDay"],

                //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                // "homeNumber": cardValueDataNew["homeNumber"],
                // "moo": cardValueDataNew["moo"],
                // "trok": cardValueDataNew["trok"],
                // "soi": cardValueDataNew["soi"],
                // "road": cardValueDataNew["road"],
                // "district": cardValueDataNew["district"],
                // "amphur": cardValueDataNew["amphur"],
                // "province": cardValueDataNew["province"]
                //NEW---
            }
            // }
        };
        console.log($scope.data);
        console.log(data);
        console.log(JSON.stringify(data));

        var pdfShopCode = $scope.partnerCode;
        localStorage.setItem('pdfShopCode', pdfShopCode);

        //api generatePDF
        var srcPDF = "";
        SystemService.generatePDF(data, function(result) {
            var url = result;

            SystemService.printPDF(url);
            //printObjectPdf();

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
    $scope.changOpenserviceBC = "L";
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
            //$scope.changOpenserviceBC = false;

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
            //$scope.changOpenserviceBC = true;
        } else {
            //$scope.changOpenserviceBC = false;
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
        $scope.clearDataAccount();

        SystemService.showLoading();
        //=========================checkMaxAllow====================
        var checkMaxAllow = function(result) {
            SystemService.hideLoading();
            console.log(result);
            if (result.data['display-messages'].length > 0 && result.data['display-messages'][0]['message-type'] == 'ERROR') {
                //check maxallow
                if (result.data["display-messages"][0]["message-code"] == 'TMV-PREVERIFY-11010') {
                    $scope.showApprovCode = true;
                    $scope.isVerify = false;
                    idFocus = $scope.customerType == 'N' ? "approvecodeI" : "approvecodeBC";
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
            "accountCat": $scope.getAccountCat(),
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
        if (SystemService.demo) {
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
    $scope.isChangeLang = false; //Edit 20160526 fix bug change address language
    $scope.isChangeLangBC = false; //Edit 20160526 fix bug change address language
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
    $scope.onEnterAddressBC = function() {
        if ($scope.addressListBC.length == 1) {
            $scope.setSearchAddressBC($scope.addressListBC[0]);
        }
        if ($scope.addressListBC.length == 0 && $scope.txtSearchAddressBC) {
            $scope.onInputAddressBC();
        }
    };
    $scope.onFocusAddress = function() {
        $scope.onInputAddress();
        // if ($scope.addressList.length > 0) {
        //     $('#ulAddressList').show();
        // }
    };
    $scope.onFocusAddressBC = function() {
        $scope.onInputAddressBC();
        // if ($scope.addressListBC.length > 0) {
        //     $('#ulAddressListBC').show();
        // }
    };
    $scope.onBlurAddress = function() {
        setTimeout(function() {
            if ($('.idInputAddress').is(':focus') == true || $('#ulAddressList:hover').length > 0) {
                //
            } else {
                $('#ulAddressList').hide();
            }
        }, 100);
    };
    $scope.onBlurAddressBC = function() {
        setTimeout(function() {
            if ($('.idInputAddressBC').is(':focus') == true || $('#ulAddressListBC:hover').length > 0) {
                //
            } else {
                $('#ulAddressListBC').hide();
            }
        }, 100);
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

    //Edit 20160526 fix bug change address language
    $scope.clearAddress = function() {
        $scope.mailAddress.district = "";
        $scope.mailAddress.amphur = "";
        $scope.mailAddress.province = "";
        $scope.mailAddress.postcode = "";
    }

    $scope.clearAddressBC = function() {
            $scope.mailAddressBC.district = "";
            $scope.mailAddressBC.amphur = "";
            $scope.mailAddressBC.province = "";
            $scope.mailAddressBC.postcode = "";
        }
        // ================================================

    var filterAddressListBC = function(txtSearch) {
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = tempAddressListBC;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.addressListBC = arr;
        } else {
            $scope.addressListBC = $filter('filter')(tempAddressListBC, txtSearch);
        }
        setTimeout(function() {
            if ($scope.addressListBC.length == 0) {
                $('#ulAddressListBC').hide();
            } else {
                $('#ulAddressListBC').show();
            }
        }, 0);
    };
    $scope.txtSearchAddress = "";
    $scope.txtSearchAddressBC = "";
    var accountLang = "TH";
    var accountLangBC = "TH";
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
                                    if ($scope.isChangeLang == true) {
                                        $scope.clearAddress();
                                        $('#ulAddressList').show();
                                        $scope.isChangeLang = false;
                                        return;
                                    }
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
    $scope.onInputAddressBC = function() {
        $scope.txtSearchAddressBC = "";
        $scope.txtSearchAddressBC += checkNull($scope.txtSearchAddressBC, $scope.mailAddressBC.postcode);
        $scope.txtSearchAddressBC += checkNull($scope.txtSearchAddressBC, $scope.mailAddressBC.province);
        $scope.txtSearchAddressBC += checkNull($scope.txtSearchAddressBC, $scope.mailAddressBC.amphur);
        $scope.txtSearchAddressBC += checkNull($scope.txtSearchAddressBC, $scope.mailAddressBC.district);
        var target = "profiles/master/address/search?keyword=" + $scope.txtSearchAddressBC + "&lang=" + $scope.mailAddressBC.accountLang;
        console.log($scope.txtSearchAddress.length, target);
        if ($scope.txtSearchAddressBC.length >= 3) {
            if (accountLangBC != $scope.mailAddressBC.accountLang) {
                $scope.pauseAddressBC = false;
                $scope.isLoadAddressBC = false;
                $scope.isChangeLangBC = true; //Edit 20160526 fix bug change address language
                accountLangBC = $scope.mailAddressBC.accountLang;
            }
            if (!$scope.isLoadAddressBC) {
                //SystemService.showLoading();

                if (!$scope.pauseAddressBC) {
                    SystemService.getAddressMaster(target, function(result) {
                        //SystemService.hideLoading();

                        if (result.status) {
                            $scope.isLoadAddressBC = true;
                            $scope.addressListBC = result.data['response-data'];
                            tempAddressListBC = result.data['response-data'];

                            if ($scope.addressListBC.length == 1) {
                                $scope.setSearchAddressBC($scope.addressListBC[0]);
                            } else { //Edit 20160526 fix bug change address language
                                var arr = SystemService.filterAddressList(tempAddressListBC, $scope.txtSearchAddressBC);
                                if ($scope.addressListBC.length > 1 && arr.length == 0) {
                                    if ($scope.isChangeLangBC == true) {
                                        $scope.isChangeLangBC = false;
                                        $scope.clearAddressBC();
                                        $('#ulAddressListBC').show();
                                        return;
                                    }
                                }
                            }
                            // =======================================================

                            filterAddressListBC($scope.txtSearchAddressBC);
                        }
                    });
                }
                $scope.pauseAddressBC = true;
            } else {
                filterAddressListBC($scope.txtSearchAddressBC);
            }
        } else {
            $scope.pauseAddressBC = false;
            $scope.isLoadAddressBC = false;
            $('#ulAddressListBC').hide();
            $scope.addressListBC = [];
        }
    };
    $scope.onChangeBillPaymentAccountLang = function() {
        $scope.isChangeLang = true; //Edit 20160526 fix bug change address language
        $scope.onInputAddress();
    };

    $scope.onChangeBillPaymentAccountLangBC = function() {
        $scope.isChangeLangBC = true; //Edit 20160526 fix bug change address language
        $scope.onInputAddressBC();
    };
    $scope.setSearchAddress = function(address) {
        console.log(address);
        $scope.mailAddress.province = address['province'];
        $scope.mailAddress.amphur = address['district'];
        $scope.mailAddress.district = address['subdistrict'];
        $scope.mailAddress.postcode = address['zipcode'];
        $('#ulAddressList').hide();
    };
    $scope.setSearchAddressBC = function(address) {
        console.log(address);
        $scope.mailAddressBC.province = address['province'];
        $scope.mailAddressBC.amphur = address['district'];
        $scope.mailAddressBC.district = address['subdistrict'];
        $scope.mailAddressBC.postcode = address['zipcode'];
        $('#ulAddressListBC').hide();
    };
    $scope.onSelectedAddress = function(e) {

        $scope.setSearchAddress($scope.addressList[e]);
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 0);
    };
    $scope.onSelectedAddressBC = function(e) {

        $scope.setSearchAddressBC($scope.addressListBC[e]);
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

    $scope.useNumberType = "BC";
    $scope.onChangCheckno = function() {
        setTimeout(function() {
            if ($scope.customerType != 'N') {
                $scope.newOwner2.birthDay = "";
                $scope.newOwner2.firstNameTH = "";
                $scope.newOwner2.lastNameTH = "";

                $scope.newOwner2.prefixTH = "T5";

                $scope.bcName2 = $scope.bcName;

                if ($scope.changCheckno == false) {
                    $scope.useNumberType = "BC";
                }

                $('#titleOtherRegisterdBC').val('คุณ');
                $('#birthDayRegisterdBC').val('');
                $('#idBindDataAgain').click();
            } else {
                if ($scope.customerType == 'N') {
                    $('#titleOtherRegisterd').val($('#titleOther').val());
                    $('#titleRegisterd').val($('#prefixTH3').val());
                    $('#sex32').val($('#sex3').val());
                }
            }
            // $scope.onselectPrefix2();
        }, 500);

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
            $('#btnSavePhoto_Mobile').hide();
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
    $scope.mobileCamSnap = function() {
        var msg = $('#varMobileCam').val();
        msg = msg.replace('data:image/png;base64,', '');
        msg = msg.replace('data:image/jpeg;base64,', '');
        //console.log(msg); 
        // $('#btnSavePhoto_Mobile').hide();
        $scope.varPhoto = msg;
    };
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
        var setTab = function(tabId) {
            if ($scope.customerType != 'N') {
                $scope.slipType = tabId;
                $('#slipTypeH').removeClass('active');
                $('#slipTypeB').removeClass('active');
                $('#slipType' + tabId).addClass('active');
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
        } else if (($scope.newOwner.prefixTH == "T5") && isNull($('#titleOther').val()) && $scope.customerType == 'N') {
            showValidate("titleOther", ValidateMsgService.data.msgNewPosCusPrefixEmpty);
        } else if (isNull($scope.customer['id-number'])) {
            showValidate("citizenID3", ValidateMsgService.data.msgNewCusIDnoEmpty);
        } else if ((isNull($scope.customer['tax-id']) || $scope.customer['tax-id'].length != 13) && $scope.customerType == 'N' && $scope.isVerify) {
            showValidate("taxId3", ValidateMsgService.data.msgTaxNumberEmpty);
        } else if ((isNull($scope.customer['branch-code']) || $scope.customer['branch-code'].length != 5) && $scope.customerType == 'N' && $scope.isVerify) {
            showValidate("branchCodeI", ValidateMsgService.data.msgBranchCodeEmpty);
        } else if (isNull($scope.newOwner.firstNameTH) && $scope.customerType == 'N') {
            showValidate("firstNameTH3", ValidateMsgService.data.msgNewCusFirstNameEmpty);
        } else if (isNull($scope.newOwner.lastNameTH) && $scope.customerType == 'N') {
            showValidate("lastNameTH3", ValidateMsgService.data.msgNewCusLastNameEmpty);
        } else if ((isNull($scope.newOwner.sex) || isNull($('#sex3').val())) && $scope.customerType == 'N') {
            showValidate("sex3", ValidateMsgService.data.msgNewPostCusGenderEmpty);
        } else if ((isNull($scope.customer['tax-id']) || $scope.customer['tax-id'].length != 13) && $scope.customerType != 'N' && $scope.isVerify) {
            showValidate("taxNumber", ValidateMsgService.data.msgTaxNumberEmpty);
        } else if ((isNull($scope.customer['branch-code']) || $scope.customer['branch-code'].length != 5) && $scope.customerType != 'N' && $scope.isVerify) {
            showValidate("branchCode", ValidateMsgService.data.msgBranchCodeEmpty);
        } else if (isNull($scope.bcName) && $scope.customerType != 'N' && $scope.isVerify) {
            showValidate("bcName", ValidateMsgService.data.msgBcNameEmpty);
        } else if (isNull($scope.auth_1['id-number']) && $scope.customerType != 'N' && $scope.isVerify) {
            showValidate("auth_1_id_number", ValidateMsgService.data.msgAuth_1_id_numberEmpty);
        } else if (isNull($scope.auth_1['firstname']) && $scope.customerType != 'N' && $scope.isVerify) {
            showValidate("auth_1_firstName", ValidateMsgService.data.msgAuth_1_firstNameEmpty);
        } else if (isNull($scope.auth_1['lastname']) && $scope.customerType != 'N' && $scope.isVerify) {
            showValidate("auth_1_lastName", ValidateMsgService.data.msgAuth_1_lastNamerEmpty);
        } else if (isNull($scope.poa_1['id-number']) && $scope.customerType != 'N' && $scope.isVerify && $scope.isAuthorizeBC) {
            showValidate("poa_1_id_number", ValidateMsgService.data.msgPoa_1_id_numberEmpty);
        } else if (isNull($scope.poa_1['firstname']) && $scope.customerType != 'N' && $scope.isVerify && $scope.isAuthorizeBC) {
            showValidate("poa_1_firstname", ValidateMsgService.data.msgPoa_1_firstnameEmpty);
        } else if (isNull($scope.poa_1['lastname']) && $scope.customerType != 'N' && $scope.isVerify && $scope.isAuthorizeBC) {
            showValidate("poa_1_lastname", ValidateMsgService.data.msgPoa_1_lastnameEmpty);
        } else if (isNull($scope.accountID_root) && $scope.customerType != 'N' && $scope.changOpenserviceBC == 'S') {
            if ($scope.customSelectBC == 'CUSTOMER') {
                showValidate("accountID_root", ValidateMsgService.data.msgAccountID_rootEmpty);
            } else {
                showValidate("accountID_child", ValidateMsgService.data.msgAccountID_childEmpty);
            }
        } else if (isNull($scope.pricePlan.name)) {
            showValidate("ppfilter", ValidateMsgService.data.pleaseSelectPP);
        } else if (errorCapmax != "") {
            showValidate(errorCapmaxId, errorCapmaxMsg);
        } else if (errorCUG) {
            showValidate("txtSearchCUG", ValidateMsgService.data.cugMsg);
        } else if ($scope.specialOfferType.FF && countFF < $scope.ffData.min) {
            showValidate(idFF, ValidateMsgService.data.ffMsg);
            //showValidate(idFF, {
            //    "message": "",
            //    "message-code": "",
            //    "message-type": "WARNING",
            //    "en-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
            //    "th-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
            //    "technical-message": "changePricePlanController"
            //});
        } else if (isNull($scope.newOwner2.firstNameTH) && $scope.customerType != 'N' && $scope.changCheckno == true && $scope.useNumberType == 'I') {
            showValidate("firstNameRegisterdBC", ValidateMsgService.data.msgSubFirstNameEmpty);
        } else if (isNull($scope.newOwner2.lastNameTH) && $scope.customerType != 'N' && $scope.changCheckno == true && $scope.useNumberType == 'I') {
            showValidate("lastNameRegisterdBC", ValidateMsgService.data.msgSubLastNameEmpty);
        } else if ((isNull($scope.newOwner2.sex) || isNull($('#sex32BC').val())) && $scope.customerType != 'N' && $scope.changCheckno == true && $scope.useNumberType == 'I') {
            showValidate("sex32BC", ValidateMsgService.data.msgSubGenderEmpty);
            //20160606 Cancel validate subscriber birthdate by waramun
            // } else if (isNull($('#birthDayRegisterdBC').val()) && $scope.customerType != 'N' && $scope.changCheckno == true && $scope.useNumberType == 'I') {
            //     showValidate("birthDayRegisterdBC", ValidateMsgService.data.msgSubBirthdateEmpty);
        } else if (isNull($scope.bcName2) && $scope.customerType != 'N' && $scope.changCheckno == true && $scope.useNumberType == 'BC') {
            showValidate("bcName2", ValidateMsgService.data.msgSubFirstNameEmpty);
        } else if (isNull($scope.newOwner2.firstNameTH) && $scope.customerType == 'N') {
            showValidate("firstNameRegisterd", ValidateMsgService.data.msgSubFirstNameEmpty);
        } else if (isNull($scope.newOwner2.lastNameTH) && $scope.customerType == 'N') {
            showValidate("lastNameRegisterd", ValidateMsgService.data.msgSubLastNameEmpty);
        } else if ((isNull($scope.newOwner2.sex) || isNull($('#sex32').val())) && $scope.customerType == 'N') {
            showValidate("sex32", ValidateMsgService.data.msgSubGenderEmpty);
            //BILLING_ADDRESS
            //BILLING_ADDRESS
        } else if (isNull($scope.mailAddress.sendName) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('H');
            showValidate("txtMailAddressSendName", ValidateMsgService.data.msgTaxAddress_ContactNameEmpty);
        } else if (isNull($scope.mailAddress.homeNumber) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtMailAdressHomeNumber", ValidateMsgService.data.msgBillHouseNoEmpty);
        } else if (isNull($scope.mailAddress.moo) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtMailAddressMoo", ValidateMsgService.data.msgBillVillageNoEmpty);
        } else if (isNull($scope.mailAddress.road) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtMailAddressRoad", ValidateMsgService.data.msgBillRoadEmpty);
        } else if (isNull($scope.mailAddress.district) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtMaillAddressDistrict", ValidateMsgService.data.msgBillSubDistrictEmpty);
        } else if (isNull($scope.mailAddress.amphur) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtmailAddressamphur", ValidateMsgService.data.msgBillDistrictEmpty);
        } else if (isNull($scope.mailAddress.province) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtmailAddressprovince", ValidateMsgService.data.msgBillProvinceEmpty);
        } else if (isNull($scope.mailAddress.postcode) && $scope.isAccount_child == false) {
            setTab('H');
            showValidate("txtmailAddresspostcode", ValidateMsgService.data.msgBillZipcodeEmpty);
            //TAX_ADDRESS
            //TAX_ADDRESS
        } else if (isNull($scope.mailAddressBC.sendName) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtMailAddressBCSendName", ValidateMsgService.data.msgAddressList_ContactNameEmpty);
        } else if (isNull($scope.mailAddressBC.homeNumber) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtMailAdressHomeNumberBC", ValidateMsgService.data.msgBillHouseNoEmpty);
        } else if (isNull($scope.mailAddressBC.moo) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtMailAddressMooBC", ValidateMsgService.data.msgBillVillageNoEmpty);
        } else if (isNull($scope.mailAddressBC.road) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtMailAddressRoadBC", ValidateMsgService.data.msgBillRoadEmpty);
        } else if (isNull($scope.mailAddressBC.district) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtMaillAddressDistrictBC", ValidateMsgService.data.msgBillSubDistrictEmpty);
        } else if (isNull($scope.mailAddressBC.amphur) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtmailAddressamphurBC", ValidateMsgService.data.msgBillDistrictEmpty);
        } else if (isNull($scope.mailAddressBC.province) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtmailAddressprovinceBC", ValidateMsgService.data.msgBillProvinceEmpty);
        } else if (isNull($scope.mailAddressBC.postcode) && $scope.isAccount_child == false && $scope.customerType != 'N') {
            setTab('B');
            showValidate("txtmailAddresspostcodeBC", ValidateMsgService.data.msgBillZipcodeEmpty);
            //
        } else if ($scope.blah == 'E' && isNull($scope.billPayment.email)) {
            showValidate("idBillPaymentEmail", ValidateMsgService.data.msgBillEmailEmpty);
        } else if ($scope.blah == 'S' && isNull($scope.billPayment.smss)) {
            showValidate("txtBillPaymentSmss", ValidateMsgService.data.msgBillSmsNoEmpty);
        } else if (isNull($scope.contactNo.number) && $scope.isAccount_child == false) {
            showValidate("txtcontactNonumber", ValidateMsgService.data.msgCusContractNoEmpty);
        } else if (errorFUTURE) {
            showValidate("txtDateManual", ValidateMsgService.data.effectiveDateMsg);
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
        if ($scope.SubNo === 'null') {
            // $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 500);
        }
        $scope.isClickPrint = false;
        isFocus = true;
        $scope.clickModalReadCard = true;
        $scope.initModalReadCard();



        if (idFocus) {
            setTimeout(function() {
                $('#' + idFocus).focus();
                idFocus = "";
            }, 200);
        } else {
            // $scope.validateUI();
        }
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
    $scope.checkUserShop = function() {
        if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
            $scope.userShop = true;
        } else {
            $scope.userShop = false;
        }
    };
    $scope.checkUserNonShop = function() {
        if ($scope.shopType == "0") {
            $scope.userNonShop = true;
        } else {
            $scope.userNonShop = false;
        }
    };
    $scope.checkValueDate = function() {
        if ($scope.newOwner.birthDay) {
            // 20160722 enable field in case use lastestcus by waramun
            // $scope.checkBirthDate = true;
        } else {
            $scope.checkBirthDate = false;
        }
    };
    $scope.cardExpire = false;
    $scope.checkValueExpireDate = function() {
        if ($scope.newOwner.expireDay) {
            var str = $scope.newOwner.expireDay;
            // var res1 = str.split("T");
            var res = str.split("/");
            var a = moment([Number(moment().format('YYYY')) + 543, moment().format('MM'), moment().format('DD')]);
            var b = moment([(Number(res[2])), res[1], res[0]]);

            //return moment(expireDate, 'DD/MM/YYYY').diff(moment(), 'days') >= 0;
            // return (a.diff(b, 'days') >= 0);
            //return SystemService.convertDateToTH(moment(date).format('DD/MM/YYYY'), 'TH');
            if (a.diff(b, 'days') >= 0) {
                $scope.cardExpire = false;
                $scope.newOwner.expireDay = "";
                $('#expireDate').val($scope.newOwner.expireDay);
            } else {
                // 20160722 enable expire date field in case use lastestcus by waramun
                // $scope.cardExpire = true;

            }
        } else {
            $scope.cardExpire = false;
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
            } else {
                $scope.isNumberTelLengthSms = true;
                $scope.billPayment.smss = '';
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
        // if (txtSearch) {
        //     if (txtSearch.indexOf(' ') > 0) {
        //         var txtList = txtSearch.split(' ');
        //         var arr = valPricePlans;
        //         console.log(txtList);
        //         for (var i = 0; i < txtList.length; i++) {
        //             arr = $filter('filter')(arr, txtList[i]);
        //         }
        //         $scope.propositionList = arr;
        //     } else {
        //         $scope.propositionList = $filter('filter')(valPricePlans, txtSearch);
        //     }
        // }
        $scope.propositionList = SystemService.smartSearch(valPricePlans, txtSearch);
    };
    $scope.setDefaultSubType = function() {
        if (SystemService.checkObj($scope.data, ["installedProducts", "company-code"]) && $scope.customerType == 'N') {
            if ($scope.data.installedProducts["company-code"] == "RM") {
                $scope.subCompanyType = "RPI";
            } else if ($scope.data.installedProducts["company-code"] == "RF") {
                $scope.subCompanyType = "FIN";
            } else {
                $scope.subCompanyType = "";
            }
            setTimeout(function() {
                $('#subCompanyType').val($scope.subCompanyType);
            }, 1000);
        }
    }

    $scope.newGenderChange = function() {
        $('#sex32').val($scope.newOwner.sex);
        $scope.newOwner2.sex = $scope.newOwner.sex;
    }
});
