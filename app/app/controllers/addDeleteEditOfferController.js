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
                // $scope.getOfferList();
                // $scope.getReleteOfferList();
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



    $scope.deleteRegulaOfferList = function(item) {
        for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
            if (item['offer-name'] == $scope.addNewOfferLists[i]['offer-name']) {
                $scope.addNewOfferLists.splice(i, 1);
                break;
            }
        }
        console.log($scope.addNewOfferLists);
    }

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

        // add new param value for add new offer
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
                            var dateToSet = $scope.cpExpireDate.split("/");
                            $('#cpExpireDate').datepicker("setDate", new Date(Number(dateToSet[2]) - 543, Number(dateToSet[1]) - 1, Number(dateToSet[0])));
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
                    var setDate = ("0" + currentDate.getDate()).slice(-2) + "/" + ("0" + Number(currentDate.getMonth() + 1)).slice(-2) + "/" + Number(currentDate.getFullYear() + 543);
                    $('#cpExpireDate').datepicker("setDate", new Date(currentDate.getFullYear(), ("0" + Number(currentDate.getMonth() + 0)).slice(-2), ("0" + currentDate.getDate()).slice(-2)));
                    $('#cpExpireDate').val(setDate);
                    $scope.cpExpireDate = $('#cpExpireDate').val();
                    // console.log(setDate);
                }

                $scope.cpDiffResult = $scope.checkValueCpDate($('#cpStartDate').val(), $('#cpExpireDate').val());
                break;

            case "ADDITIONAL":
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


                setTimeout(function() {
                    $scope.validateAddAD();
                    $('#idBindDataAgain').click();
                }, 50);

                $('#idBindDataAgain').click();
                console.log($scope.selectedOffer);
                break;
        }

        if ($scope.selectedOffer.group == "DISCOUNT" || $scope.selectedOffer.group == "RELATED") {
            $scope.disableSubmitAddOffer = false;
        } else {
            $scope.disableSubmitAddOffer = true;
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
                // $scope.getOfferList();
                // $scope.getReleteOfferList();
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
            $('input[name=paramCug]').prop('checked', false);

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
                $scope.pooledOffer = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'product-type': 'POOLED' });
                $scope.priceplan = $filter('filter')(result.data['response-data']['customer']['installed-products'], { 'offer-group': 'PRICEPLAN' });
                if ($scope.priceplan.length > 0) {
                    $scope.data.header["currpriceplan"] = $scope.priceplan[0]['product-name'] + ":" + $scope.priceplan[0]['product-description'];
                }

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
                if ($scope.pooledOffer) {
                    for (var i = 0; i < $scope.pooledOffer.length; i++) {
                        $scope.existingOffer.push($scope.pooledOffer[i])
                    }
                }
                console.log($scope.pooledOffer);
            } else {
                $scope.existingOffer = [];
                $scope.builtInOffer = [];
                $scope.regularOffer = [];
                $scope.propoOffer = [];
                $scope.discountOffer = [];
                $scope.pooledOffer = [];
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
        } else if ($scope.addType == 'DISCOUNT') {
            $scope.addOfferType.value = 'RELATED';
            var searchParam = "current-priceplan=" + $scope.priceplan[0]['product-name'] + "&company-code=" + $scope.data.simData['company-code'] + "&customer-type=" + $scope.data.customerProfile['customer-type'] + "&account-subtype=" + $scope.data.simData['account-sub-type'] + "&service-level=" + $scope.serviceLevel;
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
                console.log($scope.addOfferLists);
                for (var i = 0; i < $scope.addOfferLists.length; i++) {
                    // case relate offer price plan 
                    if ($scope.addOfferType.value == 'RELATED') {
                        $scope.addOfferLists[i]["sale-period"] = { "start": "", "end": "" };
                        $scope.addOfferLists[i].name = $scope.addOfferLists[i].offer.name;
                        $scope.addOfferLists[i]['service-level'] = $scope.addOfferLists[i].offer['service-level'];
                        $scope.addOfferLists[i].group = "RELATED";
                    }
                    // ========================================================================

                    if ($scope.addOfferLists[i]["sale-period"].start) {
                        $scope.addOfferLists[i]["sale-period"].start = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["sale-period"].start, "dd/MM/YYYY");
                    }

                    if ($scope.addOfferLists[i]["sale-period"].end) {
                        $scope.addOfferLists[i]["sale-period"].end = SystemService.convertDateENNoTToFomat($scope.addOfferLists[i]["sale-period"].end, "dd/MM/YYYY");
                    }
                }
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

    // For Add New CP Offer
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
    // ======================================
    // For Edit New CP Offer
    $(document).ready(function() {
        $("#editCpStartDate").change(function() {
            $scope.dataForEdit.param['start-date'] = $('#editCpStartDate').val();
            $scope.dataForEdit.param['expiration-date'] = $('#editCpExpirationDate').val();
            $scope.cpDiffResultForEdit = $scope.checkValueCpDate($('#editCpStartDate').val(), $('#editCpExpirationDate').val());
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
    });
    // =====================================
    // For Edit New Offer
    $(document).ready(function() {
        $("#editNewOfferEffectiveDate").change(function() {
            $scope.dataForEdit['param']['effective-date-value'] = $('#editNewOfferEffectiveDate').val();
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
    });
    // =====================================

    $scope.clearValueAddNewOffer = function() {
        $scope.cpRemark = "";
        $scope.cpContractNumber = "";
    };

    $scope.chkValueAddNewOffer = function(action) {
        if (action == "edit") {
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
        console.log($scope.editValue);
        for (var i = 0; i < $scope.addNewOfferLists.length; i++) {
            if ($scope.editValue.name == $scope.addNewOfferLists[i].name) {
                $scope.addNewOfferLists[i] = $scope.editValue;
            }
        }

        $scope.cugParamForEdit = {};
        console.log($scope.addNewOfferLists);
    };

    $scope.editDetail = function(item) {
        $scope.editParam = false;
        $scope.dataForEdit = angular.copy(item);
        $scope.editValue = {};
        console.log($scope.dataForEdit);
        $scope.editOfferCode = $scope.dataForEdit.name;
        $scope.editOfferDesc = $scope.dataForEdit.description;
        $scope.editOfferGroup = $scope.dataForEdit.group;

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
                for(var i = 0; i < arrFF.length; i++){
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
});
