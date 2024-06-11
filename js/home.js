app.controller("homeController", function ($scope,$rootScope, $http) {
    $scope.products = [];

    $scope.loadData = function() {
        $http.get("http://localhost:3000/products")
            .then(function(response) {
                $scope.products = response.data;
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });
    }

    $scope.loadData(); 
    // $rootScope.cart=[];
    $scope.add=function(pro) {
      var checkid=$rootScope.cart.find(function(e) {
        return e.id===pro.id
      })
      if(checkid){
        alert("Sản phẩm đã tồn tại trong giỏ hàng")
      }else{
        alert("Mua phim thành công");
        pro.quantity=1;
        $rootScope.cart.push(pro);
        localStorage.setItem('cart',JSON.stringify($rootScope.cart));
      }
    }
});
