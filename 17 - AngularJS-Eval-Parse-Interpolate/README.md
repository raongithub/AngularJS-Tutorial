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