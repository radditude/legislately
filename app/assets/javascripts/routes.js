angular
  .module('legislately')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeController as home'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthController as auth',
        onEnter: function(Auth, $state) {
          Auth.currentUser().then(function() {
            $state.go('home');
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthController as auth',
        onEnter: function(Auth, $state) {
          Auth.currentUser().then(function() {
            $state.go('home')
          })
        }
      })
      .state('show', {
        url: '/legislators/:id',
        templateUrl: 'views/show.html',
        controller: 'ShowController as show',
        resolve: {
          info: function(SCAPIService, $stateParams) {
            return SCAPIService.getLegislatorById($stateParams.id);
          },
          votes: function(SCAPIService, $stateParams) {
            return SCAPIService.getVotesByLegislator($stateParams.id, 1);
          }
        }
      })
      .state('show.info', {
        url: '/info',
        templateUrl: 'views/show.info.html',
        controller: 'ShowController as show'
      })
      .state('show.activity', {
        url: '/activity',
        templateUrl: 'views/show.activity.html',
        controller: 'ShowController as show'
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
