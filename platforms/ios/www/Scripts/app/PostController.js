(function () {



    angular.module('kZoneApp').controller('PostController', ['$scope', '$rootScope', 'dataFactory', '$window', '$routeParams', function ($scope,$rootScope, dataFactory, $window, $routeParams) {
        $rootScope.TitleBar = "New Post";
        $scope.addBlog = function () {
         
            dataFactory.addBlog($scope.blog)
            .success(function (data, status, headers, config) {
                $scope.blog.BlogTitle = '';
                $scope.blog.BlogBody = '';
                alertUser("Your Post has been submited", "Posted", "Ok")

            }).error(function (data, status, headers, config) {
                alertUser(data, "Posting Error", "Cancel")
            });

            return;
        }



        function alertDismissed() {
            // do something
        }

        function alertUser(msg, title, btnName) {
            navigator.notification.alert(
            msg,  // message
            alertDismissed,         // callback
            title,            // title
            btnName                 // buttonName
            );
        }


    }]);

})();






