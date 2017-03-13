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
          legislator: function(SCAPIService, $stateParams) {
            return SCAPIService.getLegislatorById($stateParams.id);
          }
        }
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
