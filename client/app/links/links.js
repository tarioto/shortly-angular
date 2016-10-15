angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location, Auth) {
  // Your code here
  $scope.data = {};

  Links.getAll().then(function(resp) {
    $scope.data.links = resp;
  });
});
