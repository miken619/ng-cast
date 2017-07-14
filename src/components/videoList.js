angular.module('video-player')

.controller('videoListCtrl', function($scope) {
  $scope.videos = window.exampleVideoData;  
  
  $scope.onClick = function() {

  };
})

.component('videoList', {
  bindings: {
    videos: '<',
    onClick: '<'
  },
  

  // TODO
  templateUrl: 'src/templates/videoList.html'
});
