AngularJS Directives - Compile and Link

Compile
    * The first step of execution/processing a directive for rendering.
    * Loads and traverses the DOM (of template).
        > Compiles each of the directives collected thereafter (ex: nested directives)
    * Happens for both existing Angular Directives or Custom Directives.
    * "compile" function: executes code during compilation phase of a template.

Link
    * The next phase after Compile.
        > Carried out in various steps
    * Works on an instance of a Template (previously "compiled").
    * 3 internal phases of template instance (executed in sequence)
        > Controller (of directive)
        > Pre
        > Post (aka. "Link")
    * Gets rendered after Link phase

Compile & Link: The Process
    Compile
        * Loads & traverses Template DOM.
        * Executes only once.
        * Returns link function.
            > Or object (containing pre, post(or link) etc.)
        * No scope present.
        * No instances/clones (of template) created yet.
        * Do operations which can be shared among all instances/clones of template.
        * Can manipulate DOM of template.
        * Cannot play with data/events of clones.
        * No DOM of clones available.

    Linking process has got 3 steps:
        1. Controller
        2. Pre-Link
        3. Post-Link

        1. Controller
            * The first to execute for every instance/clone of template.
            * Creates scope (scope initialization) fir the template instance.
            * Can manipulate data for template instance.
            * Not recommended to access instance DOM.

        2. Pre-Link
            * Executes immediately after controller phase (for every instance).
            * Reference to DOM template instance is available.
            * Scope for the instance is ready.
            * Instance is not linked to scope yet (no bindings are setup).
            * Child elements/directives not ready.
            * Scope can be manipulated.
            * Safe to set data and even child data.
            * Not safe to manipulate DOM template instance.
            * No access to child elements.

        3. Post-Link
            * The last phase (of every instance), usually called "linking" (or link function etc.).
            * Reference to DOM template instance is available.
            * Scope and instance linked (and data bound).
            * Child elements/directives are ready (and already linked).
            * Scope can be manipulated.
            * Safe to attach event handlers, inspect child elements.
            * Safe to manipulate DOM template instance.
            * Not safe to set data for child elements.

Compile & Link: Nested Directives
    Step 1. Outer Directive (Parent) - Compile --> Inner Directive (Child) - Compile --> Inner most Directive (Child) - Compile
    Step 2. Outer Directive (Parent) - Controller --> Inner Directive (Child) - Controller --> Inner most Directive (Child) - Controller
    Step 3. Outer Directive (Parent) - Pre-Link --> Inner Directive (Child) - Pre-Link --> Inner most Directive (Child) - Pre-Link
    Step 4. Inner most Directive (Child) - Post-Link --> Inner Directive (Child) - Post-Link --> Outer Directive (Parent) - Post-Link
    Step 5. Render Phase starts finally.