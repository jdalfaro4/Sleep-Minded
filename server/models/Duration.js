
const { Schema, model } = require('mongoose');

const durationSchema = new Schema({
    sleepHours: {
        type: Integer,
        required: true,
    },

    sleepQuality: {
        type: Integer,
        required: true,
    },
});

const Duration = model('Duration', durationSchema);

module.exports = Duration;
