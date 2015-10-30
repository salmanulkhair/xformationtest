var projectsControllers = angular.module('projectsControllers', []);

projectsControllers.controller('ReposController', ['$scope', '$http', function($scope, $http) {
  $http.get('https://api.github.com/orgs/x-formation/repos').success(function(data) {
    $scope.repos = data;
    $scope.reposOrder = 'forks_count';
      
      $scope.fields = [{title:'Repository',data:'full_name'},{title:'Forks',data:'forks_count'} ];
      /*$scope.fields = ['full_name', 'forks_count'];*/

        $scope.sort = function (field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'forks_count';
        $scope.sort.order = true;
  });
}]);

projectsControllers.controller('ContributorsController', ['$scope', '$http', function($scope, $http) {
  $http.get('data/contributors.json').success(function(data) {
    $scope.contributions = data;
    $scope.contributionsOrder = 'contributions';
      $scope.fields = [{title:'Name',data:'nickname'},{title:'Team',data:'team'},{title:'Contributions',data:'contributions'}];
      /*$scope.fields = ['nickname', 'team' ,'contributions'];*/

        $scope.sort = function (field) {
            $scope.sort.field = field;
            $scope.sort.order = !$scope.sort.order;
        };

        $scope.sort.field = 'contributions';
        $scope.sort.order = true;
  });
}]);



