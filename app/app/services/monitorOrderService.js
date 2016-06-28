smartApp.service('MonitorOrderService', function($http, SystemService, $routeParams) {
    var demo = SystemService.demo;

    var getServiceTypeAPI = function(fnCallback) {

        if (!demo) {
            var target = '/aftersales/configuration/master/ORD-ACTIVITIES';

            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            var url = "/app/jsonFiles/serviceType.json";
            SystemService.getFileJson(url, function(response) {
                console.log(response);
                fnCallback({
                    status: true,
                    data: response,
                    error: "",
                    msgErr: ""
                });
            });
        }
    };
    return {
        getServiceTypeCallback: function(fnCallback) {
            getServiceTypeAPI(function(resultData) {
                fnCallback(resultData);
            });
        },
    }
});
