myAppModule.controller("notFoundController", function ($scope, $location, $state) {
    $scope.message = 'There seems to be a problem finding the page you wanted';
    $scope.goHome = function () {
        $state.go('main');
    };
    $scope.attemptedPath = $location.path();
})