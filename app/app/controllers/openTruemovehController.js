smartApp.controller('OpenTruemovehController', function ($scope, SaleService, $timeout) {
    $scope.customerType = "N";
    $scope.businessType = "O";
    $scope.changeReqType = function (type) {
        $scope.businessType = type;
        //SystemService.genDatePicker();
    };

    $scope.newOwner = {
        sex: "M"
    };
    var runTime = new Date().getTime();
    $scope.template = {

        "landingheader": "app/views/landingPageHeader.html?" + runTime

    }
    $scope.changeType = function (customerType) {
        $scope.customerType = customerType;
        $scope.isVerify = false;
        $scope.promotion = "";

        if (customerType == 'B' || customerType == 'C') {
            $scope.blah = "3";
        }
    };
    $scope.slipType = "H";
    $scope.slipchangeType = function (Type) {
        $scope.slipType = Type;
    };
    $scope.isAuthorize = false;
    $scope.authorize = function () {
        $scope.isAuthorize = true;
    };
});