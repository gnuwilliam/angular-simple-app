App.controller('CustomerController', [
  '$scope', '$timeout', 'Facebook', 
  function ($scope, $timeout, Facebook) {
    $scope.user = {};
    $scope.friends = {};

    $scope.logged = false;
    $scope.bye = false;
    $scope.welcome = false;

    $scope.$watch(
      function() {
        return Facebook.isReady();
      }, 
      function(newVal) {
        if (newVal) {
          $scope.facebookReady = true;
        }
      }
    );

    $scope.IntentLogin = function() {
      Facebook.getLoginStatus(function (response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          $scope.me();
        } else {
          $scope.login();
        }
      });
    };

    $scope.login = function() {
      Facebook.login(function (response) {
        if (response.status == 'connected') {
          $scope.logged = true;
          $scope.me();
          $scope.getFriends();
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me', function (response) {
        $scope.$apply(function () {
          $scope.user = response;
        });
      });
    };

    $scope.getFriends = function() {
      Facebook.api('/me/friends?fields=name,location', function (response) {
        $scope.$apply(function () {
          $scope.friends = response;
        });
      });
    };

    $scope.logout = function() {
      Facebook.logout(function () {
        $scope.$apply(function () {
          $scope.user = {};
          $scope.friends = {};
          $scope.logged = false;
        })
      });
    };

    $scope.$on('Facebook:statusChange', function (ev, data) {
      console.log('Status: ', data);

      if (data.status == 'connected') {
        $scope.$apply(function () {
          $scope.welcome = true;
          $scope.bye = false;
        });
      } else {
        $scope.$apply( function() {
          $scope.welcome = false;
          $scope.bye = true;
        });
      }
    });

  }
]);