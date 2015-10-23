var smartApp = angular.module('smartApp', ['ngRoute', 'ngDialog',
    'angularUtils.directives.dirPagination', 'ngBootbox'
]);

smartApp.config(function($routeProvider, $httpProvider) {
    // TODO_smartUIHttpInterceptor
    $httpProvider.interceptors.push('smartUIHttpInterceptor');
    // TODO_smartUIHttpInterceptor

    var runTime = new Date().getTime();
    $routeProvider.when('/home', {
        templateUrl: 'app/views/home.html?v=' + runTime,
        controller: 'HomeController'
    })

    .when('/product', {
        templateUrl: 'app/views/productlist.html?v=' + runTime,
        controller: 'ProductController'
    }).when('/changePricePlan', {
        templateUrl: 'app/views/changePricePlan.html?v=' + runTime,
        controller: 'ChangePricePlanController'
    }).when('/changePricePlan/:id/:oulevel/:ouid/:subno/:shopType', {
        templateUrl: 'app/views/changePricePlan.html?v=' + runTime,
        controller: 'ChangePricePlanController'
    }).when('/changeOwnership', {
        templateUrl: 'app/views/changeOwnership.html?v=' + runTime,
        controller: 'changeOwnershipController'
    }).when('/changeOwnership/:id/:subno', {
        templateUrl: 'app/views/changeOwnership.html?v=' + runTime,
        controller: 'changeOwnershipController'
    }).when('/changeIRIDD', {
        templateUrl: 'app/views/changeIRIDD.html?v=' + runTime,
        controller: 'ChangeIRIDDController'

    }).when('/changeIRIDD/:id/:subno', {
        templateUrl: 'app/views/changeIRIDD.html?v=' + runTime,
        controller: 'ChangeIRIDDController'

    }).when('/changeSuspend/:ID/:SubNo/:shopType', {
        templateUrl: 'app/views/changeSuspend.html?v=' + runTime,
        controller: 'ChangeSuspendController'
    }).when('/changeRestore/:ID/:SubNo/:shopType', {
        templateUrl: 'app/views/changeRestore.html?v=' + runTime,
        controller: 'ChangeRestoreController'
    })

    .when('/cancel', {
        templateUrl: 'app/views/cancel.html?v=' + runTime,
        controller: 'CancelController'
    })
    .when('/cancel/:id/:subno/:shopType', {
        templateUrl: 'app/views/cancel.html?v=' + runTime,
        controller: 'CancelController'
    })

    .when('/changeSwapSim/:id/:subno', {
        templateUrl: 'app/views/changeSwapSim.html?v=' + runTime,
        controller: 'ChangeSwapSimController'

    }).when('/changeSwapSim', {
        templateUrl: 'app/views/changeSwapSim.html?v=' + runTime,
        controller: 'ChangeSwapSimController'

    }).when('/migratePostToPre/:id/:subno', {
        templateUrl: 'app/views/migratePostToPre.html?v=' + runTime,
        controller: 'MigratePostToPreController'

    }).when('/migratePostToPre', {
        templateUrl: 'app/views/migratePostToPre.html?v=' + runTime,
        controller: 'MigratePostToPreController'

    }).when('/changeResume/:id/:subno', {
        templateUrl: 'app/views/changeResume.html?v=' + runTime,
        controller: 'ChangeResumeController'

    }).when('/sale', {
        templateUrl: 'app/views/sale.html?v=' + runTime,
        controller: 'SaleController'

    }).when('/afterSale', {
        templateUrl: 'app/views/afterSale.html'
    }).when('/saleDevice', {
        templateUrl: 'app/views/saleDevice.html?v=' + runTime,
        controller: 'SaleDeviceController'
    }).when('/cancelOrder', {
        templateUrl: 'app/views/cancelOrder.html?v=' + runTime,
        controller: 'CancelOrderController'
    }).when('/changeInstallation', {
        templateUrl: 'app/views/changeInstallation.html?v=' + runTime,
        controller: 'ChangeInstallationController'
    }).when('/changePromotion', {
        templateUrl: 'app/views/changePromotion.html?v=' + runTime,
        controller: 'ChangePromotionController'
    }).when('/disConnect', {
        templateUrl: 'app/views/disConnect.html?v=' + runTime,
        controller: 'DisConnectController'
    }).when('/deBundle', {
        templateUrl: 'app/views/deBundle.html?v=' + runTime,
        controller: 'DebundleController'
    }).when('/addOutlet', {
        templateUrl: 'app/views/addOutlet.html?v=' + runTime,
        controller: 'AddoutletController'
    }).when('/removeOutlet', {
        templateUrl: 'app/views/removeOutlet.html?v=' + runTime,
        controller: 'RemoveoutletController'
    }).when('/changeTelno', {
        templateUrl: 'app/views/changeTelno.html?v=' + runTime,
        controller: 'ChangeTelnoController'
    }).when('/orderDevice', {
        templateUrl: 'app/views/orderDevice.html?v=' + runTime,
        controller: 'OrderDeviceController'
    }).when('/listPayment', {
        templateUrl: 'app/views/listPayment.html?v=' + runTime,
        controller: 'ListPaymentController'

    }).when('/comfirmSerialNumber', {
        templateUrl: 'app/views/comfirmSerialNumber.html?v=' + runTime,
        controller: 'GetPaidController'
    }).when('/promotionDevice', {
        templateUrl: 'app/views/promotionDevice.html?v=' + runTime,
        controller: 'PromotionDeviceController'
    }).when('/newCustomers', {
        templateUrl: 'app/views/newCustomers.html?v=' + runTime,
        controller: 'NewCustomerController'
    }).when('/getPaid', {
        templateUrl: 'app/views/getPaid.html?v=' + runTime,
        controller: 'GetPaidController'
    }).when('/openTruemoveh', {
        templateUrl: 'app/views/openTruemoveh.html?v=' + runTime,
        controller: 'OpenTruemovehController'
    }).when('/allProduct', {
        templateUrl: 'app/views/allProduct.html?v=' + runTime,
        controller: 'AllproductController'
    }).when('/migratePreToPost/:id/:subno/:shopType', {
        templateUrl: 'app/views/migratePreToPost.html?v=' + runTime,
        controller: 'MigratePreToPostController'
    }).when('/migratePreToPost', {
        templateUrl: 'app/views/migratePreToPost.html?v=' + runTime,
        controller: 'MigratePreToPostController'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });
});

// TODO Start_smartUIHttpInterceptor

smartApp.factory('smartUIHttpInterceptor', function($q, $rootScope) {
    return {
        request: function(config) {
            return config || $q.when(config);
        },
        requestError: function(response) {
            console.log("requestError");
            console.log(response);
            return $q.reject(response);
        },
        response: function(response) {
            return response || $q.when(response);
        },

        // responseError : function(response) {
        // console.log("responseError");
        // var msg = response.status + ' ' + response.statusText;
        // if (msg == '0 error' || msg == '200 OK') {
        // location.reload();
        // }
        //
        // return $q.reject(response);
        // }
        responseError: function(response) {
            console.log("responseError");
            if (response.status === 0) {
                location.reload();
            }
            return $q.reject(response);
        }
    };
});

// TODO End_smartUIHttpInterceptor

smartApp
    .directive(
        'ngNumericInput',
        function() {
            return {
                restrict: 'A',
                link: function(scope, element) {
                    $(element)
                        .keydown(
                            function(e) {
                                // Allow: backspace, delete,
                                // tab, escape, enter and .
                                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13,
                                        110, 190
                                    ]) !== -1 ||
                                    // Allow: Ctrl+A
                                    (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey)) ||
                                    // Allow: Ctrl+C
                                    (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey)) ||
                                    // Allow: Ctrl+X
                                    (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey)) ||
                                    // Allow: home, end,
                                    // left, right
                                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                                    // let it happen, don't do
                                    // anything
                                    return;
                                }
                                // Ensure that it is a number
                                // and stop the keypress
                                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                                    e.preventDefault();
                                }
                            });
                }
            };
        })
    .directive(
        'ngNumberOnly',
        function() {
            // require ng-model="yourModal"
            // span alert add class="hide"
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var showSpan = function() {
                        $('span[ng-span-number-only="' + attrs.ngNumberOnly + '"]').removeClass('hide');
                    }
                    var hideSpan = function() {
                        $('span[ng-span-number-only="' + attrs.ngNumberOnly + '"]').addClass('hide');
                    }
                    $(element)
                        .keypress(function(e) {

                            var charCode = (e.which) ? e.which : e.keyCode;
                            if (this.value.indexOf(".") >= 0) {
                                if (charCode == 46) {
                                    // show msg
                                    showSpan();
                                    return false;
                                }
                            }
                            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
                                // show msg
                                showSpan();
                                return false;
                            } else {
                                hideSpan();
                            }
                        })
                        .blur(function(event) {
                            /* Act on the event */
                            hideSpan();
                        });
                }
            };
        })
    .directive(
        'ngNumeric',
        function() {
            // require ng-model="yourModal"
            // span alert add class="hide"
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var showSpan = function() {
                        $('span[ng-span-numeric="' + attrs.ngNumeric + '"]').removeClass('hide');
                    }
                    var hideSpan = function() {
                        $('span[ng-span-numeric="' + attrs.ngNumeric + '"]').addClass('hide');
                    }
                    $(element)
                        .keypress(function(e) {

                            var charCode = (e.which) ? e.which : e.keyCode;
                            if (this.value.indexOf(".") >= 0) {
                                if (charCode == 46) {
                                    // show msg
                                    showSpan();
                                    return false;
                                }
                            }
                            if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
                                // show msg
                                showSpan();
                                return false;
                            } else {
                                hideSpan();
                            }
                        })
                        .blur(function(event) {
                            /* Act on the event */
                            hideSpan();
                        });
                }
            };
        });

// smartApp.directive('ngEnter', function () {
// return function (scope, element, attrs) {
// element.bind("keydown keypress", function (event) {
// if (event.which === 13) {
// scope.$apply(function () {
// scope.$eval(attrs.ngEnter);
// });

// event.preventDefault();
// }
// });
// };
// });

// smartApp.run(['smartCardReaderService', function (smartCardReaderService) {
// smartCardReaderService.readCard();
// }]);

// smartApp.run(function (AuthenService) {

// });
