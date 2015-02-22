var cortado = angular.module('cortadoApp', ['ngRoute', 'ngDragDrop']);
cortado.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/main.html',
      controller: 'mainController'
    });
});

var dragDrop = angular.module('drag-and-drop', ['ngDragDrop']);
