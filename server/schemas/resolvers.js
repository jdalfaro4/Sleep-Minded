const { quality, Duration } = require('../models');

const resolvers = {
  Query: {
    quality: async () => {
      return quality.find({});
    },
    duration: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Duration.find(params);
    },
  },
  Mutation: {
    createDuration: async (parent, args) => {
      const Duration = await Duration.create(args);
      return Duration;
    }
  }
}

module.exports = resolvers;
