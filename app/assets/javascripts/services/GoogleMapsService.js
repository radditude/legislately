// handles calls to the Google Maps Geocoding API

function GoogleMapsService($http) {
  var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + ENV['GOOGLE_API_KEY'] + '&address=';

  this.geocodeAddress = function(address) {
    var joinAddress = address.street + " " + address.city + " " + address.state + " " + address.zip;
    var addressString = joinAddress.replace(" ", "+");
    return $http.get(baseUrl + addressString);
  }
}

angular
  .module('legislately')
  .service('GoogleMapsService', GoogleMapsService)
