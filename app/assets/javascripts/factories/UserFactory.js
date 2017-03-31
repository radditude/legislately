function UserFactory($http) {
  return {
    following: following
  }

  function following() {
    return $http.get('/following');
  }
}

angular
  .module('legislately')
  .factory('UserFactory', UserFactory)
