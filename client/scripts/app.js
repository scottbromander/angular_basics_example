var myApp = angular.module('myApp',[]);

myApp.controller("WelcomeController", ['$scope', function($scope){
    $scope.note = {};
    $scope.array = [];
    $scope.heading = "Here is your message: ";

    $scope.submitName = function(){
        $scope.array.push($scope.note);
        $scope.note = {};
        console.log($scope.array);
    }
}]);

