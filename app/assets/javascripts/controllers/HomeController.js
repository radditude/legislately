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

  // TODO: figure out how to display a loading animation while waiting
  // for this request chain to come back. The double requests on the
  // address search are a little laggy.

  home.findLegislators = function(address) {
    if (address.street === "" && address.city === "" && address.state === "") {
      SCAPIService.findLegislatorsByZip(address.zip).then(function(res) {
        home.results = res.data.results;
        console.log(home.results);
      })
    } else {
      GoogleMapsService.geocodeAddress(address).then(function(res) {
        var data = res.data;
        SCAPIService.findLegislatorsByLatLong(data).then(function(res) {
          home.results = res.data.results;
          console.log(home.results);
        })
      });
    }
  }
}

HomeController.$inject = ['SCAPIService', 'GoogleMapsService'];

angular
  .module('legislately')
  .controller('HomeController', HomeController);
