const { Schema, model } = require('mongoose');

const qualitySchema = new Schema({
    quality: {
        type: Integer,
        required: true,
        unique: true,
    },
});

const Quality = model('Quality', qualitySchema);

module.exports = Quality;
