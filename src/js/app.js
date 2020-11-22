var myAppModule = angular.module("myAppModule", ['ui.router']);
// myAppModule.run(function($state){
//     $state.go('main');
// });

myAppModule.filter('splitareAllaVirgola', function () {
    return function (testo) {
        return testo.split(",").join('+');
    };
});

myAppModule.controller('myFilterCtrl', function ($scope) {
    $scope.frase = 'ciao,io sono chanelle,arrivederci';

    $scope.toTitleCase = function (nome) {
        // var nomi = nome.split(' ');
        // var nomeCompleto = '';

        // nomi.forEach(function(name){

        //     nomeCompleto += name.charAt(0).toUpperCase() + name.substr(1).toLowerCase() + ' ';
        // });

        // return nomeCompleto;
        if (nome.split(' ').length > 1) {
            return nome.split(' ').map(function (name) {
                return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
            }).join(' ');
        } else {
            return nome.charAt(0).toUpperCase() + nome.substr(1).toLowerCase();
        }

    }
});

myAppModule.controller('myProductDetailCtrl', function ($scope) {

    // $scope.isHidden = true;
    // $scope.showHideColors = function () {
    //     $scope.isHidden = !$scope.isHidden;
    // }
    $scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive'];
    $scope.colorsArray1 = ['pink', 'black', 'cyan', 'grey', 'olive'];
});

myAppModule.provider('dateTime', function () {
    this.greeting = 'Ciao';

    this.$get = function () {
        return {

            greet: this.greeting,

            getDate: function () {
                return new Date().toDateString();
            },

            getTime: function () {
                return new Date().toTimeString();
            }
        };
    };

    this.setGreeting = function (greeting) {
        this.greeting = greeting;
    };
});

myAppModule.config(function(dateTimeProvider){
    dateTimeProvider.setGreeting("bonjour");
});

myAppModule.constant("URL_BOOK","https://jsonplaceholder.typicode.com/todos");