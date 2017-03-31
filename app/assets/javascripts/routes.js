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
            $state.go('newsfeed');
          })
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'AuthController as auth',
        onEnter: function(Auth, $state) {
          Auth.currentUser().then(function() {
            $state.go('newsfeed')
          })
        }
      })
      .state('newsfeed', {
        url: '/feed',
        templateUrl: 'views/newsfeed.html',
        controller: 'NewsfeedController as feed',
        resolve: {
          following: function(UserFactory) {
            return UserFactory.following();
          }
        }
      })
      .state('show', {
        url: '/legislators/:id',
        templateUrl: 'views/show.html',
        controller: 'ShowController as show',
        resolve: {
          info: function(LegislatorFactory, $stateParams) {
            return LegislatorFactory.info($stateParams.id);
          },
          votes: function(LegislatorFactory, $stateParams) {
            return LegislatorFactory.votes($stateParams.id);
          }
        }
      })
      .state('show.info', {
        url: '/info',
        templateUrl: 'views/show.info.html'
      })
      .state('show.activity', {
        url: '/activity',
        templateUrl: 'views/show.activity.html'
      })
      .state('coming-soon', {
        url: '/coming-soon',
        templateUrl: 'views/coming-soon.html',
        controller: 'ComingSoonController as soon',
        resolve: {
          comingSoon: function(SCAPIFactory) {
            return SCAPIFactory.getComingSoon();
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  })
