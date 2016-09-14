(function() {

    if (typeof String.prototype.trim !== 'function') {
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        }
    }

    window.utils = {

        isEmpty: function(val) {
            return typeof val === 'undefined' || val === null || (val.toString && !val.toString().trim().length);
        },

        getObject: function(obj, where) {
            if (!obj) return obj;

            if (utils.isEmpty(where)) return obj;

            // Expect "where" as a dot notation name, so split "where" with a dot
            var keys = where.split('.');

            var key = keys[0];
            if (utils.isEmpty(obj[key])) return obj[key];

            var value = obj[key];
            for (var i = 1; i < keys.length; i++) {
                key = keys[i];
                value = value[key];

                if (utils.isEmpty(value)) return value;
            }

            return value;
        },

        createParamGet: function(data, keys) {
            if (!keys || !keys.length) {
                keys = Object.keys(data);
            }

            var pairs = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = utils.isEmpty(data[key]) ? '' : data[key];

                pairs.push(key + '=' + value);
            }

            return pairs.join('&');
        }

    };


})();


//read all in UMS
var wms = new WebMS(true);

//read card bluetooth ::: 03-02-2016 //xsam32 ref. R3-team
var THIDReader = new thaiIDReader(8030, true);

var convertDate = function(YYYYMMDD) {
    var d = YYYYMMDD[6] + "" + YYYYMMDD[7];
    var m = YYYYMMDD[4] + "" + YYYYMMDD[5];
    var y = YYYYMMDD[0] + "" + YYYYMMDD[1] + "" + YYYYMMDD[2] + "" + YYYYMMDD[3];
    return d + "/" + m + "/" + y;
};

function parseDataAndroid(res) {


    var info = res.data.info;
    return {
        CitizenID: info.ID,
        PrefixTH: info.titleNameTH,
        FirstNameTH: info.nameTH,
        MiddleNameTH: info.midNameTH,
        LastNameTH: info.lastNameTH,
        PrefixEN: info.titleNameEN,
        FirstNameEN: info.nameEN,
        MiddleNameEN: info.midNameEN,
        LastNameEN: info.lastNameEN,
        HomeNumber: info.addressNumber,
        Moo: info.mooNumber,
        Trok: info.trok,
        Soi: info.soi,
        Road: info.road,
        District: info.subDistrict,
        Amphur: info.district,
        Province: info.province,
        Sex: info.gender,
        BirthDay: convertDate(info.birthdayDate),
        IssueAt: info.department,
        IssueDay: convertDate(info.manufacturingDate),
        ExpireDay: convertDate(info.expiryDate),
        Photo: res.data.photo,
    };
}

function ReadCard_Android() {
    $('.idBtnReadCard_android').prop('disabled', true);
    wms.readAll(function(data) {
        $('.idBtnReadCard_android').prop('disabled', false);

        var args = parseDataAndroid(data);
        if ($('#ReadAuthorize').val() == 'true') {
            angular.element(document.getElementById('' + $('#divID').val())).scope().SetCardValue2(args);
        } else if ($('#ReadAuthorize').val() == 'readNewOwnerReadCard') {
            angular.element(document.getElementById('' + $('#divID').val())).scope().SetCardValue3(args);
            $('#btnReadCard3Close').click();
        } else if ($('#ReadAuthorize').val() == 'freeReadCard') {
            angular.element(document.getElementById('' + $('#divID').val())).scope().freeReadCard(args);
        } else {
            angular.element(document.getElementById('' + $('#divID').val())).scope().SetCardValue(args);
        }
    }, function(error) {
        //alert(JSON.stringify(error));
        console.log('error');
        console.log(error);

        $('.idBtnReadCard_android').prop('disabled', false);
        angular.element(document.getElementById('' + $('#divID').val())).scope().readCardError(error.message);
    });
};

function ReadBarcode_Android() {
    wms.readBarcode(function(response) {
        var txtBarCode = response.data.barcode;
        angular.element(document.getElementById('' + $('#divID').val())).scope().readBarcode(txtBarCode);
    }, function(error) {
        //alert(JSON.stringify(error));
        console.log('error');
        console.log(error);

        angular.element(document.getElementById('' + $('#divID').val())).scope().readCardError(error.message);
    });
};

function checkReadBarcode_Android() {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if (isAndroid == true) {
        ReadBarcode_Android();
    }
};

function print_androidUMS(url) {
    // wms.printWeb(url, function(success){
    //     alert("Print SUCCESSFUL");
    // }, function(error){
    //     alert(error);
    // });
    // setTimeout(function(){
    // }, 3000);
    // var urlx = "http://sff-uat.true.th:8980/webui/PDFs/AfterSaleReport.pdf";
    // var urlLCS = localStorage.getItem('urlx');
    // var webContextPath = getContextPath();
    var urlx = "http://sff-uat.true.th:8980" + url;
    // var urlx = "http://sff-uat.true.th:8980" + urlLCS + "?clearData=N"; /// soonnnnnnnnnnnn
    // var urlx = "http://sff-uat.true.th:8980/webui/images/commons/readcard@2x.png";
    console.log(urlx);
    alert('Print URL:' + urlx);
    wms.printWeb(urlx, function(x) {
        //alert("Print SUCCESSFUL");
    }, function(x) {
        alert('Print ERROR : ' + JSON.stringify(x));
    });

}
