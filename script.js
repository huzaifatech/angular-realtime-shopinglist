var app = angular.module('mod', [])
app.controller('ctr', function ($scope) {
    $scope.products = [
        { name: "OPPO A92", price: 39000, active: false },
        { name: "Samsung Galaxy A31", price: 41500, active: false },
        { name: "Infix Note7", price: 25999, active: false },
        { name: "Huawei Nova 7i", price: 45000, active: false },
        { name: "Techno Infinity", price: 32999, active: false },
        { name: "IPhone XI", price: 237699, active: false },
    ]
    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.products,function(p) {
            if(p.active==true){
                total= total+p.price;
            }
        })
        return total;
    };

    $scope.adtolist = function(p) {
        p.active = !p.active;
    }
})