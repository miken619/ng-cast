angular.module('video-player')

.controller('videoPlayerCtrl', function($scope) {
  $scope.video = window.exampleVideoData[0];  
})

.component('videoPlayer', {
  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
