Angular Process - High Level Overview
    * Angular JS is included and executed.
    * Angular Module gets created (if added).
    * Finds "templates".
        > Template - HTML with some angular markup
            >> "ng-*" attributes (directives)
            >> Evaluating expressions
            >> Data-Binding markup etc
    * Process template.
        > Compiles template (for errors)
        > Loads template (instance) in memory
        > Transforms template with data
            >> Data Binding
            >> Evaluation of expressions
    * Renders to DOM tree (View).

AngularJS Controllers
    * Controllers are JavaScript objects which contain application logic.
        > Usually defined as part of angular module
    * Allows us to send/receive data between DOM (say Views) and application logic.
    * Usually attached to a DOM element using "ng-controller" attribute (directive).
        > Gets Instantiated
    * In other words, exposes data (Model) to be consumed by Views (one-way Data Binding).
        > Also send takes data from Views (two-way Data Binding)                