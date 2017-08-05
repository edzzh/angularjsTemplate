const angular = require('angular');
var NgRoute = require('angular-route');
const appModule = angular.module('App', []);

appModule.controller('mainController', ['$scope', '$location', '$anchorScroll', function ($s, $location, $anchorScroll) {
        $s.scrollTo = function (id) {
           $location.hash(id);
           $anchorScroll();
        }
}]);

appModule.controller('secondController', ['$scope', '$log', function ($s, $log) {
        $s.message = "Hello!";
}]);


//Routing
/*
var app = angular.module("App", ["ngRoute"]);
appRoute.config(function ($routeProvider) {
   $routeProvider
       .when("/home", {
           templateUrl: "home/home.html",
           controller: "homeController"
       })
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home page";
    });
    */