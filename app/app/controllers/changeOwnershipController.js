// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('changeOwnershipController', function (
    $ngBootbox,
    $scope,
    AuthenService,
    SystemService,
    $routeParams,
    ReasonService,
    changeOwnershipService,
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
    $scope.divID = "changeOwnershipContent";
    $scope.isReadCardSuccess = false;
    $scope.isAuthorize = false;
    $scope.isMatch = true;
    $scope.isVerify = false;//for demo ============ true
    $scope.isSelectedPricePlan2 = false;

    $scope.demo = SystemService.demo;

    $scope.showApprovCode = false;
    $scope.isCustomerProfile = false;
    $scope.showPricePlanRC = true;

    $scope.isClickPrint = true;

    $scope.CitizenID = "";
    $scope.isValidateSave = true;
    $scope.isLastestUser = false;
    $scope.isLastestAdress = false;

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


    var isFocus = false;
    var idFocus = "";


    $scope.secondAuthenData = {};

    $scope.cardType = {
        value: "I"
    };

    setTimeout(function () {
        SystemService.validateNummeric();
    }, 1000);
    //SystemService.genDatePicker();
    SystemService.calendarDatePicker();
    $scope.SetCardValue2 = function (result) {
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

    $scope.readCardError = function (msg) {
        $.fancybox.close();
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": msg,
            "th-message": msg,
            "technical-message": "changeOwnerShipController"
        });
    };


    $scope.initModalReadCard = function () {
        if ($scope.shopType == "1") {
            setTimeout(function () {
                $('#loadingReadCard').hide();
                $('#unMatch').hide();
                $('#CitizenID').val('');
                if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                    $('#CitizenID').prop('disabled', false);
                    setTimeout(function () {
                        $('#CitizenID').focus();
                        $('#btnSSO').hide();
                    }, 100);

                } else {
                    $('#CitizenID').prop('disabled', true);
                }
            }, 1000);

        }

        setTimeout(function () {
            $('#loadingReadCard2').hide();
            $('#unMatch2').hide();
        }, 1000);


    };

    $scope.SetCardValue = function (result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        //console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


        if ($scope.cardInfo.CitizenID == $scope.data.customerProfile['id-number']) {
            $scope.isCardValueData = true;

            $scope.isReadCardSuccess = true;
            $scope.isCustomerProfile = true;
            $.fancybox.close();
            setTimeout(function () {
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

    $scope.SetCardValue3 = function (result) {
        $('#loadingReadCard3').hide();
        $scope.showEnableNewOwnerBirthday = false;
         $scope.showEnableNewOwnerExpireDay = false;
        $scope.cardInfo3 = eval(result);
        console.log($scope.cardInfo3);
        var prefix = "T2";
        if($scope.cardInfo3.PrefixEN == "Mr."){
            prefix = "T1";
        }   
        if($scope.cardInfo3.PrefixEN == "Miss"){
            prefix = "T3";
        }

        var sex = "MALE";
        if($scope.cardInfo3.Sex == "2"){
            sex = "FEMALE";
        }

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

        $scope.cardType.value= "I";
        $('#cardType').val('I');

        //binding Tax Id
        $('#taxId3').val($scope.cardInfo3.CitizenID);

        //binding user registerd - ระบุผู้ใช้หมายเลข
        $('#titleRegisterd').val($scope.cardInfo3.PrefixTH);
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
        setTimeout(function(){
            $('#idBindDataAgain').click();
        }, 1000);
        
        $.fancybox.close();
    };

    $scope.changeType = function (customerType) {
        $scope.customerType = customerType;
        $scope.isVerify = false;
        $scope.promotion = "";

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
    $scope.isInputSubNo = false;
    $scope.onInputSubNo = function () {
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
    $scope.onInputSubNo_reset = function () {
        $scope.isInputSubNo = false;
        $scope.onInputSubNo();
    };
    $scope.isNumberSubNo = false;
    $scope.onKeyUpSubNo = function (charCode) {
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

    $scope.SubNo = $routeParams.subno == '' ? 'null' : $routeParams.subno;
    $scope.onLoad = function () {
        $('#loadingReadCard3').hide();
        AuthenService.getAuthen(function (result) {
            $scope.getAuthen = result;
            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
            }

            //call generate-order-id
            SystemService.showLoading();
            SystemService.getOrderId(result.channel, result.shopcode, function (resultData) {
                localStorage.setItem('orderId', resultData.orderId);
                $scope.TrxID = resultData.TrxID;
                $scope.orderId = resultData.orderId;



                //คำนำหน้า
                SystemService.getMaster_list("CUST-TITLE-TYPE", function (result) {
                    $scope.titleTypeListx = result;
                    console.log($scope.titleTypeListx);
                });
                //คำนำหน้า อื่นๆ
                SystemService.getMaster_list("CUST-TITLE-OTHER-TYPE", function (result) {
                    $scope.titleOtherTypeList = result;
                    console.log($scope.titleOtherTypeList);
                });
                //ประเภทของบัตร
                SystemService.getMaster_list("CUST-ID-TYPE-I", function (result) {
                    $scope.cardTypeOptions = result;
                    console.log($scope.cardTypeOptions);
                });

                //reason
                ReasonService.list("119", function (result) {
                    $scope.reasons = result;
                    $scope.reason = $scope.reasons[39];
                    $scope.selectReason = $scope.reasons[39];
                });

                //เพศ
                SystemService.getMaster_list("CUST-GENDER", function (result) {
                    $scope.genderTypeList = result;
                    console.log($scope.genderTypeList);
                });
                //call getCUGId
                ChangePricePlanService.getCUGList(function (result) {
                    $scope.cugList = result.data["cug-list"];
                    //alert($scope.cugList.length);
                });


                $scope.shopType = result.shopType;
                $scope.id = $routeParams.id;

                if ($scope.SubNo != 'null') {
                    changeOwnershipService.validateChangeOwnershipCallback($scope.SubNo, function (result) {
                        if (result.status) {
                            $scope.data = result;
                            $scope.billPayment.smss = $scope.data.installedProducts['product-id-number'];

                            $scope.data2 = result;

                            console.log($scope.data);

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


                                setTimeout(function () {
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
                if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length >= 1) {
                    $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
                }




            });



        });
    };

    $scope.onChangeCardTypes = function(){
        console.log($scope.cardType.value);
        if($scope.cardType.value == "I"){

            $scope.customer['tax-id'] = $scope.customer['id-number'];
            console.log($scope.customer['tax-id'],$scope.customer['id-number']);
        } else {
            $scope.customer['tax-id'] = "0000000000000";
        }
    }
    $scope.onInputShopCode = function () {
        if ($scope.partnerCode && $scope.partnerCode.length == 8) {
            $scope.onCheckShopCode();
        }
    };
    $scope.onCheckShopCode = function () {
        SystemService.showLoading();
        var target = "profiles/partner/validatepartner?function-type=CHANGE_OWNERSHIP&partner-code=" + $scope.partnerCode;
        changeOwnershipService.validatePartnerCallback(target, function (result) {
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
                setTimeout(function () {
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
    $scope.openPricePlanDialog = function () {
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
        var list = $filter('filter')($scope.propositionList, $scope.pricePlanFilter.value);
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
    $scope.callPropositionList = function () {
        if ($scope.partnerCode) {
            var propParam = {
                'company-code': $scope.data.installedProducts["company-code"],
                'customer-type': $scope.data.installedProducts["account-category"],
                'propo-type': 'NEW',
                'mobile-servicetype': $scope.data.installedProducts["mobile-servicetype"],
                'partner-code': $scope.partnerCode,
                'privilege': false
                //,'proposition': ''

            };
            changeOwnershipService.propositionCallback(propParam, function (resultProp) {
                if (resultProp.status) {
                    $scope.propositions = resultProp.data['response-data'];
                }
            });
        }
    };
    //salepriceplan
    $scope.isLoadPricePlan = false;
    $scope.callSalePricePlanList = function () {
        if ($scope.isVerify) {
            SystemService.showLoading();
            var target = "sales/catalog/product/tmv/priceplan/search?" +
                "company-code=" + $scope.data.installedProducts['company-code'] +
                "&customer-type=" + $scope.data.installedProducts['account-category'] +
                "&customer-subtype=" + $scope.data.installedProducts['account-sub-type'] +
                "&service-level=" + $scope.data.installedProducts['service-level'] +
                "&proposition=" + $scope.promotion +
                "&partner-code=" + $scope.partnerCode +
                "&privilege=false";


            changeOwnershipService.salePriceplanCallback(target, function (resultGetPriceplan) {
                if (resultGetPriceplan.status) {
                    console.log(target);
                    $scope.propositionList = [];
                    valPricePlans = [];
                    var makeDataPriceplan = function (arr, proName, proCode) {
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
                    var listProp = $filter('filter')($scope.propositions, { 'proposition-code': $scope.promotion });

                    makeDataPriceplan(resultGetPriceplan.data["response-data"], listProp[0]['name'], $scope.promotion);


                    console.log($scope.propositionList);
                    $scope.isLoadPricePlan = true;
                    SystemService.hideLoading();

                } else {
                    $scope.propositionList = [];
                    valPricePlans = [];

                    SystemService.hideLoading();
                    //error
                    setTimeout(function () {
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
    $scope.focusPricePlanFilter = function () {
        if (!$scope.isLoadPricePlan) {
            //call Priceplan
            $scope.callSalePricePlanList();
        }
    };
    $scope.setAddress = function (address) {
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
    $scope.subCompanyType = "PRI";
    $scope.isAddressList = {};
    $scope.onInputCitizenID3 = function () {
            
        //ผู้จดทะเบียนใหม่
        //$scope.customer = customer;
        $scope.newOwner.firstNameTH = "";
        $scope.newOwner.lastNameTH = "";
        $scope.newOwner.prefixTH = "T2";
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

        //$scope.subCompanyType = $scope.data.accountSubtypeList[0]['name'];

        var cid = $('#citizenID3').val();
        if (cid.length >= 9) {
            SystemService.showLoading();
            if (1==1) {
                changeOwnershipService.validateGradingCallback(cid, function (resultData) {
                    console.log(resultData);
                    console.log(resultData.data["display-messages"]);
                    if (resultData.data["display-messages"].length == 0) {
                        console.log(resultData);
                        var grade = resultData.data["response-data"]["company-grade"]["grade-id"];
                        $scope.grade = resultData.data["response-data"]["company-grade"];
                        var param = {
                            'cust-type': $scope.data.installedProducts["account-category"],
                            'company': $scope.data.installedProducts["company-code"],
                            'service-type': $scope.data.installedProducts["mobile-servicetype"],
                            'grade': grade
                        };
                        changeOwnershipService.getAccountSubTypeCallback(param, function (resultST) {
                            $scope.data.accountSubtypeList = resultST.data["response-data"];
                            $scope.subCompanyType = resultST.data["response-data"][0]['name'];
                        });


                        $('#cardType').val($scope.cardType.value);

                        $scope.callPropositionList();
                        $scope.isLastestUser = false;

                        changeOwnershipService.lastestCustomerCallback(cid, "I", function (lastestCustomer) {
                            $scope.isLastestUser = true;
                            $.fancybox.close();
                            if (lastestCustomer.data['display-messages'].length > 0) {
                                //ผู้จดทะเบียนใหม่
                                //$scope.customer = customer;
                                $scope.newOwner.firstNameTH = "";
                                $scope.newOwner.lastNameTH = "";
                                $scope.newOwner.prefixTH = "T2";
                                //ระบุผู้ใช้หมายเลข
                                $scope.newOwner2.firstNameTH = "";
                                $scope.newOwner2.lastNameTH = "";
                                $scope.newOwner2.prefixTH = "T2";

                                $scope.customer['tax-id'] = cid;

                                $scope.customer['contact-mobile-number'] = "";
                                $scope.customer['contact-email'] = "";


                                $scope.contactNo.number = "";
                                $scope.contactNo.continued = "";

                                $scope.onselectPrefix();

                                $scope.subCompanyType = $scope.data.accountSubtypeList[0]['name'];

                                setTimeout(function () {
                                    $scope.isLastestAdress = false;
                                    $scope.changecusStatusN('N');
                                    $('#idBindDataAgain').click();

                                    SystemService.showAlert({
                                        "message": lastestCustomer.data["display-messages"][0]["message"],
                                        "message-code": lastestCustomer.data["display-messages"][0]["message-code"],
                                        "message-type": "WARNING",
                                        "en-message": lastestCustomer.data["display-messages"][0]["en-message"],
                                        "th-message": lastestCustomer.data["display-messages"][0]["th-message"],
                                        "technical-message": lastestCustomer.data["display-messages"][0]["technical-message"]
                                    });
                                }, 1000);
                                $scope.isAddressList = {};
                            } else {

                                var customer = lastestCustomer.data["response-data"]["customer"];

                                $scope.lastestCustomer = customer;
                                //ผู้จดทะเบียนใหม่
                                //$scope.customer = customer;
                                $scope.newOwner.firstNameTH = customer["firstname"];
                                $scope.newOwner.lastNameTH = customer["lastname"];
                                $scope.newOwner.prefixTH = customer["title-code"];
                                //ระบุผู้ใช้หมายเลข
                                $scope.newOwner2.firstNameTH = customer["firstname"];
                                $scope.newOwner2.lastNameTH = customer["lastname"];
                                $scope.newOwner2.prefixTH = customer["title-code"];

                                $scope.customer['tax-id'] = customer["id-number"];

                                $scope.customer['contact-mobile-number'] = customer['contact-mobile-number'];
                                $scope.customer['contact-email'] = customer['contact-email'];


                                $scope.contactNo.number = SystemService.getContactNo(customer["contact-number"], "number");
                                $scope.contactNo.continued = SystemService.getContactNo(customer["contact-number"], "continued");

                                $scope.isAddressList = customer['address-list']['CUSTOMER_ADDRESS'];

                                $scope.onselectPrefix();

                                $scope.subCompanyType = customer["installed-products"][0]["account-sub-type"];


                                //ที่อยู่จัดส่งเอกสาร
                                $scope.setAddress(customer['address-list']['CUSTOMER_ADDRESS']);

                                //disable ที่อยู่ลูกค้าเก่า
                                $scope.isLastestAdress = true;
                                $scope.changecusStatusN('O');

                                console.log(customer);
                                SystemService.hideLoading();



                            }
                        });
                    } else {
                        $scope.onselectPrefix();
                        SystemService.hideLoading();
                        setTimeout(function () {
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
    };
    //end check input
    //start check input for verify
    $scope.partnerCode = "";
    $scope.isCheckInputForVerify = false;
    $scope.onCheckInputForVerify = function () {
        setTimeout(function () {
            $scope.isCheckInputForVerify = false;
            $scope.newOwner.birthDay = $('#birthDay').val();
            $scope.newOwner.expireDay = $('#expireDay').val();

            console.log($scope.partnerCode.length == 8
                    , $scope.customer['id-number']
                    , $scope.cardType.value
                    , $scope.newOwner.birthDay
                    , $scope.newOwner.expireDay
                    , $scope.promotion);


            if ($scope.partnerCode.length == 8
                && $scope.customer['id-number']
                && $scope.cardType.value
                && $scope.newOwner.birthDay
                && $scope.newOwner.expireDay
                && $scope.promotion) {
                $scope.isCheckInputForVerify = true;
            } else {
                $scope.isCheckInputForVerify = false;
                $scope.isVerify = false;
                $scope.onClearPricePlan();
            }
            $scope.setBirthDateOwner2();
            $('#idBindDataAgain').click();

        }, 500);
    };
    //end check input for verify
    $scope.setBirthDateOwner2 = function () {
        $scope.newOwner2.birthDay = $scope.newOwner.birthDay;
    };


    $scope.onInputId = function () {
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

                $scope.data = $scope.data2;
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }

        }
    };
    //--------------------onInputIdLastest
    $scope.onInputIdLastest = function () {
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
    $scope.onInputIdLastestKeyUp = function () {
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
    $scope.secondAuthenDataLastest = {};
    $scope.openSSOLastest = function () {
        var openDialog = function (uri, name, options, closeCallback) {
            var win = window.open(uri, name, options);
            var interval = window.setInterval(function () {
                try {
                    if (win == null || win.closed) {
                        window.clearInterval(interval);
                        closeCallback(win);
                    }
                }
                catch (e) {
                }
            }, 1000);
            return win;
        };
        var url = SystemService.secondAuthenURL + "SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
        if ($scope.getAuthen["isSecondAuthen"]) {
            openDialog(url, "MsgWindow", "width=800, height=600", function (w) {
                //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
                SystemService.showLoading();
                SystemService.second_authen($scope.TrxID, function (result) {
                    //alert(result["status"]);
                    SystemService.hideLoading();
                    console.log(result);
                    $scope.secondAuthenDataLastest = result;
                    if (result["status"] == "SUCCESSFUL") {
                        $('#CitizenIDLastest').prop('disabled', false);
                        
                        //$scope.approver = result['response-data'][0]['loginName'];
                        //$scope.manualInputReadCard();
                    } else {
                        $.fancybox.close();
                        //unsuccessul

                        setTimeout(function () {
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
    $scope.openSSO = function () {
        var openDialog = function (uri, name, options, closeCallback) {
            var win = window.open(uri, name, options);
            var interval = window.setInterval(function () {
                try {
                    if (win == null || win.closed) {
                        window.clearInterval(interval);
                        closeCallback(win);
                    }
                }
                catch (e) {
                }
            }, 1000);
            return win;
        };
        var url = SystemService.secondAuthenURL + "SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
        if ($scope.getAuthen["isSecondAuthen"]) {
            openDialog(url, "MsgWindow", "width=800, height=600", function (w) {
                //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
                SystemService.showLoading();
                SystemService.second_authen($scope.TrxID, function (result) {
                    //alert(result["status"]);
                    SystemService.hideLoading();
                    console.log(result);
                    $scope.secondAuthenData = result;
                    if (result["status"] == "SUCCESSFUL") {
                        $scope.approver = result['response-data'][0]['loginName'];
                        $scope.manualInputReadCard();
                    } else {
                        $.fancybox.close();
                        //unsuccessul

                        setTimeout(function () {
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
    $scope.onCheckEmail = function () {
        //SystemService.setValidateEmail($scope.billPayment.email);
        if ($scope.billPayment.email) {
            if (!SystemService.validateEmail($scope.billPayment.email)) {
                idFocus = "idBillPaymentEmail";
                $scope.billPayment.email = "";
                SystemService.showAlert(ValidateMsgService.data.errFormatEmail);
            }
        }
    };
    $scope.onBlurContactEmail = function () {
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
    $scope.onselectPrefix = function () {
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
    $scope.onselectPrefix2 = function () {
        console.log($scope.newOwner2.prefixTH);
        if ($scope.newOwner2.prefixTH == 'MR.' || $scope.newOwner2.prefixTH == 'T1') {
            $scope.newOwner2.sex = "MALE";
        } else {
            $scope.newOwner2.sex = "FEMALE";
        }
    };
    $scope.onChangeTitleOther = function () {
        console.log($scope.titleOther);
        $scope.titleOther2 = $scope.titleOther;
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
    $scope.selectedPricePlan = function (pp) {
        $scope.isSelectedPricePlan2 = true;
        $scope.pricePlanFilter = {};
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

    $scope.selectedPricePlan2 = function () {

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

    };

    $scope.selectedPricePlan3 = function () {
        $scope.isSelectedPricePlan2 = false;
        if (!$scope.isLoadPricePlan) {
            //call Priceplan
            $scope.callSalePricePlanList();
        } else {
        }
        $scope.isSelectedPricePlan = false;
        $('.radioPriceplan').prop('checked', false);
    };

    $scope.onClearPricePlan = function () {
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
    $scope.onCancelPricePlan = function () {
        //$('#ppfilter').val("");
        //$('#ppfilter2').val("");
        $scope.pricePlanFilter.value = "";
        console.log($scope.pricePlanFilter.value);
        $scope.onClearPricePlan();
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
    $scope.onModalCUG = function () {
        //$scope.onCancelCUG();
        $scope.isSelectCUGList = false;
        $('.radioCUG').prop('checked', false);
    }

    $scope.onSetValueCUG = function () {
        var s = $scope.selectCUG;
        $scope.saveSelectCUG = s;
        console.log($scope.saveSelectCUG);
        $scope.saveDataCUG = {
            name: $scope.saveSelectCUG['group-name'],
            id: $scope.saveSelectCUG['group-id']
        };
    };
    $scope.onSelectCUG = function (item) {
        $scope.isSelectCUGList = true;
        console.log(item);
        $scope.selectCUG = item;
    };
    $scope.onCancelCUG = function () {
        $scope.isSelectCUGList = false;
        $scope.saveDataCUG.filter = "";
        $scope.saveDataCUG = {};
        $scope.selectCUG = {};
        $('.radioCUG').prop('checked', false);
    };
    $scope.onFilterCUGId = function () {
        $scope.isSelectCUGList = false;
        if ($scope.saveDataCUG.filter) {
            //$scope.onSearchCUG()
            var list = $filter('filter')($scope.cugList, { 'group-id': $scope.saveDataCUG.filter });
            var list2 = $filter('filter')($scope.cugList, { 'group-name': $scope.saveDataCUG.filter });
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
    $scope.onCheckFF = function () {
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
    $scope.onInputFF = function (charCode) {
        //console.log(charCode);
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            $scope.isNumberFF = true;
            return false;
        } else {
            $scope.isNumberFF = false;
        }
    };

    $scope.clearSP = function () {
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
    $scope.getCapmaxParameter = function (soc) {
        var checkValue = function (capmax) {
            var value = "";
            if (capmax == "0") {
                //value = "0";
                value = "null";
            } else if (capmax == "-2") {
                //value = "-2";
                value = "null";
            } else if (capmax == "") {
                value = "hide";
            } else {
                value = "null";
            }
            return value;
        };
        var checkValueCapmax = function (capmax) {
            var value = "";
            if (capmax == "0") {
                //value = "0";
                value = "";
            } else if (capmax == "-2") {
                //value = "-2";
                value = "";
            } else if (capmax == "") {
                value = "hide";
            } else {
                value = "";
            }
            return value;
        };
        ChangePricePlanService.getCapmaxParameter(soc, function (result) {
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
    $scope.selectedPromotion = function () {
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
    $scope.getOfferDetail = function (soc) {
        $scope.clearSP()
        SystemService.showLoading();
        console.log(soc);
        //call offerDetail route 1
        ChangePricePlanService.getOfferDetail(soc, function (resultOfferDetail) {

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
                        var crodList = $filter('filter')($scope.offerDetail["csm-offer-details"]["csm-related-offer-details"], { "special-offer-type": sp });
                        console.log('crodList :::: ');
                        console.log(crodList);
                        var code = crodList[0]["code"];

                        //call offerDetail route 2
                        ChangePricePlanService.getOfferDetail(code, function (resultOfferDetail2) {
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


    $scope.useAddressAsCard = function (type) {
        if (type == 'H')
            $scope.mailAddress = $scope.tempCardAddress;
        else
            $scope.billAddress = $scope.tempCardAddress;
    };

    $scope.unUseAddressAsCard = function (type) {
        if (type == 'H') {
            $scope.mailAddress = {};
            $('#ulAddressList').hide();
            $scope.addressList = [];
        }
        else {
            $scope.billAddress = {};
        }

    };


    $scope.manualInputReadCard = function () {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        //document.getElementById("CitizenID").disabled = false;
        $('#CitizenID').prop('disabled', false);
        setTimeout(function () {
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

    $scope.onChangeSub = function () {
        console.log($scope.subCompanyType);
    };

    $scope.contactNo = {
        number: "",
        continued: ""
    };
    $scope.grade = {};

    $scope.saveOrder = function () {
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
                    "id-type": "I",
                    "id-number": $('#citizenID3').val(),
                    "birthdate": SystemService.convertDataThToLongDate($('#birthDay').val()),
                    "id-expire-date": SystemService.convertDataThToLongDate($('#expireDay').val()),
                    "contact-number": $scope.contactNo.number + ($scope.contactNo.continued ? ("#" + $scope.contactNo.continued) : ""),
                    "contact-mobile-number": $scope.customer["contact-mobile-number"],
                    "contact-email": $scope.customer["contact-email"],
                    "language": $scope.customer["language"],
                    "branch-code": $scope.customer["branch-code"],
                    "tax-id": $scope.customer["tax-id"],
                    "customer-level": $scope.grade["grade-name"],
                    "customer-id": $scope.customerStatusN == 'O' ? $scope.data.customerProfile['customer-id'] : "",
                    "customer-sublevel_id": $scope.grade["grade-id"],
                    "customer-sublevel": $scope.grade["grade-sub-name"]
                    ///check lastest or billadress
                    , "address-list": {
                        "CUSTOMER_ADDRESS": {
                            //        "number": "61/268",
                            //        "moo": "8",
                            //        "village": "moo ban",
                            //        "street": "ratchada",
                            //        "soi": "8",
                            //        "district": "dindaeng",
                            //        "province": "Pathumthani",
                            //        "building-name": "Pakin",
                            //        "building-room": "22",
                            //        "building-floor": "13",
                            //        "sub-district": "Dindaeng",
                            //        "zip": "22222",
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
                //"sale-agent": {
                //    "name": "Chitchai Changpradist",
                //    "channel": "CM",
                //    "partner-code": "",
                //    "partner-name": "",
                //    "sale-code": "01019580",
                //    "sale-assist-code": "",
                //    "partner-type": ""
                //},
                "order-items": [{
                    "name": "CHANGE_OWNERSHIP",
                    "product-name": $scope.pricePlan.saveName,
                    "product-id-number": $scope.data.installedProducts["product-id-number"],
                    "product-id-name": $scope.data.installedProducts["product-id-name"],
                    "product-category": $scope.data.installedProducts["product-category"],
                    "product-type": "PRICEPLAN",
                    "order-type": "CHANGE",
                    "reason-code": $scope.selectReason.id,
                    "user-memo": $scope.saveData.memo ? $scope.saveData.memo : "",
                    "address-list": {
                        "BILLING_ADDRESS": {
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
                            "household": ""
                        }
                        //,"TAX_ADDRESS": {
                        //    "number": "61/268",
                        //    "moo": "8",
                        //    "village": "moo ban",
                        //    "street": "ratchada",
                        //    "soi": "8",
                        //    "district": "dindaeng",
                        //    "province": "Pathumthani",
                        //    "building-name": "Pakin",
                        //    "building-room": "22",
                        //    "building-floor": "13",
                        //    "sub-district": "Dindaeng",
                        //    "zip": "22222",
                        //    "household": "18"
                        //}
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
                        //"ACCOUNT-BILL-CYCLE": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                        "ORIGINAL-OWNER-FIRSTNAME": $scope.data.customerProfile['firstname'],
                        "ORIGINAL-OWNER-LASTNAME": $scope.data.customerProfile['lastname'],
                        "CHANGE-OPTION": $scope.isLastestAdress ? "EXISTING" : "NEW"
                    },
                    "primary-order-data": {
                        //"CUSTOMER-ID": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
                        "OU-ID": $scope.customerStatusN == 'O' ? $scope.lastestCustomer['installed-products'][0]['ouId'] : "",
                        "BAN": $scope.customerStatusN == 'O' ? $scope.lastestCustomer['installed-products'][0]['ban'] : "",
                        "ACCOUNT-CATEGORY": $scope.cardType.value,
                        "ACCOUNT-SUB-TYPE": $scope.subCompanyType,
                        "COMPANY-CODE": $scope.data.installedProducts["company-code"],
                        "NAS-PROPOSITION": $scope.selectProposition,
                        "CCBS-PROPOSITION": $scope.pricePlan.promotion,
                        //"SIM": "",//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ?
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
            "partner-code": $scope.getAuthen["partnerCodes"].length > 0 ? $scope.getAuthen["partnerCodes"][0] : $scope.partnerCode,
            "partner-name": $scope.getAuthen["partnerName"],
            "sale-code": $scope.getAuthen["saleCode"],
            "sale-assist-code": "",
            "partner-type": $scope.getAuthen["partnerType"]
        };


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
        //SHARE_ALLOWANCE, FriendAndFamily, CUG, POOLED
        var spList = $scope.offerDetail["csm-offer-details"]["csm-related-offer-details"];
        //var spName = $scope.offerDetail["csm-offer-details"]["name"];
        var spAll = "";
        var spNameAll = "";
        $scope.attModalVal = "modal";
        var spArray = {
            'SHARE_ALLOWANCE': [],
            'POOLED': [],
            'FriendAndFamily': [],
            'CUG': [],
            'POOLING': [],
            'CAPMAX': []
        };
        for (var isp = 0; isp < spList.length; isp++) {
            var sp = spList[isp]["special-offer-type"];
            var spName = spList[isp]["name"];

            if (sp == "SHARE_ALLOWANCE" || sp == "POOLED" || sp == 'POOLING' || sp == 'CAPMAX') {
                spAll = spAll + (spAll ? "|" : "") + sp;
                spNameAll = spNameAll + (spNameAll ? "|" : "") + spName;
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
                spArray[sp].push("CUG ID|" + $scope.saveDataCUG.id + "|");
            }


            //create field JSON
            var list = spAll.split("|");
            var listName = spNameAll.split('|');
            if (spAll) {
                for (var i = 0; i < list.length; i++) {
                    data["order"]["order-items"][0]["order-data"][list[i] + "-PARAM-SIZE"] = spArray[list[i]].length;

                    data["order"]["order-items"][0]["order-data"][list[i] + "-PARAM-OFFER-NAME"] = listName[i];

                    var listValue = spArray[list[i]];
                    for (var ii = 0; ii < listValue.length; ii++) {
                        data["order"]["order-items"][0]["order-data"][list[i] + "-PARAM-" + ii] = listValue[ii];
                    }

                }
            }


        }
        data["order"]["order-items"][0]["order-data"]["OFFERS-REQUIRE-PARAMETER"] = spAll;

        ////address list
        if ($scope.isAddressList) {
            //data['order']["customer"]["address-list"]["CUSTOMER_ADDRESS"] = $scope.isAddressList;
        } else {
            //data['order']["customer"]["address-list"]["CUSTOMER_ADDRESS"] = data['order']["order-items"][0]["address-list"]["BILLING_ADDRESS"];
        }

        data['order']["customer"]["address-list"]["CUSTOMER_ADDRESS"] = data['order']["order-items"][0]["address-list"]["BILLING_ADDRESS"];




        //call post
        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI',
            'E2E_REFID': $scope.orderId
        };
        console.log(data);
        if (SystemService.demo) {
            SystemService.showBeforeClose({
                "message": "รายการคำขอเลขที่ " + $scope.orderId,
                "message2": "ได้รับข้อมูลเรียบร้อยแล้ว"
            });
        } else {
            SystemService.callServicePost(data, headers, function (result) {
                console.log(result);
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
    $scope.printOrder = function () {

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
        var customerType = "N";
        if ($scope.data.priceplan['account-category'] == "B" || $scope.data.priceplan['account-category'] == "C") {
            customerType = "Y";
        }
        var newTitle = $filter('filter')($scope.titleTypeListx, { 'value': $scope.newOwner.prefixTH });
        if (newTitle.length > 0) {
            newTitle = newTitle[0]['th-description'];
        } else {
            newTitle = "";
        }


        var data = {
            "func": "COS",
            "header": {
                "title-code": $scope.data.customerProfile["title-code"],
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
                    "photo": $scope.varPhotoLastest
                }
            }
        };
        console.log($scope.data);
        console.log(data);
        //api generatePDF
        var srcPDF = "";
        SystemService.generatePDF(data, function (result) {
            var url = result;
            setTimeout(function () {
                var srcPDF = url;
                document.getElementById('iframePDF').src = url + '?clearData=N';
                if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
                    setTimeout(function () { document.getElementById('iframePDF').src = 'javascript:window.print();' }, 2000);
                    setTimeout(function () { document.getElementById('iframePDF').src = srcPDF }, 2500);
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
    $scope.selectCompany = function (company) {
        $scope.selectedCompany = company;
    };

    $scope.changecusStatusN = function (customerStatus) {
        if (customerStatus == 'N') {
            $scope.changOpenserviceN = false;
            $scope.mailAddress = {};
            $scope.rowNoSelected = '1';
        } else {
            $scope.setAddress($scope.lastestCustomer['address-list']['CUSTOMER_ADDRESS']);
        }
        $scope.customerStatusN = customerStatus;
    };
    $scope.changecusStatusBC = function (customerStatus) {
        if (customerStatus == 'N') {
            $scope.changOpenserviceBC = false;

        }
        $scope.customerStatusBC = customerStatus;
    };

    $scope.checkOldAddress = function () {
        if ($scope.changOpenserviceN == true)
            if ($scope.rowNoSelected == '1') {
                $scope.mailAddress = $scope.tempOldAddress;
            }
            else {
                $scope.mailAddress = $scope.tempOtherAddress;
            }

    };

    $scope.changeOldAddress = function (status) {
        if (status) {
            $scope.changOpenserviceN == true;
            $scope.mailAddress = $scope.tempOldAddress;
        }
        else {
            $scope.rowNoSelected = '1';
            $scope.changOpenserviceN == false;
            $scope.mailAddress = {};
        }
    };

    $scope.changeOldAddressBC = function (status) {
        if (status) {
            $scope.changOpenserviceBC = true;
        }
        else {
            $scope.changOpenserviceBC = false;
            $scope.mailAddress = {};
            $scope.billAddress = {};
        }
    };

    $scope.rowNoSelected = '1';
    $scope.updateMailAddress = function (rowNo) {
        $scope.rowNoSelected = rowNo;
        if (rowNo == '1') {
            $scope.mailAddress = $scope.tempOldAddress;
        }
        else {
            $scope.mailAddress = $scope.tempOtherAddress;
        }
    };

    $scope.onVerify = function () {
        SystemService.showLoading();
        var checkMaxAllow = function (result) {
            SystemService.hideLoading();
            console.log(result);
            if (result.data['display-messages'].length > 0 && result.data['display-messages'][0]['message-type'] == 'ERROR') {
                //check maxallow
                if (result.data["display-messages"][0]["message-code"] == 'TMV-PREVERIFY-11010') {
                    $scope.showApprovCode = true;
                    $scope.isVerify = false;
                } else {
                    setTimeout(function () {
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
            "channel": "WEBUI",//$scope.getAuthen["channel"],
            "companyCode": "AL",//$scope.data.installedProducts["company-code"],
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
            data["accountType"] = $scope.approveCode;
        }
        console.log(data);
        //demo
        if (SystemService.demo) {
            var result = {};
            var data = {
                "status": "SUCCESSFUL",
                "fault": {
                    "name": "th.co.truecorp.ads.api.ApplicationServiceException",
                    "code": "TMV-PREVERIFY-11009",
                    "message": " VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.].  VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.]",
                    "detailed-message": "ApplicationServiceException TMV-PREVERIFY-11009 VNSBKS4000005 (-6-) checkFruad invalid for 1984051311082, AL / [VNSBKS4000005] [APPLICATION_CODE] [Application name: ; nested exception is: \n\tjava.net.ConnectException: Connection refused occur error because {1}.]. "
                },
                "display-messages": [
                  {
                      "message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                      "message-code": "TMV-PREVERIFY-11010x",
                      "message-type": "ERROR",
                      "en-message": "Unable to activate the service, please inform staff to contact at 02-699-6222 (Monday - Saturday during 9.00 a.m. - 6.00 p.m.)",
                      "th-message": "ไม่สามารถเปิดบริการได้ กรุณาแนะนำเจ้าหน้าที่โทรติดต่อ 02-699-6222 (วันจันทร์-เสาร์ เวลา 9.00-18.00)",
                      "technical-message": "null( Message variable: ] ) "
                  }
                ],
                "trx-id": "3I1BDOSDXWJN8",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)"
            };

            var data2 = {
                "status": "SUCCESSFUL",
                "trx-id": null,
                "process-instance": null,
                "display-messages": [],
                "response-data": [
                  {
                      "verifyCode": null
                  }
                ]
            };
            if ($scope.approveCode) {
                result = data2;
            } else {
                result = data2;
            }
            checkMaxAllow({
                status: true,
                data: result,
                error: "",
                msgErr: ""
            });
        } else {
            SystemService.callServicePostByPass(data, headers, function (result) {
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
    var checkNull = function (org, txt) {
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
    $scope.onEnterAddress = function () {
        if ($scope.addressList.length == 1) {
            $scope.setSearchAddress($scope.addressList[0]);
        }
        if ($scope.addressList.length == 0 && $scope.txtSearchAddress) {
            $scope.onInputAddress();
        }
    };
    $scope.onFocusAddress = function () {
        if ($scope.addressList.length > 0) {
            $('#ulAddressList').show();
        }
    };
    $scope.onBlurAddress = function () {
        $('#ulAddressList').hide();
    };
    var filterAddressList = function (txtSearch) {
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
        setTimeout(function () {
            if ($scope.addressList.length == 0) {
                $('#ulAddressList').hide();
            } else {
                $('#ulAddressList').show();
            }
        }, 0);
    };
    $scope.txtSearchAddress = "";
    $scope.onInputAddress = function () {
        $scope.txtSearchAddress = "";
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.postcode);
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.province);
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.amphur);
        $scope.txtSearchAddress += checkNull($scope.txtSearchAddress, $scope.mailAddress.district);
        var target = "profiles/master/address/search?keyword=" + $scope.txtSearchAddress + "&lang=" + $scope.billPayment.accountLang;
        console.log($scope.txtSearchAddress.length, target);
        if ($scope.txtSearchAddress.length >= 3) {
            if (!$scope.isLoadAddress) {
                //SystemService.showLoading();
                if (!$scope.pauseAddress) {
                    SystemService.getAddressMaster(target, function (result) {
                        //SystemService.hideLoading();
                        if (result.status) {
                            $scope.isLoadAddress = true;
                            $scope.addressList = result.data['response-data'];
                            tempAddressList = result.data['response-data'];

                            if ($scope.addressList.length == 1) {
                                $scope.setSearchAddress($scope.addressList[0]);
                            }

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
    $scope.onChangeBillPaymentAccountLang = function () {
        $scope.onInputAddress();
    };
    $scope.setSearchAddress = function (address) {
        console.log(address);
        $scope.mailAddress.province = address['province'];
        $scope.mailAddress.amphur = address['district'];
        $scope.mailAddress.district = address['subdistrict'];
        $scope.mailAddress.postcode = address['zipcode'];
        $('#ulAddressList').hide();
    };
    $scope.onSelectedAddress = function (e) {

        $scope.setSearchAddress($scope.addressList[e]);
        setTimeout(function () {
            $('#idBindDataAgain').click();
        }, 0);
    };


    //Reasons
    $scope.reasons = [];
    $scope.reason = "";
    $scope.selectReason = {};

    $scope.onReasonChange = function () {
        $scope.selectReason = $scope.reasons[$('#selectReasonId').val()];
        console.log($('#selectReasonId').val(), $scope.selectReason);
    };
    //end reson
    $scope.cancelChanged = function () {
        closeWP();
        //$window.closed();
    };


    $scope.onChangCheckno = function () {
        //alert($scope.changCheckno);
    };

    $scope.openService = function () {
        $scope.changOpenserviceN = true;
    };
    $scope.changCheck = function () {
        $scope.changCheckno = true;
    };

    $scope.slipchangeType = function (Type) {
        $scope.slipType = Type;
    };


    $scope.isCameraLastest = false;
    //start----------- camera ----------------
    $scope.initWebCam = function () {

        setTimeout(function () {
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

    $scope.webcamSnap = function () {
        webcam.snap();
    }
    //end----------- camera ----------------
    $scope.initWebCamLastest = function () {
        $scope.initWebCam();
    }



    //$scope.authorize = function () {
    //    $scope.isAuthorize = true;
    //};
    ////init();
    setTimeout(function () {
        $('#authorize').click(function () {
            $scope.isAuthorize = $(this).prop('checked');
            console.log($(this).prop('checked'));
        });
    }, 3000);

    $scope.checkValidateSave = function () {
        console.log($scope.isAuthorize);
        if ($scope.isAuthorize) {

        }
    };
    




    $scope.validateUI = function () {
        var isNull = function (txt) {
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
        if ($('#authorize').prop('checked')) {//กดมอบอำนาจ:
            errorAuthorizeID = isNull($('#CitizenID2').val());
            errorAuthorizeName = isNull($('#authorizeFullName').val());
        }
        var showValidate = function (id, msg) {
            if (isFocus) {
                $('#' + id).focus();
                isFocus = false;
                return;
            } else {
                SystemService.showAlert(msg);
            }
        };
        var checkCapmaxNull = function (val) {
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
        } else if (isNull($scope.newOwner2.firstNameTH)) {
            showValidate("firstNameRegisterd", ValidateMsgService.data.msgSubFirstNameEmpty);
        } else if (isNull($scope.newOwner2.lastNameTH)) {
            showValidate("lastNameRegisterd", ValidateMsgService.data.msgSubLastNameEmpty);
        } else if (isNull($scope.mailAddress.postcode)) {
            showValidate("txtmailAddresspostcode", ValidateMsgService.data.msgBillZipcodeEmpty);
        } else if (isNull($scope.mailAddress.province)) {
            showValidate("txtmailAddressprovince", ValidateMsgService.data.msgBillProvinceEmpty);
        } else if (isNull($scope.mailAddress.amphur)) {
            showValidate("txtmailAddressamphur", ValidateMsgService.data.msgBillDistrictEmpty);
        } else if (isNull($scope.mailAddress.district)) {
            showValidate("txtMaillAddressDistrict", ValidateMsgService.data.msgBillSubDistrictEmpty);
        } else if (isNull($scope.mailAddress.homeNumber)) {
            showValidate("txtMailAdressHomeNumber", ValidateMsgService.data.msgBillHouseNoEmpty);
        } else if (isNull($scope.mailAddress.moo)) {
            showValidate("txtMailAddressMoo", ValidateMsgService.data.msgBillVillageNoEmpty);
        } else if (isNull($scope.mailAddress.road)) {
            showValidate("txtMailAddressRoad", ValidateMsgService.data.msgBillRoadEmpty);
        } else if ($scope.blah == 'E' && isNull($scope.billPayment.email)) {
            showValidate("idBillPaymentEmail", ValidateMsgService.data.msgBillEmailEmpty);
        } else if ($scope.blah == 'S' && isNull($scope.billPayment.smss)) {
            showValidate("txtBillPaymentSmss", ValidateMsgService.data.msgBillSmsNoEmpty);
        } else if (isNull($scope.contactNo.number)) {
            showValidate("txtcontactNonumber", ValidateMsgService.data.msgCusContractNoEmpty);
        } else if (errorFUTURE) {
            showValidate("txtDateManual", ValidateMsgService.data.effectiveDateMsg);
        } else {
            if ($scope.isClickPrint) {
                $scope.printOrder();
            }

        }
    };
    $scope.noneShopPrint = function () {
        $scope.isClickPrint = true;
        $scope.validateUI();
    };
    $scope.afterCloseWarning = function () {
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
    //$scope.init();
});