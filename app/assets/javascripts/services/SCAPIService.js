// handles all calls to Sunlight Congress API

function SCAPIService($http, $sce) {
  var baseUrl = 'https://congress.api.sunlightfoundation.com';

  this.getComingSoon = function() {
    return $http.get(baseUrl + '/upcoming_bills?order=scheduled_at');
  };

  // this.findLegislatorsByZip = function(zip) {
  //   return $http.get(baseUrl + '/legislators/locate?zip=' + zip);
  // };

  // this.findLegislatorsByLatLong = function(location) {
  //   var lat = location.lat;
  //   var long = location.lng;

  //   return $http.get(baseUrl + '/legislators/locate?latitude=' + lat + '&longitude=' + long);
  // };

  this.getLegislatorById = function(id) {
    return $http.get(baseUrl + '/legislators?bioguide_id=' + id.toUpperCase() + '&all_legislators=true');
  }

  this.getVotesByLegislator = function(id, page) {
    return $http.get(baseUrl + '/votes?voter_ids.' + id.toUpperCase() + '__exists=true&page=' + page);
  }
}

angular
  .module('legislately')
  .service('SCAPIService', SCAPIService);
