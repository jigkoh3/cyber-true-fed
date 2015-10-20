﻿// ---------------------- ChangeOwnershipController.js ----------------------
smartApp.controller('CancelController', function ($scope, $routeParams, AuthenService, CancelService, ChangePricePlanService, DeviceService, ReasonService, SystemService) {

	// Templates
	var runTime = new Date().getTime();
	$scope.template = {
		header: 'app/views/header.html?' + runTime,
		customerprofile: 'app/views/customerprofile.html?' + runTime,
		reasonmemo: 'app/views/reasonmemo.html?' + runTime
	};

	// Read route parameters
	$scope.Id = $routeParams.ID;
	$scope.shopType = $routeParams.shopType;
	$scope.SubNo = $routeParams.subno ? $routeParams.subno : 'null'; //$routeParams.SubNo;


	// Initialize variables
	$scope.divID = 'cancelContent';
	$scope.subNoLength = 10;
	$scope.simSerialLength = 18;

	$scope.dealerCodes = [];
	$scope.dealerCode = '';

	$scope.isMatch = true;

	$scope.CitizenID = "";

	$scope.data = {};
	$scope.isReadCardSuccess = false;

	var orderData = {};

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
	
	// Submit form
	$scope.submit = function () {
		$scope.hasSubmitted = true;

		var data = {
			customerProfile: $scope.data.customerProfile,
			simData: $scope.data.simData,
			newSIMData: {
				productCodes: $scope.productCodes,
				simSerial: $scope.simSerial
			}
		};

		CancelService.submitCancel(data, function (result) {
			console.log(result);
			if (result.status === true && result.data.status === 'SUCCESSFUL') {
				$('#modalPDFOpener').click();
			}
		});
	};

	// Get current SIM data
	var onGetSIMData = function (result) {
		
        if (result.data == false) {
            console.log(result);
            $scope.SubNo = 'null';
            $('#dataSubNo').val("");

            setTimeout(function(){
                $('#dataSubNo').focus();
            },1200);
        }

        $scope.data = result.data;

        $scope.getSIMDataFailed = false;

        if (!$scope.data) {
            $scope.getSIMDataFailed = true;
            SystemService.hideLoading();
        }
        else {

            authenticate();
        }

		var companyCode = utils.getObject(result.data, 'simData.company-code');
		if (!utils.isEmpty(companyCode)) {
			DeviceService.getDeviceTypeList(companyCode, onGetDeviceTypeList);
		}
	};

    if ($scope.SubNo !== 'null') {
        SystemService.showLoading();
        CancelService.getSIMData($scope.SubNo, onGetSIMData);
    }

    $scope.onInputSubNo = function() {
    	$scope.subNoInput = $('#dataSubNo').val();

        if ($scope.subNoInput && $scope.subNoInput.length === 10) {
            $scope.SubNo = $('#dataSubNo').val();
            CancelService.getSIMData($scope.subNoInput, onGetSIMData);
        }
    };
    // (End) Get current SIM data ----------------------

    var authenticate = function() {
        AuthenService.getAuthen(function(authResult) {

            $scope.getAuthen = authResult;
            $scope.shopType = $scope.getAuthen['shopType'];

            if ($scope.shopType === '0') {
                $scope.isCustomerProfile = true;
            }

            $scope.partnerCode = utils.getObject($scope.getAuthen, 'partnerCodes.0');

            if (!$scope.getAuthen["isSecondAuthen"] && $scope.getAuthen["shopType"] == "1") {
                $scope.isNonePartner = false;
            }

            if ($scope.getAuthen["shopcodes"] && $scope.getAuthen["shopcodes"].length >= 1) {
                $scope.partnerCode = $scope.getAuthen["shopcodes"][0];
            }

            SystemService.getOrderId($scope.getAuthen.channel, $scope.partnerCode, function(order) {

                SystemService.hideLoading();
                orderData = order;

                if ($scope.shopType === '1') {
                    // Auto-open the CardReader dialog
                    setTimeout(function() {
                        var fancyboxOptions = {
                            helpers: {
                                overlay: {
                                    // closeClick: false
                                }
                            },

                            beforeShow: function() {
                                $('#CitizenID').prop('disabled', true);
                                $('#loadingReadCard').hide();
                                $('#unMatch').hide();
                            },

                            afterClose: function() {
                                if (!$scope.onInputId()) {
                                    // window.close();
                                }
                            }
                        };

                        $('#btn-fancy-ReadCard').fancybox(fancyboxOptions).trigger('click');
                    }, 1000);
                }
            });
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
	$scope.openSSO = function () {

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
	//$scope.nextBillDate = SystemService.getNextBillDate();
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
	$scope.initModalReadCard = function () {
		$("#btnReadCardClose").click(function () {
			$('input[type=submit]').hide();
			$('input[type=reset]').hide();
		});
		$('#loadingReadCard').hide();
		$('#loadingReadCard2').hide();
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

	// Get device list
	var deviceByCode = {};

	var onGetDeviceTypeList = function (result) {
		$scope.deviceTypeList = utils.getObject(result.data, 'response-data.device');

		if ($scope.deviceTypeList && $scope.deviceTypeList.length) {
			deviceByCode = _.indexBy($scope.deviceTypeList, 'device-code');
		}
	};

	$scope.$watch('deviceType', function (val) {
		if (deviceByCode[val]) {
			var sim = deviceByCode[val].sim[0];

			var productCodes = _.pluck(sim['product-code'], 'code');
			$scope.productCodes = productCodes.join('/');

			$scope.simType = sim['sim-type'];
		}
		else {
			$scope.productCodes = '';
			$scope.simType = ''
		}
	});

	$scope.SetCardValue = function (result) {
		$('#loadingReadCard').hide();
		$scope.isReadCardSuccess = false;

		$scope.cardInfo = eval(result);
		console.log($scope.cardInfo.CitizenID);
		$scope.CitizenID = $scope.cardInfo.CitizenID;
		$('#CitizenID').val('' + $scope.cardInfo.CitizenID);


		if ($scope.cardInfo.CitizenID == $routeParams.ID) {
			that.getChangePricePlan("0689100006", "5555", function (result) {
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
	};

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
	};

	$scope.isManualReadCard = true;
	$scope.onInputId = function () {
		console.log($('#CitizenID').val().length);
		var cid = $('#CitizenID').val();
		if (cid.length == 13) {
			if (cid == $routeParams.ID) {
				document.getElementById('btnReadCardClose2').click();
				$scope.isReadCardSuccess = false;
			} else {
				$('#unMatch').show();
				$scope.isMatch = false;
			}
		}
	};

	$scope.customerType = "N";
	$scope.isAuthorize = false;
	$scope.authorize = function () {
		$scope.isAuthorize = true;
	};
	//init();
});