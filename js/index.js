var app = angular.module("myApp", ["ngRoute"]);
        app.config(function ($routeProvider) {
        $routeProvider
        .when("/", {
        templateUrl: "home.html",
        controller: "homeController"
        })
        .when("/about", {
        templateUrl: "about.html",
        controller: "aboutController"
        })
        .when("/register", {
        templateUrl: "register.html",
        controller: "registerController"
        }) 
        .when("/phim", {
                templateUrl: "phim.html",
                controller: "phimController"
                }) 
        .when("/form", {
        templateUrl: "form.html",
        controller: "formController"
        })
        .when("/detail/:id", {
                templateUrl: "detail.html",
                controller: "detailController"
                })
        .when("/contact", {
        templateUrl: "contact.html",
        controller: "contactController"
        })
        .when("/param/:id", {
        templateUrl: "param.html",
        controller: "paramController"
        })
        .when("/cart", {
                templateUrl: "cart.html",
                controller: "cartController"
                })
        .when("/login", {
                templateUrl: "login.html",
                controller: "loginController"
                }) 
        .when("/admin", {
                templateUrl: "admin.html",
                controller: "admincontroller"
                })
        .otherwise({
        template: "<h1>404</h1><p>Không tìm thấy trang</p>"
        });
        ;
        });