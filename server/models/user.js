
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  user: {
      type: String,
      required: false,
      unique: true,
      trim: true,
    },
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
  sleepInstance: [
    {
      type: Number,
      ref: 'user',
    },
  ],
});
// set up pre-save middleware to generate username
userSchema.pre('save', function (next) {
  if (!this.user) {
    const prefix = 'user';
    const uniqueId = Date.now();
    this.user = `${prefix}_${uniqueId}`;
  }
  next();
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

const User = model('User', userSchema);


module.exports = User;

