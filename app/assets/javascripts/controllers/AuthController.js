(function(){
  'use strict'

  function AuthController($rootScope, Auth, $state) {
    var auth = this;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}};

    auth.register = function() {
      Auth.register(auth.user, config).then(function(user){
        // TODO: extract some of this code into a UserService
        $rootScope.user = user;
        // TODO: make this not an alert
        alert('Thanks for signing up, ' + user.username);
        $state.go('newsfeed');
      }, function(response) {
        // TODO: also this
        alert(response.data.error)
      });
    };

    auth.login = function() {
      Auth.login(auth.user, config).then(function(user){
        // TODO: extract some of this code into a UserService
        $rootScope.user = user;
        // TODO: make this not an alert
        // alert("You're all signed in, " + user.username);
        $state.go('newsfeed');
      }, function(response) {
        // TODO: also this
        alert(response.data.error);
      });
    };
  }

  AuthController.$inject = ['$rootScope', 'Auth', '$state'];

  angular
    .module('legislately')
    .controller('AuthController', AuthController);


}());
