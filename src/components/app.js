angular.module('video-player')

.controller('appCtrl', function($scope) {
  $scope.$ctrl.videos = window.exampleVideoData;  
  $scope.$ctrl.currentVideo = window.exampleVideoData[0];
  //$scope.input = '';  

  $scope.ontitleclick = function(video) {
    
    $scope.$ctrl.currentVideo = video;
  }.bind(this);

  $scope.result = function() {

  };
   
  $scope.$ctrl.selectVideo = function() {

  };
  $scope.$ctrl.searchResults = function() {

  };
})

.component('app', { 
  // TODO
 
  
  templateUrl: 'src/templates/app.html'
});
