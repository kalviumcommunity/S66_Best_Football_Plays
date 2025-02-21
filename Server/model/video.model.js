const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    // player: { type: String, required: true }, // Could be a reference to a user or a separate player model
    // game: { type: String, required: true }, // Information about the match
    // date: { type: Date, required: true },
    // duration: { type: Number, required: true } // Duration in seconds
});

const videoModel = mongoose.model("video", videoSchema);

module.exports = {videoModel}