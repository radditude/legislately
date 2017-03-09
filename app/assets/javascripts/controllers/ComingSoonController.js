function ComingSoonController(comingSoon) {
  var soon = this;
  soon.bills = comingSoon.data.results;
  console.log(soon.bills);
}

ComingSoonController.$inject = ['comingSoon'];

angular
  .module('legislately')
  .controller('ComingSoonController', ComingSoonController);
