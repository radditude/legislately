(function() {
  'use strict'

  var VotesComponent = {
      templateUrl: 'views/votes.html',
      bindings: {
        votes: '@'
      }
  }

  angular
    .module('legislately')
    .component('votesComponent', VotesComponent);
}());
