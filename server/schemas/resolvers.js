const { Quality, Duration, User } = require('../models');
const { AuthenticationError } = require ('apollo-server-express')
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    quality: async () => {
      return Quality.find({});
    },
    duration: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Duration.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, { email , password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, {email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    createDuration: async (parent, args) => {
      const duration = await Duration.create(args);
      return duration;
    }
  }
}

module.exports = resolvers;
