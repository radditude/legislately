(function() {
  'use strict'

  function VotesList() {
      return {
        templateUrl: 'views/votes.html',
        scope: {
          votes: '=',
          names: '=',
          search: '='
        }
      }
  }

  angular
    .module('legislately')
    .directive('votesList', VotesList);
}());
