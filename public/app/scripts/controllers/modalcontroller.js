'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:ModalcontrollerCtrl
 * @description
 * # ModalcontrollerCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('Modalcontroller', function ($scope,$uibModalInstance) {
  	$scope.book = {};
    $scope.update = function () {
    	$scope.$emit('book', $scope.book);
		$uibModalInstance.close();
	};
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
  });
