/*global angular*/
(function () {
    'use strict';
    angular.module('mainApp')
        .config({ 
            templateUrl: 'views/user-view.html',
            controller: 'userList'
        
    });
    
}());


(function () {
    'use strict';
    angular.module('mainApp').controller('userList', function ($scope, $http, $log) {
        
        $http.get('/getuser')
            .success(function (data) {
                $scope.userList = data;
            })
            .error(function (err) {
                $log(err);
            });
    });
    
}());