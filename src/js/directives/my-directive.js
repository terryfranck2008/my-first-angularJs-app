myAppModule.directive('helloWorld', function($rootScope){
    return {
        restrict: 'AE',
        scope: {
            message:'=messageAttr',
            showMessage:'&showMessageAttr'
        },
        template: '<p ng-click="clearMessage()">Hello, World! {{message}}</p>',
        replace: true,
        link: function(scope, el, attrs){
            
            scope.$watch('message', function(newValue, oldValue){
                if(newValue !== oldValue){

                    // console.log('Message Changed!');
                    scope.$emit('changed', 'Ciao');
                    scope.showMessage();
                }
            });

            scope.clearMessage = function(){
                scope.message = '';
            };

            el.bind('mouseover', function(){
                el.css('cursor','pointer');
            });
            console.log(attrs);
        }

    }
});

myAppModule.directive('ciao', function(){
    return {
        restrict: 'E',
        scope:{},
        replace: true,
        template:'<div ng-if="message">Value: {{message}}</div>',

        controller: function($scope, $rootScope){
            $scope.message = 'Chanelle';
            this.bonjour = function(arg){
                console.log('Bonjour, ' + arg);
            };

            $rootScope.$on('changed', function(event, value){
                $scope.message = value;
                console.log('Ricevuto: ' + $scope.message);
            });

        }
    }
});

myAppModule.directive('hello', function($rootScope){
    return {
        restrict: 'E',
        scope:{},
        replace: true,
        require:'^ciao',

        link: function(scope, elem, attrs, ciaoCtrl){

            ciaoCtrl.bonjour('helloDirective');
        }
    }
});

myAppModule.directive('timer', function($interval){
    return {
        restrict: 'A',
        scope: {},
        replace: true,
        template: '<p> {{contatore}} secondi.</p>',
        link: function(scope){
            scope.contatore = 0;

            var timer = $interval(function(){
                scope.contatore++;
                console.log('Ciao Mondo !, ' , scope.contatore);
            }, 1000);

            scope.$on('$destroy', function(){
                $interval.cancel(timer);
                console.log('Direttiva timer distrutta');
            });
        }
    }
})