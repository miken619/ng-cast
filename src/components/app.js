angular.module('video-player')

.controller('appCtrl', function($scope, youTube) {
  $scope.$ctrl.videos = window.exampleVideoData;  
  $scope.$ctrl.currentVideo = window.exampleVideoData[0];
  $scope.input = '';  

  $scope.ontitleclick = function(video) {
    
    $scope.$ctrl.currentVideo = video;
  }.bind(this);

  $scope.result = function(input) {
    youTube.search(input, function(data) {
      $scope.$ctrl.selectVideo(data[0]);
      $scope.$ctrl.searchResults(data);
    });
  }.bind(this);

  

   
  $scope.$ctrl.selectVideo = function(video) {
    $scope.$ctrl.currentVideo = video;
  };
  $scope.$ctrl.searchResults = function(videos) {
    $scope.$ctrl.videos = videos;  
  };

  youTube.search('ham and cheese', function(data) {
    $scope.$ctrl.selectVideo(data[0]);
    $scope.$ctrl.searchResults(data);
  });
})

.component('app', { 
  // TODO
 
  
  templateUrl: 'src/templates/app.html'
});
