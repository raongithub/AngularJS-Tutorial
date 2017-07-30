var app = angular.module("app", []);

app.controller("FirstController", ["$scope", function ($scope) {
    $scope.empObject = [
        { emp_num: "1001", emp_name : "John" },
        { emp_num: "1002", emp_name : "Dave" },
        { emp_num: "1003", emp_name : "Jack" },
        { emp_num: "1004", emp_name : "Rack" }
    ];

    $scope.addEmpObject = function () {
        var new_emp_num = 1000 + $scope.empObject.length + 1;
        var new_emp_name = "emp_name" + new_emp_num;

        $scope.empObject.push(
            {
                emp_num: new_emp_num,
                emp_name: new_emp_name
            }
        );

        $scope.modifyThirdEmployeeDetails = function () {
            $scope.empObject[2].emp_name = "Thomas";
        };
        
        // // Following would not work (watches on reference but not on collections/properties)
        // $scope.$watch("empObject", function ( newValue, oldValue ) {
        //     console.log("Number of Employees: " + $scope.empObject.length);
        // });

        // Following would work (watches on collection modifications, but not on properties)
        // collection level only, not deep into objects
        // $scope.$watchCollection("empObject", function ( newValue, oldValue ) {
        //     console.log("Number of Employees: " + $scope.empObject.length);
        // });

        // Following would work on everything
        // deep watch
        // $scope.$watch("empObject", function ( newValue, oldValue ) {
        //     console.log("Number of Employees: " + $scope.empObject.length);
        // }, true);
    };

    // modifyThirdEmployeeDetails function 
    // $scope.modifyThirdEmployeeDetails = function () {
    //     for (i =0; i < $scope.empObject.length; i++) {
    //         if ( $scope.empObject[i].emp_name === "Jack") {
    //             $scope.empObject[i].emp_name = "Thomas";
    //         }
    //     }
    // };
}]);