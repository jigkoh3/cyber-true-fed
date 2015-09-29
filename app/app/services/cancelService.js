smartApp.service('CancelService', function ($timeout, SystemService) {
	var demo = SystemService.demo;

	this.getSIMData = function (msisdn, fnCallback) {
		var that = this;

		if (utils.isEmpty(msisdn)) {
			msisdn = '';
		}

		var cb = function (result) {
			result.data = that.decorateSIMData(result.data);

			fnCallback(result);
		};

		if (!demo) {

			// Waiting Specification

			// var target = '/aftersales/tmv/swapsim/validateswapsim?msisdn=' + msisdn;

			// SystemService.callServiceGet(target, null, function (result) {
			// 	cb(result);
			// });

		}
		else {
			var data = {
				'status': 'SUCCESSFUL',
				'trx-id': '3BDPN2HLK4TZ',
				'process-instance': 'psaapdv1 (instance: SFF_node1)',
				'status-code': '0',
				'response-data': {
					'customer': {
						'title': 'Miss',
						'title-code': null,
						'firstname': 'Nate',
						'lastname': 'Phutthicha',
						'contact-number': null,
						'id-number': '1189900130607',
						'id-type': null,
						'installed-products': [
							{
								'ouId': '5010',
								'ban': '20009628',
								'product-id': 'EDATAP69',
								'product-name': 'EDATAP69',
								'product-description': 'Biz &amp; Ent 900',
								'product-soc-code': '1234567',
								'account-category': 'I',
								'account-sub-type': 'FIN',
								'company-code': 'RF',
								'company-code-desc': 'True Move H - Real Future',
								'product-category': 'TMV',
								'product-status': 'ACTIVE',
								'product-id-name': 'MSISDN',
								'product-id-number': msisdn,
								'mobile-servicetype': 'POSTPAID',
								'ou-hierarchytype': 'CHILD',
								'parent-ouId': '1234',
								'has-splitcharge': false,
								'is-childsim': false,
								'is-softsuspend': false,
								'is-4g': true,
								'prepaid-subscriber-id': ''
							}
						]
					},
					'display-messages': [
						{
							'message': '',
							'message-type': 'SUCCESSFUL',
							'en-message': 'VIP',
							'th-message': '',
							'technical-message': ''
						}
					]
				}
			};

			$timeout(function () {
				cb({
					status: true,
					data: data,
					error: '',
					msgErr: ''
				});
			}, 1000);
		}
	};

	this.decorateSIMData = function (data) {
		var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
		var productDetails = utils.getObject(customerProfile, 'installed-products.0');

		if (!customerProfile || !productDetails) return null;

		delete customerProfile['installed-products'];

		var productType = '';
		var serviceType = productDetails['mobile-servicetype'];
		if (serviceType === 'PREPAID') {
			productType = 'ทรูมูฟเอช เติมเงิน';
		}
		else if (serviceType === 'POSTPAID') {
			productType = 'ทรูมูฟเอช รายเดือน';
		}

		var response = {
			'header': {
				'producttype': productType,
				'subscriberno': productDetails['product-id-number'],
				'currpriceplan': productDetails['product-name'] + ': ' + productDetails['product-description']
			},
			'customerProfile': customerProfile,
			'simData': productDetails
		};

		return response;
	};

	this.validateSIM = function (payload, fnCallback) {
		payload['project'] = 'SWAPSIM-' + payload['mobile-servicetype'];

		var params = utils.createParamGet(payload, [
			'sim-serial',
			'dealer-code',
			'company-code',
			'mobile-servicetype',
			'product-code',
			'project',
			'pair-msisdn'
		]);

		var cb = function (result) {
			fnCallback(result);
		};

		if (!demo) {
			// Waiting Specification
			// var target = '/aftersales/order/validateswapsim?' + params;

			// SystemService.callServiceGet(target, null, function (result) {
			// 	cb(result);
			// });
		}
		else {
			var data = {
				'status': 'SUCCESSFUL',
				'display-messages': [],
				'trx-id': '3BYUAFJC01W8',
				'process-instance': 'tmsapnpr1 (instance: SFF_node1)',
				'status-code': '0',
				'response-data': {
					'sim-detail': {
						'pin1': 'String',
						'pin2': 'String',
						'puk1': 'String',
						'puk2': 'String',
						'hlr': 'String',
						'item-id': 'String',
						'item-desc': 'String',
						'manuf': 'String',
						'model': 'String',
						'imei-status': 'String',
						'active-ind': 'String',
						'missing-ind': 'String',
						'repair-ind': 'String',
						'ta-ind': 'String',
						'primary-ctn': 'String',
						'nl': 'String',
						'ngp': 'String',
						'sim-type': 'S',
						'serial-type': 'String',
						'serial-no': 'String',
						'sys-creation-date': 'String',
						'sys-update-date': 'String',
						'resource-status': 'available',
						'activity-code': 'String',
						'activity-date': 'String',
						'activity-reason': 'String',
						'imsi': 'String',
						'product-type': 'String',
						'imei-desc': 'String',
						'dealer-code': 'String',
						'manf-code': 'String',
						'item-cat': 'String',
						'item-subcat': 'String',
						'cpo-ind': 'String',
						'init-pin1': 'String',
						'init-pin2': 'String',
						'sim-type-desc': 'String',
						'logical-hlr': 'String',
						'police-station': 'String',
						'report-date': 'String',
						'sim-physical-hlr': 'String',
						'ctn': 'String',
						'ctn-status': 'String',
						'ctn-company-code': 'String',
						'sim-company-code': 'String',
						'ctn-pool-code': 'String',
						'ctn-pool-type': 'String',
						'transaction-id': 'String',
						'error-message': 'String',
						'product-code': '3000014924'
					}
				}
			};

			$timeout(function () {
				cb({
					status: true,
					data: data,
					error: '',
					msgErr: ''
				});
			}, 1000);
		}
	};

	this.submitCancel = function (payload, fnCallback) {
		var request = {
			'order': {
				'order-id': 'ORD150700000032',
				'creator': 'chitch2',
				'create-date': moment().format('YYYY-MM-DDTHH:mm:ss+0700'),
				'customer': {
					'title-code': payload.customerProfile['title-code'],
					'title': payload.customerProfile['title'],
					'firstname': payload.customerProfile['firstname'],
					'lastname': payload.customerProfile['lastname'],
					'gender': null,
					'id-type': payload.customerProfile['id-type'],
					'id-number': payload.customerProfile['id-number'],
					'birthdate': '2015-07-20T00:00:00+0700',
					'id-expire-date': null,
					'contact-number': payload.customerProfile['contact-number'],
					'contact-mobile-number': null,
					'contact-email': 'chitchai@cmail.com',
					'customer-agents': {
						'AUTH_1': {
							'contact': '0868836665',
							'id-number': '9988877688845',
							'id-type': 'I',
							'firstname': 'สมคิด',
							'lastname': 'คิดมากไป',
							'birthdate': '2015-07-20T00:00:00+0700'
						},
						'POA': {
							'contact': '0868836664',
							'id-number': '3257588733945',
							'id-type': 'I',
							'firstname': 'สมชาย',
							'lastname': 'ปากสว่าง',
							'birthdate': '2015-07-20T00:00:00+0700'
						},
						'AUTH_2': {
							'contact': '0868836666',
							'id-number': '9988877687723',
							'id-type': 'I',
							'firstname': 'สมฤดี',
							'lastname': 'ดีเกินไป',
							'birthdate': '2015-07-20T00:00:00+0700'
						}
					}
				},
				'sale-agent': {
					'name': 'Chitchai Changpradist',
					'channel': 'CM',
					'partner-code': '',
					'partner-name': '',
					'sale-code': '01019580',
					'sale-assist-code': '',
					'partner-type': ''
				},
				'order-items': [
					{
						'name': 'SWAP_SIM',
						'product-name': payload.simData['product-id'],
						'product-id-number': payload.simData['product-id-number'],
						'product-id-name': payload.simData['product-id-name'],
						'product-category': payload.simData['product-category'],
						'product-type': 'PRICEPLAN',
						'order-type': 'CHANGE',
						'reason-code': 'AA02',
						'user-memo': 'Customer want to request .',
						'order-data': {
							'OU-ID': payload.simData['ouId'],
							'BAN': payload.simData['ban'],
							'PREPAID-SUBSCRIBER-ID': payload.simData['prepaid-subscriber-id'],
							'IMSI': payload.simData['product-id-number']
						},
						'primary-order-data': {
							'MOBILE-SERVICETYPE': payload.simData['mobile-servicetype'],
							'ACCOUNT-CATEGORY': payload.simData['account-category'],
							'ACCOUNT-SUB-TYPE': payload.simData['account-sub-type'],
							'COMPANY-CODE': payload.simData['company-code'],
							'PRODUCT-CODE': payload.newSIMData['productCodes'],
							'SIM': payload.newSIMData['simSerial']
						}
					}
				],
				'last-modify-date': ''
			},
			'ref-id': '999999999',
			'user-id': 'chitch3',
			'approver': null
		};
		console.log(request);
		var cb = function (result) {
			fnCallback(result);
		};

		if (!demo) {
			var target = '/aftersales/order/submit';

			SystemService.callServicePost(request, null, function (result) {
				cb(result);
			});
		}
		else {
			var data = {
				'status': 'SUCCESSFUL',
				'display-messages': [
					{
						'message': 'Order ORD150700000032 successful saved.',
						'message-type': 'INFORMATION',
						'en-message': 'Order ORD150700000032 successful saved.',
						'th-message': 'บันทึกข้อมูลเรียบร้อย'
					}
				],
				'trx-id': '03J5HVSFXH8R',
				'process-instance': 'tpx61.true.th (instance: sale)'
			};

			$timeout(function () {
				cb({
					status: true,
					data: data,
					error: '',
					msgErr: ''
				});
			}, 1000);
		}
	};

});