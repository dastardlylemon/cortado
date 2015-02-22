angular.module('cortadoApp').controller('mainController', function($scope, $timeout, $http, $modal) {
  $scope.prospectiveList = [
    { 'title': 'Item 1', 'drag': true },
    { 'title': 'Item 2', 'drag': true },
    { 'title': 'Item 3', 'drag': true },
    { 'title': 'Item 4', 'drag': true },
    { 'title': 'Item 5', 'drag': true },
    { 'title': 'Item 6', 'drag': true },
    { 'title': 'Item 7', 'drag': true },
    { 'title': 'Item 8', 'drag': true }
  ];

  $scope.startedList = [];
  $scope.interviewingList = [];
  $scope.offerList = [];

  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl: '/views/modalContent.html',
      controller: 'ModalInstanceCtrl',
      size: '',
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function() {
      console.log('modal dismissed');
    });
  };

/*
  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      if ($scope.list1.length >= 2) {
        return false;
      } else {
        return true;
      }
    }
  };
  */
});

angular.module('cortadoApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
  $scope.items = items;

  $scope.selected = {
    item: $scope.items
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
