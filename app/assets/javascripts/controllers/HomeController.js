(function(){
  'use strict'

  function HomeController(LegislatorFactory) {
    var home = this;
    // search params
    home.address;

    // results
    home.loading = false;
    home.error = false;
    home.results;

    // TODO: figure out how to display a loading animation while waiting
    // for this request chain to come back. The double requests on the
    // address search are a little laggy.

    home.findLegislators = function(address) {
      home.error = false;
      home.results = "";
      home.loading = true;

      LegislatorFactory.findAddress(address).then(function(res) {
        var data = res.data;
        console.log(data)
        home.loading = false;
        home.results = data;
      }).catch(function(res) {
        home.loading = false;
        home.error = true;
      });
    }
  }

  HomeController.$inject = ['LegislatorFactory'];

  angular
    .module('legislately')
    .controller('HomeController', HomeController);

}());
