myAppModule.controller("ControllerServices", function ($scope, $window, $location, $document, dateTimeFactory, dateTimeService, MyBookService) {
    $scope.winWidth = $window.innerWidth;
    $scope.url = $location.absUrl();
    $scope.protocol = $location.protocol();
    $scope.host = $location.host();
    $scope.port = $location.port();
    $scope.docTilte = $document[0].title;

    $scope.theDateFactory = dateTimeFactory.getDate();
    $scope.theTimeFactory = dateTimeFactory.getTime();
    $scope.theDateService = dateTimeService.getDate();
    $scope.theTimeService = dateTimeService.getTime();

    MyBookService.getBooks().then(function (response) {
        $scope.books = response.data.slice(0,5);
        console.log(response.data);
    }, function (error) {
        console.log(error);
    });
});

