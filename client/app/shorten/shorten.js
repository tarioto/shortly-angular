angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  $scope.message;

  $scope.isValid = function() {
    if ($scope.link.url === 'http://') {
      $scope.message = '';
    } else if ($scope.link.url === '') {
      $scope.message = 'enter URL';
    } else {
      $scope.message = 'not valid URL';
    }
  };
  $scope.addLink = function(link) {
    Links.addOne(link);
  };
});
