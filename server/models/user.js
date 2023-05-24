const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const Order = require('./Order');

const userSchema = new Schema({
  // firstName: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  //   trim: true
  // },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
//   orders: [Order.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;



// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/.+@.+\..+/, 'Must match an email address!'],
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 5,
//     },
//     duration: {
//         type: Schema.Types.ObjectId,
//         ref: 'Duration'
//     },
//     quality: {
//         type: Schema.Types.ObjectId,
//         ref: 'Quality'
//     }
// });

// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

// const User = model('User', userSchema);

// module.exports = User;