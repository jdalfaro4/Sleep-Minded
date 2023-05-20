const { Schema, DataTypes, model } = require('mongoose');

const qualitySchema = new Schema({
    quality: {
        type: Number,
        required: true,
        unique: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
});

const Quality = model('Quality', qualitySchema);

module.exports = Quality;
