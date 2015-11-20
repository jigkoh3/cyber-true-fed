smartApp.controller('MigratePostToPreController', function($routeParams, ValidateMsgService, $filter, $scope, AuthenService, MigratePostToPreService, ReasonService, SystemService) {

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
    $scope.varPhotoLastest = "";
    $scope.isCardValueDataLastest = false;

    $scope.divID = 'migratePostToPreContent';
    $scope.subNoLength = 10;
    $scope.zipLength = 5;
    $scope.currentPage = 1;

    $scope.isLastestUser = true;
    $scope.isReadCardSuccess = false;
    $scope.isSecondAuhenFailed = true;
    $scope.approver = "";
    $scope.isCardValueData = false;
    $scope.userDealer = false;
    $scope.isPrefixNull = true;

    //paging
    $scope.currentPage = 1;
    $scope.pageSize = 10;

    $scope.currentPage_cug = 1;
    $scope.pageSize_cug = 10;
    $scope.totalCUG = 10;
    //end paging

    $scope.dirty = {
        selectedPricePlan: {}
    };
    $scope.slipType = "H";
    $scope.isVerify = true;

    var isFocus = false;
    var idFocus = "";



    // Initalize states of the UI controls in the CustomerProfile template to display properly in the page
    $scope.onCustomerProfileTemplateLoaded = function() {
        $('#unMatch2').hide();
        $scope.isAuthorize = false;
        $scope.isCustomerProfile = false;
    };

    $scope.billPayment = {
        email: "",
        smss: "",
        accountLang: "TH"
    };

    //address AND PostCodes zipcode
    $scope.addressList = [];
    var tempAddressList = [];
    $scope.selectedAddress = "";
    $scope.pauseAddress = false;
    $scope.isLoadAddress = false;
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
    $scope.onFocusAddress = function() {
        if ($scope.addressList.length > 0) {
            $('#ulAddressList').show();
        }
    };

    $scope.initModalReadCard = function() {
        $scope.isCardValueData = false;
        $('#CitizenID').val("");
        if ($scope.getAuthen['shopType'] == '1' && $scope.getAuthen['isSecondAuthen'] == false) {
            setTimeout(function() {
                $('#CitizenID').prop('disabled', false);
                $('#CitizenID').focus();
                $('#btnSSO').hide();
            }, 500);
        }
    };

    $scope.onChangeTitleOther = function() {
        console.log($scope.data.customerProfileNew['title']);
        var selectTitleOther = $filter('filter')($scope.titleOtherTypeList, {
            value: $scope.data.customerProfileNew['title']
        });
        console.log(selectTitleOther[0]);
        if (SystemService.checkObj(selectTitleOther[0], ['attributes', 'GENDER'])) {
            $('#sex3').val(selectTitleOther[0]['attributes']['GENDER']);
            $scope.data.customerProfileNew['gender'] = selectTitleOther[0]['attributes']['GENDER'];
            console.log(selectTitleOther[0]['attributes']['GENDER']);
            console.log($scope.data.customerProfileNew['gender']);
        } else {
            $('#sex3').val('ALL');
            console.log('ALL');
        }
        $scope.titleOther2 = $scope.data.customerProfileNew['title'];
    };

    $scope.onBlurAddress = function() {
        $('#ulAddressList').hide();
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

    $scope.mailAddress = {
        newss: ''
    };

    $scope.txtSearchAddress = "";
    var accountLang = "TH";
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
    $scope.onChangeBillPaymentAccountLang = function() {
        $scope.onInputAddress();
    };
    $scope.setSearchAddress = function(address) {
        console.log(address);
        $scope.mailAddress.province = address['province'];
        $scope.mailAddress.amphur = address['district'];
        $scope.mailAddress.district = address['subdistrict'];
        $scope.mailAddress.postcode = address['zipcode'];
        $('#ulAddressList').hide();
    };
    $scope.onSelectedAddress = function(e) {

        $scope.setSearchAddress($scope.addressList[e]);
        setTimeout(function() {
            $('#idBindDataAgain').click();
        }, 0);
    };
    // End Addres


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
                //alert($scope.data.customerProfile['id-type']);
                //$('#selectCustomerIdType').val(idType);
                console.log($scope.data);


                if ($scope.data.simData['account-category'] == "I" || $scope.data.simData['account-category'] == "P") {
                    $('#selectCustomerIdType').val($scope.data.customerProfile['id-type']);
                    $scope.mailAddress.province = $scope.data.customerAddress['province'];
                    $scope.mailAddress.amphur = $scope.data.customerAddress['sub-district'];
                    $scope.mailAddress.district = $scope.data.customerAddress['district'];
                    $scope.mailAddress.homeNumber = $scope.data.customerAddress['number'];
                    $scope.mailAddress.moo = $scope.data.customerAddress['moo'];
                    $scope.mailAddress.road = $scope.data.customerAddress['street'];
                    $scope.mailAddress.soi = $scope.data.customerAddress['soi'];
                    $scope.mailAddress.postcode = $scope.data.customerAddress['zip'];
                    $scope.mailAddress.village = $scope.data.customerAddress['household'];
                    $scope.mailAddress.buildingName = $scope.data.customerAddress['building-name'];
                    $scope.mailAddress.buildingRoom = $scope.data.customerAddress['building-room'];
                    $scope.mailAddress.buildingFloor = $scope.data.customerAddress['building-floor'];
                }

                //$scope.data.customerProfile['id-type'] = 'I';
            }, 1000);



            //$scope.data.customerProfile['id-type'] = idType;

            console.log(idType);
            if (idType == "I") {
                $scope.isLastestUser = false;
                $('#divShowAuthorize').hide();
            }

            $scope.data.customerProfileNew['birthdate'] = formatDate($scope.data.customerProfile['birthdate']);
            $scope.data.customerProfileNew['id-expire-date'] = formatDate($scope.data.customerProfile['id-expire-date']);

            authenticate();
        }
        setTimeout(function() {

            if ($scope.data.simData['account-category'] == "B" || $scope.data.simData['account-category'] == "C") {
                $scope.data.customerProfileNew['id-type'] = "";
                $('#selectCustomerIdType').val($scope.data.customerProfileNew['id-type']);
                $scope.data.customerProfileNew['id-number'] = "";
            };

        }, 100);
        //setTimeout(function() {
        SystemService.calendarDatePicker();

        console.log($scope.userDealer);
        //}, 100);
    };
    $scope.isSelectedPricePlan = false;
    $scope.selectedPricePlan = function(pp) {

        $('#divPage').click(function() {
            $scope.onBlurPricePlanItem();
        });
        //$('#ppfilter').val('');
        //$scope.pricePlanFilter = "";
        $scope.pricePlan2 = {
            name: pp.pricePlan,
            promotion: pp.promotion,
            rc: pp.rc,
            priceplans: pp.priceplans,
            code: pp["proposition-code"],
            saveName: pp.saveName,
            pp: pp
        };
        $scope.isSelectedPricePlan = true;
        $scope.isSelectedPricePlan2 = true;
        console.log(pp);
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
    } else {
        setTimeout(function() {
            $('#divShowAuthorize').hide();
        }, 1000);
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

            $scope.checkUserDealer();
            $scope.checkPrefixNull();
            $scope.isIdCardExpired();
            $scope.chkShopcode();

            var partnerCode = utils.getObject($scope.getAuthen, 'shopcodes.0');
            if ($scope.getAuthen.shopcodes.length == 1) {
                $scope.partnerCode = partnerCode;
                getProPosition($scope.partnerCode);
            } else {

                $scope.partnerCode = "";
            }
            // getProPosition(partnerCode);

            SystemService.getOrderId($scope.getAuthen.channel, partnerCode, function(order) {
                SystemService.hideLoading();
                localStorage.setItem('orderId', order.orderId);
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
            $('#CitizenID').val("");
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

                    }
                    if (result["display-messages"] === undefined) {
                        var res = result["response-data"][0]['authRes'];
                        if (res['responseCode'] == "200") {
                            $scope.approver = result['response-data'][0]['loginName'];
                            setTimeout(function() {
                                getReadyCitizenInput();
                            }, 1000);
                        } else {
                            // $.fancybox.close();
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
                $scope.showDataDealer = false;

                if ($scope.isCardValueData) {
                    //alert("");
                    //$('#snapshot').hide();
                    $scope.isReadCardSuccess = true;
                } else {
                    //$('#snapshot').show();
                    $scope.isReadCardSuccess = false;
                }

                $('#unMatch').hide();
                $('.fancybox-close').click();
                return true;
            } else {
                $scope.isCardValueData = false;
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
        $('#loadingReadCard2').hide();
        var cardInfo = eval(result);
        $scope.cardInfo2 = eval(result);

        $('#CitizenID2').val(cardInfo.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH);
    };
    $scope.dataReadCard3 = {};
    $scope.isDataReadCard3 = false;
    $scope.SetCardValue3 = function(result) {

        var cardInfo = eval(result);
        $scope.isReadIdCardExpired(cardInfo.ExpireDay);
        console.log(cardInfo);
        $('#loadingReadCard3').hide();
        $scope.isDataReadCard3 = true;
        $('#CitizenID3').val(cardInfo.CitizenID);
        $scope.dataReadCard3 = cardInfo;
        $scope.isCardValueDataLastest = true;
        $('#selectCustomerIdType').val('I');
        $scope.data.customerProfileNew['id-type'] = 'I';

        $('#citizenID3').val(cardInfo.CitizenID);
        $scope.data.customerProfileNew['id-number'] = cardInfo.CitizenID;

        $('#firstNameTH3').val(cardInfo.FirstNameTH);
        $scope.data.customerProfileNew['firstname'] = cardInfo.FirstNameTH;

        $('#lastNameTH3').val(cardInfo.LastNameTH);
        $scope.data.customerProfileNew['lastname'] = cardInfo.LastNameTH;

        cardInfo.BirthDay = formatDate(cardInfo.BirthDay);
        $('#birthDate').val(cardInfo.BirthDay);
        $scope.data.customerProfileNew['birthdate'] = cardInfo.BirthDay;

        cardInfo.ExpireDay = formatDate(cardInfo.ExpireDay);
        $('#expireDate').val(cardInfo.ExpireDay);
        $scope.data.customerProfileNew['id-expire-date'] = cardInfo.ExpireDay;

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

        $('#sex3').val(sex);
        $scope.data.customerProfileNew['gender'] = sex;
        $('#prefix3').val(prefix);
        $scope.data.customerProfileNew['title-code'] = prefix;

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
            // $('#dataSubNo').val('');
            setTimeout(function() {
                $('#dataSubNo').focus();
            }, 1000);
        }
        if (idFocus) {
            if (idFocus == "txtPartnerCode") {
                $scope.partnerCode = "";
            }
            $('#' + idFocus).focus();
            idFocus = "";
        } else {
            // $scope.validateUI();
        }


    };
    $scope.cardExpire = false;
    // (Start) Validation ----------------------
    $scope.isIdCardExpired = function() {
        // if (expireDate) {
        var str = $scope.data.customerProfile['id-expire-date'];
        var res1 = str.split("T");
        var res = res1[0].split("-");
        var a = moment([Number(moment().format('YYYY')) + 543, moment().format('MM'), moment().format('DD')]);
        var b = moment(["" + (Number(res[0]) + 543) + "", res[1], res[2]]);

        //return moment(expireDate, 'DD/MM/YYYY').diff(moment(), 'days') >= 0;
        // return (a.diff(b, 'days') >= 0);
        //return SystemService.convertDateToTH(moment(date).format('DD/MM/YYYY'), 'TH');
        if (a.diff(b, 'days') >= 0) {
            $scope.cardExpire = false;
            $scope.data.customerProfileNew['id-expire-date'] = "";
            $('#expireDate').val($scope.data.customerProfileNew['id-expire-date']);
        } else {
            $scope.cardExpire = true;

        }

        // }

        // return true;

    };

    $scope.isReadIdCardExpired = function(expireDate) {
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

    $scope.getProPo = function() {

        //bypass call pricePlan
        SystemService.showLoading();
        var payload = {
            'company-code': $scope.data.simData['company-code'],
            'customer-type': "P",
            'customer-subtype': "PRE",
            'service-level': "C",
            'proposition': $scope.selectedPricePlan.proposition ? $scope.selectedPricePlan.proposition : "",
            'partner-code': $scope.partnerCode,
            'privilege': false
        };

        console.log(payload);
        MigratePostToPreService.getPricePlan(payload, onGetPricePlan);
        //end bypass
    }


    // (End) Validation ----------------------


    // (Start) Number Information ----------------------
    var getProPosition = function(partnerCode) {
        //bypass call pricePlan
        SystemService.showLoading();
        var payload = {
            'company-code': $scope.data.simData['company-code'],
            'customer-type': "P",
            'customer-subtype': "PRE",
            'service-level': "C",
            'proposition': $scope.selectedPricePlan.proposition ? $scope.selectedPricePlan.proposition : "",
            'partner-code': $scope.partnerCode,
            'privilege': false
        };
        console.log(payload);
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
        SystemService.hideLoading();

        if (!$scope.pricePlanList) {

        }
        $scope.pricePlanList = [];
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
    $scope.clearPP = function(){
        $scope.proPositionList = [];
        $scope.pricePlanList = [];
    };

    $scope.onChangeShop = function() {
        $scope.clearPP();
        $scope.selectedPricePlan = {};
        if ($scope.partnerCode) {
            getProPosition($scope.partnerCode);
        }
    };

    $scope.onKeyChangeShop = function() {
        $scope.clearPP();
        $scope.selectedPricePlan = {};
        if ($scope.partnerCode && $scope.partnerCode.length == 8) {
            // getProPosition($scope.partnerCode);
            $scope.onCheckShopCode();
        } else {
            $scope.selectedPricePlan = {};
        }
    };

    $scope.useSameAddressAsCard = function() {
        $scope.data.customerAddress = angular.copy($scope.data.customerAddressOriginal);
    };

    $scope.clearAddress = function() {
        $scope.data.customerAddress = {};
    };

    $scope.useAddressAsCard = function(type) {

        if (type == 'H') {
            console.log($scope.dataReadCard3);
            //$scope.mailAddress = $scope.tempCardAddress;
            $scope.mailAddress.province = "";
            $scope.mailAddress.amphur = "";
            $scope.mailAddress.district = "";
            $scope.mailAddress.homeNumber = "";
            $scope.mailAddress.moo = "";
            $scope.mailAddress.road = "";
            $scope.mailAddress.soi = "";
            $scope.mailAddress.trok = "";
            $scope.mailAddress.postcode = "";
            $scope.mailAddress.village = "";
            $scope.mailAddress.buildingName = "";
            $scope.mailAddress.buildingRoom = "";
            $scope.mailAddress.buildingFloor = "";




            $scope.mailAddress.province = $scope.dataReadCard3.Province;
            $scope.mailAddress.amphur = $scope.dataReadCard3.Amphur;
            $scope.mailAddress.district = $scope.dataReadCard3.District;
            $scope.mailAddress.homeNumber = $scope.dataReadCard3.HomeNumber;
            $scope.mailAddress.moo = $scope.dataReadCard3.Moo;
            $scope.mailAddress.road = $scope.dataReadCard3.Road;
            $scope.mailAddress.soi = $scope.dataReadCard3.Soi;
            $scope.mailAddress.trok = $scope.dataReadCard3.Trok;
        } else {
            $scope.billAddress = $scope.tempCardAddress;
        }
    };

    $scope.unUseAddressAsCard = function(type) {
        if (type == 'H') {
            $scope.mailAddress = {};
            $('#ulAddressList').hide();
            $scope.addressList = [];
        } else {
            $scope.billAddress = {};
        }

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
    // $scope.reasons = [];
    // $scope.selectedReason = {};

    //Reasons
    $scope.reasons = [];
    $scope.reason = "";
    $scope.selectReason = {};

    //fix MG5J : 16/11/2558

    // ReasonService.list('119', function(result) {
    //     // $scope.reasons = result;
    //     // $scope.selectedReason = $scope.reasons[86];

    //     //solution for none fix index
    //     $scope.reasons = result;
    //     var myArray = result;
    //     var searchText = "MGJ5",
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
    //     //solution for none fix index
    // });
    // (End) Reason Control ----------------------

    $scope.onReasonChange = function() {
        $scope.selectReason = $scope.reasons[$('#selectReasonId').val()];
        console.log($('#selectReasonId').val(), $scope.selectReason);
    };

    // (Start) Submit Form ----------------------
    var isDataComplete = function() {
        var isNull = function(txt) {
            if (txt) {
                return false;
            } else {
                return true;
            }
        };
        var showValidate = function(id, msg) {
            idFocus = id;
            SystemService.showAlert(msg);
            return;
        };

        if (isNull($scope.data.customerProfileNew['id-number'])) {
            showValidate("citizenID3", ValidateMsgService.data.msgNewPreCusIDnoEmpty);
            return;
        } else if (isNull($scope.data.customerProfileNew['id-type'])) {
            showValidate("selectCustomerIdType", ValidateMsgService.data.msgNewPreCusIDnoEmpty);
            return;
        } else if (isNull($scope.data.customerProfileNew['title-code'])) {
            showValidate("prefix3", ValidateMsgService.data.msgNewPreCusPrefixEmpty);
            return;
        } else if (isNull($scope.data.customerProfileNew['firstname'])) {
            showValidate("firstNameTH3", ValidateMsgService.data.msgNewPreCusFirstNameEmpty);
            return;
        } else if (isNull($scope.data.customerProfileNew['lastname'])) {
            showValidate("lastNameTH3", ValidateMsgService.data.msgNewPreCusLastNameEmpty);
            return;
        } else if (isNull($scope.data.customerProfileNew['gender'])) {
            showValidate("sex3", ValidateMsgService.data.msgNewPreCusGenderEmpty);
            return;
        } else if (isNull($('#birthDate').val())) {
            showValidate("birthDate", ValidateMsgService.data.msgNewPreCusBirthdateEmpty);
            return;
        } else if (isNull($('#expireDate').val())) {
            showValidate("expireDate", ValidateMsgService.data.msgNewPreCusExpireDateEmpty);
            return;
        } else if (isNull($('#preCusPricePlan').val())) {
            showValidate("preCusPricePlan", ValidateMsgService.data.msgNewPreCusPricePlanEmpty);
            return;

        } else if (isNull($scope.mailAddress.postcode)) {
            showValidate("txtmailAddresspostcode", ValidateMsgService.data.msgBillZipcodeEmpty);
            return;
        } else if (isNull($scope.mailAddress.province)) {
            showValidate("txtmailAddressprovince", ValidateMsgService.data.msgBillProvinceEmpty);
            return;
        } else if (isNull($scope.mailAddress.amphur)) {
            showValidate("txtmailAddressamphur", ValidateMsgService.data.msgBillDistrictEmpty);
            return;
        } else if (isNull($scope.mailAddress.district)) {
            showValidate("txtMaillAddressDistrict", ValidateMsgService.data.msgBillSubDistrictEmpty);
            return;
        } else if (isNull($scope.mailAddress.homeNumber)) {
            showValidate("txtMailAdressHomeNumber", ValidateMsgService.data.msgBillHouseNoEmpty);
            return;
        } else if (isNull($scope.mailAddress.moo)) {
            showValidate("txtMailAddressMoo", ValidateMsgService.data.msgBillVillageNoEmpty);
            return;
        } else if (isNull($scope.mailAddress.road)) {
            showValidate("txtMailAddressRoad", ValidateMsgService.data.msgBillRoadEmpty);
            return;
        } else {


        }
        // if (
        //     $('#authorize').prop('checked') &&
        //     (!$('#CitizenID2').val() || !$('#authorizeFullName').val())
        // ) {
        //     alert('กรุณากรอกข้อมูลผู้มอบอำนาจ');
        //     return false;
        // }
        // $scope.data.customerProfileNew['birthdate'] = $('#birthDate').val();
        // $scope.data.customerProfileNew['id-expire-date'] = $('#expireDate').val();

        // if (!$scope.data.customerProfileNew['id-number'] || !$scope.data.customerProfileNew['id-type'] ||
        //     !$scope.data.customerProfileNew['title-code'] || !$scope.data.customerProfileNew['firstname'] ||
        //     !$scope.data.customerProfileNew['lastname'] || !$scope.data.customerProfileNew['gender'] ||
        //     !$scope.data.customerProfileNew['birthdate'] || !$scope.data.customerProfileNew['id-expire-date']
        // ) {
        //     alert('กรุณากรอกข้อมูลผู้จดทะเบียนเติมเงินให้ครบถ้วน');
        //     return false;
        // }

        // if (!$scope.selectedPricePlan || !Object.keys($scope.selectedPricePlan).length) {
        //     // alert('กรุณาเลือกรายการส่งเสริมการขาย');
        //     SystemService.showAlert(ValidateMsgService.data.pleaseSelectPP);
        //     idFocus = "txtPricePlanFilter";
        //     return false;
        // }

        // if (!$scope.data.customerAddress['zip'] || !$scope.data.customerAddress['province'] ||
        //     !$scope.data.customerAddress['district'] || !$scope.data.customerAddress['sub-district']
        // ) {
        //     alert('กรุณากรอกที่อยู่จดทะเบียนให้ครบถ้วน');
        //     return false;
        // }

        return true;
    };

    var generateOrderRequest = function(postToPreData) {
        $scope.data.customerProfile['language'] = "TH";
        $scope.data.customerAddress['district'] = $scope.mailAddress.amphur;
        $scope.data.customerAddress['sub-district'] = $scope.mailAddress.district;
        $scope.data.customerAddress['zip'] = $scope.mailAddress.postcode;
        $scope.data.customerAddress['province'] = $scope.mailAddress.province;
        $scope.data.customerAddress['moo'] = $scope.mailAddress.moo;
        $scope.data.customerAddress['number'] = $scope.mailAddress.homeNumber;
        $scope.data.customerAddress['building-floor'] = $scope.mailAddress.buildingFloor;
        $scope.data.customerAddress['building-name'] = $scope.mailAddress.buildingName;
        $scope.data.customerAddress['building-room'] = $scope.mailAddress.buildingRoom;
        $scope.data.customerAddress['soi'] = $scope.mailAddress.soi;
        $scope.data.customerAddress['street'] = $scope.mailAddress.road;
        $scope.data.customerAddress['village'] = $scope.mailAddress.village;


        return {
            customerProfile: $scope.data.customerProfile,
            customerProfileNew: $scope.data.customerProfileNew,
            customerAddress: $scope.data.customerAddress,
            productDetails: $scope.data.simData,
            orderData: orderData,
            saleAgent: $scope.getAuthen,
            propositionSelected: $scope.selectedProPositionIn,
            priceplanSelected: $scope.selectedPricePlan,
            reason: $scope.selectedReason,
            memo: $scope.memo,
            postToPreData: postToPreData,
            approver: $scope.approver,
            selectReason: $scope.selectReason,
            partnerCode: $scope.partnerCode
        };
    };
    $scope.submit = function() {
        $scope.hasSubmitted = true;

        $scope.data.customerProfileNew['birthdate'] = SystemService.convertDataThToLongDate($('#birthDate').val());
        $scope.data.customerProfileNew['id-expire-date'] = SystemService.convertDataThToLongDate($('#expireDate').val());
        console.log($scope.selectedReason);
        console.log($scope.reason);


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

    $scope.checkUserDealer = function() {
        if ($scope.shopType == "1" && $scope.getAuthen['isSecondAuthen'] == false) {
            $scope.userDealer = true;
            $scope.showDataDealer = true;
        } else {
            $scope.userDealer = false;
            $scope.showDataDealer = false;
        }
    };

    $scope.checkPrefixNull = function() {
        if ($scope.data.customerProfile['title-code']) {
            $scope.isPrefixNull = false;
        } else {
            $scope.isPrefixNull = true;
        }
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
        var newTitle = $filter('filter')($scope.titleTypeListx, {
            'value': $scope.data.customerProfileNew['title-code']
        });
        if (newTitle.length > 0) {
            newTitle = newTitle[0]['th-description'];
        } else {
            newTitle = "";
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

        if ($scope.isCardValueDataLastest) {
            cardValueDataNew.photoType = "SC";
            cardValueDataNew.photoIdCard = $scope.dataReadCard3.CitizenID;
            cardValueDataNew = {
                //NEW---
                "photoIdCard": $scope.dataReadCard3.Photo,

                //SC=Scan
                //SN=Snap
                "photoType": "SC",
                "titleEn": $scope.dataReadCard3.PrefixEN,
                "firstnameEn": $scope.dataReadCard3.FirstNameEN,
                "lastnameEn": $scope.dataReadCard3.LastNameEN,

                "titleTh": $scope.dataReadCard3.PrefixTH,
                "firstnameTh": $scope.dataReadCard3.FirstNameTH,
                "lastnameTh": $scope.dataReadCard3.LastNameTH,

                "expireDay": $scope.dataReadCard3.ExpireDay,
                "birthDay": $scope.dataReadCard3.BirthDay,
                "issueDay": $scope.dataReadCard3.IssueDay,

                //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                "homeNumber": $scope.dataReadCard3.HomeNumber,
                "moo": $scope.dataReadCard3.Moo,
                "trok": $scope.dataReadCard3.Trok,
                "soi": $scope.dataReadCard3.Soi,
                "road": $scope.dataReadCard3.Road,
                "district": $scope.dataReadCard3.District,
                "amphur": $scope.dataReadCard3.Amphur,
                "province": $scope.dataReadCard3.Province
                    //NEW---
            };

        }

        if ($scope.isReadCardSuccess) {

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
            'body': generateOrderRequest({
                "title": newTitle,
                "firstname": $scope.data.customerProfileNew['firstname'],
                "lastname": $scope.data.customerProfileNew['lastname'],
                "photo": $scope.varPhotoLastest,
                "id-number": $('#citizenID3').val(),
                //NEW---
                "photoIdCard": cardValueDataNew["photoIdCard"],

                //SC=Scan
                //SN=Snap
                "photoType": cardValueDataNew["photoType"],
                "titleEn": cardValueDataNew["titleEn"],
                "firstnameEn": cardValueDataNew["firstnameEn"],
                "lastnameEn": cardValueDataNew["lastnameEn"],
                "expireDay": cardValueDataNew["expireDay"],
                "birthDay": cardValueDataNew["birthDay"],
                "issueDay": cardValueDataNew["issueDay"],

                //HomeNumber : '91',Moo : '10',Trok : '',Soi : '',Road : '',District : 'กังแอน',Amphur : 'ปราสาท',Province : 'สุรินทร์'"
                "homeNumber": cardValueDataNew["homeNumber"],
                "moo": cardValueDataNew["moo"],
                "trok": cardValueDataNew["trok"],
                "soi": cardValueDataNew["soi"],
                "road": cardValueDataNew["road"],
                "district": cardValueDataNew["district"],
                "amphur": cardValueDataNew["amphur"],
                "province": cardValueDataNew["province"]
                    //NEW---
            })

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

    $scope.userDealer = false;
    $scope.showDataDealer = false;

    $scope.isChkShopcode = true;
    $scope.chkShopcode = function() {
        if ($scope.getAuthen.shopcodes.length == 1) {
            $scope.isChkShopcode = true;
        } else {
            $scope.isChkShopcode = false;
        }
    };

    $scope.onCheckShopCode = function() {
        SystemService.showLoading();
        var target = "profiles/partner/validatepartner?function-type=MIGRATE_POSTTOPRE&partner-code=" + $scope.partnerCode;
        MigratePostToPreService.validatePartnerCallback(target, function(result) {
            SystemService.hideLoading();
            if (result.data["display-messages"].length == 0) {
                // if ($scope.isLastestUser == true) {
                //     $scope.callPropositionList();
                // }
                getProPosition($scope.partnerCode)
                    // $scope.getAuthen.shopcodes = ["" + $scope.partnerCode + ""];
                    // $scope.onCheckInputForVerify();
            } else {
                //error ?
                idFocus = "txtPartnerCode";
                // $scope.partnerCode = "";
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

    // (End) Submit Form ----------------------

});
