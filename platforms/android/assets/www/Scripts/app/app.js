(function () {

    var zoneApp = angular.module("kZoneApp", ['infinite-scroll', 'ngRoute', 'ngAnimate', 'ngTouch', 'angular-loading-bar']);

    zoneApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/search/:Title', {
                templateUrl: 'pages/search.html',
                controller: 'SearchController'
            })
            .when('/postBlog', {
                templateUrl: 'pages/post.html',
                controller: 'PostController'
            })
            .when('/addComment/:blogID', {
            templateUrl: 'pages/addComment.html',
            controller: 'BlogController'
            })
            .when('/readComment/:blogID', {
            templateUrl: 'pages/readComments.html',
            controller: 'BlogController'
            })
            .when('/ondemand/:channel/:Title', {
            templateUrl: 'pages/on-demand.html',
            controller: 'DemandController'
            })
            .when('/BrowsePlayList/:payListId/:Title', {
            templateUrl: 'pages/BrowsePlayList.html',
            controller: 'DemandController'
            })
            .when('/play/:videoID/:Title', {
            templateUrl: 'pages/play.html',
            controller: 'DemandController'
             })
            .when('/blog/:blogID', {
            templateUrl: 'pages/showBlog.html',
            controller: 'BlogController'
             })
            .when('/iptv/:cats/:Title', {
            templateUrl: 'pages/iptv.html',
            controller: 'BlogsController'
            })
            .when('/Slider/:Title', {
                templateUrl: 'pages/slider.html',
                controller: 'SliderController'
            })
            .when('/', { redirectTo: '/Slider/Home' })

    }]);


    angular.module("kZoneApp").filter('unsafe', function ($sce) {
        return function (val) {
            var decoded = angular.element('<textarea />').html(val).text();
            return $sce.trustAsHtml(decoded);
        };
    });
    zoneApp.filter('escape', function () {
        return window.encodeURIComponent;
    });

    zoneApp.run(['$rootScope', '$location', '$routeParams', function ($rootScope, $location, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
    
            $rootScope.TitleBar = $routeParams.Title;

            $rootScope.showSearch = true;
            if (current.$$route.originalPath == "/iptv/:cats/:Title" || current.$$route.originalPath == "/ondemand/:channel/:Title" || current.$$route.originalPath == '/search/:Title' || current.$$route.originalPath == '/Slider/:Title') {
                $rootScope.isBlogsPage = true;
            } else {
                $rootScope.isBlogsPage = false;

            }

        }),
        $rootScope.goBack = function () {
            window.history.back();
        }


    }]);


})();