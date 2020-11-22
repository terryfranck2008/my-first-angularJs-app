myAppModule.factory("dateTimeFactory", function () {

    // var dateTimeSvc = {};
    // dateTimeSvc.getDate = function(){
    //     return new Date().toDateString();
    // }
    // dateTimeSvc.getTime = function(){
    //     return new Date().toTimeString();
    // }
    function ciao(params) {
        console.log('Buongiorno ' + params);
    }

    return {
        nome: 'Chanelle',
        sayCiao: ciao(nome),
        getDate: function () {
            return new Date().toDateString();
        },
        getTime: function () {
            return new Date().toTimeString();
        }

    };
});

myAppModule.service("dateTimeService", function () {
    this.getDate = function(){
        return new Date().toDateString();
    };

    this.getTime = function(){
        return new Date().toTimeString();
    };
});