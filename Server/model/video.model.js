const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',  // Should match your User model name
        required: true
    }
});

const videoModel = mongoose.model("video", videoSchema);

module.exports = { videoModel };
