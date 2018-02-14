var jetbrains = angular.module("jetbrains",[]);

jetbrains.controller("AppCtrl", function ($http) {
    var app=this;
    var url= "http://localhost:3000";

    app.saveProduct= function (newProduct) {
        $http.post(url+"/add" ,{name:newProduct}).then(function () {
            loadProducts();
        })
    }

    function loadProducts() {
        $http.get(url).then(function (products) {
                app.products = products.data;

            }
        )
    }




    loadProducts();

})