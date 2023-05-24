
const { SleepInstance, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    quality: async () => {
      return SleepInstance.find({});
    },
    duration: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return SleepInstance.find(params);
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "duration",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      console.log(email, password);
      const user = await User.create({ email, password });
      const token = signToken(user);
      return { user };

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

    createDuration: async (_parent, args) => {
console.log(args);
      const duration = await SleepInstance.create(args);
      return duration;
    },
    createQuality: async (_parent, args) => {
      console.log(args);
            const quality = await SleepInstance.create(args);
            return quality;
          },
  },
};

module.exports = resolvers;
