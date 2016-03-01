define(function(require) {
  'use strict';

  return {
    init: function() {
      var myVideo, myImage,
          mediaFactory = require('factory/mediaFactory');

      myVideo = mediaFactory.createMedia('Video', {length: 3.5});
      myImage = mediaFactory.createMedia('Image', {width: 1025});

      console.log(myVideo);
      console.log(myImage);
    }
  };
});
