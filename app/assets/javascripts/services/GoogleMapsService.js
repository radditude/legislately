// handles calls to the Google Maps Geocoding API

function GoogleMapsService($http) {
  var baseUrl = '/gapi';

  this.geocodeAddress = function(address) {
    return $http.post(baseUrl, address);
  }
}


angular
  .module('legislately')
  .service('GoogleMapsService', GoogleMapsService)
