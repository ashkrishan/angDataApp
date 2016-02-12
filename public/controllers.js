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
        
        $http.get('/gettasks')
            .success(function (data) {
                $scope.taskList = data;
            })
            .error(function (err) {
                $log.error(err);
            });
    
        $scope.onSubmitForm = function(form) { 
                        $http({
                            url: '/addtask',
                            method: 'POST',
                            data: $scope.formFields
                        })
                        .success(function (data) {
                            console.log('added - ' + data);
                        })
                        .error(function (err) {
                            $log.error(err);
                        });

        }
    });
    
    
}());