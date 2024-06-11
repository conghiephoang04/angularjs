app.controller("loginController", function ($scope,$http,$rootScope,$location) {
    $scope.logindata={};
       $scope.login=function() {
            $http.get(`http://localhost:3000/users?email=${$scope.logindata.email}&password=${$scope.logindata.password}`).then(
                function (ress) {
                    if(ress.data.length==1){
                        $rootScope.user=ress.data[0];
                        localStorage.setItem('user',JSON.stringify($rootScope.user));
                        alert('Đăng nhập thành công');
                        $location.path('/');
                    }else{
                        alert('sai mật khẩu')
                    }
                }
            )
       }
})