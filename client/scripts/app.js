var myApp = angular.module('myApp',[]);

myApp.controller("WelcomeController", ['$scope', function($scope){
    $scope.note = {};
    $scope.array = [];
    $scope.heading = "Here is your message: ";

    $scope.submitName = function(){
        $scope.array.push($scope.note);
        $scope.note = {};
        console.log($scope.array);
    };

    $scope.scott = {
        name: "Scott Bromander",
        position: "Instructor",
        imgUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAO8AAAAJDdlMDg0NjNiLTBiNTEtNGY2NS05MmYwLWU5YTcyYzFjMjFmNA.jpg"
    };

    $scope.kris = {
        name: "Kris Szafranksi",
        location: "Richfield",
        position: "Instructor",
        imgUrl: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANLAAAAJGVmOTljZDA5LTk0NWUtNDlmOC1hNzg0LWViOWU4NjZjMTc3Ng.jpg"
    };

    $scope.mark = {
        name: "Mark Hurlburt",
        location: "Minneapolis",
        position: "President",
        imgUrl: "https://media.licdn.com/media/p/4/000/132/251/154d1e4.jpg"
    };

    $scope.people = [$scope.scott, $scope.kris, $scope.mark];
}]);

