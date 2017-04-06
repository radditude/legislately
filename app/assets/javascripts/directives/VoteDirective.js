(function() {
  'use strict'

  function Vote() {
      return {
        replace: true,
        templateUrl: 'views/vote.html',
        scope: {
          data: '=',
          name: '='
        }
      }
  }

  angular
    .module('legislately')
    .directive('vote', Vote);
}());
