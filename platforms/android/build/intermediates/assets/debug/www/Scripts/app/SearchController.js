(function () {



    angular.module('kZoneApp').controller('SearchController', ['$timeout', '$location', '$scope', 'dataFactory', '$window', '$routeParams', '$rootScope', '$http', function ($timeout, $location, $scope, dataFactory, $window, $routeParams, $rootScope, $http) {

        var nextPage = '', prevPage = '', mainController

        dataFactory.setValue("SearchController", $scope);
        mainController = (dataFactory.getValue("mainController"))


        function getData(url, pageToken) {

            if (pageToken) {
                url = url + '&pageToken=' + pageToken
            }

            dataFactory.YouTubeSearch(url)
            .success(function (data) {
                console.log(data)
                nextPage = data.nextPageToken;
                prevPage = data.prevPageToken;

                var nxtPage = nextPage ? 'visible' : 'hidden';
                var prvPage = prevPage ? 'visible' : 'hidden';

                $('#nPage').css('visibility', nxtPage);
                $('#pPage').css('visibility', prvPage);


                $scope.results = data;
            })
        }

        getData(mainController.mUrl);


        $scope.nextListsPage = function () {
            window.scrollTo(0, 0)
            getData(mainController.mUrl, nextPage);
        }
        $scope.previousListsPage = function () {
            window.scrollTo(0, 0)
            getData(mainController.mUrl, prevPage);
        }



        $scope.playVideo = function (v) {
            if (window.cordova) {
                //var ref = cordova.InAppBrowser.open('http://knowlegezone.com/pages/player_wrapper.aspx?v=' + v, '_blank', 'location=yes,zoom=no');
                //YoutubeVideoPlayer.openVideo(v);
                VideoPlayer.play("https://www.youtube.com/watch?v=" + v);
                //VideoPlayer.play("https://www.youtube.com/watch?v=en_sVVjWFKk");
            } else {
                window.open('http://knowlegezone.com/pages/player_wrapper.aspx?v=' + v, 'myWin', 'width:100%')
            }

        }


    }]);

})();






(function () {



    angular.module('kZoneApp').controller('CommonController', ['$timeout', '$location', '$scope', 'dataFactory', '$window', '$routeParams', '$rootScope', '$http', function ($timeout, $location, $scope, dataFactory, $window, $routeParams, $rootScope, $http) {


        $scope.search = function () {
            alert($scope.keyword)
            $location.path("search");
        }

    }]);

})();










