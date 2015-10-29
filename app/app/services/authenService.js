smartApp.service('AuthenService', function($http, SystemService) {
    var that = this;
    this.userProfile = {
        shopType: "",
        isSecondAuthen: false
    };
    this.getAuthen = function(fnCallback) {
        var result = {
            "shopType": "0",
            "isSecondAuthen": false,
            "channel": "NONSHOP",
            "partnerCodes": [],
            "partnerName": null,
            "partnerType": null,
            "saleCode": "90900051",
            "thaiName": null,
            "engName": "CMTEST48 CMSUR48",
            "shopcodes": [],
            "logInName": "CMTEST48",
            "isCorporate": false,
            "roleNonShopCorpDto": {
                "status": "SUCCESSFUL",
                "trx-id": "6PBVOVIGLMRE",
                "process-instance": "tmsapnpr1 (instance: SFF_node4)",
                "response-data": null
            },
            "ssoEmployeePrincipal": {
                "loginName": "CMTEST48",
                "initials": "MS",
                "firstName": "CMTEST48",
                "lastName": "CMSUR48",
                "englishName": "CMTEST48 CMSUR48",
                "thaiName": null,
                "roles": [
                    "R-CCR-TRUEMONEY_QA",
                    "R-Web",
                    "R-CCR-CM_VOC_CVC_AGENT",
                    "R-Web"
                ],
                "shopCodes": null,
                "employeeId": "90900051",
                "email": "cmsaleagent@gmail.com.",
                "position": "CM Representative",
                "section": "-",
                "company": "TRU",
                "department": "Customer Care",
                "division": "Customer Management",
                "saleCode": null,
                "partnerTypeId": null,
                "partnerTypeGroupName": null,
                "partnerTypeLevel": null,
                "partnerTypeName": null,
                "provinceName": null,
                "benefitNumber": null,
                "channelName": null,
                "contactNumber": null,
                "channelAlias": null,
                "selectedShopCode": null,
                "rolesAsString": "R-CCR-TRUEMONEY_QA,R-Web,R-CCR-CM_VOC_CVC_AGENT,R-Web",
                "principalType": "SsoEmployeePrincipal",
                "name": "CMTEST48"
            },
            "ssoPartnerPrincipal": null
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
            $http(httpRequest).success(function(result) {
                that.userProfile.shopType = result.shopType;
                fnCallback(result);
            }).error(function(data, status) {
                fnCallback("ERROR");
                setTimeout(function() {
                    SystemService.showAlert({
                        "message": "",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": status + " : getFormData.service",
                        "th-message": status + " : getFormData.service",
                        "technical-message": "getFormData.service"
                    });
                }, 1000);
            });
        }
    };
});
