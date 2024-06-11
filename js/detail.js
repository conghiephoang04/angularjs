app.controller("detailController", function ($scope, $routeParams, $http) { 
    // Lấy id sản phẩm từ URL
    var productId = $routeParams.id;

    // Gửi yêu cầu để lấy chi tiết sản phẩm từ API
    $http.get('http://localhost:3000/products/' + productId)
        .then(function(response) {
            // Gán dữ liệu chi tiết sản phẩm vào $scope.detail
            $scope.detail = response.data;
            console.log($scope.detail);
        })
        .catch(function(error) {
            console.error('Lỗi khi lấy chi tiết sản phẩm:', error);
        });
});
