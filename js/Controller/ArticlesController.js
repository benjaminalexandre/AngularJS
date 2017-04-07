/**
 * Created by benja on 28/03/2017.
 */
(function () {
    var app = angular.module('my-app');

    app.controller("ArticlesController", ["$scope", "$http","$routeParams", function ($scope, $http,$routeParams) {
        var articleId = $routeParams.articleId;

        $http.get('./json/articles.json').then(function (response) {
            $scope.article = response.data.articles;
            $scope.art=$scope.article[(articleId-1)];
        });

    }]);

    app.controller("LivresController", ["$scope", "$http","$routeParams", function ($scope, $http,$routeParams) {
        var livres = [];

        $http.get('./json/articles.json').then(function (response) {
            $scope.article = response.data.articles;
            for (var i=0; i<response.data.articles.length; i++){
                if(response.data.articles[i].type === "Livre"){
                    livres.push(response.data.articles[i]);
                }
            }
            $scope.articles=livres;
        });

    }]);
    app.controller("FilmsController", ["$scope", "$http","$routeParams", function ($scope, $http,$routeParams) {
        var films = [];

        $http.get('./json/articles.json').then(function (response) {
            $scope.article = response.data.articles;
            for (var i=0; i<response.data.articles.length; i++){
                if(response.data.articles[i].type === "Film"){
                    films.push(response.data.articles[i]);
                }
            }
            $scope.articles=films;
        });

    }]);


})();
