function AuthController($rootScope, Auth, $state) {
  var auth = this;
  var config = {headers: {'X-HTTP-Method-Override': 'POST'}};

  auth.register = function() {
    Auth.register(auth.user, config).then(function(user){
      $rootScope.user = user;
      alert('Thanks for signing up, ' + user.username);
      $state.go('home');
    }, function(response) {
      alert(response.data.error)
    });
  };
}

angular
  .module('legislately')
  .controller('AuthController', AuthController);
