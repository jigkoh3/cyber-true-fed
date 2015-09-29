smartApp.controller('AllproductController', function ($scope, SaleService, $timeout) {
    var runTime = new Date().getTime();
    $scope.template = {

        "landingheader": "app/views/landingPageHeader.html?" + runTime

    }
    $scope.categorydevice = [
        {
            Id: "1", Name: "Apple", Image: "images/product/iPhone_6.png",
            Image3g: "images/icon/icon_3g.png", Image4g: "images/icon/icon_4g.png"
        },        
        {
            Id: "3", Name: "TrueSMART", Image: "images/product/True_SMART_4.png",
            Image3g: "images/icon/icon_3g.png", Image4g: ""
        }
    ];
});