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