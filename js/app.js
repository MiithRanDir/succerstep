var app = angular.module("soccer", []);

app.controller("ctrl", [
  "$scope",
  "$filter",
  function($scope, $filter) {
    $scope.list = [];
    $scope.step = 3;
    $scope.team = {};
    $scope.result = {};

    $scope.set_tab_step = function(st) {
      $scope.step = st;
    };

    $scope.gen_step_3 = function() {
      $scope.is_show = true;
      var t = angular.copy($scope.team);
      $scope.result.step = [
        [$scope.team.a, $scope.team.b, $scope.team.c],
        [$scope.team.a, $scope.team.b, $scope.team.d],
        [$scope.team.b, $scope.team.c, $scope.team.d],
        [$scope.team.c, $scope.team.a, $scope.team.d],
        [$scope.team.c, $scope.team.d, $scope.team.b]
      ];
    };

    $scope.set_clear = function() {
      $scope.result.team.step = [];
    };

    $scope.gen_step_4 = function() {
      $scope.result.step = [
        [$scope.team.a, $scope.team.b, $scope.team.d, $scope.team.e],
        [$scope.team.a, $scope.team.b, $scope.team.d, $scope.team.f],
        [$scope.team.a, $scope.team.b, $scope.team.e, $scope.team.f],
        [$scope.team.a, $scope.team.c, $scope.team.d, $scope.team.e],
        [$scope.team.a, $scope.team.c, $scope.team.d, $scope.team.f],
        [$scope.team.a, $scope.team.c, $scope.team.e, $scope.team.f],
        [$scope.team.b, $scope.team.c, $scope.team.d, $scope.team.e],
        [$scope.team.b, $scope.team.c, $scope.team.d, $scope.team.f],
        [$scope.team.b, $scope.team.c, $scope.team.e, $scope.team.f]
      ];
    };
  }
]);
