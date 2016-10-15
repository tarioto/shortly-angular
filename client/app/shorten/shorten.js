angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    Links.addOne(link);
  };
});
