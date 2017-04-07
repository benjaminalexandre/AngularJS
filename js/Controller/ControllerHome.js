/**
 * Created by benja on 28/03/2017.
 */
(function () {
    var app = angular.module('my-app');

    app.controller('StoreControlleur', ["$scope", "$http", function ($scope, $http) {

        $http.get('./json/articles.json').then(function (response) {
            $scope.articles = response.data.articles;

        });

    }]);
})();
