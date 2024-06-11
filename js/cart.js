app.controller("cartController", function($scope,$rootScope) {
  
        $scope.tinhtong=function() {
            let tong=0;
            if($rootScope.cart){
                $rootScope.cart.forEach(element => {
                    tong+=element.price_product*element.quantity;
                });
                return tong;
            }          
        
    }
    $scope.removeall=function () {
        $rootScope.cart=[];
        localStorage.setItem('cart',JSON.stringify($rootScope.cart));
        alert("Xóa thành coong")
    }
    $scope.remove=function(index) {
        $rootScope.cart.splice(index,1);
        alert('Xóa sản phẩm thành công');
        localStorage.setItem('cart',JSON.stringify($rootScope.cart));
    }
});