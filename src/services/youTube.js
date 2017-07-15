angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.getYoutube = function(query, cb) {
    $http.get (
      'https://www.googleapis.com/youtube/v3/search', {params: {     
        part: 'snippet',
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        maxResults: '5',
        q: query,    
      }}).then(function successCallback(response) {       
        cb(response.data.items);
      }, function errorCallBack(response) {
        console.log('errorCallBack', response);

      });

  };
});
