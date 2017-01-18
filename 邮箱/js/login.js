/**
 * Created by rimi on 16/12/19.
 */
var app=angular.module("myapp",['ngRoute']);
app.controller("myctrl",["$scope","$location","$window",function($scope,$location,$window) {
    $scope.skip=function(){
        // $location.path('/home');
           $window.open('../pages/index.html','_self');
    };
}]);
app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/home",{
            controller:"homeCtrl",
            templateUrl:"../pages/index.html"

        })
        .otherwise({redirectTo:"/"});
}]);