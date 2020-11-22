myAppModule.service("UserService", function($scope, $http, baseUrl){

    this.getAllUsers = function(){
        return $http.get(baseUrl+'/users');
    }
});