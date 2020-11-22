'use strict';
const { Subject } = require('rxjs');
const { range, Observable } = require('rxjs');
const { map, filter } = require('rxjs/operators');

const myObservable = new Observable(observer => {
    setInterval(()=>{
        observer.next('Ciao ...');
    }, 2000);
});

const observer = {
    next: value => console.log('Observer got the next value:' + value),
    error: error => console.log('Observer got an erro:r' + error),
    complete:() => console.log('Observer got a complete notification'),
  };

// let sub = myObservable.subscribe(observer);
// setTimeout(()=>{
//     sub.unsubscribe();
// },8000);

const mySubject = new Subject();
//every subject is an observable and an observer
mySubject.subscribe({
    next: (value) => console.log('First observer:' + value)
});

mySubject.subscribe({
    next: (value) => console.log('Second observer:' + value)
});

mySubject.next('Hello');
mySubject.next('Bye');

// const hello = Observable.create(function(observer){
//     observer.next(2);
//     observer.next(3);
//     observer.complete();
// });

// const evenNumbers = Observable.create(function(observer) {
//     let value = 0;
//     const interval = setInterval(() => {
//       if (value % 2 === 0) {
//         observer.next(value);
//       }
//       value++;
//     }, 1000);
  
//     return () => clearInterval(interval);
//   });
// console.log(evenNumbers);
// const subscribe = evenNumbers.subscribe(function(val){
//     console.log(val);
// });

// setTimeout(() => {
//     subscribe.unsubscribe();
//   }, 10000);

// function Car(color, steering) {
//     this.color = color;
//     this.steering = steering;
// }

// Car.prototype.year = 2011;
// Car.prototype.data = {};

// var car = new Car('red', 'left');
// car.data.engine = 'rear';

// var ferrari = Object.create(car);
// console.log(ferrari);


//  function sum(...params) {
//      let somma = 0;
//      for(let e of params){
//          somma += e;
//      }
//      return somma;
//  }
// var numbers = [1,2,6,7];

//  var somma = sum(...numbers);
//  console.log(somma);

// let maFonction = function(msg){
//     return msg;   
// }
// console.log(maFonction("bonjour"));

// var fr = maFonction("bonjour");

// var eng = maFonction("hello");

// var text = "ciao in francese si dice " + fr + " e in inglese " + eng;

// console.log(text);

//$(".date-picker").datepicker();
//  $( function() {
//     $( ".date-picker" ).datepicker();
//   } );
//console.log(a);
var utenti = [{ name: 'chanelle', eta: 29 }, { name: 'franck', eta: 30 }];


function asyncGreet(name) {

    var promesse =  new Promise(function (resolve, reject) {

        setTimeout(function () {
            if (name  && name[0] == 'f') {
                resolve(utenti);
            } else if(name === undefined){
                reject({error:'250', message:'Il nome non è definito'});
            }else if(name!== null  && name[0] !== 'f'){
                reject({error:'260', message:'La prima lettera del nome ' +name + ' non è quella attesa'});
            }else{
                reject({error:'270', message: 'Il valore ' + name + ' non è accettato'});
            }

        }, 5000);
    });
    return promesse;
}

// asyncGreet('fff')
// .then(function (utenti) {
//     console.log('SUCCESSO con => fff')
//     return asyncGreet(utenti[1].name);
// })
// .then(function(utenti){
//     console.log('SUCCESSO con => ' + utenti[1].name)
//     return asyncGreet(utenti[0].name);
// })
// .then(function(utenti){
//     console.log('SUCCESSO con => ' + utenti[0].name)
//     console.log(utenti);
// })
// .catch(function (error) {
//     console.log('è successo un errore: ', error);
//     return asyncGreet('fabio');
// })
// .then(function(utenti){
//     console.log('SUCCESSO con => ' + 'fabio');
//     console.log(utenti);
// });

// Promise.all([asyncGreet('ff'), asyncGreet('franck'), asyncGreet('fee')])
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });

// console.log(asyncGreet('Franck'));
// asyncGreet('Franck').then(function(response){
//     console.log(response);
// }, function(error){
//     console.log(error);
// })