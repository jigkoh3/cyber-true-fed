smartApp.factory('smartCardReaderService', ['$http', 'SystemService', function ($http, SystemService) {

    var smartCardReaderFactory = {};


    var _readCard = function (method) {
        //alert("CardReaderService read method : " + method);
        //if (navigator.userAgent.indexOf('Chrome') > 0) {
        //    var str = document.getElementById('card').Run(method.replace('Read', 'ReadWait'));
        //    $scope.ShowData(str);
        //}
        //else {
        //    document.getElementById('card').Run(method);
        //}
        //alert("CardReaderService readed");

        //document.getElementById('photo').src = '';
        //if (navigator.userAgent.indexOf('Chrome') > 0) {
        //    $scope.device = document.getElementById('card');
        //    $scope.device.Run(method);
        //} else {
        //    $scope.device = document.getElementById('card');
        //    $scope.device.Run(method);
        //}
    };

    var _showData = function (str) {
        //alert("service ShowData" + str);
        //console.log(str);
        //var obj = eval(str);
        //if (obj.Photo) {
        //    //document.getElementById('photo').src = "data:image/jpeg;base64," + obj.Photo;
        //}
        ////document.getElementById('span_event').innerHTML = ('Event : ReadSuccess<br/>Args : ' + str);
        //SystemService.get($routeParams.subscriberno, function (result) {
        //    $scope.data = result.data;

        //});

        //var obj = eval(str);
        //if (obj.Photo) {
        //    //document.getElementById('photo').src = "data:image/jpeg;base64," + obj.Photo;
        //}
        //document.getElementById('span_event').innerHTML = ('Event : ReadSuccess<br/>Args : ' + str);
    };

    var _readCardMockUp = function (personId) {
        return personId;
    }

    smartCardReaderFactory.readCard = _readCard;
    smartCardReaderFactory.showData = _showData;

    smartCardReaderFactory.readCardMockUp = _readCardMockUp;


    return smartCardReaderFactory;
}]);