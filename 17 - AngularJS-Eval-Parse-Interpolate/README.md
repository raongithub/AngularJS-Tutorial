Angular $eval $parse $interpolate

* $eval
    > $eval can only work with the current scope
    > use ($scope.$eval) to make $eval work + the expression should be provided in the form of a string ( "num1 * num2" ))

* $parse
    > $parse return a function ie. a template function
    > $parse does not work on the $scope or any context or any data
    > $parse evaluates teh particular expression and gives back a function that can be used against $scope (like this, $scope) which gives
      a result that can be stored in a variable
    > The returned function can be applied any number of times to any object doesn't need to be a $scope
    > $parse should be injected in order to use
    
* $interpolate
    > $interpolate translates and evaluates all the "Angular Expressions" found inside the string
    > This "Angular Expressions" is automatically executed or evaluated by $parse and then the results will be return back to $interpolate
    > $interpolate also return a function and that function can be executed by any of the $scope
    > $interpolate are like strings
    > When using $interpolate we need to provide an expression because $interpolate treats expression as string
    > We can use the expression which is used in the "View" in "$interpolate". For ex. $interpolate("Result = {{ num1 * num2 }}");
    > $interpolate should be injected in order to use
    > $interpolate works with $parse