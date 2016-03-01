define(function(require) {
  'use strict';

  var pubSub = require('pubsub/pubsub');

  return {
    publishEvent() {
      pubSub.publish('atopic', {prop1: 1});
    }
  };
});
