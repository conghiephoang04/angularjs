app.controller("phimController", function ($scope, $http) {
    $scope.products = [];
    $scope.filteredProducts = [];

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
  $scope.filterByBrand=function () {
      if($scope.select!=""){
        $http.get(`http://localhost:3000/products?brand=${$scope.select}`).then(
            function (res) {
                $scope.products=res.data;                
            }
       )
      }else{
        $http.get("http://localhost:3000/products")
            .then(function(response) {
                $scope.products = response.data;
            })
            .catch(function(error) {
                console.error('Error fetching data:', error);
            });
      }
  }
  $scope.begin=0;
  $scope.pageCount= Math.ceil($scope.products.length)
  $scope.first= function(){
    $scope.begin=0;
  }
  $scope.prev= function(){
    if($scope.begin>0){
        $scope.begin-=8;
    }
  }
  $scope.next=function(){
    if($scope.begin<($scope.pageCount-1)*8){
        $scope.begin+=8;
    }
  }
  $scope.last = function(){
    $scope.begin=($scope.pageCount -1)*8;
  }
});
    