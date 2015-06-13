(function () {



    angular.module('kZoneApp').controller('BlogController', ['$scope', '$rootScope', 'dataFactory', '$window', '$routeParams', function ($scope, $rootScope,dataFactory, $window, $routeParams) {


        $rootScope.showSearch = false;

        $scope.CommentSettings = {
            i: 0,
            end: false,
            busy: false,
            perpage: 30,
            commentResults: []
        }

        // Get Clicked Blog / Blog Click
        var blgID
       function _getBlog() {

           blgID = $routeParams.blogID; // $(evt.target).attr("data-blogid");
            $scope.myBlogID = blgID;

            $scope.CommentSettings.commentResults = []; //reset previous blog comments
            $scope.CommentSettings.busy = false;
            $scope.CommentSettings.end = false;
            $scope.CommentSettings.i = 0;
            _getComments();

            dataFactory.getBlog(blgID)
            .success(function (blog) {
                $rootScope.TitleBar = blog.ArticleTitle;
                $scope.blogDataResult = blog;
            })
        }








        // Comments Work




        _getComments = function () {
            $scope.CommentSettings.i++
            $scope.CommentSettings.busy = true;
            console.log("Hiting Service for Coments")
            dataFactory.getComments(blgID, $scope.CommentSettings.i, $scope.CommentSettings.perpage)
           .success(function (comments) {
               if (comments.length <= 0) {
                   $scope.CommentSettings.busy = false;
                   $scope.CommentSettings.end = true;
                   return;
               }


               for (var i = 0; i < comments.length; i++) {
                   $scope.CommentSettings.commentResults.push(comments[i]);
               }

               $scope.CommentSettings.busy = false;

           })
        }

        $scope.loadMoreComments = function () {

            if (!$scope.CommentSettings.end) {
                _getComments();
            }

        }

        // save comment

        $scope.saveComment = function () {
            $scope.comment.BlogID = $scope.myBlogID;
            dataFactory.postComment($scope.comment)
            .success(function (data, status, headers, config) {
                $scope.comment.comment = '';
                alertUser("Your Comment has been posted", "Comment Posted", "Ok")

            }).error(function (data, status, headers, config) {
                alertUser(data, "Comment Posting Error", "Cancel")
            });

            return;

        }

        // end Comments


        _getBlog();

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






