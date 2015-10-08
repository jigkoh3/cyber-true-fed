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
        if (!date) return date;

        return moment(date).format('DD/MM/YYYY');
    };

    var onGetSIMData = function(result) {
        $scope.data = result.data;
        $scope.getSIMDataFailed = true;
        if (!$scope.data) {
            $scope.getSIMDataFailed = true;
            SystemService.hideLoading();

            return;
        }

        $scope.data.customerProfile['birthdate'] = formatDate($scope.data.customerProfile['birthdate']);
        $scope.data.customerProfile['id-expire-date'] = formatDate($scope.data.customerProfile['id-expire-date']);

        authenticate();
    };

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

            var partnerCode = utils.getObject($scope.getAuthen, 'partnerCodes.0');

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
                                    closeClick: false
                                }
                            },

                            beforeShow: function() {
                                $('#CitizenID').prop('disabled', true);
                                $('#loadingReadCard').hide();
                                $('#unMatch').hide();
                            },

                            afterClose: function() {
                                if (!$scope.onInputId()) {
                                    window.close();
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

        if (value.length === 13) {
            if (value === $scope.data.customerProfile['id-number']) {
                $scope.isCustomerProfile = true;

                $('#unMatch').hide();
                $('.fancybox-close').click();

                return true;
            } else {
                $('#unMatch').show();
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
            'en-message': '',
            'th-message': '',
            'technical-message': ''
        });
    };

    $scope.SetCardValue = function(result) {
        $scope.cardInfo = eval(result);

        $('#CitizenID').val($scope.cardInfo.CitizenID);
        $scope.onInputId();
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


    // (Start) Validation ----------------------
    $scope.isIdCardExpired = function(expireDate) {
        if (expireDate) {
            return moment(expireDate, 'DD/MM/YYYY').diff(moment(), 'days') >= 0;
        }

        return false;
    };

    SystemService.calendarDatePicker();
    // (End) Validation ----------------------


    // (Start) Number Information ----------------------
    var getProPosition = function(partnerCode) {
        var proPositionPayload = {
            'company-code': $scope.data.simData['company-code'],
            'customer-type': $scope.data.simData['account-category'],
            'propo-type': 'NEW',
            'mobile-servicetype': $scope.data.simData['mobile-servicetype'],
            'partner-code': partnerCode,
            'privilege': false
        };

        MigratePostToPreService.getProPosition(proPositionPayload, onGetProPosition);
    };

    var onGetProPosition = function(result) {
        $scope.proPositionList = result.data['response-data'];

        if ($scope.proPositionList && $scope.proPositionList.length) {
            //$scope.selectedProPosition = $scope.proPositionList[0]['proposition-code'];
        }
    };

    var onGetPricePlan = function(result) {
        $scope.pricePlanList = utils.getObject(result, 'data.response-data');
        //$scope.dirty.selectedPricePlan = $scope.selectedPricePlan = $scope.pricePlanList[0];
    };

    $scope.$watch('selectedProPosition', function(val) {
        if (!val) return;

        var proposition = _.find($scope.proPositionList, function(item) {
            return item['proposition-code'] === val;
        });

        $scope.selectedProPositionIn = proposition;

        var payload = {
            'company-code': $scope.data.simData['company-code'],
            'customer-type': $scope.data.simData['account-category'],
            'customer-subtype': $scope.data.simData['account-sub-type'],
            'service-level': proposition['service-level'],
            'proposition': val,
            'partner-code': utils.getObject($scope.getAuthen, 'partnerCodes.0'),
            'privilege': false
        };

        MigratePostToPreService.getPricePlan(payload, onGetPricePlan);
    });
    // (End) Number Information ----------------------


    // (Start) Registration Address ----------------------
    var onSearchAddress = function(result) {
        var address = utils.getObject(result, 'data.response-data.0');

        if ($scope.data.customerAddress.zip === address.zipcode) {
            $scope.data.customerAddress['sub-district'] = address.subdistrict;
            $scope.data.customerAddress['district'] = address.district;
            $scope.data.customerAddress['province'] = address.province;
        }
    };

    $scope.useSameAddressAsCard = function() {
        $scope.data.customerAddress = angular.copy($scope.data.customerAddressOriginal);
    };

    $scope.clearAddress = function() {
        $scope.data.customerAddress = {};
    };

    $scope.$watch('data.customerAddress.zip', function(val) {
        if (val && val.length === $scope.zipLength) {
            var payload = {
                keyword: val
            };

            MigratePostToPreService.searchAddress(payload, onSearchAddress);
        }
    });
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

        if (!isDataComplete()) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วนก่อน');
            return;
        }

        SystemService.showLoading();

        var customerType = 'N';
        if ($scope.data.simData['account-category'] === 'B' || $scope.data.simData['account-category'] === 'C') {
            customerType = 'Y';
        }

        var data = {
            'func': 'POP',
            'header': {
                'title-code': $scope.data.customerProfile['title-code'],
                'title': $scope.data.customerProfile['title'],
                'firstname': $scope.data.customerProfile['firstname'],
                'lastname': $scope.data.customerProfile['lastname'],
                'customerType': customerType,
                'authorizeFullName': '',
                'id-number': $scope.data.customerProfile['id-number'],
                'product-id-number': $scope.SubNo,
                'ouId': $scope.data.simData['ouId'],
                'orderId': orderData.orderId,
                'photo': $scope.varPhoto,

                'photoIdCard': '',
                'photoType': 'SN',
                'titleEn': '',
                'firstnameEn': '',
                'lastnameEn': '',
                'expireDay': $scope.data.customerProfile['id-expire-date'],
                'birthDay': $scope.data.customerProfile['birthdate'],
                'issueDay': '',

                'homeNumber': '',
                'moo': '',
                'trok': '',
                'soi': '',
                'road': '',
                'district': '',
                'amphur': '',
                'province': ''
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