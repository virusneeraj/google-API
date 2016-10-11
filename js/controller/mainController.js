/**
 * Created by Java-Developer on 11-Oct-16.
 */
angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])

    .controller('AppCtrl', function($scope, $http) {
        $scope.project = {
            description: 'Google API services',
            rate: 500
        };

        $scope.apiFunc = function(add){
            var URL = "https://maps.googleapis.com/maps/api/geocode/json?address="+add;
                        $http({
                            method : "GET",
                            url : URL
                        }).then(function mySucces(response) {
                            //var responseData = response.data;

                            $scope.responseData = response.data;
                            console.log("responsedata",$scope.responseData);

                        }, function myError(response) {
                            $scope.responseData = response.statusText;
                        });
        }

    });

