 
app.controller('admincontroller', function($scope,$http ,$rootScope) {
    $http.get("http://localhost:3000/products").then(
        function (res) {
            $scope.products=res.data;
            console.log($scope.products);
        }

    )
$scope.loadData=function(){
$http.get("http://localhost:3000/products").then(
        function (res) {
            $scope.products=res.data;
        }
    )
}

$scope.delete=function(pro) {
    $http.delete("http://localhost:3000/products/"+pro.id).then(
        function (res) {
            alert('Xóa sản phẩm thành công');
            $scope.loadData();
        }
    )
}
$scope.addpr=function () {
    $scope.data={
        id:$scope.products.length+1,
        name_product:$scope.name_product,
        brand:$scope.brand
    }
    $http.post("http://localhost:3000/products",$scope.data).then(
        function(res) {
            alert('Thành công');
        },
        function(err) {
            alert('lỗi');
        }
    )

}
});


  
