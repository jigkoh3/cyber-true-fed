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

        });
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
        $scope.selectedOffer = item;
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
                    // if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_TERM" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                    //     $scope.cpTerm = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                    //     if ($scope.cpTerm == 0) {
                    //         $scope.cpExpireDate = $scope.cpStartDate;
                    //         $('#cpExpireDate').val($scope.cpExpireDate);
                    //         var dateToSet = $scope.cpExpireDate.split("/");
                    //         $('#cpExpireDate').datepicker("setDate", new Date(dateToSet[2], Number(dateToSet[1]) - 1, Number(dateToSet[0])));
                    //     } else {
                    //         var currentDate = new Date();
                    //         currentDate.setMonth(currentDate.getMonth() + Number($scope.cpTerm));
                    //         var setDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + Number(currentDate.getMonth() + 1)).slice(-2) + "/" + currentDate.getFullYear();
                    //         $('#cpExpireDate').datepicker("setDate", new Date(currentDate.getFullYear(), ("0" + Number(currentDate.getMonth() + 0)).slice(-2), ("0" + currentDate.getDate()).slice(-2)));
                    //         $('#cpExpireDate').val(setDate);
                    //         $scope.cpExpireDate = $('#cpExpireDate').val();
                    //     }
                    // }
                    // if ($scope.selectedOffer['parameter-specifications'][i].name == "TR_CONTRACT_FEE" && $scope.selectedOffer['parameter-specifications'][i]['default-value']) {
                    //     $scope.cpFee = $scope.selectedOffer['parameter-specifications'][i]['default-value'];
                    // }
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

            if ($scope.selectedOffer.group == "DISCOUNT" && $scope.selectedOffer['properties']['DISCOUNT_GROUP'] != 'CVG' && $scope.selectedOffer['properties']['DISCOUNT_GROUP'] != 'EMP') {
                $scope.offerExpirationDate = "specify"
                $scope.disableSubmitAddOffer = true;
            }

        } else {
            $scope.disableSubmitAddOffer = true;
        }

        if ($scope.selectedOffer.group == "DISCOUNT") {
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

            if ($scope.selectedOffer.properties["DURATION_UNIT"] == "MONTH" && $scope.selectedOffer.properties['DISCOUNT_GROUP'] != 'CVG' && $scope.selectedOffer.properties['DISCOUNT_GROUP'] != 'EMP') {
                var disDateParam = new Date();
                disDateParam.setMonth(disDateParam.getMonth() + parseInt($scope.selectedOffer.properties["DURATION"]));
                // $("#addNewOfferExpirationDate").datepicker("setDate", param);
                $("#addNewOfferExpirationDate2").datepicker("setDate", disDateParam);
            } else if ($scope.selectedOffer.properties["DURATION_UNIT"] == "DATE" && $scope.selectedOffer.properties['DISCOUNT_GROUP'] != 'CVG' && $scope.selectedOffer.properties['DISCOUNT_GROUP'] != 'EMP') {
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
    $scope.viewOfferDetail = function(item, action) {
        $scope.onClearRelateOfferValue();
        $scope.idSetDate = false;
        $scope.paramDetail = [];
        $scope.paramForEdit = [];
        $scope.viewOfferForEdit = {};
        $scope.selectedRelateOffer = [];
        $('#hModal').height(($(window).height()) - 235);
        $('.hModal').height(($(window).height()) - 235);
        var parameter = [];
        console.log(item);
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
                    dateParam[0] = SystemService.convertDateToTH(dateParam[0], "TH")
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
            console.log($scope.paramDetail);
            if (action = "edit") {
                $scope.paramForEdit = angular.copy($scope.paramDetail);
            }
        }

        $scope.paramForEdit['effective-date'] = item['effective-date'];
        $scope.paramForEdit['expiration-date'] = item['expire-date'];
        // $('#editOfferEffectiveDate').datepicker("setDate", item['effective-date']);
        $('#editOfferExpirationDate').datepicker("setDate", item['expire-date']);
        setTimeout(function() {
            SystemService.calendarDatePicker();
        }, 1200);

        $scope.viewOffer = {
            "product-name": item['product-name'],
            "product-description": item['product-description'],
            "effective-date": item['effective-date'],
            "expiration-date": item['expire-date'],
            "offer-group": item['offer-group'],
            "offer-instance-id": item["product-properties"]["OFFER-INSTANCE-ID"],
            "CONTRACT-START-DATE": item["product-properties"]["CONTRACT-START-DATE"],
            "CONTRACT-EXPIRATION-DATE": item["product-properties"]["CONTRACT-EXPIRATION-DATE"],
            "original-data": item,
            "param": {
                "TR_CONTRACT_NUMBER": $filter('filter')($scope.paramDetail, "TR_CONTRACT_NUMBER"),
                "TR_CONTRACT_TERM": $filter('filter')($scope.paramDetail, "TR_CONTRACT_TERM"),
                "TR_CONTRACT_FEE": $filter('filter')($scope.paramDetail, "TR_CONTRACT_FEE"),
                "TR_CONTRACT_REMARK": $filter('filter')($scope.paramDetail, "TR_CONTRACT_REMARK")
            }
        }
        $scope.viewOfferForEdit = angular.copy($scope.viewOffer);
        console.log($scope.viewOffer);
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
    };

    $scope.onEditCurrentOffer = function(productName) {
        for (var i = 0; i < $scope.existingOffer.length; i++) {
            if ($scope.existingOffer[i]["product-name"] === productName) {
                $scope.existingOffer[i]["expiration-date"] = $scope.paramForEdit['expiration-date'];
                $scope.existingOffer[i].edited = true;
            }
        }
        $scope.setDefaultExistingOffer();
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
                $scope.getExistingOffer();
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

        if ($scope.offerType == "C") {
            data['action'] = "ADD_OFFER";
        }

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
        console.log(data);

        AddDeleteEditOfferService.submitAddDeleteEditOffer(data, function(result) {
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
        $scope.setDefaultExistingOffer();
        $scope.addNewOfferLists = [];
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
        console.log(chkModel);
        if (chkModel == true) {
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
            $scope.setDefaultExistingOffer();
        }
        $scope.chkBoxLength = item['offer-name'];
    }

    $scope.modelChange = false;
    $scope.onModelChange = function() {
        $scope.modelChange = true;
    }

    $scope.modelChange = false;
    $scope.unChk = function(editOfferCode) {
        if ($scope.modelChange == false) {
            for (var i = 0; i < $scope.existingOffer.length; i++) {
                if (editOfferCode == $scope.existingOffer[i]['product-name'] && $scope.existingOffer[i].edited == false) {
                    $scope.existingOffer[i].selected = false;
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
    $scope.existingOfferTemp = [];
    $scope.getExistingOffer = function() {
        SystemService.showLoading();
        $scope.existingOfferTemp = [];
        AddDeleteEditOfferService.getExistingOffer($scope.level, $scope.data.simData['product-id-number'], $scope.data.simData['subscriber-id'], function(result) {
            SystemService.hideLoading();
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
                // for (var i = 0; i < result.data['response-data']['customer']['installed-products'].length; i++) {
                //     if (result.data['response-data']['customer']['installed-products'][i]['effective-date']) {
                //         result.data['response-data']['customer']['installed-products'][i]['effective-date'] = SystemService.convertDateToTH(result.data['response-data']['customer']['installed-products'][i]['effective-date'], 'TH');
                //     }
                //     if (result.data['response-data']['customer']['installed-products'][i]['expire-date']) {
                //         result.data['response-data']['customer']['installed-products'][i]['expire-date'] = SystemService.convertDateToTH(result.data['response-data']['customer']['installed-products'][i]['expire-date'], 'TH');
                //     }
                // }
                // ===================================================================================================== //
                $scope.builtInOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'PRICEPLAN-BUILT-IN' });
                $scope.regularOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'ADDITIONAL-OFFER' });
                $scope.propoOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'PROPOSITION' });
                $scope.discountOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'DISCOUNT' });
                $scope.pooledOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'offer-group': 'POOLED' });
                $scope.priceplan = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'offer-group': 'PRICEPLAN' });
                if ($scope.priceplan.length > 0) {
                    $scope.data.header["currpriceplan"] = $scope.priceplan[0]['product-name'] + ":" + $scope.priceplan[0]['product-description'];
                }

                if ($scope.builtInOffer) {
                    for (var i = 0; i < $scope.builtInOffer.length; i++) {
                        $scope.builtInOffer[i]["selected"] = false;
                        $scope.builtInOffer[i]["edited"] = false;
                        $scope.existingOffer.push($scope.builtInOffer[i])
                    }
                    console.log($scope.builtInOffer);
                }
                if ($scope.regularOffer) {
                    for (var i = 0; i < $scope.regularOffer.length; i++) {
                        $scope.regularOffer[i]["selected"] = false;
                        $scope.regularOffer[i]["edited"] = false;
                        $scope.existingOffer.push($scope.regularOffer[i])
                    }
                }
                if ($scope.propoOffer) {
                    for (var i = 0; i < $scope.propoOffer.length; i++) {
                        $scope.propoOffer[i]["selected"] = false;
                        $scope.propoOffer[i]["edited"] = false;
                        $scope.existingOffer.push($scope.propoOffer[i])
                    }
                }
                if ($scope.discountOffer) {
                    for (var i = 0; i < $scope.discountOffer.length; i++) {
                        $scope.discountOffer[i]["selected"] = false;
                        $scope.discountOffer[i]["edited"] = false;
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

                    // if ($scope.addOfferLists[i]["related-offers"]) {
                    //     for (var j = 0; j < $scope.addOfferLists[i]["related-offers"][j].length; j++) {
                    //         if ($scope.addOfferLists[i]["related-offers"][j]["offer"]["sale-period"].start) {
                    //             $scope.addOfferLists[i]["related-offers"][j]["offer"]["sale-period"].start = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["related-offers"][j]["offer"]["sale-period"].start, "dd/MM/yyyy");
                    //         }

                    //         if ($scope.addOfferLists[i]["related-offers"][j]["offer"]["sale-period"].end) {
                    //             $scope.addOfferLists[i]["related-offers"][j]["offer"]["sale-period"].end = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["related-offers"][j]["offer"]["sale-period"].end, "dd/MM/yyyy");
                    //         }
                    //     }
                    // }
                }
                $scope.addOfferLists = $filter('orderBy')($scope.addOfferLists, 'name', false);
                addOfferLists = $scope.addOfferLists;
                // console.log($scope.addOfferLists);

                if ($scope.addOfferType.value == "CUG") {
                    $scope.ischkCugValue = false;
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
            $scope.setEndDateValue($('#addNewOfferEffectiveDate').val());
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

    $scope.existingParameter = [];
    $scope.getExistingOfferParam = function() {
        SystemService.showLoading();
        var param = "level=SUBSCRIBER&key-value=" + $scope.SubNo + "&key-id=" + $scope.data.simData["subscriber-id"] + "&account-id=" + $scope.data.simData.ban;
        console.log(param);
        AddDeleteEditOfferService.getExistingParameter(param, function(result) {
            var existingParamData = utils.getObject(result.data['response-data'], 'customer');
            if (existingParamData) {
                console.log(result);
                $scope.existingParameter = angular.copy(result.data["response-data"]["customer"]["installed-products"]);
            } else {
                $scope.existingParameter = [];
            }
            SystemService.hideLoading();
            $scope.callGetFutureOffer();
        });
    };

    $scope.callGetFutureOffer = function() {
        SystemService.showLoading();
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
                $scope.tempFutureOfferList = angular.copy($scope.futureOfferList);
            } else {
                $scope.futureOfferList = [];
                $scope.tempFutureOfferList = [];
            }
            SystemService.hideLoading();
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
        $scope.futureOfferDetail = [];
        setTimeout(function() {
            $('#editFutureOfferEffectiveDate').val("");
            $('#editFutureOfferEffectiveDate').datepicker("setDate", "");
        }, 100);
    };

    $scope.confirmEditFutureOffer = function() {
        for (var i = 0; i < $scope.futureOfferList.length; i++) {
            if ($scope.futureOfferList[i]["product-name"] === $scope.futureOfferDetail["product-name"]) {
                $scope.futureOfferList[i]["effective-date"] = $scope.futureOfferDetail["effective-date"];
            }
        }
        $scope.onCancelEditFutureOffer();
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
            $scope.onModelChange();
            setTimeout(function() {
                $('#idBindDataAgain').click();
            }, 50);
        });
        $("#editOfferExpirationDate").blur(function() {
            $scope.paramForEdit['expiration-date'] = $('#editOfferExpirationDate').val();
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
        // var newOffer = "";
        // if($scope.addNewOfferLists.length > 0){
        //     newOffer = $scope.addNewOfferLists[0]["name"];
        //     for(var i = 1; i < $scope.addNewOfferLists.length; i++) {
        //         newOffer += ", " + $scope.addNewOfferLists[i]["name"];
        //     }
        // }
        // return newOffer;

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

        }
    };

    $scope.checkAuthorize = function() {
        setTimeout(function() {
            if (($scope.offerType == "U" && $scope.data.simData["account-category"] == "I") || ($scope.offerType == "D" && $scope.data.simData["account-category"] == "I")) {
                //hide มอบอำนาจ
                $('#divShowAuthorize').hide();
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
        SystemService.showLoading();

        var validateModifyOfferParam = "current-offers=" + $scope.currentOfferParam + "&current-priceplan=" + $scope.priceplan[0]['product-name'] + "&level=SUBSCRIBER";
        console.log(validateModifyOfferParam);
        AddDeleteEditOfferService.validateModifyOffer(validateModifyOfferParam, function(result) {
            SystemService.hideLoading();
            $scope.validateModifyOfferList = result.data['response-data'];
            console.log($scope.existingOffer);
            if ($scope.validateModifyOfferList) {
                console.log($scope.validateModifyOfferList);

                for (var i = 0; i < $scope.existingOffer.length; i++) {
                    // if ($scope.validateModifyOfferList[$scope.existingOffer[i].["product-name"]]) {
                    // $scope.existingOffer[i].["modify-type"] = $scope.validateModifyOfferList[$scope.existingOffer[i]["product-name"]
                    // }
                }

            }
        });
    }
});
