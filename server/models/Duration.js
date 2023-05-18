
const { Schema, model } = require('mongoose');

const durationSchema = new Schema({
    sleepHours: {
        type: Number,
        required: true,
    },

    sleepQuality: {
        type: Number,
        required: true,
    },
});

const Duration = model('Duration', durationSchema);

module.exports = Duration;
