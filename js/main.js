app.controller("mainctrl", function($scope,$rootScope) {
    if(localStorage.getItem('cart')){
        $rootScope.cart=JSON.parse(localStorage.getItem('cart'));
    }else{
        $rootScope.cart=[]; 
    }
    if(localStorage.getItem('user')){
        $rootScope.user=JSON.parse(localStorage.getItem('user'));
    }
    $scope.logout=function () {
        localStorage.removeItem('user');
        delete $rootScope.user;

    }
}); 

