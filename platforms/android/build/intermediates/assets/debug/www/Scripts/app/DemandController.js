(function () {



    angular.module('kZoneApp').controller('DemandController', ['$http', '$scope', '$rootScope', 'dataFactory', '$window', '$routeParams','$sce', function ($http, $scope,$rootScope, dataFactory, $window, $routeParams,$sce) {

        var channel = $routeParams.channel;
        var playList = $routeParams.payListId;
        var qryID = $routeParams.qryID;


        $('#nPage').css('visibility', 'hidden');
        $('#pPage').css('visibility', 'hidden');


        $scope.vidID = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $routeParams.videoID );
        $rootScope.TitleBar = $routeParams.Title;


        var nextPage='', prevPage=''
        // Get all the PlayLists for a channel
        var ShowPlayLists = function (pageToken) {


            if (undefined != channel) {
                var purl = 'http://api.knowlegezone.com/api/Videos/Index?qryID=' + channel

                if (pageToken) {
                    purl = purl + '&pageToken=' + pageToken
                }
                $http.get(purl).
                success(function (data) {
                    nextPage = data.nextPageToken;
                    prevPage = data.prevPageToken;

                    var nxtPage = nextPage ? 'visible' : 'hidden';
                    var prvPage = prevPage ? 'visible' : 'hidden';

                    $('#nPage').css('visibility', nxtPage);
                    $('#pPage').css('visibility', prvPage);



                    $scope.playLists = data.items;
                });
            }
        }

        $scope.nextListsPage = function () {
            window.scrollTo(0, 0)
            ShowPlayLists(nextPage);
        }
        $scope.previousListsPage = function () {
            window.scrollTo(0,0)
            ShowPlayLists(prevPage);
        }

        ShowPlayLists();

        // Browse videos within a playlist within a channel
        if (undefined != playList) {
            $http.get('http://api.knowlegezone.com/api/Videos/GetPlayListv3?playListID=' + playList).
            success(function (data) {
                $scope.browsePlayLists = data.items;
            });
        }

        // Browse videos within a playlist, by ID which is in DB
        if (undefined != qryID) {
            $http.get('http://api.knowlegezone.com/api/Videos/Index?qryID=' + qryID).
            success(function (data) {
                $scope.browsePlayLists = data.items;
            });
        }




    }]);





})();






