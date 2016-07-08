angular.module("myApp", []).controller('myCtrl', function ($scope) {
    $scope.name1 = "John";
    $scope.name2 = "Doe";
    // 成员方法是不会自动执行的，只有在页面中调用时才执行，所以必须声明并加入到作用域中
    $scope.fullName = function () {
        //return $scope.name1 + " " + $scope.name2;
        return myMethod() + "2222";
    }
    // 控制器内调用方法，会在加载js是执行
    myMethod();
    // 这种方式声明的方法，没有加入到作用域中，只能在控制器中被调用
    function myMethod() {
        $scope.name1 = "name changed!";
        return $scope.name1;
    }
});