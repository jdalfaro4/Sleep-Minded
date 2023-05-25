const { AuthenticationError } = require("apollo-server-express");
const { SleepInstance, User } = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('sleepHours, quality');
    },
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('sleepHours, quality');
    },
    // SleepInstances: async (parent, { User }) => {
    //   const params = User ? { User } : {};
    //   return SleepInstance.find(params).sort({ createdAt: -1 });
    // },

    sleepInstance: async (parent, { sleepInstanceId }) => {
      return SleepInstance.findOne({ _id: sleepInstanceId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('sleepInstance');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {

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

    addSleepInstance: async (parent, { quality, sleepHours }) => {
      if (context.user) {
      const sleepInstance = await sleepInstance.create({
        sleepHours,
        sleepHours: context.user.user,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { sleepInstance: sleepInstance._id } }
      );

      return SleepInstance;
    }
    throw new AuthenticationError('You need to be logged in!');

      // console.log(quality, sleepHours);
      // const newSleep = await ;
      // console.log(newSleep)


    },


  },
};
    module.exports = resolvers;





// createSleepInstance: async (_parent, {quality, sleepHours}) => {

//   const duration = await SleepInstance.create(sleepHours);
//       return duration;
// }

// const sleepQuality = await SleepInstance.create(quality);
//             return quality;
// }
//           },
//   };






// const { SleepInstance, User } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require('../utils/auth');

// const resolvers = {
//   Query: {
//     user: async (parent, args, context) => {
//       if (context.user) {
//         const user = await User.findById(context.user._id).populate({
//           populate: "duration",
//         });

//         return user;
//       }

//       throw new AuthenticationError("Not logged in");
//     },
//   },

//   Mutation: {
//     addUser: async (parent, { email, password }) => {

//       const user = await User.create({ email, password });
//       const token = signToken(user);
//       return { user };

//     },
//     login: async (parent, {email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('No user found with this email address');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);

//       return { token, user };
//     },

//     CreateSleepInstance: async (parent, { quality, sleepHours }) => {
//       // console.log(quality, sleepHours);
//       // const newSleep = await ;
//       // console.log(newSleep)
//       return SleepInstance.create({ quality, sleepHours })
//         ;
//     }


//   }
//     }





// // createSleepInstance: async (_parent, {quality, sleepHours}) => {

// //   const duration = await SleepInstance.create(sleepHours);
// //       return duration;
// // }

// // const sleepQuality = await SleepInstance.create(quality);
// //             return quality;
// // }
// //           },
// //   };


// module.exports = resolvers;
