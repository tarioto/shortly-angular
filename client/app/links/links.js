angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location, Auth) {
  // Your code here
  $scope.data = {};

  if (Auth.isAuth()) {
    Links.getAll().then(function(resp) {
      $scope.data.links = resp;
    });
  } else {
    $location.path('/signin');
  }
});
