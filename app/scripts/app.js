var cortado = angular.module('cortadoApp', ['ngRoute', 'ngDragDrop', 'ui.bootstrap']);
cortado.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainController'
    });
});
