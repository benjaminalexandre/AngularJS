/**
 * Created by benja on 21/03/2017.
 */

(function () {
    var app = angular.module('my-app');
    app.directive('article', function(){
        return{
            restrict:'E',
            templateUrl: "./templates/articles.html",
            scope: {
                art: "="
            },
            controller: ["$scope", function($scope){

            }]
        };
    });

    app.directive('detail', function(){
        return{
            restrict:'E',
            templateUrl:"./templates/details.html",
            scope: {
                art: "="
            },
            controller: ["$scope", function($scope){
                $scope.isAfficheCom = false;
                $scope.isAfficheCara = false;
                $scope.tmpComm=[{message:'',author:''}];

                $scope.createComm = function(){
                    $scope.art.comments.push({message: $scope.tmpComm.message, date: new Date(), author: $scope.tmpComm.author});
                    $scope.tmpComm=[{message:'',author:''}];
                };

                $scope.afficheCom = function(){
                    if($scope.isAfficheCom==false) {
                        $scope.isAfficheCom = true;
                        $scope.isAfficheCara = false;
                    }
                };
                $scope.afficheCara = function(){
                    if($scope.isAfficheCara==false) {
                        $scope.isAfficheCara = true;
                        $scope.isAfficheCom = false;
                    }
                };

                $scope.acheterArticle = function(){
                    $scope.art.isAcheter = true;
                    alert("Vous venez d'acheter "+$scope.art.name+" pour "+$scope.art.price+" euros!");
                };
            }]
        };
    });

})();