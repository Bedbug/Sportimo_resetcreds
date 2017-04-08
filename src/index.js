var app = angular
  .module('app', [
    'ui.router',
    'app.reset'
  ]);

app.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

angular
  .module('app.reset', []);

angular
  .module('app')
  .controller('resetController', resetController);

function resetController($state, $scope, $stateParams, $http) {

  $scope.utoken = $stateParams.utoken;

  $scope.submitNewPassword = function () {
    console.log($scope.password);
    $http.post('http://sportimo.mod.bz/v1/users/'+ $scope.utoken+'/password/reset',{token: $scope.utoken, password:$scope.password}).then(function(success){
        $state.go('success');
    },
    function(error){

    })
  }

  $http.get('http://sportimo.mod.bz/v1/users/' + $scope.utoken + '/token')
    .then(function (success) {
      console.log(success.data);
      if (success.data == null)
        return $state.go('app');
      $scope.user = success.data;
    },
    function (error) {
      console.log(error);
    });
}
