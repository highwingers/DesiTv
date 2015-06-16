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










