
const { Schema, DataTypes, model } = require('mongoose');

const durationSchema = new Schema({
    sleepHours: {
        type: Number,
        required: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
});

const Duration = model('Duration', durationSchema);

module.exports = Duration;
