var app = angular.module('myApp',["ngMap","ui.router"]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('startPage', {
              url:'/',
              templateUrl: './Views/maps.html',
          })
    }]);




