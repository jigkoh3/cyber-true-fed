// ---------------------- HomeController.js ----------------------
smartApp.controller('HomeController', function ($scope, SaleService, HomeService) {
    console.log('HomeController');
    
});

smartApp.controller('ReadCardController', function ($scope, SaleService, HomeService) {
    console.log('ReadCardController');
    $scope.SetCardValue = function (result) {
        alert('ReadCardController');
        console.log(result);
    }
});

