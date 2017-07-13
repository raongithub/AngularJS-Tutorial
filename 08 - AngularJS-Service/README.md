Angular Services

    * Sevice is aspecial unit of code which can be used across different controllers.
    * Services can be utilities or Business Logic units.
    * Service is a singleton.
        > Instantiated only once
        > Same instance is maintained throughout the life time of application
    * Services are loaded & instantiated lazily.
        > Only when a controller (referring the respective service) is instantiated
    * We can have multiple Services used by multiple Controllers.
    * Services can work with other services too.

Types of Services

    * Built-in Services
        > Part of Angular framework
        > Example: $http, $log, $location etc.
    * Custom Services (Business Services)
        > Developed by us
        > Could be extensions to built-in services
        > Could be business (logic) services

Three ways to Develop Custom Services

    * Factory
    * Service
    * Provider    
