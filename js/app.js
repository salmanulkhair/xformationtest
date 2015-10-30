var myApp = angular.module('myApp', [
  'ngRoute',
  'projectsControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
   when('/repos', {
    templateUrl: 'partials/repos.html',
    controller: 'ReposController'
  }).
     when('/contributors', {
    templateUrl: 'partials/contributors.html',
    controller: 'ContributorsController'
  }).

  otherwise({
    redirectTo: '/repos'
  });
   
}]);