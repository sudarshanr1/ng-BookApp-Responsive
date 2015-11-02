'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:HeadercontrollerCtrl
 * @description
 * # HeadercontrollerCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('HeadercontrollerCtrl', function ($scope) {
    $scope.iconMenu ='iconMenu';
    $scope.menuClicked = function(){
    	if($scope.iconMenu === 'iconMenu'){
    		$scope.iconMenu ='iconMenu-close';
    		angular.element('.topNavs').css('display','block');
    	}else{
    		$scope.iconMenu ='iconMenu';
    		angular.element('.topNavs').css('display','none');
    	}
    }
  });
