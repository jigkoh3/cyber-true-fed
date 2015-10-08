smartApp.service('MigratePreToPostService', function($timeout, SystemService) {
	
	var demo = SystemService.demo;

	this.decorateSIMData = function(data) {
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

	this.decorateLastestCustomer = function(data) {
		var customerProfile = angular.copy(utils.getObject(data, 'response-data.customer'));
		var customerAddress = utils.getObject(customerProfile, 'address-list.CUSTOMER_ADDRESS');
		var productDetails = utils.getObject(customerProfile, 'installed-products');

		if (!customerProfile || !productDetails) return null;

		delete customerProfile['installed-products'];
		delete customerProfile['address-list'];

		var response = {
			'customerProfile': customerProfile,
			'customerAddressOriginal': customerAddress,
			'customerAddress': angular.copy(customerAddress),
			'installedProducts': productDetails
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
			var target = '/aftersales/tmv/migratepretopost/validatemigratepretopost?msisdn=' + msisdn;

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
				'display-messages': [{
					'message': '',
					'message-type': 'ERROR',
					'en-message': 'VIP',
					'th-message': '',
					'technical-message': ''
				}, {
					'message': '',
					'message-type': 'WARNING',
					'en-message': 'DISCOUNT',
					'th-message': '',
					'technical-message': ''
				}, {
					'message': '',
					'message-type': 'ERROR',
					'en-message': 'SUBSCRIBER STATUS',
					'th-message': '',
					'technical-message': ''
				}, {
					'message': '',
					'message-type': 'ERROR',
					'en-message': 'NICE NUMBER',
					'th-message': '',
					'technical-message': ''
				}, {
					'message': '',
					'message-type': 'ERROR',
					'en-message': 'SHARED PLAN',
					'th-message': '',
					'technical-message': ''
				}, {
					'message': '',
					'message-type': 'WARNING',
					'en-message': 'CONVERGENT',
					'th-message': '',
					'technical-message': ''
				}]
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

	this.validateMigratePreToPost = function(msisdn, callback) {

		msisdn = utils.isEmpty(msisdn) ? '' : msisdn;

		var that = this;

		var cb = function(result) {
			result.data = that.decorateSIMData(result.data);
			callback(result);
		};

		if (!demo) {
			var target = '/aftersales/tmv/migratepretopost/validatemigratepretopost?msisdn=' + msisdn;

			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
		}
		else {
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
						'contact-number': null,
						'id-number': '1189900130607',
						'id-type': 'I',
						'id-expire-date': '2017-07-20T00:00:00+0700',
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

	this.validateGrading = function(payload, callback) {
		
		var params = utils.createParamGet(payload, [
			'company-id'
		]);

		var that = this;

		var cb = function(result) {
			callback(result);
		};

		if (!demo) {
			var target = '/profiles/customer/company/grade?' + params;

			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
		}
		else {
			var data = {
				"status": "SUCCESSFUL",
				"display-messages": [],
				"trx-id": "461HQMYTGV3HF",
				"process-instance": "psaapdv1 (instance: SFF_node1)",
				"response-data": {
					"company-grade": {
						"company-id": "0105524019341",
						"company-name": "บริษัท อเมริกัน เอ็กซ์เพรส (ไทย) จำกัด",
						"grade-id": "3",
						"grade-name": "TOP",
						"grade-sub-name": "ENT_TOPREV"
					}
				}
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

	this.validatePartner = function(payload, callback) {

		var params = utils.createParamGet(payload, [
			'partner-code',
			'function-type'
		]);

		var that = this;

		var cb = function(result) {
			result.data = that.decorateSIMData(result.data);
			callback(result);
		};

		if (!demo) {
			var target = '/profiles/partner/validatepartner?' + params;
			
			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
		}
		else {
			var data = {
				"status": "SUCCESSFUL",
				"display-messages": [],
				"trx-id": "7K1EFF8LA2BTF",
				"process-instance": "psaapdv1 (instance: SFF_node1)",
				"response-data": {
					"partnerInfo": {
						"status-id": "1",
						"register_date": "2003-06-23 00:00:00.0",
						"status_name": "Active",
						"biz-reg-type-name": "นิติบุคคล",
						"dealer-code": "20999999",
						"emp-code": "",
						"tvs-code": "",
						"tmx-emp-code": "",
						"channel-alias": "OTHER",
						"channel-name": "Other",
						"partner-type-name": "Sub-Partner",
						"partner-sub-type-name": "",
						"partner-type-group-name": "OUTLET",
						"parent-code": "79000001",
						"partner-name-th": "TA Orange Co., Ltd."
					}
				}
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

	this.preverify = function(payload, callback) {

		var that = this;

		var cb = function(result) {
			callback(result);
		};

		if (!demo) {
			var target = 
				'/profiles/customer/preverify?' +
				'target=' + 'profiles/customer/preverify' + // Hard code
				'&transactionId=' + payload['transactionId'] +
				'&accountCat=' + 'I' + // Hard code
				'&accountType=' + payload['accountType'] +
				'&birthDate=' + payload['birthDate'] +
				'&channel=' + 'WEBUI' + // Hard code
				'&companyCode=' + 'AL' + // Hard code
				'&dealerCode=' + payload['dealerCode'] +
				'&idNumber=' + payload['idNumber'] +
				'&idType=' + 'I' + // Hard code
				'&propositionId=' + payload['propositionId'] +
				'&requestSubscriber=' + '1' + // Hard code
				'&userLogin=' + 'anonymous'; // Hard code

			SystemService.callServiceGetByPass(target, null, function(result) {
				cb(result);
			});
		}
		else {

			// Not sample response data yet. 

			$timeout(function() {
				cb({
					status: true,
					data: {},
					error: '',
					msgErr: ''
				});
			}, 1000);
		}
	};

	this.accountSubType = function(payload, callback) {

		var params = utils.createParamGet(payload, [
			'company',
			'customer-type',
			'grade',
			'service-type'
		]);

		var that = this;

		var cb = function(result) {
			callback(result);
		};

		if (!demo) {
			var target = '/profiles/tmv/master/account-subtype?' + params;
			
			SystemService.callServiceGetByPass(target, null, function(result) {
				cb(result);
			});
		}
		else {
			var data = {
				"status": "SUCCESSFUL",
				"trx-id": "03V94EUARX80",
				"process-instance": "tpx61.true.th (instance: sale)",
				"response-data": [
					{
						"name": "PRI",
						"description": "บุคคลธรรมดา"
					},
					{
						"name": "SOL",
						"description": "เจ้าของกิจการคนเดียว"
					},
					{
						"name": "FIN",
						"description": "RF-Individual"
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

	this.lastestCustomer = function(payload, callback) {

		var params = utils.createParamGet(payload, [
			'certificateid',
			'customer-type'
		]);

		var that = this;

		var cb = function(result) {
			result.data = that.decorateLastestCustomer(result.data);
			callback(result);
		};

		if (!demo) {
			var target = '/profiles/customer/getlastestcustomer?' + params;
			
			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
		}
		else {
			var data = {
				"status": "SUCCESSFUL",
				"display-messages": [],
				"trx-id": "AMBPAQ9JO3EX",
				"process-instance": "tmsapnpr1 (instance: SFF_node1)",
				"response-data": {
					"customer": {
						"title": "คุณ",
						"title-code": "T2",
						"firstname": "กอไก่",
						"lastname": "ขอไข่",
						"contact-number": "029448849#123",
						"contact-mobile-number": "444444444",
						"id-type": "",
						"id-number": "1984051311082",
						"customer-id": "4811",
						"customer-level": "NON-TOP",
						"customer_sublevel_id": null,
						"customer_sublevel": null,
						"installed-products": [{
							"ouId": "6953",
							"ban": "10007237",
							"product-category": "TMV",
							"product-type": "PRICEPLAN",
							"product-sub-type": "R",
							"account-category": "I",
							"account-sub-type": "FIN",
							"product-id": "0880500207",
							"bill-cycle": "10",
							"bill-cycle-date": "10/10",
							"company-code": "RF",
							"service-level": "C",
							"product-id-name": "MSISDN",
							"product-id-number": "0880500207",
							"has-splitcharge": false,
							"is-childsim": false,
							"is-softsuspend": false,
							"ou-hierarchytype": "CHILD",
							"parent-ouId": "1234"
						},{
							"ouId": "6954",
							"ban": "10007237",
							"product-category": "TMV",
							"product-type": "PRICEPLAN",
							"product-sub-type": "R",
							"account-category": "I",
							"account-sub-type": "FIN",
							"product-id": "0880500207",
							"bill-cycle": "10",
							"bill-cycle-date": "9/11",
							"company-code": "RF",
							"service-level": "C",
							"product-id-name": "MSISDN",
							"product-id-number": "0880500207",
							"has-splitcharge": false,
							"is-childsim": false,
							"is-softsuspend": false,
							"ou-hierarchytype": "CHILD",
							"parent-ouId": "1234"
						},{
							"ouId": "6955",
							"ban": "10007237",
							"product-category": "TMV",
							"product-type": "PRICEPLAN",
							"product-sub-type": "R",
							"account-category": "I",
							"account-sub-type": "FIN",
							"product-id": "0880500207",
							"bill-cycle": "10",
							"bill-cycle-date": "5/12",
							"company-code": "RF",
							"service-level": "C",
							"product-id-name": "MSISDN",
							"product-id-number": "0880500207",
							"has-splitcharge": false,
							"is-childsim": false,
							"is-softsuspend": false,
							"ou-hierarchytype": "CHILD",
							"parent-ouId": "1234"
						}],
						"address-list": {
							"CUSTOMER_ADDRESS": {
								"number": "90/1",
								"type": "CUSTOMER_ADDRESS",
								"moo": "",
								"village": "",
								"street": "พหลโยธิน",
								"soi": "",
								"district": "โกสัมพีนคร",
								"province": "กำแพงเพชร",
								"building-name": "",
								"building-room": "",
								"building-floor": "",
								"sub-district": "โกสัมพี",
								"zip": "62000",
								"household": "90/1"
							},
							"BILLING_ADDRESS": {
								"number": "90/1",
								"type": "BILLING_ADDRESS",
								"moo": "",
								"village": "",
								"street": "พหลโยธิน",
								"soi": "",
								"district": "โกสัมพีนคร",
								"province": "กำแพงเพชร",
								"building-name": "",
								"building-room": "",
								"building-floor": "",
								"sub-district": "โกสัมพี",
								"zip": "62000",
								"household": "90/1"
							},
							"TAX_ADDRESS": {
								"number": "90/1",
								"type": "TAX_ADDRESS",
								"moo": "",
								"village": "",
								"street": "พหลโยธิน",
								"soi": "",
								"district": "โกสัมพีนคร",
								"province": "กำแพงเพชร",
								"building-name": "",
								"building-room": "",
								"building-floor": "",
								"sub-district": "โกสัมพี",
								"zip": "62000",
								"household": "90/1"
							},
							"INSTALLATION_ADDRESS": {
								"number": "90/1",
								"type": "INSTALLATION_ADDRESS",
								"moo": "",
								"village": "",
								"street": "พหลโยธิน",
								"soi": "",
								"district": "โกสัมพีนคร",
								"province": "กำแพงเพชร",
								"building-name": "",
								"building-room": "",
								"building-floor": "",
								"sub-district": "โกสัมพี",
								"zip": "62000",
								"household": "90/1"
							}
						}
					}
				}
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

	this.proposition = function(payload, callback) {
		var params = utils.createParamGet(payload, [
			'company-code',
			'customer-type',
			'propo-type',
			'mobile-servicetype',
			'partner-code',
			'privilege'
		]);

		var cb = function (result) {
			callback(result);
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

	this.pricePlan = function(payload, callback) {
		var params = utils.createParamGet(payload, [
			'company-code',
			'customer-type',
			'customer-subtype',
			'service-level',
			'keyword',
			'proposition',
			'partner-code',
			'privilege'
		]);

		var cb = function (result) {
			callback(result);
		};

		if (!demo) {
			var target = '/sales/catalog/product/tmv/priceplan/search?' + params;

			SystemService.callServiceGet(target, null, function(result) {
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
						'name': 'BCUGFP03',
						'description': payload.proposition + ' Biz_Buddy 600, get 600Bt,CUG,1F&F,Max2sim',
						'soc': '936258',
						'properties': {
							'TR_SPECIAL_OFFER_IND': 'CSH',
							'PRICEPLAN_TYPE': 'SH'
						},
						'sale-period': {
							'start': '2012-05-21',
							'end': '2016-01-30'
						},
						'rc': 600.0,
						'service-level': 'G',
						'priceplan-type': 'SH'
					},
					{
						'name': 'BGAINP12',
						'description': 'BizShare37700bt,All-net1.10bt/min',
						'soc': '843368',
						'properties': {
							'TR_SPECIAL_OFFER_IND': 'CSH',
							'PRICEPLAN_TYPE': 'SH'
						},
						'sale-period': {
							'start': '2014-04-13',
							'end': '2016-01-30'
						},
						'rc': 37700.0,
						'service-level': 'G',
						'priceplan-type': 'SH'
					},
					{
						'name': 'W2S02P04',
						'description': 'Corporate WOW2 Sharing Package 800-Limit 20 subs',
						'soc': '937378',
						'properties': {
							'TR_SPECIAL_OFFER_IND': 'CSH',
							'PRICEPLAN_TYPE': 'SH'
						},
						'sale-period': {
							'start': '2005-06-27',
							'end': '2016-01-30'
						},
						'rc': 16000.0,
						'service-level': 'G',
						'priceplan-type': 'SH'
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

	this.address = function(address, callback) {
		
		address = utils.isEmpty(address) ? '' : address;

		var cb = function (result) {
			callback(result);
		};

		if (!demo) {
			var target = '/profiles/master/address/search?keyword=' + address;

			SystemService.callServiceGet(target, null, function(result) {
				cb(result);
			});
		}
		else {
			var data = {
				"status" : "SUCCESSFUL",
				"trx-id" : "6910OUYKLNCOK",
				"process-instance" : "psaapdv1 (instance: SFF_node1)",
				"response-data" : [
					{
						"subdistrict" : "ดินแดง",
						"district" : "ดินแดง",
						"province" : "กรุงเทพมหานคร",
						"zipcode" : "10321"
					},
					{
						"subdistrict" : "ดินแดง",
						"district" : "ดินแดง",
						"province" : "กรุงเทพมหานคร",
						"zipcode" : "10325"
					},
					{
						"subdistrict" : "ดินแดง",
						"district" : "ดินแดง",
						"province" : "กรุงเทพมหานคร",
						"zipcode" : "10326"
					},
					{
						"subdistrict" : "ดินแดง",
						"district" : "ดินแดง",
						"province" : "กรุงเทพมหานคร",
						"zipcode" : "10400"
					},
					{
						"subdistrict" : "ดินแดง",
						"district" : "ดินแดง",
						"province" : "กรุงเทพมหานคร",
						"zipcode" : "10407"
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

	this.reason = function() {

	};

	this.masterList = function() {

	};

	this.secondAuthen = function() {

	};

	this.generateOrderId = function() {

	};

	this.getOfferDetail = function() {

	};

	this.getCUGId = function() {

	};

	this.validateCUG = function() {

	};

	this.getCapmaxParameter = function() {

	};

	this.orderSave = function() {

	};

	this.orderValidate = function() {

	};

	this.submit = function(payload) {

		var target = "/aftersales/order/submit";
		var request = {
			"order": {
				"order-id": payload.orderData.orderId,
				"creator": payload.saleAgent.logInName,
				"customer": {
					'title-code': payload.customerProfile['title-code'],
					'title': payload.customerProfile['title'],
					'firstname': payload.customerProfile['firstname'],
					'lastname': payload.customerProfile['lastname'],
					'gender': payload.customerProfile['gender'],
					'id-type': payload.customerProfile['id-type'],
					'id-number': payload.customerProfile['id-number'],
					'birthdate': payload.customerProfile['birthdate'],
					'id-expire-date': payload.customerProfile['id-expire-date'],
					'contact-number': payload.customerProfile['contact-number'],
					'contact-mobile-number': payload.customerProfile['contact-mobile-number'],
					"language": payload.customerProfile['language'],
					"customer-id": payload.customerProfile['customer-id'],
					"address-list": {
						"CUSTOMER_ADDRESS": payload.customerAddress
					}
				},
				"sale-agent": {
					'name': payload.saleAgent['engName'],
					'channel': payload.saleAgent['channel'],
					'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : null),
					'partner-name': payload.saleAgent['partnerName'],
					'sale-code': payload.saleAgent['saleCode'],
					//'sale-assist-code': "",
					'partner-type': payload.saleAgent['partnerType']
				},
				"order-items": [
					{
						"name": "MIGRATE_PRE_TO_POST",
						"product-name": payload.priceplanSelected["name"],
						"product-id-number": payload.productDetails['product-id-number'],
						"product-id-name": payload.productDetails['product-id-name'],
						"product-category": payload.productDetails['product-category'],
						"product-type": payload.productDetails['product-type'],
						"order-type": "CHANGE",
						"reason-code": "AA02",
						//"user-memo": "Customer want to request .",
						"address-list": {
							"BILLING_ADDRESS": payload.customerAddress,
							"TAX_ADDRESS": payload.customerAddress
						},
						"order-data": {
							"SUBSCRIBER-TITLE-CODE": payload.customerProfile['title-code'],
							"SUBSCRIBER-TITLE": payload.customerProfile['title'],
							"SUBSCRIBER-FIRSTNAME": payload.customerProfile['firstname'],
							"SUBSCRIBER-LASTNAME": payload.customerProfile['lastname'],
							"SUBSCRIBER-BIRTHDATE": payload.customerProfile['birthdate'],
							"SUBSCRIBER-GENDER": payload.customerProfile['gender'],
							"SUBSCRIBER-SMS-LANG": "TH",
							"ACCOUNT-BILL-FORMAT": "P",
							"ACCOUNT-PAYMENT-METHOD": "CA",
							"ACCOUNT-LANG": "TH",
							"CHANGE-OPTION": "NEW",
							"PRICEPLAN-SOC-CODE": payload.priceplanSelected["soc"],
							"CCBS-PROPOSITION-SOC-CODE": payload.propositionSelected['soc']
						},
						"primary-order-data": {
							"OU-ID": payload.productDetails['ouId'],
							"BAN": payload.productDetails['ban'],
							"ACCOUNT-CATEGORY": payload.productDetails['account-category'],
							"ACCOUNT-SUB-TYPE": payload.productDetails['account-sub-type'],
							"COMPANY-CODE": payload.productDetails['company-code'],
							"NAS-PROPOSITION": payload.propositionSelected['proposition-code'],
							"CCBS-PROPOSITION": payload.propositionSelected['name'],
							"SIM": "11111111111111111"
						}
					}
				],
				"last-modify-date": ""
			},
			'ref-id': payload.orderData.TrxID,
			'user-id': payload.saleAgent.logInName,
			'approver': ""
		};
	};

});