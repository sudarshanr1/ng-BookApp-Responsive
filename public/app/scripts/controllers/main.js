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
	/*	$scope.welcomeMessage = "The book read by you is";
		$scope.messageContent = "<div>Book:"+$scope.book.name+"</div><div>Title:"+$scope.book.title+"</div><div>Author:"+$scope.book.author+"</div><div>Publication:"+$scope.book.publication+"</div>";*/
	});

	$scope.closeWelcome = function(){
		$scope.showWelcome = false;
	}

	$scope.validateDuplicate = function(title){
		var found = false;
		for(var i=0;i<$scope.books.length;i++){
			if($scope.books[i].title === title){
				found = true;
			}
		}
		return found;
	}
  });
