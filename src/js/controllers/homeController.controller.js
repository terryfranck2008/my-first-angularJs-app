myAppModule.controller("homeController",function($scope, $location, dateTime, MyBookService, $log, $rootScope){
    $scope.message = "welcome to my  HOME PAGE!";
    $scope.data = dateTime.getDate();
    $scope.greeting = dateTime.greet;
    $scope.users = [];
    
    MyBookService.getAllUsers().then(function(response){
        console.log(response);
        $scope.users = response.data;
    }, function(error){
        console.error(error);
    });

    MyBookService.getBooks().then(function (response) {
        $scope.books = response.data.slice(0,5);

        $scope.books.forEach(function(book){
            book.disabled = false;
        });

        $log.info('getting books succeeded', $scope.books);
        
    }, function (error) {
        console.log(error);
    });

    $scope.wishList = [];
    $scope.wishListCount = 0;

    $scope.addToWishList = function(book){
        $scope.wishList.push(book.title);
        $scope.wishListCount++;
    };

    $scope.$watch('wishListCount', function(newValue, oldValue){
        if(newValue == 2){
            alert('Great! You have 2 items in your wishing list.');
        }
    });

    $scope.showMessage = function(){
        alert('Message changed!');
    }
    
    $scope.like = function(book){
        book.disabled = true;
        $rootScope.$broadcast('incrementaNotifiche',book.title);

    }

    $scope.$on("abilitaBynLike", function(evento,bookTitle){

        var bookIndex = $scope.books.findIndex(function(book){
            return book.title === bookTitle;
        });

        if(bookIndex !== -1){
            $scope.books[bookIndex].disabled = false;
        }
        
    })

});