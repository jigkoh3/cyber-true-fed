// ---------------------- ChangePricePlanForIE8Controller.js ----------------------
smartApp.controller('ChangePricePlanForIE8Controller', function(
    $ngBootbox,
    $scope,
    AuthenService,
    SystemService,
    $routeParams,
    ReasonService,
    ChangePricePlanForIE8Service,
    paginationService,
    ValidateMsgService,
    $filter,
    $window) {


    $scope.divID = "changePricePlanForIE8Content";
    $scope.isMatch = true;
    $scope.orderId = "";
    $scope.TrxID = "";
    $scope.shopType = "0";
    $scope.isLoadPricePlan = false;
    $scope.isNonePartner = true;
    $scope.isCardValueData = false;
    $scope.getAuthen = {};
    $scope.isCustomerProfile = false;

    $scope.isFirstClickDropDown_Proposition = true;
    $scope.onFirstClickDropDown_Proposition = false;
    $scope.varCardInfo2 = {
        firstName: "",
        lastName: ""
    };
    $scope.approver = "";

    $scope.ngDialogData = {
        "message": "Test",
        "message-code": "",
        "message-type": "ERROR",
        "en-message": "",
        "th-message": "",
        "technical-message": ""
    };
    $scope.alertTest = function() {
        //$ngBootbox.alert('xxxxxxxxxxx');
        //$ngBootbox.customDialog($scope.customDialogOptions);
    };
    $scope.printAndSaveOrder = function() {
        //case for PDF Android ::18-05-2016 //xsam32
        SystemService.checkPDFAndroid_printNoneShop();
        $scope.saveOrder();
    };
    $scope.hideReadCardForMobile = function() {
        SystemService.hideReadCardForMobile();
    };
    $scope.filterAndOpen = function() {
        console.log($scope.firstSearch);
        $scope.smartSearchPP($scope.pricePlanFilter.value);
        var list = $scope.propositionList;
        console.log(list.length, $scope.pricePlanFilter.value);
        if (list.length == 1) {
            //if ($scope.firstSearch == false) {
            $scope.isEnterPP = true;
            $scope.selectedPricePlan(list[0]);
            $scope.selectedPricePlan2();
            $('#idClosemodalnewpriceplan').click();
            //} else {
            // $scope.firstSearch = false;
            //}

        }
        if (list.length > 1 && $scope.pricePlanFilter.value) {
            if ($scope.firstSearch == false) {
                //setTimeout(function() {
                $('#modalnewpriceplan').click();
                //}, 5100);

            } else {
                $scope.firstSearch = false;
            }
        }
        if (list.length == 0) {
            idFocus = "ppfilter";
            SystemService.showAlert(ValidateMsgService.data.pricePlanNotFoundMsg);

        }
    };
    $scope.isEnterPP = false;
    $scope.openPricePlanDialog = function() {
        $('#hModal').height(($(window).height()) - 235);
        $scope.isEnterPP = false;
        if (!$scope.isLoadPricePlan) {
            //call Priceplan
            $scope.focusPricePlanFilter();
        } else {
            $scope.filterAndOpen();
        }


    };

    $scope.isSelectCUGList = false;
    $scope.attModalVal = "";

    //paging
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.currentPage_cug = 1;
    $scope.pageSize_cug = 10;
    $scope.totalCUG = 10;
    //end paging

    $scope.offerDetail = {};
    $scope.offerDetailRoute2 = {};
    $scope.aftersalePriceplans = [];
    $scope.selectCMP = {
        duration: "",
        volume: "",
        occurrence: "",
        monetary: ""
    };
    $scope.specialOfferType = {
        CUG: false,
        FF: false,
        SA: false,
        POOL: false,
        POOLING: false,
        CAPMAX: false
    };
    $scope.saveParamData = {};
    $scope.saveDataCUG = {};
    $scope.ffData = {
        min: 0,
        max: 10
    };
    $scope.parameter = {};

    //fix ISSUE search PP
    $scope.firstSearch = false;

    $scope.PPTypeId = "";
    var valPricePlans = [];
    var valPricePlansUnique = [];
    $scope.propositionList = [];
    $scope.propositions = [];
    $scope.selectProposition = "null";
    $scope.cugList = [];
    $scope.selectCUG = {};
    $scope.saveSelectCUG = {};

    $scope.isValidate = false;
    $scope.isValidateFF = false;
    $scope.saveData = {
        'nowBillDate': SystemService.getDateDDMMYYYY("TH"),
        'nextBillDate': "",
        'manualBillDate': "",
        'EFFECTIVE-DATE': SystemService.getDateDDMMYYYY("TH"),
        'EFFECTIVE-OPTION': "IMMEDIATE",
        'memo': ""
    };
    $scope.onEffectiveDate = function(method) {
        if (method == 'IMMEDIATE') {
            $scope.saveData['EFFECTIVE-DATE'] = $scope.saveData.nowBillDate;
            $scope.saveData['EFFECTIVE-OPTION'] = method;
        }
        if (method == 'NEXTBILL') {
            $scope.saveData['EFFECTIVE-DATE'] = $scope.saveData.nextBillDate;
            $scope.saveData['EFFECTIVE-OPTION'] = method;
        }
        if (method == 'FUTURE') {
            $scope.saveData['EFFECTIVE-DATE'] = '';
            $scope.saveData['EFFECTIVE-OPTION'] = method;
        }
        //alert($scope.saveData['EFFECTIVE-DATE']+":"+$scope.saveData['EFFECTIVE-OPTION']);
    };


    $scope.varPhoto = "";
    $scope.CitizenID = "";

    $scope.dateSpecify = "";
    //SystemService.genDatePicker();

    $scope.isReadCardSuccess = false;
    $scope.data = {};
    $scope.data2 = {};

    //################### INIT PARAM #################################
    //:id/:oulevel/:ouid/:subno

    //$scope.shopType = "1";
    $scope.id = $routeParams.id;
    $scope.Level = $routeParams.oulevel ? $routeParams.oulevel : "Sub";
    $scope.OUID = $routeParams.ouid ? $routeParams.ouid : 'null';
    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null';
    $scope.isNullSubNo = $routeParams.subno ? false : true;
    $scope.Action = $routeParams.action;

    /*
    $scope.shopType = $routeParams.shopType;
    $scope.Level = $routeParams.OULevel;
    $scope.OUID = $routeParams.OUID;
    $scope.SubNo = $routeParams.SubNo;
    $scope.routeParams = $routeParams;
    */
    //################### INIT PARAM #################################

    $scope.newpriceplan = "";
    $scope.priceListmodal = "";
    $scope.saleList = "";
    $scope.serviceM = "0";
    $scope.currentPricePlan = "";
    $scope.notContractProposition = "";

    $scope.clickEffective = function() {
        //alert("vvvvv");
        $scope.dateSpecify = "";
    };
    $scope.checkHybridStatus = function(status) {
        setTimeout(function() {
            var x = status.indexOf('HY');
            if (status && status.indexOf('HY') === 0) {
                $scope.onEffectiveDate('NEXTBILL');
                $('#divEffer').width(250);
                $('#efferNext').removeClass('hidden');
                $('#efferNext').addClass('active');
            } else if ($scope.Level == "OU") {
                $scope.checkOULargeCusSize();
            } else {
                $scope.onEffectiveDate('NEXTBILL');
                $('#efferNow').removeClass('hidden');
                $('#efferNext').removeClass('hidden');
                $('#efferManual').removeClass('hidden');
                $('#efferNext').addClass('active');
            }
        }, 1000);
    };
    $scope.largeCusSizeDate = new Date();
    $scope.checkOULargeCusSize = function() {
        if ($scope.Level == "OU") {
            var isLargeCusSize = utils.getObject($scope.data.priceplan, "product-properties")
            if (isLargeCusSize && isLargeCusSize['IS-LARGE-CUSTOMER-SIZE'] == "true") {
                //alert(isLargeCusSize['IS-LARGE-CUSTOMER-SIZE']);
                //$scope.saveData['manualBillDate'] = $scope.largeCusSizeDate;
                $('#divEffer').addClass('divCorperate');
                $('#efferNext').removeClass('hidden');
                $('#efferManual').removeClass('hidden');
                $('#efferManual').addClass('active');

                //$scope.largeCusSizeDate.setDate($scope.largeCusSizeDate.getDate() + 1);
                var fillZero = function(i) {
                    return i < 10 ? ("0" + i) : i;
                }

                $scope.lcsDate = $scope.largeCusSizeDate.getDate() + 1;
                $scope.lcsMonth = $scope.largeCusSizeDate.getMonth() + 1;
                $scope.lcsYear = $scope.largeCusSizeDate.getFullYear() + 543;
                $scope.saveData['manualBillDate'] = fillZero($scope.lcsDate) + "/" + fillZero($scope.lcsMonth) + "/" + $scope.lcsYear;
                $('#txtDateManual').val($scope.saveData['manualBillDate']);
                $('#txtDateManual').datepicker("setDate", new Date($scope.lcsYear - 543, $scope.lcsMonth - 1, $scope.lcsDate));
            } else {
                $scope.onEffectiveDate('NEXTBILL');
                $('#efferNow').removeClass('hidden');
                $('#efferNext').removeClass('hidden');
                $('#efferManual').removeClass('hidden');
                $('#efferNext').addClass('active');
            }
        }
    };

    $scope.checkEffectivePrepaid = function(mobileServiceType, accountSubType) {
        setTimeout(function() {
            if (mobileServiceType && mobileServiceType == "PREPAID") {
                $('#divEffer').width(250);
                $('#efferNow').removeClass('hidden');
                $('#efferNow').addClass('active');
            } else {
                $scope.checkHybridStatus(accountSubType);
            }
        }, 1000);
    };
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
        //setTimeout(function () {
        //    $scope.isNumberSubNo = false;
        //    $('#idBindDataAgain').click();
        //}, 3000);
        $scope.autoHideNumberSubNo = false;
        return bool;
    }
    $scope.convertDate = function(date) {
        return SystemService.convertDateToTH(date, 'TH');
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

            //call validateChangePricePlan
            ChangePricePlanForIE8Service.getChangePricePlan($scope.SubNo, $scope.OUID, function(result) {
                console.log(result);
                if (result.status) {

                    $scope.data = result.data;
                    $scope.data2 = result.data;
                    //$scope.saveData.nextBillDate = SystemService.convertDateTo($scope.data.priceplan['bill-cycle-next-date'], 'TH');
                    $scope.saveData.nextBillDate = SystemService.convertDateToTH($scope.data.priceplan['bill-cycle-next-date'], 'TH');
                    if ($scope.data.offer.length != 0) {
                        $scope.saleList = $scope.data.offer[0]["product-name"];
                        for (var i = 0; i < $scope.data.offer.length; i++) {
                            //// new Requirement p'kwang :: 01-07-2016 :: xsam32
                            if ($scope.data.offer[i]["product-properties"]["IS-CONTRACT"] == "Y") {
                                $scope.currentPricePlan = $scope.currentPricePlan + ($scope.currentPricePlan ? "|" : "") + $scope.data.offer[i]["product-id"];
                            }
                            if ($scope.data.offer[i]["product-properties"]["IS-CONTRACT"] == "N") {
                                $scope.notContractProposition = $scope.notContractProposition + ($scope.notContractProposition ? "|" : "") + $scope.data.offer[i]["product-id"];
                            }
                        }
                    }
                    if ($scope.Level == "OU") {
                        $scope.isReadCardSuccess = false;
                    } else {
                        $scope.isReadCardSuccess = true;
                    }

                    $scope.checkEffectivePrepaid($scope.data.priceplan['mobile-servicetype'], $scope.data.priceplan['account-sub-type']);
                    //alert('call checkHybridStatus');
                    //call Priceplan
                    //$scope.getPriceplan();

                    if ($scope.shopType == "1") {
                        setTimeout(function() {

                            SystemService.calendarDatePicker();

                        }, 1000);
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
                        $("#btn-fancy-ReadCard").fancybox().trigger('hide');
                        if (result.data["display-messages"].length == 0) {
                            setTimeout(function() {

                                $scope.initModalReadCard();

                            }, 1000);
                        }

                    } else {

                        $scope.isCustomerProfile = true;
                        setTimeout(function() {

                            $('#loadingReadCard2').hide();
                            $('#unMatch2').hide();
                            SystemService.calendarDatePicker();
                        }, 1000);
                    }

                    //check partner
                    if (!$scope.isNonePartner && $scope.shopType == '1') {
                        $scope.data = {};
                        $scope.isNonePartner = true;
                        setTimeout(function() {
                            $scope.openSSO();

                        }, 1000);
                    }



                } else {
                    //error
                    SystemService.hideLoading();
                    //error
                    setTimeout(function() {
                        if ($scope.isNullSubNo) {
                            SystemService.showAlert({
                                "message": result.data["display-messages"][0]["message"],
                                "message-code": result.data["display-messages"][0]["message-code"],
                                "message-type": "WARNING",
                                "en-message": result.data["display-messages"][0]["en-message"],
                                "th-message": result.data["display-messages"][0]["th-message"],
                                "technical-message": result.data["display-messages"][0]["technical-message"]
                            });
                            $scope.SubNo = 'null';
                        } else {
                            SystemService.showAlert({
                                "message": result.data["display-messages"][0]["message"],
                                "message-code": result.data["display-messages"][0]["message-code"],
                                "message-type": "ERROR",
                                "en-message": result.data["display-messages"][0]["en-message"],
                                "th-message": result.data["display-messages"][0]["th-message"],
                                "technical-message": result.data["display-messages"][0]["technical-message"]
                            });
                        }

                    }, 1000);
                }

            });

            //call getCUGId
            ChangePricePlanForIE8Service.getCUGList(function(result) {
                $scope.cugList = result.data["cug-list"];
                //alert($scope.cugList.length);
            });
        });


        //}
    };

    $scope.onSelectCUG = function(item) {
        $scope.isSelectCUGList = true;
        console.log(item);
        $scope.selectCUG = item;
    };
    $scope.onBeforeWarning = function() {

        $scope.initModalReadCard();

    };
    $scope.getPriceplan = function() {
        // $scope.pricePlanFilter.value = "";

        SystemService.showLoading();
        console.log($scope.data.priceplan);

        var target = 'sales/catalog/product/tmv/priceplan/aftersales-priceplan-groupsearch?' +
            'company-code=' + $scope.data.priceplan['company-code'] + '&' +
            'customer-type=' + $scope.data.priceplan['account-category'] + '&' +
            'customer-subtype=' + $scope.data.priceplan['account-sub-type'];

        if (SystemService.checkObj($scope.data.priceplan, ["product-id"])) {
            target += '&current-priceplan=' + $scope.data.priceplan['product-id'];
        }

        //check proposition
        var propositionList = $scope.data.offer;
        var currentPropositions = "";
        if (propositionList.length > 0) {
            console.log(propositionList);

            for (var i = 0; i < propositionList.length; i++) {
                try {
                    //// new Requirement p'kwang :: 01-07-2016 :: xsam32
                    var contractTerm = Number(propositionList[i]["contract-term"]);
                    var isContract = propositionList[i]["product-properties"]["IS-CONTRACT"];
                    var a = contractTerm > 0 ? true : false;
                    var b = isContract == "Y" ? true : false;
                    if (a && b) {
                        currentPropositions = currentPropositions + (currentPropositions ? "," : "&current-propositions=") + propositionList[i]["product-id"];
                    }
                } catch (e) {}
            }
        }
        //check discount
        var discountList = $scope.data.discount;
        var currentDiscounts = "";
        if (discountList.length > 0) {
            console.log(discountList);

            for (var i = 0; i < discountList.length; i++) {
                try {
                    currentDiscounts = currentDiscounts + (currentDiscounts ? "," : "&current-discounts=") + discountList[i]["product-id"];

                } catch (e) {}
            }
        }
        //add parameter
        target = target + currentPropositions + currentDiscounts;

        var PPTypeId = $('#PPTypeId').val();
        if (PPTypeId) {
            target = target + '&priceplan-type=' + PPTypeId;
        }

        if ($scope.Level == "Sub") {
            target = target + '&service-level=' + $scope.data.priceplan['service-level'];
        }
        if ($scope.Level == "OU") {
            if (SystemService.checkObj($scope.data.priceplan, ["ou-hierarchytype"])) {
                var ouHr = $scope.data.priceplan['ou-hierarchytype'];
                if (ouHr == "CHILD") {
                    target += '&ou-level=C';
                } else if (ouHr == "ROOT") {
                    target += '&ou-level=R';
                } else {
                    //ไม่ส่ง
                }
            }
        }

        //call Priceplan
        ChangePricePlanForIE8Service.getPriceplan(target, function(resultGetPriceplan) {
            if (resultGetPriceplan.status) {

                //console.log(resultGetPriceplan.data["display-messages"][0]);
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
                if (SystemService.checkObj(resultGetPriceplan.data, ["response-data", "priceplans"]) && SystemService.checkObj(resultGetPriceplan.data, ["response-data", "mapped-propo-priceplans"])) {
                    $('#spanMsgNotFound').addClass('hide');
                } else {
                    $('#spanMsgNotFound').removeClass('hide');
                    SystemService.hideLoading();
                    return;
                }

                console.log($scope.aftersalePriceplans);
                $scope.propositionList = [];
                $scope.propositions = [];
                valPricePlans = [];
                valPricePlansUnique = [];
                var makeDataPriceplan = function(arr, proName, proCode) {
                    if (arr && arr != undefined && arr != null) {
                        for (var i = 0; i < arr.length; i++) {
                            var item = {
                                "proposition-code": proCode,
                                "pricePlan": arr[i]["name"] + " : " + arr[i]["description"],
                                "promotion": proName,
                                "rc": arr[i]["rc"],
                                "priceplans": arr[i],
                                "saveName": arr[i]["name"],
                                "radioId": arr[i]["name"] + ":" + proName
                            };
                            var numRow = $filter('filter')($scope.propositionList, {
                                pricePlan: arr[i]["name"]
                            });
                            if (numRow.length == 0) {

                                $scope.propositionList.push(item);
                                valPricePlansUnique.push(item);

                            }
                            valPricePlans.push(item);
                        }

                        SystemService.pricePlans = $scope.propositionList;
                        //console.log($scope.propositionList);

                        //$scope.propositionList = $filter('unique')($scope.propositionList);
                        //console.log($scope.propositionList);

                        if (!$scope.pricePlanFilter.value) {

                            setTimeout(function() {
                                var id = "selectProposition";
                                var select_box = document.getElementById(id);
                                if (select_box.options.length > 10) {
                                    select_box.size = 10;
                                } else {
                                    select_box.size = select_box.options.length;
                                }

                                $('#selectProposition').focus();
                                $('#selectProposition').click(function() {
                                    select_box.size = 1;
                                });
                                $('#selectProposition').blur(function() {
                                    select_box.size = 1;
                                });
                                $('#selectProposition').keydown(function(e) {
                                    var charCode = (e.which) ? e.which : e.keyCode;
                                    if (charCode == 13)
                                        select_box.size = 1;
                                });

                            }, 1200);
                        } else {
                            //
                            // $scope.firstSearch = true;
                            // //$scope.filterAndOpen();
                            // var listx = $filter('filter')($scope.propositionList, $scope.pricePlanFilter.value);
                            // console.log(listx.length, $scope.pricePlanFilter.value);
                            // // if (list.length == 1) {
                            // //     $scope.isEnterPP = true;
                            // //     $scope.selectedPricePlan(list[0]);
                            // //     $scope.selectedPricePlan2();

                            // // }
                            // if (listx.length > 1 && $scope.pricePlanFilter.value) {
                            //     setTimeout(function(){
                            //         $('#modalnewpriceplan').click();
                            //     }, 1000);
                            //     setTimeout(function(){
                            //         $('#modalnewpriceplan').click();
                            //     }, 2000);
                            // }
                            // if (listx.length == 0) {
                            //     SystemService.showAlert(ValidateMsgService.data.pricePlanNotFoundMsg);

                            // }
                            setTimeout(function() {
                                $('#ppfilter').focus();
                                //$scope.firstSearch = true;
                                //$scope.openPricePlanDialog();
                                //$('#modalnewpriceplan').click();
                            }, 2100);

                        }
                    }

                };

                // if (SystemService.checkObj(resultGetPriceplan.data, ["response-data", "mapped-propo-priceplans"])) {
                //     $scope.aftersalePriceplans = resultGetPriceplan.data["response-data"]["mapped-propo-priceplans"];
                //     for (var i = 0; i < $scope.aftersalePriceplans.length; i++) {
                //         $scope.aftersalePriceplans[i]["proposition"]['proposition_code'] = $scope.aftersalePriceplans[i]["proposition"]['proposition-code'];
                //         $scope.propositions.push($scope.aftersalePriceplans[i]["proposition"]);
                //     }
                //     //make data for $scope.propositionList form ......
                //     var arr = resultGetPriceplan.data["response-data"]["mapped-propo-priceplans"];
                //     for (var i = 0; i < arr.length; i++) {
                //         //makeDataPriceplan(arr[i]["priceplans"], arr[i]['proposition']['name'], arr[i]['proposition']['proposition-code']);
                //     }
                // }
                if (SystemService.checkObj(resultGetPriceplan.data, ["response-data", "priceplans"])) {
                    //make data for $scope.propositionList form ......
                    ////makeDataPriceplan(resultGetPriceplan.data["response-data"]["priceplans"], "", "");
                    //
                    //valPricePlans = resultGetPriceplan.data["response-data"]["priceplans"];

                }
                if (SystemService.checkObj(resultGetPriceplan.data, ["response-data", "mapped-propo-priceplans"])) {
                    $scope.aftersalePriceplans = resultGetPriceplan.data["response-data"]["mapped-propo-priceplans"];
                    for (var i = 0; i < $scope.aftersalePriceplans.length; i++) {
                        $scope.aftersalePriceplans[i]["proposition"]['proposition_code'] = $scope.aftersalePriceplans[i]["proposition"]['proposition-code'];
                        $scope.propositions.push($scope.aftersalePriceplans[i]["proposition"]);
                    }
                    //make data for $scope.propositionList form ......
                    var arrMPP = resultGetPriceplan.data["response-data"]["mapped-propo-priceplans"];
                    for (var im = 0; im < arrMPP.length; im++) {
                        //makeDataPriceplan(arr[i]["priceplans"], arr[i]['proposition']['name'], arr[i]['proposition']['proposition-code']);
                        //

                        var arr = arrMPP[im]["priceplans"];
                        if (arr && arr != undefined && arr != null) {
                            // for (var i = arr.length; i--;) {
                            //     var numRow = $filter('filter')(valPricePlans, { name: arr[i]["name"] });
                            //     if (numRow.length == 0) {
                            //         arr[i]["proposition-code"] = arrMPP[im]['proposition']['proposition-code'];
                            //         arr[i]["promotion"] = arrMPP[im]['proposition']['name'];
                            //         valPricePlans.push(arr[i]);
                            //     }
                            //     // arr[i]["proposition-code"] = arrMPP[im]['proposition']['proposition-code'];
                            //     // arr[i]["promotion"] = arrMPP[im]['proposition']['name'];
                            //     // valPricePlans.push(arr[i]);
                            // }
                            var i = 0;
                            (function() {
                                for (; i < arr.length; i++) {
                                    /*
                                        Normal processing here
                                    */
                                    var numRow = $filter('filter')(valPricePlans, { name: arr[i]["name"] });
                                    if (numRow.length == 0) {
                                        arr[i]["proposition-code"] = arrMPP[im]['proposition']['proposition-code'];
                                        arr[i]["promotion"] = arrMPP[im]['proposition']['name'];
                                        valPricePlans.push(arr[i]);
                                    }

                                    // Every 100,000 iterations, take a break
                                    if (i > 0 && i % 10 == 0) {
                                        // Manually increment `i` because we break
                                        i++;
                                        // Set a timer for the next iteration 
                                        window.setTimeout(arguments.callee);
                                        //alert(i)
                                        $('#idBindDataAgain').click();

                                        break;
                                    }
                                    if (i > 100 && i == arr.length - 1) {
                                        //
                                    }
                                }
                            })();
                        }
                    }
                }
                // for (var u = valPricePlans.length; u--;) {
                //     var numRow = $filter('filter')($scope.propositionList, { name: valPricePlans[u]["name"] });
                //     if (numRow.length == 0) {
                //         $scope.propositionList.push(valPricePlans[u]);
                //         valPricePlansUnique.push(valPricePlans[u]);
                //     }
                // }

                if (SystemService.checkObj(resultGetPriceplan.data, ["response-data", "priceplans"])) {
                    //make data for $scope.propositionList form ......
                    ////makeDataPriceplan(resultGetPriceplan.data["response-data"]["priceplans"], "", "");
                    //
                    //valPricePlans.concat(resultGetPriceplan.data["response-data"]["priceplans"]);
                }
                var loopLimit = 1000;
                var step = 0;
                var sleep = 100;
                var varArr = [].concat(resultGetPriceplan.data["response-data"]["priceplans"]);
                var loopTotal = Math.ceil(varArr.length / loopLimit);
                var runStep = 0;

                $('#backdropPP').show();
                for (var i = 0; i < loopTotal; i++) {
                    sleep = sleep + step;
                    setTimeout(function() {
                        var stepArr = varArr.splice(0, loopLimit);
                        $scope.propositionList = $scope.propositionList.concat(stepArr);
                        valPricePlansUnique = valPricePlansUnique.concat(stepArr);
                        $('#idBindDataAgain').click();
                        runStep++;
                        if (loopTotal == runStep) {
                            //final
                            //valPricePlans = valPricePlansUnique.concat(stepArr);
                            setTimeout(function() {
                                $scope.filterAndOpen();
                                $('#idBindDataAgain').click();
                                $('#backdropPP').hide();
                            }, 2000);


                        }
                    }, sleep);
                }
                // var x1 = resultGetPriceplan.data["response-data"]["priceplans"].splice(loopLimit, loopLimit);
                // var x2 = resultGetPriceplan.data["response-data"]["priceplans"].splice(0, loopLimit);
                // setTimeout(function() {
                //     $scope.propositionList = x1.concat(x2);
                //     valPricePlansUnique = x1.concat(x2);
                //     $('#idBindDataAgain').click();
                // }, 1000);
                // setTimeout(function() {
                //     $scope.propositionList = x1.concat(x2).concat(valPricePlans);
                //     valPricePlansUnique = x1.concat(x2).concat(valPricePlans);
                //     $scope.filterAndOpen();
                //     valPricePlans = x1.concat(x2).concat(valPricePlans);
                //     $('#idBindDataAgain').click();
                // }, 1100);
                $scope.propositionList = [].concat(valPricePlans);
                valPricePlansUnique = [].concat(valPricePlans);


                //// open dropdown xxxx
                if ($scope.isFirstClickDropDown_Proposition == true && $scope.onFirstClickDropDown_Proposition == true) {
                    $scope.isFirstClickDropDown_Proposition = false;
                    setTimeout(function() {
                        var id = "selectProposition";
                        var select_box = document.getElementById(id);
                        if (select_box.options.length > 10) {
                            select_box.size = 10;
                        } else {
                            select_box.size = select_box.options.length;
                        }

                        $('#selectProposition').focus();
                        $('#selectProposition').click(function() {
                            select_box.size = 1;
                        });
                        $('#selectProposition').blur(function() {
                            select_box.size = 1;
                        });
                        $('#selectProposition').keydown(function(e) {
                            var charCode = (e.which) ? e.which : e.keyCode;
                            if (charCode == 13)
                                select_box.size = 1;
                        });

                    }, 1200);
                } else {
                    setTimeout(function() {
                        //$('#ppfilter').focus();
                    }, 2500);
                }



                $scope.promotion = "";
                //$scope.selectedPromotion();
                //$('#modalnewpriceplan').click();
                $scope.isLoadPricePlan = true;
                SystemService.hideLoading();



                // if ($scope.pricePlanFilter.value) {
                //     $('#modalnewpriceplan').click();
                // }
                //$scope.filterAndOpen();
                if ($scope.firstSearch == false) {
                    $('#modalnewpriceplan').click();
                    $scope.firstSearch = true;
                } else {
                    $scope.firstSearch = false;
                }


            } else {
                $scope.propositionList = [];
                valPricePlans = [];
                valPricePlansUnique = [];

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
    };
    $scope.getOfferDetail = function(soc) {
        $scope.clearSP()
        SystemService.showLoading();
        console.log(soc);
        //call offerDetail route 1
        ChangePricePlanForIE8Service.getOfferDetail(soc, function(resultOfferDetail) {

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
                        ChangePricePlanForIE8Service.getOfferDetail(code, function(resultOfferDetail2) {
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

    $scope.readCardError = function(msg) {
        $.fancybox.close();
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": msg,
            "th-message": msg,
            "technical-message": "ChangePricePlanForIE8Controller"
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
        } else {
            $scope.isNonePartner = true;
            $scope.manualInputReadCard();
        }
    };
    $scope.checkPartnet = function() {
        //$('#btnSSO').hide();
    };
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


    var isFocus = false;

    $scope.validateUI = function() {
        var countFF = 0;
        $scope.attModalVal = "";
        for (var i = 1; i <= $scope.ffData.max; i++) {
            if ($scope.saveParamData["ff" + i]) {
                //spArray[sp].push("Friend numbers offer level|" + $scope.saveParamData["ff" + i] + "|");
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
            if ($('.dateManual').val()) {

            } else {
                errorFUTURE = true;
            }
        }
        var errorCUG = false;
        if ($scope.specialOfferType.CUG == true) {
            if ($scope.saveDataCUG.name) {

            } else {
                errorCUG = true;
            }
        }
        var errorAuthorizeID = false;
        var errorAuthorizeName = false;
        if ($('#authorize').prop('checked')) { //กดมอบอำนาจ:
            if ($('#CitizenID2').val()) { // ไม่เป็นค่าว่าง

            } else { // เป็นค่าว่าง
                errorAuthorizeID = true;
            }
            if ($('#authorizeFullName').val()) { // ไม่เป็นค่าว่าง

            } else { // เป็นค่าว่าง
                errorAuthorizeName = true;
            }
        }

        var showValidate = function(id, msg) {
            if (isFocus) {
                $('#' + id).focus();

                //if (id.indexOf('select') >= 0) {
                //    try {
                //        $('#' + id).selectpicker();
                //        setTimeout(function () {
                //            $('#' + id).focus();
                //            $('button[data-id=' + id + '').click();
                //        }, 500);
                //    } catch (e) {
                //        $('#' + id).focus();
                //    }
                //}

                isFocus = false;
                return;
            } else {
                SystemService.showAlert(msg);
                //$('#' + id).focus();
            }
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


        if (errorAuthorizeID) {
            showValidate("CitizenID2", ValidateMsgService.data.authorizeIdMsg);
            $scope.isValidateFF = false;
        } else if (errorAuthorizeName) {
            showValidate("authorizeFullName", ValidateMsgService.data.authorizeNameMsg);
            $scope.isValidateFF = false;
        } else if (errorCapmax != "") {
            showValidate(errorCapmaxId, errorCapmaxMsg);
            $scope.isValidateFF = false;
        } else if (errorCUG) {
            showValidate("txtSearchCUG", ValidateMsgService.data.cugMsg);
            $scope.isValidateFF = false;
        } else if ($scope.specialOfferType.FF && countFF < $scope.ffData.min) {
            showValidate(idFF, {
                "message": "",
                "message-code": "",
                "message-type": "WARNING",
                "en-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
                "th-message": "ต้องกรอกเบอร์อย่างน้อย " + $scope.ffData.min + " เบอร์",
                "technical-message": "ChangePricePlanForIE8Controller"
            });
            $scope.isValidateFF = false;
        } else if (errorFUTURE) {
            showValidate("txtDateManual", ValidateMsgService.data.effectiveDateMsg);
            $scope.isValidateFF = false;
        } else {
            if ($scope.isClickPrint) {
                $scope.printOrder();
            }

        }
    };

    $scope.printOrder = function() {

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
        var customerType = "N";
        if ($scope.data.priceplan['account-category'] == "B" || $scope.data.priceplan['account-category'] == "C") {
            customerType = "Y";
        }
        var data = {
            "func": "CPP",
            "header": {
                "title-code": customerType == 'Y' ? "" : $scope.data.customerProfile["title-code"],
                "title": $scope.data.customerProfile["title"],
                "firstname": $scope.data.customerProfile["firstname"],
                "lastname": $scope.data.customerProfile["lastname"],
                "customerType": customerType,
                "authorizeFullName": $('#authorizeFullName').val(),
                "id-number": $scope.data.customerProfile["id-number"],
                "product-id-number": $scope.data.priceplan['product-id-number'],
                "ouId": $scope.OUID,
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
                "cppOldPricePlanData": {
                    "name": $scope.data.priceplan["product-name"],
                    "description": $scope.data.priceplan["product-description"],
                    "soc": "10633511",
                    "sale-period": {
                        "start": "2015-01-16",
                        "end": "2015-07-03"
                    }
                },
                "cppNewPricePlanData": $scope.pricePlan2.priceplans
            }
        };
        console.log($scope.data);
        console.log(data);

        var pdfShopCode = ($scope.getAuthen["partnerCodes"].length > 0 ? $scope.getAuthen["partnerCodes"][0] : $scope.getAuthen.saleCode);
        localStorage.setItem('pdfShopCode', pdfShopCode);
        //api generatePDF
        var srcPDF = "";
        SystemService.generatePDF(data, function(result) {
            var url = result;
            setTimeout(function() {
                var srcPDF = url;
                SystemService.printPDF(url);

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
    $scope.isClickPrint = true;
    $scope.noneShopPrint = function() {
        $scope.isClickPrint = true;
        $scope.validateUI();
    };

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
        setTimeout(function() {
            $('#idModalCUG').blur();
        }, 1200);
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
        var bool = SystemService.checkInputTel(charCode);
        $scope.isNumberFF = !bool;
        return bool;
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


    $scope.saveOrder = function() {
        if ($('.dateManual').val()) {
            $scope.saveData['EFFECTIVE-DATE'] = $('.dateManual').val();
            $scope.saveData['EFFECTIVE-OPTION'] = 'FUTURE';
        }



        var headers = {
            'WEB_METHOD_CHANNEL': 'WEBUI',
            'E2E_REFID': $scope.orderId
        };
        //var data2 = {};
        //var order = {};
        //if ($scope.orderId){
        //    order['order-id'] = $scope.orderId;
        //}

        var data = {
            target: 'aftersales/order/submit',
            "order": {
                "order-id": $scope.orderId,
                "creator": $scope.getAuthen["logInName"],
                "customer": {
                    "title-code": $scope.data.customerProfile["title-code"],
                    "firstname": $scope.data.customerProfile["firstname"],
                    "lastname": $scope.data.customerProfile["lastname"],
                    "contact-number": $scope.data.customerProfile["contact-number"],
                    "id-type": $scope.data.customerProfile["id-type"],
                    "customer-id": $scope.data.customerProfile["customer-id"],
                    "id-number": $scope.data.customerProfile["id-number"] //,"birthdate":"2015-08-12T08:30:00+0700"//yyyy-MM-dd'T'HH:mm:ssZ
                },
                //จะสร้างโดย service JAVA
                "sale-agent": {
                    "name": $scope.getAuthen["engName"],
                    "channel": $scope.getAuthen["channel"],
                    "partner-code": ($scope.getAuthen["partnerCodes"].length > 0 ? $scope.getAuthen["partnerCodes"][0] : $scope.getAuthen.saleCode),
                    "partner-name": $scope.getAuthen["partnerName"],
                    "sale-code": $scope.getAuthen["saleCode"],
                    "sale-assist-code": "",
                    "partner-type": $scope.getAuthen["partnerType"]
                },
                "order-items": [{
                    "name": "CHANGE_PRICEPLAN",
                    "product-name": $scope.pricePlan.saveName,
                    "product-id-number": $scope.data.priceplan["product-id-number"],
                    "product-id-name": $scope.data.priceplan["product-id-name"],
                    "reason-code": $scope.selectReason.id,
                    "user-memo": $scope.saveData.memo ? $scope.getAuthen.logInName + "(" + $scope.getAuthen.saleCode + ": " + $scope.getAuthen.engName + ")" + "(" + "Order ID: " + $scope.orderId + ")" + ": " + $scope.saveData.memo : $scope.getAuthen.logInName + "(" + $scope.getAuthen.saleCode + ": " + $scope.getAuthen.engName + ")" + "(" + "Order ID: " + $scope.orderId + ")" + ": ",
                    "order-data": {
                        "SERVICE-LEVEL": $scope.data.priceplan["service-level"],
                        "MOBILE-SERVICETYPE": $scope.data.priceplan["mobile-servicetype"],
                        "OU-LEVEL": $scope.data.priceplan["ou-hierarchytype"],
                        "CURRENT-PRICEPLAN": $scope.data.priceplan["product-id"],
                        "CURRENT-PROPOSITIONS": $scope.currentPricePlan,
                        "NOT-CONTRACT-PROPOSITION": $scope.notContractProposition,
                        "NEW-PROPOSITION": $scope.pricePlan.promotion,
                        "NAS-PROPOSITION": $scope.selectProposition
                    },
                    "primary-order-data": {
                        "OU-ID": $scope.data.priceplan["ouId"],
                        "PARENT-OU-ID": $scope.data.priceplan["parent-ouId"],
                        "BAN": $scope.data.priceplan["ban"],
                        "COMPANY-CODE": $scope.data.priceplan["company-code"],
                        "ACCOUNT-CATEGORY": $scope.data.priceplan["account-category"],
                        "ACCOUNT-SUB-TYPE": $scope.data.priceplan["account-sub-type"],
                        "EFFECTIVE-DATE": SystemService.convertDateToEng($scope.saveData['EFFECTIVE-DATE'], 'ENG'),
                        "EFFECTIVE-OPTION": $scope.saveData['EFFECTIVE-OPTION']
                    },
                    "product-category": $scope.data.priceplan["product-category"],
                    "product-type": "PRICEPLAN",
                    "order-type": "CHANGE"
                }]
            },
            "user-id": $scope.getAuthen["logInName"],
            "ref-id": $scope.orderId

        };
        //approver
        if ($scope.approver) {
            data["approver"] = $scope.approver;
        }

        //authen
        if ($('#CitizenID2').val() && $('#authorizeFullName').val()) {
            var authenList = $('#authorizeFullName').val().split(" ");

            //change AUTH_1 to POA :: 02-06-2016 //xsam32
            data["order"]["customer"]["customer-agents"] = {
                "POA": {
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
        $scope.isValidateFF = true;
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
                    spArray[sp].push("Monetary cap max|" + $scope.saveParamData.Monetary);
                }
                if ($scope.capMaxParameterList['occurrence-capmax']) {
                    spArray[sp].push("Occurrence cap max|" + $scope.saveParamData.Occurrence);
                }
                if ($scope.capMaxParameterList['duration-capmax']) {
                    spArray[sp].push("Duration cap max|" + $scope.saveParamData.Duration);
                    spArray[sp].push("Duration cap max UOM|" + $scope.capMaxParameterList['durationCapMaxUOM']);
                }
                if ($scope.capMaxParameterList['volume-capmax']) {
                    spArray[sp].push("Volume cap max|" + $scope.saveParamData.Volume);
                    spArray[sp].push("Volume cap max UOM|" + $scope.capMaxParameterList['volume-capmax-uom']);
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
                        "technical-message": "ChangePricePlanForIE8Controller"
                    });
                    $scope.isValidateFF = false;
                } else {

                    $scope.isValidateFF = true;
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



        console.log('saveOrder :::: ');
        console.log(JSON.stringify(data));
        console.log(data);
        console.log($scope.selectReason);

        //add loading :: 06-06-2016 :: xsam32
        SystemService.showLoading();

        if (SystemService.demo) {
            setTimeout(function() {
                if ($scope.isValidate && $scope.isValidateFF) {
                    SystemService.showBeforeClose({
                        "message": "รายการคำขอเลขที่ " + $scope.orderId,
                        "message2": "ได้รับข้อมูลเรียบร้อยแล้ว"
                    });
                }
            }, 5000);
        } else {
            if ($scope.isValidate && $scope.isValidateFF) {

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
                            "technical-message": "ChangePricePlanForIE8Controller"
                        });
                    }
                });
            }
        }
    };
    $scope.confirmPrint = function() {
        //confirm
        //SystemService.showBeforeClose({
        //    "message": "รายการคำขอเลขที่ " + $scope.orderId,
        //    "message2": "ได้รับข้อมูลเรียบร้อยแล้ว",
        //});
        //SystemService.showConfirm().then(function (value) {

        //}, function (reason) {
        //    //cancel

        //});
    };
    $scope.ReadCardMockUp = function(personId) {
        //var certificateID = smartCardReaderService.readCardMockUp(personId);
        var certificateID = personId;

        ChangePricePlanForIE8Service.getChangePricePlan($scope.SubNo, $scope.OUID, function(result) {

            document.getElementById('btnReadCardClose2').click();
            $('input[type=submit]').show();
            $('input[type=reset]').show();
            $scope.data = result.data;
            if ($scope.data.offer.length != 0) {
                $scope.saleList = $scope.data.offer[0]["product-name"];
            }
            $scope.isReadCardSuccess = true;
        });
    };
    $scope.SetCardValue = function(result) {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch2').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


        if ($scope.cardInfo.CitizenID == $scope.data2.customerProfile["id-number"]) {
            localStorage.setItem('cardInfo', result);

            $scope.isCardValueData = true;

            $scope.isReadCardSuccess = true;
            $scope.isCustomerProfile = true;
            $.fancybox.close();

            setTimeout(function() {
                $('#idBindDataAgain').click();
            }, 500);

            $scope.data = $scope.data2;

            $('.isCustomerProfile').prop('disabled', false);

        } else {
            $('#unMatch').show();
            $scope.isMatch = false;
        }
        ///$scope.ReadCardMockUp($scope.cardInfo.CitizenID);
        //console.log(result);
        //console.log(result.CitizenID);

    }

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
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + " " + $scope.cardInfo2.LastNameTH);

        $scope.varCardInfo2.firstName = $scope.cardInfo2.FirstNameTH;
        $scope.varCardInfo2.lastName = $scope.cardInfo2.LastNameTH;

        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    }

    $scope.isManualReadCard = true;
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

                $scope.data = $scope.data2;
            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }

        }
    };

    $scope.datalsSale = {};
    $scope.listPricePlan = [];
    var runTime = new Date().getTime();
    $scope.runTime = runTime;
    $scope.template = {
        "header": "app/views/header.html?" + runTime,
        "customerprofile": "app/views/customerprofile.html?" + runTime,
        "currentpriceplan": "app/views/currentpriceplan.html?" + runTime,
        "newpriceplan": "app/views/newpriceplan.html?" + runTime,
        "newparampriceplan": "app/views/newparampriceplan.html?" + runTime,
        "effectivepriceplan": "app/views/effectivepriceplan.html?" + runTime,
        "reasonmemo": "app/views/reasonmemo.html?" + runTime,
        "modalPricePlan": "app/views/modalPricePlan.html?" + runTime
    }
    $scope.customDialogOptions = {
        templateUrl: 'app/views/ngBootbox-template.html?v=' + runTime,
        onEscape: function() {
            console.log('Escape was pressed');
        },
        show: true,
        backdrop: false,
        closeButton: false,
        animate: true
    };

    //Price plan list
    $scope.pricePlanFilter = {
        value: ""
    };

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

    $scope.isSelectedPricePlan = false;
    $scope.selectedPricePlan = function(pp) {

        $('#divPage').click(function() {
            $scope.onBlurPricePlanItem();
        });
        //$('#ppfilter').val('');
        //$scope.pricePlanFilter = "";
        $scope.pricePlan2 = {
            display: pp.name + ' : ' + pp.description,
            promotion: pp.promotion,
            rc: pp.rc,
            priceplans: pp,
            code: pp["proposition-code"],
            saveName: pp.name,
            pp: pp
        };
        $scope.isSelectedPricePlan = true;
        $scope.isSelectedPricePlan2 = true;
        console.log(pp);
    };
    $scope.isSelectedPricePlan2 = false;
    $scope.onBlurPricePlanItem = function() {
        //alert('');
        if ($scope.isSelectedPricePlan && $('input[name=pricelsx]:checked').val()) {
            $scope.isSelectedPricePlan2 = true;
        } else {
            $scope.isSelectedPricePlan2 = false;
        }
        $('#idBindDataAgain').click();
    };
    $scope.selectedPricePlan2 = function() {
        paginationService.setCurrentPage('PPList', 1);
        var setPPP = function() {
            setTimeout(function() {
                $('#selectProposition').focus();
                //$('#selectProposition').val('null');
            }, 1000);
            setTimeout(function() {
                //$('#selectProposition').val('null');
            }, 500);


            //selectProposition = $scope.pricePlan2.code;
            //$scope.selectProposition = $scope.pricePlan2.code;

            //selectProposition = "null";
            //$scope.selectProposition = "null";

            //$('#selectProposition').val($scope.selectProposition);
            var newProposition = "";
            if ($('#selectProposition').val() != 'null') {
                newProposition = $scope.pricePlan2.promotion;
            }

            $scope.pricePlan = {
                name: $scope.pricePlan2.name,
                promotion: newProposition,
                rc: $scope.pricePlan2.rc,
                pricePlanFilter: "",
                saveName: $scope.pricePlan2.priceplans.name
            };

            //alert($scope.pricePlan.saveName);

            if ($scope.pricePlan2.display) {
                $scope.isValidate = true;
            }

            $scope.getOfferDetail($scope.pricePlan2.priceplans.soc);

        };
        //$('#ppfilter').val("");
        //$('#ppfilter2').val("");
        $scope.pricePlanFilter.value = "";
        if ($scope.isSelectedPricePlan && $('input[name=pricelsx]:checked').val()) {
            setPPP();
        } else {
            if ($scope.isEnterPP) {
                setPPP();
            } else {
                SystemService.showAlert(ValidateMsgService.data.pleaseSelectPP);
            }

        }
    };

    $scope.selectedPricePlan3 = function() {

        $scope.firstSearch = true;
        $('#hModal').height(($(window).height()) - 235);
        $scope.isSelectedPricePlan2 = false;
        if (!$scope.isLoadPricePlan) {
            //call Priceplan
            $scope.getPriceplan();
        } else {
            $scope.smartSearchPP($scope.pricePlanFilter.value);
            //$scope.onClearPricePlan();
            //var value = $('#selectProposition').val() == "null" ? "" : $('#selectProposition').val();
            ////var value = $scope.selectProposition;
            //$scope.propositionList = [];

            //setTimeout(function () {
            //    $scope.propositionList = $filter('filter')(valPricePlans, value);
            //    $scope.currentPage = 1;
            //    $('#idBindDataAgain').click();
            //}, 2000);
            //console.log(value, $scope.propositionList);

        }
        $scope.isSelectedPricePlan = false;
        $('.radioPriceplan').prop('checked', false);


    };
    $scope.focusPricePlanFilter = function() {
        if (!$scope.isLoadPricePlan && $scope.isCustomerProfile) {
            //call Priceplan
            $scope.getPriceplan();
        }
    };
    $scope.selectedPricePlan4 = function() {
        $scope.selectProposition = "null";

        //$('#selectProposition').val($scope.selectProposition);
        $scope.getPriceplan();
        $scope.onClearPricePlan();
        //$scope.pricePlanFilter = "";

        console.log($scope.selectProposition);
    };
    $scope.onCancelPricePlan = function() {
        //$('#ppfilter').val("");
        //$('#ppfilter2').val("");
        $scope.pricePlanFilter.value = "";
        console.log($scope.pricePlanFilter.value);
        // $scope.onClearPricePlan();
        setTimeout(function() {
            paginationService.setCurrentPage('PPList', 1);
        }, 500);
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
        ChangePricePlanForIE8Service.getCapmaxParameter(soc, function(result) {
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
    var selectProposition = '';
    $scope.selectedPromotion = function() {

        $scope.selectProposition = $('#selectProposition').val() == 'null' ? '' : $('#selectProposition').val();
        //alert(selectProposition+":"+$scope.selectProposition);
        // if (selectProposition == $scope.selectProposition) {} else {
        //     selectProposition = $scope.selectProposition;
        //     $scope.pricePlan = {};
        //     $scope.isValidate = false;
        //     $scope.specialOfferType = {
        //         CUG: false,
        //         FF: false,
        //         SA: false,
        //         POOL: false,
        //         POOLING: false,
        //         CAPMAX: false
        //     };
        // }
        //console.log($scope.selectProposition);
        if ($scope.selectProposition) {
            $scope.propositionList = $filter('filter')(valPricePlans, {
                "proposition-code": $scope.selectProposition
            });
        } else {
            $scope.propositionList = $filter('filter')(valPricePlansUnique, {
                "proposition-code": $scope.selectProposition
            });
        }

        //console.log($scope.selectProposition, $scope.propositionList);
    };

    //End pricePlan

    $scope.isAuthorize = false;
    $scope.authorize = function() {
        $scope.isAuthorize = true;
    };

    //Reasons
    $scope.reasons = [];
    $scope.reason = "";
    $scope.selectReason = {};
    ReasonService.list("84", function(result) {
        // $scope.reasons = result;
        // $scope.reason = $scope.reasons[86];
        // $scope.selectReason = $scope.reasons[86];

        //solution for none fix index
        $scope.reasons = result;
        var myArray = result;
        var searchText = "CREQ",
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
        //solution for none fix index

    });
    $scope.onReasonChange = function() {
        $scope.selectReason = $scope.reasons[$('#selectReasonId').val()];
        console.log($scope.selectReason);
    };
    //end reson
    $scope.cancelChanged = function() {
        closeWP();
        //$window.closed();
    };
    $scope.propoCode = "null";
    //$scope.onChangePropo = function
    $scope.onClearPricePlan = function() {
        paginationService.setCurrentPage('PPList', 1);
        //$('#ppfilter').val('');
        //$scope.pricePlanFilter.value = "";
        $scope.pricePlan = {};
        $scope.pricePlan2 = {};
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
    $scope.onCancelFF = function() {};
    $scope.onCancelPOOLED = function() {};
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

    //----------- camera ----------------
    $scope.initWebCam = function() {

        setTimeout(function() {
            $('#btnSavePhoto_Mobile').hide();
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
    $scope.mobileCamSnap = function() {
        var msg = $('#varMobileCam').val();
        msg = msg.replace('data:image/png;base64,', '');
        msg = msg.replace('data:image/jpeg;base64,', '');
        //console.log(msg); 
        // $('#btnSavePhoto_Mobile').hide();
        $scope.varPhoto = msg;
    };

    //bind data again
    $scope.onBindDataAgain = function() {
        //alert('BindDataAgain');
    };


    $scope.onSearchCUG = function(item) {
        if ($scope.saveDataCUG.filter) {
            var groupName = item['group-name'].toUpperCase();
            var groupId = item['group-id'].toUpperCase();
            var searchValue = $scope.saveDataCUG.filter.toUpperCase();

            if ((groupName.indexOf(searchValue) != -1) || (groupId.indexOf(searchValue) != -1)) {
                return true;
            }
        } else {
            return true;
        }
        return false;
    };

    $scope.onSearchPricePlan = function(item) {
        if ($scope.pricePlanFilter.value) {
            var groupName = item['group-name'].toUpperCase();
            var groupId = item['group-id'].toUpperCase();
            var searchValue = $scope.pricePlanFilter.value.toUpperCase();

            if ((groupName.indexOf(searchValue) != -1) || (groupId.indexOf(searchValue) != -1)) {
                return true;
            }
        } else {
            return true;
        }
        return false;
    };
    // $scope.afterCloseWarning = function () {
    //     $scope.isClickPrint = false;
    //     isFocus = true;
    //     $scope.initModalReadCard();
    //     $scope.validateUI();


    // };

    // $scope.smartSearchPP = function(txtSearch) {
    //     if ($scope.isLoadPricePlan) {
    //         var arr = valPricePlans;
    //         if ($scope.selectProposition != "null" && $scope.selectProposition != "") {
    //             arr = $filter('filter')(valPricePlans, {
    //                 "proposition-code": $scope.selectProposition
    //             });
    //         } else {
    //             arr = valPricePlansUnique;
    //         }

    //         if (txtSearch.indexOf(' ') > 0) {
    //             var txtList = txtSearch.split(' ');
    //             console.log(txtList);
    //             for (var i = 0; i < txtList.length; i++) {
    //                 arr = $filter('filter')(arr, txtList[i]);
    //             }
    //         } else {
    //             //if ($scope.selectProposition != "null" && $scope.selectProposition != "") {
    //             arr = $filter('filter')(arr, txtSearch);
    //             //}
    //         }
    //         $scope.propositionList = arr;
    //         console.log($scope.propositionList.length);
    //     }
    // };

    //CR SmartSearch
    var myInterval;
    var checkChangeTxt = "";
    $('#ppfilter2').keyup(function() {
        stopSearch();
        running(this.value);
        // if ($scope.propositionList.length < 200) {
        //     checkChangeTxt = "";
        //     $scope.smartSearchPP(this.value);
        // } else {
        //     running(this.value);
        // }
    });

    function running(txt) {
        myInterval = setInterval(function() {
            if (txt != checkChangeTxt) {
                checkChangeTxt = txt;
                console.log("GO! ", txt);
                $scope.smartSearchPP(txt);
            } else {
                checkChangeTxt = "";
            }
            stopSearch();
        }, 1000);
    }

    function stopSearch() {
        clearInterval(myInterval);
    }
    $scope.smartSearchPP = function(txtSearch) {
        $('#backdropPP').show();
        setTimeout(function() {
            if ($scope.isLoadPricePlan) {
                var arr = valPricePlans;
                if ($scope.selectProposition != "null" && $scope.selectProposition != "") {
                    arr = $filter('filter')(valPricePlans, {
                        "proposition-code": $scope.selectProposition
                    });
                } else {
                    arr = valPricePlansUnique;
                }
                if (txtSearch.indexOf(' ') > 0) {
                    var txtList = txtSearch.split(' ');
                    console.log(txtList);

                    //for CR
                    var bbArr = [];

                    for (var i = 0; i < txtList.length; i++) {
                        //arr = $filter('filter')(arr, txtList[i]);
                        if (i == 0) {
                            var a = $filter('filter')(arr, { "name": txtList[i] });
                            var b = $filter('filter')(arr, { "rc": txtList[i] });
                            var c = $filter('filter')(arr, { "description": txtList[i] });
                            bbArr = a.concat(b).concat(c);
                        } else {
                            var a = $filter('filter')(bbArr, { "name": txtList[i] });
                            var b = $filter('filter')(bbArr, { "rc": txtList[i] });
                            var c = $filter('filter')(arr, { "description": txtList[i] });
                            bbArr = a.concat(b).concat(c);
                        }
                        arr = bbArr;
                    }
                } else {
                    //if ($scope.selectProposition != "null" && $scope.selectProposition != "") {
                    //arr = $filter('filter')(arr, txtSearch);
                    var a = $filter('filter')(arr, { "name": txtSearch });
                    var b = $filter('filter')(arr, { "rc": txtSearch });
                    var c = $filter('filter')(arr, { "description": txtSearch });
                    arr = a.concat(b).concat(c);
                    //}
                }

                function unique(list) {
                    var result = [];
                    $.each(list, function(i, e) {
                        if ($.inArray(e, result) == -1) result.push(e);
                    });
                    return result;
                }

                arr = unique(arr);
                $scope.propositionList = arr;
                $('#idBindDataAgain').click();
                $('#backdropPP').hide();
                console.log($scope.propositionList.length);
            }
        }, 0);
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
        $scope.validateUI();



        if (idFocus) {
            $('#' + idFocus).focus();
            idFocus = "";
        } else {
            $scope.validateUI();
        }
    };
});
