function AuthController($rootScope, Auth, $state) {
  var auth = this;
  var config = {headers: {'X-HTTP-Method-Override': 'POST'}};

  auth.register = function() {
    Auth.register(auth.user, config).then(function(user){
      // TODO: extract some of this code into a UserService
      $rootScope.user = user;
      alert('Thanks for signing up, ' + user.username);
      $state.go('home');
    }, function(response) {
      alert(response.data.error)
    });
  };

  auth.login = function() {
    Auth.login(auth.user, config).then(function(user){
      // TODO: extract some of this code into a UserService
      $rootScope.user = user;
      alert("You're all signed in, " + user.username);
      $state.go('home');
    }, function(response) {
      alert(response.data.error);
    });
  };
}

angular
  .module('legislately')
  .controller('AuthController', AuthController);
