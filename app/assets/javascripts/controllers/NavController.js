(function(){
  'use strict'

  function NavController($scope, Auth, $rootScope) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function(user) {
      $rootScope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user) {
      $rootScope.user = user;
    });

    $scope.$on('devise:login', function (e, user) {
      $rootScope.user = user;
    });

    $scope.$on('devise:logout', function (e, user) {
      // TODO: make this message display better cause alerts suck
      alert("You have been logged out.");
      $rootScope.user = undefined;
    });
  }

  NavController.$inject = ['$scope', 'Auth', '$rootScope'];

  angular
    .module('legislately')
    .controller('NavController', NavController);


}());
