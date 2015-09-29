// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('ChangeResumeController', function ($scope, SystemService, $routeParams, ReasonService) {

    $scope.divID = "resumeContent";
    $scope.isMatch = true;
    $scope.isVerify = false;
    $scope.dataAddress = {};
    $scope.CitizenID = "";
    $scope.shopType = $routeParams.shopType;
    $scope.Id = $routeParams.ID;
    $scope.SubNo = $routeParams.SubNo;
    $scope.statusCancel = $routeParams.statusCancel;
    $scope.customerStatusN = "O";
    SystemService.validateNummeric();
    SystemService.calendarDatePicker();
    $scope.data = {};
    $scope.isReadCardSuccess = false;
    $scope.blah = "1";
    $scope.dataSlip = {
        "1": "E-Bill-Email",
        "2": "E-Bill-SMS",
        "3": "Bill-Paper",
    };
    $scope.billPayment = {
        email: ""
    };
    $scope.onCheckEmail = function () {
        SystemService.setValidateEmail($scope.billPayment.email);
    };

    //Temp ID Card $scope
    $scope.cardTypeOptions = {
        "0": "เลือก",
        "1": "หนังสือรับรองบริษัท/ห้าง",
        "2": "บัตรประจำตัวข้าราชการ",
        "3": "ใบสุทธิ",
        "4": "หนังสือเดินทาง",
        "5": "ทะเบียนวัด",
        "6": "บัตรประชาชน",
        "7": "หนังสือรับจัดตั้งสมาคม",
        "8": "บัญชีมูลนิธิ",
        "9": "ทะเบียนพานิชย์",
        "10": "บัตรประจำตัวพนักงานรัฐวิสาหกิจ",
        "11": "บัตรประจำตัวคนต่างด้าว",
        "12": "อื่นๆ",
        "13": "บัตรนักเรียน-นักศึกษา",
        "14": "ใบขับขี่",
        "15": "TempPassport บัตรไม่ระบุสัญชาติ"
    };

    $scope.cardType = "0";

    //ประเภทลูกค้าย่อย
    $scope.subCompanyTypeOptions = {
        "0": "เลือก",
        "1": "DEF: Default for Support Complex Migration",
        "2": "EDI: Education Indy (EDU)",
        "3": "FEB: Real Fure E1-Bulk SMS",
        "4": "FIN: RF-Individual",
        "5": "FTE: RF-True Employee",
        "6": "FVI: RF-VIP Individaul",
        "7": "GOI: Government Indy (GSE)",
        "8": "PPI: Property Indy",
        "9": "R7E: RMV RFT fro 7-11 Individual",
        "10": "RBU: Individual-Business"
    };
    $scope.subCompanyType = "4";

    //ระบุผู้ใช้บัตร
    $scope.userRegisterd = {
        title: "",
        titleOther: "0",
        firstName: "",
        lastName: "",
        birthDay: "",
        smsLanguage: "Th"
    };
    //prefer contact
    $scope.preferContact = "0";
    $scope.lstpreferContact = {
        "0": "None",
        "1": "Send All",
        "2": "กำหนดเบอร์ ",
    };
    //Price plan list
    $scope.pricePlans = [
        { pricePlan: "EDATAP68: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002720", rc: "399" },
        { pricePlan: "ADATAP99: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002721", rc: "499" },
        { pricePlan: "YDATAP55: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002722", rc: "799" },
        { pricePlan: "EDATAP69: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002723", rc: "399" },
        { pricePlan: "YDATAP56: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002724", rc: "799" },
        { pricePlan: "EDATAP44: Biz &amp; Ent xxx,Data UNLxGB/xxx,WiFi", promotion: "RMV0000000002725", rc: "999" }];

    $scope.pricePlan = {
        name: "EDATAP69: Biz &amp; Ent xxx",
        promotion: "",
        rc: ""
    };

    $scope.isSelectedPricePlan = "";

    $scope.selectedPricePlan = function (pp) {
        $scope.isSelectedPricePlan = pp.pricePlan;
        console.log(pp);
        $scope.pricePlan = {
            name: pp.pricePlan,
            promotion: pp.promotion,
            rc: pp.rc
        };
    };
    //chane สถานะหมายเลข
    

    $scope.lstchangeStatusNum = {
        "0": "เลือก",
        "1": "Resume",
        "2": "Resume with New SIM",
    };
    $scope.changeStatusNum = "0";

    $scope.promotion = "";
    $scope.selectedPromotion = function () {
        $scope.pricePlan = {};
    };
    //End pricePlan

    //Title 
    $scope.titleOptions = [{
        "key": "DR.",
        "value": "T4",
        "description": "ดร.",
        "en-description": "Dr.",
        "th-description": "ดร."
    }, {
        "key": "MISS",
        "value": "T3",
        "description": "นางสาว",
        "en-description": "Miss",
        "th-description": "นางสาว"
    }, {
        "key": "MR.",
        "value": "T1",
        "description": "นาย",
        "en-description": "Mr.",
        "th-description": "นาย"
    }, {
        "key": "MRS.",
        "value": "T2",
        "description": "นาง",
        "en-description": "Mrs.",
        "th-description": "นาง"
    }, {
        "key": "OTHER",
        "value": "T5",
        "description": "อื่่น ๆ",
        "en-description": "Other",
        "th-description": "อื่น ๆ"
    }];

    $scope.changeTitleOptions = function (title) {
        console.log(title);
        $scope.newOwner.prefixTH = title;
    };

    $scope.titleOtherOptions = {
        "0": "เลือก",
        "1": "ด.ช.",
        "2": "ด.ญ.",
        "3": "จ.ท.",
        "4": "จ.ต.หญิง",
        "5": "จ.ท.หญิง"
    };

    $scope.titleOther = "0";
    //End title

    //BusinessType
    $scope.businessType = "O";
    $scope.changeReqType = function (type) {
        $scope.businessType = type;
        //SystemService.genDatePicker();
    };

    $scope.newOwner = {};
    $scope.readCardError = function (msg) {
        SystemService.showAlert({
            "message": msg,
            "message-code": "",
            "message-type": "WARNING",
            "en-message": "",
            "th-message": "",
            "technical-message": ""
        });
    };
    $scope.confirmPrint = function () {
        //confirm
        SystemService.showBeforeClose({
            "message": "รายการคำขอเลขที่ OR30935 ",
            "message2": "ได้รับข้อมูลเรียบร้อยแล้ว",
        });
        //SystemService.showConfirm().then(function (value) {

        //}, function (reason) {
        //    //cancel

        //});
    };
    $scope.init = function () {
        $('#loadingReadCard').hide();
        
        $scope.tempCardAddress = {};
        $scope.tempOldAddress = {};
        $scope.tempOtherAddress = {};       
        $scope.mailAddress = {};
        $scope.billAddress = {};

        //address on card
        SystemService.getAddressByType("0", function (result) {            
            $scope.tempCardAddress = result.data;
            //console.log($scope.tempAddress);
        });

        //address on old customer
        SystemService.getAddressByType("1", function (result) {
            $scope.tempOldAddress = result.data;
            $scope.dataAddress = result.data;
            //console.log($scope.tempOldAddress);
        });

        //other
        SystemService.getAddressByType("2", function (result) {
            $scope.tempOtherAddress = result.data;
            //console.log($scope.tempOtherAddress);
        });

        SystemService.get("0689100006", function (result) {
            $scope.data = result.data;
            $scope.isReadCardSuccess = false;
        });

    };

    $scope.useAddressAsCard = function (type) {
        if (type == 'H')
            $scope.mailAddress = $scope.tempCardAddress;
        else
            $scope.billAddress = $scope.tempCardAddress;
    };

    $scope.unUseAddressAsCard = function (type) {
        if (type == 'H')
            $scope.mailAddress = {};
        else
            $scope.billAddress = {};
    };
    $scope.openSSO = function () {
        //var new_window = window.open('', "MsgWindow", "width=320, height=240");
        //new_window.onbeforeunload = function () {
        //    alert('close');
        //}
        //var new_window = window.open("", "MsgWindow", "width=800, height=600");
        //new_window.onbeforeunload = function () { alert('close'); }

        var openDialog = function (uri, name, options, closeCallback) {
            var win = window.open(uri, name, options);
            var interval = window.setInterval(function () {
                try {
                    if (win == null || win.closed) {
                        window.clearInterval(interval);
                        closeCallback(win);
                    }
                }
                catch (e) {
                }
            }, 1000);
            return win;
        };


        var url = "https://sso-devt.true.th:11443/SSORESTFul/SecondAuthen.jsp?App=WEBUI&TrxID=" + $scope.TrxID + "&Retry=yes&Goto=";
        //var url = "https://www.google.co.th";

        openDialog(url, "MsgWindow", "width=800, height=600", function (w) {
            //alert('debug : close and call(second_authen?trx_id=' + $scope.TrxID + '&app_id=WEBUI)');
            SystemService.second_authen($scope.TrxID, function (result) {
                $scope.manualInputReadCard();
            });

        });
    };
    //End Temp ID Card $scope

    $scope.initModalReadCard = function () {
        $("#btnReadCardClose").click(function () {
            $('input[type=submit]').hide();
            $('input[type=reset]').hide();
        });
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#loadingReadCard3').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        $('#CitizenID').val('');
        document.getElementById("CitizenID").disabled = true;
        $('input[type=submit]').show();
        $('input[type=reset]').show();
    }
    $scope.manualInputReadCard = function () {
        $('#loadingReadCard').hide();
        $('#loadingReadCard2').hide();
        $('#unMatch').hide();
        $('#unMatch2').hide();
        document.getElementById("CitizenID").disabled = false;

        setTimeout(function () {
            $('#CitizenID').val('');
        }, 0);
        $scope.isManualReadCard = false;
    }

    if ($scope.shopType == "1") {
        setTimeout(function () {
            document.getElementById('modalReadCard').click();
            $scope.initModalReadCard();
        }, 1000);
    }
    else {

        setTimeout(function () {
            $scope.initModalReadCard();
        }, 500);

        SystemService.get("0689100006", function (result) {
            $scope.data = result.data;
            //$scope.isReadCardSuccess = true;

        });
    }
    $scope.SetCardValue = function (result) {
        $('#loadingReadCard').hide();
        $scope.isReadCardSuccess = false;

        $scope.cardInfo = eval(result);
        console.log($scope.cardInfo.CitizenID);
        $scope.CitizenID = $scope.cardInfo.CitizenID;
        $('#CitizenID').val('' + $scope.cardInfo.CitizenID);


        if ($scope.cardInfo.CitizenID == $routeParams.ID) {
            SystemService.get("0689100006", function (result) {
                document.getElementById('btnReadCardClose2').click();

                $scope.data = result.data;
                $scope.isReadCardSuccess = true;
            });

        } else {
            $('#unMatch').show();
            $scope.isMatch = false;
        }
        ///$scope.ReadCardMockUp($scope.cardInfo.CitizenID);
        //console.log(result);
        //console.log(result.CitizenID);

    }
    $scope.onInputId2 = function () {
        var cid = $('#CitizenID2').val();
        if (cid.length == 13) {
            if (SystemService.validatePID(cid)) {

            } else {
                $('#CitizenID2').val('');
            }
        }
    };
    $scope.SetCardValue2 = function (result) {
        $('#loadingReadCard2').hide();

        $scope.cardInfo2 = eval(result);
        console.log($scope.cardInfo2);

        $('#CitizenID2').val($scope.cardInfo2.CitizenID);
        $('#authorizeFullName').val($scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH);
        //$scope.CitizenID2 = $scope.cardInfo2.CitizenID;
        //$scope.authorizeFullName = $scope.cardInfo2.PrefixTH + "" + $scope.cardInfo2.FirstNameTH + "  " + $scope.cardInfo2.LastNameTH;
    }
    $scope.SetCardValue3 = function (result) {
        $('#loadingReadCard3').hide();

        $scope.cardInfo3 = eval(result);
        console.log($scope.cardInfo3);

        $('#citizenID3').val($scope.cardInfo3.CitizenID);
        $('#prefixTH3').val($scope.cardInfo3.PrefixTH);
        $('#firstNameTH3').val($scope.cardInfo3.FirstNameTH);
        $('#lastNameTH3').val($scope.cardInfo3.LastNameTH);
        $('#birthDay').val($scope.cardInfo3.BirthDay);
        $('#expireDay').val($scope.cardInfo3.ExpireDay);
        $('#sex3').val($scope.cardInfo3.Sex);

        //$scope.cardType = "6";
        $('#cardType').val('6');

        //binding Tax Id
        $('#taxId3').val($scope.cardInfo3.CitizenID);

        //binding user registerd - ระบุผู้ใช้หมายเลข
        $('#titleRegisterd').val($scope.cardInfo3.PrefixTH);
        $('#firstNameRegisterd').val($scope.cardInfo3.FirstNameTH);
        $('#lastNameRegisterd').val($scope.cardInfo3.LastNameTH);
        $('#birthDayRegisterd').val($scope.cardInfo3.BirthDay);


        //$scope.newOwner = {
        //    citizenID: $scope.cardInfo3.CitizenID,
        //    prefixTH: 'นาย',
        //    firstNameTH: $scope.cardInfo3.FirstNameTH,
        //    lastNameTH: $scope.cardInfo3.LastNameTH,
        //    prefixEN: $scope.cardInfo3.PrefixEN,
        //    firstNameEN: $scope.cardInfo3.FirstNameEN,
        //    lastNameEN: $scope.cardInfo3.LastNameEN,
        //    sex: $scope.cardInfo3.Sex,
        //    birthDay: $scope.cardInfo3.BirthDay,
        //    issueDay: $scope.cardInfo3.IssueDay,
        //    expireDay: $scope.cardInfo3.ExpireDay,
        //};
        //console.log($scope.newOwner);
    }

    $scope.isManualReadCard = true;
    $scope.onInputId = function () {
        //    if ($scope.certificateID == "0689100007") {
        //        SystemService.get("0689100007", function (result) {
        //            $scope.data = result.data;
        //            console.log($scope.data);
        //            document.getElementById('btnReadCardClose').click();

        //            if ($scope.data["status-code"] == "1") {
        //                document.getElementById('btnModalWarning').click();
        //            }
        //        });

        //    }
        console.log($('#CitizenID').val().length);
        var cid = $('#CitizenID').val();
        if (cid.length == 13) {
            if (cid == $routeParams.ID) {
                SystemService.get("0689100006", function (result) {
                    document.getElementById('btnReadCardClose2').click();

                    $scope.data = result.data;
                    $scope.isReadCardSuccess = false;
                });

            } else {
                $('#unMatch').show();
                $scope.isMatch = false;
            }
            //SystemService.get($scope.certificateID, function (result) {
            //    console.log(result);
            //    document.getElementById('btnReadCardClose').click();
            //    //$scope.data = result.data;
            //    //console.log($scope.data);

            //    if (result.data["status-code"] == "2") {
            //        document.getElementById('btnModalError').click();
            //    }
            //});

        }
    }


    $scope.priceModel = "";
    $scope.priceListmodal = "";
    $scope.priceFunc = function () {
        console.log($scope.priceListmodal);
        if ($scope.priceListmodal == "A") {
            $scope.priceModel = "PLSMAP09 : 4G 699";
        }
        if ($scope.priceListmodal == "B") {
            $scope.priceModel = "PLSMAP09 : 4G 899";
        }
    };
    var picker = new Pikaday({
        field: document.getElementById('startB1'),
        format: "DD/MM/YYYY",
        i18n: {
            previousMonth: 'ย้อนหลัง',
            nextMonth: 'ถัดไป',
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'],
            weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
        },

        onSelect: function () {
            picker2.setMinDate(this.getDate());
        }
    });
    var picker = new Pikaday({
        field: document.getElementById('startB2'),
        format: "DD/MM/YYYY",
        i18n: {
            previousMonth: 'ย้อนหลัง',
            nextMonth: 'ถัดไป',
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'],
            weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
        },

        onSelect: function () {
            picker2.setMinDate(this.getDate());
        }
    });
    var picker = new Pikaday({
        field: document.getElementById('startB3'),
        format: "DD/MM/YYYY",
        i18n: {
            previousMonth: 'ย้อนหลัง',
            nextMonth: 'ถัดไป',
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'],
            weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
        },

        onSelect: function () {
            picker2.setMinDate(this.getDate());
        }
    });
    var ddd = document.getElementById('start');
    console.log("dddddddddd : " + ddd);
    var picker = new Pikaday({
        field: document.getElementById('start'),
        format: "DD/MM/YYYY",
        i18n: {
            previousMonth: 'ย้อนหลัง',
            nextMonth: 'ถัดไป',
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'],
            weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
        },

        onSelect: function () {
            picker2.setMinDate(this.getDate());
        }
    });
    var picker2 = new Pikaday({
        field: document.getElementById('end'),
        format: "DD/MM/YYYY",
        i18n: {
            previousMonth: 'ย้อนหลัง',
            nextMonth: 'ถัดไป',
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'],
            weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
        },
        onSelect: function () {
            picker.setMaxDate(this.getDate());
        }
    });

    var picker = new Pikaday({
        field: document.getElementById('startid'),
        format: "DD/MM/YYYY",
        i18n: {
            previousMonth: 'ย้อนหลัง',
            nextMonth: 'ถัดไป',
            months: [
                'มกราคม',
                'กุมภาพันธ์',
                'มีนาคม',
                'เมษายน',
                'พฤษภาคม',
                'มิถุนายน',
                'กรกฎาคม',
                'สิงหาคม',
                'กันยายน',
                'ตุลาคม',
                'พฤศจิกายน',
                'ธันวาคม'],
            weekdays: ['อาทิตย์', 'จันทร', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
            weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
        },

        onSelect: function () {
            picker2.setMinDate(this.getDate());
        }
    });
    var runTime = new Date().getTime();
    $scope.template = {

        "header": "app/views/header.html?" + runTime,
        "customerprofile": "app/views/customerprofile.html?" + runTime,
        "reasonmemo": "app/views/reasonmemo.html?" + runTime,
        "modalPricePlan": "app/views/modalPricePlan.html?" + runTime
    }
    //$scope.ucCHecked = true;
    $scope.bantypeMail = false;
    $scope.mootypeMail = false;
    $scope.bantypeBill = false;
    $scope.mootypeBill = false;
    $scope.customerType = "N";
    $scope.changCheckno = false;
    $scope.changOpenserviceN = false;
    $scope.changOpenserviceBC = false;
    
    if ($scope.statusCancel == "0") {
        $scope.customerStatusN = "N";
        setTimeout(function () {
            $scope.mailAddress = $scope.dataAddress;
        }, 0);
        
    }
    else {
        $scope.mailAddress = {};
    }
    $scope.customerStatusBC = "O";
    $scope.slipType = "H";


    $scope.selectedCompany = '1';
    $scope.selectCompany = function (company) {
        $scope.selectedCompany = company;
    };

    $scope.changecusStatusN = function (customerStatus) {
        if (customerStatus == 'N') {
            $scope.changOpenserviceN = false;
            $scope.mailAddress = {};
            $scope.rowNoSelected = '1';
        }
        $scope.customerStatusN = customerStatus;
    };
    $scope.changecusStatusBC = function (customerStatus) {
        if (customerStatus == 'N') {
            $scope.changOpenserviceBC = false;

        }
        $scope.customerStatusBC = customerStatus;
    };

    $scope.checkOldAddress = function () {
        if ($scope.changOpenserviceN == true)
            if ($scope.rowNoSelected == '1') {
                $scope.mailAddress = $scope.tempOldAddress;
            }
            else {
                $scope.mailAddress = $scope.tempOtherAddress;
            }

    };

    $scope.changeOldAddress = function (status) {
        if (status) {
            $scope.changOpenserviceN == true;
            $scope.mailAddress = $scope.tempOldAddress;
        }
        else {
            $scope.rowNoSelected = '1';
            $scope.changOpenserviceN == false;
            $scope.mailAddress = {};
        }
    };

    $scope.changeOldAddressBC = function (status) {
        if (status) {
            $scope.changOpenserviceBC = true;
        }
        else {
            $scope.changOpenserviceBC = false;
            $scope.mailAddress = {};
            $scope.billAddress = {};
        }
    };

    $scope.rowNoSelected = '1';
    $scope.updateMailAddress = function (rowNo) {
        $scope.rowNoSelected = rowNo;
        if (rowNo == '1') {
            $scope.mailAddress = $scope.tempOldAddress;
        }
        else {
            $scope.mailAddress = $scope.tempOtherAddress;
        }
    };

    $scope.onVerify = function () {
        $scope.isVerify = true;
    };
    $scope.onChangCheckno = function () {
        //alert($scope.changCheckno);
    };

    $scope.openService = function () {
        $scope.changOpenserviceN = true;
    };
    $scope.changCheck = function () {
        $scope.changCheckno = true;
    };
    $scope.changeType = function (customerType) {
        $scope.customerType = customerType;
        $scope.isVerify = false;
        $scope.promotion = "";
    };
    $scope.slipchangeType = function (Type) {
        $scope.slipType = Type;
    };
    $scope.isAuthorize = false;
    $scope.authorize = function () {
        $scope.isAuthorize = true;
    };
    //init();
    //Reasons
    $scope.reasons = [];
    $scope.reason = "";
    ReasonService.list("119", function (result) {
        $scope.reasons = result;
        $scope.reason = $scope.reasons[86];
    });
    $scope.onReasonChange = function () {
        $scope.reasonx = $scope.reasons.indexOf($scope.reason);
    };
    //end reson
    $scope.init();
});