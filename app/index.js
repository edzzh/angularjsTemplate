const angular = require('angular');

console.log('hello');

const appModule = angular.module("App", []);

appModule.controller("mainController", ['$scope', function ($s) {

}]);

appModule.controller("test", ['$scope', function ($s) {
    $s.name = "Edgars";
}]);

