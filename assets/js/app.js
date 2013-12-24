var App = angular.module('App', ['ngRoute']);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'CustomerController',
        templateUrl: 'templates/customer.html'
      }
    )
    .when('/customers', 
      {
        controller: 'CustomerController',
        templateUrl: 'templates/city.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});

function CustomerController ($scope) {
  $scope.customers = [
    { name : 'Steve Jobs', city : 'San Francisco' },
    { name : 'Bill Gates', city : 'Medina' },
    { name : 'Mark Zuckerberg', city : 'Palo Alto' },
    { name : 'Lucy the Samoyed', city : 'Governador Valadares' }
  ];

  $scope.addCustomer = function () {
    $scope.customers.push( { name : $scope.newCustomer.name, city : $scope.newCustomer.city } );
  }
}

App.controller('CustomerController', CustomerController);