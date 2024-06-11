app.controller("formController", function ($scope) {
    $scope.country=['việt nam','thái lan','con cặc'];
       $scope.addUser= function(){
        if($scope.myForm.$valid){

        }
         console.log($scope.user);
       }
})