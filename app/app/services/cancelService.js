﻿smartApp.service('CancelService', function ($routeParams, $timeout, SystemService) {
	
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
				  "response-data" : {
				  "customer" : {
				    "title": "",
                    "title-code": "T3",
                    "firstname": "พฤกษวดี",
                    "lastname": "พฤกษวดีนงลักษณ์",
                    "birthdate": "2531-09-01T00:00:00+0700",
                    "contact-number": "",
                    "id-type": "P",
                    "id-number": "012369857789",
                    "customer-id": "325",
				    "installed-products" : [ {
				      "ouId" : "5010",
				      "ban" : "20009628",
				      "product-id" : "EDATAP69",
				      "product-name" : "EDATAP69",
				      "product-description" : "Biz &amp; Ent 900,Data UNL5GB/128,WiFi",
				      "product-soc-code" : "1234567",
				      "account-category" : "I",
				      "account-sub-type" : "FIN",
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
				            "PRODUCT-STATUS-DATE" : null,
				            "REASON-CODE" : null,
				            "REASON-DESC" : null,
				            "SUBSCRIBER-ID" : null,
				            "PRODUCT-STATUS-CODE" : null, // CANCEL-ACTIVE, CANCEL-SOFT-SUSPEND, CANCEL-FULL-SUSPEND
				            "PRODUCT-STATUS-DESC" : null // Active, Soft Suspend by Request, Full Suspend by Request
				      }
				    }]  
				  },
				    "display-messages" : [ {
				      "message" : "",
				      "message-type" : "ERROR",
				      "en-message" : "VIP",
				      "th-message" : "",
				      "technical-message" : ""
				    } ,{
				      "message" : "",
				      "message-type" : "ERROR",
				      "en-message" : "DISCOUNT",
				      "th-message" : "",
				      "technical-message" : ""
				    } ,{
				      "message" : "",
				      "message-type" : "ERROR",
				      "en-message" : "SUBSCRIBER STATUS",
				      "th-message" : "",
				      "technical-message" : ""
				    } ,{
				      "message" : "",
				      "message-type" : "ERROR",
				      "en-message" : "NICE NUMBER",
				      "th-message" : "",
				      "technical-message" : ""
				    } ,{
				      "message" : "",
				      "message-type" : "WARNING",
				      "en-message" : "IR",
				      "th-message" : "",
				      "technical-message" : ""
				    } ,{
				      "message" : "",
				      "message-type" : "WARNING",
				      "en-message" : "CONVERGENT",
				      "th-message" : "",
				      "technical-message" : ""
				    } ]

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
					'id-number': payload.customerProfile['id-number'],
					// 'customer-agents': {
					// 	'AUTH_1': {
					// 		'contact': '0868836665',
					// 		'id-number': '9988877688845',
					// 		'id-type': 'I',
					// 		'firstname': 'สมคิด',
					// 		'lastname': 'คิดมากไป',
					// 		'birthdate': '2015-07-20T00:00:00+0700'
					// 	},
					// 	'POA': {
					// 		'contact': '0868836664',
					// 		'id-number': '3257588733945',
					// 		'id-type': 'I',
					// 		'firstname': 'สมชาย',
					// 		'lastname': 'ปากสว่าง',
					// 		'birthdate': '2015-07-20T00:00:00+0700'
					// 	},
					// 	'AUTH_2': {
					// 		'contact': '0868836666',
					// 		'id-number': '9988877687723',
					// 		'id-type': 'I',
					// 		'firstname': 'สมฤดี',
					// 		'lastname': 'ดีเกินไป',
					// 		'birthdate': '2015-07-20T00:00:00+0700'
					// 	}
					// }
				},
				"sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : null),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    'partner-type': payload.saleAgent['partnerType']
                },
				'order-items': [
					{
						'name': 'CANCEL',
						'product-name': payload.productDetails['product-id'],
						'product-id-number': payload.productDetails['product-id-number'],
						'product-id-name': payload.productDetails['product-id-name'],
						'product-category': payload.productDetails['product-category'],
						'reason-code': payload.statusReason,
						'user-memo': payload.statusReasonMemo,
						'order-data': {
							'OU-ID': payload.productDetails['ouId'],
							'BAN': payload.productDetails['ban'],
							'PREPAID-SUBSCRIBER-ID': payload.productDetails['prepaid-subscriber-id'],
							'IMSI': payload.productDetails['product-id-number']
						},
						'primary-order-data': {
							'MOBILE-SERVICETYPE': payload.productDetails['mobile-servicetype'],
							'ACCOUNT-CATEGORY': payload.productDetails['account-category'],
							'ACCOUNT-SUB-TYPE': payload.productDetails['account-sub-type'],
							'COMPANY-CODE': payload.productDetails['company-code'],
							'PRODUCT-CODE': payload.productDetails['productCodes'],
							'SIM': payload.productDetails['simSerial'],
					        "EFFECTIVE-OPTION" : "IMMEDIATE",
							// "EFFECTIVE-DATE" : "12/12/2015"

						},
						"product-category" : "TMV",
						"product-type" : "PRICEPLAN",
						"order-type" : "CHANGE"

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