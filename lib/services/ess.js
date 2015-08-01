var AWS = require('../core');

AWS.util.update(AWS.ESS.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('extractData', AWS.util.hoistPayloadMember);
  }

});
