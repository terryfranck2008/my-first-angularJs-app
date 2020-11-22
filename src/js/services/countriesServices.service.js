myAppModule.service("countriesServices", function($http,COUNTRIES_URL, $q){

    this.listaTuttiPaesi = function(){
        var paesiPromise = $q.defer();

        setTimeout(function(){

            $http.get(COUNTRIES_URL.all).then(function(result){
                paesiPromise.resolve(result);
            }).catch(function(error){
                paesiPromise.reject(error);
            });
        }, 10000);

        return paesiPromise.promise;
    }

});