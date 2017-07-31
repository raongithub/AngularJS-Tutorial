Angular Digest Process
    * Digest Process
        > Responsible to walk-through entire watch list for modifications
            >> Also called "dirty-checking" (the process of checking the current values of scope variables with their previous values)
        > Exists modifications: Execute Watch Listeners, if any.
        > Keeps note of all modifications and notifies AngularJS framework to update DOM
    * In general, DOM gets updated after Digest Process.
    * Digest Process runs as part of Angular Context.
        > Angular Context: run-time env of AngularJS framework