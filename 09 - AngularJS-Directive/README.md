AngularJS : ng-if, ng-repeat, ng-show, ng-hide and Bootstrap CSS framework integration

"ng-if" directive
    * Used to make a DOM element rendered or removed based on a condition.
    * Completely removed from DOM (and not just show/hide using CSS).
        > All related events/subscriptions will also be removed
    * Creates a scope for itself.
    * Evaluates expression based on the scope.

"ng-show" and "ng-hide" directive
    * Shows or hides a DOM element based on a condition.
    * Not removed from DOM (and not just show/hide using CSS).
        > Shows/hides using CSS
        > All related events/subscriptions will be still maintained.
    * No scope created for itself.
    * ng-hide.
        > Similar to "ng-show"
        > Hides if condition evaluates to true

"ng-repeat" directive
    * Kind of a loop which iterates through all items in a collection (in scope).
    * Instantiates "ng-repeat" template (item) for every iteration (of object in the collection).
        > Binds the instantiated template (item) with the current "object" (of iteration)
    *   Creates a scope for each instantiated template (item).
    * Evaluates expression of template based on the current "item" scope.