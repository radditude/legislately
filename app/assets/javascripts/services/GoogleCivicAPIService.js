// handles calls to the Google Maps Geocoding API

function GoogleCivicAPIService($http) {
  var baseUrl = '/locateaddress';

  this.findAddress = function(address) {
    return $http.post(baseUrl, address);
  }
}


angular
  .module('legislately')
  .service('GoogleCivicAPIService', GoogleCivicAPIService)
