(function () {



    angular.module('kZoneApp').controller('mainController', ['$timeout', '$location', '$scope', 'dataFactory', '$window', '$routeParams', '$rootScope', '$http', function ($timeout, $location, $scope, dataFactory, $window, $routeParams, $rootScope, $http) {

        //dataFactory.setValue("myName", "myValue") // now access myName's Value anywhere in any control...dataFactory.getValue("myName")
        //dataFactory.setValue("mainController", $scope) // now i can access mainController's scope in any controller, example below
        //dataFactory.getValue("mainController").property_of_ scope // use this to access Scope of mainController in different controller's


        $scope.search = function () {


            dataFactory.setValue("mainController", $scope);

            var keyword = $scope.keyword;
            $location.path("search/4/" + keyword);
            
            $scope.searchQuery = function () {

                if (keyword.length > 1) {
                    keyword = '';
                    return true;
                } else {
                    return false;
                }
            }
           
            

            //var keyword = $(evt.currentTarget).attr("data-keyword");
            //var channelid = $(evt.currentTarget).attr("data-channelid");
            //var relatedtovideoid = $(evt.currentTarget).attr("data-relatedtovideoid");
            //var videoduration = $(evt.currentTarget).attr("data-videoduration");
            //var videotype = $(evt.currentTarget).attr("data-videotype");
            //var order = (undefined == $(evt.currentTarget).attr("data-order")) ? '' : $(evt.currentTarget).attr("data-order");

            

            //var url = 'http://api.knowlegezone.com/api/Videos/Search?'
            //url = url + 'keyword=' + keyword
            //url = url + '&channelid=' + channelid
            //url = url + '&relatedtovideoid=' + relatedtovideoid
            //url = url + '&videoduration=' + videoduration
            //url = url + '&videotype=' + videotype
            //url = url + '&order=' + order

      
            //$scope.mUrl = url;



        

           
        }

    }]);

})();










