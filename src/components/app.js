angular.module('video-player')

.controller('appCtrl', function($scope) {
  $scope.videos = window.exampleVideoData;  
  $scope.video = window.exampleVideoData[0];
  $scope.input = '';  
  $scope.onClick = function() {

  };
  $scope.result = function() {

  };
})

.component('app', {
  
  // TODO
  
  templateUrl: 'src/templates/app.html'
});
