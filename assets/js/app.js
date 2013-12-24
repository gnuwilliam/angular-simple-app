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

App.factory('CustomerFactory', function () {
  var factory = {};
  var customers = [
    { name : 'Steve Jobs', city : 'San Francisco' },
    { name : 'Bill Gates', city : 'Medina' },
    { name : 'Mark Zuckerberg', city : 'Palo Alto' },
    { name : 'Lucy the Samoyed', city : 'Governador Valadares' }
  ];

  factory.getCustomers = function () {
    return customers;
  }
  return factory;
});

App.controller('CustomerController', function ($scope, CustomerFactory) {
  $scope.customers = CustomerFactory.getCustomers();

  $scope.addCustomer = function () {
    $scope.customers.push( { name : $scope.newCustomer.name, city : $scope.newCustomer.city } );
  }
});