// ---------------------- customerProfileController.js ----------------------
smartApp.controller('CustomerProfileController', function ($scope, SystemService, $routeParams, smartCardReaderService, customerProfileService) {

    $scope.isAuthorize = false;
    $scope.authorize = function () {
        $scope.isAuthorize = true;
    };

    $scope.shopType = "0";
    $scope.inputParam = {
        id: "",
        level: "",
        ouId: "",
        subscriberNo: ""
    };

    //get value from other controller via broadcast
    $scope.$watch('sharedData.shopType', function () {
        $scope.shopType = customerProfileService.data.shopType;
        console.log("$watch shopType in CustomerProfileController " + $scope.shopType);
        if ($scope.shopType == "1") {
            $scope.isShopType();
        }
        else {
            $scope.ReadCardMockUp('3389225969739');
        }
    });
    $scope.$watch('sharedData.inputParam', function () {
        $scope.inputParam = customerProfileService.data.inputParam;
        console.log("$watch inputParam in CustomerProfileController " + $scope.inputParam);
    });

    //$scope.$on('shopTypeBroadcast', function () {
    //    $scope.shopType = customerProfileService.shopType;

    //});

    //$scope.$on('inputParamBroadcast', function () {
    //    $scope.inputParam = customerProfileService.inputParam;

    //});

    //end get value from other controller via broadcast

    $scope.isReadCardSuccess = false;
    $scope.data = {};

    $scope.isShopType = function () {
        setTimeout(function () {
            document.getElementById('modalReadCard').click();
        }, 100);
    };

    $scope.isManualReadCard = true;

    $scope.onInputId = function () {
        if ($scope.certificateID == "0689100007") {
            SystemService.get("0689100007", function (result) {
                $scope.data = result.data;
                console.log($scope.data);
                document.getElementById('btnReadCardClose').click();

                if ($scope.data["status-code"] == "1") {
                    document.getElementById('btnModalWarning').click();
                }
            });

        }
        //console.log($scope.certificateID.length);
        if ($scope.certificateID.length == 13) {
            SystemService.get($scope.certificateID, function (result) {
                console.log(result);
                document.getElementById('btnReadCardClose').click();
                //$scope.data = result.data;
                //console.log($scope.data);

                if (result.data["status-code"] == "2") {
                    document.getElementById('btnModalError').click();
                }
            });

        }
    }


    $scope.ReadCard = function (method) {

    };

    $scope.ShowData = function (str) {

    };

    $scope.ReadCardMockUp = function (personId) {
        var certificateID = smartCardReaderService.readCardMockUp(personId);
        console.log("certificateID : " + certificateID);

        SystemService.get("0689100006", function (result) {
            if (certificateID == result.data.customerProfile["certificateID"]) {
                document.getElementById('btnReadCardClose').click();

                //binding customer data
                $scope.bindingCustomerData(result);
                $scope.isReadCardSuccess = true;

                angular.element(document.getElementById('changePricePlanContent')).scope().updateCurrentPricePlan(result.data);
            }
        });
    };

    //binding customer data
    $scope.bindingCustomerData = function (result) {
        $scope.data = result.data;
        //console.log($scope.data);
    };

});