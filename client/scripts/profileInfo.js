myApp.directive('appInfo',
    function() {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'assets/views/profileInfo.html'
        };
    });