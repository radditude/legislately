// handles all calls to Sunlight Congress API

function SCAPIService($http) {
  var baseUrl = 'https://congress.api.sunlightfoundation.com';

  this.getComingSoon = function() {
    return $http.get(baseUrl + '/upcoming_bills?order=scheduled_at');
  };
}

angular
  .module('legislately')
  .service('SCAPIService', SCAPIService);
