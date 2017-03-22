function HomeController(SCAPIService, GoogleCivicAPIService) {
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
      GoogleCivicAPIService.findAddress(address).then(function(res) {
        var data = res.data;
        console.log(data)
        home.results = data;
      });
  }
}

HomeController.$inject = ['SCAPIService', 'GoogleCivicAPIService'];

angular
  .module('legislately')
  .controller('HomeController', HomeController);
