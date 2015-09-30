smartApp.controller('MigratePostToPreController', function($routeParams, $scope, AuthenService, MigratePostToPreService, ReasonService, SystemService) {

    // Templates
    var runTime = new Date().getTime();
    $scope.template = {
        header: 'app/views/header.html?' + runTime,
        customerprofile: 'app/views/customerprofile.html?' + runTime,
        effectivepriceplan: 'app/views/effectivepriceplan.html?' + runTime,
        reasonmemo: 'app/views/reasonmemo.html?' + runTime
    };


    // Prepare page parameters
    $scope.shopType = '0';
    $scope.SubNo = $routeParams.SubNo;


    // Initialize variables
    $scope.divID = 'migratePostToPreContent';
    $scope.subNoLength = 10;


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

    $scope.openSSO = function () {
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
                    }
                    catch (ex) {}
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
                    }
                    else {
                        setTimeout(function() {
                            SystemService.showAlert(displayMsg);
                        }, 1000);
                    }
                });
            });
        }
        else {
            getReadyCitizenInput();
        }
    };

    $scope.onInputId = function () {
        var value = $('#CitizenID').val();

        if (value.length === 13) {
            if (value === $scope.data.customerProfile['id-number']) {
                $scope.isCustomerProfile = true;

                $('#unMatch').hide();
                $('.fancybox-close').click();

                return true;
            }
            else {
                $('#unMatch').show();
            }
        }
    };

    $scope.onInputId2 = function () {
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

    $scope.SetCardValue = function (result) {
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

    $scope.webcamSnap = function () {
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


    // (Start) Number information ----------------------
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
console.log(result);
    };
    // (End) Number information ----------------------








    $scope.showReadcard = "1";
    $scope.isMatch = true;



    $scope.isReadCardSuccess = false;

    $scope.isManualReadCard = true;
    $scope.isAuthorize = false;


    












    

    



    $scope.pricePlans = [
        { pricePlan: "EDATAP68: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002720", rc: "399" },
        { pricePlan: "ADATAP99: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002721", rc: "499" },
        { pricePlan: "YDATAP55: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002722", rc: "799" },
        { pricePlan: "EDATAP69: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002723", rc: "399" },
        { pricePlan: "YDATAP56: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002724", rc: "799" },
        { pricePlan: "EDATAP44: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002725", rc: "999" }
    ];


    
    // Reasons control
    $scope.reasons = [];
    $scope.reason = "";
    $scope.selectReason = {};

    ReasonService.list("119", function (result) {
        $scope.reasons = result;
        $scope.reason = $scope.reasons[86];
        $scope.selectReason = $scope.reasons[86];
    });

    $scope.onReasonChange = function () {
        $scope.selectReason = $scope.reasons[$('#selectReasonId').val()];
        console.log($scope.selectReason);
    };

    



    $scope.manualInputReadCard = function () {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        //document.getElementById("CitizenID").disabled = false;

        setTimeout(function () {
            $('#CitizenID').val('');
        }, 0);
        $scope.isManualReadCard = false;
    };

    

    $scope.SetCardValue2 = function (result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH);
        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    };

    $scope.SetCardValue3 = function (result) {
        $('#loadingReadCard3').hide();

        $scope.cardInfo3 = eval(result);
        console.log($scope.cardInfo3);

        $('#citizenID3').val($scope.cardInfo3.CitizenID);
        $('#prefixTH3').val($scope.cardInfo3.PrefixTH);
        $('#firstNameTH3').val($scope.cardInfo3.FirstNameTH);
        $('#lastNameTH3').val($scope.cardInfo3.LastNameTH);
        $('#birthDay').val($scope.cardInfo3.BirthDay);
        $('#expireDay').val($scope.cardInfo3.ExpireDay);
        $('#sex3').val($scope.cardInfo3.Sex);

        //$scope.cardType = "6";
        $('#cardType').val('6');

        //binding Tax Id
        $('#taxId3').val($scope.cardInfo3.CitizenID);

        //binding user registerd - ระบุผู้ใช้หมายเลข
        $('#titleRegisterd').val($scope.cardInfo3.PrefixTH);
        $('#firstNameRegisterd').val($scope.cardInfo3.FirstNameTH);
        $('#lastNameRegisterd').val($scope.cardInfo3.LastNameTH);
        $('#birthDayRegisterd').val($scope.cardInfo3.BirthDay);


        //$scope.newOwner = {
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
        //};
        //console.log($scope.newOwner);
    };

    

    

    $scope.confirmPrint = function () {
        //confirm
        SystemService.showBeforeClose({
            "message": "รายการคำขอเลขที่ OR30935 ",
            "message2": "ได้รับข้อมูลเรียบร้อยแล้ว",
        });
        //SystemService.showConfirm().then(function (value) {

        //}, function (reason) {
        //    //cancel

        //});
    };

    $scope.selectedPricePlan = function (pp) {
        $scope.isSelectedPricePlan = pp.pricePlan;
        console.log(pp);
        $scope.pricePlan = {
            name: pp.pricePlan,
            promotion: pp.promotion,
            rc: pp.rc
        };
    };

    

    

});