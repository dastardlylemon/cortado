angular.module('cortadoApp').controller('mainController', function($scope, $timeout, $http, $modal) {
  $scope.prospectiveList = [];
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

    modalInstance.result.then(function (company) {
      var newJobItem = {
        'title' : company,
        'drag' : true
      };

      $scope.prospectiveList.push(newJobItem);
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

  $scope.ok = function () {
    $modalInstance.close($scope.company);
    console.log($scope.company);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
