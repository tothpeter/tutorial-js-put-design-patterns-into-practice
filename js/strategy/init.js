define(function(require) {
  'use strict';

  return {
    init: function() {
      var validatorClass = require('strategy/strategy'),
          validator = new validatorClass,
          telValidator = require('strategy/telValidator'),
          emailValidator = require('strategy/emailValidator');

      validator.selectValidator(emailValidator);
      console.log(validator.validate('asdasd.ad'));
    }
  };
});
