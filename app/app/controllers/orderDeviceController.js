smartApp.controller('OrderDeviceController', function ($scope, SaleService, $timeout) {
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

    $scope.promotion = function () {
        window.location = "#/promotionDevice";
    };
    $scope.buyDevice = function () {
        window.location = "#/listPayment";
    };
});