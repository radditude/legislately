// handles all calls to Sunlight Congress API

function SCAPIService($http) {
  var baseUrl = 'https://congress.api.sunlightfoundation.com';

  this.getComingSoon = function() {
    return $http.get(baseUrl + '/upcoming_bills?order=scheduled_at');
  };

  this.findLegislatorsByZip = function(zip) {
    return $http.get(baseUrl + '/legislators/locate?zip=' + zip);
  };

  this.findLegislatorsByLatLong = function(location) {
    var lat = location.lat;
    var long = location.lng;

    return $http.get(baseUrl + '/legislators/locate?latitude=' + lat + '&longitude=' + long);
  };

  this.getLegislatorById = function(id) {
    return $http.get(baseUrl + '/legislators?bioguide_id=' + id + '&all_legislators=true');
  }
}

angular
  .module('legislately')
  .service('SCAPIService', SCAPIService);
