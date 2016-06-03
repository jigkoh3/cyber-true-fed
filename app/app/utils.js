﻿(function() {

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




//read card bluetooth ::: 03-02-2016 //xsam32 ref. R3-team
var THIDReader = new thaiIDReader(8030, true);

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
        BirthDay: info.birthdayDate,
        IssueAt: info.department,
        IssueDay: info.manufacturingDate,
        ExpireDay: info.expiryDate,
        Photo: res.data.photo,
    };
}

function ReadCard_Android() {
    $('.idBtnReadCard_android').prop('disabled', true);
    THIDReader.readAll(function(data) {
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
