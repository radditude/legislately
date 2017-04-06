(function() {
  'use strict'

  function VotesComponent() {
      return {
        templateUrl: 'views/votes.html',
        scope: {
          votes: '=',
          following: '='
        }
      }
  }

  angular
    .module('legislately')
    .directive('votesComponent', VotesComponent);
}());
