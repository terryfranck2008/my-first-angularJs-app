myAppModule.controller("aboutController", function ($scope, countriesServices, $q) {
    $scope.message = "Find out more about me";

    var showCountries = function () {
        return countriesServices.listaTuttiPaesi();

    }
    var listaPaesi = [];

    showCountries().then(function (result) {
        listaPaesi = result.data;
        console.log(result);
        if (result.status === 200) {
            return $q.when(result.config);
        }
    }).then(function (config) {
        console.log('Risultato della $q.when(result.config) ', config);
    })
        .catch(function (error) {
            console.log('è successo un errore ', error);
        });

    // var utenti = [{ name: 'chanelle', eta: 29 }, { name: 'franck', eta: 30 }];


    // function asyncGreet(name) {

    //     return $q(function (resolve, reject) {

    //         setTimeout(function () {
    //             if (name && name[0] == 'f') {
    //                 resolve(utenti);
    //             } else if (name === undefined) {
    //                 reject({ error: '250', message: 'Il nome non è definito' });
    //             } else if (name !== null && name[0] !== 'f') {
    //                 reject({ error: '260', message: 'La prima lettera del nome ' + name + ' non è quella attesa' });
    //             } else {
    //                 reject({ error: '270', message: 'Il valore ' + name + ' non è accettato' });
    //             }

    //         }, 5000);
    //     });
    // }

    function asyncGreet(name) {

        var defered = $q.defer();
        defered.notify('Creazione della promise...');
        setTimeout(function () {
            defered.notify('Inizio operazione asincrona');
            if (name && name[0] == 'f') {
                defered.notify('valori ottenuti, fra poco disponibile nella promise');
                defered.resolve(utenti);
            } else if (name === undefined) {
                defered.reject({ error: '250', message: 'Il nome non è definito' });
            } else if (name !== null && name[0] !== 'f') {
                defered.reject({ error: '260', message: 'La prima lettera del nome ' + name + ' non è quella attesa' });
            } else {
                defered.reject({ error: '270', message: 'Il valore ' + name + ' non è accettato' });
            }

        }, 5000);

        return defered.promise;

    }

    // function error() { };

    // asyncGreet('fff')
    //     .then(function (utenti) {
    //         console.log('SUCCESSO con => fff')
    //         return asyncGreet(utenti[1].name);
    //     }, error(), function notify(value) {
    //         console.log(value);
    //     })
    //     .then(function (utenti) {
    //         console.log('SUCCESSO con => ' + utenti[1].name)
    //         return asyncGreet(utenti[0].name);
    //     })
    //     .then(function (utenti) {
    //         console.log('SUCCESSO con => ' + utenti[0].name)
    //         console.log(utenti);
    //     })
    //     .catch(function (error) {
    //         console.log('è successo un errore: ', error);
    //         return asyncGreet('fabio');
    //     })
    //     .then(function (utenti) {
    //         console.log('SUCCESSO con => ' + 'fabio');
    //         console.log(utenti);
    //         return $q.when(utenti);
    //     })
    //     .then(function(result){
    //         console.log('Risultato della $q.when(utenti)' , result);
    //     });


})