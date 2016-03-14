smartApp.service('CreateCugService', function($routeParams, $timeout, SystemService) {

    var demo = SystemService.demo;
    var that = this;



    this.getCUGList = function(fnCallback) {
        var data = {};
        if (demo) {
            data = {
                "status": "SUCCESSFUL",
                "display-messages": [],
                "trx-id": "3B10QPEHHLK4H",
                "process-instance": "tmsapnpr1 (instance: SFF_node1)",
                "status-code": "0",
                "cug-list": [{
                    "group-type": "GAS",
                    "group-id": "290",
                    "group-name": "Test bucket discount",
                    "group-description": "Testbucketdiscount555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "300",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "301",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "302",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "303",
                    "group-name": "Test bucket discount",
                    "group-description": "Test bucket discount",
                    "group-identifier": ""
                }, {
                    "group-type": "GAS",
                    "group-id": "505",
                    "group-name": "TEST6",
                    "group-description": "TEST6",
                    "group-identifier": "TEST6"
                }, {
                    "group-type": "GAS",
                    "group-id": "506",
                    "group-name": "TEST7",
                    "group-description": "TEST7",
                    "group-identifier": "TEST7"
                }, {
                    "group-type": "GAS",
                    "group-id": "507",
                    "group-name": "toyota",
                    "group-description": "ta",
                    "group-identifier": "ta"
                }, {
                    "group-type": "GAS",
                    "group-id": "508",
                    "group-name": "0001",
                    "group-description": "CUG Group",
                    "group-identifier": "CP"
                }, {
                    "group-type": "GAS",
                    "group-id": "511",
                    "group-name": "0009",
                    "group-description": "CUG Group",
                    "group-identifier": "SCG"
                }, {
                    "group-type": "GAS",
                    "group-id": "512",
                    "group-name": "PEP HR",
                    "group-description": "PEP HR",
                    "group-identifier": "การไฟฟ้านครหลวง"
                }, {
                    "group-type": "GAS",
                    "group-id": "513",
                    "group-name": "63637",
                    "group-description": "CUG ",
                    "group-identifier": "CCC"
                }, {
                    "group-type": "GAS",
                    "group-id": "523",
                    "group-name": "0045",
                    "group-description": "test",
                    "group-identifier": "tes"
                }, {
                    "group-type": "GAS",
                    "group-id": "524",
                    "group-name": "HR1",
                    "group-description": "HR1",
                    "group-identifier": "Test"
                }, {
                    "group-type": "GAS",
                    "group-id": "525",
                    "group-name": "HR 1",
                    "group-description": "HR 1",
                    "group-identifier": "Te st"
                }, {
                    "group-type": "GAS",
                    "group-id": "526",
                    "group-name": "IT 1",
                    "group-description": "IT 1",
                    "group-identifier": "ศาลล้มละลายกลาง"
                }, {
                    "group-type": "GAS",
                    "group-id": "527",
                    "group-name": "TT 01",
                    "group-description": "TT 01",
                    "group-identifier": "Home"
                }, {
                    "group-type": "GAS",
                    "group-id": "543",
                    "group-name": "EEE",
                    "group-description": "EEE",
                    "group-identifier": "EEE"
                }, {
                    "group-type": "GAS",
                    "group-id": "623",
                    "group-name": "HR 001",
                    "group-description": "HR 001",
                    "group-identifier": "Test"
                }, {
                    "group-type": "GAS",
                    "group-id": "625",
                    "group-name": "T002",
                    "group-description": "T002",
                    "group-identifier": "T002"
                }, {
                    "group-type": "GAS",
                    "group-id": "626",
                    "group-name": "T003",
                    "group-description": "T003",
                    "group-identifier": "T003"
                }, {
                    "group-type": "GAS",
                    "group-id": "627",
                    "group-name": "T004",
                    "group-description": "T004",
                    "group-identifier": "T004"
                }, {
                    "group-type": "GAS",
                    "group-id": "628",
                    "group-name": "T05",
                    "group-description": "T05",
                    "group-identifier": "T05"
                }, {
                    "group-type": "GAS",
                    "group-id": "629",
                    "group-name": "T06",
                    "group-description": "T06",
                    "group-identifier": "T06"
                }, {
                    "group-type": "GAS",
                    "group-id": "644",
                    "group-name": "SIT 01",
                    "group-description": "SIT 01",
                    "group-identifier": "SIT 01"
                }, {
                    "group-type": "GAS",
                    "group-id": "645",
                    "group-name": "HH1",
                    "group-description": "HHH1",
                    "group-identifier": "Hospital"
                }, {
                    "group-type": "GAS",
                    "group-id": "663",
                    "group-name": "ggg",
                    "group-description": "yyyy",
                    "group-identifier": "ffggg"
                }, {
                    "group-type": "GAS",
                    "group-id": "703",
                    "group-name": "IT101",
                    "group-description": "IT101",
                    "group-identifier": "คริสเตียนี่"
                }, {
                    "group-type": "GAS",
                    "group-id": "704",
                    "group-name": "T001",
                    "group-description": "T001",
                    "group-identifier": "T001"
                }, {
                    "group-type": "GAS",
                    "group-id": "706",
                    "group-name": "T011",
                    "group-description": "T011",
                    "group-identifier": "T011"
                }, {
                    "group-type": "GAS",
                    "group-id": "708",
                    "group-name": "T012",
                    "group-description": "T012",
                    "group-identifier": "บริษัท"
                }, {
                    "group-type": "GAS",
                    "group-id": "711",
                    "group-name": "T013",
                    "group-description": "T013",
                    "group-identifier": "T013"
                }, {
                    "group-type": "GAS",
                    "group-id": "712",
                    "group-name": "HR101",
                    "group-description": "HR101",
                    "group-identifier": "คริสเตียนี่"
                }, {
                    "group-type": "GAS",
                    "group-id": "715",
                    "group-name": "HH11",
                    "group-description": "HH11",
                    "group-identifier": "กมล"
                }, {
                    "group-type": "GAS",
                    "group-id": "716",
                    "group-name": "HH102",
                    "group-description": "HH102",
                    "group-identifier": "กมล"
                }, {
                    "group-type": "GAS",
                    "group-id": "717",
                    "group-name": "HHH",
                    "group-description": "HHH1",
                    "group-identifier": "บริษัทคริส"
                }, {
                    "group-type": "GAS",
                    "group-id": "719",
                    "group-name": "HHA1",
                    "group-description": "HHA1",
                    "group-identifier": "ไมเนอร์"
                }, {
                    "group-type": "GAS",
                    "group-id": "720",
                    "group-name": "HHB1",
                    "group-description": "HHB1",
                    "group-identifier": "บริษัท ไมเนอร์"
                }, {
                    "group-type": "GAS",
                    "group-id": "723",
                    "group-name": "BOI1",
                    "group-description": "BOI1",
                    "group-identifier": "คริสเตียนี่"
                }, {
                    "group-type": "GAS",
                    "group-id": "743",
                    "group-name": "HHB01",
                    "group-description": "HHB01",
                    "group-identifier": "ดิจิตอลเทส"
                }, {
                    "group-type": "GAS",
                    "group-id": "803",
                    "group-name": "HOS1",
                    "group-description": "HOS1",
                    "group-identifier": "HHOOSS"
                }, {
                    "group-type": "GAS",
                    "group-id": "804",
                    "group-name": "HHS2",
                    "group-description": "HHS2",
                    "group-identifier": "HHOOSS"
                }, {
                    "group-type": "GAS",
                    "group-id": "823",
                    "group-name": "HHOT",
                    "group-description": "HHOT",
                    "group-identifier": "คริสเตีย"
                }, {
                    "group-type": "GAS",
                    "group-id": "825",
                    "group-name": "HHA12",
                    "group-description": "HHA12",
                    "group-identifier": "เดลล์"
                }, {
                    "group-type": "GAS",
                    "group-id": "826",
                    "group-name": "HHOT01",
                    "group-description": "HHOT01",
                    "group-identifier": "คริสเตีย"
                }, {
                    "group-type": "GAS",
                    "group-id": "827",
                    "group-name": "HHOS01",
                    "group-description": "HHOS01",
                    "group-identifier": "ABC"
                }, {
                    "group-type": "GAS",
                    "group-id": "828",
                    "group-name": "Siam Dnan",
                    "group-description": "Billing Siam Dnan",
                    "group-identifier": "Siam Dnan Ltd, Co."
                }, {
                    "group-type": "GAS",
                    "group-id": "884",
                    "group-name": "BBOI1",
                    "group-description": "BBOI1",
                    "group-identifier": "ABC"
                }, {
                    "group-type": "GAS",
                    "group-id": "885",
                    "group-name": "BBOI2",
                    "group-description": "BBOI2",
                    "group-identifier": "คมคาย"
                }, {
                    "group-type": "GAS",
                    "group-id": "923",
                    "group-name": "eeww2",
                    "group-description": "rrrr",
                    "group-identifier": "ttest"
                }, {
                    "group-type": "GAS",
                    "group-id": "943",
                    "group-name": "็HR",
                    "group-description": "Free call in group",
                    "group-identifier": "Sansiri"
                }, {
                    "group-type": "GAS",
                    "group-id": "963",
                    "group-name": "IT001",
                    "group-description": "IT001",
                    "group-identifier": "Ta ta "
                }, {
                    "group-type": "GAS",
                    "group-id": "964",
                    "group-name": "IT001",
                    "group-description": "IT001",
                    "group-identifier": "Ta ta "
                }, {
                    "group-type": "GAS",
                    "group-id": "1983",
                    "group-name": "HHRO01",
                    "group-description": "HHRO01",
                    "group-identifier": "tata"
                }, {
                    "group-type": "GAS",
                    "group-id": "1984",
                    "group-name": "HHRO01",
                    "group-description": "HHRO01",
                    "group-identifier": "tata"
                }, {
                    "group-type": "GAS",
                    "group-id": "1985",
                    "group-name": "HHRO02",
                    "group-description": "HHRO02",
                    "group-identifier": "tata"
                }, {
                    "group-type": "GAS",
                    "group-id": "1987",
                    "group-name": "ITC1",
                    "group-description": "ITC1",
                    "group-identifier": "Infomation"
                }, {
                    "group-type": "GAS",
                    "group-id": "1988",
                    "group-name": "ITC1",
                    "group-description": "ITC1",
                    "group-identifier": "Infomation"
                }, {
                    "group-type": "GAS",
                    "group-id": "1989",
                    "group-name": "TIC03",
                    "group-description": "TIC03",
                    "group-identifier": "ไทยวาโก้"
                }, {
                    "group-type": "GAS",
                    "group-id": "1990",
                    "group-name": "สารสนเทศ1",
                    "group-description": "สารสนเทศ1",
                    "group-identifier": "Information"
                }, {
                    "group-type": "GAS",
                    "group-id": "1991",
                    "group-name": "hr01",
                    "group-description": "hr02",
                    "group-identifier": "human"
                }, {
                    "group-type": "GAS",
                    "group-id": "1993",
                    "group-name": "TEST44",
                    "group-description": "TEST44",
                    "group-identifier": "TEST44"
                }, {
                    "group-type": "GAS",
                    "group-id": "1994",
                    "group-name": "TEST55",
                    "group-description": "TEST55",
                    "group-identifier": "TEST55"
                }, {
                    "group-type": "GAS",
                    "group-id": "1995",
                    "group-name": "Account01",
                    "group-description": "Account01",
                    "group-identifier": "Accounting"
                }, {
                    "group-type": "GAS",
                    "group-id": "1997",
                    "group-name": "test1",
                    "group-description": "test1",
                    "group-identifier": "test1"
                }, {
                    "group-type": "GAS",
                    "group-id": "1998",
                    "group-name": "test2",
                    "group-description": "test2",
                    "group-identifier": "test2"
                }, {
                    "group-type": "GAS",
                    "group-id": "1999",
                    "group-name": "test3",
                    "group-description": "test3",
                    "group-identifier": "test3"
                }, {
                    "group-type": "GAS",
                    "group-id": "2000",
                    "group-name": "test4",
                    "group-description": "test4",
                    "group-identifier": "test4"
                }, {
                    "group-type": "GAS",
                    "group-id": "2001",
                    "group-name": "test5",
                    "group-description": "test5",
                    "group-identifier": "test5"
                }, {
                    "group-type": "GAS",
                    "group-id": "2002",
                    "group-name": "account11",
                    "group-description": "account11",
                    "group-identifier": "acounting"
                }, {
                    "group-type": "GAS",
                    "group-id": "2004",
                    "group-name": "HR0010",
                    "group-description": "HR0010",
                    "group-identifier": "Human"
                }, {
                    "group-type": "GAS",
                    "group-id": "2005",
                    "group-name": "HR0010",
                    "group-description": "HR0010",
                    "group-identifier": "Human"
                }, {
                    "group-type": "GAS",
                    "group-id": "2006",
                    "group-name": "SB01",
                    "group-description": "SB01",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2007",
                    "group-name": "SB01",
                    "group-description": "SB01",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2008",
                    "group-name": "SB02",
                    "group-description": "SB02",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2009",
                    "group-name": "SB02",
                    "group-description": "SB02",
                    "group-identifier": "Sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2010",
                    "group-name": "aaa",
                    "group-description": "aaa",
                    "group-identifier": "aaa"
                }, {
                    "group-type": "GAS",
                    "group-id": "2011",
                    "group-name": "bbb",
                    "group-description": "bbb",
                    "group-identifier": "bbb"
                }, {
                    "group-type": "GAS",
                    "group-id": "2013",
                    "group-name": "sb003",
                    "group-description": "sb003",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2015",
                    "group-name": "sb05",
                    "group-description": "sb05",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2017",
                    "group-name": "sb06",
                    "group-description": "sb06",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2019",
                    "group-name": "sb08",
                    "group-description": "sb08",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "2021",
                    "group-name": "sb010",
                    "group-description": "sb010",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "3003",
                    "group-name": "ITS01",
                    "group-description": "ITS01",
                    "group-identifier": "เดลล์"
                }, {
                    "group-type": "GAS",
                    "group-id": "3004",
                    "group-name": "ITS01",
                    "group-description": "ITS01",
                    "group-identifier": "เดลล์"
                }, {
                    "group-type": "GAS",
                    "group-id": "4083",
                    "group-name": "AM_TEST1",
                    "group-description": "AM_TEST1",
                    "group-identifier": "AM_TEST1"
                }, {
                    "group-type": "GAS",
                    "group-id": "4103",
                    "group-name": "GroupTOYOTA",
                    "group-description": "GroupTOYOTA",
                    "group-identifier": "Toyota1"
                }, {
                    "group-type": "GAS",
                    "group-id": "4104",
                    "group-name": "toyota1",
                    "group-description": "toyota1",
                    "group-identifier": "Toyota1"
                }, {
                    "group-type": "GAS",
                    "group-id": "4123",
                    "group-name": "IT",
                    "group-description": "IT",
                    "group-identifier": "7463"
                }, {
                    "group-type": "GAS",
                    "group-id": "4163",
                    "group-name": "AM_TEST2",
                    "group-description": "AM_TEST2",
                    "group-identifier": "AM_TEST2"
                }, {
                    "group-type": "GAS",
                    "group-id": "4323",
                    "group-name": "sale-vcare",
                    "group-description": "sale desc",
                    "group-identifier": "sale"
                }, {
                    "group-type": "GAS",
                    "group-id": "4403",
                    "group-name": "aa",
                    "group-description": "bb",
                    "group-identifier": "กขคง"
                }, {
                    "group-type": "GAS",
                    "group-id": "4486",
                    "group-name": "IT HR",
                    "group-description": "Information",
                    "group-identifier": "ส่งเสริมการค้าไทยจำ"
                }, {
                    "group-type": "GAS",
                    "group-id": "4566",
                    "group-name": "การเงิน",
                    "group-description": "แผนกการเงิน",
                    "group-identifier": "การค้าไทย"
                }, {
                    "group-type": "GAS",
                    "group-id": "4745",
                    "group-name": "UOB008",
                    "group-description": "Test",
                    "group-identifier": "บริษัท ไอที"
                }, {
                    "group-type": "GAS",
                    "group-id": "4747",
                    "group-name": "B0001",
                    "group-description": "B0001",
                    "group-identifier": "BSC"
                }, {
                    "group-type": "GAS",
                    "group-id": "4748",
                    "group-name": "B0002",
                    "group-description": "B0002",
                    "group-identifier": "B2S"
                }, {
                    "group-type": "GAS",
                    "group-id": "2058282",
                    "group-name": "Share Plan",
                    "group-description": "Share Plan",
                    "group-identifier": "Share Plan"
                }]
            };
            fnCallback({
                status: true,
                data: data,
                error: "",
                msgErr: ""
            });
        } else {
            var target = 'sales/catalog/product/tmv/aftersales/cug/list?search-type=GROUP_IDENTIFIER';
            SystemService.callServiceGet(target, null, function(result) {
                fnCallback(result);
            });
        }

    };

    this.submitCreateCug = function(payload, fnCallback) {

        var request = {
            "target": "aftersales/order/submit",
            'order': {
                "order-id": payload.orderData.orderId,
                "creator": payload.saleAgent.logInName,
                'create-date': moment().format('YYYY-MM-DDTHH:mm:ss+0700'),
                'customer': {
            //         'title-code': payload.customerProfile['title-code'],
            //         'title': payload.customerProfile['title'],
                    'firstname': payload.newCUGData.compName,
            //         'lastname': payload.customerProfile['lastname'],
            //         'id-number': payload.customerProfile['id-number'],
            //         'customer-id': payload.customerProfile['customer-id']
                },
                "sale-agent": {
                    'name': payload.saleAgent['engName'],
                    'channel': payload.saleAgent['channel'],
                    'partner-code': (payload.saleAgent["partnerCodes"].length > 0 ? payload.saleAgent["partnerCodes"][0] : payload.saleAgent["ssoEmployeePrincipal"]["employeeId"]),
                    'partner-name': payload.saleAgent['partnerName'],
                    'sale-code': payload.saleAgent['saleCode'],
                    'partner-type': payload.saleAgent['partnerType']
                },
                'order-items': [{
                    'name': 'CREATE_CUG',
                    'product-category': 'TMV',
                    'product-type': 'CUG',
                    'order-type': 'NEW',
                    'reason-code': 'CREQ',
                    'user-memo': payload.saleAgent.ssoEmployeePrincipal.loginName + "(" + payload.saleAgent.ssoEmployeePrincipal.employeeId + ": " + payload.saleAgent.ssoEmployeePrincipal.englishName + ")" + "(" + "Order ID: " + payload.orderData.orderId + ")" + ": " + payload.statusReasonMemo,
            //         'order-data': {
            //             'MOBILE-SERVICETYPE': payload.productDetails['mobile-servicetype'],
            //             'SERVICE-LEVEL': "C",
            //             'SUBSCRIBER-ID': payload.customerProfile['subscriber-id'],
            //             "CHANGE-OPTION": payload.statusCancel,
            //             "PRODUCT-STATUS-DESC": payload.productDetails['product-properties']['PRODUCT-STATUS-DESC']
            //         },
                    'primary-order-data': {
                        'GROUP-NAME': payload.newCUGData.groupName,
                        'DESCRIPTION': payload.newCUGData.desc,
                        'COMPANY-NAME': payload.newCUGData.compName
                    }
            //         'product-category': payload.productDetails['product-category'],
            //         'product-type': "PRICEPLAN",
            //         'order-type': "CHANGE"

                }]
            //     'last-modify-date': ''
            },
            'ref-id': payload.orderData.orderId,
            'user-id': payload.saleAgent.logInName,
            'approver': payload.approver
        };
        console.log(request);
        var cb = function(result) {
            fnCallback(result);
        };

        if (!demo) {
            SystemService.callServicePost(request, null, function(result) {
                //save report to server
                SystemService.saveReportToServer({}, function(result) {

                });
                cb(result);
            });
        } else {
            var data = {
                'status': 'SUCCESSFUL',
                'display-messages': [{
                    'message': 'Order ORD150700000032 successful saved.',
                    'message-type': 'INFORMATION',
                    'en-message': 'Order ORD150700000032 successful saved.',
                    'th-message': 'รายการคำขอเลขที่ ORD150700000032 ได้รับข้อมูลเรียบร้อยแล้ว'
                }],
                'trx-id': '03J5HVSFXH8R',
                'process-instance': 'tpx61.true.th (instance: sale)'
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

});
