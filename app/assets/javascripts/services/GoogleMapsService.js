// handles calls to the Google Maps Geocoding API

function GoogleMapsService($http) {
  var baseUrl = '/gapi';

  this.geocodeAddress = function(address) {
    var joinAddress = address.street + " " + address.city + " " + address.state + " " + address.zip;
    var addressString = joinAddress.replace(" ", "+");
    return $http.post(baseUrl, address);
  }
}

angular
  .module('legislately')
  .service('GoogleMapsService', GoogleMapsService)
