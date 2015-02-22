var cortado = angular.module('cortadoApp', ['ngRoute', 'ngDragDrop']);
cortado.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainController'
    });
});
