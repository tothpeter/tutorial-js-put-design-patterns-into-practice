define(function(require) {
  'use strict';

  return {
    validate: function(value) {
      return value.indexOf('@') !== -1;
    }
  };
});
