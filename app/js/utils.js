var contextPath = null;

//console log ================================
var PRD_MODE = false; //change = true if on production
if (typeof(console) === 'undefined') {
    console = {};
}

if (!PRD_MODE || typeof(console.log) === 'undefined') {
    // console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {};
}
// console log ================================

function getContextPath() {
    if (contextPath == null) {
        contextPath = $('#contextPath').val();
    }
    return contextPath;
}

function getURL(url) {
    if (url.indexOf('/') == 0) {
        return getContextPath() + url;
    } else {
        return getContextPath() + '/' + url;
    }
}

function getValueById(id) {
    return $('#' + id).val();
}

function isNotEmptyValueById(id) {
    return isEmptyValueById(id);
}

function isEmptyValueById(id) {
    var value = getValueById(id);
    if (value == null || value == undefined || value == '') {
        return true;
    }
}

function isEmpty(value) {
    if (value == null || value == undefined || value == '') {
        return true;
    } else {
        return false;
    }
}

function trimToEmpty(value) {
    if (isEmpty(value)) {
        return '';
    }
    return value;
}

function redirect(url) {
    try {
        window.location.href = url;
    } catch (e) {
        window.location = url;
    }
}

//secondAuthURL///////////////////////////////
var secondAuthURL = null;
var secondAuthenURLConfig = {
    dev: 'https://sso-devt.true.th:11443/',
    uat: 'https://xxo-uat.true.th:11443/SSORESTFul/',
    prdIntra: 'https://xxo.true.th/SSORESTFul/',
    prdInter: 'https://wxxo.truecorp.co.th/SSORESTFul/'
};

function isUATEnv(host) {
    return host.indexOf("uat") > 0;
}

function isDEVEnv(host) {
    return host.indexOf("dev") > 0;
}

function isPRDEnv(host) {
    if (isDEVEnv(host) === true) {
        return false;
    } else if (isUATEnv(host) === true) {
        return false;
    } else {
        if (host.indexOf("truecorp.co.th") > 0 || host.indexOf("true.th") > 0) {
            return true;
        }
        return false;
    }
}

function getSecondAuthenURL() {
    if (secondAuthURL == null) {
        var hostname = window.location.hostname;
        if (isPRDEnv(hostname)) {
            var isInter = hostname.indexOf("truecorp.co.th") > 0;
            if (isInter) {
                secondAuthURL = secondAuthenURLConfig.prdInter;
            } else {
                secondAuthURL = secondAuthenURLConfig.prdIntra;
            }
        } else if (isUATEnv(hostname)) {
            secondAuthURL = secondAuthenURLConfig.uat;
        } else if (isDEVEnv(hostname)) {
            secondAuthURL = secondAuthenURLConfig.dev;
        } else {
            secondAuthURL = secondAuthenURLConfig.dev;
        }
    }
    console.log("hostname : " + hostname);
    console.log("secondAuthURL : " + secondAuthURL);
    return secondAuthURL;
}
//secondAuthURL///////////////////////////////

//STR:==================== Camera FOR Mobile =====================
function upload() {
    document.getElementById('mos').click();
}

function imgError() {
    document.getElementById('mosld').src = 'uploads/noimage_595.png';
}

function mosliger() {
    var img = document.getElementById('mos').files;
    //document.getElementById('software2').innerHTML = '<div>' + getMobileOperatingSystem() + '</div>';
    var reader = new FileReader();
    if(!img[0]) return;
    reader.readAsDataURL(img[0]);
    reader.onload = function(e) {
        document.getElementById('mosld').src = e.target.result;
        document.getElementById('varMobileCam').value = e.target.result;
        $('#btnSavePhoto_Mobile').show();
    }
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
        return 'iOS';
    } else if (userAgent.match(/Android/i)) {
        return 'Android';
    } else {
        return 'unknown';
    }
}
//END:==================== Camera FOR Mobile =====================
