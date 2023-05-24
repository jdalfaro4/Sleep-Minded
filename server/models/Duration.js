const { Schema, DataTypes, model } = require("mongoose");

const durationSchema = new Schema({
  sleepHours: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Duration = model("Duration", durationSchema);

module.exports = Duration;
