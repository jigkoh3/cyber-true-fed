// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('AddDeleteEditOfferController', function($scope,
    $routeParams,
    $filter,
    ValidateMsgService,
    $routeParams,
    AuthenService,
    AddDeleteEditOfferService,
    ReasonService,
    SystemService,
    ChangePricePlanService) {

    SystemService.setUrlParam();
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
    ////str :: add solution retention :: 18-11-2016 :: xsam32
    $scope.retention = {
        "app_token": ($routeParams.app_token ? $routeParams.app_token : ''),
        "activity": ($routeParams.activity ? $routeParams.activity : ''), /// RTE
        "offercode": ($routeParams.offercode ? $routeParams.offercode : ''), /// xxx,xxx,xxxx
        "action": ($routeParams.action ? $routeParams.action : ''), /// ADD, EDIT, DELETE
    };
    $scope.activeTab = {
        "C": "",
        "D": "",
        "U": ""
    };
    var checkProcessType = "";
    if ($scope.retention.action == 'ADD') {
        checkProcessType = "C";
        $scope.activeTab.C = "active";
    } else if ($scope.retention.action == 'DELETE') {
        checkProcessType = "D";
        $scope.activeTab.D = "active";
    } else if ($scope.retention.action == 'EDIT') {
        checkProcessType = "U";
        $scope.activeTab.U = "active";
    } else {
        checkProcessType = "C";
        $scope.activeTab.C = "active";
    }
    ////end :: add solution retention :: 18-11-2016 :: xsam32


    // Initialize variables
    $scope.isCardValueData = false;
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
    $scope.radioRelatedOffer = "";
    //paging
    $scope.currentPage_cug = 1;
    $scope.pageSize_cug = 5;
    //end paging

    $scope.data = {};
    $scope.isReadCardSuccess = false;
    $scope.offerType = checkProcessType;
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


    $scope.reasons = [];
    $scope.statusReason = "";

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
        value: ""
    };
    $scope.txtSearchOffer = "";
    $scope.radioOffer = "";
    $scope.radioCpOffer = "";
    //STR: get offerList
    $scope.offerList = [];
    $scope.releteOfferList = [];
    $scope.addNewOfferLists = [];

    $scope.futureOfferList = [];
    $scope.tempFutureOfferList = [];
    $scope.dateNow = $filter('date')(new Date(), 'dd/MM/yyyy');
    var dateNow = new Date();
    $scope.setDateTomorrow = ("0" + Number(dateNow.getDate() + 1)).slice(-2) + "/" + ("0" + Number(dateNow.getMonth() + 1)).slice(-2) + "/" + Number(dateNow.getFullYear() + 0);
    $scope.setDateNow = ("0" + dateNow.getDate()).slice(-2) + "/" + ("0" + Number(dateNow.getMonth() + 1)).slice(-2) + "/" + Number(dateNow.getFullYear() + 0);

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
        // SystemService.generateOrderId(generateOrder_target, function(data) {
        //     localStorage.setItem('orderId', data["response-data"]);
        //     $scope.TrxID = data["trx-id"];
        //     $scope.orderId = data["response-data"];

        if ($scope.OUID == "null") {
            $scope.OUID = "";
        }

        //call validate-change-offer
        if ($scope.SubNo !== 'null') {
            // SystemService.showLoading();
            AddDeleteEditOfferService.getSIMData($scope.SubNo, $scope.level, onGetSIMData);
            // $scope.getOfferList();
            // $scope.getReleteOfferList();
            // $scope.getRegulaOfferList();
            // $scope.getPopUpOfferList();
            // $scope.getFutureOfferList();
            if (onGetSIMData) {
                $scope.initModalReadCard();
            }
            //END: get offerList
            // SystemService.calendarDatePicker();
        }

        // });
        //}
    };



    $scope.deleteRegulaOfferList = function(item) {
        for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
            if (item.guID == $scope.addNewOfferLists[i].guID) {
                $scope.addNewOfferLists.splice(i, 1);
                break;
            }
        }
        console.log($scope.addNewOfferLists);
    }

    $scope.addNewOfferList = function(item) {
        console.log(item);
        // var list = $filter('filter')($scope.addNewOfferLists, {
        //     'name': item['name']
        // });

        // if (list.length == 0) {
        //     $scope.addNewOfferLists.push(item);
        // }
        // $scope.ffNumber = "";
        // console.log($scope.addNewOfferLists);
        $scope.addNewOfferLists.push(item);
        console.log($scope.addNewOfferLists);
        $scope.ffNumber = "";
    }

    $scope.smartSearchOffer = function(txtSearch) {
        // $scope.radioOffer = "";
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

        if (!$scope.radioOffer) {
            $scope.disableSubmitAddOffer = true;
        }
    }

    $scope.ffData = {
        "mun": 0,
        "max": 0
    };

    $scope.disableExpDateDiscount = true;
    $scope.disableExpDateCp = true;
    $scope.onChangeRadioOffer = function(item) {
        $scope.clearValueAddNewOffer();
        $scope.onClearRelateOfferValue();
        $scope.selectedOffer = angular.copy(item);
        $scope.saveParamData = {};
        console.log($scope.selectedOffer);
        $('.modal-backdrop').css('height', '200%');

        // add new param value for add new offer
        $scope.relateOfferRequireParam = "";
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
                    if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_NUMBER" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                        $scope.cpContractNumber = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                    }
                }
                if ($scope.selectedOffer["properties"] && $scope.selectedOffer["properties"]["FEE"]) {
                    $scope.cpFee = $scope.selectedOffer["properties"]["FEE"];
                }
                if ($scope.selectedOffer["properties"] && $scope.selectedOffer["properties"]["TERM"]) {
                    $scope.cpTerm = $scope.selectedOffer["properties"]["TERM"];
                    if ($scope.cpTerm == 0) {
                        $scope.cpExpireDate = $scope.cpStartDate;
                        $('#cpExpireDate').val($scope.cpExpireDate);
                        var dateToSet = $scope.cpExpireDate.split("/");
                        $('#cpExpireDate').datepicker("setDate", new Date(dateToSet[2], Number(dateToSet[1]) - 1, Number(dateToSet[0])));
                    } else {
                        var currentDate = new Date();
                        currentDate.setMonth(currentDate.getMonth() + Number($scope.cpTerm));
                        var setDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + Number(currentDate.getMonth() + 1)).slice(-2) + "/" + currentDate.getFullYear();
                        $('#cpExpireDate').datepicker("setDate", new Date(currentDate.getFullYear(), ("0" + Number(currentDate.getMonth() + 0)).slice(-2), ("0" + currentDate.getDate()).slice(-2)));
                        $('#cpExpireDate').val(setDate);
                        $scope.cpExpireDate = $('#cpExpireDate').val();
                    }
                }

                $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());


                $scope.disableExpDateCp = true;
                var validateDiscountOfferParam = "current-offers=" + $scope.selectedOffer.name + "&current-priceplan=" + $scope.priceplan[0]['product-name'] + "&level=SUBSCRIBER";
                SystemService.showLoading();
                AddDeleteEditOfferService.validateModifyOffer(validateDiscountOfferParam, function(result) {
                    SystemService.hideLoading();
                    var validateResult = result;
                    if (validateResult.data['response-data'][$scope.selectedOffer.name]) {
                        for (var i = 0; i < validateResult.data['response-data'][$scope.selectedOffer.name].length; i++) {
                            if (validateResult.data['response-data'][$scope.selectedOffer.name][i] == "EDIT") {
                                $scope.selectedOffer.disableExpDateCp = false;
                            } else {
                                $scope.selectedOffer.disableExpDateCp = true;
                            }
                        }
                    } else {
                        $scope.selectedOffer.disableExpDateCp = true;
                    }
                })
                break;

            case "ADDITIONAL":
            case "CAP_MAX":
            case "POOLING":
                // $scope.adParam = [];
                // $scope.adParamSpec = $scope.selectedOffer['parameter-specifications'];
                // $scope.selectedOffer['option-params'] = [];
                if ($scope.selectedOffer['parameter-specifications']) {
                    for (var i = 0; i < $scope.selectedOffer['parameter-specifications'].length; i++) {
                        $scope.selectedOffer['parameter-specifications'][i]['select-value'] = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                        var optionParam = $filter('filter')($scope.selectedOffer['parameter-specifications'][i]['valid-values']);
                        $scope.selectedOffer['parameter-specifications'][i]['option-values'] = [];
                        if (optionParam) {
                            $.each(optionParam, function(key, value) {
                                var item = {
                                    "id": key,
                                    "value": value
                                };
                                $scope.selectedOffer['parameter-specifications'][i]['option-values'].push(item);
                            });
                            var defaultItem = $filter('filter')($scope.selectedOffer['parameter-specifications'][i]['option-values'], { "id": $scope.selectedOffer['parameter-specifications'][i]['default-value'] });
                            var index = $scope.selectedOffer['parameter-specifications'][i]['option-values'].indexOf(defaultItem[0]);
                            $scope.selectedOffer['parameter-specifications'][i]['select-value'] = $scope.selectedOffer['parameter-specifications'][i]['option-values'][index];
                        }
                    }
                }

                if ($scope.selectedOffer['related-offers']) {
                    for (var i = 0; i < $scope.selectedOffer['related-offers'].length; i++) {
                        if ($scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications']) {
                            for (var j = 0; j < $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'].length; j++) {
                                $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['select-value'] = $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['default-value'];
                                var optionParam = $filter('filter')($scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['valid-values']);
                                $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['option-values'] = [];
                                if (optionParam) {
                                    $.each(optionParam, function(key, value) {
                                        var item = {
                                            "id": key,
                                            "value": value
                                        };
                                        $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['option-values'].push(item);
                                    });
                                    var defaultItem = $filter('filter')($scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['option-values'], { "id": $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['default-value'] });
                                    var index = $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['option-values'].indexOf(defaultItem[0]);
                                    $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['select-value'] = $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]['option-values'][index];
                                }
                            }
                        }

                    }
                };

                if ($scope.selectedOffer['related-offers']) {
                    for (var i = 0; i < $scope.selectedOffer['related-offers'].length; i++) {
                        if ($scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications']) {
                            for (var j = 0; j < $scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'].length; j++) {
                                if ($scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]["required"] == true && !$scope.selectedOffer['related-offers'][i]['offer']['parameter-specifications'][j]["default-value"]) {
                                    if ($scope.relateOfferRequireParam == "") {
                                        $scope.relateOfferRequireParam += $scope.selectedOffer['related-offers'][i]['offer']['name'];
                                        break;
                                    } else {
                                        $scope.relateOfferRequireParam += " ," + $scope.selectedOffer['related-offers'][i]['offer']['name'];
                                        break;
                                    }
                                }
                            }
                        }

                    }
                    console.log($scope.relateOfferRequireParam);
                };


                setTimeout(function() {
                    $scope.validateAddAD();
                    $('#idBindDataAgain').click();
                }, 50);

                $('#idBindDataAgain').click();
                console.log($scope.selectedOffer);
                break;

            case "DISCOUNT":
                if ($scope.selectedOffer.properties["DURATION"]) {
                    $scope.selectedOffer.properties["DURATION"] = angular.copy(Number($scope.selectedOffer.properties["DURATION"] - 1));
                }
                if ($scope.selectedOffer.properties['DISCOUNT_GROUP'] != 'CVG' && $scope.selectedOffer.properties['DISCOUNT_GROUP'] != 'EMP') {
                    $scope.disableExpDateDiscount = true;
                    var validateDiscountOfferParam = "current-offers=" + $scope.selectedOffer.name + "&current-priceplan=" + $scope.priceplan[0]['product-name'] + "&level=SUBSCRIBER";
                    SystemService.showLoading();
                    AddDeleteEditOfferService.validateModifyOffer(validateDiscountOfferParam, function(result) {
                        SystemService.hideLoading();
                        var validateResult = result;
                        if (validateResult.data['response-data'][$scope.selectedOffer.name]) {
                            for (var i = 0; i < validateResult.data['response-data'][$scope.selectedOffer.name].length; i++) {
                                if (validateResult.data['response-data'][$scope.selectedOffer.name][i] == "EDIT") {
                                    $scope.disableExpDateDiscount = false;
                                } else {
                                    $scope.disableExpDateDiscount = true;
                                }
                            }
                        }
                    });
                }
                break;
        }

        $('#addNewOfferEffectiveDate').datepicker('setDate', "");
        $('#addNewOfferExpirationDate').datepicker('setDate', "");
        $('#addNewOfferExpirationDate2').datepicker('setDate', "");
        $scope.offerEffectiveDate = "immediate";
        $scope.addNewOfferEffectiveDate = "";
        $('#addNewOfferEffectiveDate').val("");
        $scope.offerExpirationDate = "unlimited"
        $scope.addNewOfferExpirationDate = "";
        $('#addNewOfferExpirationDate').val("");
        $('#addNewOfferExpirationDate2').val("");
        $('#addNewOfferExpirationDate').datepicker('setStartDate', $scope.setDateNow);
        $('#addNewOfferExpirationDate2').datepicker('setStartDate', $scope.setDateNow);

        if ($scope.selectedOffer.group == "DISCOUNT" || $scope.selectedOffer.group == "RELATED" || $scope.selectedOffer.group == "IDD" || $scope.selectedOffer.group == "IR" || $scope.selectedOffer.group == "BARRING" || $scope.selectedOffer.group == "FUP") {
            $scope.disableSubmitAddOffer = false;

            if ($scope.selectedOffer.group == "DISCOUNT") {
                $scope.offerExpirationDate = "specify"
                $scope.disableSubmitAddOffer = true;
            }

        } else {
            $scope.disableSubmitAddOffer = true;
        }

        if ($scope.selectedOffer.group == "DISCOUNT") {
            $scope.selectedOffer['properties']['DURATION_TEMP'] = angular.copy($scope.selectedOffer['properties']['DURATION']);
            if ($scope.selectedOffer.properties["MAX_DURATION"]) {
                var expiredateDiscount = new Date();
                expiredateDiscount.setMonth(expiredateDiscount.getMonth() + parseInt($scope.selectedOffer.properties.MAX_DURATION));
                $("#addNewOfferExpirationDate").datepicker("setEndDate", expiredateDiscount);
                $("#addNewOfferExpirationDate2").datepicker("setEndDate", expiredateDiscount);
            } else {
                var expiredateDiscount = new Date();
                expiredateDiscount.setMonth(expiredateDiscount.getMonth() + 24);
                $("#addNewOfferExpirationDate").datepicker("setEndDate", expiredateDiscount);
                $("#addNewOfferExpirationDate2").datepicker("setEndDate", expiredateDiscount);
            }
            $scope.checkFirstDiscountBill($scope.data.customerProfile["customer-properties"]["BILL-CYCLE"], $scope.addNewOfferExpirationDate);
            if ($scope.selectedOffer.properties["DURATION_UNIT"] == "MONTH") {
                $scope.setEndDateValue($scope.firstDiscountBill);
            } else if ($scope.selectedOffer.properties["DURATION_UNIT"] == "DATE") {
                var disDateParam = new Date();
                disDateParam.setDate(disDateParam.getDate() + parseInt($scope.selectedOffer.properties["DURATION"]));
                // $("#addNewOfferExpirationDate").datepicker("setDate", param);
                $("#addNewOfferExpirationDate2").datepicker("setDate", disDateParam);
            }
        } else {
            $("#addNewOfferExpirationDate").datepicker("setEndDate", "");
            $("#addNewOfferExpirationDate2").datepicker("setEndDate", "");
        }
        $('#idBindDataAgain').click();
    };

    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/ ) {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0) from += len;

            for (; from < len; from++) {
                if (from in this && this[from] === elt) return from;
            }
            return -1;
        };
    }
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
        $scope.pooledOfferType = "";
    };
    $scope.offerParam = [];
    $scope.paramDetail = [];
    $scope.paramForEdit = [];
    $scope.viewOfferForEdit = {};
    $scope.currentPage_cug_edit = 1;
    $scope.searchEditCug = "";
    $scope.viewOfferDetail = function(item, action) {
        $scope.onClearRelateOfferValue();
        $scope.currentPage_cug_edit = 1;
        $scope.idSetDate = false;
        $scope.cugSelectValue = "";
        $scope.searchEditCug = "";
        $scope.smartSearchCug($scope.searchEditCug);
        $('.radioCUG').prop('checked', false);
        $scope.paramDetail = [];
        $scope.paramForEdit = [];
        $scope.viewOfferForEdit = {};
        $scope.selectedRelateOffer = [];
        $('#hModal').height(($(window).height()) - 235);
        $('.hModal').height(($(window).height()) - 235);
        var parameter = [];
        // console.log(item);
        if (item["product-properties"]["OFFER-INSTANCE-ID"]) {
            $scope.offerParam = $filter('filter')($scope.existingParameter, item["product-properties"]["OFFER-INSTANCE-ID"]);
        } else {
            $scope.offerParam = [];
        }
        console.log($scope.offerParam)
        if ($scope.offerParam.length != 0) {
            for (var i = 0; i < $scope.offerParam[0]["product-properties"]["PARAM-SIZE"]; i++) {
                parameter.push($scope.offerParam[0]["product-properties"]["PARAM-" + i]);
            }
            for (var i = 0; i < parameter.length; i++) {
                var arrParam = parameter[i].split("|");
                if (arrParam[1] == "TR_ACTUAL_CONTRACT_START_DATE" || arrParam[1] == "TR_ORIG_CONTRACT_EXPIRE_DATE") {
                    var dateParam = arrParam[2].split(" ");
                    dateParam[0] = dateParam[0];
                    $scope.paramDetail.push({
                        "name": arrParam[1],
                        "value": dateParam[0]
                    });
                } else {
                    $scope.paramDetail.push({
                        "name": arrParam[1],
                        "value": arrParam[2]
                    });
                }
            }

            $scope.paramForEdit = angular.copy($scope.offerParam[0]["product-properties"]);
            if (item.group == "FF") {
                $scope.paramDetail[0]["value"] = $scope.paramDetail[0]["value"].split(",");
                SystemService.showLoading();
                AddDeleteEditOfferService.searchOfferByName(item["product-name"], function(response) {
                    SystemService.hideLoading();
                    if (response.data["response-data"]) {
                        $scope.paramDetail[0]["FF_NUMBER"] = parseInt(response.data["response-data"]["properties"]["FF_NUMBER"]);
                        $scope.paramForEdit['param-detail'][0]['FF_NUMBER'] = $scope.paramDetail[0]["FF_NUMBER"];
                        $scope.paramDetail[0]["FF_MIN"] = response.data["response-data"]["parameter-specifications"][0]["min"];
                        $scope.paramForEdit['param-detail'][0]["FF_MIN"] = $scope.paramDetail[0]["FF_MIN"];
                    };
                });
            } else if (item.group == "CUG") {
                $scope.paramDetail[0]["cugSelectValue"] = "";
                $scope.paramDetail[0]["cugValue"] = $scope.paramDetail[0]["value"] + " : ";
                for (var i = 0; i < $scope.cugList.length; i++) {
                    if ($scope.cugList[i]["group-id"] == $scope.paramDetail[0]["value"]) {
                        $scope.paramDetail[0]["cugValue"] = $scope.paramDetail[0]["value"] + " : " + $scope.cugList[i]["group-name"];
                    }
                }
            }

            console.log($scope.paramDetail);
        }

        // รอ BA สรุป 20161130
        // if (item.group == "DISCOUNT") {
        //     SystemService.showLoading();
        //     AddDeleteEditOfferService.searchOfferByName(item["product-name"], function(response) {
        //         SystemService.hideLoading();
        //         if (response.data["response-data"]) {
        //             $scope.paramForEdit["properties"] = response.data["response-data"]["properties"];
        //         }
        //     });
        // }
        // ===========================
        $scope.paramForEdit['effective-date'] = item['effective-date'];
        $scope.paramForEdit['expiration-date'] = item['expire-date'];

        // console.log($scope.paramForEdit);
        // $('#editOfferEffectiveDate').datepicker("setDate", item['effective-date']);
        $('#editOfferExpirationDate').datepicker("setDate", item['expiration-date']);
        setTimeout(function() {
            SystemService.calendarDatePicker();
            setTimeout(function() {
                $('#contractExpDate').datepicker("setStartDate", $scope.viewOfferForEdit['CONTRACT-START-DATE']);
            }, 1000);
        }, 2000);

        $scope.viewOffer = {
            "product-name": item['product-name'],
            "product-description": item['product-description'],
            "effective-date": item['effective-date'],
            "checkEditParam": item["checkEditParam"],
            "checkEditExp": item["checkEditExp"],
            "expire-date-option": item["expire-date-option"],
            "expiration-date": item['expire-date'],
            "expire-date": item['expire-date'],
            "offer-group": item['offer-group'],
            "offer-instance-id": item["product-properties"]["OFFER-INSTANCE-ID"],
            "CONTRACT-START-DATE": item["product-properties"]["CONTRACT-START-DATE"],
            "CONTRACT-EXPIRATION-DATE": item["product-properties"]["CONTRACT-EXPIRATION-DATE"],
            "original-data": item,
            "properties": {
                "firstDiscountBill": ""
            }
        }
        if (item.group == "POOLING") {
            $scope.viewOffer["pooled-offer"] = item["product-properties"]["PARENT-SOC-NAME"];
        }
        if ($scope.offerParam.length > 0) {
            $scope.viewOffer.param = {
                "TR_CONTRACT_NUMBER": $filter('filter')($scope.offerParam[0]["product-properties"]["param-detail"], { "name": "TR_CONTRACT_NUMBER" }),
                "TR_CONTRACT_TERM": $filter('filter')($scope.offerParam[0]["product-properties"]["param-detail"], { "name": "TR_CONTRACT_TERM" }),
                "TR_CONTRACT_FEE": $filter('filter')($scope.offerParam[0]["product-properties"]["param-detail"], { "name": "TR_CONTRACT_FEE" }),
                "TR_CONTRACT_REMARK": $filter('filter')($scope.offerParam[0]["product-properties"]["param-detail"], { "name": "TR_CONTRACT_REMARK" })
            };
        }
        if ($scope.viewOffer['expire-date']) {
            $scope.viewOffer['expire-date-option'] = "FUTURE";
        } else {
            $scope.viewOffer['expire-date-option'] = "UNLIMITED";
        }

        $scope.viewOfferForEdit = angular.copy($scope.viewOffer);
        if (item.group == "PROPOSITION" && action == "edit") {
            if ($scope.viewOfferForEdit.param["TR_CONTRACT_TERM"][0]["value"] > 0) {
                var expCpDate = new Date();
                var cpDateArr = $scope.viewOfferForEdit['CONTRACT-START-DATE'].split("/");
                expCpDate.setDate(cpDateArr[0]);
                expCpDate.setMonth(Number(cpDateArr[1]) - 1);
                expCpDate.setYear(cpDateArr[2]);
                console.log(expCpDate);
                expCpDate.setMonth(expCpDate.getMonth() + Number($scope.viewOfferForEdit.param["TR_CONTRACT_TERM"][0]["value"]));
                $scope.viewOfferForEdit['CONTRACT-EXPIRATION-DATE'] = $filter('date')(expCpDate, 'dd/MM/yyyy');
            } else {
                $scope.viewOfferForEdit['CONTRACT-EXPIRATION-DATE'] = angular.copy($scope.viewOfferForEdit['CONTRACT-START-DATE']);
            }
        } else if (item.group == "DISCOUNT" && action == "edit") {
            $scope.checkFirstDiscountBill($scope.data.customerProfile["customer-properties"]["BILL-CYCLE"], $scope.viewOfferForEdit["effective-date"], "editExisting");
            SystemService.showLoading();
            AddDeleteEditOfferService.searchOfferByName(item["product-name"], function(response) {
                SystemService.hideLoading();
                if (response.data["response-data"]) {
                    $scope.viewOfferForEdit["properties"]["MAX_DURATION"] = response.data["response-data"]["properties"]["MAX_DURATION"];
                } else {
                    $scope.viewOfferForEdit["properties"]["MAX_DURATION"] = "24";
                };
            });
        }

        setTimeout(function() {
            $('#editOfferExpirationDate').datepicker("setDate", $scope.viewOfferForEdit['expiration-date']);
            $scope.modelChange = false;
        }, 500);
        // $scope.editExpType = "effective";
        $scope.editParam = false;
        $scope.editExp = false;
        $scope.modelChange = false;

        setTimeout(function() {
            $("#TR_ORIG_CONTRACT_EXPIRE_DATE").change(function() {
                console.log($('#TR_ORIG_CONTRACT_EXPIRE_DATE').val());
                for (var i = 0; i < $scope.paramForEdit.length; i++) {
                    if ($scope.paramForEdit[i].name == "TR_ORIG_CONTRACT_EXPIRE_DATE" && $scope.paramForEdit[i].value != $('#TR_ORIG_CONTRACT_EXPIRE_DATE').val()) {
                        $scope.paramForEdit[i].value = $('#TR_ORIG_CONTRACT_EXPIRE_DATE').val();
                        $scope.onModelChange();
                    }
                }
                setTimeout(function() {
                    $('#idBindDataAgain').click();
                }, 50);
            });
        }, 2000);
        console.log($scope.viewOffer);
        console.log($scope.viewOfferForEdit);
    };

    $scope.onEditCurrentOffer = function(productName) {
        for (var i = 0; i < $scope.existingOffer.length; i++) {
            if (($scope.existingOffer[i]["product-name"] == productName) && $scope.viewOfferForEdit.checkEditExp) {
                $scope.existingOffer[i]["expiration-date"] = $scope.viewOfferForEdit['expiration-date'];
                $scope.existingOffer[i]["expire-date"] = $scope.viewOfferForEdit['expiration-date'];
                $scope.existingOffer[i].edited = true;
                $scope.existingOffer[i]["checkEditExp"] = true;
            }

            for (var j = 0; j < $scope.existingParameter.length; j++) {
                if (($scope.existingOffer[i]["product-name"] == productName) && $scope.existingParameter[j]["product-properties"]["OFFER-INSTANCE-ID"] == $scope.paramForEdit["OFFER-INSTANCE-ID"] && $scope.viewOfferForEdit.checkEditParam) {
                    $scope.existingParameter[j]["product-properties"] = $scope.paramForEdit;
                    $scope.existingOffer[i].edited = true;
                    $scope.existingOffer[i]["checkEditParam"] = true;
                    if ($scope.existingOffer[i]["group"] == "PROPOSITION") {
                        for (var detailNo = 0; detailNo < $scope.existingParameter[j]["product-properties"]["param-detail"].length; detailNo++) {
                            if ($scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["name"] == "TR_CONTRACT_NUMBER") {
                                $scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["value"] = $scope.viewOfferForEdit['param']['TR_CONTRACT_NUMBER'][0]['value'];
                            } else if ($scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["name"] == "TR_CONTRACT_TERM") {
                                $scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["value"] = $scope.viewOfferForEdit['param']['TR_CONTRACT_TERM'][0]['value'];
                            } else if ($scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["name"] == "TR_CONTRACT_FEE") {
                                $scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["value"] = $scope.viewOfferForEdit['param']['TR_CONTRACT_FEE'][0]['value'];
                            } else if ($scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["name"] == "TR_CONTRACT_REMARK") {
                                $scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["value"] = $scope.viewOfferForEdit['param']['TR_CONTRACT_REMARK'][0]['value'];
                            } else if ($scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["name"] == "TR_ORIG_CONTRACT_EXPIRE_DATE") {
                                TR_ACTUAL_CONTRACT_START_DATE
                                $scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["value"] = $scope.viewOfferForEdit['CONTRACT-EXPIRATION-DATE'];
                            } else if ($scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["name"] == "TR_ACTUAL_CONTRACT_START_DATE") {
                                $scope.existingParameter[j]["product-properties"]["param-detail"][detailNo]["value"] = $scope.viewOfferForEdit['CONTRACT-START-DATE'];
                            }
                        }
                    }
                }
            }
        }
        console.log($scope.existingOffer);
        console.log($scope.existingParameter);
        $scope.setDefaultExistingOffer();
        $scope.validateEditUI();
    };

    $scope.idSetDate = false;
    $scope.setDatepicker = function(id, value) {
        if ($scope.idSetDate == false) {
            $('#' + id).datepicker("setDate", value);
            $scope.idSetDate = true;
        }
    };

    $scope.onCancelViewOffer = function() {
        $scope.offerParam = [];
        $scope.paramDetail = [];
        $scope.paramForEdit = [];
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
            AddDeleteEditOfferService.getSIMData($scope.subNoInput, $scope.level, onGetSIMData);
            if (onGetSIMData) {
                // $scope.getOfferList();
                // $scope.getReleteOfferList();
                // $scope.getRegulaOfferList();
                // $scope.getPopUpOfferList();
                // $scope.getFutureOfferList();
            }
        } else {
            $scope.callService = false;
        }
    };
    // (End) Get current SIM data ----------------------
    $scope.TrxID = '';
    $scope.orderId = '';
    $scope.roles = "";
    $scope.isCMUser = false;
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
                $scope.getCUGLists();
                $scope.checkAuthorize();
                // $scope.initModalReadCard();
            });

            $scope.roles = "";
            if ($scope.getAuthen.userGroup == "DEALER") {
                $scope.roles = $scope.getAuthen["ssoPartnerPrincipal"]["rolesAsString"];
                console.log($scope.roles);
            } else {
                $scope.roles = $scope.getAuthen["ssoEmployeePrincipal"]["rolesAsString"];
                console.log($scope.roles);
            }
            AddDeleteEditOfferService.getUserGroup($scope.roles, function(response) {
                if (response.data["response-data"][0] == "USER_GROUP_CM") {
                    $scope.isCMUser = true;
                } else {
                    $scope.isCMUser = false;
                }
                console.log($scope.isCMUser);
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
            approver: $scope.approver,
            currentPricePlan: $scope.priceplan[0]['product-name']
        };
    };

    $scope.openPDFDialog = function() {

        if (!validateInput()) {
            return;
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

        SystemService.showLoading();

        var customerType = 'O';
        if ($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') {
            customerType = 'Y';
        }

        var data = {
            'func': 'OFF',
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
            // 'body': generateOrderRequest()
            'body': {
                'newOfferData': {
                    'newOffer': $scope.listNewOffer()
                }
            }
        };

        console.log(JSON.stringify(data));
        SystemService.generatePDF(data, function(result) {
            SystemService.hideLoading();

            if (!$scope.isCMUser && $scope.offerType == 'C') {
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
            }
        });
    };

    $scope.confirmPrint = function() {
        SystemService.demo = true;
        SystemService.showLoading();

        var data = generateOrderRequest();

        data['statusCancel'] = $scope.statusCancel;
        data['statusReason'] = $scope.statusReason.id;
        data['statusReasonMemo'] = $scope.statusReasonMemo;
        data['offer'] = {
            'OFFER-SIZE': $scope.addNewOfferLists.length,
            'PRICEPLAN-INSTANCE-ID': $scope.priceplan[0]["product-properties"]["OFFER-INSTANCE-ID"],
            'SUBSCRIBER-ID': $scope.data.simData["subscriber-id"],
            'ACTION-LEVEL': "SUBSCRIBER"
        };

        var orderItem = [];
        if ($scope.offerType == "C") {
            for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
                data['offer']["OFFER-" + i] = $scope.addNewOfferLists[i].soc + "|" + $scope.addNewOfferLists[i].name;
                data['offer']["OFFER-" + i + "-SOC-TYPE"] = $scope.addNewOfferLists[i]["soc-type"];
                data['offer']["OFFER-" + i + "-OFFER-GROUP"] = $scope.addNewOfferLists[i]["group"];

                if ($scope.addNewOfferLists[i]["param"]["effective-date-type"] == "immediate") {
                    data['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = $scope.setDateNow;
                    data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "IMMEDIATE";
                } else if ($scope.addNewOfferLists[i]["param"]["effective-date-type"] == "specify") {
                    data['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = $scope.addNewOfferLists[i]["param"]["effective-date-value"];
                    data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "FUTURE";
                }

                if ($scope.addNewOfferLists[i]["param"]["expiration-date-type"] == "unlimited") {
                    data['offer']["OFFER-" + i + "-EXPIRE-DATE"] = "";
                    data['offer']["OFFER-" + i + "-CHANGE-EXPIRE-OPTION"] = "UNLIMITED";
                } else if ($scope.addNewOfferLists[i]["param"]["expiration-date-type"] == "specify") {
                    data['offer']["OFFER-" + i + "-EXPIRE-DATE"] = $scope.addNewOfferLists[i]["param"]["expiration-date-value"];
                    data['offer']["OFFER-" + i + "-CHANGE-EXPIRE-OPTION"] = "FUTURE";
                }

                if ($scope.addNewOfferLists[i]["related-priceplan"]) {
                    data['offer']["OFFER-" + i + "-PARENT-OFFER"] = $scope.priceplan[0]["product-properties"]["OFFER-INSTANCE-ID"] + "|" + $scope.priceplan[0]["product-soc-code"] + "|" + $scope.priceplan[0]["product-name"];
                }

                switch ($scope.addNewOfferLists[i].group) {
                    case "ADDITIONAL":
                    case "CAP_MAX":
                    case "POOLING":
                        if ($scope.addNewOfferLists[i]["parameter-specifications"]) {
                            data['offer']["OFFER-" + i + "-PARAM-SIZE"] = $scope.addNewOfferLists[i]["parameter-specifications"].length;
                            for (var j = 0; j < $scope.addNewOfferLists[i]["parameter-specifications"].length; j++) {
                                var paramValue = $scope.addNewOfferLists[i]["parameter-specifications"][j]["select-value"]["id"] ? $scope.addNewOfferLists[i]["parameter-specifications"][j]["select-value"]["id"] : $scope.addNewOfferLists[i]["parameter-specifications"][j]["select-value"];
                                data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + paramValue;
                            }
                        }

                        if ($scope.addNewOfferLists[i].group == "POOLING") {
                            data['offer']["OFFER-" + i + "-POOLED-OFFER"] = $scope.addNewOfferLists[i].param['parent-pooled'];
                        }
                        break;

                    case "FF":
                        data['offer']["OFFER-" + i + "-PARAM-SIZE"] = 1;
                        data['offer']["OFFER-" + i + "-PARAM-0"] = $scope.addNewOfferLists[i]["parameter-specifications"][0]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["ff-number"];
                        break;

                    case "CUG":
                        data['offer']["OFFER-" + i + "-PARAM-SIZE"] = 1;
                        data['offer']["OFFER-" + i + "-PARAM-0"] = $scope.addNewOfferLists[i]["parameter-specifications"][0]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["cug-group-id"];
                        break;

                    case "CONTRACT_PROPO":
                        if ($scope.addNewOfferLists[i]["parameter-specifications"]) {
                            data['offer']["OFFER-" + i + "-PARAM-SIZE"] = $scope.addNewOfferLists[i]["parameter-specifications"].length;
                            for (var j = 0; j < $scope.addNewOfferLists[i]["parameter-specifications"].length; j++) {
                                if ($scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_REMARK") {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["remark"];

                                } else if ($scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_NUMBER") {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["contract-number"];

                                } else if ($scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] == "TR_ACTUAL_CONTRACT_START_DATE") {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["start-date"];
                                    data['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = $scope.addNewOfferLists[i]["param"]["start-date"];

                                    if ($scope.addNewOfferLists[i]["param"]["start-date"] == $scope.setDateNow) {
                                        data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "IMMEDIATE";
                                    } else {
                                        data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "FUTURE";
                                    }

                                } else if ($scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] == "TR_ORIG_CONTRACT_EXPIRE_DATE") {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["expiration-date"];
                                    data['offer']["OFFER-" + i + "-EXPIRE-DATE"] = $scope.addNewOfferLists[i]["param"]["expiration-date"];
                                    data['offer']["OFFER-" + i + "-CHANGE-EXPIRE-OPTION"] = "FUTURE";

                                } else if ($scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_TERM") {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["term"];

                                } else if ($scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_FEE") {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["param"]["fee"];

                                } else {
                                    data['offer']["OFFER-" + i + "-PARAM-" + j] = $scope.addNewOfferLists[i]["parameter-specifications"][j]["name"] + "|" + $scope.addNewOfferLists[i]["parameter-specifications"][j]["default-value"];
                                }
                            }
                        }
                        break;
                }


                if ($scope.addNewOfferLists[i]["related-offers"]) {
                    data['offer']["OFFER-" + i + "-RELATED-OFFER-SIZE"] = $scope.addNewOfferLists[i]["related-offers"].length;
                    $.each($scope.addNewOfferLists[i]["related-offers"], function(relateIndex, item) {
                        data['offer']["OFFER-" + i + "-RELATED-OFFER-" + relateIndex] = item["offer"]["soc"] + "|" + item["offer"]["name"];
                        data['offer']["OFFER-" + i + "-RELATED-OFFER-" + relateIndex + "-SOC-TYPE"] = item["offer"]["soc-type"];
                        data['offer']["OFFER-" + i + "-RELATED-OFFER-" + relateIndex + "-OFFER-GROUP"] = item["offer"]["group"];

                        if (item["offer"]["parameter-specifications"]) {
                            $.each(item["offer"]["parameter-specifications"], function(relateParamIndex, relateParam) {
                                data['offer']["OFFER-" + i + "-RELATED-OFFER-" + relateIndex + "-PARAM-SIZE"] = item["offer"]["parameter-specifications"].length;
                                var relateParamValue = relateParam["select-value"]["id"] ? relateParam["select-value"]["id"] : relateParam["select-value"];
                                data['offer']["OFFER-" + i + "-RELATED-OFFER-" + relateIndex + "-PARAM-" + relateParamIndex] = relateParam["name"] + "|" + relateParamValue;
                            });
                        }

                    });
                }
            }

            orderItem.push({
                'product-category': data.productDetails['product-category'],
                'name': "ADD_OFFER",
                'order-type': "NEW",
                'product-id-name': data.productDetails['product-id-name'],
                'product-id-number': data.productDetails['product-id-number'],
                'product-name': data.currentPricePlan,
                "address-list": {
                    // "BILLING_ADDRESS": BILLING_ADDRESS,
                    // "TAX_ADDRESS": TAX_ADDRESS
                },
                'primary-order-data': {
                    'ACCOUNT-SUB-TYPE': data.productDetails['account-sub-type'],
                    'COMPANY-CODE': data.productDetails['company-code'],
                    'MOBILE-SERVICETYPE': data.productDetails['mobile-servicetype'],
                    'ACCOUNT-ID': data.productDetails['ban'],
                    'OU-ID': data.productDetails['ouId']
                },
                'order-data': data['offer'],
                // 'reason-code': data.statusReason.id,
                'reason-code': "CREQ",
                'user-memo': data.saleAgent.ssoEmployeePrincipal.loginName + "(" + data.saleAgent.ssoEmployeePrincipal.employeeId + ": " + data.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + data.orderData.orderId + ")" + ": " + data.statusReasonMemo,
                'product-category': data.productDetails['product-category'],
                'product-type': "PRICEPLAN"
            })
        } else if ($scope.offerType == "D") {
            if ($scope.deleteExistingOfferList.length > 0) {
                data['offer']['OFFER-SIZE'] = $scope.deleteExistingOfferList.length;
                for (var i = 0; i < $scope.deleteExistingOfferList.length; i++) {
                    data['offer']["OFFER-" + i] = $scope.deleteExistingOfferList[i]["product-soc-code"] + "|" + $scope.deleteExistingOfferList[i]["product-name"];
                    data['offer']["OFFER-" + i + "-SOC-TYPE"] = $scope.deleteExistingOfferList[i]["soc-type"];
                    data['offer']["OFFER-" + i + "-OFFER-GROUP"] = $scope.deleteExistingOfferList[i]["offer-group"];
                    data['offer']["OFFER-" + i + "-OFFER-INSTANCE-ID"] = $scope.deleteExistingOfferList[i]["product-properties"]["OFFER-INSTANCE-ID"];
                    data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "IMMEDIATE";
                    data['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = $scope.setDateNow;
                }

                orderItem.push({
                    'product-category': data.productDetails['product-category'],
                    'name': "DELETE_EXISTING_OFFER",
                    'order-type': "EXISTING",
                    'product-id-name': data.productDetails['product-id-name'],
                    'product-id-number': data.productDetails['product-id-number'],
                    'product-name': data.currentPricePlan,
                    "address-list": {
                        // "BILLING_ADDRESS": BILLING_ADDRESS,
                        // "TAX_ADDRESS": TAX_ADDRESS
                    },
                    'primary-order-data': {
                        'ACCOUNT-SUB-TYPE': data.productDetails['account-sub-type'],
                        'COMPANY-CODE': data.productDetails['company-code'],
                        'MOBILE-SERVICETYPE': data.productDetails['mobile-servicetype'],
                        'ACCOUNT-ID': data.productDetails['ban'],
                        'OU-ID': data.productDetails['ouId']
                    },
                    'order-data': data['offer'],
                    // 'reason-code': data.statusReason.id,
                    'reason-code': "CREQ",
                    'user-memo': data.saleAgent.ssoEmployeePrincipal.loginName + "(" + data.saleAgent.ssoEmployeePrincipal.employeeId + ": " + data.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + data.orderData.orderId + ")" + ": " + data.statusReasonMemo,
                    'product-category': data.productDetails['product-category'],
                    'product-type': "PRICEPLAN"
                })
            }
            if ($scope.deleteFutureOfferList.length > 0) {
                var orderByFutureOrderId = [{
                    "FUTURE-ORDER-ID": $scope.deleteFutureOfferList[0]["product-properties"]["FUTURE-ORDER-ID"],
                    "offer": [$scope.deleteFutureOfferList[0]]
                }];

                for (var i = 1; i < $scope.deleteFutureOfferList.length; i++) {
                    var findByFutureOrderId = $filter('filter')(orderByFutureOrderId, $scope.deleteFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"]);

                    if (findByFutureOrderId.length > 0) {
                        for (var j = 0; j < orderByFutureOrderId.length; j++) {
                            if ($scope.deleteFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"] == orderByFutureOrderId[j]["FUTURE-ORDER-ID"]) {
                                orderByFutureOrderId[j]["offer"].push($scope.deleteFutureOfferList[i]);
                            }
                        }
                    } else {
                        orderByFutureOrderId.push({
                            "FUTURE-ORDER-ID": $scope.deleteFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"],
                            "offer": [$scope.deleteFutureOfferList[i]]
                        });
                    }
                }
                console.log(orderByFutureOrderId);

                for (var i = 0; i < orderByFutureOrderId.length; i++) {
                    var data2 = generateOrderRequest();
                    data2['statusReason'] = $scope.statusReason.id;
                    data2['statusReasonMemo'] = $scope.statusReasonMemo;
                    data2['offer'] = {
                        'OFFER-SIZE': orderByFutureOrderId[i]["offer"].length,
                        'PRICEPLAN-INSTANCE-ID': $scope.priceplan[0]["product-properties"]["OFFER-INSTANCE-ID"],
                        'SUBSCRIBER-ID': $scope.data.simData["subscriber-id"],
                        'ACTION-LEVEL': "SUBSCRIBER"
                    };

                    for (var j = 0; j < orderByFutureOrderId[i]["offer"].length; j++) {
                        data2['offer']["OFFER-" + j] = orderByFutureOrderId[i]["offer"][j]["product-soc-code"] + "|" + orderByFutureOrderId[i]["offer"][j]["product-name"];
                        data2['offer']["OFFER-" + j + "-SOC-TYPE"] = orderByFutureOrderId[i]["offer"][j]["soc-type"];
                        // data2['offer']["OFFER-" + j + "-OFFER-GROUP"] = orderByFutureOrderId[i]["offer"][j]["offer-group"];
                        data2['offer']["OFFER-" + j + "-CHANGE-EFFECTIVE-OPTION"] = "IMMEDIATE";
                        data2['offer']["OFFER-" + j + "-FUTURE-SOC-ID"] = orderByFutureOrderId[i]["offer"][j]["product-properties"]["FUTURE-SOC-ID"];
                        data2['offer']["OFFER-" + j + "-EFFECTIVE-DATE"] = $scope.setDateNow;
                        data2['offer']["FUTURE-ORDER-ID"] = orderByFutureOrderId[i]["FUTURE-ORDER-ID"];
                    }
                    orderItem.push({
                        'product-category': data2.productDetails['product-category'],
                        'name': "DELETE_FUTURE_OFFER",
                        'order-type': "EXISTING",
                        'product-id-name': data2.productDetails['product-id-name'],
                        'product-id-number': data2.productDetails['product-id-number'],
                        'product-name': data2.currentPricePlan,
                        "address-list": {
                            // "BILLING_ADDRESS": BILLING_ADDRESS,
                            // "TAX_ADDRESS": TAX_ADDRESS
                        },
                        'primary-order-data': {
                            'ACCOUNT-SUB-TYPE': data2.productDetails['account-sub-type'],
                            'COMPANY-CODE': data2.productDetails['company-code'],
                            'MOBILE-SERVICETYPE': data2.productDetails['mobile-servicetype'],
                            'ACCOUNT-ID': data2.productDetails['ban'],
                            'OU-ID': data2.productDetails['ouId'],
                            'SUB-ACTIVITY': "FUTURE-OFFER"
                        },
                        'order-data': data2['offer'],
                        // 'reason-code': data.statusReason.id,
                        'reason-code': "CREQ",
                        'user-memo': data2.saleAgent.ssoEmployeePrincipal.loginName + "(" + data.saleAgent.ssoEmployeePrincipal.employeeId + ": " + data.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + data.orderData.orderId + ")" + ": " + data.statusReasonMemo,
                        'product-category': data2.productDetails['product-category'],
                        'product-type': "PRICEPLAN"
                    })
                }
            }
        } else if ($scope.offerType == "U") {
            var arr = $filter('filter')($scope.existingOffer, { 'edited': true });
            var editExistingOfferList = $filter('filter')(arr, { 'checkEditParam': true });
            var editExistingExpOfferList = $filter('filter')(arr, { 'checkEditExp': true });
            var editFutureOfferList = $filter('filter')($scope.futureOfferList, { 'edited': true });
            if (editExistingOfferList.length > 0) {

                data['offer']['OFFER-SIZE'] = editExistingOfferList.length;
                for (var i = 0; i < editExistingOfferList.length; i++) {
                    data['offer']["OFFER-" + i] = editExistingOfferList[i]["product-soc-code"] + "|" + editExistingOfferList[i]["product-name"];
                    data['offer']["OFFER-" + i + "-SOC-TYPE"] = editExistingOfferList[i]["soc-type"];
                    data['offer']["OFFER-" + i + "-OFFER-GROUP"] = editExistingOfferList[i]["offer-group"];
                    data['offer']["OFFER-" + i + "-OFFER-INSTANCE-ID"] = editExistingOfferList[i]["product-properties"]["OFFER-INSTANCE-ID"];
                    data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "IMMEDIATE";
                    data['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = $scope.setDateNow;

                    var id = editExistingOfferList[i]["product-properties"]["OFFER-INSTANCE-ID"];
                    var parameter = $filter('filter')($scope.existingParameter, { "OFFER_INSTANCE_ID": id });
                    // console.log(parameter);
                    if (parameter.length > 0) {
                        var paramSpec = parameter[0]["product-properties"]["param-detail"];
                        editExistingOfferList[i]["parameter-specifications"] = paramSpec;
                        switch (editExistingOfferList[i].group) {
                            case "ADDITIONAL":
                            case "CAP_MAX":
                            case "POOLED":
                            case "POOLING":
                                if (editExistingOfferList[i]["parameter-specifications"]) {
                                    data['offer']["OFFER-" + i + "-PARAM-SIZE"] = editExistingOfferList[i]["parameter-specifications"].length;
                                    for (var j = 0; j < editExistingOfferList[i]["parameter-specifications"].length; j++) {
                                        var paramValue = editExistingOfferList[i]["parameter-specifications"][j]["value"]["id"] ? editExistingOfferList[i]["parameter-specifications"][j]["value"]["id"] : editExistingOfferList[i]["parameter-specifications"][j]["value"];
                                        data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + paramValue;
                                    }
                                }

                                // if (editExistingOfferList[i].group == "POOLING") {
                                //     data['offer']["OFFER-" + i + "-POOLED-OFFER"] = editExistingOfferList[i].param['parent-pooled'];
                                // }
                                break;

                            case "FF":
                                var ffValue = "";
                                for (var ffNum = 0; ffNum < editExistingOfferList[i]["parameter-specifications"][0]["value"].length; ffNum++) {
                                    if (editExistingOfferList[i]["parameter-specifications"][0]["value"][ffNum] == "" || editExistingOfferList[i]["parameter-specifications"][0]["value"][ffNum] == undefined) {
                                        editExistingOfferList[i]["parameter-specifications"][0]["value"].splice(ffNum, 1);
                                    }
                                }

                                ffValue = editExistingOfferList[i]["parameter-specifications"][0]["value"][0];
                                if (editExistingOfferList[i]["parameter-specifications"][0]["value"].length > 1) {
                                    for (var j = 1; j < editExistingOfferList[i]["parameter-specifications"][0]["value"].length; j++) {
                                        ffValue += "," + editExistingOfferList[i]["parameter-specifications"][0]["value"][j];
                                    }
                                }

                                data['offer']["OFFER-" + i + "-PARAM-SIZE"] = 1;
                                data['offer']["OFFER-" + i + "-PARAM-0"] = editExistingOfferList[i]["parameter-specifications"][0]["name"] + "|" + ffValue;
                                break;

                            case "CUG":
                                data['offer']["OFFER-" + i + "-PARAM-SIZE"] = 1;
                                data['offer']["OFFER-" + i + "-PARAM-0"] = editExistingOfferList[i]["parameter-specifications"][0]["name"] + "|" + editExistingOfferList[i]["parameter-specifications"][0]["value"];
                                break;

                            case "CONTRACT_PROPO":
                                if (editExistingOfferList[i]["parameter-specifications"]) {
                                    data['offer']["OFFER-" + i + "-PARAM-SIZE"] = editExistingOfferList[i]["parameter-specifications"].length;
                                    for (var j = 0; j < editExistingOfferList[i]["parameter-specifications"].length; j++) {
                                        if (editExistingOfferList[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_REMARK") {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["param"]["remark"];

                                        } else if (editExistingOfferList[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_NUMBER") {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["param"]["contract-number"];

                                        } else if (editExistingOfferList[i]["parameter-specifications"][j]["name"] == "TR_ACTUAL_CONTRACT_START_DATE") {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["param"]["start-date"];
                                            data['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = editExistingOfferList[i]["param"]["start-date"];

                                            if (editExistingOfferList[i]["param"]["start-date"] == $scope.setDateNow) {
                                                data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "IMMEDIATE";
                                            } else {
                                                data['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "FUTURE";
                                            }

                                        } else if (editExistingOfferList[i]["parameter-specifications"][j]["name"] == "TR_ORIG_CONTRACT_EXPIRE_DATE") {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["param"]["expiration-date"];
                                            data['offer']["OFFER-" + i + "-EXPIRE-DATE"] = editExistingOfferList[i]["param"]["expiration-date"];
                                            data['offer']["OFFER-" + i + "-CHANGE-EXPIRE-OPTION"] = "FUTURE";

                                        } else if (editExistingOfferList[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_TERM") {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["param"]["term"];

                                        } else if (editExistingOfferList[i]["parameter-specifications"][j]["name"] == "TR_CONTRACT_FEE") {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["param"]["fee"];

                                        } else {
                                            data['offer']["OFFER-" + i + "-PARAM-" + j] = editExistingOfferList[i]["parameter-specifications"][j]["name"] + "|" + editExistingOfferList[i]["parameter-specifications"][j]["default-value"];
                                        }
                                    }
                                }
                                break;
                        }
                    }
                }

                orderItem.push({
                    'product-category': data.productDetails['product-category'],
                    'name': "UPDATE_PARAM",
                    'order-type': "EXISTING",
                    'product-id-name': data.productDetails['product-id-name'],
                    'product-id-number': data.productDetails['product-id-number'],
                    'product-name': data.currentPricePlan,
                    "address-list": {
                        // "BILLING_ADDRESS": BILLING_ADDRESS,
                        // "TAX_ADDRESS": TAX_ADDRESS
                    },
                    'primary-order-data': {
                        'ACCOUNT-SUB-TYPE': data.productDetails['account-sub-type'],
                        'COMPANY-CODE': data.productDetails['company-code'],
                        'MOBILE-SERVICETYPE': data.productDetails['mobile-servicetype'],
                        'ACCOUNT-ID': data.productDetails['ban'],
                        'OU-ID': data.productDetails['ouId']
                    },
                    'order-data': data['offer'],
                    // 'reason-code': data.statusReason.id,
                    'reason-code': "CREQ",
                    'user-memo': data.saleAgent.ssoEmployeePrincipal.loginName + "(" + data.saleAgent.ssoEmployeePrincipal.employeeId + ": " + data.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + data.orderData.orderId + ")" + ": " + data.statusReasonMemo,
                    'product-category': data.productDetails['product-category'],
                    'product-type': "PRICEPLAN"
                })

            }

            if (editExistingExpOfferList.length > 0) {
                //========================= รอพี่กวางให้คำขอบเรื่อง FUTURE-ORDER-ID=========================

                // var orderByFutureOrderId = [{
                //     "FUTURE-ORDER-ID": editFutureOfferList[0]["product-properties"]["FUTURE-ORDER-ID"],
                //     "offer": [editFutureOfferList[0]]
                // }];

                // for (var i = 1; i < editFutureOfferList.length; i++) {
                //     var findByFutureOrderId = $filter('filter')(orderByFutureOrderId, editFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"]);

                //     if (findByFutureOrderId.length > 0) {
                //         for (var j = 0; j < orderByFutureOrderId.length; j++) {
                //             if (editFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"] == orderByFutureOrderId[j]["FUTURE-ORDER-ID"]) {
                //                 orderByFutureOrderId[j]["offer"].push(editFutureOfferList[i]);
                //             }
                //         }
                //     } else {
                //         orderByFutureOrderId.push({
                //             "FUTURE-ORDER-ID": editFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"],
                //             "offer": [editFutureOfferList[i]]
                //         });
                //     }
                // }
                // console.log(orderByFutureOrderId);


                var data2 = generateOrderRequest();
                data2['statusReason'] = $scope.statusReason.id;
                data2['statusReasonMemo'] = $scope.statusReasonMemo;
                data2['offer'] = {
                    'OFFER-SIZE': editExistingExpOfferList.length,
                    'PRICEPLAN-INSTANCE-ID': $scope.priceplan[0]["product-properties"]["OFFER-INSTANCE-ID"],
                    'SUBSCRIBER-ID': $scope.data.simData["subscriber-id"],
                    'ACTION-LEVEL': "SUBSCRIBER"
                };

                for (var i = 0; i < editExistingExpOfferList.length; i++) {
                    data2['offer']["OFFER-" + i] = editExistingExpOfferList[i]["product-soc-code"] + "|" + editExistingExpOfferList[i]["product-name"];
                    data2['offer']["OFFER-" + i + "-SOC-TYPE"] = editExistingExpOfferList[i]["soc-type"];
                    // data2['offer']["OFFER-" + i + "-OFFER-GROUP"] = editExistingExpOfferList[i]["offer-group"];
                    data2['offer']["OFFER-" + i + "-CHANGE-EFFECTIVE-OPTION"] = "FUTURE";
                    // data2['offer']["OFFER-" + i + "-FUTURE-SOC-ID"] = editExistingExpOfferList[i]["product-properties"]["FUTURE-SOC-ID"];
                    data2['offer']["OFFER-" + i + "-EFFECTIVE-DATE"] = editExistingExpOfferList[i]["effective-date"];
                    // data2['offer']["FUTURE-ORDER-ID"] = editExistingExpOfferList[i]["FUTURE-ORDER-ID"];
                }
                orderItem.push({
                    'product-category': data2.productDetails['product-category'],
                    'name': "UPDATE_FUTURE_ORDER",
                    'order-type': "EXISTING",
                    'product-id-name': data2.productDetails['product-id-name'],
                    'product-id-number': data2.productDetails['product-id-number'],
                    'product-name': data2.currentPricePlan,
                    "address-list": {
                        // "BILLING_ADDRESS": BILLING_ADDRESS,
                        // "TAX_ADDRESS": TAX_ADDRESS
                    },
                    'primary-order-data': {
                        'ACCOUNT-SUB-TYPE': data2.productDetails['account-sub-type'],
                        'COMPANY-CODE': data2.productDetails['company-code'],
                        'MOBILE-SERVICETYPE': data2.productDetails['mobile-servicetype'],
                        'ACCOUNT-ID': data2.productDetails['ban'],
                        'OU-ID': data2.productDetails['ouId'],
                        'SUB-ACTIVITY': "FUTURE-OFFER"
                    },
                    'order-data': data2['offer'],
                    // 'reason-code': data.statusReason.id,
                    'reason-code': "CREQ",
                    'user-memo': data2.saleAgent.ssoEmployeePrincipal.loginName + "(" + data.saleAgent.ssoEmployeePrincipal.employeeId + ": " + data.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + data.orderData.orderId + ")" + ": " + data.statusReasonMemo,
                    'product-category': data2.productDetails['product-category'],
                    'product-type': "PRICEPLAN"
                });
                // }

                // ===================================================================================
            }

            if (editFutureOfferList.length > 0) {
                var orderByFutureOrderId = [{
                    "FUTURE-ORDER-ID": editFutureOfferList[0]["product-properties"]["FUTURE-ORDER-ID"],
                    "offer": [editFutureOfferList[0]]
                }];

                var orderByFutureOrderId = [{
                    "FUTURE-ORDER-ID": editFutureOfferList[0]["product-properties"]["FUTURE-ORDER-ID"],
                    "offer": [editFutureOfferList[0]]
                }];

                for (var i = 1; i < editFutureOfferList.length; i++) {
                    var findByFutureOrderId = $filter('filter')(orderByFutureOrderId, editFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"]);

                    if (findByFutureOrderId.length > 0) {
                        for (var j = 0; j < orderByFutureOrderId.length; j++) {
                            if (editFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"] == orderByFutureOrderId[j]["FUTURE-ORDER-ID"]) {
                                orderByFutureOrderId[j]["offer"].push(editFutureOfferList[i]);
                            }
                        }
                    } else {
                        orderByFutureOrderId.push({
                            "FUTURE-ORDER-ID": editFutureOfferList[i]["product-properties"]["FUTURE-ORDER-ID"],
                            "offer": [editFutureOfferList[i]]
                        });
                    }
                }
                console.log(orderByFutureOrderId);

                for (var i = 0; i < orderByFutureOrderId.length; i++) {
                    var data2 = generateOrderRequest();
                    data2['statusReason'] = $scope.statusReason.id;
                    data2['statusReasonMemo'] = $scope.statusReasonMemo;
                    data2['offer'] = {
                        'OFFER-SIZE': orderByFutureOrderId[i]["offer"].length,
                        'PRICEPLAN-INSTANCE-ID': $scope.priceplan[0]["product-properties"]["OFFER-INSTANCE-ID"],
                        'SUBSCRIBER-ID': $scope.data.simData["subscriber-id"],
                        'ACTION-LEVEL': "SUBSCRIBER"
                    };

                    for (var j = 0; j < orderByFutureOrderId[i]["offer"].length; j++) {
                        data2['offer']["OFFER-" + j] = orderByFutureOrderId[i]["offer"][j]["product-soc-code"] + "|" + orderByFutureOrderId[i]["offer"][j]["product-name"];
                        data2['offer']["OFFER-" + j + "-SOC-TYPE"] = orderByFutureOrderId[i]["offer"][j]["soc-type"];
                        // data2['offer']["OFFER-" + j + "-OFFER-GROUP"] = orderByFutureOrderId[i]["offer"][j]["offer-group"];
                        data2['offer']["OFFER-" + j + "-CHANGE-EFFECTIVE-OPTION"] = "FUTURE";
                        data2['offer']["OFFER-" + j + "-FUTURE-SOC-ID"] = orderByFutureOrderId[i]["offer"][j]["product-properties"]["FUTURE-SOC-ID"];
                        data2['offer']["OFFER-" + j + "-EFFECTIVE-DATE"] = orderByFutureOrderId[i]["offer"][j]["effective-date"];
                        data2['offer']["FUTURE-ORDER-ID"] = orderByFutureOrderId[i]["FUTURE-ORDER-ID"];
                    }
                    orderItem.push({
                        'product-category': data2.productDetails['product-category'],
                        'name': "UPDATE_FUTURE_ORDER",
                        'order-type': "EXISTING",
                        'product-id-name': data2.productDetails['product-id-name'],
                        'product-id-number': data2.productDetails['product-id-number'],
                        'product-name': data2.currentPricePlan,
                        "address-list": {
                            // "BILLING_ADDRESS": BILLING_ADDRESS,
                            // "TAX_ADDRESS": TAX_ADDRESS
                        },
                        'primary-order-data': {
                            'ACCOUNT-SUB-TYPE': data2.productDetails['account-sub-type'],
                            'COMPANY-CODE': data2.productDetails['company-code'],
                            'MOBILE-SERVICETYPE': data2.productDetails['mobile-servicetype'],
                            'ACCOUNT-ID': data2.productDetails['ban'],
                            'OU-ID': data2.productDetails['ouId'],
                            'SUB-ACTIVITY': "FUTURE-OFFER"
                        },
                        'order-data': data2['offer'],
                        // 'reason-code': data.statusReason.id,
                        'reason-code': "CREQ",
                        'user-memo': data2.saleAgent.ssoEmployeePrincipal.loginName + "(" + data.saleAgent.ssoEmployeePrincipal.employeeId + ": " + data.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + data.orderData.orderId + ")" + ": " + data.statusReasonMemo,
                        'product-category': data2.productDetails['product-category'],
                        'product-type': "PRICEPLAN"
                    });
                }
            }
        }

        console.log(data);
        console.log(orderItem);
        AddDeleteEditOfferService.submitAddDeleteEditOffer(data, orderItem, function(result) {
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
        $scope.checkAuthorize();
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

    $scope.enableEditOffer = function() {
        $scope.readOnlyOffer = false;
    };

    $scope.changeOfferType = function() {
        $scope.enableAddOffer = false;
        $scope.disableAddBtn = false;
        $scope.chkEdit = false
        $scope.futureOfferList = angular.copy($scope.tempFutureOfferList);
        $scope.existingOffer = angular.copy($scope.existingOfferTemp);
        $scope.existingParameter = angular.copy($scope.existingParameterTemp);
        $scope.setDefaultExistingOffer();
        $scope.addNewOfferLists = [];
        $scope.deleteExistingOfferList = [];
        $scope.deleteFutureOfferList = [];
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
            $('input[name=paramCug]').prop('checked', false);
            // $scope.disableSubmitAddOffer = false;
            // console.log($scope.radioDisOffer);
            $scope.onChangeRadioOffer(item);
            $('#idBindDataAgain').click();
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
        if (chkModel) {
            $scope.chkID = chkId;
            $scope.viewOfferDetail(item, 'edit');
            $('#editModal').click();
        } else {
            $scope.chkID = "";
            for (var i = 0; i < $scope.existingOffer.length; i++) {
                if ($scope.existingOffer[i]["product-name"] == item["product-name"] && $scope.existingOffer[i]["product-name"] == $scope.existingOfferTemp[i]["product-name"]) {
                    $scope.existingOffer[i] = angular.copy($scope.existingOfferTemp[i]);
                }
            }

            for (var j = 0; j < $scope.existingParameter.length; j++) {
                if ($scope.existingParameter[j]["product-properties"]["OFFER-INSTANCE-ID"] == $scope.paramForEdit["OFFER-INSTANCE-ID"]) {
                    $scope.existingParameter[j]["product-properties"] = angular.copy($scope.existingParameterTemp[j]["product-properties"]);
                    console.log($scope.existingParameter[j]);
                    break;
                }
            }
            $scope.setDefaultExistingOffer();
            $scope.validateEditUI();
        }
        $scope.chkBoxLength = item['offer-name'];
    }

    $scope.modelChange = false;
    $scope.onModelChange = function(group) {
        if ($scope.editExpType == "FUTURE" && $scope.paramForEdit['expiration-date'] == "") {
            $scope.modelChange = false;
        } else {
            $scope.modelChange = true;
        }

        if (group == 'FF') {
            var count = 0;
            for (var i = 0; i < $scope.paramForEdit['param-detail'][0]['value']; i++) {
                if ($scope.paramForEdit['param-detail'][0]['value']) {
                    count++
                };
            }

            if (count >= $scope.paramForEdit['param-detail'][0]["FF_MIN"]) {
                $scope.modelChange = false;
            } else {
                $scope.modelChange = true;
            }
        }
    };

    $scope.modelChange = false;
    $scope.unChk = function(editOfferCode, btnType) {
        if (btnType == "closeBtn") {
            for (var i = 0; i < $scope.existingOffer.length; i++) {
                if (editOfferCode == $scope.existingOffer[i]['product-name'] && $scope.existingOffer[i].edited == false) {
                    $scope.existingOffer[i].selected = false;
                }
            }
        } else {
            if ($scope.modelChange == false) {
                for (var i = 0; i < $scope.existingOffer.length; i++) {
                    if (editOfferCode == $scope.existingOffer[i]['product-name'] && $scope.existingOffer[i].edited == false) {
                        $scope.existingOffer[i].selected = false;
                    }
                }
            }
        }

        // $scope.dataForEdit = {};
        console.log($scope.addNewOfferLists);
    }

    $scope.hideReadCardForMobile = function() {
        SystemService.hideReadCardForMobile();
    };

    $scope.existingOffer = [];
    $scope.builtInOffer = [];
    $scope.regularOffer = [];
    $scope.propoOffer = [];
    $scope.discountOffer = [];
    $scope.pooledOffer = [];
    $scope.pooledList = [];
    $scope.poolingOffer = [];
    $scope.existingOfferTemp = [];
    $scope.getExistingOffer = function() {
        // SystemService.showLoading();
        $scope.existingOfferTemp = [];
        AddDeleteEditOfferService.getExistingOffer($scope.level, $scope.data.simData['product-id-number'], $scope.data.simData['subscriber-id'], function(result) {
            // SystemService.hideLoading();
            var msg = utils.getObject(result.data, 'display-messages');

            if (msg && msg.length > 0) {
                setTimeout(function() {
                    SystemService.showAlert({
                        "message": msg[0]["message"],
                        "message-code": msg[0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": msg[0]["en-message"],
                        "th-message": msg[0]["th-message"],
                        "technical-message": msg[0]["technical-message"]
                    });
                }, 1000);
                if (msg[0]['message-type'] == "ERROR") {
                    return false;
                }
            }
            // console.log(result.data['response-data']['customer']['installed-products']);
            var customerData = utils.getObject(result.data['response-data'], 'customer');
            if (customerData) {
                $scope.existingOffer = [];
                //ยกเลิก convert date เป็น th 20161108
                for (var i = 0; i < result.data['response-data']['customer']['installed-products'].length; i++) {
                    //     if (result.data['response-data']['customer']['installed-products'][i]['effective-date']) {
                    //         result.data['response-data']['customer']['installed-products'][i]['effective-date'] = SystemService.convertDateToTH(result.data['response-data']['customer']['installed-products'][i]['effective-date'], 'TH');
                    //     }
                    //     if (result.data['response-data']['customer']['installed-products'][i]['expire-date']) {
                    //         result.data['response-data']['customer']['installed-products'][i]['expire-date'] = SystemService.convertDateToTH(result.data['response-data']['customer']['installed-products'][i]['expire-date'], 'TH');
                    //     }
                    if (result.data['response-data']['customer']['installed-products']['expire-date']) {
                        result.data['response-data']['customer']['installed-products']['expire-date-option'] = "FUTURE";
                    } else {
                        result.data['response-data']['customer']['installed-products']['expire-date-option'] = "UNLIMITED";
                    }
                }
                // ===================================================================================================== //
                $scope.builtInOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'PRICEPLAN-BUILT-IN' });
                $scope.regularOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'ADDITIONAL-OFFER' });
                // $scope.regularOffer = $filter('orderBy')($scope.regularOffer, 'product-name', false);
                $scope.propoOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'PROPOSITION' });
                $scope.discountOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'DISCOUNT' });
                $scope.pooledOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'offer-group': 'POOLED' });
                $scope.poolingOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'offer-group': 'POOLING' });
                $scope.priceplan = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'offer-group': 'PRICEPLAN' });

                $scope.pooledList = [];
                if ($scope.pooledOffer) {
                    for (var i = 0; i < $scope.pooledOffer.length; i++) {
                        if ($scope.poolingOffer.length > 0) {
                            for (var j = 0; j < $scope.poolingOffer.length; j++) {
                                if ($scope.pooledOffer[i]["product-properties"]["OFFER-INSTANCE-ID"] != $scope.poolingOffer[j]["product-properties"]["PARENT-SOC-SEQUENCE"]) {
                                    var arr = $filter('filter')($scope.pooledList, $scope.pooledOffer[i]["product-name"]);
                                    if (arr.length > 0) {

                                    } else {
                                        $scope.pooledList.push($scope.pooledOffer[i]["product-name"]);
                                    }
                                }
                                break;
                            }
                        } else {
                            $scope.pooledList.push($scope.pooledOffer[i]["product-name"]);
                        }
                    }
                }
                console.log($scope.pooledList);
                if ($scope.priceplan.length > 0) {
                    $scope.data.header["currpriceplan"] = $scope.priceplan[0]['product-name'] + ":" + $scope.priceplan[0]['product-description'];
                }

                if ($scope.builtInOffer) {
                    for (var i = 0; i < $scope.builtInOffer.length; i++) {
                        $scope.builtInOffer[i]["name"] = $scope.builtInOffer[i]["product-name"];
                        $scope.builtInOffer[i]["group"] = $scope.builtInOffer[i]["offer-group"];
                        $scope.builtInOffer[i]["selected"] = false;
                        $scope.builtInOffer[i]["edited"] = false;
                        $scope.builtInOffer[i]["checkEditParam"] = false;
                        $scope.builtInOffer[i]["checkEditExp"] = false;
                        $scope.existingOffer.push($scope.builtInOffer[i])
                    }
                    console.log($scope.builtInOffer);
                }
                if ($scope.regularOffer) {
                    for (var i = 0; i < $scope.regularOffer.length; i++) {
                        $scope.regularOffer[i]["name"] = $scope.regularOffer[i]["product-name"];
                        $scope.regularOffer[i]["group"] = $scope.regularOffer[i]["offer-group"];
                        $scope.regularOffer[i]["selected"] = false;
                        $scope.regularOffer[i]["edited"] = false;
                        $scope.regularOffer[i]["checkEditParam"] = false;
                        $scope.regularOffer[i]["checkEditExp"] = false;
                        $scope.existingOffer.push($scope.regularOffer[i])
                    }
                }
                if ($scope.propoOffer) {
                    for (var i = 0; i < $scope.propoOffer.length; i++) {
                        $scope.propoOffer[i]["name"] = $scope.propoOffer[i]["product-name"];
                        $scope.propoOffer[i]["group"] = $scope.propoOffer[i]["offer-group"];
                        $scope.propoOffer[i]["selected"] = false;
                        $scope.propoOffer[i]["edited"] = false;
                        $scope.propoOffer[i]["checkEditParam"] = false;
                        $scope.propoOffer[i]["checkEditExp"] = false;
                        $scope.existingOffer.push($scope.propoOffer[i])
                    }
                }
                if ($scope.discountOffer) {
                    for (var i = 0; i < $scope.discountOffer.length; i++) {
                        $scope.discountOffer[i]["name"] = $scope.discountOffer[i]["product-name"];
                        $scope.discountOffer[i]["group"] = $scope.discountOffer[i]["offer-group"];
                        $scope.discountOffer[i]["selected"] = false;
                        $scope.discountOffer[i]["edited"] = false;
                        $scope.discountOffer[i]["checkEditParam"] = false;
                        $scope.discountOffer[i]["checkEditExp"] = false;
                        $scope.existingOffer.push($scope.discountOffer[i])
                    }
                }
                // if ($scope.pooledOffer) {
                //     for (var i = 0; i < $scope.pooledOffer.length; i++) {
                //         $scope.pooledOffer[i]["selected"] = false;
                //         $scope.builtInOffer[i]["edited"] = false;
                //         $scope.existingOffer.push($scope.pooledOffer[i])
                //     }
                // }
                console.log($scope.existingOffer);
                $scope.existingOfferTemp = angular.copy($scope.existingOffer);
                $scope.getExistingOfferParam();
            } else {
                $scope.existingOffer = [];
                $scope.builtInOffer = [];
                $scope.regularOffer = [];
                $scope.propoOffer = [];
                $scope.discountOffer = [];
                $scope.pooledOffer = [];
                $scope.callGetFutureOffer();
            }
        });
    };

    $scope.addType = "";
    $scope.pooledOfferType = "";
    $scope.searchOffer = function(offerGroup) {
        $scope.addType = offerGroup;
        if ($scope.addType == '' && $scope.addOfferType.value == "POOLING" && !$scope.pooledOfferType) {
            $scope.addOfferLists = [];
            return;
        }
        $scope.txtSearchOffer = "";
        $scope.currentPage = 1;
        $scope.radioOffer = "";
        $scope.disableSubmitAddOffer = true;
        $scope.clearAddNewOfferDate();
        if ($scope.level == "SUBSCRIBER") {
            $scope.serviceLevel = "C";
        } else {
            $scope.serviceLevel = "G";
        }

        if ($scope.addType == 'ALL') {
            $scope.addOfferType.value = '';
            var searchParam = "company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        } else if ($scope.addType == 'CONTRACT_PROPO') {
            $scope.addOfferType.value = 'CONTRACT_PROPO';
            var searchParam = "offer-group=CONTRACT_PROPO" + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        } else if ($scope.addType == 'DISCOUNT') {
            $scope.addOfferType.value = 'DISCOUNT';
            var searchParam = "offer-group=DISCOUNT" + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
        } else {
            if ($scope.addOfferType.value == 'RELATED') {
                var searchParam = "current-priceplan=" + $scope.priceplan[0]['product-name'] + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
            } else if ($scope.addOfferType.value == 'POOLING' && $scope.pooledOfferType) {
                var searchParam = "offer-group=" + $scope.addOfferType.value + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel + "&current-pooled=" + $scope.pooledOfferType;
            } else if ($scope.addOfferType.value == '') {
                var searchParam = "company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
            } else {
                var searchParam = "offer-group=" + $scope.addOfferType.value + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
            }
        }

        console.log(searchParam);
        SystemService.showLoading();
        AddDeleteEditOfferService.searchOffer(searchParam, $scope.addOfferType.value, function(result) {
            // console.log(result);
            SystemService.hideLoading();
            if (result.data['response-data']) {
                SystemService.hideLoading();
                $scope.addOfferLists = result.data['response-data'];
                console.log($scope.addOfferLists);
                for (var i = 0; i < $scope.addOfferLists.length; i++) {
                    // case relate offer price plan 
                    if ($scope.addOfferType.value == 'RELATED') {
                        $scope.addOfferLists[i] = $scope.addOfferLists[i].offer;
                        $scope.addOfferLists[i]["related-priceplan"] = true;
                    }
                    // ========================================================================

                    // ยกเลิก convert date เป็น th 20161108
                    if ($scope.addOfferLists[i]["sale-period"] && $scope.addOfferLists[i]["sale-period"].start) {
                        $scope.addOfferLists[i]["sale-period"].start = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["sale-period"].start, "dd/MM/yyyy");
                    }

                    if ($scope.addOfferLists[i]["sale-period"] && $scope.addOfferLists[i]["sale-period"].end) {
                        $scope.addOfferLists[i]["sale-period"].end = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["sale-period"].end, "dd/MM/yyyy");
                    }
                    //===================================================================//
                }
                if ($scope.addOfferType.value == 'RELATED' && $scope.existingOffer && $scope.addOfferLists) {
                    for (var i = 0; i < $scope.existingOffer.length; i++) {
                        for (var j = 0; j < $scope.addOfferLists.length; j++) {
                            if ($scope.existingOffer[i]["product-name"] == $scope.addOfferLists[j].name) {
                                $scope.addOfferLists.splice(j, 1);
                            }
                        }
                    }
                }
                $scope.addOfferLists = $filter('orderBy')($scope.addOfferLists, 'name', false);
                addOfferLists = $scope.addOfferLists;
                // console.log($scope.addOfferLists);

                if ($scope.addOfferType.value == "CUG") {
                    $scope.ischkCugValue = false;
                    // $scope.getCUGLists();
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
        SystemService.showLoading();
        $scope.currentOfferParam = "";
        $scope.selectedNewOffer = item.name;
        $scope.newOffer = item;
        console.log($scope.newOffer);
        $scope.getCurrentOffer();
        console.log($scope.currentOfferParam);

        AddDeleteEditOfferService.validateOffer($scope.selectedNewOffer, $scope.currentOfferParam, $scope.data.priceplan['account-category'], function(result) {
            $scope.validateOfferResult = result;
            SystemService.hideLoading();
            console.log($scope.validateOfferResult.data);

            var msg = utils.getObject(result.data, 'display-messages');
            if (msg && msg.length > 0) {
                SystemService.showAlert({
                    "message": msg[0]["message"],
                    "message-code": msg[0]["message-code"],
                    "message-type": "WARNING",
                    "en-message": msg[0]["en-message"],
                    "th-message": msg[0]["th-message"],
                    "technical-message": msg[0]["technical-message"]
                });
                return;
            }


            if (!$scope.validateOfferResult.data.fault) {
                $scope.newOffer.param = {};
                $scope.newOffer.param['effective-date-type'] = $scope.offerEffectiveDate;
                if ($scope.newOffer.param['effective-date-type'] == "immediate") {
                    $scope.newOffer.param['effective-date-value'] = "";
                } else {
                    $scope.newOffer.param['effective-date-value'] = $('#addNewOfferEffectiveDate').val();
                }
                $scope.newOffer.param['expiration-date-type'] = $scope.offerExpirationDate;
                $scope.newOffer.param['expiration-date-value'] = $('#addNewOfferExpirationDate').val();

                if ($scope.newOffer.group == "FF") {
                    for (var i = 0; i <= $scope.ffData.max; i++) {
                        if ($scope.saveParamData["ff" + i]) {
                            if (!$scope.ffNumber) {
                                $scope.ffNumber = $scope.saveParamData["ff" + i];
                            } else {
                                $scope.ffNumber += "," + $scope.saveParamData["ff" + i];
                            }
                        }
                    }
                    $scope.newOffer.param['ff-number'] = $scope.ffNumber;
                }

                if ($scope.newOffer.group == "CUG") {
                    $scope.newOffer.param['cug-group-id'] = $scope.cugParam['group-id'];
                    $scope.newOffer.param['cug-group-name'] = $scope.cugParam['group-name'];
                }

                if ($scope.newOffer.group == "CONTRACT_PROPO") {
                    $scope.newOffer.param['contract-number'] = $scope.cpContractNumber;
                    $scope.newOffer.param['start-date'] = $scope.cpStartDate;
                    $scope.newOffer.param['expiration-date'] = $scope.cpExpireDate;
                    $scope.newOffer.param['remark'] = $scope.cpRemark;
                    $scope.newOffer.param['fee'] = $scope.cpFee;
                    $scope.newOffer.param['term'] = $scope.cpTerm;
                }

                if ($scope.newOffer.group == "POOLING") {
                    $scope.newOffer.param['parent-pooled'] = $scope.pooledParam;
                }

                if ($scope.newOffer.group == "DISCOUNT") {
                    $scope.newOffer.properties.firstDiscountBill = $scope.firstDiscountBill;
                }

                $scope.newOffer.guID = SystemService.guid();
                $scope.addNewOfferList($scope.newOffer);
                if ($scope.relateOfferRequireParam) {
                    SystemService.showAlert({
                        "message": "",
                        "message-code": "",
                        "message-type": "WARNING",
                        "en-message": "Please Specify Parameter From Relate Offer " + $scope.relateOfferRequireParam,
                        "th-message": "กรุณาระบุ Parameter ของ Relate Offer " + $scope.relateOfferRequireParam,
                        "technical-message": "FROM WEBUI"
                    })
                }
            } else {
                SystemService.showAlert($scope.validateOfferResult.data['display-messages'][0]);
            }
        });

    };

    $scope.onEffectiveChange = function() {
        if ($scope.offerEffectiveDate == "immediate") {
            $scope.addNewOfferEffectiveDate = "";
            $('#addNewOfferEffectiveDate').val($scope.addNewOfferEffectiveDate);
            $scope.checkFirstDiscountBill($scope.data.customerProfile["customer-properties"]["BILL-CYCLE"], "");
            $scope.setEndDateValue($scope.setDateNow);
        }

        $scope.chkValueAddNewOffer();
    };

    $scope.onEffectiveChangeForEdit = function() {
        if ($scope.dataForEdit['param']['effective-date-type'] == "immediate") {
            $scope.dataForEdit['param']['effective-date-value'] = "";
            $('#editNewOfferEffectiveDate').val($scope.dataForEdit['param']['effective-date-value']);
        }

        $scope.chkValueAddNewOffer("edit");
    };

    $scope.onExpirationChange = function() {
        if ($scope.offerExpirationDate == "unlimited") {
            $scope.addNewOfferExpirationDate = "";
            $('#addNewOfferExpirationDate').val($scope.addNewOfferExpirationDate);
        }

        $scope.chkValueAddNewOffer();
    };

    $scope.onExpirationChangeForEdit = function() {
        if ($scope.dataForEdit['param']['expiration-date-type'] == "unlimited") {
            $scope.dataForEdit['param']['expiration-date-value'] = "";
            $('#editNewOfferExpirationDate').val($scope.dataForEdit['param']['expiration-date-value']);
        }

        $scope.chkValueAddNewOffer('edit');
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

    $scope.onCheckFFForEdit = function(item, index) {
        if (item && item.length < 3) {
            $scope.paramForEdit['param-detail'][0]['value'][index] = "";
            $scope.modelChange = false;
        } else {
            $scope.paramForEdit['param-detail'][0]['value'][index] = item;
        }
    };

    $scope.ffNumber = "";
    $scope.chkValueforFF = false;
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
            // $scope.disableSubmitAddOffer = false;
            $scope.chkValueforFF = true;
            $scope.chkValueAddNewOffer();
        } else {
            // $scope.disableSubmitAddOffer = true;
            $scope.chkValueforFF = false;
            $scope.chkValueAddNewOffer();
        }
    };

    var cugList = [];
    $scope.getCUGLists = function() {
        $scope.searchCug = "";
        $scope.cugParam = {};
        $scope.currentPage_cug = 1;
        // SystemService.showLoading();
        ChangePricePlanService.getCUGList(function(result) {
            // SystemService.hideLoading();
            $scope.cugList = result.data["cug-list"];
            cugList = result.data["cug-list"];
            console.log($scope.cugList);
            $scope.getExistingOffer();
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
        $scope.ischkCugValue = true;
    };

    $scope.chkValueforCp = false;
    $scope.validateAddCp = function(action) {
        $scope.cpDiffResultForEdit = $scope.checkValueCpDate($('#editCpStartDate').val(), $('#editCpExpirationDate').val());
        $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
        if ($scope.cpDiffResult < 0) {
            $('#cpExpireDate').val('');
            $scope.cpExpireDate = "";

        }
        if (action == "edit") {
            if ($scope.dataForEdit.param['contract-number'] && $scope.dataForEdit.param['start-date'] && $scope.dataForEdit.param['expiration-date'] && $scope.dataForEdit.param['remark'] && $scope.dataForEdit.param['remark'] != " " && $scope.cpDiffResultForEdit >= 0) {
                $scope.disableSubmitAddOffer = false;
                $scope.chkValueforCp = true;
            } else {
                $scope.disableSubmitAddOffer = true;
                $scope.chkValueforCp = false;
            }
        } else {
            if ($scope.cpContractNumber && $scope.cpStartDate && $scope.cpExpireDate && $scope.cpRemark && $scope.cpRemark != " " && $scope.cpDiffResult >= 0) {
                $scope.disableSubmitAddOffer = false;
                $scope.chkValueforCp = true;
            } else {
                $scope.disableSubmitAddOffer = true;
                $scope.chkValueforCp = false;
            }
        }

    }

    $scope.clearAddNewOfferDate = function() {
        $scope.offerEffectiveDate = "immediate";
        $scope.offerExpirationDate = "unlimited";
        $scope.addNewOfferEffectiveDate = "";
        $('#addNewOfferEffectiveDate').val($scope.addNewOfferEffectiveDate);
        $scope.addNewOfferExpirationDate = "";
        $('#addNewOfferExpirationDate').val($scope.addNewOfferExpirationDate);
        $('#addNewOfferExpirationDate2').val($scope.addNewOfferExpirationDate);
    };

    $scope.checkValueCpDate = function(dateValue1, dateValue2) {
        if (dateValue1.length == 10 && dateValue2.length == 10) {
            var date1 = dateValue1.split("/");
            var date2 = dateValue2.split("/");
            var a = moment([(Number(date2[2])), date2[1], date2[0]]);
            var b = moment([(Number(date1[2])), date1[1], date1[0]]);
            console.log(a.diff(b, 'days'));
            var diffResult = a.diff(b, 'days');
            return diffResult;
        }
    };

    // For Add New CP Offer
    $(document).ready(function() {
        $("#cpStartDate").change(function() {
            $scope.cpStartDate = $('#cpStartDate').val();
            $scope.cpExpireDate = $('#cpExpireDate').val();
            $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
            $('#cpExpireDate').datepicker("setStartDate", $("#cpStartDate").val());
            if ($scope.cpTerm == 0) {
                $scope.cpExpireDate = $scope.cpStartDate;
                $('#cpExpireDate').val($scope.cpExpireDate);
                var dateToSet = $scope.cpExpireDate.split("/");
                $('#cpExpireDate').datepicker("setDate", new Date(dateToSet[2], Number(dateToSet[1]) - 1, Number(dateToSet[0])));
            } else {
                var currentDate = new Date(SystemService.convertDataMMDDYYYYEN($scope.cpStartDate));
                currentDate.setMonth(currentDate.getMonth() + Number($scope.cpTerm));
                var setDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + Number(currentDate.getMonth() + 1)).slice(-2) + "/" + currentDate.getFullYear();
                $('#cpExpireDate').datepicker("setDate", new Date(currentDate.getFullYear(), ("0" + Number(currentDate.getMonth() + 0)).slice(-2), ("0" + currentDate.getDate()).slice(-2)));
                $('#cpExpireDate').val(setDate);
                $scope.cpExpireDate = $('#cpExpireDate').val();
            }
            $scope.validateAddCp();
            $('#idBindDataAgain').click();
        });
        $("#cpStartDate").blur(function() {
            $scope.cpStartDate = $('#cpStartDate').val();
            $scope.cpExpireDate = $('#cpExpireDate').val();
            $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
            $('#cpExpireDate').datepicker("setStartDate", $("#cpStartDate").val());
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
        $("#cpExpireDate").blur(function() {
            $scope.cpStartDate = $('#cpStartDate').val();
            $scope.cpExpireDate = $('#cpExpireDate').val();
            $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
            $scope.validateAddCp();
            $('#idBindDataAgain').click();
        });
    });
    // ======================================
    // For Edit New CP Offer
    $(document).ready(function() {
        $("#editCpStartDate").change(function() {
            $scope.dataForEdit.param['start-date'] = $('#editCpStartDate').val();
            $scope.dataForEdit.param['expiration-date'] = $('#editCpExpirationDate').val();
            $scope.cpDiffResultForEdit = $scope.checkValueCpDate($('#editCpStartDate').val(), $('#editCpExpirationDate').val());
            $('#editCpExpirationDate').datepicker("setStartDate", $("#editCpStartDate").val());
            if ($scope.dataForEdit.param.term == 0) {
                $scope.dataForEdit.param['expiration-date'] = $scope.dataForEdit.param['start-date'];
                $('#editCpExpirationDate').val($scope.dataForEdit.param['expiration-date']);
                var dateToSet = $scope.dataForEdit.param['expiration-date'].split("/");
                $('#editCpExpirationDate').datepicker("setDate", new Date(dateToSet[2], Number(dateToSet[1]) - 1, Number(dateToSet[0])));
            } else {
                var currentDate = new Date(SystemService.convertDataMMDDYYYYEN($scope.dataForEdit.param['start-date']));
                currentDate.setMonth(currentDate.getMonth() + Number($scope.dataForEdit.param.term));
                var setDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + Number(currentDate.getMonth() + 1)).slice(-2) + "/" + currentDate.getFullYear();
                $('#editCpExpirationDate').datepicker("setDate", new Date(currentDate.getFullYear(), ("0" + Number(currentDate.getMonth() + 0)).slice(-2), ("0" + currentDate.getDate()).slice(-2)));
                $('#editCpExpirationDate').val(setDate);
                $scope.dataForEdit.param['expiration-date'] = $('#editCpExpirationDate').val();
            }
            $scope.validateAddCp();
            $('#idBindDataAgain').click();
        });

    });

    $(document).ready(function() {
        $("#editCpExpirationDate").change(function() {
            $scope.dataForEdit.param['start-date'] = $('#editCpStartDate').val();
            $scope.dataForEdit.param['expiration-date'] = $('#editCpExpirationDate').val();
            $scope.cpDiffResultForEdit = $scope.checkValueCpDate($('#editCpStartDate').val(), $('#editCpExpirationDate').val());
            $scope.validateAddCp();
            $('#idBindDataAgain').click();
        });
    });
    // ======================================
    // For Add New Offer
    $(document).ready(function() {
        $("#addNewOfferEffectiveDate").change(function() {
            $scope.addNewOfferEffectiveDate = $('#addNewOfferEffectiveDate').val();
            $('#addNewOfferExpirationDate').datepicker('setStartDate', $('#addNewOfferEffectiveDate').val());
            $('#addNewOfferExpirationDate2').datepicker('setStartDate', $('#addNewOfferEffectiveDate').val());
            $scope.chkValueAddNewOffer();
            if ($scope.selectedOffer.group == "DISCOUNT") {
                $scope.checkFirstDiscountBill($scope.data.customerProfile["customer-properties"]["BILL-CYCLE"], $('#addNewOfferEffectiveDate').val());
            }
            $scope.setEndDateValue($scope.firstDiscountBill);
            $('#idBindDataAgain').click();
        });
        $("#addNewOfferEffectiveDate").blur(function() {
            $scope.addNewOfferEffectiveDate = $('#addNewOfferEffectiveDate').val();
            $('#addNewOfferExpirationDate').datepicker('setStartDate', $('#addNewOfferEffectiveDate').val());
            $('#addNewOfferExpirationDate2').datepicker('setStartDate', $('#addNewOfferEffectiveDate').val());
            $scope.chkValueAddNewOffer();
            $('#idBindDataAgain').click();
        });
    });

    $(document).ready(function() {
        $("#addNewOfferExpirationDate").change(function() {
            $scope.addNewOfferExpirationDate = $('#addNewOfferExpirationDate').val();
            $scope.chkValueAddNewOffer();
            $('#idBindDataAgain').click();
        });
        $("#addNewOfferExpirationDate").blur(function() {
            $scope.addNewOfferExpirationDate = $('#addNewOfferExpirationDate').val();
            $scope.chkValueAddNewOffer();
            $('#idBindDataAgain').click();
        });
    });

    $(document).ready(function() {
        $("#addNewOfferExpirationDate2").change(function() {
            $scope.addNewOfferExpirationDate = $('#addNewOfferExpirationDate2').val();
            $scope.chkValueAddNewOffer();
            $('#idBindDataAgain').click();
        });
        $("#addNewOfferExpirationDate2").blur(function() {
            $scope.addNewOfferExpirationDate = $('#addNewOfferExpirationDate2').val();
            $scope.chkValueAddNewOffer();
            $('#idBindDataAgain').click();
        });
    });
    // =====================================
    // For Edit New Offer
    $(document).ready(function() {
        $("#editNewOfferEffectiveDate").change(function() {
            $scope.dataForEdit['param']['effective-date-value'] = $('#editNewOfferEffectiveDate').val();
            if ($scope.dataForEdit['param']['effective-date-value']) {
                $("#editNewOfferExpirationDate").datepicker("setStartDate", $('#editNewOfferEffectiveDate').val());
            } else {
                $("#editNewOfferExpirationDate").datepicker("setStartDate", $scope.setDateTomorrow)
            }
            if ($scope.selectedOffer.group == "DISCOUNT") {
                $scope.checkFirstDiscountBill($scope.data.customerProfile["customer-properties"]["BILL-CYCLE"], $('#editNewOfferEffectiveDate').val(), "editNew");
            }
            $scope.chkValueAddNewOffer("edit");
            $('#idBindDataAgain').click();
        });
        $("#editNewOfferEffectiveDate").blur(function() {
            $scope.dataForEdit['param']['effective-date-value'] = $('#editNewOfferEffectiveDate').val();
            $("#editNewOfferExpirationDate").datepicker("setStartDate", $scope.setDateTomorrow)
            if ($scope.dataForEdit['param']['effective-date-value']) {
                $("#editNewOfferExpirationDate").datepicker("setStartDate", $('#editNewOfferEffectiveDate').val())
            } else {
                $("#editNewOfferExpirationDate").datepicker("setStartDate", $scope.setDateTomorrow)
            }
            $scope.chkValueAddNewOffer("edit");
            $('#idBindDataAgain').click();
        });
    });

    $(document).ready(function() {
        $("#editNewOfferExpirationDate").change(function() {
            $scope.dataForEdit['param']['expiration-date-value'] = $('#editNewOfferExpirationDate').val();
            $scope.chkValueAddNewOffer("edit");
            $('#idBindDataAgain').click();
        });
        $("#editNewOfferExpirationDate").blur(function() {
            $scope.dataForEdit['param']['expiration-date-value'] = $('#editNewOfferExpirationDate').val();
            $scope.chkValueAddNewOffer("edit");
            $('#idBindDataAgain').click();
        });
    });
    // =====================================

    $scope.clearValueAddNewOffer = function() {
        $scope.cpRemark = "";
        $scope.cpContractNumber = "";
    };

    $scope.chkValueAddNewOffer = function(action) {
        if (action == "edit") {
            $scope.difDateForEdit = $scope.checkValueCpDate($('#editNewOfferEffectiveDate').val(), $('#editNewOfferExpirationDate').val());
            // console.log($scope.difDateForEdit);
            if ($scope.difDateForEdit < 0) {
                $('#editNewOfferExpirationDate').val('');
                $scope.dataForEdit['param']['expiration-date-value'] = "";
            }
            switch ($scope.dataForEdit.group) {
                case "CUG":
                    // console.log($scope.cugParam);
                    if ($scope.ischkCugValue == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.ischkCugValue == true && $scope.dataForEdit['param']['effective-date-type'] == "specify" && !$scope.dataForEdit['param']['effective-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.ischkCugValue == true && $scope.dataForEdit['param']['expiration-date-type'] == "specify" && !$scope.dataForEdit['param']['expiration-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "CONTRACT_PROPO":
                    if ($scope.chkValueforCp == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforCp == true && $scope.dataForEdit['param']['effective-date-type'] == "specify" && !$scope.dataForEdit['param']['effective-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforCp == true && $scope.dataForEdit['param']['expiration-date-type'] == "specify" && !$scope.dataForEdit['param']['expiration-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "DISCOUNT":
                case "FUP":
                case "BARRING":
                    if ($scope.dataForEdit['param']['effective-date-type'] == "specify" && !$scope.dataForEdit['param']['effective-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.dataForEdit['param']['expiration-date-type'] == "specify" && !$scope.dataForEdit['param']['expiration-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "FF":
                    if ($scope.chkValueforFF == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforFF == true && $scope.dataForEdit['param']['effective-date-type'] == "specify" && !$scope.dataForEdit['param']['effective-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforFF == true && $scope.dataForEdit['param']['expiration-date-type'] == "specify" && !$scope.dataForEdit['param']['expiration-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "RELATED":
                    if ($scope.dataForEdit['param']['effective-date-type'] == "specify" && !$scope.dataForEdit['param']['effective-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.dataForEdit['param']['expiration-date-type'] == "specify" && !$scope.dataForEdit['param']['expiration-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "ADDITIONAL":
                case "CAP_MAX":
                case "POOLING":
                    if ($scope.chkValueforAD == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforAD == true && $scope.dataForEdit['param']['effective-date-type'] == "specify" && !$scope.dataForEdit['param']['effective-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforAD == true && $scope.dataForEdit['param']['expiration-date-type'] == "specify" && !$scope.dataForEdit['param']['expiration-date-value']) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
            }
        } else {
            $scope.difDateForAdd = $scope.checkValueCpDate($('#addNewOfferEffectiveDate').val(), $('#addNewOfferExpirationDate').val());
            // console.log($scope.difDateForAdd);
            if ($scope.difDateForAdd < 0) {
                $('#addNewOfferExpirationDate').val('');
                $('#addNewOfferExpirationDate2').val('');
                $scope.addNewOfferExpirationDate = "";
            }
            switch ($scope.selectedOffer.group) {
                case "CUG":
                    // console.log($scope.cugParam);
                    if ($scope.ischkCugValue == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.ischkCugValue == true && ($scope.offerEffectiveDate == "specify" && !$scope.addNewOfferEffectiveDate)) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.ischkCugValue == true && ($scope.offerExpirationDate == "specify" && !$scope.addNewOfferExpirationDate)) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "CONTRACT_PROPO":
                    if ($scope.chkValueforCp == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforCp == true && $scope.offerEffectiveDate == "specify" && !$scope.addNewOfferEffectiveDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforCp == true && $scope.offerExpirationDate == "specify" && !$scope.addNewOfferExpirationDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "DISCOUNT":
                case "FUP":
                case "BARRING":
                    if ($scope.offerEffectiveDate == "specify" && !$scope.addNewOfferEffectiveDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.offerExpirationDate == "specify" && !$scope.addNewOfferExpirationDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "FF":
                    if ($scope.chkValueforFF == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforFF == true && $scope.offerEffectiveDate == "specify" && !$scope.addNewOfferEffectiveDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforFF == true && $scope.offerExpirationDate == "specify" && !$scope.addNewOfferExpirationDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "RELATED":
                    if ($scope.offerEffectiveDate == "specify" && !$scope.addNewOfferEffectiveDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.offerExpirationDate == "specify" && !$scope.addNewOfferExpirationDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
                case "ADDITIONAL":
                case "CAP_MAX":
                case "POOLING":
                    if ($scope.chkValueforAD == false) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforAD == true && $scope.offerEffectiveDate == "specify" && !$scope.addNewOfferEffectiveDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else if ($scope.chkValueforAD == true && $scope.offerExpirationDate == "specify" && !$scope.addNewOfferExpirationDate) {
                        $scope.disableSubmitAddOffer = true;
                    } else {
                        $scope.disableSubmitAddOffer = false;
                    }
                    break;
            }
        }
    };
    $scope.chkValueforAD == false;
    $scope.validateAddAD = function(action) {
        if (action == "edit") {
            if ($scope.dataForEdit['parameter-specifications']) {
                var countADValue = 0;
                for (var i = 0; i < $scope.dataForEdit['parameter-specifications'].length; i++) {
                    if ($scope.dataForEdit['parameter-specifications'][i]['select-value']) {
                        countADValue++;
                    };
                };
                if (countADValue === $scope.dataForEdit['parameter-specifications'].length) {
                    $scope.chkValueforAD = true;
                    $scope.disableSubmitAddOffer = false;
                } else {
                    $scope.chkValueforAD = false;
                    $scope.disableSubmitAddOffer = true;
                }
            } else {
                $scope.chkValueforAD = true;
                $scope.disableSubmitAddOffer = false;
            }
        } else {
            if ($scope.selectedOffer['parameter-specifications']) {
                var countADValue = 0;
                for (var i = 0; i < $scope.selectedOffer['parameter-specifications'].length; i++) {
                    if ($scope.selectedOffer['parameter-specifications'][i]['select-value']) {
                        countADValue++;
                    };
                };
                if (countADValue === $scope.selectedOffer['parameter-specifications'].length) {
                    $scope.chkValueforAD = true;
                    $scope.disableSubmitAddOffer = false;
                } else {
                    $scope.chkValueforAD = false;
                    $scope.disableSubmitAddOffer = true;
                }
            } else {
                $scope.chkValueforAD = true;
                $scope.disableSubmitAddOffer = false;
            }
        }
    };

    $scope.editNewOffer = function() {
        $scope.ffNumberEdit = "";
        switch ($scope.dataForEdit.group) {
            case "CUG":
                $scope.dataForEdit.param['cug-group-id'] = $scope.cugParamForEdit['group-id'];
                $scope.dataForEdit.param['cug-group-name'] = $scope.cugParamForEdit['group-name'];
                break;
            case "FF":
                if ($scope.dataForEdit.group == "FF") {
                    for (var i = 0; i <= $scope.ffData.max; i++) {
                        if ($scope.saveParamData["ff" + i]) {
                            if (!$scope.ffNumberEdit) {
                                $scope.ffNumberEdit = $scope.saveParamData["ff" + i];
                            } else {
                                $scope.ffNumberEdit += "|" + $scope.saveParamData["ff" + i];
                            }
                        }
                    }
                    $scope.dataForEdit.param['ff-number'] = $scope.ffNumberEdit;
                }
                break;
            case "CONTRACT_PROPO":
                break;
        }

        $scope.editValue = $scope.dataForEdit;
        // $scope.dataForEdit['parameter-specifications'][i]['select-value'] = $scope.dataForEdit['parameter-specifications'][i]['default-value'];
        console.log($scope.editValue);
        if ($scope.dataForEdit.type == "editRelate") {
            for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
                if ($scope.editValue.guID == $scope.addNewOfferLists[i].guID) {
                    for (var j = 0; j < $scope.addNewOfferLists[i]["related-offers"].length; j++) {
                        if ($scope.addNewOfferLists[i]["related-offers"][j]["offer"]["soc"] == $scope.editValue["soc"]) {
                            $scope.addNewOfferLists[i]["related-offers"][j]["offer"] = $scope.editValue;
                        }
                    }

                }
            }
        } else {
            for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
                if ($scope.editValue.guID == $scope.addNewOfferLists[i].guID) {
                    $scope.addNewOfferLists[i] = $scope.editValue;
                }
            }
        }

        $scope.cugParamForEdit = {};
        console.log($scope.addNewOfferLists);
    };

    $scope.editDetail = function(item, relate, action) {
        $scope.dataForEdit = [];
        $scope.editParam = false;
        if (action == 'editRelate') {
            $scope.dataForEdit = angular.copy(relate.offer);
            $scope.dataForEdit.guID = item.guID;
            $scope.dataForEdit.param = item.param;
            $scope.dataForEdit.type = action;
        } else {
            $scope.dataForEdit = angular.copy(item);
        }

        $scope.editValue = {};
        console.log($scope.dataForEdit);
        $scope.editOfferCode = $scope.dataForEdit.name;
        $scope.editOfferDesc = $scope.dataForEdit.description;
        $scope.editOfferGroup = $scope.dataForEdit.group;
        $scope.onEffectiveChangeForEdit();
        setTimeout(function() {
            $('#editNewOfferEffectiveDate').val($scope.dataForEdit['param']['effective-date-value']);
            $('#editNewOfferEffectiveDate').datepicker("setDate", $scope.dataForEdit['param']['effective-date-value']);
            // $('#editNewOfferExpirationDate').datepicker("setDate", $scope.dataForEdit['param']['expiration-date-value']);
        }, 50);

        switch ($scope.dataForEdit.group) {
            case "CUG":
                $scope.searchCugForEdit = $scope.dataForEdit.param['cug-group-id'];
                $scope.editCugParam = $scope.dataForEdit.param['cug-group-id'];
                $scope.smartSearchCug($scope.searchCugForEdit);
                break;

            case "FF":
                $scope.ffData.max = $scope.dataForEdit.properties.FF_NUMBER;
                $scope.ffData.min = $scope.dataForEdit['parameter-specifications'][0].min;
                var arrFF = $scope.dataForEdit['param']['ff-number'].split('|');
                for (var i = 0; i < arrFF.length; i++) {
                    $scope.saveParamData['ff' + Number(i + 1)] = arrFF[i];
                    console.log($scope.saveParamData[i]);
                }
                break;

            case "CONTRACT_PROPO":

                var setDatepicker = $scope.dataForEdit.param['expiration-date'].split("/");
                console.log(setDatepicker);
                // $('#editCpExpirationDate').datepicker("setDate", new Date(Number(setDatepicker[2]) - 543,Number(setDatepicker[1]) - 1, Number(setDatepicker[0])) );
                break;
        }
    };

    $scope.setDatepickerValue = function() {
        var setDatepicker = $scope.dataForEdit.param['expiration-date'].split("/");
        setTimeout(function() {
            $('#editCpExpirationDate').datepicker("setDate", new Date(Number(setDatepicker[2]) - 543, Number(setDatepicker[1]) - 1, Number(setDatepicker[0])));
        }, 100);
    };

    $scope.onEditCUGParam = function(item) {
        $scope.cugParamForEdit = {
            "group-id": item['group-id'],
            "group-name": item['group-name']
        };
        $scope.disableSubmitAddOffer = false;
        $scope.ischkCugValue = true;
    };

    $scope.ischkCugValue = false;
    $scope.chkCugValue = function(action) {
        if (action == "edit") {
            if ($scope.cugParamForEdit) {
                $scope.ischkCugValue = true;
            } else {
                $scope.ischkCugValue = false;
            }
        }
        // else {
        //     if ($scope.dataForEdit.param['cug-group-id']) {
        //         $scope.disableSubmitAddOffer = false;
        //     } else {
        //         $scope.disableSubmitAddOffer = true;
        //     }
        // }
    }

    $scope.editExpType = "UNLIMITED";
    $scope.checkEditExp = false;
    $scope.checkEditParam = false;
    $scope.existingParameter = [];
    $scope.existingParameterTemp = [];
    $scope.getExistingOfferParam = function() {
        // SystemService.showLoading();
        var param = "level=SUBSCRIBER&key-value=" + $scope.SubNo + "&key-id=" + $scope.data.simData["subscriber-id"] + "&account-id=" + $scope.data.simData.ban;
        console.log(param);
        AddDeleteEditOfferService.getExistingParameter(param, function(result) {
            var existingParamData = utils.getObject(result.data['response-data'], 'customer');
            if (existingParamData) {
                // console.log(result);
                for (var i = 0; i < result.data["response-data"]["customer"]["installed-products"].length; i++) {
                    if (result.data["response-data"]["customer"]["installed-products"]["expire-date"]) {
                        result.data["response-data"]["customer"]["installed-products"]["expire-date-option"] = "UNLIMITED";
                    } else {
                        result.data["response-data"]["customer"]["installed-products"]["expire-date-option"] = "FUTURE";
                    }

                    result.data["response-data"]["customer"]["installed-products"][i]["OFFER_INSTANCE_ID"] = result.data["response-data"]["customer"]["installed-products"][i]["product-properties"]["OFFER-INSTANCE-ID"]
                }
                $scope.existingParameter = angular.copy(result.data["response-data"]["customer"]["installed-products"]);
                console.log($scope.existingParameter);
                for (var i = 0; i < $scope.existingParameter.length; i++) {
                    $scope.existingParameter[i]["product-properties"]["param-detail"] = [];
                    var size = parseInt($scope.existingParameter[i]["product-properties"]["PARAM-SIZE"]);
                    for (var j = 0; j < size; j++) {
                        var arrParam = $scope.existingParameter[i]["product-properties"]["PARAM-" + j].split("|");
                        if (arrParam[1] == "TR_ACTUAL_CONTRACT_START_DATE" || arrParam[1] == "TR_ORIG_CONTRACT_EXPIRE_DATE") {
                            var dateParam = arrParam[2].split(" ");
                            dateParam[0] = dateParam[0];
                            $scope.existingParameter[i]["product-properties"]["param-detail"].push({
                                "name": arrParam[1],
                                "value": dateParam[0]
                            });
                        } else {
                            $scope.existingParameter[i]["product-properties"]["param-detail"].push({
                                "name": arrParam[1],
                                "value": arrParam[2]
                            });
                        }
                    }
                    if ($scope.existingParameter[i]["product-properties"]["param-detail"][0]["name"] == "Friend numbers offer level") {
                        $scope.existingParameter[i]["product-properties"]["param-detail"][0]["value"] = $scope.existingParameter[i]["product-properties"]["param-detail"][0]["value"].split(",");
                    } else if ($scope.existingParameter[i]["product-properties"]["param-detail"][0]["name"] == "CUG ID") {
                        $scope.existingParameter[i]["product-properties"]["param-detail"][0]["cugSelectValue"] = "";
                        $scope.existingParameter[i]["product-properties"]["param-detail"][0]["cugValue"] = $scope.existingParameter[i]["product-properties"]["param-detail"][0]["value"] + " : ";
                        for (var cugNo = 0; cugNo < $scope.cugList.length; cugNo++) {
                            if ($scope.cugList[cugNo]["group-id"] == $scope.existingParameter[i]["product-properties"]["param-detail"][0]["value"]) {
                                $scope.existingParameter[i]["product-properties"]["param-detail"][0]["cugValue"] = $scope.existingParameter[i]["product-properties"]["param-detail"][0]["value"] + " : " + $scope.cugList[cugNo]["group-name"];
                                $scope.existingParameter[i]["product-properties"]["param-detail"][0]["cugSelectValue"] = "";
                            }
                        }
                    };
                }
                $scope.existingParameterTemp = angular.copy($scope.existingParameter);
            } else {
                $scope.existingParameter = [];
                $scope.existingParameterTemp = [];
            }
            console.log($scope.existingParameter);
            // SystemService.hideLoading();
            $scope.callGetFutureOffer();
        });
    };

    $scope.callGetFutureOffer = function() {
        // SystemService.showLoading();
        var param = "level=SUBSCRIBER&key-value=" + $scope.SubNo + "&key-id=" + $scope.data.simData["subscriber-id"] + "&future-order-type=OFFER";
        AddDeleteEditOfferService.getFutureOffer(param, function(result) {
            var futureOfferData = utils.getObject(result.data['response-data'], 'customer');
            if (futureOfferData) {
                $scope.futureOfferList = angular.copy(result.data["response-data"]["customer"]["installed-products"]);
                console.log($scope.futureOfferList);
                // ยกเลิก convert date เป็น th 20161108
                // for (var i = 0; i < $scope.futureOfferList.length; i++) {
                //     $scope.futureOfferList[i]["effective-date"] = SystemService.convertDateToTH($scope.futureOfferList[i]["effective-date"], "TH")
                //     $scope.futureOfferList[i]["product-properties"]["CREATE-DATE"] = SystemService.convertDateToTH($scope.futureOfferList[i]["product-properties"]["CREATE-DATE"], "TH")
                // }
                //===================================================================//
                for (var i = 0; i < $scope.futureOfferList.length; i++) {
                    $scope.futureOfferList[i]["name"] = $scope.futureOfferList[i]["product-name"];
                    $scope.futureOfferList[i]["selected"] = false;
                    $scope.futureOfferList[i]["edited"] = false;
                    $scope.futureOfferList[i]["guID"] = SystemService.guid();
                }
                $scope.tempFutureOfferList = angular.copy($scope.futureOfferList);
            } else {
                $scope.futureOfferList = [];
                $scope.tempFutureOfferList = [];
            }
            // SystemService.hideLoading();
            $scope.validateModifyOffer();
            $scope.initModalReadCard();
        });
    };

    $scope.disableSubmitEditFutureOffer = true;
    $scope.futureOfferDetail = [];
    $scope.editFutureOffer = function(item) {
        $scope.futureOfferDetail = angular.copy(item);
        setTimeout(function() {
            $('#editFutureOfferEffectiveDate').val($scope.futureOfferDetail['effective-date']);
            $('#editFutureOfferEffectiveDate').datepicker("setDate", $scope.futureOfferDetail['effective-date']);
        }, 100);

        console.log($scope.futureOfferDetail);
    };

    $scope.onCancelEditFutureOffer = function() {
        for (var i = 0; i < $scope.futureOfferList.length; i++) {
            if ($scope.futureOfferList[i].guID == $scope.futureOfferDetail.guID && ($scope.futureOfferDetail["effective-date"] && $scope.futureOfferList[i]["effective-date"]) == $scope.tempFutureOfferList[i]["effective-date"]) {
                $scope.futureOfferList[i].selected = false;
            }
        }

        $scope.futureOfferDetail = [];
        setTimeout(function() {
            $('#editFutureOfferEffectiveDate').val("");
            $('#editFutureOfferEffectiveDate').datepicker("setDate", "");
        }, 100);
    };

    $scope.confirmEditFutureOffer = function() {
        for (var i = 0; i < $scope.futureOfferList.length; i++) {
            if ($scope.futureOfferList[i]["product-name"] === $scope.futureOfferDetail["product-name"] && ($scope.futureOfferDetail["effective-date"] != $scope.tempFutureOfferList[i]["effective-date"])) {
                $scope.futureOfferList[i]["effective-date"] = $scope.futureOfferDetail["effective-date"];
                $scope.futureOfferList[i]["edited"] = true;
                $scope.futureOfferList[i]["selected"] = true;

            } else if ($scope.futureOfferList[i]["product-name"] === $scope.futureOfferDetail["product-name"] && ($scope.futureOfferDetail["effective-date"] == $scope.tempFutureOfferList[i]["effective-date"])) {
                $scope.futureOfferList[i]["edited"] = false;
                $scope.futureOfferList[i]["selected"] = false;
            }
        }
        console.log($scope.futureOfferList);
        $scope.futureOfferDetail = [];
        setTimeout(function() {
            $('#editFutureOfferEffectiveDate').val("");
            $('#editFutureOfferEffectiveDate').datepicker("setDate", "");
        }, 100);
        $scope.validateEditUI();
    };

    $scope.chkFutureOfferEffDate = function() {
        if ($scope.futureOfferDetail['effective-date'] == "" || $("#editFutureOfferEffectiveDate").val() == "") {
            $scope.disableSubmitEditFutureOffer = true;
        } else {
            $scope.disableSubmitEditFutureOffer = false;
        }
        $('#idBindDataAgain').click();
    };

    $(document).ready(function() {
        $("#editFutureOfferEffectiveDate").change(function() {
            $scope.futureOfferDetail['effective-date'] = $('#editFutureOfferEffectiveDate').val();
            $('#idBindDataAgain').click();
            $scope.chkFutureOfferEffDate();
        });
        $("#editFutureOfferEffectiveDate").blur(function() {
            $scope.futureOfferDetail['effective-date'] = $('#editFutureOfferEffectiveDate').val();
            $('#idBindDataAgain').click();
            $scope.chkFutureOfferEffDate();
        });
    });

    $(document).ready(function() {
        $("#editOfferExpirationDate").change(function() {
            $scope.paramForEdit['expiration-date'] = $('#editOfferExpirationDate').val();
            $scope.viewOfferForEdit['expiration-date'] = $('#editOfferExpirationDate').val();
            $scope.onModelChange();
            setTimeout(function() {
                $('#idBindDataAgain').click();
            }, 50);
        });
        $("#editOfferExpirationDate").blur(function() {
            $scope.paramForEdit['expiration-date'] = $('#editOfferExpirationDate').val();
            $scope.viewOfferForEdit['expiration-date'] = $('#editOfferExpirationDate').val();
            $('#idBindDataAgain').click();
        });
    });

    $scope.setDefaultExistingOffer = function() {
        $scope.builtInOffer = [];
        $scope.regularOffer = [];
        $scope.propoOffer = [];
        $scope.discountOffer = [];
        $scope.pooledOffer = [];

        $scope.builtInOffer = $filter('filter')($scope.existingOffer, { 'product-type': 'PRICEPLAN-BUILT-IN' });
        $scope.regularOffer = $filter('filter')($scope.existingOffer, { 'product-type': 'ADDITIONAL-OFFER' });
        $scope.propoOffer = $filter('filter')($scope.existingOffer, { 'product-type': 'PROPOSITION' });
        $scope.discountOffer = $filter('filter')($scope.existingOffer, { 'product-type': 'DISCOUNT' });
        $scope.pooledOffer = $filter('filter')($scope.existingOffer, { 'offer-group': 'POOLED' });
    };

    $scope.listNewOffer = function() {
        var newOffer = "";
        var effectiveDate = "";
        var effectiveDates = "";
        if ($scope.addNewOfferLists.length > 0) {
            effectiveDate = $scope.addNewOfferLists[0]['param']['effective-date-value'] ? $scope.addNewOfferLists[0]['param']['effective-date-value'] : $scope.setDateNow;
            newOffer = $scope.addNewOfferLists[0]["name"] + ":" + $scope.addNewOfferLists[0]["description"] + "  มีผลเมื่อ " + effectiveDate;
            for (var i = 1; i < $scope.addNewOfferLists.length; i++) {
                effectiveDates = $scope.addNewOfferLists[i]['param']['effective-date-value'] ? $scope.addNewOfferLists[i]['param']['effective-date-value'] : $scope.setDateNow;
                newOffer += ",\n" + $scope.addNewOfferLists[i]["name"] + ":" + $scope.addNewOfferLists[i]["description"] + "  มีผลเมื่อ " + effectiveDates;
            }
        }
        // console.log(newOffer);
        return newOffer;
    };

    $scope.setEndDateValue = function(date) {
        if ($scope.selectedOffer.group == "DISCOUNT") {
            if ($scope.selectedOffer.properties["MAX_DURATION"]) {
                var expiredateDiscount = new Date(SystemService.convertDataMMDDYYYYEN(date));
                expiredateDiscount.setMonth(expiredateDiscount.getMonth() + parseInt($scope.selectedOffer.properties.MAX_DURATION));
                $("#addNewOfferExpirationDate").datepicker("setEndDate", expiredateDiscount);
                $("#addNewOfferExpirationDate2").datepicker("setEndDate", expiredateDiscount);
            } else {
                var expiredateDiscount = new Date(SystemService.convertDataMMDDYYYYEN(date));
                expiredateDiscount.setMonth(expiredateDiscount.getMonth() + 24);
                $("#addNewOfferExpirationDate").datepicker("setEndDate", expiredateDiscount);
                $("#addNewOfferExpirationDate2").datepicker("setEndDate", expiredateDiscount);
            }

            if ($scope.selectedOffer.properties["DURATION_UNIT"] == "MONTH") {
                var disDateParam = new Date(SystemService.convertDataMMDDYYYYEN(date));
                disDateParam.setMonth(disDateParam.getMonth() + (Number($scope.selectedOffer.properties["DURATION"]) - 1));
                // $("#addNewOfferExpirationDate").datepicker("setDate", param);
                $("#addNewOfferExpirationDate2").datepicker("setDate", disDateParam);
            } else if ($scope.selectedOffer.properties["DURATION_UNIT"] == "DATE") {
                var disDateParam = new Date(SystemService.convertDataMMDDYYYYEN(date));
                disDateParam.setDate(disDateParam.getDate() + parseInt($scope.selectedOffer.properties["DURATION"]));
                // $("#addNewOfferExpirationDate").datepicker("setDate", param);
                $("#addNewOfferExpirationDate2").datepicker("setDate", disDateParam);
            }

        }
    };

    $scope.checkAuthorize = function() {
        setTimeout(function() {
            if (($scope.offerType == "U" && $scope.data.simData["account-category"] == "I") || ($scope.offerType == "D" && $scope.data.simData["account-category"] == "I")) {
                //hide มอบอำนาจ
                $('#divShowAuthorize').hide();
                $('#authorize').prop('checked', false);
                $scope.isAuthorize = false;
                $('#divShowAuthorizeID').hide();
            } else {
                //show มอบอำนาจ
                $('#divShowAuthorize').show();
            }
        }, 50);
    };

    $scope.selectedRelateOffer = [];
    $scope.onSelectRelateOffer = function(relatedOffer) {
        $scope.onClearRelateOfferValue();
        $scope.selectedRelateOffer = relatedOffer;
        console.log($scope.selectedRelateOffer);
    };

    $scope.select = function(selectID) {
        $('.idActive').removeClass("success");
        $('#' + selectID).addClass("success");
    }

    $scope.onClearRelateOfferValue = function() {
        $('.idActive').removeClass("success");
        $scope.selectedRelateOffer = [];
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 50);
    };

    $scope.getCurrentOffer = function() {
        $scope.currentOfferParam = "";
        if ($scope.existingOffer.length > 0) {
            $scope.currentOfferParam = $scope.existingOffer[0]['product-name'];
            for (var i = 1; i < $scope.existingOffer.length; i++) {
                $scope.currentOfferParam += "|" + $scope.existingOffer[i]['product-name'];
            };
        };
        if ($scope.futureOfferList.length > 0) {
            if ($scope.currentOfferParam == "") {
                $scope.currentOfferParam = $scope.futureOfferList[0]['product-name'];
                for (var i = 1; i < $scope.futureOfferList.length; i++) {
                    $scope.currentOfferParam += "|" + $scope.futureOfferList[i]['product-name'];
                };
            } else {
                for (var i = 0; i < $scope.futureOfferList.length; i++) {
                    $scope.currentOfferParam += "|" + $scope.futureOfferList[i]['product-name'];
                }
            }
        };
        if ($scope.addNewOfferLists.length > 0) {
            if ($scope.currentOfferParam == "") {
                $scope.currentOfferParam = $scope.addNewOfferLists[0]['name'];
                for (var i = 1; i < $scope.addNewOfferLists.length; i++) {
                    $scope.currentOfferParam += "|" + $scope.addNewOfferLists[i]['name'];
                };
            } else {
                for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
                    $scope.currentOfferParam += "|" + $scope.addNewOfferLists[i]['name'];
                }
            }
        };
    };

    $scope.validateModifyOffer = function() {
        $scope.getCurrentOffer();
        // SystemService.showLoading();

        var validateModifyOfferParam = "current-offers=" + $scope.currentOfferParam + "&current-priceplan=" + $scope.priceplan[0]['product-name'] + "&level=SUBSCRIBER";
        console.log(validateModifyOfferParam);
        AddDeleteEditOfferService.validateModifyOffer(validateModifyOfferParam, function(result) {
            SystemService.hideLoading();
            $scope.validateModifyOfferList = result.data['response-data'];
            console.log($scope.validateModifyOfferList);

            for (var i = 0; i < $scope.existingOffer.length; i++) {
                var name = $scope.existingOffer[i]["product-name"];
                $scope.existingOffer[i]["canEdit"] = false;
                $scope.existingOffer[i]["canDelete"] = false;
                $scope.existingOffer[i]["canEditExpireDate"] = true;
                if ($scope.validateModifyOfferList[name]) {
                    for (var j = 0; j < $scope.validateModifyOfferList[name].length; j++) {
                        if ($scope.validateModifyOfferList[name][j] == "EDIT") {
                            $scope.existingOffer[i]["canEdit"] = true;
                        }

                        if ($scope.validateModifyOfferList[name][j] == "DELETE") {
                            $scope.existingOffer[i]["canDelete"] = true;
                        }

                        if($scope.validateModifyOfferList[name][j] == "RELATED_REQUIRED") {
                            $scope.existingOffer[i]["canEditExpireDate"] = false;
                        }
                    }
                }
            }

            for (var i = 0; i < $scope.futureOfferList.length; i++) {
                var name = $scope.futureOfferList[i]["product-name"];
                $scope.futureOfferList[i]["canEdit"] = false;
                $scope.futureOfferList[i]["canDelete"] = false;
                $scope.futureOfferList[i]["canEditExpireDate"] = false;
                if ($scope.validateModifyOfferList[name]) {
                    for (var j = 0; j < $scope.validateModifyOfferList[name].length; j++) {
                        if ($scope.validateModifyOfferList[name][j] == "EDIT") {
                            $scope.futureOfferList[i]["canEdit"] = true;
                        }

                        if ($scope.validateModifyOfferList[name][j] == "DELETE") {
                            $scope.futureOfferList[i]["canDelete"] = true;
                        }

                        if($scope.validateModifyOfferList[name][j] == "RELATED_REQUIRED") {
                            $scope.futureOfferList[i]["canEditExpireDate"] = false;
                        }
                    }
                }
            }

            // for (var i = 0; i < $scope.existingOffer.length; i++) {
            //     for (var j = 0; j < $scope.futureOfferList.length; j++) {
                    
            //     }
            // }

            $scope.existingOfferTemp = angular.copy($scope.existingOffer);
            $scope.tempFutureOfferList = angular.copy($scope.futureOfferList)
            $scope.setDefaultExistingOffer();
            // console.log($scope.existingOffer);
        });
    };

    $scope.deleteExistingOfferList = [];
    $scope.deleteFutureOfferList = [];
    $scope.addDeleteList = function(item, type) {
        if (type == "DELETE_EXISTING_OFFER" && item.selected == true) {
            $scope.deleteExistingOfferList.push(item)
        } else if (type == "DELETE_EXISTING_OFFER" && item.selected == false) {
            for (var i = 0; i < $scope.deleteExistingOfferList.length; i++) {
                if (item.guID == $scope.deleteExistingOfferList[i].guID) {
                    $scope.deleteExistingOfferList.splice(i, 1);
                    break;
                }
            }
        } else if (type == "DELETE_FUTURE_OFFER" && item.selected == true) {
            $scope.deleteFutureOfferList.push(item);
        } else if (type == "DELETE_FUTURE_OFFER" && item.selected == false) {
            for (var i = 0; i < $scope.deleteFutureOfferList.length; i++) {
                if (item.guID == $scope.deleteFutureOfferList[i].guID) {
                    $scope.deleteFutureOfferList.splice(i, 1);
                    break;
                }
            }
        }
        console.log($scope.deleteExistingOfferList);
        console.log($scope.deleteFutureOfferList);
        $scope.validateDeleteUI();
    };

    $scope.disabledSubmitBtn = true;
    $scope.validateDeleteUI = function() {
        if ($scope.deleteExistingOfferList.length > 0 || $scope.deleteFutureOfferList.length > 0) {
            $scope.disabledSubmitBtn = false;
        } else {
            $scope.disabledSubmitBtn = true;
        }
    };

    $scope.onEditExpChange = function(type) {
        if (type == "EXISTING" && $scope.viewOfferForEdit['expire-date-option'] == "UNLIMITED") {
            $scope.paramForEdit['expiration-date'] = "";
            $scope.viewOfferForEdit['expiration-date'] = "";
            $('#editOfferExpirationDate').val("");
            $scope.modelChange = true;
            // } else if (type == "FUTURE" && $scope.editFutureExpType == "UNLIMITED") {
            //     $scope.futureOfferDetail['effective-date'] = "";
            //     $('#editFutureOfferEffectiveDate').val("");
            //     $scope.disableSubmitEditFutureOffer = false;
        } else {
            $scope.modelChange = false;
            // $scope.disableSubmitEditFutureOffer = true;
        }
    };

    $scope.chkEditFutureOffer = function(item) {
        if (item.selected) {
            $('#btnEditFutureOffer').click();
            $scope.editFutureOffer(item);
        } else {
            for (var i = 0; i < $scope.futureOfferList.length; i++) {
                if (($scope.futureOfferList[i].guID == item.guID) && (item.guID == $scope.tempFutureOfferList[i].guID)) {
                    $scope.futureOfferList[i] = angular.copy($scope.tempFutureOfferList[i]);
                }
            }
            $scope.validateEditUI();
        }
    };

    $scope.pooledParam = "";
    $scope.setPooledOffer = function() {
        $scope.pooledParam = "";
        var pooledDetail = $filter('filter')($scope.existingOfferTemp, { 'product-name': $scope.pooledOfferType });
        console.log(pooledDetail);
        if (pooledDetail.length == 1) {
            $scope.pooledParam = pooledDetail[0]["product-properties"]["OFFER-INSTANCE-ID"] + "|" + pooledDetail[0]["product-soc-code"] + "|" + pooledDetail[0]["product-name"];
            console.log($scope.pooledParam);
        } else {
            $scope.pooledParam = "";
        }
    };

    $scope.validateEditUI = function() {
        var existingOfferList = $filter('filter')($scope.existingOffer, { 'edited': true });
        var futureOfferList = $filter('filter')($scope.futureOfferList, { 'edited': true });
        if (existingOfferList.length > 0 || futureOfferList.length > 0) {
            $scope.disabledSubmitBtn = false;
        } else {
            $scope.disabledSubmitBtn = true;
        }
    };

    $scope.unlimitedExp = "ไม่มีกำหนด";
    $scope.cugSelectValue = "";
    $scope.onEditCUG = function(item) {
        $scope.paramForEdit['param-detail'][0]['cugValue'] = item['group-id'] + " : " + item['group-name'];
        $scope.paramForEdit['param-detail'][0]['value'] = item['group-id'];
        $scope.modelChange = true;
    };

    $scope.checkFirstDiscountBill = function(billCycle, effDate, action) {
        if (!effDate) {
            effDate = angular.copy($scope.setDateNow);
        }
        $scope.firstDiscountBill = "";
        var effDateArr = effDate.split("/");
        var diff = Number(billCycle - effDateArr[0]);
        var toDay = new Date();
        toDay.setDate(Number(billCycle));
        toDay.setMonth(Number(effDateArr[1]) - 1);
        toDay.setYear(Number(effDateArr[2]));
        console.log(diff);
        if (diff <= 0) {
            toDay.setMonth(toDay.getMonth() + 1);
        }

        if (action == "editNew") {
            $scope.dataForEdit['properties']['firstDiscountBill'] = $filter('date')(toDay, 'dd/MM/yyyy');
        } else if (action == "editExisting") {
            $scope.viewOfferForEdit['properties']['firstDiscountBill'] = $filter('date')(toDay, 'dd/MM/yyyy');
            if ($scope.viewOfferForEdit['properties']['firstDiscountBill'].length == 10 && $scope.viewOfferForEdit["expiration-date"].length == 10) {
                var month1 = $scope.viewOfferForEdit['properties']['firstDiscountBill'].split("/");
                var month2 = $scope.viewOfferForEdit["expiration-date"].split("/");
                var a = moment([(Number(month2[2])), month2[1], month2[0]]);
                var b = moment([(Number(month1[2])), month1[1], month1[0]]);
                $scope.viewOfferForEdit['properties']['DURATION'] = a.diff(b, 'months');
                $scope.viewOfferForEdit['properties']['DURATION_TEMP'] = angular.copy(Number($scope.viewOfferForEdit['properties']['DURATION']) + 1);
                $scope.viewOfferForEdit['properties']['DURATION_TEMP'] = $scope.viewOfferForEdit['properties']['DURATION_TEMP'].toString()
                $scope.viewOfferForEdit['properties']['DURATION_UNIT'] = "MONTH";
                console.log(a.diff(b, 'months'));
            }
        } else {
            $scope.firstDiscountBill = $filter('date')(toDay, 'dd/MM/yyyy');
        }
    };

    $scope.onChangeDisDuration = function(action) {
        if (action == "editExisting") {
            if (Number($scope.viewOfferForEdit['properties']['MAX_DURATION']) < Number($scope.viewOfferForEdit['properties']['DURATION_TEMP'])) {
                $scope.viewOfferForEdit['properties']['DURATION_TEMP'] = "";
            }
            $scope.discountDurationChange($scope.viewOfferForEdit['properties']['DURATION_TEMP'], "editExisting");
        } else {
            if (Number($scope.selectedOffer['properties']['MAX_DURATION']) < Number($scope.selectedOffer['properties']['DURATION_TEMP'])) {
                $scope.selectedOffer['properties']['DURATION_TEMP'] = "";
            }
            $scope.discountDurationChange($scope.selectedOffer['properties']['DURATION_TEMP']);
        }
    };

    $scope.discountDurationChange = function(newDuration, action) {
        if (action == "editExisting") {
            var disDateParam = new Date(SystemService.convertDataMMDDYYYYEN($scope.viewOfferForEdit['properties']['firstDiscountBill']));
            disDateParam.setMonth(disDateParam.getMonth() + (Number(newDuration) - 1));
            $("#editOfferExpirationDate").datepicker("setDate", disDateParam);
            if ($scope.viewOfferForEdit['expiration-date'] == "") {
                $scope.modelChange = false;
            } else {
                $scope.modelChange = true;
            }
        } else {
            var disDateParam = new Date(SystemService.convertDataMMDDYYYYEN($scope.firstDiscountBill));
            disDateParam.setMonth(disDateParam.getMonth() + (Number(newDuration) - 1));
            // $("#addNewOfferExpirationDate").datepicker("setDate", param);
            $("#addNewOfferExpirationDate2").datepicker("setDate", disDateParam);
        }
    };
});
