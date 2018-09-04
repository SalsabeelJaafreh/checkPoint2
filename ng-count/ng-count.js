
var count=angular.module('count', []);

count.factory('UserService', function() {
  return {
      number: ''
  };
});

count.controller('countCtrl',function($scope,UserService){

$scope.number = 0;

})


count.controller('incrCtrl',function($scope,UserService){
// $scope.number = 0;
     
   
});

count.controller('decrCtrl',function($scope,UserService){
        $scope.decrement = function() {
            $scope.number--;
        };
});



