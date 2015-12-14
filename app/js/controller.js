/* Controllers */
angular
        .module('blackBook')
  .controller('contactController', function($scope, contactFactory) {
  $scope.contact = contactFactory.list;
  $scope.delete = function(index) {
    contactFactory.delete(index);
  };
})
.controller('addContactController', function($scope, contactFactory, $location) {
  $scope.submit = function() {
    contactFactory.create($scope.contactName);
    $scope.contactName = '';
    contactFactory.create($scope.contactPhone);
    $scope.contactPhone = '';
    contactFactory.create($scope.contactEmail);
    $scope.contactEmail = '';
    $location.url('/contact');
  };
})
.factory('contactFactory', function($q, $http) {var list = [];
  var list = [];
  function create(name) {
    list.push({
      name: name,
      completed: false,
    });
  }
  function remove(index) {
    list.splice(index, 1);
  }
  return {
    list: list,
    create: create,
    delete: remove,
  };
})
