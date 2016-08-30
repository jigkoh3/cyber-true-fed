// ---------------------- monitorOrderController.js ----------------------
smartApp.controller('MonitorOrderController', function($scope, $filter, $routeParams, AuthenService, SystemService, MonitorOrderService, $http, SystemService) {

    $scope.Id = "";
    $scope.shopType = '1';
    $scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null'; //$routeParams.SubNo;
    $scope.divID = 'monitorOrderContent';
    $scope.isAdmin = false;
    $scope.condition = "";
    $scope.conditions = [];
    $scope.conditions[0] = { id: "A", name: 'หมายเลขบริการ' };
    $scope.conditions[1] = { id: "B", name: 'หมายเลขบัตรประชาชน/พาสปอร์ต' };
    $scope.conditions[2] = { id: "C", name: 'เลขที่คำขอ (Order ID)' };
    $scope.conditions[3] = { id: "D", name: 'OMX Transaction ID' };
    $scope.conditions[4] = { id: "E", name: 'รหัสผู้ใช้งาน (User Login)' };

    $scope.serviceTypes = [];

    $scope.statuses = [];
    $scope.statuses[0] = { id: "CREATE", name: "CREATE" };
    $scope.statuses[1] = { id: "FAILED", name: "FAILED" };
    $scope.statuses[2] = { id: "PROCESSING", name: "PROCESSING" };
    $scope.statuses[3] = { id: "ERROR", name: "ERROR" };
    $scope.statuses[4] = { id: "COMPLETED", name: "COMPLETED" };
    $scope.service = window.location.protocol + "//" + window.location.hostname + (null != window.location.port ? ":" + window.location.port : "");
    var dateNow = new Date();
    $scope.setDateNow = ("0" + dateNow.getDate()).slice(-2) + "/" + ("0" + Number(dateNow.getMonth() + 1)).slice(-2) + "/"  + Number(dateNow.getFullYear() + 543);
    console.log( $scope.setDateNow);
    var fromDay = new Date(dateNow.getTime() - (6 * 24 * 60 * 60 * 1000));
    console.log(fromDay);
    $scope.fromdate =  ("0" + fromDay.getDate()).slice(-2) + "/" + ("0" + Number(dateNow.getMonth() + 1)).slice(-2) + "/"  + Number(dateNow.getFullYear() + 543);
    $('#fromdate').val($scope.fromdate);
    $scope.todate =  $scope.setDateNow;
    $('#todate').val($scope.todate);

    dateDiff = function(datepart, fromdate, todate) {

        var fromYear = fromdate.substring(6, 10);
        var fromMonth = fromdate.substring(3, 5);
        var fromDay = fromdate.substring(0, 2);
        //console.log("fromYear="+fromYear+",fromMonth="+fromMonth+",fromDay="+fromDay) ;

        var toYear = todate.substring(6, 10);
        var toMonth = todate.substring(3, 5);
        var toDay = todate.substring(0, 2);

        var from = new Date(fromYear, fromMonth, fromDay);
        var to = new Date(toYear, toMonth, toDay);
        var diff = Math.floor((to.getTime() - from.getTime()) / 86400000);

        return diff + 1;
    };

    formatDate = function(date) {
        var year = date.substring(6, 10);
        var month = date.substring(3, 5);
        var day = date.substring(0, 2);
        if (year >= 2558) {
            year = (year - 543);
        }
        return year + "-" + (month.length > 1 ? month : "0" + month) + "-" + (day.length > 1 ? day : "0" + day);
    };

    $scope.init = function() {
        SystemService.calendarDatePicker();
        for(var i = 0; i < 2; i++){
            setTimeout(function() { console.log(i) }, 100)
        }

        for(var j = 0; j < 2; j++){
            setTimeout(function() { console.log(j) }, 100)
        }

        MonitorOrderService.getServiceTypeCallback(function(response) {
            $scope.serviceTypes = response.data['response-data']['configuration-items'];
            console.log($scope.serviceTypes);
        });

        AuthenService.getAuthen(function(result) {
            if (result == "ERROR") return;
            $scope.getAuthen = result;

            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
                //$scope.showDataDealer = true;
            }
            if ($scope.getAuthen["shopType"] == "0") {
                $scope.isAdmin = true;
            }
            $scope.shopType = $scope.getAuthen["shopType"];
            if ($scope.getAuthen["shopcodes"].length > 1) {
                $scope.shopCode = $scope.getAuthen["shopcodes"][0];
            } else {
                $scope.shopCode = $scope.getAuthen["shopcodes"];
            }
            $("#customShopCode").val($scope.shopCode);
            $scope.chkShopcode();
        });

    };

    $scope.chkShopcode = function() {
        if ($scope.getAuthen.shopcodes.length == 1) {
            $scope.isChkShopcode = true;
        } else {
            $scope.isChkShopcode = false;
        }
    }

    validate = function() {
        var shopCode = $("#customShopCode").val();
        //alert("1:"+shopCode);
        if (shopCode == undefined || shopCode == '') {
            shopCode = "";
        }


        if (!$scope.isAdmin && shopCode == "") {
            msgModel = {
                "message": "You must fill shop code.",
                "message-code": "SYS-000",
                "message-type": "INFO",
                "en-message": "You must fill shop code.",
                "th-message": "กรุณากรอก shop code",
                "technical-message": "",
                "mode": "dealer"
            };
            SystemService.showAlert(msgModel);
            return false;
        }

        var condition = $("#condition").val();

        var fromdate = $("#fromdate").val();
        var todate = $("#todate").val();
        console.log(condition);

        //           alert("Validate shopCode:"+shopCode + "|date :"+ dateDiff('d', fromdate  ,todate));
        //           
        //           if((fromdate == "" || todate == "" )&&(condition == 'E' || condition == 'B')){

        // 20160830 by waramun add check condition != "A" && condition != "C" && condition != "D"
        if(condition != "A" && condition != "C" && condition != "D"){
            if ((fromdate == "" || todate == "")) {
            //               alert("Please input Begin and End Date!!!");
                msgModel = {
                    "message": "You must fill the date.",
                    "message-code": "SYS-000",
                    "message-type": "INFO",
                    "en-message": "You must fill from date and to date.",
                    "th-message": "กรุณากรอกวันที่เริ่มต้นเเละจบในการค้นหา",
                    "technical-message": "",
                    "mode": "dealer"
                };
                SystemService.showAlert(msgModel);
                return false;
            }
        }
        
        // if ((condition != undefined && "" != condition) && $("#product-number").val() == "" && $("#customer-id").val() == "" && $("#order-id").val() == "" && $("#provisioning-id").val() == "" && $("#sale-code").val() == "") {
            if ((condition == "A" && $('#product-number').val() == "") || (condition == "B" && $('#customer-id').val() == "") || (condition == "C" && $('#order-id').val() == "") || (condition == "D" && $('#provisioning-id').val() == "") || (condition == "E" && $('#sale-code').val() == "")) {
            msgModel = {
                "message": "You must fill value of condition.",
                "message-code": "SYS-000",
                "message-type": "INFO",
                "en-message": "You must fill value of condition.",
                "th-message": "กรุณากรอกค่าของเงื่อนไขในการค้นหา",
                "technical-message": "",
                "mode": "dealer"
            };
            SystemService.showAlert(msgModel);
            return false;
        }
        //           console.log("========Validate========") ;
        //           console.log("fromdate:"+fromdate+"|") ;
        //           console.log("todate:"+todate+"|") ;
        //           console.log("between date :"+dateDiff('d', fromdate  ,todate));
        //           alert("shopCode:"+shopCode+"| check = null >>>"+ (shopCode == undefined || shopCode == "")  ) ;
        //           alert("condition:"+condition+"| check = null >>>"+ (condition == undefined || "" == condition) );
        //           alert("serviceType:"+$("#serviceType")+"|"+ $("#serviceType").val()+"|" + ( $("#serviceType").val() == undefined || $("#serviceType").val() == "") ) ;
        //           alert("statusListbox:"+ $("#statusListbox")+"| value ="+$("#statusListbox").val()+"| check == ''>>" + ($("#statusListbox").val() == "" )) ;
        //          
        //           console.log(">>>>>>"+ (shopCode != 'undefined' && shopCode != "" && ( dateDiff('d', fromdate  ,todate) > 7 ) ));
        //           


        //           if((condition == 'undefined' || condition == '')&&(shopCode == 'undefined' || shopCode == "") &&$("#serviceType").val()==""&&$("#statusListbox").val()=="" ) { 
        //           if( (condition == 'undefined' ) 
        //                      && (shopCode == 'undefined' || shopCode == "" ) 
        //                      && ( $("#serviceType").val() == 'undefined' || $("#serviceType").val() == "")  
        //                      && ( $("#statusListbox").val() == "" ) ) { 
        if ((condition == undefined || "" == condition) && (shopCode == undefined || shopCode == "") && ($("#serviceType").val() == undefined || $("#serviceType").val() == "") && ($("#statusListbox").val() == "")) {
            if (dateDiff('d', fromdate, todate) <= 1 && (fromdate != "" && todate != "")) {
                return true;
            } else {
                msgModel = {
                    "message": "Date interval does not more than 1 days",
                    "message-code": "SYS-000",
                    "message-type": "INFO",
                    "en-message": "Date interval does not more than 1 day",
                    "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 1 วัน",
                    "technical-message": "",
                    "mode": "dealer"
                };

                SystemService.showAlert(msgModel);
                return false;
            }
        } else if ((condition == undefined) && (shopCode != undefined || shopCode != "") && ($("#serviceType").val() == undefined || $("#serviceType").val() == "") && ($("#statusListbox").val() == undefined || $("#statusListbox").val() == "")) {
            if (dateDiff('d', fromdate, todate) <= 1) {
                return true;
            } else {
                //                   alert("Begin and End Date not more than 1 days ,, everything is null");
                msgModel = {
                    "message": "Date interval does not more than 1 days",
                    "message-code": "SYS-000",
                    "message-type": "INFO",
                    "en-message": "Date interval does not more than 1 day",
                    "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 1 วัน",
                    "technical-message": "",
                    "mode": "dealer"
                };

                SystemService.showAlert(msgModel);
                return false;
            }
            //20160830 by waramun delete condition == 'A' , condition == 'C' , condition == 'D'
        } else if (condition != undefined && condition == 'B') { // product-id
            if (dateDiff('d', fromdate, todate) <= 31) {
                return true;
            } else {
                //                   alert("Begin and End Date not more than 30 days >>> condition =0");
                msgModel = {
                    "message": "Date interval does not more than 180 days",
                    "message-code": "SYS-000",
                    "message-type": "INFO",
                    "en-message": "Date interval does not more than 180 day",
                    "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 30 วัน",
                    "technical-message": "",
                    "mode": "dealer"
                };

                SystemService.showAlert(msgModel);
                return false;
            }

        } else if (condition != undefined && condition == 'B') { // customer-id
            if (dateDiff('d', fromdate, todate) <= 31) {
                return true;
            } else {
                //                   alert("Begin and End Date not more than 30 days");
                msgModel = {
                    "message": "Date interval does not more than 30 days",
                    "message-code": "SYS-000",
                    "message-type": "INFO",
                    "en-message": "Date interval does not more than 30 day",
                    "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 30 วัน",
                    "technical-message": "",
                    "mode": "dealer"
                };

                SystemService.showAlert(msgModel);
                return false;
            }

        } else if (condition != undefined && condition == 'C') { // order-id
            return true;
        } else if (condition != undefined && condition == 'D') { // provisioning-id  
            return true;
        } else if (condition != undefined && condition == 'E') { // sale-code
            if (dateDiff('d', fromdate, todate) <= 8) {
                return true;
            } else {
                //                   alert("Begin and End Date not more than 7 days >> salecode");
                msgModel = {
                    "message": "Date interval does not more than 7 days",
                    "message-code": "SYS-000",
                    "message-type": "INFO",
                    "en-message": "Date interval does not more than 7 day",
                    "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 7 วัน",
                    "technical-message": "",
                    "mode": "dealer"
                };

                SystemService.showAlert(msgModel);
                return false;
            }
        } else if (shopCode != undefined && shopCode != "" && (dateDiff('d', fromdate, todate) >= 8)) { //|| (fromdate == "" || todate == "" )){
            // shopcode+date--> 7 day
            //               alert("Begin and End Date not more than 7 days >> shopcode has value");
            msgModel = {
                "message": "Date interval does not more than 7 days",
                "message-code": "SYS-000",
                "message-type": "INFO",
                "en-message": "Date interval does not more than 7 day",
                "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 7 วัน",
                "technical-message": "",
                "mode": "dealer"
            };

            SystemService.showAlert(msgModel);
            return false;
        } else if ((shopCode == undefined || shopCode == "") && ((dateDiff('d', fromdate, todate) > 1) || (fromdate == "" || todate == ""))) {

            //               alert("Begin and End Date not more than 1 days");
            msgModel = {
                "message": "Date interval does not more than 1 day. You don't fill the Shop Code / Dealer Code",
                "message-code": "SYS-000",
                "message-type": "INFO",
                "en-message": "Date interval does not more than 1 day",
                "th-message": "กรุณาใส่วันที่ห่างกันไม่เกิน 1 วัน",
                "technical-message": "",
                "mode": "dealer"
            };

            SystemService.showAlert(msgModel);
            return false;
        } else {
            return true;
        }
    };

    $scope.callReport = function(rowPerPage, page) {
        var isValid = validate();
        if (!isValid) {
            return false;
        }
        //console.log('callReport!!!!! step validate:'+ isValid) ;
        //      SystemService.showLoading();
        var requestUrl = "/aftersales/order/report/query?";
        if (SystemService.demo == true) {
            requestUrl = "app/jsonFiles/monitorOrderAddIDDPage.json?";
        }


        var shopCode = $("#customShopCode").val();
        //alert("1:"+shopCode);
        if (shopCode == undefined || shopCode == '') {

            //           shopCode =  $("#customShopCode").val(); 
            //alert("2:"+shopCode);
            if (shopCode == undefined || shopCode == '') {
                //               shopCode =  $("#shopCodeListbox").val(); 
                //               //alert("3:"+shopCode);
                //               if(shopCode == undefined ){
                shopCode = "";
                //               }
            }
        }

        if ($("#fromdate").val() != "") {
            //          data['submit-date-begin'] = formatDate($("#fromdate").val()) ;
            requestUrl += ('submit-date-begin=' + formatDate($("#fromdate").val()) + "&");
        }

        if ($("#todate").val() != "") {
            //          data['submit-date-end'] = formatDate($("#todate").val()) ;
            requestUrl += ('submit-date-end=' + formatDate($("#todate").val()) + "&");
        }

        //      console.log("===Step set value=======") ;
        //      console.log("status Listbox : " + $("#statusListbox").val());   
        //      if( $("#statusListbox").val() != 'undefined' && $("#statusListbox").val() != "" ){
        if ($("#statusListbox").val() != 'undefined' && $("#statusListbox").val() != "") {
            //          data['status'] = $scope.statuses[$("#statusListbox").val()].name ;
            requestUrl += ('status=' + $scope.statuses[$("#statusListbox").val()].id + "&");
        }

        if ($("#serviceType").val() != 'undefined' && ($("#serviceListbox").val() != "")) {
            //          data['activity'] = $scope.serviceTypes[$("#serviceListbox").val()].id ;
            requestUrl += ('activity=' + $scope.serviceTypes[$("#serviceListbox").val()].id + "&");
        }
        //      console.log("Service Type Listbox : ",$("#serviceListbox").val());
        /*
        if($("#condition").val() != "" ){
            data['condition'] = $scope.conditions[$("#condition").val()].name ;
        }
        */


        if ($("#product-number").val() != "") {
            //          data['product-number'] = $("#product-number").val() ;
            requestUrl += ('product-number=' + $("#product-number").val() + "&");
        }

        //      console.log("product-number : " + $("#product-number").val());


        if ($("#customer-id").val() != "") {
            //          data['customer-id'] = $("#customer-id").val() ;
            requestUrl += ('customer-id=' + $("#customer-id").val() + "&");
        }
        //      console.log("customer-id : ",$("#customer-id").val());
        if ($("#order-id").val() != "") {
            //          data['order-id'] = $("#order-id").val() ;
            requestUrl += ('order-id=' + $("#order-id").val() + "&");
        }
        //      console.log("order-id : ",$("#order-id").val());

        if ($("#provisioning-id").val() != "") {
            //          data['provisioning-id'] = $("#provisioning-id").val() ;
            requestUrl += ('provisioning-id=' + $("#provisioning-id").val() + "&");
        }
        //      console.log("provisioning-id : ",$("#provisioning-id").val());

        var condition = $("#condition").val();

        if (condition != undefined && condition != "") {
            if ($("#sale-code").val() != "") {
                //          data['sale-code'] = $("#sale-code").val() ;
                //              requestUrl += ( 'sale-code=' +  $("#sale-code").val()  +"&" );
                requestUrl += ('creator=' + $("#sale-code").val() + "&");
            }
        }

        if (shopCode != "") {
            //          data['sale-code'] = $("#sale-code").val() ;
            requestUrl += ('partner-code=' + shopCode + "&");
        }

        //      console.log("partner-code : ",$("#shopCode") );
        //      console.log("rowPerPage : ",rowPerPage);
        //      console.log("page : ", page);

        requestUrl += ('page-size=' + rowPerPage + "&");

        requestUrl += ('page-number=' + page + "");

        //console.log("customShopCode : ",$("#customShopCode").val());
        //console.log("fromdate : ",$("#fromdate").val());
        //console.log("todate : ",$("#todate").val());



        /*$scope.datas = [] ;
         for (var i = 0; i < data.length; i++) {
             //console.log("RequestData:"+JSON.stringify(data[i].value()));
         }*/

        //console.log("RequestData:"+JSON.stringify(data)) ;
        $scope.datas = [];
        $scope.orderDatas = [];
        $scope.flagShowMessageResult = false;
        //        objectSSO['Content-Type'] = "application/json";
        //      $http({
        //            method: 'POST',
        //            url: requestUrl,
        //            data : null,
        //            headers: objectSSO,
        //            timeout: 4000   
        //          }).then(function successCallback(response) {
        //              console.log("response >>" ,response);
        //              console.log("response.status >> "+ response.status);
        //              console.log("response.data ['response-data'] >> ", response.data ['response-data']);
        //              
        //              if(response.status == "200"){       
        //                  var data_ = response.data ['response-data'] ;
        //                  if(data_ != undefined ) { //&& data_ [status] == "SUCCESSFUL"
        //                                  console.log("data_ >> ", data_);
        ////                                    if (data_ != 'undefined') {                 
        ////                                        SystemService.hideLoading();
        //                                       try {
        //                                           if (data_['page']['current'] != 'undefined'){
        //                                               $scope.totalPage = data_['page']['total']  ;
        //                                               $scope.page = data_['page']['current'] ;
        //                                               $.each(data_, function(index, value){
        //                                                   $scope.datas[index] = value ;
        //                                               });
        //                                           }
        //                                       } catch(err) {
        //                                          msgModel  = {
        //                                                  "message": "Data not found",
        //                                                  "message-code": "SYS-000",
        //                                                  "message-type": "INFO",
        //                                                  "en-message": "Data not found",
        //                                                  "th-message": "ไม่พบข้อมูล",
        //                                                  "technical-message": "",
        //                                                  "mode":"dealer"};
        //                                           SystemService.showAlert(msgModel);
        //                                           return false;
        //                                       }
        //                                  } else {
        //                                      if (response.data ['display-messages'] != undefined) {
        //                                      msgModel  = {
        //                                              "message":response.data ['display-messages']['message'],
        //                                              "message-code":response.data ['display-messages']['message-code'] ,
        //                                              "message-type": response.data ['display-messages']['message-type'],
        //                                              "en-message": response.data ['display-messages']['en-message'],
        //                                              "th-message": response.data ['display-messages']['th-message'],
        //                                              "technical-message": response.data ['display-messages']['technical-message'] ,
        //                                              "mode":"dealer"};
        //                                      } else {
        //                                          msgModel  = {
        //                                                  "message": response.status,
        //                                                  "message-code": "SYS-000",
        //                                                  "message-type": "INFO",
        //                                                  "en-message": "error",
        //                                                  "th-message": "เกิด ความผิดพลาดในการค้นหา",
        //                                                  "technical-message": response.statusText ,
        //                                                  "mode":"dealer"};   
        //                                      }
        //                                       SystemService.showAlert(msgModel);
        //                                       return false;
        //                                  }
        //              } else if(response.status == "302"){    
        ////                    SystemService.timeOut = 500;
        ////                    SystemService.hideLoading();
        //                  try {
        //                      JSON.parse(reponse);
        //                      } catch (Exception){
        //                          window.location.href =  $scope.urlTimeOut ;
        //                      }
        //              } else {
        //                  
        //              }   
        //        }, function errorCallback(response) {
        //              msgModel  = {
        //                      "message": "Please check service.",
        //                      "message-code": "SYS-"+ response.status ,
        //                      "message-type": "WARNING",
        //                      "en-message": "Please check reponse.",
        //                      "th-message": response.statusText,
        //                      "technical-message": response ,
        //                      "mode":mode};
        //               SystemService.showAlert(msgModel);
        //               return false;
        //        });
        console.log(requestUrl);
        if (SystemService.demo == true) {
            SystemService.showLoading();
            $http.get(requestUrl).success(function(response) {
                //      $http.post(encodeURI(requestUrl) ,{ headers: objectSSO }).success(function(response) {   
                if (response.status == "SUCCESSFUL") {
                    SystemService.hideLoading();
                    if (response['response-data'] != 'undefined') {
                        SystemService.hideLoading();
                        try {
                            if (response['page']['current'] != 'undefined') {
                                $scope.totalPage = response['page']['total'];
                                $scope.page = response['page']['current'];
                                $.each(response['response-data'], function(index, value) {
                                    $scope.datas[index] = value;
                                    $scope.orderDatas[index] = value;
                                    $scope.isLoadOrder = true;
                                    valOrder.push(value);
                                });
                            }
                        } catch (err) {
                            msgModel = {
                                "message": "Data not found",
                                "message-code": "SYS-000",
                                "message-type": "INFO",
                                "en-message": "Data not found",
                                "th-message": "ไม่พบข้อมูล",
                                "technical-message": "",
                                "mode": "dealer"
                            };
                            SystemService.showAlert(msgModel);
                            return false;
                        }
                    } else {
                        msgModel = {
                            "message": "Data not found",
                            "message-code": "SYS-000",
                            "message-type": "INFO",
                            "en-message": "Data not found",
                            "th-message": "ไม่พบข้อมูล",
                            "technical-message": "",
                            "mode": "dealer"
                        };
                        SystemService.showAlert(msgModel);
                        return false;
                    }
                } else {
                    SystemService.hideLoading();
                    msgModel = {
                        "message": response.status,
                        "message-code": "SYS-000",
                        "message-type": "INFO",
                        "en-message": "error",
                        "th-message": "เกิด ความผิดพลาดในการค้นหา",
                        "technical-message": "Trx Id=" + response.trx - id + " Node System =" + process - instance,
                        "mode": "dealer"
                    };
                    SystemService.showAlert(msgModel);
                    return false;
                }

            }).error(function(err) {
                SystemService.hideLoading();
                console.log(err);
                // SystemService.timeOut = 500;
                // SystemService.hideLoading();
                // try {
                //     JSON.parse(reponse);
                // } catch (Exception) {
                //     window.location.href = $scope.urlTimeOut;
                // }

            });
        } else {
            $http.post(requestUrl, /*data*/ null).success(function(response) {
                //      $http.post(encodeURI(requestUrl) ,{ headers: objectSSO }).success(function(response) {   
                if (response.status == "SUCCESSFUL") {

                    if (response['response-data'] != 'undefined') {
                        SystemService.hideLoading();
                        try {
                            if (response['page']['current'] != 'undefined') {
                                $scope.totalPage = response['page']['total'];
                                $scope.page = response['page']['current'];
                                $.each(response['response-data'], function(index, value) {
                                    $scope.datas[index] = value;
                                    $scope.orderDatas[index] = value;
                                    $scope.isLoadOrder = true;
                                    valOrder.push(value);
                                });
                            }
                        } catch (err) {
                            msgModel = {
                                "message": "Data not found",
                                "message-code": "SYS-000",
                                "message-type": "INFO",
                                "en-message": "Data not found",
                                "th-message": "ไม่พบข้อมูล",
                                "technical-message": "",
                                "mode": "dealer"
                            };
                            SystemService.showAlert(msgModel);
                            return false;
                        }
                    } else {
                        msgModel = {
                            "message": "Data not found",
                            "message-code": "SYS-000",
                            "message-type": "INFO",
                            "en-message": "Data not found",
                            "th-message": "ไม่พบข้อมูล",
                            "technical-message": "",
                            "mode": "dealer"
                        };
                        SystemService.showAlert(msgModel);
                        return false;
                    }
                } else {
                    msgModel = {
                        "message": response.status,
                        "message-code": "SYS-000",
                        "message-type": "INFO",
                        "en-message": "error",
                        "th-message": "เกิด ความผิดพลาดในการค้นหา",
                        "technical-message": "Trx Id=" + response.trx - id + " Node System =" + process - instance,
                        "mode": "dealer"
                    };
                    SystemService.showAlert(msgModel);
                    return false;
                }

            }).error(function(err) {
                console.log(err);
                // SystemService.timeOut = 500;
                // SystemService.hideLoading();
                // try {
                //     JSON.parse(reponse);
                // } catch (Exception) {
                //     window.location.href = $scope.urlTimeOut;
                // }

            });
        }
        //      console.log("msgModel: ", msgModel )
        //            if (msgModel != null) 
        //               SystemService.showAlert(msgModel);
    };

    $scope.clearValue = function() {
        $scope.datas = [];
        $scope.orderDatas = [];
        $scope.isLoadOrder = false;
        $scope.totalPage = 0;
        $scope.data_detail = [];

        $("#product-number").val("");
        $("#customer-id").val("");
        $("#order-id").val("");
        $("#provisioning-id").val("");
        $("#sale-code").val("");
        $("#condition").val("");
        $scope.condition = "";
        $("#statusListbox").val("");
        $("#serviceListbox").val("");

        $("#shopCode").val($scope.shopCode);
        $("#customShopCode").val($scope.shopCode);

        // $scope.showDate();
    };

    $scope.callGetPricePlan = function(priceplanCode, type) {
        var pricePlanName = "";

        var detailUrl = "/sales/catalog/product/tmv/priceplan/" + encodeURI(priceplanCode);
        if (SystemService.demo == true) {
            detailUrl = "/app/jsonFiles/monitorOrderDetailAddIDD.json?" + encodeURI(priceplanCode); // +"/data" ;
        }


        var request = $http({
            method: "get",
            url: detailUrl,
            //              data: serializedData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });


        // Store the data-dump of the FORM scope.
        request.success(function(response) {

            if (response.name != undefined) {
                var tmp = (response['description'] == undefined || "" == response['description']) ? '' : (priceplanCode + ":" + response['description']);

                if (type == '1') {
                    $scope.pricePlanNew = tmp;
                } else if (type == '2') {
                    $scope.pricePlanIDD = tmp;
                } else if (type == '3') {
                    $scope.pricePlanIR = tmp;
                } else {
                    $scope.pricePlanCurrent = tmp;
                }
            } else {
                //                   return $scope.pricePlan =  "";


            }
        }).error(function(response) {
            if (type == '1') {
                $scope.pricePlanNew = priceplanCode;
            } else if (type == '2') {
                $scope.pricePlanIDD = priceplanCode;
            } else if (type == '3') {
                $scope.pricePlanIR = priceplanCode;
            } else {
                $scope.pricePlanCurrent = priceplanCode;
            }
            //              return $scope.pricePlan =  "";
        });
    };

    $scope.data_detail = [];
    $scope.popup = function(data) {
        //
        SystemService.showLoading();
        $scope.selectedData = data;
        /*
         $("#orderid").html(data['order-id']) ;
         $("#status").html(data['status-message']) ;
         $("#submit-date").html(data['submit-date']) ;
         $("#sale-code").html(data['sale-code']) ;
         $("#create-by").html(data['create-by']) ;
         $("#customer-name").html(data['customer-name']) ;
         $("#product-id-number").html(data['product-id-number']) ;
         $("#status").html(data['status']) ;
         $("#partner-code").html(data['partner-code']) ;
            */


        var orderid = data['order-id'];
        var detailUrl = "/aftersales/order/get/" + encodeURI(orderid);
        if (SystemService.demo == true) {
            detailUrl = "/app/jsonFiles/monitorOrderDetailChange.json?" + encodeURI(orderid);
        }
        resetValuePopup();
        var request = $http({
            method: "get",
            url: detailUrl,
            //              data: serializedData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 30000
        });


        // Store the data-dump of the FORM scope.
        request.success(function(response) {

            if (response.status == 'SUCCESSFUL') {
                //alert("SAASASS");
                /*
                $scope.changepriceplan_servicetype =  response['response-data']['order-items' ][0] ;
                $scope.swapsim_companycode =  response['response-data']['REF-PARENT-PRODUCT-IDNUMBER' ] ;
                */
                if (response['response-data']['order-items'].length > 0) {
                    $scope.data_detail = response['response-data']['order-items'][0];
                    var inventoryStatus_ = $scope.data_detail['order-data']['INVEN-STATUS'];
                    if (inventoryStatus_ != undefined && null != inventoryStatus_ && "" != inventoryStatus_.trim()) {
                        if (inventoryStatus_ == 1) {
                            $scope.inventoryStatus = "COMPLETE";
                        } else if (inventoryStatus_ == 0) {
                            $scope.inventoryStatus = "FAILED";
                        } else {
                            $scope.inventoryStatus = inventoryStatus_;
                        }
                    } else {
                        $scope.inventoryStatus = "";
                    }
                    //                       alert ("OFFER-GROUP-IR"+ $scope.data_detail['primary-order-data']['CCBS-PROPOSITION']);

                    // new priceplan
                    if ($scope.data_detail['product-name'] != undefined && null != $scope.data_detail['product-name']) {
                        $scope.callGetPricePlan($scope.data_detail['product-name'], '1');
                    }

                    //current priceplan
                    if ($scope.data_detail['order-data']['CURRENT-PRICEPLAN'] != undefined && null != $scope.data_detail['order-data']['CURRENT-PRICEPLAN']) {
                        //$scope.data_detail['order-data']['CURRENT-PRICEPLAN'] = $scope.data_detail['order-data']['CURRENT-PRICEPLAN']  + ("" != $scope.pricePlan ?":"+$scope.pricePlan:"") ;
                        $scope.callGetPricePlan($scope.data_detail['order-data']['CURRENT-PRICEPLAN'], '0');
                    }
                    //                       alert ("OFFER-GROUP-IDD"+ $scope.data_detail['order-data']['OFFER-GROUP-IDD']);
                    // priceplan IDD
                    if ($scope.data_detail['primary-order-data']['OFFER-GROUP-IDD'] != undefined && null != $scope.data_detail['primary-order-data']['OFFER-GROUP-IDD']) {
                        //$scope.data_detail['order-data']['CURRENT-PRICEPLAN'] = $scope.data_detail['order-data']['CURRENT-PRICEPLAN']  + ("" != $scope.pricePlan ?":"+$scope.pricePlan:"") ;
                        $scope.callGetPricePlan($scope.data_detail['primary-order-data']['OFFER-GROUP-IDD'], '2');
                    }
                    //                       alert ("OFFER-GROUP-IR"+ $scope.data_detail['order-data']['OFFER-GROUP-IR']);
                    // priceplan IR
                    if ($scope.data_detail['primary-order-data']['OFFER-GROUP-IR'] != undefined && null != $scope.data_detail['primary-order-data']['OFFER-GROUP-IR']) {
                        $scope.callGetPricePlan($scope.data_detail['primary-order-data']['OFFER-GROUP-IR'], '3');
                    }
                    $scope.data_detail.reprint = $scope.selectedData.reprint;
                    console.log($scope.data_detail);
                }

            }
        }).error(function(response) {

        });
        SystemService.hideLoading();
    };

    resetValuePopup = function(data) {
        $scope.pricePlanCurrent = "";
        $scope.pricePlanNew = "";
        $scope.pricePlanIDD = "";
        $scope.pricePlanIR = "";
    }

    var webContextPath = getContextPath();
    console.log(webContextPath);
    $scope.callPrint = function(data) {
        if (null != data['order-id']) {
            var detailUrl = webContextPath + "/reprint.jsp?keyId=" + encodeURI($scope.service + "/aftersales/order/pdf/get-pdf-reprint?order-id=" + data['order-id']); //webapp/aftersale               
            //      window.open("http://localhost:8080/webapp/aftersale/app/views/print.html?keyId=15120400TLR000000141" , "Print Popup Window", "width=600,height=600,scrollbars=yes,resizable=yes");
            window.open(detailUrl, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=500, width=600, height=600");
            return true;
        } else {
            return false;
        }
    }

    $scope.select = function(selectID){
        $('.idActive').removeClass("success");
        $('#' + selectID ).addClass("success");

    }

    $scope.leyoutType = "layout-table";
    $scope.selectLayout = function(selectID){
        if(selectID == "layout-table"){
            $('#' + selectID ).addClass("leyout-type");
            $('#layout-columns').removeClass("leyout-type");
            $('.idActive').removeClass("success");
            $scope.leyoutType = "layout-table";
        } else {
            $('#' + selectID ).addClass("leyout-type");
            $('#layout-table').removeClass("leyout-type");
            $scope.leyoutType = "layout-columns";
        }
    }

    var valOrder = [];
    $scope.searchOrder = "";
    $scope.isLoadOrder = false;
    $scope.smartSearchOrder = function(txtSearch) {
        if ($scope.isLoadOrder) {
            var arr = valOrder;
            if (txtSearch.indexOf(' ') > 0) {
                var txtList = txtSearch.split(' ');

                console.log(txtList);
                for (var i = 0; i < txtList.length; i++) {
                    arr = $filter('filter')(arr, txtList[i]);
                }
                $scope.orderDatas = arr;
            } else {
                $scope.orderDatas = $filter('filter')(valOrder, txtSearch);
            }
        }
    };
});
