const { MSG_ADDED } = require('./constants');
const pubsub = require('../pubsub');

module.exports = {
  messageAdded: {
    subscribe: () => pubsub.asyncIterator([MSG_ADDED]),
  },
};
