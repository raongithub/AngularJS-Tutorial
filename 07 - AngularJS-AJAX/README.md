AngularJS: AJAX using ASP.NET Web API & NodeJS

Introduction to AJAX
    * AJAX - Communication across browser and server without a full page response.
    * Usually achieved through JS.
    * User can still interact with UI, while the communication happens behind the scenes (Asynchronous).
        > Can show spinner while the communication is in progress
    * The AJAX response can be JSON or XML or Data (primitive values) or HTML.
    * If the response is HTML, we inject/replace the existing Elements/DOM with that of the response.
    * If the response is JSON/XML/Data, we parse the response and place the data/values in respective parts of HTML (including INPUT elements).

CORS - Cross-Origin Resource Sharing

AJAX using AngularJS
    * The ways to communicate to Server (from AngularJS)
        > $http (build-in Angular service)
        > jQuery ajax (using $.ajax, $.get, $.post etc.)
        > Any JS library which supports AJAX (or build on your own)
    * Server (or web/REST service)
        > Could be a web service developed using any server-side technology
            >> Example: NodeJS, ASP.NET Web API, WCF REST etc.
        > Usually returns JSON/XML

$http - Angular Service

$http ({
    // Options to connect to server
    // URL
    // Method (GET, POST etc.)
    // Headers etc.
    .
    .
    .
})
.then ( 
        function (response) {
            // Success callback function
            // Gets executed when AJAX call is successful
            // Contains AJAX success response (as parameter)
            .
            .
        },
        function (response) {
            // Failure callback function
            // Gets executed when AJAX call is unsuccessful
            // Contains AJAX failure response (as parameter)
            .
            .
        }
);
