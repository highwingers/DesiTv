(function () {

    angular.module('kZoneApp')
        .factory('dataFactory', ['$http', function ($http) {

            var oObj = {};
            var nvp = {};

            oObj.getBlogs = function (_CatIDs, _PageIndex, _PerPage) {

                var urlBase = 'http://api.knowlegezone.com/api/Blogs/GetBlogsByIds';
                //console.log(_PageIndex)
                return $http({
                    url: urlBase,
                    method: "GET",
                    params: { CatIDs: _CatIDs, PageIndex: _PageIndex, PerPage: _PerPage }
                });
            };

            oObj.getComments = function (_BlogID, _PageIndex, _PerPage) {

                var urlBase = 'http://api.knowlegezone.com/api/Blogs/GetBlogComments';
                //console.log(_PageIndex)
                return $http({
                    url: urlBase,
                    method: "GET",
                    params: { BlogID: _BlogID, PageIndex: _PageIndex, PerPage: _PerPage }
                });
            };



            oObj.getBlog = function (_blogID) {

                var urlBase = 'http://api.knowlegezone.com/api/Blogs/GetBlog';
                //console.log(_PageIndex)
                return $http({
                    url: urlBase,
                    method: "GET",
                    params: { BlogID: _blogID }
                });
            };


            oObj.postComment = function (_CommentObj) {

                var urlBase = 'http://api.knowlegezone.com/api/Blogs/AddComment';
                //console.log(_PageIndex)
                return $http({
                    url: urlBase,
                    method: "POST",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                    data: $.param(_CommentObj)
                });
            };

            oObj.addBlog = function (_blog) {

                var urlBase = 'http://api.knowlegezone.com/api/Blogs/AddBlog';
                //console.log(_PageIndex)
                return $http({
                    url: urlBase,
                    method: "POST",
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                    data: $.param(_blog)
                });
            };


            oObj.YouTubeSearch = function (url) {

                var urlBase = url;
                return $http({
                    url: urlBase,
                    method: "GET"
                });
            };

            oObj.setValue = function (n, v) {
                nvp[n] = v;
            }
            oObj.getValue = function (n) {
                return nvp[n];
            }


            return oObj;
        }]);




})();