function ShowController(legislator) {
  this.data = legislator;
  function show(legislator) {
    console.log(legislator);
  }

  show(legislator);
}

angular
  .module('legislately')
  .controller('ShowController', ShowController)
