App.controller('CustomerController', function ($scope, CustomerFactory) {
  $scope.customers = CustomerFactory.getCustomers();

  $scope.addCustomer = function () {
    $scope.customers.push( { name : $scope.newCustomer.name, city : $scope.newCustomer.city } );
  }
});