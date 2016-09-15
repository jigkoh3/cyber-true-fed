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
    // var urlx = "http://sff-uat.true.th:8980" + url;
    var urlx = "http://sff-uat.true.th:8980/webui/pdfCanvasV4_UMS.html?data=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";
    // var urlx = '<!DOCTYPE html><html><body><embed src="http://sff-uat.true.th:8980/webui-mock/PDFs/AfterSaleReport.pdf" type="application/pdf"></body></html>';
    // var urlx = "<!DOCTYPE html><html><body><embed src=\"http://sff-uat.true.th:8980/webui-mock/PDFs/AfterSaleReport.pdf\" type=\"application/pdf\"></body></html>";
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
