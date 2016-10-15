angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  if (Auth.isAuth()) {
    $scope.addLink = function(link) {
      Links.addOne(link); 
    };
  } else {
    $location.path('/signin');
  }
});
