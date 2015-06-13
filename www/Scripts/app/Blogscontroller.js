(function () {



    angular.module('kZoneApp').controller('BlogsController', ['$scope', 'dataFactory', '$window', '$routeParams', '$rootScope', function ($scope, dataFactory, $window, $routeParams, $rootScope) {


        $scope.cats = $routeParams.cats;
        $rootScope.showSearch = false;


        $scope.blogResults = [];
        $scope.blogsDiv = true;
        $scope.busy = false;
        $scope.end = false;
        $scope.i = 0;
    
        var perpage = 30;



        // Blog Results
        function _getBlogs(CatIDs, PerPage) {
            $scope.i++
            $scope.busy = true;
            //console.log("Hiting Service for Results")
            dataFactory.getBlogs(CatIDs, $scope.i, PerPage)
           .success(function (blogs) {
               if (blogs.length <= 0) {
                   $scope.end = true;
                   $scope.busy = false;
                   return;
               }
               $scope.Total = blogs[0].Total;

               for (var i = 0; i < blogs.length; i++) {
                   $scope.blogResults.push(blogs[i]);
               }

               $scope.busy = false;

           })
        }



        $scope.loadMore = function () {
            if (!$scope.end) {
                _getBlogs($scope.cats, perpage)
            }
        }
    }]);
    
})();






