Understanding Data Binding (one-way, two-way, one-time)

One-Way
    * Data flows from "Scope" to "View"
    * Scope Data
        > Gets propagated to View
        > Data Modifications: Propagated immediately and reflected in View
    * View Data
        > No propagation happens (back to scope) for any data change
    * Usually performed through "ng-bind" or evaluation expressions


Two-Way
    * Data flows from "Scope" to "View" and vice-versa
    * Scope Data
        > Gets propagated to View
        > Data Modifications: Propagated immediately and reflected in View
    * View Data
        > Gets propagated to Scope
        > Data Modifications: Propagated immediately and reflected in Scope
    * Usually performed through "ng-model"

One-Time 
    * Data flows from "Scope" to "View"
    * Scope data
        > Gets propagated to View (only once for the first time)
        > Data Modifications: No Propagation
    * View Data
        > No propagation happens (back to scope) for any data change
    * Usually performed through "::" as part of evaluation expressions