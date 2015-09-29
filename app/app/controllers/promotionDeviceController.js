smartApp.controller('PromotionDeviceController', function ($scope, SaleService, $timeout) {
    $scope.defalutpromotion = "D";
    $scope.init = function ()
    {
        $("#selectpromotion").hide();
        $("#eformpromotion").hide();
    }
    
    var runTime = new Date().getTime();
    $scope.template = {

        "landingheader": "app/views/landingPageHeader.html?" + runTime

    }
    $scope.detaildevice = [
        {
            Id: "1", Name: "iPhone 6 Plus", Image: "images/product/iPhone_6.png",
            Image3g: "images/icon/icon_3g.png", Image4g: "images/icon/icon_4g.png"
        }
        ,
        {
            Id: "2", Name: "iPhone 6 Plus", Image: "images/product/iPhone_6_Plus.png",
            Image3g: "images/icon/icon_3g.png", Image4g: "images/icon/icon_4g.png"
        }
    ];
    $scope.submitAuthen = function () {
        $("#eformpromotion").show();
        $("#selectpromotion").hide();
        $("#defalutpromotion").hide();
    };
    $scope.newCustomer = function () {
        window.location = "#/newCustomers";
    };
    $scope.nextPayment = function () {
        window.location = "#/listPayment";
    };
    $scope.selectedPromotion = function () {
        $scope.defalutpromotion = "N";
        $("#selectpromotion").show();
        $("#defalutpromotion").hide();
    };
    $scope.init();
});