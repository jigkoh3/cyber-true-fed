smartApp.service('AuthenService', function($http, SystemService, $routeParams, ValidateMsgService) {
    var that = this;
    this.userProfile = {
        shopType: "",
        isSecondAuthen: false
    };
    this.getAuthen = function(fnCallback) {
        var result = {
            "shopType": "0",
            "isSecondAuthen": true,
            "channel": "NONSHOP",
            "partnerCodes": [],
            "partnerName": null,
            "partnerType": null,
            "saleCode": "90900051",
            "thaiName": null,
            "engName": "CMTEST48 CMSUR48",
            "shopcodes": [],
            // "shopcodes": ["12345670"],
            // "shopcodes": ["12345678", "12345677"],
            "logInName": "CMTEST48",
            "isCorporate": false,
            "isByPassSecondAuthen": true,
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

        //STR: CR selected shopcode //05-04-2016
        var checkSpace = false;
        var selectedShopCode = "";
        if ($routeParams.shop_code) {
            var de_shop_code = decodeURI($routeParams.shop_code);
            if (de_shop_code.indexOf(" ") != -1) {
                de_shop_code = SystemService.myTrim(de_shop_code);
                checkSpace = true;
            }
            if (de_shop_code && checkSpace == true && de_shop_code.length != 8) {
                checkSpace = false;
            }
            if (de_shop_code.length == 8) {
                if ((de_shop_code + 0 > 0)) {
                    result['shopcodes'] = ["" + de_shop_code + ""];
                }
                localStorage.setItem('selectedShopCode', de_shop_code);
                selectedShopCode = de_shop_code;
            } else {
                localStorage.setItem('selectedShopCode', de_shop_code);
                if (checkSpace == false) {
                    SystemService.showAlert(ValidateMsgService.data.msgShopCodeFormat);
                }
            }
        } else {
            localStorage.setItem('selectedShopCode', "");
        }
        var httpRequest = {
            method: "POST",
            url: getURL('services/data/getFormData.service'),
            timeout: 30000,
            data: { "shopCodeURL": selectedShopCode }
        };
        console.log(httpRequest);


        if (SystemService.demo) {
            that.userProfile.shopType = result.shopType;
            // //STR: CR selected shopcode //05-04-2016
            // var checkSpace = false;
            // if ($routeParams.shop_code) {
            //     var de_shop_code = decodeURI($routeParams.shop_code);
            //     if (de_shop_code.indexOf(" ") != -1) {
            //         de_shop_code = SystemService.myTrim(de_shop_code);
            //         checkSpace = true;
            //     }
            //     if (de_shop_code && checkSpace == true && de_shop_code.length != 8) {
            //         checkSpace = false;
            //     }
            //     if (de_shop_code.length == 8) {
            //         if ((de_shop_code + 0 > 0)) {
            //             result['shopcodes'] = ["" + de_shop_code + ""];
            //         }
            //         localStorage.setItem('selectedShopCode', de_shop_code);
            //     } else {
            //         localStorage.setItem('selectedShopCode', de_shop_code);
            //         if (checkSpace == false) {
            //             SystemService.showAlert(ValidateMsgService.data.msgShopCodeFormat);
            //         }
            //     }
            // } else {
            //     localStorage.setItem('selectedShopCode', "");
            // }
            // localStorage.setItem('ssoEmployeePrincipal',  JSON.stringify(result['ssoEmployeePrincipal']));
            // localStorage.setItem('ssoPartnerPrincipal',  JSON.stringify(result['ssoPartnerPrincipal']));

            localStorage.setItem('ssoEmployeePrincipal', "");
            localStorage.setItem('ssoPartnerPrincipal', "");
            //END: CR selected shopcode //05-04-2016
            result['partnerCodes'] = result['shopcodes'];
            //// check shopCode null if shopType == 1 :: 12-07-2016 :: xsam32
            if (result['shopcodes'].length == 0 && result['shopType'] == '1') {
                SystemService.showAlert({
                    "message": "",
                    "message-code": "",
                    "message-type": "ERROR",
                    "en-message": "",
                    "th-message": "ระบบไม่สามารถตรวจสอบ shopcode ได้",
                    "technical-message": "AuthenService"
                });
                SystemService.hideLoading();
                return;
            }
            fnCallback(result);

        } else {

            $http(httpRequest).success(function(result) {
                that.userProfile.shopType = result.shopType;
                // //STR: CR selected shopcode //05-04-2016
                // var checkSpace = false;
                // if ($routeParams.shop_code) {
                //     var de_shop_code = decodeURI($routeParams.shop_code);
                //     if (de_shop_code.indexOf(" ") != -1) {
                //         checkSpace = true;
                //     }
                //     de_shop_code = de_shop_code.trim();
                //     if (checkSpace == true && de_shop_code.length != 8 && de_shop_code.indexOf(" ") != -1) {
                //         checkSpace = false;
                //     }
                //     if (de_shop_code.length == 8) {
                //         if ((de_shop_code + 0 > 0)) {
                //             result['shopcodes'] = ["" + de_shop_code + ""];
                //         }
                //         localStorage.setItem('selectedShopCode', de_shop_code);
                //     } else {
                //         localStorage.setItem('selectedShopCode', de_shop_code);
                //         if (checkSpace == false) {
                //             SystemService.showAlert(ValidateMsgService.data.msgShopCodeFormat);
                //         }
                //     }
                // } else {
                //     localStorage.setItem('selectedShopCode', "");
                // }
                // localStorage.setItem('ssoEmployeePrincipal',  JSON.stringify(result['ssoEmployeePrincipal']));
                // localStorage.setItem('ssoPartnerPrincipal',  JSON.stringify(result['ssoPartnerPrincipal']));

                localStorage.setItem('ssoEmployeePrincipal', "");
                localStorage.setItem('ssoPartnerPrincipal', "");
                //END: CR selected shopcode //05-04-2016
                result['partnerCodes'] = result['shopcodes'];
                //// check shopCode null if shopType == 1 :: 12-07-2016 :: xsam32
                if (result['shopcodes'].length == 0 && result['shopType'] == '1') {
                    SystemService.showAlert({
                        "message": "",
                        "message-code": "",
                        "message-type": "ERROR",
                        "en-message": "",
                        "th-message": "ระบบไม่สามารถตรวจสอบ shopcode ได้",
                        "technical-message": "AuthenService"
                    });
                    SystemService.hideLoading();
                    return;
                }
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
