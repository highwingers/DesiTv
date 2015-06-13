(function () {



    angular.module('kZoneApp').controller('SliderController', ['$scope', '$rootScope', 'dataFactory', '$window', '$routeParams', function ($scope, $rootScope, dataFactory, $window, $routeParams) {

        setTimeout(function () {
            angular.element('#trigger_me').trigger('click');
        }, 500)
    }]);

})();






