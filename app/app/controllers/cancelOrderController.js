smartApp.controller('CancelOrderController', function ($scope,SystemService, SaleService, $timeout) {
    $scope.isAuthorize = false;    
    var runTime = new Date().getTime();
    
    $scope.template = {

        "landingheader": "app/views/landingPageHeader.html?" + runTime,
        "customerprofile": "app/views/customerprofile.html?" + runTime
    }

    $scope.divID = "cancelOrderContent";
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
    $scope.init = function () {
        $('#loadingReadCard').hide();


    };
    $scope.initModalReadCard = function () {
        $("#btnReadCardClose").click(function () {
            $('input[type=submit]').hide();
            $('input[type=reset]').hide();
        });
        $('#loadingReadCard').hide();
        $('#loadingReadCard3').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        $('#CitizenID').val('');

        $('input[type=submit]').show();
        $('input[type=reset]').show();
    }
    $scope.manualInputReadCard = function () {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        document.getElementById("CitizenID").disabled = false;

        setTimeout(function () {
            $('#CitizenID').val('');
        }, 0);
        $scope.isManualReadCard = false;
    };
    if ($scope.shopType == "1") {
        setTimeout(function () {
            document.getElementById('modalReadCard').click();
            document.getElementById("CitizenID").disabled = true;
            $scope.initModalReadCard();
        }, 1000);
    }
    else {
        setTimeout(function () {
            $scope.initModalReadCard();
        }, 500);
        SystemService.get("0689100006", function (result) {
            $scope.data = result.data;
            //$scope.isReadCardSuccess = true;

        });
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
    $scope.SetCardValue3 = function (result) {
        $('#loadingReadCard3').hide();

        $scope.cardInfo3 = eval(result);
        console.log("aaaaaaa;;;;;;" + $scope.cardInfo3);

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
    $scope.init();
});