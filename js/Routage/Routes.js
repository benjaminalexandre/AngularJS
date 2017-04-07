/**
 * Created by benja on 28/03/2017.
 */

(function () {
    var app = angular.module('my-app');

    app.config(["$routeProvider","$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                controller: "StoreControlleur",
                templateUrl: "./templates/tindex.html"
            })
            .when('/articles/:articleId', {  // monsite.com/#/articles/42
                controller: "ArticlesController",
                controllerAs: "articlesCtrl",
                templateUrl: "./templates/tarticle.html"
            })
            .when('/livres', {
                controller: "LivresController",
                templateUrl: "./templates/tlivres.html"
            })
            .when('/films', {
                controller: "FilmsController",
                templateUrl: "./templates/tfilms.html"
            })
            .otherwise({ redirectTo: '/home' });
        $locationProvider.hashPrefix('');
    }]);

})();