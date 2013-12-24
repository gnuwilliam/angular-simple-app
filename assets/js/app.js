var App = angular.module('App', []);

function CustomerController($scope) {
  $scope.customers = [
    { name : 'Steve Jobs', city : 'San Francisco' },
    { name : 'Bill Gates', city : 'Medina' },
    { name : 'Mark Zuckerberg', city : 'Palo Alto' }
  ];
}

App.controller('CustomerController', CustomerController);