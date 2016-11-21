var myApp = angular.module('myApp', [])
    
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    })
    .controller('myAppCtrl', ['$scope', function ($scope) {
        $scope.greeting = 'Hola!';
    }]);