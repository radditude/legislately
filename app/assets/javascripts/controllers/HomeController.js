function HomeController(SCAPIService) {
  var home = this;
  // search params
  home.zip = "";

  // results
  home.results;

  home.findLegislators = function(zip) {
    SCAPIService.findLegislatorsByZip(zip).then(function(res) {
      home.results = res.data.results;
      console.log(home.results);
    })
  }
}

HomeController.$inject = ['SCAPIService'];

angular
  .module('legislately')
  .controller('HomeController', HomeController);
