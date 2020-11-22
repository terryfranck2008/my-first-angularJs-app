myAppModule.service("MyBookService", function($http, URL_BOOK, baseUrl){
    
 

    this.getBooks = function(){
        var promise = $http.get(URL_BOOK);
        return  promise;
    };

    this.getAllUsers = function(){
        return $http.get(baseUrl+'/users');
    }
});