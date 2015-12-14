'use strict';

/* App Module */

angular
        .module('blackBook', [
          'ngRoute',
        ])
        .config(function($routeProvider) {
          $routeProvider
            .when('/contact', {
              controller: 'contactController',
              templateUrl: 'partials/contact.html',
            })
            .when('/add-contact', {
              controller: 'addContactController',
              templateUrl: 'partials/add-contact.html',
            })
            .when('/notFound', {
              templateUrl: 'partials/not-found.html',
            })
            .otherwise('/notFound');
        })
