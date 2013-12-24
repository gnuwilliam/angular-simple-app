App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'CustomerController',
        templateUrl: '/app/templates/customer.html'
      }
    )
    .when('/customers', 
      {
        controller: 'CustomerController',
        templateUrl: '/app/templates/city.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});