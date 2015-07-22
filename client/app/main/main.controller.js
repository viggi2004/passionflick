'use strict';

angular.module('passionApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.model = {
      category : "Category", 
      val1 : "Zero",
      val2 : "One",
      val3 : "Two"
    };
    $http.get('/api/search/locations').success(function(data){
    	console.log(data);
    });
        
    
    
  });
