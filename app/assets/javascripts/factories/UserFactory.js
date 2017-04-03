(function(){
  'use strict'

  function UserFactory($http) {
    return {
      following: following
    }

    function following() {
      return $http.get('/following');
    }
  }

  UserFactory.$inject = ['$http'];

  angular
    .module('legislately')
    .factory('UserFactory', UserFactory)

}());
