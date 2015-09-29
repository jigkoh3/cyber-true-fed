// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('MigratePostToPreController', function ($scope, $filter, SystemService, $routeParams, ReasonService) {

    $scope.showReadcard = "1";
    $scope.divID = "migratePostToPreContent";
    $scope.isMatch = true;
    $scope.funcEvent = function () {
        alert('1');
    };
    $scope.selectedPricePlan3 = function () {
    };
    $scope.CitizenID = "";
    SystemService.validateNummeric();
    //Reasons
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
    //end reson
    $scope.pricePlans = [
        { pricePlan: "EDATAP68: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002720", rc: "399" },
        { pricePlan: "ADATAP99: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002721", rc: "499" },
        { pricePlan: "YDATAP55: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002722", rc: "799" },
        { pricePlan: "EDATAP69: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002723", rc: "399" },
        { pricePlan: "YDATAP56: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002724", rc: "799" },
        { pricePlan: "EDATAP44: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002725", rc: "999" }];
    $scope.shopType = $routeParams.shopType;
    SystemService.calendarDatePicker();
    $scope.Id = $routeParams.ID;
    $scope.SubNo = $routeParams.SubNo;

    $scope.data = {};
    $scope.isReadCardSuccess = false;

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
    $scope.openSSO = function () {
        //var new_window = window.open('', "MsgWindow", "width=320, height=240");
        //new_window.onbeforeunload = function () {
        //    alert('close');
        //}
        //var new_window = window.open("", "MsgWindow", "width=800, height=600");
        //new_window.onbeforeunload = function () { alert('close'); }

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


        var url = "https://sso-devt.true.th:11443/SSORESTFul/SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
        //var url = "https://www.google.co.th";

        openDialog(url, "MsgWindow", "width=800, height=600", function (w) {
            //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
            SystemService.second_authen($scope.TrxID, function (result) {
                $scope.manualInputReadCard();
            });

        });
    };
    //$scope.nextBillDate = SystemService.getNextBillDate();
    $scope.readCardError = function (msg) {
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "",
            "th-message": "",
            "technical-message": ""
        });
    };
    $scope.initModalReadCard = function () {
        $("#btnReadCardClose").click(function () {
            $('input[type=submit]').hide();
            $('input[type=reset]').hide();
        });
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#loadingReadCard3').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        $('#CitizenID').val('');
        //document.getElementById("CitizenID").disabled = true;
        $('input[type=submit]').show();
        $('input[type=reset]').show();
    }
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
    }
    SystemService.get("0689100006", function (result) {
        $scope.data = result.data;
        $scope.isReadCardSuccess = true;
    });
    if ($scope.shopType == "1") {
        setTimeout(function () {
            document.getElementById('modalReadCard').click();
            $scope.initModalReadCard();
        }, 1000);
    }
    else {
        setTimeout(function () {
            $('#loadingReadCard3').hide();
            $('#unMatch2').hide();
        }, 500);
    }

    $scope.SetCardValue = function (result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


        if ($scope.cardInfo.CitizenID == $routeParams.ID) {
            SystemService.get("0689100006", function (result) {
                document.getElementById('btnReadCardClose2').click();

                $scope.data = result.data;
                $scope.isReadCardSuccess = true;
            });

        } else {
            $('#unMatch').show();
            $scope.isMatch = false;
        }
        ///$scope.ReadCardMockUp($scope.cardInfo.CitizenID);
        //console.log(result);
        //console.log(result.CitizenID);

    }
    $scope.onInputId2 = function () {
        var cid = $('#CitizenID2').val();
        if (cid.length == 13) {
            if (SystemService.validatePID(cid)) {

            } else {
                $('#CitizenID2').val('');
            }
        }
    };
    $scope.SetCardValue2 = function (result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH);
        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    }
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
    }
    $scope.isManualReadCard = true;
    $scope.onInputId = function () {
        //    if ($scope.certificateID == "0689100007") {
        //        SystemService.get("0689100007", function (result) {
        //            $scope.data = result.data;
        //            console.log($scope.data);
        //            document.getElementById('btnReadCardClose').click();

        //            if ($scope.data["status-code"] == "1") {
        //                document.getElementById('btnModalWarning').click();
        //            }
        //        });

        //    }
        console.log($('#CitizenID').val().length);
        var cid = $('#CitizenID').val();
        if (cid.length == 13) {
            if (cid == $routeParams.ID) {
                SystemService.get("0689100006", function (result) {
                    document.getElementById('btnReadCardClose2').click();

                    $scope.data = result.data;
                    $scope.isReadCardSuccess = false;
                });

            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }
            //SystemService.get($scope.certificateID, function (result) {
            //    console.log(result);
            //    document.getElementById('btnReadCardClose').click();
            //    //$scope.data = result.data;
            //    //console.log($scope.data);

            //    if (result.data["status-code"] == "2") {
            //        document.getElementById('btnModalError').click();
            //    }
            //});

        }
    }

    var runTime = new Date().getTime();
    $scope.template = {

        "header": "app/views/header.html?" + runTime,
        "customerprofile": "app/views/customerprofile.html?" + runTime,
        "effectivepriceplan": "app/views/effectivepriceplan.html?" + runTime,
        "reasonmemo": "app/views/reasonmemo.html?" + runTime

    }
    $scope.isAuthorize = false;
});