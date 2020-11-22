myAppModule.directive("navBar", function ($rootScope) {
    return {
        restrict: "EA",
        templateUrl: "views/nav-bar.html",

        controller: function ($scope) {

            $scope.notification = 0;
            $scope.books = [];


            $scope.playAudio = function () {
                var audio = new Audio('audio/swiftly.mp3');
                audio.play();
            }

            $scope.$on('incrementaNotifiche', function (evento, book) {
                $scope.notification++;
                $scope.playAudio();
                console.log(evento);
                $scope.books.push(book);
                console.log($scope.books);
            });

            $scope.displayAlert = function () {
                if ($scope.books.length === 0) {
                    alert('Non ci sono libri che ti piacciono');
                } else {

                    alert($scope.books);
                }
            }

            $scope.removeElt = function (index, book) {
                $scope.books.splice(index, 1);
                $scope.notification--;
                $rootScope.$broadcast("abilitaBynLike", book);
                console.log(index + " = " + book);

            }

        }
    }
})