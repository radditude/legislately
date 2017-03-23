// handles all calls to Sunlight Congress API

function SCAPIFactory($http, $sce) {
  return {
    getComingSoon: getComingSoon
  }

  function getComingSoon() {
    return $http.get('https://congress.api.sunlightfoundation.com/upcoming_bills?order=scheduled_at');
  };
}

angular
  .module('legislately')
  .factory('SCAPIFactory', SCAPIFactory);
