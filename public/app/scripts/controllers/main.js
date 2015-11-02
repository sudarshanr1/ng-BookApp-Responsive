'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('MainCtrl', function ($scope,$uibModal) {
    $scope.welcomeMessage = "Welcome Back";
    $scope.messageContent = "It's been a while <br>Did you read a book recently?";
    $scope.books = [];
    $scope.error = false;
    $scope.showWelcome = true;
    var modalInstance;
    /*Method to open the dialog modal*/
    $scope.open = function (size) {
		  modalInstance= $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: '../views/modal/myModalContent.html',
	      controller:'Modalcontroller',
	      size: size,
	      scope:$scope,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });
	}
	/*Updates the controller scope if new book is added*/
	$scope.$on('book', function(event, book) {
		$scope.book = book;
		if(book !== undefined && book!==null){
			if($scope.validateDuplicate(book.title)){
				$scope.error = true;
				$scope.errorMessage = "Duplicate book with the title found";
				return false;
			}
			$scope.books.push(book);
		}
	});

	$scope.closeWelcome = function(){
		$scope.showWelcome = false;
	}
	/*
		Validates the book if duplicate title is added
	*/
	$scope.validateDuplicate = function(title){
		var found = false;
		for(var i=0;i<$scope.books.length;i++){
			if($scope.books[i].title.toUpperCase() === title.toUpperCase()){
				found = true;
			}
		}
		return found;
	}
  });
