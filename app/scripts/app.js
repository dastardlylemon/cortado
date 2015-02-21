var cortado = angular.module('cortadoApp', ['ngRoute']);
cortado.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainController'
    });
});
