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
    if (address.street === "" && address.city === "" && address.state === "") {
      SCAPIService.findLegislatorsByZip(address.zip).then(function(res) {
        home.results = res.data.results;
      })
    } else {
      GoogleMapsService.geocodeAddress(address).then(function(res) {
        var data = res.data;
        SCAPIService.findLegislatorsByLatLong(data).then(function(res) {
          home.results = res.data.results;
        })
      });
    }
  }
}

HomeController.$inject = ['SCAPIService', 'GoogleMapsService'];

angular
  .module('legislately')
  .controller('HomeController', HomeController);
