smartApp.service('MigratePostToPreService', function($timeout, SystemService) {
	var demo = SystemService.demo;

	this.getSIMData = function(msisdn, fnCallback) {
		var that = this;

		if (utils.isEmpty(msisdn)) {
			msisdn = '';
		}

		var cb = function(result) {
			result.data = that.decorateSIMData(result.data);

			fnCallback(result);
		};

		if (!demo) {
			var target = '/aftersales/tmv/migrateposttopre/validatemigrateposttopre?msisdn=' + msisdn;

			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
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
						'birthdate': '2015-07-20T00:00:00+0700',
						'contact-number': null,
						'id-number': '1189900130607',
						'id-type': null,
						'id-expire-date': '2017-07-20T00:00:00+0700',
						'customer-id': null,
						'customer-level': null,
						'customer_sublevel_id': null,
						'customer_sublevel': null,
						'gender': 'F',
						'installed-products': [
							{
								'ouId': '5010',
								'ban': '20009628',
								'product-type': 'PRICEPLAN',
								'product-id': 'EDATAP69',
								'product-name': 'EDATAP69',
								'product-description': 'Biz &amp; Ent 900,Data UNL5GB/128,WiFi',
								'product-soc-code': '1234567',
								'account-category': 'P',
								'account-sub-type': 'PRE',
								'company-code': 'RF',
								'product-category': 'TMV',
								'product-status': 'ACTIVE',
								'product-id-name': 'MSISDN',
								'product-id-number': msisdn,
								'mobile-servicetype': 'POSTPAID',
								'ou-hierarchytype': 'CHILD',
								'parent-ouId': '1234',
								'has-splitcharge': false,
								'is-childsim': false,
								'is-softsuspend': false
							}
						],
						'address-list': {
							'CUSTOMER_ADDRESS': {
								'number': '61/238',
								'moo': '8',
								'village': 'moo ban',
								'street': 'ratchada',
								'soi': '81',
								'district': 'dindaeng',
								'province': 'Bangkok',
								'building-name': 'Pakin',
								'building-room': '22',
								'building-floor': '13',
								'sub-district': 'Dindaeng',
								'zip': '10400',
								'household': '18'
							}
						}
					}
				},
				'display-messages': [
					{
						'message': '',
						'message-type': 'ERROR',
						'en-message': 'VIP',
						'th-message': '',
						'technical-message': ''
					},
					{
						'message': '',
						'message-type': 'WARNING',
						'en-message': 'DISCOUNT',
						'th-message': '',
						'technical-message': ''
					},
					{
						'message': '',
						'message-type': 'ERROR',
						'en-message': 'SUBSCRIBER STATUS',
						'th-message': '',
						'technical-message': ''
					},
					{
						'message': '',
						'message-type': 'ERROR',
						'en-message': 'NICE NUMBER',
						'th-message': '',
						'technical-message': ''
					},
					{
						'message': '',
						'message-type': 'ERROR',
						'en-message': 'SHARED PLAN',
						'th-message': '',
						'technical-message': ''
					},
					{
						'message': '',
						'message-type': 'WARNING',
						'en-message': 'CONVERGENT',
						'th-message': '',
						'technical-message': ''
					}
				]
			};

			$timeout(function() {
				cb({
					status: true,
					data: data,
					error: '',
					msgErr: ''
				});
			}, 1000);
		}
	};

	this.decorateSIMData = function(data) {
		var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
		var productDetails = utils.getObject(customerProfile, 'installed-products.0');

		if (!customerProfile || !productDetails) return null;

		delete customerProfile['installed-products'];

		// Prepare product type
		var productType = '';
		var serviceType = productDetails['mobile-servicetype'];
		if (serviceType === 'PREPAID') {
			productType = 'ทรูมูฟเอช เติมเงิน';
		}
		else if (serviceType === 'POSTPAID') {
			productType = 'ทรูมูฟเอช รายเดือน';
		}

		// Prepare current price plan
		var currentPricePlan = [];
		if (productDetails['product-name']) {
			currentPricePlan.push(productDetails['product-name']);
		}
		if (productDetails['product-description']) {
			currentPricePlan.push(productDetails['product-description']);
		}

		var response = {
			'header': {
				'producttype': productType,
				'subscriberno': productDetails['product-id-number'],
				'currpriceplan': currentPricePlan.join(': ')

			},
			'customerProfile': customerProfile,
			'simData': productDetails
		};

		return response;
	};

	this.getProPosition = function(payload, fnCallback) {
        var params = utils.createParamGet(payload, [
			'company-code',
			'customer-type',
			'propo-type',
			'mobile-servicetype',
			'partner-code',
			'privilege'
        ]);

        var cb = function (result) {
            fnCallback(result);
        };

        if (!demo) {
            var target = '/sales/catalog/product/tmv/proposition/search?' + params;

            SystemService.callServiceGetByPass(target, null, function(result) {
                cb(result);
            });
        }
        else {
            var data = {
                'status': 'SUCCESSFUL',
                'trx-id': '3BYUAFJC01W8',
                'process-instance': 'tmsapnpr1 (instance: SFF_node1)',
                'response-data': [
                	{
                		'name': 'P00000000000211',
                		'description': 'SIM Koo Kan',
                		'soc': null,
                		'rc': 0.0,	 	
 	 	 	 		    'service-level': null,	 	
 	 	 	 		    'proposition-code': '0019087'
                	},
                	{
                		'name': 'RMV000000000001',	 	
 	 	 	 		    'description': 'New Sim Only',	 	
 	 	 	 		    'soc': null,	 	
 	 	 	 		    'rc': 0.0,	 	
 	 	 	 		    'service-level': null,	 	
 	 	 	 		    'proposition-code': '0019123'
 	 	 	 	 	}
                ]
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

	// this.submitSwapSIMOrder = function(payload, fnCallback) {
	// 	var request = {
	// 		'order': {
	// 			'order-id': payload.orderData.orderId,
	// 			'creator': 'chitch2',
	// 			'create-date': moment().format('YYYY-MM-DDTHH:mm:ss+0700'),
	// 			'customer': {
	// 				'title-code': payload.customerProfile['title-code'],
	// 				'title': payload.customerProfile['title'],
	// 				'firstname': payload.customerProfile['firstname'],
	// 				'lastname': payload.customerProfile['lastname'],
	// 				'gender': null,
	// 				'id-type': payload.customerProfile['id-type'],
	// 				'id-number': payload.customerProfile['id-number'],
	// 				'birthdate': '2015-07-20T00:00:00+0700',
	// 				'id-expire-date': null,
	// 				'contact-number': payload.customerProfile['contact-number'],
	// 				'contact-mobile-number': null,
	// 				'contact-email': 'chitchai@cmail.com',
	// 				'customer-agents': {
	// 					'AUTH_1': {
	// 						'contact': '0868836665',
	// 						'id-number': '9988877688845',
	// 						'id-type': 'I',
	// 						'firstname': 'สมคิด',
	// 						'lastname': 'คิดมากไป',
	// 						'birthdate': '2015-07-20T00:00:00+0700'
	// 					},
	// 					'POA': {
	// 						'contact': '0868836664',
	// 						'id-number': '3257588733945',
	// 						'id-type': 'I',
	// 						'firstname': 'สมชาย',
	// 						'lastname': 'ปากสว่าง',
	// 						'birthdate': '2015-07-20T00:00:00+0700'
	// 					},
	// 					'AUTH_2': {
	// 						'contact': '0868836666',
	// 						'id-number': '9988877687723',
	// 						'id-type': 'I',
	// 						'firstname': 'สมฤดี',
	// 						'lastname': 'ดีเกินไป',
	// 						'birthdate': '2015-07-20T00:00:00+0700'
	// 					}
	// 				}
	// 			},
	// 			'sale-agent': {
	// 				'name': 'Chitchai Changpradist',
	// 				'channel': 'CM',
	// 				'partner-code': '',
	// 				'partner-name': '',
	// 				'sale-code': '01019580',
	// 				'sale-assist-code': '',
	// 				'partner-type': ''
	// 			},
	// 			'order-items': [
	// 				{
	// 					'name': 'SWAP_SIM',
	// 					'product-name': payload.simData['product-id'],
	// 					'product-id-number': payload.simData['product-id-number'],
	// 					'product-id-name': payload.simData['product-id-name'],
	// 					'product-category': payload.simData['product-category'],
	// 					'product-type': 'PRICEPLAN',
	// 					'order-type': 'CHANGE',
	// 					'reason-code': 'AA02',
	// 					'user-memo': 'Customer want to request .',
	// 					'order-data': {
	// 						'OU-ID': payload.simData['ouId'],
	// 						'BAN': payload.simData['ban'],
	// 						'PREPAID-SUBSCRIBER-ID': payload.simData['prepaid-subscriber-id'],
	// 						'IMSI': payload.simData['product-id-number']
	// 					},
	// 					'primary-order-data': {
	// 						'MOBILE-SERVICETYPE': payload.simData['mobile-servicetype'],
	// 						'ACCOUNT-CATEGORY': payload.simData['account-category'],
	// 						'ACCOUNT-SUB-TYPE': payload.simData['account-sub-type'],
	// 						'COMPANY-CODE': payload.simData['company-code'],
	// 						'PRODUCT-CODE': payload.newSIMData['productCodes'],
	// 						'SIM': payload.newSIMData['simSerial']
	// 					}
	// 				}
	// 			],
	// 			'last-modify-date': ''
	// 		},
	// 		'ref-id': '999999999',
	// 		'user-id': 'chitch3',
	// 		'approver': null
	// 	};

	// 	console.log(request);

	// 	var cb = function (result) {
	// 		fnCallback(result);
	// 	};

	// 	if (!demo) {
	// 		var target = '/aftersales/order/submit';

	// 		SystemService.callServicePost(request, null, function (result) {
	// 			cb(result);
	// 		});
	// 	}
	// 	else {
	// 		var data = {
	// 			'status': 'SUCCESSFUL',
	// 			'display-messages': [
	// 				{
	// 					'message': 'Order ' + payload.orderData.orderId + ' successful saved.',
	// 					'message-type': 'INFORMATION',
	// 					'en-message': 'Order ' + payload.orderData.orderId + ' successful saved.',
	// 					'th-message': 'บันทึกข้อมูลเรียบร้อย'
	// 				}
	// 			],
	// 			'trx-id': '03J5HVSFXH8R',
	// 			'process-instance': 'tpx61.true.th (instance: sale)'
	// 		};

	// 		$timeout(function () {
	// 			cb({
	// 				status: true,
	// 				data: data,
	// 				error: '',
	// 				msgErr: ''
	// 			});
	// 		}, 1000);
	// 	}
	// };

});
