smartApp.service('MonitorOrderService', function($http, SystemService, $routeParams) {
    var demo = SystemService.demo;

    var getServiceTypeAPI = function(fnCallback) {

        if (!demo) {
            var target = '/aftersales/configuration/master/ORD-ACTIVITIES';

            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        } else {
            // var data = {
            //     "status": "SUCCESSFUL",
            //     "trx-id": "4R61OFXITUG1G",
            //     "process-instance": "tmsapnpr1 (instance: SFF_node3)",
            //     "response-data": {
            //         "id": "ORD-ACTIVITIES",
            //         "name": "List of all order activities",
            //         "description": "List of all order activities",
            //         "configuration-items": [{
            //             "key": "ADD_IRIDD",
            //             "value": "ADD_IRIDD",
            //             "description": "ADD IDD/IR",
            //             "en-description": "ADD IDD/IR",
            //             "th-description": "เปิดบริการ บริการโทรศัพท์ข้ามแดนระหว่างประเทศ/บริการโทรศัพท์ระหว่างประเทศ (IDD/IR)"
            //         }, {
            //             "key": "CANCEL",
            //             "value": "CANCEL",
            //             "description": "Cancel Truemove-H service",
            //             "en-description": "Cancel Truemove-H service",
            //             "th-description": "ยกเลิกเลขหมาย (Cancel)"
            //         }, {
            //             "key": "CANCEL_BEFORE_INSTALL",
            //             "value": "CANCEL_BEFORE_INSTALL",
            //             "description": "Cancel before install",
            //             "en-description": "Cancel before install",
            //             "th-description": "ยกเลิกก่อนการติดตั้ง"
            //         }, {
            //             "key": "CHANGE_INSTALLATION_DATE",
            //             "value": "CHANGE_INSTALLATION_DATE",
            //             "description": "Change installation date",
            //             "en-description": "Change installation date",
            //             "th-description": "เปลี่ยนวันนัดติดตั้ง"
            //         }, {
            //             "key": "CHANGE_OWNERSHIP",
            //             "value": "CHANGE_OWNERSHIP",
            //             "description": "Change ownership",
            //             "en-description": "Change ownership",
            //             "th-description": "เปลี่ยนเจ้าของ"
            //         }, {
            //             "key": "CHANGE_PRICEPLAN",
            //             "value": "CHANGE_PRICEPLAN",
            //             "description": "Change Truemove-H priceplan",
            //             "en-description": "Change Truemove-H priceplan",
            //             "th-description": "เปลี่ยนโปรโมชั่น"
            //         }, {
            //             "key": "CHANGE_PROMOTION_CVG",
            //             "value": "CHANGE_PROMOTION_CVG",
            //             "description": "Change convergence promotion",
            //             "en-description": "Change convergence promotion",
            //             "th-description": "เปลี่ยนแปลงโปรโมชั่น Convergence"
            //         }, {
            //             "key": "CHANGE_PROMOTION_SPEED",
            //             "value": "CHANGE_PROMOTION_SPEED",
            //             "description": "Change True online speed",
            //             "en-description": "Change True online speed",
            //             "th-description": "เปลี่ยนแปลงความเร็วอินเตอร์เน็ต"
            //         }, {
            //             "key": "MIGRATE_POST_TO_PRE",
            //             "value": "MIGRATE_POST_TO_PRE",
            //             "description": "Migrate postpaid to prepaid service",
            //             "en-description": "Migrate postpaid to prepaid service",
            //             "th-description": "เปลี่ยนจากรายเดือนเป็นเติมเงิน (Migrate Postpaid to Prepaid)"
            //         }, {
            //             "key": "MIGRATE_PRE_TO_POST",
            //             "value": "MIGRATE_PRE_TO_POST",
            //             "description": "Migrate prepaid to postpaid service",
            //             "en-description": "Migrate prepaid to postpaid service",
            //             "th-description": "เปลี่ยนจากเติมเงินเป็นรายเดือน (Migrate Prepaid to Postpaid)"
            //         }, {
            //             "key": "REMOVE_IRIDD",
            //             "value": "REMOVE_IRIDD",
            //             "description": "Remove IDD/IR",
            //             "en-description": "Remove IDD/IR",
            //             "th-description": "ยกเลิกบริการ บริการโทรศัพท์ข้ามแดนระหว่างประเทศ/บริการโทรศัพท์ระหว่างประเทศ (IDD/IR)"
            //         }, {
            //             "key": "RESTORE",
            //             "value": "RESTORE",
            //             "description": "Restore Truemove-H service",
            //             "en-description": "Restore Truemove-H service",
            //             "th-description": "เปิดสัญญาณจากการระงับใช้บริการชั่วคราว (Restore)"
            //         }, {
            //             "key": "RESUME",
            //             "value": "RESUME",
            //             "description": "Resume",
            //             "en-description": "Resume",
            //             "th-description": "เปิดสัญญาณจากการถูกยกเลิกเลขหมาย (Resume)"
            //         }, {
            //             "key": "SUSPEND",
            //             "value": "SUSPEND",
            //             "description": "Suspend Truemove-H service",
            //             "en-description": "Suspend Truemove-H service",
            //             "th-description": "ระงับใช้สัญญาณชั่วคราว (SUSPEND)"
            //         }, {
            //             "key": "SWAP_SIM",
            //             "value": "SWAP_SIM",
            //             "description": "Swap sim",
            //             "en-description": "Swap sim",
            //             "th-description": "การเปลี่ยนซิมการ์ด (SWAP SIM)"
            //         }]
            //     }
            // }
            var url = "/app/jsonFiles/serviceType.json";
            SystemService.getFileJson(url, function(response){
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
