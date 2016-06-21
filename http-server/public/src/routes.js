angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<div style="text-align:center; padding:10px 100px"><h3>Your token is wrong. Please click again the link you received in your email or request a new reset email from inside your client.</h3><div>'
    })
    .state('reset', {
      url: '/reset/:utoken',
      templateUrl: 'app/reset.html',
     controller: 'resetController'
    })
    .state('success', {
      url: '/success',
      templateUrl: 'app/success.html'
    });
}
