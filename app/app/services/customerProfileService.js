smartApp.factory('customerProfileService', function ($rootScope) {
    var customerService = {};

    // expose service data to angular scope
    $rootScope.sharedData = customerService.data = {};

    //customerService.message = "";

    customerService.data.shopType = "0";
    customerService.data.inputParam = {
        id: "",
        level: "",
        ouId: "",
        subscriberNo: ""
    };
   
    customerService.customerProfile = {};

    //customerService.prepForBroadcast = function (msg) {
    //    this.customerProfile = msg;
    //    this.broadcastItems('handleBroadcast');
    //};

    customerService.prepShopTypeBroadcast = function (shopType) {
        console.log(shopType);
        this.shopType = shopType;
        console.log(this.shopType);
        this.broadcastItems('shopTypeBroadcast');
    };

    customerService.prepInputParamBroadcast = function (params) {
        console.log(params);
        this.inputParam = params;
        console.log(this.inputParam);
        this.broadcastItems('inputParamBroadcast');
    };

    //Set broadcast to other controller
    customerService.broadcastItems = function (handleBroadcast) {
        $rootScope.$broadcast(handleBroadcast);
        console.log("$rootScope.$broadcast(handleBroadcast) : " + handleBroadcast);
    };

    return customerService;
});