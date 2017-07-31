Angular Apply & Digest
    * $apply, $digest
        > Used to kick-in digest process manually
        > Mainly used when the scope variables are modified out of "Angular Context" and/or UI needs to refresh it's data-bindings
        > Behind the scenes, $apply calls $digest
        > Usage: $scope.$apply (), $scope.$digest ()

    * $apply
        > Kicks digest process on "RootScope" always
            >> After evaluating RootScope, the process continues through all child scopes and nested scopes, one after another
        > Behind the scenes, ng-click, $timeout, $http (ajax) etc. operations call $apply

    * $digest
        > Kicks digest process for the current scope (and it's child/nested scopes) only
            >> Does not start from RootScope or ParentScope
            >> Could be called from RootScope also (equivalent to $appy)    