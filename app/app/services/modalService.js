smartApp.service('ValidateMsgService', function() {
    this.data = {
        "effectiveDateMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify EFFECTIVE-DATE",
            "th-message": "กรุณาระบุ EFFECTIVE-DATE",
            "technical-message": "FROM WEBUI"
        },
        "authorizeIdMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify ID number / Passport",
            "th-message": "กรุณาระบุ หมายเลขบัตรประชาชน / พาสปอร์ต ของผู้รับมอบอำนาจ",
            "technical-message": "FROM WEBUI"
        },
        "authorizeNameMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify First name – Last name",
            "th-message": "กรุณาระบุ ชื่อ – นามสกุล ของผู้รับมอบอำนาจ",
            "technical-message": "FROM WEBUI"
        },
        "cugMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify CUG",
            "th-message": "กรุณาระบุ CUG",
            "technical-message": "FROM WEBUI"
        },
        "volumeMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify volume cap max parameter value",
            "th-message": "กรุณาระบุ volume cap max parameter value",
            "technical-message": "FROM WEBUI"
        },
        "monetaryMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify monetary cap max parameter value",
            "th-message": "กรุณาระบุ monetary cap max parameter value",
            "technical-message": "FROM WEBUI"
        },
        "occurrenceMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify occurrence cap max parameter value",
            "th-message": "กรุณาระบุ occurrence cap max parameter value",
            "technical-message": "FROM WEBUI"
        },
        "durationMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify duration cap max parameter value",
            "th-message": "กรุณาระบุ duration cap max parameter value",
            "technical-message": "FROM WEBUI"
        },
        "ffMsg": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please input Friend & Family Number",
            "th-message": "กรุณาระบุเลขหมายเลขคนสนิท (Friend & Family)",
            "technical-message": "FROM WEBUI"
        },
        "pricePlanNotFoundMsg": {
            "message": "ไม่พบ Price Plan นี้",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Price Plan not found,please check & try again",
            "th-message": "Price Plan ไม่ถูกต้องตามเงื่อนไข กรุณาตรวจสอบอีกครั้ง",
            "technical-message": "FROM WEBUI"
        },
        "errFormatEmail": {
            "message": "รูปแบบอีเมล์ไม่ถูกต้อง",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Invalid email format,please check & try again",
            "th-message": "รูปแบบอีเมล์ไม่ถูกต้องตามเงื่อนไข กรุณาตรวจสอบอีกครั้ง",
            "technical-message": "FROM WEBUI"
        },
        "errFormatIdCard": {
            "message": "รูปแบบเลขบัตรประชาชนไม่ถูกต้อง",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Invalid ID Number format,please check & try again",
            "th-message": "รูปแบบเลขบัตรประชาชนไม่ถูกต้องตามเงื่อนไข กรุณาตรวจสอบอีกครั้ง",
            "technical-message": "FROM WEBUI"
        },
        "cugNotFound": {
            "message": "ไม่พบข้อมูล CUG ID นี้",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "CUG ID not found,please check & try again",
            "th-message": "ไม่พบข้อมูล CUG ID นี้ กรุณาตรวจสอบอีกครั้ง",
            "technical-message": "FROM WEBUI"
        },
        "isDigitSubNo": {
            "message": "ใส่ได้เฉพาะตัวเลข 3-10 Digits",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please input Friend & Family Number.",
            "th-message": "กรุณาระบุเลขหมายเลขคนสนิท(Friend & Family)",
            "technical-message": "FROM WEBUI"
        },
        "pleaseSelectPP": {
            "message": "กรุณาเลือก Price Plan",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please select Price Plan",
            "th-message": "กรุณาเลือก Price Plan",
            "technical-message": "FROM WEBUI"
        },
        //ChangeOwnerShip
        "msgNewCusIDnoEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify New Customer’s ID number / Passport",
            "th-message": "กรุณาระบุ หมายเลขบัตรประชาชน / พาสปอร์ต ของผู้จดทะเบียนใหม่",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusIDnoEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s ID Type",
            "th-message": "กรุณาระบุประเภทของบัตร ผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusPrefixEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s Prefix",
            "th-message": "กรุณาระบุคำนำหน้าของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusIDTypeEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s ID number / Passport",
            "th-message": "กรุณาระบุ หมายเลขบัตรประชาชน / พาสปอร์ต ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusFirstNameEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s First Name",
            "th-message": "กรุณาระบุชื่อ ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusLastNameEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s Last Name",
            "th-message": "กรุณาระบุนามสกุล ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusGenderEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s Gender",
            "th-message": "กรุณาระบุเพศ ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusBirthdateEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s BirthDate",
            "th-message": "กรุณาระบุวัน/เดือน/ปีเกิด ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusExpireDateEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s ExpireDate",
            "th-message": "กรุณาระบุวันหมดอายุ ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },
        "msgNewPreCusPricePlanEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Prepaid Customer’s PricePlan",
            "th-message": "กรุณาระบุโปรโมชั่น ของผู้จดทะเบียนเติมเงิน",
            "technical-message": "FROM WEBUI"
        },


        "msgNewCusFirstNameEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify New Customer’s First Name",
            "th-message": "กรุณาระบุ ชื่อผู้จดทะเบียนใหม่",
            "technical-message": "FROM WEBUI"
        },
        "msgNewCusLastNameEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify New Customer’s Last Name",
            "th-message": "กรุณาระบุ นามสกุลผู้จดทะเบียนใหม่",
            "technical-message": "FROM WEBUI"
        },
        "msgSubFirstNameEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Subscriber’s Name",
            "th-message": "กรุณาระบุ ชื่อผู้ใช้หมายเลข",
            "technical-message": "FROM WEBUI"
        },
        "msgSubLastNameEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Subscriber’s Last Name",
            "th-message": "กรุณาระบุ นามสกุลผู้ใช้หมายเลข",
            "technical-message": "FROM WEBUI"
        },
        "msgSubBirthdateEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Subscriber’s Birth date",
            "th-message": "กรุณาระบุ วัน/เดือน/ปีเกิด ผู้ใช้หมายเลข",
            "technical-message": "FROM WEBUI"
        },
        "msgBillZipcodeEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Zip Code",
            "th-message": "กรุณาระบุ รหัสไปรษณีย์",
            "technical-message": "FROM WEBUI"
        },
        "msgBillProvinceEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Province",
            "th-message": "กรุณาระบุ จังหวัด",
            "technical-message": "FROM WEBUI"
        },
        "msgBillDistrictEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify District",
            "th-message": "กรุณาระบุ เขต / อำเภอ",
            "technical-message": "FROM WEBUI"
        },
        "msgBillSubDistrictEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Sub-District",
            "th-message": "กรุณาระบุ แขวง / ตำบล",
            "technical-message": "FROM WEBUI"
        },
        "msgBillHouseNoEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify House No.",
            "th-message": "กรุณาระบุ บ้านเลขที่",
            "technical-message": "FROM WEBUI"
        },
        "msgBillVillageNoEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Village No.",
            "th-message": "กรุณาระบุ หมู่ที่",
            "technical-message": "FROM WEBUI"
        },
        "msgBillRoadEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Road",
            "th-message": "กรุณาระบุ ถนน",
            "technical-message": "FROM WEBUI"
        },
        "msgBillEmailEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify E-mail",
            "th-message": "กรุณาระบุ E-mail",
            "technical-message": "FROM WEBUI"
        },
        "msgBillSmsNoEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Telephone No.",
            "th-message": "กรุณาระบุ เบอร์สำหรับส่ง SMS",
            "technical-message": "FROM WEBUI"
        },
        "msgCusContractNoEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Contact No.",
            "th-message": "กรุณาระบุ เบอร์ที่สามารถติดต่อได้",
            "technical-message": "FROM WEBUI"
        },
        "msgDuplicateID": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Change ownership not allow with same customer id.",
            "th-message": "ไม่อนุญาตให้ทำการโอนเปลี่ยนเจ้าของภายใต้เจ้าของเดิม",
            "technical-message": "FROM WEBUI"
        },
        "msgSimSerialEmpty": {
            "message": "",
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "Please specify Sim Serial.",
            "th-message": "กรุณาระบุ หมายเลขซิมการ์ดใหม่",
            "technical-message": "FROM WEBUI"
        }
    };
});
smartApp.service('ModalService', function(ngDialog) {

    this.showAlert = function(msgModel) {
        ngDialog.open({
            template: 'alertDialog',
            controller: 'AlertController',
            showClose: false,
            data: msgModel,
            preCloseCallback: function() {
                setTimeout(function() {
                    ngDialog.close();
                }, 100);
            }
        });
    }
    this.showConfirm = function() {
        var fn = ngDialog.openConfirm({
            template: 'modalConfirm',
            showClose: false
        });
        return fn;
    }
    this.showLoading = function() {
        var fn = ngDialog.open({
            template: 'modalLoading',
            showClose: false
        });
    }
    this.hideLoading = function() {
        setTimeout(function() {
            ngDialog.close();
        }, 100);
    }
    this.showBeforeClose = function(msgModel) {
        ngDialog.open({
            template: 'showBeforeClose',
            controller: 'AlertController',
            data: msgModel,
            showClose: false,
        });
    };

});
// จาก issue modal ที่ใช้กับ ie8 ไม่ได้  แก้เป็น
smartApp.controller('ngAlertController', function($scope, SystemService, $ngBootbox) {
    //$('#modalReadCard').click();
    $scope.ngDialogData = SystemService.ngDialogData;
    $scope.ngBootBoxClose = function() {
        //$('#modalReadCard').click();
        //$('.modal-backdrop').removeClass('in');
        //$('.modal-backdrop').addClass('out');
        //$('.modal-backdrop').addClass('hide');
        bootbox.hideAll();
        try {
            angular.element(document.getElementById('' + $('#divID').val())).scope().afterCloseWarning();
        } catch (e) {}

        //$("#btn-fancy-ReadCard").fancybox().trigger('click');
    };
});
smartApp.controller('ngBootboxPricePlanController', function($scope, SystemService, $ngBootbox) {
    $scope.pricePlans = SystemService.pricePlans;
    console.log($scope.pricePlans);
    $scope.ngBootBoxClose = function() {
        bootbox.hideAll();
    };
});
smartApp.controller('ngShowBeforeCloseController', function($scope, SystemService, $ngBootbox) {
    $scope.ngDialogData = SystemService.ngDialogData;
    $scope.ngBootBoxClose = function() {
        bootbox.hideAll();
    };
});






//ไม่ได้ใช้ รอ ลบ
smartApp.controller('AlertController', function($scope, ngDialog, SystemService) {
    //document.getElementById('modalReadCard').click();
    $scope.ngDialogClose = function() {
        ngDialog.close();

    };


    //-------------------- example call dialog ------------------------

    //SystemService.showBeforeClose({
    //    "message": "รายการคำขอเลขที่ OR30935 ",
    //    "message2": "ได้รับข้อมูลเรียบร้อยแล้ว",
    //});
    //SystemService.showAlert({
    //    "message": "Data not found.",
    //    "message-code": "ACAHblG10001",
    //    "message-type": "ERROR",
    //    "en-message": "Data not found.",
    //    "th-message": "Data not found.",
    //    "technical-message": "CCB_INT Method : searchCustomerInfoTM, URL : http://172.19.216.115:8180/SearchCustomerInfoWS/SearchCustomerInfoSI"
    //});
    //SystemService.showAlert({
    //    "message": "Price Plan ใหม่จะมีผลรอบบิลหน้า",
    //    "message-code": "",
    //    "message-type": "WARNING",
    //    "en-message": "en-message",
    //    "th-message": "th-message",
    //    "technical-message": "WARNING"
    //});
    //SystemService.showConfirm().then(function (value) {
    //    //confirm
    //    SystemService.showBeforeClose({
    //        "message": "รายการคำขอเลขที่ OR30935 ",
    //        "message2": "ได้รับข้อมูลเรียบร้อยแล้ว",
    //    });
    //}, function (reason) {
    //    //cancel
    //    SystemService.showAlert({
    //        "message": "Cancel",
    //        "message-code": "",
    //        "message-type": "INFO",
    //        "en-message": "",
    //        "th-message": "",
    //        "technical-message": ""
    //    });
    //});


});
