/*global angular*/
(function () {
    'use strict';
    angular.module('mainApp').config(function ($routeProvider) {
        $routeProvider
			.when('/tasks', {
				templateUrl: 'js/views/task-view.html',
				controller: 'taskListCtrl'
		   		})
		   		.otherwise('/', {
			   	templateUrl: 'js/views/home.html',
			   	controller: 'homeCtrl'
		   		})
    });
    
}());


(function () {
    'use strict';
    angular.module('mainApp').controller('taskListCtrl', function ($scope, $http, $log) {
        
		$http({
			url: '/users',
			method: 'GET'})
			.then(function successCallback(data) {
				$scope.userList = data;	
				//$log.log($scope.userList);
			}, function errorCallback (err) {
					$log.error(err);
			});	
		
		
		$http({ 
			url:'/tasks',
			method:'GET'})
            .then(function successCallback(data) {
                $scope.taskList = data;
				//$log.log($scope.taskList);
            }, 	function errorCallback(err) {
                $log.error(err);
            });		
	
        $scope.onSubmitForm = function(form) { 
                        $http({
                            url: '/tasks',
                            method: 'POST',
                            data: $scope.formFields
                        })
                        .then(function successCallback(data) {
                            //console.log('added - ' + data);
                        }, function errorCallback(err) {
                            $log.error(err);
                        });

        }
		
		$scope.getHeader = function () {
			//console.log($scope.taskList.data[0]);
			var keysArr = [];
			var arr = _.keys($scope.taskList.data[0]);			
			arr.forEach(function(key){
				if(key !== '$$hashKey' && key !== '__v'){  //ignore the mongodb generated object names
					//console.log(key);
					keysArr.push(key);
				}
			});
			//console.log(keysArr);
			return keysArr;
	}
    
    });
	

    
}());