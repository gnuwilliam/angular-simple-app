App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'CustomerController',
        templateUrl: 'app/templates/customer.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});