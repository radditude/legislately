angular
  .module('legislately')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as home'
      })
      .state('coming-soon', {
        url: '/coming-soon',
        templateUrl: 'views/coming-soon.html',
        controller: 'ComingSoonController as soon',
        resolve: {
          comingSoon: function(SCAPIService) {
            return SCAPIService.getComingSoon();
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  })
