(function(){
  'use strict'

  angular
    .module('legislately')
    .directive('navBar', function NavBar(){
      return {
        templateUrl: 'views/nav.html',
        controller: 'NavController'
      }
    });

}());
