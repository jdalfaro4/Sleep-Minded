const { Schema, DataTypes, model } = require("mongoose");

const sleepInstanceSchema = new Schema({
  quality: {
    type: Number,
    required: true,
    unique: false,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  sleepHours: {
    type: Number,
    required: true,
  },

sleepDate: {
    type: Date,
    default: Date.now
  },
});

const SleepInstance = model("SleepInstance", sleepInstanceSchema);

module.exports = SleepInstance;
