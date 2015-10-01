smartApp.service('AuthenService', function ($http, SystemService) {
    var that = this;
    this.userProfile = {
        shopType: "",
        isSecondAuthen: false
    };
    this.getAuthen = function (fnCallback) {
        var result = {
            "shopType": "0",
            "isSecondAuthen": false,
            "isCorporate": true,
            "channel": "XX",
            "partnerCodes": [],
            "partnerName": "xxxx",
            "partnerType": "XX",
            "saleCode": "00",
            "thaiName": "THAINAME",
            "engName": "ENGNAME",
            "shopcodes": ["12345678"],
            "logInName": "DEMO"
        };
        
        if (SystemService.demo) {
            that.userProfile.shopType = result.shopType;
            fnCallback(result);

        } else {
            var httpRequest = {
                method: "POST",
                url: getURL('services/data/getFormData.service'),
                timeout: 30000
            };
            $http(httpRequest).success(function (result) {
                that.userProfile.shopType = result.shopType;
                fnCallback(result);
            }).error(function (data, status) {
                fnCallback("ERROR");
                setTimeout(function () {
                    SystemService.showAlert({
                        "message": "",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": status+" : getFormData.service",
                        "th-message": status + " : getFormData.service",
                        "technical-message": "getFormData.service"
                    });
                }, 1000);
            });
        }
    };
});