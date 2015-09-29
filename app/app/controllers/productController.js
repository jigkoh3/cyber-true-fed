smartApp.controller('ProductController', function ($scope, ProductService) {

    $('.box-pre ul li:nth-child(4n)').addClass("listitem3");

    $(".various3").fancybox({
        'type': 'iframe',
        width: '90%',
        height: '95%',
        openEffect: false,
        closeEffect: false,
        speedIn: 15000,
        speedOut: 15000,
        autoScale: false,
        centerOnScroll: true, // and not 'true',
        autoCenter: true, // and not 'true'
        resize: 'Auto',
        helpers: {
            overlay: {
                css: {
                    'background': 'transparent',
                    'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#F22a2a2a,endColorstr=#F22a2a2a)',
                    'zoom': '1',
                    'background': 'rgba(42, 42, 42, 0.95)'
                },
                locked: true,
                closeClick: false,
            }

        },
    });



    $(".box-pre ul li").hover(function () {
        $(this).find('p').hide(200);
    }, function () {
        $(this).find('p').show(200);
    });


    var $window = $(window), $html = $('.box-pre ul li a');
    $window.resize(function resize() {
        if ($window.width() < 514) {
            return $html.removeClass('various3');
        }
        $html.addClass('various3');
    }).trigger('resize');
});