const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const sleepInstanceSchema = new Schema({
  quality: {
    type: Number,
    required: true,
    unique: false,
  },
  sleepHours: {
    type: Number,
    required: true,
  },
  sleepDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
  },

  // user_id: {
  //   type: Schema.Types.ObjectId,
  //   ref: "user",
  // },
});

const SleepInstance = model("SleepInstance", sleepInstanceSchema);

module.exports = SleepInstance;
