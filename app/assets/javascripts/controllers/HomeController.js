function HomeController(SCAPIService, GoogleMapsService) {
  var home = this;
  // search params
  home.address = {
    street: "",
    city: "",
    state: "",
    zip: ""
  };

  // results
  home.results;

  home.findLegislators = function(address) {
    console.log(GoogleMapsService.geocodeAddress(address));
    SCAPIService.findLegislatorsByZip(address.zip).then(function(res) {
      home.results = res.data.results;
      console.log(home.results);
    })
  }
}

HomeController.$inject = ['SCAPIService', 'GoogleMapsService'];

angular
  .module('legislately')
  .controller('HomeController', HomeController);
