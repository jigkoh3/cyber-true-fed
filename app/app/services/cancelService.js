smartApp.service('CancelService', function ($routeParams, $timeout, SystemService) {
	
	var demo = SystemService.demo;

	this.decorateSIMData = function(data) {

		var msg = utils.getObject(data, 'display-messages');

        if (msg && msg.length > 0) {
            setTimeout(function() {
                if ($routeParams.subno) {
                    SystemService.validateErrorAlert(msg[0]);
                } else {
                    SystemService.showAlert({
                        "message": msg[0]["message"],
                        "message-code": msg[0]["message-code"],
                        "message-type": "WARNING",
                        "en-message": msg[0]["en-message"],
                        "th-message": msg[0]["th-message"],
                        "technical-message": msg[0]["technical-message"]
                    });
                }
            }, 1000);
            if (msg[0]['message-type'] == "ERROR") {
                return false;
            }
        }

		var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
		var customerAddress = utils.getObject(customerProfile, 'address-list.CUSTOMER_ADDRESS');
		var productDetails = utils.getObject(customerProfile, 'installed-products.0');

		if (!customerProfile || !productDetails) return null;

		delete customerProfile['installed-products'];
		delete customerProfile['address-list'];

		// Prepare product type
		var productType = '';
		var serviceType = productDetails['mobile-servicetype'];
		if (serviceType === 'PREPAID') {
			productType = 'ทรูมูฟเอช เติมเงิน';
		} else if (serviceType === 'POSTPAID') {
			productType = 'ทรูมูฟเอช รายเดือน';
		}

		//Fix value becuase migrate pre to post support personal only
		productDetails['account-category'] = "I";
		productDetails['account-sub-type'] = "FIN";

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
			'customerAddressOriginal': customerAddress,
			'customerAddress': angular.copy(customerAddress),
			'simData': productDetails
		};

		return response;
	};

	this.getSIMData = function(msisdn, callback) {
		var that = this;

		if (utils.isEmpty(msisdn)) {
			msisdn = '';
		}

		var cb = function(result) {
			result.data = that.decorateSIMData(result.data);

			callback(result);
		};

		if (!demo) {
			var target = '/aftersales/tmv/cancel/validatecancel?msisdn=' + msisdn;

			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
		} else {
			var data = {
				'status': 'SUCCESSFUL',
				"trx-id" : "3BDPN2HLK4TZ",
				'process-instance': 'psaapdv1 (instance: SFF_node1)',
				'status-code': '0',
				'response-data': {
					'customer': {
						'title': 'Miss',
						'title-code': 'T2',
						'firstname': 'Nate',
						'lastname': 'Phutthicha',
						'birthdate': '2015-07-20T00:00:00+0700',
						'contact-number': '029448849#123',
						'contact-mobile-number': '444444444',
						'contact-email': 'abc@abc.com',
						'language': 'TH',
						'id-number': '1189900130607',
						'id-type': 'I',
						'id-expire-date': '2017-07-20T00:00:00+0700',
						"branch-code" : '00000',
						"tax-id" : '1189900130607',
						'customer-id': null,
						'customer-level': null,
						'customer_sublevel_id': null,
						'customer_sublevel': null,
						'gender': 'FEMALE',
						'installed-products': [
							{
								"ouId" : "5010",
								"ban" : "20009628",
								"product-id" : "EDATAP69",
								"product-name" : "EDATAP69",
								"product-description" : "Biz &amp; Ent 900,Data UNL5GB/128,WiFi",
								"account-category" : "I",
								"account-sub-type" : "FIN",
								"customer-level" : "NON-TOP",
								"company-code" : "RF",
								"product-category" : "TMV",
								"product-status" : "ACTIVE",
								"product-id-name" : "MSISDN",
								"product-id-number" : "0XXXXXXXXX",
								"mobile-servicetype" : "POSTPAID",
								"ou-hierarchytype" : "CHILD",
								"parent-ouId" : "1234",
								"has-splitcharge" : false,
								"is-childsim" : false,
								"is-softsuspend" : false,
								"product-properties" : {
									"SIM  " : null,
									"IMSI" : null
								}
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
				// 'display-messages': [{
				// 	'message': '',
				// 	'message-type': 'ERROR',
				// 	'en-message': 'VIP',
				// 	'th-message': '',
				// 	'technical-message': ''
				// }, {
				// 	'message': '',
				// 	'message-type': 'WARNING',
				// 	'en-message': 'DISCOUNT',
				// 	'th-message': '',
				// 	'technical-message': ''
				// }, {
				// 	'message': '',
				// 	'message-type': 'ERROR',
				// 	'en-message': 'SUBSCRIBER STATUS',
				// 	'th-message': '',
				// 	'technical-message': ''
				// }, {
				// 	'message': '',
				// 	'message-type': 'ERROR',
				// 	'en-message': 'NICE NUMBER',
				// 	'th-message': '',
				// 	'technical-message': ''
				// }, {
				// 	'message': '',
				// 	'message-type': 'ERROR',
				// 	'en-message': 'SHARED PLAN',
				// 	'th-message': '',
				// 	'technical-message': ''
				// }, {
				// 	'message': '',
				// 	'message-type': 'WARNING',
				// 	'en-message': 'CONVERGENT',
				// 	'th-message': '',
				// 	'technical-message': ''
				// }]
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