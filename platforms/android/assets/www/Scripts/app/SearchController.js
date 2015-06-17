(function () {



    angular.module('kZoneApp').controller('SearchController', ['$timeout', '$location', '$scope', 'dataFactory', '$window', '$routeParams', '$rootScope', '$http', function ($timeout, $location, $scope, dataFactory, $window, $routeParams, $rootScope, $http) {

        var nextPage = '', prevPage = '', mainController, sQuery = false;

        
        var term = $routeParams.qryID
        sQuery = (undefined != dataFactory.getValue("mainController")) ? dataFactory.getValue("mainController").searchQuery() : false ;



        function getDataV2(pageToken) {

            var url = "http://api.knowlegezone.com/api/Videos/Index?qryID=" + term;

            if (pageToken) {
                url = url + '&pageToken=' + pageToken
            }
            if (sQuery) {
                url = url + '&keyword=' + $routeParams.Title
            }

           // console.log(url)

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

        $().ready(function () {
            getDataV2('');
        })

       


        $scope.nextListsPage = function () {
            window.scrollTo(0, 0)
            getDataV2(nextPage);
        }
        $scope.previousListsPage = function () {
            window.scrollTo(0, 0)
            getDataV2(prevPage);
        }





    }]);

})();














