myAppModule.controller("contactController",function($scope){
    $scope.message = "contact us!";
    var person = {};
    person.channels = [
        { value: 'televisione', label: 'Televisione' },
        { value: 'radio', label: 'Radio' },
        { value: 'social-media', label: 'Social Media' },
        { value: 'other', label: 'Other' }
    ];
    person.newsLetter = false;
    person.register = function () {
        $scope.firstNameInvalid = false;
        $scope.lastNameInvalid = false;
        $scope.doShow = false;
        if (!$scope.registrationForm.firstName.$valid) {
            $scope.firstNameInvalid = true;
        }
        if (!$scope.registrationForm.lastName.$valid) {
            $scope.lastNameInvalid = true;
        }
        if (!$scope.registrationForm.email.$valid) {
            $scope.emailInvalid = true;
        }

        if (!$scope.registrationForm.channels.$valid) {
            $scope.researchInvalid = true;
        }

        if ($scope.registrationForm.$valid) {

            $scope.doShow = true;
        }


    };

    $scope.person = angular.copy(person);
})