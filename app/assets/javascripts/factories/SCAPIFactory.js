(function(){
  'use strict'

  function SCAPIFactory($http) {
    return {
      getComingSoon: getComingSoon
    }

    function getComingSoon() {
      return $http.get('https://congress.api.sunlightfoundation.com/upcoming_bills?order=scheduled_at');
    };
  }

  SCAPIFactory.$inject = ['$http'];

  angular
    .module('legislately')
    .factory('SCAPIFactory', SCAPIFactory);

}());
