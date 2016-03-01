define(function() {
  'use strict';

  var subscribers = {};

  return {
    publish: function(topic, data) {
      if (!subscribers[topic]) {
        return;
      }

      subscribers[topic].forEach(function(subsciberCallback) {
        subsciberCallback(data);
      });
    },

    subscribe: function(topic, callback) {
      if (!subscribers[topic]) {
        subscribers[topic] = []
      }

      var subscriptionIndex = subscribers[topic].push(callback) - 1;

      return {
        dispose: function() {
          subscribers[topic].splice(subscriptionIndex, 1);
        }
      };
    }
  };
});
