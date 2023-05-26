const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

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
    default: () => Date.now()
  },
});

const SleepInstance = model("SleepInstance", sleepInstanceSchema);

module.exports = SleepInstance;
