angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    ontitleclick: '<'
  },
  
  templateUrl: 'src/templates/videoListEntry.html'
});
