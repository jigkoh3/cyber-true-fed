// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('AddDeleteEditOfferController', function($scope,
    $routeParams,
    $filter,
    ValidateMsgService,
    $routeParams,
    AuthenService,
    AddDeleteEditOfferNewService,
    ReasonService,
    SystemService,
    ChangePricePlanService) {

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
    $scope.divID = 'addDeleteEditOfferContent';
    $scope.subNoLength = 10;
    $scope.simSerialLength = 18;
    $scope.isCustomerProfile = false;
    $scope.dealerCodes = [];
    $scope.dealerCode = '';
    $scope.approver = "";
    $scope.isMatch = true;
    $scope.propositions = [];
    $scope.disableSubmitAddOffer = true;
    $scope.CitizenID = "";
    $scope.viewOffer = {};
    $scope.offerEffectiveDate = "immediate";
    $scope.offerExpirationDate = "unlimited";
    $scope.saveParamData = {};
    //paging
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.currentPage_cug = 1;
    $scope.pageSize_cug = 5;
    //end paging

    $scope.data = {};
    $scope.isReadCardSuccess = false;
    $scope.offerType = "C";
    $scope.statusReason = '';
    $scope.statusReasonMemo = '';
    $scope.readOnlyOffer = true;
    $scope.enableAddOffer = false;
    $scope.disableAddBtn = false;
    $scope.disableAddOffer = false;
    $scope.disableAddCp = false;
    $scope.disableAddDiscount = false;
    $scope.manualExpDate = true;
    var orderData = {};
    $scope.editOffers = [];
    $scope.addOfferLists = [];
    var addOfferlists = [];
    //Reasons
    $scope.detailViewOffer = {
        "ff1": "0812345678",
        "ff2": "0898765432",
        "ff3": "0812456321",
        "ff4": "023453214"
    };

    $scope.detailViewOfferCUG = {
        "name": "828 : Siam Dnan"
    };

    $scope.contractProp = {
        "ViewPropCode": "RMV000000000711",
        "ViewPropDesc": "Existing Device Disc 1,000 or 2,000 Bt.",
        "ViewContractNumber": "RS377",
        "ViewTerm": "6",
        "ViewFee": "1,000",
        "ViewStartDate": "18/01/2015",
        "ViewExpireDate": "18/01/2015",
        "ViewRemark": "Privilage"
    };
    $scope.reasons = [];
    $scope.statusReason = "";
    $scope.capMaxParameterList = {};
    var soc = "1234";
    AddDeleteEditOfferNewService.getCapmaxParameter(soc, function(result) {
        console.log(result.data);
        $scope.capMaxParameterList = result.data['cap-max-parameter'];
    });

    // ReasonService.list("119", function(result) {
    //     //$scope.reasons = result;
    //     //$scope.statusReason = $scope.reasons[86];
    //     //solution for none fix index
    //     $scope.reasons = result;
    //     var myArray = result;
    //     var searchText = "CREQ",
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
    //     $scope.statusReason = $scope.reasons[index];
    //     //solution for none fix index
    // });

    //end reson
    //paging
    $scope.currentPage = 1;
    $scope.pageSize = 5;
    $scope.addOfferType = {
        value: "ADDITIONAL"
    };
    $scope.txtSearchOffer = "";
    $scope.ffData = {
        max: 4
    };
    $scope.radioOffer = "";
    $scope.radioCpOffer = "";
    //STR: get offerList
    $scope.offerList = [];
    $scope.releteOfferList = [];
    $scope.addNewOfferLists = [];

    // =========================Change to addOfferLists=================================
    // $scope.popUpOfferList = [];
    // var popUpOfferList = [];
    // =================================================================================

    $scope.cpOfferList = [];
    var cpOfferList = [];
    $scope.disOfferList = [];
    var disOfferList = [];
    $scope.showDetail = {};
    $scope.futureOfferList = [];
    var futureOfferList = [];
    $scope.dateNow = $filter('date')(new Date(), 'dd/MM/yyyy');
    var dateNow = new Date();
    $scope.setDateNow = ("0" + dateNow.getDate()).slice(-2) + "/" + ("0" + Number(dateNow.getMonth() + 1)).slice(-2) + "/" + Number(dateNow.getFullYear() + 543);

    $scope.onload = function() {
        AuthenService.getAuthen(function(result) {
            $scope.getAuthen = result;
            $scope.shopType = result.shopType;
            if (!$scope.getAuthen["isSecondAuthen"]) {
                $scope.isNonePartner = false;
            }
            if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == '1') {
                $scope.approver = $scope.getAuthen['logInName'];
            }
            if ($scope.SubNo != 'null') {
                $scope.onloadNext();
            }
            setTimeout(function() {
                if ($scope.SubNo == 'null') {
                    $('#dataSubNo').focus();
                }
            }, 1000);

        });
    }

    $scope.onInputSubNo_reset = function() {
        $scope.isInputSubNo = false;
        $scope.onInputSubNo();
    };
    $scope.isInputSubNo = false;
    $scope.onInputSubNo = function() {
        console.log($('#dataSubNo').val().length, $scope.isInputSubNo);
        var dataSubNo = $('#dataSubNo').val();
        if (dataSubNo.length == 10) {
            if ($scope.isInputSubNo == false) {
                $scope.SubNo = $('#dataSubNo').val();
                $scope.isInputSubNo = true;
                $scope.onloadNext();
            }
        } else {
            $scope.isInputSubNo = false;
        }
    };
    $scope.isNumberSubNo = false;
    $scope.onKeyUpSubNo = function(charCode) {
        //console.log(charCode);
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberSubNo = !bool;
        $scope.autoHideNumberSubNo = false;
        return bool;
    }

    setTimeout(function() {
        SystemService.validateNummeric();
    }, 1000);

    $scope.onloadNext = function() {
        //if ($scope.isNonePartner) {
        SystemService.showLoading();


        var generateOrder_target = "?channel=" + ($scope.getAuthen["channel"] ? $scope.getAuthen["channel"] : "") + "&dealer=" + ($scope.getAuthen["shopcodes"] ? $scope.getAuthen["shopcodes"] : "");
        //generateOrder_target = "";

        if (generateOrder_target == "") {
            if ($scope.getAuthen["channel"]) {
                generateOrder_target = "?channel=" + $scope.getAuthen["channel"];
            }
            if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length > 0) {
                if (generateOrder_target) {
                    generateOrder_target = "?dealer=" + $scope.getAuthen["shopcodes"][0];
                } else {
                    generateOrder_target += "&dealer=" + $scope.getAuthen["shopcodes"][0];
                }
            }
        }
        //alert(generateOrder_target);
        //call generate-order-id
        SystemService.generateOrderId(generateOrder_target, function(data) {
            localStorage.setItem('orderId', data["response-data"]);
            $scope.TrxID = data["trx-id"];
            $scope.orderId = data["response-data"];

            if ($scope.OUID == "null") {
                $scope.OUID = "";
            }

            //call validate-change-offer
            if ($scope.SubNo !== 'null') {
                SystemService.showLoading();
                AddDeleteEditOfferNewService.getSIMData($scope.subNoInput, $scope.level, onGetSIMData);
                $scope.getOfferList();
                $scope.getReleteOfferList();
                // $scope.getRegulaOfferList();
                // $scope.getPopUpOfferList();
                $scope.getFutureOfferList();
                if (onGetSIMData) {
                    $scope.initModalReadCard();
                }
                //END: get offerList
                // SystemService.calendarDatePicker();
            }

        });
        //}
    };

    // $scope.getPopUpOfferList = function() {
    //     var result = [{
    //         "offer-name": "PKSMSS30",
    //         "offer-description": "SMS package 50THB 60sms 30 Days",
    //         "type": "Additional Offer",
    //         "offer-level": "C",
    //         "sale-eff": "19/11/2015",
    //         "sale-exp": "31/01/2017"
    //     }, {
    //         "offer-name": "MNP006",
    //         "offer-description": "Test Discpunt 001",
    //         "offer-level": "C",
    //         "type": "Discount",
    //         "group": "Other",
    //         "sale-eff": "13/11/2014",
    //         "sale-exp": "08/08/2250"
    //     }, {
    //         "offer-name": "RMV000000001314",
    //         "offer-description": "MNP Gen Y",
    //         "offer-level": "C",
    //         "type": "Contract & Proposition",
    //         "sale-eff": "24/03/2015",
    //         "sale-exp": "05/07/2016"
    //     }, {
    //         "offer-name": "CCUGA501",
    //         "offer-description": "CUG on/off Net(Package Level)",
    //         "offer-level": "C",
    //         "type": "CUG",
    //         "sale-eff": "27/03/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "CFF05501",
    //         "offer-description": "F&F service-FL 5 Full Math(0 Bt)_Sub",
    //         "offer-level": "C",
    //         "type": "CUG",
    //         "sale-eff": "27/03/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "M00M0S03D",
    //         "offer-description": "B&E_ShPool299 getV299min.S40.M5 50MB Wifi ULT",
    //         "offer-level": "G",
    //         "type": "Pooling",
    //         "sale-eff": "27/03/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMV000000001536",
    //         "offer-description": "AllianceCP_4G_Extra",
    //         "offer-level": "C",
    //         "type": "Additional Offer",
    //         "sale-eff": "19/11/2015",
    //         "sale-exp": "31/01/2017"
    //     }, {
    //         "offer-name": "RMV000000000223",
    //         "offer-description": "Biz(MNP O2R)_True Smart 4.0_12mths_Penalty 1,000",
    //         "offer-level": "C",
    //         "type": "Additional Offer",
    //         "sale-eff": "13/11/2014",
    //         "sale-exp": "08/08/2250"
    //     }, {
    //         "offer-name": "RMV000000001022",
    //         "offer-description": "New Galaxy SIM only",
    //         "offer-level": "C",
    //         "type": "Additional Offer",
    //         "sale-eff": "24/03/2015",
    //         "sale-exp": "05/07/2016"
    //     }, {
    //         "offer-name": "RMVC00000000032",
    //         "offer-description": "GOV_Caesar3_TrueSamrt4.0+SIM",
    //         "offer-level": "C",
    //         "type": "Additional Offer",
    //         "sale-eff": "27/03/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVC00000000071",
    //         "offer-description": "Non Shop_EDU_Puenkru2_True Lenevo+SIM",
    //         "offer-level": "C",
    //         "type": "CUG",
    //         "sale-eff": "30/06/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMV000000001073",
    //         "offer-description": "iPhone 6 discount 7500",
    //         "offer-level": "C",
    //         "type": "CUG",
    //         "sale-eff": "23/04/2015",
    //         "sale-exp": "04/02/2016"
    //     }, {
    //         "offer-name": "RMV000000001520",
    //         "offer-description": "MG_4G Cele. iPhone 5s_Airtime",
    //         "offer-level": "C",
    //         "type": "CUG",
    //         "sale-eff": "17/11/2015",
    //         "sale-exp": "17/11/2016"
    //     }, {
    //         "offer-name": "RMV000000001225",
    //         "offer-description": "Test Discpunt 002",
    //         "offer-level": "C",
    //         "type": "Discount",
    //         "group": "Other",
    //         "sale-eff": "16/07/2015",
    //         "sale-exp": "31/07/2020"
    //     }, {
    //         "offer-name": "RMVC00000000091",
    //         "offer-description": "Test Discpunt 003",
    //         "offer-level": "G",
    //         "type": "Discount",
    //         "group": "Retention",
    //         "sale-eff": "28/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVB00000000266",
    //         "offer-description": "Test Discpunt 004",
    //         "offer-level": "C",
    //         "type": "Discount",
    //         "group": "Other",
    //         "sale-eff": "28/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVB00000000267",
    //         "offer-description": "Test Discpunt 005",
    //         "offer-level": "C",
    //         "type": "Discount",
    //         "group": "New",
    //         "sale-eff": "28/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVB00000000268",
    //         "offer-description": "Test Discpunt 006",
    //         "offer-level": "C",
    //         "type": "Discount",
    //         "group": "Special",
    //         "sale-eff": "28/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVB00000000269",
    //         "offer-description": "Test Discpunt 007",
    //         "offer-level": "C",
    //         "type": "Discount",
    //         "group": "Special",
    //         "sale-eff": "28/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVB00000000210",
    //         "offer-description": "Test Discpunt 008",
    //         "offer-level": "C",
    //         "type": "Employee",
    //         "group": "Other",
    //         "sale-eff": "28/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMV000000000400",
    //         "offer-description": "Test Discpunt 009",
    //         "offer-level": "G",
    //         "type": "Discount",
    //         "group": "Convergence",
    //         "sale-eff": "10/01/2014",
    //         "sale-exp": "08/08/2018"
    //     }, {
    //         "offer-name": "RMV000000000322",
    //         "offer-description": "New Galaxy SIM only",
    //         "offer-level": "C",
    //         "sale-eff": "01/01/2015",
    //         "sale-exp": "05/07/2016"
    //     }, {
    //         "offer-name": "RMV000000001010",
    //         "offer-description": "GOV_Caesar5_TrueSamrt4.0",
    //         "offer-level": "G",
    //         "type": "Pooling",
    //         "sale-eff": "01/01/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVC00000000101",
    //         "offer-description": "Non Shop_EDU_Puenkru2_True",
    //         "offer-level": "C",
    //         "type": "Pooling",
    //         "sale-eff": "05/06/2014",
    //         "sale-exp": "31/12/2015"
    //     }, {
    //         "offer-name": "RMVB00000000555",
    //         "offer-description": "Dongle Bundling For Business Solution_15mths",
    //         "offer-level": "C",
    //         "type": "CUG",
    //         "sale-eff": "01/01/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVC00000001073",
    //         "offer-description": "iPhone 6 discount 8500",
    //         "offer-level": "G",
    //         "type": "Pooling",
    //         "sale-eff": "13/02/2015",
    //         "sale-exp": "04/02/2016"
    //     }, {
    //         "offer-name": "RMV000000001220",
    //         "offer-description": "MG_4G Cele. iPhone 6s_Airtime",
    //         "offer-level": "C",
    //         "type": "Contract & Proposition",
    //         "sale-eff": "15/01/2015",
    //         "sale-exp": "01/12/2017"
    //     }, {
    //         "offer-name": "RMVC00000001225",
    //         "offer-description": "Samsung TradeIN_5,000_Jmart",
    //         "offer-level": "C",
    //         "type": "Contract & Proposition",
    //         "sale-eff": "16/07/2015",
    //         "sale-exp": "31/07/2020"
    //     }, {
    //         "offer-name": "RMVC00000000100",
    //         "offer-description": "GOV_Caesar_Plus_4_SIM_only",
    //         "offer-level": "C",
    //         "type": "Contract & Proposition",
    //         "sale-eff": "28/02/2015",
    //         "sale-exp": "31/12/2016"
    //     }, {
    //         "offer-name": "RMVB00000000211",
    //         "offer-description": "Dongle Bundling For Business Solution_12mths_Panalty",
    //         "offer-level": "G",
    //         "type": "Contract & Proposition",
    //         "sale-eff": "01/07/2015",
    //         "sale-exp": "31/12/2016"
    //     }];
    //     $scope.popUpOfferList = result;
    //     popUpOfferList = result;
    //     $scope.popUpOfferList = $filter('filter')(popUpOfferList, {
    //         'type': $scope.addOfferType
    //     });
    //     // $scope.cpOfferList = result;
    //     cpOfferList = $filter('filter')(popUpOfferList, {
    //         'type': 'Contract & Proposition'
    //     });
    //     $scope.cpOfferList = $filter('filter')(popUpOfferList, {
    //         'type': 'Contract & Proposition'
    //     });
    //     $scope.disOfferList = $filter('filter')(popUpOfferList, {
    //         'type': 'Discount'
    //     });
    //     disOfferList = $filter('filter')(popUpOfferList, {
    //         'type': 'Discount'
    //     });
    //     $scope.cpStartDate = SystemService.convertDateToEng($scope.dateNow, 'TH');
    //     $scope.trActualContractStartDate = SystemService.convertDateToEng($scope.dateNow, 'TH');
    // };
    $scope.getOfferList = function() {
        var result = {
            "offer-lists": [{
                "offer-name": "PROSTDA1",
                "offer-description": "Standard Provisioning Services for Post Pay # 1",
                "effective-date": "19/12/2013",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "parent": "BUNG1F02",
                "offer-group": "Related Offer"
            }, {
                "offer-name": "INTSPS01",
                "offer-description": "Internation Call Special Rate",
                "effective-date": "19/12/2013",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "parent": "BUNG1F02",
                "offer-group": "Related Offer"
            }, {
                "offer-name": "RMGPSS01",
                "offer-description": "GPRS Unlimited",
                "effective-date": "19/12/2013",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "parent": "BUNG1F02",
                "offer-group": "Related Offer"
            }, {
                "offer-name": "RMHSPS04",
                "offer-description": "Hi-Speed 3G/EDGE/GPRS 42.0 Mbps - PostPay",
                "effective-date": "19/12/2013",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "parent": "BUNG1F02",
                "offer-group": "Related Offer"
            }, {
                "offer-name": "BARNRS01",
                "offer-description": "Bar National Roaming1800 RMV/RFT",
                "effective-date": "04/01/2016",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "1331SS01",
                "offer-description": "Free of Charge for 1331",
                "effective-date": "04/01/2016",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "CREDITLIMIT",
                "offer-description": "Credit Limit offer",
                "effective-date": "19/12/2013",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "PROCRBT1",
                "offer-description": "Color Ring Service Post Pay",
                "effective-date": "27/07/2015",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "PROVM21",
                "offer-description": "VoiceMail-TH, SMS-TH",
                "effective-date": "11/02/2014",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "Dummy IMEI offer",
                "offer-description": "Dummy IMEI offer",
                "effective-date": "19/12/2013",
                "expiration-date": "-",
                "type": "Additional Offer",
                "parameter": [{
                    "parameter-name1": "Parameter Value1"
                }, {
                    "parameter-name2": "Parameter Value2"
                }],
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "CFF01S02",
                "offer-description": "Friend and Family Service-FL Prefix(1.8Bt/Call)",
                "effective-date": "11/02/2014",
                "expiration-date": "-",
                "type": "F&F",
                "parameter": "",
                "Level": "Subscriber",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "CCUGAS01",
                "offer-description": "CUG On/Off Net (Package level)",
                "effective-date": "11/02/2014",
                "expiration-date": "-",
                "type": "CUG",
                "parameter": "",
                "Level": "Agreement",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "CV0AMS01D",
                "offer-description": "Child_Pooled Voice Monetary",
                "effective-date": "11/02/2014",
                "expiration-date": "-",
                "type": "Pooling",
                "parameter": "",
                "Level": "Agreement",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "CSMAUS01D",
                "offer-description": "Child_Pooled SMS",
                "effective-date": "27/07/2015",
                "expiration-date": "-",
                "type": "Pooling",
                "parameter": "",
                "Level": "Agreement",
                "offer-group": "Regular Offer"
            }, {
                "offer-name": "RMV000000000711",
                "offer-description": "Existing Device Disc 1,000 or 2,000 Bt.",
                "effective-date": "11/02/2014",
                "expiration-date": "-",
                "type": "Contract & Prop.",
                "parameter": "",
                "Level": "Subscriber",
                "offer-group": "Contract & Prop."
            }, {
                "offer-name": "DIR007",
                "offer-description": "Discount Ring Back Tone Fee",
                "effective-date": "26/11/2015",
                "expiration-date": "26/03/2016",
                "type": "Discount",
                "parameter": "",
                "Level": "Subscriber",
                "offer-group": "Discount"
            }, {
                "offer-name": "DGT024",
                "offer-description": "Discount True Group Employee",
                "effective-date": "25/12/2013",
                "expiration-date": "-",
                "type": "Discount",
                "parameter": "",
                "Level": "Subscriber",
                "offer-group": "Discount"
            }]
        };
        $scope.offerList = result['offer-lists'];
        $scope.offerList[0].selected = false;
        for (var i = 0; i < $scope.offerList.length; i++) {
            $scope.editOffers.push();
            $scope.offerList[i].selected = false;
        }
        // console.log($scope.offerList);
        $scope.adViewOffer.paramName1 = "Parameter Value1";
        $scope.adViewOffer.paramName2 = "Parameter Value2";
        $scope.adOffer.paramName1 = "Parameter Value1";
        $scope.adOffer.paramName2 = "Parameter Value2";
        // var data = "";
        // AddDeleteEditOfferNewService.getOfferList(data, function(){
        // });
    };
    $scope.adViewOffer = {
        "paramName1": "",
        "paramName2": ""
    };
    $scope.adOffer = {
        "paramName1": "",
        "paramName2": ""
    };
    $scope.deleteRegulaOfferList = function(item) {
        for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
            if (item['offer-name'] == $scope.addNewOfferLists[i]['offer-name']) {
                $scope.addNewOfferLists.splice(i, 1);
                break;
            }
        }
        console.log($scope.addNewOfferLists);
    }
    $scope.addRegulaOffer = {
        "offer-name": "",
        "offer-description": "",
        "type": "",
        "parameter": "",
        "service-level": "",
        "offer-group": ""
    };
    $scope.addNewOfferList = function(item) {
        console.log(item);
        var list = $filter('filter')($scope.addNewOfferLists, {
            'name': item['name']
        });

        if (list.length == 0) {
            $scope.addNewOfferLists.push(item);
        }
        $scope.ffNumber = "";
        console.log($scope.addNewOfferLists);
    }
    $scope.getReleteOfferList = function() {
        var result = [{
            "offer-name": "FCVBAR",
            "offer-description": "First Call Verification. Barring",
            "type": "Additional Offer",
            "parameter": "",
            "offer-group": "Related Offer"
        }, {
            "offer-name": "FTALKS25",
            "offer-description": "Talk 1F&F - O2True",
            "type": "F&F",
            "parameter": "",
            "offer-group": "Related Offer"
        }, {
            "offer-name": "RMPGPS01",
            "offer-description": "GPRS Unlimited",
            "type": "Additional Offer",
            "parameter": "",
            "offer-group": "Related Offer"
        }];
        $scope.releteOfferList = result;
    };
    $scope.getFutureOfferList = function() {
        var result = [{
            "offer-name": "PROSTDA1",
            "offer-description": "Standard Provisioning Service For PostPay #1",
            "type": "Add Offer",
            "parameter": "",
            "create-date": "15/03/2016",
            "effective-date": "15/04/2016",
            "offer-group": "Future Offer"
        }, {
            "offer-name": "INTSPS01",
            "offer-description": "Internation Call Special Rate",
            "type": "Add Offer",
            "parameter": "",
            "create-date": "15/03/2016",
            "effective-date": "15/04/2016",
            "offer-group": "Future Offer"
        }, {
            "offer-name": "SPE001",
            "offer-description": "Special Discount",
            "type": "Add Offer",
            "parameter": "",
            "create-date": "15/03/2016",
            "effective-date": "11/06/2016",
            "offer-group": "Future Offer"
        }];
        $scope.futureOfferList = result;
        // futureOfferList = result;
    };
    $scope.getRegulaOfferList = function() {
        var result = [{
            "offer-name": "FCVBAR",
            "offer-description": "First Call Verification. Barring",
            "type": "Additional Offer",
            "parameter": "",
            "service-level": "C",
            "offer-group": "Related Offer"
        }, {
            "offer-name": "FTALKS25",
            "offer-description": "Talk 1F&F - O2True",
            "type": "F&F",
            "parameter": "",
            "service-level": "G",
            "offer-group": "Related Offer"
        }, {
            "offer-name": "RMPGPS01",
            "offer-description": "GPRS Unlimited",
            "type": "Additional Offer",
            "parameter": "",
            "service-level": "C",
            "offer-group": "Related Offer"
        }];
        // $scope.addNewOfferLists = result;
    };
    $scope.smartSearchOffer = function(txtSearch) {
        $scope.radioOffer = "";
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = addOfferLists;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.addOfferLists = arr;
        } else {
            $scope.addOfferLists = $filter('filter')(addOfferLists, txtSearch);
        }
    }
    $scope.smartSearchCpOffer = function(txtSearch) {
        $scope.radioCpOffer = "";
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = cpOfferList;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.cpOfferList = arr;
        } else {
            $scope.cpOfferList = $filter('filter')(cpOfferList, txtSearch);
        }
    }
    $scope.smartSearchDisOffer = function(txtSearch) {
        $scope.radioCpOffer = "";
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = disOfferList;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.disOfferList = arr;
        } else {
            $scope.disOfferList = $filter('filter')(disOfferList, txtSearch);
        }
    }

    $scope.ffData.min = 0;
    $scope.ffData.max = 0;
    $scope.onChangeRadioOffer = function(item) {
        $scope.clearValueAddNewOffer();
        $scope.selectedOffer = item;
        $scope.saveParamData = {};
        console.log($scope.selectedOffer);
        $('.modal-backdrop').css('height', '200%');


        switch ($scope.selectedOffer.group) {
            case "FF":
                $scope.ffData.max = $scope.selectedOffer.properties.FF_NUMBER;
                $scope.ffData.min = $scope.selectedOffer['parameter-specifications'][0].min;
                break;
            case "CONTRACT_PROPO":
                $scope.cpPropCode = $scope.selectedOffer.name;
                $scope.cpPropDesc = $scope.selectedOffer.description;
                $scope.cpStartDate = $scope.setDateNow;
                $('#cpStartDate').val($scope.cpStartDate);
                for (var i = 0; i < $scope.selectedOffer['parameter-specifications'].length; i++) {
                    if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_REMARK" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                        $scope.cpRemark = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                    }
                    if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_TERM" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                        $scope.cpTerm = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                        if ($scope.cpTerm == 0) {
                            $scope.cpExpireDate = $scope.cpStartDate;
                            $('#cpExpireDate').val($scope.cpExpireDate);
                        }
                    }
                    if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_FEE" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                        $scope.cpFee = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                    }
                    if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_NUMBER" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                        $scope.cpContractNumber = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                    }
                }

                if ($scope.cpTerm > 0) {
                    var currentDate = new Date();
                    currentDate.setMonth(currentDate.getMonth() + Number($scope.cpTerm));
                    var setDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + Number(currentDate.getMonth() + 1)).slice(-2) + "/"  + Number(currentDate.getFullYear() + 543);
                    $('#cpExpireDate').datepicker("setDate", new Date(currentDate.getFullYear(), ("0" + Number(currentDate.getMonth() + 0)).slice(-2), ("0" + currentDate.getDate()).slice(-2)));
                    $('#cpExpireDate').val(setDate);
                    $scope.cpExpireDate = $('#cpExpireDate').val();
                    // console.log(setDate);
                }

                $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
                break;
        }

        if ($scope.selectedOffer.group == "DISCOUNT") {
            $scope.disableSubmitAddOffer = false;
        } else {
            $scope.disableSubmitAddOffer = true;
        }
        $('#idBindDataAgain').click();
    };

    $scope.relatedOfferChk = "";
    $scope.relateOfferEditNewExpire = "";
    $scope.chkForEdit = [];
    $scope.onChkEditOffer = function() {
        console.log($scope.relatedOfferChk, $scope.relateOfferEditNewExpire)
        $scope.chkForEdit = [];
        $("input:checkbox[name=editOfferChk]:checked").each(function() {
            // alert($(this).val());
            var chkItem = $filter('filter')($scope.offerList, {
                'offer-name': $(this).val()
                    // 'offer-group': "Related Offer"
            });
            var item = {
                'item': chkItem[0],
                'new-expiration-date': $(".txt" + $(this).val()).val()
            };
            $scope.chkForEdit.push(item);
            // yourArray.push($(this).val());
        });
        console.log($scope.chkForEdit);
    };
    $scope.onAddOfferType = function() {
        $scope.radioOffer = "";
        $scope.txtSearchOffer = "";
        //$scope.popUpOfferList = popUpOfferList;
        // $scope.addOfferLists = $filter('filter')(addOfferLists, {
        //     'type': $scope.addOfferType
        // });
        $('.hModal').height(($(window).height()) - 235);
        //$('.modal-backdrop').css('height', '200%');
    };
    $scope.showDetail = function(item) {
        console.log(item);
        $scope.editOfferCode = item['product-name'];
        $scope.editOfferDesc = item['product-description'];

        $scope.showDetail['effective-date'] = item['effective-date'];
        $scope.showDetail['expiration-date'] = item['expiration-date'];
        $scope.showDetail['type'] = item['type'];

        $scope.showDetail['typed'] = "AD";
        $scope.editExpType = "effective";
        $scope.editParam = false;
        $scope.editExp = false;
        $scope.viewOffer = {
            "product-name": item['product-name'],
            "product-description": item['product-description'],
            "effective-date": item['effective-date'],
            "expiration-date": item['expiration-date']
        }
    };

    $scope.editDetail = function(item) {
        $scope.modelChange = false;
        $scope.showDetail(item);
    }

    // Submit form
    $scope.submit = function() {
        $scope.hasSubmitted = true;

        var data = {
            customerProfile: $scope.data.customerProfile,
            simData: $scope.data.simData,
            newSIMData: {
                productCodes: $scope.productCodes,
                simSerial: $scope.simSerial
            },
            changeOption: $scope.statusCancel
        };

        AddDeleteEditOfferNewServiceService.submitAddDeleteEditOfferNew(data, function(result) {
            console.log(result);
            if (result.status === true && result.data.status === 'SUCCESSFUL') {
                $('#modalPDFOpener').click();
            }
        });
    };


    // Get current SIM data
    var onGetSIMData = function(result) {

        if (result.data == false) {
            // SystemService.calendarDatePicker();
            console.log(result);
            $scope.SubNo = 'null';
            // $('#dataSubNo').val("");

            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 1200);
        }

        $scope.data = result.data;
        console.log($scope.data);
        $('#unMatch2').hide();

        $scope.getSIMDataFailed = false;

        if (!$scope.data) {
            $scope.getSIMDataFailed = true;
            SystemService.hideLoading();
        } else {
            authenticate();
        }

    };

    $scope.level = "SUBSCRIBER";
    $scope.serviceLevel = "C";
    $scope.callService = false;
    $scope.onInputSubNo = function() {
        if ($scope.callService == true) {
            return;
        }
        $scope.subNoInput = $('#dataSubNo').val();

        if ($scope.subNoInput && $scope.subNoInput.length === 10) {
            $scope.callService == true;
            SystemService.showLoading();
            $scope.SubNo = $('#dataSubNo').val();
            AddDeleteEditOfferNewService.getSIMData($scope.subNoInput, $scope.level, onGetSIMData);
            if (onGetSIMData) {
                $scope.getOfferList();
                $scope.getReleteOfferList();
                // $scope.getRegulaOfferList();
                // $scope.getPopUpOfferList();
                $scope.getFutureOfferList();
            }
        } else {
            $scope.callService = false;
        }
    };
    // (End) Get current SIM data ----------------------
    $scope.TrxID = '';
    $scope.orderId = '';
    var authenticate = function() {
        // SystemService.calendarDatePicker();
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
                $('#CitizenID').prop('disabled', false);
                setTimeout(function() {
                    $('#btnSSO').hide();
                }, 100);
            } else {
                $scope.showDataDealer = false;
            }

            if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length >= 1) {
                $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
            }

            SystemService.getOrderId($scope.getAuthen.channel, $scope.partnerCode, function(order) {

                // SystemService.hideLoading();
                orderData = order;
                $scope.TrxID = order.TrxID;
                $scope.orderId = order.orderId;
                localStorage.setItem('orderId', order.orderId);
                $scope.getExistingOffer();

                $scope.initModalReadCard();
            });
        });
    };

    //----------- camera ----------------
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
                $scope.isCustomerProfile = true;
                $.fancybox.close();
                $scope.isReadCardSuccess = false;
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }

        }
    }

    var validateInput = function() {
        // if (!$scope.statusCancel) {
        //     alert('กรุณาเลือกสถานะหมายเลขใหม่');
        //     return false;
        // }

        // if (!$scope.statusReason) {
        //     alert('กรุณาเลือกเหตุผล');
        //     return false;
        // }

        return true;
    };

    var generateOrderRequest = function() {
        $scope.data.customerProfile['language'] = "TH";
        return {
            customerProfile: $scope.data.customerProfile,
            customerAddress: $scope.data.customerAddress,
            productDetails: $scope.data.simData,
            orderData: orderData,
            saleAgent: $scope.getAuthen,
            reason: $scope.statusReason,
            memo: $scope.statusReasonMemo,
            approver: $scope.approver
        };
    };

    // $scope.openPDFDialog = function() {

    //     if (!validateInput()) {
    //         return;
    //     }

    //     SystemService.showLoading();

    //     var customerType = 'O';
    //     if ($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') {
    //         customerType = 'Y';
    //     }

    //     var data = {
    //         'func': 'CMS',
    //         'header': {
    //             'title-code': customerType == 'Y' ? "" : $scope.data.customerProfile['title-code'],
    //             'title': $scope.data.customerProfile['title'],
    //             'firstname': $scope.data.customerProfile['firstname'],
    //             'lastname': $scope.data.customerProfile['lastname'],
    //             'customerType': customerType,
    //             'authorizeFullName': $('#authorizeFullName').val(),
    //             'id-number': $scope.data.customerProfile['id-number'],
    //             'product-id-number': $scope.SubNo,
    //             'ouId': $scope.data.simData['ouId'],
    //             'orderId': orderData.orderId,
    //             'photo': $scope.varPhoto,

    //             'photoIdCard': '',
    //             'photoType': 'SN',
    //             'titleEn': '',
    //             'firstnameEn': '',
    //             'lastnameEn': '',
    //             'expireDay': $scope.data.customerProfile['id-expire-date'],
    //             'birthDay': $scope.data.customerProfile['birthdate'],
    //             'issueDay': '',

    //             'homeNumber': '',
    //             'moo': '',
    //             'trok': '',
    //             'soi': '',
    //             'road': '',
    //             'district': '',
    //             'amphur': '',
    //             'province': ''
    //         },
    //         'body': generateOrderRequest()
    //     };

    //     console.log(data);
    //     SystemService.generatePDF(data, function(url) {
    //         SystemService.hideLoading();

    //         SystemService.printPDF(url);
    //         //printObjectPdf();

    //         setTimeout(function() {
    //             $('#modalPDFOpener').click();

    //             setTimeout(function() {
    //                 var srcPDF = url;
    //                 document.getElementById('iframePDF').src = url + '?clearData=N';
    //                 if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == true) {
    //                     setTimeout(function() {
    //                         printObjectPdf();
    //                     }, 2000);
    //                     setTimeout(function() {
    //                         document.getElementById('iframePDF').src = srcPDF
    //                     }, 2500);
    //                 }
    //             }, 500);


    //         }, 1000);
    //     });
    // };

    $scope.confirmPrint = function() {
        SystemService.demo = true;
        SystemService.showLoading();

        var data = generateOrderRequest();

        data['statusCancel'] = $scope.statusCancel;
        data['statusReason'] = $scope.statusReason.id;
        data['statusReasonMemo'] = $scope.statusReasonMemo;

        AddDeleteEditOfferNewService.submitAddDeleteEditOfferNew(data, function(result) {
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

        openDialog(url, "MsgWindow", "width=800, height=600", function(w) {
            SystemService.showLoading();
            SystemService.second_authen($scope.TrxID, function(result) {
                SystemService.hideLoading();
                console.log(result);
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
            "technical-message": "addDeleteEditOfferControllerNew"
        });
    };
    $scope.initModalReadCard = function() {
        if ($scope.shopType == "1" && !$scope.isCustomerProfile && $scope.SubNo != 'null') {
            $("#btn-fancy-ReadCard").fancybox().trigger('click');
        }
        setTimeout(function() {
            $('#loadingReadCard').hide();
            $('#loadingReadCard2').hide();
            $('#unMatch2').hide();
            $('#unMatch').hide();

            $('#CitizenID').val('');
            $('#CitizenID').focus();

            if ($scope.getAuthen["isSecondAuthen"] == false && $scope.getAuthen["shopType"] == "1") {
                $('#CitizenID').prop('disabled', false);
                setTimeout(function() {
                    $('#CitizenID').focus();
                    $('#btnSSO').hide();
                }, 100);

            } else {
                if ($scope.getAuthen["isByPassSecondAuthen"] == true) {
                    $('#CitizenID').prop('disabled', false);
                    $('#CitizenID').focus();
                } else {
                    $('#CitizenID').prop('disabled', true);
                }
            }


            $('input[type=submit]').show();
            $('input[type=reset]').show();
        }, 200);
    }
    $scope.manualInputReadCard = function() {

        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        $('#CitizenID').prop('disabled', false);

        setTimeout(function() {
            $('#CitizenID').val('');
            $('#CitizenID').select();
            $('#CitizenID').focus();
        }, 1100);

        $scope.isManualReadCard = false;
        $('input[type=submit]').show();
        $('input[type=reset]').show();

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

    };

    $scope.customerType = "N";
    $scope.isAuthorize = false;
    $scope.authorize = function() {
        $scope.isAuthorize = true;
    };

    $scope.changeType = function(offerType) {
        $scope.offerType = offerType;
    };

    SystemService.calendarDatePicker();
    $scope.genCalendar = function() {
        SystemService.calendarDatePicker();
    };
    $scope.afterCloseWarning = function() {
        if ($scope.SubNo === 'null') {
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
        }
    };

    $scope.disableEditOffer = function() {
        $scope.readOnlyOffer = true;
    };

    $scope.enableEditOffer = function() {
        $scope.readOnlyOffer = false;
    };

    $scope.changeOfferType = function() {
        $scope.enableAddOffer = false;
        $scope.disableAddBtn = false;
        $scope.chkEdit = false
    }
    $scope.addOffer = function() {
        $scope.enableAddOffer = true;
        $scope.disableAddBtn = true;
    }
    $scope.tableAddOffer = 'tableAddOffer';
    $scope.radioRowClick = function(tableID, item) {
        $('.hModal').height(($(window).height()) - 235);
        $('#' + tableID + ' tr').click(function() {
            $(this).find('td input:radio').prop('checked', true);
        })

        setTimeout(function() {
            $scope.radioOffer = $('input[name=radioOffer]:checked').val();

            // $scope.disableSubmitAddOffer = false;
            console.log($scope.radioDisOffer);
            $('#idBindDataAgain').click();
            $scope.onChangeRadioOffer(item);
        }, 50);
    }
    $scope.checkboxRowClick = function(tableID) {
        $('#' + tableID + ' tr').click(function() {
            $(this).find('td input:checkbox').prop('checked', true);
        })
    }

    $scope.onClearRadio = function(radioName) {
        if (radioName == 'radioOffer') {
            $scope.radioOffer = "";
        }
        $scope.disableSubmitAddOffer = true;
        $('input[name=' + radioName + ']').attr('checked', false);
    }

    $scope.formatTHDate = function(date) {
        if (date) {
            if (date.indexOf("-") >= 0) {
                // var arr = date.split("T");
                var arr = arr.split("/");
                var strDate = arrDate[0] + "/" + arrDate[1] + "/" + (Number(arrDate[2]) + 543);
                console.log(arr);
                return strDate;

            } else {

                return date;
            }
            console.log($scope.dateNow);
        }
    }

    $scope.chkExpDate = function() {
        if ($scope.radioExpDate == "expDate") {
            $scope.manualExpDate = false;
        } else {
            $scope.manualExpDate = true;
            $scope.editADEffectiveOffer = "";
            $('#editADEffectiveOffer').val('');
        }
    }
    $scope.manualExpDisDate = true;
    $scope.chkEditDisDate = function() {
        if ($scope.editDisDate == "expDate") {
            $scope.manualExpDisDate = false;
        } else {
            $scope.manualExpDisDate = true;
            $scope.editDisEffectiveOffer = "";
            $('#editDisEffectiveOffer').val('');
        }
    }

    $scope.chkEditExpDate = function() {
        if ($scope.editExpType == "manual") {
            $scope.manualExpDate = false;
        } else {
            $scope.manualExpDate = true;
            $scope.editManualEffective = "";
            $('#editManualEffective').val('');
        }
    }

    $scope.chkBoxLength = "";
    $scope.chkID = "";
    $scope.chkEdit = false
    $scope.openEditModal = function(chkModel, item, chkId) {
        console.log(chkModel);
        if (chkModel == true) {
            $scope.chkID = chkId;
            $scope.editDetail(item);
            $('#editModal').click();
        } else {
            $scope.chkID = "";
        }
        $scope.chkBoxLength = item['offer-name'];
    }

    $scope.modelChange = false;
    $scope.onModelChange = function() {
        $scope.modelChange = true;
    }

    $scope.unChk = function(editOfferCode) {
        if ($scope.modelChange == false) {
            for (var i = 0; i < $scope.offerList.length; i++) {
                if (editOfferCode == $scope.offerList[i]['product-name']) {
                    $scope.offerList[i].selected = false;
                }
            }
        }
    }

    $scope.hideReadCardForMobile = function() {
        SystemService.hideReadCardForMobile();
    };

    $scope.existingOffer = [];
    $scope.builtInOffer = [];
    $scope.regularOffer = [];
    $scope.propoOffer = [];
    $scope.discountOffer = [];
    $scope.getExistingOffer = function() {
        SystemService.showLoading();
        AddDeleteEditOfferNewService.getExistingOffer($scope.level, $scope.data.simData['product-id-number'], $scope.data.simData['subscriber-id'], function(result) {
            console.log(result.data['response-data']['customer']['installed-products']);
            SystemService.hideLoading();
            if (result.data['response-data']) {
                for (var i = 0; i < result.data['response-data']['customer']['installed-products'].length; i++) {
                    if (result.data['response-data']['customer']['installed-products'][i]['effective-date']) {
                        result.data['response-data']['customer']['installed-products'][i]['effective-date'] = SystemService.convertDateToTH(result.data['response-data']['customer']['installed-products'][i]['effective-date'], 'TH');
                    }
                }
                $scope.builtInOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'PRICEPLAN-BUILT-IN' });
                $scope.regularOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'ADDITIONAL-OFFER' });
                $scope.propoOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'PROPOSITION' });
                $scope.discountOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'DISCOUNT' });

                if ($scope.builtInOffer) {
                    for (var i = 0; i < $scope.builtInOffer.length; i++) {
                        $scope.existingOffer.push($scope.builtInOffer[i])
                    }
                }
                if ($scope.regularOffer) {
                    for (var i = 0; i < $scope.regularOffer.length; i++) {
                        $scope.existingOffer.push($scope.regularOffer[i])
                    }
                }
                if ($scope.propoOffer) {
                    for (var i = 0; i < $scope.propoOffer.length; i++) {
                        $scope.existingOffer.push($scope.propoOffer[i])
                    }
                }
                if ($scope.discountOffer) {
                    for (var i = 0; i < $scope.discountOffer.length; i++) {
                        $scope.existingOffer.push($scope.discountOffer[i])
                    }
                }
                // console.log($scope.existingOffer);
            } else {
                $scope.existingOffer = [];
                $scope.builtInOffer = [];
                $scope.regularOffer = [];
                $scope.propoOffer = [];
                $scope.discountOffer = [];
            }
        });
    };

    $scope.addType = "";
    $scope.searchOffer = function(offerGroup) {
        SystemService.showLoading();
        $scope.addType = offerGroup;
        $scope.clearAddNewOfferDate();
        if ($scope.level == "SUBSCRIBER") {
            $scope.serviceLevel = "C";
        } else {
            $scope.serviceLevel = "G";
        }

        if ($scope.addType == 'ALL') {
            $scope.addOfferType.value = 'ADDITIONAL';
            var searchParam = "offer-group=" + $scope.addOfferType.value + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        } else if ($scope.addType == 'CONTRACT_PROPO') {
            $scope.addOfferType.value = 'CONTRACT_PROPO';
            var searchParam = "offer-group=CONTRACT_PROPO" + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        } else if ($scope.addType == 'DISCOUNT') {
            $scope.addOfferType.value = 'DISCOUNT';
            var searchParam = "offer-group=DISCOUNT" + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        } else {
            var searchParam = "offer-group=" + $scope.addOfferType.value + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        }

        console.log(searchParam);
        AddDeleteEditOfferNewService.searchOffer(searchParam, $scope.addOfferType.value, function(result) {
            // console.log(result);
            SystemService.hideLoading();
            if (result.data['response-data']) {
                SystemService.hideLoading();
                $scope.addOfferLists = result.data['response-data'];
                for (var i = 0; i < $scope.addOfferLists.length; i++) {
                    if ($scope.addOfferLists[i]["sale-period"].start) {
                        $scope.addOfferLists[i]["sale-period"].start = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["sale-period"].start, "dd/MM/YYYY");
                    }

                    if ($scope.addOfferLists[i]["sale-period"].end) {
                        $scope.addOfferLists[i]["sale-period"].end = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["sale-period"].end, "dd/MM/YYYY");
                    }
                }
                addOfferLists = $scope.addOfferLists;
                console.log($scope.addOfferLists);

                if ($scope.addOfferType.value == "CUG") {
                    $scope.getCUGLists();
                }

            } else {
                $scope.addOfferLists = [];
                addOfferLists = [];
            }
        });
    }

    $scope.newOffer = [];
    $scope.currentOfferParam = ""
    $scope.validateOffer = function(item) {
        $scope.currentOfferParam = "";
        $scope.selectedNewOffer = item.name;
        $scope.newOffer = item;
        console.log($scope.newOffer);
        if ($scope.existingOffer.length >= 1) {
            $scope.currentOfferParam = $scope.existingOffer[0]['product-name'];
            for (var i = 1; i < $scope.existingOffer.length; i++) {
                $scope.currentOfferParam += "|" + $scope.existingOffer[i]['product-name'];
            };
        };
        console.log($scope.currentOfferParam);

        AddDeleteEditOfferNewService.validateOffer($scope.selectedNewOffer, $scope.currentOfferParam, function(result) {
            $scope.validateOfferResult = result;
            console.log($scope.validateOfferResult.data);
            if (!$scope.validateOfferResult.data.fault) {
                $scope.newOffer.param = {};
                $scope.newOffer.param['effective-date-type'] = $scope.offerEffectiveDate;
                $scope.newOffer.param['effective-date-value'] = $('#addNewOfferEffectiveDate').val();
                $scope.newOffer.param['expiration-date-type'] = $scope.offerExpirationDate;
                $scope.newOffer.param['expiration-date-value'] = $('#addNewOfferExpirationDate').val();

                if ($scope.newOffer.group == "FF") {
                    for (var i = 0; i <= $scope.ffData.max; i++) {
                        if ($scope.saveParamData["ff" + i]) {
                            if (!$scope.ffNumber) {
                                $scope.ffNumber = $scope.saveParamData["ff" + i];
                            } else {
                                $scope.ffNumber += "|" + $scope.saveParamData["ff" + i];
                            }
                        }
                    }
                    $scope.newOffer.param['ff-number'] = $scope.ffNumber;
                }

                if ($scope.newOffer.group == "CUG") {
                    $scope.newOffer.param['group-id'] = $scope.cugParam['group-id'];
                    $scope.newOffer.param['group-name'] = $scope.cugParam['group-name'];
                }

                if ($scope.newOffer.group == "CONTRACT_PROPO") {
                    $scope.newOffer.param['contract-number'] = $scope.cpContractNumber;
                    $scope.newOffer.param['start-date'] = $scope.cpStartDate;
                    $scope.newOffer.param['expiration-date'] = $scope.cpExpireDate;
                    $scope.newOffer.param['remark'] = $scope.cpRemark;
                }
                $scope.addNewOfferList($scope.newOffer);
            } else {
                SystemService.showAlert($scope.validateOfferResult.data['display-messages'][0]);
            }
        });

    };

    $scope.onEffectiveChange = function() {
        if ($scope.offerEffectiveDate == "immediate") {
            $scope.addNewOfferEffectiveDate = "";
            $('#addNewOfferEffectiveDate').val($scope.addNewOfferEffectiveDate);
        }
    };

    $scope.onExpirationChange = function() {
        if ($scope.offerExpirationDate == "unlimited") {
            $scope.addNewOfferExpirationDate = "";
            $('#addNewOfferExpirationDate').val($scope.addNewOfferExpirationDate);
        }
    };

    $scope.onCheckFF = function() {
        for (var i = 1; i <= $scope.ffData.max; i++) {
            if ($scope.saveParamData["ff" + i]) {
                if ($scope.saveParamData["ff" + i].length < 3) {
                    SystemService.showAlert(ValidateMsgService.data.isDigitSubNo);
                    $scope.saveParamData["ff" + i] = "";
                    $scope.disableSubmitAddOffer = true;
                }
            }
        }
    };

    $scope.ffNumber = "";
    $scope.onInputFF = function(charCode) {
        // console.log($scope.saveParamData);
        var count = 0;
        for (var i = 0; i <= $scope.ffData.max; i++) {
            if ($scope.saveParamData["ff" + i] && ($scope.saveParamData["ff" + i].length >= 3)) {
                count++;
            }
        }
        // alert(count);
        if (count >= $scope.ffData.min) {
            $scope.disableSubmitAddOffer = false;
        } else {
            $scope.disableSubmitAddOffer = true;
        }
    };

    var cugList = [];
    $scope.getCUGLists = function() {
        $scope.searchCug = "";
        $scope.cugParam = {};
        $scope.currentPage_cug = 1;
        SystemService.showLoading();
        ChangePricePlanService.getCUGList(function(result) {
            SystemService.hideLoading();
            $scope.cugList = result.data["cug-list"];
            cugList = result.data["cug-list"];
            console.log($scope.cugList);
        })
    }

    $scope.smartSearchCug = function(txtSearch) {
        if (txtSearch.indexOf(' ') > 0) {
            var txtList = txtSearch.split(' ');
            var arr = cugList;
            console.log(txtList);
            for (var i = 0; i < txtList.length; i++) {
                arr = $filter('filter')(arr, txtList[i]);
            }
            $scope.cugList = arr;
        } else {
            $scope.cugList = $filter('filter')(cugList, txtSearch);
        }
    }

    $scope.cugParam = {};
    $scope.onSelectCUG = function(item) {
        $scope.cugParam = {
            "group-id": item['group-id'],
            "group-name": item['group-name']
        };
        $scope.disableSubmitAddOffer = false;
    };

    $scope.validateAddCp = function() {
        if ($scope.cpContractNumber && $scope.cpStartDate && $scope.cpExpireDate && $scope.cpRemark && $scope.cpRemark != " " && $scope.cpDiffResult >= 0) {
            $scope.disableSubmitAddOffer = false;
        } else {
            $scope.disableSubmitAddOffer = true;
        }
    }

    $scope.clearAddNewOfferDate = function() {
        $scope.offerEffectiveDate = "immediate";
        $scope.offerExpirationDate = "unlimited";
        $scope.addNewOfferEffectiveDate = "";
        $('#addNewOfferEffectiveDate').val($scope.addNewOfferEffectiveDate);
        $scope.addNewOfferExpirationDate = "";
        $('#addNewOfferExpirationDate').val($scope.addNewOfferExpirationDate);
    };

    $scope.checkValueCpDate = function(dateValue1, dateValue2) {
        var date1 = dateValue1.split("/");
        var date2 = dateValue2.split("/");
        var a = moment([(Number(date2[2])), date2[1], date2[0]]);
        var b = moment([(Number(date1[2])), date1[1], date1[0]]);
        console.log(a.diff(b, 'days'));
        var diffResult = a.diff(b, 'days');
        return diffResult;
    };

    $(document).ready(function() {
        $("#cpStartDate").change(function() {
            $scope.cpStartDate = $('#cpStartDate').val();
            $scope.cpExpireDate = $('#cpExpireDate').val();
            $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
            $scope.validateAddCp();
            $('#idBindDataAgain').click();
        });
        
    });

    $(document).ready(function() {
        $("#cpExpireDate").change(function() {
            $scope.cpStartDate = $('#cpStartDate').val();
            $scope.cpExpireDate = $('#cpExpireDate').val();
            $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
            $scope.validateAddCp();
            $('#idBindDataAgain').click();
        });
    });

    $scope.clearValueAddNewOffer = function() {
        $scope.cpRemark = "";
        $scope.cpContractNumber = "";
    }
});
