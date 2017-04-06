(function() {
  'use strict'

  function VotesList() {
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
    .directive('votesList', VotesList);
}());
