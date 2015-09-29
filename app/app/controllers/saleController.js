smartApp.controller('SaleController', function ($scope, SaleService, $timeout) {
    $scope.loadCard = false;
    $scope.ReadCard = function (Method) {
        document.getElementById('photo').src = '';
        if (navigator.userAgent.indexOf('Chrome') > 0) {
            var str = document.getElementById('card').Run(Method.replace('Read', 'ReadWait'));
            $scope.ShowData(str);
        }
        else {
            document.getElementById('card').Run(Method);
        }
    };
    $scope.ShowData = function (str) {
        var obj = eval(str);
        if (obj.Photo) {
            document.getElementById('photo').src = "data:image/jpeg;base64," + obj.Photo;
        }
        document.getElementById('span_event').innerHTML = ('Event : ReadSuccess<br/>Args : ' + str);
    };

    var runTime = new Date().getTime();
    $scope.template = {

        "landingheader": "app/views/landingPageHeader.html?" + runTime

    }

    //device
    $scope.aftersalePriceplans = {};
    var valPricePlans = [];
    $scope.pricePlans = [];
    
    $scope.detaildevice = [
        {
            Id: "1", Name: "iPhone 6", Image: "images/product/iPhone_6.png",
            Image3g: "images/icon/icon_3g.png", Image4g: "images/icon/icon_4g.png"
        },
        {
            Id: "2", Name: "iPhone 6 Plus", Image: "images/product/iPhone_6_Plus.png",
            Image3g: "images/icon/icon_3g.png", Image4g: "images/icon/icon_4g.png"
        },
        {
            Id: "3", Name: "True SMART 4.0", Image: "images/product/True_SMART_4.png",
            Image3g: "images/icon/icon_3g.png", Image4g: ""
        }
    ];
    $scope.informationBooking = function () {
        window.location = "#/promotionDevice";
    };
    $scope.buyDevice = function () {       
        window.location = "#/listPayment";
    };
    $scope.order = function () {
        window.location = "#/orderDevice";
    };
    
    $scope.openTruemove = function () {
        window.location = "#/openTruemoveh";
    };
    $timeout(function () {
        document.getElementById('card').Run('PreviewCard');
        
        //Here your view content is fully loaded !!
        $('.box-sale-main li:nth-child(3n)').addClass("listitem3");
        $('.new-open-data > div:nth-child(3n)').addClass("listitem3");
        $('.box-sale-product > div:nth-child(3n)').addClass("listitem3");
    }, 100);

    $scope.promotionList = [
        { id: 1, download: "50", upload: "5.0", price: 2999 },
        { id: 2, download: "40", upload: "4.0", price: 1999 },
        { id: 3, download: "30", upload: "3.0", price: 999 },
        { id: 4, download: "30", upload: "2.0", price: 599 },
        { id: 5, download: "10", upload: "1.0", price: 399 },
    ];

    // SHOW POP-OVER
    $scope.showPopOver = function(divID) {
        // SET THE DIV POSITION
        console.log(divID);
        $('.popover_sale').hide();
        document.getElementById(divID).style.left = "0px";
        document.getElementById(divID).style.top = "0px";
        // SHOW THE DIV
        document.getElementById(divID).style.display = "block";
    }

    // CLOSE POP-OVER
    $scope.closePopOver = function(divID) {
        // HIDE THE DIV
        document.getElementById(divID).style.display = "none";
    }
});