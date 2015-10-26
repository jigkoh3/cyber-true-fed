smartApp.controller('MigratePostToPreController', function($routeParams, $scope, AuthenService, MigratePostToPreService, ReasonService, SystemService) {

    // Templates
    var runTime = new Date().getTime();
    $scope.template = {
        header: 'app/views/header.html?' + runTime,
        customerprofile: 'app/views/customerprofile.html?' + runTime,
        reasonmemo: 'app/views/reasonmemo.html?' + runTime
    };


    // Prepare page parameters
    //$scope.shopType = '0';
    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null'; //$routeParams.SubNo;


    // Initialize variables
    $scope.divID = 'migratePostToPreContent';
    $scope.subNoLength = 10;
    $scope.zipLength = 5;
    $scope.currentPage = 1;

    $scope.isLastestUser = true;
    $scope.isReadCardSuccess = false;
    $scope.isSecondAuhenFailed = true;

    $scope.isCardValueData = false;

    $scope.dirty = {
        selectedPricePlan: {}
    };


    // Initalize states of the UI controls in the CustomerProfile template to display properly in the page
    $scope.onCustomerProfileTemplateLoaded = function() {
        $('#unMatch2').hide();
        $scope.isAuthorize = false;
        $scope.isCustomerProfile = false;
    };


    // (Start) Get current SIM data ----------------------
    var formatDate = function(date) {
        if (date) {
            if (date.indexOf("-") >= 0) {
                var arr = date.split("T");
                var arrDate = arr[0].split("-");
                var strDate =  arrDate[2]+ "/" + arrDate[1] + "/" + (Number(arrDate[0]) + 543);
                console.log(arrDate);
                return strDate;

            } else {

                return date;
            }
            /*if (!date) return date;

            return SystemService.convertDateToTH(moment(date).format('DD/MM/YYYY'), 'TH');*/
        }
    };

    var onGetSIMData = function(result) {

        if (result == false) {
            console.log(result);
            $scope.SubNo = 'null';
            $('#dataSubNo').val("");
            setTimeout(function() {
                $('#dataSubNo').focus();

            }, 1200);
            return;

        } else {
            $scope.data = result.data;
            $scope.getSIMDataFailed = false;
            if (!$scope.data) {
                $scope.getSIMDataFailed = true;
                SystemService.hideLoading();

                return;
            }

            var idType = $scope.data.simData['account-category'];

            setTimeout(function() {
                $('#selectCustomerIdType').val(idType);
            }, 1000);

            $scope.data.customerProfile['id-type'] = idType;
            console.log(idType);
            if (idType == "I") {
                $scope.isLastestUser = false;
            }

            $scope.data.customerProfile['birthdate'] = formatDate($scope.data.customerProfile['birthdate']);
            $scope.data.customerProfile['id-expire-date'] = formatDate($scope.data.customerProfile['id-expire-date']);

            authenticate();
        }

        setTimeout(function() {
            SystemService.calendarDatePicker();
        }, 0);
    };

    $scope.isInputSubNo = false;
    $scope.onInputSubNo = function() {
        console.log($('#dataSubNo').val().length, $scope.isInputSubNo);
        var dataSubNo = $('#dataSubNo').val();
        if (dataSubNo.length == 10) {
            if ($scope.isInputSubNo == false) {
                $scope.SubNo = $('#dataSubNo').val();
                $scope.isInputSubNo = true;

                SystemService.showLoading();
                MigratePostToPreService.getSIMData($scope.SubNo, onGetSIMData);
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
    setTimeout(function() {
        SystemService.validateNummeric();

        $('#loadingReadCard3').hide();
    }, 1000);

    if ($scope.SubNo !== 'null') {
        SystemService.showLoading();
        //ประเภทของบัตร
        SystemService.getMaster_list("CUST-ID-TYPE-I", function(result) {
            $scope.cardTypeOptions = result;
            console.log($scope.cardTypeOptions);
        });

        //คำนำหน้า
        SystemService.getMaster_list("CUST-TITLE-TYPE", function(result) {
            $scope.titleTypeListx = result;
            console.log($scope.titleTypeListx);
        });

        //คำนำหน้า อื่นๆ
        SystemService.getMaster_list("CUST-TITLE-OTHER-TYPE", function(result) {
            $scope.titleOtherTypeList = result;
            console.log($scope.titleOtherTypeList);
        });

        //เพศ
        SystemService.getMaster_list("CUST-GENDER", function(result) {
            $scope.genderTypeList = result;
            console.log($scope.genderTypeList);
        });
        MigratePostToPreService.getSIMData($scope.SubNo, onGetSIMData);
    }
    // (End) Get current SIM data ----------------------


    // (Start) Authentication ----------------------
    var orderData = {};

    var authenticate = function() {
        AuthenService.getAuthen(function(authResult) {
            $scope.getAuthen = authResult;

            $scope.shopType = $scope.getAuthen['shopType'];
            if ($scope.shopType === '0') {
                $scope.isCustomerProfile = true;
            }
            if ($scope.data.simData['account-category'] != "I" && $scope.shopType == '0') {
                $scope.isSecondAuhenFailed = false;
            } else if ($scope.shopType == '0') {
                $scope.isSecondAuhenFailed = false;
            }

            if ($scope.getAuthen['shopType'] == '1' && $scope.getAuthen['isSecondAuthen'] == false) {
                setTimeout(function() {
                    $('#CitizenID').prop('disabled', false);
                    $('#CitizenID').focus();
                    $('#btnSSO').hide();
                }, 1100);
            }

            var partnerCode = utils.getObject($scope.getAuthen, 'shopcodes.0');

            getProPosition(partnerCode);

            SystemService.getOrderId($scope.getAuthen.channel, partnerCode, function(order) {
                SystemService.hideLoading();

                orderData = order;

                if ($scope.shopType === '1') {
                    // Auto-open the CardReader dialog
                    setTimeout(function() {
                        var fancyboxOptions = {
                            helpers: {
                                overlay: {
                                    //closeClick: false
                                }
                            },

                            beforeShow: function() {
                                $('#CitizenID').prop('disabled', true);
                                $('#loadingReadCard').hide();
                                $('#unMatch').hide();
                            },

                            afterClose: function() {
                                if (!$scope.onInputId()) {
                                    //window.close();
                                }
                            }
                        };

                        $('#btn-fancy-ReadCard').fancybox(fancyboxOptions).trigger('click');
                    }, 1000);
                }
            });
        });
    };

    $scope.openSSO = function() {
        var getReadyCitizenInput = function() {
            $('#CitizenID').prop('disabled', false);
            $('#CitizenID').focus();
        };

        if ($scope.getAuthen.isSecondAuthen) {
            var openDialog = function(uri, name, options, closeCallback) {
                var win = window.open(uri, name, options);

                var interval = window.setInterval(function() {
                    try {
                        if (!win || win.closed) {
                            window.clearInterval(interval);
                            closeCallback(win);
                        }
                    } catch (ex) {}
                }, 1000);

                return win;
            };

            var url = SystemService.secondAuthenURL + 'SecondAuthen.jsp?App=WEBUI&TrxID=' + orderData.TrxID + '&Retry=yes&Goto=';

            openDialog(url, 'MsgWindow', 'width=800, height=600', function(w) {
                SystemService.showLoading();

                SystemService.second_authen(orderData.TrxID, function(result) {
                    SystemService.hideLoading();

                    var displayMsg = utils.getObject(result, 'display-messages.0');
                    if (!displayMsg || !displayMsg['message-type']) {
                        setTimeout(function() {
                            getReadyCitizenInput();
                        }, 1000);
                    } else {
                        setTimeout(function() {
                            SystemService.showAlert(displayMsg);
                        }, 1000);
                    }
                });
            });
        } else {
            getReadyCitizenInput();
        }
    };

    $scope.onInputId = function() {
        var value = $('#CitizenID').val();

        if (value.length >= 3) {
            if (value === $scope.data.customerProfile['id-number']) {
                $scope.isCustomerProfile = true;
                $scope.isSecondAuhenFailed = false;



                $('#unMatch').hide();
                $('.fancybox-close').click();

                return true;
            } else {
                $('#unMatch').show();
                $('#loadingReadCard').hide();
            }
        }
    };

    $scope.onInputId2 = function() {
        var value = $('#CitizenID2').val();

        if (value.length === 13) {
            if (!SystemService.validatePID(value)) {
                $('#CitizenID2').blur().val('');
            }
        }
    };

    $scope.readCardError = function(msg) {
        SystemService.showAlert({
            'message': msg,
            'message-code': '',
            'message-type': 'WARNING',
            'en-message': msg,
            'th-message': msg,
            'technical-message': msg
        });

        $scope.isReadCardSuccess = false;
    };

    $scope.SetCardValue = function(result) {
        $scope.isCardValueData = true;
        $scope.cardInfo = eval(result);

        $('#CitizenID').val($scope.cardInfo.CitizenID);
        $scope.onInputId();
        setTimeout(function() {
            $('#idBindDataAgain').click();

        }, 1000);

    };

    $scope.SetCardValue2 = function(result) {
        var cardInfo = eval(result);

        $('#CitizenID2').val(cardInfo.CitizenID);
    };
    $scope.dataReadCard3 = {};
    $scope.SetCardValue3 = function(result) {
        var cardInfo = eval(result);
        console.log(cardInfo);
        $('#loadingReadCard3').hide();

        $('#CitizenID3').val(cardInfo.CitizenID);
        $scope.dataReadCard3 = cardInfo;

        $('#selectCustomerIdType').val('I');
        $scope.data.customerProfile['id-type'] = 'I';

        $('#firstNameTH3').val(cardInfo.FirstNameTH);
        $scope.data.customerProfile['firstname'] = cardInfo.FirstNameTH;

        $('#lastNameTH3').val(cardInfo.LastNameTH);
        $scope.data.customerProfile['lastname'] = cardInfo.LastNameTH;

        cardInfo.BirthDay = formatDate(cardInfo.BirthDay);
        $('#birthDate').val(cardInfo.BirthDay);
        $scope.data.customerProfile['birthdate'] = cardInfo.BirthDay;

        cardInfo.ExpireDay = formatDate(cardInfo.ExpireDay);
        $('#expireDate').val(cardInfo.ExpireDay);
        $scope.data.customerProfile['id-expire-date'] = cardInfo.ExpireDay;

        var prefix = "T2";
        if (cardInfo.PrefixEN == "Mr.") {
            prefix = "T1";
        }
        if (cardInfo.PrefixEN == "Miss") {
            prefix = "T3";
        }

        var sex = "MALE";
        if (cardInfo.Sex == "2") {
            sex = "FEMALE";
        }

        $scope.data.customerProfile['gender'] = sex;
        $scope.data.customerProfile['title-code'] = prefix;

        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 500);

        setTimeout(function() {
            SystemService.calendarDatePicker();
        }, 0);
    };
    // (End) Authentication ----------------------


    // (Start) Camera ----------------------
    $scope.varPhoto = '';

    $scope.initWebCam = function() {
        setTimeout(function() {
            $('#btnSavePhoto').hide();

            var html = webcam.get_html(320, 240);
            $('#dataCamera').html(html);

            webcam.set_api_url(getURL('services/file/upload.service'));
            webcam.set_quality(90); // JPEG quality (1 - 100)
            webcam.set_shutter_sound(true); // play shutter click sound
            webcam.set_hook('onComplete', onCompleteSnap);
        }, 500);
    };

    var onCompleteSnap = function(msg) {
        $scope.varPhoto = msg;

        var ie_preview_image = $('#ie_preview_image')[0];
        ie_preview_image.src = 'data:image/png;base64,' + msg;

        webcam.reset();

        $('#btnSavePhoto').show();
    }

    $scope.webcamSnap = function() {
        webcam.snap();
    };
    // (End) Camera ----------------------

    $scope.afterCloseWarning = function() {

        if ($scope.SubNo === 'null') {
            $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 500);
        }


    };
    // (Start) Validation ----------------------
    $scope.isIdCardExpired = function(expireDate) {
        if (expireDate) {
            var str = expireDate;
            var res = str.split("/");
            var a = moment([Number(moment().format('YYYY')) + 543, moment().format('MM'), moment().format('DD')]);
            var b = moment([res[2], res[1], res[0]]);


            //return moment(expireDate, 'DD/MM/YYYY').diff(moment(), 'days') >= 0;
            return (a.diff(b, 'days') >= 0);
            //return SystemService.convertDateToTH(moment(date).format('DD/MM/YYYY'), 'TH');

        }

        return true;

    };


    // (End) Validation ----------------------


    // (Start) Number Information ----------------------
    var getProPosition = function(partnerCode) {
        //bypass call pricePlan
        var payload = {
            'company-code': $scope.data.simData['company-code'],
            'customer-type': "P",
            'customer-subtype': "PRE",
            'service-level': "C",
            'proposition': "",
            'partner-code': utils.getObject($scope.getAuthen, 'shopcodes.0'),
            'privilege': false
        };

        MigratePostToPreService.getPricePlan(payload, onGetPricePlan);
        //end bypass

        var proPositionPayload = {
            'company-code': $scope.data.simData['company-code'],
            'customer-type': "P",
            'propo-type': 'NEW',
            //'mobile-servicetype': $scope.data.simData['mobile-servicetype'],
            'mobile-servicetype': "PREPAID",
            'partner-code': partnerCode,
            'privilege': false
        };

        MigratePostToPreService.getProPosition(proPositionPayload, onGetProPosition);
    };

    var onGetProPosition = function(result) {
        $scope.proPositionList = result.data['response-data'];

        if ($scope.proPositionList && $scope.proPositionList.length) {
            for (var i = 0; i < $scope.proPositionList.length; i++) {
                var pp = $scope.proPositionList[i];

                var payload = {
                    'company-code': $scope.data.simData['company-code'],
                    'customer-type': "P",
                    'customer-subtype': "PRE",
                    'service-level': pp['service-level'],
                    'proposition': pp['name'],
                    'partner-code': utils.getObject($scope.getAuthen, 'shopcodes.0'),
                    'privilege': false
                };

                //MigratePostToPreService.getPricePlan(payload, onGetPricePlan);
            }
        }
    };

    var onGetPricePlan = function(result) {
        if (!$scope.pricePlanList) {
            $scope.pricePlanList = [];
        }

        var pricePlanList = utils.getObject(result, 'data.response-data');
        if (pricePlanList && pricePlanList.length) {
            $scope.pricePlanList = $scope.pricePlanList.concat(pricePlanList);
        }
    };

    $('#propositionDropdown').change(function(evt) {
        $scope.dirty.selectedPricePlan = $scope.selectedPricePlan = {
            proposition: $scope.selectedPricePlan ? $scope.selectedPricePlan.proposition : evt.target.value,
            description: '',
            rc: ''
        };

        $scope.$digest();
    });
    // (End) Number Information ----------------------


    // (Start) Registration Address ----------------------
    // var onSearchAddress = function(result) {
    //     var address = utils.getObject(result, 'data.response-data.0');

    //     if ($scope.data.customerAddress.zip === address.zipcode) {
    //         $scope.data.customerAddress['sub-district'] = address.subdistrict;
    //         $scope.data.customerAddress['district'] = address.district;
    //         $scope.data.customerAddress['province'] = address.province;
    //     }
    // };

    $scope.useSameAddressAsCard = function() {
        $scope.data.customerAddress = angular.copy($scope.data.customerAddressOriginal);
    };

    $scope.clearAddress = function() {
        $scope.data.customerAddress = {};
    };

    // $scope.$watch('data.customerAddress.zip', function(val) {
    //     if (val && val.length === $scope.zipLength) {
    //         var payload = {
    //             keyword: val
    //         };

    //         MigratePostToPreService.searchAddress(payload, onSearchAddress);
    //     }
    // });
    // (End) Registration Address ----------------------


    // (Start) Reason Control ----------------------
    $scope.reasons = [];
    $scope.selectedReason = {};

    ReasonService.list('119', function(result) {
        $scope.reasons = result;
        $scope.selectedReason = $scope.reasons[86];
    });
    // (End) Reason Control ----------------------


    // (Start) Submit Form ----------------------
    var isDataComplete = function() {
        if (
            $('#authorize').prop('checked') &&
            (!$('#CitizenID2').val() || !$('#authorizeFullName').val())
        ) {
            alert('กรุณากรอกข้อมูลผู้มอบอำนาจ');
            return false;
        }

        if (!$scope.data.customerProfile['id-number'] || !$scope.data.customerProfile['id-type'] ||
            !$scope.data.customerProfile['title-code'] || !$scope.data.customerProfile['firstname'] ||
            !$scope.data.customerProfile['lastname'] || !$scope.data.customerProfile['gender'] ||
            !$scope.data.customerProfile['birthdate'] || !$scope.data.customerProfile['id-expire-date']
        ) {
            alert('กรุณากรอกข้อมูลผู้จดทะเบียนเติมเงินให้ครบถ้วน');
            return false;
        }

        if (!$scope.selectedPricePlan || !Object.keys($scope.selectedPricePlan).length) {
            alert('กรุณาเลือกรายการส่งเสริมการขาย');
            return false;
        }

        if (!$scope.data.customerAddress['zip'] || !$scope.data.customerAddress['province'] ||
            !$scope.data.customerAddress['district'] || !$scope.data.customerAddress['sub-district']
        ) {
            alert('กรุณากรอกที่อยู่จดทะเบียนให้ครบถ้วน');
            return false;
        }

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
            propositionSelected: $scope.selectedProPositionIn,
            priceplanSelected: $scope.selectedPricePlan,
            reason: $scope.selectedReason,
            memo: $scope.memo
        };
    };
    $scope.submit = function() {
        $scope.hasSubmitted = true;

        $scope.data.customerProfile['birthdate'] = SystemService.convertDataThToLongDate($('#birthDate').val());
        $scope.data.customerProfile['id-expire-date'] = SystemService.convertDataThToLongDate($('#expireDate').val());

        var data = generateOrderRequest();

        SystemService.showLoading();
        console.log(data);
        MigratePostToPreService.submitOrder(data, function(result) {
            SystemService.hideLoading();
            console.log(result);
            setTimeout(function() {
                var displayMsg = utils.getObject(result.data, 'display-messages.0');
                console.log(displayMsg);
                if (!displayMsg || !displayMsg['message-type']) {
                    SystemService.showBeforeClose({
                        "message": "DEMO > " + result.data["display-messages"][0]["th-message"],
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
    $scope.openPDFDialog = function() {
        //$scope.data.customerProfile['birthdate'] = SystemService.convertDataThToLongDate($('#birthDate').val());
        //$scope.data.customerProfile['id-expire-date'] = SystemService.convertDataThToLongDate($('#expireDate').val());

        if (!isDataComplete()) {
            return;
        }

        SystemService.showLoading();

        var customerType = 'N';
        if ($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') {
            customerType = 'Y';
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

        if ($scope.isCardValueData && $scope.isCustomerProfile) {
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

        var data = {
            'func': 'POP',
            'header': {
                'title-code': $scope.data.customerProfile['title-code'],
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
            'body': generateOrderRequest()
        };

        console.log(data);
        SystemService.generatePDF(data, function(url) {
            SystemService.hideLoading();

            setTimeout(function() {
                $('#modalPDFOpener').click();

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


            }, 1000);
        });
    };
    // (End) Submit Form ----------------------

});
