(function() {
	var app = angular.module('ApiTest', []);

	app.controller('mainController', function ($scope, $http){
		$scope.title = 'API Testing';
		$http.get('http://ec2-52-67-37-48.sa-east-1.compute.amazonaws.com/api').
        success(function(data) {
            $scope.data = data;
            console.log(data);
        });
	});
})();
