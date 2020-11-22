myAppModule.directive('colorList', function () {
    return {
        restrict: 'AE',
        scope: {
            colors: '='
        },
        template:
            " <button class='btn btn-primary' ng-click='showHideColors()' type='button'>"
            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}} </button>"
            + "<div ng-hide = 'isHidden' id = 'colorContainer' class='container'></div>",

        link: function (scope, element) {
            scope.isHidden = true;
            scope.showHideColors = function () {
                scope.isHidden = !scope.isHidden;
            };

            // DOM manipulation    
            var colorContainer = element.find('div'); 

            angular.forEach(scope.colors, function (color) { 
                var appendString = "<div class='colorContainer' style='background-color:" + color + "'>" + color + "</div>"; 
                colorContainer.append(appendString); 
            });
        },

    };
});