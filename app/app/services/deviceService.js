smartApp.service('DeviceService', function(SystemService) {
	var demo = SystemService.demo;

	this.getDeviceTypeList = function(companyCode, fnCallback) {
		var that = this;

		if (utils.isEmpty(companyCode)) {
			companyCode = '';
		}

		var cb = function(result) {
			var displayMsg = utils.getObject(result.data, 'display-messages.0');

			if (displayMsg && displayMsg['message-type']) {
				SystemService.showAlert(displayMsg);
			}

			fnCallback(result);
		};

		if (!demo) {
		    //var target = '/sales/catalog/product/tmv/device/list?company-code=' + companyCode;
		    var target = '/sales/catalog/product/tmv/aftersales/device/get-simswap-device?company-code=' + companyCode;
			//var target = 'http://sff-dev.true.th:8780/sales/catalog/product/tmv/aftersales/device/get-simswap-device?company-code=' + companyCode;

			SystemService.callServiceGet(target, null, function (result) {
				cb(result);
			});
		}
		else {
			var data = {
				'status': 'SUCCESSFUL',
				'trx-id': '4B20FJCMLOZHD',
				'process-instance': 'psaapdv1 (instance: SFF_node1)',
				'response-data': [
					{
						'deviceType': 'Device support nano sim',
						'device-code': '001',
						'sim-type': 'Swap SIM Nano Real Move',
						'product-codes': [ '3000037664', '3000014921' ]
					},
					{
						'deviceType': 'Device support combi sim',
						'device-code': '002',
						'sim-type': 'Swap SIM Combi Real Move',
						'product-codes': [ '3000037663', '3000014924' ]
					},
					{
						'deviceType': 'xxxx 003',
						'device-code': '003',
						'sim-type': 'Swap SIM Combi Real Move',
						'product-codes': [ '3000037688', '3000014988' ]
					}
				]
			};

			cb({
				status: true,
				data: data,
				error: '',
				msgErr: ''
			});
		}
	};

});