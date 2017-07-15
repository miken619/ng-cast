angular.module('video-player')


.component('videoList', {
  bindings: {
    videos: '<',
    ontitleclick: '<',
    onClick: '<'
  },
  

  // TODO
  templateUrl: 'src/templates/videoList.html'
});
